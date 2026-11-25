import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Exercise, Unit } from '../../content/types';
import { getUnit } from '../../content';
import { useStore } from '../../lib/store';
import { shuffle } from '../../lib/grading';
import { STEPS, UNIT_PASS } from '../../lib/steps';
import { vocabChoice } from '../../lib/vocab';
import { pendingSteps } from '../../lib/daily';
import { ExerciseSession } from '../../components/ExerciseSession';
import { Card } from '../../components/ui';
import { confetti } from '../../components/Celebrate';
import { sfx } from '../../lib/sound';

function buildTest(unit: Unit, seed: number): Exercise[] {
  const gram = shuffle(unit.grammar.exercises, seed).slice(0, 8);
  const vocab = shuffle(unit.vocab.map((_, i) => i), seed + 1)
    .slice(0, 7)
    .map((i) => vocabChoice(unit, i, seed + i));
  return shuffle([...gram, ...vocab], seed + 2);
}

export function TestStep({ unit, nextUnitId }: { unit: Unit; nextUnitId?: string }) {
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const [started, setStarted] = useState(false);
  const exercises = useMemo(() => buildTest(unit, seed), [unit, seed]);
  const completeStep = useStore((s) => s.completeStep);
  const progress = useStore((s) => s.units[unit.id]);
  const pend = pendingSteps({ units: { [unit.id]: progress ?? { steps: {} } } }, unit.id).filter((x) => x !== 'test');
  const nextUnit = nextUnitId ? getUnit(nextUnitId) : undefined;

  if (!started)
    return (
      <Card>
        <h2>🏁 Тест юнита</h2>
        <p>
          15 заданий: грамматика и слова юнита. Для перехода к следующему юниту нужно {Math.round(UNIT_PASS * 100)}% и больше.
        </p>
        {progress?.steps.test?.score !== undefined && (
          <p>Лучший результат: {Math.round((progress.steps.test.score ?? 0) * 100)}%</p>
        )}
        {pend.length > 0 && (
          <div className="info-box">
            Сначала рекомендуется пройти все шаги юнита. Осталось:{' '}
            {pend.map((p) => (
              <Link key={p} to={`/unit/${unit.id}/${p}`} className="pill">
                {STEPS.find((x) => x.id === p)?.title}
              </Link>
            ))}
          </div>
        )}
        <button className={`btn ${pend.length ? '' : 'primary'} big`} onClick={() => setStarted(true)}>
          {pend.length ? 'Всё равно пройти тест' : 'Начать тест'}
        </button>
      </Card>
    );

  return (
    <Card>
      <ExerciseSession
        key={seed}
        title="Тест юнита"
        exercises={exercises}
        onFinish={(r) => {
          completeStep(unit.id, 'test', r.score, r.score >= UNIT_PASS);
          if (r.score >= UNIT_PASS) {
            confetti(220);
            sfx.fanfare();
          }
        }}
        renderSummary={(r) =>
          r.score >= UNIT_PASS ? (
            <>
              <h2>🎉 Юнит пройден: {Math.round(r.score * 100)}%</h2>
              <p>Материал юнита остаётся в интервальном повторении — так он закрепится надолго.</p>
              <div className="row wrap">
                {nextUnit && (
                  <Link className="btn primary" to={`/unit/${nextUnit.id}`}>
                    Следующий юнит: {nextUnit.title} →
                  </Link>
                )}
                <Link className="btn" to="/">
                  К плану на сегодня
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2>Результат: {Math.round(r.score * 100)}%</h2>
              <p>
                Нужно {Math.round(UNIT_PASS * 100)}%. Повторите правило и слова юнита, затем попробуйте снова — вопросы будут в
                другом порядке.
              </p>
              <div className="row wrap">
                <Link className="btn" to={`/unit/${unit.id}/grammar`}>
                  Повторить грамматику
                </Link>
                <Link className="btn" to={`/unit/${unit.id}/vocab`}>
                  Повторить слова
                </Link>
                <button className="btn primary" onClick={() => setSeed(seed + 1)}>
                  Пройти ещё раз
                </button>
              </div>
            </>
          )
        }
      />
    </Card>
  );
}
