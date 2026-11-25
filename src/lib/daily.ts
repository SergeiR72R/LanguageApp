import { allUnits, getUnit } from '../content';
import { wordQueue, wordsLeftToday } from './words';
import { daysBetween, today } from './date';
import { isLlmConfigured } from './ai/providers';
import { currentUnitId, dueCards, type AppState, type PlanItem } from './store';
import { STEPS, type StepId } from './steps';

/** Next not-done steps of a unit, in the fixed sequence. */
export function pendingSteps(s: Pick<AppState, 'units'>, unitId: string): StepId[] {
  const up = s.units[unitId];
  return STEPS.map((x) => x.id).filter((id) => !up?.steps[id]?.done);
}

/**
 * Build today's plan:
 * 1. SRS review (consolidation of everything learned so far) – always first.
 * 2. The next steps of the current unit (amount depends on the daily time budget).
 * 3. Weekly consolidation test across completed units.
 * 4. Error work when the error notebook fills up; free conversation practice when AI is configured.
 */
export function buildPlan(s: AppState): PlanItem[] {
  const d = today();
  const items: PlanItem[] = [];
  if (dueCards(s, d).length > 0 || Object.keys(s.cards).length > 0) items.push({ kind: 'review' });

  if (wordsLeftToday(s) > 0 && wordQueue(s, 1).length > 0) items.push({ kind: 'words' });

  const cur = currentUnitId(s);
  if (cur && getUnit(cur)) {
    const budget = s.settings.dailyMinutes - (items.some((i) => i.kind === 'review') ? 10 : 0) - (items.some((i) => i.kind === 'words') ? 10 : 0);
    let used = 0;
    const steps = pendingSteps(s, cur);
    for (const step of steps) {
      const minutes = STEPS.find((x) => x.id === step)!.minutes;
      if (used > 0 && used + minutes > budget) break;
      items.push({ kind: 'step', unitId: cur, step });
      used += minutes;
    }
  }

  const completed = Object.values(s.units).filter((u) => u.completed).length;
  const last = s.consolidations[s.consolidations.length - 1]?.date;
  if (completed >= 1 && (!last || daysBetween(last, d) >= 7)) items.push({ kind: 'consolidation' });

  // exam training once a level is finished (and every 2 weeks after that until all mock exams are done)
  for (const level of ['B1', 'B2', 'C1'] as const) {
    const lvlUnits = allUnits.filter((u) => u.level === level);
    const finished = lvlUnits.length > 0 && lvlUnits.every((u) => s.units[u.id]?.completed);
    const lastExam = s.examResults.filter((r) => r.examId.startsWith(level.toLowerCase())).map((r) => r.date).sort().pop();
    if (finished && (!lastExam || daysBetween(lastExam, d) >= 14)) {
      items.push({ kind: 'exam', level });
      break;
    }
  }

  const openMistakes = s.mistakes.filter((m) => !m.resolved).length;
  if (isLlmConfigured(s.settings) && openMistakes >= 8) items.push({ kind: 'mistakes' });

  const hasSpeakingStep = items.some((i) => i.kind === 'step' && i.step === 'speaking');
  if (isLlmConfigured(s.settings) && !hasSpeakingStep && s.settings.dailyMinutes >= 40) items.push({ kind: 'conversation' });

  return items;
}

/** Is a plan item finished today? */
export function isPlanItemDone(s: AppState, item: PlanItem): boolean {
  const d = today();
  switch (item.kind) {
    case 'review':
      return dueCards(s, d).length === 0;
    case 'step': {
      const sp = s.units[item.unitId]?.steps[item.step];
      return !!sp?.done;
    }
    case 'consolidation':
      return s.consolidations.some((c) => c.date === d);
    case 'conversation':
      return s.conversations.some((c) => c.date === d);
    case 'mistakes':
      return (s.activity[d]?.drills ?? 0) > 0;
    case 'words':
      return wordsLeftToday(s) === 0 || wordQueue(s, 1).length === 0;
    case 'exam':
      return s.examResults.some((r) => r.date === d && r.examId.startsWith(item.level.toLowerCase()));
  }
}
