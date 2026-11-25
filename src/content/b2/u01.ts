import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-01',
  level: 'B2',
  order: 1,
  title: 'Arbeitswelt im Wandel',
  titleRu: 'Мир труда меняется',
  goalsRu: [
    'Рассказывать о переменах в мире труда, используя пассив в прошедших временах (Perfekt, Plusquamperfekt).',
    'Различать пассив действия (werden) и пассив состояния (sein).',
    'Заменять пассив конструкциями sich lassen, sein + zu и прилагательными на -bar.',
    'Аргументированно высказывать мнение об удалённой работе в посте на форуме.',
  ],
  grammar: {
    topic: 'Passiv Perfekt und Plusquamperfekt, Zustandspassiv, Passiversatz',
    topicRu: 'Пассив в Perfekt и Plusquamperfekt, пассив состояния, заменители пассива',
    explanationRu: `**Пассив Perfekt и Plusquamperfekt** образуется с глаголом **sein** + Partizip II + **worden**. В пассиве используется именно **worden**, а не geworden.

- Perfekt: Die Stelle **ist** gestrichen **worden**. — Должность была сокращена.
- Plusquamperfekt: Die Stelle **war** gestrichen **worden**. — Должность была сокращена (ещё раньше).

В придаточном предложении спрягаемый глагол стоит в самом конце: …, weil die Stelle gestrichen worden **ist**.

**Пассив состояния (Zustandspassiv)** = sein + Partizip II. Он описывает не процесс, а результат действия:

- Das Büro **wird** renoviert. — Офис ремонтируют (процесс идёт).
- Das Büro **ist** renoviert. — Офис отремонтирован (результат).

**Заменители пассива** делают речь разнообразнее:

- **sich lassen + Infinitiv** = «можно»: Das Problem **lässt sich** lösen. = Das Problem kann gelöst werden.
- **прилагательные на -bar** = «можно»: lösbar, machbar, erreichbar, ersetzbar.
- **sein + zu + Infinitiv** = «можно» или «нужно» (часто в официальных текстах): Der Antrag **ist** bis Freitag **einzureichen**. = Der Antrag muss eingereicht werden. С отделяемыми приставками zu стоит в середине: ein**zu**reichen, weiter**zu**leiten.

**Типичные ошибки русскоговорящих:**

- «ist gemacht geworden» — неправильно, нужно **ist gemacht worden**.
- Вспомогательный глагол haben в пассиве: *hat gebaut worden* — ошибка, в пассиве Perfekt всегда **sein**.
- Смешение процесса и результата. По-русски «магазин закрыт» и «магазин закрывают» тоже различаются, но в немецком это выражается только глаголом: Der Laden **ist** geschlossen / **wird** geschlossen.
- Конструкция sein + zu без zu или с неправильным местом zu: *ist einreichen*, *ist zu einreichen* вместо **ist einzureichen**.`,
    table: [
      ['Форма', 'Структура', 'Пример'],
      ['Passiv Präsens', 'werden + Partizip II', 'Die Stelle wird besetzt.'],
      ['Passiv Perfekt', 'sein + Partizip II + worden', 'Die Stelle ist besetzt worden.'],
      ['Passiv Plusquamperfekt', 'war + Partizip II + worden', 'Die Stelle war besetzt worden.'],
      ['Zustandspassiv', 'sein + Partizip II', 'Die Stelle ist besetzt.'],
      ['sich lassen', 'sich lassen + Infinitiv', 'Die Stelle lässt sich schnell besetzen.'],
      ['sein + zu', 'sein + zu + Infinitiv', 'Die Stelle ist sofort zu besetzen.'],
    ],
    examples: [
      {
        de: 'In unserer Firma sind im letzten Jahr viele Prozesse automatisiert worden.',
        ru: 'В нашей фирме в прошлом году были автоматизированы многие процессы.',
      },
      {
        de: 'Nachdem die neue Software eingeführt worden war, mussten alle Mitarbeiter geschult werden.',
        ru: 'После того как было внедрено новое программное обеспечение, всех сотрудников пришлось обучить.',
      },
      {
        de: 'Die Stelle ist leider schon besetzt.',
        ru: 'Вакансия, к сожалению, уже занята.',
      },
      {
        de: 'Viele Aufgaben lassen sich problemlos im Homeoffice erledigen.',
        ru: 'Многие задачи можно без проблем выполнять из дома.',
      },
      {
        de: 'Die Arbeitszeiten sind flexibel und individuell anpassbar.',
        ru: 'Рабочее время гибкое, и его можно настроить индивидуально.',
      },
      {
        de: 'Der Antrag auf Elternzeit ist spätestens sieben Wochen vorher einzureichen.',
        ru: 'Заявление на отпуск по уходу за ребёнком нужно подать не позднее чем за семь недель.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Kündigungen sind gestern offiziell bekannt gegeben ___.',
        options: ['geworden', 'worden', 'werden', 'gewesen'],
        answer: 1,
        explanationRu: 'Пассив Perfekt: sein + Partizip II + worden. Форма geworden используется только в значении «стать», а не в пассиве.',
      },
      {
        type: 'choice',
        prompt: 'Keine Sorge, die Präsentation ___ schon fertig vorbereitet – du kannst sie dir gleich ansehen.',
        options: ['wird', 'ist', 'hat', 'würde'],
        answer: 1,
        explanationRu: 'Речь идёт о результате (презентация уже готова), поэтому нужен пассив состояния: sein + Partizip II.',
      },
      {
        type: 'choice',
        prompt: 'Die Daten lassen sich mit einem Klick ___.',
        options: ['exportiert', 'zu exportieren', 'exportieren', 'exportierbar'],
        answer: 2,
        explanationRu: 'После sich lassen стоит инфинитив без zu: Die Daten lassen sich exportieren = können exportiert werden.',
      },
      {
        type: 'choice',
        prompt: 'Als ich in der Firma ankam, ___ der Vertrag bereits unterschrieben worden.',
        options: ['ist', 'wurde', 'hatte', 'war'],
        answer: 3,
        explanationRu: 'Действие произошло раньше другого действия в прошлом, поэтому нужен Plusquamperfekt: war + Partizip II + worden. Haben в пассиве не используется.',
      },
      {
        type: 'gap',
        prompt: 'Die neue Arbeitszeitregelung ist letzte Woche vom Betriebsrat genehmigt ___.',
        answers: ['worden'],
        explanationRu: 'Пассив Perfekt: ist + genehmigt + worden.',
      },
      {
        type: 'gap',
        prompt: 'Der Bericht ist bis Montag an die Geschäftsführung ___.',
        answers: ['weiterzuleiten'],
        hintRu: 'глагол weiterleiten; конструкция sein + zu',
        explanationRu: 'sein + zu + Infinitiv означает «нужно сделать». У отделяемого глагола zu ставится между приставкой и корнем: weiterzuleiten.',
      },
      {
        type: 'gap',
        prompt: 'Nachdem das Werk geschlossen ___ war, verloren 300 Menschen ihre Arbeit.',
        answers: ['worden'],
        explanationRu: 'Plusquamperfekt пассива: Partizip II + worden + war. В придаточном war стоит в конце.',
      },
      {
        type: 'gap',
        prompt: 'Diese Lösung ___ sich ohne großen Aufwand umsetzen.',
        answers: ['lässt'],
        explanationRu: 'Заменитель пассива sich lassen + Infinitiv: Die Lösung lässt sich umsetzen = kann umgesetzt werden.',
      },
      {
        type: 'order',
        words: ['Viele Arbeitsplätze', 'sind', 'durch', 'die Digitalisierung', 'verändert', 'worden.'],
        translationRu: 'Многие рабочие места изменились (были изменены) благодаря цифровизации.',
        explanationRu: 'В главном предложении sein на втором месте, Partizip II и worden — в конце предложения.',
      },
      {
        type: 'order',
        words: ['Ich weiß nicht,', 'ob', 'die Stelle', 'schon', 'ausgeschrieben', 'worden', 'ist.'],
        translationRu: 'Я не знаю, была ли уже объявлена вакансия.',
        explanationRu: 'В придаточном с ob порядок в конце: Partizip II + worden + ist (спрягаемый глагол последний).',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте в пассив Perfekt.',
        prompt: 'Man hat die Mitarbeiter über die Umstrukturierung informiert.',
        answers: [
          'Die Mitarbeiter sind über die Umstrukturierung informiert worden.',
          'Über die Umstrukturierung sind die Mitarbeiter informiert worden.',
        ],
        explanationRu: 'Прямое дополнение (die Mitarbeiter) становится подлежащим, глагол: sind + informiert + worden. «man» в пассиве исчезает.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените пассив с модальным глаголом конструкцией sich lassen.',
        prompt: 'Dieser Fehler kann leicht behoben werden.',
        answers: ['Dieser Fehler lässt sich leicht beheben.'],
        explanationRu: 'können + Passiv = sich lassen + Infinitiv: kann behoben werden → lässt sich beheben.',
      },
    ],
  },
  vocab: [
    {
      de: 'Digitalisierung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'цифровизация',
      example: 'Die Digitalisierung hat die Arbeitswelt in kurzer Zeit grundlegend verändert.',
      exampleRu: 'Цифровизация за короткое время коренным образом изменила мир труда.',
    },
    {
      de: 'Fachkräftemangel',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'нехватка квалифицированных кадров',
      example: 'Wegen des Fachkräftemangels finden viele Betriebe keine passenden Mitarbeiter.',
      exampleRu: 'Из-за нехватки квалифицированных кадров многие предприятия не могут найти подходящих сотрудников.',
    },
    {
      de: 'Arbeitsbedingung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'условие труда (чаще во мн. ч.)',
      example: 'Die Gewerkschaft fordert bessere Arbeitsbedingungen in der Pflege.',
      exampleRu: 'Профсоюз требует лучших условий труда в сфере ухода за больными.',
    },
    {
      de: 'Umstrukturierung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'реструктуризация',
      example: 'Im Zuge der Umstrukturierung sind zwei Abteilungen zusammengelegt worden.',
      exampleRu: 'В ходе реструктуризации два отдела были объединены.',
    },
    {
      de: 'Betriebsrat',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'производственный совет (представительство работников)',
      example: 'Der Betriebsrat vertritt die Interessen der Beschäftigten gegenüber der Geschäftsleitung.',
      exampleRu: 'Производственный совет представляет интересы работников перед руководством.',
    },
    {
      de: 'Weiterbildung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'повышение квалификации',
      example: 'Die Firma übernimmt die Kosten für die Weiterbildung.',
      exampleRu: 'Фирма берёт на себя расходы на повышение квалификации.',
    },
    {
      de: 'Vereinbarkeit',
      article: 'die',
      plural: '–',
      forms: 'die Vereinbarkeit von Beruf und Familie',
      pos: 'noun',
      ru: 'совместимость, возможность совмещать',
      example: 'Die Vereinbarkeit von Beruf und Familie ist für viele junge Eltern entscheidend.',
      exampleRu: 'Возможность совмещать работу и семью для многих молодых родителей имеет решающее значение.',
    },
    {
      de: 'Kündigungsfrist',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'срок предупреждения об увольнении',
      example: 'Die Kündigungsfrist beträgt in meinem Vertrag drei Monate.',
      exampleRu: 'Срок предупреждения об увольнении в моём договоре составляет три месяца.',
    },
    {
      de: 'Arbeitskraft',
      article: 'die',
      plural: '-¨e',
      pos: 'noun',
      ru: 'рабочая сила, работник',
      example: 'In der Logistik werden immer mehr Arbeitskräfte durch Roboter ersetzt.',
      exampleRu: 'В логистике всё больше работников заменяют роботами.',
    },
    {
      de: 'Belastung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'нагрузка',
      example: 'Die psychische Belastung am Arbeitsplatz hat deutlich zugenommen.',
      exampleRu: 'Психологическая нагрузка на рабочем месте заметно возросла.',
    },
    {
      de: 'befristet',
      pos: 'adj',
      ru: 'срочный, ограниченный по времени',
      example: 'Mein Arbeitsvertrag ist auf zwei Jahre befristet.',
      exampleRu: 'Мой трудовой договор заключён на два года.',
    },
    {
      de: 'ortsunabhängig',
      pos: 'adj',
      ru: 'независимый от места',
      example: 'Dank Laptop und Cloud kann sie völlig ortsunabhängig arbeiten.',
      exampleRu: 'Благодаря ноутбуку и облаку она может работать откуда угодно.',
    },
    {
      de: 'kündigen',
      forms: 'jdm. kündigen; kündigte, hat gekündigt',
      pos: 'verb',
      ru: 'увольнять(ся), расторгать договор',
      example: 'Er hat seinem Arbeitgeber zum Monatsende gekündigt.',
      exampleRu: 'Он подал работодателю заявление об увольнении с конца месяца.',
    },
    {
      de: 'einstellen',
      forms: 'stellt ein, stellte ein, hat eingestellt',
      pos: 'verb',
      ru: 'принимать на работу',
      example: 'Wir haben im Herbst fünf neue Entwicklerinnen eingestellt.',
      exampleRu: 'Осенью мы приняли на работу пять новых разработчиц.',
    },
    {
      de: 'ersetzen',
      forms: 'durch + Akk; ersetzte, hat ersetzt',
      pos: 'verb',
      ru: 'заменять (чем-либо)',
      example: 'Viele Routineaufgaben werden durch künstliche Intelligenz ersetzt.',
      exampleRu: 'Многие рутинные задачи заменяются искусственным интеллектом.',
    },
    {
      de: 'sich anpassen',
      forms: 'an + Akk; passt sich an, passte sich an, hat sich angepasst',
      pos: 'verb',
      ru: 'приспосабливаться (к чему-либо)',
      example: 'Ältere Beschäftigte müssen sich oft an neue Technologien anpassen.',
      exampleRu: 'Пожилым сотрудникам часто приходится приспосабливаться к новым технологиям.',
    },
    {
      de: 'automatisieren',
      forms: 'automatisierte, hat automatisiert',
      pos: 'verb',
      ru: 'автоматизировать',
      example: 'Die Buchhaltung ist in unserem Unternehmen weitgehend automatisiert worden.',
      exampleRu: 'Бухгалтерия в нашей компании была в значительной степени автоматизирована.',
    },
    {
      de: 'eine Stelle ausschreiben',
      forms: 'schreibt aus, schrieb aus, hat ausgeschrieben',
      pos: 'phrase',
      ru: 'объявить вакансию',
      example: 'Die Stelle ist bereits im Internet ausgeschrieben worden.',
      exampleRu: 'Вакансия уже опубликована в интернете.',
    },
    {
      de: 'Überstunden abbauen',
      pos: 'phrase',
      ru: 'отгулять сверхурочные часы',
      example: 'Im Sommer möchte ich endlich meine Überstunden abbauen.',
      exampleRu: 'Летом я хочу наконец отгулять свои сверхурочные.',
    },
    {
      de: 'in Teilzeit arbeiten',
      pos: 'phrase',
      ru: 'работать неполный рабочий день',
      example: 'Seit der Geburt ihres Sohnes arbeitet sie in Teilzeit.',
      exampleRu: 'С рождения сына она работает неполный рабочий день.',
    },
  ],
  listening: {
    title: 'Roboter im Lager – und niemand wird entlassen?',
    kind: 'monolog',
    text: `Willkommen zu „Arbeit heute“. In unserer Reihe über die Arbeitswelt im Wandel waren wir diesmal bei einem mittelständischen Logistikunternehmen in der Nähe von Kassel. Vor fünf Jahren arbeiteten hier noch rund 400 Menschen, die meisten im Lager. Seitdem ist vieles automatisiert worden: Pakete werden heute von Robotern sortiert, und die Lagerverwaltung läuft komplett digital.

Doch entlassen wurde kaum jemand. „Uns war klar, dass sich die Veränderungen nicht aufhalten lassen“, erzählt die Personalleiterin Sabine Kroll. „Deshalb sind schon früh alle Beschäftigten informiert und in die Planung einbezogen worden.“ Der Betriebsrat hatte zuvor eine Vereinbarung durchgesetzt: Niemand sollte wegen der Digitalisierung seinen Arbeitsplatz verlieren. Stattdessen wurden über 150 Mitarbeiterinnen und Mitarbeiter umgeschult. Wer früher Kisten getragen hat, überwacht heute die Anlagen oder plant die Routen der Lieferwagen.

Leicht war das nicht für alle. Der 58-jährige Lagerarbeiter Thomas Meier gibt zu, dass er anfangs skeptisch war. „Als die ersten Roboter geliefert worden waren, dachte ich: Jetzt ist es vorbei mit mir.“ Inzwischen hat er eine Weiterbildung abgeschlossen und ist für die Wartung der Maschinen zuständig. Die körperliche Belastung ist deutlich geringer geworden, sagt er, dafür muss er sich ständig an neue Software anpassen.

Allerdings gibt es auch Kritik. Neue Stellen werden fast nur noch befristet ausgeschrieben, und für einfache Tätigkeiten werden kaum noch Arbeitskräfte gesucht. Die Gewerkschaft warnt deshalb: Was in diesem Betrieb gelungen ist, ist nicht automatisch auf die ganze Branche übertragbar. Gerade kleine Firmen können sich teure Umschulungen oft nicht leisten.

Die Personalleiterin sieht das ähnlich, bleibt aber optimistisch: „Der Fachkräftemangel ist nur zu bewältigen, wenn wir in die eigenen Leute investieren.“

Das war unser Bericht aus Kassel. Nächste Woche geht es um die Frage, ob das Homeoffice die Zukunft der Büroarbeit ist.`,
    questions: [
      {
        question: 'Was hat sich in dem Unternehmen in den letzten fünf Jahren verändert?',
        options: [
          'Die Hälfte der Belegschaft wurde entlassen.',
          'Viele Arbeitsabläufe sind automatisiert worden.',
          'Das Unternehmen ist nach Kassel umgezogen.',
          'Das Lager wurde geschlossen.',
        ],
        answer: 1,
      },
      {
        question: 'Was hatte der Betriebsrat durchgesetzt?',
        options: [
          'Höhere Löhne für alle Lagerarbeiter.',
          'Dass keine Roboter angeschafft werden.',
          'Dass niemand wegen der Digitalisierung entlassen wird.',
          'Kürzere Arbeitszeiten für ältere Beschäftigte.',
        ],
        answer: 2,
      },
      {
        question: 'Wie reagierte Thomas Meier zunächst auf die Roboter?',
        options: [
          'Er hatte Angst, seinen Arbeitsplatz zu verlieren.',
          'Er war sofort begeistert.',
          'Er kündigte und suchte eine neue Stelle.',
          'Er beschwerte sich beim Betriebsrat.',
        ],
        answer: 0,
      },
      {
        question: 'Was kritisiert die Gewerkschaft?',
        options: [
          'Die Roboter sind zu teuer.',
          'Die Umschulungen sind schlecht organisiert.',
          'Die Weiterbildungen dauern zu lange.',
          'Das Modell lässt sich nicht einfach auf andere Firmen übertragen.',
        ],
        answer: 3,
      },
      {
        question: 'Was kann man aus der letzten Aussage der Personalleiterin schließen?',
        options: [
          'Sie will vor allem neue Fachkräfte aus dem Ausland anwerben.',
          'Sie hält die Weiterbildung der eigenen Mitarbeiter für den wichtigsten Weg.',
          'Sie glaubt, dass der Fachkräftemangel bald vorbei ist.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На онлайн-форуме журнала «Arbeit & Leben» обсуждается вопрос: «Нужно ли закрепить в законе право на работу из дома?» Напишите пост для форума, в котором вы аргументированно высказываете своё мнение.',
    taskDe: 'Im Online-Forum der Zeitschrift „Arbeit & Leben“ wird diskutiert: „Sollte es ein gesetzliches Recht auf Homeoffice geben?“ Schreiben Sie einen Forumsbeitrag, in dem Sie Ihre Meinung begründen.',
    points: [
      'Ihre eigenen Erfahrungen mit Homeoffice oder Büroarbeit',
      'Vorteile für Beschäftigte und Unternehmen',
      'Nachteile und Risiken (z. B. Isolation, ständige Erreichbarkeit)',
      'Ihre Meinung zu einem gesetzlichen Anspruch auf Homeoffice',
    ],
    minWords: 160,
    usefulPhrases: [
      'Meiner Erfahrung nach …',
      'Ein großer Vorteil besteht darin, dass …',
      'Man darf allerdings nicht vergessen, dass …',
      'In meinem Unternehmen ist vor Kurzem … eingeführt worden.',
      'Dieses Problem lässt sich lösen, indem …',
      'Alles in allem bin ich der Meinung, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Ваша фирма планирует заменить часть сотрудников службы поддержки чат-ботом. Вы представляете интересы коллектива и обсуждаете с руководителем отдела кадров, как провести эти изменения.',
    aiRole: 'Sie sind Frau Berger, Personalleiterin eines mittelgroßen Versicherungsunternehmens, und vertreten die Geschäftsleitung, die durch Automatisierung Kosten senken will. Sie sprechen natürliches Deutsch auf B2-Niveau. Stellen Sie kritische Nachfragen, bringen Sie Gegenargumente und verlangen Sie von Ihrem Gesprächspartner konkrete Vorschläge.',
    opener: 'Guten Tag, schön, dass Sie Zeit haben. Wie Sie sicher schon gehört haben, soll ein Teil unseres Kundenservice ab nächstem Jahr von einem Chatbot übernommen werden. Was sagen die Kolleginnen und Kollegen dazu?',
    tasksRu: [
      'Опишите опасения коллег.',
      'Расскажите, что уже было изменено в фирме за последние годы (пассив Perfekt).',
      'Предложите альтернативы: переобучение, неполный день, новые задачи (используйте sich lassen и прилагательные на -bar).',
      'Договоритесь о конкретных следующих шагах.',
    ],
    readAloud: [
      'In den letzten zehn Jahren sind in unserer Branche zahlreiche Arbeitsplätze automatisiert worden, ohne dass es zu Massenentlassungen gekommen ist.',
      'Viele Routineaufgaben lassen sich heute problemlos digital erledigen, doch der persönliche Kontakt zu den Kunden ist durch keine Software ersetzbar.',
      'Anträge auf eine Weiterbildung sind spätestens vier Wochen vor Kursbeginn bei der Personalabteilung einzureichen.',
    ],
  },
};
