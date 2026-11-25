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
