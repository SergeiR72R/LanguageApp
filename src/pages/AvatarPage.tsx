import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '../components/Avatar';
import { Card, ProgressBar } from '../components/ui';
import {
  BEARDS,
  BROWS,
  BUILDS,
  EYE_COLORS,
  EYES,
  HAIR_COLORS,
  HAIR_STYLES,
  LIP_COLORS,
  MOUTHS,
  NOSES,
  RARITY,
  SKIN,
  SLOTS,
  XP_RULE,
  defaultLook,
  slotXp,
  threshold,
  unlockedCount,
  wardrobe,
  starterEquipped,
  validEquipped,
  type AvatarState,
  type Gender,
  type Look,
  type Slot,
} from '../lib/avatar/catalog';
import { useStore } from '../lib/store';
import { sfx } from '../lib/sound';

function Options<T extends string>({ value, options, onPick, render }: { value: T; options: { id: T; ru: string }[]; onPick: (v: T) => void; render?: (id: T) => React.ReactNode }) {
  return (
    <div className="av-options">
      {options.map((o) => (
        <button key={o.id} type="button" className={`av-option ${value === o.id ? 'active' : ''}`} onClick={() => onPick(o.id)} title={o.ru}>
          {render?.(o.id)}
          <span>{o.ru}</span>
        </button>
      ))}
    </div>
  );
}

function Swatches({ value, colors, onPick }: { value: string; colors: string[]; onPick: (c: string) => void }) {
  return (
    <div className="av-swatches">
      {colors.map((c) => (
        <button key={c} type="button" className={`av-swatch ${value === c ? 'active' : ''}`} style={{ background: c }} onClick={() => onPick(c)} aria-label={c} />
      ))}
    </div>
  );
}

function LookEditor({ look, equipped, onChange }: { look: Look; equipped: AvatarState['equipped']; onChange: (p: Partial<Look>) => void }) {
  const face = (p: Partial<Look>) => <Avatar look={{ ...look, ...p }} equipped={{}} view="face" size={54} />;
  return (
    <div className="stack">
      <section>
        <h4>Пол</h4>
        <Options<Gender>
          value={look.gender}
          options={[
            { id: 'f', ru: 'Женский' },
            { id: 'm', ru: 'Мужской' },
          ]}
          onPick={(g) => onChange({ gender: g })}
        />
      </section>
      <section>
        <h4>Телосложение</h4>
        <Options value={look.build} options={BUILDS} onPick={(b) => onChange({ build: b })} render={(b) => <Avatar look={{ ...look, build: b }} equipped={equipped} size={44} />} />
      </section>
      <section>
        <h4>Цвет кожи</h4>
        <Swatches value={look.skin} colors={SKIN} onPick={(c) => onChange({ skin: c })} />
      </section>
      <section>
        <h4>Причёска</h4>
        <Options value={look.hair} options={HAIR_STYLES} onPick={(h) => onChange({ hair: h })} render={(h) => face({ hair: h })} />
      </section>
      <section>
        <h4>Цвет волос</h4>
        <Swatches value={look.hairColor} colors={HAIR_COLORS.map((c) => c.id)} onPick={(c) => onChange({ hairColor: c })} />
      </section>
      <section>
        <h4>Глаза</h4>
        <Options value={look.eyes} options={EYES} onPick={(v) => onChange({ eyes: v })} render={(v) => face({ eyes: v })} />
        <Swatches value={look.eyeColor} colors={EYE_COLORS} onPick={(c) => onChange({ eyeColor: c })} />
      </section>
      <section>
        <h4>Брови</h4>
        <Options value={look.brows} options={BROWS} onPick={(v) => onChange({ brows: v })} render={(v) => face({ brows: v })} />
      </section>
      <section>
        <h4>Нос</h4>
        <Options value={look.nose} options={NOSES} onPick={(v) => onChange({ nose: v })} render={(v) => face({ nose: v })} />
      </section>
      <section>
        <h4>Рот и губы</h4>
        <Options value={look.mouth} options={MOUTHS} onPick={(v) => onChange({ mouth: v })} render={(v) => face({ mouth: v })} />
        <Options value={look.lips} options={LIP_COLORS} onPick={(v) => onChange({ lips: v })} />
      </section>
      <section>
        <h4>Борода и усы</h4>
        <Options value={look.beard} options={BEARDS} onPick={(v) => onChange({ beard: v })} render={(v) => face({ beard: v })} />
      </section>
      <section className="row wrap">
        <label className="check">
          <input type="checkbox" checked={look.freckles} onChange={(e) => onChange({ freckles: e.target.checked })} /> Веснушки
        </label>
        <label className="check">
          <input type="checkbox" checked={look.blush} onChange={(e) => onChange({ blush: e.target.checked })} /> Румянец
        </label>
      </section>
    </div>
  );
}

