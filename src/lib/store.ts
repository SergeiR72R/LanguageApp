import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { activeStorageKey } from './profiles';
import type { Exercise, Level } from '../content/types';
import { allUnits, unitIndex } from '../content';
import { today as todayStr } from './date';
import { newSrs, schedule, type Grade, type SrsState } from './srs';
import type { StepId } from './steps';

export type LlmProvider = 'groq' | 'gemini' | 'openrouter' | 'custom';

export interface Settings {
  llmProvider: LlmProvider;
  llmModel: string;
  customBaseUrl: string;
  keys: { groq: string; gemini: string; openrouter: string; custom: string };
  sttProvider: 'groq' | 'browser';
  sttModel: string;
  ttsProvider: 'browser' | 'gemini';
  browserVoice: string;
  browserVoiceB: string;
  geminiTtsModel: string;
  geminiVoice: string;
  geminiVoiceB: string;
  /** use Gemini only for listening texts and dialogs; short words/sentences use the browser voice to save the free quota */
  geminiLongOnly: boolean;
  speechRate: number;
  dailyMinutes: 20 | 40 | 60 | 90;
  newWordsPerDay: number;
  newVerbsPerDay: number;
  reviewLimit: number;
  showRuHints: boolean;
  sounds: boolean;
  animations: boolean;
}

export const defaultSettings: Settings = {
  llmProvider: 'groq',
  llmModel: 'openai/gpt-oss-120b',
  customBaseUrl: 'http://localhost:11434/v1',
  keys: { groq: '', gemini: '', openrouter: '', custom: '' },
  sttProvider: 'groq',
  sttModel: 'whisper-large-v3-turbo',
  ttsProvider: 'browser',
  browserVoice: '',
  browserVoiceB: '',
  geminiTtsModel: 'gemini-2.5-flash-preview-tts',
  geminiVoice: 'Kore',
  geminiVoiceB: 'Puck',
  geminiLongOnly: true,
  speechRate: 0.95,
  dailyMinutes: 40,
  newWordsPerDay: 15,
  newVerbsPerDay: 5,
  reviewLimit: 80,
  showRuHints: true,
  sounds: true,
  animations: true,
};

export interface PlacementResult {
  date: string;
  byBand: Record<string, { correct: number; total: number }>;
  bySkill: Record<string, { correct: number; total: number }>;
  estimated: 'A2' | Level | 'C1+';
  recommendedUnitId: string;
  aiAssessment?: string;
}

export interface StepProgress {
  done: boolean;
  score?: number;
  date: string;
  attempts?: number;
}

export interface UnitProgress {
  steps: Partial<Record<StepId, StepProgress>>;
  completed?: boolean;
  completedDate?: string;
}

export type CardKind = 'vocab' | 'grammar' | 'mistake' | 'rektion';

export interface Card {
  id: string;
  kind: CardKind;
  unitId?: string;
  index?: number;
  mistakeId?: string;
  /** true = from the unit's word bank / extra exercises instead of the core list */
  bank?: boolean;
  /** verb government entry id (kind 'rektion') */
  rektionId?: string;
  srs: SrsState;
  added: string;
}

export type MistakeCategory =
  | 'Artikel/Genus'
  | 'Kasus'
  | 'Adjektivendung'
  | 'Verbform/Konjugation'
  | 'Zeitform'
  | 'Wortstellung'
  | 'Präposition'
  | 'Konjunktiv/Modus'
  | 'Passiv'
  | 'Wortschatz/Lexik'
  | 'Rechtschreibung'
  | 'Zeichensetzung'
  | 'Aussprache'
  | 'Stil/Register'
  | 'Sonstiges';

export const MISTAKE_CATEGORIES: MistakeCategory[] = [
  'Artikel/Genus',
  'Kasus',
  'Adjektivendung',
  'Verbform/Konjugation',
  'Zeitform',
  'Wortstellung',
  'Präposition',
  'Konjunktiv/Modus',
  'Passiv',
  'Wortschatz/Lexik',
  'Rechtschreibung',
  'Zeichensetzung',
  'Aussprache',
  'Stil/Register',
  'Sonstiges',
];

export interface Mistake {
  id: string;
  date: string;
  source: 'writing' | 'speaking' | 'exercise';
  unitId?: string;
  original: string;
  correction: string;
  category: MistakeCategory;
  explanationRu: string;
  ruleRu?: string;
  resolved?: boolean;
}

