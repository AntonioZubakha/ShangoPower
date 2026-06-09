# Contact form → Telegram

The site is static (GitHub Pages). The browser **cannot** call the Telegram API directly — the bot token would be visible to everyone. Use a small serverless proxy instead.

## Architecture

```
Browser (shango-power.com)
    → POST JSON
Cloudflare Worker (your secret URL)
    → sendMessage
Telegram chat
```

## Step 1 — Create a Telegram bot

1. Open Telegram and find [@BotFather](https://t.me/BotFather).
2. Send `/newbot`, follow the prompts.
3. Copy the **bot token** (looks like `123456789:AAH...`).

## Step 2 — Get your chat ID

**Option A — personal chat**

1. Send any message to your new bot.
2. Open in browser:
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
3. Find `"chat":{"id":123456789}` — that number is your **CHAT_ID**.

**Option B — group**

1. Add the bot to a group.
2. Send a message in the group.
3. Use the same `getUpdates` URL; use the group's `chat.id` (often negative).

## Step 3 — Deploy the Cloudflare Worker

1. Create a free account at [cloudflare.com](https://dash.cloudflare.com/).
2. Go to **Workers & Pages → Create → Worker**.
3. Paste the code from [`cloudflare-worker/telegram-form.js`](../cloudflare-worker/telegram-form.js).
4. Deploy the worker.
5. In worker settings → **Variables and Secrets**, add:
   - `BOT_TOKEN` — your bot token (encrypt as Secret)
   - `CHAT_ID` — your chat id (encrypt as Secret)
6. Copy the worker URL, e.g. `https://shango-form.your-name.workers.dev`.

### Test the worker

```bash
curl -X POST https://shango-form.your-name.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","position":"CEO","company":"Acme","email":"test@example.com","phone":"+1234567890"}'
```

You should receive a message in Telegram.

## Step 4 — Connect the website

### Local development

Create `.env.local` in the project root:

```
REACT_APP_FORM_ENDPOINT=https://shango-form.your-name.workers.dev
```

Restart `npm start`.

### Production (GitHub Actions)

1. Open [github.com/AntonioZubakha/ShangoPower/settings/secrets/actions](https://github.com/AntonioZubakha/ShangoPower/settings/secrets/actions).
2. Add repository secret:
   - Name: `REACT_APP_FORM_ENDPOINT`
   - Value: your Cloudflare Worker URL
3. Push to `main` — the deploy workflow bakes the URL into the build.

## Troubleshooting

| Symptom | Fix |
|--------|-----|
| Form shows "not configured" | `REACT_APP_FORM_ENDPOINT` missing in build |
| CORS error in browser | Worker must allow `https://shango-power.com` origin |
| 502 from worker | Wrong `BOT_TOKEN` or `CHAT_ID` |
| Bot silent in group | Disable privacy mode via BotFather `/setprivacy` → Disable, or mention the bot |

## Security notes

- Never commit the bot token to the repository.
- The worker URL is public but only accepts POST with valid JSON; you can add rate limiting in Cloudflare later.
- Consider adding a honeypot field or Cloudflare Turnstile for spam protection.
