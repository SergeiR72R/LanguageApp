import type { LlmProvider, Settings } from '../store';

export interface ProviderInfo {
  id: LlmProvider;
  name: string;
  baseUrl: string;
  defaultModel: string;
  suggestedModels: string[];
  keyUrl: string;
  noteRu: string;
}

export const PROVIDERS: ProviderInfo[] = [
  {
    id: 'groq',
    name: 'Groq',
    baseUrl: 'https://api.groq.com/openai/v1',
    defaultModel: 'openai/gpt-oss-120b',
    suggestedModels: ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'qwen/qwen3.8-27b'],
    keyUrl: 'https://console.groq.com/keys',
    noteRu: 'Бесплатный ключ без карты. Один ключ даёт и языковую модель, и Whisper для распознавания речи. Рекомендуется модель openai/gpt-oss-120b; если её дневной лимит исчерпан, приложение само переключится на gpt-oss-20b, затем на qwen.',
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta/openai',
    defaultModel: 'gemini-2.5-flash',
    suggestedModels: ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.5-pro'],
    keyUrl: 'https://aistudio.google.com/apikey',
    noteRu: 'Бесплатный уровень в Google AI Studio. Тот же ключ можно использовать для озвучки Gemini TTS.',
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    baseUrl: 'https://openrouter.ai/api/v1',
    defaultModel: 'meta-llama/llama-3.3-70b-instruct:free',
    suggestedModels: ['meta-llama/llama-3.3-70b-instruct:free', 'deepseek/deepseek-chat-v3-0324:free', 'google/gemma-3-27b-it:free'],
    keyUrl: 'https://openrouter.ai/keys',
    noteRu: 'Модели с суффиксом :free бесплатны (с дневным лимитом).',
  },
  {
    id: 'custom',
    name: 'Свой сервер (Ollama / LM Studio)',
    baseUrl: '',
    defaultModel: 'qwen2.5:14b',
    suggestedModels: [],
    keyUrl: '',
    noteRu: 'Любой OpenAI-совместимый сервер, например локальный Ollama: http://localhost:11434/v1 (запустите с OLLAMA_ORIGINS=*).',
  },
];

export const providerInfo = (id: LlmProvider) => PROVIDERS.find((p) => p.id === id)!;

export function llmEndpoint(s: Settings): { baseUrl: string; key: string; model: string } {
  const p = providerInfo(s.llmProvider);
  const baseUrl = (s.llmProvider === 'custom' ? s.customBaseUrl : p.baseUrl).replace(/\/$/, '');
  return { baseUrl, key: s.keys[s.llmProvider], model: s.llmModel || p.defaultModel };
}

export function isLlmConfigured(s: Settings): boolean {
  const { baseUrl, key, model } = llmEndpoint(s);
  if (!baseUrl || !model) return false;
  return s.llmProvider === 'custom' ? true : !!key;
}

export function isSttConfigured(s: Settings): boolean {
  return s.sttProvider === 'groq' ? !!s.keys.groq : browserSttSupported();
}

export function browserSttSupported(): boolean {
  const w = window as unknown as Record<string, unknown>;
  return typeof window !== 'undefined' && !!(w.SpeechRecognition || w.webkitSpeechRecognition);
}
