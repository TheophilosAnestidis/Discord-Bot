import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';

const activityInstances = new Map();
const activitySessions = new Map();

const MAX_PLAYERS = 12;
const ROUND_MS = 10000;
const QUESTIONS = [
  { q: 'What is the capital of Greece?', a: ['Athens', 'Rome', 'Madrid', 'Lisbon'], c: 0 },
  { q: 'Which language runs natively in a web browser?', a: ['Python', 'JavaScript', 'C++', 'Java'], c: 1 },
  { q: 'What does HTTP stand for?', a: ['HyperText Transfer Protocol', 'High Transfer Text Process', 'Hyperlink Transfer Type Protocol', 'Host Transfer Text Protocol'], c: 0 },
  { q: 'Which planet is known as the Red Planet?', a: ['Venus', 'Mars', 'Jupiter', 'Mercury'], c: 1 },
  { q: 'How many bits are in one byte?', a: ['4', '8', '16', '32'], c: 1 },
  { q: 'Which company created Discord?', a: ['Discord Inc.', 'Valve', 'Epic Games', 'Mozilla'], c: 0 },
  { q: 'What does CSS mainly control?', a: ['Database storage', 'Page styling', 'Server hosting', 'File compression'], c: 1 },
  { q: 'Which symbol starts a JavaScript single-line comment?', a: ['//', '#', '<!--', '/*'], c: 0 },
  { q: 'Which database is used by the VaultX bot?', a: ['SQLite', 'MongoDB only', 'Redis only', 'MySQL only'], c: 0 },
  { q: 'What is 12 × 12?', a: ['124', '132', '144', '156'], c: 2 }
];

function getInstance(instanceId) {
  if (!activityInstances.has(instanceId)) {
    activityInstances.set(instanceId, {
      instanceId,
      players: new Map(),
      phase: 'lobby',
      round: 0,
      deadline: 0,
      answers: new Map(),
      lastWinner: null,
      createdAt: Date.now()
    });
  }
  return activityInstances.get(instanceId);
}

function sanitizeUser(user) {
  return {
    id: String(user.id),
    username: user.global_name || user.username || 'Player',
    avatar: user.avatar || null
  };
}

function serialize(instance) {
  const question = QUESTIONS[instance.round] || QUESTIONS[0];
  return {
    phase: instance.phase,
    round: instance.round,
    totalRounds: QUESTIONS.length,
    deadline: instance.deadline,
    question: instance.phase === 'playing' ? { q: question.q, a: question.a } : null,
    players: [...instance.players.values()].map(player => ({
      ...player.user,
      score: player.score,
      host: Boolean(player.host),
      answered: instance.answers.has(player.user.id)
    })),
    lastWinner: instance.lastWinner,
    serverTime: Date.now()
  };
}

async function discordUser(accessToken) {
  const response = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (!response.ok) throw new Error('Discord authentication failed.');
  return response.json();
}

function requireSession(request) {
  const header = request.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) throw new Error('Missing activity session.');
  const session = activitySessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    activitySessions.delete(token);
    throw new Error('Activity session expired.');
  }
  return session;
}

function jsonError(response, status, message) {
  return response.status(status).json({ ok: false, error: message });
}

