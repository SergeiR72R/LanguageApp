import type { Exercise, Level, Unit } from '../../content/types';
import { MISTAKE_CATEGORIES, type MistakeCategory } from '../store';
import { chatJson, type ChatMessage } from './llm';

const CATS = MISTAKE_CATEGORIES.join(' | ');

export interface AiError {
  original: string;
  correction: string;
  category: MistakeCategory;
  explanationRu: string;
}

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
Bewerte den Text streng, aber fair. Finde ALLE Fehler (Grammatik, Wortschatz, Rechtschreibung, Zeichensetzung, Stil). Erkläre jeden Fehler kurz auf RUSSISCH.
Antworte NUR mit JSON in diesem Format:
{
 "score": 0-100,
 "cefr": "geschätztes Niveau des Textes, z.B. B1+",
 "summaryRu": "2-3 Sätze Gesamteindruck auf Russisch",
 "taskFulfillmentRu": "Wurden alle Punkte der Aufgabe behandelt? (Russisch)",
 "criteria": [{"name":"Aufgabenerfüllung","score":0-5},{"name":"Kohärenz","score":0-5},{"name":"Wortschatz","score":0-5},{"name":"Grammatik","score":0-5}],
 "errors": [{"original":"exakter fehlerhafter Ausschnitt aus dem Text","correction":"korrigierte Version","category":"${CATS}","explanationRu":"Erklärung auf Russisch"}],
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
  const r = await chatJson<Partial<WritingFeedback>>(messages, 0.2);
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

export function conversationSystemPrompt(level: Level, role: string, tasks: string[]): string {
  return `${role}
Du führst ein mündliches Gespräch mit einem Deutschlernenden (Muttersprache Russisch, Niveau ${level}).
Regeln:
- Bleib in deiner Rolle. Antworte natürlich, gesprochen, 1–3 kurze Sätze, passend zum Niveau ${level}. Stelle meist eine Rückfrage, damit das Gespräch weitergeht.
- Der Text des Lernenden stammt aus einer Spracherkennung: ignoriere fehlende Satzzeichen und Groß-/Kleinschreibung, bewerte aber Grammatik, Wortwahl und Satzbau.
- Analysiere die LETZTE Äußerung des Lernenden auf Fehler.
- Ziele des Lernenden (auf Russisch): ${tasks.join('; ')}
Antworte NUR mit JSON:
{"reply":"deine Antwort in der Rolle (Deutsch)","errors":[{"original":"fehlerhafter Ausschnitt","correction":"korrekt","category":"${CATS}","explanationRu":"kurze Erklärung auf Russisch"}],"betterVersion":"natürlichere/korrekte Version der ganzen Äußerung des Lernenden (Deutsch)","tipRu":"optional: kurzer Tipp auf Russisch (Wortschatz/Ausdruck), sonst leer"}`;
}

export async function conversationTurn(system: string, history: ConversationTurn[]): Promise<TurnResult> {
  const messages: ChatMessage[] = [
    { role: 'system', content: system },
    ...history.map<ChatMessage>((t) => ({ role: t.role === 'ai' ? 'assistant' : 'user', content: t.text })),
  ];
  // the model's own previous turns must be plain text in history; we ask for JSON for the new turn
  const r = await chatJson<Partial<TurnResult>>(messages, 0.6);
  return {
    reply: String(r.reply ?? '').trim() || 'Entschuldigung, können Sie das wiederholen?',
    errors: sanitizeErrors(r.errors),
    betterVersion: String(r.betterVersion ?? ''),
    tipRu: String(r.tipRu ?? ''),
  };
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
  return out;
}

export async function generateExercises(params: {
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
        content: `Du erstellst Grammatikübungen für Deutschlernende (Muttersprache Russisch), Niveau ${params.level}. Alle deutschen Sätze müssen 100% korrekt und natürlich sein. Prüfe jede Lösung doppelt; bei mehreren korrekten Lösungen alle angeben. Mische die Formate. Antworte NUR mit JSON: {"exercises":[...]}.
${EXERCISE_FORMAT}`,
      },
      {
        role: 'user',
        content: `Thema: ${params.topic}\n${params.focusRu ? `Schwerpunkt: ${params.focusRu}\n` : ''}${params.vocab?.length ? `Verwende nach Möglichkeit diese Wörter: ${params.vocab.join(', ')}\n` : ''}Anzahl: ${params.count} neue Übungen (andere Sätze als im Lehrbuch).`,
      },
    ],
    0.8,
  );
  return sanitizeExercises(r.exercises);
}

export async function generateMistakeDrill(mistakes: { original: string; correction: string; category: string }[], level: Level): Promise<Exercise[]> {
  const r = await chatJson<{ exercises: unknown }>(
    [
      {
        role: 'system',
        content: `Du bist Deutschlehrer. Der Lernende (Russisch, Niveau ${level}) macht wiederholt die unten aufgeführten Fehler. Erstelle 10 gezielte Übungen, die genau diese Fehlermuster trainieren (nicht dieselben Sätze kopieren). Alle Sätze 100% korrekt. Antworte NUR mit JSON: {"exercises":[...]}.
${EXERCISE_FORMAT}`,
      },
      { role: 'user', content: mistakes.map((m) => `[${m.category}] ${m.original} → ${m.correction}`).join('\n') },
    ],
    0.7,
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
