import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Exercise } from '../content/types';
import { getUnit } from '../content';
import { currentUnitId, useStore } from '../lib/store';
import { isLlmConfigured } from '../lib/ai/providers';
import { generateMistakeDrill } from '../lib/ai/prompts';
import { ExerciseSession } from '../components/ExerciseSession';
import { AiRequired, Card, ErrorBox, Spinner } from '../components/ui';

export function Drill() {
  const s = useStore();
  const [ex, setEx] = useState<Exercise[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const open = s.mistakes.filter((m) => !m.resolved && m.category !== 'Aussprache');
  const cur = currentUnitId(s);
  const level = (cur ? getUnit(cur)?.level : undefined) ?? 'B1';

  const load = async () => {
    setBusy(true);
    setErr('');
    try {
      // most frequent categories first, most recent examples
      const counts: Record<string, number> = {};
      open.forEach((m) => (counts[m.category] = (counts[m.category] ?? 0) + 1));
      const sorted = [...open].sort((a, b) => counts[b.category] - counts[a.category]).slice(0, 20);
      const r = await generateMistakeDrill(sorted, level);
      if (!r.length) throw new Error('ИИ не вернул упражнений, попробуйте ещё раз.');
      setEx(r);
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (!isLlmConfigured(s.settings))
    return (
      <div className="page narrow">
        <AiRequired what="Работа над ошибками" />
      </div>
    );

  return (
    <div className="page narrow">
      <h1>🎯 Работа над ошибками</h1>
      {!ex ? (
        <Card>
          <p>
            ИИ проанализирует ваши частые ошибки ({open.length} в работе) и составит 10 упражнений именно на эти темы.
          </p>
          {open.length === 0 ? (
            <p className="muted">
              Ошибок пока нет. <Link to="/">К плану</Link>
            </p>
          ) : (
            <button className="btn primary big" disabled={busy} onClick={load}>
              Составить упражнения
            </button>
          )}
          {busy && <Spinner text="Составляю упражнения…" />}
          <ErrorBox error={err} />
        </Card>
      ) : (
        <Card>
          <ExerciseSession
            title="Упражнения на ваши ошибки"
            exercises={ex}
            onFinish={() => s.logActivity({ drills: 1 })}
            renderSummary={(r) => (
              <>
                <h3>Результат: {Math.round(r.score * 100)}%</h3>
                <div className="row">
                  <button className="btn" onClick={() => setEx(null)}>
                    Новый набор
                  </button>
                  <Link className="btn primary" to="/">
                    К плану
                  </Link>
                </div>
              </>
            )}
          />
        </Card>
      )}
    </div>
  );
}
