/**
 * Cloudflare Worker: forwards contact form submissions to Telegram.
 *
 * Deploy: see docs/TELEGRAM_SETUP.md
 *
 * Required secrets (wrangler secret put):
 *   BOT_TOKEN  — from @BotFather
 *   CHAT_ID    — your Telegram user or group id
 */

const ALLOWED_ORIGINS = [
  'https://shango-power.com',
  'https://www.shango-power.com',
  'http://localhost:3000',
];

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function jsonResponse(body, status, request) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      'Content-Type': 'application/json',
    },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ ok: false, error: 'method_not_allowed' }, 405, request);
    }

    if (!env.BOT_TOKEN || !env.CHAT_ID) {
      return jsonResponse({ ok: false, error: 'server_not_configured' }, 500, request);
    }

    try {
      const payload = await request.json();
      const name = String(payload.name || '').trim();
      const email = String(payload.email || '').trim();
      const phone = String(payload.phone || '').trim();

      if (!name || !email || !phone) {
        return jsonResponse({ ok: false, error: 'validation_failed' }, 400, request);
      }

      const text = [
        '📩 <b>New consultation request</b>',
        '',
        `<b>Name:</b> ${escapeHtml(name)}`,
        `<b>Position:</b> ${escapeHtml(payload.position || '—')}`,
        `<b>Company:</b> ${escapeHtml(payload.company || '—')}`,
        `<b>Email:</b> ${escapeHtml(email)}`,
        `<b>Phone:</b> ${escapeHtml(phone)}`,
        '',
        '🌐 shango-power.com',
      ].join('\n');

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: env.CHAT_ID,
            text,
            parse_mode: 'HTML',
          }),
        }
      );

      if (!telegramResponse.ok) {
        return jsonResponse({ ok: false, error: 'telegram_failed' }, 502, request);
      }

      return jsonResponse({ ok: true }, 200, request);
    } catch {
      return jsonResponse({ ok: false, error: 'internal_error' }, 500, request);
    }
  },
};
