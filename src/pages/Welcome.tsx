import { Link, useNavigate } from 'react-router-dom';
import { firstUnitOfLevel } from '../content';
import { useStore } from '../lib/store';
import { Card } from '../components/ui';
import { SyncPanel } from '../components/SyncPanel';
import { isSyncEnabled } from '../lib/sync';
import { ProfileMenu } from '../components/ProfileMenu';
import { activeProfile, listProfiles } from '../lib/profiles';

export function Welcome() {
  const setStartUnit = useStore((s) => s.setStartUnit);
  const startUnitId = useStore((s) => s.startUnitId);
  const nav = useNavigate();
  const startAt = (level: 'B1' | 'B2' | 'C1') => {
    setStartUnit(firstUnitOfLevel(level)!.id);
    nav('/');
  };
  return (
    <div className="page narrow">
      <div className="row between wrap">
        <h1>Willkommen{listProfiles().length > 1 ? `, ${activeProfile().name}` : ''}! 👋</h1>
        <ProfileMenu compact />
      </div>
      <p className="lead">
        Персональный тренажёр немецкого от B1 до C1: слова, грамматика, аудирование, письмо и разговор с ИИ. Курс идёт
        последовательно — 30 юнитов, каждый из 6 шагов, а интервальные повторения закрепляют пройденное.
      </p>

      {!isSyncEnabled() && (
        <Card className="highlight">
          <h3>☁️ Уже занимаетесь на другом устройстве?</h3>
          <p className="muted small">Введите пароль синхронизации — загрузятся ваши профили и весь прогресс.</p>
          <SyncPanel compact />
        </Card>
      )}

      <Card className="highlight">
        <h2>1. Определим ваш уровень</h2>
        <p>
          Тест из 52 вопросов (грамматика, лексика, чтение, аудирование) займёт ~20 минут. По результату курс начнётся с
          подходящего юнита, а более простые юниты останутся доступными для повторения.
        </p>
        <Link to="/placement" className="btn primary big">
          Пройти тест уровня →
        </Link>
      </Card>

      <Card>
        <h2>2. Подключите бесплатный ИИ (рекомендуется)</h2>
        <p>
          Проверка письма, диалог-тренажёр, распознавание и анализ вашей речи работают через бесплатные API. Достаточно
          одного бесплатного ключа <strong>Groq</strong> (языковая модель + Whisper). Озвучка работает сразу — голосами
          браузера; опционально — нейроголоса Gemini.
        </p>
        <Link to="/settings" className="btn">
          Открыть настройки
        </Link>
      </Card>

      <Card>
        <h3>Или начать без теста</h3>
        <div className="row wrap">
          <button className="btn" onClick={() => startAt('B1')}>
            Начать с B1
          </button>
          <button className="btn" onClick={() => startAt('B2')}>
            Начать с B2
          </button>
          <button className="btn" onClick={() => startAt('C1')}>
            Начать с C1
          </button>
          {startUnitId && (
            <Link className="btn ghost" to="/">
              Вернуться к курсу
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
}
