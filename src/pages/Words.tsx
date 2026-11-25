import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUnit, wordBank } from '../content';
import { useStore } from '../lib/store';
import { bankCardId, bankStats, wordQueue, wordsLeftToday, type QueuedWord } from '../lib/words';
import { vocabChoiceFrom } from '../lib/vocab';
import { ExerciseSession } from '../components/ExerciseSession';
import { WordCard } from './unit/VocabStep';
import { Card, ProgressBar } from '../components/ui';

/** "Words of the day": a daily portion from the large word bank, learned and then handed to spaced repetition. */
export function Words() {
  const s = useStore();
  const left = wordsLeftToday(s);
  const [batch, setBatch] = useState<QueuedWord[] | null>(null);
  const [phase, setPhase] = useState<'learn' | 'quiz' | 'done'>('learn');
  const [card, setCard] = useState(0);
  const stats = bankStats(s);

  const quiz = useMemo(
    () =>
      (batch ?? []).map((w, k) => {
        // distractors from the same unit's word bank
        const list = wordBank(w.unitId);
        return vocabChoiceFrom(list, w.index, k * 13 + 7);
      }),
    [batch],
  );

  const start = (n: number) => {
    setBatch(wordQueue(s, n));
    setPhase('learn');
    setCard(0);
  };

  const finish = (wrong: Set<number>) => {
    if (!batch) return;
    s.addCards(
      batch.map((w) => ({ id: bankCardId(w.unitId, w.index), kind: 'vocab' as const, unitId: w.unitId, index: w.index, bank: true })),
      batch.map((_, k) => (wrong.has(k) ? 0 : 1)),
    );
    s.logActivity({ bankWords: batch.length, newWords: batch.length });
    setPhase('done');
  };

  if (!batch) {
    const next = wordQueue(s, Math.max(left, 1));
    return (
      <div className="page narrow">
        <h1>🆕 Слова дня</h1>
        <Card className="highlight">
          <p>
            Каждый день — новая порция из большого словаря курса (тематические слова юнитов и общая лексика уровня). Выученные
            слова уходят в интервальное повторение.
          </p>
          <div className="stat-row">
            <span className="stat-label">Словарь курса</span>
            <ProgressBar value={stats.introduced / Math.max(1, stats.total)} />
            <span className="stat-val">
              {stats.introduced}/{stats.total}
            </span>
          </div>
          {next.length === 0 ? (
            <p className="ok-text">Все слова доступных юнитов уже изучаются 🎉 Новые появятся со следующим юнитом.</p>
          ) : left > 0 ? (
            <button className="btn primary big" onClick={() => start(left)}>
              Учить {Math.min(left, wordQueue(s, left).length)} слов
            </button>
          ) : (
            <>
              <p className="ok-text">Норма на сегодня выполнена ✅ ({s.settings.newWordsPerDay} слов).</p>
              <button className="btn" onClick={() => start(10)}>
                Ещё 10 слов
              </button>
            </>
          )}
          <p className="tiny muted">
            Норма в день: {s.settings.newWordsPerDay} — меняется в <Link to="/settings">настройках</Link>. Чтобы выучить словарь
            уровня за время прохождения юнитов, нужно 15–20 слов в день.
          </p>
        </Card>
      </div>
    );
  }

  if (phase === 'done')
    return (
      <div className="page narrow">
        <Card className="highlight">
          <h2>✅ {batch.length} новых слов добавлено в повторение</h2>
          <div className="row">
            <Link className="btn primary" to="/">
              К плану
            </Link>
            <button className="btn" onClick={() => setBatch(null)}>
              Ещё
            </button>
          </div>
        </Card>
      </div>
    );

  if (phase === 'learn') {
    const w = batch[card];
    const u = getUnit(w.unitId);
    return (
      <div className="page narrow">
        <Card>
          <div className="session-head">
            <strong>Слова дня</strong>
            <span className="muted">
              {card + 1} / {batch.length} · {u?.level} {u?.title}
            </span>
          </div>
          <ProgressBar value={card / batch.length} />
          <WordCard v={w.v} big />
          <div className="row between">
            <button className="btn ghost" disabled={card === 0} onClick={() => setCard(card - 1)}>
              ← Назад
            </button>
            {card < batch.length - 1 ? (
              <button className="btn primary" onClick={() => setCard(card + 1)}>
                Дальше →
              </button>
            ) : (
              <button className="btn primary" onClick={() => setPhase('quiz')}>
                Проверить себя →
              </button>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="page narrow">
      <Card>
        <ExerciseSession
          title="Проверка: слова дня"
          exercises={quiz}
          onFinish={() => {}}
          renderSummary={(r) => (
            <>
              <h3>Верно {Math.round(r.score * 100)}%</h3>
              <button
                className="btn primary"
                onClick={() => {
                  const wrong = new Set<number>();
                  r.outcomes.forEach((o, k) => !o.correct && wrong.add(k));
                  finish(wrong);
                }}
              >
                Добавить в повторение ✓
              </button>
            </>
          )}
        />
      </Card>
    </div>
  );
}