export interface DayActivity {
  reviews: number;
  correct: number;
  answered: number;
  stepsDone: number;
  newWords: number;
  spokenTurns: number;
  wordsWritten: number;
  drills: number;
  bankWords: number;
  newVerbs: number;
}

export interface WritingEntry {
  id: string;
  date: string;
  unitId?: string;
  task: string;
  text: string;
  score?: number;
  cefr?: string;
  feedback?: unknown;
}

export interface ConversationEntry {
  id: string;
  date: string;
  unitId?: string;
  topic: string;
  turns: number;
  summary?: unknown;
}

export interface ExamResult {
  examId: string;
  date: string;
  module: 'lesen' | 'hoeren' | 'schreiben' | 'sprechen';
  /** 0..100 points as in the Goethe exam */
  points: number;
  details?: unknown;
}

export interface ConsolidationEntry {
  date: string;
  score: number;
  total: number;
}

export interface AppState {
  settings: Settings;
  placement?: PlacementResult;
  startUnitId?: string;
  units: Record<string, UnitProgress>;
  cards: Record<string, Card>;
  mistakes: Mistake[];
  activity: Record<string, DayActivity>;
  writings: WritingEntry[];
  conversations: ConversationEntry[];
  consolidations: ConsolidationEntry[];
  examResults: ExamResult[];
  /** exercises the learner flagged as wrong (to send to the developer) */
  reports: { date: string; exercise: Exercise; given: string }[];
  /** gamification bookkeeping: achievements already celebrated, last level seen, day the daily goal was celebrated */
  celebrated: { achievements: string[]; level: number; goalDay: string };
  plan?: { date: string; items: PlanItem[] };

  updateSettings: (p: Partial<Settings>) => void;
  setKey: (provider: LlmProvider, key: string) => void;
  setPlacement: (r: PlacementResult, startUnitId: string) => void;
  setStartUnit: (unitId: string) => void;
  completeStep: (unitId: string, step: StepId, score?: number, done?: boolean) => void;
  addCards: (cards: Omit<Card, 'srs' | 'added'>[], dueInDays?: number[] | number) => void;
  gradeCard: (id: string, grade: Grade) => void;
  removeCard: (id: string) => void;
  addMistakes: (m: Omit<Mistake, 'id' | 'date'>[]) => void;
  updateMistake: (id: string, p: Partial<Mistake>) => void;
  deleteMistake: (id: string) => void;
  logActivity: (p: Partial<DayActivity>) => void;
  addWriting: (w: Omit<WritingEntry, 'id' | 'date'>) => void;
  addConversation: (c: Omit<ConversationEntry, 'id' | 'date'>) => void;
  addConsolidation: (c: Omit<ConsolidationEntry, 'date'>) => void;
  addExamResult: (r: Omit<ExamResult, 'date'>) => void;
  setCelebrated: (p: Partial<AppState['celebrated']>) => void;
  addReport: (r: { exercise: Exercise; given: string }) => void;
  clearReports: () => void;
  setPlan: (plan: { date: string; items: PlanItem[] }) => void;
  importState: (data: Partial<AppState>) => void;
  resetAll: () => void;
}

export type PlanItem =
  | { kind: 'review' }
  | { kind: 'step'; unitId: string; step: StepId }
  | { kind: 'consolidation' }
  | { kind: 'conversation' }
  | { kind: 'mistakes' }
  | { kind: 'words' }
  | { kind: 'verbs' }
  | { kind: 'exam'; level: Level };

const emptyDay = (): DayActivity => ({
  reviews: 0,
  correct: 0,
  answered: 0,
  stepsDone: 0,
  newWords: 0,
  spokenTurns: 0,
  wordsWritten: 0,
  drills: 0,
  bankWords: 0,
  newVerbs: 0,
});

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

