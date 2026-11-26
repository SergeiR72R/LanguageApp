import type { Exercise, Level, Unit } from '../../content/types';
import { MISTAKE_CATEGORIES, type MistakeCategory } from '../store';
import { chat, chatJson, type ChatMessage } from './llm';
import { structuralProblem } from '../exerciseCheck';
import { checkAnswer } from '../grading';

const CATS = MISTAKE_CATEGORIES.join(' | ');

export interface AiError {
  original: string;
  correction: string;
  category: MistakeCategory;
  explanationRu: string;
  /** the rule in a few words, e.g. «helfen + Dativ» */
  ruleRu?: string;
}

/** Shared instructions for how each error must be described. */
const ERROR_STYLE = `Für JEDEN Fehler:
- "original": NUR der fehlerhafte Ausschnitt, wörtlich aus dem Text des Lernenden (2–8 Wörter, so viel Kontext wie nötig) — nicht die ganze Äußerung.
- "correction": derselbe Ausschnitt korrigiert.
- "ruleRu": die Regel in wenigen Worten auf Russisch (z.B. «helfen + Dativ», «Verb im Nebensatz am Ende», «Adjektivendung nach dem bestimmten Artikel»).
- "explanationRu": 2–3 Sätze auf Russisch: was genau falsch ist, warum (Regel), und ein kurzes zusätzliches Beispiel oder eine Merkhilfe.
Fasse gleiche Fehler nicht zu einem langen Satz zusammen, jeder Fehler ein eigener Eintrag. Erfinde keine Fehler: wenn etwas korrekt ist, nicht aufführen.`;

function sanitizeErrors(list: unknown): AiError[] {
  if (!Array.isArray(list)) return [];
  return list
    .filter((e) => e && typeof e.original === 'string' && typeof e.correction === 'string')
    .filter((e) => e.original.trim() !== e.correction.trim())
    .map((e) => ({
      original: String(e.original),
      correction: String(e.correction),
      category: (MISTAKE_CATEGORIES as string[]).includes(e.category) ? e.category : 'Sonstiges',
      explanationRu: String(e.explanationRu ?? e.explanation ?? ''),
      ruleRu: e.ruleRu ? String(e.ruleRu) : undefined,
    }));
}

// ---------------- Writing ----------------

export interface WritingFeedback {
  score: number;
  cefr: string;
  summaryRu: string;
  taskFulfillmentRu: string;
  errors: AiError[];
  correctedText: string;
  improvedVersion: string;
  strengthsRu: string[];
  improvementsRu: string[];
  criteria: { name: string; score: number }[];
}

