import { useState } from 'react';
import { connectSync, disconnectSync, isSyncEnabled, syncNow, useSyncStatus } from '../lib/sync';
import { ErrorBox, Spinner } from './ui';

function ago(ts?: number) {
  if (!ts) return 'ещё не было';
  const s = Math.round((Date.now() - ts) / 1000);
  if (s < 60) return 'только что';
  if (s < 3600) return `${Math.round(s / 60)} мин назад`;
  return new Date(ts).toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
}

/** Connect this device to the shared (household) cloud copy of all profiles. */
export function SyncPanel({ compact = false }: { compact?: boolean }) {
  const st = useSyncStatus();
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const enabled = isSyncEnabled() && st.state !== 'off';

  const connect = async () => {
    setBusy(true);
    setErr('');
    try {
      await connectSync(pw);
      setPw('');
      // show the downloaded profiles
      location.hash = '#/';
      location.reload();
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (!enabled)
    return (
      <div className="stack">
        {!compact && (
          <p className="muted">
            Введите пароль синхронизации — на этом устройстве появятся все профили (ваш и жены) с прогрессом, а дальше
            изменения будут сохраняться в облако автоматически.
          </p>
        )}
        <form
          className="row wrap"
          onSubmit={(e) => {
            e.preventDefault();
            if (pw.trim()) void connect();
          }}
        >
          <input
            className="text-input"
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Пароль синхронизации"
            autoComplete="current-password"
            style={{ flex: '1 1 200px' }}
          />
          <button className="btn primary" disabled={busy || !pw.trim()}>
            Подключить
          </button>
        </form>
        {busy && <Spinner text="Загружаю профили из облака…" />}
        <ErrorBox error={err} />
      </div>
    );

  return (
    <div className="stack">
      <div className="row wrap between">
        <span>
          {st.state === 'syncing' ? '🔄 Синхронизация…' : st.state === 'error' ? '⚠️ Ошибка синхронизации' : '☁️ Синхронизация включена'}
          <span className="muted small"> · последняя: {ago(st.lastSync)}</span>
        </span>
        <span className="row">
          <button className="btn small" disabled={st.state === 'syncing'} onClick={() => void syncNow().catch(() => {})}>
            Синхронизировать сейчас
          </button>
          <button className="btn small ghost" onClick={() => confirm('Отключить синхронизацию на этом устройстве? Данные останутся.') && disconnectSync()}>
            Отключить
          </button>
        </span>
      </div>
      {st.state === 'error' && <ErrorBox error={st.message} />}
    </div>
  );
}