const initialData = {
  settings: defaultSettings,
  placement: undefined,
  startUnitId: undefined,
  units: {},
  cards: {},
  mistakes: [],
  activity: {},
  writings: [],
  conversations: [],
  consolidations: [],
  examResults: [],
  reports: [],
  celebrated: { achievements: [], level: 1, goalDay: '' },
  plan: undefined,
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialData,

      updateSettings: (p) => set((s) => ({ settings: { ...s.settings, ...p } })),
      setKey: (provider, key) => set((s) => ({ settings: { ...s.settings, keys: { ...s.settings.keys, [provider]: key } } })),

      setPlacement: (r, startUnitId) => set({ placement: r, startUnitId, plan: undefined }),
      setStartUnit: (startUnitId) => set({ startUnitId, plan: undefined }),

      completeStep: (unitId, step, score, done = true) =>
        set((s) => {
          const up: UnitProgress = s.units[unitId] ?? { steps: {} };
          const prev = up.steps[step];
          const wasDone = prev?.done ?? false;
          const best = Math.max(prev?.score ?? 0, score ?? 0);
          const steps = {
            ...up.steps,
            [step]: {
              done: wasDone || done,
              score: score === undefined ? prev?.score : best,
              date: todayStr(),
              attempts: (prev?.attempts ?? 0) + 1,
            },
          };
          const completed = up.completed || (step === 'test' && done);
          const units = {
            ...s.units,
            [unitId]: { steps, completed, completedDate: completed ? up.completedDate ?? todayStr() : undefined },
          };
          const d = todayStr();
          const activity = !wasDone && done
            ? { ...s.activity, [d]: { ...emptyDay(), ...s.activity[d], stepsDone: (s.activity[d]?.stepsDone ?? 0) + 1 } }
            : s.activity;
          return { units, activity };
        }),

      addCards: (cards, dueInDays = 1) =>
        set((s) => {
          const next = { ...s.cards };
          const d = todayStr();
          cards.forEach((c, i) => {
            if (next[c.id]) return;
            const offset = Array.isArray(dueInDays) ? dueInDays[i] ?? 1 : dueInDays;
            const srs = newSrs(d);
            const due = new Date();
            due.setDate(due.getDate() + offset);
            next[c.id] = { ...c, added: d, srs: { ...srs, due: offset === 0 ? d : toLocal(due) } };
          });
          return { cards: next };
        }),

      gradeCard: (id, grade) =>
        set((s) => {
          const c = s.cards[id];
          if (!c) return {};
          const d = todayStr();
          const day = { ...emptyDay(), ...s.activity[d] };
          day.reviews += 1;
          day.answered += 1;
          if (grade > 0) day.correct += 1;
          return { cards: { ...s.cards, [id]: { ...c, srs: schedule(c.srs, grade, d) } }, activity: { ...s.activity, [d]: day } };
        }),

      removeCard: (id) =>
        set((s) => {
          const next = { ...s.cards };
          delete next[id];
          return { cards: next };
        }),

      addMistakes: (list) => {
        const d = todayStr();
        const key = (m: { original: string; correction: string }) => `${m.original.trim().toLowerCase()}→${m.correction.trim().toLowerCase()}`;
        const known = new Set(get().mistakes.filter((m) => !m.resolved).map(key));
        const created: Mistake[] = [];
        for (const m of list) {
          if (known.has(key(m))) continue;
          known.add(key(m));
          created.push({ ...m, id: uid(), date: d });
        }
        if (!created.length) return;
        set((s) => ({ mistakes: [...created, ...s.mistakes].slice(0, 2000) }));
        const cards = created.filter(isReviewableMistake);
        if (cards.length) get().addCards(cards.map((m) => ({ id: `m:${m.id}`, kind: 'mistake' as const, mistakeId: m.id, unitId: m.unitId })), 1);
      },
      updateMistake: (id, p) => set((s) => ({ mistakes: s.mistakes.map((m) => (m.id === id ? { ...m, ...p } : m)) })),
      deleteMistake: (id) =>
        set((s) => {
          const cards = { ...s.cards };
          delete cards[`m:${id}`];
          return { mistakes: s.mistakes.filter((m) => m.id !== id), cards };
        }),

      logActivity: (p) =>
        set((s) => {
          const d = todayStr();
          const day = { ...emptyDay(), ...s.activity[d] };
          for (const [k, v] of Object.entries(p) as [keyof DayActivity, number][]) day[k] = (day[k] ?? 0) + v;
          return { activity: { ...s.activity, [d]: day } };
        }),

      addWriting: (w) => set((s) => ({ writings: [{ ...w, id: uid(), date: todayStr() }, ...s.writings].slice(0, 300) })),
      addConversation: (c) =>
        set((s) => ({ conversations: [{ ...c, id: uid(), date: todayStr() }, ...s.conversations].slice(0, 300) })),
      addConsolidation: (c) => set((s) => ({ consolidations: [...s.consolidations, { ...c, date: todayStr() }] })),
      addExamResult: (r) => set((s) => ({ examResults: [...s.examResults, { ...r, date: todayStr() }].slice(-300) })),
      addReport: (r) => set((s) => ({ reports: [...(s.reports ?? []), { ...r, date: todayStr() }].slice(-200) })),
      clearReports: () => set({ reports: [] }),
      setCelebrated: (p) => set((s) => ({ celebrated: { ...s.celebrated, ...p } })),
      setPlan: (plan) => set({ plan }),

      importState: (data) => set({ ...initialData, ...data, settings: { ...defaultSettings, ...(data.settings ?? {}) } }),
      resetAll: () => set({ ...initialData, settings: get().settings }),
    }),
    {
      name: 'deutsch-trainer-v1',
      version: 1,
      // the actual key depends on the active learner profile
      storage: createJSONStorage(() => ({
        getItem: () => localStorage.getItem(activeStorageKey()),
        setItem: (_name, value) => localStorage.setItem(activeStorageKey(), value),
        removeItem: () => localStorage.removeItem(activeStorageKey()),
      })),
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<AppState>;
        return {
          ...current,
          ...p,
          settings: { ...defaultSettings, ...(p.settings ?? {}), keys: { ...defaultSettings.keys, ...(p.settings?.keys ?? {}) } },
        };
      },
    },
  ),
);

