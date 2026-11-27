import { Link } from 'react-router-dom';
import { useStore } from '../lib/store';
import { SLOTS, slotXp, threshold, unlockedCount, validEquipped, wardrobe } from '../lib/avatar/catalog';
import { Avatar } from './Avatar';
import { Card, ProgressBar } from './ui';

/** Today page: the learner's hero and the next item that is about to unlock. */
export function HeroCard() {
  const s = useStore();
  if (!s.avatar)
    return (
      <Card>
        <h3>🧑‍🎨 Мой герой</h3>
        <p className="small">Создайте персонажа: за каждое ежедневное задание он получает одежду — десятки вещей в восьми категориях.</p>
        <Link to="/avatar" className="btn">
          Создать героя
        </Link>
      </Card>
    );
  const xp = slotXp(s);
  const g = s.avatar.look.gender;
  const next = SLOTS.map((x) => {
    const open = unlockedCount(x.slot, g, xp[x.slot]);
    const total = wardrobe(x.slot, g).length;
    return { ...x, open, total, need: open < total ? threshold(open) - xp[x.slot] : Infinity, from: threshold(Math.max(0, open - 1)), to: threshold(open), xp: xp[x.slot] };
  })
    .filter((x) => x.need !== Infinity)
    .sort((a, b) => a.need / Math.max(1, a.to - a.from) - b.need / Math.max(1, b.to - b.from))[0];
  return (
    <Card>
      <Link to="/avatar" className="av-mini">
        <Avatar look={s.avatar.look} equipped={validEquipped(s.avatar, xp)} size={64} />
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0 }}>🧑‍🎨 Мой герой</h3>
          {next ? (
            <>
              <div className="small">
                {next.icon} Ближайшая вещь: ещё {next.need} XP за «{next.taskIcon} {next.task}»
              </div>
              <ProgressBar value={(next.xp - next.from) / Math.max(1, next.to - next.from)} />
            </>
          ) : (
            <div className="small">Гардероб собран полностью! 🏆</div>
          )}
        </div>
      </Link>
    </Card>
  );
}
