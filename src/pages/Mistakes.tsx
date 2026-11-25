import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { MISTAKE_CATEGORIES, useStore } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { SpeakButton } from '../components/Speak';
import { Card, ProgressBar } from '../components/ui';

export function Mistakes() {
  const s = useStore();
  const [cat, setCat] = useState<string>('');
  const [showResolved, setShowResolved] = useState(false);
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    s.mistakes.filter((m) => !m.resolved).forEach((m) => (c[m.category] = (c[m.category] ?? 0) + 1));
    return c;
  }, [s.mistakes]);
  const max = Math.max(1, ...Object.values(counts));
  const list = s.mistakes.filter((m) => (showResolved || !m.resolved) && (!cat || m.category === cat));

  return (
    <div className="page">
      <h1>📕 Тетрадь ошибок</h1>
      <p className="muted">
        Сюда автоматически попадают ошибки из письма и разговора. Каждая ошибка становится карточкой в повторении: вы будете
        исправлять её, пока не перестанете ошибаться (тогда она помечается как исправленная).
      </p>
      <div className="grid-2">
        <Card>
          <h3>Слабые места</h3>
          {Object.keys(counts).length === 0 && <p className="muted">Пока нет ошибок. Напишите текст или поговорите с ИИ.</p>}
          {MISTAKE_CATEGORIES.filter((c) => counts[c]).sort((a, b) => counts[b] - counts[a]).map((c) => (
            <button key={c} className={`stat-row as-button ${cat === c ? 'active' : ''}`} onClick={() => setCat(cat === c ? '' : c)}>
              <span className="stat-label">{c}</span>
              <ProgressBar value={counts[c] / max} />
              <span className="stat-val">{counts[c]}</span>
            </button>
          ))}
          {isLlmConfigured(s.settings) && Object.keys(counts).length > 0 && (
            <Link className="btn primary" to="/drill">
              🎯 Упражнения на мои ошибки
            </Link>
          )}
        </Card>
        <Card>
          <div className="row between wrap">
            <h3>{cat || 'Все ошибки'}</h3>
            <label className="check tiny">
              <input type="checkbox" checked={showResolved} onChange={(e) => setShowResolved(e.target.checked)} /> показать исправленные
            </label>
          </div>
          <ul className="error-list">
            {list.slice(0, 200).map((m) => (
              <li key={m.id} className={m.resolved ? 'resolved' : ''}>
                <div>
                  <span className="strike">{m.original}</span> → <strong className="ok-text de">{m.correction}</strong>{' '}
                  <SpeakButton text={m.correction} /> <span className="pill">{m.category}</span>
                </div>
                {m.ruleRu && <div className="err-rule small">{m.ruleRu}</div>}
                <div className="muted">{m.explanationRu}</div>
                <div className="tiny muted">
                  {m.date} · {m.source === 'writing' ? 'письмо' : m.source === 'speaking' ? 'разговор' : 'упражнение'}
                  {' · '}
                  <button className="link" onClick={() => s.updateMistake(m.id, { resolved: !m.resolved })}>
                    {m.resolved ? 'вернуть в работу' : 'отметить исправленной'}
                  </button>
                  {' · '}
                  <button className="link" onClick={() => s.deleteMistake(m.id)}>
                    удалить (ложная ошибка)
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