export async function checkWriting(params: {
  level: Level;
  task: string;
  points: string[];
  text: string;
  grammarFocus?: string;
}): Promise<WritingFeedback> {
  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: `Du bist ein erfahrener Prüfer für Deutsch als Fremdsprache (Goethe/telc, GER). Der Lernende ist russischer Muttersprachler und lernt auf Niveau ${params.level}.
Bewerte den Text streng, aber fair. Markierungen [?] stammen aus der Handschrifterkennung – ignoriere sie. Finde ALLE Fehler (Grammatik, Wortschatz, Rechtschreibung, Zeichensetzung, Stil). Erkläre jeden Fehler auf RUSSISCH.
${ERROR_STYLE}
Antworte NUR mit JSON in diesem Format:
{
 "score": 0-100,
 "cefr": "geschätztes Niveau des Textes, z.B. B1+",
 "summaryRu": "2-3 Sätze Gesamteindruck auf Russisch",
 "taskFulfillmentRu": "Wurden alle Punkte der Aufgabe behandelt? (Russisch)",
 "criteria": [{"name":"Aufgabenerfüllung","score":0-5},{"name":"Kohärenz","score":0-5},{"name":"Wortschatz","score":0-5},{"name":"Grammatik","score":0-5}],
 "errors": [{"original":"exakter fehlerhafter Ausschnitt aus dem Text","correction":"korrigierte Version","category":"${CATS}","ruleRu":"Regel kurz","explanationRu":"2–3 Sätze auf Russisch"}],
 "correctedText": "der vollständige Text mit minimalen Korrekturen",
 "improvedVersion": "eine stilistisch verbesserte Version auf Niveau ${params.level === 'B1' ? 'B2' : 'C1'}, die die Ideen des Lernenden beibehält",
 "strengthsRu": ["..."],
 "improvementsRu": ["konkrete Tipps auf Russisch"]
}`,
    },
    {
      role: 'user',
      content: `Aufgabe: ${params.task}\nPunkte: ${params.points.join('; ')}\n${params.grammarFocus ? `Grammatikschwerpunkt der Lektion: ${params.grammarFocus}\n` : ''}\nText des Lernenden:\n"""${params.text}"""`,
    },
  ];
  const r = await chatJson<Partial<WritingFeedback>>(messages, 0.2, 'medium');
  return {
    score: Number(r.score ?? 0),
    cefr: String(r.cefr ?? ''),
    summaryRu: String(r.summaryRu ?? ''),
    taskFulfillmentRu: String(r.taskFulfillmentRu ?? ''),
    errors: sanitizeErrors(r.errors),
    correctedText: String(r.correctedText ?? ''),
    improvedVersion: String(r.improvedVersion ?? ''),
    strengthsRu: Array.isArray(r.strengthsRu) ? r.strengthsRu.map(String) : [],
    improvementsRu: Array.isArray(r.improvementsRu) ? r.improvementsRu.map(String) : [],
    criteria: Array.isArray(r.criteria) ? r.criteria.map((c) => ({ name: String(c.name), score: Number(c.score) })) : [],
  };
}

// ---------------- Conversation ----------------

export interface ConversationTurn {
  role: 'ai' | 'user';
  text: string;
  errors?: AiError[];
  tipRu?: string;
  betterVersion?: string;
}

export interface TurnResult {
  reply: string;
  errors: AiError[];
  betterVersion: string;
  tipRu: string;
}

/** Role prompt for the conversation partner: plain spoken replies, no analysis (that is a separate request). */
export function conversationSystemPrompt(level: Level, role: string, tasks: string[]): string {
  return `${role}
Du führst ein mündliches Gespräch mit einem Deutschlernenden (Muttersprache Russisch, Niveau ${level}).
Regeln:
- Bleib in deiner Rolle und reagiere INHALTLICH auf das, was der Lernende zuletzt gesagt hat (gehe auf seine Aussage ein, beziehe dich auf Details).
- Antworte natürlich und gesprochen, 1–3 kurze Sätze, passend zum Niveau ${level}. Stelle meist eine passende Rückfrage, damit das Gespräch weitergeht.
- Wiederhole NIEMALS deine eigene Begrüßung oder eine frühere Frage wörtlich. Wiederhole oder korrigiere NICHT die Sätze des Lernenden – Fehler werden separat besprochen.
- Wenn der Lernende etwas Unklares sagt, frag freundlich nach, was er meint.
- Der Text des Lernenden stammt aus einer Spracherkennung: fehlende Satzzeichen oder einzelne falsch erkannte Wörter sind normal.
- Gesprächsziele des Lernenden (zur Orientierung): ${tasks.join('; ')}
Antworte nur mit deiner Gesprächsreplik als reinem Text, ohne Anführungszeichen, ohne Erklärungen, ohne JSON.`;
}

const norm = (x: string) => x.toLowerCase().replace(/[^\p{L}\p{N} ]/gu, '').replace(/\s+/g, ' ').trim();

/** The reply just echoes the learner or repeats an earlier partner line → regenerate. */
function isEcho(reply: string, history: ConversationTurn[]): boolean {
  const r = norm(reply);
  if (!r) return true;
  const lastUser = [...history].reverse().find((t) => t.role === 'user');
  if (lastUser) {
    const u = norm(lastUser.text);
    if (r === u || (u.length > 15 && (r.includes(u) || u.includes(r)))) return true;
  }
  return history.some((t) => t.role === 'ai' && norm(t.text) === r);
}

