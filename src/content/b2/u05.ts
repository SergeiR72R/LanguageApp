import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-05',
  level: 'B2',
  order: 5,
  title: 'Beziehungen & Zusammenleben',
  titleRu: 'Отношения и совместная жизнь',
  goalsRu: [
    'Обсуждать разные формы совместной жизни: семья, WG, дом нескольких поколений.',
    'Связывать мысли с помощью двойных союзов: sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch, zwar … aber, je … desto.',
    'Правильно строить порядок слов после zwar, entweder, je и desto.',
    'Написать официальную жалобу в управляющую компанию.',
  ],
  grammar: {
    topic: 'Zweiteilige Konnektoren',
    topicRu: 'Двойные союзы',
    explanationRu: `**Двойные союзы** соединяют два слова, две группы слов или два предложения.

- **sowohl … als auch** — как …, так и; и …, и
- **weder … noch** — ни …, ни (отрицание уже внутри!)
- **entweder … oder** — либо …, либо
- **nicht nur … sondern auch** — не только …, но и
- **zwar … aber** — хотя/правда …, но
- **je … desto / umso** — чем …, тем

**Порядок слов:**

- **sowohl … als auch**, **weder … noch**, **nicht nur … sondern auch** обычно соединяют члены предложения, порядок слов не меняется: Er hilft **weder** beim Kochen **noch** beim Putzen.
- **entweder** может стоять перед предложением (позиция 0) или на первом месте с инверсией: **Entweder wir** ziehen zusammen, oder … / **Entweder ziehen wir** zusammen, oder … **Oder** всегда на позиции 0.
- **zwar** ведёт себя как наречие: **Zwar ist** die Wohnung klein, aber … / Die Wohnung **ist zwar** klein, aber sie ist günstig. После **aber** — обычный порядок слов.
- **je + сравнительная степень** вводит придаточное (глагол в конце). **desto/umso + сравнительная степень** стоит на первом месте главного предложения, за ним сразу глагол: **Je länger** wir zusammenleben, **desto besser verstehen** wir uns.

**Запятая** ставится перед aber и sondern, а также между частями с je и desto. Перед als auch и noch в перечислении запятая не нужна.

**Типичные ошибки русскоговорящих:**

- Двойное отрицание. По-русски «я **не** имею **ни** времени, **ни** желания», а по-немецки только: Ich habe **weder** Zeit **noch** Lust (без nicht и kein!).
- *nicht nur …, aber auch* — правильно только **sondern auch**.
- Нет инверсии после desto: *desto wir verstehen uns besser* — правильно **desto besser verstehen wir uns**.
- Сравнительная степень отрывается от je/desto: *je wir mehr reden* — правильно **je mehr wir reden**.`,
    table: [
      ['Союз', 'Значение', 'Пример'],
      ['sowohl … als auch', 'как …, так и', 'Sowohl Lena als auch Tom arbeiten Vollzeit.'],
      ['weder … noch', 'ни …, ни', 'Er hat weder Zeit noch Lust.'],
      ['entweder … oder', 'либо …, либо', 'Entweder ziehen wir zusammen, oder wir trennen uns.'],
      ['nicht nur … sondern auch', 'не только …, но и', 'Sie ist nicht nur meine Schwester, sondern auch meine beste Freundin.'],
      ['zwar … aber', 'хотя …, но', 'Die WG ist zwar laut, aber gemütlich.'],
      ['je … desto/umso', 'чем …, тем', 'Je älter man wird, desto wichtiger werden Freunde.'],
    ],
    examples: [
      {
        de: 'In unserer WG teilen wir uns sowohl die Miete als auch die Hausarbeit.',
        ru: 'В нашей квартире мы делим как арендную плату, так и работу по дому.',
      },
      {
        de: 'Mein Großvater wollte weder ins Pflegeheim noch zu seinen Kindern ziehen.',
        ru: 'Мой дедушка не хотел переезжать ни в дом престарелых, ни к своим детям.',
      },
      {
        de: 'Entweder wir sprechen offen über das Problem, oder es wird immer schlimmer.',
        ru: 'Либо мы откровенно поговорим о проблеме, либо она будет становиться всё серьёзнее.',
      },
      {
        de: 'Eine gute Freundschaft braucht nicht nur Vertrauen, sondern auch Zeit.',
        ru: 'Хорошей дружбе нужно не только доверие, но и время.',
      },
      {
        de: 'Wir streiten uns zwar manchmal, aber wir versöhnen uns immer schnell.',
        ru: 'Мы, правда, иногда ссоримся, но всегда быстро миримся.',
      },
      {
        de: 'Je länger man zusammenlebt, desto mehr Kompromisse muss man eingehen.',
        ru: 'Чем дольше живёшь вместе, тем больше приходится идти на компромиссы.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich habe ___ Zeit noch Lust, mich schon wieder über den Abwasch zu streiten.',
        options: ['weder', 'nicht', 'entweder', 'sowohl'],
        answer: 0,
        explanationRu: 'Пара weder … noch означает «ни …, ни». Отрицание уже содержится в союзе, nicht не нужен.',
      },
      {
        type: 'choice',
        prompt: 'Je mehr Menschen in einer Wohnung leben, ___ wichtiger sind klare Regeln.',
        options: ['dann', 'als', 'desto', 'wie'],
        answer: 2,
        explanationRu: 'Пара je … desto (umso): чем …, тем. После desto + сравнительная степень сразу идёт глагол.',
      },
      {
        type: 'choice',
        prompt: 'Sie ist nicht nur meine Kollegin, ___ auch eine gute Freundin.',
        options: ['aber', 'sondern', 'sowie', 'oder'],
        answer: 1,
        explanationRu: 'После nicht nur вторая часть всегда sondern auch. Вариант aber auch — типичная ошибка.',
      },
      {
        type: 'choice',
        prompt: 'Die Wohnung ist zwar klein, ___',
        options: [
          'aber liegt sie sehr zentral.',
          'sondern sie liegt sehr zentral.',
          'aber sie sehr zentral liegt.',
          'aber sie liegt sehr zentral.',
        ],
        answer: 3,
        explanationRu: 'Zwar … aber. Aber стоит на нулевой позиции, после него обычный порядок слов: подлежащее + глагол.',
      },
      {
        type: 'gap',
        prompt: '___ meine Mutter als auch mein Vater sind gegen die Hochzeit.',
        answers: ['Sowohl'],
        explanationRu: 'Вторая часть als auch требует первой части sowohl: sowohl … als auch = как …, так и.',
      },
      {
        type: 'gap',
        prompt: 'Entweder du zahlst deinen Anteil an der Miete, ___ du suchst dir ein anderes Zimmer.',
        answers: ['oder'],
        explanationRu: 'Entweder … oder — либо …, либо. Oder стоит на нулевой позиции, после него прямой порядок слов.',
      },
      {
        type: 'gap',
        prompt: 'Je länger ich in Deutschland lebe, desto ___ fühle ich mich hier.',
        answers: ['wohler'],
        hintRu: 'wohl → сравнительная степень',
        explanationRu: 'После desto нужна сравнительная степень: wohl → wohler (sich wohlfühlen — чувствовать себя хорошо).',
      },
      {
        type: 'gap',
        prompt: 'Wir haben uns ___ oft gestritten, aber wir haben uns nie getrennt.',
        answers: ['zwar'],
        explanationRu: 'Zwar … aber выражает уступку: «хотя мы и часто ссорились, но…». Zwar стоит в середине предложения как наречие.',
      },
      {
        type: 'order',
        words: ['Je mehr', 'man', 'teilt,', 'desto weniger', 'Streit', 'gibt es.'],
        translationRu: 'Чем больше люди делятся, тем меньше ссор.',
        explanationRu: 'В части с je глагол в конце (teilt), после desto weniger Streit сразу идёт глагол (gibt), затем es.',
      },
      {
        type: 'order',
        words: ['Mein Bruder', 'hilft', 'weder', 'beim Kochen', 'noch', 'beim Putzen.'],
        translationRu: 'Мой брат не помогает ни готовить, ни убирать.',
        explanationRu: 'Weder и noch стоят непосредственно перед теми частями, которые они соединяют. Дополнительное nicht не нужно.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью sowohl … als auch.',
        prompt: 'Lisa spricht fließend Deutsch. Ihr Mann spricht auch fließend Deutsch.',
        answers: [
          'Sowohl Lisa als auch ihr Mann sprechen fließend Deutsch.',
          'Sowohl Lisa als auch ihr Mann spricht fließend Deutsch.',
        ],
        explanationRu: 'Sowohl … als auch соединяет два подлежащих. Глагол обычно стоит во множественном числе (sprechen), единственное число тоже допустимо.',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите предложение с je … desto.',
        prompt: 'Wenn man mehr Zeit miteinander verbringt, lernt man sich besser kennen.',
        answers: [
          'Je mehr Zeit man miteinander verbringt, desto besser lernt man sich kennen.',
          'Je mehr Zeit man miteinander verbringt, umso besser lernt man sich kennen.',
        ],
        explanationRu: 'Je + Komparativ (mehr Zeit) + … + глагол в конце; desto + Komparativ (besser) + глагол + подлежащее.',
      },
    ],
  },
  vocab: [
    {
      de: 'Partnerschaft',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'партнёрство, отношения (пара)',
      example: 'Eine gleichberechtigte Partnerschaft bedeutet auch, dass sich beide um den Haushalt kümmern.',
      exampleRu: 'Равноправные отношения означают и то, что оба занимаются домашним хозяйством.',
    },
    {
      de: 'Wohngemeinschaft',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'совместное проживание в квартире (WG)',
      example: 'Nach dem Abitur bin ich in eine Wohngemeinschaft mit vier Studierenden gezogen.',
      exampleRu: 'После школы я переехал в квартиру, которую снимал вместе с четырьмя студентами.',
    },
    {
      de: 'Mehrgenerationenhaus',
      article: 'das',
      plural: '-¨er',
      pos: 'noun',
      ru: 'дом для нескольких поколений',
      example: 'Im Mehrgenerationenhaus helfen Senioren bei den Hausaufgaben, und junge Familien erledigen dafür Einkäufe.',
      exampleRu: 'В доме для нескольких поколений пожилые помогают с домашними заданиями, а молодые семьи за это делают покупки.',
    },
    {
      de: 'Auseinandersetzung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'спор, ссора, столкновение',
      example: 'Nach einer heftigen Auseinandersetzung haben die beiden tagelang nicht miteinander gesprochen.',
      exampleRu: 'После бурной ссоры они несколько дней не разговаривали друг с другом.',
    },
    {
      de: 'Vertrauen',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'доверие',
      example: 'Ohne gegenseitiges Vertrauen kann keine Beziehung funktionieren.',
      exampleRu: 'Без взаимного доверия никакие отношения не могут работать.',
    },
    {
      de: 'Eifersucht',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'ревность',
      example: 'Seine ständige Eifersucht hat die Beziehung schließlich zerstört.',
      exampleRu: 'Его постоянная ревность в конце концов разрушила отношения.',
    },
    {
      de: 'Gleichberechtigung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'равноправие',
      example: 'Bei der Gleichberechtigung von Männern und Frauen gibt es noch viel zu tun.',
      exampleRu: 'В вопросе равноправия мужчин и женщин ещё многое предстоит сделать.',
    },
    {
      de: 'Patchworkfamilie',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'смешанная семья (с детьми от прежних браков)',
      example: 'In ihrer Patchworkfamilie leben Kinder aus zwei früheren Ehen zusammen.',
      exampleRu: 'В их смешанной семье вместе живут дети от двух прежних браков.',
    },
    {
      de: 'Nachbarschaft',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'соседство, соседи, район',
      example: 'In unserer Nachbarschaft helfen sich die Leute gegenseitig.',
      exampleRu: 'В нашем районе люди помогают друг другу.',
    },
    {
      de: 'sich versöhnen',
      forms: 'mit + Dat; versöhnte sich, hat sich versöhnt',
      pos: 'verb',
      ru: 'мириться',
      example: 'Nach dem Streit haben sich die Geschwister schnell wieder versöhnt.',
      exampleRu: 'После ссоры брат и сестра быстро помирились.',
    },
    {
      de: 'sich trennen',
      forms: 'von + Dat; trennte sich, hat sich getrennt',
      pos: 'verb',
      ru: 'расставаться',
      example: 'Nach zehn Jahren Ehe haben sie sich im Guten getrennt.',
      exampleRu: 'После десяти лет брака они расстались по-хорошему.',
    },
    {
      de: 'unterstützen',
      forms: 'unterstützte, hat unterstützt',
      pos: 'verb',
      ru: 'поддерживать',
      example: 'Meine Eltern haben mich während des Studiums finanziell unterstützt.',
      exampleRu: 'Родители поддерживали меня финансово во время учёбы.',
    },
    {
      de: 'auskommen',
      forms: 'mit + Dat; kommt aus, kam aus, ist ausgekommen',
      pos: 'verb',
      ru: 'ладить (с кем-либо)',
      example: 'Mit meiner Schwiegermutter komme ich erstaunlich gut aus.',
      exampleRu: 'Со свекровью я на удивление хорошо лажу.',
    },
    {
      de: 'sich einmischen',
      forms: 'in + Akk; mischt sich ein, mischte sich ein, hat sich eingemischt',
      pos: 'verb',
      ru: 'вмешиваться',
      example: 'Ich möchte mich nicht in eure Angelegenheiten einmischen, aber ich mache mir Sorgen.',
      exampleRu: 'Я не хочу вмешиваться в ваши дела, но я волнуюсь.',
    },
    {
      de: 'verlässlich',
      pos: 'adj',
      ru: 'надёжный',
      example: 'Sie ist eine sehr verlässliche Freundin, die immer für mich da ist.',
      exampleRu: 'Она очень надёжная подруга, которая всегда рядом.',
    },
    {
      de: 'eifersüchtig',
      forms: 'auf + Akk',
      pos: 'adj',
      ru: 'ревнивый',
      example: 'Er wird schnell eifersüchtig, wenn seine Freundin mit anderen Männern tanzt.',
      exampleRu: 'Он быстро начинает ревновать, когда его девушка танцует с другими мужчинами.',
    },
    {
      de: 'kompromissbereit',
      pos: 'adj',
      ru: 'готовый к компромиссу',
      example: 'In einer WG muss man kompromissbereit sein, sonst gibt es ständig Streit.',
      exampleRu: 'В общей квартире нужно быть готовым к компромиссам, иначе постоянно будут ссоры.',
    },
    {
      de: 'einen Kompromiss eingehen',
      forms: 'geht ein, ging ein, ist eingegangen',
      pos: 'phrase',
      ru: 'пойти на компромисс',
      example: 'Beim Thema Urlaub mussten wir einen Kompromiss eingehen.',
      exampleRu: 'В вопросе отпуска нам пришлось пойти на компромисс.',
    },
    {
      de: 'Rücksicht nehmen',
      forms: 'auf + Akk; nimmt, nahm, hat genommen',
      pos: 'phrase',
      ru: 'считаться (с кем-либо), проявлять внимание',
      example: 'Bitte nehmt nach 22 Uhr Rücksicht auf die Nachbarn.',
      exampleRu: 'Пожалуйста, после 22 часов считайтесь с соседями.',
    },
    {
      de: 'sich aus dem Weg gehen',
      forms: 'geht, ging, ist gegangen',
      pos: 'phrase',
      ru: 'избегать друг друга',
      example: 'Seit dem Streit gehen sich die beiden Kollegen aus dem Weg.',
      exampleRu: 'После ссоры эти двое коллег избегают друг друга.',
    },
  ],
  listening: {
    title: 'Zusammen leben: Besuch im Mehrgenerationenhaus',
    kind: 'monolog',
    text: `Sie hören „Zusammen leben“, die Sendung über neue Wohnformen. Heute besuchen wir ein Mehrgenerationenhaus in Freiburg. Hier wohnen seit drei Jahren 45 Menschen zwischen einem und 89 Jahren unter einem Dach – sowohl Familien mit kleinen Kindern als auch Singles, Studierende und Senioren.

Die Idee ist einfach: Jeder hat seine eigene Wohnung, aber zusätzlich gibt es eine große Gemeinschaftsküche, einen Garten und eine Werkstatt. „Man ist hier nicht nur Nachbarin, sondern auch ein bisschen Familie“, sagt Gerda Winter. Die 78-Jährige hat nach dem Tod ihres Mannes lange allein gelebt. „Ich wollte weder ins Altersheim noch meinen Kindern zur Last fallen. Hier bin ich zwar selbstständig, aber nie einsam.“ Zweimal pro Woche liest sie den Kindern aus dem Haus Geschichten vor. Im Gegenzug kauft eine junge Familie für sie ein.

Natürlich läuft nicht immer alles harmonisch. Einmal im Monat gibt es eine Hausversammlung, auf der Konflikte besprochen werden. Mal geht es um Lärm, mal um den Putzplan für die Gemeinschaftsräume. „Je größer die Gemeinschaft ist, desto wichtiger sind klare Absprachen“, erklärt Jonas Berger, Vater von zwei Kindern. „Entweder man ist bereit, Kompromisse einzugehen, oder man sollte lieber nicht hier einziehen.“ Er gibt zu, dass er anfangs skeptisch war. Inzwischen möchte er nirgendwo anders wohnen: Wenn die Kinder krank sind und beide Eltern arbeiten müssen, springt fast immer jemand aus dem Haus ein.

Für Menschen, die sich gern zurückziehen, ist das Modell allerdings weniger geeignet. Wer seine Ruhe haben will, muss zwar nicht an allen Aktivitäten teilnehmen, aber ganz ohne Engagement geht es nicht. Und noch ein Problem gibt es: Die Warteliste ist lang. Über 200 Menschen haben sich bereits für eine frei werdende Wohnung beworben.

Die Stadt Freiburg plant deshalb zwei weitere Projekte dieser Art. Ob sie genauso gut funktionieren werden, wird sich zeigen.`,
    questions: [
      {
        question: 'Wer wohnt in dem Mehrgenerationenhaus?',
        options: [
          'Nur Seniorinnen und Senioren.',
          'Menschen aus allen Altersgruppen.',
          'Vor allem Studierende.',
          'Ausschließlich Familien mit Kindern.',
        ],
        answer: 1,
      },
      {
        question: 'Warum ist Gerda Winter in das Haus gezogen?',
        options: [
          'Sie wollte weder ins Altersheim noch von ihren Kindern abhängig sein.',
          'Ihre Kinder haben sie dazu überredet.',
          'Ihre alte Wohnung war zu teuer geworden.',
          'Sie wollte näher bei ihren Enkeln wohnen.',
        ],
        answer: 0,
      },
      {
        question: 'Wozu dient die monatliche Hausversammlung?',
        options: [
          'Zum gemeinsamen Kochen.',
          'Zur Wahl eines neuen Hausmeisters.',
          'Zur Organisation von Festen.',
          'Zur Besprechung von Konflikten und Regeln.',
        ],
        answer: 3,
      },
      {
        question: 'Was schätzt Jonas Berger heute besonders?',
        options: [
          'Die günstige Miete.',
          'Dass er nicht putzen muss.',
          'Dass Nachbarn bei der Kinderbetreuung einspringen.',
          'Die große Werkstatt.',
        ],
        answer: 2,
      },
      {
        question: 'Für wen ist das Modell laut dem Bericht weniger geeignet?',
        options: [
          'Für Familien mit kleinen Kindern.',
          'Für Menschen, die vor allem ihre Ruhe haben wollen.',
          'Für ältere Menschen ohne Familie.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'В вашем многоквартирном доме уже несколько месяцев проблемы с соседями: шум по ночам, мусор на лестнице, велосипеды в коридоре. Напишите официальную жалобу в управляющую компанию (Hausverwaltung).',
    taskDe: 'In Ihrem Mehrfamilienhaus gibt es seit Monaten Probleme mit einigen Nachbarn: nächtlicher Lärm, Müll im Treppenhaus, Fahrräder im Hausflur. Schreiben Sie eine formelle Beschwerde an die Hausverwaltung.',
    points: [
      'Beschreibung der Probleme mit konkreten Beispielen',
      'Was Sie bereits selbst unternommen haben',
      'Folgen für Sie und die anderen Mieter',
      'Ihre Erwartungen und Lösungsvorschläge',
    ],
    minWords: 160,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'leider muss ich mich heute mit einer Beschwerde an Sie wenden.',
      'Sowohl ich als auch andere Mieter sind davon betroffen.',
      'Zwar habe ich bereits mehrmals mit den Nachbarn gesprochen, aber …',
      'Ich bitte Sie daher dringend, …',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Вы живёте в WG вчетвером. Ваш сосед Макс постоянно оставляет грязную посуду и не соблюдает график уборки. Вы решили серьёзно с ним поговорить.',
    aiRole: 'Sie sind Max, Mitbewohner in einer Vierer-WG. Sie sehen das Thema Ordnung eher locker und finden, dass Ihre Mitbewohner übertreiben. Sprechen Sie natürliches Deutsch auf B2-Niveau, verteidigen Sie sich mit Gegenargumenten, machen Sie auch eigene Vorwürfe (z. B. laute Musik, häufiger Besuch) und lassen Sie sich erst auf einen fairen Kompromiss ein.',
    opener: 'Hey, du wolltest mit mir reden? Lass mich raten: Es geht wieder um die Küche, oder? Ehrlich gesagt finde ich, dass ihr da ein bisschen übertreibt.',
    tasksRu: [
      'Объясните, что вас не устраивает, и приведите конкретные примеры.',
      'Используйте не менее четырёх двойных союзов (sowohl … als auch, weder … noch, zwar … aber, je … desto …).',
      'Спокойно и по существу отреагируйте на встречные упрёки соседа.',
      'Договоритесь о компромиссе (например, о новом графике уборки).',
    ],
    readAloud: [
      'In unserer Wohngemeinschaft teilen wir uns sowohl die Miete als auch die Hausarbeit, und bisher sind wir damit erstaunlich gut ausgekommen.',
      'Je länger zwei Menschen zusammenleben, desto wichtiger wird es, Rücksicht aufeinander zu nehmen und offen über Konflikte zu sprechen.',
      'Zwar streiten wir uns manchmal über Kleinigkeiten, aber nach jeder Auseinandersetzung haben wir uns bisher schnell wieder versöhnt.',
    ],
  },
};
