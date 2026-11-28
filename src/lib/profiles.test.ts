import { expect, it, vi } from 'vitest';

const mem = vi.hoisted(() => {
  const mem = new Map<string, string>();
  (globalThis as unknown as { localStorage: Storage }).localStorage = {
    getItem: (k: string) => mem.get(k) ?? null,
    setItem: (k: string, v: string) => void mem.set(k, v),
    removeItem: (k: string) => void mem.delete(k),
    clear: () => mem.clear(),
    key: () => null,
    length: 0,
  };
  // two learners on this device; the page was loaded with "me" active
  mem.set('deutsch-trainer-profiles', JSON.stringify({ profiles: [{ id: 'default', name: 'Я', emoji: '🦊' }, { id: 'wife', name: 'Жена', emoji: '🐻' }], active: 'default' }));
  mem.set('deutsch-trainer-v1:wife', JSON.stringify({ state: { startUnitId: 'b1-02', units: { 'b1-01': { steps: {}, completed: true } } }, version: 1 }));
  return mem;
});

import { useStore } from './store';

it("a save during a profile switch stays in the old profile and never overwrites the new one's data", () => {
  useStore.setState({ startUnitId: 'b2-05' });
  // the user picks the wife's profile: the registry changes, the page is about to reload…
  const reg = JSON.parse(mem.get('deutsch-trainer-profiles')!);
  mem.set('deutsch-trainer-profiles', JSON.stringify({ ...reg, active: 'wife' }));
  // …and before the reload something on the old page saves
  useStore.getState().logActivity({ reviews: 1 });
  const wife = JSON.parse(mem.get('deutsch-trainer-v1:wife')!).state;
  expect(wife.startUnitId).toBe('b1-02');
  expect(wife.activity).toBeUndefined();
  expect(JSON.parse(mem.get('deutsch-trainer-v1')!).state.startUnitId).toBe('b2-05');
});
