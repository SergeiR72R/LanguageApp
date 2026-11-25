import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUnit, practiceExercises } from '../content';
import { checkAnswer, shuffle, type CheckResult } from '../lib/grading';
import type { Grade } from '../lib/srs';
import { dueCards, useStore, type Card as SrsCard, type Mistake } from '../lib/store';
import { findVocab, withArticle } from '../lib/vocab';
import { wordImage } from '../lib/images';
import { ExerciseView } from '../components/ExerciseView';
import { SpeakButton } from '../components/Speak';
import { WordCard } from './unit/VocabStep';
import { Card, ProgressBar } from '../components/ui';
import { sfx } from '../lib/sound';
import { confetti } from '../components/Celebrate';

interface QueueItem {
  card: SrsCard;
  /** second look after "again" – not graded again */
  relearn?: boolean;
}

function GradeButtons({ onGrade, suggested }: { onGrade: (g: Grade) => void; suggested?: Grade }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;
      const n = Number(e.key);
      if (n >= 1 && n <= 4) onGrade((n - 1) as Grade);
      if (e.key === 'Enter' && suggested !== undefined) onGrade(suggested);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onGrade, suggested]);
  const btn = (g: Grade, label: string, cls: string) => (
    <button className={`btn grade ${cls} ${suggested === g ? 'suggested' : ''}`} onClick={() => onGrade(g)}>
      <span className="opt-key">{g + 1}</span> {label}
    </button>
  );
  return (
    <div className="grade-row">
      {btn(0, 'Снова', 'g0')}
      {btn(1, 'Трудно', 'g1')}
      {btn(2, 'Хорошо', 'g2')}
      {btn(3, 'Легко', 'g3')}
    </div>
  );
}

function VocabReview({ card, onGrade }: { card: SrsCard; onGrade: (g: Grade) => void }) {
  const found = findVocab(card.unitId!, card.index!, card.bank);
  const mode = useMemo<'recognize' | 'produce' | 'listen'>(() => {
    if (card.srs.reps < 2) return 'recognize';
    return card.srs.reps % 3 === 2 ? 'listen' : 'produce';
  }, [card]);
  const [shown, setShown] = useState(false);
  const [input, setInput] = useState('');
  const [res, setRes] = useState<CheckResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setShown(false);
    setInput('');
    setRes(null);
    setTimeout(() => inputRef.current?.focus(), 30);
  }, [card.id]);
  if (!found) return <button onClick={() => onGrade(2)}>Пропустить</button>;
  const { v } = found;
  const target = withArticle(v);

  const img = wordImage(v);
  const front = img && <img className="flash-img" src={img} alt="" />;

  if (mode === 'recognize') {
    return (
      <div className="flash">
        {front}
        <div className="flash-front de">
          {target} <SpeakButton text={target} />
        </div>
        {!shown ? (
          <button className="btn primary" autoFocus onClick={() => setShown(true)}>
            Показать перевод
          </button>
        ) : (
          <>
            <WordCard v={v} noImage />
            <GradeButtons onGrade={onGrade} suggested={2} />
          </>
        )}
      </div>
    );
  }

  const check = () => {
    // nouns must be typed with article
    setRes(checkAnswer(input, [target]));
  };

  return (
    <div className="flash">
      <div className="ex-instruction">{mode === 'listen' ? 'Прослушайте и напишите слово' : 'Переведите на немецкий'}{v.article ? ' (с артиклем)' : ''}</div>
      {mode === 'listen' ? (
        <div className="flash-front">
          <SpeakButton text={target} className="big" label="Прослушать" />
        </div>
      ) : (
        <>
          {front}
          <div className="flash-front">{v.ru}</div>
        </>
      )}
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          if (!res) check();
        }}
      >
        <input
          ref={inputRef}
          className={`text-input ${res === 'correct' ? 'ok' : res === 'almost' ? 'almost' : res ? 'bad' : ''}`}
          value={input}
          disabled={!!res}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        {!res && <button className="btn primary">Проверить</button>}
      </form>
      {res && (
        <>
          <div className={`feedback ${res === 'correct' ? 'ok' : res === 'almost' ? 'almost' : 'bad'}`}>
            {res === 'correct' ? '✅ Верно' : res === 'almost' ? '🟡 Почти — проверьте написание' : '❌ Неверно'}
          </div>
          <WordCard v={v} noImage={mode !== 'listen'} />
          <GradeButtons onGrade={onGrade} suggested={res === 'correct' ? 2 : res === 'almost' ? 1 : 0} />
        </>
      )}
    </div>
  );
}

