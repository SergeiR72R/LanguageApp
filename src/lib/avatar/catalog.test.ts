import { describe, expect, it } from 'vitest';
import { SLOTS, agree, defaultLook, slotXp, starterEquipped, threshold, unlockedCount, validEquipped, wardrobe } from './catalog';

describe('wardrobe', () => {
  it('has dozens of unique items per category for both genders', () => {
    for (const g of ['f', 'm'] as const)
      for (const s of SLOTS) {
        const list = wardrobe(s.slot, g);
        expect(list.length, `${s.slot}/${g}`).toBeGreaterThanOrEqual(24);
        expect(new Set(list.map((i) => i.id)).size).toBe(list.length);
        expect(new Set(list.map((i) => i.name)).size, `${s.slot}/${g} names`).toBe(list.length);
      }
  });
  it('unlocks step by step, the first item is free', () => {
    for (let k = 1; k < 40; k++) expect(threshold(k)).toBeGreaterThan(threshold(k - 1));
    expect(unlockedCount('top', 'f', 0)).toBe(1);
    expect(unlockedCount('top', 'f', 10_000)).toBe(wardrobe('top', 'f').length);
  });
  it('counts experience per daily task type', () => {
    const xp = slotXp({ activity: { d: { reviews: 50, stepsDone: 2, bankWords: 10, newVerbs: 5, spokenTurns: 3, wordsWritten: 40, drills: 1 } }, consolidations: [{}], examResults: [{}, {}] });
    expect(xp).toEqual({ top: 50, bottom: 30, shoes: 30, hat: 40, outer: 28, acc: 40, neck: 120, bg: 120 });
  });
  it('keeps only unlocked items equipped and always dresses the basics', () => {
    const look = defaultLook('m');
    const locked = wardrobe('hat', 'm')[20].id;
    const eq = validEquipped({ look, equipped: { ...starterEquipped('m'), hat: locked } }, slotXp({ activity: {}, consolidations: [], examResults: [] }));
    expect(eq.hat).toBeUndefined();
    expect(eq.top).toBe(wardrobe('top', 'm')[0].id);
  });
  it('colour adjectives agree with the item', () => {
    expect(agree('синий', 'f')).toBe('синяя');
    expect(agree('белый', 'p')).toBe('белые');
    expect(agree('золотой', 'n')).toBe('золотое');
    expect(agree('космический', 'f')).toBe('космическая');
    expect(agree('тёмно-синий', 'p')).toBe('тёмно-синие');
  });
});