/** Separate tutor request: analyse only the learner's last utterance (instructions in Russian → Russian explanations). */
async function analyseUtterance(level: Level, question: string, answer: string): Promise<Omit<TurnResult, 'reply'>> {
  const r = await chatJson<Partial<TurnResult>>(
    [
      {
        role: 'system',
        content: `Ты опытный преподаватель немецкого языка для русскоговорящих (уровень ученика ${level}). Ученик устно ответил собеседнику; текст получен распознаванием речи.
Найди ошибки ученика: грамматика, порядок слов, падежи, предлоги, окончания, выбор слов, неуместный регистр (например, «du» на собеседовании).
НЕ считай ошибками: отсутствие знаков препинания, заглавные/строчные буквы, явно неверно распознанные слова.
${ERROR_STYLE}
ВАЖНО: поля "ruleRu" и "explanationRu" пиши ТОЛЬКО по-русски. "original" и "correction" — по-немецки.
Если ошибок нет — пустой список.
Ответь ТОЛЬКО JSON:
{"errors":[{"original":"...","correction":"...","category":"${CATS}","ruleRu":"...","explanationRu":"..."}],"betterVersion":"вся реплика ученика в исправленном, естественном виде (по-немецки)","tipRu":"необязательный совет по-русски (полезное выражение), иначе пустая строка"}`,
      },
      { role: 'user', content: `Реплика собеседника: «${question}»\nОтвет ученика: «${answer}»` },
    ],
    0.2,
    'medium',
  );
  return {
    errors: sanitizeErrors(r.errors),
    betterVersion: String(r.betterVersion ?? ''),
    tipRu: String(r.tipRu ?? ''),
  };
}

export async function conversationTurn(system: string, history: ConversationTurn[], level: Level = 'B1'): Promise<TurnResult> {
  const messages: ChatMessage[] = [
    { role: 'system', content: system },
    // many models expect the dialogue to start with a user turn
    ...(history[0]?.role === 'ai' ? [{ role: 'user' as const, content: '(Das Gespräch beginnt.)' }] : []),
    ...history.map<ChatMessage>((t) => ({ role: t.role === 'ai' ? 'assistant' : 'user', content: t.text })),
  ];
  const lastUser = [...history].reverse().find((t) => t.role === 'user')?.text ?? '';
  const lastAi = [...history].reverse().find((t) => t.role === 'ai')?.text ?? '';

  const replyTask = (async () => {
    let reply = (await chat(messages, 0.8)).trim().replace(/^["„“»«]+|["“”«»]+$/g, '');
    if (isEcho(reply, history)) {
      reply = (
        await chat(
          [...messages, { role: 'system', content: 'Deine letzte Antwort hat den Lernenden oder dich selbst wiederholt. Reagiere jetzt inhaltlich NEU auf seine letzte Aussage und stelle eine neue Frage.' }],
          0.9,
        )
      ).trim();
    }
    return reply;
  })();
  // analysis is optional: a failure there must not break the conversation
  const analysisTask = analyseUtterance(level, lastAi, lastUser).catch(() => ({ errors: [], betterVersion: '', tipRu: '' }));

  const [reply, analysis] = await Promise.all([replyTask, analysisTask]);
  return { reply: reply || 'Entschuldigung, können Sie das noch einmal sagen?', ...analysis };
}

export interface ConversationSummary {
  cefr: string;
  summaryRu: string;
  grammarRu: string;
  vocabularyRu: string;
  fluencyRu: string;
  taskRu: string;
  recommendationsRu: string[];
  usefulPhrases: string[];
}

