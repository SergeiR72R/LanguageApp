// Content schema for the German B1–C1 course.
// All explanations/translations for the learner are in Russian; learning material is in German.

export type Level = 'B1' | 'B2' | 'C1';

export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase' | 'prep' | 'conj' | 'other';

export interface VocabItem {
  /** Lemma without article, e.g. "Bewerbung", "sich bewerben", "nachhaltig" */
  de: string;
  /** Only for nouns */
  article?: 'der' | 'die' | 'das';
  /** Only for nouns, e.g. "-en", "-¨e", "–" (no plural) or full form */
  plural?: string;
  /** Optional extra grammar info: verb forms "bewirbt, bewarb, hat beworben", government "+ Akk", "auf + Akk" */
  forms?: string;
  pos: PartOfSpeech;
  ru: string;
  /** Natural German example sentence using the word */
  example: string;
  exampleRu: string;
}

export interface ChoiceExercise {
  type: 'choice';
  /** German sentence with ___ for the gap or a question */
  prompt: string;
  options: string[];
  /** index into options */
  answer: number;
  explanationRu: string;
}

export interface GapExercise {
  type: 'gap';
  /** German sentence containing exactly one ___ */
  prompt: string;
  /** Accepted answers (case-insensitive compare, trimmed). First is canonical. */
  answers: string[];
  hintRu?: string;
  explanationRu: string;
}

export interface OrderExercise {
  type: 'order';
  /** Words/chunks of the correct sentence IN CORRECT ORDER (app shuffles). Punctuation attached to last word. */
  words: string[];
  translationRu: string;
  explanationRu: string;
}

export interface TransformExercise {
  type: 'transform';
  /** Instruction in Russian, e.g. "Переделайте в пассив" */
  instructionRu: string;
  /** Source German sentence */
  prompt: string;
  /** Accepted full-sentence answers. First is canonical. */
  answers: string[];
  explanationRu: string;
}

export type Exercise = ChoiceExercise | GapExercise | OrderExercise | TransformExercise;

export interface MCQ {
  question: string; // German
  options: string[]; // German
  answer: number;
}

export interface Unit {
  /** e.g. "b1-01" */
  id: string;
  level: Level;
  /** 1..N inside the level */
  order: number;
  /** German unit title */
  title: string;
  titleRu: string;
  /** Short Russian description of what the learner can do after the unit */
  goalsRu: string[];
  grammar: {
    topic: string; // German name of topic
    topicRu: string;
    /** Clear explanation in Russian, may use simple markdown: **bold**, lists with "- ", blank lines between paragraphs. 150–350 words */
    explanationRu: string;
    /** Optional table: first row = header */
    table?: string[][];
    examples: { de: string; ru: string }[];
    /** 10–12 exercises, mixed types */
    exercises: Exercise[];
  };
  /** Exactly 20 items related to the unit theme */
  vocab: VocabItem[];
  listening: {
    title: string;
    /** 'monolog' or 'dialog'. For dialogs, each line starts with "A: " or "B: " */
    kind: 'monolog' | 'dialog';
    /** German text, 150–300 words (B1), 220–380 (B2), 280–450 (C1). Uses unit vocab & grammar. */
    text: string;
    /** 5 comprehension questions in German */
    questions: MCQ[];
  };
  writing: {
    taskRu: string;
    taskDe: string;
    /** Bullet points the text must address (German) */
    points: string[];
    minWords: number;
    usefulPhrases: string[];
  };
  speaking: {
    /** Scenario description for the learner in Russian */
    scenarioRu: string;
    /** Role the AI plays, in German, e.g. "Sie sind Personalchefin bei einer Firma in München..." */
    aiRole: string;
    /** First line the AI says (German) */
    opener: string;
    /** Things the learner should try to do/say (Russian) */
    tasksRu: string[];
    /** 3 sentences for read-aloud pronunciation practice (German) */
    readAloud: string[];
  };
}

/** Placement test item */
export interface PlacementItem {
  id: string;
  /** Difficulty band the item measures */
  band: 'A2' | 'B1' | 'B2' | 'C1';
  skill: 'grammar' | 'vocab' | 'reading' | 'listening';
  /** For reading items – short German text shown before the question */
  context?: string;
  /** For listening items – German text that will be played via TTS (not shown) */
  audio?: string;
  question: string;
  options: string[];
  answer: number;
}

