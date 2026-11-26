import type { VocabItem } from '../../types';

// Word bank A1 · Unit 05 — Zahlen, Alter, Kontakt
export const words: VocabItem[] = [
  // Zahlen und Rechnen
  { de: 'tausend', pos: 'other', ru: 'тысяча (1000)', example: 'Das Fahrrad kostet tausend Euro.', exampleRu: 'Велосипед стоит тысячу евро.', pronRu: 'ТАУ-зэнт' },
  { de: 'jung', pos: 'adj', ru: 'молодой', example: 'Paul ist jung, er ist zwanzig.', exampleRu: 'Пауль молодой, ему двадцать.', pronRu: 'ЮНГ' },
  { de: 'Alter', article: 'das', plural: '–', pos: 'noun', ru: 'возраст', example: 'Name, Alter, Adresse – bitte!', exampleRu: 'Имя, возраст, адрес — пожалуйста!', pronRu: 'дас АЛЬ-та' },

  // Telefon und Internet
  { de: 'Vorwahl', article: 'die', plural: '-en', pos: 'noun', ru: 'телефонный код (города)', example: 'Die Vorwahl ist null, drei, null.', exampleRu: 'Код — ноль, три, ноль.', pronRu: 'ди ФОР-валь' },
  { de: 'Telefon', article: 'das', plural: '-e', pos: 'noun', ru: 'телефон', example: 'Das Telefon ist hier.', exampleRu: 'Телефон здесь.', pronRu: 'дас тэ-лэ-ФОН' },
  { de: 'telefonieren', forms: 'er telefoniert, hat telefoniert', pos: 'verb', ru: 'разговаривать по телефону', example: 'Ich telefoniere mit Anna.', exampleRu: 'Я разговариваю по телефону с Анной.', pronRu: 'тэ-лэ-фо-НИ:-рэн' },
  { de: 'Internet', article: 'das', plural: '–', pos: 'noun', ru: 'интернет', example: 'Ich habe Internet zu Hause.', exampleRu: 'У меня дома есть интернет.', pronRu: 'дас ИН-тэр-нэт' },

  // Formular
  { de: 'Geburtsort', article: 'der', plural: '-e', pos: 'noun', ru: 'место рождения', example: 'Mein Geburtsort ist Omsk.', exampleRu: 'Место моего рождения — Омск.', pronRu: 'дер гэ-БУРТС-орт' },

  // regelmäßige Verben
  { de: 'studieren', forms: 'er studiert, hat studiert', pos: 'verb', ru: 'учиться в вузе', example: 'Ich studiere in Leipzig.', exampleRu: 'Я учусь (в университете) в Лейпциге.', pronRu: 'шту-ДИ:-рэн' },
  { de: 'spielen', forms: 'er spielt, hat gespielt', pos: 'verb', ru: 'играть', example: 'Wir spielen Fußball.', exampleRu: 'Мы играем в футбол.', pronRu: 'ШПИ:-лэн' },
  { de: 'hören', forms: 'er hört, hat gehört', pos: 'verb', ru: 'слышать, слушать', example: 'Ich höre Musik.', exampleRu: 'Я слушаю музыку.', pronRu: 'ХЁ-рэн' },
  { de: 'Student', article: 'der', plural: '-en', pos: 'noun', ru: 'студент', example: 'Max ist Student.', exampleRu: 'Макс — студент.', pronRu: 'дер шту-ДЭНТ' },
  { de: 'Studentin', article: 'die', plural: '-nen', pos: 'noun', ru: 'студентка', example: 'Olga ist Studentin.', exampleRu: 'Ольга — студентка.', pronRu: 'ди шту-ДЭН-тин' },

  // mehr Zahlen und Kontakt
  { de: 'Million', article: 'die', plural: '-en', pos: 'noun', ru: 'миллион', example: 'Tausend mal tausend ist eine Million.', exampleRu: 'Тысяча умножить на тысячу — миллион.', pronRu: 'ди ми-ЛЬЁН' },
  { de: 'Prozent', article: 'das', plural: '-e', pos: 'noun', ru: 'процент', example: 'Fünfzig Prozent sind die Hälfte.', exampleRu: 'Пятьдесят процентов — это половина.', pronRu: 'дас про-ЦЭНТ' },
  { de: 'Glückszahl', article: 'die', plural: '-en', pos: 'noun', ru: 'счастливое число', example: 'Sieben ist meine Glückszahl.', exampleRu: 'Семь — моё счастливое число.', pronRu: 'ди ГЛЮКС-цаль' },
  { de: 'Ort', article: 'der', plural: '-e', pos: 'noun', ru: 'место; населённый пункт (в анкете)', example: 'Postleitzahl und Ort: 50674 Köln', exampleRu: 'Индекс и населённый пункт: 50674 Кёльн', pronRu: 'дер ОРТ' },
  { de: 'SMS', article: 'die', plural: '-', pos: 'noun', ru: 'SMS-сообщение', example: 'Ich schreibe eine SMS.', exampleRu: 'Я пишу SMS.', pronRu: 'ди эс-эм-ЭС' },
  { de: 'Anruf', article: 'der', plural: '-e', pos: 'noun', ru: 'телефонный звонок', example: 'Danke für den Anruf!', exampleRu: 'Спасибо за звонок!', pronRu: 'дер АН-руф' },

  // Fragen
  { de: 'Wie alt sind Sie?', pos: 'phrase', ru: 'Сколько Вам лет?', example: 'Wie alt sind Sie? – Ich bin sechzig.', exampleRu: 'Сколько Вам лет? — Мне шестьдесят.', pronRu: 'ВИ: АЛЬТ ЗИНТ зи:' },
  { de: 'Wie ist Ihre Adresse?', pos: 'phrase', ru: 'Какой у Вас адрес?', example: 'Wie ist Ihre Adresse? – Bergstraße 5, Bonn.', exampleRu: 'Какой у Вас адрес? — Бергштрассе 5, Бонн.', pronRu: 'ВИ: ист И:-рэ а-ДРЕ-сэ' },
  { de: 'Wie ist Ihre Telefonnummer?', pos: 'phrase', ru: 'Какой у Вас номер телефона?', example: 'Wie ist Ihre Telefonnummer, bitte?', exampleRu: 'Какой у Вас номер телефона, пожалуйста?', pronRu: 'ВИ: ист И:-рэ тэ-лэ-ФОН-ну-ма' },
  { de: 'Kontaktdaten', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'контактные данные', example: 'Hier sind meine Kontaktdaten.', exampleRu: 'Вот мои контактные данные.', pronRu: 'ди кон-ТАКТ-да-тэн' },
  { de: 'erwachsen', pos: 'adj', ru: 'взрослый', example: 'Meine Kinder sind schon erwachsen.', exampleRu: 'Мои дети уже взрослые.', pronRu: 'эр-ВАК-сэн' },
];
