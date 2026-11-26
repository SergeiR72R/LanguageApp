import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-16',
  level: 'B2',
  order: 16,
  title: 'Wissenschaft & Kommunikation',
  titleRu: 'Наука и коммуникация',
  goalsRu: [
    'Понимать интервью, доклады и статьи о том, как наука общается с обществом и СМИ.',
    'Использовать инфинитив прошедшего времени (gesehen zu haben, gekommen zu sein) и пассивный инфинитив (gefragt zu werden).',
    'Строить инфинитивные обороты после существительных и прилагательных (die Möglichkeit, …; es ist wichtig, …) и выражать одновременность и предшествование.',
    'Высказывать и защищать позицию о роли учёных в публичных дискуссиях.',
  ],
  grammar: {
    topic: 'Infinitivkonstruktionen: Infinitiv Perfekt, Passiv-Infinitiv, Infinitiv nach Nomen und Adjektiven',
    topicRu: 'Инфинитивные конструкции',
    explanationRu: `Инфинитив с **zu** вы уже знаете (Ich versuche, pünktlich zu sein). На уровне B2 важно выбрать **правильную форму** инфинитива: она показывает время и залог.

**1. Одновременность или будущее — Infinitiv Präsens:**
Sie behauptet, die Lösung zu **kennen**. (знает сейчас)

**2. Предшествование — Infinitiv Perfekt:** Partizip II + **zu haben / zu sein**:
- Er behauptet, das Experiment selbst durchgeführt **zu haben**. (провёл раньше)
- Sie ist froh, rechtzeitig angekommen **zu sein**. (глаголы движения и изменения состояния — с sein)

**3. Пассив — Passiv-Infinitiv:** Partizip II + **zu werden**:
- Viele Forschende fürchten, falsch verstanden **zu werden**.
- Предшествование в пассиве: Partizip II + **worden zu sein**: Er ärgert sich, falsch zitiert worden zu sein.

**4. Инфинитив после существительных и прилагательных:**
- die Möglichkeit / die Chance / die Aufgabe / die Fähigkeit / der Versuch / die Absicht, … zu …
- es ist wichtig / schwierig / notwendig / sinnvoll, … zu …; ich bin bereit / froh / stolz, … zu …

**Условие:** подлежащее инфинитива совпадает с подлежащим (или дополнением) главного предложения. Если нет — нужен **dass**-Satz: Ich hoffe, **dass du** kommst (не *Ich hoffe, du zu kommen).

**Типичные ошибки русскоговорящих:**

- Неверный порядок: *gesehen haben zu → **gesehen zu haben**; *zu gefragt werden → **gefragt zu werden**. Частица zu стоит **перед последним** глаголом.
- Отделяемые приставки: teil**zu**nehmen, an**zu**rufen, aber: eingeladen zu werden.
- haben вместо sein: *gekommen zu haben → **gekommen zu sein**.
- Путают время: Er behauptet, den Täter zu sehen (видит сейчас) ≠ Er behauptet, den Täter gesehen zu haben (видел раньше). В русском в обоих случаях часто говорят «утверждает, что видел», поэтому думайте о времени действия.
- После модальных глаголов zu не нужен: Ich muss das erklären.`,
    table: [
      ['Время действия', 'Aktiv', 'Passiv'],
      ['одновременно / позже', 'zu erklären', 'erklärt zu werden'],
      ['раньше (с haben)', 'erklärt zu haben', 'erklärt worden zu sein'],
      ['раньше (с sein)', 'gekommen zu sein', '—'],
    ],
    examples: [
      {
        de: 'Die Forscherin behauptet, den Messfehler als Erste bemerkt zu haben.',
        ru: 'Исследовательница утверждает, что первой заметила ошибку измерения.',
      },
      {
        de: 'Viele Wissenschaftler fürchten, von Journalisten falsch verstanden zu werden.',
        ru: 'Многие учёные боятся, что журналисты поймут их неправильно.',
      },
      {
        de: 'Es ist gar nicht so leicht, komplizierte Ergebnisse allgemeinverständlich darzustellen.',
        ru: 'Совсем не так просто изложить сложные результаты общедоступно.',
      },
      {
        de: 'Die Studierenden haben die Möglichkeit, an einem internationalen Kongress teilzunehmen.',
        ru: 'У студентов есть возможность принять участие в международном конгрессе.',
      },
      {
        de: 'Der Professor ärgert sich, in dem Artikel falsch zitiert worden zu sein.',
        ru: 'Профессор злится, что его неправильно процитировали в статье.',
      },
      {
        de: 'Sie ist stolz darauf, ihre Doktorarbeit in nur drei Jahren abgeschlossen zu haben.',
        ru: 'Она гордится тем, что закончила диссертацию всего за три года.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Forscher behauptet, die Daten nicht manipuliert ___.',
        options: ['zu haben', 'haben zu', 'zu sein', 'zu werden'],
        answer: 0,
        explanationRu: 'Действие было раньше → Infinitiv Perfekt: manipuliert zu haben. manipulieren образует Perfekt с haben; zu стоит перед вспомогательным глаголом.',
      },
      {
        type: 'choice',
        prompt: 'Die Doktorandin hofft, für das Stipendium ___.',
        options: ['ausgewählt zu werden', 'ausgewählt zu haben', 'auszuwählen werden', 'zu ausgewählt werden'],
        answer: 0,
        explanationRu: 'Её выберут (пассив, в будущем) → Passiv-Infinitiv: ausgewählt zu werden.',
      },
      {
        type: 'choice',
        prompt: 'Wir freuen uns, Sie heute zu unserem Vortragsabend ___.',
        options: ['begrüßt zu haben', 'zu begrüßen', 'begrüßt zu werden', 'begrüßen zu sein'],
        answer: 1,
        explanationRu: 'Приветствуем сейчас, в активе → Infinitiv Präsens: zu begrüßen.',
      },
      {
        type: 'choice',
        prompt: 'Sie ist froh, rechtzeitig zum Kongress ___.',
        options: ['gekommen zu haben', 'gekommen zu sein', 'zu kommen gewesen', 'kommen zu sein'],
        answer: 1,
        explanationRu: 'kommen образует Perfekt с sein (ist gekommen) → Infinitiv Perfekt: gekommen zu sein.',
      },
      {
        type: 'gap',
        prompt: 'Es ist wichtig, Fachbegriffe für ein breites Publikum ___.',
        answers: ['zu erklären'],
        hintRu: 'erklären',
        explanationRu: 'После es ist wichtig — инфинитив с zu; действие не предшествует → Infinitiv Präsens: zu erklären.',
      },
      {
        type: 'gap',
        prompt: 'Im Anschluss hatten die Zuhörer die Gelegenheit, an der Diskussion ___.',
        answers: ['teilzunehmen'],
        hintRu: 'teilnehmen',
        explanationRu: 'die Gelegenheit, … zu … После существительного — инфинитив с zu. У отделяемых глаголов zu стоит между приставкой и основой: teilzunehmen.',
      },
      {
        type: 'gap',
        prompt: 'Er bedauert, die Ergebnisse zu früh ___.',
        answers: ['veröffentlicht zu haben'],
        hintRu: 'veröffentlichen, действие уже произошло',
        explanationRu: 'Сожалеет о том, что уже сделал → Infinitiv Perfekt: veröffentlicht zu haben.',
      },
      {
        type: 'gap',
        prompt: 'Viele Forschende haben Angst, in Talkshows aus dem Zusammenhang ___.',
        answers: ['gerissen zu werden'],
        hintRu: 'reißen, пассив',
        explanationRu: 'Их слова «вырвут из контекста» — это сделают другие → Passiv-Infinitiv: gerissen zu werden (etwas aus dem Zusammenhang reißen).',
      },
      {
        type: 'order',
        words: ['Die Journalistin', 'behauptet,', 'mit dem Nobelpreisträger', 'persönlich', 'gesprochen', 'zu haben.'],
        translationRu: 'Журналистка утверждает, что лично разговаривала с нобелевским лауреатом.',
        explanationRu: 'Infinitiv Perfekt стоит в конце оборота: gesprochen zu haben. Все дополнения — перед ним.',
      },
      {
        type: 'order',
        words: ['Es', 'ist', 'nicht', 'einfach,', 'eine Studie', 'in drei Sätzen', 'zusammenzufassen.'],
        translationRu: 'Нелегко изложить исследование в трёх предложениях.',
        explanationRu: 'Конструкция es ist + прилагательное, … zu + инфинитив. Отделяемый глагол: zusammen-zu-fassen.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное с dass инфинитивным оборотом.',
        prompt: 'Er sagt, dass er die Studie vollständig gelesen hat.',
        answers: ['Er sagt, die Studie vollständig gelesen zu haben.'],
        explanationRu: 'Подлежащие совпадают (er), действие предшествует → Infinitiv Perfekt: gelesen zu haben.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное с dass инфинитивным оборотом.',
        prompt: 'Die Forscherin hofft, dass sie zu der Tagung eingeladen wird.',
        answers: ['Die Forscherin hofft, zu der Tagung eingeladen zu werden.', 'Die Forscherin hofft, zur Tagung eingeladen zu werden.'],
        explanationRu: 'Пассив в настоящем/будущем (eingeladen wird) → Passiv-Infinitiv: eingeladen zu werden.',
      },
    ],
  },
  vocab: [
    {
      de: 'Fachpublikum',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'профессиональная аудитория, специалисты',
      example: 'Vor einem Fachpublikum kann man auf viele Erklärungen verzichten.',
      exampleRu: 'Перед профессиональной аудиторией можно обойтись без многих объяснений.',
    },
    {
      de: 'Falschinformation',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'ложная информация',
      example: 'Falschinformationen über Impfungen verbreiten sich im Netz oft schneller als die Richtigstellung.',
      exampleRu: 'Ложная информация о прививках часто распространяется в сети быстрее, чем опровержение.',
    },
    {
      de: 'Wissenschaftsjournalismus',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'научная журналистика',
      example: 'Guter Wissenschaftsjournalismus erklärt nicht nur Ergebnisse, sondern auch ihre Grenzen.',
      exampleRu: 'Хорошая научная журналистика объясняет не только результаты, но и их ограничения.',
    },
    {
      de: 'Konsens',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'консенсус, единое мнение',
      example: 'In der Klimaforschung herrscht ein breiter Konsens über die Ursachen der Erderwärmung.',
      exampleRu: 'В климатологии существует широкий консенсус относительно причин глобального потепления.',
    },
    {
      de: 'Expertise',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'компетентность, экспертные знания; экспертное заключение',
      example: 'Für das Gutachten fehlte dem Institut die nötige Expertise.',
      exampleRu: 'Для заключения институту не хватало необходимой компетенции.',
    },
    {
      de: 'Unsicherheit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'неопределённость, неуверенность',
      example: 'Seriöse Forschende sprechen offen über die Unsicherheiten ihrer Prognosen.',
      exampleRu: 'Добросовестные исследователи открыто говорят о неопределённостях своих прогнозов.',
    },
    {
      de: 'Forschungsfreiheit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'свобода научных исследований',
      example: 'Die Forschungsfreiheit ist in Deutschland durch das Grundgesetz geschützt.',
      exampleRu: 'Свобода научных исследований в Германии защищена Основным законом.',
    },
    {
      de: 'Kongress',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'конгресс, научная конференция',
      example: 'Auf dem Kongress in Wien stellte sie ihre Ergebnisse erstmals vor.',
      exampleRu: 'На конгрессе в Вене она впервые представила свои результаты.',
    },
    {
      de: 'Komplexität',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'сложность, комплексность',
      example: 'Man muss die Komplexität eines Themas reduzieren, ohne es zu verfälschen.',
      exampleRu: 'Нужно снизить сложность темы, не искажая её.',
    },
    {
      de: 'kommunizieren',
      forms: 'kommunizierte, hat kommuniziert',
      pos: 'verb',
      ru: 'сообщать, доносить; общаться',
      example: 'Das Institut hat die Risiken der Studie offen kommuniziert.',
      exampleRu: 'Институт открыто сообщил о рисках исследования.',
    },
    {
      de: 'beweisen',
      forms: 'beweist, bewies, hat bewiesen',
      pos: 'verb',
      ru: 'доказывать',
      example: 'Eine einzelne Studie kann einen Zusammenhang selten endgültig beweisen.',
      exampleRu: 'Отдельное исследование редко может окончательно доказать взаимосвязь.',
    },
    {
      de: 'leugnen',
      forms: 'leugnete, hat geleugnet',
      pos: 'verb',
      ru: 'отрицать (очевидное)',
      example: 'Trotz aller Daten leugnen manche Politiker den menschengemachten Klimawandel.',
      exampleRu: 'Несмотря на все данные, некоторые политики отрицают антропогенное изменение климата.',
    },
    {
      de: 'Transparenz',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'прозрачность, открытость',
      example: 'Mehr Transparenz bei der Finanzierung von Studien stärkt das Vertrauen der Öffentlichkeit.',
      exampleRu: 'Большая прозрачность в финансировании исследований укрепляет доверие общества.',
    },
    {
      de: 'Irrtum',
      article: 'der',
      plural: '-¨er',
      pos: 'noun',
      ru: 'заблуждение, ошибка',
      example: 'Die Geschichte der Wissenschaft ist auch eine Geschichte der Irrtümer.',
      exampleRu: 'История науки — это и история заблуждений.',
    },
    {
      de: 'allgemeinverständlich',
      pos: 'adj',
      ru: 'общедоступный, понятный всем',
      example: 'Jede Studie soll künftig eine allgemeinverständliche Zusammenfassung enthalten.',
      exampleRu: 'В будущем каждое исследование должно содержать общедоступное краткое изложение.',
    },
    {
      de: 'einen Vortrag halten',
      forms: 'hält, hielt, hat gehalten',
      pos: 'phrase',
      ru: 'выступать с докладом, читать лекцию',
      example: 'Nächste Woche hält die Astronomin einen Vortrag in der Stadtbibliothek.',
      exampleRu: 'На следующей неделе астроном выступит с докладом в городской библиотеке.',
    },
    {
      de: 'Methode',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'метод',
      example: 'Die Methode der Befragung wurde von anderen Forschenden kritisiert.',
      exampleRu: 'Метод опроса подвергся критике со стороны других исследователей.',
    },
    {
      de: 'nachprüfen',
      forms: 'prüft nach, prüfte nach, hat nachgeprüft',
      pos: 'verb',
      ru: 'перепроверять',
      example: 'Leserinnen und Leser sollten die Möglichkeit haben, jede Angabe nachzuprüfen.',
      exampleRu: 'У читателей должна быть возможность перепроверить каждое утверждение.',
    },
    {
      de: 'Studienlage',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'совокупность имеющихся исследований, научная база',
      example: 'Die Studienlage zu den Langzeitfolgen ist noch dünn.',
      exampleRu: 'Научных данных о долгосрочных последствиях пока мало.',
    },
    {
      de: 'populärwissenschaftlich',
      pos: 'adj',
      ru: 'научно-популярный',
      example: 'Sein populärwissenschaftliches Buch über das Gehirn stand monatelang auf der Bestsellerliste.',
      exampleRu: 'Его научно-популярная книга о мозге месяцами была в списке бестселлеров.',
    },
  ],
  listening: {
    title: 'Im Gespräch: Zehn Minuten für die Wissenschaft',
    kind: 'dialog',
    text: `A: Frau Dr. Feld, Sie haben letzte Woche den Science-Slam in Hamburg gewonnen. Für alle, die das Format nicht kennen: Worum geht es da?
B: Beim Science-Slam haben Forschende genau zehn Minuten Zeit, ihr Thema einem Laienpublikum vorzustellen. Am Ende entscheidet das Publikum, wer gewinnt. Es kommt also nicht darauf an, möglichst viele Fachbegriffe zu benutzen, sondern verstanden zu werden.
A: Sie forschen zur Quantenphysik. Ist es überhaupt möglich, so ein Thema in zehn Minuten zu erklären?
B: Alles zu erklären, ist natürlich unmöglich. Aber es reicht, eine einzige Idee wirklich verständlich zu machen. Ich habe zum Beispiel mit einem Kaffeebecher und zwei Socken gearbeitet.
A: Viele Ihrer Kolleginnen und Kollegen sehen solche Auftritte kritisch. Man wirft Ihnen vor, die Wissenschaft zu sehr zu vereinfachen.
B: Ich verstehe die Sorge. Niemand möchte, dass seine Ergebnisse verzerrt dargestellt werden. Ich habe mich am Anfang selbst geärgert, in einer Zeitung völlig falsch zitiert worden zu sein. Aber wenn wir nicht mit der Öffentlichkeit sprechen, tun es andere – und zwar oft Leute ohne jede Expertise.
A: Sie spielen auf Falschinformationen im Internet an?
B: Genau. In der Pandemie haben wir gesehen, wie schnell sich Gerüchte verbreiten. Es genügt nicht, gute Studien in Fachzeitschriften zu veröffentlichen. Wir haben auch die Aufgabe, zu erklären, wie Wissenschaft funktioniert – und dass Unsicherheit dazugehört.
A: Was meinen Sie damit?
B: Viele Menschen erwarten von der Forschung endgültige Antworten. Aber Wissenschaft ist ein Prozess. Wenn eine Forscherin zugibt, sich geirrt zu haben, ist das kein Skandal, sondern ein Zeichen von Seriosität.
A: Bekommen Sie für solche Auftritte eigentlich Anerkennung von Ihrer Universität?
B: Leider noch zu wenig. Für die Karriere zählen fast nur Publikationen. Ich wünsche mir, dass Wissenschaftskommunikation als Teil unserer Arbeit anerkannt wird und dass junge Forschende die Möglichkeit bekommen, sich darin weiterzubilden.
A: Und was ist Ihr nächstes Projekt?
B: Ich plane einen Podcast für Jugendliche. Ich hoffe, dabei von einer Stiftung unterstützt zu werden.
A: Dann drücken wir Ihnen die Daumen. Vielen Dank für das Gespräch!`,
    questions: [
      {
        question: 'Wer entscheidet beim Science-Slam über den Sieg?',
        options: ['eine Jury aus Professoren', 'das Publikum', 'die Universität', 'die Moderatorin'],
        answer: 1,
      },
      {
        question: 'Was ist laut Dr. Feld das Ziel eines kurzen Vortrags?',
        options: [
          'möglichst viele Fachbegriffe zu verwenden',
          'das gesamte Fachgebiet vorzustellen',
          'eine einzige Idee verständlich zu machen',
          'das Publikum nur zu unterhalten',
        ],
        answer: 2,
      },
      {
        question: 'Welche Erfahrung hat Dr. Feld mit der Presse gemacht?',
        options: [
          'Sie ist in einem Artikel falsch zitiert worden.',
          'Sie hat noch nie ein Interview gegeben.',
          'Ein Artikel über sie hat einen Preis gewonnen.',
          'Journalisten haben sie nie eingeladen.',
        ],
        answer: 0,
      },
      {
        question: 'Warum sollten Forschende nach Meinung von Dr. Feld mit der Öffentlichkeit sprechen?',
        options: [
          'um zusätzliches Geld zu verdienen',
          'weil sonst Menschen ohne Fachwissen die Debatte bestimmen',
          'weil Fachzeitschriften zu teuer sind',
          'weil die Universitäten es vorschreiben',
        ],
        answer: 1,
      },
      {
        question: 'Was wünscht sich Dr. Feld?',
        options: [
          'mehr Zeit für Publikationen',
          'einen eigenen Radiosender',
          'weniger Lehrveranstaltungen',
          'dass Wissenschaftskommunikation als Arbeitsleistung zählt',
        ],
        answer: 3,
      },
    ],
  },
  writing: {
    taskRu: 'В блоге вашего университета обсуждают вопрос: «Должны ли учёные быть обязаны рассказывать о своих исследованиях широкой публике?» Напишите сообщение (Forumsbeitrag), раскрыв все четыре пункта.',
    taskDe: 'Im Blog Ihrer Hochschule wird diskutiert: „Sollten Forschende verpflichtet werden, ihre Ergebnisse allgemeinverständlich zu präsentieren?“ Schreiben Sie einen Beitrag.',
    points: [
      'Warum Wissenschaftskommunikation heute wichtig ist',
      'Welche Risiken und Probleme es dabei gibt (z. B. Vereinfachung, Zeitmangel)',
      'Eigene Erfahrungen mit populärwissenschaftlichen Medien (Podcast, Vortrag, Artikel)',
      'Ihre Meinung: Pflicht, freiwilliges Angebot oder ein anderer Vorschlag',
    ],
    minWords: 170,
    usefulPhrases: [
      'Es ist meiner Ansicht nach unverzichtbar, …',
      'Viele Forschende befürchten, falsch verstanden zu werden.',
      'Ich habe selbst die Erfahrung gemacht, … zu …',
      'Man darf nicht vergessen, dass …',
      'Es wäre sinnvoll, jungen Forschenden die Möglichkeit zu geben, …',
      'Zusammenfassend lässt sich sagen, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы — член студенческого совета. Руководство университета предлагает обязать всех научных сотрудников раз в семестр выступать с публичной лекцией или вести блог. Вы обсуждаете это с представителем профессуры, который против такой обязанности. Отстаивайте свою позицию и найдите компромисс.',
    aiRole: 'Sie sind Prof. Dr. Hartmann, Biochemiker und Mitglied im Senat einer deutschen Universität. Sie diskutieren mit einem Mitglied des Studierendenrats über den Vorschlag, alle Forschenden zu öffentlichen Vorträgen oder Blogbeiträgen zu verpflichten. Sie sind dagegen: Sie haben ohnehin zu wenig Zeit für Forschung und Lehre, Sie fürchten Vereinfachung und falsche Zitate in den Medien, und Sie halten Kommunikation für eine Aufgabe von Profis aus der Pressestelle. Sprechen Sie natürliches Deutsch auf B2-Niveau, fordern Sie Belege und Beispiele, widersprechen Sie höflich, aber bestimmt, und zeigen Sie sich am Ende offen für einen Kompromiss.',
    opener: 'Ich sage es ganz offen: Ich halte diese Pflicht für eine schlechte Idee. Meine Aufgabe ist es, zu forschen und zu lehren, nicht, im Fernsehen aufzutreten. Warum sollte ich das tun?',
    tasksRu: [
      'Объясните, почему общение науки с обществом сегодня особенно важно (фейки, доверие, налоговые деньги).',
      'Используйте не менее четырёх инфинитивных конструкций, в том числе Infinitiv Perfekt и Passiv-Infinitiv (… falsch verstanden zu werden, … erklärt zu haben).',
      'Ответьте на возражения: нехватка времени, риск упрощения, «это работа пресс-службы».',
      'Предложите компромисс (например, добровольность с признанием в карьере, тренинги, работа в тандеме с журналистами).',
    ],
    readAloud: [
      'Viele Forschende haben Angst, von den Medien falsch verstanden oder aus dem Zusammenhang gerissen zu werden.',
      'Die Wissenschaftlerin gab offen zu, sich bei der ersten Auswertung der Daten geirrt zu haben.',
      'Es ist eine wichtige Aufgabe der Wissenschaft, ihre Methoden und Unsicherheiten allgemeinverständlich zu erklären.',
    ],
  },
};
