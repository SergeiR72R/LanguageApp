import { useMemo } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { allUnits, getUnit, unitIndex } from '../../content';
import { STEPS, type StepId } from '../../lib/steps';
import { unitStatus, useStore } from '../../lib/store';
import { pendingSteps } from '../../lib/daily';
import { VocabStep } from './VocabStep';
import { GrammarStep } from './GrammarStep';
import { ListeningStep } from './ListeningStep';
import { ReadingStep } from './ReadingStep';
import { WritingStep } from './WritingStep';
import { SpeakingStep } from './SpeakingStep';
import { TestStep } from './TestStep';
import { Card } from '../../components/ui';

export function UnitPage() {
  const { id = '', step } = useParams();
  const unit = getUnit(id);
  const s = useStore();
  const nav = useNavigate();
  // Without a step in the URL, open the first unfinished step — fixed when the unit is opened, so finishing a step
  // keeps its results on screen until the learner presses "next".
  const firstPending = useMemo(() => (unit ? pendingSteps(useStore.getState(), unit.id)[0] : undefined), [unit]);
  if (!unit) return <Navigate to="/course" replace />;
  const status = unitStatus(s, unit.id);
  const up = s.units[unit.id];

  if (status === 'locked') {
    return (
      <div className="page narrow">
        <h1>🔒 {unit.title}</h1>
        <Card>
          <p>Этот юнит откроется после прохождения предыдущих. Обучение идёт последовательно, чтобы темы опирались друг на друга.</p>
          <Link className="btn" to="/course">
            К курсу
          </Link>
        </Card>
      </div>
    );
  }

  const current = (step as StepId | undefined) ?? firstPending ?? 'vocab';
  const idx = unitIndex(unit.id);
  const nextUnit = allUnits[idx + 1];

  const goNext = () => {
    const pend = pendingSteps(useStore.getState(), unit.id);
    const after = STEPS.map((x) => x.id).slice(STEPS.findIndex((x) => x.id === current) + 1);
    const target = after.find((x) => pend.includes(x)) ?? pend[0];
    if (target) nav(`/unit/${unit.id}/${target}`);
    else nav('/');
  };

  return (
    <div className="page">
      <div className="unit-head">
        <div className="eyebrow">
          <Link to="/course">Курс</Link> / {unit.level} · Юнит {unit.order}
        </div>
        <h1>{unit.title}</h1>
        <p className="muted">
          {unit.titleRu} · 🧩 {unit.grammar.topic} ({unit.grammar.topicRu})
        </p>
        {!step && (
          <ul className="goals">
            {unit.goalsRu.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="step-tabs">
        {STEPS.map((x, k) => (
          <Link key={x.id} to={`/unit/${unit.id}/${x.id}`} className={`step-tab ${current === x.id ? 'active' : ''} ${up?.steps[x.id]?.done ? 'done' : ''}`}>
            <span className="step-n">{up?.steps[x.id]?.done ? '✓' : k + 1}</span>
            <span className="step-icon">{x.icon}</span>
            <span className="step-label">{x.title}</span>
          </Link>
        ))}
      </div>

      {current === 'vocab' && <VocabStep unit={unit} onNext={goNext} />}
      {current === 'grammar' && <GrammarStep unit={unit} onNext={goNext} />}
      {current === 'reading' && <ReadingStep unit={unit} onNext={goNext} />}
      {current === 'listening' && <ListeningStep unit={unit} onNext={goNext} />}
      {current === 'writing' && <WritingStep unit={unit} onNext={goNext} />}
      {current === 'speaking' && <SpeakingStep unit={unit} onNext={goNext} />}
      {current === 'test' && <TestStep unit={unit} nextUnitId={nextUnit?.id} />}
    </div>
  );
}
