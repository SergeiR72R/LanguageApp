import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { levels, rektionItems, type RektionEntry } from '../content';
import type { Level } from '../content/types';
import { isMature } from '../lib/srs';
import { useStore } from '../lib/store';
import { rektionIntroQuiz, rektionLabel } from '../lib/rektion';
import { verbQueue, verbsLeftToday } from '../lib/verbs';
import { ExerciseSession } from '../components/ExerciseSession';
import { SpeakButton } from '../components/Speak';
import { Card, Pill, ProgressBar } from '../components/ui';

function VerbCard({ r, big }: { r: RektionEntry; big?: boolean }) {
  return (
    <div className={`verb-card ${big ? 'big' : ''}`}>
      <div className="verb-main">
        <span className="verb-de">{r.verb}</span>
        {r.prep ? (
          <span className="verb-prep">
            {r.prep} <span className={`case case-${r.case.toLowerCase()}`}>+ {r.case}</span>
          </span>
        ) : (
          <span className={`case case-${r.case === 'Akk+Dat' ? 'dat' : r.case.toLowerCase()}`}>{r.case === 'Akk+Dat' ? '+ Dat + Akk' : `+ ${r.case}`}</span>
        )}
        <SpeakButton text={`${r.verb}${r.prep ? ` ${r.prep}` : ''}`} />
      </div>
      <div className="verb-ru">{r.ru}</div>
      <div className="word-example">
        <span className="de">{r.example}</span> <SpeakButton text={r.example} />
        <div className="muted">{r.exampleRu}</div>
      </div>
      {r.noteRu && <div className="verb-note">⚠️ {r.noteRu}</div>}
    </div>
  );
}

export function Verbs() {
  const s = useStore();
  const [batch, setBatch] = useState<RektionEntry[] | null>(null);
  const [phase, setPhase] = useState<'learn' | 'quiz' | 'done'>('learn');
  const [i, setI] = useState(0);
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [q, setQ] = useState('');
  const left = verbsLeftToday(s);
  const learning = rektionItems.filter((r) => s.cards[r.id]);
  const learned = learning.filter((r) => isMature(s.cards[r.id].srs));
  const quiz = useMemo(() => (batch ?? []).map(rektionIntroQuiz), [batch]);

  const start = (n: number) => {
    setBatch(verbQueue(s, n));
    setPhase('learn');
    setI(0);
  };

  if (batch && phase === 'learn') {
    const r = batch[i];
    return (
      <div className="page narrow">
        <Card>
          <div className="session-head">
            <strong>Новые глаголы</strong>
            <span className="muted">
              {i + 1} / {batch.length} · {r.level}
            </span>
          </div>
          <ProgressBar value={i / batch.length} />
          <VerbCard r={r} big />
          <div className="row between learn-nav">
            <button className="btn ghost" disabled={i === 0} onClick={() => setI(i - 1)}>
              ← Назад
            </button>
            {i < batch.length - 1 ? (
              <button className="btn primary" onClick={() => setI(i + 1)}>
                Дальше →
              </button>
            ) : (
              <button className="btn primary" onClick={() => setPhase('quiz')}>
                Проверить себя →
              </button>
            )}
          </div>
          <p className="tiny muted">Проговаривайте вслух целиком: «warten auf den Bus», «sich freuen auf das Wochenende» — так управление запоминается фразой.</p>
        </Card>
      </div>
    );
  }

  if (batch && phase === 'quiz')
    return (
      <div className="page narrow">
        <Card>
          <ExerciseSession
            title="Проверка: управление"
            exercises={quiz}
            onFinish={(res) => {
              s.addCards(
                batch.map((r) => ({ id: r.id, kind: 'rektion' as const, rektionId: r.id })),
                res.outcomes.map((o) => (o.correct ? 1 : 0)),
              );
              s.logActivity({ newVerbs: batch.length, newWords: batch.length });
            }}
            renderSummary={(res) => (
              <>
                <h3>Верно {Math.round(res.score * 100)}% — глаголы добавлены в повторение</h3>
                <p className="muted">Дальше они будут возвращаться в «Повторении» в разных заданиях: предлог, падеж, вставка в предложение, перевод, Worauf/darauf.</p>
                <div className="row">
                  <button className="btn" onClick={() => setBatch(null)}>
                    К списку
                  </button>
                  <Link className="btn primary" to="/">
                    К плану
                  </Link>
                </div>
              </>
            )}
          />
        </Card>
      </div>
    );

  const list = rektionItems.filter(
    (r) =>
      (level === 'all' || r.level === level) &&
      (!q.trim() || `${r.verb} ${r.prep ?? ''} ${r.ru}`.toLowerCase().includes(q.trim().toLowerCase())),
  );

  return (
    <div className="page">
      <h1>🔗 Управление глаголов</h1>
      <Card className="highlight">
        <p>
          Глаголы с предлогами и падежами нужно заучивать вместе: <strong>warten auf + Akk</strong>, <strong>teilnehmen an + Dat</strong>,{' '}
          <strong>helfen + Dat</strong>. Каждый день — несколько новых глаголов, дальше интервальное повторение в разных форматах.
        </p>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-num">{learning.length}</div>
            <div className="stat-cap">изучается</div>
          </div>
          <div className="stat">
            <div className="stat-num">{learned.length}</div>
            <div className="stat-cap">закреплено</div>
          </div>
          <div className="stat">
            <div className="stat-num">{rektionItems.length}</div>
            <div className="stat-cap">всего в справочнике</div>
          </div>
        </div>
        {verbQueue(s, 1).length === 0 ? (
          <p className="ok-text">Все глаголы вашего уровня уже в изучении 🎉</p>
        ) : left > 0 ? (
          <button className="btn primary big" onClick={() => start(left)}>
            Учить {Math.min(left, verbQueue(s, left).length)} новых глаголов
          </button>
        ) : (
          <>
            <p className="ok-text">Норма на сегодня выполнена ✅</p>
            <button className="btn" onClick={() => start(5)}>
              Ещё 5 глаголов
            </button>
          </>
        )}
        <p className="tiny muted">
          Норма: {s.settings.newVerbsPerDay} в день (меняется в <Link to="/settings">настройках</Link>).
        </p>
      </Card>

      <Card>
        <div className="row wrap between">
          <div className="seg">
            {(['all', ...levels] as const).map((l) => (
              <button key={l} className={`seg-btn ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}>
                {l === 'all' ? 'Все' : l}
              </button>
            ))}
          </div>
          <input className="text-input" style={{ maxWidth: 260 }} placeholder="Поиск: warten, ждать…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="verb-table">
          {list.map((r) => {
            const c = s.cards[r.id];
            return (
              <details key={r.id} className="verb-row">
                <summary>
                  <span className="verb-label de">{rektionLabel(r)}</span>
                  <span className="muted small verb-row-ru">{r.ru}</span>
                  {c ? <Pill tone={isMature(c.srs) ? 'ok' : 'accent'}>{isMature(c.srs) ? 'закреплено' : 'учу'}</Pill> : <Pill>{r.level}</Pill>}
                </summary>
                <VerbCard r={r} />
              </details>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
