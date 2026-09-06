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
let deliveryGame = null;
const deliveryKeys = { up: false, down: false, left: false, right: false };

const fallbackClientId =
  import.meta.env.VITE_DISCORD_CLIENT_ID ||
  window.VAULTX_ACTIVITY_CONFIG?.clientId ||
  '';

function render() {
  if (!state) {
    app.innerHTML = '<main class="shell"><section class="panel center"><div class="brand">VAULT<span>X</span></div><h1>Connecting...</h1><p id="status">Preparing your Discord session.</p></section></main>';
    return;
  }

  if (currentMode === 'menu') return renderMenu();
  if (currentMode === 'delivery') {
    if (!deliveryGame) renderDelivery();
    else updateDeliveryHud();
    return;
  }
  renderQuiz();
}

function renderMenu() {
  app.innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div><div class="brand">VAULT<span>X</span></div><div class="subtitle">ACTIVITY HUB</div></div>
        <div class="round">2 MODES READY</div>
      </header>
      <section class="mode-grid">
        <article class="activity-card quiz-card">
          <div class="badge">MULTIPLAYER</div>
          <h1>Quiz Battle</h1>
          <p>Answer fast, stack points, and outscore your friends in the lobby.</p>
          <button class="primary" data-mode="quiz">Play Quiz</button>
        </article>
        <article class="activity-card shooter-card delivery-card">
          <div class="badge">2D PARTY RACE</div>
          <h1>Parcel Panic</h1>
          <p>Deliver ridiculous packages, grab boosts, and become the fastest courier in town.</p>
          <button class="primary" data-mode="delivery">Start Delivery</button>
        </article>
      </section>
    </main>`;

  document.querySelectorAll('[data-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      currentMode = button.dataset.mode;
      if (currentMode === 'delivery') stopDeliveryGame();
      render();
    });
  });
}

function renderQuiz() {
  const leaderboard = [...state.players].sort((a, b) => b.score - a.score);
  const selfPlayer = leaderboard.find((player) => player.id === self?.id);
  const canStart = state.phase === 'lobby' && selfPlayer?.host && leaderboard.length >= 2;

  if (state.phase === 'finished') {
    app.innerHTML = `<main class="shell"><section class="panel result"><div class="brand">VAULT<span>X</span></div><div class="eyebrow">QUIZ BATTLE</div><h1>Game Over</h1><p class="muted">Final leaderboard</p>${leaderboard.map((player, index) => `<div class="rank"><span>#${index + 1}</span><strong>${escapeHtml(player.username)}</strong><b>${player.score}</b></div>`).join('')}<button id="restart" class="primary">Play Again</button><button class="secondary" data-mode="menu">Back to hub</button></section></main>`;
    document.querySelector('#restart').onclick = () => action('start');
    document.querySelector('[data-mode="menu"]').onclick = () => { currentMode = 'menu'; render(); };
    return;
  }

  const seconds = state.deadline ? Math.max(0, Math.ceil((state.deadline - Date.now()) / 1000)) : 0;
  app.innerHTML = `
    <main class="shell">
      <header class="topbar"><div><div class="brand">VAULT<span>X</span></div><div class="subtitle">QUIZ BATTLE</div></div><div class="header-actions"><div class="round">${state.phase === 'playing' ? `ROUND ${state.round + 1} / ${state.totalRounds}` : `LOBBY • ${leaderboard.length}/12`}</div><button class="secondary" data-mode="menu">Hub</button></div></header>
      <section class="game-grid"><div class="panel main-panel">${state.phase === 'lobby' ? `<div class="hero"><div class="eyebrow">MULTIPLAYER</div><h1>Ready when you are.</h1><p>Invite your friends to the Activity and battle for the highest score.</p><div class="lobby-note">${leaderboard.length < 2 ? 'Waiting for at least 2 players...' : (selfPlayer?.host ? 'You are the host. Start when everyone is ready.' : 'Waiting for the host to start the battle.')}</div><button id="start" class="primary" ${canStart ? '' : 'disabled'}>${selfPlayer?.host ? 'Start Battle' : 'Waiting for Host'}</button></div>` : `<div class="question-head"><span class="eyebrow">QUESTION ${state.round + 1}</span><span class="timer">${seconds}s</span></div><h1 class="question">${escapeHtml(state.question.q)}</h1><div class="answers">${state.question.a.map((answer, index) => `<button class="answer ${selfPlayer?.answered ? 'answered' : ''}" data-answer="${index}" ${selfPlayer?.answered ? 'disabled' : ''}><span>${String.fromCharCode(65 + index)}</span>${escapeHtml(answer)}</button>`).join('')}</div>`}</div><aside class="panel sidebar"><div class="side-title">LEADERBOARD</div>${leaderboard.map((player) => `<div class="player ${player.id === self?.id ? 'me' : ''}"><div class="avatar">${escapeHtml((player.username?.[0] || '?').toUpperCase())}</div><div class="player-name"><strong>${escapeHtml(player.username)} ${player.host ? '<em>HOST</em>' : ''}</strong><small>${player.answered ? 'Answered' : 'Playing'}</small></div><b>${player.score}</b></div>`).join('') || '<p class="muted">No players yet.</p>'}</aside></section>
    </main>`;

  document.querySelector('[data-mode="menu"]').onclick = () => { currentMode = 'menu'; render(); };
  document.querySelector('#start')?.addEventListener('click', () => action('start'));
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => action('answer', Number(button.dataset.answer))));
}

function renderDelivery() {
  app.innerHTML = `
    <main class="shell">
      <header class="topbar"><div><div class="brand">VAULT<span>X</span></div><div class="subtitle">PARCEL PANIC</div></div><div class="header-actions"><div class="round">2D PARTY RACE</div><button class="secondary" data-mode="menu">Hub</button></div></header>
      <section class="delivery-layout"><div class="delivery-stage"><canvas id="deliveryCanvas" width="960" height="560"></canvas><div class="delivery-controls">WASD / arrows to move <span>•</span> pick up a parcel <span>•</span> reach the glowing drop zone</div></div><aside class="panel delivery-sidebar"><div class="delivery-stat"><span>TIME</span><strong id="deliveryTime">60</strong></div><div class="delivery-stat"><span>DELIVERED</span><strong id="deliveryScore">0</strong></div><div class="delivery-message" id="deliveryMessage">Find a package before the pigeon judges you.</div><div class="side-title">COURIER BOARD</div><div id="deliveryBoard"></div></aside></section>
    </main>`;

  document.querySelector('[data-mode="menu"]').onclick = () => { currentMode = 'menu'; stopDeliveryGame(); render(); };
  initDeliveryGame(document.querySelector('#deliveryCanvas'));
}

function setupDeliveryInput() {
  window.addEventListener('keydown', (event) => {
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) return;
    event.preventDefault();
    if (event.code === 'ArrowUp' || event.code === 'KeyW') deliveryKeys.up = true;
    if (event.code === 'ArrowDown' || event.code === 'KeyS') deliveryKeys.down = true;
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') deliveryKeys.left = true;
    if (event.code === 'ArrowRight' || event.code === 'KeyD') deliveryKeys.right = true;
  });

  window.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowUp' || event.code === 'KeyW') deliveryKeys.up = false;
    if (event.code === 'ArrowDown' || event.code === 'KeyS') deliveryKeys.down = false;
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') deliveryKeys.left = false;
    if (event.code === 'ArrowRight' || event.code === 'KeyD') deliveryKeys.right = false;
  });
}

function stopDeliveryGame() {
  if (deliveryGame?.rafId) cancelAnimationFrame(deliveryGame.rafId);
  deliveryGame = null;
}

function initDeliveryGame(canvas) {
  if (!canvas) return;
  if (!window.__vaultxDeliveryListenersAttached) {
    setupDeliveryInput();
    window.__vaultxDeliveryListenersAttached = true;
  }

  const ctx = canvas.getContext('2d');
  const game = {
    canvas,
    ctx,
    rafId: 0,
    lastTime: performance.now(),
    elapsed: 0,
    score: 0,
    package: null,
    deliveries: [],
    hazards: [],
    sparkles: [],
    message: 'Find a package before the pigeon judges you.',
    over: false,
    player: { x: 480, y: 280, size: 24, speed: 230, carrying: false },
    zone: { x: 760, y: 120, size: 52 }
  };

  function randomSpot(padding = 60) {
    return { x: padding + Math.random() * (canvas.width - padding * 2), y: padding + Math.random() * (canvas.height - padding * 2) };
  }

  function spawnPackage() {
    const spot = randomSpot(80);
    game.package = { ...spot, size: 20, wobble: 0, label: ['mystery soup', 'three left shoes', 'urgent cheese', 'tiny sofa'][Math.floor(Math.random() * 4)] };
  }

  function spawnHazard() {
    const spot = randomSpot(45);
    game.hazards.push({ ...spot, size: 18, vx: (Math.random() > 0.5 ? 1 : -1) * (55 + Math.random() * 55), vy: (Math.random() > 0.5 ? 1 : -1) * (35 + Math.random() * 45), emoji: ['🛒', '🦆', '🧦'][Math.floor(Math.random() * 3)] });
  }

  function burst(x, y, color) {
    for (let index = 0; index < 12; index += 1) game.sparkles.push({ x, y, vx: (Math.random() - 0.5) * 150, vy: (Math.random() - 0.5) * 150, life: 0.6, color });
  }

  function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }

  function update(delta) {
    if (game.over) return;
    game.elapsed += delta;
    const moveX = (deliveryKeys.right ? 1 : 0) - (deliveryKeys.left ? 1 : 0);
    const moveY = (deliveryKeys.down ? 1 : 0) - (deliveryKeys.up ? 1 : 0);
    const length = Math.hypot(moveX, moveY) || 1;
    game.player.x = Math.max(28, Math.min(canvas.width - 28, game.player.x + (moveX / length) * game.player.speed * delta));
    game.player.y = Math.max(28, Math.min(canvas.height - 28, game.player.y + (moveY / length) * game.player.speed * delta));

    if (!game.package) spawnPackage();
    if (game.hazards.length < 4 && Math.random() < delta * 0.45) spawnHazard();
    for (const hazard of game.hazards) {
      hazard.x += hazard.vx * delta;
      hazard.y += hazard.vy * delta;
      if (hazard.x < 25 || hazard.x > canvas.width - 25) hazard.vx *= -1;
      if (hazard.y < 25 || hazard.y > canvas.height - 25) hazard.vy *= -1;
      if (distance(game.player, hazard) < 35) {
        game.score = Math.max(0, game.score - 10);
        game.message = 'A rogue shopping cart charged you a convenience fee.';
        burst(game.player.x, game.player.y, '#ff718c');
        game.player.x += game.player.x < canvas.width / 2 ? -35 : 35;
      }
    }

    if (game.package && !game.player.carrying && distance(game.player, game.package) < 38) {
      game.player.carrying = true;
      game.message = `Package acquired: ${game.package.label}. Now find the glowing door.`;
      burst(game.package.x, game.package.y, '#ffd166');
    }

    if (game.player.carrying && distance(game.player, game.zone) < 48) {
      game.player.carrying = false;
      game.score += 100;
      game.message = 'Delivered! The customer only complained a little.';
      burst(game.zone.x, game.zone.y, '#70e1a1');
      game.package = null;
      game.zone = randomSpot(70);
      action('delivery_score', { score: game.score });
    }

    for (const sparkle of game.sparkles) {
      sparkle.x += sparkle.vx * delta;
      sparkle.y += sparkle.vy * delta;
      sparkle.life -= delta;
    }
    game.sparkles = game.sparkles.filter((sparkle) => sparkle.life > 0);

    if (game.elapsed >= 60) {
      game.over = true;
      game.message = `Shift over. You delivered ${game.score / 100} parcels.`;
      action('delivery_score', { score: game.score });
    }
  }

  function draw() {
    ctx.fillStyle = '#0a1522';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(116, 226, 190, 0.12)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
    for (let y = 0; y < canvas.height; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }

    ctx.fillStyle = '#182d3a';
    ctx.fillRect(18, 18, canvas.width - 36, canvas.height - 36);
    ctx.strokeStyle = '#365766';
    ctx.strokeRect(18, 18, canvas.width - 36, canvas.height - 36);

    ctx.fillStyle = 'rgba(112, 225, 161, 0.2)';
    ctx.beginPath(); ctx.arc(game.zone.x, game.zone.y, game.zone.size, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#70e1a1'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(game.zone.x, game.zone.y, game.zone.size / 2, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#b6ffdc'; ctx.font = 'bold 13px sans-serif'; ctx.textAlign = 'center'; ctx.fillText('DROP', game.zone.x, game.zone.y + 5);

    if (game.package) {
      ctx.fillStyle = '#f2b84b'; ctx.fillRect(game.package.x - 14, game.package.y - 14, 28, 28);
      ctx.strokeStyle = '#fff0a6'; ctx.strokeRect(game.package.x - 14, game.package.y - 14, 28, 28);
      ctx.fillStyle = '#6b4817'; ctx.fillRect(game.package.x - 2, game.package.y - 14, 4, 28);
    }

    ctx.textAlign = 'center';
    for (const hazard of game.hazards) { ctx.font = '26px sans-serif'; ctx.fillText(hazard.emoji, hazard.x, hazard.y + 9); }
    for (const sparkle of game.sparkles) { ctx.globalAlpha = Math.max(0, sparkle.life); ctx.fillStyle = sparkle.color; ctx.fillRect(sparkle.x, sparkle.y, 5, 5); }
    ctx.globalAlpha = 1;

    ctx.fillStyle = game.player.carrying ? '#ffcf70' : '#78d7ff';
    ctx.beginPath(); ctx.arc(game.player.x, game.player.y, game.player.size, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#102331'; ctx.font = 'bold 18px sans-serif'; ctx.fillText('🚲', game.player.x, game.player.y + 7);

    ctx.textAlign = 'left'; ctx.fillStyle = '#eaf7ff'; ctx.font = 'bold 18px sans-serif'; ctx.fillText(`Deliveries: ${Math.floor(game.score / 100)}`, 34, 48);
    ctx.fillStyle = '#a8c5d1'; ctx.font = '14px sans-serif'; ctx.fillText(game.player.carrying ? 'Carrying a package' : 'Looking for a package', 34, canvas.height - 30);
    if (game.over) {
      ctx.fillStyle = 'rgba(5, 10, 17, 0.78)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center'; ctx.fillStyle = '#fff'; ctx.font = 'bold 42px sans-serif'; ctx.fillText('Shift complete!', canvas.width / 2, canvas.height / 2 - 15);
      ctx.font = '20px sans-serif'; ctx.fillText(`${Math.floor(game.score / 100)} parcels delivered`, canvas.width / 2, canvas.height / 2 + 25);
    }
  }

  function frame(now) {
    const delta = Math.min(0.05, (now - game.lastTime) / 1000);
    game.lastTime = now;
    update(delta);
    draw();
    updateDeliveryHud();
    game.rafId = requestAnimationFrame(frame);
  }

  deliveryGame = game;
  spawnPackage();
  requestAnimationFrame(frame);
}

function updateDeliveryHud() {
  if (!deliveryGame) return;
  const time = document.querySelector('#deliveryTime');
  const score = document.querySelector('#deliveryScore');
  const message = document.querySelector('#deliveryMessage');
  const board = document.querySelector('#deliveryBoard');
  if (time) time.textContent = String(Math.max(0, 60 - Math.floor(deliveryGame.elapsed)));
  if (score) score.textContent = String(Math.floor(deliveryGame.score / 100));
  if (message) message.textContent = deliveryGame.message;
  if (board) {
    const leaderboard = [...(state?.players || [])].sort((a, b) => b.score - a.score);
    board.innerHTML = leaderboard.map((player, index) => `<div class="player ${player.id === self?.id ? 'me' : ''}"><div class="avatar">${index + 1}</div><div class="player-name"><strong>${escapeHtml(player.username)}</strong><small>${Math.floor(player.score / 100)} deliveries</small></div><b>${Math.floor(player.score / 100)}</b></div>`).join('') || '<p class="muted">No couriers yet.</p>';
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function activityApiPath(pathname) { return `/.proxy${pathname}`; }

async function setupDiscord() {
  if (!fallbackClientId) throw new Error('Discord Activity CLIENT_ID is not configured. Check the root .env file and rebuild the Activity.');
  discordSdk = new DiscordSDK(fallbackClientId);
  await discordSdk.ready();
  instanceId = discordSdk.instanceId;
  const { code } = await discordSdk.commands.authorize({ client_id: fallbackClientId, response_type: 'code', state: '', prompt: 'none', scope: ['identify'] });
  const tokenResponse = await fetch(activityApiPath('/api/activity/token'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code }) });
  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok) throw new Error(tokenData.error || 'Activity authorization failed.');
  sessionToken = tokenData.sessionToken;
  self = tokenData.user;
  auth = await discordSdk.commands.authenticate({ access_token: tokenData.accessToken });
  if (!auth) throw new Error('Discord authentication command failed. Relaunch the Activity from Discord.');
  await sync();
  if (pollTimer) clearInterval(pollTimer);
  pollTimer = setInterval(sync, 700);
}

async function sync() {
  const response = await fetch(`${activityApiPath('/api/activity/state')}?instanceId=${encodeURIComponent(instanceId)}`, { headers: { Authorization: `Bearer ${sessionToken}` } });
  if (!response.ok) throw new Error((await response.json()).error || 'Could not load game state.');
  const data = await response.json();
  state = data.state;
  self = data.self;
  render();
}

async function action(type, answer) {
  const response = await fetch(activityApiPath('/api/activity/action'), { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionToken}` }, body: JSON.stringify({ instanceId, action: type, answer }) });
  const data = await response.json();
  if (!response.ok) return showError(data.error || 'Action failed.');
  state = data.state;
  if (currentMode !== 'delivery') render();
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
