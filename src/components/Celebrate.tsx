import { useEffect, useState } from 'react';
import { useStore } from '../lib/store';
import { dailyGoalXp, levelInfo, todayXp, totalXp, unlockedAchievements } from '../lib/gamification';
import { sfx } from '../lib/sound';
import { today } from '../lib/date';
import { SLOTS, slotXp, unlockedCount, wardrobe } from '../lib/avatar/catalog';

// ---------------- confetti ----------------

const COLORS = ['#f5c400', '#dd2c2c', '#2b59c3', '#16a34a', '#9333ea', '#f97316'];

/** Lightweight canvas confetti burst. */
export function confetti(amount = 140) {
  if (!useStore.getState().settings.animations) return;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'confetti-canvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const g = canvas.getContext('2d');
  if (!g) return canvas.remove();
  const parts = Array.from({ length: amount }, () => ({
    x: canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 0.3,
    y: canvas.height * 0.35,
    vx: (Math.random() - 0.5) * 16,
    vy: -Math.random() * 14 - 4,
    r: Math.random() * 6 + 4,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
  }));
  const start = performance.now();
  const frame = (t: number) => {
    const el = t - start;
    g.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of parts) {
      p.vy += 0.35;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      g.save();
      g.globalAlpha = Math.max(0, 1 - el / 2600);
      g.translate(p.x, p.y);
      g.rotate(p.rot);
      g.fillStyle = p.c;
      g.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2);
      g.restore();
    }
    if (el < 2600) requestAnimationFrame(frame);
    else canvas.remove();
  };
  requestAnimationFrame(frame);
}

// ---------------- floating "+XP" ----------------

export function xpPop(text: string, anchor?: HTMLElement | null) {
  if (!useStore.getState().settings.animations) return;
  const el = document.createElement('div');
  el.className = 'xp-pop';
  el.textContent = text;
  const r = anchor?.getBoundingClientRect();
  el.style.left = `${r ? r.left + r.width / 2 : window.innerWidth / 2}px`;
  el.style.top = `${r ? r.top : window.innerHeight / 2}px`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

// ---------------- toasts + watcher ----------------

interface Toast {
  id: number;
  icon: string;
  title: string;
  text: string;
}

/** Watches progress and celebrates achievements, level-ups and the daily goal. */
export function CelebrationWatcher() {
  const s = useStore();
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push = (t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random();
    setToasts((x) => [...x, { ...t, id }].slice(-2));
    setTimeout(() => setToasts((x) => x.filter((y) => y.id !== id)), 4500);
  };

  const xp = totalXp(s);
  const lvl = levelInfo(xp).level;
  const unlocked = unlockedAchievements(s).map((a) => a.id).join(',');
  const goalReached = todayXp(s) >= dailyGoalXp(s);

  useEffect(() => {
    const st = useStore.getState();
    const c = st.celebrated ?? { achievements: [], level: 1, goalDay: '' };
    const now = unlockedAchievements(st);
    const fresh = now.filter((a) => !c.achievements.includes(a.id));
    const levelNow = levelInfo(totalXp(st)).level;
    let party = false;
    // first run on a profile with existing progress: one summary instead of a flood of toasts
    const firstRun = c.achievements.length === 0 && c.level <= 1 && fresh.length >= 2;
    if (firstRun) {
      push({ icon: '🏆', title: `У вас уже ${fresh.length} достижений!`, text: `Уровень ${levelNow}. Все значки — в разделе «Соревнование».` });
      party = true;
    } else {
      for (const a of fresh.slice(0, 2)) {
        push({ icon: a.icon, title: `Достижение: ${a.title}`, text: a.desc });
        party = true;
      }
      if (levelNow > c.level) {
        const li = levelInfo(totalXp(st));
        push({ icon: li.icon, title: `Новый уровень ${levelNow}!`, text: `Ранг: ${li.rank}` });
        party = true;
      }
      if (goalReached && c.goalDay !== today()) {
        push({ icon: '🎯', title: 'Дневная цель выполнена!', text: 'Отличная работа — серия продолжается.' });
        party = true;
      }
    }
    if (fresh.length || levelNow !== c.level || (goalReached && c.goalDay !== today())) {
      st.setCelebrated({
        achievements: now.map((a) => a.id),
        level: levelNow,
        goalDay: goalReached ? today() : c.goalDay,
      });
    }
    if (party) {
      confetti();
      sfx.fanfare();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lvl, unlocked, goalReached]);

  // new wardrobe items unlocked by today's work
  const av = s.avatar;
  const xpBySlot = slotXp(s);
  const counts = av ? SLOTS.map((x) => unlockedCount(x.slot, av.look.gender, xpBySlot[x.slot])).join(',') : '';
  useEffect(() => {
    const st = useStore.getState();
    const a = st.avatar;
    if (!a) return;
    const xp = slotXp(st);
    const seen = a.seen ?? {};
    const fresh: { icon: string; name: string }[] = [];
    const update: Record<string, number> = {};
    for (const x of SLOTS) {
      const n = unlockedCount(x.slot, a.look.gender, xp[x.slot]);
      const before = seen[x.slot];
      if (before === undefined) update[x.slot] = n; // first time: no flood of toasts for past work
      else if (n > before) {
        update[x.slot] = n;
        for (const it of wardrobe(x.slot, a.look.gender).slice(before, n)) fresh.push({ icon: x.icon, name: it.name });
      }
    }
    if (Object.keys(update).length) st.setAvatar({ seen: update });
    if (fresh.length) {
      push({
        icon: '🎁',
        title: fresh.length === 1 ? 'Новая вещь в гардеробе!' : `${fresh.length} новые вещи в гардеробе!`,
        text: `${fresh
          .slice(0, 3)
          .map((f) => `${f.icon} ${f.name}`)
          .join(', ')}${fresh.length > 3 ? '…' : ''} — примерьте в разделе «Мой герой».`,
      });
      confetti(80);
      sfx.fanfare();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counts]);

  return (
    <div className="toasts">
      {toasts.map((t) => (
        <div key={t.id} className="toast" onClick={() => setToasts((x) => x.filter((y) => y.id !== t.id))}>
          <span className="toast-icon">{t.icon}</span>
          <span>
            <strong>{t.title}</strong>
            <span className="tiny muted toast-text">{t.text}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
