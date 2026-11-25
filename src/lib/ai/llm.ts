import { useStore } from '../store';
import { llmEndpoint } from './providers';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class AiError extends Error {}

/** Other free Groq models with their own separate quota – used when the chosen one hits its daily limit. */
const GROQ_FALLBACKS = ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'qwen/qwen3.8-27b'];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function post(baseUrl: string, headers: Record<string, string>, body: Record<string, unknown>): Promise<Response> {
  try {
    return await fetch(`${baseUrl}/chat/completions`, { method: 'POST', headers, body: JSON.stringify(body) });
  } catch (e) {
    throw new AiError(`Сеть недоступна или сервер не разрешает запросы из браузера: ${(e as Error).message}`);
  }
}

async function request(messages: ChatMessage[], json: boolean, temperature: number, effort: 'low' | 'medium' = 'low'): Promise<string> {
  const s = useStore.getState().settings;
  const { baseUrl, key, model } = llmEndpoint(s);
  if (!baseUrl) throw new AiError('Не настроен адрес API. Откройте «Настройки».');
  if (!key && s.llmProvider !== 'custom') throw new AiError('Не указан API-ключ. Откройте «Настройки» и добавьте бесплатный ключ.');

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (key) headers.Authorization = `Bearer ${key}`;
  if (s.llmProvider === 'openrouter') {
    headers['HTTP-Referer'] = location.origin;
    headers['X-Title'] = 'Deutsch Trainer';
  }

  const models = s.llmProvider === 'groq' ? [model, ...GROQ_FALLBACKS.filter((m) => m !== model)] : [model];
  let waited = false;
  for (let i = 0; i < models.length; i++) {
    const m = models[i];
    const body: Record<string, unknown> = { model: m, messages, temperature };
    if (json) body.response_format = { type: 'json_object' };
    // gpt-oss "thinks" before answering; low effort saves tokens (= free quota) and time
    if (m.startsWith('openai/gpt-oss')) body.reasoning_effort = effort;

    const res = await post(baseUrl, headers, body);
    if (res.ok) {
      const data = await res.json();
      const content: string | undefined = data?.choices?.[0]?.message?.content;
      if (!content) throw new AiError('Пустой ответ модели.');
      return content;
    }
    const text = await res.text().catch(() => '');
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('retry-after') ?? 0);
      // per-minute limit: wait briefly and retry the same model once
      if (!waited && retryAfter > 0 && retryAfter <= 30) {
        waited = true;
        await sleep(retryAfter * 1000 + 300);
        i--;
        continue;
      }
      // daily limit of this model: try the next free model
      if (i + 1 < models.length) continue;
      throw new AiError('Дневной лимит бесплатного тарифа исчерпан для всех моделей (429). Он восстановится в течение суток.');
    }
    if (res.status === 401 || res.status === 403) throw new AiError(`Ключ API не принят (${res.status}). Проверьте ключ в настройках.`);
    // model removed/unavailable on this plan: try the next one
    if ((res.status === 404 || /model_not_found|does not exist|decommissioned/i.test(text)) && i + 1 < models.length) continue;
    const err = new AiError(`Ошибка API ${res.status}: ${text.slice(0, 300)}`);
    (err as AiError & { status?: number }).status = res.status;
    throw err;
  }
  throw new AiError('Нет доступной модели.');
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
export async function chatJson<T>(messages: ChatMessage[], temperature = 0.4, effort: 'low' | 'medium' = 'low'): Promise<T> {
  let text: string;
  try {
    text = await request(messages, true, temperature, effort);
  } catch (e) {
    const status = (e as { status?: number }).status;
    if (status === 400 || status === 422) text = await request(messages, false, temperature, effort);
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
