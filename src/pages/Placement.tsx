import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { allUnits, getUnit, placementItems } from '../content';
import { adjustForWriting, scorePlacement } from '../lib/placement';
import { useStore, type PlacementResult } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { assessSample } from '../lib/ai/prompts';
import { countWords } from '../lib/grading';
import { Card, ErrorBox, ProgressBar, Spinner } from '../components/ui';
import { speak, stopSpeaking } from '../lib/ai/tts';

const SKILL_RU: Record<string, string> = { grammar: 'Грамматика', vocab: 'Лексика', reading: 'Чтение', listening: 'Аудирование' };

export function Placement() {
  const [phase, setPhase] = useState<'intro' | 'test' | 'sample' | 'result'>('intro');
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [picked, setPicked] = useState<number | null>(null);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [sample, setSample] = useState('');
  const [ai, setAi] = useState<{ cefr: string; commentRu: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [chosenStart, setChosenStart] = useState('');
  const [writingAdjusted, setWritingAdjusted] = useState(false);
  const settings = useStore((s) => s.settings);
  const setPlacement = useStore((s) => s.setPlacement);
  const nav = useNavigate();
  const items = placementItems;
  const item = items[i];

  // Adaptive stop: if the learner clearly fails a band (≤ 3 of the first 8 answered in it), skip the rest of the test.
  const finishTest = (final: Record<string, number>) => {
    const r = scorePlacement(items, final);
    setResult(r);
    setChosenStart(r.recommendedUnitId);
    setPhase(isLlmConfigured(settings) ? 'sample' : 'result');
  };

  const next = () => {
    if (picked === null) return;
    const a = { ...answers, [item.id]: picked };
    setAnswers(a);
    setPicked(null);
    const band = item.band;
    const bandAnswered = items.filter((x) => x.band === band && x.id in a);
    const bandCorrect = bandAnswered.filter((x) => a[x.id] === x.answer).length;
    const lastOfBand = items[i + 1]?.band !== band;
    if (i + 1 >= items.length) return finishTest(a);
    if (lastOfBand && bandAnswered.length >= 8 && bandCorrect / bandAnswered.length < 0.45) return finishTest(a);
    setI(i + 1);
  };

  const dontKnow = () => {
    // a deliberate "don't know" is recorded as wrong (−1)
    const a = { ...answers, [item.id]: -1 };
    setAnswers(a);
    setPicked(null);
    if (i + 1 >= items.length) return finishTest(a);
    setI(i + 1);
  };

  const sendSample = async () => {
    setBusy(true);
    setErr('');
    try {
      const a = await assessSample(sample);
      setAi(a);
      if (result) {
        const adj = adjustForWriting(result.recommendedUnitId, a.cefr);
        if (adj.adjusted) {
          setResult({ ...result, recommendedUnitId: adj.unitId });
          setChosenStart(adj.unitId);
          setWritingAdjusted(true);
        }
      }
      setPhase('result');
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const accept = () => {
    if (!result) return;
    setPlacement({ ...result, aiAssessment: ai ? `${ai.cefr}: ${ai.commentRu}` : undefined }, chosenStart);
    nav('/');
  };

  const bandOrder = useMemo(() => ['A1', 'A2', 'B1', 'B2', 'C1'], []);

  if (!items.length) return <div className="page">Тест не найден.</div>;

  if (phase === 'intro')
    return (
      <div className="page narrow">
        <h1>Тест на определение уровня</h1>
        <Card>
          <ul>
            <li>{items.length} вопросов от A1 до C1: грамматика, лексика, чтение и аудирование. Если вопросы станут слишком сложными, тест закончится раньше.</li>
            <li>Вопросы постепенно усложняются. Если уровень явно слишком сложный, тест завершится раньше.</li>
            <li>Не угадывайте — если не знаете, нажмите «Не знаю». Так результат будет точнее.</li>
            <li>Для аудирования включите звук. Текст можно прослушать до 2 раз.</li>
            {isLlmConfigured(settings) && <li>В конце — короткий текст о себе: ИИ оценит ваше письмо.</li>}
          </ul>
          <button className="btn primary big" onClick={() => setPhase('test')}>
            Начать
          </button>
        </Card>
      </div>
    );

  if (phase === 'test')
    return (
      <div className="page narrow">
        <div className="session-head">
          <strong>Тест уровня</strong>
          <span className="muted">
            {i + 1} / {items.length}
          </span>
        </div>
        <ProgressBar value={i / items.length} />
        <Card>
          <div className="ex-instruction">
            {SKILL_RU[item.skill]} · уровень {item.band}
          </div>
          {item.context && <div className="reading-context de">{item.context}</div>}
          {item.audio && <ListenLimited key={item.id} text={item.audio} />}
          <div className="ex-prompt de">{item.question}</div>
          <div className="options">
            {item.options.map((o, k) => (
              <button key={k} className={`option ${picked === k ? 'selected' : ''}`} onClick={() => setPicked(k)}>
                <span className="opt-key">{k + 1}</span> {o}
              </button>
            ))}
          </div>
          <div className="row">
            <button className="btn primary" disabled={picked === null} onClick={next}>
              Дальше →
            </button>
            <button className="btn ghost" onClick={dontKnow}>
              Не знаю
            </button>
          </div>
        </Card>
      </div>
    );

  if (phase === 'sample')
    return (
      <div className="page narrow">
        <h1>Письменная часть (по желанию)</h1>
        <Card>
          <p>
            Напишите 80–150 слов о себе по-немецки: чем вы занимаетесь, зачем учите немецкий, что планируете на будущее. ИИ
            оценит уровень письма.
          </p>
          <textarea className="writing-area" rows={8} value={sample} onChange={(e) => setSample(e.target.value)} placeholder="Ich heiße …" />
          <div className="row">
            <span className="muted">{countWords(sample)} слов</span>
            <button className="btn primary" disabled={busy || countWords(sample) < 30} onClick={sendSample}>
              Оценить
            </button>
            <button className="btn ghost" onClick={() => setPhase('result')}>
              Пропустить
            </button>
          </div>
          {busy && <Spinner text="ИИ оценивает текст…" />}
          <ErrorBox error={err} />
        </Card>
      </div>
    );

  // result
  const r = result!;
  const rec = getUnit(r.recommendedUnitId);
  return (
    <div className="page narrow">
      <h1>Результат теста</h1>
      <Card className="highlight">
        <div className="eyebrow">Ваш текущий уровень по тесту</div>
        <div className="big-level">{r.estimated}</div>
        <p>
          {r.estimated === 'A1' &&
            (rec?.level === 'A1'
              ? rec.order === 1
                ? 'Начинаем с нуля: алфавит, звуки и правила чтения, потом первые фразы.'
                : 'Буквы и чтение уже знакомы — курс начнётся с первых тем A1.'
              : 'Уровень A1 освоен — курс начнётся с A2.')}
          {r.estimated === 'A2' &&
            (rec?.level === 'A2' ? 'Основы A2 знакомы частично — продолжите A2 со второй половины.' : 'Уровень A2 освоен — курс начнётся с B1.')}
          {r.estimated === 'B1' &&
            (rec?.level === 'B1'
              ? 'Уровень B1 освоен частично — продолжите B1, чтобы закрыть пробелы.'
              : 'Уровень B1 освоен — поэтому следующий шаг курса начинается с B2.')}
          {r.estimated === 'B2' && 'Уровень B2 освоен — следующий шаг курса: C1.'}
          {r.estimated === 'C1+' && 'Уровень C1 и выше. Курс C1 поможет систематизировать и закрепить сложные темы.'}
        </p>
        <h3>По уровням</h3>
        {bandOrder
          .filter((b) => r.byBand[b])
          .map((b) => (
            <div key={b} className="stat-row">
              <span className="stat-label">{b}</span>
              <ProgressBar value={r.byBand[b].correct / r.byBand[b].total} />
              <span className="stat-val">
                {r.byBand[b].correct}/{r.byBand[b].total}
              </span>
            </div>
          ))}
        <h3>По навыкам</h3>
        {Object.entries(r.bySkill).map(([k, v]) => (
          <div key={k} className="stat-row">
            <span className="stat-label">{SKILL_RU[k]}</span>
            <ProgressBar value={v.correct / v.total} />
            <span className="stat-val">{Math.round((v.correct / v.total) * 100)}%</span>
          </div>
        ))}
        {ai && (
          <div className="info-box">
            <strong>Оценка письма ИИ: {ai.cefr}</strong>
            <p>{ai.commentRu}</p>
          </div>
        )}
      </Card>
      <Card>
        <h3>С чего начать</h3>
        <p>
          Рекомендуем начать с <strong>уровня {rec?.level}, юнит {rec?.order} из {allUnits.filter((u) => u.level === rec?.level).length}: «{rec?.title}»</strong> ({rec?.grammar.topicRu}).
          Юниты до него останутся открытыми для самостоятельного повторения.
        </p>
        {writingAdjusted && (
          <div className="info-box">
            Тест показал более высокий уровень, но письмо ИИ оценил как {ai?.cefr}. Активное владение языком отстаёт от
            понимания, поэтому рекомендуем начать на уровень ниже — так грамматика закрепится и в речи, и на письме.
          </div>
        )}
        <label className="field">
          Стартовый юнит
          <select value={chosenStart} onChange={(e) => setChosenStart(e.target.value)}>
            {allUnits.map((u) => (
              <option key={u.id} value={u.id}>
                {u.level} · юнит {u.order}: {u.title} — {u.grammar.topicRu}
              </option>
            ))}
          </select>
        </label>
        <button className="btn primary big" onClick={accept}>
          Начать обучение →
        </button>
      </Card>
    </div>
  );
}

/** Audio for listening items: may be played twice in full, as in real exams. */
function ListenLimited({ text }: { text: string }) {
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => () => stopSpeaking(), []);
  const play = async () => {
    if (playing || plays >= 2) return;
    setPlaying(true);
    try {
      await speak(text);
    } finally {
      setPlaying(false);
      setPlays((p) => p + 1);
    }
  };
  return (
    <div className="listen-box row">
      {plays < 2 ? (
        <button className={`btn-speak big ${playing ? 'playing' : ''}`} disabled={playing} onClick={play}>
          🔊 <span>{playing ? 'Звучит…' : plays === 0 ? 'Прослушать' : 'Прослушать ещё раз (последний)'}</span>
        </button>
      ) : (
        <span className="muted">Прослушано 2 раза</span>
      )}
    </div>
  );
}
