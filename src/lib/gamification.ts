import { allUnits } from '../content';
import { addDays, today } from './date';
import { isMature } from './srs';
import type { AppState, DayActivity } from './store';

type Stats = Pick<AppState, 'activity' | 'units' | 'cards' | 'examResults' | 'mistakes' | 'writings' | 'conversations' | 'settings'>;

/** XP of one day, derived from the activity log (so it also works retroactively). */
export function xpOfDay(a?: Partial<DayActivity>): number {
  if (!a) return 0;
  const wrong = Math.max(0, (a.answered ?? 0) - (a.correct ?? 0));
  return Math.round(
    (a.correct ?? 0) * 3 +
      wrong * 1 +
      (a.stepsDone ?? 0) * 25 +
      (a.newWords ?? 0) * 2 +
      (a.spokenTurns ?? 0) * 5 +
      (a.wordsWritten ?? 0) * 0.3 +
      (a.drills ?? 0) * 15,
  );
}

export function totalXp(s: Stats): number {
  const days = Object.values(s.activity).reduce((a, d) => a + xpOfDay(d), 0);
  const units = Object.values(s.units).filter((u) => u.completed).length * 100;
  const exams = s.examResults.filter((r) => r.points >= 60).length * 50;
  return days + units + exams;
}

/** Monday of the week containing `date`. */
export function weekStart(date = today()): string {
  const [y, m, d] = date.split('-').map(Number);
  const wd = (new Date(y, m - 1, d).getDay() + 6) % 7; // 0 = Monday
  return addDays(date, -wd);
}

export function xpBetween(s: Pick<AppState, 'activity'>, from: string, to: string): number {
  let xp = 0;
  for (const [day, a] of Object.entries(s.activity)) if (day >= from && day <= to) xp += xpOfDay(a);
  return xp;
}

export const weekXp = (s: Pick<AppState, 'activity'>, date = today()) => xpBetween(s, weekStart(date), addDays(weekStart(date), 6));
export const lastWeekXp = (s: Pick<AppState, 'activity'>) => {
  const start = addDays(weekStart(), -7);
  return xpBetween(s, start, addDays(start, 6));
};
export const todayXp = (s: Pick<AppState, 'activity'>) => xpOfDay(s.activity[today()]);

// ---------- player level ----------

/** XP needed to reach level L: 50·L·(L−1) → L2 = 100, L3 = 300, L5 = 1000, L10 = 4500 … */
const need = (L: number) => 50 * L * (L - 1);

export function levelInfo(xp: number): { level: number; into: number; span: number; rank: string; icon: string } {
  let L = 1;
  while (xp >= need(L + 1)) L++;
  const ranks: [number, string, string][] = [
    [1, 'Anfänger', '🌱'],
    [3, 'Lernender', '📗'],
    [6, 'Entdecker', '🧭'],
    [10, 'Sprachfreund', '💬'],
    [15, 'Kenner', '🎓'],
    [20, 'Profi', '🏅'],
    [30, 'Meister', '👑'],
  ];
  const [, rank, icon] = [...ranks].reverse().find(([from]) => L >= from)!;
  return { level: L, into: xp - need(L), span: need(L + 1) - need(L), rank, icon };
}

export function dailyGoalXp(s: Pick<AppState, 'settings'>): number {
  return { 20: 60, 40: 120, 60: 180, 90: 260 }[s.settings.dailyMinutes] ?? 120;
}

// ---------- streaks ----------

const activeDay = (a?: DayActivity) => !!a && (a.answered > 0 || a.stepsDone > 0 || a.spokenTurns > 0 || a.wordsWritten > 0);

export function bestStreak(activity: Record<string, DayActivity>): number {
  const days = Object.keys(activity).filter((d) => activeDay(activity[d])).sort();
  let best = 0;
  let cur = 0;
  let prev = '';
  for (const d of days) {
    cur = prev && addDays(prev, 1) === d ? cur + 1 : 1;
    best = Math.max(best, cur);
    prev = d;
  }
  return best;
}

// ---------- achievements ----------

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  desc: string;
  check: (s: Stats) => boolean;
}

