import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allUnits, getUnit, unitIndex } from '../content';
import { buildPlan, isPlanItemDone } from '../lib/daily';
import { formatDateRu, today } from '../lib/date';
import { isMature } from '../lib/srs';
import { stepMeta, unitSteps as stepsOf } from '../lib/steps';
import { currentUnitId, dueCards, streak, useStore, type PlanItem } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { Card, ProgressBar } from '../components/ui';
import { activeProfile, listProfiles } from '../lib/profiles';
import { dailyGoalXp, levelInfo, todayXp, totalXp } from '../lib/gamification';
import { allPlayers } from '../lib/compete';
import { isSyncEnabled } from '../lib/sync';
import { HeroCard } from '../components/HeroCard';

function GoalRing({ value, goal }: { value: number; goal: number }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const p = Math.min(1, value / goal);
  return (
    <div className="ring" title={`Дневная цель: ${goal} XP`}>
      <svg width="108" height="108" viewBox="0 0 108 108">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f5c400" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <circle className="ring-bg" cx="54" cy="54" r={r} fill="none" strokeWidth="10" />
        <circle className="ring-fg" cx="54" cy="54" r={r} fill="none" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - p)} />
      </svg>
      <div className="ring-label">
        {p >= 1 ? '🎯' : `${value}`}
        <small>{p >= 1 ? 'цель!' : `из ${goal} XP`}</small>
      </div>
    </div>
  );
}

function Duel() {
  const players = allPlayers();
  if (players.length < 2) return null;
  const me = players.find((p) => p.me)!;
  const rival = players.filter((p) => !p.me).sort((a, b) => b.week - a.week)[0];
  const sum = Math.max(1, me.week + rival.week);
  const lead = me.week - rival.week;
  return (
    <Link to="/compete" className="card duel-card">
      <div className="row between">
        <strong>⚔️ Дуэль недели</strong>
        <span className="tiny muted">{lead > 0 ? `вы впереди на ${lead} XP` : lead < 0 ? `отставание ${-lead} XP — догоняйте!` : 'ничья'}</span>
      </div>
      <div className="duel">
        <div className="duel-side">
          <div>
            {me.profile.emoji} {me.profile.name}
          </div>
          <div className="big">{me.week}</div>
        </div>
        <div className="duel-vs">VS</div>
        <div className="duel-side">
          <div>
            {rival.profile.emoji} {rival.profile.name}
          </div>
          <div className="big">{rival.week}</div>
        </div>
      </div>
      <div className="duel-bar">
        <div style={{ width: `${(me.week / sum) * 100}%` }} />
        <div style={{ width: `${(rival.week / sum) * 100}%` }} />
      </div>
    </Link>
  );
}

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
    case 'words':
      return { icon: '🆕', title: 'Слова дня', sub: 'Новая порция из словаря курса · ~10 мин', to: '/words' };
    case 'verbs':
      return { icon: '🔗', title: 'Управление глаголов', sub: 'Новые глаголы с предлогами и падежами · ~5 мин', to: '/verbs' };
    case 'exam':
      return { icon: '🎓', title: `Пробный экзамен Goethe ${item.level}`, sub: 'Уровень пройден — проверьте готовность к экзамену', to: '/exams' };
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
  const uSteps = stepsOf(unit);
  const unitSteps = uSteps.filter((x) => up?.steps[x.id]?.done).length;
  const vocabCards = Object.values(s.cards).filter((c) => c.kind === 'vocab');
  const mature = vocabCards.filter((c) => isMature(c.srs)).length;
  const completedUnits = allUnits.filter((u) => s.units[u.id]?.completed).length;

  const refresh = () => s.setPlan({ date: d, items: buildPlan(useStore.getState()) });

  return (
    <div className="page">
      <section className="card hero">
        <GoalRing value={todayXp(s)} goal={dailyGoalXp(s)} />
        <div>
          <h1>
            Guten Tag{listProfiles().length > 1 ? `, ${activeProfile().name}` : ''}! ☀️
          </h1>
          <div className="muted">{formatDateRu(d)}</div>
          <div className="hero-stats">
            <span title="Серия дней подряд">🔥 {streak(s.activity)} дн.</span>
            <span title="Уровень игрока">
              {levelInfo(totalXp(s)).icon} Ур. {levelInfo(totalXp(s)).level} · {levelInfo(totalXp(s)).rank}
            </span>
            <span>⭐ {totalXp(s)} XP</span>
          </div>
        </div>
      </section>

      <Duel />

      {!isSyncEnabled() && (
        <div className="info-box">
          ☁️ Синхронизация не подключена — прогресс хранится только в этом браузере.{' '}
          <Link to="/settings">Подключить</Link>, чтобы заниматься с телефона и других компьютеров.
        </div>
      )}

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
          <HeroCard />
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
                {uSteps.map((x) => (
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
              <ProgressBar value={unitSteps / uSteps.length} />
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
