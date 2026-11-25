import type { WritingFeedback } from '../lib/ai/prompts';
import { ProgressBar } from './ui';

export function ErrorList({ errors }: { errors: { original: string; correction: string; category: string; explanationRu: string }[] }) {
  if (!errors.length) return <p className="ok-text">Ошибок не найдено 🎉</p>;
  return (
    <ul className="error-list">
      {errors.map((e, i) => (
        <li key={i}>
          <div>
            <span className="strike">{e.original}</span> → <strong className="ok-text">{e.correction}</strong>{' '}
            <span className="pill">{e.category}</span>
          </div>
          <div className="muted">{e.explanationRu}</div>
        </li>
      ))}
    </ul>
  );
}

export function WritingFeedbackView({ fb }: { fb: WritingFeedback }) {
  return (
    <div className="stack">
      <div className="row between">
        <h3>Оценка: {fb.score}/100</h3>
        {fb.cefr && <span className="pill accent">уровень текста ≈ {fb.cefr}</span>}
      </div>
      <p>{fb.summaryRu}</p>
      {fb.criteria.length > 0 && (
        <div>
          {fb.criteria.map((c) => (
            <div key={c.name} className="stat-row">
              <span className="stat-label">{c.name}</span>
              <ProgressBar value={c.score / 5} />
              <span className="stat-val">{c.score}/5</span>
            </div>
          ))}
        </div>
      )}
      {fb.taskFulfillmentRu && (
        <p>
          <strong>Выполнение задания:</strong> {fb.taskFulfillmentRu}
        </p>
      )}
      <h4>Ошибки ({fb.errors.length})</h4>
      <ErrorList errors={fb.errors} />
      {fb.strengthsRu.length > 0 && (
        <>
          <h4>Что получилось</h4>
          <ul>
            {fb.strengthsRu.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </>
      )}
      {fb.improvementsRu.length > 0 && (
        <>
          <h4>Как улучшить</h4>
          <ul>
            {fb.improvementsRu.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </>
      )}
      {fb.correctedText && (
        <details>
          <summary>Исправленный текст</summary>
          <div className="de prewrap">{fb.correctedText}</div>
        </details>
      )}
      {fb.improvedVersion && (
        <details>
          <summary>Улучшенная версия (уровнем выше)</summary>
          <div className="de prewrap">{fb.improvedVersion}</div>
        </details>
      )}
    </div>
  );
}
