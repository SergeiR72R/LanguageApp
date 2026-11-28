import { useStore } from '../store';

/**
 * Pronunciation assessment with Azure AI Speech: compares the learner's audio with the reference text
 * phoneme by phoneme (not just "was the word recognised"). Free tier F0: 5 audio hours per month.
 */

export interface SyllableScore {
  grapheme: string;
  accuracy: number;
}
export interface WordScore {
  word: string;
  accuracy: number;
  /** None | Mispronunciation | Omission | Insertion | UnexpectedBreak | MissingBreak | Monotone */
  error: string;
  syllables: SyllableScore[];
}
export interface PronunciationResult {
  pron: number;
  accuracy: number;
  fluency: number;
  completeness: number;
  prosody?: number;
  recognized: string;
  words: WordScore[];
}

/** Our Azure Speech resource lives in West Europe; only the key is entered in the settings. */
export const AZURE_REGION = 'westeurope';

export const isAzureConfigured = () => !!useStore.getState().settings.keys.azure?.trim();

// ---------------------------------------------------------------- recording

export interface Recorder {
  stop: () => Promise<Blob>;
  cancel: () => void;
}

export async function startRecording(): Promise<Recorder> {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('Браузер не даёт доступ к микрофону.');
  const stream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true } });
  const rec = new MediaRecorder(stream);
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  rec.start();
  const release = () => stream.getTracks().forEach((t) => t.stop());
  return {
    stop: () =>
      new Promise<Blob>((resolve) => {
        rec.onstop = () => {
          release();
          resolve(new Blob(chunks, { type: rec.mimeType || 'audio/webm' }));
        };
        rec.stop();
      }),
    cancel: () => {
      try {
        rec.stop();
      } catch {
        /* already stopped */
      }
      release();
    },
  };
}

/** Any recorded audio → 16 kHz mono 16-bit WAV, the format the Azure REST API accepts. */
export async function toWav16k(blob: Blob): Promise<Blob> {
  const ctx = new AudioContext();
  try {
    const decoded = await ctx.decodeAudioData(await blob.arrayBuffer());
    const rate = 16000;
    const off = new OfflineAudioContext(1, Math.max(1, Math.ceil(decoded.duration * rate)), rate);
    const src = off.createBufferSource();
    src.buffer = decoded;
    src.connect(off.destination);
    src.start();
    const pcm = (await off.startRendering()).getChannelData(0);
    const buf = new ArrayBuffer(44 + pcm.length * 2);
    const v = new DataView(buf);
    const str = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
    str(0, 'RIFF');
    v.setUint32(4, 36 + pcm.length * 2, true);
    str(8, 'WAVE');
    str(12, 'fmt ');
    v.setUint32(16, 16, true);
    v.setUint16(20, 1, true);
    v.setUint16(22, 1, true);
    v.setUint32(24, rate, true);
    v.setUint32(28, rate * 2, true);
    v.setUint16(32, 2, true);
    v.setUint16(34, 16, true);
    str(36, 'data');
    v.setUint32(40, pcm.length * 2, true);
    for (let i = 0; i < pcm.length; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, pcm[i])) * 0x7fff, true);
    return new Blob([buf], { type: 'audio/wav' });
  } finally {
    void ctx.close();
  }
}

// ---------------------------------------------------------------- assessment

interface AzureWord {
  Word: string;
  AccuracyScore?: number;
  ErrorType?: string;
  Syllables?: { Grapheme?: string; Syllable?: string; AccuracyScore?: number }[];
  PronunciationAssessment?: { AccuracyScore?: number; ErrorType?: string };
}

export function parseAzure(json: unknown): PronunciationResult {
  const j = json as { RecognitionStatus?: string; DisplayText?: string; NBest?: Record<string, unknown>[] };
  if (j.RecognitionStatus && j.RecognitionStatus !== 'Success')
    throw new Error(j.RecognitionStatus === 'NoMatch' || j.RecognitionStatus === 'InitialSilenceTimeout' ? 'Речь не услышана — говорите громче и ближе к микрофону.' : `Azure: ${j.RecognitionStatus}`);
  const best = (j.NBest?.[0] ?? {}) as Record<string, unknown> & { Words?: AzureWord[]; PronunciationAssessment?: Record<string, number> };
  const pa = (best.PronunciationAssessment ?? best) as Record<string, number | undefined>;
  return {
    pron: Number(pa.PronScore ?? 0),
    accuracy: Number(pa.AccuracyScore ?? 0),
    fluency: Number(pa.FluencyScore ?? 0),
    completeness: Number(pa.CompletenessScore ?? 0),
    prosody: pa.ProsodyScore === undefined ? undefined : Number(pa.ProsodyScore),
    recognized: String(best.Display ?? j.DisplayText ?? ''),
    words: (best.Words ?? []).map((w) => ({
      word: w.Word,
      accuracy: Number(w.PronunciationAssessment?.AccuracyScore ?? w.AccuracyScore ?? 0),
      error: String(w.PronunciationAssessment?.ErrorType ?? w.ErrorType ?? 'None'),
      syllables: (w.Syllables ?? []).map((s) => ({ grapheme: s.Grapheme || s.Syllable || '', accuracy: Number(s.AccuracyScore ?? 0) })).filter((s) => s.grapheme),
    })),
  };
}