export function registerActivityRoutes(app) {
  app.get('/activity-config.js', (_request, response) => {
    response.type('application/javascript').send(
      `window.VAULTX_ACTIVITY_CONFIG=${JSON.stringify({ clientId: process.env.CLIENT_ID || '' })};`
    );
  });

  app.post('/api/activity/token', async (request, response) => {
    try {
      const code = request.body?.code;
      if (!code) return jsonError(response, 400, 'Authorization code is required.');
      if (!process.env.CLIENT_ID || !process.env.DISCORD_CLIENT_SECRET) {
        return jsonError(response, 500, 'Activity OAuth is not configured.');
      }

      // Discord Activities handle the redirect internally. The Embedded App SDK
      // returns the authorization code to the Activity, which we exchange here.
      // Keep the client secret server-side only.
      const body = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code
      });

      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      if (!tokenResponse.ok) return jsonError(response, 401, 'Discord authorization failed.');

      const tokenData = await tokenResponse.json();
      const user = await discordUser(tokenData.access_token);
      const sessionToken = crypto.randomBytes(32).toString('hex');
      activitySessions.set(sessionToken, {
        user: sanitizeUser(user),
        discordAccessToken: tokenData.access_token,
        expiresAt: Date.now() + Math.min((tokenData.expires_in || 3600) * 1000, 60 * 60 * 1000)
      });

      return response.json({ ok: true, sessionToken, accessToken: tokenData.access_token, user: sanitizeUser(user) });
    } catch (error) {
      console.error('Activity OAuth error:', error.message);
      return jsonError(response, 500, error.message || 'Activity authentication failed.');
    }
  });

  // Discord's Activity proxy uses the /.proxy prefix. Strip that prefix so
  // the same Express handlers work both locally and inside Discord.
  app.use((request, _response, next) => {
    if (request.url.startsWith('/.proxy/api/activity')) {
      request.url = request.url.slice('/.proxy'.length);
    }
    next();
  });

  app.get('/api/activity/state', (request, response) => {
    try {
      const session = requireSession(request);
      const instanceId = String(request.query.instanceId || '');
      if (!instanceId) return jsonError(response, 400, 'instanceId is required.');
      const instance = getInstance(instanceId);
      if (!instance.players.has(session.user.id)) {
        instance.players.set(session.user.id, { user: session.user, score: 0, joinedAt: Date.now(), host: instance.players.size === 0 });
      }
      return response.json({ ok: true, self: session.user, state: serialize(instance) });
    } catch (error) {
      return jsonError(response, 401, error.message);
    }
  });

  app.post('/api/activity/action', (request, response) => {
    try {
      const session = requireSession(request);
      const { instanceId, action, answer } = request.body || {};
      if (!instanceId) return jsonError(response, 400, 'instanceId is required.');
      const instance = getInstance(String(instanceId));
      const userId = session.user.id;
      if (!instance.players.has(userId)) {
        if (instance.players.size >= MAX_PLAYERS) return jsonError(response, 409, `Lobby is full (${MAX_PLAYERS} players).`);
        instance.players.set(userId, { user: session.user, score: 0, joinedAt: Date.now(), host: instance.players.size === 0 });
      }

      if (action === 'start') {
        if (instance.phase === 'playing') return response.json({ ok: true, state: serialize(instance) });
        if (instance.phase === 'finished') {
          for (const player of instance.players.values()) player.score = 0;
        }
        if (instance.players.size < 2) return jsonError(response, 400, 'At least 2 players are required.');
        if (!instance.players.get(userId)?.host) return jsonError(response, 403, 'Only the lobby host can start the battle.');
        instance.phase = 'playing';
        instance.round = 0;
        instance.answers = new Map();
        instance.lastWinner = null;
        instance.deadline = Date.now() + ROUND_MS;
      } else if (action === 'answer') {
        if (instance.phase !== 'playing') return jsonError(response, 400, 'The game is not running.');
        if (Date.now() > instance.deadline) return response.json({ ok: true, state: serialize(instance) });
        if (instance.answers.has(userId)) return response.json({ ok: true, state: serialize(instance) });
        const selected = Number(answer);
        const question = QUESTIONS[instance.round];
        if (![0, 1, 2, 3].includes(selected)) return jsonError(response, 400, 'Invalid answer.');
        instance.answers.set(userId, selected);
        if (selected === question.c) {
          const remaining = Math.max(0, instance.deadline - Date.now());
          instance.players.get(userId).score += 500 + Math.round(remaining / 20);
        }

        const everyoneAnswered = [...instance.players.keys()].every(id => instance.answers.has(id));
        if (everyoneAnswered || Date.now() >= instance.deadline) advanceRound(instance);
      } else if (action === 'leave') {
        const leaving = instance.players.get(userId);
        instance.players.delete(userId);
        instance.answers.delete(userId);
        if (leaving?.host && instance.players.size) {
          const next = [...instance.players.values()].sort((x, y) => x.joinedAt - y.joinedAt)[0];
          if (next) next.host = true;
        }
        if (!instance.players.size) activityInstances.delete(String(instanceId));
      }

      return response.json({ ok: true, state: serialize(instance) });
    } catch (error) {
      return jsonError(response, 401, error.message);
    }
  });
}

function advanceRound(instance) {
  const ranked = [...instance.players.values()].sort((a, b) => b.score - a.score);
  instance.lastWinner = ranked[0]?.user?.username || null;
  if (instance.round >= QUESTIONS.length - 1) {
    instance.phase = 'finished';
    instance.deadline = 0;
    return;
  }
  instance.round += 1;
  instance.answers = new Map();
  instance.deadline = Date.now() + ROUND_MS;
}

setInterval(() => {
  const now = Date.now();
  for (const [token, session] of activitySessions) if (session.expiresAt < now) activitySessions.delete(token);
  for (const [id, instance] of activityInstances) {
    if (instance.phase === 'playing' && now >= instance.deadline) advanceRound(instance);
    if (now - instance.createdAt > 6 * 60 * 60 * 1000) activityInstances.delete(id);
  }
}, 1000).unref();


export function startActivityServer() {
  // Activity runs on its own origin/port so it can be deployed independently.
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", 1);
  app.use(express.json({ limit: "32kb" }));

  const dist = path.resolve(process.cwd(), "activity", "dist");
  if (fs.existsSync(path.join(dist, "index.html"))) {
    app.use(express.static(dist, { index: "index.html", maxAge: "1h" }));
    app.get("*splat", (_req, res) => res.sendFile(path.join(dist, "index.html")));
  } else {
    app.get("/", (_req, res) =>
      res.status(503).send("VaultX Activity is not built. Run: npm run activity:install && npm run activity:build")
    );
  }

  registerActivityRoutes(app);

  const port = Number(process.env.ACTIVITY_PORT || 5173);
  const server = app.listen(port, () => {
    console.log(`🎮 VaultX Activity listening on http://localhost:${port}`);
  });
  return server;
}
