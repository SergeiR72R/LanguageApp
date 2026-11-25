import { Fragment, useEffect, useState } from 'react';
import type { ListeningText, ReadingText, Task, TaskItem } from '../content/types';
import { speak, stopSpeaking } from '../lib/ai/tts';
import { SpeakButton } from './Speak';

/** Answers keyed by "<prefix>.<task>.<item>": number for mc/match (-1 = none), boolean for tf. */
export type Answers = Record<string, number | boolean>;

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

export function itemKey(prefix: string, t: number, i: number) {
  return `${prefix}.${t}.${i}`;
}

function isCorrect(item: TaskItem, a: number | boolean | undefined): boolean {
  if (a === undefined) return false;
  return item.answer === a;
}

export function scoreTasks(tasks: Task[], answers: Answers, prefix: string): { correct: number; total: number } {
  let correct = 0;
  let total = 0;
  tasks.forEach((t, ti) =>
    t.items.forEach((it, ii) => {
      total++;
      if (isCorrect(it, answers[itemKey(prefix, ti, ii)])) correct++;
    }),
  );
  return { correct, total };
}

function correctLabel(task: Task, item: TaskItem): string {
  if (item.kind === 'mc') return `${LETTERS[item.answer]}) ${item.options[item.answer]}`;
  if (item.kind === 'tf') {
    const [y, n] = task.tfLabels ?? ['Richtig', 'Falsch'];
    return item.answer ? y : n;
  }
  return item.answer === -1 ? '0 — нет подходящего варианта' : `${LETTERS[item.answer]}) ${task.options?.[item.answer] ?? ''}`;
}

