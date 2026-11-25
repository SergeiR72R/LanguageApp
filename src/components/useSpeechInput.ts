import { useCallback, useEffect, useRef, useState } from 'react';
import { useStore } from '../lib/store';
import { startBrowserRecognition, transcribeWhisper, type BrowserRecognition, type Transcript } from '../lib/ai/stt';
import { stopSpeaking } from '../lib/ai/tts';

export type MicState = 'idle' | 'recording' | 'processing';

/**
 * Record the learner's speech and return a transcript.
 * Uses Groq Whisper when a key is configured (best accuracy, honest about errors),
 * otherwise the browser's built-in recognition.
 */
export function useSpeechInput() {
  const settings = useStore((s) => s.settings);
  const [state, setState] = useState<MicState>('idle');
  const [interim, setInterim] = useState('');
  const [error, setError] = useState('');
  const recRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const browserRec = useRef<BrowserRecognition | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const startedAt = useRef(0);
  const useWhisper = settings.sttProvider === 'groq' && !!settings.keys.groq;

  useEffect(
    () => () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      browserRec.current?.cancel();
    },
    [],
  );

  const start = useCallback(async () => {
    setError('');
    setInterim('');
    stopSpeaking();
    try {
      if (useWhisper) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
        streamRef.current = stream;
        const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find((m) => MediaRecorder.isTypeSupported?.(m));
        const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
        chunks.current = [];
        rec.ondataavailable = (e) => e.data.size && chunks.current.push(e.data);
        rec.start();
        recRef.current = rec;
      } else {
        browserRec.current = startBrowserRecognition(setInterim);
      }
      startedAt.current = Date.now();
      setState('recording');
    } catch (e) {
      setError(
        (e as Error).name === 'NotAllowedError'
          ? 'Нет доступа к микрофону. Разрешите его в настройках браузера.'
          : (e as Error).message,
      );
      setState('idle');
    }
  }, [useWhisper]);

  /** Stop and transcribe. `prompt` helps Whisper with expected vocabulary (not used for scoring). */
  const stop = useCallback(
    async (prompt?: string): Promise<Transcript | null> => {
      setState('processing');
      try {
        if (recRef.current) {
          const rec = recRef.current;
          const blob = await new Promise<Blob>((resolve) => {
            rec.onstop = () => resolve(new Blob(chunks.current, { type: rec.mimeType || 'audio/webm' }));
            rec.stop();
          });
          streamRef.current?.getTracks().forEach((t) => t.stop());
          recRef.current = null;
          if (Date.now() - startedAt.current < 600 || blob.size < 1500) {
            setError('Запись слишком короткая.');
            return null;
          }
          const t = await transcribeWhisper(blob, prompt);
          if (!t.text) setError('Речь не распознана, попробуйте ещё раз.');
          return t.text ? t : null;
        }
        if (browserRec.current) {
          const t = await browserRec.current.stop();
          browserRec.current = null;
          if (!t.text) setError('Речь не распознана, попробуйте ещё раз.');
          return t.text ? t : null;
        }
        return null;
      } catch (e) {
        setError((e as Error).message);
        return null;
      } finally {
        setState('idle');
        setInterim('');
      }
    },
    [],
  );

  return { state, start, stop, interim, error, engine: useWhisper ? 'Whisper (Groq)' : 'браузер' };
}
