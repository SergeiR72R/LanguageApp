import { useState } from 'react';
import type { Unit } from '../../content/types';
import { useStore, type WritingEntry } from '../../lib/store';
import { countWords } from '../../lib/grading';
import { isLlmConfigured } from '../../lib/ai/providers';
import { checkWriting, type WritingFeedback } from '../../lib/ai/prompts';
import { profileScopedKey } from '../../lib/profiles';
import { WritingFeedbackView } from '../../components/WritingFeedbackView';
import { AiRequired, Card, ErrorBox, Spinner } from '../../components/ui';

const draftKey = (id: string) => profileScopedKey(`draft-writing-${id}`);

export function WritingStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const W = unit.writing;
  const settings = useStore((s) => s.settings);
  const completeStep = useStore((s) => s.completeStep);
  const addMistakes = useStore((s) => s.addMistakes);
  const addWriting = useStore((s) => s.addWriting);
  const logActivity = useStore((s) => s.logActivity);
  const writings = useStore((s) => s.writings);
  const previous = writings.filter((w) => w.unitId === unit.id);
  const done = useStore((s) => !!s.units[unit.id]?.steps.writing?.done);
  const [text, setText] = useState(() => {
    try {
      return localStorage.getItem(draftKey(unit.id)) ?? '';
    } catch {
      return '';
    }
  });
  const [fb, setFb] = useState<WritingFeedback | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [checks, setChecks] = useState<boolean[]>(W.points.map(() => false));
  const ai = isLlmConfigured(settings);
  const words = countWords(text);

  const save = (t: string) => {
    setText(t);
    try {
      localStorage.setItem(draftKey(unit.id), t);
    } catch {
      /* ignore */
    }
  };

  const submit = async () => {
    setBusy(true);
    setErr('');
    try {
      const r = await checkWriting({ level: unit.level, task: W.taskDe, points: W.points, text, grammarFocus: unit.grammar.topic });
      setFb(r);
      addMistakes(r.errors.map((e) => ({ ...e, source: 'writing' as const, unitId: unit.id })));
      addWriting({ unitId: unit.id, task: W.taskDe, text, score: r.score, cefr: r.cefr, feedback: r });
      logActivity({ wordsWritten: words });
      completeStep(unit.id, 'writing', r.score / 100);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const selfDone = () => {
    addWriting({ unitId: unit.id, task: W.taskDe, text });
    logActivity({ wordsWritten: words });
    completeStep(unit.id, 'writing');
  };

  return (
    <div className="stack">
      <Card>
        <h2>✍️ Письменное задание</h2>
        <p>{W.taskRu}</p>
        <div className="task-de de">{W.taskDe}</div>
        <ul>
          {W.points.map((p, i) => (
            <li key={i} className="de">
              {p}
            </li>
          ))}
        </ul>
        <details>
          <summary>Полезные фразы</summary>
          <ul className="phrases">
            {W.usefulPhrases.map((p, i) => (
              <li key={i} className="de">
                {p}
              </li>
            ))}
          </ul>
        </details>
        <textarea className="writing-area" rows={12} value={text} onChange={(e) => save(e.target.value)} placeholder="Schreiben Sie hier…" spellCheck={false} />
        <div className="row between wrap">
          <span className={words >= W.minWords ? 'ok-text' : 'muted'}>
            {words} / {W.minWords}+ слов
          </span>
          {ai ? (
            <button className="btn primary" disabled={busy || words < Math.min(30, W.minWords)} onClick={submit}>
              {fb ? 'Проверить снова' : 'Отправить на проверку ИИ'}
            </button>
          ) : null}
        </div>
        {busy && <Spinner text="ИИ проверяет текст (10–30 сек)…" />}
        <ErrorBox error={err} />
        {!ai && (
          <>
            <AiRequired what="Проверка письма" />
            <h4>Самопроверка</h4>
            {W.points.map((p, i) => (
              <label key={i} className="check">
                <input type="checkbox" checked={checks[i]} onChange={() => setChecks(checks.map((c, k) => (k === i ? !c : c)))} /> {p}
              </label>
            ))}
            <label className="check">
              <input type="checkbox" checked={checks.every(Boolean)} readOnly /> Использовал(а) грамматику юнита: {unit.grammar.topic}
            </label>
            <button className="btn primary" disabled={!checks.every(Boolean) || words < W.minWords} onClick={selfDone}>
              Засчитать задание
            </button>
          </>
        )}
      </Card>
      {fb && (
        <Card className="highlight">
          <WritingFeedbackView fb={fb} />
          <p className="tiny muted">Все ошибки сохранены в «Ошибки» и вернутся в повторении.</p>
        </Card>
      )}
      {(done || fb) && (
        <button className="btn primary" onClick={onNext}>
          Следующий шаг →
        </button>
      )}
      {previous.length > 0 && !fb && <PreviousWritings list={previous} />}
    </div>
  );
}

function PreviousWritings({ list }: { list: WritingEntry[] }) {
  return (
    <Card>
      <h3>Предыдущие попытки</h3>
      {list.map((w) => (
        <details key={w.id}>
          <summary>
            {w.date} {w.score !== undefined ? `· ${w.score}/100` : ''} {w.cefr ? `· ${w.cefr}` : ''}
          </summary>
          <div className="de prewrap">{w.text}</div>
          {!!w.feedback && <WritingFeedbackView fb={w.feedback as WritingFeedback} />}
        </details>
      ))}
    </Card>
  );
}
