import { useState } from 'react';
import type { Unit } from '../../content/types';
import { useStore } from '../../lib/store';
import { isLlmConfigured, isSttConfigured } from '../../lib/ai/providers';
import { ConversationPanel } from '../../components/ConversationPanel';
import { ReadAloud } from '../../components/ReadAloud';
import { AiRequired, Card } from '../../components/ui';

export function SpeakingStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const S = unit.speaking;
  const settings = useStore((s) => s.settings);
  const completeStep = useStore((s) => s.completeStep);
  const done = useStore((s) => !!s.units[unit.id]?.steps.speaking?.done);
  const [attempts, setAttempts] = useState<Record<number, number>>({});
  const [started, setStarted] = useState(false);
  const ai = isLlmConfigured(settings);
  const stt = isSttConfigured(settings);
  const readDone = Object.keys(attempts).length >= S.readAloud.length;

  return (
    <div className="stack">
      <Card>
        <h2>🗣️ Часть 1. Произношение: прочитайте вслух</h2>
        <p className="muted">
          Прослушайте образец, затем прочитайте предложение. Система сравнит распознанный текст с оригиналом: слова, которые не
          распознались, часто произнесены нечётко.
        </p>
        {!stt && (
          <div className="info-box">
            Ваш браузер не поддерживает распознавание речи. Используйте Chrome/Edge или добавьте ключ Groq (Whisper) в настройках.
          </div>
        )}
        {S.readAloud.map((s, i) => (
          <ReadAloud key={i} sentence={s} onAttempt={(acc) => setAttempts((a) => ({ ...a, [i]: acc }))} />
        ))}
        {!ai && readDone && !done && (
          <button
            className="btn primary"
            onClick={() => {
              const vals = Object.values(attempts);
              completeStep(unit.id, 'speaking', vals.reduce((a, b) => a + b, 0) / vals.length);
            }}
          >
            Засчитать шаг
          </button>
        )}
      </Card>

      <Card>
        <h2>🗣️ Часть 2. Диалог</h2>
        <p>{S.scenarioRu}</p>
        <ul>
          {S.tasksRu.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        {!ai ? (
          <AiRequired what="Разговор с собеседником" />
        ) : !started ? (
          <button className="btn primary big" onClick={() => setStarted(true)}>
            Начать разговор
          </button>
        ) : (
          <ConversationPanel
            level={unit.level}
            topic={unit.title}
            aiRole={S.aiRole}
            opener={S.opener}
            tasksRu={S.tasksRu}
            unitId={unit.id}
            minTurns={5}
            onFinished={(_, turns) => {
              const readVals = Object.values(attempts);
              const readScore = readVals.length ? readVals.reduce((a, b) => a + b, 0) / readVals.length : undefined;
              completeStep(unit.id, 'speaking', readScore, turns >= 3);
            }}
          />
        )}
      </Card>
      {done && (
        <button className="btn primary" onClick={onNext}>
          Следующий шаг →
        </button>
      )}
    </div>
  );
}
