import type { ChoiceExercise, Unit, VocabItem } from '../content/types';
import { allUnits } from '../content';
import { shuffle } from './grading';

export const withArticle = (v: VocabItem) => (v.article ? `${v.article} ${v.de}` : v.de);

/** ru → de multiple choice; distractors from the same unit (same part of speech preferred). */
export function vocabChoice(unit: Unit, idx: number, seed = idx): ChoiceExercise {
  const v = unit.vocab[idx];
  const pool = unit.vocab.filter((_, k) => k !== idx);
  const same = pool.filter((x) => x.pos === v.pos);
  const distract = shuffle(same.length >= 3 ? same : pool, seed).slice(0, 3);
  const options = shuffle([v, ...distract], seed + 1).map(withArticle);
  return {
    type: 'choice',
    prompt: `Как по-немецки: «${v.ru}»?`,
    options,
    answer: options.indexOf(withArticle(v)),
    explanationRu: `${withArticle(v)}${v.plural ? ` (мн. ч. ${v.plural})` : ''}${v.forms ? ` — ${v.forms}` : ''}. Пример: ${v.example}`,
  };
}

export function articleChoice(v: VocabItem): ChoiceExercise {
  const opts = ['der', 'die', 'das'];
  return {
    type: 'choice',
    prompt: `___ ${v.de} (${v.ru})`,
    options: opts,
    answer: opts.indexOf(v.article ?? 'der'),
    explanationRu: `${withArticle(v)}, мн. ч.: ${v.plural ?? '—'}. ${v.example}`,
  };
}

export function findVocab(unitId: string, index: number): { unit: Unit; v: VocabItem } | undefined {
  const unit = allUnits.find((u) => u.id === unitId);
  const v = unit?.vocab[index];
  return unit && v ? { unit, v } : undefined;
}

const UMLAUT: Record<string, string> = { a: 'ä', o: 'ö', u: 'ü', A: 'Ä', O: 'Ö', U: 'Ü' };

/** Umlaut the last stem vowel: Lauf → Läuf, Vertrag → Verträg, Mutter → Mütter. */
function umlautLast(word: string): string {
  const m = /(au|[aou])[^aeiouäöü]*(e[rln]?)?$/i.exec(word);
  if (!m) return word;
  const i = m.index;
  return word.slice(0, i) + (UMLAUT[word[i]] ?? word[i]) + word.slice(i + 1);
}

/** Human-readable plural: "-¨e" on "Lebenslauf" → "die Lebensläufe"; "–" → "нет мн. ч." */
export function pluralForm(v: VocabItem): string | undefined {
  const p = v.plural?.trim();
  if (!p) return undefined;
  if (p === '–' || p === '—' || /^(kein|нет|ohne)/i.test(p)) return 'нет мн. ч.';
  if (/nur\s*pl|только/i.test(p)) return 'только мн. ч.';
  // strip any article for the singular part
  const base = v.de.replace(/^(der|die|das)\s+/i, '');
  if (p === '-' || p === '-/-') return `die ${base}`;
  const m = /^-\s*(¨|̈|")?\s*(.*)$/.exec(p);
  if (m) {
    const stem = m[1] ? umlautLast(base) : base;
    return `die ${stem}${m[2]}`;
  }
  return p.startsWith('die ') ? p : `die ${p}`;
}
