import { useNavigate } from 'react-router-dom';
import { SyncPanel } from '../components/SyncPanel';
import { Card } from '../components/ui';

export const SKIP_LOGIN_KEY = 'deutsch-trainer-sync-skip';

/** First screen on a new device/browser: connect to the family's cloud copy. */
export function Login() {
  const nav = useNavigate();
  return (
    <div className="page narrow login-page">
      <div className="login-hero">
        <span className="flag big-flag" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <h1>Deutsch B1–C1</h1>
        <p className="muted">Вход на новом устройстве</p>
      </div>
      <Card className="highlight">
        <h2>☁️ Пароль синхронизации</h2>
        <p className="muted">
          Введите пароль семьи — загрузятся все профили и прогресс с других устройств, дальше всё будет синхронизироваться само.
        </p>
        <SyncPanel compact />
      </Card>
      <button
        className="btn ghost"
        onClick={() => {
          try {
            localStorage.setItem(SKIP_LOGIN_KEY, '1');
          } catch {
            /* ignore */
          }
          nav('/welcome');
        }}
      >
        Я здесь впервые — начать без синхронизации
      </button>
      <p className="tiny muted">Подключить синхронизацию можно позже: «Настройки» → «Синхронизация между устройствами».</p>
    </div>
  );
}
