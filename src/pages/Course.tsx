import { Link } from 'react-router-dom';
import { levels, unitsOfLevel } from '../content';
import { STEPS } from '../lib/steps';
import { unitStatus, useStore } from '../lib/store';
import { ProgressBar } from '../components/ui';

const LEVEL_RU = {
  B1: 'Самостоятельный пользователь: работа, быт, путешествия, своё мнение.',
  B2: 'Свободное общение: дискуссии, аргументация, СМИ, сложные тексты.',
  C1: 'Продвинутый уровень: академический и профессиональный язык, стиль, нюансы.',
};

export function Course() {
  const s = useStore();
  return (
    <div className="page">
      <h1>Курс</h1>
      <p className="muted">
        Юниты проходятся по порядку: следующий открывается после теста юнита (≥ 70%). Юниты ниже стартового (по тесту уровня)
        открыты для повторения.{' '}
        <Link to="/welcome">Изменить стартовый уровень</Link>
      </p>
      {levels.map((lvl) => {
        const units = unitsOfLevel(lvl);
        const done = units.filter((u) => s.units[u.id]?.completed).length;
        return (
          <section key={lvl} className="level-block">
            <div className="row between">
              <h2>
                <span className={`level-badge l-${lvl}`}>{lvl}</span> {LEVEL_RU[lvl]}
              </h2>
              <span className="muted">
                {done}/{units.length}
              </span>
            </div>
            <div className="unit-grid">
              {units.map((u) => {
                const st = unitStatus(s, u.id);
                const up = s.units[u.id];
                const steps = STEPS.filter((x) => up?.steps[x.id]?.done).length;
                const inner = (
                  <>
                    <div className="unit-num">{st === 'done' ? '✓' : st === 'locked' ? '🔒' : u.order}</div>
                    <div className="unit-body">
                      <div className="unit-title">{u.title}</div>
                      <div className="unit-sub">{u.titleRu}</div>
                      <div className="unit-gram">🧩 {u.grammar.topic}</div>
                      {st !== 'locked' && <ProgressBar value={steps / STEPS.length} />}
                      {up?.steps.test?.score !== undefined && (
                        <div className="tiny muted">Тест: {Math.round((up.steps.test.score ?? 0) * 100)}%</div>
                      )}
                    </div>
                  </>
                );
                return st === 'locked' ? (
                  <div key={u.id} className="unit-card locked" title="Откроется после прохождения предыдущего юнита">
                    {inner}
                  </div>
                ) : (
                  <Link key={u.id} to={`/unit/${u.id}`} className={`unit-card ${st}`}>
                    {inner}
                  </Link>
                );
              })}
              <Link to="/exams" className="unit-card exam-card">
                <div className="unit-num">🎓</div>
                <div className="unit-body">
                  <div className="unit-title">Goethe-Zertifikat {lvl}</div>
                  <div className="unit-sub">Пробные экзамены после уровня</div>
                </div>
              </Link>
            </div>
          </section>
        );
      })}
    </div>
  );
}
