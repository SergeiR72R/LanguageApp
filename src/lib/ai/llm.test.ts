import { afterEach, expect, it, vi } from 'vitest';

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
});

import { useStore } from '../store';
import { chat } from './llm';

afterEach(() => vi.unstubAllGlobals());

const ok = (content: string) => new Response(JSON.stringify({ choices: [{ message: { content } }] }), { status: 200 });

it('retries a dropped connection and then falls back to the other provider', async () => {
  vi.useFakeTimers({ shouldAdvanceTime: true, advanceTimeDelta: 500 });
  const s = useStore.getState().settings;
  useStore.setState({ settings: { ...s, llmProvider: 'groq', llmModel: 'openai/gpt-oss-120b', keys: { ...s.keys, groq: 'g', gemini: 'k' } } });
  const urls: string[] = [];
  vi.stubGlobal('fetch', async (url: string) => {
    urls.push(url);
    if (url.includes('groq')) throw new TypeError('Failed to fetch');
    return ok('Hallo');
  });
  await expect(chat([{ role: 'user', content: 'hi' }])).resolves.toBe('Hallo');
  expect(urls.filter((u) => u.includes('groq')).length).toBeGreaterThanOrEqual(2);
  expect(urls.at(-1)).toContain('generativelanguage');
  vi.useRealTimers();
}, 30000);

it('recovers when the second attempt succeeds', async () => {
  vi.useFakeTimers({ shouldAdvanceTime: true, advanceTimeDelta: 500 });
  const s = useStore.getState().settings;
  useStore.setState({ settings: { ...s, llmProvider: 'groq', keys: { ...s.keys, groq: 'g', gemini: '' } } });
  let n = 0;
  vi.stubGlobal('fetch', async () => {
    if (n++ === 0) throw new TypeError('Failed to fetch');
    return ok('Ja');
  });
  await expect(chat([{ role: 'user', content: 'hi' }])).resolves.toBe('Ja');
  vi.useRealTimers();
}, 30000);
