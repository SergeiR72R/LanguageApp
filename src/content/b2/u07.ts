import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-07',
  level: 'B2',
  order: 7,
  title: 'Gesundheit & Psychologie',
  titleRu: 'Здоровье и психология',
  goalsRu: [
    'Говорить о стрессе, выгорании и профилактике заболеваний.',
    'Выражать предположения разной степени уверенности: muss, dürfte, kann/könnte, wird wohl.',
    'Передавать чужие утверждения с помощью soll и will, в том числе о прошлом (soll gearbeitet haben).',
    'Давать советы в посте на форуме о здоровье.',
  ],
  grammar: {
    topic: 'Subjektive Modalverben und Futur I/II als Vermutung',
    topicRu: 'Модальные глаголы в субъективном значении, Futur I/II как предположение',
    explanationRu: `Модальные глаголы могут выражать не обязанность или возможность, а **оценку говорящего**: насколько он уверен в том, что говорит. Это **субъективное значение**.

**Предположение (от большей уверенности к меньшей):**

- **muss** — почти уверен: Er **muss** krank sein. — Он, должно быть, болен.
- **dürfte** (только эта форма Konjunktiv II!) — вероятно: Sie **dürfte** etwa vierzig sein.
- **kann / könnte** — возможно: Das **könnte** am Stress liegen.
- **kann nicht** — исключено: Das **kann nicht** stimmen.
- **wird (wohl) + Infinitiv** (Futur I) — наверное: Sie **wird** wohl im Stau **stehen**.

**Чужое утверждение:**

- **soll** — «говорят, что; по сообщениям»: Das Medikament **soll** sehr wirksam sein.
- **will** — человек **сам** утверждает о себе, а говорящий сомневается: Er **will** nie krank gewesen sein.

**Предположение о прошлом:** модальный глагол в настоящем времени + **Infinitiv Perfekt** (Partizip II + haben/sein):

- Er **muss** den Termin **vergessen haben**. — Он, должно быть, забыл о приёме.
- Sie **soll** lange in einer Klinik **gearbeitet haben**. — Говорят, она долго работала в клинике.
- Futur II: Er **wird** den Termin **vergessen haben**. — Он, наверное, забыл.

**Типичные ошибки русскоговорящих:**

- *Er hat den Termin vergessen müssen* означает «ему пришлось забыть» (объективное значение). Для предположения нужно: **Er muss den Termin vergessen haben.**
- Путают **soll** и **will**: soll — информация от других людей или СМИ, will — человек сам так говорит о себе.
- Используют *darf* вместо **dürfte**: в значении «вероятно» возможна только форма dürfte.
- Воспринимают werden только как будущее время. Sie **wird** krank **sein** часто означает «она, наверное, больна» (сейчас).`,
    table: [
      ['Значение', 'Форма', 'Пример'],
      ['почти уверен', 'muss', 'Er muss krank sein.'],
      ['вероятно', 'dürfte', 'Sie dürfte schon zu Hause sein.'],
      ['возможно', 'kann / könnte', 'Das könnte am Wetter liegen.'],
      ['исключено', 'kann nicht', 'Das kann nicht stimmen.'],
      ['наверное', 'wird (wohl) + Infinitiv', 'Er wird wohl schlafen.'],
      ['говорят', 'soll', 'Der Arzt soll sehr gut sein.'],
      ['сам утверждает', 'will', 'Sie will nichts gemerkt haben.'],
      ['о прошлом', 'Modalverb + Partizip II + haben/sein', 'Er muss den Termin vergessen haben.'],
    ],
    examples: [
      {
        de: 'Du siehst blass aus – du musst dich erkältet haben.',
        ru: 'Ты бледный — должно быть, ты простудился.',
      },
      {
        de: 'Die Wartezeit für einen Therapieplatz dürfte mehrere Monate betragen.',
        ru: 'Время ожидания места для терапии составляет, вероятно, несколько месяцев.',
      },
      {
        de: 'Deine Kopfschmerzen könnten mit dem Stress im Büro zusammenhängen.',
        ru: 'Твои головные боли могут быть связаны со стрессом на работе.',
      },
      {
        de: 'Regelmäßiges Meditieren soll den Blutdruck senken.',
        ru: 'Говорят, регулярная медитация снижает давление.',
      },
      {
        de: 'Mein Nachbar will seit zwanzig Jahren keinen einzigen Tag krank gewesen sein.',
        ru: 'Мой сосед утверждает, что за двадцать лет ни дня не болел.',
      },
      {
        de: 'Sie geht nicht ans Telefon – sie wird wohl noch beim Arzt sein.',
        ru: 'Она не берёт трубку — наверное, она ещё у врача.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich habe ihn seit Tagen nicht gesehen. Er ___ krank sein, aber sicher bin ich mir nicht.',
        options: ['könnte', 'muss', 'soll', 'will'],
        answer: 0,
        explanationRu: 'Говорящий не уверен — это слабое предположение: könnte. Muss выражает почти полную уверенность, soll и will — чужие утверждения.',
      },
      {
        type: 'choice',
        prompt: 'Laut einer neuen Studie ___ Bewegung gegen leichte Depressionen genauso wirksam sein wie Medikamente.',
        options: ['will', 'muss', 'soll', 'darf'],
        answer: 2,
        explanationRu: 'Информация из чужого источника (laut einer Studie) передаётся через soll: «согласно исследованию, якобы…».',
      },
      {
        type: 'choice',
        prompt: 'Der Patient ___ die Tabletten regelmäßig genommen haben – das sagt er jedenfalls selbst.',
        options: ['soll', 'will', 'muss', 'dürfte'],
        answer: 1,
        explanationRu: 'Человек сам утверждает что-то о себе, а говорящий сомневается → will + Infinitiv Perfekt.',
      },
      {
        type: 'choice',
        prompt: 'Welche Form drückt eine fast sichere Vermutung aus? Er ___ den Termin vergessen haben.',
        options: ['könnte', 'soll', 'will', 'muss'],
        answer: 3,
        explanationRu: 'Muss в субъективном значении выражает самую высокую степень уверенности: «он, должно быть, забыл».',
      },
      {
        type: 'gap',
        prompt: 'Das ___ nicht stimmen! Ich habe die Ergebnisse dreimal überprüft.',
        answers: ['kann'],
        explanationRu: 'kann nicht — «не может быть», говорящий исключает такую возможность.',
      },
      {
        type: 'gap',
        prompt: 'Sie ist heute nicht im Büro. Sie ___ wohl wieder Migräne haben.',
        answers: ['wird'],
        hintRu: 'Futur I как предположение',
        explanationRu: 'werden + Infinitiv с wohl выражает предположение о настоящем: «у неё, наверное, опять мигрень».',
      },
      {
        type: 'gap',
        prompt: 'Bei diesen Symptomen ___ es sich um eine Grippe handeln, aber wir warten noch auf die Laborwerte.',
        answers: ['dürfte'],
        hintRu: '«вероятно» — Konjunktiv II от dürfen',
        explanationRu: 'Dürfte выражает довольно высокую вероятность, но не полную уверенность (результаты ещё не готовы).',
      },
      {
        type: 'gap',
        prompt: 'Der neue Chefarzt ___ früher an der Charité gearbeitet haben – das habe ich zumindest gehört.',
        answers: ['soll'],
        explanationRu: 'Информация от других людей (habe ich gehört) → soll + Infinitiv Perfekt (gearbeitet haben).',
      },
      {
        type: 'order',
        words: ['Sie', 'muss', 'sich', 'beim Sport', 'verletzt', 'haben.'],
        translationRu: 'Должно быть, она получила травму во время занятий спортом.',
        explanationRu: 'Предположение о прошлом: muss + Partizip II + haben в конце предложения.',
      },
      {
        type: 'order',
        words: ['Die Behandlung', 'wird', 'wohl', 'mehrere Wochen', 'dauern.'],
        translationRu: 'Лечение, наверное, продлится несколько недель.',
        explanationRu: 'Futur I с wohl: wird на втором месте, инфинитив в конце. Wohl стоит сразу после спрягаемого глагола.',
      },
      {
        type: 'transform',
        instructionRu: 'Выразите предположение с помощью dürfte.',
        prompt: 'Es ist sehr wahrscheinlich, dass er die Nachricht noch nicht gelesen hat.',
        answers: ['Er dürfte die Nachricht noch nicht gelesen haben.'],
        explanationRu: 'Высокая вероятность → dürfte. Действие в прошлом → Infinitiv Perfekt: gelesen haben.',
      },
      {
        type: 'transform',
        instructionRu: 'Передайте чужое мнение с помощью модального глагола.',
        prompt: 'Man sagt, dass die Klinik die beste in der Region ist.',
        answers: ['Die Klinik soll die beste in der Region sein.'],
        explanationRu: 'Man sagt, dass … = soll. Глагол ist становится инфинитивом sein в конце предложения.',
      },
    ],
  },
  vocab: [
    {
      de: 'Psyche',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'психика',
      example: 'Dauerstress schadet nicht nur dem Körper, sondern auch der Psyche.',
      exampleRu: 'Постоянный стресс вредит не только телу, но и психике.',
    },
    {
      de: 'Burn-out',
      article: 'das',
      plural: '-s',
      pos: 'noun',
      ru: 'эмоциональное выгорание',
      example: 'Nach Jahren voller Überstunden hatte sie ein Burn-out.',
      exampleRu: 'После многих лет переработок у неё случилось выгорание.',
    },
    {
      de: 'Erschöpfung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'истощение, сильная усталость',
      example: 'Viele Pflegekräfte klagen über ständige Erschöpfung.',
      exampleRu: 'Многие медсёстры и сиделки жалуются на постоянное истощение.',
    },
    {
      de: 'Vorsorge',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'профилактика',
      example: 'Zur Vorsorge sollte man einmal im Jahr zum Zahnarzt gehen.',
      exampleRu: 'В целях профилактики стоит раз в год ходить к стоматологу.',
    },
    {
      de: 'Nebenwirkung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'побочное действие',
      example: 'Das Medikament kann Nebenwirkungen wie Müdigkeit verursachen.',
      exampleRu: 'Препарат может вызывать побочные действия, например усталость.',
    },
    {
      de: 'Beschwerde',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'жалоба (на здоровье), недомогание; претензия',
      example: 'Mit welchen Beschwerden kommen Sie zu mir?',
      exampleRu: 'С какими жалобами вы ко мне пришли?',
    },
    {
      de: 'Therapie',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'терапия, лечение',
      example: 'Die Therapie hat ihr geholfen, ihre Ängste zu überwinden.',
      exampleRu: 'Терапия помогла ей преодолеть свои страхи.',
    },
    {
      de: 'Immunsystem',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'иммунная система',
      example: 'Ausreichend Schlaf stärkt das Immunsystem.',
      exampleRu: 'Достаточный сон укрепляет иммунную систему.',
    },
    {
      de: 'Achtsamkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'осознанность, внимательность',
      example: 'Kurse für Achtsamkeit und Meditation werden immer beliebter.',
      exampleRu: 'Курсы осознанности и медитации становятся всё популярнее.',
    },
    {
      de: 'Abhängigkeit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'зависимость',
      example: 'Die Abhängigkeit vom Smartphone wird oft unterschätzt.',
      exampleRu: 'Зависимость от смартфона часто недооценивают.',
    },
    {
      de: 'sich erholen',
      forms: 'von + Dat; erholte sich, hat sich erholt',
      pos: 'verb',
      ru: 'отдыхать, восстанавливаться',
      example: 'Von der Operation hat er sich erstaunlich schnell erholt.',
      exampleRu: 'После операции он на удивление быстро восстановился.',
    },
    {
      de: 'vorbeugen',
      forms: '+ Dat; beugt vor, beugte vor, hat vorgebeugt',
      pos: 'verb',
      ru: 'предупреждать, предотвращать',
      example: 'Mit gesunder Ernährung kann man vielen Krankheiten vorbeugen.',
      exampleRu: 'Здоровое питание помогает предотвратить многие болезни.',
    },
    {
      de: 'behandeln',
      forms: 'behandelte, hat behandelt',
      pos: 'verb',
      ru: 'лечить; обращаться (с кем-либо)',
      example: 'Die Patientin wird ambulant behandelt.',
      exampleRu: 'Пациентку лечат амбулаторно.',
    },
    {
      de: 'verschreiben',
      forms: 'verschreibt, verschrieb, hat verschrieben',
      pos: 'verb',
      ru: 'выписывать (лекарство)',
      example: 'Die Ärztin hat mir ein Antibiotikum verschrieben.',
      exampleRu: 'Врач выписала мне антибиотик.',
    },
    {
      de: 'bewältigen',
      forms: 'bewältigte, hat bewältigt',
      pos: 'verb',
      ru: 'справляться, преодолевать',
      example: 'In dem Kurs lernt man, Stress besser zu bewältigen.',
      exampleRu: 'На этом курсе учатся лучше справляться со стрессом.',
    },
    {
      de: 'chronisch',
      pos: 'adj',
      ru: 'хронический',
      example: 'Viele Erwachsene leiden an chronischen Rückenschmerzen.',
      exampleRu: 'Многие взрослые страдают хроническими болями в спине.',
    },
    {
      de: 'ansteckend',
      pos: 'adj',
      ru: 'заразный',
      example: 'Die Krankheit ist hoch ansteckend, deshalb bleiben Sie bitte zu Hause.',
      exampleRu: 'Болезнь очень заразна, поэтому, пожалуйста, оставайтесь дома.',
    },
    {
      de: 'belastbar',
      pos: 'adj',
      ru: 'стрессоустойчивый, выносливый',
      example: 'In Stellenanzeigen wird oft verlangt, dass Bewerber belastbar sind.',
      exampleRu: 'В объявлениях о вакансиях часто требуют, чтобы кандидаты были стрессоустойчивыми.',
    },
    {
      de: 'unter Druck stehen',
      forms: 'steht, stand, hat gestanden',
      pos: 'phrase',
      ru: 'находиться под давлением',
      example: 'Vor dem Abitur stehen viele Schülerinnen und Schüler unter enormem Druck.',
      exampleRu: 'Перед выпускными экзаменами многие школьники находятся под огромным давлением.',
    },
    {
      de: 'sich krankschreiben lassen',
      forms: 'lässt sich krankschreiben, ließ sich krankschreiben, hat sich krankschreiben lassen',
      pos: 'phrase',
      ru: 'взять больничный',
      example: 'Wegen der Grippe musste ich mich eine Woche krankschreiben lassen.',
      exampleRu: 'Из-за гриппа мне пришлось взять больничный на неделю.',
    },
  ],
  listening: {
    title: 'Gesund leben: Immer erschöpft?',
    kind: 'monolog',
    text: `Guten Abend und willkommen zu „Gesund leben“. Haben Sie sich in letzter Zeit auch oft müde und erschöpft gefühlt? Dann sind Sie nicht allein. Nach einer neuen Umfrage einer großen Krankenkasse fühlt sich jeder dritte Berufstätige regelmäßig ausgelaugt. Die Zahl der Krankschreibungen wegen psychischer Beschwerden soll sich in den letzten zehn Jahren fast verdoppelt haben.

Woran liegt das? Die Psychologin Dr. Miriam Lenz hat dazu eine klare Vermutung. „Ein Grund dürfte die ständige Erreichbarkeit sein“, sagt sie. „Wer abends noch dienstliche E-Mails liest, kann sich nicht richtig erholen.“ Auch die Unsicherheit in der Arbeitswelt könnte eine Rolle spielen. Viele Menschen stehen unter Druck, weil sie Angst um ihren Arbeitsplatz haben.

Dr. Lenz erzählt von einem Patienten, einem 45-jährigen Manager. Er will jahrelang nie Urlaub gebraucht haben – bis er eines Morgens nicht mehr aufstehen konnte. „Er muss die Warnsignale lange ignoriert haben“, meint die Psychologin. „Schlafstörungen, Gereiztheit, Kopfschmerzen – das sind typische Anzeichen eines beginnenden Burn-outs.“

Aber es gibt auch gute Nachrichten: Man kann viel tun, um der Erschöpfung vorzubeugen. Regelmäßige Bewegung, feste Pausen und ausreichend Schlaf sind die Grundlage. Auch Achtsamkeitsübungen sollen helfen, Stress besser zu bewältigen. Allerdings warnt Dr. Lenz vor zu hohen Erwartungen: „Eine Meditations-App ersetzt keine Therapie. Wer seit Wochen keine Freude mehr empfindet, sollte unbedingt professionelle Hilfe in Anspruch nehmen.“

Und die Arbeitgeber? Einige Unternehmen haben bereits reagiert. Bei einem großen Autohersteller werden abends keine E-Mails mehr an die Beschäftigten weitergeleitet. Ob solche Maßnahmen wirklich wirken, wird sich erst in einigen Jahren zeigen. Die Krankenkassen dürften aber großes Interesse daran haben – schließlich kosten psychische Erkrankungen sie jedes Jahr Milliarden.

Nach der Pause sprechen wir mit Ihnen am Telefon. Rufen Sie an!`,
    questions: [
      {
        question: 'Was hat die Umfrage der Krankenkasse ergeben?',
        options: [
          'Jeder dritte Berufstätige fühlt sich regelmäßig erschöpft.',
          'Die meisten Menschen schlafen zu viel.',
          'Psychische Erkrankungen sind seltener geworden.',
          'Die Hälfte der Berufstätigen hat ein Burn-out.',
        ],
        answer: 0,
      },
      {
        question: 'Was vermutet Dr. Lenz als einen wichtigen Grund für die Erschöpfung?',
        options: [
          'Ungesunde Ernährung.',
          'Dass man auch nach Feierabend erreichbar ist.',
          'Zu wenige Urlaubstage.',
          'Zu lange Arbeitswege.',
        ],
        answer: 1,
      },
      {
        question: 'Was behauptet der Manager über sich selbst?',
        options: [
          'Er habe schon immer an Schlafstörungen gelitten.',
          'Er habe jedes Jahr viel Urlaub gemacht.',
          'Er habe jahrelang nie Urlaub gebraucht.',
          'Er habe sofort ärztliche Hilfe gesucht.',
        ],
        answer: 2,
      },
      {
        question: 'Was meint Dr. Lenz zu Meditations-Apps?',
        options: [
          'Sie sind völlig nutzlos.',
          'Sie sind wirksamer als jede Therapie.',
          'Sie sollten von der Krankenkasse bezahlt werden.',
          'Sie können helfen, ersetzen aber keine professionelle Behandlung.',
        ],
        answer: 3,
      },
      {
        question: 'Warum dürften die Krankenkassen an den Maßnahmen der Arbeitgeber interessiert sein?',
        options: [
          'Weil sie die Maßnahmen selbst entwickelt haben.',
          'Weil sie dafür Geld vom Staat bekommen.',
          'Weil psychische Erkrankungen für sie sehr teuer sind.',
        ],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu: 'На форуме о здоровье пользовательница пишет, что уже несколько месяцев чувствует себя истощённой, плохо спит и не может сосредоточиться на работе. Напишите ответ на форуме с предположениями о причинах и советами.',
    taskDe: 'In einem Gesundheitsforum schreibt eine Nutzerin, dass sie sich seit Monaten erschöpft fühlt, schlecht schläft und sich bei der Arbeit nicht mehr konzentrieren kann. Antworten Sie ihr mit einem Forumsbeitrag.',
    points: [
      'Mögliche Ursachen (Vermutungen äußern)',
      'Eigene Erfahrungen oder Erfahrungen von Bekannten',
      'Konkrete Tipps zur Vorbeugung',
      'Wann man unbedingt professionelle Hilfe suchen sollte',
    ],
    minWords: 150,
    usefulPhrases: [
      'Was du beschreibst, könnte mit … zusammenhängen.',
      'Das dürfte vor allem daran liegen, dass …',
      'Bei mir muss es damals ähnlich gewesen sein: …',
      'Angeblich soll es helfen, wenn man …',
      'Ich an deiner Stelle würde …',
      'Auf jeden Fall solltest du …',
    ],
  },
  speaking: {
    scenarioRu: 'Ваша коллега Катрин уже несколько месяцев работает сверхурочно, плохо спит и раздражительна, но утверждает, что у неё всё в порядке. Вы решили с ней поговорить.',
    aiRole: 'Sie sind Katrin, eine Kollegin, die seit Monaten Überstunden macht, schlecht schläft und gereizt ist, aber jedes Problem herunterspielt. Sprechen Sie natürliches Deutsch auf B2-Niveau, finden Sie Ausreden und widersprechen Sie den Vermutungen Ihres Gesprächspartners, bis er Sie mit guten Argumenten überzeugt.',
    opener: 'Ach, du bist es. Sorry, ich habe gerade echt keine Zeit, der Bericht muss heute noch raus. Was gibt es denn?',
    tasksRu: [
      'Скажите, что вы заметили, и выскажите предположения о причинах (muss, dürfte, könnte, wird wohl).',
      'Передайте, что говорят специалисты или исследования (soll).',
      'Отреагируйте на отговорки коллеги (например, с will: «Du willst also nichts von dem Stress gemerkt haben?»).',
      'Предложите конкретные шаги: перерыв, разговор с руководителем, визит к врачу.',
    ],
    readAloud: [
      'Die ständige Erreichbarkeit dürfte einer der Hauptgründe dafür sein, dass sich immer mehr Berufstätige erschöpft fühlen.',
      'Regelmäßige Bewegung und ausreichend Schlaf sollen das Immunsystem stärken und helfen, chronischem Stress vorzubeugen.',
      'Er muss die Warnsignale seines Körpers monatelang ignoriert haben, bevor er sich schließlich krankschreiben ließ.',
    ],
  },
};
