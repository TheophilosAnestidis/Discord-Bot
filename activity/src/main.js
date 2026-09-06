import { DiscordSDK } from '@discord/embedded-app-sdk';
import './style.css';

const app = document.querySelector('#app');
let discordSdk;
let auth = null;
let sessionToken = null;
let state = null;
let self = null;
let instanceId = null;
let pollTimer = null;
let currentMode = 'menu';
let shooterGame = null;
const shooterKeys = { up: false, down: false, left: false, right: false, fire: false };
const shooterPointer = { x: 430, y: 260, down: false };

const fallbackClientId =
  import.meta.env.VITE_DISCORD_CLIENT_ID ||
  window.VAULTX_ACTIVITY_CONFIG?.clientId ||
  '';

function render() {
  if (!state) {
    app.innerHTML = `<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Connecting…</h1><p id="status">Preparing your Discord session.</p></section></main>`;
    return;
  }

  if (currentMode === 'menu') {
    renderMenu();
    return;
  }

  if (currentMode === 'shooter') {
    renderShooter();
    return;
  }

  renderQuiz();
}

function renderMenu() {
  app.innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div>
          <div class="brand">VAULT<span>X</span></div>
          <div class="subtitle">ACTIVITY HUB</div>
        </div>
        <div class="round">2 MODES READY</div>
      </header>

      <section class="mode-grid">
        <article class="activity-card quiz-card">
          <div class="badge">MULTIPLAYER</div>
          <h1>Quiz Battle</h1>
          <p>Answer fast, stack points, and outscore your friends in the lobby.</p>
          <button class="primary" data-mode="quiz">Play Quiz</button>
        </article>

        <article class="activity-card shooter-card">
          <div class="badge">ARCADE</div>
          <h1>Gun Arena</h1>
          <p>Blast drones, dodge fire, and survive as long as you can.</p>
          <button class="primary" data-mode="shooter">Launch Game</button>
        </article>
      </section>
    </main>
  `;

  document.querySelectorAll('[data-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      currentMode = button.dataset.mode;
      if (currentMode === 'shooter') {
        stopShooterGame();
      }
      render();
    });
  });
}

function renderQuiz() {
  const leaderboard = [...state.players].sort((a, b) => b.score - a.score);
  const selfPlayer = leaderboard.find((p) => p.id === self?.id);
  const canStart = state.phase === 'lobby' && selfPlayer?.host && leaderboard.length >= 2;

  if (state.phase === 'finished') {
    app.innerHTML = `<main class="shell"><section class="panel result"><div class="brand">VAULT<span>X</span></div><div class="eyebrow">QUIZ BATTLE</div><h1>Game Over</h1><p class="muted">Final leaderboard</p>${leaderboard.map((p, i) => `<div class="rank"><span>#${i + 1}</span><strong>${escapeHtml(p.username)}</strong><b>${p.score}</b></div>`).join('')}<button id="restart" class="primary">Play Again</button><button class="secondary" data-mode="menu">Back to hub</button></section></main>`;
    document.querySelector('#restart').onclick = () => action('start');
    document.querySelector('[data-mode="menu"]').onclick = () => {
      currentMode = 'menu';
      render();
    };
    return;
  }

  const seconds = state.deadline ? Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000)) : 0;
  app.innerHTML = `
    <main class="shell">
      <header class="topbar"><div><div class="brand">VAULT<span>X</span></div><div class="subtitle">QUIZ BATTLE</div></div><div class="header-actions"><div class="round">${state.phase === 'playing' ? `ROUND ${state.round + 1} / ${state.totalRounds}` : `LOBBY • ${leaderboard.length}/12`}</div><button class="secondary" data-mode="menu">Hub</button></div></header>
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

  document.querySelector('[data-mode="menu"]').onclick = () => {
    currentMode = 'menu';
    render();
  };
  document.querySelector('#start')?.addEventListener('click', () => action('start'));
  document.querySelectorAll('[data-answer]').forEach((button) => {
    button.addEventListener('click', () => action('answer', Number(button.dataset.answer)));
  });
}

