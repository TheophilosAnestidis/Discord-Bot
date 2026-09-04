# VaultX Activity fix

This build fixes the Discord Activity authentication path. The Embedded App SDK returns an authorization code to the Activity, and the backend exchanges that code using the Discord OAuth token endpoint. The Activity client now calls the backend through Discord's `/.proxy` path, while the server strips that prefix so the same routes work locally and in Discord.

## Required Discord Developer Portal setup

1. Use the Discord Application ID as `CLIENT_ID`.
2. Under OAuth2 > Redirects, keep the Activity placeholder `https://127.0.0.1` configured. Discord's Embedded App SDK handles the redirect inside the Activity.
3. Configure the Activity URL to the **public HTTPS URL** where this Activity is hosted. A private LAN address or plain `http://localhost` is not a production Activity URL.
4. Keep `DISCORD_CLIENT_SECRET` only in the server `.env`; never put it in the Activity frontend.

## Build

```bash
npm install
npm run activity:install
npm run activity:build
npm run deploy
npm start
```

The Activity frontend uses `/.proxy/api/activity/*`, which is the supported proxy pattern in Discord's Activity documentation.
