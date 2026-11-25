import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Exercise } from '../content/types';
import { allUnits } from '../content';
import { shuffle } from '../lib/grading';
import { useStore } from '../lib/store';
import { vocabChoice } from '../lib/vocab';
import { ExerciseSession } from '../components/ExerciseSession';
import { Card } from '../components/ui';

/** Mixed test over all completed units – weighted towards items the learner struggles with. */
export function Consolidation() {
  const s = useStore();
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const [started, setStarted] = useState(false);
  const done = allUnits.filter((u) => s.units[u.id]?.completed || s.units[u.id]?.steps.grammar?.done);

  const items = useMemo<{ ex: Exercise; id: string }[]>(() => {
    if (!done.length) return [];
    const weak = (id: string) => {
      const c = s.cards[id];
      return c ? c.srs.lapses * 2 + (c.srs.ease < 2.3 ? 2 : 0) + 1 : 1;
    };
    const gram = done.flatMap((u) => u.grammar.exercises.map((ex, i) => ({ ex, id: `g:${u.id}:${i}`, w: weak(`g:${u.id}:${i}`) })));
    const voc = done.flatMap((u) => u.vocab.map((_, i) => ({ ex: vocabChoice(u, i, seed + i), id: `v:${u.id}:${i}`, w: weak(`v:${u.id}:${i}`) })));
    const pick = (arr: { ex: Exercise; id: string; w: number }[], n: number) =>
      shuffle(arr, seed)
        .sort((a, b) => b.w - a.w + (Math.random() - 0.5) * 2)
        .slice(0, n)
        .map(({ ex, id }) => ({ ex, id }));
    return shuffle([...pick(gram, 12), ...pick(voc, 8)], seed + 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seed, done.length]);
  const exercises = items.map((x) => x.ex);

  if (!done.length)
    return (
      <div className="page narrow">
        <h1>🧠 Закрепление</h1>
        <Card>
          <p className="muted">Контрольная появится после прохождения первого юнита.</p>
          <Link to="/" className="btn">
            К плану
          </Link>
        </Card>
      </div>
    );

  return (
    <div className="page narrow">
      <h1>🧠 Контрольная на закрепление</h1>
      {!started ? (
        <Card>
          <p>
            20 заданий из всех пройденных юнитов ({done.length}). Чаще попадаются темы и слова, в которых вы ошибались.
            Рекомендуется раз в неделю.
          </p>
          {s.consolidations.length > 0 && (
            <p className="muted">
              Прошлые результаты:{' '}
              {s.consolidations
                .slice(-5)
                .map((c) => `${c.date}: ${Math.round((c.score / c.total) * 100)}%`)
                .join(' · ')}
            </p>
          )}
          <button className="btn primary big" onClick={() => setStarted(true)}>
            Начать
          </button>
        </Card>
      ) : (
        <Card>
          <ExerciseSession
            key={seed}
            title="Закрепление"
            exercises={exercises}
            onFinish={(r) => {
              s.addConsolidation({ score: r.outcomes.filter((o) => o.correct).length, total: r.outcomes.length });
              // forgotten items go back into spaced repetition
              r.outcomes.forEach((o, k) => !o.correct && s.cards[items[k].id] && s.gradeCard(items[k].id, 0));
            }}
            renderSummary={(r) => (
              <>
                <h3>Результат: {Math.round(r.score * 100)}%</h3>
                <p>{r.score >= 0.8 ? 'Отлично! Материал закреплён.' : 'Есть пробелы — ошибочные задания чаще встретятся в повторении.'}</p>
                <div className="row">
                  <button className="btn" onClick={() => setSeed(seed + 1)}>
                    Ещё одна
                  </button>
                  <Link className="btn primary" to="/">
                    К плану
                  </Link>
                </div>
              </>
            )}
          />
        </Card>
      )}
    </div>
  );
}
