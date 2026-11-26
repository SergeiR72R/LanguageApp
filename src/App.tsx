import { HashRouter, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Component, useEffect, useState, type ReactNode } from 'react';
import { levelInfo, totalXp } from './lib/gamification';
import { CelebrationWatcher } from './components/Celebrate';
import { Compete } from './pages/Compete';
import { isSyncEnabled, startAutoSync } from './lib/sync';
import { Login, SKIP_LOGIN_KEY } from './pages/Login';

startAutoSync();
import { dueCards, streak, useStore } from './lib/store';
import { Today } from './pages/Today';
import { ProfileMenu } from './components/ProfileMenu';
import { Welcome } from './pages/Welcome';
import { Placement } from './pages/Placement';
import { Course } from './pages/Course';
import { UnitPage } from './pages/unit/UnitPage';
import { Review } from './pages/Review';
import { Conversation } from './pages/Conversation';
import { Mistakes } from './pages/Mistakes';
import { Progress } from './pages/Progress';
import { Settings } from './pages/Settings';
import { Consolidation } from './pages/Consolidation';
import { Drill } from './pages/Drill';
import { Words } from './pages/Words';
import { Verbs } from './pages/Verbs';
import { Exams, ExamRunner } from './pages/Exams';

const LINKS = [
  { to: '/', label: 'Сегодня', icon: '☀️', end: true, primary: true },
  { to: '/course', label: 'Курс', icon: '🗺️', primary: true },
  { to: '/review', label: 'Повторение', icon: '🔁', primary: true, due: true },
  { to: '/words', label: 'Слова дня', icon: '🆕' },
  { to: '/verbs', label: 'Глаголы', icon: '🔗' },
  { to: '/speak', label: 'Разговор', icon: '🗣️', primary: true },
  { to: '/exams', label: 'Экзамен', icon: '🎓' },
  { to: '/compete', label: 'Соревнование', icon: '🏆' },
  { to: '/mistakes', label: 'Ошибки', icon: '📕' },
  { to: '/progress', label: 'Прогресс', icon: '📈' },
  { to: '/settings', label: 'Настройки', icon: '⚙️' },
];

function Nav() {
  const due = useStore((s) => dueCards(s).length);
  const st = useStore((s) => streak(s.activity));
  const xp = useStore((s) => totalXp(s));
  const li = levelInfo(xp);
  const [more, setMore] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setMore(false), [pathname]);
  const secondaryActive = LINKS.some((l) => !l.primary && l.to !== '/' && pathname.startsWith(l.to));
  if (pathname === '/login') return null;

  const link = (l: (typeof LINKS)[number]) => (
    <NavLink
      key={l.to}
      to={l.to}
      end={l.end}
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${l.primary ? 'primary' : 'secondary'}`}
    >
      <span className="nav-icon">{l.icon}</span>
      <span className="nav-label">{l.label}</span>
      {l.due && due > 0 && <span className="badge">{due > 99 ? '99+' : due}</span>}
    </NavLink>
  );

  return (
    <>
      {/* phone: compact top bar */}
      <header className="topbar">
        <span className="flag" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <ProfileMenu compact />
        <span className="topbar-stats">
          <span title="Серия дней">🔥 {st}</span>
          <span title={`Уровень ${li.level} · ${li.rank}`}>
            {li.icon} {li.level}
          </span>
        </span>
      </header>
      <nav className="nav">
        <div className="brand">
          <span className="flag" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span>Deutsch&nbsp;A1–C1</span>
          {st > 0 && (
            <span className="streak" title="Дней подряд">
              🔥 {st}
            </span>
          )}
        </div>
        <div className="nav-profile">
          <ProfileMenu />
          <div className="nav-level" title={`${li.rank}: ${li.into}/${li.span} XP до следующего уровня`}>
            <span>
              {li.icon} Ур. {li.level} · {li.rank}
            </span>
            <div className="mini-bar">
              <div style={{ width: `${Math.round((li.into / li.span) * 100)}%` }} />
            </div>
          </div>
        </div>
        <div className="nav-links">
          {LINKS.map(link)}
          <button type="button" className={`nav-link more-btn ${more || secondaryActive ? 'active' : ''}`} onClick={() => setMore(!more)}>
            <span className="nav-icon">☰</span>
            <span className="nav-label">Ещё</span>
          </button>
        </div>
      </nav>
      {more && (
        <div className="sheet-backdrop" onClick={() => setMore(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-grip" />
            <div className="sheet-grid">
              {LINKS.filter((l) => !l.primary).map((l) => (
                <NavLink key={l.to} to={l.to} className="sheet-item">
                  <span className="sheet-icon">{l.icon}</span>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AnimationsClass() {
  const on = useStore((s) => s.settings.animations);
  useEffect(() => {
    document.body.classList.toggle('no-anim', !on);
  }, [on]);
  return null;
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

class ErrorBoundary extends Component<{ children: ReactNode }, { error?: Error }> {
  state: { error?: Error } = {};
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error)
      return (
        <div className="page narrow">
          <div className="error-box">
            Что-то пошло не так: {this.state.error.message}
            <div className="row">
              <button className="btn" onClick={() => this.setState({ error: undefined })}>
                Попробовать снова
              </button>
              <a className="btn" href="#/">
                На главную
              </a>
            </div>
          </div>
        </div>
      );
    return this.props.children;
  }
}

/** A fresh device (nothing started yet) always lands on the welcome screen, where sync can be connected. */
function FreshGuard({ children }: { children: ReactNode }) {
  const started = useStore((s) => !!s.startUnitId);
  const { pathname } = useLocation();
  let skipped = false;
  try {
    skipped = localStorage.getItem(SKIP_LOGIN_KEY) === '1';
  } catch {
    /* ignore */
  }
  // new device/browser: ask for the sync password first
  if (!started && !isSyncEnabled() && !skipped && pathname !== '/login') return <Navigate to="/login" replace />;
  const free = ['/welcome', '/placement', '/settings', '/login'].some((p) => pathname.startsWith(p));
  if (!started && !free) return <Navigate to="/welcome" replace />;
  return <>{children}</>;
}

function Home() {
  const started = useStore((s) => !!s.startUnitId);
  return started ? <Today /> : <Navigate to="/welcome" replace />;
}

export function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollTop />
      <AnimationsClass />
      <div className="layout">
        <Nav />
        <CelebrationWatcher />
        <main className="main">
          <ErrorBoundary>
          <FreshGuard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/course" element={<Course />} />
            <Route path="/unit/:id" element={<UnitPage />} />
            <Route path="/unit/:id/:step" element={<UnitPage />} />
            <Route path="/review" element={<Review />} />
            <Route path="/speak" element={<Conversation />} />
            <Route path="/mistakes" element={<Mistakes />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/consolidation" element={<Consolidation />} />
            <Route path="/drill" element={<Drill />} />
            <Route path="/words" element={<Words />} />
            <Route path="/verbs" element={<Verbs />} />
            <Route path="/compete" element={<Compete />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/exam/:id" element={<ExamRunner />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </FreshGuard>
          </ErrorBoundary>
        </main>
      </div>
    </HashRouter>
  );
}
