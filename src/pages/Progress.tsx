import { allUnits, levels } from '../content';
import { addDays, today } from '../lib/date';
import { isMature } from '../lib/srs';
import { streak, useStore } from '../lib/store';
import { Card, ProgressBar } from '../components/ui';

export function Progress() {
  const s = useStore();
  const d = today();
  const days = Array.from({ length: 84 }, (_, i) => addDays(d, i - 83));
  const vocab = Object.values(s.cards).filter((c) => c.kind === 'vocab');
  const gram = Object.values(s.cards).filter((c) => c.kind === 'grammar');
  const totals = Object.values(s.activity).reduce(
    (a, x) => ({ answered: a.answered + (x.answered ?? 0), correct: a.correct + (x.correct ?? 0), words: a.words + (x.wordsWritten ?? 0), turns: a.turns + (x.spokenTurns ?? 0) }),
    { answered: 0, correct: 0, words: 0, turns: 0 },
  );
  const forecast = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(d, i);
    return { day, n: Object.values(s.cards).filter((c) => (i === 0 ? c.srs.due <= day : c.srs.due === day)).length };
  });
  const maxF = Math.max(1, ...forecast.map((f) => f.n));
  const intensity = (x?: { answered: number; stepsDone: number; spokenTurns: number }) => {
    if (!x) return 0;
    const v = x.answered + x.stepsDone * 10 + x.spokenTurns * 2;
    return v === 0 ? 0 : v < 20 ? 1 : v < 50 ? 2 : v < 100 ? 3 : 4;
  };

  return (
    <div className="page">
      <h1>📈 Прогресс</h1>
      <div className="stats-grid wide">
        <div className="stat">
          <div className="stat-num">🔥 {streak(s.activity)}</div>
          <div className="stat-cap">дней подряд</div>
        </div>
        <div className="stat">
          <div className="stat-num">{vocab.filter((c) => isMature(c.srs)).length}/{vocab.length}</div>
          <div className="stat-cap">слов закреплено / изучается</div>
        </div>
        <div className="stat">
          <div className="stat-num">{totals.answered ? Math.round((totals.correct / totals.answered) * 100) : 0}%</div>
          <div className="stat-cap">точность ({totals.answered} ответов)</div>
        </div>
        <div className="stat">
          <div className="stat-num">{totals.words}</div>
          <div className="stat-cap">слов написано</div>
        </div>
        <div className="stat">
          <div className="stat-num">{totals.turns}</div>
          <div className="stat-cap">реплик в разговоре</div>
        </div>
        <div className="stat">
          <div className="stat-num">{gram.filter((c) => isMature(c.srs)).length}/{gram.length}</div>
          <div className="stat-cap">грамм. заданий закреплено</div>
        </div>
      </div>

      <Card>
        <h3>Активность за 12 недель</h3>
        <div className="heatmap">
          {days.map((day) => (
            <div key={day} className={`hm l${intensity(s.activity[day])}`} title={`${day}: ${s.activity[day]?.answered ?? 0} ответов`} />
          ))}
        </div>
      </Card>

      <div className="grid-2">
        <Card>
          <h3>Курс</h3>
          {levels.map((l) => {
            const us = allUnits.filter((u) => u.level === l);
            const done = us.filter((u) => s.units[u.id]?.completed).length;
            return (
              <div key={l} className="stat-row">
                <span className="stat-label">
                  <span className={`level-badge l-${l}`}>{l}</span>
                </span>
                <ProgressBar value={done / Math.max(1, us.length)} />
                <span className="stat-val">
                  {done}/{us.length}
                </span>
              </div>
            );
          })}
          {s.placement && (
            <p className="muted">
              Тест уровня {s.placement.date}: {s.placement.estimated}
              {s.placement.aiAssessment ? ` · письмо: ${s.placement.aiAssessment.split(':')[0]}` : ''}
            </p>
          )}
        </Card>
        <Card>
          <h3>Прогноз повторений на неделю</h3>
          <div className="bars">
            {forecast.map((f) => (
              <div key={f.day} className="bar-col" title={`${f.day}: ${f.n}`}>
                <div className="bar" style={{ height: `${(f.n / maxF) * 100}%` }} />
                <span className="tiny">{f.n}</span>
                <span className="tiny muted">{f.day.slice(8)}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3>Результаты юнитов</h3>
        <table className="results">
          <thead>
            <tr>
              <th>Юнит</th>
              <th>Слова</th>
              <th>Грамм.</th>
              <th>Аудир.</th>
              <th>Письмо</th>
              <th>Речь</th>
              <th>Тест</th>
            </tr>
          </thead>
          <tbody>
            {allUnits
              .filter((u) => s.units[u.id])
              .map((u) => {
                const st = s.units[u.id].steps;
                const f = (k: keyof typeof st) => (st[k]?.done ? (st[k]?.score !== undefined ? `${Math.round((st[k]!.score ?? 0) * 100)}%` : '✓') : '—');
                return (
                  <tr key={u.id}>
                    <td>
                      {u.level}.{u.order} {u.title}
                    </td>
                    <td>{f('vocab')}</td>
                    <td>{f('grammar')}</td>
                    <td>{f('listening')}</td>
                    <td>{f('writing')}</td>
                    <td>{f('speaking')}</td>
                    <td>{st.test?.score !== undefined ? `${Math.round((st.test.score ?? 0) * 100)}%` : '—'}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
