import { useStore } from '../store';
import { AiError } from './llm';

/** Shrink the photo before upload (phones produce 5–12 MB images). */
export async function imageToDataUrl(file: File, maxSide = 1800): Promise<string> {
  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) throw new AiError('Не удалось открыть изображение. Поддерживаются JPG, PNG, HEIC (на iPhone выберите «Наиболее совместимый»).');
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', 0.85);
}

const PROMPT = `Auf dem Bild ist ein handschriftlicher deutscher Text eines Deutschlernenden.
Transkribiere ihn GENAU so, wie er geschrieben ist – mit allen Grammatik- und Rechtschreibfehlern des Lernenden. Korrigiere NICHTS, ergänze nichts, übersetze nichts.
Behalte Absätze bei. Durchgestrichene Wörter weglassen. Wenn ein Wort unleserlich ist, schreibe deine beste Vermutung und markiere sie mit [?] direkt dahinter.
Gib NUR den transkribierten Text aus, ohne Kommentar.`;

/**
 * Handwriting → text with a free vision model:
 * Gemini (gemini-2.5-flash, best for handwriting) if a Gemini key exists, otherwise Groq (qwen/qwen3.8-27b).
 */
export async function transcribeHandwriting(dataUrl: string): Promise<{ text: string; engine: string }> {
  const s = useStore.getState().settings;
  const engines = [
    s.keys.gemini && { name: 'Gemini', url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', key: s.keys.gemini, model: 'gemini-2.5-flash' },
    s.keys.groq && { name: 'Groq (Qwen)', url: 'https://api.groq.com/openai/v1/chat/completions', key: s.keys.groq, model: 'qwen/qwen3.8-27b' },
  ].filter(Boolean) as { name: string; url: string; key: string; model: string }[];
  if (!engines.length) throw new AiError('Для распознавания рукописи нужен ключ Gemini или Groq (Настройки).');

  let lastErr = '';
  for (const e of engines) {
    try {
      const res = await fetch(e.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e.key}` },
        body: JSON.stringify({
          model: e.model,
          temperature: 0,
          messages: [
            {
              role: 'user',
              content: [
                { type: 'text', text: PROMPT },
                { type: 'image_url', image_url: { url: dataUrl } },
              ],
            },
          ],
        }),
      });
      if (!res.ok) {
        lastErr = `${e.name}: ${res.status} ${(await res.text().catch(() => '')).slice(0, 160)}`;
        continue;
      }
      const data = await res.json();
      const raw: string = data?.choices?.[0]?.message?.content ?? '';
      const text = raw.replace(/<think>[\s\S]*?<\/think>/g, '').replace(/^```\w*\n?|```$/g, '').trim();
      if (text) return { text, engine: e.name };
      lastErr = `${e.name}: пустой ответ`;
    } catch (err) {
      lastErr = `${e.name}: ${(err as Error).message}`;
    }
  }
  throw new AiError(`Не удалось распознать текст. ${lastErr}`);
}
