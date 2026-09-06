# VaultX Platform

VaultX is a Discord platform containing:
- Discord bot + AI ticket system
- Admin dashboard
- Premium licensing and Stripe checkout
- Standalone Discord Activity

## Services

The bot process starts both web services:

- Dashboard: `http://localhost:3000`
- Activity: `http://localhost:5173`
- Dashboard health: `/health`
- Activity health: `http://localhost:5173/api/activity/state` requires an Activity session

The Dashboard and Activity are intentionally separate services. This makes it easy to expose them through separate public URLs.

## Deploy on Render

This repository includes `render.yaml` for a two-service deployment:

- Dashboard + bot: `https://vaultx-dashboard.onrender.com`
- Discord Activity: `https://vaultx-activity.onrender.com`

In Render, create a new Blueprint from this repository and deploy `render.yaml`. Add the secret environment values requested by the Blueprint, especially `CLIENT_ID`, `DISCORD_CLIENT_SECRET`, `BOT_TOKEN`, `ADMIN_PASSWORD`, and the Stripe/OpenRouter keys you use.

After deployment:

1. Add `https://vaultx-dashboard.onrender.com/auth/callback` as a Discord OAuth2 redirect URI.
2. Set the Discord Activity URL to `https://vaultx-activity.onrender.com` in the Discord Developer Portal.
3. Open the dashboard at `https://vaultx-dashboard.onrender.com`.

If either Render service name is changed, update `PUBLIC_URL`, `DASHBOARD_REDIRECT_URI`, and `ACTIVITY_URL` in the Dashboard service, plus `ACTIVITY_URL` in the Activity service.

## Setup

1. Copy `.env.example` to `.env`.
2. Fill in:
   - `BOT_TOKEN`
   - `CLIENT_ID`
   - `DISCORD_CLIENT_SECRET`
   - `OWNER_USER_ID`
   - `ADMIN_PASSWORD`
   - Stripe keys when selling Premium
3. Install dependencies:
   ```bash
   npm install
   npm --prefix activity install
   ```
4. Build the Activity:
   ```bash
   npm run activity:build
   ```
5. Deploy slash commands:
   ```bash
   npm run deploy
   ```
6. Start everything:
   ```bash
   npm start
   ```

## Public deployment from a home PC

Keep the bot running on the PC and expose the two services separately:

- `https://dashboard.yourdomain.com` -> local port `3000`
- `https://activity.yourdomain.com` -> local port `5173`

Use a proper HTTPS reverse proxy/tunnel for public access. Do not expose the Node ports directly to the internet.

Update `.env` accordingly:

```env
DASHBOARD_PORT=3000
PUBLIC_URL=https://dashboard.yourdomain.com
DASHBOARD_REDIRECT_URI=https://dashboard.yourdomain.com/auth/callback

ACTIVITY_PORT=5173
ACTIVITY_URL=https://activity.yourdomain.com
```

Register the Dashboard OAuth redirect URI in the Discord Developer Portal.

For the Discord Activity, use the Activity public URL in the Discord application's Activities/URL configuration. The Activity's internal OAuth exchange uses Discord's embedded-app redirect flow.

## Security notes

- Never commit `.env` or Discord/Stripe secrets.
- Dashboard access is based on Discord OAuth and administrator permissions.
- Premium operations are protected by server-side licensing checks.
- Stripe webhook verification is performed server-side.
- Activity sessions use random server-side session tokens.
- API payloads have size limits and the dashboard has a basic rate limiter.
- Run behind HTTPS in production.

## Product strategy

The dashboard intentionally presents Premium as a product rather than a hidden command:
- clear plan comparison
- feature visibility
- secure checkout messaging
- license state
- activity access
- operational analytics

Do not promise refunds, uptime or features you do not actually provide. Trust is built by accurate claims, transparent pricing and reliable support.