/** Send a WAV recording with the reference text to Azure and get scores per sentence, word and syllable. */
export async function assessPronunciation(wav: Blob, referenceText: string): Promise<PronunciationResult> {
  const s = useStore.getState().settings;
  const key = s.keys.azure?.trim();
  if (!key) throw new Error('Не указан ключ Azure Speech. Откройте «Настройки».');
  const config = { ReferenceText: referenceText, GradingSystem: 'HundredMark', Granularity: 'Phoneme', Dimension: 'Comprehensive', EnableProsodyAssessment: true };
  const header = btoa(String.fromCharCode(...new TextEncoder().encode(JSON.stringify(config))));
  let res: Response;
  try {
    res = await fetch(`https://${AZURE_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=de-DE&format=detailed`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
        'Pronunciation-Assessment': header,
        Accept: 'application/json',
      },
      body: wav,
    });
  } catch {
    throw new Error('Нет связи с Azure Speech. Проверьте интернет.');
  }
  if (res.status === 401 || res.status === 403) throw new Error('Azure не принял ключ (401/403). Проверьте ключ в «Настройках».');
  if (res.status === 429) throw new Error('Лимит бесплатного тарифа Azure на эту минуту/месяц исчерпан (429). Попробуйте чуть позже.');
  if (!res.ok) throw new Error(`Azure Speech: ошибка ${res.status}`);
  return parseAzure(await res.json());
}

// ---------------------------------------------------------------- tips

const TIPS: [RegExp, string][] = [
  [/ö/i, 'ö: губы округлите, как для «о», а язык поставьте, как для «э». Не «о» и не «ё»!'],
  [/ü/i, 'ü: губы трубочкой, как для «у», а язык — как для «и». Не «ю»!'],
  [/ä/i, 'ä: открытое «э», рот чуть шире.'],
  [/(?:ei|ai)/i, 'ei/ai читается «ай».'],
  [/ie/i, 'ie — одно долгое «и:».'],
  [/(?:eu|äu)/i, 'eu/äu читается «ой».'],
  [/sch/i, 'sch — «ш», губы немного вперёд.'],
  [/(?:[aou]|au)ch/i, 'ch после a, o, u, au — твёрдое «х», глубоко в горле (machen, Buch, auch).'],
  [/(?:^|[^s])ch/i, 'ch после e, i, ä, ö, ü, ei, eu и согласных — мягкое «хь»: выдох между языком и нёбом, не «ш» (ich, möchte, Milch).'],
  [/^(?:sp|st)/i, 'sp/st в начале слова — «шп»/«шт».'],
  [/z|tz/i, 'z/tz — «ц».'],
  [/^s[aeiouäöü]/i, 's перед гласной — звонкое «з».'],
  [/ng/i, 'ng — носовое «н» без «г» на конце.'],
  [/r/i, 'r — картавое, в горле; после гласной в конце слога почти «а» (Bier ≈ «би:а»).'],
  [/er$/i, '-er в конце — короткое «а».'],
  [/^h/i, 'h в начале — лёгкий выдох, мягче русского «х».'],
  [/v/i, 'v обычно читается как «ф».'],
  [/w/i, 'w — «в».'],
  [/(?:aa|ee|oo|ah|eh|oh|uh)/i, 'Долгая гласная: тяните её дольше.'],
];

const DEFAULT_TIP = 'Послушайте образец 🔊 и повторите медленно и чётко, по слогам.';

/** Russian hint for a weak word: the sound in its weakest syllable, else the first tricky sound of the word. */
export function tipFor(word: string, weakest?: string): string {
  for (const f of [weakest, word]) {
    const hit = f && TIPS.find(([re]) => re.test(f));
    if (hit) return hit[1];
  }
  return DEFAULT_TIP;
}

export function scoreClass(n: number): string {
  return n >= 85 ? 'ok' : n >= 65 ? 'warn' : 'bad';
}
