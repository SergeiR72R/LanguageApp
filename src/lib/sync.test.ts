import { expect, it, vi } from 'vitest';

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

import { mergeHouseholds, type Household } from './sync';

it('keeps the names the user chose when a fresh device synced first', () => {
  const cloudFromFreshDevice: Household = { version: 1, deleted: [], profiles: [{ id: 'default', name: 'Профиль 1', emoji: '🦊' }], data: {} };
  const mainComputer: Household = {
    version: 1,
    deleted: [],
    profiles: [
      { id: 'default', name: 'Я', emoji: '🦊' },
      { id: 'p2', name: 'Леночка', emoji: '🐻' },
    ],
    data: { default: { updatedAt: 1, state: { startUnitId: 'b2-01' } } },
  };
  const m = mergeHouseholds(mainComputer, cloudFromFreshDevice);
  expect(m.profiles.map((p) => p.name)).toEqual(['Я', 'Леночка']);
  expect(m.data.default.state.startUnitId).toBe('b2-01');
  // and the other way round (fresh device pulling the main computer's cloud copy)
  const m2 = mergeHouseholds(cloudFromFreshDevice, mainComputer);
  expect(m2.profiles.map((p) => p.name).sort()).toEqual(['Леночка', 'Я']);
});
