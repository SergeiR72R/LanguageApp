/** Normalise a German answer for lenient comparison. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[„“”"«»‚‘’']/g, '')
    .replace(/[.!?;:]+$/g, '')
    .replace(/\s*,\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Loose form: also folds ß→ss and umlauts, used to detect "almost right" (typos/spelling). */
function fold(s: string): string {
  return normalize(s)
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue');
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

export type CheckResult = 'correct' | 'almost' | 'wrong';

/**
 * Compare a learner answer with accepted answers.
 * "almost" = differs only by spelling (ß/ss, umlauts) or one-letter typo in a longer answer.
 */
export function checkAnswer(input: string, accepted: string[]): CheckResult {
  const n = normalize(input);
  if (!n) return 'wrong';
  if (accepted.some((a) => normalize(a) === n)) return 'correct';
  const f = fold(input);
  for (const a of accepted) {
    const fa = fold(a);
    if (fa === f) return 'almost';
    if (fa.length >= 6 && levenshtein(fa, f) <= 1) return 'almost';
  }
  return 'wrong';
}

export interface DiffToken {
  word: string;
  status: 'ok' | 'missing' | 'extra';
}

const tokenize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);

/** Word-level LCS diff: expected text vs. what was recognised. Used for read-aloud / dictation. */
export function wordDiff(expected: string, actual: string): { tokens: DiffToken[]; accuracy: number } {
  const e = tokenize(expected);
  const a = tokenize(actual);
  const dp: number[][] = Array.from({ length: e.length + 1 }, () => new Array(a.length + 1).fill(0));
  for (let i = e.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= 0; j--) {
      dp[i][j] = e[i] === a[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const tokens: DiffToken[] = [];
  let i = 0;
  let j = 0;
  while (i < e.length && j < a.length) {
    if (e[i] === a[j]) {
      tokens.push({ word: e[i], status: 'ok' });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      tokens.push({ word: e[i], status: 'missing' });
      i++;
    } else {
      tokens.push({ word: a[j], status: 'extra' });
      j++;
    }
  }
  while (i < e.length) tokens.push({ word: e[i++], status: 'missing' });
  while (j < a.length) tokens.push({ word: a[j++], status: 'extra' });
  const ok = tokens.filter((t) => t.status === 'ok').length;
  return { tokens, accuracy: e.length ? ok / e.length : 0 };
}

export function shuffle<T>(arr: T[], seed?: number): T[] {
  const out = [...arr];
  let s = seed ?? Math.floor(Math.random() * 1e9);
  const rnd = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
