import { useStore } from '../store';
import { AiError } from './llm';

// ---------------- Browser speechSynthesis ----------------

export function germanVoices(): SpeechSynthesisVoice[] {
  if (typeof speechSynthesis === 'undefined') return [];
  return speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('de'))
    .sort((a, b) => score(b) - score(a));
}

/** Prefer natural/neural voices (Edge "Online (Natural)", Google, Apple premium). */
function score(v: SpeechSynthesisVoice): number {
  const n = v.name.toLowerCase();
  let s = 0;
  if (n.includes('natural') || n.includes('neural') || n.includes('online')) s += 10;
  if (n.includes('google')) s += 5;
  if (n.includes('premium') || n.includes('enhanced')) s += 6;
  if (v.lang === 'de-DE') s += 2;
  return s;
}

export function onVoicesReady(cb: () => void): () => void {
  if (typeof speechSynthesis === 'undefined') return () => {};
  cb();
  speechSynthesis.addEventListener('voiceschanged', cb);
  return () => speechSynthesis.removeEventListener('voiceschanged', cb);
}

function pickVoice(name: string, fallbackIndex = 0): SpeechSynthesisVoice | undefined {
  const voices = germanVoices();
  return voices.find((v) => v.name === name) ?? voices[fallbackIndex] ?? voices[0];
}

function speakBrowser(text: string, rate: number, voiceName: string, fallbackIndex: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof speechSynthesis === 'undefined') return reject(new AiError('Браузер не поддерживает синтез речи.'));
    // Chrome cuts long utterances – split by sentences.
    const chunks = text.match(/[^.!?…]+[.!?…]*\s*/g) ?? [text];
    const voice = pickVoice(voiceName, fallbackIndex);
    let i = 0;
    const next = () => {
      if (signal.aborted) return resolve();
      if (i >= chunks.length) return resolve();
      const u = new SpeechSynthesisUtterance(chunks[i++].trim());
      u.lang = voice?.lang ?? 'de-DE';
      if (voice) u.voice = voice;
      u.rate = rate;
      u.onend = next;
      u.onerror = (e) => (e.error === 'interrupted' || e.error === 'canceled' ? resolve() : reject(new AiError(`TTS: ${e.error}`)));
      speechSynthesis.speak(u);
    };
    signal.addEventListener('abort', () => speechSynthesis.cancel());
    next();
  });
}

// ---------------- Gemini TTS ----------------

const audioCache = new Map<string, string>();

export const GEMINI_TTS_FALLBACKS = ['gemini-2.5-flash-preview-tts', 'gemini-3.8-flash-tts', 'gemini-3.8-flash-lite-tts', 'gemini-2.5-pro-preview-tts'];

function pcmToWavUrl(base64: string, sampleRate = 24000): string {
  const bin = atob(base64);
  const pcm = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) pcm[i] = bin.charCodeAt(i);
  const header = new ArrayBuffer(44);
  const v = new DataView(header);
  const w = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
  w(0, 'RIFF');
  v.setUint32(4, 36 + pcm.length, true);
  w(8, 'WAVE');
  w(12, 'fmt ');
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, 1, true);
  v.setUint32(24, sampleRate, true);
  v.setUint32(28, sampleRate * 2, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  w(36, 'data');
  v.setUint32(40, pcm.length, true);
  return URL.createObjectURL(new Blob([header, pcm], { type: 'audio/wav' }));
}

