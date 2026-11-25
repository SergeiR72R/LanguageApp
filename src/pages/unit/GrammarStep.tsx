import { useState } from 'react';
import type { Exercise, Unit } from '../../content/types';
import { practiceExercises } from '../../content';
import { useStore } from '../../lib/store';
import { GRAMMAR_PASS } from '../../lib/steps';
import { isLlmConfigured } from '../../lib/ai/providers';
import { generateExercises } from '../../lib/ai/prompts';
import { ExerciseSession } from '../../components/ExerciseSession';
import { Markdown, Table } from '../../components/Markdown';
import { SpeakButton } from '../../components/Speak';
import { Card, ErrorBox, Spinner } from '../../components/ui';

export function GrammarLesson({ unit }: { unit: Unit }) {
  const g = unit.grammar;
  return (
    <>
      <h2>
        🧩 {g.topic} <span className="muted small">— {g.topicRu}</span>
      </h2>
      <Markdown text={g.explanationRu} />
      {g.table && <Table rows={g.table} />}
      <h3>Примеры</h3>
      <ul className="examples">
        {g.examples.map((e, i) => (
          <li key={i}>
            <span className="de">{e.de}</span> <SpeakButton text={e.de} />
            <div className="muted">{e.ru}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export function GrammarStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const progress = useStore((s) => s.units[unit.id]?.steps.grammar);
  const settings = useStore((s) => s.settings);
  const completeStep = useStore((s) => s.completeStep);
  const addCards = useStore((s) => s.addCards);
  const [phase, setPhase] = useState<'lesson' | 'practice' | 'deep' | 'extra'>('lesson');
  const deep = practiceExercises(unit.id);
  const teilAPassed = (progress?.score ?? 0) >= GRAMMAR_PASS;
  const [run, setRun] = useState(0);
  const [extra, setExtra] = useState<Exercise[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const loadExtra = async () => {
    setBusy(true);
    setErr('');
    try {
      const ex = await generateExercises({
        level: unit.level,
        topic: `${unit.grammar.topic} (${unit.grammar.topicRu})`,
        count: 8,
        vocab: unit.vocab.map((v) => v.de),
      });
      if (!ex.length) throw new Error('ИИ не вернул упражнений, попробуйте ещё раз.');
      setExtra(ex);
      setPhase('extra');
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (phase === 'lesson')
    return (
      <Card>
        <GrammarLesson unit={unit} />
        <div className="row wrap">
          <button className={`btn ${teilAPassed && !progress?.done && deep.length ? '' : 'primary'}`} onClick={() => setPhase('practice')}>
            Часть A: основные упражнения ({unit.grammar.exercises.length}) →
          </button>
          {deep.length > 0 && teilAPassed && (
            <button className={`btn ${progress?.done ? '' : 'primary'}`} onClick={() => setPhase('deep')}>
              Часть B: углубление ({deep.length}) →
            </button>
          )}
          {progress?.done && (
            <span className="pill ok">Пройдено · лучший результат {Math.round((progress.score ?? 0) * 100)}%</span>
          )}
        </div>
      </Card>
    );

  if (phase === 'deep')
    return (
      <Card>
        <details className="rule-peek">
          <summary>Подсмотреть правило</summary>
          <GrammarLesson unit={unit} />
        </details>
        <ExerciseSession
          title={`Часть B · ${unit.grammar.topic}`}
          exercises={deep}
          onFinish={(r) => {
            completeStep(unit.id, 'grammar', undefined, true);
            addCards(
              deep.map((_, i) => ({ id: `gx:${unit.id}:${i}`, kind: 'grammar' as const, unitId: unit.id, index: i, bank: true })),
              r.outcomes.map((o) => (o.correct ? 4 : 1)),
            );
          }}
          renderSummary={(r) => (
            <>
              <h3>✅ Часть B: {Math.round(r.score * 100)}%</h3>
              <p>Грамматика юнита пройдена. Все задания добавлены в интервальное повторение — ошибочные вернутся уже завтра.</p>
              <div className="row wrap">
                <button className="btn primary" onClick={onNext}>
                  Следующий шаг →
                </button>
                <button className="btn ghost" onClick={() => setPhase('lesson')}>
                  К правилу
                </button>
              </div>
            </>
          )}
        />
      </Card>
    );

  if (phase === 'extra')
    return (
      <Card>
        <ExerciseSession
          title="Дополнительные упражнения (ИИ)"
          exercises={extra}
          onFinish={() => {}}
          renderSummary={(r) => (
            <>
              <h3>Результат: {Math.round(r.score * 100)}%</h3>
              <div className="row wrap">
                <button className="btn" disabled={busy} onClick={loadExtra}>
                  Ещё упражнения
                </button>
                <button className="btn ghost" onClick={() => setPhase('lesson')}>
                  К правилу
                </button>
                <button className="btn primary" onClick={onNext}>
                  Следующий шаг →
                </button>
              </div>
              {busy && <Spinner text="Генерирую упражнения…" />}
              <ErrorBox error={err} />
            </>
          )}
        />
      </Card>
    );

  return (
    <Card>
      <details className="rule-peek">
        <summary>Подсмотреть правило</summary>
        <GrammarLesson unit={unit} />
      </details>
      <ExerciseSession
        key={run}
        title={unit.grammar.topic}
        exercises={unit.grammar.exercises}
        onFinish={(r) => {
          const passed = r.score >= GRAMMAR_PASS;
          completeStep(unit.id, 'grammar', r.score, passed && deep.length === 0);
          // every exercise becomes an SRS card: mistakes come back tomorrow, correct ones in 3 days
          addCards(
            unit.grammar.exercises.map((_, i) => ({ id: `g:${unit.id}:${i}`, kind: 'grammar' as const, unitId: unit.id, index: i })),
            r.outcomes.map((o) => (o.correct ? 3 : 1)),
          );
        }}
        renderSummary={(r) => {
          const passed = r.score >= GRAMMAR_PASS;
          return (
            <>
              <h3>
                {passed ? '✅' : '🔁'} Результат: {Math.round(r.score * 100)}%
              </h3>
              <p>
                {passed
                  ? deep.length ? 'Основа усвоена! Теперь часть B — углубление с более сложными заданиями.' : 'Отлично, тема усвоена. Упражнения добавлены в интервальное повторение.'
                  : `Для зачёта нужно ${Math.round(GRAMMAR_PASS * 100)}%. Перечитайте правило и попробуйте ещё раз — ошибочные задания уже добавлены в повторение.`}
              </p>
              {r.outcomes.some((o) => !o.correct) && (
                <details>
                  <summary>Ваши ошибки ({r.outcomes.filter((o) => !o.correct).length})</summary>
                  <ul className="mistake-list">
                    {r.outcomes
                      .filter((o) => !o.correct)
                      .map((o, k) => (
                        <li key={k}>
                          <span className="strike">{o.given || '—'}</span> → <strong>{o.expected}</strong>
                        </li>
                      ))}
                  </ul>
                </details>
              )}
              <div className="row wrap">
                {passed && deep.length > 0 ? (
                  <button className="btn primary" onClick={() => setPhase('deep')}>
                    Часть B: углубление ({deep.length}) →
                  </button>
                ) : passed ? (
                  <button className="btn primary" onClick={onNext}>
                    Следующий шаг →
                  </button>
                ) : (
                  <button className="btn primary" onClick={() => setPhase('lesson')}>
                    Перечитать правило
                  </button>
                )}
                <button className="btn" onClick={() => setRun(run + 1)}>
                  Пройти заново
                </button>
                {isLlmConfigured(settings) && (
                  <button className="btn ghost" disabled={busy} onClick={loadExtra}>
                    ✨ Новые упражнения от ИИ
                  </button>
                )}
              </div>
              {busy && <Spinner text="Генерирую упражнения…" />}
              <ErrorBox error={err} />
            </>
          );
        }}
      />
    </Card>
  );
}
