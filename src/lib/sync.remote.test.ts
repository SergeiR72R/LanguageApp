import { afterEach, expect, it, vi } from 'vitest';

// the app runs on GitHub Pages: sync must reach the Netlify function cross-origin
vi.hoisted(() => {
  const mem = new Map<string, string>();
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (k: string) => mem.get(k) ?? null,
    setItem: (k: string, v: string) => void mem.set(k, v),
    removeItem: (k: string) => void mem.delete(k),
    clear: () => mem.clear(),
    key: () => null,
    length: 0,
  };
  (globalThis as unknown as { location: { hostname: string } }).location = { hostname: 'sergeir72r.github.io' };
});

import { connectSync, disconnectSync } from './sync';

afterEach(() => {
  vi.unstubAllGlobals();
  disconnectSync();
});

it('falls back from the branch deploy to the production function when the first is unreachable', async () => {
  const urls: string[] = [];
  vi.stubGlobal('fetch', async (url: string) => {
    urls.push(url);
    if (url.startsWith('https://live--')) throw new TypeError('Failed to fetch');
    return new Response('{}', { status: 200 });
  });
  await connectSync('pw');
  expect(urls[0]).toBe('https://live--steady-gecko-ea3333.netlify.app/api/sync');
  expect(urls).toContain('https://steady-gecko-ea3333.netlify.app/api/sync');
  // once an endpoint works it is used first
  expect(urls.at(-1)).toBe('https://steady-gecko-ea3333.netlify.app/api/sync');
});

it('reports a wrong password instead of trying the next server', async () => {
  vi.stubGlobal('fetch', async () => new Response(JSON.stringify({ error: 'Неверный пароль синхронизации.' }), { status: 401 }));
  await expect(connectSync('bad')).rejects.toThrow('Неверный пароль');
});
