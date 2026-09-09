(() => {
  const state = { loadedGuild: null };

  function element(id) {
    return document.getElementById(id);
  }

  function createField(id, label, placeholder, maxLength, rows) {
    const wrapper = document.createElement('label');
    wrapper.textContent = label;
    const input = document.createElement('textarea');
    input.id = id;
    input.maxLength = maxLength;
    input.rows = rows;
    input.placeholder = placeholder;
    input.style.cssText = 'width:100%;resize:vertical;min-height:72px;background:#090c12;border:1px solid var(--line);color:var(--text);border-radius:8px;padding:9px;font:11px Inter,sans-serif;margin-top:6px;';
    wrapper.appendChild(input);
    return wrapper;
  }

  function ensurePanel() {
    const grid = document.querySelector('#settings .settingsgrid');
    if (!grid || document.getElementById('aiSettingsCard')) return Boolean(grid);

    const card = document.createElement('div');
    card.id = 'aiSettingsCard';
    card.className = 'card formcard';
    const title = document.createElement('h3');
    title.textContent = 'AI support context';
    const description = document.createElement('p');
    description.textContent = 'Teach the assistant how this server works and when staff should take over.';
    const form = document.createElement('div');
    form.className = 'form';
    form.append(
      createField('aiServerContext', 'SERVER CONTEXT', 'What is this server about? Products, services, community or audience.', 1000, 4),
      createField('aiSupportInstructions', 'SUPPORT INSTRUCTIONS', 'Tone, steps, links and server-specific guidance.', 1500, 5),
      createField('aiEscalationRules', 'ESCALATION RULES', 'Which cases must be handled by staff?', 1000, 4)
    );
    const save = document.createElement('button');
    save.className = 'btn primary';
    save.type = 'button';
    save.textContent = 'Save AI settings';
    save.style.marginTop = '12px';
    save.addEventListener('click', saveSettings);
    card.append(title, description, form, save);
    grid.appendChild(card);
    return true;
  }

  async function loadSettings() {
    const guild = element('guild');
    if (!guild?.value || !ensurePanel() || state.loadedGuild === guild.value) return;
    try {
      const response = await fetch(`/api/guilds/${guild.value}`);
      if (!response.ok) return;
      const data = await response.json();
      const settings = data.settings || {};
      element('aiServerContext').value = settings.aiServerContext || '';
      element('aiSupportInstructions').value = settings.aiSupportInstructions || '';
      element('aiEscalationRules').value = settings.aiEscalationRules || '';
      state.loadedGuild = guild.value;
    } catch (error) {
      console.warn('Could not load AI settings:', error);
    }
  }

  async function saveSettings(event) {
    const guild = element('guild');
    const button = event.currentTarget;
    if (!guild?.value) return;
    button.disabled = true;
    button.textContent = 'Saving...';
    try {
      const response = await fetch(`/api/guilds/${guild.value}/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supportRoleId: element('supportRole')?.value,
          ticketCategoryId: element('ticketCategory')?.value,
          openLogsChannelId: element('openLogs')?.value,
          closeLogsChannelId: element('closeLogs')?.value,
          transcriptsChannelId: element('transcripts')?.value,
          panelTargetChannelId: element('panelChannel')?.value,
          aiServerContext: element('aiServerContext').value,
          aiSupportInstructions: element('aiSupportInstructions').value,
          aiEscalationRules: element('aiEscalationRules').value
        })
      });
      if (!response.ok) throw new Error((await response.json()).error || 'Could not save AI settings.');
      button.textContent = 'Saved';
      state.loadedGuild = null;
      await loadSettings();
    } catch (error) {
      button.textContent = 'Save failed';
      console.error(error);
    } finally {
      setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Save AI settings';
      }, 1200);
    }
  }

  function boot() {
    ensurePanel();
    element('guild')?.addEventListener('change', () => {
      state.loadedGuild = null;
      loadSettings();
    });
    loadSettings();
    setTimeout(loadSettings, 800);
  }

  boot();
})();
