import { useEffect, useRef, useState } from 'react';
import { assessPronunciation, scoreClass, startRecording, tipFor, toWav16k, type PronunciationResult, type Recorder } from '../lib/ai/pronunciation';
import { SpeakButton } from './Speak';
import { ErrorBox, Spinner } from './ui';

const ERR_RU: Record<string, string> = {
  Mispronunciation: 'произнесено неправильно',
  Omission: 'пропущено',
  Insertion: 'лишнее слово',
  UnexpectedBreak: 'лишняя пауза',
  MissingBreak: 'нет паузы',
  Monotone: 'монотонно',
};

/** Read a sentence aloud and get a real pronunciation assessment (Azure): scores per sentence, word and syllable. */
export function PronunciationCheck({ sentence, onScore, compact }: { sentence: string; onScore?: (score: number) => void; compact?: boolean }) {
  const [state, setState] = useState<'idle' | 'recording' | 'checking'>('idle');
  const [res, setRes] = useState<PronunciationResult | null>(null);
  const [err, setErr] = useState('');
  const [audio, setAudio] = useState<string>('');
  const rec = useRef<Recorder | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => rec.current?.cancel(), []);
  useEffect(() => () => void (audio && URL.revokeObjectURL(audio)), [audio]);

  const stop = async () => {
    clearTimeout(timer.current);
    const r = rec.current;
    rec.current = null;
    if (!r) return;
    setState('checking');
    try {
      const blob = await r.stop();
      setAudio(URL.createObjectURL(blob));
      const out = await assessPronunciation(await toWav16k(blob), sentence);
      setRes(out);
      onScore?.(out.pron / 100);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setState('idle');
    }
  };

  const start = async () => {
    setErr('');
    setRes(null);
    try {
      rec.current = await startRecording();
      setState('recording');
      timer.current = setTimeout(() => void stop(), 20000);
    } catch (e) {
      setErr((e as Error).message || 'Нет доступа к микрофону.');
    }
  };

  const weak = (res?.words ?? []).filter((w) => w.error !== 'None' || w.accuracy < 75).slice(0, 5);

  return (
    <div className={`pron-check ${compact ? 'compact' : ''}`}>
      <div className="row wrap">
        <button className={`btn mic ${state === 'recording' ? 'recording' : ''}`} disabled={state === 'checking'} onClick={() => (state === 'recording' ? void stop() : void start())}>
          {state === 'recording' ? '⏹ Готово' : state === 'checking' ? '…' : res ? '🎙️ Ещё раз' : '🎙️ Прочитать вслух'}
        </button>
        {state === 'recording' && <span className="muted small">Говорите… потом нажмите «Готово»</span>}
        {state === 'checking' && <Spinner text="Оцениваю произношение…" />}
        {audio && state === 'idle' && <audio src={audio} controls className="pron-audio" />}
      </div>
      <ErrorBox error={err} />
      {res && (
        <div className="pron-result">
          <div className="pron-scores">
            <span className={`pron-total ${scoreClass(res.pron)}`}>{Math.round(res.pron)}</span>
            <span className="tiny">
              точность <b>{Math.round(res.accuracy)}</b> · беглость <b>{Math.round(res.fluency)}</b> · полнота <b>{Math.round(res.completeness)}</b>
              {res.prosody !== undefined && (
                <>
                  {' '}
                  · интонация <b>{Math.round(res.prosody)}</b>
                </>
              )}
            </span>
          </div>
          <div className="pron-words de">
            {res.words.map((w, i) => (
              <span
                key={i}
                className={`pron-word ${w.error === 'Omission' ? 'omitted' : w.error === 'Insertion' ? 'inserted' : scoreClass(w.accuracy)}`}
                title={`${w.word}: ${Math.round(w.accuracy)}${w.error !== 'None' ? ` — ${ERR_RU[w.error] ?? w.error}` : ''}${w.syllables.length > 1 ? `\nслоги: ${w.syllables.map((s) => `${s.grapheme} ${Math.round(s.accuracy)}`).join(', ')}` : ''}`}
              >
                {w.word}
              </span>
            ))}
          </div>
          {weak.length > 0 ? (
            <ul className="pron-tips">
              {weak.map((w, i) => {
                const worst = [...w.syllables].sort((a, b) => a.accuracy - b.accuracy)[0];
                return (
                  <li key={i}>
                    <strong className="de">{w.word}</strong> <SpeakButton text={w.word} rate={0.7} />{' '}
                    <span className={`pill ${scoreClass(w.accuracy)}`}>{w.error === 'Omission' ? 'пропущено' : Math.round(w.accuracy)}</span>
                    {w.syllables.length > 1 && (
                      <span className="tiny">
                        {' '}
                        {w.syllables.map((s, k) => (
                          <span key={k} className={`syl ${scoreClass(s.accuracy)}`}>
                            {s.grapheme}
                          </span>
                        ))}
                      </span>
                    )}
                    <div className="tiny muted">{w.error === 'Omission' ? 'Это слово не прозвучало — прочитайте фразу целиком.' : tipFor(w.word, worst?.grapheme)}</div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="ok-text small">Отличное произношение! 🎉</p>
          )}
        </div>
      )}
    </div>
  );
}
