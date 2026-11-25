import type { Exercise } from '../content/types';
import { normalize } from './grading';

/** Fill the ___ gaps of a prompt. Options like "hatte … vorbereitet" fill several gaps in order. */
export function fillGaps(prompt: string, answer: string): string {
  const parts = prompt.split('___');
  if (parts.length === 1) return answer;
  const pieces = parts.length > 2 ? answer.split(/\s*(?:\.\.\.|…)\s*/) : [answer];
  if (pieces.length !== parts.length - 1) return parts.join(answer);
  return parts.reduce((acc, p, i) => acc + p + (i < pieces.length ? pieces[i] : ''), '');
}

/** "hat sich sich beworben" → true */
export function hasDoubledWord(sentence: string): boolean {
  const w = sentence.toLowerCase().replace(/[^\p{L}\s-]/gu, ' ').split(/\s+/).filter(Boolean);
  return w.some((x, i) => i > 0 && x === w[i - 1] && x.length > 1 && x !== 'das' && x !== 'die');
}

/** Cheap structural checks for AI-generated exercises. Returns a reason or null if the exercise looks sane. */
export function structuralProblem(ex: Exercise): string | null {
  switch (ex.type) {
    case 'choice': {
      if (ex.options.length < 3) return 'too few options';
      if (ex.answer < 0 || ex.answer >= ex.options.length) return 'answer out of range';
      if (new Set(ex.options.map(normalize)).size !== ex.options.length) return 'duplicate options';
      if (ex.prompt.includes('___') && hasDoubledWord(fillGaps(ex.prompt, ex.options[ex.answer]))) return 'answer repeats a word next to the gap';
      return null;
    }
    case 'gap': {
      if (ex.prompt.split('___').length !== 2) return 'gap count';
      if (!ex.answers.length || !ex.answers[0].trim()) return 'no answer';
      if (hasDoubledWord(fillGaps(ex.prompt, ex.answers[0]))) return 'answer repeats a word next to the gap';
      return null;
    }
    case 'transform':
      if (!ex.answers.length) return 'no answer';
      if (normalize(ex.answers[0]) === normalize(ex.prompt)) return 'answer equals prompt';
      return null;
    case 'order':
      if (ex.words.length < 3) return 'too few words';
      if (hasDoubledWord(ex.words.join(' '))) return 'doubled word';
      return null;
  }
}
