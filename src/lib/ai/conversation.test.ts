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
import { conversationSystemPrompt, conversationTurn } from './prompts';

afterEach(() => vi.unstubAllGlobals());

it('separates the reply from the analysis and regenerates an echoed reply', async () => {
  useStore.getState().setKey('groq', 'gsk_test');
  const opener = 'Guten Tag! Erzählen Sie etwas über sich.';
  const user = 'Ich arbeite als Ingenieur bei einer Firma in Berlin';
  const calls: string[] = [];
  let replyCalls = 0;
  vi.stubGlobal('fetch', async (_u: string, init: { body: string }) => {
    const body = JSON.parse(init.body);
    const sys: string = body.messages[0].content;
    let content: string;
    if (sys.includes('преподаватель немецкого')) {
      calls.push('analysis');
      expect(body.response_format).toEqual({ type: 'json_object' });
      content = JSON.stringify({ errors: [{ original: 'bei einer Firma', correction: 'bei einer Firma', category: 'Kasus', explanationRu: 'x' }], betterVersion: '', tipRu: '' });
    } else {
      calls.push('reply');
      expect(body.response_format).toBeUndefined();
      expect(body.messages[1]).toEqual({ role: 'user', content: '(Das Gespräch beginnt.)' });
      replyCalls++;
      content = replyCalls === 1 ? opener : 'Interessant! Was genau entwickeln Sie dort?';
    }
    return new Response(JSON.stringify({ choices: [{ message: { content } }] }), { status: 200 });
  });
  const r = await conversationTurn(conversationSystemPrompt('B1', 'Du bist Personalleiter.', ['x']), [
    { role: 'ai', text: opener },
    { role: 'user', text: user },
  ]);
  expect(r.reply).toBe('Interessant! Was genau entwickeln Sie dort?');
  expect(calls.filter((c) => c === 'reply')).toHaveLength(2); // echo of the opener → regenerated
  expect(calls).toContain('analysis');
  expect(r.errors).toHaveLength(0); // "errors" identical to the original are dropped
});
