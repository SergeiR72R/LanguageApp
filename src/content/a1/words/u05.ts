import type { VocabItem } from '../../types';

// Word bank A1 · Unit 05 — Zahlen, Alter, Kontakt
export const words: VocabItem[] = [
  // Zahlen und Rechnen
  { de: 'Zahl', article: 'die', plural: '-en', pos: 'noun', ru: 'число, цифра', example: 'Wie heißt die Zahl? – Vierzehn.', exampleRu: 'Как называется это число? — Четырнадцать.', pronRu: 'ди ЦАЛЬ' },
  { de: 'tausend', pos: 'other', ru: 'тысяча (1000)', example: 'Das Fahrrad kostet tausend Euro.', exampleRu: 'Велосипед стоит тысячу евро.', pronRu: 'ТАУ-зэнт' },
  { de: 'plus', pos: 'other', ru: 'плюс', example: 'Zwei plus drei ist fünf.', exampleRu: 'Два плюс три — пять.', pronRu: 'ПЛУС' },
  { de: 'minus', pos: 'other', ru: 'минус', example: 'Zehn minus vier ist sechs.', exampleRu: 'Десять минус четыре — шесть.', pronRu: 'МИ:-нус' },
  { de: 'wie viel', pos: 'adv', ru: 'сколько', example: 'Wie viel ist zehn plus zehn?', exampleRu: 'Сколько будет десять плюс десять?', pronRu: 'ВИ: ФИ:ЛЬ' },
  { de: 'jung', pos: 'adj', ru: 'молодой', example: 'Paul ist jung, er ist zwanzig.', exampleRu: 'Пауль молодой, ему двадцать.', pronRu: 'ЮНГ' },
  { de: 'Alter', article: 'das', plural: '–', pos: 'noun', ru: 'возраст', example: 'Name, Alter, Adresse – bitte!', exampleRu: 'Имя, возраст, адрес — пожалуйста!', pronRu: 'дас АЛЬ-та' },

  // Telefon und Internet
  { de: 'Nummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер', example: 'Ich habe eine neue Nummer.', exampleRu: 'У меня новый номер.', pronRu: 'ди НУ-ма' },
  { de: 'Vorwahl', article: 'die', plural: '-en', pos: 'noun', ru: 'телефонный код (города)', example: 'Die Vorwahl ist null, drei, null.', exampleRu: 'Код — ноль, три, ноль.', pronRu: 'ди ФОР-валь' },
  { de: 'Telefon', article: 'das', plural: '-e', pos: 'noun', ru: 'телефон', example: 'Das Telefon ist hier.', exampleRu: 'Телефон здесь.', pronRu: 'дас тэ-лэ-ФОН' },
  { de: 'telefonieren', forms: 'er telefoniert, hat telefoniert', pos: 'verb', ru: 'разговаривать по телефону', example: 'Ich telefoniere mit Anna.', exampleRu: 'Я разговариваю по телефону с Анной.', pronRu: 'тэ-лэ-фо-НИ:-рэн' },
  { de: 'schicken', forms: 'er schickt, hat geschickt', pos: 'verb', ru: 'посылать, отправлять', example: 'Ich schicke eine E-Mail.', exampleRu: 'Я отправляю электронное письмо.', pronRu: 'ШИ-кэн' },
  { de: 'Internet', article: 'das', plural: '–', pos: 'noun', ru: 'интернет', example: 'Ich habe Internet zu Hause.', exampleRu: 'У меня дома есть интернет.', pronRu: 'дас ИН-тэр-нэт' },

  // Formular
  { de: 'Formular', article: 'das', plural: '-e', pos: 'noun', ru: 'бланк, анкета', example: 'Das Formular ist auf Deutsch.', exampleRu: 'Анкета на немецком.', pronRu: 'дас фор-му-ЛЯР' },
  { de: 'Wohnort', article: 'der', plural: '-e', pos: 'noun', ru: 'место жительства', example: 'Der Wohnort ist Hamburg.', exampleRu: 'Место жительства — Гамбург.', pronRu: 'дер ВОН-орт' },
  { de: 'Geburtsort', article: 'der', plural: '-e', pos: 'noun', ru: 'место рождения', example: 'Mein Geburtsort ist Omsk.', exampleRu: 'Место моего рождения — Омск.', pronRu: 'дер гэ-БУРТС-орт' },
  { de: 'Geburtsdatum', article: 'das', plural: 'die Geburtsdaten', pos: 'noun', ru: 'дата рождения', example: 'Wie ist Ihr Geburtsdatum?', exampleRu: 'Какая у Вас дата рождения?', pronRu: 'дас гэ-БУРТС-да-тум' },
  { de: 'Unterschrift', article: 'die', plural: '-en', pos: 'noun', ru: 'подпись', example: 'Hier ist die Unterschrift.', exampleRu: 'Вот подпись.', pronRu: 'ди УН-тэр-шрифт' },
  { de: 'unterschreiben', forms: 'er unterschreibt, hat unterschrieben', pos: 'verb', ru: 'подписывать', example: 'Bitte unterschreiben Sie hier.', exampleRu: 'Пожалуйста, подпишите здесь.', pronRu: 'ун-тэр-ШРАЙ-бэн' },

  // regelmäßige Verben
  { de: 'studieren', forms: 'er studiert, hat studiert', pos: 'verb', ru: 'учиться в вузе', example: 'Ich studiere in Leipzig.', exampleRu: 'Я учусь (в университете) в Лейпциге.', pronRu: 'шту-ДИ:-рэн' },
  { de: 'spielen', forms: 'er spielt, hat gespielt', pos: 'verb', ru: 'играть', example: 'Wir spielen Fußball.', exampleRu: 'Мы играем в футбол.', pronRu: 'ШПИ:-лэн' },
  { de: 'hören', forms: 'er hört, hat gehört', pos: 'verb', ru: 'слышать, слушать', example: 'Ich höre Musik.', exampleRu: 'Я слушаю музыку.', pronRu: 'ХЁ-рэн' },
  { de: 'brauchen', forms: 'er braucht, hat gebraucht', pos: 'verb', ru: 'нуждаться, «мне нужно»', example: 'Ich brauche eine Adresse.', exampleRu: 'Мне нужен адрес.', pronRu: 'БРАУ-хэн' },
  { de: 'Student', article: 'der', plural: '-en', pos: 'noun', ru: 'студент', example: 'Max ist Student.', exampleRu: 'Макс — студент.', pronRu: 'дер шту-ДЭНТ' },
  { de: 'Studentin', article: 'die', plural: '-nen', pos: 'noun', ru: 'студентка', example: 'Olga ist Studentin.', exampleRu: 'Ольга — студентка.', pronRu: 'ди шту-ДЭН-тин' },
];
