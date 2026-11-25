/**
 * Exports word lists for picture generation (Google Flow etc.).
 * Run: npx vite-node tools/export-words.ts
 * Output: tools/word-images/<level>-core.csv (20 core words per unit) and <level>-bank.csv (word-of-the-day bank).
 */
import { writeFileSync } from 'node:fs';
import { allUnits, wordBank } from '../src/content';
import { wordSlug } from '../src/lib/images';
import type { VocabItem } from '../src/content/types';

const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
const header = 'file_name,german,russian,part_of_speech,example_sentence,unit';
const row = (v: VocabItem, unit: string) =>
  [`${wordSlug(v.de)}.png`, v.article ? `${v.article} ${v.de}` : v.de, v.ru, v.pos, v.example, unit].map((x) => esc(String(x))).join(',');

for (const level of ['B1', 'B2', 'C1'] as const) {
  const units = allUnits.filter((u) => u.level === level);
  const seen = new Set<string>();
  const core: string[] = [];
  const bank: string[] = [];
  for (const u of units) {
    for (const v of u.vocab) if (!seen.has(wordSlug(v.de))) (seen.add(wordSlug(v.de)), core.push(row(v, `${u.id} ${u.title}`)));
    for (const v of wordBank(u.id)) if (!seen.has(wordSlug(v.de))) (seen.add(wordSlug(v.de)), bank.push(row(v, `${u.id} ${u.title}`)));
  }
  writeFileSync(`tools/word-images/${level.toLowerCase()}-core.csv`, [header, ...core].join('\n') + '\n');
  writeFileSync(`tools/word-images/${level.toLowerCase()}-bank.csv`, [header, ...bank].join('\n') + '\n');
  console.log(level, 'core', core.length, 'bank', bank.length);
}
