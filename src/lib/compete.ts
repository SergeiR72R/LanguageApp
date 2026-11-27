import { slotXp, validEquipped, type AvatarState } from './avatar/catalog';
import { activeProfile, listProfiles, readProfileState, type Profile } from './profiles';
import { useStore, defaultSettings, streak, type AppState } from './store';
import { bestStreak, lastWeekXp, levelInfo, todayXp, totalXp, unlockedAchievements, weekXp } from './gamification';

export interface PlayerStats {
  profile: Profile;
  me: boolean;
  week: number;
  lastWeek: number;
  today: number;
  total: number;
  level: number;
  rank: string;
  rankIcon: string;
  streak: number;
  best: number;
  words: number;
  units: number;
  achievements: number;
  avatar?: AvatarState;
}

type S = Pick<AppState, 'activity' | 'units' | 'cards' | 'examResults' | 'mistakes' | 'writings' | 'conversations' | 'settings' | 'consolidations' | 'avatar'>;

function normalize(raw: Record<string, unknown> | null): S {
  const r = (raw ?? {}) as Partial<S>;
  return {
    activity: r.activity ?? {},
    units: r.units ?? {},
    cards: r.cards ?? {},
    examResults: r.examResults ?? [],
    mistakes: r.mistakes ?? [],
    writings: r.writings ?? [],
    conversations: r.conversations ?? [],
    consolidations: r.consolidations ?? [],
    avatar: r.avatar,
    settings: { ...defaultSettings, ...(r.settings ?? {}) },
  };
}

export function statsFor(s: S, profile: Profile, me: boolean): PlayerStats {
  const total = totalXp(s);
  const li = levelInfo(total);
  return {
    profile,
    me,
    week: weekXp(s),
    lastWeek: lastWeekXp(s),
    today: todayXp(s),
    total,
    level: li.level,
    rank: li.rank,
    rankIcon: li.icon,
    streak: streak(s.activity),
    best: bestStreak(s.activity),
    words: Object.values(s.cards).filter((c) => c.kind === 'vocab').length,
    units: Object.values(s.units).filter((u) => u.completed).length,
    achievements: unlockedAchievements(s).length,
    avatar: s.avatar ? { ...s.avatar, equipped: validEquipped(s.avatar, slotXp(s)) } : undefined,
  };
}

/** Stats of every profile on this device; the active one is read from the live store. */
export function allPlayers(): PlayerStats[] {
  const me = activeProfile();
  return listProfiles().map((p) => (p.id === me.id ? statsFor(useStore.getState(), p, true) : statsFor(normalize(readProfileState(p.id)), p, false)));
}

/** Winner of last week (needs at least 2 players and some XP). */
export function lastWeekChampion(players: PlayerStats[]): PlayerStats | undefined {
  if (players.length < 2) return undefined;
  const top = [...players].sort((a, b) => b.lastWeek - a.lastWeek)[0];
  return top.lastWeek > 0 ? top : undefined;
}
