module.exports = {
  apps: [{
    name: 'vaultx-platform',
    script: './src/index.js',
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: { NODE_ENV: 'production' }
  }]
};
