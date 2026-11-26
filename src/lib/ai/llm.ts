import { useStore, type LlmProvider, type Settings } from '../store';
import { llmEndpoint } from './providers';

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class AiError extends Error {}

/** Other free Groq models with their own separate quota – used when the chosen one hits its daily limit. */
const GROQ_FALLBACKS = ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'qwen/qwen3.8-27b'];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

class NetworkError extends AiError {}

async function post(baseUrl: string, headers: Record<string, string>, body: Record<string, unknown>): Promise<Response> {
  // a dropped connection (or a gateway error page without CORS headers) surfaces as "Failed to fetch": retry before giving up
  for (let attempt = 0; ; attempt++) {
    try {
      return await fetch(`${baseUrl}/chat/completions`, { method: 'POST', headers, body: JSON.stringify(body) });
    } catch (e) {
      if (attempt >= 1) throw new NetworkError(`Сеть недоступна или сервер не ответил (${(e as Error).message}).`);
      await sleep(1500);
    }
  }
}

/** Primary provider first; if it is unreachable or out of quota, the other free provider whose key is saved. */
async function request(messages: ChatMessage[], json: boolean, temperature: number, effort: 'low' | 'medium' = 'low'): Promise<string> {
  const s = useStore.getState().settings;
  try {
    return await requestWith(s, messages, json, temperature, effort);
  } catch (e) {
    const status = (e as { status?: number }).status ?? 0;
    const retryable = e instanceof NetworkError || (e as { quota?: boolean }).quota || status >= 500;
    const alt: LlmProvider | null = s.llmProvider === 'groq' ? 'gemini' : s.llmProvider === 'gemini' ? 'groq' : null;
    if (!retryable || !alt || !s.keys[alt]) {
      if (e instanceof NetworkError)
        throw new AiError(
          `${e.message} Проверьте интернет и попробуйте ещё раз. Если повторяется — отключите для сайта блокировщики рекламы/VPN или добавьте в «Настройках» второй ключ (Groq или Gemini): приложение будет переключаться на него автоматически.`,
        );
      throw e;
    }
    return requestWith({ ...s, llmProvider: alt, llmModel: '' }, messages, json, temperature, effort);
  }
}

async function requestWith(s: Settings, messages: ChatMessage[], json: boolean, temperature: number, effort: 'low' | 'medium'): Promise<string> {
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

    let res: Response;
    try {
      res = await post(baseUrl, headers, body);
    } catch (e) {
      if (e instanceof NetworkError && i + 1 < models.length) continue;
      throw e;
    }
    if (res.status >= 500 && i + 1 < models.length) continue;
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
      throw Object.assign(new AiError('Дневной лимит бесплатного тарифа исчерпан для всех моделей (429). Он восстановится в течение суток.'), { quota: true });
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
