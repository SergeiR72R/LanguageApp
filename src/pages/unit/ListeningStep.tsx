import { useMemo, useState } from 'react';
import type { MCQ, Unit } from '../../content/types';
import { useStore } from '../../lib/store';
import { wordDiff } from '../../lib/grading';
import { isLlmConfigured } from '../../lib/ai/providers';
import { generateListening, type GeneratedListening } from '../../lib/ai/prompts';
import { SpeakButton } from '../../components/Speak';
import { ListeningPractice } from '../../components/Tasks';
import { unitMore } from '../../content';
import { Card, ErrorBox, Spinner } from '../../components/ui';

export function ListeningTask({
  title,
  kind,
  text,
  questions,
  onChecked,
}: {
  title: string;
  kind: 'monolog' | 'dialog';
  text: string;
  questions: MCQ[];
  onChecked?: (score: number) => void;
}) {
  const [ans, setAns] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [showText, setShowText] = useState(false);
  const score = questions.filter((q, i) => ans[i] === q.answer).length / questions.length;
  const lines = text.split('\n').filter((l) => l.trim());

  return (
    <div className="stack">
      <div>
        <h3>🎧 {title}</h3>
        <p className="muted">
          {kind === 'dialog' ? 'Диалог' : 'Монолог'}. Сначала прослушайте без текста, затем ответьте на вопросы. Можно слушать
          несколько раз и в замедленном темпе.
        </p>
        <div className="row wrap">
          <SpeakButton text={text} dialog={kind === 'dialog'} label="Слушать" className="big" />
          <SpeakButton text={text} dialog={kind === 'dialog'} rate={0.75} label="Медленно" />
        </div>
      </div>
      <ol className="questions">
        {questions.map((q, i) => (
          <li key={i}>
            <div className="de q">{q.question}</div>
            <div className="options compact">
              {q.options.map((o, k) => (
                <button
                  key={k}
                  disabled={checked}
                  className={`option ${ans[i] === k ? 'selected' : ''} ${checked && k === q.answer ? 'ok' : ''} ${
                    checked && ans[i] === k && k !== q.answer ? 'bad' : ''
                  }`}
                  onClick={() => setAns({ ...ans, [i]: k })}
                >
                  {o}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>
      {!checked ? (
        <button
          className="btn primary"
          disabled={Object.keys(ans).length < questions.length}
          onClick={() => {
            setChecked(true);
            setShowText(true);
            onChecked?.(score);
          }}
        >
          Проверить ответы
        </button>
      ) : (
        <div className={`feedback ${score >= 0.6 ? 'ok' : 'bad'}`}>
          Верно: {Math.round(score * 100)}% ({questions.filter((q, i) => ans[i] === q.answer).length}/{questions.length})
        </div>
      )}
      <details open={showText} onToggle={(e) => setShowText((e.target as HTMLDetailsElement).open)}>
        <summary>Текст (транскрипт)</summary>
        <div className="transcript de">
          {lines.map((l, i) => (
            <p key={i}>
              {l} <SpeakButton text={l.replace(/^[AB]:\s*/, '')} />
            </p>
          ))}
        </div>
      </details>
    </div>
  );
}

function Dictation({ text }: { text: string }) {
  const sentences = useMemo(() => {
    const all = (text.replace(/^[AB]:\s*/gm, '').match(/[^.!?]+[.!?]/g) ?? []).map((x) => x.trim());
    const mid = all.filter((x) => x.split(/\s+/).length >= 5 && x.split(/\s+/).length <= 16);
    return (mid.length >= 3 ? mid : all).filter((_, i, arr) => i % Math.max(1, Math.floor(arr.length / 3)) === 0).slice(0, 3);
  }, [text]);
  const [vals, setVals] = useState<string[]>(['', '', '']);
  const [checked, setChecked] = useState(false);
  return (
    <div className="stack">
      <h3>✍️ Диктант</h3>
      <p className="muted">Прослушайте предложение и запишите его. Тренирует понимание на слух и орфографию.</p>
      {sentences.map((s, i) => {
        const d = checked ? wordDiff(s, vals[i]) : null;
        return (
          <div key={i} className="dictation">
            <div className="row">
              <SpeakButton text={s} label={`${i + 1}`} />
              <SpeakButton text={s} rate={0.7} label="медленно" />
            </div>
            <input
              className="text-input"
              value={vals[i]}
              disabled={checked}
              onChange={(e) => setVals(vals.map((v, k) => (k === i ? e.target.value : v)))}
              spellCheck={false}
            />
            {d && (
              <div className="diff">
                {d.tokens.map((t, k) => (
                  <span key={k} className={`tok ${t.status}`}>
                    {t.word}
                  </span>
                ))}{' '}
                <span className="pill">{Math.round(d.accuracy * 100)}%</span>
                <div className="muted de">{s}</div>
              </div>
            )}
          </div>
        );
      })}
      {!checked && (
        <button className="btn" onClick={() => setChecked(true)}>
          Проверить диктант
        </button>
      )}
    </div>
  );
}

export function ListeningStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const completeStep = useStore((s) => s.completeStep);
  const done = useStore((s) => !!s.units[unit.id]?.steps.listening?.done);
  const settings = useStore((s) => s.settings);
  const [checked, setChecked] = useState(false);
  const [gen, setGen] = useState<GeneratedListening | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const L = unit.listening;

  const more = async () => {
    setBusy(true);
    setErr('');
    try {
      setGen(await generateListening(unit));
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="stack">
      <Card>
        <ListeningTask
          title={L.title}
          kind={L.kind}
          text={L.text}
          questions={L.questions}
          onChecked={(score) => {
            completeStep(unit.id, 'listening', score);
            setChecked(true);
          }}
        />
      </Card>
      {(unitMore(unit.id)?.listening ?? []).map((l, i) => (
        <Card key={i}>
          <ListeningPractice l={l} prefix={`l${i}`} />
        </Card>
      ))}
      <Card>
        <Dictation text={L.text} />
      </Card>
      {gen && (
        <Card>
          <ListeningTask key={gen.text} title={`✨ ${gen.title}`} kind={gen.kind} text={gen.text} questions={gen.questions} />
        </Card>
      )}
      <div className="row wrap">
        {(checked || done) && (
          <button className="btn primary" onClick={onNext}>
            Следующий шаг →
          </button>
        )}
        {isLlmConfigured(settings) && (
          <button className="btn ghost" disabled={busy} onClick={more}>
            ✨ Новый текст для аудирования (ИИ)
          </button>
        )}
      </div>
      {busy && <Spinner text="ИИ пишет новый текст…" />}
      <ErrorBox error={err} />
    </div>
  );
}
