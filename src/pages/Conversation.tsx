import { useState } from 'react';
import type { Level } from '../content/types';
import { allUnits, levels, getUnit } from '../content';
import { currentUnitId, unitStatus, useStore } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { ConversationPanel } from '../components/ConversationPanel';
import { AiRequired, Card } from '../components/ui';

interface Scenario {
  title: string;
  level: Level;
  role: string;
  opener: string;
  tasksRu: string[];
  unitId?: string;
}

const FREE: Omit<Scenario, 'level'>[] = [
  {
    title: 'Smalltalk: Wie war deine Woche?',
    role: 'Du bist Lena, eine freundliche Kollegin aus Hamburg. Ihr trefft euch in der Kaffeeküche und plaudert locker.',
    opener: 'Hey, schön dich zu sehen! Wie war denn deine Woche bisher?',
    tasksRu: ['Расскажите о своей неделе подробно', 'Задайте встречные вопросы', 'Договоритесь о встрече на выходных'],
  },
  {
    title: 'Vorstellungsgespräch',
    role: 'Du bist Herr Becker, Personalleiter eines mittelständischen IT-Unternehmens in Berlin. Du führst ein Bewerbungsgespräch, fragst nach Erfahrung, Stärken, Schwächen und Motivation und stellst auch kritische Nachfragen.',
    opener: 'Guten Tag und herzlich willkommen! Erzählen Sie doch bitte zuerst etwas über sich und Ihren beruflichen Werdegang.',
    tasksRu: ['Представьтесь и опишите опыт', 'Аргументируйте мотивацию', 'Задайте вопросы о компании'],
  },
  {
    title: 'Beim Arzt',
    role: 'Du bist Dr. Wagner, Hausärztin. Der Patient kommt mit Beschwerden. Frage genau nach Symptomen, Dauer, Medikamenten und gib Ratschläge.',
    opener: 'Guten Morgen, nehmen Sie bitte Platz. Was führt Sie heute zu mir?',
    tasksRu: ['Опишите симптомы', 'Ответьте на уточняющие вопросы', 'Уточните рекомендации врача'],
  },
  {
    title: 'Wohnungsbesichtigung',
    role: 'Du bist Frau Schulz, Vermieterin einer 3-Zimmer-Wohnung in Köln. Du zeigst die Wohnung und willst wissen, wer der Mieter ist.',
    opener: 'Hallo, kommen Sie rein! Haben Sie gut hergefunden? Das hier ist der Flur, und gleich links ist die Küche.',
    tasksRu: ['Задайте вопросы о квартире и расходах', 'Расскажите о себе как о жильце', 'Договоритесь о следующем шаге'],
  },
  {
    title: 'Diskussion: Homeoffice – Fluch oder Segen?',
    role: 'Du bist Moderator einer Diskussionsrunde und vertrittst bewusst die Gegenposition zum Lernenden. Fordere Argumente und Beispiele.',
    opener: 'Viele Firmen holen ihre Mitarbeiter gerade zurück ins Büro. Ist Homeoffice Ihrer Meinung nach ein Auslaufmodell?',
    tasksRu: ['Сформулируйте позицию', 'Приведите аргументы и примеры', 'Отреагируйте на контраргументы', 'Подведите итог'],
  },
  {
    title: 'Reklamation im Geschäft',
    role: 'Du bist Verkäufer in einem Elektronikmarkt. Du bist höflich, aber willst zuerst keinen Umtausch machen.',
    opener: 'Guten Tag, wie kann ich Ihnen helfen?',
    tasksRu: ['Объясните проблему с товаром', 'Настойчиво и вежливо добейтесь возврата или обмена'],
  },
];

