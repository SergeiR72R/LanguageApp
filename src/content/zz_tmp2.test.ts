import { it } from 'vitest';
import { readFileSync } from 'fs';
import { allUnits } from './index';
const wordMods = import.meta.glob('./{a1,a2}/words/u*.ts', { eager: true }) as any;
const lk = (v: any) => `${v.article ?? ''} ${v.de}`.toLowerCase().replace(/\s+/g, ' ').trim();
it('c', () => {
  const core = new Map<string, string[]>();
  for (const u of allUnits) for (const v of u.vocab) { const k = lk(v); core.set(k, [...(core.get(k) ?? []), u.id]); }
  const bank = new Map<string, string[]>();
  for (const [p, m] of Object.entries(wordMods)) {
    const id = p.replace(/.*\/(a[12])\/words\/u(\d+).ts/, '$1-$2');
    if (id.startsWith('a2-') && +id.slice(3) >= 16) continue;
    for (const v of m.words) { const k = lk(v); bank.set(k, [...(bank.get(k) ?? []), id]); }
  }
  const out = readFileSync('/tmp/claude-0/-home-user-LanguageApp/8c5ffa55-dade-5b27-a3f3-99e43eac4b94/scratchpad/cands.txt', 'utf8').split('\n').filter(Boolean).map((c) => { const k = c.toLowerCase(); return `${c}: ${(core.get(k) ?? []).map(x=>x+'c').join(',')} ${(bank.get(k) ?? []).join(',')}`; });
  console.log(out.join('\n'));
});
