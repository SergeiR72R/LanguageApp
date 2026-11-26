import type { VocabItem } from '../../types';

// Word bank A1 · Unit 04 — Hallo! Ich bin …
export const words: VocabItem[] = [
  // kleine Wörter
  { de: 'und', pos: 'conj', ru: 'и, а', example: 'Das sind Anna und Paul.', exampleRu: 'Это Анна и Пауль.', pronRu: 'УНТ' },
  { de: 'auch', pos: 'adv', ru: 'тоже, также', example: 'Ich wohne auch in Berlin.', exampleRu: 'Я тоже живу в Берлине.', pronRu: 'АУХ' },
  { de: 'hier', pos: 'adv', ru: 'здесь, тут', example: 'Ich wohne hier in Bonn.', exampleRu: 'Я живу здесь, в Бонне.', pronRu: 'ХИ:А' },
  { de: 'dort', pos: 'adv', ru: 'там', example: 'Das ist Kiel. Anna wohnt dort.', exampleRu: 'Это Киль. Анна живёт там.', pronRu: 'ДОРТ' },
  { de: 'jetzt', pos: 'adv', ru: 'сейчас, теперь', example: 'Ich wohne jetzt in Köln.', exampleRu: 'Сейчас я живу в Кёльне.', pronRu: 'ЙЕЦТ' },
  { de: 'langsam', pos: 'adj', ru: 'медленный; медленно', example: 'Bitte sprechen Sie langsam.', exampleRu: 'Пожалуйста, говорите медленно.', pronRu: 'ЛАНГ-зам' },

  // im Kurs
  { de: 'Noch einmal, bitte.', pos: 'phrase', ru: 'Ещё раз, пожалуйста.', example: 'Noch einmal, bitte. Langsam, bitte!', exampleRu: 'Ещё раз, пожалуйста. Медленно, пожалуйста!', pronRu: 'НОХ АЙН-маль, БИ-тэ' },
  { de: 'verstehen', forms: 'er versteht, hat verstanden', pos: 'verb', ru: 'понимать', example: 'Ich verstehe das nicht.', exampleRu: 'Я этого не понимаю.', pronRu: 'фер-ШТЕ-эн' },
  { de: 'fragen', forms: 'er fragt, hat gefragt', pos: 'verb', ru: 'спрашивать', example: 'Lena fragt: „Wie heißt du?“', exampleRu: 'Лена спрашивает: «Как тебя зовут?»', pronRu: 'ФРА-гэн' },
  { de: 'antworten', forms: 'er antwortet, hat geantwortet', pos: 'verb', ru: 'отвечать', example: 'Paul antwortet: „Ich heiße Paul.“', exampleRu: 'Пауль отвечает: «Меня зовут Пауль».', pronRu: 'АНТ-вор-тэн' },
  { de: 'sagen', forms: 'er sagt, hat gesagt', pos: 'verb', ru: 'говорить, сказать', example: 'Wie sagt man das auf Deutsch?', exampleRu: 'Как это сказать по-немецки?', pronRu: 'ЗА-гэн' },
  { de: 'Kurs', article: 'der', plural: '-e', pos: 'noun', ru: 'курс (учебный)', example: 'Der Kurs ist hier in Bonn.', exampleRu: 'Курс здесь, в Бонне.', pronRu: 'дер КУРС' },
  { de: 'Teilnehmerin', article: 'die', plural: '-nen', pos: 'noun', ru: 'участница (курса)', example: 'Die Teilnehmerin kommt aus Polen.', exampleRu: 'Участница из Польши.', pronRu: 'ди ТАЙЛЬ-нэ-мэ-рин' },

  // Menschen und Orte
  { de: 'Nachname', article: 'der', plural: '-n', pos: 'noun', ru: 'фамилия (= Familienname)', example: 'Mein Nachname ist Iwanow.', exampleRu: 'Моя фамилия — Иванов.', pronRu: 'дер НАХ-на-мэ' },
  { de: 'Nachbar', article: 'der', plural: '-n', pos: 'noun', ru: 'сосед', example: 'Mein Nachbar heißt Tom.', exampleRu: 'Моего соседа зовут Том.', pronRu: 'дер НАХ-бар' },
  { de: 'Nachbarin', article: 'die', plural: '-nen', pos: 'noun', ru: 'соседка', example: 'Meine Nachbarin kommt aus Italien.', exampleRu: 'Моя соседка из Италии.', pronRu: 'ди НАХ-ба-рин' },
  { de: 'Hauptstadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'столица', example: 'Berlin ist die Hauptstadt.', exampleRu: 'Берлин — столица.', pronRu: 'ди ХАУПТ-штат' },

  // Begrüßung
  { de: 'Herzlich willkommen!', pos: 'phrase', ru: 'Добро пожаловать!', example: 'Herzlich willkommen im Kurs!', exampleRu: 'Добро пожаловать на курс!', pronRu: 'ХЕРЦ-лихь ви-КО-мэн' },
  { de: 'Sehr angenehm.', pos: 'phrase', ru: 'Очень приятно (вежливо).', example: 'Ich bin Frau Roth. – Sehr angenehm.', exampleRu: 'Я госпожа Рот. — Очень приятно.', pronRu: 'ЗЕА АН-гэ-нэм' },

  // mehr für den Kurs
  { de: 'Deutschkurs', article: 'der', plural: '-e', pos: 'noun', ru: 'курс немецкого языка', example: 'Ich bin neu im Deutschkurs.', exampleRu: 'Я новенький на курсе немецкого.', pronRu: 'дер ДОЙЧ-курс' },
  { de: 'Lehrerin', article: 'die', plural: '-nen', pos: 'noun', ru: 'учительница, преподавательница', example: 'Die Lehrerin heißt Frau Roth.', exampleRu: 'Учительницу зовут госпожа Рот.', pronRu: 'ди ЛЕ-рэ-рин' },
  { de: 'Gruppe', article: 'die', plural: '-n', pos: 'noun', ru: 'группа', example: 'Die Gruppe ist international.', exampleRu: 'Группа интернациональная.', pronRu: 'ди ГРУ-пэ' },
  { de: 'genau', pos: 'adv', ru: 'точно; именно так', example: 'Sie kommen aus Polen? – Genau!', exampleRu: 'Вы из Польши? — Точно!', pronRu: 'гэ-НАУ' },
  { de: 'Ach so!', pos: 'phrase', ru: 'Ах вот как! Понятно!', example: 'Ich wohne jetzt in Bonn. – Ach so!', exampleRu: 'Я теперь живу в Бонне. — Ах вот как!', pronRu: 'АХ ЗО' },
];
