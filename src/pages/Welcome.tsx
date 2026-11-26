import { Link, useNavigate } from 'react-router-dom';
import { allUnits, firstUnitOfLevel } from '../content';
import { useStore } from '../lib/store';
import type { Level } from '../content/types';
import { Card } from '../components/ui';
import { isSyncEnabled } from '../lib/sync';
import { ProfileMenu } from '../components/ProfileMenu';
import { activeProfile, listProfiles } from '../lib/profiles';

export function Welcome() {
  const setStartUnit = useStore((s) => s.setStartUnit);
  const startUnitId = useStore((s) => s.startUnitId);
  const nav = useNavigate();
  const startAt = (level: Level) => {
    const first = firstUnitOfLevel(level);
    if (!first) return;
    if (level === 'A1') {
      // beginners: a slower voice and fewer new words per day
      const st = useStore.getState();
      st.updateSettings({ speechRate: Math.min(st.settings.speechRate, 0.85), newWordsPerDay: Math.min(st.settings.newWordsPerDay, 10) });
    }
    setStartUnit(first.id);
    nav('/');
  };
  return (
    <div className="page narrow">
      <div className="row between wrap">
        <h1>Willkommen{listProfiles().length > 1 ? `, ${activeProfile().name}` : ''}! 👋</h1>
        <ProfileMenu compact />
      </div>
      <p className="lead">
        Персональный тренажёр немецкого от A1 (с нуля) до C1: слова, грамматика, аудирование, письмо и разговор с ИИ. Курс идёт
        последовательно — {allUnits.length} юнитов, каждый из 7 шагов, а интервальные повторения закрепляют пройденное.
      </p>

      {!isSyncEnabled() && (
        <p className="small">
          ☁️ Уже занимаетесь на другом устройстве? <Link to="/login">Войти по паролю синхронизации</Link>
        </p>
      )}

      <Card className="highlight">
        <h2>🌱 Совсем не знаете немецкий?</h2>
        <p>
          Курс начнётся с алфавита: буквы, звуки и правила чтения с озвучкой, затем первые слова и фразы. Всё объясняется
          по-русски, у новых слов есть подсказка произношения русскими буквами.
        </p>
        <button className="btn primary big" onClick={() => startAt('A1')}>
          Начать с нуля (A1) →
        </button>
      </Card>

      <Card className="highlight">
        <h2>1. Определим ваш уровень</h2>
        <p>
          Тест (грамматика, лексика, чтение, аудирование) займёт 10–25 минут. По результату курс начнётся с
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
          <button className="btn" onClick={() => startAt('A2')}>
            Начать с A2
          </button>
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