function Wardrobe({ avatar, xp }: { avatar: AvatarState; xp: Record<Slot, number> }) {
  const setAvatar = useStore((s) => s.setAvatar);
  const [slot, setSlot] = useState<Slot>('top');
  const info = SLOTS.find((s) => s.slot === slot)!;
  const list = wardrobe(slot, avatar.look.gender);
  const open = unlockedCount(slot, avatar.look.gender, xp[slot]);
  const next = open < list.length ? threshold(open) : undefined;
  const prev = threshold(Math.max(0, open - 1));
  const equip = (id: string) => {
    const cur = avatar.equipped[slot];
    setAvatar({ equipped: { [slot]: cur === id && info.optional ? null : id } });
    sfx.correct();
  };
  return (
    <div className="stack">
      <div className="av-slot-tabs">
        {SLOTS.map((s) => {
          const n = unlockedCount(s.slot, avatar.look.gender, xp[s.slot]);
          return (
            <button key={s.slot} type="button" className={`av-slot-tab ${slot === s.slot ? 'active' : ''}`} onClick={() => setSlot(s.slot)} title={s.ru}>
              <span className="av-slot-icon">{s.icon}</span>
              <span className="tiny">
                {n}/{wardrobe(s.slot, avatar.look.gender).length}
              </span>
            </button>
          );
        })}
      </div>
      <div className="av-slot-head">
        <h3>
          {info.icon} {info.ru}
        </h3>
        <p className="small">
          Опыт за задание{' '}
          <Link to={info.link}>
            {info.taskIcon} {info.task}
          </Link>
          : <strong>{xp[slot]} XP</strong> <span className="muted">({XP_RULE[slot]})</span>
        </p>
        {next !== undefined ? (
          <>
            <ProgressBar value={(xp[slot] - prev) / Math.max(1, next - prev)} />
            <p className="tiny muted">
              Следующая вещь через {next - xp[slot]} XP · открыто {open} из {list.length}
            </p>
          </>
        ) : (
          <p className="tiny">🏆 Открыто всё в этой категории!</p>
        )}
      </div>
      <div className="av-grid">
        {list.map((it, k) => {
          const unlocked = k < open;
          const on = avatar.equipped[slot] === it.id;
          return (
            <button
              key={it.id}
              type="button"
              className={`av-item ${RARITY[it.rarity].cls} ${unlocked ? '' : 'locked'} ${on ? 'on' : ''}`}
              disabled={!unlocked}
              onClick={() => equip(it.id)}
              title={unlocked ? it.name : `${it.name} — откроется на ${threshold(k)} XP`}
            >
              <Avatar look={avatar.look} equipped={{ ...avatar.equipped, [slot]: it.id }} view={slot} className="av-thumb" />
              <span className="av-item-name">{it.name}</span>
              <span className="av-item-meta">{unlocked ? (on ? '✓ надето' : RARITY[it.rarity].ru) : `🔒 ${threshold(k)} XP`}</span>
            </button>
          );
        })}
      </div>
      {info.optional && avatar.equipped[slot] && (
        <button className="btn ghost small" onClick={() => setAvatar({ equipped: { [slot]: null } })}>
          Снять
        </button>
      )}
    </div>
  );
}

export function AvatarPage() {
  const s = useStore();
  const avatar = s.avatar;
  const xp = useMemo(() => slotXp(s), [s.activity, s.consolidations, s.examResults]); // eslint-disable-line react-hooks/exhaustive-deps
  const [tab, setTab] = useState<'wardrobe' | 'look'>(avatar ? 'wardrobe' : 'look');

  if (!avatar) {
    return (
      <div className="page narrow">
        <h1>🧑‍🎨 Ваш герой</h1>
        <Card className="highlight">
          <p>
            Создайте своего персонажа. За ежедневные задания он получает одежду: каждое задание пополняет свою категорию
            гардероба, а при заполнении шкалы опыта открывается новая вещь. Учтутся и все прошлые занятия.
          </p>
          <div className="row wrap av-start">
            {(['f', 'm'] as const).map((g) => (
              <button
                key={g}
                className="btn big"
                onClick={() => {
                  const look = defaultLook(g);
                  s.setAvatar({ look, equipped: starterEquipped(g) });
                }}
              >
                <Avatar look={defaultLook(g)} equipped={starterEquipped(g)} size={90} />
                <span>{g === 'f' ? 'Женский персонаж' : 'Мужской персонаж'}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  const equipped = validEquipped(avatar, xp);
  const total = SLOTS.reduce((a, x) => a + unlockedCount(x.slot, avatar.look.gender, xp[x.slot]), 0);
  const all = SLOTS.reduce((a, x) => a + wardrobe(x.slot, avatar.look.gender).length, 0);

  return (
    <div className="page av-page">
      <div className="av-preview">
        <Avatar look={avatar.look} equipped={equipped} className="av-big" />
        <div className="tiny muted center">
          Гардероб: {total} из {all} вещей
        </div>
      </div>
      <div className="av-panel">
        <div className="seg">
          <button className={`seg-btn ${tab === 'wardrobe' ? 'active' : ''}`} onClick={() => setTab('wardrobe')}>
            👕 Гардероб
          </button>
          <button className={`seg-btn ${tab === 'look' ? 'active' : ''}`} onClick={() => setTab('look')}>
            🎨 Внешность
          </button>
        </div>
        {tab === 'wardrobe' ? (
          <Wardrobe avatar={{ ...avatar, equipped }} xp={xp} />
        ) : (
          <LookEditor
            look={avatar.look}
            equipped={equipped}
            onChange={(p) => {
              const look = { ...avatar.look, ...p };
              const next = { ...avatar, look };
              const valid = validEquipped(next, xp);
              s.setAvatar({ look, equipped: Object.fromEntries(SLOTS.map((x) => [x.slot, valid[x.slot] ?? null])) });
            }}
          />
        )}
      </div>
    </div>
  );
}
