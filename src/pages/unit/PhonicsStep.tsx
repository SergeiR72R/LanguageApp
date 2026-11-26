import { useMemo, useState } from 'react';
import type { Exercise, PhonicsItem, Unit } from '../../content/types';
import { useStore } from '../../lib/store';
import { shuffle } from '../../lib/grading';
import { speak } from '../../lib/ai/tts';
import { ExerciseSession } from '../../components/ExerciseSession';
import { SpeakButton } from '../../components/Speak';
import { Markdown } from '../../components/Markdown';
import { Card } from '../../components/ui';

/** Letters and sounds are spoken a little slower than normal speech. */
const SLOW = 0.8;
const PASS = 0.7;

/**
 * Self-check built from the lesson's example words:
 * - hear a word → pick how it is written (other options: words with similar sounds from the same group)
 * - see a word → pick how it is pronounced (Cyrillic transcription)
 */
export function phonicsQuiz(unit: Unit, seed: number): Exercise[] {
  const groups = unit.phonics?.groups ?? [];
  const all = groups.flatMap((g) => g.items.flatMap((it) => it.examples.map((e) => ({ ...e, group: g.titleRu }))));
  const out: Exercise[] = [];
  let k = 0;
  for (const g of groups) {
    for (const it of g.items) {
      const ex = it.examples[(seed + k) % it.examples.length];
      if (!ex) continue;
      const sameGroup = shuffle(
        all.filter((x) => x.group === g.titleRu && x.de !== ex.de),
        seed + k,
      );
      const others = [...sameGroup, ...shuffle(all.filter((x) => x.group !== g.titleRu && x.de !== ex.de), seed + k + 1)];
      const distract = [...new Map(others.map((x) => [x.de, x])).values()].slice(0, 3);
      if (distract.length < 2) continue;
      const opts = shuffle([ex, ...distract], seed + k + 2);
      if (k % 2 === 0) {
        out.push({
          type: 'choice',
          audio: ex.de,
          prompt: 'Послушайте. Какое слово вы слышите?',
          options: opts.map((o) => o.de),
          answer: opts.indexOf(ex),
          explanationRu: `«${ex.de}» читается [${ex.pronRu}] — ${ex.ru}. Буква/сочетание: ${it.grapheme} — ${it.soundRu}.`,
        });
      } else {
        out.push({
          type: 'choice',
          prompt: `Как читается слово «${ex.de}»?`,
          options: opts.map((o) => o.pronRu),
          answer: opts.indexOf(ex),
          explanationRu: `${it.grapheme}: ${it.soundRu}. «${ex.de}» [${ex.pronRu}] — ${ex.ru}.`,
        });
      }
      k++;
    }
  }
  // remove accidental duplicate options (two words with the same transcription)
  return shuffle(
    out.filter((e) => e.type !== 'choice' || new Set(e.options).size === e.options.length),
    seed + 99,
  ).slice(0, 20);
}

function Tile({ it, open, onOpen }: { it: PhonicsItem; open: boolean; onOpen: () => void }) {
  return (
    <div className={`phon-tile ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="phon-head"
        onClick={() => {
          onOpen();
          void speak(it.say ?? it.examples[0]?.de ?? it.grapheme, { rate: SLOW }).catch(() => {});
        }}
      >
        <span className="phon-grapheme de">{it.grapheme}</span>
        <span className="phon-sound">{it.soundRu}</span>
      </button>
      {open && (
        <div className="phon-body">
          {it.noteRu && <div className="tiny muted">{it.noteRu}</div>}
          {it.examples.map((e, i) => (
            <div key={i} className="phon-ex">
              <SpeakButton text={e.de} rate={SLOW} />
              <strong className="de">{e.de}</strong> <span className="pron">[{e.pronRu}]</span> <span className="muted">— {e.ru}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function PhonicsStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const lesson = unit.phonics;
  const done = useStore((s) => !!s.units[unit.id]?.steps.phonics?.done);
  const completeStep = useStore((s) => s.completeStep);
  const [opened, setOpened] = useState<Set<string>>(new Set());
  const [quiz, setQuiz] = useState(false);
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e6));
  const exercises = useMemo(() => phonicsQuiz(unit, seed), [unit, seed]);
  if (!lesson) return <p className="muted">В этом юните нет урока по буквам.</p>;
  const total = lesson.groups.reduce((a, g) => a + g.items.length, 0);

  if (quiz)
    return (
      <Card>
        <ExerciseSession
          title="Проверьте себя: слушаем и читаем"
          exercises={exercises}
          onFinish={(r) => {
            if (r.score >= PASS) completeStep(unit.id, 'phonics', r.score);
          }}
          renderSummary={(r, restart) => (
            <div className="stack">
              <h3>
                {r.score >= PASS ? '🎉 Отлично!' : '💪 Ещё немного'} {Math.round(r.score * 100)}%
              </h3>
              <p>
                {r.score >= PASS
                  ? 'Шаг засчитан. Слова из этого урока будут встречаться дальше — читайте их вслух.'
                  : `Нужно ${Math.round(PASS * 100)}%. Послушайте ещё раз буквы, где были ошибки, и попробуйте снова.`}
              </p>
              <div className="row wrap">
                <button className="btn" onClick={() => setQuiz(false)}>
                  ← К буквам
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setSeed(seed + 7);
                    restart();
                  }}
                >
                  Ещё раз (другие слова)
                </button>
                {r.score >= PASS && (
                  <button className="btn primary" onClick={onNext}>
                    Следующий шаг →
                  </button>
                )}
              </div>
            </div>
          )}
        />
      </Card>
    );

  return (
    <div className="stack">
      <Card>
        <h2>🔤 {unit.grammar.topicRu}</h2>
        <Markdown text={lesson.introRu} />
        <p className="tiny muted">
          Нажмите на букву — услышите звук и примеры. Нажмите 🔊 у слова, чтобы послушать ещё раз. Прочитайте каждое слово вслух
          сами. В квадратных скобках — примерное звучание русскими буквами, ЗАГЛАВНЫМИ — ударный слог.
        </p>
      </Card>
      {lesson.groups.map((g, gi) => (
        <Card key={gi}>
          <h3>{g.titleRu}</h3>
          <div className="phon-grid">
            {g.items.map((it) => {
              const key = `${gi}:${it.grapheme}`;
              return <Tile key={key} it={it} open={opened.has(key)} onOpen={() => setOpened(new Set([...opened, key]))} />;
            })}
          </div>
        </Card>
      ))}
      <Card className="highlight">
        <p>
          Открыто: {opened.size} из {total}. {done ? '✅ Шаг пройден — можно повторять в любой момент.' : 'Когда прослушаете всё — проверьте себя.'}
        </p>
        <div className="row wrap">
          <button className={`btn ${opened.size >= total || done ? 'primary' : ''}`} onClick={() => setQuiz(true)}>
            Проверить себя ({exercises.length} заданий)
          </button>
          {done && (
            <button className="btn" onClick={onNext}>
              Следующий шаг →
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}
