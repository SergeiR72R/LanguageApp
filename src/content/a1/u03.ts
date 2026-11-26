import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-03',
  level: 'A1',
  order: 3,
  title: 'Konsonanten und Betonung',
  titleRu: 'Согласные и ударение',
  goalsRu: [
    'Читать сочетания sch, ch, chs, sp, st, ck, pf, ng',
    'Знать, когда s звучит как «з», а z и tz — как «ц»',
    'Правильно ставить ударение в немецких словах',
    'Поздороваться, сказать, откуда вы и на каких языках говорите',
  ],
  steps: ['phonics', 'vocab', 'grammar', 'listening', 'speaking', 'test'],
  phonics: {
    introRu: `В этом уроке — **согласные**, которые читаются не так, как вы ожидаете, и **ударение**.

Хорошая новость: немецкие сочетания букв читаются **всегда одинаково**. Например, **sch** — это всегда «ш», а **z** — всегда «ц». Выучите сочетание один раз — и вы прочитаете сотни слов.

**Ударение** в немецком чаще всего падает на **первый** слог: MOR-gen, A-bend. В транскрипции ударный слог написан ЗАГЛАВНЫМИ буквами, а двоеточие, как и раньше, значит «тяните звук».

Нажимайте на карточки, слушайте и повторяйте вслух. В конце урока вы сможете прочитать и сказать первые фразы: как поздороваться и сказать, откуда вы.`,
    groups: [
      {
        titleRu: 'Сочетания согласных',
        items: [
          {
            grapheme: 'sch',
            soundRu: '«ш»',
            noteRu: 'Три буквы — один звук. tsch = «ч»: Tschüss.',
            examples: [
              { de: 'Schule', ru: 'школа', pronRu: 'ШУ:-лэ' },
              { de: 'Tasche', ru: 'сумка', pronRu: 'ТА-шэ' },
              { de: 'Russisch', ru: 'русский язык', pronRu: 'РУ-сиш' },
            ],
          },
          {
            grapheme: 'ch (ich)',
            soundRu: 'мягкое «хь», как в слове «хитрый»',
            noteRu: 'Так ch звучит после e, i, ä, ö, ü, ei, eu и после согласных. Не говорите «ищ» или «ик»!',
            examples: [
              { de: 'ich', ru: 'я', pronRu: 'ИХЬ' },
              { de: 'nicht', ru: 'не', pronRu: 'НИХЬТ' },
              { de: 'Milch', ru: 'молоко', pronRu: 'МИЛЬХЬ' },
            ],
          },
          {
            grapheme: 'ch (ach)',
            soundRu: 'твёрдое «х», как в слове «ах»',
            noteRu: 'Так ch звучит после a, o, u, au.',
            examples: [
              { de: 'acht', ru: 'восемь', pronRu: 'АХТ' },
              { de: 'Buch', ru: 'книга', pronRu: 'БУ:Х' },
              { de: 'auch', ru: 'тоже', pronRu: 'АУХ' },
            ],
          },
          {
            grapheme: 'chs',
            soundRu: '«кс»',
            examples: [
              { de: 'sechs', ru: 'шесть', pronRu: 'ЗЭКС' },
              { de: 'wachsen', ru: 'расти', pronRu: 'ВАК-сэн' },
              { de: 'Fuchs', ru: 'лиса', pronRu: 'ФУКС' },
            ],
          },
          {
            grapheme: 'sp-',
            soundRu: 'в начале слова — «шп»',
            examples: [
              { de: 'Sport', ru: 'спорт', pronRu: 'ШПОРТ' },
              { de: 'sprechen', ru: 'говорить', pronRu: 'ШПРЭ-хьэн' },
              { de: 'spielen', ru: 'играть', pronRu: 'ШПИ:-лэн' },
            ],
          },
          {
            grapheme: 'st-',
            soundRu: 'в начале слова — «шт»',
            noteRu: 'Только в начале слова (или его части). В середине и в конце st = «ст»: ist, Fenster.',
            examples: [
              { de: 'Stuhl', ru: 'стул', pronRu: 'ШТУ:ЛЬ' },
              { de: 'Student', ru: 'студент', pronRu: 'шту-ДЭНТ' },
              { de: 'Stunde', ru: 'час', pronRu: 'ШТУН-дэ' },
            ],
          },
          {
            grapheme: 'ck',
            soundRu: '«к»; гласная перед ck краткая',
            examples: [
              { de: 'Zucker', ru: 'сахар', pronRu: 'ЦУ-ка' },
              { de: 'Ecke', ru: 'угол', pronRu: 'Э-кэ' },
              { de: 'dick', ru: 'толстый', pronRu: 'ДИК' },
            ],
          },
          {
            grapheme: 'pf',
            soundRu: '«пф» — оба звука вместе, быстро',
            examples: [
              { de: 'Apfel', ru: 'яблоко', pronRu: 'АП-фэль' },
              { de: 'Kopf', ru: 'голова', pronRu: 'КОПФ' },
              { de: 'Pfanne', ru: 'сковорода', pronRu: 'ПФА-нэ' },
            ],
          },
          {
            grapheme: 'ng',
            soundRu: 'носовое «н», «г» почти не слышно',
            noteRu: 'Как в английском «sing». Не говорите отдельное твёрдое «г» в конце.',
            examples: [
              { de: 'lang', ru: 'длинный, долго', pronRu: 'ЛАНГ' },
              { de: 'Zeitung', ru: 'газета', pronRu: 'ЦАЙ-тунг' },
              { de: 'singen', ru: 'петь', pronRu: 'ЗИН-гэн' },
            ],
          },
        ],
      },
      {
        titleRu: 'Буквы с особыми правилами',
        items: [
          {
            grapheme: 's + гласная',
            soundRu: '«з»',
            noteRu: 'S перед гласной звучит звонко, как «з». В конце слова — «с»: Haus.',
            examples: [
              { de: 'sagen', ru: 'говорить, сказать', pronRu: 'ЗА:-гэн' },
              { de: 'Suppe', ru: 'суп', pronRu: 'ЗУ-пэ' },
              { de: 'lesen', ru: 'читать', pronRu: 'ЛЭ:-зэн' },
            ],
          },
          {
            grapheme: 'ss, ß',
            soundRu: 'всегда глухое «с»',
            noteRu: 'ss пишут после краткой гласной (Klasse), ß — после долгой гласной или после ei, au (Grüße, heißen).',
            examples: [
              { de: 'Klasse', ru: 'класс', pronRu: 'КЛА-сэ' },
              { de: 'heißen', ru: 'называться', pronRu: 'ХАЙ-сэн' },
              { de: 'Grüße', ru: 'приветы (в письме)', pronRu: 'ГРЮ:-сэ' },
            ],
          },
          {
            grapheme: 'z, tz',
            soundRu: '«ц» (не «з»!)',
            examples: [
              { de: 'Zeit', ru: 'время', pronRu: 'ЦАЙТ' },
              { de: 'zwei', ru: 'два', pronRu: 'ЦВАЙ' },
              { de: 'Platz', ru: 'место; площадь', pronRu: 'ПЛАЦ' },
              { de: 'jetzt', ru: 'сейчас', pronRu: 'ЙЭЦТ' },
            ],
          },
          {
            grapheme: 'v, w',
            soundRu: 'v = «ф», w = «в»',
            examples: [
              { de: 'von', ru: 'от', pronRu: 'ФОН' },
              { de: 'Vogel', ru: 'птица', pronRu: 'ФО:-гэль' },
              { de: 'wohnen', ru: 'жить (где-то)', pronRu: 'ВО:-нэн' },
              { de: 'Wetter', ru: 'погода', pronRu: 'ВЭ-та' },
            ],
          },
          {
            grapheme: 'j',
            soundRu: '«й»: ja = «я», ju = «ю», jo = «йо»',
            examples: [
              { de: 'jung', ru: 'молодой', pronRu: 'ЮНГ' },
              { de: 'Junge', ru: 'мальчик', pronRu: 'ЮН-гэ' },
              { de: 'Joghurt', ru: 'йогурт', pronRu: 'ЙО:-гурт' },
            ],
          },
          {
            grapheme: 'h после гласной',
            soundRu: 'не читается, только тянет гласную',
            noteRu: 'В начале слова или слога h — лёгкий выдох (Haus). После гласной — немая буква: gehen = [ГЭ:-эн].',
            examples: [
              { de: 'gehen', ru: 'идти', pronRu: 'ГЭ:-эн' },
              { de: 'fahren', ru: 'ехать', pronRu: 'ФА:-рэн' },
              { de: 'Sohn', ru: 'сын', pronRu: 'ЗО:Н' },
            ],
          },
          {
            grapheme: '-b, -d, -g',
            soundRu: 'в конце слова звучат глухо: «п», «т», «к»',
            noteRu: 'Как в русском: «хлеб» звучит «хлеп». Так же в немецком: Tag = [ТА:К].',
            examples: [
              { de: 'Tag', ru: 'день', pronRu: 'ТА:К' },
              { de: 'halb', ru: 'половина', pronRu: 'ХАЛЬП' },
              { de: 'rund', ru: 'круглый', pronRu: 'РУНТ' },
            ],
          },
          {
            grapheme: '-ig',
            soundRu: 'в конце слова — «ихь»',
            examples: [
              { de: 'zwanzig', ru: 'двадцать', pronRu: 'ЦВАН-цихь' },
              { de: 'billig', ru: 'дешёвый', pronRu: 'БИ-лихь' },
              { de: 'ruhig', ru: 'спокойный, тихий', pronRu: 'РУ:-ихь' },
            ],
          },
          {
            grapheme: '-tion',
            soundRu: '«цион», ударение на этом слоге',
            examples: [
              { de: 'Station', ru: 'станция', pronRu: 'шта-ЦИО:Н' },
              { de: 'Information', ru: 'информация', pronRu: 'ин-фор-ма-ЦИО:Н' },
              { de: 'Lektion', ru: 'урок (в учебнике)', pronRu: 'лэк-ЦИО:Н' },
            ],
          },
        ],
      },
      {
        titleRu: 'Ударение',
        items: [
          {
            grapheme: 'MOR-gen',
            soundRu: 'обычно ударение на первом слоге',
            noteRu: 'Это главное правило: в немецких словах ударный чаще всего первый слог.',
            examples: [
              { de: 'Morgen', ru: 'утро', pronRu: 'МОР-гэн' },
              { de: 'Abend', ru: 'вечер', pronRu: 'А:-бэнт' },
              { de: 'Fenster', ru: 'окно', pronRu: 'ФЭН-ста' },
            ],
          },
          {
            grapheme: 'be-, ge-, ver-',
            soundRu: 'эти приставки без ударения',
            noteRu: 'Ударение падает на слог после приставки.',
            examples: [
              { de: 'bezahlen', ru: 'платить', pronRu: 'бэ-ЦА:-лэн' },
              { de: 'Gemüse', ru: 'овощи', pronRu: 'гэ-МЮ:-зэ' },
              { de: 'verstehen', ru: 'понимать', pronRu: 'фэр-ШТЭ:-эн' },
            ],
          },
          {
            grapheme: 'Te-le-FON',
            soundRu: 'иностранные слова: ударение часто в конце',
            examples: [
              { de: 'Telefon', ru: 'телефон', pronRu: 'тэ-лэ-ФО:Н' },
              { de: 'Büro', ru: 'офис', pronRu: 'бю-РО:' },
              { de: 'Problem', ru: 'проблема', pronRu: 'про-БЛЭ:М' },
            ],
          },
          {
            grapheme: 'HAUS-tür',
            soundRu: 'сложные слова: ударение на первой части',
            noteRu: 'Haus + Tür = Haustür (входная дверь). Главное ударение — на первом слове.',
            examples: [
              { de: 'Bahnhof', ru: 'вокзал', pronRu: 'БА:Н-хо:ф' },
              { de: 'Haustür', ru: 'входная дверь', pronRu: 'ХАУС-тю:а' },
              { de: 'Kindergarten', ru: 'детский сад', pronRu: 'КИН-да-гар-тэн' },
            ],
          },
        ],
      },
    ],
  },
  grammar: {
    topic: 'Konsonanten, Betonung, erste Sätze lesen',
    topicRu: 'Согласные, ударение и первые фразы',
    explanationRu: `Немецкие согласные почти всегда читаются одинаково. Запомните эти правила — и вы прочитаете любое слово.

**Сочетания букв:**

- **sch** = «ш»: Schule, Tisch
- **ch** после e, i, ä, ö, ü, ei, eu и после согласных = мягкое «хь»: ich, nicht, Milch
- **ch** после a, o, u, au = твёрдое «х»: acht, Buch, auch
- **chs** = «кс»: sechs
- **sp, st** в начале слова = «шп», «шт»: Sport, Stadt. В середине и в конце — «сп», «ст»: ist, Fenster
- **ck** = «к»: Zucker
- **z, tz** = «ц»: Zeit, Platz
- **-tion** = «цион»: Station

**Отдельные буквы:**

- **s** перед гласной = «з»: sagen, Sie. В конце слова — «с»: Haus
- **ss, ß** = «с»: Klasse, heißen
- **v** = «ф»: von, Vater; **w** = «в»: wohnen
- **j** = «й»: ja, jung
- **h** после гласной **не читается**: gehen [ГЭ:-эн], Sohn [ЗО:Н]
- **-ig** в конце = «ихь»: zwanzig
- **b, d, g** в конце слова звучат глухо — «п», «т», «к»: halb, Land, Tag

**Ударение.** Обычно ударение на **первом** слоге: **MOR**-gen, **A**-bend, **SPRA**-che. Исключения:

- приставки **be-, ge-, ver-** без ударения: be-**ZAH**-len, ver-**STE**-hen;
- многие иностранные слова: Te-le-**FON**, Bü-**RO**, Sta-**TION**.

**Первые фразы.** Теперь вы можете прочитать и сказать о себе:

- Ich heiße Olga. — Меня зовут Ольга.
- Ich komme aus Russland. — Я из России.
- Ich spreche Russisch und ein bisschen Deutsch. — Я говорю по-русски и немного по-немецки.

**Типичная ошибка:** читать st и sp по-русски: «Sport» = [ШПОРТ], а не «спорт».`,
    table: [
      ['Буквы', 'Звук', 'Пример'],
      ['sch', 'ш', 'Schule'],
      ['ch (после e, i, ä, ö, ü, ei, eu)', 'хь', 'ich, nicht'],
      ['ch (после a, o, u, au)', 'х', 'acht, Buch'],
      ['chs', 'кс', 'sechs'],
      ['sp-, st- в начале', 'шп, шт', 'Sport, Stadt'],
      ['ck', 'к', 'Zucker'],
      ['z, tz', 'ц', 'Zeit, Platz'],
      ['s + гласная', 'з', 'sagen'],
      ['ss, ß', 'с', 'Klasse, heißen'],
      ['v / w', 'ф / в', 'von / wohnen'],
      ['j', 'й', 'jung'],
      ['h после гласной', 'не читается', 'gehen'],
      ['-ig', 'ихь', 'zwanzig'],
      ['-tion', 'цион', 'Station'],
    ],
    examples: [
      { de: 'Guten Morgen! Wie geht es Ihnen?', ru: 'Доброе утро! Как Ваши дела?' },
      { de: 'Danke, gut. Und Ihnen?', ru: 'Спасибо, хорошо. А у Вас?' },
      { de: 'Ich heiße Olga. Ich komme aus Russland.', ru: 'Меня зовут Ольга. Я из России.' },
      { de: 'Woher kommen Sie? – Aus Österreich.', ru: 'Откуда Вы? — Из Австрии.' },
      { de: 'Ich spreche Russisch und ein bisschen Deutsch.', ru: 'Я говорю по-русски и немного по-немецки.' },
      { de: 'Auf Wiedersehen!', ru: 'До свидания!' },
    ],
    exercises: [
      {
        type: 'choice',
        audio: 'Schule',
        prompt: 'Какое слово вы слышите?',
        options: ['Stuhl', 'Schule', 'Suppe'],
        answer: 1,
        explanationRu: 'Schule [ШУ:-лэ] — школа: sch = «ш». Stuhl [ШТУ:ЛЬ] — стул, Suppe [ЗУ-пэ] — суп.',
      },
      {
        type: 'choice',
        audio: 'ich',
        prompt: 'Какое слово вы слышите?',
        options: ['ach', 'ich', 'euch'],
        answer: 1,
        explanationRu: 'ich [ИХЬ] — я: после i звучит мягкое «хь». В ach после a звучит твёрдое «х».',
      },
      {
        type: 'choice',
        audio: 'Russland',
        prompt: 'Какое слово вы слышите?',
        options: ['Russisch', 'Deutschland', 'Russland'],
        answer: 2,
        explanationRu: 'Russland [РУС-лант] — Россия. Russisch [РУ-сиш] — русский язык.',
      },
      {
        type: 'choice',
        audio: 'sechs',
        prompt: 'Какое слово вы слышите?',
        options: ['sechs', 'sechzehn', 'sieben'],
        answer: 0,
        explanationRu: 'sechs [ЗЭКС] — шесть: chs = «кс», s в начале перед гласной — «з».',
      },
      {
        type: 'gap',
        audio: 'Sport',
        prompt: 'Напишите слово, которое слышите: ___',
        answers: ['Sport'],
        explanationRu: 'Sport [ШПОРТ] — спорт. Звук «шп» в начале слова пишется sp.',
      },
      {
        type: 'gap',
        audio: 'Zeit',
        prompt: 'Напишите слово, которое слышите: ___',
        answers: ['Zeit'],
        hintRu: 'время',
        explanationRu: 'Zeit [ЦАЙТ] — время: «ц» = z, «ай» = ei. Это существительное — с большой буквы.',
      },
      {
        type: 'gap',
        audio: 'Ich komme aus Russland.',
        prompt: 'Откуда этот человек? Ich komme aus ___.',
        answers: ['Russland'],
        explanationRu: 'Ich komme aus Russland — я из России. Russland пишется с двумя s.',
      },
      {
        type: 'gap',
        audio: 'Ich spreche Deutsch.',
        prompt: 'На каком языке говорит человек? Ich spreche ___.',
        answers: ['Deutsch'],
        explanationRu: 'Deutsch [ДОЙЧ] — немецкий язык: eu = «ой», tsch = «ч». Пишется с большой буквы.',
      },
      {
        type: 'choice',
        audio: "Wie geht's?",
        prompt: 'Что вы слышите?',
        options: ['Wie heißen Sie?', "Wie geht's?", 'Woher kommen Sie?'],
        answer: 1,
        explanationRu: "«Wie geht's?» [ви: ГЭ:ТС] — Как дела? Так спрашивают знакомых.",
      },
      {
        type: 'choice',
        prompt: 'Как читается слово «Stadt» (город)?',
        options: ['СТАДТ', 'ШТАТ', 'СТАТ'],
        answer: 1,
        explanationRu: 'st в начале слова = «шт», а dt в конце звучит как «т»: [ШТАТ].',
      },
      {
        type: 'choice',
        prompt: 'Как читается слово «gehen» (идти)?',
        options: ['ГЭ:-эн', 'ГЭ-хэн', 'ГЕ-ен'],
        answer: 0,
        explanationRu: 'h после гласной не читается, она только делает «э» долгим: [ГЭ:-эн].',
      },
      {
        type: 'choice',
        prompt: 'Какой слог ударный в слове «Telefon»?',
        options: ['Te', 'le', 'fon'],
        answer: 2,
        explanationRu: 'Telefon — слово из другого языка, ударение в конце: тэ-лэ-ФО:Н.',
      },
    ],
  },
  vocab: [
    { de: 'Guten Morgen!', pos: 'phrase', ru: 'Доброе утро!', example: 'Guten Morgen, Frau Klein!', exampleRu: 'Доброе утро, госпожа Кляйн!', pronRu: 'ГУ:-тэн МОР-гэн' },
    { de: 'Guten Tag!', pos: 'phrase', ru: 'Добрый день! Здравствуйте!', example: 'Guten Tag, Herr Braun!', exampleRu: 'Добрый день, господин Браун!', pronRu: 'ГУ:-тэн ТА:К' },
    { de: 'Guten Abend!', pos: 'phrase', ru: 'Добрый вечер!', example: 'Guten Abend! Wie geht es Ihnen?', exampleRu: 'Добрый вечер! Как Ваши дела?', pronRu: 'ГУ:-тэн А:-бэнт' },
    { de: 'Gute Nacht!', pos: 'phrase', ru: 'Спокойной ночи!', example: 'Gute Nacht, Mama!', exampleRu: 'Спокойной ночи, мама!', pronRu: 'ГУ:-тэ НАХТ' },
    { de: 'Auf Wiedersehen!', pos: 'phrase', ru: 'До свидания!', example: 'Danke! Auf Wiedersehen!', exampleRu: 'Спасибо! До свидания!', pronRu: 'ауф ВИ:-да-зэ:-эн' },
    { de: "Wie geht's?", pos: 'phrase', ru: 'Как дела? (знакомым, неформально)', example: "Hallo, Tom! Wie geht's?", exampleRu: 'Привет, Том! Как дела?', pronRu: 'ви: ГЭ:ТС' },
    { de: 'Wie geht es Ihnen?', pos: 'phrase', ru: 'Как Ваши дела? (вежливо)', example: 'Guten Tag! Wie geht es Ihnen?', exampleRu: 'Добрый день! Как Ваши дела?', pronRu: 'ви: ГЭ:Т эс И:-нэн' },
    { de: 'gut', pos: 'adj', ru: 'хороший; хорошо', example: 'Gut, danke. Und Ihnen?', exampleRu: 'Хорошо, спасибо. А у Вас?', pronRu: 'ГУ:Т' },
    { de: 'Woher kommen Sie?', pos: 'phrase', ru: 'Откуда Вы?', example: 'Woher kommen Sie? – Aus Polen.', exampleRu: 'Откуда Вы? — Из Польши.', pronRu: 'во-ХЭ:А КО-мэн зи:' },
    { de: 'kommen', forms: 'ich komme, er kommt, Sie kommen', pos: 'verb', ru: 'приходить; быть родом (aus — из)', example: 'Olga kommt aus Moskau.', exampleRu: 'Ольга из Москвы.', pronRu: 'КО-мэн' },
    { de: 'aus', pos: 'prep', ru: 'из (откуда)', example: 'Ich komme aus Russland.', exampleRu: 'Я из России.', pronRu: 'АУС' },
    { de: 'sprechen', forms: 'ich spreche, er spricht, Sie sprechen', pos: 'verb', ru: 'говорить (на языке)', example: 'Ich spreche Russisch.', exampleRu: 'Я говорю по-русски.', pronRu: 'ШПРЭ-хьэн' },
    { de: 'Deutschland', forms: 'без артикля: aus Deutschland', pos: 'other', ru: 'Германия', example: 'Berlin ist in Deutschland.', exampleRu: 'Берлин находится в Германии.', pronRu: 'ДОЙЧ-лант' },
    { de: 'Russland', forms: 'без артикля: aus Russland', pos: 'other', ru: 'Россия', example: 'Ich komme aus Russland.', exampleRu: 'Я из России.', pronRu: 'РУС-лант' },
    { de: 'Österreich', forms: 'без артикля: aus Österreich', pos: 'other', ru: 'Австрия', example: 'Wien ist in Österreich.', exampleRu: 'Вена находится в Австрии.', pronRu: 'Ё:С-тэ-райхь' },
    { de: 'Schweiz', article: 'die', plural: '–', forms: 'с артиклем: aus der Schweiz', pos: 'noun', ru: 'Швейцария', example: 'Anna kommt aus der Schweiz.', exampleRu: 'Анна из Швейцарии.', pronRu: 'ди ШВАЙЦ' },
    { de: 'Deutsch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'немецкий язык', example: 'Ich spreche ein bisschen Deutsch.', exampleRu: 'Я немного говорю по-немецки.', pronRu: 'ДОЙЧ' },
    { de: 'Russisch', forms: 'язык пишется с большой буквы', pos: 'other', ru: 'русский язык', example: 'Sprechen Sie Russisch?', exampleRu: 'Вы говорите по-русски?', pronRu: 'РУ-сиш' },
    { de: 'Land', article: 'das', plural: '-¨er', pos: 'noun', ru: 'страна', example: 'Deutschland ist ein Land in Europa.', exampleRu: 'Германия — страна в Европе.', pronRu: 'дас ЛАНТ' },
    { de: 'Sprache', article: 'die', plural: '-n', pos: 'noun', ru: 'язык (речь)', example: 'Deutsch ist eine schöne Sprache.', exampleRu: 'Немецкий — красивый язык.', pronRu: 'ди ШПРА:-хэ' },
  ],
  listening: {
    title: 'Woher kommen Sie?',
    kind: 'dialog',
    text: `A: Guten Morgen! Ich heiße Klaus. Und wie heißen Sie?
B: Guten Morgen! Ich heiße Olga.
A: Woher kommen Sie, Olga?
B: Ich komme aus Russland. Und Sie?
A: Ich komme aus Österreich, aus Wien.
B: Sprechen Sie Russisch?
A: Nein, nur Deutsch und Englisch.
B: Ich spreche Russisch und ein bisschen Deutsch.
A: Sehr gut! Auf Wiedersehen, Olga!
B: Auf Wiedersehen!`,
    questions: [
      { question: 'Wie heißt die Frau?', options: ['Anna', 'Olga', 'Klaus'], answer: 1 },
      { question: 'Woher kommt Olga?', options: ['aus Russland', 'aus Österreich', 'aus Deutschland'], answer: 0 },
      { question: 'Woher kommt Klaus?', options: ['aus Russland', 'aus der Schweiz', 'aus Österreich'], answer: 2 },
      { question: 'Was spricht Klaus?', options: ['Russisch', 'Deutsch und Englisch', 'Deutsch und Russisch'], answer: 1 },
      { question: 'Wann ist das?', options: ['am Abend', 'in der Nacht', 'am Morgen'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'Напишите о себе 3–4 коротких предложения: поздоровайтесь, назовите своё имя, страну и языки, на которых вы говорите.',
    taskDe: 'Stellen Sie sich vor: Name, Land, Sprachen.',
    points: ['Begrüßung: Guten Tag!', 'Name und Land: Ich heiße … Ich komme aus …', 'Sprachen: Ich spreche …'],
    minWords: 20,
    usefulPhrases: ['Guten Tag!', 'Ich heiße …', 'Ich komme aus …', 'Ich spreche Russisch.', 'Ich spreche ein bisschen Deutsch.', 'Auf Wiedersehen!'],
  },
  speaking: {
    scenarioRu: 'Читаем вслух приветствия и первые фразы о себе. Нажмите на фразу, послушайте и повторите.',
    aiRole: '',
    opener: '',
    tasksRu: [
      'Слушайте и повторяйте каждую фразу 2–3 раза.',
      'Следите за звуками: sp в «spreche» = «шп», ch в «ich» — мягкое «хь», eu в «Deutsch» — «ой».',
      'Потом скажите фразы о себе: своё имя и свою страну.',
    ],
    readAloud: ['Guten Morgen!', "Wie geht's? – Gut, danke.", 'Ich heiße Olga.', 'Ich komme aus Russland.', 'Ich spreche ein bisschen Deutsch.'],
  },
};
