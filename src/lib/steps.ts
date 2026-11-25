export type StepId = 'vocab' | 'grammar' | 'listening' | 'writing' | 'speaking' | 'test';

export const STEPS: { id: StepId; title: string; de: string; icon: string; minutes: number }[] = [
  { id: 'vocab', title: 'Слова', de: 'Wortschatz', icon: '📚', minutes: 15 },
  { id: 'grammar', title: 'Грамматика', de: 'Grammatik', icon: '🧩', minutes: 20 },
  { id: 'listening', title: 'Аудирование', de: 'Hören', icon: '🎧', minutes: 15 },
  { id: 'writing', title: 'Письмо', de: 'Schreiben', icon: '✍️', minutes: 20 },
  { id: 'speaking', title: 'Говорение', de: 'Sprechen', icon: '🗣️', minutes: 15 },
  { id: 'test', title: 'Тест юнита', de: 'Test', icon: '🏁', minutes: 10 },
];

export const stepMeta = (id: StepId) => STEPS.find((s) => s.id === id)!;

/** Unit test pass threshold */
export const UNIT_PASS = 0.7;
/** Grammar step pass threshold (first-try accuracy) */
export const GRAMMAR_PASS = 0.75;
