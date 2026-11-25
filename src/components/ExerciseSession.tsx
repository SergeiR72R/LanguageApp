import { useState } from 'react';
import type { Exercise } from '../content/types';
import { useStore } from '../lib/store';
import { ExerciseView, type ExerciseOutcome } from './ExerciseView';
import { ProgressBar } from './ui';

export interface SessionResult {
  outcomes: ExerciseOutcome[];
  score: number;
}

/** Runs a list of exercises one after another and reports the score. */
export function ExerciseSession({
  exercises,
  onFinish,
  title,
  renderSummary,
}: {
  exercises: Exercise[];
  onFinish: (r: SessionResult) => void;
  title?: string;
  renderSummary?: (r: SessionResult, restart: () => void) => React.ReactNode;
}) {
  const [i, setI] = useState(0);
  const [outcomes, setOutcomes] = useState<ExerciseOutcome[]>([]);
  const [done, setDone] = useState<SessionResult | null>(null);
  const logActivity = useStore((s) => s.logActivity);

  if (!exercises.length) return <p className="muted">Нет упражнений.</p>;

  const restart = () => {
    setI(0);
    setOutcomes([]);
    setDone(null);
  };

  if (done) {
    return (
      <div className="session-summary">
        {renderSummary ? (
          renderSummary(done, restart)
        ) : (
          <>
            <h3>Результат: {Math.round(done.score * 100)}%</h3>
            <button className="btn" onClick={restart}>
              Ещё раз
            </button>
          </>
        )}
      </div>
    );
  }

  const correct = outcomes.filter((o) => o.correct).length;

  return (
    <div className="session">
      <div className="session-head">
        {title && <strong>{title}</strong>}
        <span className="muted">
          {i + 1} / {exercises.length} · верно {correct}
        </span>
      </div>
      <ProgressBar value={i / exercises.length} />
      <ExerciseView
        key={i}
        ex={exercises[i]}
        seed={i * 7919 + 13}
        onDone={(o) => {
          logActivity({ answered: 1, correct: o.correct ? 1 : 0 });
          const next = [...outcomes, o];
          setOutcomes(next);
          if (i + 1 >= exercises.length) {
            const r = { outcomes: next, score: next.filter((x) => x.correct).length / next.length };
            setDone(r);
            onFinish(r);
          } else setI(i + 1);
        }}
      />
    </div>
  );
}
