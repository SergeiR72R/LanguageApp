import { useEffect, useRef, useState } from 'react';
import type { Level } from '../content/types';
import { useStore } from '../lib/store';
import {
  conversationSystemPrompt,
  conversationTurn,
  summarizeConversation,
  type ConversationSummary,
  type ConversationTurn,
} from '../lib/ai/prompts';
import { speak, stopSpeaking } from '../lib/ai/tts';
import { SpeakButton } from './Speak';
import { useSpeechInput } from './useSpeechInput';
import { ErrorList } from './WritingFeedbackView';
import { ErrorBox, Spinner } from './ui';

export function ConversationPanel({
  level,
  topic,
  aiRole,
  opener,
  tasksRu,
  unitId,
  minTurns = 5,
  onFinished,
}: {
  level: Level;
  topic: string;
  aiRole: string;
  opener: string;
  tasksRu: string[];
  unitId?: string;
  minTurns?: number;
  onFinished?: (s: ConversationSummary, turns: number, history: ConversationTurn[]) => void;
}) {
  const [turns, setTurns] = useState<ConversationTurn[]>([{ role: 'ai', text: opener }]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [typed, setTyped] = useState('');
  const [summary, setSummary] = useState<ConversationSummary | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [showText, setShowText] = useState(true);
  const mic = useSpeechInput();
  const addMistakes = useStore((s) => s.addMistakes);
  const logActivity = useStore((s) => s.logActivity);
  const addConversation = useStore((s) => s.addConversation);
  const endRef = useRef<HTMLDivElement>(null);
  const system = conversationSystemPrompt(level, aiRole, tasksRu);
  const userTurns = turns.filter((t) => t.role === 'user').length;

  useEffect(() => {
    if (autoSpeak) speak(opener).catch(() => {});
    return () => stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opener]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [turns.length, busy]);

  const send = async (text: string) => {
    if (!text.trim()) return;
    setErr('');
    const history: ConversationTurn[] = [...turns, { role: 'user', text: text.trim() }];
    setTurns(history);
    setBusy(true);
    try {
      const r = await conversationTurn(system, history);
      const withAnalysis = history.map((t, i) =>
        i === history.length - 1 ? { ...t, errors: r.errors, betterVersion: r.betterVersion, tipRu: r.tipRu } : t,
      );
      setTurns([...withAnalysis, { role: 'ai', text: r.reply }]);
      addMistakes(r.errors.map((e) => ({ ...e, source: 'speaking' as const, unitId })));
      logActivity({ spokenTurns: 1 });
      if (autoSpeak) speak(r.reply).catch(() => {});
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const micToggle = async () => {
    if (mic.state === 'recording') {
      const t = await mic.stop(topic);
      if (t) await send(t.text);
    } else mic.start();
  };

  const finish = async () => {
    setBusy(true);
    setErr('');
    stopSpeaking();
    try {
      const s = await summarizeConversation(level, topic, turns);
      setSummary(s);
      addConversation({ unitId, topic, turns: userTurns, summary: s });
      onFinished?.(s, userTurns, turns);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="conversation">
      <div className="row wrap between">
        <div className="tiny muted">
          Распознавание: {mic.engine} · реплик: {userTurns}
          {minTurns ? ` / ${minTurns}` : ''}
        </div>
        <div className="row">
          <label className="check tiny">
            <input type="checkbox" checked={autoSpeak} onChange={(e) => setAutoSpeak(e.target.checked)} /> озвучивать
          </label>
          <label className="check tiny">
            <input type="checkbox" checked={showText} onChange={(e) => setShowText(e.target.checked)} /> показывать текст ИИ
          </label>
        </div>
      </div>
      <div className="chat">
        {turns.map((t, i) => (
          <div key={i} className={`bubble ${t.role}`}>
            {t.role === 'ai' ? (
              <>
                <span className={`de ${showText ? '' : 'blurred'}`} onClick={() => setShowText(true)}>
                  {t.text}
                </span>{' '}
                <SpeakButton text={t.text} />
              </>
            ) : (
              <>
                <div className="de">{t.text}</div>
                {t.errors && (
                  <div className="analysis">
                    {t.errors.length ? (
                      <>
                        <div className="small">
                          <strong>⚠️ Ошибок: {t.errors.length}</strong>
                        </div>
                        <ErrorList errors={t.errors} />
                      </>
                    ) : (
                      <span className="ok-text tiny">✓ без ошибок</span>
                    )}
                    {t.betterVersion && t.betterVersion.trim() !== t.text.trim() && (
                      <details className="better">
                        <summary className="small">💡 Показать весь ответ в исправленном виде</summary>
                        <span className="de">{t.betterVersion}</span> <SpeakButton text={t.betterVersion} />
                      </details>
                    )}
                    {t.tipRu && <div className="tiny muted">{t.tipRu}</div>}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        {busy && <Spinner text={summary ? 'Готовлю разбор…' : 'Собеседник думает…'} />}
        <div ref={endRef} />
      </div>
      <ErrorBox error={mic.error || err} />
      {!summary && (
        <>
          <div className="mic-row">
            <button
              className={`btn mic big ${mic.state === 'recording' ? 'recording' : ''}`}
              disabled={busy || mic.state === 'processing'}
              onClick={micToggle}
            >
              {mic.state === 'recording' ? '⏹ Отправить' : mic.state === 'processing' ? 'Распознаю…' : '🎙️ Говорить'}
            </button>
            {mic.state === 'recording' && <span className="muted">{mic.interim || 'Говорите… нажмите ещё раз, когда закончите.'}</span>}
          </div>
          <form
            className="row"
            onSubmit={(e) => {
              e.preventDefault();
              send(typed);
              setTyped('');
            }}
          >
            <input className="text-input" value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="…или напишите ответ" />
            <button className="btn" disabled={busy || !typed.trim()}>
              ➤
            </button>
          </form>
          <button className="btn ghost" disabled={busy || userTurns < 2} onClick={finish}>
            Завершить и получить разбор {userTurns < minTurns ? `(рекомендуется ≥ ${minTurns} реплик)` : ''}
          </button>
        </>
      )}
      {summary && (
        <div className="info-box summary">
          <div className="row between">
            <h3>Разбор разговора</h3>
            {summary.cefr && <span className="pill accent">≈ {summary.cefr}</span>}
          </div>
          <p>{summary.summaryRu}</p>
          <p>
            <strong>Грамматика:</strong> {summary.grammarRu}
          </p>
          <p>
            <strong>Лексика:</strong> {summary.vocabularyRu}
          </p>
          <p>
            <strong>Беглость:</strong> {summary.fluencyRu}
          </p>
          {summary.taskRu && (
            <p>
              <strong>Задача:</strong> {summary.taskRu}
            </p>
          )}
          <h4>Рекомендации</h4>
          <ul>
            {summary.recommendationsRu.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h4>Полезные фразы</h4>
          <ul>
            {summary.usefulPhrases.map((r, i) => (
              <li key={i} className="de">
                {r} <SpeakButton text={r} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