export async function summarizeConversation(level: Level, topic: string, history: ConversationTurn[]): Promise<ConversationSummary> {
  const transcript = history.map((t) => `${t.role === 'ai' ? 'Partner' : 'Lernender'}: ${t.text}`).join('\n');
  const r = await chatJson<Partial<ConversationSummary>>(
    [
      {
        role: 'system',
        content: `Du bist Prüfer für mündliche Prüfungen Deutsch (GER). Bewerte die Leistung des Lernenden (Russisch als Muttersprache, Zielniveau ${level}) im folgenden Gespräch zum Thema „${topic}“. Der Text stammt aus einer Spracherkennung. Antworte NUR mit JSON:
{"cefr":"geschätztes Niveau","summaryRu":"Gesamteindruck auf Russisch","grammarRu":"Grammatik: typische Fehler und Muster (Russisch)","vocabularyRu":"Wortschatz (Russisch)","fluencyRu":"Flüssigkeit, Satzlänge, Interaktion (Russisch)","taskRu":"Wurde die Gesprächsaufgabe erfüllt? (Russisch)","recommendationsRu":["3-5 konkrete Empfehlungen auf Russisch"],"usefulPhrases":["5 nützliche deutsche Redemittel für dieses Thema"]}`,
      },
      { role: 'user', content: transcript },
    ],
    0.3,
  );
  return {
    cefr: String(r.cefr ?? ''),
    summaryRu: String(r.summaryRu ?? ''),
    grammarRu: String(r.grammarRu ?? ''),
    vocabularyRu: String(r.vocabularyRu ?? ''),
    fluencyRu: String(r.fluencyRu ?? ''),
    taskRu: String(r.taskRu ?? ''),
    recommendationsRu: Array.isArray(r.recommendationsRu) ? r.recommendationsRu.map(String) : [],
    usefulPhrases: Array.isArray(r.usefulPhrases) ? r.usefulPhrases.map(String) : [],
  };
}

// ---------------- Pronunciation (read aloud) ----------------

export interface PronunciationFeedback {
  feedbackRu: string;
  problemWords: { word: string; tipRu: string }[];
}

export async function pronunciationFeedback(expected: string, recognized: string, unclear: string[]): Promise<PronunciationFeedback> {
  const r = await chatJson<Partial<PronunciationFeedback>>(
    [
      {
        role: 'system',
        content: `Du bist Aussprachetrainer für Deutsch (Lernende mit Muttersprache Russisch). Du bekommst den Zieltext und das, was eine Spracherkennung beim Vorlesen verstanden hat. Abweichungen deuten oft auf Ausspracheprobleme hin (z.B. ü/ö, ch [ç]/[x], r, Vokallänge, h, Endungen, Wortakzent). Antworte NUR mit JSON: {"feedbackRu":"2-4 Sätze auf Russisch: was gut war, was wahrscheinlich unklar ausgesprochen wurde","problemWords":[{"word":"Wort","tipRu":"konkreter Aussprachetipp auf Russisch, ggf. mit Lautschrift"}]}`,
      },
      { role: 'user', content: `Zieltext: ${expected}\nErkannt: ${recognized}\nUnsicher erkannte Stellen: ${unclear.join(' | ') || '—'}` },
    ],
    0.3,
  );
  return {
    feedbackRu: String(r.feedbackRu ?? ''),
    problemWords: Array.isArray(r.problemWords) ? r.problemWords.map((p) => ({ word: String(p.word), tipRu: String(p.tipRu) })) : [],
  };
}

// ---------------- Exercise generation ----------------

const EXERCISE_FORMAT = `Formate (genau eines pro Übung):
{"type":"choice","prompt":"Satz mit ___","options":["a","b","c","d"],"answer":Index,"explanationRu":"..."}
{"type":"gap","prompt":"Satz mit genau einem ___","answers":["richtige Lösung","Alternative"],"hintRu":"Hinweis","explanationRu":"..."}
{"type":"transform","instructionRu":"Anweisung auf Russisch","prompt":"Ausgangssatz","answers":["vollständiger korrekter Satz.","Variante."],"explanationRu":"..."}
{"type":"order","words":["Wörter","in","RICHTIGER","Reihenfolge."],"translationRu":"Übersetzung","explanationRu":"..."}`;