function toLocal(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ---------- selectors / derived helpers ----------

export function isUnitDone(s: Pick<AppState, 'units'>, unitId: string): boolean {
  return !!s.units[unitId]?.completed;
}

/** Current unit = first unit from the start unit onwards that is not completed. */
export function currentUnitId(s: Pick<AppState, 'units' | 'startUnitId'>): string | undefined {
  if (!s.startUnitId) return undefined;
  const start = Math.max(0, unitIndex(s.startUnitId));
  for (let i = start; i < allUnits.length; i++) {
    if (!s.units[allUnits[i].id]?.completed) return allUnits[i].id;
  }
  return undefined; // course finished
}

/** Units before the start unit are "skipped by placement" (open, optional). Units after the current one are locked. */
export function unitStatus(
  s: Pick<AppState, 'units' | 'startUnitId'>,
  unitId: string,
): 'done' | 'current' | 'open' | 'locked' {
  if (s.units[unitId]?.completed) return 'done';
  const cur = currentUnitId(s);
  if (cur === unitId) return 'current';
  const idx = unitIndex(unitId);
  const start = s.startUnitId ? unitIndex(s.startUnitId) : 0;
  if (idx < start) return 'open';
  if (cur && idx > unitIndex(cur)) return 'locked';
  return 'open';
}

/** Error types that make good review cards: forms of words and basic grammar. */
const DRILLABLE: MistakeCategory[] = [
  'Artikel/Genus',
  'Kasus',
  'Adjektivendung',
  'Verbform/Konjugation',
  'Zeitform',
  'Präposition',
  'Wortschatz/Lexik',
  'Rechtschreibung',
  'Wortstellung',
];

/**
 * Only short, clear-cut mistakes become review cards (word forms, articles, cases, verb forms…).
 * Style, phrasing and "other" remarks — especially from free conversation — stay in the error notebook only.
 */
export function isReviewableMistake(m: Pick<Mistake, 'category' | 'source' | 'correction'>): boolean {
  if (!DRILLABLE.includes(m.category)) return false;
  const words = m.correction.trim().split(/\s+/).filter(Boolean).length;
  return words <= (m.source === 'speaking' ? 3 : 6);
}

export function dueCards(s: Pick<AppState, 'cards'> & Partial<Pick<AppState, 'mistakes'>>, date = todayStr()): Card[] {
  const skip = new Set((s.mistakes ?? []).filter((m) => !isReviewableMistake(m)).map((m) => `m:${m.id}`));
  return Object.values(s.cards)
    .filter((c) => c.srs.due <= date && !skip.has(c.id))
    .sort((a, b) => (a.srs.due < b.srs.due ? -1 : a.srs.due > b.srs.due ? 1 : a.srs.interval - b.srs.interval));
}

export function streak(activity: Record<string, DayActivity>): number {
  const active = (d: string) => {
    const a = activity[d];
    return !!a && (a.answered > 0 || a.stepsDone > 0 || a.spokenTurns > 0 || a.wordsWritten > 0);
  };
  let n = 0;
  const d = new Date();
  if (!active(toLocal(d))) d.setDate(d.getDate() - 1); // today not done yet doesn't break the streak
  while (active(toLocal(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
