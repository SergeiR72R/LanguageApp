import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-02',
  level: 'A1',
  order: 2,
  title: 'Vokale, Umlaute, Diphthonge',
  titleRu: 'Гласные, умлауты и сочетания гласных',
  goalsRu: [
    'Различать долгие и краткие гласные (Tag — Mann)',
    'Правильно читать ä, ö, ü',
    'Не путать ei и ie, читать eu/äu и au',
    'Считать от 0 до 20, понимать на слух номер телефона и цены',
  ],
  steps: ['phonics', 'vocab', 'grammar', 'listening', 'speaking', 'test'],
  phonics: {
    introRu: `**Гласные** — это звуки, которые можно тянуть: а, э, и, о, у. В немецком гласные бывают **долгими** и **краткими**, и это важно.

- **Долгий** звук мы тянем: Tag [ТА:К] — день.
- **Краткий** звук короткий и резкий: Mann [МАН] — мужчина.

**Двоеточие** в транскрипции значит «тяните звук»: [ТА:К].

Ещё в этом уроке:

- **умлауты** ä, ö, ü — звуки, которых нет в русском;
- **сочетания** ei, ie, eu, au — две буквы, но один звук;
- **окончания** -e, -er, -en в конце слова.

Нажимайте на каждую карточку, слушайте и повторяйте слова вслух — сначала медленно, потом быстрее. Не бойтесь звучать смешно: так и учатся!`,
    groups: [
      {
        titleRu: 'Долгие гласные',
        items: [
          {
            grapheme: 'a, aa, ah',
            soundRu: 'долгое «а:»',
            noteRu: 'Гласная долгая, если она двойная (aa), если после неё стоит h или только одна согласная.',
            examples: [
              { de: 'Tag', ru: 'день', pronRu: 'ТА:К' },
              { de: 'Bahn', ru: 'железная дорога, поезд', pronRu: 'БА:Н' },
              { de: 'Saal', ru: 'зал', pronRu: 'ЗА:ЛЬ' },
            ],
          },
          {
            grapheme: 'e, ee, eh',
            soundRu: 'долгое «э:» (не «е»!)',
            examples: [
              { de: 'Tee', ru: 'чай', pronRu: 'ТЭ:' },
              { de: 'leben', ru: 'жить', pronRu: 'ЛЭ:-бэн' },
              { de: 'zehn', ru: 'десять', pronRu: 'ЦЭ:Н' },
            ],
          },
          {
            grapheme: 'ie',
            soundRu: 'долгое «и:» (e не читается!)',
            noteRu: 'В сочетании ie буква e только показывает, что «и» долгое.',
            examples: [
              { de: 'Liebe', ru: 'любовь', pronRu: 'ЛИ:-бэ' },
              { de: 'Brief', ru: 'письмо', pronRu: 'БРИ:Ф' },
              { de: 'Bier', ru: 'пиво', pronRu: 'БИ:А' },
            ],
          },
          {
            grapheme: 'o, oo, oh',
            soundRu: 'долгое «о:»',
            examples: [
              { de: 'Boot', ru: 'лодка', pronRu: 'БО:Т' },
              { de: 'Sohn', ru: 'сын', pronRu: 'ЗО:Н' },
              { de: 'rot', ru: 'красный', pronRu: 'РО:Т' },
            ],
          },
          {
            grapheme: 'u, uh',
            soundRu: 'долгое «у:»',
            examples: [
              { de: 'gut', ru: 'хорошо', pronRu: 'ГУ:Т' },
              { de: 'Schuh', ru: 'ботинок, туфля', pronRu: 'ШУ:' },
              { de: 'Hut', ru: 'шляпа', pronRu: 'ХУ:Т' },
            ],
          },
        ],
      },
      {
        titleRu: 'Краткие гласные',
        items: [
          {
            grapheme: 'a',
            soundRu: 'краткое «а»',
            noteRu: 'Гласная краткая, если после неё две согласные или двойная согласная: Mann, alt.',
            examples: [
              { de: 'Mann', ru: 'мужчина', pronRu: 'МАН' },
              { de: 'alt', ru: 'старый', pronRu: 'АЛЬТ' },
              { de: 'Hand', ru: 'рука (кисть)', pronRu: 'ХАНТ' },
            ],
          },
          {
            grapheme: 'e',
            soundRu: 'краткое открытое «э»',
            examples: [
              { de: 'Bett', ru: 'кровать', pronRu: 'БЭТ' },
              { de: 'Geld', ru: 'деньги', pronRu: 'ГЭЛЬТ' },
              { de: 'Welt', ru: 'мир (планета)', pronRu: 'ВЭЛЬТ' },
            ],
          },
          {
            grapheme: 'i',
            soundRu: 'краткое «и»',
            examples: [
              { de: 'Tisch', ru: 'стол', pronRu: 'ТИШ' },
              { de: 'Bild', ru: 'картина', pronRu: 'БИЛЬТ' },
              { de: 'mit', ru: 'с (вместе с)', pronRu: 'МИТ' },
            ],
          },
          {
            grapheme: 'o',
            soundRu: 'краткое «о»',
            examples: [
              { de: 'Sonne', ru: 'солнце', pronRu: 'ЗО-нэ' },
              { de: 'oft', ru: 'часто', pronRu: 'ОФТ' },
              { de: 'kommen', ru: 'приходить', pronRu: 'КО-мэн' },
            ],
          },
          {
            grapheme: 'u',
            soundRu: 'краткое «у»',
            examples: [
              { de: 'und', ru: 'и', pronRu: 'УНТ' },
              { de: 'Butter', ru: 'сливочное масло', pronRu: 'БУ-та' },
              { de: 'Luft', ru: 'воздух', pronRu: 'ЛУФТ' },
            ],
          },
        ],
      },
      {
        titleRu: 'Умлауты: ä, ö, ü',
        items: [
          {
            grapheme: 'ä',
            soundRu: 'как «э»',
            noteRu: 'ä и e звучат почти одинаково. Долгое ä — «э:»: spät.',
            examples: [
              { de: 'Bäcker', ru: 'пекарь', pronRu: 'БЭ-ка' },
              { de: 'spät', ru: 'поздно', pronRu: 'ШПЭ:Т' },
              { de: 'Äpfel', ru: 'яблоки', pronRu: 'ЭП-фэль' },
            ],
          },
          {
            grapheme: 'ö',
            soundRu: '«ё» как в «мёд», без «й»; губы трубочкой',
            noteRu: 'Скажите «э» и, не меняя языка, вытяните губы вперёд трубочкой.',
            examples: [
              { de: 'Löwe', ru: 'лев', pronRu: 'ЛЁ:-вэ' },
              { de: 'zwölf', ru: 'двенадцать', pronRu: 'ЦВЁЛЬФ' },
              { de: 'Brötchen', ru: 'булочка', pronRu: 'БРЁ:Т-хьэн' },
            ],
          },
          {
            grapheme: 'ü',
            soundRu: '«ю» без «й»; губы трубочкой',
            noteRu: 'Скажите «и» и, не меняя языка, вытяните губы трубочкой. Не говорите «йу»!',
            examples: [
              { de: 'fünf', ru: 'пять', pronRu: 'ФЮНФ' },
              { de: 'Tür', ru: 'дверь', pronRu: 'ТЮ:А' },
              { de: 'über', ru: 'над; о (ком-то)', pronRu: 'Ю:-ба' },
            ],
          },
        ],
      },
      {
        titleRu: 'Две буквы — один звук',
        items: [
          {
            grapheme: 'ei, ai',
            soundRu: '«ай»',
            examples: [
              { de: 'drei', ru: 'три', pronRu: 'ДРАЙ' },
              { de: 'Ei', ru: 'яйцо', pronRu: 'АЙ' },
              { de: 'Mai', ru: 'май', pronRu: 'МАЙ' },
            ],
          },
          {
            grapheme: 'eu, äu',
            soundRu: '«ой»',
            examples: [
              { de: 'neun', ru: 'девять', pronRu: 'НОЙН' },
              { de: 'heute', ru: 'сегодня', pronRu: 'ХОЙ-тэ' },
              { de: 'Häuser', ru: 'дома', pronRu: 'ХОЙ-за' },
            ],
          },
          {
            grapheme: 'au',
            soundRu: '«ау»',
            examples: [
              { de: 'Frau', ru: 'женщина', pronRu: 'ФРАУ' },
              { de: 'auch', ru: 'тоже', pronRu: 'АУХ' },
              { de: 'blau', ru: 'синий', pronRu: 'БЛАУ' },
            ],
          },
          {
            grapheme: 'ei ↔ ie',
            soundRu: 'читаем по ВТОРОЙ букве: ei = «ай», ie = «и:»',
            noteRu: 'Самая частая ошибка! Запомните пару: Wein — вино, Wien — Вена.',
            examples: [
              { de: 'Wein', ru: 'вино', pronRu: 'ВАЙН' },
              { de: 'Wien', ru: 'Вена', pronRu: 'ВИ:Н' },
              { de: 'Bein', ru: 'нога', pronRu: 'БАЙН' },
              { de: 'Biene', ru: 'пчела', pronRu: 'БИ:-нэ' },
            ],
          },
        ],
      },
      {
        titleRu: 'Конец слова: -e, -er, -en',
        items: [
          {
            grapheme: '-e',
            soundRu: 'короткое «э» — его нужно произносить!',
            examples: [
              { de: 'Schule', ru: 'школа', pronRu: 'ШУ:-лэ' },
              { de: 'Tasse', ru: 'чашка', pronRu: 'ТА-сэ' },
              { de: 'Blume', ru: 'цветок', pronRu: 'БЛУ:-мэ' },
            ],
          },
          {
            grapheme: '-er',
            soundRu: 'почти как короткое «а»',
            noteRu: 'Не говорите «эр» в конце: Lehrer — [ЛЭ:-ра], а не «лерер».',
            examples: [
              { de: 'Lehrer', ru: 'учитель', pronRu: 'ЛЭ:-ра' },
              { de: 'Bruder', ru: 'брат', pronRu: 'БРУ:-да' },
              { de: 'Fenster', ru: 'окно', pronRu: 'ФЭН-ста' },
            ],
          },
          {
            grapheme: '-en',
            soundRu: '«эн», «э» очень короткое',
            examples: [
              { de: 'haben', ru: 'иметь', pronRu: 'ХА:-бэн' },
              { de: 'Garten', ru: 'сад', pronRu: 'ГАР-тэн' },
              { de: 'lesen', ru: 'читать', pronRu: 'ЛЭ:-зэн' },
            ],
          },
        ],
      },
    ],
  },
  grammar: {
    topic: 'Vokale und Umlaute lesen',
    topicRu: 'Как читать гласные и умлауты',
    explanationRu: `**Долгая или краткая гласная?** Есть простые подсказки.

Гласная **долгая**, если:

- она написана два раза: **Tee, Boot, Saal**;
- после неё стоит **h** (сама h не читается, она только тянет звук): **Bahn, Sohn, zehn**;
- после неё только **одна** согласная: **Tag, gut, Name**;
- это **ie**: **vier, sieben** — долгое «и:».

Гласная **краткая**, если после неё **две** согласные или **двойная** согласная: **Mann, Bett, bitte, Sonne, und**.

**Умлауты:**

- **ä** = «э»: Käse, spät
- **ö** = «ё» без «й»: schön, zwölf
- **ü** = «ю» без «й»: fünf, Tür

Для ö и ü губы вытягиваем **трубочкой**.

**Сочетания гласных** — две буквы, но один звук:

- **ei, ai** = «ай»: drei, nein, Mai
- **ie** = «и:»: vier, sieben
- **eu, äu** = «ой»: neun, heute, Häuser
- **au** = «ау»: Frau, blau

**Главная ловушка — ei и ie.** Читайте по **второй** букве: в ei вторая i — и звук «ай»; в ie вторая e — и звук «и:». Пара для запоминания: **Wein** [ВАЙН] — вино, **Wien** [ВИ:Н] — Вена. И ещё: **neun** [НОЙН] — девять, **nein** [НАЙН] — нет.

**Конец слова:**

- **-e** — короткое «э»: bitte [БИ-тэ]. Не проглатывайте его!
- **-er** — почти «а»: Vater [ФА:-та], Lehrer [ЛЭ:-ра].
- **-en** — «эн»: haben [ХА:-бэн].

**Числа 13–19:** 3 + 10 = drei**zehn**, 14 = vier**zehn**. Но внимание: **sechzehn** (без s) и **siebzehn** (без en). 20 = **zwanzig**.`,
    table: [
      ['Буквы', 'Звук', 'Пример'],
      ['a / aa, ah', '«а» / «а:»', 'Mann — Tag, Bahn'],
      ['e / ee, eh', '«э» / «э:»', 'Bett — Tee, zehn'],
      ['i / ie', '«и» / «и:»', 'bitte — vier'],
      ['o / oo, oh', '«о» / «о:»', 'Sonne — Boot, Sohn'],
      ['u / uh', '«у» / «у:»', 'und — gut, Schuh'],
      ['ä', '«э»', 'Käse, Bäcker'],
      ['ö', '«ё» (губы трубочкой)', 'schön, zwölf'],
      ['ü', '«ю» (губы трубочкой)', 'fünf, Tür'],
      ['ei, ai', '«ай»', 'drei, Mai'],
      ['eu, äu', '«ой»', 'neun, Häuser'],
      ['au', '«ау»', 'Frau, blau'],
      ['-e / -er / -en', '«э» / «а» / «эн»', 'Schule / Lehrer / haben'],
    ],
    examples: [
      { de: 'eins, zwei, drei, vier, fünf', ru: 'один, два, три, четыре, пять' },
      { de: 'Wein – Wien', ru: 'вино — Вена' },
      { de: 'Neun, nicht nein!', ru: 'Девять, а не «нет»!' },
      { de: 'sechs – sechzehn, sieben – siebzehn', ru: 'шесть — шестнадцать, семь — семнадцать' },
      { de: 'Das kostet zwölf Euro.', ru: 'Это стоит двенадцать евро.' },
      { de: 'Die Telefonnummer ist null, eins, sieben, eins …', ru: 'Номер телефона: ноль, один, семь, один…' },
    ],
    exercises: [
      {
        type: 'choice',
        audio: 'Wein',
        prompt: 'Какое слово вы слышите?',
        options: ['Wien', 'Wein', 'Wind', 'wann'],
        answer: 1,
        explanationRu: 'Вы слышали «ай» — это ei: Wein [ВАЙН] — вино. Wien [ВИ:Н] — это Вена.',
      },
      {
        type: 'choice',
        audio: 'vier',
        prompt: 'Какое слово вы слышите?',
        options: ['für', 'vier', 'vor', 'Feier'],
        answer: 1,
        explanationRu: 'vier [ФИ:А] — четыре: ie = долгое «и:». В слове für звучит ü (губы трубочкой).',
      },
      {
        type: 'choice',
        audio: 'neun',
        prompt: 'Какое слово вы слышите?',
        options: ['nein', 'nun', 'neun', 'nie'],
        answer: 2,
        explanationRu: 'neun [НОЙН] — девять: eu = «ой». nein [НАЙН] — нет, nie [НИ:] — никогда.',
      },
      {
        type: 'choice',
        audio: 'schön',
        prompt: 'Какое слово вы слышите?',
        options: ['schon', 'schön', 'Schein', 'Schuh'],
        answer: 1,
        explanationRu: 'schön [ШЁ:Н] — красивый: ö звучит как «ё» с губами трубочкой. schon [ШО:Н] — уже.',
      },
      {
        type: 'gap',
        audio: 'drei',
        prompt: 'Напишите слово, которое слышите: ___',
        answers: ['drei'],
        hintRu: 'число 3',
        explanationRu: 'drei [ДРАЙ] — три. Звук «ай» пишется буквами ei.',
      },
      {
        type: 'gap',
        audio: 'Frau',
        prompt: 'Напишите слово, которое слышите: ___',
        answers: ['Frau'],
        hintRu: 'женщина',
        explanationRu: 'Frau [ФРАУ] — женщина. Звук «ау» пишется au. Это существительное — с большой буквы.',
      },
      {
        type: 'gap',
        audio: 'zwölf',
        prompt: 'Напишите число цифрами: ___',
        answers: ['12'],
        explanationRu: 'zwölf [ЦВЁЛЬФ] — двенадцать.',
      },
      {
        type: 'gap',
        audio: 'siebzehn',
        prompt: 'Напишите число цифрами: ___',
        answers: ['17'],
        explanationRu: 'siebzehn [ЗИ:П-цэ:н] — семнадцать: sieben без -en + zehn.',
      },
      {
        type: 'gap',
        audio: 'Das kostet fünfzehn Euro.',
        prompt: 'Сколько это стоит? ___ евро',
        answers: ['15'],
        explanationRu: 'fünfzehn = fünf (5) + zehn (10) = 15.',
      },
      {
        type: 'choice',
        prompt: 'Как читается слово «heute» (сегодня)?',
        options: ['ХОЙ-тэ', 'ХАУ-тэ', 'ХЕ-у-тэ', 'ХОЙ-та'],
        answer: 0,
        explanationRu: 'eu читается «ой», а -e в конце — короткое «э»: [ХОЙ-тэ].',
      },
      {
        type: 'choice',
        prompt: 'В каком слове гласная долгая?',
        options: ['Mann', 'Bett', 'Tee', 'und'],
        answer: 2,
        explanationRu: 'В Tee двойная ee — это долгое «э:». В Mann, Bett, und после гласной две согласные — гласная краткая.',
      },
      {
        type: 'choice',
        prompt: 'Как читается слово «Liebe» (любовь)?',
        options: ['ЛАЙ-бэ', 'ЛИ:-бэ', 'ЛИ-е-бэ'],
        answer: 1,
        explanationRu: 'ie — это одно долгое «и:», буква e отдельно не читается: [ЛИ:-бэ].',
      },
    ],
  },
  vocab: [
    { de: 'null', pos: 'other', ru: 'ноль', example: 'Null plus drei ist drei.', exampleRu: 'Ноль плюс три — три.', pronRu: 'НУЛЬ' },
    { de: 'eins', pos: 'other', ru: 'один', example: 'Eins plus eins ist zwei.', exampleRu: 'Один плюс один — два.', pronRu: 'АЙНС' },
    { de: 'zwei', pos: 'other', ru: 'два', example: 'Zwei Kaffee, bitte!', exampleRu: 'Два кофе, пожалуйста!', pronRu: 'ЦВАЙ' },
    { de: 'drei', pos: 'other', ru: 'три', example: 'Drei Brötchen, bitte.', exampleRu: 'Три булочки, пожалуйста.', pronRu: 'ДРАЙ' },
    { de: 'vier', pos: 'other', ru: 'четыре', example: 'Vier plus vier ist acht.', exampleRu: 'Четыре плюс четыре — восемь.', pronRu: 'ФИ:А' },
    { de: 'fünf', pos: 'other', ru: 'пять', example: 'Das kostet fünf Euro.', exampleRu: 'Это стоит пять евро.', pronRu: 'ФЮНФ' },
    { de: 'sechs', pos: 'other', ru: 'шесть', example: 'Sechs Eier, bitte.', exampleRu: 'Шесть яиц, пожалуйста.', pronRu: 'ЗЭКС' },
    { de: 'sieben', pos: 'other', ru: 'семь', example: 'Die Woche hat sieben Tage.', exampleRu: 'В неделе семь дней.', pronRu: 'ЗИ:-бэн' },
    { de: 'acht', pos: 'other', ru: 'восемь', example: 'Es ist acht Uhr.', exampleRu: 'Сейчас восемь часов.', pronRu: 'АХТ' },
    { de: 'neun', pos: 'other', ru: 'девять', example: 'Neun, nicht nein!', exampleRu: 'Девять, а не «нет»!', pronRu: 'НОЙН' },
    { de: 'zehn', pos: 'other', ru: 'десять', example: 'Zehn Euro, bitte.', exampleRu: 'Десять евро, пожалуйста.', pronRu: 'ЦЭ:Н' },
    { de: 'elf', pos: 'other', ru: 'одиннадцать', example: 'Elf plus eins ist zwölf.', exampleRu: 'Одиннадцать плюс один — двенадцать.', pronRu: 'ЭЛЬФ' },
    { de: 'zwölf', pos: 'other', ru: 'двенадцать', example: 'Es ist zwölf Uhr.', exampleRu: 'Сейчас двенадцать часов.', pronRu: 'ЦВЁЛЬФ' },
    { de: 'dreizehn', pos: 'other', ru: 'тринадцать', example: 'Anna ist dreizehn.', exampleRu: 'Анне тринадцать лет.', pronRu: 'ДРАЙ-цэ:н' },
    { de: 'sechzehn', forms: 'без s: sech-zehn', pos: 'other', ru: 'шестнадцать', example: 'Lisa ist sechzehn.', exampleRu: 'Лизе шестнадцать лет.', pronRu: 'ЗЭХЬ-цэ:н' },
    { de: 'siebzehn', forms: 'без en: sieb-zehn', pos: 'other', ru: 'семнадцать', example: 'Das kostet siebzehn Euro.', exampleRu: 'Это стоит семнадцать евро.', pronRu: 'ЗИ:П-цэ:н' },
    { de: 'zwanzig', pos: 'other', ru: 'двадцать', example: 'Zwanzig Euro, bitte.', exampleRu: 'Двадцать евро, пожалуйста.', pronRu: 'ЦВАН-цихь' },
    { de: 'Zahl', article: 'die', plural: '-en', pos: 'noun', ru: 'число', example: 'Schreiben Sie die Zahl, bitte.', exampleRu: 'Напишите число, пожалуйста.', pronRu: 'ди ЦА:ЛЬ' },
    { de: 'Telefonnummer', article: 'die', plural: '-n', pos: 'noun', ru: 'номер телефона', example: 'Wie ist die Telefonnummer?', exampleRu: 'Какой номер телефона?', pronRu: 'ди тэ-лэ-ФО:Н-ну-ма' },
    { de: 'Euro', article: 'der', plural: '-s', forms: 'после числа без -s: drei Euro', pos: 'noun', ru: 'евро', example: 'Das kostet drei Euro.', exampleRu: 'Это стоит три евро.', pronRu: 'дер ОЙ-ро' },
  ],
  listening: {
    title: 'Eine Telefonnummer und Preise',
    kind: 'dialog',
    text: `A: Hallo, Mia! Wie ist die Nummer von Paul?
B: Moment … Null, eins, sieben, eins – fünf, drei, acht, neun, zwei.
A: Wie bitte? Noch einmal, bitte. Langsam!
B: Null, eins, sieben, eins – fünf, drei, acht, neun, zwei.
A: Danke! Und was kostet das Kino heute?
B: Zehn Euro. Und Popcorn kostet fünf Euro.
A: Okay, danke! Tschüss!
B: Tschüss!`,
    questions: [
      { question: 'Die Nummer ist von …', options: ['Mia', 'Paul', 'Max'], answer: 1 },
      { question: 'Die Nummer beginnt mit …', options: ['0171', '0711', '0161'], answer: 0 },
      { question: 'Die Nummer ist …', options: ['0171 58392', '0171 53829', '0171 53892'], answer: 2 },
      { question: 'Das Kino kostet …', options: ['12 Euro', '10 Euro', '2 Euro'], answer: 1 },
      { question: 'Popcorn kostet …', options: ['5 Euro', '15 Euro', '9 Euro'], answer: 0 },
    ],
  },
  writing: {
    taskRu: 'Напишите несколько чисел словами: свой номер телефона (можно придуманный) и цены двух вещей. Например: «Meine Telefonnummer ist null, eins, sieben …», «Der Kaffee kostet drei Euro».',
    taskDe: 'Schreiben Sie Ihre Telefonnummer in Wörtern und zwei Preise.',
    points: ['Meine Telefonnummer ist …', 'Der Kaffee kostet … Euro.', 'Das Buch kostet … Euro.'],
    minWords: 20,
    usefulPhrases: ['Meine Telefonnummer ist …', 'null, eins, zwei, drei …', 'Das kostet … Euro.', 'Der Tee kostet zwei Euro.', 'Danke!'],
  },
  speaking: {
    scenarioRu: 'Читаем вслух числа и слова с трудными гласными. Нажмите на фразу, послушайте и повторите.',
    aiRole: '',
    opener: '',
    tasksRu: [
      'Слушайте и повторяйте каждую строчку 2–3 раза.',
      'Следите за ü в «fünf» и ö в «zwölf»: губы трубочкой.',
      'Не путайте: neun [НОЙН] — девять, nein [НАЙН] — нет, nie [НИ:] — никогда.',
    ],
    readAloud: ['Eins, zwei, drei, vier, fünf.', 'Sechs, sieben, acht, neun, zehn.', 'Elf, zwölf, dreizehn.', 'Das kostet zwanzig Euro.', 'Neun, nein, nie.'],
  },
};