function MistakeReview({ m, onGrade }: { m: Mistake; onGrade: (g: Grade) => void }) {
  const [input, setInput] = useState('');
  const [res, setRes] = useState<CheckResult | null>(null);
  useEffect(() => {
    setInput('');
    setRes(null);
  }, [m.id]);
  const pron = m.category === 'Aussprache' || m.original === m.correction;
  if (pron)
    return (
      <div className="flash">
        <div className="ex-instruction">Произношение: прослушайте и повторите вслух</div>
        <div className="flash-front de">
          {m.correction} <SpeakButton text={m.correction} /> <SpeakButton text={m.correction} rate={0.7} label="медл." />
        </div>
        <p>{m.explanationRu}</p>
        <GradeButtons onGrade={onGrade} suggested={2} />
      </div>
    );
  return (
    <div className="flash">
      <div className="ex-instruction">
        Исправьте свою ошибку · <span className="pill">{m.category}</span> · из {m.source === 'writing' ? 'письма' : m.source === 'speaking' ? 'разговора' : 'упражнения'}
      </div>
      <div className="flash-front de strike-soft">{m.original}</div>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          if (!res) setRes(checkAnswer(input, [m.correction]));
        }}
      >
        <input className="text-input" value={input} disabled={!!res} onChange={(e) => setInput(e.target.value)} placeholder="Правильный вариант" spellCheck={false} />
        {!res && <button className="btn primary">Проверить</button>}
      </form>
      {res && (
        <>
          <div className={`feedback ${res === 'correct' ? 'ok' : res === 'almost' ? 'almost' : 'bad'}`}>
            {res === 'correct' ? '✅ Верно' : 'Правильно:'} <strong className="de">{m.correction}</strong> <SpeakButton text={m.correction} />
            <div className="explain">{m.explanationRu}</div>
          </div>
          <GradeButtons onGrade={onGrade} suggested={res === 'correct' ? 2 : res === 'almost' ? 1 : 0} />
        </>
      )}
    </div>
  );
}