export function Conversation() {
  const s = useStore();
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [custom, setCustom] = useState('');
  const [key, setKey] = useState(0);
  const cur = currentUnitId(s);
  const level: Level = (cur ? getUnit(cur)?.level : undefined) ?? 'B1';
  // topics: everything already opened plus the whole current level; beginner levels only for those who started there
  const startLevel = s.startUnitId ? getUnit(s.startUnitId)?.level : undefined;
  const floor = Math.min(levels.indexOf(startLevel ?? 'A1'), levels.indexOf('B1'));
  const curUnit = cur ? getUnit(cur) : undefined;
  const openUnits = allUnits
    .filter((u) => levels.indexOf(u.level) >= floor && (unitStatus(s, u.id) !== 'locked' || u.level === level))
    .sort((a, b) => (a.id === cur ? -1 : b.id === cur ? 1 : (a.level === level ? 0 : 1) - (b.level === level ? 0 : 1) || allUnits.indexOf(a) - allUnits.indexOf(b)));

  if (!isLlmConfigured(s.settings))
    return (
      <div className="page narrow">
        <h1>🗣️ Разговор</h1>
        <AiRequired what="Разговорный тренажёр" />
      </div>
    );

  if (scenario)
    return (
      <div className="page narrow">
        <div className="row between">
          <h1>🗣️ {scenario.title}</h1>
          <button className="btn ghost" onClick={() => setScenario(null)}>
            ← Темы
          </button>
        </div>
        <Card>
          <ul className="tiny">
            {scenario.tasksRu.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          <ConversationPanel
            key={key}
            level={scenario.level}
            topic={scenario.title}
            aiRole={scenario.role}
            opener={scenario.opener}
            tasksRu={scenario.tasksRu}
            unitId={scenario.unitId}
            minTurns={6}
          />
          <button className="btn ghost small" onClick={() => setKey(key + 1)}>
            Начать заново
          </button>
        </Card>
      </div>
    );

  return (
    <div className="page">
      <h1>🗣️ Разговорная практика</h1>
      <p className="muted">
        Говорите в микрофон — речь распознаётся, ИИ отвечает голосом и разбирает ошибки в каждой реплике. В конце — общий разбор
        с оценкой уровня. Уровень собеседника: {level}.
      </p>
      <div className="grid-2">
        <Card>
          <h3>Свободные ситуации</h3>
          <div className="topic-list">
            {FREE.map((f) => (
              <button key={f.title} className="topic" onClick={() => setScenario({ ...f, level })}>
                {f.title}
              </button>
            ))}
          </div>
          <h3>Своя тема</h3>
          <form
            className="row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!custom.trim()) return;
              setScenario({
                title: custom,
                level,
                role: `Du bist ein interessierter, freundlicher Gesprächspartner aus Deutschland. Ihr sprecht über das Thema: ${custom}. Stelle offene Fragen, bringe eigene Meinungen ein.`,
                opener: `Lass uns über „${custom}“ sprechen. Was denkst du darüber?`,
                tasksRu: ['Выскажите мнение', 'Аргументируйте', 'Задавайте вопросы'],
              });
            }}
          >
            <input className="text-input" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Например: Reisen nach Japan" />
            <button className="btn">Начать</button>
          </form>
        </Card>
        <Card>
          <h3>По юнитам курса</h3>
          <div className="topic-list">
            {openUnits.map((u) => (
              <button
                key={u.id}
                className="topic"
                onClick={() =>
                  setScenario({
                    title: `${u.level} · ${u.order}. ${u.title}`,
                    level: u.level,
                    role: u.speaking.aiRole,
                    opener: u.speaking.opener,
                    tasksRu: u.speaking.tasksRu,
                    unitId: u.id,
                  })
                }
              >
                <span className={`level-badge l-${u.level}`}>{u.level}</span> {u.order}. {u.title}
                {u.id === curUnit?.id && <span className="pill accent"> текущий</span>}
                {unitStatus(s, u.id) === 'locked' && <span className="tiny muted"> · впереди</span>}
              </button>
            ))}
          </div>
        </Card>
      </div>
      {s.conversations.length > 0 && (
        <Card>
          <h3>История</h3>
          <ul>
            {s.conversations.slice(0, 15).map((c) => (
              <li key={c.id}>
                {c.date} · {c.topic} · реплик: {c.turns}
                {(c.summary as { cefr?: string })?.cefr ? ` · ≈ ${(c.summary as { cefr?: string }).cefr}` : ''}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}