function sanitizeExercises(list: unknown): Exercise[] {
  if (!Array.isArray(list)) return [];
  const out: Exercise[] = [];
  for (const e of list as Record<string, unknown>[]) {
    const explanationRu = String(e.explanationRu ?? '');
    if (e.type === 'choice' && Array.isArray(e.options) && typeof e.answer === 'number' && e.answer < e.options.length)
      out.push({ type: 'choice', prompt: String(e.prompt), options: e.options.map(String), answer: e.answer, explanationRu });
    else if (e.type === 'gap' && Array.isArray(e.answers) && String(e.prompt).includes('___'))
      out.push({ type: 'gap', prompt: String(e.prompt), answers: e.answers.map(String), hintRu: e.hintRu ? String(e.hintRu) : undefined, explanationRu });
    else if (e.type === 'transform' && Array.isArray(e.answers))
      out.push({ type: 'transform', instructionRu: String(e.instructionRu ?? ''), prompt: String(e.prompt), answers: e.answers.map(String), explanationRu });
    else if (e.type === 'order' && Array.isArray(e.words) && e.words.length >= 3)
      out.push({ type: 'order', words: e.words.map(String), translationRu: String(e.translationRu ?? ''), explanationRu });
  }
  return out.filter((ex) => !structuralProblem(ex));
}

/**
 * Independent check: a second request solves every exercise WITHOUT seeing the key.
 * Exercises where the solver disagrees with the key are dropped.
 */
export async function verifyExercises(level: Level, list: Exercise[]): Promise<Exercise[]> {
  if (!list.length) return list;
  const tasks = list.map((ex, i) => {
    if (ex.type === 'choice') return { i, type: 'choice', sentence: ex.prompt, options: ex.options };
    if (ex.type === 'gap') return { i, type: 'gap', sentence: ex.prompt };
    if (ex.type === 'transform') return { i, type: 'check', task: ex.instructionRu, source: ex.prompt, proposed: ex.answers[0] };
    return { i, type: 'check', task: 'Ist dieser Satz grammatisch korrekt und natürlich?', proposed: ex.words.join(' ') };
  });
  const r = await chatJson<{ results: { i: number; answer?: number | string; correct?: boolean }[] }>(
    [
      {
        role: 'system',
        content: `Du bist ein sehr genauer Deutschlehrer (Muttersprachler). Löse die Aufgaben (Niveau ${level}) selbst, ohne Lösungsschlüssel:
- "choice": Welche Option (Index ab 0) passt grammatisch korrekt in die Lücke ___? Achte darauf, dass im Satz nach dem Einsetzen kein Wort doppelt steht.
- "gap": Welches Wort / welche Wörter gehören in die Lücke ___? Gib nur den Lückentext zurück.
- "check": Ist "proposed" eine korrekte Lösung der Aufgabe (bzw. ein korrekter, natürlicher deutscher Satz)? true/false.
Antworte NUR mit JSON: {"results":[{"i":0,"answer":2},{"i":1,"answer":"hat"},{"i":2,"correct":true}]}`,
      },
      { role: 'user', content: JSON.stringify(tasks) },
    ],
    0,
    'medium',
  );
  const byI = new Map((r.results ?? []).map((x) => [Number(x.i), x]));
  return list.filter((ex, i) => {
    const v = byI.get(i);
    if (!v) return false;
    if (ex.type === 'choice') return Number(v.answer) === ex.answer;
    if (ex.type === 'gap') return typeof v.answer === 'string' && checkAnswer(v.answer, ex.answers) !== 'wrong';
    return v.correct === true;
  });
}

/** Generate, filter structurally, verify independently; keeps `count` good exercises. */
async function generateVerified(level: Level, make: (n: number) => Promise<Exercise[]>, count: number): Promise<Exercise[]> {
  const raw = await make(count + 4);
  let good: Exercise[];
  try {
    good = await verifyExercises(level, raw);
  } catch {
    good = raw; // verifier unavailable (e.g. rate limit): structural checks still applied
  }
  return good.slice(0, count);
}