/** One exam-style task (R/F, MC, matching). `reveal` shows right/wrong and explanations. */
export function TaskBlock({
  task,
  index,
  prefix,
  answers,
  onAnswer,
  reveal,
  numberFrom = 1,
}: {
  task: Task;
  index: number;
  prefix: string;
  answers: Answers;
  onAnswer: (key: string, v: number | boolean) => void;
  reveal: boolean;
  numberFrom?: number;
}) {
  const [y, n] = task.tfLabels ?? ['Richtig', 'Falsch'];
  const hasMatch = task.items.some((i) => i.kind === 'match');
  return (
    <div className="task">
      <div className="task-instr">
        <div className="de">{task.instructionDe}</div>
        <div className="tiny muted">{task.instructionRu}</div>
      </div>
      {hasMatch && task.options && (
        <ol className="match-options" type="a">
          {task.options.map((o, k) => (
            <li key={k}>
              <span className="de">{o}</span>
            </li>
          ))}
        </ol>
      )}
      <ol className="task-items" start={numberFrom}>
        {task.items.map((it, ii) => {
          const key = itemKey(prefix, index, ii);
          const a = answers[key];
          const state = reveal ? (isCorrect(it, a) ? 'ok' : 'bad') : '';
          return (
            <li key={ii} className={`task-item ${state}`}>
              {it.kind === 'mc' && (
                <>
                  <div className="de q">{it.question}</div>
                  <div className="options compact">
                    {it.options.map((o, k) => (
                      <button
                        key={k}
                        type="button"
                        disabled={reveal}
                        className={`option ${a === k ? 'selected' : ''} ${reveal && k === it.answer ? 'ok' : ''} ${reveal && a === k && k !== it.answer ? 'bad' : ''}`}
                        onClick={() => onAnswer(key, k)}
                      >
                        <span className="opt-key">{LETTERS[k]}</span> {o}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {it.kind === 'tf' && (
                <div className="tf-row">
                  <span className="de">{it.statement}</span>
                  <span className="tf-buttons">
                    {[true, false].map((v) => (
                      <button
                        key={String(v)}
                        type="button"
                        disabled={reveal}
                        className={`chip ${a === v ? 'active' : ''} ${reveal && v === it.answer ? 'ok' : ''} ${reveal && a === v && v !== it.answer ? 'bad' : ''}`}
                        onClick={() => onAnswer(key, v)}
                      >
                        {v ? y : n}
                      </button>
                    ))}
                  </span>
                </div>
              )}
              {it.kind === 'match' && (
                <div className="tf-row">
                  <span className="de">{it.prompt}</span>
                  <select
                    disabled={reveal}
                    value={a === undefined ? '' : String(a)}
                    onChange={(e) => onAnswer(key, Number(e.target.value))}
                    className={`match-select ${state}`}
                  >
                    <option value="" disabled>
                      —
                    </option>
                    {task.options?.map((o, k) => (
                      <option key={k} value={k}>
                        {LETTERS[k]}) {o.length > 60 ? `${o.slice(0, 57)}…` : o}
                      </option>
                    ))}
                    {task.allowNone && <option value={-1}>0 — нет подходящего</option>}
                  </select>
                </div>
              )}
              {reveal && (
                <div className="tiny item-expl">
                  {!isCorrect(it, a) && (
                    <div>
                      Правильно: <strong className="de">{correctLabel(task, it)}</strong>
                    </div>
                  )}
                  {it.explanationRu && <div className="muted">{it.explanationRu}</div>}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Text with [1], [2] gap markers highlighted. */
function Body({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((para, i) => (
        <p key={i}>
          {para.split(/(\[\d+\])/g).map((part, k) =>
            /^\[\d+\]$/.test(part) ? (
              <span key={k} className="gap-mark">
                {part}
              </span>
            ) : (
              <Fragment key={k}>{part}</Fragment>
            ),
          )}
        </p>
      ))}
    </>
  );
}

export function ReadingTexts({ r }: { r: ReadingText }) {
  return (
    <div className="reading-texts">
      {r.texts.map((t, i) => (
        <div key={i} className="reading-text de">
          {(t.label || t.heading) && (
            <div className="reading-head">
              {t.label && <span className="pill accent">{t.label}</span>} {t.heading && <strong>{t.heading}</strong>}
            </div>
          )}
          <Body text={t.body} />
        </div>
      ))}
    </div>
  );
}

/** Practice mode: a reading text with its tasks and a "check" button. */
export function ReadingPractice({ r, prefix, onChecked }: { r: ReadingText; prefix: string; onChecked?: (score: number) => void }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [reveal, setReveal] = useState(false);
  const total = r.tasks.reduce((a, t) => a + t.items.length, 0);
  const answered = Object.keys(answers).length;
  const sc = scoreTasks(r.tasks, answers, prefix);
  let n = 1;
  return (
    <div className="stack">
      <div>
        <h3>
          📖 {r.title} <span className="pill">{r.textType}</span>
        </h3>
      </div>
      <ReadingTexts r={r} />
      {r.tasks.map((t, ti) => {
        const from = n;
        n += t.items.length;
        return (
          <TaskBlock
            key={ti}
            task={t}
            index={ti}
            prefix={prefix}
            answers={answers}
            reveal={reveal}
            numberFrom={from}
            onAnswer={(k, v) => setAnswers({ ...answers, [k]: v })}
          />
        );
      })}
      {!reveal ? (
        <button
          className="btn primary"
          disabled={answered < total}
          onClick={() => {
            setReveal(true);
            onChecked?.(sc.correct / Math.max(1, sc.total));
          }}
        >
          Проверить ({answered}/{total})
        </button>
      ) : (
        <div className={`feedback ${sc.correct / sc.total >= 0.6 ? 'ok' : 'bad'}`}>
          Верно: {sc.correct}/{sc.total} ({Math.round((sc.correct / sc.total) * 100)}%)
        </div>
      )}
    </div>
  );
}

/** Player that limits plays like the exam (playCount) when `limit` is set. */
export function ListeningPlayer({ l, limit }: { l: ListeningText; limit: boolean }) {
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => () => stopSpeaking(), []);
  const dialog = l.kind !== 'monolog';
  const play = async (rate?: number) => {
    if (playing) {
      stopSpeaking();
      return;
    }
    setPlaying(true);
    try {
      await speak(l.text, { dialog, rate });
    } finally {
      setPlaying(false);
      setPlays((p) => p + 1);
    }
  };
  const left = l.playCount - plays;
  return (
    <div className="listen-box">
      {l.situation && <div className="de situation">{l.situation}</div>}
      {l.speakers && (
        <div className="tiny muted">
          {Object.entries(l.speakers)
            .map(([k, v]) => `${k}: ${v}`)
            .join(' · ')}
        </div>
      )}
      <div className="row wrap">
        {limit && left <= 0 && !playing ? (
          <span className="muted">Прослушано {l.playCount}×</span>
        ) : (
          <button type="button" className={`btn-speak big ${playing ? 'playing' : ''}`} onClick={() => play()}>
            {playing ? '⏹ Стоп' : '🔊 Слушать'}
          </button>
        )}
        {!limit && (
          <button type="button" className="btn-speak" disabled={playing} onClick={() => play(0.75)}>
            🐢 Медленно
          </button>
        )}
        <span className="tiny muted">
          {limit ? `осталось прослушиваний: ${Math.max(0, left)}` : `на экзамене звучит ${l.playCount === 1 ? 'один раз' : 'два раза'}`}
        </span>
      </div>
    </div>
  );
}

export function Transcript({ l }: { l: ListeningText }) {
  return (
    <details>
      <summary>Транскрипт</summary>
      <div className="transcript de">
        {l.text
          .split('\n')
          .filter((x) => x.trim())
          .map((line, i) => {
            const m = /^([ABCD]):\s*(.*)$/.exec(line);
            const who = m ? l.speakers?.[m[1] as 'A'] ?? m[1] : '';
            return (
              <p key={i}>
                {who && <strong>{who}: </strong>}
                {m ? m[2] : line} <SpeakButton text={m ? m[2] : line} />
              </p>
            );
          })}
      </div>
    </details>
  );
}

/** Practice mode for a listening text with exam-style tasks. */
export function ListeningPractice({ l, prefix, onChecked }: { l: ListeningText; prefix: string; onChecked?: (score: number) => void }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [reveal, setReveal] = useState(false);
  const total = l.tasks.reduce((a, t) => a + t.items.length, 0);
  const sc = scoreTasks(l.tasks, answers, prefix);
  return (
    <div className="stack">
      <h3>🎧 {l.title}</h3>
      <ListeningPlayer l={l} limit={false} />
      {l.tasks.map((t, ti) => (
        <TaskBlock key={ti} task={t} index={ti} prefix={prefix} answers={answers} reveal={reveal} onAnswer={(k, v) => setAnswers({ ...answers, [k]: v })} />
      ))}
      {!reveal ? (
        <button
          className="btn primary"
          disabled={Object.keys(answers).length < total}
          onClick={() => {
            setReveal(true);
            onChecked?.(sc.correct / Math.max(1, sc.total));
          }}
        >
          Проверить ({Object.keys(answers).length}/{total})
        </button>
      ) : (
        <>
          <div className={`feedback ${sc.correct / sc.total >= 0.6 ? 'ok' : 'bad'}`}>
            Верно: {sc.correct}/{sc.total} ({Math.round((sc.correct / sc.total) * 100)}%)
          </div>
          <Transcript l={l} />
        </>
      )}
    </div>
  );
}
