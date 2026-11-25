import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { activeProfile, createProfile, listProfiles, switchProfile } from '../lib/profiles';
import { useStore } from '../lib/store';

export function newProfilePrompt() {
  const name = window.prompt('Имя нового ученика (например, «Анна»):');
  if (name === null) return;
  // copy API keys, voices and daily settings – progress starts from scratch
  createProfile(name, useStore.getState().settings);
}

/** "Who is learning?" switcher shown in the navigation and on the Today page. */
export function ProfileMenu({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const me = activeProfile();
  const all = listProfiles();

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  return (
    <div className="profile-menu" ref={ref}>
      <button type="button" className={`profile-btn ${compact ? 'compact' : ''}`} onClick={() => setOpen(!open)} title="Сменить ученика">
        <span className="profile-emoji">{me.emoji}</span>
        <span className="profile-name">{me.name}</span>
        <span className="muted">▾</span>
      </button>
      {open && (
        <div className="profile-dropdown">
          <div className="tiny muted dropdown-cap">Кто занимается?</div>
          {all.map((p) => (
            <button key={p.id} type="button" className={`profile-item ${p.id === me.id ? 'active' : ''}`} onClick={() => switchProfile(p.id)}>
              <span className="profile-emoji">{p.emoji}</span> {p.name} {p.id === me.id && <span className="muted">✓</span>}
            </button>
          ))}
          <button type="button" className="profile-item" onClick={newProfilePrompt}>
            ➕ Добавить ученика
          </button>
          <Link className="profile-item" to="/settings" onClick={() => setOpen(false)}>
            ⚙️ Управление профилями
          </Link>
        </div>
      )}
    </div>
  );
}
