import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div className="progress" title={label ?? `${pct}%`}>
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export function ErrorBox({ error }: { error?: string }) {
  if (!error) return null;
  return <div className="error-box">⚠️ {error}</div>;
}

export function AiRequired({ what }: { what: string }) {
  return (
    <div className="info-box">
      🔑 {what} работает через бесплатный ИИ-API. Добавьте ключ в <Link to="/settings">Настройках</Link> (Groq — 1 минута, без карты).
    </div>
  );
}

export function Spinner({ text }: { text?: string }) {
  return (
    <div className="spinner-row">
      <span className="spinner" /> {text ?? 'Думаю…'}
    </div>
  );
}

export function Pill({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'ok' | 'warn' | 'bad' | 'accent' }) {
  return <span className={`pill ${tone}`}>{children}</span>;
}

export function articleClass(a?: string) {
  return a === 'der' ? 'art-der' : a === 'die' ? 'art-die' : a === 'das' ? 'art-das' : '';
}
