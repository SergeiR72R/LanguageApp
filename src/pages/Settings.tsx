import { useEffect, useRef, useState } from 'react';
import { useStore, type LlmProvider } from '../lib/store';
import { PROVIDERS, browserSttSupported, providerInfo } from '../lib/ai/providers';
import { chat, listModels } from '../lib/ai/llm';
import { germanVoices, onVoicesReady, speak } from '../lib/ai/tts';
import { Card, ErrorBox, Spinner } from '../components/ui';
import { newProfilePrompt } from '../components/ProfileMenu';
import { EMOJIS, activeProfile, deleteProfile, listProfiles, switchProfile, updateProfile, type Profile } from '../lib/profiles';

function ProfilesCard() {
  const [profiles, setProfiles] = useState<Profile[]>(listProfiles());
  const me = activeProfile();
  const refresh = () => setProfiles(listProfiles());
  return (
    <Card>
      <h2 id="profiles">👥 Ученики</h2>
      <p className="muted">
        У каждого ученика свой тест уровня, курс, повторение, ошибки и статистика. API-ключи и голоса копируются в новый профиль.
      </p>
      {profiles.map((p) => (
        <div key={p.id} className="profile-row">
          <select
            className="emoji-select"
            value={p.emoji}
            onChange={(e) => {
              updateProfile(p.id, { emoji: e.target.value });
              refresh();
            }}
          >
            {EMOJIS.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
          <input
            className="text-input"
            defaultValue={p.name}
            onBlur={(e) => {
              updateProfile(p.id, { name: e.target.value.trim() || p.name });
              refresh();
            }}
          />
          {p.id === me.id ? (
            <span className="pill accent">сейчас</span>
          ) : (
            <>
              <button className="btn small" onClick={() => switchProfile(p.id)}>
                Переключиться
              </button>
              <button
                className="btn small danger"
                onClick={() => {
                  if (confirm(`Удалить профиль «${p.name}» и весь его прогресс?`)) {
                    deleteProfile(p.id);
                    refresh();
                  }
                }}
              >
                Удалить
              </button>
            </>
          )}
        </div>
      ))}
      <button className="btn" onClick={newProfilePrompt}>
        ➕ Добавить ученика
      </button>
    </Card>
  );
}

const GEMINI_VOICES = ['Kore', 'Puck', 'Charon', 'Fenrir', 'Aoede', 'Leda', 'Orus', 'Zephyr', 'Callirrhoe', 'Autonoe', 'Enceladus', 'Iapetus', 'Algieba', 'Despina', 'Erinome', 'Gacrux', 'Achird', 'Sulafat'];

export function Settings() {
  const s = useStore();
  const st = s.settings;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [test, setTest] = useState<{ busy: boolean; msg: string; err: string }>({ busy: false, msg: '', err: '' });
  const fileRef = useRef<HTMLInputElement>(null);
  const info = providerInfo(st.llmProvider);

  useEffect(() => onVoicesReady(() => setVoices(germanVoices())), []);

  const setProvider = (p: LlmProvider) => {
    s.updateSettings({ llmProvider: p, llmModel: providerInfo(p).defaultModel });
    setModels([]);
  };

  const testLlm = async () => {
    setTest({ busy: true, msg: '', err: '' });
    try {
      const r = await chat([{ role: 'user', content: 'Antworte mit einem kurzen deutschen Satz: Bist du bereit, mir beim Deutschlernen zu helfen?' }], 0.5);
      setTest({ busy: false, msg: `✅ ${r.slice(0, 200)}`, err: '' });
    } catch (e) {
      setTest({ busy: false, msg: '', err: (e as Error).message });
    }
  };

  const loadModels = async () => {
    try {
      setModels(await listModels());
    } catch (e) {
      setTest({ busy: false, msg: '', err: (e as Error).message });
    }
  };

  const exportData = () => {
    const { settings, ...rest } = useStore.getState();
    const data = { ...rest, settings: { ...settings, keys: { groq: '', gemini: '', openrouter: '', custom: '' } } };
    const json = JSON.stringify(data, (_, v) => (typeof v === 'function' ? undefined : v), 2);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    a.download = `deutsch-trainer-${activeProfile().name}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const importData = async (f: File) => {
    try {
      const data = JSON.parse(await f.text());
      const keys = useStore.getState().settings.keys;
      s.importState({ ...data, settings: { ...data.settings, keys } });
      alert('Данные восстановлены.');
    } catch {
      alert('Не удалось прочитать файл.');
    }
  };

  return (
    <div className="page narrow">
      <h1>⚙️ Настройки</h1>

      <ProfilesCard />

      <Card>
        <h2>🤖 Языковая модель (проверка, диалоги, анализ)</h2>
        <div className="seg">
          {PROVIDERS.map((p) => (
            <button key={p.id} className={`seg-btn ${st.llmProvider === p.id ? 'active' : ''}`} onClick={() => setProvider(p.id)}>
              {p.name}
            </button>
          ))}
        </div>
        <p className="muted">{info.noteRu}</p>
        {info.keyUrl && (
          <p>
            Получить ключ:{' '}
            <a href={info.keyUrl} target="_blank" rel="noreferrer">
              {info.keyUrl}
            </a>
          </p>
        )}
        {st.llmProvider === 'custom' && (
          <label className="field">
            Base URL
            <input className="text-input" value={st.customBaseUrl} onChange={(e) => s.updateSettings({ customBaseUrl: e.target.value })} />
          </label>
        )}
        <label className="field">
          API-ключ {info.name}
          <input
            className="text-input"
            type="password"
            value={st.keys[st.llmProvider]}
            onChange={(e) => s.setKey(st.llmProvider, e.target.value.trim())}
            placeholder={st.llmProvider === 'custom' ? 'не обязательно' : 'вставьте ключ'}
            autoComplete="off"
          />
        </label>
        <label className="field">
          Модель
          <input className="text-input" list="models" value={st.llmModel} onChange={(e) => s.updateSettings({ llmModel: e.target.value })} />
          <datalist id="models">
            {[...new Set([...info.suggestedModels, ...models])].map((m) => (
              <option key={m} value={m} />
            ))}
          </datalist>
        </label>
        <div className="row wrap">
          {info.suggestedModels.map((m) => (
            <button key={m} className={`chip ${st.llmModel === m ? 'active' : ''}`} onClick={() => s.updateSettings({ llmModel: m })}>
              {m}
            </button>
          ))}
        </div>
        <div className="row wrap">
          <button className="btn primary" onClick={testLlm} disabled={test.busy}>
            Проверить подключение
          </button>
          <button className="btn ghost" onClick={loadModels}>
            Загрузить список моделей
          </button>
        </div>
        {test.busy && <Spinner />}
        {test.msg && <div className="success-box de">{test.msg}</div>}
        <ErrorBox error={test.err} />
        <p className="tiny muted">Ключи хранятся только в этом браузере (localStorage) и отправляются напрямую провайдеру.</p>
      </Card>

      <Card>
        <h2>🎙️ Распознавание речи</h2>
        <div className="seg">
          <button className={`seg-btn ${st.sttProvider === 'groq' ? 'active' : ''}`} onClick={() => s.updateSettings({ sttProvider: 'groq' })}>
            Groq Whisper (рекомендуется)
          </button>
          <button className={`seg-btn ${st.sttProvider === 'browser' ? 'active' : ''}`} onClick={() => s.updateSettings({ sttProvider: 'browser' })}>
            Браузер
          </button>
        </div>
        {st.sttProvider === 'groq' ? (
          <>
            <p className="muted">
              Whisper точно распознаёт немецкий и не «исправляет» ваши ошибки так сильно, как браузер, — это важно для анализа
              речи. Использует ключ Groq.
            </p>
            {st.llmProvider !== 'groq' && (
              <label className="field">
                Ключ Groq
                <input className="text-input" type="password" value={st.keys.groq} onChange={(e) => s.setKey('groq', e.target.value.trim())} />
              </label>
            )}
            {!st.keys.groq && <div className="info-box">Нет ключа Groq — будет использовано распознавание браузера.</div>}
            <label className="field">
              Модель
              <select value={st.sttModel} onChange={(e) => s.updateSettings({ sttModel: e.target.value })}>
                <option value="whisper-large-v3-turbo">whisper-large-v3-turbo (быстрее)</option>
                <option value="whisper-large-v3">whisper-large-v3 (точнее)</option>
              </select>
            </label>
          </>
        ) : (
          <p className="muted">
            Встроенное распознавание (Chrome, Edge, Safari). {browserSttSupported() ? '✅ Поддерживается этим браузером.' : '❌ Этот браузер не поддерживает.'}
          </p>
        )}
      </Card>

      <Card>
        <h2>🔊 Озвучка текста</h2>
        <div className="seg">
          <button className={`seg-btn ${st.ttsProvider === 'browser' ? 'active' : ''}`} onClick={() => s.updateSettings({ ttsProvider: 'browser' })}>
            Голоса браузера (бесплатно, офлайн)
          </button>
          <button className={`seg-btn ${st.ttsProvider === 'gemini' ? 'active' : ''}`} onClick={() => s.updateSettings({ ttsProvider: 'gemini' })}>
            Gemini TTS (нейроголоса)
          </button>
        </div>
        {st.ttsProvider === 'browser' ? (
          <>
            <p className="muted">
              Лучшие бесплатные голоса — в Microsoft Edge («… Online (Natural)») и Chrome («Google Deutsch»). Найдено немецких голосов:{' '}
              {voices.length}.
            </p>
            <label className="field">
              Голос A (основной)
              <select value={st.browserVoice} onChange={(e) => s.updateSettings({ browserVoice: e.target.value })}>
                <option value="">Авто (лучший)</option>
                {voices.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              Голос B (второй участник диалога)
              <select value={st.browserVoiceB} onChange={(e) => s.updateSettings({ browserVoiceB: e.target.value })}>
                <option value="">Авто</option>
                {voices.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : (
          <>
            <p className="muted">
              Естественные голоса Google Gemini через бесплатный ключ AI Studio. При превышении лимита автоматически используется
              голос браузера.
            </p>
            <label className="field">
              Ключ Gemini
              <input className="text-input" type="password" value={st.keys.gemini} onChange={(e) => s.setKey('gemini', e.target.value.trim())} />
            </label>
            <label className="field">
              Модель TTS
              <input className="text-input" value={st.geminiTtsModel} onChange={(e) => s.updateSettings({ geminiTtsModel: e.target.value })} />
            </label>
            <div className="grid-2">
              <label className="field">
                Голос A
                <select value={st.geminiVoice} onChange={(e) => s.updateSettings({ geminiVoice: e.target.value })}>
                  {GEMINI_VOICES.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                Голос B
                <select value={st.geminiVoiceB} onChange={(e) => s.updateSettings({ geminiVoiceB: e.target.value })}>
                  {GEMINI_VOICES.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
            </div>
          </>
        )}
        <label className="field">
          Скорость речи: {st.speechRate.toFixed(2)}
          <input type="range" min={0.6} max={1.3} step={0.05} value={st.speechRate} onChange={(e) => s.updateSettings({ speechRate: Number(e.target.value) })} />
        </label>
        <button
          className="btn"
          onClick={() =>
            speak('Guten Tag! Ich lese Ihnen die Hörtexte vor. Übung macht den Meister.', {
              onError: (e) => setTest({ busy: false, msg: '', err: e.message }),
            })
          }
        >
          🔊 Тест голоса
        </button>
      </Card>

      <Card>
        <h2>📅 Обучение</h2>
        <label className="field">
          Время в день
          <div className="seg">
            {([20, 40, 60] as const).map((m) => (
              <button key={m} className={`seg-btn ${st.dailyMinutes === m ? 'active' : ''}`} onClick={() => s.updateSettings({ dailyMinutes: m })}>
                {m} мин
              </button>
            ))}
          </div>
        </label>
        <label className="field">
          Максимум карточек повторения за сессию
          <input
            className="text-input"
            type="number"
            min={10}
            max={500}
            value={st.reviewLimit}
            onChange={(e) => s.updateSettings({ reviewLimit: Math.max(10, Number(e.target.value) || 80) })}
          />
        </label>
        <button className="btn ghost" onClick={() => s.setPlan({ date: '', items: [] })}>
          Пересобрать план на сегодня
        </button>
      </Card>

      <Card>
        <h2>💾 Данные</h2>
        <p className="muted">Данные профиля «{activeProfile().name}». Прогресс хранится в браузере. Делайте резервную копию, чтобы перенести на другое устройство (ключи в файл не попадают).</p>
        <div className="row wrap">
          <button className="btn" onClick={exportData}>
            Экспорт
          </button>
          <button className="btn" onClick={() => fileRef.current?.click()}>
            Импорт
          </button>
          <input ref={fileRef} type="file" accept="application/json" hidden onChange={(e) => e.target.files?.[0] && importData(e.target.files[0])} />
          <button
            className="btn danger"
            onClick={() => confirm(`Удалить весь прогресс профиля «${activeProfile().name}»? Настройки и ключи сохранятся.`) && s.resetAll()}
          >
            Сбросить прогресс
          </button>
        </div>
      </Card>
    </div>
  );
}
