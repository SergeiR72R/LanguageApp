import { useEffect, useMemo, useRef, useState } from 'react';
import type { Exercise } from '../content/types';
import { checkAnswer, normalize, shuffle, type CheckResult } from '../lib/grading';
import { fillGaps } from '../lib/exerciseCheck';
import { useStore } from '../lib/store';
import { speak } from '../lib/ai/tts';
import { SpeakButton } from './Speak';
import { sfx } from '../lib/sound';
import { xpPop } from './Celebrate';

export interface ExerciseOutcome {
  correct: boolean;
  /** what the learner answered (for mistake log) */
  given: string;
  expected: string;
}

function expectedOf(ex: Exercise): string {
  switch (ex.type) {
    case 'choice':
      return fillGaps(ex.prompt, ex.options[ex.answer]);
    case 'gap':
      return ex.audio ? ex.answers[0] : fillGaps(ex.prompt, ex.answers[0]);
    case 'order':
      return ex.words.join(' ');
    case 'transform':
      return ex.answers[0];
  }
}

export function exerciseInstruction(ex: Exercise): string {
  switch (ex.type) {
    case 'choice':
      return ex.audio ? 'Слушайте и выберите' : 'Выберите правильный вариант';
    case 'gap':
      return ex.audio ? 'Слушайте и пишите' : 'Вставьте пропущенное';
    case 'order':
      return 'Составьте предложение';
    case 'transform':
      return ex.instructionRu;
  }
}