export async function generateExercises(params: {
  level: Level;
  topic: string;
  explanation?: string;
  count: number;
  vocab?: string[];
  focusRu?: string;
}): Promise<Exercise[]> {
  return generateVerified(params.level, (n) => generateExercisesRaw({ ...params, count: n }), params.count);
}

async function generateExercisesRaw(params: {
  level: Level;
  topic: string;
  explanation?: string;
  count: number;
  vocab?: string[];
  focusRu?: string;
}): Promise<Exercise[]> {
  const r = await chatJson<{ exercises: unknown }>(
    [
      {
        role: 'system',
        content: `Du erstellst Grammatikübungen für Deutschlernende (Muttersprache Russisch), Niveau ${params.level}. Alle deutschen Sätze müssen 100% korrekt und natürlich sein. Prüfe jede Lösung doppelt: setze die Lösung in den Satz ein und lies ihn ganz — kein Wort darf doppelt stehen, die Lücke enthält nur, was im Satz fehlt. Bei "choice" darf genau EINE Option korrekt sein. Bei mehreren korrekten Lösungen (gap/transform) alle angeben. Mische die Formate. Antworte NUR mit JSON: {"exercises":[...]}.
${EXERCISE_FORMAT}`,
      },
      {
        role: 'user',
        content: `Thema: ${params.topic}\n${params.focusRu ? `Schwerpunkt: ${params.focusRu}\n` : ''}${params.vocab?.length ? `Verwende nach Möglichkeit diese Wörter: ${params.vocab.join(', ')}\n` : ''}Anzahl: ${params.count} neue Übungen (andere Sätze als im Lehrbuch).`,
      },
    ],
    0.8,
    'medium',
  );
  return sanitizeExercises(r.exercises);
}

export async function generateMistakeDrill(mistakes: { original: string; correction: string; category: string }[], level: Level): Promise<Exercise[]> {
  return generateVerified(level, () => generateMistakeDrillRaw(mistakes, level), 10);
}

async function generateMistakeDrillRaw(mistakes: { original: string; correction: string; category: string }[], level: Level): Promise<Exercise[]> {
  const r = await chatJson<{ exercises: unknown }>(
    [
      {
        role: 'system',
        content: `Du bist Deutschlehrer. Der Lernende (Russisch, Niveau ${level}) macht wiederholt die unten aufgeführten Fehler. Erstelle 14 gezielte Übungen, die genau diese Fehlermuster trainieren (nicht dieselben Sätze kopieren). Alle Sätze 100% korrekt. Antworte NUR mit JSON: {"exercises":[...]}.
${EXERCISE_FORMAT}`,
      },
      { role: 'user', content: mistakes.map((m) => `[${m.category}] ${m.original} → ${m.correction}`).join('\n') },
    ],
    0.7,
    'medium',
  );
  return sanitizeExercises(r.exercises);
}

// ---------------- Extra listening ----------------

export interface GeneratedListening {
  title: string;
  kind: 'monolog' | 'dialog';
  text: string;
  questions: { question: string; options: string[]; answer: number }[];
}

export async function generateListening(unit: Unit): Promise<GeneratedListening> {
  const len = unit.level === 'B1' ? '180-250' : unit.level === 'B2' ? '250-350' : '320-420';
  const r = await chatJson<GeneratedListening>(
    [
      {
        role: 'system',
        content: `Du schreibst Hörtexte für Deutschlernende auf Niveau ${unit.level}. Schreibe einen neuen, natürlichen Hörtext (${len} Wörter) zum Thema „${unit.title}“, der den Grammatikschwerpunkt „${unit.grammar.topic}“ und Wörter aus dieser Liste verwendet: ${unit.vocab
          .map((v) => v.de)
          .join(', ')}. Bei einem Dialog beginnt JEDE Zeile mit "A: " oder "B: ". Dazu 5 Multiple-Choice-Fragen auf Deutsch (je 3-4 Optionen). Antworte NUR mit JSON: {"title":"...","kind":"dialog" oder "monolog","text":"...","questions":[{"question":"...","options":["..."],"answer":Index}]}`,
      },
      { role: 'user', content: 'Bitte einen neuen Hörtext erstellen.' },
    ],
    0.9,
  );
  return {
    title: String(r.title ?? unit.title),
    kind: r.kind === 'dialog' ? 'dialog' : 'monolog',
    text: String(r.text ?? ''),
    questions: (Array.isArray(r.questions) ? r.questions : []).filter(
      (q) => Array.isArray(q.options) && typeof q.answer === 'number' && q.answer < q.options.length,
    ),
  };
}

