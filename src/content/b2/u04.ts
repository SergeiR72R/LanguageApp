import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-04',
  level: 'B2',
  order: 4,
  title: 'Medien & Information',
  titleRu: 'СМИ и информация',
  goalsRu: [
    'Понимать новостные сообщения и передавать чужие высказывания нейтрально.',
    'Образовывать Konjunktiv I и заменять его на Konjunktiv II или würde-форму.',
    'Передавать в косвенной речи утверждения, вопросы и просьбы в настоящем, прошедшем и будущем.',
    'Писать отчёт о дискуссии, передавая позиции участников.',
  ],
  grammar: {
    topic: 'Indirekte Rede mit Konjunktiv I',
    topicRu: 'Косвенная речь, Konjunktiv I',
    explanationRu: `**Косвенная речь** в немецких СМИ передаёт чужие слова нейтрально: автор показывает, что это **не его утверждение**. Для этого используется **Konjunktiv I**.

**Образование:** основа инфинитива + -e, -est, -e, -en, -et, -en. Важнее всего 3-е лицо единственного числа: er **habe**, er **komme**, er **müsse**, er **könne**, er **wisse**, er **werde**. Глагол sein особый: ich sei, er **sei**, wir **seien**, sie **seien**.

**Время в косвенной речи:**

- настоящее: Er sagt, er **arbeite** an einem neuen Projekt.
- прошедшее (habe/sei + Partizip II): Sie sagte, sie **habe** davon nichts **gewusst**. / Er erklärte, er **sei** zurückgetreten.
- будущее (werde + Infinitiv): Die Ministerin kündigte an, sie **werde** das Gesetz **ändern**.

**Замена.** Если форма Konjunktiv I совпадает с индикативом (обычно во множественном числе и в 1-м лице), берут **Konjunktiv II**: Die Zeugen sagen, sie **hätten** nichts gesehen (не haben). Если и Konjunktiv II совпадает с Präteritum (слабые глаголы), используют **würde + Infinitiv**: Sie sagen, sie **würden** zu viel arbeiten.

**Вопросы и просьбы:** Er fragte, **ob** die Meldung **stimme** / **wann** der Artikel **erscheine**. Просьба передаётся через sollen: Sie bat mich, ich **solle** die Quelle prüfen.

Не забывайте менять местоимения: „Ich bin müde“, sagt Anna. → Anna sagt, **sie sei** müde.

**Типичные ошибки русскоговорящих:**

- В русском косвенная речь — просто «что» + обычный глагол. В разговорном немецком тоже говорят Er sagt, dass er krank ist, но в новостях и письменных текстах уровня B2 ожидается Konjunktiv I.
- Время в косвенной речи не зависит от вводящего глагола: Er sagte, er **sei** krank (а не *war*).
- Неправильные формы: *er seie*, *er hat gesagt, er hätte gehabt* вместо **er sei**, **er habe gehabt**.`,
    table: [
      ['Лицо', 'sein', 'haben', 'können', 'kommen'],
      ['ich', 'sei', 'habe → hätte', 'könne', 'komme → käme'],
      ['du', 'sei(e)st', 'habest', 'könnest', 'kommest'],
      ['er/sie/es', 'sei', 'habe', 'könne', 'komme'],
      ['wir', 'seien', 'haben → hätten', 'können → könnten', 'kommen → kämen'],
      ['ihr', 'seiet', 'habet', 'könnet', 'kommet'],
      ['sie/Sie', 'seien', 'haben → hätten', 'können → könnten', 'kommen → kämen'],
    ],
    examples: [
      {
        de: 'Der Sprecher erklärte, die Regierung plane keine Steuererhöhungen.',
        ru: 'Пресс-секретарь заявил, что правительство не планирует повышать налоги.',
      },
      {
        de: 'Laut Polizei sei der Unfall durch überhöhte Geschwindigkeit verursacht worden.',
        ru: 'По данным полиции, авария была вызвана превышением скорости.',
      },
      {
        de: 'Die Journalistin behauptet, sie habe die Informationen aus einer zuverlässigen Quelle erhalten.',
        ru: 'Журналистка утверждает, что получила информацию из надёжного источника.',
      },
      {
        de: 'Verbraucherschützer warnen, viele Nutzer hätten keine Ahnung, welche Daten über sie gesammelt würden.',
        ru: 'Защитники прав потребителей предупреждают, что многие пользователи не имеют понятия, какие данные о них собираются.',
      },
      {
        de: 'Der Minister kündigte an, er werde sich nächste Woche zu den Vorwürfen äußern.',
        ru: 'Министр объявил, что выскажется по поводу обвинений на следующей неделе.',
      },
      {
        de: 'Eine Leserin fragte, ob die Zeitung die Meldung überprüft habe.',
        ru: 'Одна читательница спросила, проверила ли газета это сообщение.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Pressesprecher sagte, der Konzern ___ keine Kenntnis von den Problemen gehabt.',
        options: ['habe', 'hat', 'hätte gehabt', 'sei'],
        answer: 0,
        explanationRu: 'Прошедшее время в косвенной речи: habe + Partizip II. Форма habe (3-е л. ед. ч.) отличается от индикатива, поэтому Konjunktiv I.',
      },
      {
        type: 'choice',
        prompt: 'Die Zeugen berichteten, sie ___ nichts Ungewöhnliches bemerkt.',
        options: ['hätten', 'habe', 'hätte', 'seien'],
        answer: 0,
        explanationRu: 'Konjunktiv I sie haben совпадает с индикативом, поэтому используется Konjunktiv II hätten. Habe и hätte — формы единственного числа, seien — неверный вспомогательный глагол (bemerken образует Perfekt с haben).',
      },
      {
        type: 'choice',
        prompt: 'Sie sagte: „Ich komme morgen.“ → Sie sagte, ___ morgen.',
        options: ['ich komme', 'sie komme', 'sie kam', 'sie wäre gekommen'],
        answer: 1,
        explanationRu: 'Местоимение меняется (ich → sie), глагол — в Konjunktiv I настоящего времени: sie komme. Время не меняется из-за sagte.',
      },
      {
        type: 'choice',
        prompt: 'Der Reporter fragte den Minister, ___ er von dem Skandal gewusst habe.',
        options: ['dass', 'ob', 'wenn', 'damit'],
        answer: 1,
        explanationRu: 'Вопрос без вопросительного слова (Ja/Nein-Frage) передаётся в косвенной речи через ob.',
      },
      {
        type: 'gap',
        prompt: 'Die Ministerin erklärte, sie ___ zu Gesprächen mit der Opposition bereit.',
        answers: ['sei'],
        hintRu: 'sein',
        explanationRu: 'Konjunktiv I от sein в 3-м лице ед. ч. — sei (без -e на конце).',
      },
      {
        type: 'gap',
        prompt: 'Der Autor behauptet, er ___ den Artikel allein geschrieben.',
        answers: ['habe'],
        explanationRu: 'Прошедшее время в косвенной речи: habe + Partizip II (schreiben образует Perfekt с haben).',
      },
      {
        type: 'gap',
        prompt: 'Die Redaktion teilte mit, die Sendung ___ wegen technischer Probleme ausfallen.',
        answers: ['müsse'],
        hintRu: 'müssen',
        explanationRu: 'Konjunktiv I модальных глаголов образуется от основы инфинитива: müssen → er/sie/es müsse.',
      },
      {
        type: 'gap',
        prompt: 'Die Experten meinen, die Jugendlichen ___ zu viel Zeit in sozialen Netzwerken verbringen.',
        answers: ['würden'],
        hintRu: 'заменитель Konjunktiv I',
        explanationRu: 'Konjunktiv I (verbringen) совпадает с индикативом, Konjunktiv II (verbrachten/verbrächten) звучит как Präteritum или устарело → würde + Infinitiv.',
      },
      {
        type: 'order',
        words: ['Der Politiker', 'behauptete,', 'er', 'sei', 'falsch', 'zitiert', 'worden.'],
        translationRu: 'Политик утверждал, что его неверно процитировали.',
        explanationRu: 'Пассив прошедшего времени в Konjunktiv I: sei + Partizip II + worden. Косвенная речь без dass — порядок слов главного предложения.',
      },
      {
        type: 'order',
        words: ['Sie', 'fragte mich,', 'ob', 'ich', 'die Quelle', 'überprüft', 'hätte.'],
        translationRu: 'Она спросила меня, проверил ли я источник.',
        explanationRu: 'Косвенный вопрос с ob: глагол в конце. Форма ich habe совпадает с индикативом, поэтому hätte.',
      },
      {
        type: 'transform',
        instructionRu: 'Передайте в косвенной речи (Konjunktiv I).',
        prompt: 'Der Trainer sagt: „Ich bin mit der Leistung meiner Mannschaft zufrieden.“',
        answers: [
          'Der Trainer sagt, er sei mit der Leistung seiner Mannschaft zufrieden.',
          'Der Trainer sagt, dass er mit der Leistung seiner Mannschaft zufrieden sei.',
        ],
        explanationRu: 'ich → er, meiner → seiner, bin → sei. С dass глагол уходит в конец.',
      },
      {
        type: 'transform',
        instructionRu: 'Передайте в косвенной речи (Konjunktiv I, прошедшее время).',
        prompt: 'Die Sängerin erklärte: „Ich habe das Konzert wegen einer Erkältung abgesagt.“',
        answers: [
          'Die Sängerin erklärte, sie habe das Konzert wegen einer Erkältung abgesagt.',
          'Die Sängerin erklärte, dass sie das Konzert wegen einer Erkältung abgesagt habe.',
        ],
        explanationRu: 'Прошедшее время: habe + Partizip II. Местоимение ich → sie.',
      },
    ],
  },
  vocab: [
    {
      de: 'Berichterstattung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'освещение (в СМИ), репортажи',
      example: 'Die Berichterstattung über den Prozess war ausgewogen und sachlich.',
      exampleRu: 'Освещение судебного процесса было взвешенным и объективным.',
    },
    {
      de: 'Quelle',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'источник',
      example: 'Gute Journalisten überprüfen jede Quelle mindestens zweimal.',
      exampleRu: 'Хорошие журналисты проверяют каждый источник как минимум дважды.',
    },
    {
      de: 'Schlagzeile',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'заголовок (газеты)',
      example: 'Die Schlagzeile war reißerisch, der Artikel selbst eher harmlos.',
      exampleRu: 'Заголовок был кричащим, а сама статья — довольно безобидной.',
    },
    {
      de: 'Falschmeldung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'ложное сообщение, фейк',
      example: 'Die Falschmeldung wurde innerhalb weniger Stunden tausendfach geteilt.',
      exampleRu: 'Ложное сообщение за несколько часов распространили тысячи раз.',
    },
    {
      de: 'Glaubwürdigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'достоверность, доверие',
      example: 'Durch den Skandal hat der Sender viel Glaubwürdigkeit verloren.',
      exampleRu: 'Из-за скандала телеканал сильно потерял доверие.',
    },
    {
      de: 'Pressefreiheit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'свобода прессы',
      example: 'Die Pressefreiheit ist in vielen Ländern bedroht.',
      exampleRu: 'Во многих странах свобода прессы находится под угрозой.',
    },
    {
      de: 'Beitrag',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'материал, репортаж, публикация; вклад',
      example: 'In ihrem Beitrag geht es um die Folgen des Klimawandels für die Alpen.',
      exampleRu: 'Её материал посвящён последствиям изменения климата для Альп.',
    },
    {
      de: 'Öffentlichkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'общественность',
      example: 'Der Fall hat in der Öffentlichkeit große Empörung ausgelöst.',
      exampleRu: 'Этот случай вызвал в обществе сильное возмущение.',
    },
    {
      de: 'Algorithmus',
      article: 'der',
      plural: 'die Algorithmen',
      pos: 'noun',
      ru: 'алгоритм',
      example: 'Algorithmen entscheiden mit, welche Nachrichten wir in sozialen Netzwerken sehen.',
      exampleRu: 'Алгоритмы влияют на то, какие новости мы видим в соцсетях.',
    },
    {
      de: 'Meinungsbildung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'формирование мнения',
      example: 'Soziale Medien spielen bei der politischen Meinungsbildung eine immer größere Rolle.',
      exampleRu: 'Соцсети играют всё большую роль в формировании политических взглядов.',
    },
    {
      de: 'behaupten',
      forms: 'behauptete, hat behauptet',
      pos: 'verb',
      ru: 'утверждать',
      example: 'Der Abgeordnete behauptet, er habe von den Zahlungen nichts gewusst.',
      exampleRu: 'Депутат утверждает, что ничего не знал о платежах.',
    },
    {
      de: 'verbreiten',
      forms: 'verbreitete, hat verbreitet',
      pos: 'verb',
      ru: 'распространять',
      example: 'Wer im Netz Lügen über andere verbreitet, kann sich strafbar machen.',
      exampleRu: 'Тот, кто распространяет в интернете ложь о других, может понести уголовную ответственность.',
    },
    {
      de: 'recherchieren',
      forms: 'recherchierte, hat recherchiert',
      pos: 'verb',
      ru: 'проводить журналистское расследование, собирать информацию',
      example: 'Die Journalistin hat monatelang zu dem Thema recherchiert.',
      exampleRu: 'Журналистка несколько месяцев собирала материал по этой теме.',
    },
    {
      de: 'zitieren',
      forms: 'zitierte, hat zitiert',
      pos: 'verb',
      ru: 'цитировать',
      example: 'Der Artikel zitiert einen anonymen Mitarbeiter des Ministeriums.',
      exampleRu: 'В статье цитируется анонимный сотрудник министерства.',
    },
    {
      de: 'dementieren',
      forms: 'dementierte, hat dementiert',
      pos: 'verb',
      ru: 'опровергать (официально)',
      example: 'Das Ministerium hat den Bericht über den Rücktritt sofort dementiert.',
      exampleRu: 'Министерство сразу же опровергло сообщение об отставке.',
    },
    {
      de: 'sachlich',
      pos: 'adj',
      ru: 'объективный, по существу',
      example: 'Die Diskussion blieb trotz des heiklen Themas sachlich.',
      exampleRu: 'Несмотря на щекотливую тему, дискуссия оставалась деловой.',
    },
    {
      de: 'einseitig',
      pos: 'adj',
      ru: 'односторонний',
      example: 'Die Darstellung des Konflikts in der Zeitung war sehr einseitig.',
      exampleRu: 'Изображение конфликта в газете было очень односторонним.',
    },
    {
      de: 'seriös',
      pos: 'adj',
      ru: 'серьёзный, солидный, заслуживающий доверия',
      example: 'Ich lese lieber seriöse Zeitungen als Boulevardblätter.',
      exampleRu: 'Я предпочитаю читать серьёзные газеты, а не бульварную прессу.',
    },
    {
      de: 'in die Schlagzeilen geraten',
      forms: 'gerät, geriet, ist geraten',
      pos: 'phrase',
      ru: 'попасть в заголовки',
      example: 'Der Fußballverein ist wegen eines Wettskandals in die Schlagzeilen geraten.',
      exampleRu: 'Футбольный клуб попал в заголовки из-за скандала со ставками.',
    },
    {
      de: 'auf dem Laufenden bleiben',
      pos: 'phrase',
      ru: 'быть в курсе событий',
      example: 'Mit Newslettern und Podcasts bleibe ich auf dem Laufenden.',
      exampleRu: 'С помощью рассылок и подкастов я остаюсь в курсе событий.',
    },
  ],
  listening: {
    title: 'Faktencheck in der Redaktion',
    kind: 'dialog',
    text: `A: Hast du das schon gesehen? Diese Meldung über ein angebliches Handyverbot an Schulen wird gerade überall geteilt.
B: Ja, die ist mir heute Morgen auch begegnet. Da steht, das Kultusministerium habe beschlossen, Smartphones ab Herbst an allen Schulen komplett zu verbieten.
A: Genau. Und weiter heißt es, Schüler, die man mit einem Handy erwische, müssten sogar ein Bußgeld zahlen.
B: Das klingt ziemlich unwahrscheinlich. Woher stammt die Information denn?
A: Das ist ja das Problem. Der Post beruft sich auf einen „Insider aus dem Ministerium“, aber einen Namen gibt es nicht. Ich habe deshalb gerade mit der Pressestelle telefoniert.
B: Und? Was haben die gesagt?
A: Die Sprecherin hat das sofort dementiert. Sie sagte, es gebe zwar Gespräche über einheitliche Regeln, aber ein generelles Verbot sei nicht geplant. Die Schulen sollten weiterhin selbst entscheiden können.
B: Also eine klassische Falschmeldung. Hat sie gesagt, wann sich das Ministerium offiziell äußern will?
A: Sie meinte, man werde Ende des Monats einen Vorschlag veröffentlichen. Bis dahin wolle man keine Details nennen.
B: Gut. Dann sollten wir einen kurzen Beitrag dazu machen. Viele Eltern sind ja schon verunsichert.
A: Finde ich auch. Ich habe außerdem mit einem Medienwissenschaftler gesprochen. Er sagt, bei solchen Meldungen spiele die Angst eine große Rolle: Wer sich Sorgen mache, teile Nachrichten oft, ohne die Quelle zu prüfen.
B: Das passt. Und die Algorithmen belohnen solche Posts auch noch, weil sie viele Klicks bringen.
A: Eben. Ich schreibe den Text bis zwei Uhr, dann kannst du ihn gegenlesen.
B: Mach das. Und bitte zitier die Sprecherin wörtlich, damit niemand behaupten kann, wir hätten etwas falsch dargestellt.
A: Klar. Und ich verlinke die offizielle Stellungnahme, sobald sie online ist.`,
    questions: [
      {
        question: 'Was behauptet die Meldung, die im Netz geteilt wird?',
        options: [
          'Smartphones sollen ab Herbst an allen Schulen verboten werden.',
          'Schulen sollen ab Herbst nur noch digital unterrichten.',
          'Lehrkräfte dürfen im Unterricht keine Handys mehr benutzen.',
          'Eltern müssen ein Bußgeld zahlen, wenn ihre Kinder ein Handy haben.',
        ],
        answer: 0,
      },
      {
        question: 'Warum ist die Meldung von Anfang an zweifelhaft?',
        options: [
          'Sie wurde von einem Schüler verfasst.',
          'Sie nennt keine konkrete, überprüfbare Quelle.',
          'Sie ist schon mehrere Jahre alt.',
          'Sie widerspricht einem Zeitungsartikel.',
        ],
        answer: 1,
      },
      {
        question: 'Was hat die Sprecherin des Ministeriums gesagt?',
        options: [
          'Ein Verbot werde schon nächste Woche beschlossen.',
          'Sie dürfe zu dem Thema überhaupt nichts sagen.',
          'Es gebe Gespräche über Regeln, aber kein generelles Verbot.',
          'Das Bußgeld sei bereits beschlossen.',
        ],
        answer: 2,
      },
      {
        question: 'Warum verbreiten sich solche Meldungen laut dem Medienwissenschaftler so schnell?',
        options: [
          'Weil Journalisten sie ungeprüft übernehmen.',
          'Weil das Ministerium zu spät reagiert.',
          'Weil sie besonders lustig sind.',
          'Weil besorgte Menschen sie teilen, ohne die Quelle zu prüfen.',
        ],
        answer: 3,
      },
      {
        question: 'Warum soll die Sprecherin wörtlich zitiert werden?',
        options: [
          'Damit der Beitrag länger wird.',
          'Damit man der Redaktion keine falsche Darstellung vorwerfen kann.',
          'Weil das Ministerium es ausdrücklich verlangt hat.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы были на публичной дискуссии на тему «Соцсети — угроза для демократии?». Напишите для блога вашей языковой школы отчёт, в котором вы передаёте позиции участников (косвенная речь) и даёте свою оценку.',
    taskDe: 'Sie haben eine Podiumsdiskussion zum Thema „Soziale Medien – eine Gefahr für die Demokratie?“ besucht. Schreiben Sie für den Blog Ihrer Sprachschule einen Bericht, in dem Sie die Positionen der Teilnehmenden wiedergeben.',
    points: [
      'Wann, wo und zu welchem Thema die Diskussion stattfand',
      'Die Position einer Journalistin (in indirekter Rede)',
      'Die Position eines Vertreters einer Social-Media-Plattform (in indirekter Rede)',
      'Ihre eigene Einschätzung',
    ],
    minWords: 170,
    usefulPhrases: [
      'Am … fand in … eine Podiumsdiskussion zum Thema … statt.',
      'Die Journalistin betonte, die Glaubwürdigkeit der Medien sei …',
      'Nach Ansicht von … müsse man …',
      'Er wies darauf hin, dass …',
      'Laut … habe sich das Verhalten der Nutzer stark verändert.',
      'Meiner Einschätzung nach …',
    ],
  },
  speaking: {
    scenarioRu: 'Ваш знакомый получает новости почти только из соцсетей и не доверяет классическим СМИ. Он только что увидел «сенсационное» видео и полностью ему верит. Поговорите с ним.',
    aiRole: 'Sie sind Tobias, ein Bekannter, der Nachrichten fast nur über soziale Netzwerke bezieht und klassischen Medien misstraut. Sie sprechen umgangssprachliches, aber korrektes Deutsch auf B2-Niveau. Verteidigen Sie Ihre Quellen, werfen Sie den etablierten Medien Einseitigkeit vor und fragen Sie kritisch nach, woher Ihr Gesprächspartner seine Informationen hat.',
    opener: 'Hast du das Video gesehen, das gerade überall geteilt wird? Da sagt ein Arzt, Kaffee würde das Gedächtnis zerstören. Ich trinke ab sofort keinen mehr! Die Zeitungen berichten darüber natürlich nicht.',
    tasksRu: [
      'Спросите, откуда эта информация и кто её распространяет.',
      'Передайте, что говорят серьёзные источники, используя косвенную речь (Laut … sei/habe …).',
      'Объясните, как проверять сообщения на достоверность.',
      'Обсудите роль алгоритмов и ответственность пользователей.',
    ],
    readAloud: [
      'Der Regierungssprecher erklärte, man habe die Vorwürfe sorgfältig geprüft und werde in den nächsten Tagen ausführlich dazu Stellung nehmen.',
      'Laut einer aktuellen Umfrage informieren sich immer mehr junge Menschen ausschließlich über soziale Netzwerke, deren Algorithmen vor allem emotionale Inhalte belohnen.',
      'Die Chefredakteurin betonte, die Glaubwürdigkeit einer Zeitung hänge vor allem davon ab, ob sie ihre Quellen sorgfältig überprüfe.',
    ],
  },
};
