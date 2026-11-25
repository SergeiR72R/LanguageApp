import { useState } from 'react';
import { wordDiff } from '../lib/grading';
import { useStore } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { pronunciationFeedback, type PronunciationFeedback } from '../lib/ai/prompts';
import type { Transcript } from '../lib/ai/stt';
import { SpeakButton } from './Speak';
import { useSpeechInput } from './useSpeechInput';
import { ErrorBox, Spinner } from './ui';

/** Listen → repeat → compare what the recogniser heard with the target sentence. */
export function ReadAloud({ sentence, onAttempt }: { sentence: string; onAttempt?: (accuracy: number) => void }) {
  const mic = useSpeechInput();
  const settings = useStore((s) => s.settings);
  const addMistakes = useStore((s) => s.addMistakes);
  const [t, setT] = useState<Transcript | null>(null);
  const [fb, setFb] = useState<PronunciationFeedback | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const diff = t ? wordDiff(sentence, t.text) : null;

  const toggle = async () => {
    if (mic.state === 'recording') {
      // no prompt here: we want Whisper to transcribe what was actually said
      const r = await mic.stop();
      if (r) {
        setT(r);
        setFb(null);
        onAttempt?.(wordDiff(sentence, r.text).accuracy);
      }
    } else mic.start();
  };

  const analyze = async () => {
    if (!t) return;
    setBusy(true);
    setErr('');
    try {
      const r = await pronunciationFeedback(sentence, t.text, t.unclear ?? []);
      setFb(r);
      addMistakes(
        r.problemWords.slice(0, 3).map((p) => ({
          source: 'speaking' as const,
          original: p.word,
          correction: p.word,
          category: 'Aussprache' as const,
          explanationRu: p.tipRu,
        })),
      );
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="read-aloud">
      <div className="de ra-sentence">
        {sentence} <SpeakButton text={sentence} /> <SpeakButton text={sentence} rate={0.7} label="медл." />
      </div>
      <div className="row wrap">
        <button className={`btn mic ${mic.state === 'recording' ? 'recording' : ''}`} disabled={mic.state === 'processing'} onClick={toggle}>
          {mic.state === 'recording' ? '⏹ Стоп' : mic.state === 'processing' ? '…' : '🎙️ Прочитать вслух'}
        </button>
        {mic.state === 'recording' && <span className="muted">{mic.interim || 'Говорите…'}</span>}
      </div>
      <ErrorBox error={mic.error || err} />
      {diff && t && (
        <div className="diff">
          <div className="tiny muted">Распознано ({mic.engine}):</div>
          {diff.tokens.map((tk, k) => (
            <span key={k} className={`tok ${tk.status}`} title={tk.status === 'missing' ? 'Не распознано — возможно, нечётко произнесено' : tk.status === 'extra' ? 'Лишнее/искажённое слово' : ''}>
              {tk.word}
            </span>
          ))}{' '}
          <span className={`pill ${diff.accuracy >= 0.9 ? 'ok' : diff.accuracy >= 0.7 ? 'warn' : 'bad'}`}>{Math.round(diff.accuracy * 100)}%</span>
          {t.confidence !== undefined && <span className="tiny muted"> уверенность распознавания {Math.round(t.confidence * 100)}%</span>}
          {isLlmConfigured(settings) && !fb && (
            <button className="btn small ghost" disabled={busy} onClick={analyze}>
              Советы по произношению
            </button>
          )}
          {busy && <Spinner />}
          {fb && (
            <div className="info-box">
              <p>{fb.feedbackRu}</p>
              <ul>
                {fb.problemWords.map((p, i) => (
                  <li key={i}>
                    <strong className="de">{p.word}</strong> <SpeakButton text={p.word} /> — {p.tipRu}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
