import { describe, expect, it } from 'vitest';
import type { RektionItem } from './types';

const mods = import.meta.glob<{ rektion: RektionItem[] }>('./rektion/*.ts', { eager: true });
const PREPS = ['an', 'auf', 'aus', 'bei', 'für', 'gegen', 'in', 'mit', 'nach', 'über', 'um', 'unter', 'von', 'vor', 'zu', 'zwischen', 'hinter', 'neben', 'durch', 'ohne', 'gegenüber', 'wegen', 'außer', 'seit', 'entgegen'];
const CONTRACTIONS: Record<string, string[]> = { an: ['am', 'ans'], in: ['im', 'ins'], zu: ['zum', 'zur'], bei: ['beim'], von: ['vom'], auf: ['aufs'], für: ['fürs'], um: ['ums'] };
const MIN: Record<string, number> = { b1: 160, b2: 130, c1: 90 };

describe('verb government lists', () => {
  it('loads', () => expect(mods).toBeDefined());
  for (const [path, mod] of Object.entries(mods)) {
    it(path, () => {
      const lvl = path.match(/\/(b1|b2|c1)\.ts$/)?.[1];
      expect(lvl, `${path}: file must be b1.ts, b2.ts or c1.ts`).toBeTruthy();
      expect(Array.isArray(mod.rektion), `${path} must export const rektion`).toBe(true);
      expect(mod.rektion.length, `${path} too few`).toBeGreaterThanOrEqual(MIN[lvl!]);
      const keys = new Set<string>();
      for (const r of mod.rektion) {
        const w = `${path} ${r.verb} ${r.prep ?? ''}`;
        if (r.prep) expect(PREPS, `${w}: unknown preposition`).toContain(r.prep);
        expect(['Akk', 'Dat', 'Gen', 'Akk+Dat'], w).toContain(r.case);
        expect(r.gap.split('___').length - 1, `${w}: gap must contain exactly one ___`).toBe(1);
        expect(r.gapAnswer.trim().length, w).toBeGreaterThan(0);
        expect(r.example.length, w).toBeGreaterThan(10);
        expect(r.ru.length, w).toBeGreaterThan(2);
        if (r.prep) expect([r.prep, ...(CONTRACTIONS[r.prep] ?? [])], `${w}: gapAnswer should be the preposition (or its contraction)`).toContain(r.gapAnswer.toLowerCase());
        const k = `${r.verb}|${r.prep ?? ''}|${r.case}`.toLowerCase();
        expect(keys.has(k), `${w}: duplicate`).toBe(false);
        keys.add(k);
      }
    });
  }
});
