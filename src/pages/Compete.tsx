import { Link } from 'react-router-dom';
import { allPlayers, lastWeekChampion, type PlayerStats } from '../lib/compete';
import { useStore } from '../lib/store';
import { ACHIEVEMENTS, levelInfo, totalXp, unlockedAchievements } from '../lib/gamification';
import { newProfilePrompt } from '../components/ProfileMenu';
import { Card, ProgressBar } from '../components/ui';

const MEDALS = ['🥇', '🥈', '🥉'];

export function Compete() {
  useStore((s) => s.activity); // re-render on progress
  const s = useStore.getState();
  const players = allPlayers();
  const champ = lastWeekChampion(players);
  const byWeek = [...players].sort((a, b) => b.week - a.week);
  const maxWeek = Math.max(1, ...players.map((p) => p.week));
  const li = levelInfo(totalXp(s));
  const unlocked = new Set(unlockedAchievements(s).map((a) => a.id));

  const row = (p: PlayerStats, i: number) => (
    <div key={p.profile.id} className={`lb-row ${p.me ? 'me' : ''}`}>
      <span className="lb-place">{MEDALS[i] ?? i + 1}</span>
      <span className="lb-avatar">{p.profile.emoji}</span>
      <span className="lb-name">
        {p.profile.name} {champ?.profile.id === p.profile.id && <span title="Чемпион прошлой недели">👑</span>}
        <span className="tiny muted">
          {' '}
          · ур. {p.level} {p.rankIcon} {p.rank}
        </span>
      </span>
      <span className="lb-bar">
        <ProgressBar value={p.week / maxWeek} />
      </span>
      <span className="lb-xp">{p.week} XP</span>
    </div>
  );

  return (
    <div className="page">
      <h1>🏆 Соревнование</h1>
      {players.length < 2 ? (
        <Card className="highlight">
          <p>Добавьте второго ученика — и вы будете соревноваться: недельный рейтинг по XP, дуэль, чемпион недели 👑.</p>
          <button className="btn primary" onClick={newProfilePrompt}>
            ➕ Добавить ученика
          </button>
        </Card>
      ) : (
        <Card className="highlight">
          <div className="row between">
            <h2>Рейтинг недели</h2>
            <span className="tiny muted">обнуляется в понедельник</span>
          </div>
          {byWeek.map(row)}
          {champ && (
            <p className="small">
              👑 Чемпион прошлой недели: <strong>{champ.profile.name}</strong> ({champ.lastWeek} XP)
            </p>
          )}
        </Card>
      )}

      {players.length >= 2 && (
        <Card>
          <h3>Сравнение</h3>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th></th>
                  {players.map((p) => (
                    <th key={p.profile.id}>
                      {p.profile.emoji} {p.profile.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    ['XP сегодня', (p) => p.today],
                    ['XP за неделю', (p) => p.week],
                    ['XP всего', (p) => p.total],
                    ['🔥 Серия дней', (p) => p.streak],
                    ['Рекорд серии', (p) => p.best],
                    ['Слов в изучении', (p) => p.words],
                    ['Юнитов пройдено', (p) => p.units],
                    ['Достижений', (p) => p.achievements],
                  ] as [string, (p: PlayerStats) => number][]
                ).map(([label, f]) => {
                  const best = Math.max(...players.map(f));
                  return (
                    <tr key={label}>
                      <td>{label}</td>
                      {players.map((p) => (
                        <td key={p.profile.id} className={f(p) === best && best > 0 ? 'lb-best' : ''}>
                          {f(p)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Card>
        <div className="row between">
          <h3>
            {li.icon} Уровень {li.level} · {li.rank}
          </h3>
          <span className="muted">{totalXp(s)} XP</span>
        </div>
        <ProgressBar value={li.into / li.span} />
        <p className="tiny muted">
          До уровня {li.level + 1}: {li.span - li.into} XP. XP дают правильные ответы, слова, шаги юнитов, письмо, разговор и экзамены.
        </p>
      </Card>

      <Card>
        <h3>
          Достижения {unlocked.size}/{ACHIEVEMENTS.length}
        </h3>
        <div className="badges">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.id} className={`badge-card ${unlocked.has(a.id) ? 'got' : ''}`} title={a.desc}>
              <div className="badge-icon">{unlocked.has(a.id) ? a.icon : '🔒'}</div>
              <div className="badge-title">{a.title}</div>
              <div className="tiny muted">{a.desc}</div>
            </div>
          ))}
        </div>
      </Card>
      <p className="tiny muted">
        Рейтинг сравнивает профили на этом устройстве. Как заниматься с разных устройств — см. <Link to="/settings">Настройки → Данные</Link>.
      </p>
    </div>
  );
}
