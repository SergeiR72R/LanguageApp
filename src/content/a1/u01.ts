import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a1-01',
  level: 'A1',
  order: 1,
  title: 'Das Alphabet',
  titleRu: 'Алфавит',
  goalsRu: [
    'Знать все немецкие буквы и их названия (A, Be, Ce …)',
    'Не путать буквы, которые похожи на русские, но читаются иначе: B, H, P, V, W, Z …',
    'Продиктовать своё имя по буквам и понять имя по буквам на слух',
    'Поздороваться, попрощаться, сказать «да», «нет», «спасибо», «пожалуйста»',
  ],
  steps: ['phonics', 'vocab', 'grammar', 'listening', 'speaking', 'test'],
  phonics: {
    introRu: `**Немецкие буквы — это латиница**, как в английском. Многие буквы вы уже видели. И хорошая новость: немецкие слова почти всегда читаются **так, как пишутся**. Знаете правила — прочитаете любое слово.

В немецком алфавите **26 обычных букв** и ещё **4 особые**: ä, ö, ü и ß. Мы разделили их на группы:

- буквы, похожие на русские;
- буквы, которые **выглядят** как русские, но читаются **по-другому** (самые коварные!);
- новые буквы;
- особые буквы J, Q, V, W, Z;
- умлауты (буквы с двумя точками) и ß.

Нажмите на букву — вы услышите, как она **называется**. Потом послушайте слова-примеры и обязательно повторите каждое слово вслух.

В транскрипции **двоеточие** значит «тяните звук»: Name [НА:-мэ]. Не торопитесь: лучше 10 минут каждый день, чем час один раз в неделю.`,
    groups: [
      {
        titleRu: 'Похожи на русские буквы',
        items: [
          {
            grapheme: 'A a',
            say: 'A',
            soundRu: 'название «а»; звук — как русское «а»',
            examples: [
              { de: 'Mama', ru: 'мама', pronRu: 'МА-ма' },
              { de: 'Hallo', ru: 'привет', pronRu: 'ха-ЛО:' },
              { de: 'Banane', ru: 'банан', pronRu: 'ба-НА:-нэ' },
            ],
          },
          {
            grapheme: 'K k',
            say: 'Ka',
            soundRu: 'название «ка»; звук — как русское «к»',
            examples: [
              { de: 'Kaffee', ru: 'кофе', pronRu: 'КА-фэ' },
              { de: 'Katze', ru: 'кошка', pronRu: 'КА-цэ' },
              { de: 'Kilo', ru: 'килограмм', pronRu: 'КИ:-ло' },
            ],
          },
          {
            grapheme: 'M m',
            say: 'Em',
            soundRu: 'название «эм»; звук — как русское «м»',
            noteRu: 'Маленькая m похожа на русскую рукописную «т», но читается «м»!',
            examples: [
              { de: 'Minute', ru: 'минута', pronRu: 'ми-НУ:-тэ' },
              { de: 'Moment', ru: 'момент', pronRu: 'мо-МЭНТ' },
            ],
          },
          {
            grapheme: 'O o',
            say: 'O',
            soundRu: 'название «о»; звук — как русское «о»',
            noteRu: 'Немецкое o всегда звучит как «о», даже без ударения. Не превращайте его в «а», как в русском «молоко».',
            examples: [
              { de: 'Oma', ru: 'бабушка', pronRu: 'О:-ма' },
              { de: 'Opa', ru: 'дедушка', pronRu: 'О:-па' },
              { de: 'Ofen', ru: 'печь, духовка', pronRu: 'О:-фэн' },
            ],
          },
          {
            grapheme: 'T t',
            say: 'Te',
            soundRu: 'название «тэ»; звук — как русское «т»',
            examples: [
              { de: 'Tee', ru: 'чай', pronRu: 'ТЭ:' },
              { de: 'Tomate', ru: 'помидор', pronRu: 'то-МА:-тэ' },
              { de: 'Tante', ru: 'тётя', pronRu: 'ТАН-тэ' },
            ],
          },
        ],
      },
      {
        titleRu: 'Выглядят как русские, но читаются иначе',
        items: [
          {
            grapheme: 'B b',
            say: 'Be',
            soundRu: 'название «бэ»; звук «б» (не «в»!)',
            noteRu: 'Большая B похожа на русскую «В», но это всегда «б».',
            examples: [
              { de: 'Brot', ru: 'хлеб', pronRu: 'БРО:Т' },
              { de: 'Bus', ru: 'автобус', pronRu: 'БУС' },
              { de: 'Baby', ru: 'малыш, младенец', pronRu: 'БЭ:-би' },
            ],
          },
          {
            grapheme: 'C c',
            say: 'Ze',
            soundRu: 'название «цэ»; в словах из других языков обычно «к»',
            noteRu: 'C похожа на русскую «С», но звука «с» почти не даёт. В немецких словах C стоит обычно в сочетаниях ch, ck, sch — их мы выучим в юните 3.',
            examples: [
              { de: 'Cola', ru: 'кола', pronRu: 'КО:-ла' },
              { de: 'Computer', ru: 'компьютер', pronRu: 'ком-ПЬЮ:-та' },
              { de: 'Clown', ru: 'клоун', pronRu: 'КЛАУН' },
            ],
          },
          {
            grapheme: 'E e',
            say: 'E',
            soundRu: 'название «э»; звук «э» (не «е»!)',
            noteRu: 'Русское «е» звучит как «йэ». Немецкое e — чистое «э», без «й» в начале.',
            examples: [
              { de: 'Ende', ru: 'конец', pronRu: 'ЭН-дэ' },
              { de: 'Essen', ru: 'еда', pronRu: 'Э-сэн' },
              { de: 'Meter', ru: 'метр', pronRu: 'МЭ:-та' },
            ],
          },
          {
            grapheme: 'H h',
            say: 'Ha',
            soundRu: 'название «ха»; звук — лёгкий выдох «х» (не «н»!)',
            noteRu: 'Большая H похожа на русскую «Н», но это «х». Немецкое h мягче русского «х» — как будто вы дышите на холодное стекло.',
            examples: [
              { de: 'Haus', ru: 'дом', pronRu: 'ХАУС' },
              { de: 'Hund', ru: 'собака', pronRu: 'ХУНТ' },
              { de: 'Hotel', ru: 'гостиница', pronRu: 'хо-ТЭЛЬ' },
            ],
          },
          {
            grapheme: 'P p',
            say: 'Pe',
            soundRu: 'название «пэ»; звук «п» (не «р»!)',
            noteRu: 'P похожа на русскую «Р», но читается «п».',
            examples: [
              { de: 'Papa', ru: 'папа', pronRu: 'ПА-па' },
              { de: 'Post', ru: 'почта', pronRu: 'ПОСТ' },
              { de: 'Pizza', ru: 'пицца', pronRu: 'ПИ-ца' },
            ],
          },
          {
            grapheme: 'X x',
            say: 'Ix',
            soundRu: 'название «икс»; звук «кс» (не «х»!)',
            noteRu: 'X похожа на русскую «Х», но читается «кс».',
            examples: [
              { de: 'Taxi', ru: 'такси', pronRu: 'ТАК-си' },
              { de: 'Text', ru: 'текст', pronRu: 'ТЭКСТ' },
              { de: 'Max', ru: 'Макс (имя)', pronRu: 'МАКС' },
            ],
          },
          {
            grapheme: 'Y y',
            say: 'Ypsilon',
            soundRu: 'название «юпсилон»; обычно звук «ю», в английских словах — «и» или «й»',
            noteRu: 'Y похожа на русскую «У», но это не «у»! Звук «у» в немецком пишется буквой U.',
            examples: [
              { de: 'Typ', ru: 'тип; парень', pronRu: 'ТЮ:П' },
              { de: 'Handy', ru: 'мобильный телефон', pronRu: 'ХЭН-ди' },
              { de: 'Yoga', ru: 'йога', pronRu: 'ЙО:-га' },
            ],
          },
        ],
      },
      {
        titleRu: 'Новые буквы',
        items: [
          {
            grapheme: 'D d',
            say: 'De',
            soundRu: 'название «дэ»; звук «д», в конце слова — «т»',
            examples: [
              { de: 'danke', ru: 'спасибо', pronRu: 'ДАН-кэ' },
              { de: 'Datum', ru: 'дата', pronRu: 'ДА:-тум' },
              { de: 'Dusche', ru: 'душ', pronRu: 'ДУ:-шэ' },
            ],
          },
          {
            grapheme: 'F f',
            say: 'Ef',
            soundRu: 'название «эф»; звук «ф»',
            examples: [
              { de: 'Foto', ru: 'фото', pronRu: 'ФО:-то' },
              { de: 'Film', ru: 'фильм', pronRu: 'ФИЛЬМ' },
              { de: 'Fisch', ru: 'рыба', pronRu: 'ФИШ' },
            ],
          },
          {
            grapheme: 'G g',
            say: 'Ge',
            soundRu: 'название «гэ»; звук «г» (всегда твёрдый)',
            noteRu: 'В конце слова g звучит как «к»: Tag [ТА:К] — день.',
            examples: [
              { de: 'gut', ru: 'хорошо', pronRu: 'ГУ:Т' },
              { de: 'Glas', ru: 'стакан; стекло', pronRu: 'ГЛА:С' },
              { de: 'Gitarre', ru: 'гитара', pronRu: 'ги-ТА-рэ' },
            ],
          },
          {
            grapheme: 'I i',
            say: 'I',
            soundRu: 'название «и»; звук «и»',
            examples: [
              { de: 'Kino', ru: 'кино, кинотеатр', pronRu: 'КИ:-но' },
              { de: 'Kind', ru: 'ребёнок', pronRu: 'КИНТ' },
              { de: 'Insel', ru: 'остров', pronRu: 'ИН-зэль' },
            ],
          },
          {
            grapheme: 'L l',
            say: 'El',
            soundRu: 'название «эль»; звук — между русскими «л» и «ль»',
            examples: [
              { de: 'Lampe', ru: 'лампа', pronRu: 'ЛАМ-пэ' },
              { de: 'Liter', ru: 'литр', pronRu: 'ЛИ:-та' },
            ],
          },
          {
            grapheme: 'N n',
            say: 'En',
            soundRu: 'название «эн»; звук «н»',
            noteRu: 'Маленькая n похожа на русскую «п», но читается «н»!',
            examples: [
              { de: 'Name', ru: 'имя', pronRu: 'НА:-мэ' },
              { de: 'nein', ru: 'нет', pronRu: 'НАЙН' },
              { de: 'Nase', ru: 'нос', pronRu: 'НА:-зэ' },
            ],
          },
          {
            grapheme: 'R r',
            say: 'Er',
            soundRu: 'название «эр»; звук «р», часто горловой (как картавое «р»)',
            noteRu: 'В конце слова r почти не слышно, звучит короткое «а»: Vater [ФА:-та]. Маленькая r похожа на русскую «г» — не путайте!',
            examples: [
              { de: 'Radio', ru: 'радио', pronRu: 'РА:-ди-о' },
              { de: 'Rose', ru: 'роза', pronRu: 'РО:-зэ' },
            ],
          },
          {
            grapheme: 'S s',
            say: 'Es',
            soundRu: 'название «эс»; перед гласной — «з», в конце слова — «с»',
            examples: [
              { de: 'Sofa', ru: 'диван', pronRu: 'ЗО:-фа' },
              { de: 'Salat', ru: 'салат', pronRu: 'за-ЛА:Т' },
              { de: 'Eis', ru: 'мороженое; лёд', pronRu: 'АЙС' },
            ],
          },
          {
            grapheme: 'U u',
            say: 'U',
            soundRu: 'название «у»; звук «у»',
            noteRu: 'Маленькая u похожа на русскую «и», но читается «у»!',
            examples: [
              { de: 'Uni', ru: 'университет', pronRu: 'У-ни' },
              { de: 'Musik', ru: 'музыка', pronRu: 'му-ЗИ:К' },
              { de: 'Mund', ru: 'рот', pronRu: 'МУНТ' },
            ],
          },
        ],
      },
      {
        titleRu: 'Особые буквы: J, Q, V, W, Z',
        items: [
          {
            grapheme: 'J j',
            say: 'Jott',
            soundRu: 'название «йот»; звук «й»: ja = «я», ju = «ю»',
            examples: [
              { de: 'ja', ru: 'да', pronRu: 'Я:' },
              { de: 'Jacke', ru: 'куртка', pronRu: 'Я-кэ' },
              { de: 'Juni', ru: 'июнь', pronRu: 'Ю:-ни' },
            ],
          },
          {
            grapheme: 'Q q',
            say: 'Ku',
            soundRu: 'название «ку»; всегда вместе с u: qu = «кв»',
            examples: [
              { de: 'Quark', ru: 'творог', pronRu: 'КВАРК' },
              { de: 'Quadrat', ru: 'квадрат', pronRu: 'ква-ДРА:Т' },
            ],
          },
          {
            grapheme: 'V v',
            say: 'Fau',
            soundRu: 'название «фау»; обычно звук «ф»',
            noteRu: 'В немецких словах V = «ф»: Vater. В словах из других языков бывает «в»: Vase.',
            examples: [
              { de: 'Vater', ru: 'отец', pronRu: 'ФА:-та' },
              { de: 'viel', ru: 'много', pronRu: 'ФИ:ЛЬ' },
              { de: 'Vase', ru: 'ваза', pronRu: 'ВА:-зэ' },
            ],
          },
          {
            grapheme: 'W w',
            say: 'We',
            soundRu: 'название «вэ»; звук «в»',
            noteRu: 'Не читайте W по-английски («уа»). Wasser = [ВА-са].',
            examples: [
              { de: 'Wasser', ru: 'вода', pronRu: 'ВА-са' },
              { de: 'Wein', ru: 'вино', pronRu: 'ВАЙН' },
              { de: 'wo', ru: 'где', pronRu: 'ВО:' },
            ],
          },
          {
            grapheme: 'Z z',
            say: 'Zett',
            soundRu: 'название «цэт»; звук «ц» (не «з»!)',
            examples: [
              { de: 'Zoo', ru: 'зоопарк', pronRu: 'ЦО:' },
              { de: 'Zimmer', ru: 'комната', pronRu: 'ЦИ-ма' },
              { de: 'zehn', ru: 'десять', pronRu: 'ЦЭ:Н' },
            ],
          },
        ],
      },
      {
        titleRu: 'Умлауты и ß',
        items: [
          {
            grapheme: 'Ä ä',
            say: 'Ä',
            soundRu: 'звук «э»',
            noteRu: 'Две точки над буквой называются «умлаут». ä звучит почти так же, как e.',
            examples: [
              { de: 'Käse', ru: 'сыр', pronRu: 'КЭ:-зэ' },
              { de: 'Hände', ru: 'руки (кисти)', pronRu: 'ХЭН-дэ' },
            ],
          },
          {
            grapheme: 'Ö ö',
            say: 'Ö',
            soundRu: 'звук «ё», как в слове «мёд», но без «й» в начале',
            noteRu: 'Скажите «э» и вытяните губы трубочкой — получится ö.',
            examples: [
              { de: 'Öl', ru: 'масло (растительное)', pronRu: 'Ё:ЛЬ' },
              { de: 'schön', ru: 'красивый', pronRu: 'ШЁ:Н' },
              { de: 'hören', ru: 'слышать, слушать', pronRu: 'ХЁ:-рэн' },
            ],
          },
          {
            grapheme: 'Ü ü',
            say: 'Ü',
            soundRu: 'звук «ю», но без «й» в начале',
            noteRu: 'Скажите «и» и вытяните губы трубочкой — получится ü.',
            examples: [
              { de: 'müde', ru: 'усталый', pronRu: 'МЮ:-дэ' },
              { de: 'grün', ru: 'зелёный', pronRu: 'ГРЮ:Н' },
              { de: 'Tschüss', ru: 'пока', pronRu: 'ЧЮС' },
            ],
          },
          {
            grapheme: 'ß',
            say: 'Eszett',
            soundRu: 'название «эс-цэт»; звук «с» (никогда не «з»)',
            noteRu: 'ß похожа на «В» или «б», но это «с»! Она бывает только маленькой, в середине или в конце слова.',
            examples: [
              { de: 'Straße', ru: 'улица', pronRu: 'ШТРА:-сэ' },
              { de: 'groß', ru: 'большой', pronRu: 'ГРО:С' },
              { de: 'Fuß', ru: 'нога (ступня)', pronRu: 'ФУ:С' },
            ],
          },
        ],
      },
    ],
  },
  grammar: {
    topic: 'Das Alphabet und Buchstabieren',
    topicRu: 'Алфавит и как диктовать слово по буквам',
    explanationRu: `**Алфавит** (das Alphabet) — это все буквы языка по порядку. В немецком 26 обычных букв и 4 особые: **ä, ö, ü, ß**.

У каждой буквы есть **название**: B называется «бэ», H — «ха», J — «йот». Названия нужны, чтобы **продиктовать слово по буквам** (buchstabieren). Немцы делают это очень часто: по телефону, в банке, у врача, особенно с иностранными именами и фамилиями.

**Как диктовать:** называйте буквы по одной, медленно.

- Haus — **Ha, A, U, Es**
- Olga — **O, El, Ge, A**
- Müller — **Em, Ü, El, El, E, Er**

**Полезные фразы:**

- Wie heißen Sie? — Как Вас зовут?
- Wie schreibt man das? — Как это пишется?
- Buchstabieren Sie bitte! — Продиктуйте по буквам, пожалуйста!
- Noch einmal, bitte. Langsam, bitte. — Ещё раз, пожалуйста. Медленно, пожалуйста.

**Ловушки для русских:**

- **B** похожа на «В», но это «б»: Brot [БРО:Т].
- **H** похожа на «Н», но это «х»: Haus [ХАУС].
- **P** похожа на «Р», но это «п»: Post [ПОСТ].
- **V** обычно «ф»: Vater [ФА:-та], а **W** — «в»: Wasser [ВА-са].
- **Z** — это «ц»: Zoo [ЦО:].
- Маленькие буквы: **n** похожа на «п», **u** — на «и», **r** — на «г». Не путайте!

**Большая буква.** Все существительные (слова-предметы: дом, имя, вода) в немецком пишутся **с большой буквы**: das Haus, der Name. Вежливое **Sie** (Вы) — тоже всегда с большой.

Если сразу не всё запомнилось — ничего страшного. Слушайте и повторяйте вслух, и через несколько дней буквы станут родными.`,
    table: [
      ['Буква', 'Название', 'Звук'],
      ['A a', 'A [а]', 'а'],
      ['B b', 'Be [бэ]', 'б'],
      ['C c', 'Ce [цэ]', 'к / ц (чаще в ch, ck, sch)'],
      ['D d', 'De [дэ]', 'д'],
      ['E e', 'E [э]', 'э'],
      ['F f', 'Ef [эф]', 'ф'],
      ['G g', 'Ge [гэ]', 'г'],
      ['H h', 'Ha [ха]', 'х (лёгкий выдох)'],
      ['I i', 'I [и]', 'и'],
      ['J j', 'Jott [йот]', 'й'],
      ['K k', 'Ka [ка]', 'к'],
      ['L l', 'El [эль]', 'л'],
      ['M m', 'Em [эм]', 'м'],
      ['N n', 'En [эн]', 'н'],
      ['O o', 'O [о]', 'о'],
      ['P p', 'Pe [пэ]', 'п'],
      ['Q q', 'Qu [ку]', 'qu = кв'],
      ['R r', 'Er [эр]', 'р'],
      ['S s', 'Es [эс]', 'з / с'],
      ['T t', 'Te [тэ]', 'т'],
      ['U u', 'U [у]', 'у'],
      ['V v', 'Vau [фау]', 'ф'],
      ['W w', 'We [вэ]', 'в'],
      ['X x', 'Ix [икс]', 'кс'],
      ['Y y', 'Ypsilon [ЮП-си-лон]', 'ю / и'],
      ['Z z', 'Zett [цэт]', 'ц'],
      ['Ä ä', 'Ä [э]', 'э'],
      ['Ö ö', 'Ö [ё]', 'ё (губы трубочкой)'],
      ['Ü ü', 'Ü [ю]', 'ю (губы трубочкой)'],
      ['ß', 'Eszett [эс-ЦЭТ]', 'с'],
    ],
    examples: [
      { de: 'Wie heißen Sie?', ru: 'Как Вас зовут?' },
      { de: 'Ich heiße Olga: O, El, Ge, A.', ru: 'Меня зовут Ольга: О, эль, гэ, а.' },
      { de: 'Wie schreibt man das?', ru: 'Как это пишется?' },
      { de: 'Buchstabieren Sie bitte!', ru: 'Продиктуйте, пожалуйста, по буквам!' },
      { de: 'Haus: Ha, A, U, Es.', ru: 'Haus (дом): ха, а, у, эс.' },
      { de: 'Noch einmal, bitte. Langsam, bitte.', ru: 'Ещё раз, пожалуйста. Медленно, пожалуйста.' },
    ],
    exercises: [
      {
        type: 'choice',
        audio: 'Jott',
        prompt: 'Послушайте. Какую букву вы слышите?',
        options: ['J', 'G', 'I', 'Y'],
        answer: 0,
        explanationRu: 'Jott [йот] — название буквы J. G называется «гэ», I — «и», Y — «юпсилон».',
      },
      {
        type: 'choice',
        audio: 'Ha',
        prompt: 'Послушайте. Какую букву вы слышите?',
        options: ['A', 'K', 'H', 'R'],
        answer: 2,
        explanationRu: 'Ha [ха] — это буква H. Она похожа на русскую «Н», но называется «ха» и звучит как лёгкое «х».',
      },
      {
        type: 'choice',
        audio: 'We',
        prompt: 'Послушайте. Какую букву вы слышите?',
        options: ['V', 'W', 'B', 'E'],
        answer: 1,
        explanationRu: 'We [вэ] — это W. Буква V называется «фау», B — «бэ», E — «э».',
      },
      {
        type: 'choice',
        audio: 'Zett',
        prompt: 'Послушайте. Какую букву вы слышите?',
        options: ['S', 'C', 'Z', 'X'],
        answer: 2,
        explanationRu: 'Zett [цэт] — это Z. S называется «эс», C — «цэ», X — «икс».',
      },
      {
        type: 'gap',
        audio: 'Ha, A, U, Es',
        prompt: 'Слово диктуют по буквам. Напишите его: ___',
        answers: ['Haus'],
        hintRu: 'Это слово значит «дом».',
        explanationRu: 'Ha = H, A = A, U = U, Es = S. Получается Haus — дом.',
      },
      {
        type: 'gap',
        audio: 'O, Em, A',
        prompt: 'Слово диктуют по буквам. Напишите его: ___',
        answers: ['Oma'],
        hintRu: 'бабушка',
        explanationRu: 'O = O, Em = M, A = A. Получается Oma — бабушка.',
      },
      {
        type: 'gap',
        audio: 'Te, A, Ix, I',
        prompt: 'Слово диктуют по буквам. Напишите его: ___',
        answers: ['Taxi'],
        explanationRu: 'Te = T, A = A, Ix = X, I = I. Получается Taxi — такси.',
      },
      {
        type: 'gap',
        audio: 'Brot',
        prompt: 'Напишите слово, которое слышите: ___',
        answers: ['Brot'],
        hintRu: 'хлеб',
        explanationRu: 'Brot [БРО:Т] — хлеб. Звук «б» пишется буквой B, звук «р» — буквой R.',
      },
      {
        type: 'choice',
        audio: 'Wasser',
        prompt: 'Какое слово вы слышите?',
        options: ['Vase', 'Wasser', 'Wein', 'Fisch'],
        answer: 1,
        explanationRu: 'Wasser [ВА-са] — вода. Звук «в» здесь пишется буквой W, а в конце -er звучит как «а».',
      },
      {
        type: 'choice',
        prompt: 'Как читается слово «Vater» (отец)?',
        options: ['ВА:-та', 'ФА:-та', 'ВА-тэр', 'ФА-тэр'],
        answer: 1,
        explanationRu: 'В немецких словах V читается как «ф», а окончание -er звучит почти как «а»: [ФА:-та].',
      },
      {
        type: 'choice',
        prompt: 'Как продиктовать по буквам имя «Eva»?',
        options: ['E, Fau, A', 'E, We, A', 'I, Fau, A'],
        answer: 0,
        explanationRu: 'Буква V называется «Fau» [фау]. «We» — это W, а «I» — это буква I, а не E.',
      },
      {
        type: 'choice',
        prompt: 'Буква P в слове «Post» читается как…',
        options: ['п', 'р', 'ф'],
        answer: 0,
        explanationRu: 'Немецкая P похожа на русскую «Р», но звучит как «п»: Post [ПОСТ] — почта.',
      },
    ],
  },
  vocab: [
    { de: 'Hallo!', pos: 'phrase', ru: 'Привет! Здравствуйте! (неформально)', example: 'Hallo, ich heiße Tom.', exampleRu: 'Привет, меня зовут Том.', pronRu: 'ха-ЛО:' },
    { de: 'Tschüss!', pos: 'phrase', ru: 'Пока!', example: 'Tschüss, Anna! Bis morgen!', exampleRu: 'Пока, Анна! До завтра!', pronRu: 'ЧЮС' },
    { de: 'ja', pos: 'other', ru: 'да', example: 'Ja, ich heiße Olga.', exampleRu: 'Да, меня зовут Ольга.', pronRu: 'Я:' },
    { de: 'nein', pos: 'other', ru: 'нет', example: 'Nein, ich heiße Anna.', exampleRu: 'Нет, меня зовут Анна.', pronRu: 'НАЙН' },
    { de: 'danke', pos: 'other', ru: 'спасибо', example: 'Danke! – Bitte!', exampleRu: 'Спасибо! — Пожалуйста!', pronRu: 'ДАН-кэ' },
    { de: 'bitte', pos: 'other', ru: 'пожалуйста (просьба и ответ на «спасибо»)', example: 'Langsam, bitte!', exampleRu: 'Медленно, пожалуйста!', pronRu: 'БИ-тэ' },
    { de: 'Entschuldigung!', pos: 'phrase', ru: 'Извините!', example: 'Entschuldigung, wie heißen Sie?', exampleRu: 'Извините, как Вас зовут?', pronRu: 'энт-ШУЛЬ-ди-гунг' },
    { de: 'Wie bitte?', pos: 'phrase', ru: 'Как, простите? (не расслышал)', example: 'Wie bitte? Noch einmal, bitte.', exampleRu: 'Простите? Ещё раз, пожалуйста.', pronRu: 'ви: БИ-тэ' },
    { de: 'Name', article: 'der', plural: '-n', pos: 'noun', ru: 'имя; фамилия', example: 'Mein Name ist Ivan.', exampleRu: 'Меня зовут Иван.', pronRu: 'дер НА:-мэ' },
    { de: 'ich', pos: 'other', ru: 'я', example: 'Ich heiße Olga.', exampleRu: 'Меня зовут Ольга.', pronRu: 'ИХЬ' },
    { de: 'du', pos: 'other', ru: 'ты', example: 'Wie heißt du?', exampleRu: 'Как тебя зовут?', pronRu: 'ДУ:' },
    { de: 'Sie', pos: 'other', ru: 'Вы (вежливо; всегда с большой буквы)', example: 'Wie heißen Sie?', exampleRu: 'Как Вас зовут?', pronRu: 'ЗИ:' },
    { de: 'heißen', forms: 'ich heiße, du heißt, er heißt, Sie heißen', pos: 'verb', ru: 'называться; меня зовут …', example: 'Ich heiße Peter.', exampleRu: 'Меня зовут Петер.', pronRu: 'ХАЙ-сэн' },
    { de: 'Wie heißen Sie?', pos: 'phrase', ru: 'Как Вас зовут?', example: 'Guten Tag! Wie heißen Sie?', exampleRu: 'Добрый день! Как Вас зовут?', pronRu: 'ви: ХАЙ-сэн зи:' },
    { de: 'Ich heiße …', pos: 'phrase', ru: 'Меня зовут …', example: 'Ich heiße Ivan Petrow.', exampleRu: 'Меня зовут Иван Петров.', pronRu: 'ихь ХАЙ-сэ' },
    { de: 'Buchstabe', article: 'der', plural: '-n', pos: 'noun', ru: 'буква', example: 'Das Wort hat vier Buchstaben.', exampleRu: 'В слове четыре буквы.', pronRu: 'дер БУ:Х-шта-бэ' },
    { de: 'buchstabieren', forms: 'er buchstabiert', pos: 'verb', ru: 'диктовать по буквам', example: 'Buchstabieren Sie bitte!', exampleRu: 'Продиктуйте по буквам, пожалуйста!', pronRu: 'бу:х-шта-БИ:-рэн' },
    { de: 'schreiben', forms: 'er schreibt', pos: 'verb', ru: 'писать', example: 'Wie schreibt man das?', exampleRu: 'Как это пишется?', pronRu: 'ШРАЙ-бэн' },
    { de: 'Wort', article: 'das', plural: '-¨er', pos: 'noun', ru: 'слово', example: 'Das Wort ist neu.', exampleRu: 'Это слово новое.', pronRu: 'дас ВОРТ' },
    { de: 'noch einmal', pos: 'phrase', ru: 'ещё раз', example: 'Noch einmal, bitte!', exampleRu: 'Ещё раз, пожалуйста!', pronRu: 'нох АЙН-маль' },
  ],
  listening: {
    title: 'Buchstabieren am Telefon',
    kind: 'dialog',
    text: `A: Hotel Sonne, guten Tag!
B: Guten Tag! Ich heiße Ivan Petrow.
A: Wie bitte? Wie heißen Sie?
B: Petrow. Ich buchstabiere: Pe, E, Te, Er, O, We.
A: Pe, E, Te, Er, O … Fau?
B: Nein, nicht Fau. We! Petrow mit We.
A: Ah, mit We. Danke. Und der Vorname?
B: Ivan: I, Fau, A, En.
A: I, Fau, A, En. Danke, Herr Petrow.
B: Bitte. Auf Wiedersehen!
A: Auf Wiedersehen!`,
    questions: [
      { question: 'Wie heißt das Hotel?', options: ['Hotel Mond', 'Hotel Sonne', 'Hotel Stern'], answer: 1 },
      { question: 'Wie heißt der Mann?', options: ['Ivan Petrow', 'Iwan Petrof', 'Ivan Pedrow'], answer: 0 },
      { question: 'Petrow schreibt man mit …', options: ['V', 'F', 'W'], answer: 2 },
      { question: 'Ivan schreibt man mit …', options: ['W', 'V', 'F'], answer: 1 },
      { question: 'Wie viele Buchstaben hat „Petrow“?', options: ['5', '6', '7'], answer: 1 },
    ],
  },
  writing: {
    taskRu: 'Напишите 2–3 строчки о себе: поздоровайтесь, напишите своё имя и продиктуйте его по буквам — названиями букв (например: Olga — O, El, Ge, A).',
    taskDe: 'Wie heißen Sie? Schreiben Sie Ihren Namen und buchstabieren Sie ihn.',
    points: ['Begrüßung: Hallo!', 'Name: Ich heiße …', 'Den Namen buchstabieren: A, Be, Ce …'],
    minWords: 20,
    usefulPhrases: ['Hallo!', 'Ich heiße …', 'Mein Name ist …', 'Ich buchstabiere: …', 'Danke!', 'Tschüss!'],
  },
  speaking: {
    scenarioRu: 'Читаем вслух первые немецкие слова и фразы. Нажмите на фразу, послушайте и повторите. В конце скажите своё имя и продиктуйте его по буквам.',
    aiRole: '',
    opener: '',
    tasksRu: [
      'Слушайте фразу и повторяйте её 2–3 раза, сначала медленно.',
      'Следите за звуками: h — лёгкий выдох, ü в «Tschüss» — губы трубочкой, ei в «nein» — «ай».',
      'Скажите своё имя и продиктуйте его по буквам: «Ich heiße … — …».',
    ],
    readAloud: ['Hallo! Tschüss!', 'Ja. Nein. Danke. Bitte.', 'Wie heißen Sie?', 'Ich heiße Anna.', 'Wie bitte? Noch einmal, bitte.'],
  },
};
