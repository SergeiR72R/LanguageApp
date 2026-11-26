import { getStore } from '@netlify/blobs';
import type { Config, Context } from '@netlify/functions';

/**
 * Household sync: one JSON document with all learner profiles and their progress.
 * Protected by a shared password set in the Netlify environment variable SYNC_PASSWORD.
 *   GET  /api/sync  → stored document (or {} if none yet)
 *   PUT  /api/sync  → replace the stored document (the client merges before uploading)
 */
const KEY = 'household';

function sameSecret(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** The app is also served from GitHub Pages, which calls this function cross-origin. */
const ALLOWED_ORIGINS = [/^https:\/\/sergeir72r\.github\.io$/i, /^https:\/\/([a-z0-9-]+--)?steady-gecko-ea3333\.netlify\.app$/i, /^http:\/\/localhost(:\d+)?$/];
let cors: Record<string, string> = {};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...cors } });

export default async (req: Request, _context: Context) => {
  const origin = req.headers.get('origin') ?? '';
  cors = ALLOWED_ORIGINS.some((r) => r.test(origin))
    ? {
        'access-control-allow-origin': origin,
        'access-control-allow-methods': 'GET, PUT, OPTIONS',
        'access-control-allow-headers': 'content-type, x-sync-password',
        'access-control-max-age': '86400',
        vary: 'Origin',
      }
    : {};
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  const secret = Netlify.env.get('SYNC_PASSWORD');
  if (!secret) return json(503, { error: 'Синхронизация не настроена: задайте переменную SYNC_PASSWORD в настройках Netlify.' });
  const given = req.headers.get('x-sync-password') ?? '';
  if (!sameSecret(given, secret)) return json(401, { error: 'Неверный пароль синхронизации.' });

  const store = getStore({ name: 'deutsch-sync', consistency: 'strong' });
  if (req.method === 'GET') {
    const data = await store.get(KEY, { type: 'json' });
    return json(200, data ?? {});
  }
  if (req.method === 'PUT') {
    const body = await req.text();
    if (body.length > 5_000_000) return json(413, { error: 'Слишком большой объём данных.' });
    let data: unknown;
    try {
      data = JSON.parse(body);
    } catch {
      return json(400, { error: 'Некорректные данные.' });
    }
    await store.setJSON(KEY, data);
    return json(200, { ok: true, savedAt: new Date().toISOString() });
  }
  return json(405, { error: 'Method not allowed' });
};

export const config: Config = { path: '/api/sync' };
