import { useStore } from '../store';
import { AiError } from './llm';

export interface Transcript {
  text: string;
  /** 0..1, rough confidence derived from Whisper segment log-probs (if available) */
  confidence?: number;
  /** segments whose recognition was uncertain – often a hint at unclear pronunciation */
  unclear?: string[];
}

function extFor(type: string): string {
  if (type.includes('webm')) return 'webm';
  if (type.includes('ogg')) return 'ogg';
  if (type.includes('mp4') || type.includes('aac') || type.includes('m4a')) return 'm4a';
  if (type.includes('wav')) return 'wav';
  if (type.includes('mpeg')) return 'mp3';
  return 'webm';
}

/** Speech-to-text with Groq Whisper (OpenAI-compatible endpoint). */
export async function transcribeWhisper(audio: Blob, prompt?: string): Promise<Transcript> {
  const s = useStore.getState().settings;
  const key = s.keys.groq;
  if (!key) throw new AiError('Для распознавания речи через Whisper нужен бесплатный ключ Groq (Настройки).');
  const form = new FormData();
  form.append('file', audio, `speech.${extFor(audio.type)}`);
  form.append('model', s.sttModel || 'whisper-large-v3-turbo');
  form.append('language', 'de');
  form.append('response_format', 'verbose_json');
  form.append('temperature', '0');
  if (prompt) form.append('prompt', prompt.slice(0, 600));
  const res = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}` },
    body: form,
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    if (res.status === 429) throw new AiError('Превышен лимит Whisper (429). Подождите минуту.');
    throw new AiError(`Ошибка распознавания речи ${res.status}: ${t.slice(0, 200)}`);
  }
  const data = (await res.json()) as {
    text: string;
    segments?: { text: string; avg_logprob: number; no_speech_prob: number }[];
  };
  const segs = data.segments ?? [];
  let confidence: number | undefined;
  const unclear: string[] = [];
  if (segs.length) {
    const avg = segs.reduce((a, s) => a + s.avg_logprob, 0) / segs.length;
    confidence = Math.max(0, Math.min(1, Math.exp(avg)));
    for (const sg of segs) if (sg.avg_logprob < -0.6) unclear.push(sg.text.trim());
  }
  return { text: data.text.trim(), confidence, unclear };
}

// ---- Browser Web Speech API (Chrome / Edge / Safari) ----

type RecognitionCtor = new () => {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  onresult: (e: { results: ArrayLike<ArrayLike<{ transcript: string; confidence: number }> & { isFinal: boolean }> }) => void;
  onerror: (e: { error: string }) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
};

export function getRecognitionCtor(): RecognitionCtor | undefined {
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

export interface BrowserRecognition {
  stop: () => Promise<Transcript>;
  cancel: () => void;
}

/** Start continuous browser recognition; call stop() to get the final transcript. */
export function startBrowserRecognition(onInterim?: (t: string) => void): BrowserRecognition {
  const Ctor = getRecognitionCtor();
  if (!Ctor) throw new AiError('Браузер не поддерживает распознавание речи. Используйте Chrome/Edge или подключите Groq Whisper.');
  const rec = new Ctor();
  rec.lang = 'de-DE';
  rec.interimResults = true;
  rec.continuous = true;
  rec.maxAlternatives = 1;
  let finalText = '';
  let interim = '';
  const confs: number[] = [];
  let resolveEnd: (() => void) | null = null;
  let ended = false;
  rec.onresult = (e) => {
    interim = '';
    finalText = '';
    for (let i = 0; i < e.results.length; i++) {
      const r = e.results[i];
      if (r.isFinal) {
        finalText += r[0].transcript + ' ';
        if (r[0].confidence) confs.push(r[0].confidence);
      } else interim += r[0].transcript;
    }
    onInterim?.((finalText + interim).trim());
  };
  rec.onerror = () => {};
  rec.onend = () => {
    ended = true;
    resolveEnd?.();
  };
  rec.start();
  return {
    stop: () =>
      new Promise<Transcript>((resolve) => {
        resolveEnd = () =>
          resolve({
            text: (finalText + interim).trim(),
            confidence: confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : undefined,
          });
        if (ended) resolveEnd();
        else rec.stop();
      }),
    cancel: () => rec.stop(),
  };
}