function renderShooter() {
  app.innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div>
          <div class="brand">VAULT<span>X</span></div>
          <div class="subtitle">CHAOS ARENA</div>
        </div>
        <div class="header-actions">
          <div class="round">OFFICE PANIC</div>
          <button class="secondary" data-mode="menu">Hub</button>
        </div>
      </header>
      <section class="shooter-panel">
        <canvas id="arenaCanvas" width="860" height="520"></canvas>
      </section>
    </main>
  `;

  document.querySelector('[data-mode="menu"]').onclick = () => {
    currentMode = 'menu';
    stopShooterGame();
    render();
  };

  const canvas = document.querySelector('#arenaCanvas');
  initShooterGame(canvas);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function activityApiPath(pathname) {
  return `/.proxy${pathname}`;
}

function setupShooterInput() {
  window.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space'].includes(event.code)) {
      event.preventDefault();
    }
    if (event.code === 'ArrowUp' || event.code === 'KeyW') shooterKeys.up = true;
    if (event.code === 'ArrowDown' || event.code === 'KeyS') shooterKeys.down = true;
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') shooterKeys.left = true;
    if (event.code === 'ArrowRight' || event.code === 'KeyD') shooterKeys.right = true;
    if (event.code === 'Space') shooterKeys.fire = true;
  });

  window.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowUp' || event.code === 'KeyW') shooterKeys.up = false;
    if (event.code === 'ArrowDown' || event.code === 'KeyS') shooterKeys.down = false;
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') shooterKeys.left = false;
    if (event.code === 'ArrowRight' || event.code === 'KeyD') shooterKeys.right = false;
    if (event.code === 'Space') shooterKeys.fire = false;
  });
}

function stopShooterGame() {
  if (shooterGame?.rafId) cancelAnimationFrame(shooterGame.rafId);
  shooterGame = null;
}

function initShooterGame(canvas) {
  if (!canvas) return;

  if (!window.__vaultxShooterListenersAttached) {
    setupShooterInput();
    window.__vaultxShooterListenersAttached = true;
  }

  const ctx = canvas.getContext('2d');
  const bestScore = Number(localStorage.getItem('vaultx-chaos-best') || '0');
  const chaosNames = ['Karen', 'Zoom Bot', 'Spam', 'CEO', 'Intern', 'Gamer', 'Panic', 'Meme'];
  const game = {
    canvas,
    ctx,
    bestScore,
    score: 0,
    health: 100,
    wave: 1,
    over: false,
    lastTime: 0,
    spawnTimer: 0,
    bullets: [],
    enemies: [],
    pickups: [],
    particles: [],
    shootCooldown: 0,
    message: 'The office is barely holding together.',
    player: {
      x: canvas.width / 2,
      y: canvas.height - 42,
      radius: 19,
      speed: 5,
      color: '#7af0ff'
    }
  };

  const pointerPosition = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    shooterPointer.x = x;
    shooterPointer.y = y;
  };

  canvas.addEventListener('mousemove', pointerPosition);
  canvas.addEventListener('mousedown', (event) => {
    pointerPosition(event);
    shooterPointer.down = true;
  });
  window.addEventListener('mouseup', () => {
    shooterPointer.down = false;
  });

  function reset() {
    game.score = 0;
    game.health = 100;
    game.wave = 1;
    game.over = false;
    game.message = 'The office is barely holding together.';
    game.spawnTimer = 0.8;
    game.bullets = [];
    game.enemies = [];
    game.pickups = [];
    game.particles = [];
    game.shootCooldown = 0;
    game.player.x = canvas.width / 2;
    game.player.y = canvas.height - 42;
  }

  function fireBullet() {
    if (game.over) return;
    const dirX = shooterPointer.x - game.player.x;
    const dirY = shooterPointer.y - game.player.y;
    const angle = Math.atan2(dirY, dirX) || -Math.PI / 2;
    const speed = 12;
    game.bullets.push({
      x: game.player.x + Math.cos(angle) * 18,
      y: game.player.y + Math.sin(angle) * 18,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 5,
      color: '#ffd166'
    });
  }

  function spawnEnemy() {
    const radius = 12 + Math.random() * 18;
    const x = 40 + Math.random() * (canvas.width - 80);
    const y = -radius - 20;
    const drift = (Math.random() - 0.5) * 2.2;
    const name = chaosNames[Math.floor(Math.random() * chaosNames.length)];
    const hue = 180 + Math.random() * 120;
    game.enemies.push({
      x,
      y,
      radius,
      drift,
      speed: 1 + Math.random() * 1.7 + game.wave * 0.15,
      shootCooldown: 1 + Math.random() * 1.5,
      color: `hsl(${hue}, 85%, 65%)`,
      name,
      hp: 1 + Math.floor((game.wave - 1) / 3)
    });
  }

  function spawnPickup() {
    const pick = ['☕', '🧁', '📎', '🧠', '💣'];
    game.pickups.push({
      x: 30 + Math.random() * (canvas.width - 60),
      y: -20,
      radius: 12,
      emoji: pick[Math.floor(Math.random() * pick.length)],
      vy: 2.4 + Math.random() * 1.2,
      kind: Math.random() > 0.55 ? 'boost' : 'heal'
    });
  }

  function createBurst(x, y, color, count = 10) {
    for (let i = 0; i < count; i += 1) {
      game.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        life: 18 + Math.random() * 20,
        radius: 2 + Math.random() * 4,
        color
      });
    }
  }

  function updateParticles() {
    for (const particle of game.particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 1;
    }
    game.particles = game.particles.filter((particle) => particle.life > 0);
  }

  function maybeChangeMessage() {
    const lines = [
      'The printer is on fire again.',
      'Someone brought a flaming burrito to the meeting.',
      'A rogue mascot is stealing snacks.',
      'Your boss is screaming in 4K.',
      'This is not a workplace incident. It is a lifestyle.',
      'The coffee machine has become a weapon.'
    ];
    if (Math.random() < 0.015) {
      game.message = lines[Math.floor(Math.random() * lines.length)];
    }
  }

  function update(delta) {
    const player = game.player;
    const moveX = (shooterKeys.right ? 1 : 0) - (shooterKeys.left ? 1 : 0);
    const moveY = (shooterKeys.down ? 1 : 0) - (shooterKeys.up ? 1 : 0);
    const length = Math.hypot(moveX, moveY) || 1;

    player.x += (moveX / length) * player.speed * delta;
    player.y += (moveY / length) * player.speed * delta;
    player.x = Math.max(player.radius, Math.min(canvas.width - player.radius, player.x));
    player.y = Math.max(player.radius + 20, Math.min(canvas.height - player.radius, player.y));

    game.shootCooldown = Math.max(0, game.shootCooldown - delta * 0.8);
    const firing = shooterPointer.down || shooterKeys.fire;
    if (firing && game.shootCooldown <= 0) {
      fireBullet();
      game.shootCooldown = 0.18;
    }

    if (game.over) {
      return;
    }

    maybeChangeMessage();
    game.spawnTimer -= delta / 60;
    if (game.spawnTimer <= 0) {
      spawnEnemy();
      if (Math.random() < 0.25) spawnPickup();
      game.spawnTimer = Math.max(0.38, 1.2 - game.wave * 0.08);
    }

    for (let i = game.bullets.length - 1; i >= 0; i -= 1) {
      const bullet = game.bullets[i];
      bullet.x += bullet.vx * delta;
      bullet.y += bullet.vy * delta;
      if (bullet.y < -20 || bullet.y > canvas.height + 20 || bullet.x < -20 || bullet.x > canvas.width + 20) {
        game.bullets.splice(i, 1);
      }
    }

    for (let i = game.enemies.length - 1; i >= 0; i -= 1) {
      const enemy = game.enemies[i];
      enemy.y += enemy.speed * delta;
      enemy.x += enemy.drift * delta;
      enemy.shootCooldown -= delta / 60;

      if (enemy.x < 18 || enemy.x > canvas.width - 18) enemy.drift *= -1;

      if (enemy.shootCooldown <= 0 && Math.random() < 0.9) {
        const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
        const bulletSpeed = 3 + game.wave * 0.2;
        const prank = { x: enemy.x, y: enemy.y, vx: Math.cos(angle) * bulletSpeed, vy: Math.sin(angle) * bulletSpeed, radius: 5, color: '#ff6b6b' };
        game.bullets.push({ ...prank, fromEnemy: true });
        enemy.shootCooldown = 1.1 + Math.random() * 1.7;
      }

      if (enemy.y > canvas.height + 24) {
        game.enemies.splice(i, 1);
        game.health = Math.max(0, game.health - 8);
        createBurst(enemy.x, enemy.y, '#ff7b72', 12);
        continue;
      }

      for (let b = game.bullets.length - 1; b >= 0; b -= 1) {
        const bullet = game.bullets[b];
        if (bullet.fromEnemy) continue;
        const dist = Math.hypot(enemy.x - bullet.x, enemy.y - bullet.y);
        if (dist <= enemy.radius + bullet.radius) {
          game.bullets.splice(b, 1);
          enemy.hp -= 1;
          createBurst(bullet.x, bullet.y, '#ffee8c', 8);
          if (enemy.hp <= 0) {
            game.enemies.splice(i, 1);
            game.score += 25 + game.wave * 5;
            createBurst(enemy.x, enemy.y, enemy.color, 15);
            if (Math.random() < 0.26) {
              game.pickups.push({ x: enemy.x, y: enemy.y, radius: 10, emoji: '✨', vy: 2.2, kind: 'boost' });
            }
          }
          break;
        }
      }
    }

    for (let i = game.bullets.length - 1; i >= 0; i -= 1) {
      const bullet = game.bullets[i];
      if (bullet.fromEnemy) {
        bullet.x += bullet.vx * delta;
        bullet.y += bullet.vy * delta;
        const dist = Math.hypot(player.x - bullet.x, player.y - bullet.y);
        if (dist <= player.radius + bullet.radius) {
          game.bullets.splice(i, 1);
          game.health = Math.max(0, game.health - 12);
          createBurst(bullet.x, bullet.y, '#ff5d7a', 12);
        }
      }
    }

    for (let i = game.pickups.length - 1; i >= 0; i -= 1) {
      const pickup = game.pickups[i];
      pickup.y += pickup.vy * delta;
      const dist = Math.hypot(player.x - pickup.x, player.y - pickup.y);
      if (dist <= player.radius + pickup.radius) {
        game.pickups.splice(i, 1);
        if (pickup.kind === 'heal') {
          game.health = Math.min(100, game.health + 18);
          game.message = 'Coffee rescue! You are alive for another minute.';
        } else {
          game.score += 50;
          game.message = 'Snack bonus! Chaos has a price.';
        }
        createBurst(pickup.x, pickup.y, '#9b6cff', 18);
        continue;
      }
      if (pickup.y > canvas.height + 20) game.pickups.splice(i, 1);
    }

    game.wave = 1 + Math.floor(game.score / 180);

    if (game.health <= 0) {
      game.over = true;
      game.bestScore = Math.max(game.bestScore, game.score);
      localStorage.setItem('vaultx-chaos-best', String(game.bestScore));
      game.message = 'The office won. Try again with more rage and snacks.';
    }

    updateParticles();
  }

  function drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#090c14');
    gradient.addColorStop(1, '#111725');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < canvas.width; x += 36) {
      ctx.strokeStyle = 'rgba(144, 184, 255, 0.12)';
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 36) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  function draw() {
    drawBackground();

    for (const pickup of game.pickups) {
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(pickup.emoji, pickup.x, pickup.y + 6);
    }

    for (const bullet of game.bullets) {
      if (bullet.fromEnemy) {
        ctx.fillStyle = '#ff6b6b';
      } else {
        ctx.fillStyle = '#ffd166';
      }
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const enemy of game.enemies) {
      ctx.fillStyle = enemy.color;
      ctx.beginPath();
      ctx.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f6f7fb';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(enemy.name, enemy.x, enemy.y + 4);
    }

    for (const particle of game.particles) {
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = Math.max(0, particle.life / 40);
      ctx.fillRect(particle.x, particle.y, particle.radius * 2, particle.radius * 2);
      ctx.globalAlpha = 1;
    }

    const player = game.player;
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.fillStyle = '#7af0ff';
    ctx.beginPath();
    ctx.moveTo(0, -18);
    ctx.lineTo(18, 16);
    ctx.lineTo(0, 8);
    ctx.lineTo(-18, 16);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    const angle = Math.atan2(shooterPointer.y - player.y, shooterPointer.x - player.x);
    ctx.strokeStyle = 'rgba(255,255,255,0.85)';
    ctx.beginPath();
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(player.x + Math.cos(angle) * 28, player.y + Math.sin(angle) * 28);
    ctx.stroke();

    ctx.fillStyle = '#eef3ff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${game.score}`, 18, 30);
    ctx.fillText(`Best: ${game.bestScore}`, 18, 58);
    ctx.fillText(`Mood: ${game.health}%`, 18, 86);
    ctx.fillText(`Wave ${game.wave}`, canvas.width - 110, 30);

    ctx.fillStyle = '#d7e6ff';
    ctx.font = '14px sans-serif';
    ctx.fillText(game.message, 18, canvas.height - 18);

    if (game.over) {
      ctx.fillStyle = 'rgba(7, 9, 18, 0.72)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = 'bold 42px sans-serif';
      ctx.fillText('Office apocalypse', canvas.width / 2, canvas.height / 2 - 10);
      ctx.font = '20px sans-serif';
      ctx.fillText(`Final score: ${game.score}`, canvas.width / 2, canvas.height / 2 + 28);
      ctx.fillText('Restart and try to save the meeting.', canvas.width / 2, canvas.height / 2 + 58);
      ctx.textAlign = 'left';

      const restartButton = document.querySelector('#restartShooter');
      if (restartButton) restartButton.style.display = 'inline-flex';
    } else {
      const restartButton = document.querySelector('#restartShooter');
      if (restartButton) restartButton.style.display = 'none';
    }
  }

  function frame(time) {
    const delta = Math.min(2, (time - game.lastTime || 16) / 16.667);
    game.lastTime = time;
    update(delta);
    draw();
    shooterGame.rafId = requestAnimationFrame(frame);
  }

  reset();
  shooterGame = { ...game, reset, rafId: 0 };

  const hud = document.createElement('div');
  hud.className = 'shooter-hud';
  hud.innerHTML = '<button id="restartShooter" class="primary">Restart</button>';
  canvas.insertAdjacentElement('afterend', hud);
  document.querySelector('#restartShooter').addEventListener('click', () => {
    shooterGame.reset();
    shooterGame.over = false;
  });

  shooterGame.rafId = requestAnimationFrame(frame);
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
setupDiscord().catch((error) => {
  console.error(error);
  app.innerHTML = `<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Activity unavailable</h1><p class="muted">${escapeHtml(error.message || 'Unknown error')}</p><p class="hint">Make sure the Activity URL and OAuth configuration are set in the Discord Developer Portal.</p></section></main>`;
});
