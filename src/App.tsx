import { HashRouter, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Component, useEffect, type ReactNode } from 'react';
import { dueCards, streak, useStore } from './lib/store';
import { Today } from './pages/Today';
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

function Nav() {
  const due = useStore((s) => dueCards(s).length);
  const st = useStore((s) => streak(s.activity));
  const links = [
    { to: '/', label: 'Сегодня', icon: '☀️', end: true },
    { to: '/course', label: 'Курс', icon: '🗺️' },
    { to: '/review', label: 'Повторение', icon: '🔁', badge: due },
    { to: '/speak', label: 'Разговор', icon: '🗣️' },
    { to: '/mistakes', label: 'Ошибки', icon: '📕' },
    { to: '/progress', label: 'Прогресс', icon: '📈' },
    { to: '/settings', label: 'Настройки', icon: '⚙️' },
  ];
  return (
    <nav className="nav">
      <div className="brand">
        <span className="flag" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span>Deutsch&nbsp;B1–C1</span>
        {st > 0 && <span className="streak" title="Дней подряд">🔥 {st}</span>}
      </div>
      <div className="nav-links">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">{l.icon}</span>
            <span className="nav-label">{l.label}</span>
            {!!l.badge && <span className="badge">{l.badge > 99 ? '99+' : l.badge}</span>}
          </NavLink>
        ))}
      </div>
    </nav>
  );
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

function Home() {
  const started = useStore((s) => !!s.startUnitId);
  return started ? <Today /> : <Navigate to="/welcome" replace />;
}

export function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollTop />
      <div className="layout">
        <Nav />
        <main className="main">
          <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </HashRouter>
  );
}