// ---------------- Placement writing sample ----------------

export async function assessSample(text: string): Promise<{ cefr: string; commentRu: string }> {
  const r = await chatJson<{ cefr: string; commentRu: string }>(
    [
      {
        role: 'system',
        content:
          'Du bist zertifizierter Prüfer (GER). Schätze das Sprachniveau (A2, B1, B1+, B2, B2+, C1, C1+) des folgenden kurzen deutschen Textes eines russischsprachigen Lernenden. Antworte NUR mit JSON: {"cefr":"...","commentRu":"3-4 Sätze auf Russisch: Stärken, typische Fehler, Begründung"}',
      },
      { role: 'user', content: text },
    ],
    0.2,
  );
  return { cefr: String(r.cefr ?? '?'), commentRu: String(r.commentRu ?? '') };
}

// ---------------- Exam evaluation ----------------

export interface ExamSpeakingFeedback {
  score: number;
  criteria: { name: string; score: number }[];
  feedbackRu: string;
  tipsRu: string[];
}

/** Rate a speaking task (from a speech-recognition transcript) on the Goethe scale, 0–100. */
export async function evaluateSpeaking(params: {
  level: Level;
  instruction: string;
  situation: string;
  points: string[];
  mode: string;
  transcript: string;
}): Promise<ExamSpeakingFeedback> {
  const r = await chatJson<Partial<ExamSpeakingFeedback>>(
    [
      {
        role: 'system',
        content: `Du bist zertifizierter Prüfer für das Goethe-Zertifikat ${params.level} (Modul Sprechen). Bewerte die Leistung des Kandidaten (Muttersprache Russisch) streng nach den offiziellen Kriterien dieses Niveaus: Erfüllung der Aufgabe, Kohärenz/Interaktion, Flüssigkeit, Wortschatz, Strukturen. Die Aussprache kann aus einem Transkript nicht beurteilt werden — ignoriere sie. Das Transkript stammt aus einer Spracherkennung (fehlende Satzzeichen ignorieren). Zu kurze oder themenfremde Beiträge erhalten wenige Punkte. Antworte NUR mit JSON:
{"score":0-100 (60 = gerade bestanden auf Niveau ${params.level}),"criteria":[{"name":"Aufgabenerfüllung","score":0-5},{"name":"Kohärenz","score":0-5},{"name":"Wortschatz","score":0-5},{"name":"Strukturen","score":0-5}],"feedbackRu":"3-5 Sätze auf Russisch: Was war gut, was fehlte für mehr Punkte","tipsRu":["konkrete Tipps auf Russisch"]}`,
      },
      {
        role: 'user',
        content: `Aufgabe (${params.mode}): ${params.instruction}\nSituation: ${params.situation}\nPunkte: ${params.points.join('; ')}\n\nTranskript:\n${params.transcript}`,
      },
    ],
    0.2,
    'medium',
  );
  return {
    score: Math.max(0, Math.min(100, Number(r.score ?? 0))),
    criteria: Array.isArray(r.criteria) ? r.criteria.map((c) => ({ name: String(c.name), score: Number(c.score) })) : [],
    feedbackRu: String(r.feedbackRu ?? ''),
    tipsRu: Array.isArray(r.tipsRu) ? r.tipsRu.map(String) : [],
  };
}