const vocabCount = (s: Stats) => Object.values(s.cards).filter((c) => c.kind === 'vocab').length;
const matureCount = (s: Stats) => Object.values(s.cards).filter((c) => c.kind === 'vocab' && isMature(c.srs)).length;
const unitsDone = (s: Stats) => Object.values(s.units).filter((u) => u.completed).length;
const levelDone = (s: Stats, lvl: string) => allUnits.filter((u) => u.level === lvl).every((u) => s.units[u.id]?.completed);
const sumAct = (s: Stats, k: keyof DayActivity) => Object.values(s.activity).reduce((a, d) => a + (d[k] ?? 0), 0);

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-step', icon: '👣', title: 'Erster Schritt', desc: 'Пройти первый шаг юнита', check: (s) => sumAct(s, 'stepsDone') >= 1 },
  { id: 'unit-1', icon: '🏁', title: 'Geschafft!', desc: 'Пройти первый юнит', check: (s) => unitsDone(s) >= 1 },
  { id: 'unit-5', icon: '🚀', title: 'In Fahrt', desc: 'Пройти 5 юнитов', check: (s) => unitsDone(s) >= 5 },
  { id: 'unit-15', icon: '🏔️', title: 'Halbzeit', desc: 'Пройти 15 юнитов', check: (s) => unitsDone(s) >= 15 },
  { id: 'b1', icon: '🥉', title: 'B1 erledigt', desc: 'Пройти весь уровень B1', check: (s) => levelDone(s, 'B1') },
  { id: 'b2', icon: '🥈', title: 'B2 erledigt', desc: 'Пройти весь уровень B2', check: (s) => levelDone(s, 'B2') },
  { id: 'c1', icon: '🥇', title: 'C1 erledigt', desc: 'Пройти весь уровень C1', check: (s) => levelDone(s, 'C1') },
  { id: 'streak-3', icon: '🔥', title: 'Drei am Stück', desc: 'Заниматься 3 дня подряд', check: (s) => bestStreak(s.activity) >= 3 },
  { id: 'streak-7', icon: '📅', title: 'Eine ganze Woche', desc: '7 дней подряд', check: (s) => bestStreak(s.activity) >= 7 },
  { id: 'streak-30', icon: '🗓️', title: 'Monatsmarathon', desc: '30 дней подряд', check: (s) => bestStreak(s.activity) >= 30 },
  { id: 'streak-100', icon: '💯', title: 'Unaufhaltsam', desc: '100 дней подряд', check: (s) => bestStreak(s.activity) >= 100 },
  { id: 'words-100', icon: '📚', title: 'Wortsammler', desc: '100 слов в изучении', check: (s) => vocabCount(s) >= 100 },
  { id: 'words-500', icon: '📖', title: 'Wortschatz-Profi', desc: '500 слов в изучении', check: (s) => vocabCount(s) >= 500 },
  { id: 'words-1500', icon: '🧠', title: 'Lexikon', desc: '1 500 слов в изучении', check: (s) => vocabCount(s) >= 1500 },
  { id: 'verbs-50', icon: '🔗', title: 'Präpositionen-Profi', desc: '50 глаголов с управлением в изучении', check: (s) => Object.values(s.cards).filter((c) => c.kind === 'rektion').length >= 50 },
  { id: 'verbs-200', icon: '⛓️', title: 'Rektion-Meister', desc: '200 глаголов с управлением в изучении', check: (s) => Object.values(s.cards).filter((c) => c.kind === 'rektion').length >= 200 },
  { id: 'mature-100', icon: '🌳', title: 'Fest verankert', desc: '100 слов закреплено надолго', check: (s) => matureCount(s) >= 100 },
  { id: 'answers-1000', icon: '✅', title: 'Tausendsassa', desc: '1 000 правильных ответов', check: (s) => sumAct(s, 'correct') >= 1000 },
  { id: 'talk-50', icon: '🗣️', title: 'Plaudertasche', desc: '50 реплик в разговоре с ИИ', check: (s) => sumAct(s, 'spokenTurns') >= 50 },
  { id: 'write-1000', icon: '✍️', title: 'Schreibfeder', desc: 'Написать 1 000 слов', check: (s) => sumAct(s, 'wordsWritten') >= 1000 },
  { id: 'writing-90', icon: '🌟', title: 'Fast fehlerfrei', desc: 'Получить 90+ баллов за письмо', check: (s) => s.writings.some((w) => (w.score ?? 0) >= 90) },
  { id: 'mistakes-20', icon: '🩹', title: 'Aus Fehlern lernen', desc: 'Исправить 20 своих ошибок', check: (s) => s.mistakes.filter((m) => m.resolved).length >= 20 },
  { id: 'exam-pass', icon: '🎓', title: 'Prüfungsreif', desc: 'Сдать модуль пробного экзамена (60+)', check: (s) => s.examResults.some((r) => r.points >= 60) },
  { id: 'exam-all', icon: '🏆', title: 'Zertifikat in Sicht', desc: 'Сдать все 4 модуля одного пробного экзамена', check: (s) => {
      const byExam = new Map<string, Set<string>>();
      for (const r of s.examResults) if (r.points >= 60) byExam.set(r.examId, (byExam.get(r.examId) ?? new Set()).add(r.module));
      return [...byExam.values()].some((m) => m.size === 4);
    } },
  { id: 'goal-day', icon: '🎯', title: 'Tagesziel', desc: 'Выполнить дневную цель по XP', check: (s) => Object.values(s.activity).some((a) => xpOfDay(a) >= dailyGoalXp(s)) },
  { id: 'big-day', icon: '⚡', title: 'Power-Tag', desc: 'Набрать 300 XP за день', check: (s) => Object.values(s.activity).some((a) => xpOfDay(a) >= 300) },
];

export function unlockedAchievements(s: Stats): Achievement[] {
  return ACHIEVEMENTS.filter((a) => {
    try {
      return a.check(s);
    } catch {
      return false;
    }
  });
}
