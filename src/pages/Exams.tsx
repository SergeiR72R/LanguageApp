import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import type { ExamSpeakingTask, ExamWritingTask, Level, MockExam } from '../content/types';
import { exams, loadExam } from '../content';
import { useStore, type ExamResult } from '../lib/store';
import { countWords } from '../lib/grading';
import { isLlmConfigured } from '../lib/ai/providers';
import { checkWriting, evaluateSpeaking, type ExamSpeakingFeedback, type WritingFeedback } from '../lib/ai/prompts';
import { ListeningPlayer, ReadingTexts, TaskBlock, Transcript, scoreTasks, type Answers } from '../components/Tasks';
import { WritingFeedbackView } from '../components/WritingFeedbackView';
import { HandwritingUpload } from '../components/HandwritingUpload';
import { ConversationPanel } from '../components/ConversationPanel';
import { useSpeechInput } from '../components/useSpeechInput';
import { AiRequired, Card, ErrorBox, ProgressBar, Spinner } from '../components/ui';

type Module = ExamResult['module'];
const MODULES: { id: Module; title: string; icon: string }[] = [
  { id: 'lesen', title: 'Lesen', icon: '📖' },
  { id: 'hoeren', title: 'Hören', icon: '🎧' },
  { id: 'schreiben', title: 'Schreiben', icon: '✍️' },
  { id: 'sprechen', title: 'Sprechen', icon: '🗣️' },
];
const PASS = 60;

function best(results: ExamResult[], examId: string, m: Module): number | undefined {
  const r = results.filter((x) => x.examId === examId && x.module === m).map((x) => x.points);
  return r.length ? Math.max(...r) : undefined;
}

function PointsPill({ p }: { p?: number }) {
  if (p === undefined) return <span className="pill">—</span>;
  return <span className={`pill ${p >= PASS ? 'ok' : 'bad'}`}>{p}/100</span>;
}

