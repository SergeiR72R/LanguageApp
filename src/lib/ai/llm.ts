import { useStore } from '../store';
import { llmEndpoint } from './providers';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class AiError extends Error {}

async function request(messages: ChatMessage[], json: boolean, temperature: number): Promise<string> {
  const s = useStore.getState().settings;
  const { baseUrl, key, model } = llmEndpoint(s);
  if (!baseUrl) throw new AiError('Не настроен адрес API. Откройте «Настройки».');
  if (!key && s.llmProvider !== 'custom') throw new AiError('Не указан API-ключ. Откройте «Настройки» и добавьте бесплатный ключ.');

  const body: Record<string, unknown> = { model, messages, temperature };
  if (json) body.response_format = { type: 'json_object' };

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (key) headers.Authorization = `Bearer ${key}`;
  if (s.llmProvider === 'openrouter') {
    headers['HTTP-Referer'] = location.origin;
    headers['X-Title'] = 'Deutsch Trainer';
  }

  let res: Response;
  try {
    res = await fetch(`${baseUrl}/chat/completions`, { method: 'POST', headers, body: JSON.stringify(body) });
  } catch (e) {
    throw new AiError(`Сеть недоступна или сервер не разрешает запросы из браузера: ${(e as Error).message}`);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    if (res.status === 429) throw new AiError('Превышен лимит бесплатного тарифа (429). Подождите минуту или выберите другую модель.');
    if (res.status === 401 || res.status === 403) throw new AiError(`Ключ API не принят (${res.status}). Проверьте ключ в настройках.`);
    const err = new AiError(`Ошибка API ${res.status}: ${text.slice(0, 300)}`);
    (err as AiError & { status?: number }).status = res.status;
    throw err;
  }
  const data = await res.json();
  const content: string | undefined = data?.choices?.[0]?.message?.content;
  if (!content) throw new AiError('Пустой ответ модели.');
  return content;
}

export async function chat(messages: ChatMessage[], temperature = 0.7): Promise<string> {
  return request(messages, false, temperature);
}

export function extractJson<T>(text: string): T {
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '').trim();
  try {
    return JSON.parse(cleaned) as T;
  } catch {
    const start = cleaned.indexOf('{');
    const end = cleaned.lastIndexOf('}');
    if (start >= 0 && end > start) return JSON.parse(cleaned.slice(start, end + 1)) as T;
    throw new AiError('Модель вернула ответ не в формате JSON. Попробуйте ещё раз.');
  }
}

/** Ask for a JSON object. Falls back to plain mode if the provider rejects response_format. */
export async function chatJson<T>(messages: ChatMessage[], temperature = 0.4): Promise<T> {
  let text: string;
  try {
    text = await request(messages, true, temperature);
  } catch (e) {
    const status = (e as { status?: number }).status;
    if (status === 400 || status === 422) text = await request(messages, false, temperature);
    else throw e;
  }
  try {
    return extractJson<T>(text);
  } catch {
    // one retry, asking explicitly for JSON
    const retry = await request(
      [...messages, { role: 'assistant', content: text }, { role: 'user', content: 'Return ONLY the valid JSON object, nothing else.' }],
      false,
      0.2,
    );
    return extractJson<T>(retry);
  }
}

export async function listModels(): Promise<string[]> {
  const s = useStore.getState().settings;
  const { baseUrl, key } = llmEndpoint(s);
  const res = await fetch(`${baseUrl}/models`, { headers: key ? { Authorization: `Bearer ${key}` } : {} });
  if (!res.ok) throw new AiError(`Не удалось получить список моделей (${res.status})`);
  const data = await res.json();
  return ((data?.data ?? []) as { id: string }[]).map((m) => m.id.replace(/^models\//, '')).sort();
}
