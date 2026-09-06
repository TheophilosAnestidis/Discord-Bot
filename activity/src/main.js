import { DiscordSDK } from '@discord/embedded-app-sdk';
import * as THREE from 'three';
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
          <div class="subtitle">3D BATTLE ARENA</div>
        </div>
        <div class="header-actions">
          <div class="round">MULTIPLAYER</div>
          <button class="secondary" data-mode="menu">Hub</button>
        </div>
      </header>
      <section class="shooter-panel">
        <canvas id="arenaCanvas"></canvas>
      </section>
    </main>
  `;

  document.querySelector('[data-mode="menu"]').onclick = () => {
    currentMode = 'menu';
    stopShooterGame();
    render();
  };

  const canvas = document.querySelector('#arenaCanvas');
  initArena3DGame(canvas);
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
  if (shooterGame?.renderer) shooterGame.renderer.dispose();
  shooterGame = null;
}

function initArena3DGame(canvas) {
  if (!canvas) return;

  if (!window.__vaultxShooterListenersAttached) {
    setupShooterInput();
    window.__vaultxShooterListenersAttached = true;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#070d18');
  scene.fog = new THREE.Fog('#070d18', 18, 36);

  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight || 1.6, 0.1, 1000);
  camera.position.set(0, 10, 16);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth || 860, canvas.clientHeight || 520, false);

  const ambient = new THREE.HemisphereLight('#b7d8ff', '#111827', 1.2);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight('#d8e3ff', 1.1);
  dirLight.position.set(8, 12, 8);
  scene.add(dirLight);

  const arena = new THREE.Mesh(
    new THREE.CylinderGeometry(12, 12, 0.8, 48),
    new THREE.MeshStandardMaterial({ color: '#111a2b', metalness: 0.35, roughness: 0.7 })
  );
  arena.position.y = -0.8;
  scene.add(arena);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(12.2, 0.15, 16, 80),
    new THREE.MeshStandardMaterial({ color: '#7f8dff', emissive: '#2b2d4d' })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.1;
  scene.add(ring);

  const pointerPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const pointer = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const playerMeshes = new Map();
  const bulletMeshes = new Map();

  const localState = {
    x: 0,
    z: 0,
    health: 100,
    score: 0,
    facing: 0,
    lastShotAt: 0
  };

  function createPlayerMesh(player) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.8, 1.5, 6, 12),
      new THREE.MeshStandardMaterial({ color: player.id === self?.id ? '#79e4ff' : '#ff7c7c', emissive: '#0d1b2a' })
    );
    body.castShadow = true;
    group.add(body);

    const gun = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.25, 1.0),
      new THREE.MeshStandardMaterial({ color: '#1a1d2a' })
    );
    gun.position.set(0.65, 0.1, 0.4);
    group.add(gun);

    const label = document.createElement('div');
    label.textContent = player.username || 'Player';
    label.style.position = 'absolute';
    label.style.pointerEvents = 'none';
    label.style.color = '#eaf3ff';
    label.style.font = '12px sans-serif';
    label.style.background = 'rgba(9, 14, 24, 0.7)';
    label.style.padding = '3px 6px';
    label.style.borderRadius = '999px';
    label.style.transform = 'translate(-50%, -50%)';
    label.style.whiteSpace = 'nowrap';
    label.style.display = 'none';
    canvas.parentElement.appendChild(label);

    group.userData.label = label;
    scene.add(group);
    return group;
  }

  function syncArenaScene(arenaState) {
    if (!arenaState) return;

    const players = arenaState.players || [];
    const bulletList = arenaState.bullets || [];

    for (const player of players) {
      let mesh = playerMeshes.get(player.id);
      if (!mesh) {
        mesh = createPlayerMesh(player);
        playerMeshes.set(player.id, mesh);
      }
      mesh.position.set(player.x, 0.9, player.z);
      mesh.rotation.y = player.facing || 0;
      mesh.scale.setScalar(player.id === self?.id ? 1.15 : 1);
      mesh.children[0].material.color.set(player.id === self?.id ? '#79e4ff' : '#ff7c7c');
      if (mesh.userData.label) {
        mesh.userData.label.textContent = `${player.username || 'Player'} • ${player.health}%`;
        const screen = new THREE.Vector3(player.x, 1.8, player.z).project(camera);
        const x = (screen.x * 0.5 + 0.5) * canvas.clientWidth;
        const y = (-screen.y * 0.5 + 0.5) * canvas.clientHeight;
        mesh.userData.label.style.left = `${x}px`;
        mesh.userData.label.style.top = `${y}px`;
        mesh.userData.label.style.display = 'block';
      }
    }

    for (const [id, mesh] of playerMeshes) {
      if (!players.some((player) => player.id === id)) {
        if (mesh.userData.label) mesh.userData.label.remove();
        scene.remove(mesh);
        playerMeshes.delete(id);
      }
    }

    for (const bullet of bulletList) {
      const key = `${bullet.from}-${Math.round(bullet.x * 1000)}-${Math.round(bullet.z * 1000)}`;
      let mesh = bulletMeshes.get(key);
      if (!mesh) {
        mesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 12, 12),
          new THREE.MeshStandardMaterial({ color: '#ffd166', emissive: '#533d00' })
        );
        scene.add(mesh);
        bulletMeshes.set(key, mesh);
      }
      mesh.position.set(bullet.x, 0.7, bullet.z);
    }

    for (const [key, mesh] of bulletMeshes) {
      const exists = bulletList.some((bullet) => `${bullet.from}-${Math.round(bullet.x * 1000)}-${Math.round(bullet.z * 1000)}` === key);
      if (!exists) {
        scene.remove(mesh);
        bulletMeshes.delete(key);
      }
    }
  }

  function sendArenaState() {
    if (!self?.id || !state?.arena) return;
    const localPlayer = state.arena.players.find((player) => player.id === self.id);
    if (!localPlayer) {
      action('arena_join');
      return;
    }

    const x = THREE.MathUtils.clamp(localState.x, -11.5, 11.5);
    const z = THREE.MathUtils.clamp(localState.z, -11.5, 11.5);
    const payload = {
      x,
      z,
      facing: localState.facing,
      health: localState.health,
      score: localState.score,
      kills: localState.kills || 0
    };
    action('arena_update', payload);
  }

  function setPointerFromMouse(event) {
    const rect = canvas.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      -((event.clientY - rect.top) / rect.height) * 2 + 1
    );
    raycaster.setFromCamera(mouse, camera);
    const hit = raycaster.ray.intersectPlane(pointerPlane, pointer);
    if (hit) {
      const dx = pointer.x - (localState.x || 0);
      const dz = pointer.z - (localState.z || 0);
      localState.facing = Math.atan2(dz, dx);
      shooterPointer.x = pointer.x;
      shooterPointer.y = pointer.z;
    }
  }

  canvas.addEventListener('mousemove', setPointerFromMouse);
  canvas.addEventListener('mousedown', (event) => {
    setPointerFromMouse(event);
    const now = Date.now();
    if (now - localState.lastShotAt > 180) {
      localState.lastShotAt = now;
      const payload = {
        x: localState.x,
        z: localState.z,
        facing: localState.facing,
        origin: self?.id || 'local'
      };
      action('arena_shoot', payload);
    }
  });

  function animate() {
    const moveX = (shooterKeys.right ? 1 : 0) - (shooterKeys.left ? 1 : 0);
    const moveZ = (shooterKeys.down ? 1 : 0) - (shooterKeys.up ? 1 : 0);
    const length = Math.hypot(moveX, moveZ) || 1;

    const speed = 0.18;
    if (moveX || moveZ) {
      const dirX = moveX / length;
      const dirZ = moveZ / length;
      localState.x = THREE.MathUtils.clamp((localState.x || 0) + dirX * speed, -11.5, 11.5);
      localState.z = THREE.MathUtils.clamp((localState.z || 0) + dirZ * speed, -11.5, 11.5);
    }

    const localPlayer = state?.arena?.players?.find((player) => player.id === self?.id);
    if (localPlayer) {
      localState.x = localPlayer.x;
      localState.z = localPlayer.z;
      localState.health = localPlayer.health;
      localState.score = localPlayer.score;
      localState.kills = localPlayer.kills || 0;
    }

    const player = playerMeshes.get(self?.id);
    if (player) {
      player.position.set(localState.x, 0.9, localState.z);
      player.rotation.y = localState.facing || 0;
    } else {
      const base = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.8, 1.5, 6, 12),
        new THREE.MeshStandardMaterial({ color: '#79e4ff' })
      );
      base.position.set(localState.x, 0.9, localState.z);
      scene.add(base);
      playerMeshes.set(self?.id, base);
    }

    camera.position.x = localState.x * 0.7;
    camera.position.z = 16 + (localPlayer ? 0 : 0);
    camera.position.y = 10;
    camera.lookAt(localState.x, 0.8, localState.z);

    if (state?.arena) syncArenaScene(state.arena);
    if (self?.id && state?.arena && Date.now() - (shooterGame?.lastSync || 0) > 120) {
      sendArenaState();
      shooterGame.lastSync = Date.now();
    }

    renderer.render(scene, camera);
    shooterGame.rafId = requestAnimationFrame(animate);
  }

  shooterGame = {
    rafId: 0,
    lastSync: 0,
    renderer,
    scene,
    camera
  };

  if (state?.arena) syncArenaScene(state.arena);
  shooterGame.rafId = requestAnimationFrame(animate);
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
