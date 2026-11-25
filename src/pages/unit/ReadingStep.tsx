import { useState } from 'react';
import type { Unit } from '../../content/types';
import { unitMore } from '../../content';
import { useStore } from '../../lib/store';
import { ReadingPractice } from '../../components/Tasks';
import { Card } from '../../components/ui';

export function ReadingStep({ unit, onNext }: { unit: Unit; onNext: () => void }) {
  const texts = unitMore(unit.id)?.reading ?? [];
  const completeStep = useStore((s) => s.completeStep);
  const done = useStore((s) => !!s.units[unit.id]?.steps.reading?.done);
  const [scores, setScores] = useState<Record<number, number>>({});

  const record = (i: number, score: number) => {
    const next = { ...scores, [i]: score };
    setScores(next);
    if (Object.keys(next).length >= texts.length) {
      const vals = Object.values(next);
      completeStep(unit.id, 'reading', vals.reduce((a, b) => a + b, 0) / vals.length);
    }
  };

  if (!texts.length)
    return (
      <Card>
        <p className="muted">Тексты для чтения к этому юниту ещё не добавлены.</p>
        <button className="btn" onClick={() => completeStep(unit.id, 'reading')}>
          Пропустить шаг
        </button>
      </Card>
    );

  return (
    <div className="stack">
      <div className="info-box">
        📖 Тексты и задания в формате экзамена Goethe ({unit.level}, модуль Lesen). Сначала прочитайте текст целиком, затем
        выполните задания. После проверки — объяснения к каждому ответу.
      </div>
      {texts.map((r, i) => (
        <Card key={i}>
          <ReadingPractice r={r} prefix={`r${i}`} onChecked={(s) => record(i, s)} />
        </Card>
      ))}
      {(done || Object.keys(scores).length >= texts.length) && (
        <button className="btn primary" onClick={onNext}>
          Следующий шаг →
        </button>
      )}
    </div>
  );
}
