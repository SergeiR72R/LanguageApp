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
import { generateExercises } from './prompts';

afterEach(() => vi.unstubAllGlobals());

it('drops AI exercises with a structurally wrong key or a key the blind solver disagrees with', async () => {
  useStore.getState().setKey('groq', 'gsk_test');
  const generated = {
    exercises: [
      { type: 'choice', prompt: 'Er ___ sich gestern beworben.', options: ['hatte', 'hat', 'hatte sich', 'hat sich'], answer: 3, explanationRu: 'x' },
      { type: 'choice', prompt: 'Sie ___ gestern angekommen.', options: ['hat', 'ist', 'wird'], answer: 0, explanationRu: 'wrong key' },
      { type: 'gap', prompt: 'Wir ___ nach Berlin gefahren.', answers: ['sind'], explanationRu: 'ok' },
    ],
  };
  const calls: string[] = [];
  vi.stubGlobal('fetch', async (_url: string, init: { body: string }) => {
    const body = JSON.parse(init.body);
    const sys: string = body.messages[0].content;
    calls.push(sys.includes('Löse die Aufgaben') ? 'verify' : 'generate');
    const content = sys.includes('Löse die Aufgaben')
      ? JSON.stringify({ results: [{ i: 0, answer: 1 }, { i: 1, answer: 'sind' }] }) // after structural filter: [choice "Sie ___", gap]
      : JSON.stringify(generated);
    return new Response(JSON.stringify({ choices: [{ message: { content } }] }), { status: 200 });
  });
  const out = await generateExercises({ level: 'B1', topic: 'Perfekt', count: 8 });
  expect(calls).toEqual(['generate', 'verify']);
  expect(out).toHaveLength(1);
  expect(out[0].type).toBe('gap');
});