// ======================================================================
// Expansion: word bank, extra practice, reading, more listening, mock exams
// Task formats follow the Goethe-Zertifikat task types (original content only).
// ======================================================================

export type TaskItem =
  /** multiple choice a/b/c(/d) */
  | { kind: 'mc'; question: string; options: string[]; answer: number; explanationRu?: string }
  /** richtig/falsch or ja/nein (labels via Task.tfLabels) */
  | { kind: 'tf'; statement: string; answer: boolean; explanationRu?: string }
  /** assign one of Task.options; answer -1 = "keine passende Lösung" (only when Task.allowNone) */
  | { kind: 'match'; prompt: string; answer: number; explanationRu?: string };

export interface Task {
  /** Exam-style instruction in German, e.g. "Lesen Sie den Text. Sind die Aussagen richtig oder falsch?" */
  instructionDe: string;
  instructionRu: string;
  /** Labels for tf items. Default ["Richtig", "Falsch"]; use ["Ja", "Nein"] for opinion tasks */
  tfLabels?: [string, string];
  /** Options for 'match' items (ads, headings, persons, sentences for gaps …). Shown as a), b), c) … */
  options?: string[];
  /** Match items may have no fitting option (answer -1), as in Goethe "Anzeigen" tasks */
  allowNone?: boolean;
  items: TaskItem[];
}

export interface ReadingText {
  title: string;
  /** e.g. "Blogbeitrag", "Zeitungsartikel", "Anzeigen", "Forumsbeiträge", "Hausordnung", "Fachtext" */
  textType: string;
  /** One or more texts. Ads/opinions get labels ("a", "b" … or person names). Gap texts mark gaps as [1], [2] … */
  texts: { label?: string; heading?: string; body: string }[];
  tasks: Task[];
}

export interface ListeningText {
  title: string;
  /** dialog/discussion: every non-empty line starts with "A: ", "B: ", "C: " or "D: " */
  kind: 'monolog' | 'dialog' | 'discussion';
  /** Who A/B/C/D are, e.g. { A: "Moderatorin", B: "Herr Weber, Lehrer" } */
  speakers?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
  /** Situation shown before listening (German), e.g. "Sie hören eine Durchsage am Bahnhof." */
  situation?: string;
  text: string;
  /** How often the text may be played (Goethe: 1 or 2) */
  playCount: 1 | 2;
  tasks: Task[];
}

/** Extra material for a unit, kept in separate files: words/uNN.ts and more/uNN.ts */
export interface UnitMore {
  /** ~20 additional grammar exercises on the unit's grammar topic (beyond the 12 core ones) */
  exercises: Exercise[];
  /** 2 reading texts with exam-style tasks */
  reading: ReadingText[];
  /** 2 additional listening texts with exam-style tasks */
  listening: ListeningText[];
}

export interface ExamReadingPart extends ReadingText {
  teil: number;
  minutes?: number;
}

export interface ExamListeningPart {
  teil: number;
  instructionDe: string;
  instructionRu: string;
  /** one or more recordings (e.g. 5 short texts in Teil 1) */
  segments: ListeningText[];
}

export interface ExamWritingTask {
  teil: number;
  instructionDe: string;
  instructionRu: string;
  /** Situation / input text (e.g. a forum post or an e-mail to answer) */
  situationDe: string;
  points: string[];
  minWords: number;
  register: 'informell' | 'formell' | 'halbformell';
  minutes: number;
  /** points this task is worth in the module (all tasks sum to 100) */
  maxPoints: number;
}

export interface ExamSpeakingTask {
  teil: number;
  mode: 'dialog' | 'presentation' | 'discussion';
  instructionDe: string;
  instructionRu: string;
  /** Topic / situation / slides content (German) */
  situationDe: string;
  points: string[];
  /** For dialog/discussion: role of the AI examiner/partner (German) and its first line */
  aiRole: string;
  opener: string;
  minutes: number;
  maxPoints: number;
}

export interface MockExam {
  /** e.g. "b1-exam-1" */
  id: string;
  level: Level;
  title: string;
  lesen: { minutes: number; parts: ExamReadingPart[] };
  hoeren: { minutes: number; parts: ExamListeningPart[] };
  schreiben: { minutes: number; tasks: ExamWritingTask[] };
  sprechen: { minutes: number; tasks: ExamSpeakingTask[] };
}
