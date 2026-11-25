import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-08',
  level: 'B2',
  order: 8,
  title: 'Politik & Gesellschaft',
  titleRu: 'Политика и общество',
  goalsRu: [
    'Обсуждать политические и общественные темы: выборы, участие граждан, неравенство.',
    'Использовать предлоги с родительным падежом: trotz, wegen, während, aufgrund, infolge, angesichts, innerhalb, außerhalb, statt.',
    'Правильно склонять существительные слабого склонения (n-Deklination): den Präsidenten, dem Kollegen, des Experten.',
    'Написать аргументированную письменную позицию по общественному вопросу.',
  ],
  grammar: {
    topic: 'Präpositionen mit Genitiv und n-Deklination',
    topicRu: 'Предлоги с родительным падежом и слабое склонение существительных',
    explanationRu: `**Предлоги с родительным падежом** типичны для письменной и официальной речи: новостей, докладов, писем.

- **trotz** — несмотря на; **wegen** — из-за
- **während** — во время; **innerhalb / außerhalb** — в пределах (в течение) / вне
- **aufgrund** — на основании, из-за; **infolge** — вследствие
- **angesichts** — ввиду, учитывая; **statt / anstatt** — вместо

Окончания родительного падежа: мужской и средний род — **des** + **-(e)s** (des Gesetz**es**, des Wahlkampf**s**), женский род и множественное число — **der** (der Krise, der Wahlen). Прилагательные после артикля получают **-en**: wegen des hoh**en** Drucks. Если во множественном числе нет ни артикля, ни прилагательного, используют **von + Dativ**: innerhalb **von** drei Monaten.

**n-Deklination (слабое склонение).** Некоторые существительные мужского рода получают **-(e)n** во всех формах, кроме именительного падежа единственного числа: der Präsident → den / dem / des Präsident**en**. К ним относятся:

- существительные на **-e**, обозначающие людей и животных: der Kollege, der Kunde, der Zeuge, der Experte, der Junge
- существительные на **-ent, -ant, -ist, -oge, -at**: der Student, der Demonstrant, der Journalist, der Soziologe, der Kandidat
- некоторые другие: der Mensch, der Nachbar, der Herr (den Herr**n**)

**Типичные ошибки русскоговорящих:**

- Дательный падеж после trotz и wegen: *wegen dem Gesetz*. В разговорной речи так говорят, но в письменной нужно **wegen des Gesetzes**.
- Забывают -s в родительном падеже: *während des Wahlkampf* — правильно **während des Wahlkampfs**.
- Не склоняют слабые существительные: *Ich habe mit dem Präsident gesprochen* — правильно **mit dem Präsidenten**; *einen Experte* — правильно **einen Experten**.
- Добавляют лишнее -s: *des Präsidentens* — правильно **des Präsidenten**.
- Путают «в течение»: **innerhalb** — в пределах срока (innerhalb eines Jahres), **während** — во время события (während der Sitzung).`,
    table: [
      ['Предлог', 'Значение', 'Пример'],
      ['trotz', 'несмотря на', 'trotz des Protests'],
      ['wegen', 'из-за', 'wegen der hohen Kosten'],
      ['während', 'во время', 'während des Wahlkampfs'],
      ['aufgrund', 'на основании, из-за', 'aufgrund neuer Erkenntnisse'],
      ['infolge', 'вследствие', 'infolge der Wirtschaftskrise'],
      ['angesichts', 'ввиду, учитывая', 'angesichts der steigenden Preise'],
      ['innerhalb / außerhalb', 'в пределах / вне', 'innerhalb eines Jahres / außerhalb der Stadt'],
      ['statt', 'вместо', 'statt eines Kompromisses'],
    ],
    examples: [
      {
        de: 'Trotz des schlechten Wetters nahmen Tausende Menschen an der Demonstration teil.',
        ru: 'Несмотря на плохую погоду, тысячи людей приняли участие в демонстрации.',
      },
      {
        de: 'Angesichts der steigenden Mieten fordern viele Bürger mehr sozialen Wohnungsbau.',
        ru: 'Ввиду роста арендной платы многие граждане требуют строить больше социального жилья.',
      },
      {
        de: 'Während der Debatte im Bundestag kam es zu heftigen Auseinandersetzungen.',
        ru: 'Во время дебатов в бундестаге дело дошло до бурных столкновений.',
      },
      {
        de: 'Infolge der Wirtschaftskrise ist die Arbeitslosigkeit deutlich gestiegen.',
        ru: 'Вследствие экономического кризиса безработица заметно выросла.',
      },
      {
        de: 'Die Journalistin fragte den Präsidenten nach seinen Plänen.',
        ru: 'Журналистка спросила президента о его планах.',
      },
      {
        de: 'Innerhalb eines Jahres hat die Partei ein Viertel ihrer Mitglieder verloren.',
        ru: 'В течение одного года партия потеряла четверть своих членов.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'In einem offiziellen Bericht: Wegen ___ musste die Abstimmung verschoben werden.',
        options: ['des Streiks', 'dem Streik', 'der Streik', 'den Streik'],
        answer: 0,
        explanationRu: 'В письменной речи после wegen нужен Genitiv: des Streiks (мужской род: des + -s). Dativ (dem Streik) — только разговорный вариант.',
      },
      {
        type: 'choice',
        prompt: '___ der Proteste hielt die Regierung an ihrem Plan fest.',
        options: ['Wegen', 'Trotz', 'Infolge', 'Statt'],
        answer: 1,
        explanationRu: 'Правительство не изменило план, хотя были протесты, — это уступка: trotz + Genitiv.',
      },
      {
        type: 'choice',
        prompt: 'Der Moderator stellte dem ___ eine kritische Frage.',
        options: ['Kandidat', 'Kandidaten', 'Kandidats', 'Kandidate'],
        answer: 1,
        explanationRu: 'Kandidat относится к слабому склонению (-at): во всех падежах, кроме Nominativ Singular, — Kandidaten.',
      },
      {
        type: 'choice',
        prompt: 'Die Wahlbeteiligung junger Menschen ist ___ der letzten zehn Jahre stark gesunken.',
        options: ['außerhalb', 'statt', 'angesichts', 'innerhalb'],
        answer: 3,
        explanationRu: 'Речь о промежутке времени, в пределах которого что-то произошло: innerhalb + Genitiv.',
      },
      {
        type: 'gap',
        prompt: 'Aufgrund ___ neuen Gesetzes dürfen Jugendliche ab 16 Jahren wählen.',
        answers: ['des'],
        explanationRu: 'aufgrund + Genitiv; das Gesetz (средний род) → des neuen Gesetzes.',
      },
      {
        type: 'gap',
        prompt: 'Während des ___ versprechen alle Parteien Steuersenkungen.',
        answers: ['Wahlkampfs', 'Wahlkampfes'],
        hintRu: 'der Wahlkampf',
        explanationRu: 'während + Genitiv. Существительное мужского рода получает окончание -s или -es: des Wahlkampfs / des Wahlkampfes.',
      },
      {
        type: 'gap',
        prompt: 'Die Polizei befragte einen ___ des Unfalls.',
        answers: ['Zeugen'],
        hintRu: 'der Zeuge',
        explanationRu: 'Zeuge — мужской род на -e, слабое склонение: Akkusativ einen Zeugen.',
      },
      {
        type: 'gap',
        prompt: 'Die Rede des ___ wurde live im Fernsehen übertragen.',
        answers: ['Präsidenten'],
        hintRu: 'der Präsident',
        explanationRu: 'Präsident — слабое склонение (-ent). В Genitiv окончание -en, без дополнительного -s.',
      },
      {
        type: 'order',
        words: ['Angesichts', 'der hohen Kosten', 'lehnte', 'der Stadtrat', 'das Projekt', 'ab.'],
        translationRu: 'Ввиду высоких расходов городской совет отклонил проект.',
        explanationRu: 'Предложная группа с angesichts стоит на первом месте, глагол — на втором, отделяемая приставка ab — в конце.',
      },
      {
        type: 'order',
        words: ['Wir', 'haben', 'den Nachbarn', 'um', 'seine Unterschrift', 'gebeten.'],
        translationRu: 'Мы попросили соседа поставить свою подпись.',
        explanationRu: 'Nachbar склоняется слабо: Akkusativ den Nachbarn. Глагол bitten um + Akkusativ.',
      },
      {
        type: 'transform',
        instructionRu: 'Исправьте предложение в соответствии с письменной нормой.',
        prompt: 'Wegen dem Regen ist die Kundgebung ausgefallen.',
        answers: [
          'Wegen des Regens ist die Kundgebung ausgefallen.',
          'Die Kundgebung ist wegen des Regens ausgefallen.',
        ],
        explanationRu: 'В письменной речи после wegen — Genitiv: der Regen → des Regens.',
      },
      {
        type: 'transform',
        instructionRu: 'Поменяйте подлежащее и дополнение местами.',
        prompt: 'Der Demonstrant kritisiert den Polizisten.',
        answers: ['Der Polizist kritisiert den Demonstranten.'],
        explanationRu: 'Оба существительных склоняются слабо: в Nominativ — без окончания (der Polizist), в Akkusativ — -en (den Demonstranten).',
      },
    ],
  },
  vocab: [
    {
      de: 'Wahlbeteiligung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'явка избирателей',
      example: 'Die Wahlbeteiligung war diesmal deutlich höher als vor vier Jahren.',
      exampleRu: 'Явка избирателей на этот раз была значительно выше, чем четыре года назад.',
    },
    {
      de: 'Wahlkampf',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'предвыборная кампания',
      example: 'Im Wahlkampf versprechen die Parteien oft mehr, als sie halten können.',
      exampleRu: 'Во время предвыборной кампании партии часто обещают больше, чем могут выполнить.',
    },
    {
      de: 'Abstimmung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'голосование',
      example: 'Die Abstimmung über das neue Gesetz findet morgen statt.',
      exampleRu: 'Голосование по новому закону состоится завтра.',
    },
    {
      de: 'Opposition',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'оппозиция',
      example: 'Die Opposition wirft der Regierung vor, die Probleme zu ignorieren.',
      exampleRu: 'Оппозиция упрекает правительство в том, что оно игнорирует проблемы.',
    },
    {
      de: 'Abgeordnete',
      article: 'der',
      plural: '-n',
      forms: 'ein Abgeordneter; склоняется как прилагательное',
      pos: 'noun',
      ru: 'депутат',
      example: 'Der Abgeordnete beantwortete geduldig die Fragen der Schülerinnen und Schüler.',
      exampleRu: 'Депутат терпеливо отвечал на вопросы школьников.',
    },
    {
      de: 'Bürgerinitiative',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'гражданская инициатива',
      example: 'Eine Bürgerinitiative kämpft gegen den Bau der neuen Autobahn.',
      exampleRu: 'Гражданская инициатива борется против строительства новой автомагистрали.',
    },
    {
      de: 'Gesetzentwurf',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'законопроект',
      example: 'Der Gesetzentwurf wurde im Parlament heftig diskutiert.',
      exampleRu: 'Законопроект бурно обсуждался в парламенте.',
    },
    {
      de: 'Ungleichheit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'неравенство',
      example: 'Die soziale Ungleichheit hat in den letzten Jahren zugenommen.',
      exampleRu: 'Социальное неравенство за последние годы выросло.',
    },
    {
      de: 'Integration',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'интеграция',
      example: 'Sprachkurse sind ein wichtiger Schritt zur Integration.',
      exampleRu: 'Языковые курсы — важный шаг к интеграции.',
    },
    {
      de: 'Demonstrant',
      article: 'der',
      plural: '-en',
      forms: 'n-Deklination: den/dem/des Demonstranten',
      pos: 'noun',
      ru: 'демонстрант',
      example: 'Die Polizei sprach lange mit einem Demonstranten, der sich an ein Tor gekettet hatte.',
      exampleRu: 'Полиция долго разговаривала с демонстрантом, который приковал себя к воротам.',
    },
    {
      de: 'Kandidat',
      article: 'der',
      plural: '-en',
      forms: 'n-Deklination: den/dem/des Kandidaten',
      pos: 'noun',
      ru: 'кандидат',
      example: 'Die Partei hat einen jungen Kandidaten für das Bürgermeisteramt aufgestellt.',
      exampleRu: 'Партия выдвинула молодого кандидата на пост мэра.',
    },
    {
      de: 'sich engagieren',
      forms: 'für + Akk; engagierte sich, hat sich engagiert',
      pos: 'verb',
      ru: 'активно участвовать, выступать (за что-либо)',
      example: 'Sie engagiert sich ehrenamtlich für Geflüchtete.',
      exampleRu: 'Она на добровольной основе помогает беженцам.',
    },
    {
      de: 'abstimmen',
      forms: 'über + Akk; stimmt ab, stimmte ab, hat abgestimmt',
      pos: 'verb',
      ru: 'голосовать (по какому-либо вопросу)',
      example: 'Die Bürger stimmen am Sonntag über den Bau des Stadions ab.',
      exampleRu: 'В воскресенье граждане голосуют по вопросу строительства стадиона.',
    },
    {
      de: 'durchsetzen',
      forms: 'setzt durch, setzte durch, hat durchgesetzt',
      pos: 'verb',
      ru: 'добиться, провести (несмотря на сопротивление)',
      example: 'Die Regierung konnte ihre Reform nicht gegen den Widerstand der Länder durchsetzen.',
      exampleRu: 'Правительству не удалось провести реформу вопреки сопротивлению федеральных земель.',
    },
    {
      de: 'verabschieden',
      forms: 'verabschiedete, hat verabschiedet',
      pos: 'verb',
      ru: 'принимать (закон); прощаться (sich)',
      example: 'Das Parlament hat das Gesetz mit großer Mehrheit verabschiedet.',
      exampleRu: 'Парламент принял закон подавляющим большинством голосов.',
    },
    {
      de: 'benachteiligen',
      forms: 'benachteiligte, hat benachteiligt',
      pos: 'verb',
      ru: 'ущемлять, ставить в невыгодное положение',
      example: 'Frauen werden bei der Bezahlung immer noch benachteiligt.',
      exampleRu: 'Женщин до сих пор ущемляют в оплате труда.',
    },
    {
      de: 'politikverdrossen',
      pos: 'adj',
      ru: 'разочарованный в политике',
      example: 'Junge Menschen gelten oft als politikverdrossen, dabei interessieren sich viele sehr für den Klimaschutz.',
      exampleRu: 'Молодёжь часто считают разочарованной в политике, хотя многие очень интересуются защитой климата.',
    },
    {
      de: 'gesellschaftlich',
      pos: 'adj',
      ru: 'общественный, социальный',
      example: 'Einsamkeit ist ein wachsendes gesellschaftliches Problem.',
      exampleRu: 'Одиночество — растущая общественная проблема.',
    },
    {
      de: 'Verantwortung übernehmen',
      forms: 'für + Akk; übernimmt, übernahm, hat übernommen',
      pos: 'phrase',
      ru: 'взять на себя ответственность',
      example: 'Der Minister hat die Verantwortung für den Fehler übernommen und ist zurückgetreten.',
      exampleRu: 'Министр взял на себя ответственность за ошибку и ушёл в отставку.',
    },
    {
      de: 'von seinem Wahlrecht Gebrauch machen',
      forms: 'macht, machte, hat gemacht',
      pos: 'phrase',
      ru: 'воспользоваться своим избирательным правом',
      example: 'Nur die Hälfte der jungen Wählerinnen und Wähler hat von ihrem Wahlrecht Gebrauch gemacht.',
      exampleRu: 'Только половина молодых избирателей воспользовалась своим избирательным правом.',
    },
  ],
  listening: {
    title: 'Wählen mit 16?',
    kind: 'dialog',
    text: `A: Opa, hast du das gelesen? Bei der Landtagswahl dürfen wir schon ab 16 wählen. Ich finde, das sollte auch für den Bundestag gelten.
B: Hm. Ich weiß nicht, Mia. Trotz deines Engagements – viele in deinem Alter interessieren sich doch gar nicht für Politik.
A: Das stimmt einfach nicht. Während der Klimaproteste waren Tausende Schülerinnen und Schüler auf der Straße. Und die Erwachsenen haben uns damals sogar vorgeworfen, wir würden wegen der Demos die Schule schwänzen.
B: Na ja, demonstrieren ist das eine. Aber wählen bedeutet, Verantwortung zu übernehmen. Man muss die Programme der Parteien verstehen und vergleichen.
A: Das machen viele Erwachsene doch auch nicht. Und außerdem: Angesichts des Klimawandels und der Rentenfrage geht es vor allem um unsere Zukunft.
B: Da ist was dran. Aber ich habe neulich ein Interview mit einem Experten gelesen, einem Soziologen aus Berlin. Er meinte, Jugendliche würden leichter durch soziale Medien beeinflusst.
A: Ach, Opa. Aufgrund der Algorithmen sind doch alle Altersgruppen davon betroffen. Du schickst mir doch auch ständig irgendwelche Videos aus deiner WhatsApp-Gruppe.
B: Touché. Und was sagen deine Lehrer dazu?
A: Unser Politiklehrer ist dafür. Er sagt, wer früh wählen darf, macht später eher von seinem Wahlrecht Gebrauch. In Österreich darf man übrigens schon seit 2007 ab 16 wählen.
B: Wirklich? Das wusste ich nicht. Und hat das funktioniert?
A: Die Wahlbeteiligung der Jugendlichen soll dort ganz normal sein, also nicht schlechter als bei den jungen Erwachsenen.
B: Gut, du hast mich zumindest nachdenklich gemacht. Aber statt eines niedrigeren Wahlalters würde ich mir erst einmal mehr politische Bildung an den Schulen wünschen.
A: Warum nicht beides? Wir haben nur eine Stunde Politik pro Woche, das ist viel zu wenig.
B: Da gebe ich dir recht. Weißt du was? Wenn du willst, begleite ich dich zum nächsten Treffen deiner Initiative. Dann kann ich mir selbst ein Bild machen.
A: Abgemacht! Aber du musst versprechen, die anderen nicht dauernd zu unterbrechen.`,
    questions: [
      {
        question: 'Worum geht es in dem Gespräch hauptsächlich?',
        options: [
          'Um das Wahlalter bei Bundestagswahlen.',
          'Um die Klimaproteste von Schülern.',
          'Um den Politikunterricht in Österreich.',
          'Um die Rente des Großvaters.',
        ],
        answer: 0,
      },
      {
        question: 'Welches Argument bringt der Großvater zuerst gegen das Wahlrecht ab 16?',
        options: [
          'Jugendliche haben keine Zeit zum Wählen.',
          'Viele Jugendliche interessieren sich nicht für Politik.',
          'Jugendliche zahlen noch keine Steuern.',
          'Die großen Parteien lehnen das ab.',
        ],
        answer: 1,
      },
      {
        question: 'Wie reagiert Mia auf das Argument mit den sozialen Medien?',
        options: [
          'Sie gibt dem Großvater recht.',
          'Sie sagt, dass Jugendliche kaum soziale Medien nutzen.',
          'Sie meint, dass alle Altersgruppen davon beeinflusst werden.',
          'Sie wechselt das Thema.',
        ],
        answer: 2,
      },
      {
        question: 'Was erfährt der Großvater über Österreich?',
        options: [
          'Dort darf man erst ab 18 wählen.',
          'Dort wurde das Wahlrecht ab 16 wieder abgeschafft.',
          'Dort gibt es keinen Politikunterricht.',
          'Dort dürfen 16-Jährige schon seit Jahren wählen.',
        ],
        answer: 3,
      },
      {
        question: 'Wie hat sich die Haltung des Großvaters am Ende verändert?',
        options: [
          'Er ist jetzt vollständig für ein Wahlrecht ab 16.',
          'Er ist offener geworden und will sich selbst ein Bild machen.',
          'Er lehnt die Idee noch stärker ab als vorher.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Местная газета проводит опрос: «Нужно ли ввести в Германии обязательное участие в выборах?» Напишите письменную позицию (Stellungnahme), используя предлоги с родительным падежом.',
    taskDe: 'Eine Lokalzeitung fragt ihre Leserinnen und Leser: „Sollte in Deutschland eine Wahlpflicht eingeführt werden?“ Schreiben Sie eine Stellungnahme.',
    points: [
      'Die aktuelle Situation: sinkende Wahlbeteiligung in manchen Gruppen',
      'Argumente für eine Wahlpflicht',
      'Argumente gegen eine Wahlpflicht',
      'Ihre Position und alternative Vorschläge',
    ],
    minWords: 180,
    usefulPhrases: [
      'Angesichts der sinkenden Wahlbeteiligung stellt sich die Frage, ob …',
      'Befürworter argumentieren, dass …',
      'Trotz dieser Argumente bin ich der Ansicht, dass …',
      'Aufgrund meiner eigenen Erfahrungen …',
      'Statt einer Wahlpflicht wäre es sinnvoller, …',
      'Zusammenfassend lässt sich sagen, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Город хочет закрыть молодёжный центр в вашем районе из-за нехватки денег. Вы — представитель гражданской инициативы и выступаете на собрании жителей, где присутствует член городского совета.',
    aiRole: 'Sie sind Dr. Vogel, Mitglied des Stadtrats. Die Stadt will das Jugendzentrum aus Kostengründen schließen, und Sie verteidigen diese Entscheidung mit Haushaltszahlen. Sprechen Sie formelles Deutsch auf B2-Niveau, stellen Sie kritische Nachfragen zu Alternativen und zur Finanzierung und lassen Sie sich nur von überzeugenden Argumenten umstimmen.',
    opener: 'Guten Abend. Ich verstehe, dass viele von Ihnen enttäuscht sind. Aber angesichts der leeren Kassen sehen wir leider keine andere Möglichkeit, als das Jugendzentrum zu schließen. Was schlagen Sie denn vor?',
    tasksRu: [
      'Объясните, почему молодёжный центр важен для района.',
      'Используйте не менее четырёх предлогов с родительным падежом (trotz, wegen, angesichts, aufgrund, statt …).',
      'Возразите против финансовых аргументов и предложите альтернативные источники финансирования.',
      'Потребуйте, чтобы город учитывал мнение жителей.',
    ],
    readAloud: [
      'Angesichts der sinkenden Wahlbeteiligung diskutieren Politiker aller Parteien darüber, wie man junge Menschen wieder stärker für Politik begeistern kann.',
      'Trotz heftiger Proteste der Opposition hat das Parlament den umstrittenen Gesetzentwurf innerhalb weniger Wochen verabschiedet.',
      'Der Journalist fragte den Präsidenten, ob er bereit sei, die Verantwortung für die Fehler seiner Regierung zu übernehmen.',
    ],
  },
};