export function Review() {
  const s = useStore();
  const gradeCard = useStore((x) => x.gradeCard);
  const updateMistake = useStore((x) => x.updateMistake);
  const [queue, setQueue] = useState<QueueItem[] | null>(null);
  const [pos, setPos] = useState(0);
  const [stats, setStats] = useState({ done: 0, good: 0 });
  const [practice, setPractice] = useState(false);
  const due = dueCards(s);
  const finished = !!queue && pos >= queue.length && stats.done > 0;
  useEffect(() => {
    if (finished) {
      confetti(90);
      sfx.success();
    }
  }, [finished]);

  const start = (practiceMode = false) => {
    const source = practiceMode ? shuffle(Object.values(s.cards)).slice(0, 25) : due.slice(0, s.settings.reviewLimit);
    // interleave kinds so the session doesn't feel monotonous
    setQueue(shuffle(source).map((card) => ({ card })));
    setPos(0);
    setStats({ done: 0, good: 0 });
    setPractice(practiceMode);
  };

  if (!queue) {
    const byKind = (k: string) => due.filter((c) => c.kind === k).length;
    return (
      <div className="page narrow">
        <h1>🔁 Повторение</h1>
        <Card className="highlight">
          <p>
            Интервальное повторение возвращает слова, грамматические задания и ваши ошибки ровно тогда, когда вы начинаете их
            забывать. Ежедневное повторение — основа закрепления.
          </p>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-num">{byKind('vocab')}</div>
              <div className="stat-cap">слов</div>
            </div>
            <div className="stat">
              <div className="stat-num">{byKind('grammar')}</div>
              <div className="stat-cap">грамматика</div>
            </div>
            <div className="stat">
              <div className="stat-num">{byKind('mistake')}</div>
              <div className="stat-cap">ваши ошибки</div>
            </div>
          </div>
          {due.length ? (
            <button className="btn primary big" onClick={() => start(false)}>
              Начать ({Math.min(due.length, s.settings.reviewLimit)})
            </button>
          ) : (
            <>
              <p className="ok-text">На сегодня всё повторено 🎉</p>
              {Object.keys(s.cards).length > 0 && (
                <button className="btn" onClick={() => start(true)}>
                  Дополнительная тренировка (не влияет на расписание)
                </button>
              )}
              {Object.keys(s.cards).length === 0 && (
                <p className="muted">
                  Карточки появятся после первых шагов юнита. <Link to="/">К плану</Link>
                </p>
              )}
            </>
          )}
        </Card>
      </div>
    );
  }

  const item = queue[pos];
  if (!item) {
    return (
      <div className="page narrow">
        <Card className="highlight">
          <h2>✅ Сессия завершена</h2>
          <p>
            Карточек: {stats.done}, вспомнили с первого раза: {stats.good}.
          </p>
          <div className="row">
            <Link className="btn primary" to="/">
              К плану на сегодня
            </Link>
            <button className="btn" onClick={() => setQueue(null)}>
              Ещё
            </button>
          </div>
        </Card>
      </div>
    );
  }

  const grade = (g: Grade) => {
    const c = item.card;
    if (g > 0) sfx.flip();
    if (!item.relearn && !practice) {
      gradeCard(c.id, g);
      if (c.kind === 'mistake' && c.mistakeId && g >= 2 && c.srs.reps >= 2) updateMistake(c.mistakeId, { resolved: true });
    }
    if (!item.relearn) setStats((st) => ({ done: st.done + 1, good: st.good + (g > 0 ? 1 : 0) }));
    const next = [...queue];
    if (g === 0 && !item.relearn) next.splice(Math.min(next.length, pos + 4), 0, { card: c, relearn: true });
    setQueue(next);
    setPos(pos + 1);
  };

  const c = item.card;
  const unit = c.unitId ? getUnit(c.unitId) : undefined;
  const mistake = c.mistakeId ? s.mistakes.find((m) => m.id === c.mistakeId) : undefined;

  return (
    <div className="page narrow">
      <div className="session-head">
        <strong>{practice ? 'Тренировка' : 'Повторение'}</strong>
        <span className="muted">
          {pos + 1} / {queue.length} {item.relearn && '· повтор'}
        </span>
      </div>
      <ProgressBar value={pos / queue.length} />
      <Card>
        {unit && (
          <div className="tiny muted">
            {unit.level} · {unit.order}. {unit.title}
          </div>
        )}
        {c.kind === 'vocab' && <VocabReview card={c} onGrade={grade} />}
        {c.kind === 'grammar' && unit && (c.bank ? practiceExercises(unit.id) : unit.grammar.exercises)[c.index!] && (
          <ExerciseView
            key={c.id + pos}
            ex={(c.bank ? practiceExercises(unit.id) : unit.grammar.exercises)[c.index!]}
            seed={pos}
            onDone={(o) => grade(o.correct ? 2 : 0)}
          />
        )}
        {c.kind === 'grammar' && !(unit && (c.bank ? practiceExercises(unit.id) : unit.grammar.exercises)[c.index!]) && (
          <button className="btn" onClick={() => grade(3)}>
            Пропустить
          </button>
        )}
        {c.kind === 'mistake' && mistake && <MistakeReview m={mistake} onGrade={grade} />}
        {c.kind === 'mistake' && !mistake && (
          <button className="btn" onClick={() => grade(3)}>
            Пропустить
          </button>
        )}
      </Card>
    </div>
  );
}
