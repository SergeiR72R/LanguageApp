import { it } from 'vitest';
import { allUnits, wordBank } from './index';
import { structuralProblem } from '../lib/exerciseCheck';
const wordMods = import.meta.glob('./{a1,a2,b1}/words/u*.ts', { eager: true }) as any;
const moreMods = import.meta.glob('./a1/more/u1[345].ts', { eager: true }) as any;
const key = (v: any) => `${v.article ?? ''} ${v.de}`.toLowerCase().replace(/\s+/g, ' ').trim();
it('chk', () => {
  // who takes b1-02 words
  const b102 = wordMods['./b1/words/u02.ts'].words.map(key);
  const kept = new Set(wordBank('b1-02').map(key));
  const lost = b102.filter((k: string) => !kept.has(k));
  const owners: Record<string,string[]> = {};
  for (const u of allUnits) for (const v of u.vocab) if (lost.includes(key(v))) (owners[key(v)] ??= []).push(u.id+' core');
  for (const [p, m] of Object.entries(wordMods)) if (!p.includes('b1/words/u02')) for (const v of (m as any).words) if (lost.includes(key(v))) (owners[key(v)] ??= []).push(p);
  console.log('b1-02 lost', lost.length, JSON.stringify(owners));
  for (const id of ['a1-13','a1-14','a1-15']) {
    const u = allUnits.find(x => x.id === id)!;
    const raw = wordMods[`./a1/words/u${id.slice(3)}.ts`].words;
    const kept = new Set(wordBank(id).map(key));
    const dropped = raw.filter((v: any) => !kept.has(key(v))).map(key);
    console.log(id, 'bank raw', raw.length, 'kept', kept.size, 'dropped', dropped);
    // who has them
    for (const d of dropped) { for (const x of allUnits) if (x.vocab.some(v => key(v) === d)) console.log('  ', d, 'core in', x.id); for (const [p, m] of Object.entries(wordMods)) if ((m as any).words.some((v: any) => key(v) === d)) console.log('  ', d, 'bank', p); }
    console.log(id, 'expl len', u.grammar.explanationRu.length, 'listen words', u.listening.text.split(/\s+/).length);
    const coreAudio = u.grammar.exercises.filter((e: any) => e.audio).length;
    const m = moreMods[`./a1/more/u${id.slice(3)}.ts`].more;
    console.log(id, 'core ex', u.grammar.exercises.length, 'audio', coreAudio, 'more ex', m.exercises.length, 'audio', m.exercises.filter((e: any) => e.audio).length);
    for (const e of [...u.grammar.exercises, ...m.exercises]) { const p = structuralProblem(e); if (p) console.log('  PROBLEM', p, JSON.stringify(e).slice(0, 80)); }
    m.reading.forEach((r: any) => console.log('  reading', r.title, r.texts.reduce((a: number, t: any) => a + t.body.split(/\s+/).length, 0)));
    m.listening.forEach((r: any) => console.log('  listening', r.title, r.text.split(/\s+/).length));
    const missing = [...u.vocab, ...raw].filter((v: any) => !v.pronRu).map((v: any) => v.de);
    if (missing.length) console.log('  no pronRu', missing);
  }
});
