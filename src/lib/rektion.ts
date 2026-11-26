import type { ChoiceExercise, Exercise } from '../content/types';
import type { RektionEntry } from '../content';
import { shuffle } from './grading';

/** "warten auf + Akk", "helfen + Dat", "geben + Dat + Akk" */
export function rektionLabel(r: RektionEntry): string {
  if (r.prep) return `${r.verb} ${r.prep} + ${r.case}`;
  if (r.case === 'Akk+Dat') return `${r.verb} + Dat + Akk`;
  return `${r.verb} + ${r.case}`;
}

const COMMON_PREPS = ['auf', 'an', 'für', 'über', 'mit', 'von', 'zu', 'nach', 'um', 'vor', 'bei', 'in', 'aus', 'gegen', 'unter'];
/** prepositions that form wo(r)-/da(r)- compounds */
const COMPOUND = ['an', 'auf', 'aus', 'bei', 'durch', 'für', 'gegen', 'hinter', 'in', 'mit', 'nach', 'neben', 'über', 'um', 'unter', 'von', 'vor', 'zu', 'zwischen'];
const vowelStart = (p: string) => /^[aeiouäöü]/.test(p);
export const woForm = (p: string) => `wo${vowelStart(p) ? 'r' : ''}${p}`;
export const daForm = (p: string) => `da${vowelStart(p) ? 'r' : ''}${p}`;

const seeded = (r: RektionEntry, k: number) => [...r.id].reduce((a, c) => a + c.charCodeAt(0), k);

function prepChoice(r: RektionEntry): ChoiceExercise {
  const distract = shuffle(COMMON_PREPS.filter((p) => p !== r.prep), seeded(r, 1)).slice(0, 3);
  const options = shuffle([r.prep!, ...distract], seeded(r, 2));
  return {
    type: 'choice',
    prompt: `${r.verb} ___ (+ ${r.case}) — ${r.ru}`,
    options,
    answer: options.indexOf(r.prep!),
    explanationRu: `${rektionLabel(r)}. ${r.example} — ${r.exampleRu}${r.noteRu ? ` ⚠️ ${r.noteRu}` : ''}`,
  };
}

function caseChoice(r: RektionEntry): ChoiceExercise {
  const options = r.prep ? ['Akk', 'Dat'] : ['Akk', 'Dat', 'Gen'];
  if (!options.includes(r.case)) options.push(r.case);
  return {
    type: 'choice',
    prompt: `${r.verb}${r.prep ? ` ${r.prep}` : ''} + ___ ?  (${r.ru})`,
    options,
    answer: options.indexOf(r.case),
    explanationRu: `${rektionLabel(r)}. ${r.example}${r.noteRu ? ` ⚠️ ${r.noteRu}` : ''}`,
  };
}

function gapExercise(r: RektionEntry): Exercise {
  return {
    type: 'gap',
    prompt: r.gap,
    answers: [r.gapAnswer],
    hintRu: `${r.verb}${r.prep ? '' : ` + ${r.case}`} — ${r.ru}`,
    explanationRu: `${rektionLabel(r)}. ${r.exampleRu}${r.noteRu ? ` ⚠️ ${r.noteRu}` : ''}`,
  };
}

function recallExercise(r: RektionEntry): Exercise {
  const bare = r.prep ? `${r.verb} ${r.prep}` : r.verb;
  const noSich = bare.replace(/^sich /, '');
  return {
    type: 'transform',
    instructionRu: r.prep ? 'Напишите глагол с предлогом' : `Напишите глагол (управление: + ${r.case})`,
    prompt: r.ru,
    answers: [bare, `${bare} + ${r.case}`, noSich, `${noSich} + ${r.case}`],
    explanationRu: `${rektionLabel(r)}. ${r.example}`,
  };
}

function woDaChoice(r: RektionEntry, da: boolean): ChoiceExercise {
  const p = r.prep!;
  const right = da ? daForm(p) : woForm(p);
  const others = shuffle(COMPOUND.filter((x) => x !== p), seeded(r, 3))
    .slice(0, 3)
    .map((x) => (da ? daForm(x) : woForm(x)));
  const options = shuffle([right, ...others], seeded(r, 4));
  return {
    type: 'choice',
    prompt: da
      ? `${r.verb} ${p}: «Я это помню / жду / …» — замените предмет: ___`
      : `${r.verb} ${p}: спросите о предмете — «___ …?»`,
    options,
    answer: options.indexOf(right),
    explanationRu: `${da ? 'da' : 'wo'} + ${vowelStart(p) ? 'r + ' : ''}${p} = ${right}. О людях так не говорят: ${da ? `${p} ihm/ihr` : `${p[0].toUpperCase() + p.slice(1)} wen/wem?`}`,
  };
}

/** Exercise for a review round; the type rotates with the number of successful reviews. */
export function rektionExercise(r: RektionEntry, reps: number): Exercise {
  const hasPrep = !!r.prep;
  const compound = hasPrep && COMPOUND.includes(r.prep!) && r.case !== 'Gen';
  const cycle: ((r: RektionEntry) => Exercise)[] = hasPrep
    ? [prepChoice, gapExercise, caseChoice, recallExercise, gapExercise, ...(compound ? [(x: RektionEntry) => woDaChoice(x, false), (x: RektionEntry) => woDaChoice(x, true)] : []), recallExercise]
    : [caseChoice, gapExercise, recallExercise, gapExercise];
  return cycle[reps % cycle.length](r);
}

/** First check right after learning: which preposition / which case. */
export function rektionIntroQuiz(r: RektionEntry): Exercise {
  return r.prep ? prepChoice(r) : caseChoice(r);
}
