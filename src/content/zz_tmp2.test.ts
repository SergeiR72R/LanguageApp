import { it } from 'vitest';
import { allUnits, wordBank, lemmaKey } from './index';
import { words } from './a1/words/u05';
it('x', () => {
  const kept = wordBank('a1-05').map(lemmaKey);
  console.log('DROP', words.filter(v => !kept.includes(lemmaKey(v))).map(v => lemmaKey(v) + '→' + allUnits.filter(u => u.vocab.some(w => lemmaKey(w) === lemmaKey(v))).map(u => u.id).join(',')).join('; '));
});
