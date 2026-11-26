import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-14',
  level: 'B2',
  order: 14,
  title: 'Gesundheit & Medizin',
  titleRu: 'Здоровье и медицина',
  goalsRu: [
    'Понимать разговоры с врачом, памятки для пациентов и журналистские тексты о системе здравоохранения.',
    'Точно выражать временные отношения с помощью seit(dem), sobald, solange, bis, bevor/ehe, nachdem и während.',
    'Соблюдать последовательность времён после nachdem (Perfekt / Plusquamperfekt) и не путать союзы, которые по-русски переводятся одинаково («пока», «после»).',
    'Последовательно описывать течение болезни и аргументированно обсуждать проблемы здравоохранения.',
  ],
  grammar: {
    topic: 'Temporale Nebensätze (Vertiefung)',
    topicRu: 'Временные придаточные предложения (углубление)',
    explanationRu: `**Временные придаточные** показывают, как действие придаточного соотносится по времени с действием главного предложения: происходит одновременно, раньше или позже. Глагол в придаточном, как всегда, стоит в конце.

**Одновременность**

- **während** — «в то время как, пока»: Während die Ärztin den Befund erklärt, macht sich die Patientin Notizen.
- **solange** — «пока; всё то время, пока» (оба действия длятся одинаково долго): Solange Sie Fieber haben, bleiben Sie im Bett.

**Предшествование и следование**

- **nachdem** — «после того как». Действие придаточного **уже закончилось**, поэтому меняется время:
  главное в Präsens/Futur → придаточное в **Perfekt**: Nachdem ich gegessen habe, nehme ich die Tablette.
  главное в Präteritum/Perfekt → придаточное в **Plusquamperfekt**: Nachdem der Arzt mich untersucht hatte, schrieb er mich krank.
- **sobald** — «как только»: Sobald die Laborwerte da sind, rufen wir Sie an.
- **bevor / ehe** — «прежде чем, перед тем как» (ehe — книжное).
- **bis** — «пока не, до тех пор пока»: Bleiben Sie liegen, bis das Fieber gesunken ist.
- **seit / seitdem** — «с тех пор как». Если состояние длится до сих пор, обычно стоит Präsens: Seitdem ich Physiotherapie mache, habe ich weniger Schmerzen.

**Типичные ошибки русскоговорящих:**

- Русское «пока» — это три разных союза: «пока я сплю» → **während**; «пока болит, не тренируйся» → **solange**; «подожди, пока (не) придёт врач» → **bis**, причём **без nicht**: Warten Sie, bis der Arzt kommt.
- *Nachdem ich esse, nehme ich die Tablette.* — после nachdem нельзя то же время, что в главном: нужно Perfekt (gegessen habe) или Plusquamperfekt.
- *Nachdem dem Essen* — nachdem только союз. Предлог «после» — **nach** + Dativ (nach dem Essen), наречие «после этого» — **danach**. Так же: bevor (союз) — **vor** (предлог) — **vorher** (наречие).
- **während** может означать и противопоставление («тогда как»): Während Privatpatienten schnell einen Termin bekommen, warten Kassenpatienten oft Wochen.
- Повторение B1: **als** — однократное событие в прошлом, **wenn** — повторяющееся или будущее.`,
    table: [
      ['Союз', 'Значение', 'Пример'],
      ['während', 'в то время как (одновременно)', 'Während ich im Wartezimmer saß, las ich die Broschüre.'],
      ['solange', 'пока, всё то время пока', 'Solange die Wunde nicht verheilt ist, dürfen Sie nicht schwimmen.'],
      ['bis', 'пока не, до тех пор пока', 'Nehmen Sie die Tabletten, bis die Packung leer ist.'],
      ['sobald', 'как только', 'Sobald der Befund da ist, melden wir uns.'],
      ['seit / seitdem', 'с тех пор как', 'Seitdem er nicht mehr raucht, hustet er kaum noch.'],
      ['bevor / ehe', 'прежде чем, перед тем как', 'Bevor Sie operiert werden, führen wir ein Aufklärungsgespräch.'],
      ['nachdem', 'после того как (Perfekt / Plusquamperfekt!)', 'Nachdem die Narkose gewirkt hatte, begann die Operation.'],
    ],
    examples: [
      {
        de: 'Seitdem ich regelmäßig Sport treibe, schlafe ich viel besser.',
        ru: 'С тех пор как я регулярно занимаюсь спортом, я сплю намного лучше.',
      },
      {
        de: 'Nachdem die Narkose gewirkt hatte, begann der Chirurg mit der Operation.',
        ru: 'После того как наркоз подействовал, хирург начал операцию.',
      },
      {
        de: 'Sobald die Laborwerte vorliegen, meldet sich die Praxis bei Ihnen.',
        ru: 'Как только будут готовы результаты анализов, вам позвонят из практики.',
      },
      {
        de: 'Solange die Entzündung nicht abgeklungen ist, dürfen Sie keinen Sport treiben.',
        ru: 'Пока воспаление не прошло, вам нельзя заниматься спортом.',
      },
      {
        de: 'Bevor Sie ein Antibiotikum absetzen, sollten Sie mit Ihrer Ärztin sprechen.',
        ru: 'Прежде чем прекратить приём антибиотика, вам следует поговорить со своим врачом.',
      },
      {
        de: 'Der Patient musste fast fünf Stunden warten, bis er endlich behandelt wurde.',
        ru: 'Пациенту пришлось ждать почти пять часов, пока его наконец не приняли.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ ich die neuen Tabletten nehme, habe ich keine Kopfschmerzen mehr.',
        options: ['Seitdem', 'Bevor', 'Bis', 'Als'],
        answer: 0,
        explanationRu: 'Действие началось в прошлом и продолжается до сих пор («с тех пор как принимаю») — seitdem + Präsens.',
      },
      {
        type: 'choice',
        prompt: 'Bitte bleiben Sie im Wartezimmer, ___ Sie aufgerufen werden.',
        options: ['solange', 'während', 'bis', 'bevor'],
        answer: 2,
        explanationRu: '«Пока вас не вызовут» = до момента вызова → bis. Отрицание nicht в немецком не нужно.',
      },
      {
        type: 'choice',
        prompt: 'Nachdem der Arzt die Wunde ___, durfte der Patient nach Hause gehen.',
        options: ['versorgt', 'versorgt hat', 'versorgt hatte', 'versorgt hätte'],
        answer: 2,
        explanationRu: 'Главное предложение в Präteritum (durfte), значит, в придаточном с nachdem — Plusquamperfekt: versorgt hatte.',
      },
      {
        type: 'choice',
        prompt: '___ der Blutabnahme dürfen Sie nichts essen.',
        options: ['Bevor', 'Vor', 'Ehe', 'Nachdem'],
        answer: 1,
        explanationRu: 'После пропуска идёт существительное (der Blutabnahme, Dativ), а не придаточное. Нужен предлог vor. Bevor, ehe и nachdem — союзы.',
      },
      {
        type: 'gap',
        prompt: '___ das Fieber gesunken ist, können Sie wieder arbeiten gehen.',
        answers: ['Sobald', 'Nachdem', 'Wenn'],
        hintRu: '«как только»',
        explanationRu: 'Sobald = «как только». Perfekt (gesunken ist) показывает, что это действие закончится раньше, чем вы пойдёте на работу.',
      },
      {
        type: 'gap',
        prompt: '___ ich im Krankenhaus lag, haben mich meine Kollegen oft besucht.',
        answers: ['Während', 'Als', 'Solange'],
        hintRu: '«в то время как, пока»',
        explanationRu: 'Оба действия происходят одновременно: während (или als — для отрезка в прошлом).',
      },
      {
        type: 'gap',
        prompt: 'Nachdem die Ärztin mir alles genau erklärt ___, unterschrieb ich die Einwilligung.',
        answers: ['hatte'],
        hintRu: 'вспомогательный глагол Plusquamperfekt',
        explanationRu: 'Главное в Präteritum (unterschrieb) → в придаточном Plusquamperfekt: erklärt hatte.',
      },
      {
        type: 'gap',
        prompt: 'Sie dürfen keinen Alkohol trinken, ___ Sie das Antibiotikum einnehmen.',
        answers: ['solange', 'während'],
        hintRu: '«всё то время, пока»',
        explanationRu: 'Запрет действует на весь период приёма лекарства → solange (возможно и während).',
      },
      {
        type: 'order',
        words: ['Bevor', 'Sie', 'das Medikament', 'einnehmen,', 'lesen', 'Sie', 'bitte', 'die Packungsbeilage.'],
        translationRu: 'Прежде чем принимать лекарство, прочитайте, пожалуйста, инструкцию.',
        explanationRu: 'Bevor открывает придаточное, глагол einnehmen в конце. Главное начинается с глагола lesen.',
      },
      {
        type: 'order',
        words: ['Seitdem', 'sie', 'die Diagnose', 'kennt,', 'achtet', 'sie', 'mehr', 'auf ihre Ernährung.'],
        translationRu: 'С тех пор как она знает диагноз, она больше следит за своим питанием.',
        explanationRu: 'Seitdem + Präsens: состояние продолжается. После придаточного главное начинается с глагола achtet.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью nachdem. Обратите внимание на время.',
        prompt: 'Der Patient wurde operiert. Danach kam er auf die Intensivstation.',
        answers: ['Nachdem der Patient operiert worden war, kam er auf die Intensivstation.'],
        explanationRu: 'Главное в Präteritum (kam) → придаточное в Plusquamperfekt. Пассив в Plusquamperfekt: operiert worden war.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените предложную группу придаточным с bevor.',
        prompt: 'Vor der Operation spricht der Patient mit dem Anästhesisten.',
        answers: [
          'Bevor der Patient operiert wird, spricht er mit dem Anästhesisten.',
          'Bevor er operiert wird, spricht der Patient mit dem Anästhesisten.',
        ],
        explanationRu: 'Vor + существительное (предлог) → bevor + придаточное с глаголом. Die Operation → operiert werden (пассив, так как оперирует не пациент).',
      },
    ],
  },
  vocab: [
    {
      de: 'Symptom',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'симптом',
      example: 'Sobald die ersten Symptome auftreten, sollten Sie sich testen lassen.',
      exampleRu: 'Как только появятся первые симптомы, вам следует сделать тест.',
    },
    {
      de: 'Krankschreibung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'больничный лист, освобождение от работы',
      example: 'Bei leichten Erkältungen ist die Krankschreibung auch nach einem Telefonat möglich.',
      exampleRu: 'При лёгкой простуде больничный можно получить и после телефонного разговора с врачом.',
    },
    {
      de: 'Narkose',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'наркоз',
      example: 'Nachdem die Narkose nachgelassen hatte, durfte die Patientin etwas trinken.',
      exampleRu: 'После того как действие наркоза ослабло, пациентке разрешили немного попить.',
    },
    {
      de: 'Wartezeit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'время ожидания',
      example: 'Die Wartezeit auf einen Termin beim Hautarzt beträgt oft mehrere Monate.',
      exampleRu: 'Время ожидания приёма у дерматолога часто составляет несколько месяцев.',
    },
    {
      de: 'Patientenakte',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'медицинская карта пациента',
      example: 'In der elektronischen Patientenakte sind alle Befunde an einem Ort gespeichert.',
      exampleRu: 'В электронной медицинской карте все результаты обследований хранятся в одном месте.',
    },
    {
      de: 'Antibiotikum',
      article: 'das',
      plural: 'Antibiotika',
      pos: 'noun',
      ru: 'антибиотик',
      example: 'Gegen Viren hilft ein Antibiotikum nicht.',
      exampleRu: 'Против вирусов антибиотик не помогает.',
    },
    {
      de: 'Dosierung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'дозировка',
      example: 'Bevor Sie die Dosierung ändern, sprechen Sie bitte mit Ihrem Arzt.',
      exampleRu: 'Прежде чем менять дозировку, поговорите, пожалуйста, со своим врачом.',
    },
    {
      de: 'Intensivstation',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'отделение интенсивной терапии, реанимация',
      example: 'Nach dem Unfall lag er drei Tage auf der Intensivstation.',
      exampleRu: 'После аварии он три дня пролежал в реанимации.',
    },
    {
      de: 'Vorerkrankung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'хроническое (ранее имевшееся) заболевание',
      example: 'Menschen mit Vorerkrankungen sollten sich besonders früh impfen lassen.',
      exampleRu: 'Людям с хроническими заболеваниями следует делать прививку особенно рано.',
    },
    {
      de: 'Komplikation',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'осложнение',
      example: 'Die Operation verlief ohne Komplikationen.',
      exampleRu: 'Операция прошла без осложнений.',
    },
    {
      de: 'Behandlungsfehler',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'врачебная ошибка',
      example: 'Wer einen Behandlungsfehler vermutet, kann ein Gutachten bei der Krankenkasse beantragen.',
      exampleRu: 'Тот, кто подозревает врачебную ошибку, может запросить экспертизу в больничной кассе.',
    },
    {
      de: 'Schweigepflicht',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'обязанность хранить (врачебную) тайну',
      example: 'Ärztinnen und Ärzte unterliegen der Schweigepflicht, auch gegenüber Arbeitgebern.',
      exampleRu: 'Врачи обязаны хранить врачебную тайну, в том числе по отношению к работодателям.',
    },
    {
      de: 'Ärztemangel',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'нехватка врачей',
      example: 'Auf dem Land ist der Ärztemangel schon heute deutlich zu spüren.',
      exampleRu: 'В сельской местности нехватка врачей ощущается уже сегодня.',
    },
    {
      de: 'Krankheitsbild',
      article: 'das',
      plural: '-er',
      pos: 'noun',
      ru: 'клиническая картина болезни',
      example: 'Long Covid ist ein komplexes Krankheitsbild, das noch nicht vollständig erforscht ist.',
      exampleRu: 'Постковидный синдром — сложная клиническая картина, которая ещё не полностью изучена.',
    },
    {
      de: 'einweisen',
      forms: 'weist ein, wies ein, hat eingewiesen (in + Akk)',
      pos: 'verb',
      ru: 'направлять (в больницу), госпитализировать',
      example: 'Der Hausarzt hat ihn sofort ins Krankenhaus eingewiesen.',
      exampleRu: 'Семейный врач сразу направил его в больницу.',
    },
    {
      de: 'sich auskurieren',
      forms: 'kuriert sich aus, kurierte sich aus, hat sich auskuriert',
      pos: 'verb',
      ru: 'долечиться, полностью выздороветь',
      example: 'Bleib zu Hause, bis du dich richtig auskuriert hast.',
      exampleRu: 'Оставайся дома, пока полностью не выздоровеешь.',
    },
    {
      de: 'sich verschlechtern',
      forms: 'verschlechterte sich, hat sich verschlechtert',
      pos: 'verb',
      ru: 'ухудшаться',
      example: 'Falls sich Ihr Zustand verschlechtert, kommen Sie bitte sofort wieder.',
      exampleRu: 'Если ваше состояние ухудшится, приходите, пожалуйста, сразу снова.',
    },
    {
      de: 'abklären',
      forms: 'klärt ab, klärte ab, hat abgeklärt',
      pos: 'verb',
      ru: 'выяснять, проверять (причину)',
      example: 'Die Ursache der Schmerzen sollte ein Facharzt abklären.',
      exampleRu: 'Причину болей должен выяснить специалист.',
    },
    {
      de: 'besorgniserregend',
      pos: 'adj',
      ru: 'вызывающий тревогу',
      example: 'Die Zahl der Grippefälle ist in diesem Winter besorgniserregend hoch.',
      exampleRu: 'Число случаев гриппа этой зимой тревожно высоко.',
    },
    {
      de: 'vorsichtshalber',
      pos: 'adv',
      ru: 'на всякий случай, из предосторожности',
      example: 'Wir machen vorsichtshalber noch ein Röntgenbild, bevor Sie nach Hause gehen.',
      exampleRu: 'На всякий случай сделаем ещё рентгеновский снимок, прежде чем вы пойдёте домой.',
    },
  ],
  listening: {
    title: 'In der Hausarztpraxis: Die Blutwerte sind da',
    kind: 'dialog',
    text: `A: Guten Morgen, Herr Kaya. Setzen Sie sich bitte. Die Ergebnisse Ihrer Blutuntersuchung sind da.
B: Guten Morgen, Frau Dr. Weiß. Und? Ist es etwas Schlimmes? Seitdem Sie mir letzte Woche Blut abgenommen haben, schlafe ich ehrlich gesagt ziemlich schlecht.
A: Das kann ich verstehen, aber ich kann Sie beruhigen. Es ist nichts Besorgniserregendes. Ihre Entzündungswerte sind leicht erhöht, und Ihr Blutzucker liegt etwas über dem Normalbereich.
B: Blutzucker? Heißt das, ich habe Diabetes?
A: Nein, so weit sind wir noch nicht. Aber wir sollten das abklären, bevor daraus ein echtes Problem wird. Erzählen Sie mal: Seit wann haben Sie diese Müdigkeit, von der Sie beim letzten Mal gesprochen haben?
B: Ungefähr seit dem Frühjahr. Nachdem ich die neue Stelle angetreten hatte, habe ich kaum noch Sport gemacht. Und während ich im Büro sitze, esse ich ständig irgendwelche Süßigkeiten.
A: Das passt leider zusammen. Mein Vorschlag: Wir wiederholen den Test in drei Monaten. Bis dahin stellen Sie bitte Ihre Ernährung um und bewegen sich mindestens dreimal pro Woche.
B: Und die Entzündungswerte?
A: Die kommen vermutlich von Ihrer Erkältung. Sie hatten doch vor zwei Wochen starken Husten, oder?
B: Ja, aber der ist fast weg.
A: Gut. Sobald Sie wieder ganz fit sind, können Sie mit dem Sport anfangen. Vorher sollten Sie sich lieber richtig auskurieren.
B: Muss ich nicht zu einem Facharzt? Mein Bruder hatte etwas Ähnliches und war sofort beim Spezialisten.
A: Das halte ich im Moment nicht für nötig. Die Wartezeit beim Diabetologen beträgt bei uns außerdem mehrere Monate. Bis Sie dort einen Termin bekommen, haben wir die neuen Werte längst. Falls sich die Werte verschlechtern, überweise ich Sie natürlich sofort.
B: Na gut. Und wenn die Müdigkeit nicht besser wird?
A: Dann kommen Sie bitte früher. Warten Sie nicht, bis Sie gar nicht mehr können. Ich gebe Ihnen noch eine Broschüre zur Ernährungsberatung mit; die Kosten übernimmt Ihre Krankenkasse.
B: Vielen Dank, Frau Doktor. Da bin ich jetzt wirklich erleichtert.`,
    questions: [
      {
        question: 'Wie geht es Herrn Kaya seit der Blutabnahme?',
        options: [
          'Er schläft schlecht, weil er sich Sorgen macht.',
          'Er hat starke Schmerzen im Arm.',
          'Er fühlt sich deutlich fitter als vorher.',
          'Er hat keine Zeit mehr für Sport.',
        ],
        answer: 0,
      },
      {
        question: 'Was zeigen die Blutwerte?',
        options: [
          'Herr Kaya hat Diabetes.',
          'Der Blutzucker ist etwas zu hoch.',
          'Alle Werte sind völlig normal.',
          'Er hat eine schwere Infektion.',
        ],
        answer: 1,
      },
      {
        question: 'Seit wann treibt Herr Kaya kaum noch Sport?',
        options: [
          'seit seiner Erkältung vor zwei Wochen',
          'seit sein Bruder krank geworden ist',
          'seit er eine neue Stelle angetreten hat',
          'seit der letzten Blutuntersuchung',
        ],
        answer: 2,
      },
      {
        question: 'Was empfiehlt die Ärztin?',
        options: [
          'sofort einen Facharzt aufzusuchen',
          'Medikamente gegen Diabetes zu nehmen',
          'sofort wieder intensiv Sport zu treiben',
          'die Ernährung umzustellen und sich mehr zu bewegen',
        ],
        answer: 3,
      },
      {
        question: 'Warum überweist sie ihn nicht zum Facharzt?',
        options: [
          'Weil die Krankenkasse das nicht bezahlt.',
          'Weil die neuen Werte vor einem Facharzttermin vorliegen würden.',
          'Weil sein Bruder dort schlechte Erfahrungen gemacht hat.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На форуме городской газеты обсуждают предложение больничных касс ввести плату для пациентов, которые без настоящей экстренной ситуации приходят в отделение неотложной помощи. Напишите свой комментарий (Forumsbeitrag) и раскройте все четыре пункта.',
    taskDe: 'In einem Onlineforum Ihrer Lokalzeitung wird über den Vorschlag diskutiert, eine Gebühr für Patientinnen und Patienten einzuführen, die ohne echten Notfall in die Notaufnahme kommen. Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Ihre eigenen Erfahrungen mit Wartezeiten in Arztpraxen oder Notaufnahmen',
      'Gründe, warum viele Menschen mit leichten Beschwerden in die Notaufnahme gehen',
      'Vor- und Nachteile einer solchen Gebühr',
      'Ihr eigener Vorschlag, wie man die Notaufnahmen entlasten könnte',
    ],
    minWords: 160,
    usefulPhrases: [
      'Als ich letztes Jahr mit … in der Notaufnahme war, …',
      'Nachdem ich fast vier Stunden gewartet hatte, …',
      'Solange es auf dem Land zu wenige Hausärzte gibt, …',
      'Bevor man eine Gebühr einführt, sollte man zuerst …',
      'Einerseits würde eine Gebühr …, andererseits besteht die Gefahr, dass …',
      'Ich plädiere deshalb dafür, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы на приёме у семейного врача. Уже несколько недель у вас болит спина, и вы хотите получить направление к ортопеду и на МРТ. Врач считает, что обследование пока не нужно, и предлагает подождать.',
    aiRole: 'Sie sind Hausärztin in einer vollen Praxis in einer deutschen Kleinstadt. Ihr Patient bzw. Ihre Patientin hat seit einigen Wochen Rückenschmerzen und möchte eine Überweisung zum Orthopäden und ein MRT. Sie halten ein MRT zunächst für unnötig und empfehlen Physiotherapie und Bewegung. Fragen Sie genau nach dem Verlauf der Beschwerden (seit wann, wann genau, was hilft, was verschlimmert sie) und lassen Sie sich nur von konkreten Angaben überzeugen. Bleiben Sie freundlich, aber bestimmt. Sprechen Sie natürliches Deutsch auf B2-Niveau.',
    opener: 'Guten Tag, nehmen Sie bitte Platz. Ich sehe in Ihrer Akte, dass Sie vor zwei Wochen schon einmal wegen Rückenschmerzen hier waren. Was hat sich seitdem verändert?',
    tasksRu: [
      'Опишите хронологию жалоб, используя seitdem, nachdem, während и sobald.',
      'Объясните, почему вы хотите направление к специалисту и на МРТ.',
      'Реагируйте на возражения врача и приводите конкретные факты (когда болит, что не помогает).',
      'Договоритесь о дальнейших шагах: что вы делаете до следующего приёма и при каких условиях вас направят дальше (bis, solange, falls).',
    ],
    readAloud: [
      'Nachdem die Ärztin die Laborwerte ausgewertet hatte, rief sie den Patienten sofort an.',
      'Solange die Wunde nicht vollständig verheilt ist, sollten Sie weder baden noch schwimmen gehen.',
      'Seitdem ich regelmäßig zur Physiotherapie gehe, haben sich meine Rückenschmerzen deutlich gebessert.',
    ],
  },
};
