import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allUnits, getUnit, unitIndex } from '../content';
import { buildPlan, isPlanItemDone } from '../lib/daily';
import { formatDateRu, today } from '../lib/date';
import { isMature } from '../lib/srs';
import { STEPS, stepMeta } from '../lib/steps';
import { currentUnitId, dueCards, streak, useStore, type PlanItem } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { Card, ProgressBar } from '../components/ui';
import { ProfileMenu } from '../components/ProfileMenu';
import { activeProfile, listProfiles } from '../lib/profiles';

function itemView(item: PlanItem, due: number): { icon: string; title: string; sub: string; to: string } {
  switch (item.kind) {
    case 'review':
      return {
        icon: '🔁',
        title: 'Повторение (интервальное)',
        sub: due ? `${due} карточек к повторению: слова, грамматика, ваши ошибки` : 'На сегодня всё повторено',
        to: '/review',
      };
    case 'step': {
      const u = getUnit(item.unitId)!;
      const m = stepMeta(item.step);
      return {
        icon: m.icon,
        title: `${m.title}: ${item.step === 'grammar' ? u.grammar.topic : item.step === 'vocab' ? u.title : u.title}`,
        sub: `${u.level} · Юнит ${u.order} · ~${m.minutes} мин`,
        to: `/unit/${u.id}/${item.step}`,
      };
    }
    case 'consolidation':
      return { icon: '🧠', title: 'Закрепление: контрольная по пройденным юнитам', sub: 'Раз в неделю · ~15 мин', to: '/consolidation' };
    case 'conversation':
      return { icon: '🗣️', title: 'Разговорная практика с ИИ', sub: 'Свободный диалог 5–10 минут с разбором ошибок', to: '/speak' };
    case 'mistakes':
      return { icon: '🎯', title: 'Работа над ошибками', sub: 'ИИ составит упражнения по вашим частым ошибкам', to: '/drill' };
  }
}

export function Today() {
  const s = useStore();
  const d = today();

  useEffect(() => {
    if (!s.plan || s.plan.date !== d) s.setPlan({ date: d, items: buildPlan(useStore.getState()) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d, s.plan?.date, s.startUnitId]);

  const items = s.plan?.date === d ? s.plan.items : buildPlan(s);
  const due = dueCards(s).length;
  const done = items.filter((it) => isPlanItemDone(s, it)).length;
  const cur = currentUnitId(s);
  const unit = cur ? getUnit(cur) : undefined;
  const up = cur ? s.units[cur] : undefined;
  const unitSteps = STEPS.filter((x) => up?.steps[x.id]?.done).length;
  const vocabCards = Object.values(s.cards).filter((c) => c.kind === 'vocab');
  const mature = vocabCards.filter((c) => isMature(c.srs)).length;
  const completedUnits = allUnits.filter((u) => s.units[u.id]?.completed).length;
  const act = s.activity[d];

  const refresh = () => s.setPlan({ date: d, items: buildPlan(useStore.getState()) });

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1>
            Guten Tag{listProfiles().length > 1 ? `, ${activeProfile().name}` : ''}! ☀️
          </h1>
          <p className="muted">
            {formatDateRu(d)} · серия {streak(s.activity)} дн. · сегодня ответов {act?.answered ?? 0}
          </p>
        </div>
        <div className="today-profile">
          <ProfileMenu compact />
        </div>
      </header>

      {!isLlmConfigured(s.settings) && (
        <div className="info-box">
          🔑 Подключите бесплатный ИИ в <Link to="/settings">Настройках</Link>, чтобы получать проверку письма, диалоги и анализ
          речи.
        </div>
      )}

      <div className="grid-2">
        <Card className="highlight">
          <div className="row between">
            <h2>План на сегодня</h2>
            <span className="pill accent">
              {done}/{items.length}
            </span>
          </div>
          <ProgressBar value={items.length ? done / items.length : 0} />
          <ol className="plan">
            {items.map((it, k) => {
              const v = itemView(it, due);
              const ok = isPlanItemDone(s, it);
              return (
                <li key={k} className={ok ? 'done' : ''}>
                  <Link to={v.to} className="plan-item">
                    <span className="plan-icon">{ok ? '✅' : v.icon}</span>
                    <span>
                      <span className="plan-title">{v.title}</span>
                      <span className="plan-sub">{v.sub}</span>
                    </span>
                    <span className="plan-go">→</span>
                  </Link>
                </li>
              );
            })}
          </ol>
          {done === items.length && items.length > 0 && (
            <div className="success-box">
              🎉 План выполнен! Можно сделать ещё шаг юнита или поговорить с ИИ.{' '}
              <button className="btn small" onClick={refresh}>
                Добавить задания
              </button>
            </div>
          )}
          <p className="tiny muted">
            Объём плана: {s.settings.dailyMinutes} мин/день (меняется в настройках). Сначала — повторение, затем новый материал.
          </p>
        </Card>

        <div className="stack">
          {unit ? (
            <Card>
              <div className="eyebrow">
                Текущий юнит · {unit.level} · {unitIndex(unit.id) + 1}/{allUnits.length}
              </div>
              <h3>
                {unit.order}. {unit.title}
              </h3>
              <p className="muted">
                {unit.titleRu} · {unit.grammar.topicRu}
              </p>
              <div className="steps-mini">
                {STEPS.map((x) => (
                  <Link
                    key={x.id}
                    to={`/unit/${unit.id}/${x.id}`}
                    className={`step-dot ${up?.steps[x.id]?.done ? 'done' : ''}`}
                    title={x.title}
                  >
                    {x.icon}
                  </Link>
                ))}
              </div>
              <ProgressBar value={unitSteps / STEPS.length} />
              <Link to={`/unit/${unit.id}`} className="btn primary">
                Открыть юнит
              </Link>
            </Card>
          ) : (
            <Card>
              <h3>🎓 Курс пройден!</h3>
              <p>Продолжайте повторение, разговорную практику и работу над ошибками.</p>
            </Card>
          )}
          <Card>
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-num">{vocabCards.length}</div>
                <div className="stat-cap">слов изучается</div>
              </div>
              <div className="stat">
                <div className="stat-num">{mature}</div>
                <div className="stat-cap">слов закреплено</div>
              </div>
              <div className="stat">
                <div className="stat-num">{completedUnits}</div>
                <div className="stat-cap">юнитов пройдено</div>
              </div>
              <div className="stat">
                <div className="stat-num">{s.mistakes.filter((m) => !m.resolved).length}</div>
                <div className="stat-cap">ошибок в работе</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
