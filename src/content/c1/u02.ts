import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-02',
  level: 'C1',
  order: 2,
  title: 'Arbeit und Karriere',
  titleRu: 'Работа и карьера',
  goalsRu: [
    'Использовать модальные частицы, чтобы говорить естественно, вежливо и эмоционально точно',
    'Распознавать в разговоре оттенки значения: упрёк, удивление, предположение, смирение',
    'Вести переговоры о зарплате и условиях работы, аргументированно отстаивая свои интересы',
    'Писать комментарий на актуальную тему из мира труда',
  ],
  grammar: {
    topic: 'Modalpartikeln im Gespräch',
    topicRu: 'Модальные частицы в разговорной речи',
    explanationRu: `**Модальные частицы** (ja, doch, eben, halt, mal, wohl, schon, eigentlich, denn) не меняют фактическое содержание высказывания, но передают отношение говорящего: удивление, упрёк, смягчение, уверенность. Без них немецкая речь звучит сухо и даже грубо. В русском языке есть похожие слова — *же, ведь, -ка, уж, видимо*, — но точного соответствия нет.

**Основные функции:**

- **ja** — общеизвестный факт или удивление: *Sie haben **ja** Erfahrung* (у вас ведь есть опыт); *Das ist **ja** eine Überraschung!*
- **doch** — напоминание, лёгкий упрёк, настойчивая просьба: *Das habe ich Ihnen **doch** gesagt!*; *Setzen Sie sich **doch**!*
- **eben / halt** — смирение, «так уж есть»: *Das ist **eben** so*. *halt* — более разговорное, южнонемецкое.
- **mal** — смягчает просьбу (≈ -ка): *Schauen Sie **mal**!*
- **wohl** — предположение (≈ видимо): *Er ist **wohl** krank.*
- **schon** — успокоение или уступка: *Das klappt **schon**.*; *Das stimmt **schon**, aber …*
- **eigentlich** — в вопросе переводит разговор на новую тему: *Wie alt sind Sie **eigentlich**?*
- **denn** — только в вопросах, делает их заинтересованными и мягкими: *Was ist **denn** passiert?*

**Позиция:** частицы стоят в **среднем поле** (Mittelfeld), обычно после личных местоимений и известной информации, но перед новой информацией и отрицанием nicht. Они **никогда не стоят на первом месте** и обычно безударны. При сочетании действует порядок: **ja → denn → doch → eben/halt → mal** (*Komm doch mal her!*).

**Типичные ошибки русскоговорящих:**

- ставят частицу в начало предложения, как «ведь» в русском: *Doch ich habe es gesagt* ✗;
- используют **denn** в утвердительных предложениях;
- переносят смысл «ведь» только на *ja*, хотя часто подходит *doch*;
- злоупотребляют частицами в письменной официальной речи — там они почти не используются;
- путают ударное *DOCH* («всё-таки») с безударной частицей *doch*.`,
    table: [
      ['Частица', 'Функция', 'Пример'],
      ['ja', 'известный факт, удивление', 'Das wissen Sie ja.'],
      ['doch', 'напоминание, упрёк, настойчивость', 'Fragen Sie doch die Chefin!'],
      ['eben / halt', 'смирение, неизбежность', 'Das ist halt so.'],
      ['mal', 'смягчение просьбы', 'Warten Sie mal kurz.'],
      ['wohl', 'предположение', 'Sie ist wohl schon weg.'],
      ['schon', 'успокоение, уступка', 'Das wird schon.'],
      ['denn', 'заинтересованный вопрос', 'Wo arbeiten Sie denn?'],
      ['eigentlich', 'смена темы в вопросе', 'Was machen Sie eigentlich beruflich?'],
    ],
    examples: [
      { de: 'Sie haben ja schon Erfahrung im Projektmanagement.', ru: 'У вас ведь уже есть опыт в управлении проектами.' },
      { de: 'Schicken Sie mir den Bericht doch bitte bis morgen.', ru: 'Пришлите мне, пожалуйста, отчёт до завтра.' },
      { de: 'Überstunden gehören in dieser Branche halt dazu.', ru: 'Сверхурочные в этой отрасли — дело обычное, что поделаешь.' },
      { de: 'Wie sind Sie denn auf unsere Stellenanzeige aufmerksam geworden?', ru: 'А как вы узнали о нашей вакансии?' },
      { de: 'Der Chef ist heute nicht im Büro, er ist wohl auf einer Konferenz.', ru: 'Начальника сегодня нет в офисе, он, видимо, на конференции.' },
      { de: 'Das wird schon klappen – Sie sind ja bestens vorbereitet.', ru: 'Всё получится — вы ведь прекрасно подготовлены.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Was machen Sie ___ beruflich? Das interessiert mich wirklich.',
        options: ['halt', 'ja', 'denn', 'eben'],
        answer: 2,
        explanationRu:
          '«denn» употребляется в вопросах и выражает искренний интерес. «halt», «ja» и «eben» в вопросительных предложениях этого типа не используются.',
      },
      {
        type: 'choice',
        prompt: 'Kommen Sie ___ herein, Frau Krüger, und nehmen Sie Platz!',
        options: ['doch', 'denn', 'wohl', 'eigentlich'],
        answer: 0,
        explanationRu:
          '«doch» в повелительном наклонении делает приглашение дружелюбным и настойчивым. «denn» и «eigentlich» здесь невозможны, «wohl» выражает предположение.',
      },
      {
        type: 'choice',
        prompt: 'Da kann man nichts machen – das ist ___ so in unserer Branche.',
        options: ['denn', 'eben', 'etwa'],
        answer: 1,
        explanationRu:
          '«eben» (или «halt») выражает смирение: так устроено, ничего не изменишь. «denn» и «etwa» как частицы употребляются только в вопросах.',
      },
      {
        type: 'choice',
        prompt: 'Welche Partikel drückt hier eine Vermutung aus? „Er ist ___ schon nach Hause gegangen – sein Büro ist dunkel.“',
        options: ['mal', 'denn', 'halt', 'wohl'],
        answer: 3,
        explanationRu:
          '«wohl» выражает предположение говорящего (≈ «видимо», «наверное»). Остальные частицы такого значения не имеют.',
      },
      {
        type: 'gap',
        prompt: 'Könnten Sie mir ___ kurz helfen? Der Drucker streikt schon wieder.',
        answers: ['mal', 'vielleicht', 'eben', 'bitte', 'bitte mal'],
        hintRu: 'частица, смягчающая просьбу (≈ «-ка»)',
        explanationRu:
          '«mal» смягчает просьбу и делает её менее обязывающей. Возможны также «vielleicht», «bitte» и северонемецкое «eben» («быстренько»).',
      },
      {
        type: 'gap',
        prompt: 'Sie wissen ___, dass die Frist morgen abläuft – also beeilen Sie sich!',
        answers: ['ja', 'doch'],
        hintRu: 'факт, известный обоим собеседникам',
        explanationRu:
          '«ja» указывает на то, что факт известен обоим («вы ведь знаете»); «doch» добавляет оттенок напоминания или лёгкого упрёка.',
      },
      {
        type: 'gap',
        prompt: 'Was hast du ___ gegen den neuen Teamleiter? Er ist doch ganz nett.',
        answers: ['denn', 'eigentlich', 'denn eigentlich'],
        hintRu: 'частица для вопроса',
        explanationRu:
          'В w-вопросе «denn» выражает заинтересованность (и лёгкое удивление), «eigentlich» — желание наконец выяснить суть. Обе частицы допустимы, возможна и их комбинация в порядке «denn eigentlich».',
      },
      {
        type: 'gap',
        prompt: 'Mach dir keine Sorgen, du wirst die Probezeit ___ bestehen.',
        answers: ['schon', 'sicher', 'bestimmt', 'schon noch'],
        hintRu: 'частица, выражающая успокоение',
        explanationRu:
          '«schon» в утверждении о будущем успокаивает собеседника: «всё будет хорошо». Наречия «sicher» и «bestimmt» тоже возможны, но частица звучит естественнее.',
      },
      {
        type: 'order',
        words: ['Das', 'habe', 'ich', 'Ihnen', 'doch', 'schon gestern', 'gesagt.'],
        translationRu: 'Я же вам это ещё вчера сказал.',
        explanationRu:
          'Частица стоит в среднем поле после личных местоимений («ich», «Ihnen»), но перед новой информацией («schon gestern»).',
      },
      {
        type: 'order',
        words: ['Kommen', 'Sie', 'doch', 'mal', 'in', 'mein Büro!'],
        translationRu: 'Зайдите-ка ко мне в кабинет!',
        explanationRu:
          'При сочетании частиц порядок фиксирован: «doch» стоит перед «mal». Обе частицы — после местоимения «Sie».',
      },
      {
        type: 'transform',
        instructionRu: 'Смягчите просьбу с помощью частиц «doch» и «mal».',
        prompt: 'Rufen Sie den Kunden an.',
        answers: ['Rufen Sie den Kunden doch mal an.', 'Rufen Sie doch mal den Kunden an.'],
        explanationRu:
          'Частицы стоят в среднем поле в порядке «doch mal». Известное дополнение («den Kunden») обычно предшествует частицам, но допустим и вариант с акцентом на дополнении.',
      },
      {
        type: 'transform',
        instructionRu: 'Выразите предположение с помощью модальной частицы вместо «Ich vermute, dass …».',
        prompt: 'Ich vermute, dass der Vertrag schon unterschrieben ist.',
        answers: ['Der Vertrag ist wohl schon unterschrieben.'],
        explanationRu:
          '«wohl» заменяет вводную конструкцию с «vermuten» и выражает предположение. Частица стоит в среднем поле перед «schon».',
      },
    ],
  },
  vocab: [
    {
      de: 'Führungskraft',
      article: 'die',
      plural: '-¨e',
      pos: 'noun',
      ru: 'руководитель, руководящий сотрудник',
      example: 'Gute Führungskräfte zeichnen sich vor allem durch ihre Fähigkeit aus, zuzuhören.',
      exampleRu: 'Хороших руководителей отличает прежде всего умение слушать.',
    },
    {
      de: 'Beförderung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'повышение по службе',
      example: 'Trotz ihrer hervorragenden Leistungen wurde sie bei der Beförderung übergangen.',
      exampleRu: 'Несмотря на отличные результаты, при повышении её обошли.',
    },
    {
      de: 'Gehaltsverhandlung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'переговоры о зарплате',
      example: 'Wer gut vorbereitet in die Gehaltsverhandlung geht, erzielt meist ein besseres Ergebnis.',
      exampleRu: 'Кто хорошо подготовлен к переговорам о зарплате, обычно добивается лучшего результата.',
    },
    {
      de: 'Fachkräftemangel',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'нехватка квалифицированных специалистов',
      example: 'Der Fachkräftemangel trifft insbesondere die Pflege und das Handwerk.',
      exampleRu: 'Нехватка специалистов особенно сильно затрагивает сферу ухода и ремёсла.',
    },
    {
      de: 'Vereinbarkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'совместимость (напр. семьи и работы)',
      example: 'Flexible Arbeitszeiten verbessern die Vereinbarkeit von Familie und Beruf erheblich.',
      exampleRu: 'Гибкий график значительно улучшает возможность совмещать семью и работу.',
    },
    {
      de: 'kündigen',
      forms: 'jdm. / etw. (Akk) kündigen',
      pos: 'verb',
      ru: 'увольнять; увольняться; расторгать (договор)',
      example: 'Nach zwölf Jahren im Unternehmen hat er überraschend gekündigt.',
      exampleRu: 'Проработав в компании двенадцать лет, он неожиданно уволился.',
    },
    {
      de: 'Arbeitszeugnis',
      article: 'das',
      plural: '-se',
      pos: 'noun',
      ru: 'характеристика с места работы',
      example: 'Die Formulierungen in einem Arbeitszeugnis folgen einem eigenen, verschlüsselten Code.',
      exampleRu: 'Формулировки в характеристике с места работы подчиняются особому зашифрованному коду.',
    },
    {
      de: 'Probezeit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'испытательный срок',
      example: 'Während der Probezeit kann das Arbeitsverhältnis mit einer Frist von zwei Wochen beendet werden.',
      exampleRu: 'Во время испытательного срока трудовые отношения можно прекратить с уведомлением за две недели.',
    },
    {
      de: 'sich durchsetzen',
      forms: 'setzt sich durch, setzte sich durch, hat sich durchgesetzt',
      pos: 'verb',
      ru: 'настоять на своём, утвердиться',
      example: 'Im Bewerbungsverfahren konnte sie sich gegen 200 Mitbewerber durchsetzen.',
      exampleRu: 'В конкурсе на должность она смогла обойти 200 других кандидатов.',
    },
    {
      de: 'delegieren',
      forms: 'etw. an jdn. delegieren',
      pos: 'verb',
      ru: 'делегировать, передавать (полномочия)',
      example: 'Wer nicht delegieren kann, wird als Führungskraft schnell an seine Grenzen stoßen.',
      exampleRu: 'Кто не умеет делегировать, как руководитель быстро упрётся в свой предел.',
    },
    {
      de: 'belastbar',
      pos: 'adj',
      ru: 'стрессоустойчивый, выносливый',
      example: 'In der Stellenausschreibung wird ein belastbarer und teamfähiger Kandidat gesucht.',
      exampleRu: 'В объявлении о вакансии ищут стрессоустойчивого кандидата, умеющего работать в команде.',
    },
    {
      de: 'eigenverantwortlich',
      pos: 'adj',
      ru: 'самостоятельный, под свою ответственность',
      example: 'In unserem Team arbeiten alle weitgehend eigenverantwortlich.',
      exampleRu: 'В нашей команде все работают в значительной степени самостоятельно.',
    },
    {
      de: 'Quereinsteiger',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'специалист, пришедший из другой профессии',
      example: 'Wegen des Personalmangels stellen viele Schulen inzwischen Quereinsteiger ein.',
      exampleRu: 'Из-за нехватки кадров многие школы теперь принимают на работу людей из других профессий.',
    },
    {
      de: 'Weiterbildung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'повышение квалификации',
      example: 'Das Unternehmen übernimmt die Kosten für eine berufsbegleitende Weiterbildung.',
      exampleRu: 'Компания оплачивает повышение квалификации без отрыва от работы.',
    },
    {
      de: 'ausschreiben',
      forms: 'schreibt aus, schrieb aus, hat ausgeschrieben',
      pos: 'verb',
      ru: 'объявлять (конкурс, вакансию)',
      example: 'Die Stelle wird intern und extern ausgeschrieben.',
      exampleRu: 'Вакансия объявляется как внутри компании, так и вне её.',
    },
    {
      de: 'Arbeitsbelastung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'рабочая нагрузка',
      example: 'Die dauerhaft hohe Arbeitsbelastung führt bei vielen Beschäftigten zu Erschöpfung.',
      exampleRu: 'Постоянно высокая нагрузка приводит у многих сотрудников к истощению.',
    },
    {
      de: 'Karriereleiter',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'карьерная лестница',
      example: 'Er ist die Karriereleiter in Rekordzeit hinaufgeklettert.',
      exampleRu: 'Он поднялся по карьерной лестнице в рекордные сроки.',
    },
    {
      de: 'auf der Stelle treten',
      forms: 'tritt, trat, hat getreten',
      pos: 'phrase',
      ru: 'топтаться на месте',
      example: 'Seit Jahren trete ich beruflich auf der Stelle – es wird Zeit für etwas Neues.',
      exampleRu: 'Уже много лет я топчусь на месте в профессиональном плане — пора что-то менять.',
    },
    {
      de: 'sich einen Namen machen',
      forms: 'als + Nom / mit + Dat',
      pos: 'phrase',
      ru: 'сделать себе имя',
      example: 'Sie hat sich als Expertin für Arbeitsrecht einen Namen gemacht.',
      exampleRu: 'Она сделала себе имя как эксперт по трудовому праву.',
    },
    {
      de: 'ein Händchen für etwas haben',
      pos: 'phrase',
      ru: 'иметь талант, чутьё к чему-либо',
      example: 'Unsere neue Kollegin hat ein Händchen für schwierige Kunden.',
      exampleRu: 'Наша новая коллега умеет находить подход к трудным клиентам.',
    },
  ],
  listening: {
    title: 'Radiointerview: Quiet Quitting – Warnsignal oder Trend?',
    kind: 'dialog',
    text: `A: Herr Brandt, man hört ja derzeit überall von „Quiet Quitting“. Was ist denn eigentlich damit gemeint?
B: Na ja, gemeint ist, dass Beschäftigte nur noch das tun, was im Arbeitsvertrag steht – nicht mehr und nicht weniger. Sie kündigen also nicht wirklich, sondern ziehen sich innerlich zurück.
A: Das ist doch aber kein neues Phänomen, oder? Eine innere Kündigung gab es schon immer.
B: Da haben Sie völlig recht. Neu ist eben nur, dass vor allem jüngere Leute ganz offen darüber sprechen, zum Beispiel in den sozialen Medien. Früher hat man halt still vor sich hin gelitten.
A: Viele Führungskräfte sind darüber ja ziemlich empört. Sie sprechen von mangelnder Leistungsbereitschaft.
B: Das höre ich oft, aber ich halte diesen Vorwurf für zu kurz gegriffen. Wenn jemand jahrelang Überstunden macht, ohne dass das anerkannt wird, und bei jeder Beförderung übergangen wird, dann ist es doch nachvollziehbar, dass er irgendwann keine Lust mehr hat.
A: Sie sehen die Verantwortung also eher bei den Unternehmen?
B: Zumindest zu einem großen Teil, ja. Angesichts des Fachkräftemangels können es sich Firmen eigentlich gar nicht leisten, ihre Leute so zu verheizen. Wer gute Mitarbeitende halten will, muss schon etwas bieten: echte Entwicklungsperspektiven, Weiterbildung, eine vernünftige Vereinbarkeit von Familie und Beruf.
A: Und was raten Sie jemandem, der merkt, dass er beruflich auf der Stelle tritt?
B: Zunächst mal: ehrlich Bilanz ziehen. Liegt es an der Arbeitsbelastung, an der Führungskraft oder am Job selbst? Dann sollte man das Gespräch suchen. Viele trauen sich ja nicht, ihre Wünsche offen anzusprechen. Dabei sind Vorgesetzte oft gar nicht so unflexibel, wie man denkt.
A: Und wenn das Gespräch nichts bringt?
B: Dann muss man sich halt nach etwas Neuem umsehen. Der Arbeitsmarkt ist für qualifizierte Leute momentan ja so günstig wie selten. Sogar Quereinsteiger haben gute Chancen.
A: Eine letzte Frage: Ist Quiet Quitting denn nun ein Problem oder eher eine gesunde Reaktion?
B: Kurzfristig mag es eine Art Selbstschutz sein. Auf Dauer macht es aber niemanden glücklich, acht Stunden am Tag nur Dienst nach Vorschrift zu leisten. Man sollte die Entwicklung also wohl eher als Warnsignal verstehen – und zwar für beide Seiten.`,
    questions: [
      {
        question: 'Was versteht man laut Herrn Brandt unter „Quiet Quitting“?',
        options: [
          'eine Kündigung ohne Angabe von Gründen',
          'das Erfüllen ausschließlich der vertraglich festgelegten Pflichten',
          'den Wechsel in einen völlig anderen Beruf',
          'eine besondere Form des Streiks',
        ],
        answer: 1,
      },
      {
        question: 'Was ist nach Ansicht des Coaches neu an diesem Phänomen?',
        options: [
          'dass es vor allem ältere Beschäftigte betrifft',
          'dass Unternehmen es gezielt fördern',
          'dass offen darüber gesprochen wird',
          'dass es inzwischen gesetzlich geregelt ist',
        ],
        answer: 2,
      },
      {
        question: 'Wie beurteilt Herr Brandt den Vorwurf mangelnder Leistungsbereitschaft?',
        options: [
          'Er hält ihn für zu einseitig.',
          'Er stimmt ihm uneingeschränkt zu.',
          'Er hält ihn für wissenschaftlich belegt.',
          'Er äußert sich nicht dazu.',
        ],
        answer: 0,
      },
      {
        question: 'Was empfiehlt der Coach als ersten Schritt?',
        options: [
          'sofort zu kündigen',
          'eine Weiterbildung zu beginnen',
          'einen Anwalt einzuschalten',
          'die eigene Situation ehrlich zu analysieren',
        ],
        answer: 3,
      },
      {
        question: 'Welches Fazit zieht Herr Brandt am Ende?',
        options: [
          'Quiet Quitting sei eine dauerhafte Lösung für Überlastung.',
          'Quiet Quitting sei ein Warnsignal für Beschäftigte und Arbeitgeber.',
          'Quiet Quitting sei ein reines Medienphänomen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu:
      'Ваша компания обсуждает введение четырёхдневной рабочей недели при сохранении зарплаты. Напишите комментарий для корпоративного журнала, в котором вы выражаете и обосновываете свою позицию.',
    taskDe:
      'In Ihrem Unternehmen wird über die Einführung einer Vier-Tage-Woche bei vollem Lohnausgleich diskutiert. Schreiben Sie einen Kommentar für die Mitarbeiterzeitschrift.',
    points: [
      'Beschreiben Sie kurz den Anlass der Diskussion.',
      'Erläutern Sie mögliche Vorteile für Beschäftigte und Unternehmen.',
      'Gehen Sie auf Risiken und Bedenken ein (z. B. Arbeitsverdichtung, Kundenerreichbarkeit).',
      'Formulieren Sie eine klare eigene Position und einen konkreten Vorschlag.',
    ],
    minWords: 220,
    usefulPhrases: [
      'Kaum ein Thema wird derzeit so leidenschaftlich diskutiert wie …',
      'Befürworter verweisen gern darauf, dass …',
      'Man darf allerdings nicht außer Acht lassen, dass …',
      'Es wäre naiv zu glauben, dass …',
      'Meines Erachtens greift dieses Argument zu kurz, denn …',
      'Ein möglicher Kompromiss könnte darin bestehen, dass …',
      'Unterm Strich überwiegen für mich …',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы работаете в компании два года и пришли к начальнику отдела кадров, чтобы договориться о повышении зарплаты и возможности частично работать из дома. Используйте модальные частицы, чтобы говорить вежливо, но настойчиво.',
    aiRole:
      'Sie sind Dr. Claudia Neumann, Personalleiterin eines mittelständischen Maschinenbauunternehmens. Sie sprechen auf C1-Niveau, natürlich und idiomatisch, mit vielen Modalpartikeln. Sie sind freundlich, aber hart in der Sache: Sie weisen auf das knappe Budget hin und verlangen für jede Forderung eine überzeugende Begründung.',
    opener:
      'Schön, dass Sie da sind! Setzen Sie sich doch. Sie wollten ja mit mir über Ihre Situation sprechen – worum geht es denn genau?',
    tasksRu: [
      'Объясните цель встречи и перечислите свои профессиональные достижения.',
      'Назовите желаемую сумму и обоснуйте её (рынок, нагрузка, ответственность).',
      'Отреагируйте на возражения, используя частицы doch, ja, schon, eben.',
      'Предложите компромисс (например, премию, обучение, удалённую работу).',
    ],
    readAloud: [
      'Ich habe ja in den letzten zwei Jahren eigenverantwortlich mehrere Projekte geleitet, die alle erfolgreich abgeschlossen wurden.',
      'Angesichts des Fachkräftemangels sollten Unternehmen doch alles daransetzen, belastbare und motivierte Mitarbeitende langfristig zu halten.',
      'Wer beruflich auf der Stelle tritt, sollte sich schon fragen, ob eine Weiterbildung oder ein Wechsel nicht der bessere Weg wäre.',
    ],
  },
};
