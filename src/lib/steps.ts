import type { Unit, UnitStepId } from '../content/types';

export type StepId = UnitStepId;

export const STEPS: { id: StepId; title: string; de: string; icon: string; minutes: number }[] = [
  { id: 'phonics', title: 'Буквы и звуки', de: 'Laute', icon: '🔤', minutes: 20 },
  { id: 'vocab', title: 'Слова', de: 'Wortschatz', icon: '📚', minutes: 15 },
  { id: 'grammar', title: 'Грамматика', de: 'Grammatik', icon: '🧩', minutes: 30 },
  { id: 'reading', title: 'Чтение', de: 'Lesen', icon: '📖', minutes: 20 },
  { id: 'listening', title: 'Аудирование', de: 'Hören', icon: '🎧', minutes: 20 },
  { id: 'writing', title: 'Письмо', de: 'Schreiben', icon: '✍️', minutes: 20 },
  { id: 'speaking', title: 'Говорение', de: 'Sprechen', icon: '🗣️', minutes: 15 },
  { id: 'test', title: 'Тест юнита', de: 'Test', icon: '🏁', minutes: 10 },
];

export const stepMeta = (id: StepId) => STEPS.find((s) => s.id === id)!;

/** Unit test pass threshold */
export const UNIT_PASS = 0.7;
/** Grammar step pass threshold (first-try accuracy) */
export const GRAMMAR_PASS = 0.75;

const DEFAULT_STEPS: StepId[] = ['vocab', 'grammar', 'reading', 'listening', 'writing', 'speaking', 'test'];

/** The steps of a unit, in order (starter units of A1 have their own set). */
export function unitSteps(unit: Pick<Unit, 'steps'> | undefined) {
  const ids = unit?.steps ?? DEFAULT_STEPS;
  return STEPS.filter((x) => ids.includes(x.id));
}