/** One exercise. Calls onDone once the learner checked the answer and pressed "Дальше". */
export function ExerciseView({ ex, onDone, seed }: { ex: Exercise; onDone: (o: ExerciseOutcome) => void; seed?: number }) {
  const [choice, setChoice] = useState<number | null>(null);
  const [text, setText] = useState('');
  const [picked, setPicked] = useState<number[]>([]);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [overridden, setOverridden] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const audio = ex.type === 'choice' || ex.type === 'gap' ? ex.audio : undefined;

  // listening exercises play their audio once when shown
  useEffect(() => {
    if (audio) void speak(audio, { rate: 0.85 }).catch(() => {});
  }, [audio, ex]);

  const insertChar = (ch: string) => {
    const el = inputRef.current;
    const start = el?.selectionStart ?? text.length;
    const end = el?.selectionEnd ?? text.length;
    setText(text.slice(0, start) + ch + text.slice(end));
    setTimeout(() => {
      el?.focus();
      el?.setSelectionRange(start + ch.length, start + ch.length);
    }, 0);
  };

  const tokens = useMemo(() => (ex.type === 'order' ? shuffle(ex.words.map((w, i) => ({ w, i })), seed) : []), [ex, seed]);

  useEffect(() => {
    setChoice(null);
    setText('');
    setPicked([]);
    setResult(null);
    setOverridden(false);
    setTimeout(() => inputRef.current?.focus(), 30);
  }, [ex]);

  useEffect(() => {
    if (result) setTimeout(() => nextRef.current?.focus(), 30);
  }, [result]);

  const given = (): string => {
    if (ex.type === 'choice') return choice === null ? '' : ex.options[choice];
    if (ex.type === 'order') return picked.map((i) => tokens[i]?.w ?? '').join(' ');
    return text;
  };

  const check = () => {
    let r: CheckResult;
    if (ex.type === 'choice') r = choice === ex.answer ? 'correct' : 'wrong';
    else if (ex.type === 'order') r = normalize(given()) === normalize(ex.words.join(' ')) ? 'correct' : 'wrong';
    else r = checkAnswer(text, ex.answers);
    setResult(r);
    if (r === 'correct') {
      sfx.correct();
      xpPop('+3 XP', nextRef.current ?? inputRef.current);
    } else sfx.wrong();
  };

  const canCheck = ex.type === 'choice' ? choice !== null : ex.type === 'order' ? picked.length === tokens.length : text.trim().length > 0;
  const isCorrect = result === 'correct' || overridden;

  const finish = () => onDone({ correct: isCorrect, given: given(), expected: expectedOf(ex) });

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!result && canCheck) check();
      else if (result) finish();
    }
  };

  const promptText = ex.type === 'gap' || ex.type === 'choice' ? ex.prompt : null;
  const promptParts = promptText !== null ? promptText.split('___') : null;

  return (
    <div className="exercise" onKeyDown={onKey}>
      <div className="ex-instruction">{exerciseInstruction(ex)}</div>
      {audio && (
        <div className="ex-audio">
          <SpeakButton text={audio} rate={0.85} label=" Слушать" className="big" />
          <SpeakButton text={audio} rate={0.6} label=" медленно 🐢" />
        </div>
      )}

      {ex.type === 'transform' && <div className="ex-prompt de">{ex.prompt}</div>}
      {ex.type === 'order' && <div className="ex-prompt ru">{ex.translationRu}</div>}

      {promptParts && ex.type === 'choice' && promptParts.length > 2 && (
        <div className="ex-prompt de">
          {choice !== null ? <span className="filled">{fillGaps(ex.prompt, ex.options[choice])}</span> : ex.prompt.replace(/___/g, ' ___ ')}
        </div>
      )}
      {promptParts && !(ex.type === 'choice' && promptParts.length > 2) && (
        <div className="ex-prompt de">
          {promptParts.length > 1 ? (
            <>
              {promptParts[0]}
              {ex.type === 'gap' ? (
                <input
                  ref={(el) => (inputRef.current = el)}
                  className={`gap-input ${result ? (isCorrect ? 'ok' : result === 'almost' ? 'almost' : 'bad') : ''}`}
                  value={text}
                  disabled={!!result}
                  onChange={(e) => setText(e.target.value)}
                  size={Math.max(6, (ex.answers[0]?.length ?? 6) + 2)}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
              ) : (
                <span className="gap">{choice !== null && ex.type === 'choice' ? ex.options[choice] : '___'}</span>
              )}
              {promptParts.slice(1).join('___')}
            </>
          ) : (
            promptText
          )}
        </div>
      )}
      {(ex.type === 'gap' || ex.type === 'transform') && !result && <UmlautKeys onInsert={insertChar} />}
      {ex.type === 'gap' && ex.hintRu && !result && <div className="hint">💡 {ex.hintRu}</div>}

      {ex.type === 'choice' && (
        <div className="options">
          {ex.options.map((o, i) => (
            <button
              key={i}
              type="button"
              disabled={!!result}
              className={`option ${choice === i ? 'selected' : ''} ${result && i === ex.answer ? 'ok' : ''} ${
                result && choice === i && i !== ex.answer ? 'bad' : ''
              }`}
              onClick={() => setChoice(i)}
            >
              <span className="opt-key">{i + 1}</span> {o}
            </button>
          ))}
        </div>
      )}

      {ex.type === 'transform' && (
        <textarea
          ref={(el) => (inputRef.current = el)}
          className={`answer-area ${result ? (isCorrect ? 'ok' : 'bad') : ''}`}
          value={text}
          rows={2}
          disabled={!!result}
          onChange={(e) => setText(e.target.value)}
          placeholder="Напишите предложение полностью…"
          spellCheck={false}
        />
      )}

      {ex.type === 'order' && (
        <div className="order">
          <div className={`order-target ${result ? (isCorrect ? 'ok' : 'bad') : ''}`}>
            {picked.length === 0 && <span className="muted">Нажимайте на слова по порядку</span>}
            {picked.map((ti, k) => (
              <button key={k} type="button" className="chip active" disabled={!!result} onClick={() => setPicked(picked.filter((_, j) => j !== k))}>
                {tokens[ti]?.w}
              </button>
            ))}
          </div>
          <div className="order-pool">
            {tokens.map((t, ti) =>
              picked.includes(ti) ? (
                <span key={ti} className="chip ghost">
                  {t.w}
                </span>
              ) : (
                <button key={ti} type="button" className="chip" disabled={!!result} onClick={() => setPicked([...picked, ti])}>
                  {t.w}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {!result && (
        <div className="row">
          <button type="button" className="btn primary" disabled={!canCheck} onClick={check}>
            Проверить
          </button>
          {ex.type === 'choice' && <span className="tiny muted">Клавиши 1–{ex.options.length}, Enter</span>}
        </div>
      )}

      {result && (
        <div className={`feedback ${isCorrect ? 'ok' : result === 'almost' ? 'almost' : 'bad'}`}>
          <div className="feedback-title">
            {isCorrect ? '✅ Верно!' : result === 'almost' ? '🟡 Почти — проверьте написание (ß, умлауты, опечатки)' : '❌ Неверно'}
          </div>
          {!isCorrect || ex.type !== 'choice' ? (
            <div className="de">
              Правильно: <strong>{expectedOf(ex)}</strong> <SpeakButton text={expectedOf(ex)} />
            </div>
          ) : null}
          {(ex.type === 'gap' || ex.type === 'transform') && ex.answers.length > 1 && (
            <div className="tiny muted">Также принимается: {ex.answers.slice(1).join(' · ')}</div>
          )}
          <div className="explain">{ex.explanationRu}</div>
          <div className="row">
            <button ref={nextRef} type="button" className="btn primary" onClick={finish}>
              Дальше →
            </button>
            {!isCorrect && ex.type !== 'choice' && (
              <button type="button" className="btn ghost small" onClick={() => setOverridden(true)} title="Если ваш вариант тоже корректен">
                Мой ответ тоже верный
              </button>
            )}
            {!overridden && (
              <button
                type="button"
                className="btn ghost small"
                title="Ключ неверный или задание некорректно — ответ будет засчитан, а жалоба сохранится"
                onClick={() => {
                  useStore.getState().addReport({ exercise: ex, given: given() });
                  setOverridden(true);
                }}
              >
                ⚠️ Ошибка в задании
              </button>
            )}
          </div>
        </div>
      )}
      <ChoiceHotkeys ex={ex} disabled={!!result} onPick={setChoice} />
    </div>
  );
}

function ChoiceHotkeys({ ex, disabled, onPick }: { ex: Exercise; disabled: boolean; onPick: (i: number) => void }) {
  useEffect(() => {
    if (ex.type !== 'choice' || disabled) return;
    const h = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') return;
      const n = Number(e.key);
      if (n >= 1 && n <= ex.options.length) onPick(n - 1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [ex, disabled, onPick]);
  return null;
}

/** ä ö ü ß buttons for keyboards without a German layout. */
export function UmlautKeys({ onInsert }: { onInsert: (ch: string) => void }) {
  return (
    <div className="umlaut-keys" aria-label="Немецкие буквы">
      {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((ch) => (
        <button
          key={ch}
          type="button"
          className="key"
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onInsert(ch)}
        >
          {ch}
        </button>
      ))}
    </div>
  );
}
