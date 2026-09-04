import { DiscordSDK } from 'https://cdn.jsdelivr.net/npm/@discord/embedded-app-sdk@2.5.0/+esm';
import './style.css';

const app = document.querySelector('#app');
let discordSdk;
let auth = null;
let sessionToken = null;
let state = null;
let self = null;
let instanceId = null;
let pollTimer = null;

const fallbackClientId =
  import.meta.env.VITE_DISCORD_CLIENT_ID ||
  window.VAULTX_ACTIVITY_CONFIG?.clientId ||
  '';

function render() {
  if (!state) {
    app.innerHTML = `<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Connecting…</h1><p id="status">Preparing your Discord session.</p></section></main>`;
    return;
  }

  const leaderboard = [...state.players].sort((a, b) => b.score - a.score);
  const selfPlayer = leaderboard.find(p => p.id === self?.id);
  const canStart = state.phase === 'lobby' && selfPlayer?.host && leaderboard.length >= 2;

  if (state.phase === 'finished') {
    app.innerHTML = `<main class="shell"><section class="panel result"><div class="brand">VAULT<span>X</span></div><div class="eyebrow">QUIZ BATTLE</div><h1>Game Over</h1><p class="muted">Final leaderboard</p>${leaderboard.map((p, i) => `<div class="rank"><span>#${i + 1}</span><strong>${escapeHtml(p.username)}</strong><b>${p.score}</b></div>`).join('')}<button id="restart" class="primary">Play Again</button></section></main>`;
    document.querySelector('#restart').onclick = () => action('start');
    return;
  }

  const seconds = state.deadline ? Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000)) : 0;
  app.innerHTML = `
    <main class="shell">
      <header class="topbar"><div><div class="brand">VAULT<span>X</span></div><div class="subtitle">QUIZ BATTLE</div></div><div class="round">${state.phase === 'playing' ? `ROUND ${state.round + 1} / ${state.totalRounds}` : `LOBBY • ${leaderboard.length}/12`}</div></header>
      <section class="game-grid">
        <div class="panel main-panel">
          ${state.phase === 'lobby' ? `
            <div class="hero"><div class="eyebrow">MULTIPLAYER</div><h1>Ready when you are.</h1><p>Invite your friends to the Activity and battle for the highest score.</p>
            <div class="lobby-note">${leaderboard.length < 2 ? 'Waiting for at least 2 players…' : (selfPlayer?.host ? 'You are the host. Start when everyone is ready.' : 'Waiting for the host to start the battle.')}</div>
            <button id="start" class="primary" ${canStart ? '' : 'disabled'}>${selfPlayer?.host ? 'Start Battle' : 'Waiting for Host'}</button></div>
          ` : `
            <div class="question-head"><span class="eyebrow">QUESTION ${state.round + 1}</span><span class="timer">${seconds}s</span></div>
            <h1 class="question">${escapeHtml(state.question.q)}</h1>
            <div class="answers">${state.question.a.map((answer, i) => `<button class="answer ${selfPlayer?.answered ? 'answered' : ''}" data-answer="${i}" ${selfPlayer?.answered ? 'disabled' : ''}><span>${String.fromCharCode(65 + i)}</span>${escapeHtml(answer)}</button>`).join('')}</div>
          `}
        </div>
        <aside class="panel sidebar"><div class="side-title">LEADERBOARD</div>${leaderboard.map((p, i) => `<div class="player ${p.id === self?.id ? 'me' : ''}"><div class="avatar">${escapeHtml((p.username?.[0] || '?').toUpperCase())}</div><div class="player-name"><strong>${escapeHtml(p.username)} ${p.host ? '<em>HOST</em>' : ''}</strong><small>${p.answered ? 'Answered' : 'Playing'}</small></div><b>${p.score}</b></div>`).join('') || '<p class="muted">No players yet.</p>'}</aside>
      </section>
    </main>`;

  document.querySelector('#start')?.addEventListener('click', () => action('start'));
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => action('answer', Number(button.dataset.answer))));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
}

function activityApiPath(pathname) {
  // In Discord the Activity proxy is the supported way to reach the backend.
  // The Express server also accepts the same path directly for local testing.
  return `/.proxy${pathname}`;
}

async function setupDiscord() {
  if (!fallbackClientId) {
    throw new Error(
      'Discord Activity CLIENT_ID is not configured. Check the root .env file and rebuild the Activity.'
    );
  }

  discordSdk = new DiscordSDK(fallbackClientId);

  await discordSdk.ready();

  instanceId = discordSdk.instanceId;

  const { code } = await discordSdk.commands.authorize({
    client_id: fallbackClientId,
    response_type: 'code',
    state: '',
    prompt: 'none',
    scope: ['identify']
  });

  const tokenResponse = await fetch(activityApiPath('/api/activity/token'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ code })
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok) {
    throw new Error(
      tokenData.error || 'Activity authorization failed.'
    );
  }

  sessionToken = tokenData.sessionToken;
  self = tokenData.user;

  auth = await discordSdk.commands.authenticate({
    access_token: tokenData.accessToken
  });

  if (!auth) {
    throw new Error('Discord authentication command failed. Relaunch the Activity from Discord.');
  }

  await sync();

  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(sync, 700);
}

async function sync() {
  const response = await fetch(`${activityApiPath('/api/activity/state')}?instanceId=${encodeURIComponent(instanceId)}`, {
    headers: { Authorization: `Bearer ${sessionToken}` }
  });
  if (!response.ok) throw new Error((await response.json()).error || 'Could not load game state.');
  const data = await response.json();
  state = data.state;
  self = data.self;
  render();
}

async function action(type, answer) {
  const response = await fetch(activityApiPath('/api/activity/action'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionToken}` },
    body: JSON.stringify({ instanceId, action: type, answer })
  });
  const data = await response.json();
  if (!response.ok) return showError(data.error || 'Action failed.');
  state = data.state;
  render();
}

function showError(message) {
  const status = document.querySelector('#status');
  if (status) status.textContent = message;
  console.error(message);
}

render();
setupDiscord().catch(error => {
  console.error(error);
  app.innerHTML = `<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Activity unavailable</h1><p class="muted">${escapeHtml(error.message || 'Unknown error')}</p><p class="hint">Make sure the Activity URL and OAuth configuration are set in the Discord Developer Portal.</p></section></main>`;
});
