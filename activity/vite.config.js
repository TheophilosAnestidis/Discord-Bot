import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '..', '');

  return {
    envDir: '..',

    base: '/',

    define: {
      'import.meta.env.VITE_DISCORD_CLIENT_ID': JSON.stringify(
        env.CLIENT_ID || ''
      )
    },

    build: {
      outDir: 'dist',
      emptyOutDir: true
    }
  };
});