async function geminiAudioUrl(text: string, dialog: boolean): Promise<string> {
  const s = useStore.getState().settings;
  const key = s.keys.gemini;
  if (!key) throw new AiError('Для Gemini TTS нужен ключ Google AI Studio (Настройки).');
  const cacheKey = `${s.geminiTtsModel}|${s.geminiVoice}|${s.geminiVoiceB}|${dialog}|${text}`;
  const cached = audioCache.get(cacheKey);
  if (cached) return cached;
  const voice = (name: string) => ({ prebuiltVoiceConfig: { voiceName: name } });
  const speechConfig = dialog
    ? {
        multiSpeakerVoiceConfig: {
          speakerVoiceConfigs: [
            { speaker: 'A', voiceConfig: voice(s.geminiVoice) },
            { speaker: 'B', voiceConfig: voice(s.geminiVoiceB) },
          ],
        },
      }
    : { voiceConfig: voice(s.geminiVoice) };
  const prompt = dialog
    ? `Lies diesen deutschen Dialog natürlich und deutlich vor, in normalem Sprechtempo:\n${text}`
    : `Lies den folgenden deutschen Text natürlich und deutlich vor:\n${text}`;
  // Model names change over time: try the configured one first, then known alternatives.
  const candidates = [...new Set([s.geminiTtsModel, ...GEMINI_TTS_FALLBACKS])].filter(Boolean);
  let res: Response | undefined;
  let lastErr = '';
  for (const model of candidates) {
    res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['AUDIO'], speechConfig },
      }),
    });
    if (res.ok) {
      if (model !== s.geminiTtsModel) useStore.getState().updateSettings({ geminiTtsModel: model });
      break;
    }
    lastErr = await res.text().catch(() => '');
    // 404 = model unknown, 400 = model can't do audio: try the next one; other errors are final
    if (res.status !== 404 && res.status !== 400) break;
  }
  if (!res || !res.ok) {
    if (res?.status === 429) throw new AiError('Лимит Gemini TTS исчерпан (429). Использую голос браузера.');
    if (res?.status === 400 && /API key/i.test(lastErr)) throw new AiError('Ключ Gemini не принят. Проверьте его в настройках.');
    throw new AiError(`Gemini TTS ${res?.status}: ${lastErr.slice(0, 200)}`);
  }
  const data = await res.json();
  const part = data?.candidates?.[0]?.content?.parts?.find((p: { inlineData?: { data: string } }) => p.inlineData);
  if (!part) throw new AiError('Gemini TTS не вернул аудио.');
  const mime: string = part.inlineData.mimeType ?? '';
  const rate = Number(/rate=(\d+)/.exec(mime)?.[1] ?? 24000);
  const url = pcmToWavUrl(part.inlineData.data, rate);
  audioCache.set(cacheKey, url);
  return url;
}

// ---------------- Public API ----------------

let current: AbortController | null = null;
let currentAudio: HTMLAudioElement | null = null;

export function stopSpeaking() {
  current?.abort();
  current = null;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
}

export interface SpeakOptions {
  /** text with lines "A: ..." / "B: ..." – read with two voices */
  dialog?: boolean;
  rate?: number;
  onError?: (e: Error) => void;
}

/** Speak German text with the configured engine. Resolves when finished or stopped. */
export async function speak(text: string, opts: SpeakOptions = {}): Promise<void> {
  stopSpeaking();
  const ctrl = new AbortController();
  current = ctrl;
  const s = useStore.getState().settings;
  const rate = opts.rate ?? s.speechRate;

  const useGemini = s.ttsProvider === 'gemini' && !!s.keys.gemini && (!s.geminiLongOnly || !!opts.dialog || text.length >= 150);
  if (useGemini) {
    try {
      const url = await geminiAudioUrl(text, !!opts.dialog);
      if (ctrl.signal.aborted) return;
      const audio = new Audio(url);
      audio.playbackRate = rate;
      currentAudio = audio;
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => resolve();
        audio.onerror = () => reject(new AiError('Не удалось воспроизвести аудио'));
        ctrl.signal.addEventListener('abort', () => resolve());
        audio.play().catch(reject);
      });
      return;
    } catch (e) {
      opts.onError?.(e as Error);
      // fall through to browser voice
    }
  }

  if (opts.dialog) {
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    for (const line of lines) {
      if (ctrl.signal.aborted) return;
      const m = /^([AB]):\s*(.*)$/.exec(line);
      const speaker = m?.[1] ?? 'A';
      const content = m?.[2] ?? line;
      await speakBrowser(content, rate, speaker === 'A' ? s.browserVoice : s.browserVoiceB, speaker === 'A' ? 0 : 1, ctrl.signal);
    }
    return;
  }
  await speakBrowser(text, rate, s.browserVoice, 0, ctrl.signal);
}
