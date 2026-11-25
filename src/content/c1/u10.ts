import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-10',
  level: 'C1',
  order: 10,
  title: 'Zukunft der Gesellschaft',
  titleRu: 'Будущее общества',
  goalsRu: [
    'Понимать и образовывать слова с помощью приставок, суффиксов и словосложения',
    'Различать оттенки значения глаголов с приставками (be-, ver-, er-, ent-, um-, über-)',
    'Понимать экспертные интервью о демографии, технологиях и социальной сплочённости',
    'Писать структурированное диалектическое эссе-рассуждение (Erörterung)',
  ],
  grammar: {
    topic: 'Wortbildung und Argumentieren',
    topicRu: 'Словообразование и аргументация',
    explanationRu: `Словообразование помогает понимать незнакомые слова и выражаться точнее и короче.

**Суффиксы существительных:** *-ung* (процесс: *Digitalisierung*), *-heit/-keit* (свойство: *Nachhaltigkeit*), *-schaft* (совокупность: *Gesellschaft*), *-tum* (*Wachstum*), *-nis* (*Erkenntnis*). Слова на *-ung, -heit, -keit, -schaft* всегда женского рода.

**Суффиксы прилагательных:** *-bar* (= можно сделать: *finanzierbar*), *-los* (без: *bedingungslos*), *-haft* (*zweifelhaft*), *-sam* (*wirksam*), *-fähig* (*zukunftsfähig*). Приставка *un-* даёт отрицание: *unumkehrbar*.

**Сложные слова:** род и основное значение определяет **последний компонент**: *das Bevölkerungs**wachstum***. Между частями часто стоит соединительный элемент (Fugenelement) *-s-, -n-, -es-*: *Arbeit**s**markt, Generation**en**vertrag*.

**Глагольные приставки.** Неотделяемые приставки меняют значение предсказуемо:

- **be-** делает глагол переходным: *auf eine Frage antworten → eine Frage **be**antworten*;
- **ver-** — изменение, ошибка или расход: *verbessern, sich **ver**rechnen, **ver**schwenden*;
- **er-** — достижение результата: *sich etwas **er**kämpfen*;
- **ent-** — удаление, освобождение: ***ent**lasten, **ent**schärfen*;
- **zer-** — разрушение: ***zer**stören*.

Двойственные приставки **um-, über-, durch-, unter-** бывают отделяемыми (ударные, прямое значение) и неотделяемыми (безударные, переносное значение): *Er fährt die Laterne **um*** (сбивает) ↔ *Er **umfährt** den Stau* (объезжает); *Sie setzt mit der Fähre **über*** (переправляется) ↔ *Sie **übersetzt** den Text* (переводит).

**Аргументация (Erörterung):** во введении сформулируйте вопрос; затем изложите тезис и антитезис (*einerseits … andererseits, zwar … aber*); в заключении — синтез и собственная позиция.

**Типичные ошибки русскоговорящих:**

- перенос значений русских приставок: «переработать» ≠ *überarbeiten* (это «доработать» или «переутомиться»);
- род сложного слова определяют по первому компоненту ✗;
- пропускают соединительное *-s-*: *Arbeitmarkt* ✗;
- путают *-bar* и *-lich*: *verständlich*, но не *verstehbar*.`,
    table: [
      ['Приставка', 'Значение', 'Пример'],
      ['be-', 'делает глагол переходным', 'auf etw. antworten → etw. beantworten'],
      ['ver-', 'изменение, ошибка, расход', 'verbessern, sich verrechnen'],
      ['er-', 'достижение результата', 'erarbeiten, erkämpfen'],
      ['ent-', 'удаление, освобождение', 'entlasten, entschärfen'],
      ['um- (отдел.)', 'опрокинуть, переделать', 'umfahren (сбить), umbauen'],
      ['um- (неотдел.)', 'обойти, окружить', 'umfahren (объехать), umgehen'],
    ],
    examples: [
      {
        de: 'Die Digitalisierung verändert die Arbeitswelt grundlegend und unumkehrbar.',
        ru: 'Цифровизация коренным образом и необратимо меняет мир труда.',
      },
      {
        de: 'Ein bedingungsloses Grundeinkommen wäre vielleicht finanzierbar, ist aber politisch kaum durchsetzbar.',
        ru: 'Безусловный базовый доход, возможно, и удалось бы профинансировать, но политически его вряд ли удастся провести.',
      },
      {
        de: 'Die Regierung will die Pflegekräfte entlasten und den Beruf attraktiver machen.',
        ru: 'Правительство хочет снизить нагрузку на медицинских сестёр и сиделок и сделать профессию привлекательнее.',
      },
      {
        de: 'Wer die Regeln umgeht, schadet am Ende der ganzen Gemeinschaft.',
        ru: 'Тот, кто обходит правила, в итоге вредит всему обществу.',
      },
      {
        de: 'Viele Kommunen bauen leerstehende Bürogebäude zu Wohnungen um.',
        ru: 'Многие муниципалитеты перестраивают пустующие офисные здания под жильё.',
      },
      {
        de: 'Einerseits schafft die Automatisierung Wohlstand, andererseits verschärft sie die Konkurrenz um gut bezahlte Arbeitsplätze.',
        ru: 'С одной стороны, автоматизация создаёт благосостояние, с другой — обостряет конкуренцию за хорошо оплачиваемые рабочие места.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Kommission hat alle Fragen der Bürgerinnen und Bürger ausführlich ___.',
        options: ['beantwortet', 'geantwortet', 'verantwortet', 'entgegnet'],
        answer: 0,
        explanationRu:
          'Приставка be- делает глагол переходным: «auf eine Frage antworten» → «eine Frage beantworten» (с прямым дополнением). «verantworten» означает «нести ответственность».',
      },
      {
        type: 'choice',
        prompt: 'Welches Wort bedeutet „kann nicht vermieden werden“?',
        options: ['vermeidungslos', 'unvermeidbar', 'unvermieden', 'vermeidlich'],
        answer: 1,
        explanationRu: 'Суффикс -bar = «можно сделать», приставка un- — отрицание: «unvermeidbar» = «то, чего нельзя избежать».',
      },
      {
        type: 'choice',
        prompt: '___ Bevölkerungswachstum in vielen Großstädten stellt die Infrastruktur vor enorme Herausforderungen.',
        options: ['Die', 'Der', 'Das'],
        answer: 2,
        explanationRu: 'Род сложного слова определяется последним компонентом: «das Wachstum» → «das Bevölkerungswachstum».',
      },
      {
        type: 'choice',
        prompt: 'Der Lkw hat beim Rangieren eine Laterne ___ – jetzt liegt sie auf dem Gehweg.',
        options: ['umfahren', 'umgefahren', 'befahren', 'erfahren'],
        answer: 1,
        explanationRu:
          'Отделяемое «úmfahren» (ударная приставка) = «сбить, опрокинуть» → Partizip II «umgefahren». Неотделяемое «umfáhren» = «объехать» — Partizip II «umfahren».',
      },
      {
        type: 'gap',
        prompt: 'Die Pflegekräfte müssen dringend ___ werden, sonst verlassen immer mehr von ihnen den Beruf. (lasten → освободить от нагрузки)',
        answers: ['entlastet'],
        explanationRu: 'Приставка ent- означает удаление, освобождение: «entlasten» — «снять нагрузку». Partizip II неотделяемых глаголов образуется без ge-.',
      },
      {
        type: 'gap',
        prompt: 'Die neue Vorschrift ist leicht zu ___ – man muss nur einen Zweitwohnsitz anmelden. (обойти)',
        answers: ['umgehen'],
        explanationRu:
          'Неотделяемое «umgéhen» = «обходить (правило, закон)». В конструкции «zu + Infinitiv» у неотделяемого глагола «zu» стоит перед глаголом: «zu umgehen».',
      },
      {
        type: 'gap',
        prompt: 'Der ___markt hat sich durch die Automatisierung stark verändert. (Arbeit)',
        answers: ['Arbeits'],
        hintRu: 'не забудьте соединительный элемент',
        explanationRu: 'В сложном слове «der Arbeitsmarkt» между компонентами стоит соединительный элемент -s-.',
      },
      {
        type: 'gap',
        prompt: 'Die Expertin hat sich bei ihrer Prognose um mehrere Millionen ___. (ошиблась в расчётах)',
        answers: ['verrechnet'],
        explanationRu: 'Возвратный глагол с приставкой ver- часто означает ошибку: «sich verrechnen» — «просчитаться», ср. «sich verlaufen», «sich versprechen».',
      },
      {
        type: 'order',
        words: ['Viele Städte', 'bauen', 'leerstehende Bürogebäude', 'zu Wohnungen', 'um.'],
        translationRu: 'Многие города перестраивают пустующие офисные здания под жильё.',
        explanationRu: '«umbauen» — отделяемый глагол: приставка «um» уходит в конец предложения.',
      },
      {
        type: 'order',
        words: ['Einerseits', 'schafft', 'die Digitalisierung', 'neue Arbeitsplätze,', 'andererseits', 'fallen', 'viele Routinetätigkeiten', 'weg.'],
        translationRu: 'С одной стороны, цифровизация создаёт новые рабочие места, с другой — исчезает множество рутинных задач.',
        explanationRu:
          '«einerseits» и «andererseits» — союзные наречия на позиции 1, после них сразу идёт спрягаемый глагол. Отделяемая приставка «weg» стоит в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените пассивную конструкцию с «können» прилагательным на -bar.',
        prompt: 'Es ist fraglich, ob das Konzept finanziert werden kann.',
        answers: ['Es ist fraglich, ob das Konzept finanzierbar ist.'],
        explanationRu: '«kann finanziert werden» = «ist finanzierbar». Суффикс -bar выражает пассивную возможность.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените выделенную группу сложным существительным: «die Entwicklung der Bevölkerung».',
        prompt: 'Die Entwicklung der Bevölkerung wird von der Politik oft unterschätzt.',
        answers: ['Die Bevölkerungsentwicklung wird von der Politik oft unterschätzt.'],
        explanationRu:
          'Определение в генитиве становится первым компонентом сложного слова, соединительный элемент -s- после -ung обязателен. Род — по последнему компоненту: «die Entwicklung».',
      },
    ],
  },
  vocab: [
    {
      de: 'der demografische Wandel',
      pos: 'phrase',
      ru: 'демографические изменения (старение населения)',
      example: 'Der demografische Wandel stellt die sozialen Sicherungssysteme vor gewaltige Probleme.',
      exampleRu: 'Демографические изменения создают огромные проблемы для систем социального обеспечения.',
    },
    {
      de: 'Überalterung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'старение населения',
      example: 'Die Überalterung ländlicher Regionen führt zur Schließung von Schulen und Arztpraxen.',
      exampleRu: 'Старение населения в сельских регионах приводит к закрытию школ и врачебных практик.',
    },
    {
      de: 'Grundeinkommen',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'базовый доход',
      example: 'In Finnland wurde ein bedingungsloses Grundeinkommen zwei Jahre lang getestet.',
      exampleRu: 'В Финляндии безусловный базовый доход тестировали в течение двух лет.',
    },
    {
      de: 'Teilhabe',
      article: 'die',
      plural: '–',
      forms: 'an + Dat',
      pos: 'noun',
      ru: 'участие, причастность (к общественной жизни)',
      example: 'Bildung ist die wichtigste Voraussetzung für gesellschaftliche Teilhabe.',
      exampleRu: 'Образование — важнейшее условие участия в жизни общества.',
    },
    {
      de: 'Zusammenhalt',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'сплочённость',
      example: 'In Krisenzeiten zeigt sich, wie stark der gesellschaftliche Zusammenhalt wirklich ist.',
      exampleRu: 'В кризисные времена видно, насколько крепка на самом деле сплочённость общества.',
    },
    {
      de: 'Spaltung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'раскол',
      example: 'Soziologen warnen vor einer wachsenden Spaltung zwischen Stadt und Land.',
      exampleRu: 'Социологи предупреждают о растущем расколе между городом и деревней.',
    },
    {
      de: 'Nachhaltigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'устойчивость, устойчивое развитие',
      example: 'Nachhaltigkeit darf kein bloßes Schlagwort in Werbekampagnen bleiben.',
      exampleRu: 'Устойчивое развитие не должно оставаться просто модным словом в рекламе.',
    },
    {
      de: 'Automatisierung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'автоматизация',
      example: 'Durch die Automatisierung könnten bis 2040 Millionen Arbeitsplätze wegfallen.',
      exampleRu: 'Из-за автоматизации к 2040 году могут исчезнуть миллионы рабочих мест.',
    },
    {
      de: 'umverteilen',
      forms: 'verteilt um, verteilte um, hat umverteilt',
      pos: 'verb',
      ru: 'перераспределять',
      example: 'Über das Steuersystem wird Vermögen von oben nach unten umverteilt.',
      exampleRu: 'Через налоговую систему богатство перераспределяется сверху вниз.',
    },
    {
      de: 'entlasten',
      forms: 'entlastet, entlastete, hat entlastet',
      pos: 'verb',
      ru: 'разгружать, облегчать бремя',
      example: 'Die Reform soll vor allem Familien mit kleinen Einkommen finanziell entlasten.',
      exampleRu: 'Реформа должна прежде всего облегчить финансовое бремя семей с низкими доходами.',
    },
    {
      de: 'bewältigen',
      forms: 'bewältigt, bewältigte, hat bewältigt',
      pos: 'verb',
      ru: 'справляться, преодолевать',
      example: 'Den Klimawandel kann kein Land allein bewältigen.',
      exampleRu: 'Ни одна страна не может в одиночку справиться с изменением климата.',
    },
    {
      de: 'generationengerecht',
      pos: 'adj',
      ru: 'справедливый по отношению к разным поколениям',
      example: 'Eine generationengerechte Politik darf künftigen Generationen keine Schuldenberge hinterlassen.',
      exampleRu: 'Справедливая по отношению к поколениям политика не должна оставлять будущим поколениям горы долгов.',
    },
    {
      de: 'zukunftsfähig',
      pos: 'adj',
      ru: 'перспективный, жизнеспособный в будущем',
      example: 'Nur mit massiven Investitionen in Bildung bleibt das Land zukunftsfähig.',
      exampleRu: 'Только масштабные инвестиции в образование сохранят у страны перспективы на будущее.',
    },
    {
      de: 'unumkehrbar',
      pos: 'adj',
      ru: 'необратимый',
      example: 'Manche Folgen der Erderwärmung sind bereits heute unumkehrbar.',
      exampleRu: 'Некоторые последствия глобального потепления уже сегодня необратимы.',
    },
    {
      de: 'Daseinsvorsorge',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'обеспечение базовых жизненных услуг (государством)',
      example: 'Zur Daseinsvorsorge gehören Wasserversorgung, Nahverkehr und medizinische Versorgung.',
      exampleRu: 'К базовым услугам относятся водоснабжение, общественный транспорт и медицинская помощь.',
    },
    {
      de: 'Gemeinwohl',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'общее благо',
      example: 'Eigentum verpflichtet – sein Gebrauch soll zugleich dem Gemeinwohl dienen.',
      exampleRu: 'Собственность обязывает — её использование должно одновременно служить общему благу.',
    },
    {
      de: 'Generationenvertrag',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: '«договор поколений» (солидарная пенсионная система)',
      example: 'Der Generationenvertrag beruht darauf, dass die Erwerbstätigen die Renten der Älteren finanzieren.',
      exampleRu: '«Договор поколений» основан на том, что работающие финансируют пенсии старших.',
    },
    {
      de: 'die Weichen stellen',
      forms: 'für + Akk',
      pos: 'phrase',
      ru: 'задать направление развития, заложить основу',
      example: 'Mit dieser Reform stellt die Regierung die Weichen für die nächsten Jahrzehnte.',
      exampleRu: 'Этой реформой правительство задаёт курс на ближайшие десятилетия.',
    },
    {
      de: 'auf der Kippe stehen',
      forms: 'steht, stand, hat gestanden',
      pos: 'phrase',
      ru: 'висеть на волоске, быть под угрозой',
      example: 'Wegen fehlender Mittel steht das Projekt auf der Kippe.',
      exampleRu: 'Из-за нехватки средств проект висит на волоске.',
    },
    {
      de: 'etwas auf die lange Bank schieben',
      forms: 'schiebt, schob, hat geschoben',
      pos: 'phrase',
      ru: 'откладывать в долгий ящик',
      example: 'Notwendige Reformen wurden jahrzehntelang auf die lange Bank geschoben.',
      exampleRu: 'Необходимые реформы десятилетиями откладывались в долгий ящик.',
    },
  ],
  listening: {
    title: 'Interview: Wie leben wir im Jahr 2050?',
    kind: 'dialog',
    text: `A: Herr Dr. Brenner, Sie beschäftigen sich als Zukunftsforscher mit der Frage, wie wir im Jahr 2050 leben werden. Wagen Sie eine Prognose?
B: Vorhersagen sind bekanntlich schwierig, vor allem, wenn sie die Zukunft betreffen. Aber einige Entwicklungen sind praktisch unumkehrbar. Die wichtigste ist der demografische Wandel. Im Jahr 2050 wird in Deutschland deutlich mehr als jeder Vierte älter als 65 sein.
A: Was bedeutet das für den Generationenvertrag?
B: Er gerät massiv unter Druck. Immer weniger Erwerbstätige müssen die Renten von immer mehr Ruheständlern finanzieren. Wenn wir jetzt nicht die Weichen stellen, steht die Rente in ihrer heutigen Form auf der Kippe.
A: Und welche Weichen wären das?
B: Wir werden länger arbeiten müssen, so unpopulär das klingt. Außerdem brauchen wir gezielte Zuwanderung und eine bessere Vereinbarkeit von Familie und Beruf, damit mehr Menschen Vollzeit arbeiten können. Und wir sollten die Automatisierung als Chance begreifen statt als Bedrohung.
A: Viele fürchten aber, dass Roboter und künstliche Intelligenz massenhaft Arbeitsplätze vernichten.
B: Diese Angst ist nachvollziehbar, historisch aber kaum belegbar. Jede technologische Revolution hat Berufe verdrängt, gleichzeitig aber neue hervorgebracht. Gerade in einer alternden Gesellschaft könnte die Automatisierung helfen, den Fachkräftemangel zu bewältigen – etwa in der Pflege, wo Roboter das Personal bei körperlich schweren Tätigkeiten entlasten könnten.
A: Manche fordern als Antwort auf diese Umbrüche ein bedingungsloses Grundeinkommen. Was halten Sie davon?
B: Ich bin da zwiegespalten. Einerseits könnte es den Menschen mehr Freiheit und Sicherheit geben. Andererseits ist ein Grundeinkommen in nennenswerter Höhe kaum finanzierbar, und es ist fraglich, ob es den gesellschaftlichen Zusammenhalt tatsächlich stärken würde.
A: Apropos Zusammenhalt: Viele beklagen eine zunehmende Spaltung der Gesellschaft.
B: Das ist aus meiner Sicht die eigentliche Herausforderung. Technische Probleme sind in der Regel lösbar, soziale sind oft viel hartnäckiger. Wenn Menschen das Gefühl haben, von der Teilhabe am Wohlstand ausgeschlossen zu sein, verlieren sie das Vertrauen in die Demokratie.
A: Was stimmt Sie trotzdem optimistisch?
B: Dass die Zukunft nicht einfach über uns hereinbricht, sondern gestaltbar ist. Wir dürfen die großen Reformen nur nicht länger auf die lange Bank schieben. Je früher wir handeln, desto größer ist unser Spielraum.`,
    questions: [
      {
        question: 'Welche Entwicklung hält Dr. Brenner für praktisch unumkehrbar?',
        options: [
          'die Spaltung der Gesellschaft',
          'die Einführung des Grundeinkommens',
          'den demografischen Wandel',
          'den Rückgang der Zuwanderung',
        ],
        answer: 2,
      },
      {
        question: 'Welche Maßnahme zur Sicherung der Rente schlägt er NICHT vor?',
        options: [
          'eine längere Lebensarbeitszeit',
          'gezielte Zuwanderung',
          'eine bessere Vereinbarkeit von Familie und Beruf',
          'eine Halbierung der Renten',
        ],
        answer: 3,
      },
      {
        question: 'Wie beurteilt er die Angst vor massenhaftem Jobverlust durch Automatisierung?',
        options: [
          'als verständlich, aber historisch kaum begründet',
          'als völlig berechtigt',
          'als Erfindung der Medien',
        ],
        answer: 0,
      },
      {
        question: 'Welche Haltung nimmt er gegenüber dem bedingungslosen Grundeinkommen ein?',
        options: [
          'Er befürwortet es uneingeschränkt.',
          'Er ist unentschieden und sieht Vor- und Nachteile.',
          'Er lehnt es kategorisch ab.',
          'Er hält es für bereits beschlossen.',
        ],
        answer: 1,
      },
      {
        question: 'Was ist für ihn die eigentliche Herausforderung der Zukunft?',
        options: [
          'die technische Entwicklung der Roboter',
          'die Finanzierung der Pflege',
          'die Spaltung der Gesellschaft und der Vertrauensverlust in die Demokratie',
          'der Mangel an Wohnraum',
        ],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu:
      'Напишите диалектическое эссе-рассуждение на тему «Безусловный базовый доход — модель будущего?». Изложите аргументы за и против, а затем сформулируйте собственную позицию. Используйте сложные слова и производные прилагательные (-bar, -los, -fähig).',
    taskDe:
      'Verfassen Sie eine dialektische Erörterung zum Thema: „Bedingungsloses Grundeinkommen – ein Modell für die Zukunft?“',
    points: [
      'Führen Sie in das Thema ein und formulieren Sie die Leitfrage.',
      'Stellen Sie Argumente für ein bedingungsloses Grundeinkommen dar.',
      'Stellen Sie Argumente dagegen dar (Finanzierbarkeit, Arbeitsanreize, Gerechtigkeit).',
      'Wägen Sie ab und begründen Sie Ihre eigene Position im Schlussteil.',
    ],
    minWords: 250,
    usefulPhrases: [
      'Angesichts der zunehmenden Automatisierung wird immer häufiger die Frage gestellt, ob …',
      'Befürworter führen an, dass …',
      'Hinzu kommt, dass …',
      'Dem halten Kritiker entgegen, dass …',
      'Einerseits …, andererseits …',
      'Es ist allerdings fraglich, ob … finanzierbar wäre.',
      'Nach Abwägung der Argumente gelange ich zu der Überzeugung, dass …',
      'Es bleibt abzuwarten, ob …',
    ],
  },
  speaking: {
    scenarioRu:
      'В Германии обсуждается обязательный «общественный год» (Gesellschaftsjahr): все выпускники школ должны год проработать в социальной сфере, армии или экологии. Вы выступаете за эту идею как средство укрепления сплочённости общества. Собеседница — экономист, которая против.',
    aiRole:
      'Sie sind Dr. Lea Hoffmann, Ökonomin an einem wirtschaftsliberalen Forschungsinstitut. Sie sprechen auf C1-Niveau, sachlich, pointiert und mit idiomatischen Wendungen, und lehnen ein verpflichtendes Gesellschaftsjahr als unverhältnismäßigen Eingriff in die Freiheit junger Menschen und als volkswirtschaftlich teuer ab. Sie fordern für jedes Argument Belege und konfrontieren Ihr Gegenüber mit Gegenbeispielen.',
    opener:
      'Ein Pflichtjahr für alle Schulabgänger? Mit Verlaub, das klingt für mich nach gut gemeinter Symbolpolitik. Wie soll ein erzwungenes Jahr den gesellschaftlichen Zusammenhalt stärken?',
    tasksRu: [
      'Изложите аргументы в пользу общественного года по схеме «тезис — обоснование — пример».',
      'Используйте не менее пяти слов, образованных с помощью суффиксов -bar, -los, -fähig, -ung, -keit.',
      'Признайте сильные стороны позиции собеседницы (einerseits … andererseits).',
      'Подведите итог и предложите компромисс (например, добровольный год с привлекательными льготами).',
    ],
    readAloud: [
      'Der demografische Wandel ist praktisch unumkehrbar, weshalb wir die Weichen für einen generationengerechten Sozialstaat jetzt stellen müssen.',
      'Einerseits könnte ein bedingungsloses Grundeinkommen Menschen entlasten, andererseits ist fraglich, ob es dauerhaft finanzierbar wäre.',
      'Wer notwendige Reformen immer wieder auf die lange Bank schiebt, gefährdet den gesellschaftlichen Zusammenhalt und die Zukunftsfähigkeit des Landes.',
    ],
  },
};
