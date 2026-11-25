import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-06',
  level: 'C1',
  order: 6,
  title: 'Recht und Ethik',
  titleRu: 'Право и этика',
  goalsRu: [
    'Понимать и использовать модальные инфинитивы (sein/haben + zu) в официальных и юридических текстах',
    'Образовывать и понимать конструкцию с Gerundivum (die zu lösende Aufgabe)',
    'Использовать безличные конструкции (es gilt …, sich lassen, бессубъектный пассив) для объективного изложения',
    'Участвовать в дискуссии об этических дилеммах и аргументированно отстаивать позицию',
  ],
  grammar: {
    topic: 'Modale Infinitive, Gerundivum und unpersönliche Konstruktionen',
    topicRu: 'Модальные инфинитивы, Gerundivum и безличные конструкции',
    explanationRu: `В юридических, административных и научных текстах немцы избегают прямого указания на исполнителя. Для этого служат **модальные инфинитивы** и родственные им конструкции.

**1. sein + zu + Infinitiv** = пассив + модальный глагол (*müssen* или *können*):

- *Der Antrag **ist** bis Freitag **einzureichen**.* = muss eingereicht werden (обязанность).
- *Das Problem **ist** kaum **zu lösen**.* = kann kaum gelöst werden (возможность).

Какое значение имеется в виду, понятно из контекста; отрицание и слова *kaum, leicht, schwer* обычно указывают на «можно».

**2. haben + zu + Infinitiv** = актив + *müssen*: подлежащее само выполняет действие.

- *Der Mieter **hat** die Kaution **zu zahlen**.* = muss die Kaution zahlen.

**3. Gerundivum** (zu + Partizip I) — определение с модальным значением: *die **zu lösende** Aufgabe* = die Aufgabe, die gelöst werden muss/kann. Склоняется как прилагательное; у отделяемых глаголов *zu* стоит внутри: *die **einzureichenden** Unterlagen*. Возможно только у **переходных** глаголов.

**4. Другие безличные конструкции:**

- *sich lassen + Infinitiv*: *Das **lässt sich** nicht beweisen.* (= kann nicht bewiesen werden)
- прилагательные на *-bar/-lich*: *unvermeidbar, unverzichtbar, unverständlich*
- *es gilt + zu-Infinitiv* (необходимо): ***Es gilt**, die Grundrechte zu schützen.*
- бессубъектный пассив: *Darüber **wird** seit Jahren **gestritten**.*

**Типичные ошибки русскоговорящих:**

- путают *haben zu* и *sein zu*: если подлежащее — исполнитель, нужно *haben*, если объект действия — *sein*;
- добавляют модальный глагол: *Der Antrag muss einzureichen* ✗;
- ставят *zu* перед отделяемой приставкой: *zu einreichen* ✗ → *einzureichen*;
- забывают окончание у Gerundivum: *die zu lösend Aufgabe* ✗;
- образуют Gerundivum от непереходных глаголов: *die zu schlafende Zeit* ✗.

Русские аналоги: «подлежит», «следует», «необходимо», «не поддаётся».`,
    table: [
      ['Конструкция', 'Значение', 'Пример'],
      ['sein + zu + Inf.', 'пассив + müssen/können', 'Die Frist ist einzuhalten.'],
      ['haben + zu + Inf.', 'актив + müssen', 'Sie haben die Frist einzuhalten.'],
      ['zu + Partizip I', 'определение (= muss/kann … werden)', 'die einzuhaltende Frist'],
      ['sich lassen + Inf.', 'пассив + können', 'Das lässt sich nicht beweisen.'],
      ['es gilt + zu-Inf.', 'необходимо', 'Es gilt, Fehler zu vermeiden.'],
    ],
    examples: [
      {
        de: 'Der Einspruch ist innerhalb von vier Wochen schriftlich einzulegen.',
        ru: 'Возражение должно быть подано письменно в течение четырёх недель.',
      },
      {
        de: 'Die Angeklagte hat sich am Montag vor Gericht zu verantworten.',
        ru: 'В понедельник подсудимая должна будет держать ответ перед судом.',
      },
      {
        de: 'Die Frage nach der moralischen Schuld ist kaum eindeutig zu beantworten.',
        ru: 'На вопрос о моральной вине вряд ли можно дать однозначный ответ.',
      },
      {
        de: 'Die zu klärende Frage lautet, ob der Eingriff verhältnismäßig war.',
        ru: 'Вопрос, который предстоит выяснить, звучит так: было ли вмешательство соразмерным.',
      },
      {
        de: 'Es gilt, die Würde des Menschen unter allen Umständen zu achten.',
        ru: 'Необходимо при любых обстоятельствах уважать достоинство человека.',
      },
      {
        de: 'Ein Verstoß gegen das Datenschutzgesetz lässt sich in diesem Fall nicht nachweisen.',
        ru: 'Нарушение закона о защите данных в этом случае доказать невозможно.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Unterlagen ___ bis spätestens 30. Juni beim Amt einzureichen.',
        options: ['sind', 'haben', 'werden', 'lassen'],
        answer: 0,
        explanationRu:
          'Документы — объект действия (их подают), поэтому нужен «sein + zu + Inf.» = «müssen eingereicht werden».',
      },
      {
        type: 'choice',
        prompt: 'Der Vermieter ___ die Mängel umgehend zu beseitigen.',
        options: ['ist', 'hat', 'wird', 'muss'],
        answer: 1,
        explanationRu:
          'Арендодатель сам устраняет недостатки (активное действие) → «haben + zu + Inf.» = «muss beseitigen». После «muss» частица «zu» невозможна.',
      },
      {
        type: 'choice',
        prompt: 'Die ___ Gesetzesänderung soll den Schutz von Hinweisgebern verbessern.',
        options: ['zu verabschiedete', 'zu verabschiedenden', 'zu verabschiedende', 'verabschiedende zu'],
        answer: 2,
        explanationRu:
          'Gerundivum = «zu» + Partizip I + окончание прилагательного. После «die» в им. п. ед. ч. ж. р. окончание -e: «die zu verabschiedende Gesetzesänderung».',
      },
      {
        type: 'choice',
        prompt: 'Was bedeutet: „Diese Entscheidung ist nicht zu rechtfertigen.“?',
        options: [
          'Diese Entscheidung muss nicht gerechtfertigt werden.',
          'Niemand will diese Entscheidung rechtfertigen.',
          'Diese Entscheidung darf nicht gerechtfertigt werden.',
          'Diese Entscheidung kann nicht gerechtfertigt werden.',
        ],
        answer: 3,
        explanationRu:
          '«sein + zu» с отрицанием обычно выражает невозможность: «не может быть оправдано». «nicht müssen» передавалось бы иначе: «braucht nicht gerechtfertigt zu werden».',
      },
      {
        type: 'gap',
        prompt: 'Die ___ (einreichen) Dokumente müssen amtlich beglaubigt sein.',
        answers: ['einzureichenden'],
        hintRu: 'Gerundivum от отделяемого глагола',
        explanationRu:
          'У отделяемых глаголов «zu» стоит между приставкой и корнем: «einzureichend». Мн. ч. после «die» → окончание -en.',
      },
      {
        type: 'gap',
        prompt: 'Es ___, die Grundrechte auch in Krisenzeiten konsequent zu schützen.',
        answers: ['gilt'],
        hintRu: '«необходимо»',
        explanationRu: 'Безличная конструкция «es gilt + zu-Infinitiv» означает «необходимо, важно сделать что-либо».',
      },
      {
        type: 'gap',
        prompt: 'Die Schuldfrage ___ sich anhand der vorliegenden Beweise nicht eindeutig klären.',
        answers: ['lässt'],
        explanationRu: '«sich lassen + Infinitiv» = пассив + «können»: «не может быть однозначно выяснена».',
      },
      {
        type: 'gap',
        prompt: 'Ein derart tiefer Eingriff in die Privatsphäre ist ethisch kaum ___ (vertreten).',
        answers: ['zu vertreten', 'vertretbar'],
        explanationRu:
          '«sein + zu + Inf.» с «kaum» выражает (не)возможность: «вряд ли можно оправдать». Синонимичное прилагательное — «vertretbar».',
      },
      {
        type: 'order',
        words: ['Die', 'Angeklagte', 'hat', 'sich', 'vor Gericht', 'zu verantworten.'],
        translationRu: 'Подсудимая должна держать ответ перед судом.',
        explanationRu:
          '«haben» стоит на втором месте, возвратное местоимение — сразу после подлежащего, «zu + Infinitiv» — в конце предложения.',
      },
      {
        type: 'order',
        words: ['Die', 'noch', 'zu', 'klärende', 'Frage', 'ist', 'äußerst', 'heikel.'],
        translationRu: 'Вопрос, который ещё предстоит прояснить, крайне щекотлив.',
        explanationRu:
          'Gerundivum стоит между артиклем и существительным; наречие «noch» предшествует «zu + Partizip I».',
      },
      {
        type: 'transform',
        instructionRu: 'Замените модальный пассив конструкцией «sein + zu + Infinitiv».',
        prompt: 'Diese Regel muss von allen Beteiligten beachtet werden.',
        answers: ['Diese Regel ist von allen Beteiligten zu beachten.'],
        explanationRu: '«muss … beachtet werden» = «ist … zu beachten». Модальный глагол и «werden» исчезают, Partizip II заменяется на «zu + Infinitiv».',
      },
      {
        type: 'transform',
        instructionRu: 'Замените относительное придаточное конструкцией Gerundivum.',
        prompt: 'Die Kosten, die vom Kläger getragen werden müssen, sind erheblich.',
        answers: ['Die vom Kläger zu tragenden Kosten sind erheblich.'],
        explanationRu:
          '«die getragen werden müssen» → «zu tragend» + окончание -en (мн. ч. после «die»). Агент «vom Kläger» стоит перед Gerundivum.',
      },
    ],
  },
  vocab: [
    {
      de: 'Würde',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'достоинство',
      example: 'Die Würde des Menschen ist unantastbar – so beginnt das Grundgesetz.',
      exampleRu: '«Достоинство человека неприкосновенно» — так начинается Основной закон.',
    },
    {
      de: 'Grundsatz',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'принцип, основное правило',
      example: 'Nach dem Grundsatz „im Zweifel für den Angeklagten“ wurde er freigesprochen.',
      exampleRu: 'Согласно принципу «все сомнения толкуются в пользу обвиняемого» его оправдали.',
    },
    {
      de: 'Verhältnismäßigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'соразмерность',
      example: 'Das Gericht bezweifelte die Verhältnismäßigkeit der Maßnahme.',
      exampleRu: 'Суд усомнился в соразмерности этой меры.',
    },
    {
      de: 'verhängen',
      forms: 'eine Strafe / ein Verbot verhängen; verhängt, verhängte, hat verhängt',
      pos: 'verb',
      ru: 'налагать (наказание, запрет)',
      example: 'Gegen das Unternehmen wurde ein Bußgeld in Millionenhöhe verhängt.',
      exampleRu: 'На компанию был наложен штраф в несколько миллионов.',
    },
    {
      de: 'Rechtsstaat',
      article: 'der',
      plural: '-en',
      pos: 'noun',
      ru: 'правовое государство',
      example: 'In einem Rechtsstaat ist auch die Regierung an Recht und Gesetz gebunden.',
      exampleRu: 'В правовом государстве даже правительство связано законом.',
    },
    {
      de: 'haften',
      forms: 'für + Akk',
      pos: 'verb',
      ru: 'нести (материальную) ответственность',
      example: 'Eltern haften für ihre Kinder – so steht es auf vielen Baustellenschildern.',
      exampleRu: '«Родители несут ответственность за своих детей» — написано на многих табличках у строек.',
    },
    {
      de: 'Rechtsprechung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'судебная практика, правосудие',
      example: 'Nach ständiger Rechtsprechung ist eine solche Klausel unwirksam.',
      exampleRu: 'Согласно устоявшейся судебной практике такое положение недействительно.',
    },
    {
      de: 'verstoßen',
      forms: 'gegen + Akk; verstößt, verstieß, hat verstoßen',
      pos: 'verb',
      ru: 'нарушать',
      example: 'Die Überwachung der Beschäftigten verstößt gegen geltendes Arbeitsrecht.',
      exampleRu: 'Слежка за сотрудниками нарушает действующее трудовое право.',
    },
    {
      de: 'Sterbehilfe',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'эвтаназия, помощь при уходе из жизни',
      example: 'Die Debatte über die Sterbehilfe berührt grundlegende ethische Fragen.',
      exampleRu: 'Дебаты об эвтаназии затрагивают фундаментальные этические вопросы.',
    },
    {
      de: 'Datenschutz',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'защита персональных данных',
      example: 'Der Datenschutz wird in Europa deutlich strenger gehandhabt als in den USA.',
      exampleRu: 'В Европе к защите данных подходят значительно строже, чем в США.',
    },
    {
      de: 'zulässig',
      pos: 'adj',
      ru: 'допустимый, разрешённый',
      example: 'Ob die Videoaufnahmen als Beweismittel zulässig sind, ist umstritten.',
      exampleRu: 'Допустимы ли видеозаписи в качестве доказательства — вопрос спорный.',
    },
    {
      de: 'strafbar',
      pos: 'adj',
      ru: 'уголовно наказуемый',
      example: 'Die Weitergabe vertraulicher Daten kann unter Umständen strafbar sein.',
      exampleRu: 'Передача конфиденциальных данных при определённых обстоятельствах может быть уголовно наказуемой.',
    },
    {
      de: 'unantastbar',
      pos: 'adj',
      ru: 'неприкосновенный',
      example: 'Für viele gilt das Recht auf Privatsphäre als unantastbar.',
      exampleRu: 'Для многих право на частную жизнь неприкосновенно.',
    },
    {
      de: 'Abwägung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'взвешивание (интересов), сопоставление',
      example: 'Das Urteil beruht auf einer sorgfältigen Abwägung zwischen Sicherheit und Freiheit.',
      exampleRu: 'Решение основано на тщательном взвешивании безопасности и свободы.',
    },
    {
      de: 'abwägen',
      forms: 'wägt ab, wog ab, hat abgewogen',
      pos: 'verb',
      ru: 'взвешивать, тщательно сопоставлять',
      example: 'Der Ethikrat hat die Argumente beider Seiten sorgfältig abgewogen.',
      exampleRu: 'Совет по этике тщательно взвесил аргументы обеих сторон.',
    },
    {
      de: 'einklagen',
      forms: 'klagt ein, klagte ein, hat eingeklagt',
      pos: 'verb',
      ru: 'взыскивать через суд, добиваться по суду',
      example: 'Die Betroffenen wollen ihre Entschädigung notfalls einklagen.',
      exampleRu: 'Пострадавшие намерены при необходимости добиваться компенсации через суд.',
    },
    {
      de: 'Grauzone',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'серая зона (правовая неопределённость)',
      example: 'Der Handel mit diesen Daten bewegt sich in einer rechtlichen Grauzone.',
      exampleRu: 'Торговля этими данными находится в правовой серой зоне.',
    },
    {
      de: 'sich vor Gericht verantworten',
      forms: 'für + Akk / wegen + Gen',
      pos: 'phrase',
      ru: 'держать ответ перед судом',
      example: 'Der ehemalige Manager muss sich wegen Betrugs vor Gericht verantworten.',
      exampleRu: 'Бывший менеджер должен держать ответ перед судом за мошенничество.',
    },
    {
      de: 'einen Präzedenzfall schaffen',
      forms: 'schafft, schuf, hat geschaffen',
      pos: 'phrase',
      ru: 'создать прецедент',
      example: 'Mit seinem Urteil hat das Gericht einen Präzedenzfall geschaffen.',
      exampleRu: 'Своим решением суд создал прецедент.',
    },
    {
      de: 'mit zweierlei Maß messen',
      forms: 'misst, maß, hat gemessen',
      pos: 'phrase',
      ru: 'применять двойные стандарты',
      example: 'Kritiker werfen der Behörde vor, mit zweierlei Maß zu messen.',
      exampleRu: 'Критики упрекают ведомство в применении двойных стандартов.',
    },
  ],
  listening: {
    title: 'Interview: Gesichtserkennung am Bahnhof – Sicherheit um jeden Preis?',
    kind: 'dialog',
    text: `A: Frau Dr. Yilmaz, mehrere Bundesländer wollen der Polizei erlauben, Bahnhöfe mit automatischer Gesichtserkennung zu überwachen. Wie ist dieses Vorhaben aus rechtlicher Sicht zu bewerten?
B: Zunächst ist festzuhalten, dass es sich um einen erheblichen Eingriff in die Grundrechte handelt. Jeder, der den Bahnhof betritt, wird erfasst – auch Menschen, die sich nicht das Geringste haben zuschulden kommen lassen.
A: Die Befürworter argumentieren, so ließen sich gesuchte Straftäter deutlich schneller fassen.
B: Das ist nicht von der Hand zu weisen. Aber in einem Rechtsstaat gilt der Grundsatz der Verhältnismäßigkeit. Es ist also abzuwägen, ob der Nutzen den Eingriff rechtfertigt. Und hier habe ich erhebliche Zweifel.
A: Warum?
B: Weil die Systeme fehleranfällig sind. Bei einem Pilotprojekt in Berlin lag die Fehlerquote zwar unter einem Prozent. Das klingt wenig, aber bei Zehntausenden Reisenden pro Tag sind das Hunderte Menschen, die zu Unrecht ins Visier geraten. Hinzu kommt, dass solche Programme bei Menschen mit dunkler Hautfarbe nachweislich häufiger danebenliegen.
A: Das hieße, hier würde mit zweierlei Maß gemessen?
B: Zumindest besteht diese Gefahr. Und das wäre mit dem Gleichheitsgrundsatz kaum zu vereinbaren.
A: Was müsste der Gesetzgeber denn tun, damit ein solcher Einsatz zulässig wäre?
B: Es wären strenge Bedingungen zu erfüllen. Erstens hätte der Staat genau festzulegen, nach welchen Personen überhaupt gesucht werden darf – etwa nur nach Verdächtigen schwerer Straftaten. Zweitens sind die erhobenen Daten unverzüglich zu löschen, sobald kein Treffer vorliegt. Und drittens bedarf es einer unabhängigen Kontrolle.
A: Und wer haftet, wenn jemand aufgrund eines Fehlers festgenommen wird?
B: Das ist eine der noch zu klärenden Fragen. Bislang bewegen wir uns da in einer rechtlichen Grauzone. Es gilt, diese Lücke zu schließen, bevor die Technik flächendeckend eingesetzt wird – und nicht erst hinterher.
A: Rechnen Sie damit, dass das Bundesverfassungsgericht angerufen wird?
B: Davon ist auszugehen. Ich vermute, dass Bürgerrechtsorganisationen Verfassungsbeschwerde einlegen werden. Wie das Gericht entscheidet, lässt sich schwer vorhersagen. Aber das Urteil dürfte einen Präzedenzfall schaffen – weit über Deutschland hinaus.`,
    questions: [
      {
        question: 'Wie stuft Dr. Yilmaz die automatische Gesichtserkennung grundsätzlich ein?',
        options: [
          'als technisch ausgereifte Lösung',
          'als erheblichen Eingriff in die Grundrechte',
          'als rechtlich unproblematisch',
          'als reine Angelegenheit der Bahn',
        ],
        answer: 1,
      },
      {
        question: 'Welches Argument der Befürworter erkennt sie zumindest teilweise an?',
        options: [
          'Die Technik sei billiger als Polizeistreifen.',
          'Die Bevölkerung habe der Maßnahme zugestimmt.',
          'Die Daten würden ohnehin nie gespeichert.',
          'Gesuchte Straftäter könnten schneller gefasst werden.',
        ],
        answer: 3,
      },
      {
        question: 'Warum hält sie die niedrige Fehlerquote dennoch für problematisch?',
        options: [
          'Weil bei der großen Zahl an Reisenden viele Unschuldige betroffen wären.',
          'Weil die Fehlerquote in Wahrheit bei über 50 Prozent liegt.',
          'Weil die Polizei die Ergebnisse geheim hält.',
        ],
        answer: 0,
      },
      {
        question: 'Welche Bedingung für einen zulässigen Einsatz nennt sie NICHT?',
        options: [
          'Beschränkung auf Verdächtige schwerer Straftaten',
          'sofortige Löschung der Daten ohne Treffer',
          'ausdrückliche Zustimmung aller Reisenden',
          'eine unabhängige Kontrolle',
        ],
        answer: 2,
      },
      {
        question: 'Was erwartet die Expertin im Hinblick auf das Bundesverfassungsgericht?',
        options: [
          'Das Gericht werde sich nicht mit der Frage befassen.',
          'Das Gericht werde die Technik sicher erlauben.',
          'Das Gericht werde angerufen, und sein Urteil könne über Deutschland hinaus Bedeutung haben.',
          'Das Gericht habe bereits ein Verbot ausgesprochen.',
        ],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите эссе-рассуждение на тему: можно ли использовать искусственный интеллект для подготовки судебных решений? Используйте модальные инфинитивы и безличные конструкции, чтобы излагать мысли объективно.',
    taskDe:
      'Verfassen Sie eine Erörterung zum Thema: „Sollte künstliche Intelligenz bei der Vorbereitung von Gerichtsurteilen eingesetzt werden?“',
    points: [
      'Beschreiben Sie, wie KI in der Justiz eingesetzt werden könnte.',
      'Erläutern Sie mögliche Vorteile (Effizienz, Entlastung der Gerichte, Einheitlichkeit).',
      'Gehen Sie auf rechtliche und ethische Bedenken ein (Diskriminierung, Transparenz, Haftung).',
      'Formulieren Sie ein begründetes Fazit mit klaren Bedingungen für einen möglichen Einsatz.',
    ],
    minWords: 250,
    usefulPhrases: [
      'Zunächst ist festzuhalten, dass …',
      'Es ist nicht von der Hand zu weisen, dass …',
      'Dabei gilt es, … zu berücksichtigen.',
      'Es bleibt jedoch zu fragen, ob …',
      'Dieser Einwand lässt sich nicht ohne Weiteres entkräften.',
      'Eine noch zu klärende Frage ist, …',
      'Unter dem Strich ist … nur dann zu rechtfertigen, wenn …',
    ],
  },
  speaking: {
    scenarioRu:
      'Идёт дискуссия о донорстве органов. Вы выступаете за «модель возражения» (Widerspruchslösung): каждый считается донором, если не отказался при жизни. Ваш собеседник — член Совета по этике, который считает это вмешательством в право на самоопределение.',
    aiRole:
      'Sie sind Prof. Dr. Martin Kreuzer, Medizinethiker und Mitglied des Deutschen Ethikrats. Sie sprechen auf C1-Niveau, präzise, mit fachsprachlichen und idiomatischen Wendungen, und lehnen die Widerspruchslösung bei der Organspende entschieden ab, weil Schweigen keine Zustimmung sei. Sie hinterfragen jede These Ihres Gegenübers und verlangen stichhaltige Begründungen.',
    opener:
      'Ich will offen sein: Für mich ist das Recht auf körperliche Selbstbestimmung unantastbar. Wie wollen Sie rechtfertigen, dass der Staat Schweigen als Zustimmung wertet?',
    tasksRu: [
      'Изложите аргументы в пользу модели возражения (нехватка органов, спасённые жизни).',
      'Используйте не менее трёх конструкций sein/haben + zu и одну с Gerundivum.',
      'Признайте этическую проблему и предложите меры по её смягчению.',
      'Сопоставьте ситуацию в Германии с другими странами.',
    ],
    readAloud: [
      'Bei jeder staatlichen Maßnahme ist sorgfältig abzuwägen, ob der Eingriff in die Grundrechte verhältnismäßig ist.',
      'Die noch zu klärende Frage, wer für fehlerhafte Entscheidungen einer Software haftet, bewegt sich derzeit in einer rechtlichen Grauzone.',
      'Es gilt, die Würde des Menschen auch dann zu achten, wenn sich die Schuld eines Angeklagten zweifelsfrei nachweisen lässt.',
    ],
  },
};
