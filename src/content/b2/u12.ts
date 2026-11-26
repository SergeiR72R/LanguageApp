import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-12',
  level: 'B2',
  order: 12,
  title: 'Arbeit & Karriere',
  titleRu: 'Работа и карьера: команда, конфликты, руководство',
  goalsRu: [
    'Понимать тексты, подкасты и дискуссии о стилях руководства, командной работе и конфликтах на работе.',
    'Выражать способ и средство действия с помощью indem и dadurch, dass.',
    'Говорить о несостоявшемся или заменённом действии: ohne … zu / ohne dass, (an)statt … zu / (an)statt dass, а также о зависимости: je nachdem, ob/wie.',
    'Конструктивно обсуждать конфликт в команде и предлагать решения устно и письменно.',
  ],
  grammar: {
    topic: 'Modalsätze: indem, dadurch …, dass, ohne dass / ohne … zu, (an)statt dass / (an)statt … zu, je nachdem, ob/wie',
    topicRu: 'Придаточные образа действия',
    explanationRu: `Модальные придаточные отвечают на вопросы **Wie? Wodurch? Auf welche Weise?** — как, каким образом, с помощью чего.

**1. indem** — способ или средство. По-русски часто передаётся деепричастием: «Мы решили конфликт, **открыто поговорив**» → Wir haben den Konflikt gelöst, **indem** wir offen gesprochen haben.

**2. dadurch, dass / dadurch …, dass** — то же значение, но средство подчёркнуто. Dadurch может стоять в главном предложении: Sie hat das Team **dadurch** motiviert, **dass** sie alle einbezogen hat. Часто имеет и причинный оттенок: **Dadurch, dass** zwei Kollegen krank sind, verzögert sich das Projekt.

**3. ohne … zu / ohne dass** — ожидаемое действие **не происходит** («не сделав», «так что … не»).
- субъект один → **ohne … zu**: Er hat entschieden, **ohne** das Team **zu fragen**.
- субъекты разные → **ohne dass**: Er hat entschieden, **ohne dass** das Team davon wusste.

**4. (an)statt … zu / (an)statt dass** — одно действие **заменяет** другое, ожидаемое («вместо того чтобы»). Правило то же: **Statt** den Konflikt **anzusprechen**, hat er geschwiegen. **Statt dass** die Chefin entscheidet, stimmt das Team ab.

**5. je nachdem, ob / wie / wann / wer …** — «в зависимости от того, …»: **Je nachdem, wie** das Gespräch verläuft, entscheiden wir morgen.

Именные варианты для письменной речи: **durch** + Akk (durch regelmäßiges Feedback), **ohne** + Akk, **(an)statt** + Gen.

**Типичные ошибки русскоговорящих:**
- *in dem* вместо **indem**: союз пишется слитно.
- *durch dass* — такого союза нет, только **dadurch, dass**.
- *ohne zu* при разных субъектах: *Er hat gekündigt, ohne sein Chef zu wissen* → **ohne dass** sein Chef es wusste.
- Путают **statt … zu** и **um … zu**: statt — «вместо того чтобы», um — «для того чтобы».
- Забывают, что в придаточном с indem, ohne dass, statt dass спрягаемый глагол стоит **в конце**.`,
    table: [
      ['Союз / предлог', 'Значение', 'Пример'],
      ['indem', 'способ, средство (как?)', 'Sie löst Konflikte, indem sie zuhört.'],
      ['dadurch, dass', 'средство; часто причина', 'Dadurch, dass wir früher anfangen, sparen wir Zeit.'],
      ['ohne … zu / ohne dass', 'ожидаемое действие не происходит', 'ohne zu fragen / ohne dass er fragt'],
      ['(an)statt … zu / (an)statt dass', 'одно действие вместо другого', 'statt zu helfen / statt dass er hilft'],
      ['je nachdem, ob / wie / w-', 'зависимость от обстоятельств', 'je nachdem, wie viel Zeit wir haben'],
      ['durch / ohne / (an)statt', 'именной вариант', 'durch Feedback, ohne Erklärung, statt einer Lösung'],
    ],
    examples: [
      {
        de: 'Unsere Teamleiterin schafft Vertrauen, indem sie Fehler offen anspricht, ohne jemanden bloßzustellen.',
        ru: 'Наша руководительница группы создаёт доверие, открыто говоря об ошибках и никого не выставляя в неловком свете.',
      },
      {
        de: 'Dadurch, dass wir die Aufgaben klarer verteilt haben, gibt es kaum noch Missverständnisse.',
        ru: 'Благодаря тому, что мы чётче распределили задачи, недоразумений почти не осталось.',
      },
      {
        de: 'Der Abteilungsleiter hat die neue Software eingeführt, ohne dass die Mitarbeiter vorher geschult worden waren.',
        ru: 'Начальник отдела внедрил новую программу, а сотрудников перед этим даже не обучили.',
      },
      {
        de: 'Statt den Konflikt direkt anzusprechen, hat er sich bei der Geschäftsführung beschwert.',
        ru: 'Вместо того чтобы прямо заговорить о конфликте, он пожаловался руководству фирмы.',
      },
      {
        de: 'Anstatt dass die Chefin alles allein entscheidet, darf das Team über das Budget mitbestimmen.',
        ru: 'Вместо того чтобы начальница решала всё одна, команда может участвовать в решениях о бюджете.',
      },
      {
        de: 'Je nachdem, wie viel Erfahrung jemand mitbringt, bekommt er mehr oder weniger Verantwortung.',
        ru: 'В зависимости от того, сколько у человека опыта, он получает больше или меньше ответственности.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Man kann viele Konflikte im Team vermeiden, ___ man Probleme früh anspricht.',
        options: ['indem', 'damit', 'ohne dass', 'statt'],
        answer: 0,
        explanationRu: 'Каким образом можно избежать конфликтов? — Рано обсуждая проблемы. Способ/средство → indem.',
      },
      {
        type: 'choice',
        prompt: 'Er hat das Büro verlassen, ___ sich von den Kollegen zu verabschieden.',
        options: ['indem', 'ohne', 'statt dass', 'dadurch'],
        answer: 1,
        explanationRu: 'Ожидаемое действие (попрощаться) не произошло, субъект один (er) → ohne … zu.',
      },
      {
        type: 'choice',
        prompt: 'Die Chefin hat die Stelle neu besetzt, ___ das Team davon wusste.',
        options: ['ohne zu', 'ohne dass', 'indem', 'anstatt zu'],
        answer: 1,
        explanationRu: 'Субъекты разные (die Chefin / das Team), поэтому нельзя ohne … zu — нужно ohne dass.',
      },
      {
        type: 'choice',
        prompt: '___ ob das Projekt pünktlich fertig wird, gibt es am Jahresende einen Bonus oder nicht.',
        options: ['Indem', 'Dadurch,', 'Je nachdem,', 'Ohne dass'],
        answer: 2,
        explanationRu: 'Премия зависит от того, будет ли проект готов вовремя → je nachdem, ob … («в зависимости от того, …»).',
      },
      {
        type: 'gap',
        prompt: 'Wir haben die Abläufe dadurch verbessert, ___ wir jede Woche eine kurze Feedbackrunde machen.',
        answers: ['dass'],
        hintRu: 'dadurch …, ___',
        explanationRu: 'Коррелят dadurch стоит в главном предложении, придаточное вводится союзом dass.',
      },
      {
        type: 'gap',
        prompt: 'Die neue Kollegin hat sich schnell eingearbeitet, ___ sie von Anfang an viele Fragen gestellt hat.',
        answers: ['indem'],
        hintRu: 'каким образом?',
        explanationRu: 'Способ, которым она быстро освоилась, — задавая много вопросов → indem (слитно!).',
      },
      {
        type: 'gap',
        prompt: '___ den Fehler zuzugeben, hat er die Schuld auf den Praktikanten geschoben.',
        answers: ['Statt', 'Anstatt'],
        hintRu: 'вместо того чтобы …',
        explanationRu: 'Одно действие (свалить вину) заменило ожидаемое (признать ошибку); субъект один → (an)statt … zu.',
      },
      {
        type: 'gap',
        prompt: 'Der Streit zwischen den beiden Kollegen eskalierte, ___ die Abteilungsleiterin etwas davon merkte.',
        answers: ['ohne dass'],
        hintRu: 'два слова; субъекты разные',
        explanationRu: 'Начальница ничего не заметила (ожидаемое действие не произошло), субъекты разные (der Streit / die Abteilungsleiterin) → ohne dass.',
      },
      {
        type: 'order',
        words: ['Sie', 'motiviert', 'ihr Team,', 'indem', 'sie', 'gute Arbeit', 'regelmäßig', 'lobt.'],
        translationRu: 'Она мотивирует свою команду, регулярно хваля хорошую работу.',
        explanationRu: 'Придаточное с indem: подлежащее сразу после союза, спрягаемый глагол lobt — в конце.',
      },
      {
        type: 'order',
        words: ['Er', 'hat', 'gekündigt,', 'ohne', 'eine neue Stelle', 'zu', 'haben.'],
        translationRu: 'Он уволился, не имея новой работы.',
        explanationRu: 'Субъект один (er) → ohne … zu + инфинитив в конце. Частица zu стоит непосредственно перед инфинитивом.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью indem.',
        prompt: 'Die Firma senkt die Fluktuation. Sie bietet flexible Arbeitszeiten an.',
        answers: ['Die Firma senkt die Fluktuation, indem sie flexible Arbeitszeiten anbietet.'],
        explanationRu: 'Второе предложение называет средство → indem. Отделяемая приставка an в придаточном соединяется с глаголом: anbietet.',
      },
      {
        type: 'transform',
        instructionRu: 'Перестройте с помощью statt … zu: первое предложение — нежелательное действие.',
        prompt: 'Die Kollegen lästern hinter seinem Rücken. Sie sollten lieber offen mit ihm sprechen.',
        answers: [
          'Statt hinter seinem Rücken zu lästern, sollten die Kollegen lieber offen mit ihm sprechen.',
          'Anstatt hinter seinem Rücken zu lästern, sollten die Kollegen lieber offen mit ihm sprechen.',
          'Die Kollegen sollten lieber offen mit ihm sprechen, statt hinter seinem Rücken zu lästern.',
          'Die Kollegen sollten lieber offen mit ihm sprechen, anstatt hinter seinem Rücken zu lästern.',
        ],
        explanationRu: 'Субъект один (die Kollegen) → statt … zu + инфинитив. Если инфинитивный оборот стоит первым, главное предложение начинается со спрягаемого глагола (sollten).',
      },
    ],
  },
  vocab: [
    {
      de: 'Führungsstil',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'стиль руководства',
      example: 'Ihr kooperativer Führungsstil kommt bei den jüngeren Mitarbeitern gut an.',
      exampleRu: 'Её демократичный стиль руководства хорошо воспринимается молодыми сотрудниками.',
    },
    {
      de: 'Teamgeist',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'командный дух',
      example: 'Gemeinsame Erfolge stärken den Teamgeist mehr als jeder Betriebsausflug.',
      exampleRu: 'Общие успехи укрепляют командный дух больше, чем любая корпоративная поездка.',
    },
    {
      de: 'Betriebsklima',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'атмосфера на предприятии',
      example: 'Seit dem Wechsel in der Geschäftsführung hat sich das Betriebsklima deutlich verschlechtert.',
      exampleRu: 'После смены руководства атмосфера на предприятии заметно ухудшилась.',
    },
    {
      de: 'Konfliktlösung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'разрешение конфликтов',
      example: 'Zur Konfliktlösung hat die Firma eine externe Mediatorin eingeschaltet.',
      exampleRu: 'Для разрешения конфликта фирма привлекла внешнего медиатора.',
    },
    {
      de: 'Kompromiss',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'компромисс',
      example: 'Nach langer Diskussion haben wir uns auf einen Kompromiss geeinigt.',
      exampleRu: 'После долгой дискуссии мы договорились о компромиссе.',
    },
    {
      de: 'Feedback',
      article: 'das',
      plural: '-s',
      pos: 'noun',
      ru: 'обратная связь',
      example: 'Konstruktives Feedback hilft mehr als allgemeines Lob.',
      exampleRu: 'Конструктивная обратная связь помогает больше, чем общие похвалы.',
    },
    {
      de: 'Kritikfähigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'умение принимать (и высказывать) критику',
      example: 'Kritikfähigkeit gehört zu den wichtigsten Eigenschaften einer guten Führungskraft.',
      exampleRu: 'Умение принимать критику — одно из важнейших качеств хорошего руководителя.',
    },
    {
      de: 'Mitspracherecht',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'право голоса, право участвовать в решениях',
      example: 'Die Beschäftigten fordern mehr Mitspracherecht bei der Planung der Schichten.',
      exampleRu: 'Сотрудники требуют больше права голоса при планировании смен.',
    },
    {
      de: 'Fehlerkultur',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'культура отношения к ошибкам',
      example: 'In einer guten Fehlerkultur werden Fehler nicht bestraft, sondern als Lernchance gesehen.',
      exampleRu: 'При здоровом отношении к ошибкам их не наказывают, а рассматривают как возможность научиться.',
    },
    {
      de: 'Aufgabenverteilung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'распределение задач',
      example: 'Viele Konflikte im Team entstehen durch eine unklare Aufgabenverteilung.',
      exampleRu: 'Многие конфликты в команде возникают из-за нечёткого распределения задач.',
    },
    {
      de: 'Machtkampf',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'борьба за власть',
      example: 'Der Machtkampf zwischen den beiden Abteilungsleitern lähmt die ganze Firma.',
      exampleRu: 'Борьба за власть между двумя начальниками отделов парализует всю фирму.',
    },
    {
      de: 'Arbeitszufriedenheit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'удовлетворённость работой',
      example: 'Laut einer Umfrage hängt die Arbeitszufriedenheit stark vom Verhältnis zur Führungskraft ab.',
      exampleRu: 'Согласно опросу, удовлетворённость работой сильно зависит от отношений с руководителем.',
    },
    {
      de: 'Mikromanagement',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'микроменеджмент, мелочный контроль',
      example: 'Mit ihrem Mikromanagement hat die neue Chefin das Team völlig demotiviert.',
      exampleRu: 'Своим мелочным контролем новая начальница полностью демотивировала команду.',
    },
    {
      de: 'Konfliktgespräch',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'разговор для урегулирования конфликта',
      example: 'Ein Konfliktgespräch sollte immer unter vier Augen stattfinden.',
      exampleRu: 'Разговор о конфликте всегда должен проходить с глазу на глаз.',
    },
    {
      de: 'wertschätzen',
      forms: 'schätzt wert, schätzte wert, hat wertgeschätzt',
      pos: 'verb',
      ru: 'ценить, уважать',
      example: 'Wer sich bei der Arbeit wertgeschätzt fühlt, wechselt seltener den Job.',
      exampleRu: 'Тот, кто чувствует, что его ценят на работе, реже меняет место.',
    },
    {
      de: 'motivieren',
      forms: 'motivierte, hat motiviert; zu + Dat',
      pos: 'verb',
      ru: 'мотивировать, побуждать',
      example: 'Gute Führungskräfte motivieren ihr Team, indem sie Ziele verständlich erklären.',
      exampleRu: 'Хорошие руководители мотивируют команду, понятно объясняя цели.',
    },
    {
      de: 'lästern',
      forms: 'lästerte, hat gelästert; über + Akk',
      pos: 'verb',
      ru: 'злословить, перемывать косточки',
      example: 'In der Kaffeeküche wird oft über die Chefin gelästert.',
      exampleRu: 'На офисной кухне часто злословят о начальнице.',
    },
    {
      de: 'überlastet',
      pos: 'adj',
      ru: 'перегруженный',
      example: 'Das Team ist seit Monaten überlastet, weil zwei Stellen nicht besetzt sind.',
      exampleRu: 'Команда уже несколько месяцев перегружена, потому что две ставки не заняты.',
    },
    {
      de: 'respektvoll',
      pos: 'adj',
      ru: 'уважительный',
      example: 'Auch bei Meinungsverschiedenheiten erwarte ich einen respektvollen Umgang.',
      exampleRu: 'Даже при разногласиях я ожидаю уважительного общения.',
    },
    {
      de: 'konstruktiv',
      pos: 'adj',
      ru: 'конструктивный',
      example: 'Statt nur zu kritisieren, sollten Sie konstruktive Vorschläge machen.',
      exampleRu: 'Вместо того чтобы только критиковать, вам стоит вносить конструктивные предложения.',
    },
  ],
  listening: {
    title: 'Podcast „Chefsache“: Was motiviert ein Team wirklich?',
    kind: 'monolog',
    text: `Guten Tag und willkommen zur dritten Folge unseres Karriere-Podcasts „Chefsache“. Ich bin Daniel Roth und begleite seit fünfzehn Jahren Teams in Konfliktsituationen. Heute geht es um eine Frage, die mir fast jede neue Führungskraft stellt: Wie motiviere ich mein Team?

Die Antwort vieler Studien ist erstaunlich: nicht in erster Linie durch Geld. Natürlich muss das Gehalt fair sein. Aber wer nur wegen des Geldes bleibt, geht auch als Erster, sobald ein besseres Angebot kommt. Viel wichtiger ist, ob sich jemand wertgeschätzt fühlt.

Wie zeigt man Wertschätzung? Zum Beispiel, indem man gute Arbeit konkret lobt – nicht mit einem allgemeinen „Super gemacht!“, sondern indem man sagt, was genau gut war. Und dadurch, dass man Mitarbeitende an Entscheidungen beteiligt, statt sie nur zu informieren.

Ein häufiger Fehler ist das sogenannte Mikromanagement. Eine Führungskraft, die jede E-Mail kontrolliert, ohne dass es dafür einen Anlass gibt, sendet vor allem eine Botschaft: Ich vertraue euch nicht. Das Ergebnis: Die Leute machen nur noch Dienst nach Vorschrift.

Und was ist mit Konflikten? Viele Führungskräfte hoffen, dass sich Spannungen von selbst lösen. Das passiert fast nie. Indem man ein Problem ignoriert, macht man es meistens nur größer. Ich empfehle, Konflikte früh und unter vier Augen anzusprechen. Ob man dann vermittelt oder eine klare Entscheidung trifft, hängt von der Situation ab – je nachdem, ob es um sachliche Fragen oder um persönliche Verletzungen geht.

Zum Schluss noch ein Tipp: Bitten Sie Ihr Team regelmäßig um Feedback zu Ihrem eigenen Führungsstil. Das kostet am Anfang Überwindung. Aber wer Kritik annehmen kann, ohne sich sofort zu rechtfertigen, gewinnt enorm an Glaubwürdigkeit.

In der nächsten Folge geht es um Gehaltsverhandlungen. Bis dahin – alles Gute!`,
    questions: [
      {
        question: 'Was ist laut Daniel Roth der wichtigste Faktor für Motivation?',
        options: [
          'ein möglichst hohes Gehalt',
          'das Gefühl, wertgeschätzt zu werden',
          'flexible Arbeitszeiten',
          'klare Hierarchien',
        ],
        answer: 1,
      },
      {
        question: 'Wie sollte man Lob formulieren?',
        options: [
          'möglichst kurz und allgemein',
          'nur vor dem ganzen Team',
          'konkret, mit Bezug auf die Leistung',
          'am besten schriftlich',
        ],
        answer: 2,
      },
      {
        question: 'Was signalisiert Mikromanagement laut Roth?',
        options: [
          'großes Interesse an der Arbeit',
          'gute Organisation',
          'Unsicherheit der Mitarbeitenden',
          'fehlendes Vertrauen',
        ],
        answer: 3,
      },
      {
        question: 'Was rät Roth bei Konflikten?',
        options: [
          'sie früh in einem Gespräch unter vier Augen anzusprechen',
          'abzuwarten, bis sie sich von selbst lösen',
          'sie immer in der Teambesprechung zu klären',
          'sofort die Personalabteilung einzuschalten',
        ],
        answer: 0,
      },
      {
        question: 'Warum sollten Führungskräfte um Feedback bitten?',
        options: [
          'weil es gesetzlich vorgeschrieben ist',
          'weil sie dadurch an Glaubwürdigkeit gewinnen',
          'weil das Team sonst kündigt',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На портале о карьере обсуждают вопрос: «Плоские иерархии — нужны ли командам вообще начальники?» Напишите сообщение на форум (Forumsbeitrag) со своим мнением.',
    taskDe: 'In einem Karriereforum wird diskutiert: „Flache Hierarchien – brauchen Teams überhaupt noch Chefs?“ Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Ihre eigenen Erfahrungen mit Vorgesetzten oder Teamarbeit',
      'Vorteile von Teams, die sich selbst organisieren',
      'Risiken, wenn niemand die Verantwortung trägt (z. B. bei Konflikten)',
      'Ihre Meinung: Welche Art von Führung brauchen Teams heute?',
    ],
    minWords: 160,
    usefulPhrases: [
      'Aus eigener Erfahrung kann ich sagen, dass …',
      'Teams können viel erreichen, indem sie …',
      'Dadurch, dass niemand die letzte Verantwortung trägt, …',
      'Statt alles von oben zu entscheiden, sollte eine Führungskraft …',
      'Je nachdem, wie groß ein Team ist, …',
      'Meiner Ansicht nach kommt es vor allem darauf an, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы работаете в отделе маркетинга. Коллега постоянно перекладывает на вас свою работу и в последний момент сдвигает сроки. Вы идёте к руководительнице отдела, чтобы обсудить проблему и найти решение.',
    aiRole: 'Sie sind Abteilungsleiterin im Marketing eines mittelständischen Unternehmens. Ein Mitarbeiter kommt zu Ihnen, weil er Probleme mit einem Kollegen hat. Sie sind freundlich, aber kritisch: Sie wollen zuerst wissen, ob er selbst schon mit dem Kollegen gesprochen hat, und Sie mögen keine Beschwerden ohne konkrete Beispiele. Sprechen Sie natürliches Deutsch auf B2-Niveau, stellen Sie Nachfragen und verlangen Sie konstruktive Lösungsvorschläge.',
    opener: 'Kommen Sie rein, setzen Sie sich. Sie wollten mit mir über die Zusammenarbeit mit Herrn Keller sprechen? Was ist denn los?',
    tasksRu: [
      'Опишите проблему на конкретных примерах, не переходя на личности.',
      'Объясните, что вы уже пробовали сделать (indem …; ohne dass …).',
      'Возразите, если руководительница считает проблему преувеличенной.',
      'Предложите решение или компромисс (statt … zu; je nachdem, ob …).',
    ],
    readAloud: [
      'Viele Konflikte lassen sich lösen, indem man früh und offen miteinander spricht.',
      'Statt die Fehler bei anderen zu suchen, sollte jedes Teammitglied zuerst die eigene Rolle überdenken.',
      'Je nachdem, wie das Gespräch verläuft, entscheiden wir, ob wir eine Mediatorin einschalten.',
    ],
  },
};
