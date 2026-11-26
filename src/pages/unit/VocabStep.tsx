import { useMemo, useState } from 'react';
import type { Unit, VocabItem } from '../../content/types';
import { useStore } from '../../lib/store';
import { articleChoice, pluralForm, vocabChoice, withArticle } from '../../lib/vocab';
import { ExerciseSession } from '../../components/ExerciseSession';
import { SpeakButton } from '../../components/Speak';
import { Card, articleClass } from '../../components/ui';
import { wordImage } from '../../lib/images';

const POS_RU: Record<string, string> = {
  noun: 'сущ.',
  verb: 'глаг.',
  adj: 'прил.',
  adv: 'нареч.',
  phrase: 'выражение',
  prep: 'предлог',
  conj: 'союз',
  other: '',
};

export function WordCard({ v, big, imgLarge }: { v: VocabItem; big?: boolean; imgLarge?: boolean }) {
  const img = wordImage(v);
  return (
    <div className={`word-card ${big ? 'big' : ''} ${img ? 'has-img' : ''} ${imgLarge ? 'img-large' : ''}`}>
      {img && <img className="word-img" src={img} alt="" loading="lazy" />}
      <div className="word-main">
        <span className={`word-de ${articleClass(v.article)}`}>
          {v.article && <span className="article">{v.article} </span>}
          {v.de}
        </span>
        <SpeakButton text={withArticle(v)} />
        <span className="pos">{POS_RU[v.pos]}</span>
      </div>
      {(v.plural || v.forms) && (
        <div className="word-forms">
          {v.plural && <span>мн. ч.: {pluralForm(v)}</span>} {v.forms && <span>{v.forms}</span>}
        </div>
      )}
      {v.pronRu && <div className="pron" title="Примерное произношение; ЗАГЛАВНЫМИ — ударный слог">[{v.pronRu}]</div>}
      <div className="word-ru">{v.ru}</div>
      <div className="word-example">
        <span className="de">{v.example}</span> <SpeakButton text={v.example} />
        <div className="muted">{v.exampleRu}</div>
      </div>
    </div>
  );
}

type Phase = { kind: 'learn'; batch: number } | { kind: 'quiz'; batch: number } | { kind: 'articles' } | { kind: 'done' };

export function VocabStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const done = useStore((s) => !!s.units[unit.id]?.steps.vocab?.done);
  const [phase, setPhase] = useState<Phase>(done ? { kind: 'done' } : { kind: 'learn', batch: 0 });
  const [card, setCard] = useState(0);
  const [wrong, setWrong] = useState<Set<number>>(new Set());
  const completeStep = useStore((s) => s.completeStep);
  const addCards = useStore((s) => s.addCards);
  const logActivity = useStore((s) => s.logActivity);
  const batches = [unit.vocab.slice(0, 10), unit.vocab.slice(10)];
  const nouns = unit.vocab.map((v, i) => ({ v, i })).filter((x) => x.v.article);

  const quiz = useMemo(
    () => (phase.kind === 'quiz' ? batches[phase.batch].map((_, k) => vocabChoice(unit, phase.batch * 10 + k, k + phase.batch * 31)) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phase.kind, phase.kind === 'quiz' ? phase.batch : -1, unit],
  );
  const artQuiz = useMemo(() => nouns.map((x) => articleChoice(x.v)), [unit]); // eslint-disable-line react-hooks/exhaustive-deps

  const finish = (extraWrong: Set<number>) => {
    const allWrong = new Set([...wrong, ...extraWrong]);
    addCards(
      unit.vocab.map((_, i) => ({ id: `v:${unit.id}:${i}`, kind: 'vocab' as const, unitId: unit.id, index: i })),
      unit.vocab.map((_, i) => (allWrong.has(i) ? 0 : 1)),
    );
    logActivity({ newWords: unit.vocab.length });
    completeStep(unit.id, 'vocab', 1 - allWrong.size / unit.vocab.length);
    setPhase({ kind: 'done' });
  };

  if (phase.kind === 'done') {
    return (
      <div className="stack">
        <Card className="highlight">
          <h2>✅ Слова юнита добавлены в повторение</h2>
          <p>
            Все 20 слов попали в систему интервального повторения: они будут возвращаться в разделе «Повторение» всё реже по мере
            запоминания.
          </p>
          <div className="row wrap">
            <button className="btn primary" onClick={onNext}>
              Следующий шаг →
            </button>
            <button className="btn ghost" onClick={() => setPhase({ kind: 'learn', batch: 0 })}>
              Пройти слова заново
            </button>
          </div>
        </Card>
        <Card>
          <h3>Словарь юнита</h3>
          <div className="word-list">
            {unit.vocab.map((v, i) => (
              <WordCard key={i} v={v} />
            ))}
          </div>
        </Card>
      </div>
    );
  }

  if (phase.kind === 'learn') {
    const list = batches[phase.batch];
    const v = list[card];
    return (
      <Card>
        <div className="session-head">
          <strong>Новые слова · часть {phase.batch + 1}/2</strong>
          <span className="muted">
            {card + 1} / {list.length}
          </span>
        </div>
        <WordCard v={v} big />
        <div className="row between learn-nav">
          <button className="btn ghost" disabled={card === 0} onClick={() => setCard(card - 1)}>
            ← Назад
          </button>
          {card < list.length - 1 ? (
            <button className="btn primary" onClick={() => setCard(card + 1)}>
              Дальше →
            </button>
          ) : (
            <button
              className="btn primary"
              onClick={() => {
                setCard(0);
                setPhase({ kind: 'quiz', batch: phase.batch });
              }}
            >
              Проверить себя →
            </button>
          )}
        </div>
        <p className="tiny muted">Совет: произносите каждое слово и пример вслух. Цвет артикля: der — синий, die — красный, das — зелёный.</p>
      </Card>
    );
  }

  if (phase.kind === 'quiz') {
    return (
      <Card>
        <ExerciseSession
          key={`q${phase.batch}`}
          title={`Проверка · часть ${phase.batch + 1}/2`}
          exercises={quiz}
          onFinish={(r) => {
            const w = new Set(wrong);
            r.outcomes.forEach((o, k) => !o.correct && w.add(phase.batch * 10 + k));
            setWrong(w);
          }}
          renderSummary={(r) => (
            <>
              <h3>Верно {Math.round(r.score * 100)}%</h3>
              <button
                className="btn primary"
                onClick={() => {
                  if (phase.batch === 0) setPhase({ kind: 'learn', batch: 1 });
                  else if (nouns.length) setPhase({ kind: 'articles' });
                  else finish(new Set());
                }}
              >
                {phase.batch === 0 ? 'Следующие 10 слов →' : 'Тренировка артиклей →'}
              </button>
            </>
          )}
        />
      </Card>
    );
  }

  return (
    <Card>
      <ExerciseSession
        title="Артикли: der, die или das?"
        exercises={artQuiz}
        onFinish={() => {}}
        renderSummary={(r) => (
          <>
            <h3>Артикли: {Math.round(r.score * 100)}%</h3>
            <button
              className="btn primary"
              onClick={() => {
                const w = new Set<number>();
                r.outcomes.forEach((o, k) => !o.correct && w.add(nouns[k].i));
                finish(w);
              }}
            >
              Завершить шаг ✓
            </button>
          </>
        )}
      />
    </Card>
  );
}