export function Exams() {
  const results = useStore((s) => s.examResults);
  const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
  return (
    <div className="page">
      <h1>🎓 Подготовка к экзамену Goethe-Zertifikat</h1>
      <p className="muted">
        Пробные экзамены в формате Goethe-Zertifikat: 4 модуля (Lesen, Hören, Schreiben, Sprechen), по 100 баллов. Модуль сдан от
        60 баллов. Модули можно сдавать по отдельности, как на настоящем экзамене. Тексты оригинальные, формат и время — как на
        экзамене. Письмо и говорение оценивает ИИ по критериям Goethe (оценка ориентировочная).
      </p>
      {levels.map((lvl) => {
        const list = exams.filter((e) => e.level === lvl);
        return (
          <section key={lvl} className="level-block">
            <h2>
              <span className={`level-badge l-${lvl}`}>{lvl}</span> {lvl === 'A1' ? 'Goethe-Zertifikat A1: Start Deutsch 1' : `Goethe-Zertifikat ${lvl}`}
            </h2>
            {list.length === 0 && <p className="muted">Скоро.</p>}
            <div className="unit-grid">
              {list.map((e) => (
                <Link key={e.id} to={`/exam/${e.id}`} className="unit-card">
                  <div className="unit-body">
                    <div className="unit-title">{e.title}</div>
                    <div className="exam-modules">
                      {MODULES.map((m) => (
                        <span key={m.id} className="tiny">
                          {m.icon} {m.title} <PointsPill p={best(results, e.id, m.id)} />
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Timer({ minutes, onEnd }: { minutes: number; onEnd?: () => void }) {
  const [left, setLeft] = useState(minutes * 60);
  const ended = useRef(false);
  useEffect(() => {
    const t = setInterval(() => setLeft((x) => x - 1), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (left <= 0 && !ended.current) {
      ended.current = true;
      onEnd?.();
    }
  }, [left, onEnd]);
  const m = Math.floor(Math.max(0, left) / 60);
  const s = Math.max(0, left) % 60;
  return (
    <span className={`timer ${left < 300 ? 'warn' : ''}`} title="Оставшееся время">
      ⏱ {m}:{String(s).padStart(2, '0')}
    </span>
  );
}

export function ExamRunner() {
  const { id = '' } = useParams();
  const results = useStore((s) => s.examResults);
  const [module, setModule] = useState<Module | null>(null);
  const [exam, setExam] = useState<MockExam | null | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    loadExam(id).then((e) => alive && setExam(e ?? null));
    return () => {
      alive = false;
    };
  }, [id]);
  if (exam === undefined) return <Spinner text="Загружаю экзамен…" />;
  if (!exam) return <Navigate to="/exams" replace />;

  if (module)
    return (
      <div className="page narrow">
        <div className="row between">
          <div>
            <div className="eyebrow">
              <Link to="/exams">Экзамены</Link> / {exam.title}
            </div>
            <h1>{MODULES.find((m) => m.id === module)!.icon} {MODULES.find((m) => m.id === module)!.title}</h1>
          </div>
          <button className="btn ghost" onClick={() => confirm('Выйти из модуля? Ответы не сохранятся.') && setModule(null)}>
            ✕ Выйти
          </button>
        </div>
        {module === 'lesen' && <LesenModule exam={exam} onExit={() => setModule(null)} />}
        {module === 'hoeren' && <HoerenModule exam={exam} onExit={() => setModule(null)} />}
        {module === 'schreiben' && <SchreibenModule exam={exam} onExit={() => setModule(null)} />}
        {module === 'sprechen' && <SprechenModule exam={exam} onExit={() => setModule(null)} />}
      </div>
    );

  const timeOf = (m: Module) =>
    m === 'lesen' ? exam.lesen.minutes : m === 'hoeren' ? exam.hoeren.minutes : m === 'schreiben' ? exam.schreiben.minutes : exam.sprechen.minutes;
  const items = (m: Module) =>
    m === 'lesen'
      ? exam.lesen.parts.reduce((a, p) => a + p.tasks.reduce((b, t) => b + t.items.length, 0), 0)
      : m === 'hoeren'
        ? exam.hoeren.parts.reduce((a, p) => a + p.segments.reduce((b, s) => b + s.tasks.reduce((c, t) => c + t.items.length, 0), 0), 0)
        : m === 'schreiben'
          ? exam.schreiben.tasks.length
          : exam.sprechen.tasks.length;

  const history = results.filter((r) => r.examId === exam.id).slice(-12).reverse();
  return (
    <div className="page narrow">
      <div className="eyebrow">
        <Link to="/exams">Экзамены</Link> / Goethe-Zertifikat {exam.level}
      </div>
      <h1>{exam.title}</h1>
      <div className="grid-2">
        {MODULES.map((m) => (
          <Card key={m.id}>
            <div className="row between">
              <h3>
                {m.icon} {m.title}
              </h3>
              <PointsPill p={best(results, exam.id, m.id)} />
            </div>
            <p className="muted small">
              {timeOf(m.id)} мин · {m.id === 'schreiben' || m.id === 'sprechen' ? `${items(m.id)} задания` : `${items(m.id)} заданий`}
              {m.id === 'hoeren' && ' · записи звучат 1–2 раза, как на экзамене'}
            </p>
            <button className="btn primary" onClick={() => setModule(m.id)}>
              Начать
            </button>
          </Card>
        ))}
      </div>
      {history.length > 0 && (
        <Card>
          <h3>История попыток</h3>
          <ul>
            {history.map((r, i) => (
              <li key={i}>
                {r.date} · {MODULES.find((m) => m.id === r.module)?.title}: <PointsPill p={r.points} />
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

function SubmitBar({ answered, total, onSubmit, minutes }: { answered: number; total: number; onSubmit: () => void; minutes: number }) {
  return (
    <div className="exam-bar">
      <Timer minutes={minutes} onEnd={onSubmit} />
      <span className="muted small">
        Отвечено {answered}/{total}
      </span>
      <button className="btn primary" onClick={() => (answered < total ? confirm('Есть пропущенные задания. Сдать модуль?') && onSubmit() : onSubmit())}>
        Сдать модуль
      </button>
    </div>
  );
}

function ResultBox({ points, onExit, children }: { points: number; onExit: () => void; children?: React.ReactNode }) {
  return (
    <Card className="highlight">
      <h2>
        {points >= PASS ? '✅ Сдано' : '❌ Пока не сдано'}: {points}/100
      </h2>
      <ProgressBar value={points / 100} />
      <p className="muted">Для сдачи модуля нужно {PASS} баллов. Ниже — разбор с правильными ответами и объяснениями.</p>
      {children}
      <button className="btn" onClick={onExit}>
        К модулям экзамена
      </button>
    </Card>
  );
}

function LesenModule({ exam, onExit }: { exam: MockExam; onExit: () => void }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [points, setPoints] = useState<number | null>(null);
  const add = useStore((s) => s.addExamResult);
  const total = exam.lesen.parts.reduce((a, p) => a + p.tasks.reduce((b, t) => b + t.items.length, 0), 0);
  const submit = () => {
    let c = 0;
    exam.lesen.parts.forEach((p, i) => (c += scoreTasks(p.tasks, answers, `L${i}`).correct));
    const pts = Math.round((c / total) * 100);
    setPoints(pts);
    add({ examId: exam.id, module: 'lesen', points: pts });
    window.scrollTo(0, 0);
  };
  const reveal = points !== null;
  return (
    <div className="stack">
      {reveal && <ResultBox points={points!} onExit={onExit} />}
      {exam.lesen.parts.map((p, i) => (
        <Card key={i}>
          <h3>
            Teil {p.teil} · {p.title} <span className="pill">{p.textType}</span>
          </h3>
          <ReadingTexts r={p} />
          {p.tasks.map((t, ti) => (
            <TaskBlock key={ti} task={t} index={ti} prefix={`L${i}`} answers={answers} reveal={reveal} onAnswer={(k, v) => setAnswers({ ...answers, [k]: v })} />
          ))}
        </Card>
      ))}
      {!reveal && <SubmitBar minutes={exam.lesen.minutes} answered={Object.keys(answers).length} total={total} onSubmit={submit} />}
    </div>
  );
}

function HoerenModule({ exam, onExit }: { exam: MockExam; onExit: () => void }) {
  const [answers, setAnswers] = useState<Answers>({});
  const [points, setPoints] = useState<number | null>(null);
  const add = useStore((s) => s.addExamResult);
  const total = exam.hoeren.parts.reduce((a, p) => a + p.segments.reduce((b, s) => b + s.tasks.reduce((c, t) => c + t.items.length, 0), 0), 0);
  const submit = () => {
    let c = 0;
    exam.hoeren.parts.forEach((p, i) => p.segments.forEach((s, k) => (c += scoreTasks(s.tasks, answers, `H${i}.${k}`).correct)));
    const pts = Math.round((c / total) * 100);
    setPoints(pts);
    add({ examId: exam.id, module: 'hoeren', points: pts });
    window.scrollTo(0, 0);
  };
  const reveal = points !== null;
  return (
    <div className="stack">
      {reveal && <ResultBox points={points!} onExit={onExit} />}
      {!reveal && (
        <div className="info-box">
          Как на экзамене: прочитайте задания, затем включите запись. Каждую запись можно прослушать ровно столько раз, сколько
          указано. Текст будет показан после сдачи модуля.
        </div>
      )}
      {exam.hoeren.parts.map((p, i) => (
        <Card key={i}>
          <h3>Teil {p.teil}</h3>
          <div className="task-instr">
            <div className="de">{p.instructionDe}</div>
            <div className="tiny muted">{p.instructionRu}</div>
          </div>
          {p.segments.map((s, k) => (
            <div key={k} className="segment">
              {p.segments.length > 1 && <div className="eyebrow">Text {k + 1}</div>}
              {!reveal ? <ListeningPlayer l={s} limit /> : <Transcript l={s} />}
              {s.tasks.map((t, ti) => (
                <TaskBlock
                  key={ti}
                  task={t}
                  index={ti}
                  prefix={`H${i}.${k}`}
                  answers={answers}
                  reveal={reveal}
                  onAnswer={(key, v) => setAnswers({ ...answers, [key]: v })}
                />
              ))}
            </div>
          ))}
        </Card>
      ))}
      {!reveal && <SubmitBar minutes={exam.hoeren.minutes} answered={Object.keys(answers).length} total={total} onSubmit={submit} />}
    </div>
  );
}

function SchreibenModule({ exam, onExit }: { exam: MockExam; onExit: () => void }) {
  const settings = useStore((s) => s.settings);
  const add = useStore((s) => s.addExamResult);
  const addMistakes = useStore((s) => s.addMistakes);
  const [texts, setTexts] = useState<string[]>(exam.schreiben.tasks.map(() => ''));
  const [fb, setFb] = useState<(WritingFeedback | null)[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const ai = isLlmConfigured(settings);

  const pointsFor = (t: ExamWritingTask, f: WritingFeedback | null) => (f ? Math.round((f.score / 100) * t.maxPoints) : 0);

  const submit = async () => {
    setBusy(true);
    setErr('');
    try {
      const out: (WritingFeedback | null)[] = [];
      for (const [i, t] of exam.schreiben.tasks.entries()) {
        if (countWords(texts[i]) < 10) {
          out.push(null);
          continue;
        }
        const f = await checkWriting({
          level: exam.level,
          task: `${t.instructionDe}\n${t.situationDe}\n(Register: ${t.register}, ca. ${t.minWords} Wörter, Goethe-Zertifikat ${exam.level} Schreiben Teil ${t.teil})`,
          points: t.points,
          text: texts[i],
        });
        out.push(f);
        addMistakes(f.errors.map((e) => ({ ...e, source: 'writing' as const })));
      }
      setFb(out);
      const total = exam.schreiben.tasks.reduce((a, t, i) => a + pointsFor(t, out[i]), 0);
      add({ examId: exam.id, module: 'schreiben', points: total });
      window.scrollTo(0, 0);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (!ai) return <AiRequired what="Оценка письменной части" />;
  const total = fb ? exam.schreiben.tasks.reduce((a, t, i) => a + pointsFor(t, fb[i]), 0) : 0;
  return (
    <div className="stack">
      {fb && <ResultBox points={total} onExit={onExit} />}
      {exam.schreiben.tasks.map((t, i) => (
        <Card key={i}>
          <div className="row between">
            <h3>Teil {t.teil}</h3>
            <span className="pill">
              {fb ? `${pointsFor(t, fb[i])}/` : ''}
              {t.maxPoints} баллов · ~{t.minutes} мин
            </span>
          </div>
          <div className="task-instr">
            <div className="de">{t.instructionDe}</div>
            <div className="tiny muted">{t.instructionRu}</div>
          </div>
          <div className="reading-text de prewrap">{t.situationDe}</div>
          <ul>
            {t.points.map((p, k) => (
              <li key={k} className="de">
                {p}
              </li>
            ))}
          </ul>
          {!fb && <HandwritingUpload onText={(t) => setTexts(texts.map((x, k) => (k === i ? (x.trim() ? `${x.trim()}\n\n${t}` : t) : x)))} />}
          <textarea
            className="writing-area"
            rows={10}
            disabled={!!fb}
            value={texts[i]}
            onChange={(e) => setTexts(texts.map((x, k) => (k === i ? e.target.value : x)))}
            spellCheck={false}
          />
          <div className={countWords(texts[i]) >= t.minWords ? 'ok-text small' : 'muted small'}>
            {countWords(texts[i])} / ~{t.minWords} слов
          </div>
          {fb?.[i] && <WritingFeedbackView fb={fb[i]!} />}
          {fb && !fb[i] && <p className="muted">Текст не написан — 0 баллов.</p>}
        </Card>
      ))}
      {!fb && (
        <>
          <div className="exam-bar">
            <Timer minutes={exam.schreiben.minutes} />
            <button className="btn primary" disabled={busy} onClick={submit}>
              Сдать на проверку
            </button>
          </div>
          {busy && <Spinner text="ИИ-экзаменатор проверяет тексты (до минуты)…" />}
          <ErrorBox error={err} />
        </>
      )}
    </div>
  );
}

function PresentationRecorder({ onDone }: { onDone: (text: string) => void }) {
  const mic = useSpeechInput();
  const [typed, setTyped] = useState('');
  const [text, setText] = useState('');
  return (
    <div className="stack">
      <div className="row wrap">
        <button
          className={`btn mic big ${mic.state === 'recording' ? 'recording' : ''}`}
          disabled={mic.state === 'processing'}
          onClick={async () => {
            if (mic.state === 'recording') {
              const t = await mic.stop();
              if (t) setText((x) => `${x} ${t.text}`.trim());
            } else mic.start();
          }}
        >
          {mic.state === 'recording' ? '⏹ Закончить' : mic.state === 'processing' ? 'Распознаю…' : '🎙️ Начать выступление'}
        </button>
        {mic.state === 'recording' && <span className="muted">{mic.interim || 'Говорите…'}</span>}
      </div>
      <ErrorBox error={mic.error} />
      {text && <div className="reading-text de">{text}</div>}
      <details>
        <summary>Нет микрофона? Напишите текст выступления</summary>
        <textarea className="writing-area" rows={6} value={typed} onChange={(e) => setTyped(e.target.value)} />
      </details>
      <button className="btn primary" disabled={!(text || typed).trim()} onClick={() => onDone(`${text} ${typed}`.trim())}>
        Готово — оценить
      </button>
    </div>
  );
}

function SpeakingTaskView({ exam, t, onScored }: { exam: MockExam; t: ExamSpeakingTask; onScored: (fb: ExamSpeakingFeedback) => void }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [fb, setFb] = useState<ExamSpeakingFeedback | null>(null);
  const [started, setStarted] = useState(false);
  const evaluate = async (transcript: string) => {
    setBusy(true);
    setErr('');
    try {
      const r = await evaluateSpeaking({ level: exam.level, instruction: t.instructionDe, situation: t.situationDe, points: t.points, mode: t.mode, transcript });
      setFb(r);
      onScored(r);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card>
      <div className="row between">
        <h3>Teil {t.teil}</h3>
        <span className="pill">
          {fb ? `${Math.round((fb.score / 100) * t.maxPoints)}/` : ''}
          {t.maxPoints} баллов · ~{t.minutes} мин
        </span>
      </div>
      <div className="task-instr">
        <div className="de">{t.instructionDe}</div>
        <div className="tiny muted">{t.instructionRu}</div>
      </div>
      <div className="reading-text de prewrap">{t.situationDe}</div>
      <ul>
        {t.points.map((p, k) => (
          <li key={k} className="de">
            {p}
          </li>
        ))}
      </ul>
      {!fb && !started && (
        <button className="btn primary" onClick={() => setStarted(true)}>
          {t.mode === 'presentation' ? 'Подготовился — начать выступление' : 'Начать разговор'}
        </button>
      )}
      {!fb && started && t.mode === 'presentation' && <PresentationRecorder onDone={evaluate} />}
      {!fb && started && t.mode !== 'presentation' && (
        <ConversationPanel
          level={exam.level}
          topic={t.situationDe.slice(0, 80)}
          aiRole={`${t.aiRole}\nDies ist eine Prüfungssituation (Goethe-Zertifikat ${exam.level}, Sprechen Teil ${t.teil}). Sprich wie ein Prüfungspartner, nicht wie ein Lehrer.`}
          opener={t.opener}
          tasksRu={[t.instructionRu]}
          minTurns={5}
          onFinished={(_, __, history) =>
            evaluate(history.map((h) => `${h.role === 'ai' ? 'Partner' : 'Kandidat'}: ${h.text}`).join('\n'))
          }
        />
      )}
      {busy && <Spinner text="ИИ-экзаменатор оценивает…" />}
      <ErrorBox error={err} />
      {fb && (
        <div className="info-box">
          <strong>Оценка: {fb.score}/100</strong>
          {fb.criteria.map((c) => (
            <div key={c.name} className="stat-row">
              <span className="stat-label">{c.name}</span>
              <ProgressBar value={c.score / 5} />
              <span className="stat-val">{c.score}/5</span>
            </div>
          ))}
          <p>{fb.feedbackRu}</p>
          <ul>
            {fb.tipsRu.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}

function SprechenModule({ exam, onExit }: { exam: MockExam; onExit: () => void }) {
  const settings = useStore((s) => s.settings);
  const add = useStore((s) => s.addExamResult);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [saved, setSaved] = useState<number | null>(null);
  if (!isLlmConfigured(settings)) return <AiRequired what="Устная часть экзамена" />;
  const doneAll = Object.keys(scores).length === exam.sprechen.tasks.length;
  const total = exam.sprechen.tasks.reduce((a, t, i) => a + Math.round(((scores[i] ?? 0) / 100) * t.maxPoints), 0);
  return (
    <div className="stack">
      <div className="info-box">
        Говорите в микрофон, как на экзамене. ИИ оценивает содержание, связность, лексику и грамматику по распознанному тексту.
        Произношение по тексту оценить нельзя — тренируйте его в шагах «Говорение».
      </div>
      {exam.sprechen.tasks.map((t, i) => (
        <SpeakingTaskView key={i} exam={exam} t={t} onScored={(fb) => setScores((s) => ({ ...s, [i]: fb.score }))} />
      ))}
      {doneAll && saved === null && (
        <button
          className="btn primary big"
          onClick={() => {
            add({ examId: exam.id, module: 'sprechen', points: total });
            setSaved(total);
          }}
        >
          Завершить модуль ({total}/100)
        </button>
      )}
      {saved !== null && <ResultBox points={saved} onExit={onExit} />}
    </div>
  );
}
