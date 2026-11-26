import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-17',
  level: 'B2',
  order: 17,
  title: 'Medien & Digitalisierung',
  titleRu: 'СМИ и цифровизация',
  goalsRu: [
    'Понимать интервью, статьи и дискуссии о цифровых медиах, смартфонах и данных.',
    'Уверенно употреблять глаголы, существительные и прилагательные с устойчивыми предлогами (Interesse an, abhängig von, Kritik an).',
    'Правильно использовать местоименные наречия (darauf, davon, worüber) и корреляты перед придаточными (Es hängt davon ab, ob …).',
    'Аргументированно высказываться о плюсах и минусах цифровизации в письменной и устной форме.',
  ],
  grammar: {
    topic: 'Verben, Nomen und Adjektive mit Präpositionen; Präpositionaladverbien und Korrelate',
    topicRu: 'Глаголы, существительные и прилагательные с предлогами; местоименные наречия и корреляты',
    explanationRu: `Многие немецкие **глаголы, существительные и прилагательные** требуют определённого предлога, а предлог — определённого падежа. Их нужно учить **целым блоком**: *sich beschäftigen **mit** + Dat*, *das Interesse **an** + Dat*, *abhängig **von** + Dat*, *warten **auf** + Akk*.

**Существительное и прилагательное часто сохраняют предлог глагола:** *teilnehmen an → die Teilnahme an*, *reagieren auf → die Reaktion auf*, *abhängen von → abhängig von*. Но бывают сюрпризы: *sich interessieren **für***, но *das Interesse **an***; *kritisieren + Akk*, но *die Kritik **an***; *vertrauen + Dat*, но *das Vertrauen **in** + Akk*.

**Предлоги auf и über** в переносном значении почти всегда требуют **Akkusativ**: *sich freuen auf **den** Urlaub*, *sprechen über **das** Problem*. Исключения запоминайте отдельно: *bestehen auf + Dat*, *beruhen auf + Dat*.

**Местоименные наречия.** Если речь идёт о предмете или ситуации, предлог заменяют на **da(r)- + предлог**, в вопросе — **wo(r)- + предлог**: *Worüber sprecht ihr? — Darüber.* **-r-** вставляется перед гласной: dar**auf**, wor**an**. О людях так не говорят: *An wen denkst du? — An **sie**.*

**Корреляты.** Если дополнение выражено придаточным или инфинитивом, в главном предложении стоит da(r)-слово — как русское «**от того**, что…», «**на том**, чтобы…»: *Es hängt **davon** ab, ob …*; *Wir haben uns **darauf** geeinigt, die Daten zu löschen.* При некоторых глаголах коррелят обязателен (*abhängen von, bestehen auf, es kommt an auf*), при других возможен, но не нужен (*sich freuen (darüber), dass …*).

**Типичные ошибки русскоговорящих:**

- калька с русского: *denken über* («думать о») вместо **denken an**; *teilnehmen in* вместо **teilnehmen an**; *Angst von* вместо **Angst vor**;
- неверный падеж: *sich freuen auf dem Wochenende* — правильно **auf das (aufs) Wochenende**;
- пропуск коррелята: *Es hängt ab, ob …* — правильно **Es hängt davon ab, ob …**;
- da-слово для людей: *Ich verlasse mich darauf* (о деле), но **auf ihn** (о человеке);
- забытое -r-: *daauf, woüber* — правильно **darauf, worüber**.`,
    table: [
      ['Verb', 'Nomen', 'Adjektiv / Partizip'],
      ['sich interessieren für + Akk', 'das Interesse an + Dat', 'interessiert an + Dat'],
      ['abhängen von + Dat', 'die Abhängigkeit von + Dat', 'abhängig von + Dat'],
      ['kritisieren + Akk', 'die Kritik an + Dat', 'kritisch gegenüber + Dat'],
      ['reagieren auf + Akk', 'die Reaktion auf + Akk', '—'],
      ['sich gewöhnen an + Akk', 'die Gewöhnung an + Akk', 'gewöhnt an + Akk'],
      ['sich begeistern für + Akk', 'die Begeisterung für + Akk', 'begeistert von + Dat'],
    ],
    examples: [
      {
        de: 'Das Interesse an Nachrichtenpodcasts ist in den letzten Jahren deutlich gestiegen.',
        ru: 'Интерес к новостным подкастам в последние годы заметно вырос.',
      },
      {
        de: 'Viele Jugendliche sind abhängig von der Anerkennung in sozialen Netzwerken.',
        ru: 'Многие подростки зависят от признания в социальных сетях.',
      },
      {
        de: 'Ob eine Quelle seriös ist, hängt vor allem davon ab, wer dahintersteht.',
        ru: 'Серьёзен ли источник, зависит прежде всего от того, кто за ним стоит.',
      },
      {
        de: 'Die Datenschützer haben darauf hingewiesen, dass die App Standortdaten speichert.',
        ru: 'Специалисты по защите данных указали на то, что приложение сохраняет данные о местоположении.',
      },
      {
        de: 'Worüber hat sich die Redaktion beschwert? – Über die fehlende Transparenz der Plattform.',
        ru: 'На что пожаловалась редакция? – На отсутствие прозрачности у платформы.',
      },
      {
        de: 'Wir haben uns darauf geeinigt, abends keine dienstlichen E-Mails mehr zu lesen.',
        ru: 'Мы договорились больше не читать служебные письма по вечерам.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Das Interesse ___ Podcasts ist in den letzten Jahren stark gestiegen.',
        options: ['für', 'an', 'auf', 'über'],
        answer: 1,
        explanationRu: 'Глагол — sich interessieren für, но существительное — das Interesse an + Dativ. Это типичная ловушка.',
      },
      {
        type: 'choice',
        prompt: 'Wir haben lange ___ diskutiert, ob die neue App wirklich sicher ist.',
        options: ['davon', 'worüber', 'darüber', 'über es'],
        answer: 2,
        explanationRu: 'diskutieren über + Akk. Перед придаточным с ob стоит коррелят da(r)- + предлог: darüber. Конструкция *über es* невозможна.',
      },
      {
        type: 'choice',
        prompt: '„___ denkst du gerade?“ – „An meine Schwester. Sie hat heute Geburtstag.“',
        options: ['Woran', 'An wen', 'Worauf', 'Wovon'],
        answer: 1,
        explanationRu: 'denken an + Akk. Ответ — человек (meine Schwester), поэтому вопрос строится с предлогом и вопросительным местоимением: An wen? Woran спрашивает о предмете.',
      },
      {
        type: 'choice',
        prompt: 'Viele Eltern sind skeptisch ___ der Nutzung von Tablets im Unterricht.',
        options: ['über', 'von', 'gegenüber', 'für'],
        answer: 2,
        explanationRu: 'skeptisch gegenüber + Dativ («скептически настроенный по отношению к …»). gegenüber может стоять и после существительного, но с прилагательным skeptisch обычно предшествует ему.',
      },
      {
        type: 'gap',
        prompt: 'Die Qualität der Antworten hängt stark ___ ab, wie präzise man die Frage formuliert.',
        answers: ['davon'],
        hintRu: 'abhängen von + Dat → коррелят',
        explanationRu: 'abhängen von. Перед придаточным (wie …) нужен обязательный коррелят davon: Es hängt davon ab, wie … (= «зависит от того, как …»).',
      },
      {
        type: 'gap',
        prompt: 'Die Kritik ___ der Plattform wird immer lauter, weil sie Falschmeldungen kaum löscht.',
        answers: ['an'],
        hintRu: 'die Kritik … + Dat',
        explanationRu: 'Глагол kritisieren управляет Akkusativ без предлога, но существительное die Kritik требует an + Dativ: die Kritik an der Plattform.',
      },
      {
        type: 'gap',
        prompt: 'Verbraucherschützer warnen ___, persönliche Daten leichtfertig im Netz preiszugeben.',
        answers: ['davor'],
        hintRu: 'warnen vor + Dat → коррелят',
        explanationRu: 'warnen vor + Dativ. Перед инфинитивным оборотом стоит коррелят davor («предостерегают от того, чтобы …»).',
      },
      {
        type: 'gap',
        prompt: 'Seit Corona sind viele Selbstständige ___ angewiesen, dass ihr Internet zuverlässig funktioniert.',
        answers: ['darauf'],
        hintRu: 'angewiesen auf + Akk → коррелят',
        explanationRu: 'angewiesen sein auf + Akk («зависеть от, нуждаться в»). Предлог начинается с гласной, поэтому da + r + auf = darauf.',
      },
      {
        type: 'order',
        words: ['Es', 'kommt', 'vor allem', 'darauf', 'an,', 'wie', 'man', 'die Medien', 'nutzt.'],
        translationRu: 'Прежде всего важно то, как человек пользуется медиа.',
        explanationRu: 'Устойчивое выражение es kommt auf + Akk an («дело в том, …»). Коррелят darauf стоит в главном предложении, отделяемая приставка an — в конце.',
      },
      {
        type: 'order',
        words: ['Die Schule', 'hat', 'die Eltern', 'darauf', 'aufmerksam gemacht,', 'dass', 'Klassenchats', 'nicht privat', 'sind.'],
        translationRu: 'Школа обратила внимание родителей на то, что классные чаты не являются частными.',
        explanationRu: 'jemanden auf + Akk aufmerksam machen. Коррелят darauf указывает на придаточное с dass, глагол в придаточном — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Объедините предложения с помощью коррелята и придаточного с dass.',
        prompt: 'Die Firma besteht auf etwas: Alle Mitarbeiter sollen ein sicheres Passwort benutzen.',
        answers: [
          'Die Firma besteht darauf, dass alle Mitarbeiter ein sicheres Passwort benutzen.',
          'Die Firma besteht darauf, dass alle Mitarbeiter ein sicheres Passwort benutzen sollen.',
        ],
        explanationRu: 'bestehen auf («настаивать на») требует обязательного коррелята: darauf, dass … Модальный глагол sollen можно опустить — его значение уже есть в bestehen.',
      },
      {
        type: 'transform',
        instructionRu: 'Объедините предложения с помощью коррелята и инфинитивного оборота с zu.',
        prompt: 'Sie hat sich an etwas gewöhnt: Sie liest die Nachrichten nur noch auf dem Handy.',
        answers: ['Sie hat sich daran gewöhnt, die Nachrichten nur noch auf dem Handy zu lesen.'],
        explanationRu: 'sich gewöhnen an + Akk → коррелят daran. Подлежащее одинаковое, поэтому вместо dass-предложения используем инфинитив с zu.',
      },
    ],
  },
  vocab: [
    {
      de: 'Misstrauen',
      article: 'das',
      plural: '–',
      forms: 'gegenüber + Dat',
      pos: 'noun',
      ru: 'недоверие (к)',
      example: 'Das Misstrauen gegenüber etablierten Medien ist in den letzten Jahren gewachsen.',
      exampleRu: 'Недоверие к традиционным СМИ за последние годы выросло.',
    },
    {
      de: 'Kritik',
      article: 'die',
      plural: '-en',
      forms: 'an + Dat',
      pos: 'noun',
      ru: 'критика (чего-л.)',
      example: 'Die Kritik an der Löschpraxis des Netzwerks wird immer lauter.',
      exampleRu: 'Критика практики удаления контента в этой сети становится всё громче.',
    },
    {
      de: 'Begeisterung',
      article: 'die',
      plural: '–',
      forms: 'für + Akk',
      pos: 'noun',
      ru: 'воодушевление, восторг, увлечение (чем-л.)',
      example: 'Die anfängliche Begeisterung für die neue App ließ schnell nach.',
      exampleRu: 'Первоначальный восторг от нового приложения быстро прошёл.',
    },
    {
      de: 'Auswirkung',
      article: 'die',
      plural: '-en',
      forms: 'auf + Akk',
      pos: 'noun',
      ru: 'воздействие, последствие (для)',
      example: 'Die Studie untersucht die Auswirkungen der Bildschirmnutzung auf den Schlaf.',
      exampleRu: 'Исследование изучает влияние использования экранов на сон.',
    },
    {
      de: 'Reaktion',
      article: 'die',
      plural: '-en',
      forms: 'auf + Akk',
      pos: 'noun',
      ru: 'реакция (на)',
      example: 'Die Reaktionen auf das umstrittene Video waren überwiegend negativ.',
      exampleRu: 'Реакция на скандальное видео была преимущественно отрицательной.',
    },
    {
      de: 'Zugriff',
      article: 'der',
      plural: '-e',
      forms: 'auf + Akk',
      pos: 'noun',
      ru: 'доступ (к данным, системе)',
      example: 'Die App verlangt Zugriff auf Kamera, Mikrofon und Kontakte.',
      exampleRu: 'Приложение требует доступа к камере, микрофону и контактам.',
    },
    {
      de: 'Kontrolle',
      article: 'die',
      plural: '-n',
      forms: 'über + Akk',
      pos: 'noun',
      ru: 'контроль (над)',
      example: 'Viele Nutzer haben längst die Kontrolle über ihre eigenen Daten verloren.',
      exampleRu: 'Многие пользователи давно потеряли контроль над собственными данными.',
    },
    {
      de: 'skeptisch',
      forms: 'gegenüber + Dat',
      pos: 'adj',
      ru: 'скептический, настроенный скептически (по отношению к)',
      example: 'Ältere Menschen sind digitalen Behördengängen gegenüber oft skeptisch.',
      exampleRu: 'Пожилые люди часто скептически относятся к цифровому общению с ведомствами.',
    },
    {
      de: 'vertraut',
      forms: 'mit + Dat',
      pos: 'adj',
      ru: 'знакомый, хорошо знающий (что-л.)',
      example: 'Die neuen Kolleginnen sind mit dem Redaktionssystem noch nicht vertraut.',
      exampleRu: 'Новые коллеги ещё не освоились с редакционной системой.',
    },
    {
      de: 'Einflussnahme',
      article: 'die',
      plural: '-n',
      forms: 'auf + Akk',
      pos: 'noun',
      ru: 'вмешательство, оказание влияния (на)',
      example: 'Die Behörden ermitteln wegen möglicher Einflussnahme auf die Wahl über gefälschte Konten.',
      exampleRu: 'Власти расследуют возможное вмешательство в выборы через поддельные аккаунты.',
    },
    {
      de: 'Warnung',
      article: 'die',
      plural: '-en',
      forms: 'vor + Dat',
      pos: 'noun',
      ru: 'предупреждение (о)',
      example: 'Trotz zahlreicher Warnungen vor Betrugs-SMS fallen viele Menschen darauf herein.',
      exampleRu: 'Несмотря на многочисленные предупреждения о мошеннических СМС, многие на них попадаются.',
    },
    {
      de: 'Forderung',
      article: 'die',
      plural: '-en',
      forms: 'nach + Dat',
      pos: 'noun',
      ru: 'требование (чего-л.)',
      example: 'Die Forderung nach strengeren Regeln für Plattformen findet breite Unterstützung.',
      exampleRu: 'Требование ввести более строгие правила для платформ находит широкую поддержку.',
    },
    {
      de: 'aufrufen',
      forms: 'zu + Dat; ruft auf, rief auf, hat aufgerufen',
      pos: 'verb',
      ru: 'призывать (к)',
      example: 'Die Organisation ruft zu einem bewussteren Umgang mit dem Smartphone auf.',
      exampleRu: 'Организация призывает к более осознанному обращению со смартфоном.',
    },
    {
      de: 'Stellung nehmen',
      forms: 'zu + Dat; nimmt Stellung, nahm Stellung, hat Stellung genommen',
      pos: 'phrase',
      ru: 'высказать позицию, прокомментировать (что-л.)',
      example: 'Der Konzern wollte zu den Vorwürfen zunächst nicht Stellung nehmen.',
      exampleRu: 'Концерн сначала не захотел комментировать обвинения.',
    },
    {
      de: 'aufmerksam machen',
      forms: 'jdn. auf + Akk; macht aufmerksam, machte aufmerksam, hat aufmerksam gemacht',
      pos: 'phrase',
      ru: 'обратить чьё-л. внимание (на)',
      example: 'Die Kampagne macht Jugendliche auf die Gefahren von Cybermobbing aufmerksam.',
      exampleRu: 'Кампания обращает внимание подростков на опасность кибербуллинга.',
    },
    {
      de: 'eingehen',
      forms: 'auf + Akk; geht ein, ging ein, ist eingegangen',
      pos: 'verb',
      ru: 'подробно остановиться (на), отреагировать (на)',
      example: 'Leider ist die Ministerin auf meine Frage gar nicht eingegangen.',
      exampleRu: 'К сожалению, министр вообще не ответила по существу на мой вопрос.',
    },
    {
      de: 'übereinstimmen',
      forms: 'mit + Dat; stimmt überein, stimmte überein, hat übereingestimmt',
      pos: 'verb',
      ru: 'совпадать (с), соглашаться (с)',
      example: 'Die Zahlen im Artikel stimmen nicht mit den offiziellen Daten überein.',
      exampleRu: 'Цифры в статье не совпадают с официальными данными.',
    },
    {
      de: 'Plattform',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'платформа (интернет-сервис)',
      example: 'Auf der Plattform werden täglich Millionen Videos hochgeladen.',
      exampleRu: 'На платформу ежедневно загружаются миллионы видео.',
    },
    {
      de: 'digitale Kluft',
      pos: 'phrase',
      ru: 'цифровое неравенство',
      example: 'Die digitale Kluft zwischen Stadt und Land ist noch immer groß.',
      exampleRu: 'Цифровое неравенство между городом и деревней всё ещё велико.',
    },
    {
      de: 'Dauererreichbarkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'постоянная доступность (на связи)',
      example: 'Die Dauererreichbarkeit nach Feierabend führt bei vielen Beschäftigten zu Stress.',
      exampleRu: 'Необходимость быть всегда на связи после работы вызывает у многих сотрудников стресс.',
    },
  ],
  listening: {
    title: 'Radiointerview: Handyverbot an Schulen?',
    kind: 'dialog',
    text: `A: Willkommen zu „Bildung heute“. Bei mir im Studio ist die Medienpädagogin Dr. Sabine Kern. Frau Kern, immer mehr Schulen verbieten Smartphones. Was halten Sie davon?
B: Ich verstehe, warum viele Schulen darüber nachdenken. Lehrkräfte klagen darüber, dass die Schüler in den Pausen nur noch auf ihre Bildschirme starren. Trotzdem bin ich skeptisch gegenüber einem kompletten Verbot.
A: Warum? Studien zeigen doch, dass die Konzentration darunter leidet.
B: Das stimmt teilweise. Aber ein Verbot allein löst das Problem nicht. Die Jugendlichen nutzen ihr Handy ja nach der Schule weiter, oft bis spät in die Nacht. Es kommt also darauf an, ihnen einen bewussten Umgang beizubringen.
A: Wie könnte das konkret aussehen?
B: An einer Schule in Kassel, die wir begleitet haben, haben Schüler, Eltern und Lehrkräfte gemeinsam Regeln erarbeitet. Im Unterricht bleiben die Geräte im Rucksack, außer wenn die Lehrerin ausdrücklich dazu auffordert, etwas zu recherchieren. In der Mittagspause gibt es eine handyfreie Zone und eine Zone, in der man das Handy benutzen darf.
A: Und hat das funktioniert?
B: Erstaunlich gut. Die Schüler haben sich an die Regeln gehalten, weil sie selbst daran beteiligt waren. Viele haben sogar erzählt, dass sie sich in der handyfreien Zone wieder mehr miteinander unterhalten.
A: Eltern fürchten aber auch Cybermobbing in Klassenchats. Kann die Schule davor schützen?
B: Nur zum Teil. Die meisten Konflikte entstehen am Abend, also außerhalb der Schule. Deshalb ist es so wichtig, dass die Eltern sich dafür interessieren, was ihre Kinder im Netz erleben – und zwar ohne sie zu kontrollieren, sondern im Gespräch.
A: Was raten Sie also den Schulen?
B: Nicht einfach verbieten, sondern das Thema in den Unterricht holen. Wer versteht, wie Algorithmen um unsere Aufmerksamkeit kämpfen, kann sich besser davor schützen.
A: Frau Kern, vielen Dank für das Gespräch.`,
    questions: [
      {
        question: 'Wie steht Dr. Kern zu einem vollständigen Handyverbot an Schulen?',
        options: [
          'Sie hält es für die beste Lösung.',
          'Sie ist eher skeptisch.',
          'Sie hat dazu keine Meinung.',
          'Sie fordert ein Verbot auch zu Hause.',
        ],
        answer: 1,
      },
      {
        question: 'Warum reicht ein Verbot laut Dr. Kern nicht aus?',
        options: [
          'Weil die Jugendlichen das Handy nach der Schule weiter nutzen.',
          'Weil Lehrkräfte das Verbot nicht kontrollieren können.',
          'Weil Smartphones für den Unterricht unverzichtbar sind.',
          'Weil die Eltern dagegen klagen.',
        ],
        answer: 0,
      },
      {
        question: 'Was war das Besondere an den Regeln in der Kasseler Schule?',
        options: [
          'Handys waren auf dem ganzen Schulgelände verboten.',
          'Die Regeln wurden vom Schulministerium vorgegeben.',
          'Schüler, Eltern und Lehrkräfte haben sie zusammen entwickelt.',
          'Die Schüler durften das Handy im Unterricht frei nutzen.',
        ],
        answer: 2,
      },
      {
        question: 'Was sagt Dr. Kern über Cybermobbing?',
        options: [
          'Die Schule kann es vollständig verhindern.',
          'Es kommt in Klassenchats kaum vor.',
          'Eltern sollten die Handys ihrer Kinder regelmäßig kontrollieren.',
          'Es passiert meistens abends außerhalb der Schule.',
        ],
        answer: 3,
      },
      {
        question: 'Was empfiehlt Dr. Kern den Schulen?',
        options: [
          'Smartphones in den Pausen zu verbieten.',
          'Den Umgang mit Medien im Unterricht zu thematisieren.',
          'Mehr Tablets anzuschaffen.',
          'Klassenchats zu verbieten.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На форуме журнала о работе и жизни обсуждается тема «Всегда на связи — даже после работы?». Напишите свой комментарий (Forumsbeitrag).',
    taskDe: 'In einem Onlineforum wird diskutiert: „Immer erreichbar – auch nach Feierabend?“ Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Ihre eigenen Erfahrungen mit Erreichbarkeit nach der Arbeit oder dem Studium',
      'Gründe, warum viele Menschen ständig online sind',
      'Auswirkungen der Dauererreichbarkeit auf Gesundheit und Beziehungen',
      'Ihre Vorschläge für einen gesünderen Umgang mit digitalen Medien',
    ],
    minWords: 160,
    usefulPhrases: [
      'Ich beschäftige mich schon länger mit der Frage, ob …',
      'Meiner Erfahrung nach hängt viel davon ab, wie …',
      'Viele Menschen haben Angst davor, etwas zu verpassen.',
      'Das wirkt sich negativ auf … aus.',
      'Ich möchte vor allem darauf hinweisen, dass …',
      'Man sollte sich darauf einigen, …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы входите в родительский совет школы. Обсуждаете с другим членом совета предложение: со следующего года каждый ученик с 5-го класса получает планшет, а бумажные учебники отменяются. Собеседник в восторге от этой идеи. Найдите вместе компромисс.',
    aiRole: 'Sie sind Herr Brandt, Vater von zwei Kindern und Mitglied im Elternbeirat einer Schule. Sie sind begeistert von der Digitalisierung und möchten, dass alle Kinder ab Klasse 5 Tablets bekommen und Schulbücher abgeschafft werden. Sprechen Sie natürliches Deutsch auf B2-Niveau. Widersprechen Sie Bedenken mit Gegenargumenten (Zukunftskompetenzen, Kosten für Bücher, Motivation), fragen Sie nach und seien Sie am Ende zu einem Kompromiss bereit, wenn Ihr Gegenüber gut argumentiert.',
    opener: 'Gut, dass wir kurz Zeit haben! Ich finde, unsere Schule ist total rückständig. Andere Schulen arbeiten längst nur noch mit Tablets. Sie sind doch sicher auch dafür, dass wir die Schulbücher endlich abschaffen, oder?',
    tasksRu: [
      'Выразите своё отношение к идее и обоснуйте его (используйте: skeptisch gegenüber, abhängig von, Es kommt darauf an, …).',
      'Укажите на возможные риски: концентрация, здоровье, цифровое неравенство, защита данных.',
      'Отреагируйте на аргументы собеседника (Ich gehe gern auf Ihr Argument ein, aber …).',
      'Предложите компромисс и договоритесь о нём (Wir könnten uns darauf einigen, dass …).',
    ],
    readAloud: [
      'Ob digitale Medien das Lernen verbessern, hängt vor allem davon ab, wie sinnvoll sie im Unterricht eingesetzt werden.',
      'Datenschützer warnen davor, Apps leichtfertig Zugriff auf Kamera, Mikrofon und persönliche Kontakte zu gewähren.',
      'Die Forderung nach klaren Regeln für die Dauererreichbarkeit nach Feierabend findet bei Beschäftigten immer mehr Zustimmung.',
    ],
  },
};
