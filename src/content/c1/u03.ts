import type { Unit } from '../types';

export const unit: Unit = {
  id: 'c1-03',
  level: 'C1',
  order: 3,
  title: 'Medien und Meinungsbildung',
  titleRu: 'СМИ и формирование общественного мнения',
  goalsRu: [
    'Точно передавать чужие высказывания с помощью Konjunktiv I и заменяющих форм',
    'Дистанцироваться от чужих утверждений (sollen, wollen, angeblich, laut, zufolge)',
    'Понимать радиорепортажи и аналитические материалы о медиа',
    'Резюмировать чужую позицию и аргументированно выражать собственную',
  ],
  grammar: {
    topic: 'Redewiedergabe: Konjunktiv I, Ersatzformen und Distanzierung',
    topicRu: 'Передача чужой речи: Konjunktiv I, заменяющие формы и дистанцирование',
    explanationRu: `В официальной письменной речи и в СМИ чужие слова передаются с помощью **Konjunktiv I**. Так автор показывает: «это сказал другой человек, я лишь передаю».

**Выбор формы:**

- Основная форма — **Konjunktiv I**: *er habe, sie sei, man könne, er komme*.
- Если Konjunktiv I совпадает с индикативом (*ich habe, wir haben, sie kommen*), используется **Konjunktiv II**: *sie **hätten**, sie **kämen***.
- Если и Konjunktiv II совпадает с Präteritum (слабые глаголы: *sie sagten*), используется **würde + Infinitiv**: *sie **würden** sagen*.

**Время** в косвенной речи не зависит от времени вводящего глагола:

- одновременность: *Er sagte, er **sei** krank.*
- предшествование: *Er sagte, er **sei** krank **gewesen** / er **habe** gearbeitet.*
- будущее: *Er sagte, er **werde** kommen.*

Вопросы передаются через **ob** или вопросительное слово, повелительное наклонение — через **sollen/mögen**: *Sie sagte, er **solle** warten.*

**Вводящие глаголы** уточняют позицию автора цитаты: *behaupten, betonen, einräumen, bestreiten, versichern, bezweifeln, warnen*.

**Предлоги-источники:** *laut* + Dat./Gen. (*laut Angaben der Polizei*), *zufolge* + Dat. — стоит **после** существительного (*dem Bericht **zufolge***), *nach* + Dat. (*nach Angaben des Ministeriums*). После них обычно используется индикатив.

**Дистанцирование:** *sollen* — «говорят, что…» (*Er **soll** Geld veruntreut haben*); *wollen* — «утверждает о себе» (*Er **will** nichts gewusst haben*); а также *angeblich, vermeintlich, mutmaßlich*.

**Типичные ошибки русскоговорящих:**

- в русском косвенная речь не требует особого наклонения, поэтому Konjunktiv I забывают;
- не меняют местоимения: *Sie sagte, ich habe …* ✗ вместо *sie habe …*;
- ставят *zufolge* перед существительным: *zufolge dem Bericht* ✗;
- путают *sollen* (слухи) и *wollen* (самоутверждение);
- без *dass* глагол стоит на втором месте: *Er sagte, er **sei** krank*.`,
    table: [
      ['Индикатив', 'Konjunktiv I', 'Заменяющая форма'],
      ['er hat', 'er habe', '—'],
      ['sie haben', 'sie haben (= Ind.)', 'sie hätten'],
      ['er ist', 'er sei', '—'],
      ['er kommt', 'er komme', '—'],
      ['sie kommen', 'sie kommen (= Ind.)', 'sie kämen'],
      ['sie fragen', 'sie fragen (= Ind.)', 'sie würden fragen'],
    ],
    examples: [
      {
        de: 'Die Ministerin betonte, die Regierung habe alle relevanten Fakten offengelegt.',
        ru: 'Министр подчеркнула, что правительство раскрыло все существенные факты.',
      },
      {
        de: 'Die Journalisten erklärten, sie hätten keinerlei Hinweise auf Manipulationen gefunden.',
        ru: 'Журналисты заявили, что не нашли никаких признаков манипуляций.',
      },
      {
        de: 'Dem Bericht zufolge nutzen inzwischen über 60 Prozent der Jugendlichen soziale Medien als wichtigste Nachrichtenquelle.',
        ru: 'Согласно докладу, уже более 60 процентов подростков используют соцсети как главный источник новостей.',
      },
      {
        de: 'Der Abgeordnete soll Spendengelder für private Zwecke verwendet haben.',
        ru: 'Депутат якобы использовал пожертвования в личных целях.',
      },
      {
        de: 'Die Kritiker fragten, ob die Berichterstattung nicht einseitig gewesen sei.',
        ru: 'Критики спросили, не было ли освещение событий односторонним.',
      },
      {
        de: 'Die Chefredakteurin sagte, man solle jede Quelle doppelt prüfen.',
        ru: 'Главный редактор сказала, что каждый источник нужно проверять дважды.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Der Sprecher erklärte, die Zeitung ___ die Vorwürfe sorgfältig geprüft.',
        options: ['habe', 'sei', 'werde', 'haben'],
        answer: 0,
        explanationRu:
          'Предшествование в косвенной речи: Konjunktiv I вспомогательного глагола + Partizip II. «prüfen» образует перфект с haben, подлежащее «die Zeitung» — ед. ч. → «habe».',
      },
      {
        type: 'choice',
        prompt: 'Die Forscher behaupteten, sie ___ die Daten nicht manipuliert. (Schriftsprache)',
        options: ['habe', 'hätten', 'seien', 'würden'],
        answer: 1,
        explanationRu:
          'Konjunktiv I «sie haben» совпадает с индикативом, поэтому используется Konjunktiv II «hätten». «habe» не согласуется с мн. ч., «seien» — неверный вспомогательный глагол.',
      },
      {
        type: 'choice',
        prompt: 'Welche Formulierung ist korrekt?',
        options: [
          'Zufolge dem Bericht ist die Zahl der Abonnements gesunken.',
          'Zufolge des Berichts ist die Zahl der Abonnements gesunken.',
          'Dem Bericht zufolge ist die Zahl der Abonnements gesunken.',
          'Dem Bericht laut ist die Zahl der Abonnements gesunken.',
        ],
        answer: 2,
        explanationRu:
          '«zufolge» — постпозиционный предлог с дательным падежом: «dem Bericht zufolge». «laut» стоит перед существительным: «laut dem Bericht».',
      },
      {
        type: 'choice',
        prompt: 'Der Minister behauptet, er habe von dem Skandal nichts gewusst. = Der Minister ___ von dem Skandal nichts gewusst haben.',
        options: ['soll', 'muss', 'will', 'dürfte'],
        answer: 2,
        explanationRu:
          '«wollen» + Infinitiv Perfekt передаёт утверждение человека о самом себе, в котором говорящий сомневается. «sollen» означало бы, что так утверждают другие.',
      },
      {
        type: 'gap',
        prompt: 'Die Moderatorin fragte den Experten, ob er die Gefahr nicht ___ (unterschätzen, Vergangenheit).',
        answers: ['unterschätzt habe', 'unterschätzt hätte'],
        hintRu: 'Partizip II + Konjunktiv I вспомогательного глагола',
        explanationRu:
          'Косвенный вопрос с «ob», предшествование → Partizip II + «habe» (Konjunktiv I, 3-е л. ед. ч.). Глагол в конце придаточного.',
      },
      {
        type: 'gap',
        prompt: 'Die Demonstranten erklärten, sie ___ (kommen) wieder, falls sich nichts ändere.',
        answers: ['kämen'],
        hintRu: 'Konjunktiv I здесь совпадает с индикативом',
        explanationRu:
          '«sie kommen» в Konjunktiv I совпадает с индикативом, поэтому нужен Konjunktiv II «kämen». Отделяемая приставка «wieder» стоит в конце.',
      },
      {
        type: 'gap',
        prompt: '___ Angaben der Polizei wurden bei der Demonstration drei Personen verletzt.',
        answers: ['Laut', 'Nach'],
        explanationRu:
          '«laut» и «nach» указывают на источник информации и стоят перед существительным. После них обычно используется индикатив.',
      },
      {
        type: 'gap',
        prompt: 'Der Schauspieler ___ das Interview nie gegeben haben – zumindest behauptet das die Boulevardzeitung.',
        answers: ['soll'],
        hintRu: 'так утверждают другие',
        explanationRu:
          '«sollen» + Infinitiv Perfekt: так утверждает кто-то другой (здесь — газета), говорящий за достоверность не ручается.',
      },
      {
        type: 'order',
        words: ['Die Ministerin', 'betonte,', 'die Regierung', 'habe', 'keine Informationen', 'zurückgehalten.'],
        translationRu: 'Министр подчеркнула, что правительство не скрывало никакой информации.',
        explanationRu:
          'Косвенная речь без «dass» строится как главное предложение: спрягаемый глагол (Konjunktiv I «habe») на втором месте, причастие — в конце.',
      },
      {
        type: 'order',
        words: ['Der', 'Verdächtige', 'will', 'zur Tatzeit', 'im Ausland', 'gewesen sein.'],
        translationRu: 'Подозреваемый утверждает, что в момент преступления был за границей.',
        explanationRu:
          '«wollen» + Infinitiv Perfekt («gewesen sein») в конце предложения. Обстоятельство времени стоит перед обстоятельством места.',
      },
      {
        type: 'transform',
        instructionRu: 'Передайте высказывание в косвенной речи.',
        prompt: '„Wir haben die Quelle mehrfach überprüft“, sagte die Redakteurin.',
        answers: [
          'Die Redakteurin sagte, sie hätten die Quelle mehrfach überprüft.',
          'Die Redakteurin sagte, dass sie die Quelle mehrfach überprüft hätten.',
        ],
        explanationRu:
          '«wir» → «sie»; Konjunktiv I «sie haben» совпадает с индикативом → «hätten». Без «dass» — порядок главного предложения, с «dass» — глагол в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Передайте требование в косвенной речи с модальным глаголом.',
        prompt: '„Prüfen Sie jede Information doppelt!“, forderte der Chefredakteur die Volontäre auf.',
        answers: [
          'Der Chefredakteur forderte die Volontäre auf, sie sollten jede Information doppelt prüfen.',
          'Der Chefredakteur forderte die Volontäre auf, jede Information doppelt zu prüfen.',
          'Der Chefredakteur forderte die Volontäre auf, dass sie jede Information doppelt prüfen sollten.',
        ],
        explanationRu:
          'Повелительное наклонение передаётся через «sollen». «sie sollen» совпадает с индикативом → Konjunktiv II «sollten». Возможен и инфинитивный оборот с «zu».',
      },
    ],
  },
  vocab: [
    {
      de: 'Berichterstattung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'освещение (событий в СМИ), репортаж',
      example: 'Die Berichterstattung über den Konflikt wurde als einseitig kritisiert.',
      exampleRu: 'Освещение конфликта критиковали как одностороннее.',
    },
    {
      de: 'Meinungsbildung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'формирование мнения',
      example: 'Soziale Netzwerke spielen bei der politischen Meinungsbildung eine immer größere Rolle.',
      exampleRu: 'Социальные сети играют всё большую роль в формировании политических взглядов.',
    },
    {
      de: 'Filterblase',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'информационный пузырь',
      example: 'Wer nur Beiträge Gleichgesinnter liest, gerät leicht in eine Filterblase.',
      exampleRu: 'Тот, кто читает только единомышленников, легко попадает в информационный пузырь.',
    },
    {
      de: 'Desinformation',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'дезинформация',
      example: 'Gezielte Desinformation kann das Vertrauen in demokratische Institutionen untergraben.',
      exampleRu: 'Целенаправленная дезинформация способна подорвать доверие к демократическим институтам.',
    },
    {
      de: 'verbreiten',
      forms: 'verbreitet, verbreitete, hat verbreitet',
      pos: 'verb',
      ru: 'распространять',
      example: 'Falschmeldungen verbreiten sich im Netz oft schneller als ihre Richtigstellung.',
      exampleRu: 'Ложные сообщения распространяются в сети зачастую быстрее, чем их опровержения.',
    },
    {
      de: 'Glaubwürdigkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'достоверность, доверие',
      example: 'Durch den Skandal hat die Zeitung erheblich an Glaubwürdigkeit eingebüßt.',
      exampleRu: 'Из-за скандала газета серьёзно потеряла в доверии читателей.',
    },
    {
      de: 'einräumen',
      forms: 'räumt ein, räumte ein, hat eingeräumt',
      pos: 'verb',
      ru: 'признавать (неохотно), допускать',
      example: 'Der Sender räumte ein, bei der Recherche Fehler gemacht zu haben.',
      exampleRu: 'Телеканал признал, что допустил ошибки при подготовке материала.',
    },
    {
      de: 'bestreiten',
      forms: 'bestreitet, bestritt, hat bestritten',
      pos: 'verb',
      ru: 'отрицать, оспаривать',
      example: 'Der Konzern bestreitet jede Beteiligung an der Werbekampagne.',
      exampleRu: 'Концерн отрицает какое-либо участие в рекламной кампании.',
    },
    {
      de: 'sich berufen',
      forms: 'auf + Akk; beruft, berief, hat berufen',
      pos: 'verb',
      ru: 'ссылаться (на что-либо)',
      example: 'Die Zeitung beruft sich auf vertrauliche Quellen aus dem Ministerium.',
      exampleRu: 'Газета ссылается на конфиденциальные источники в министерстве.',
    },
    {
      de: 'Pressefreiheit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'свобода прессы',
      example: 'Die Pressefreiheit ist im Grundgesetz ausdrücklich verankert.',
      exampleRu: 'Свобода прессы прямо закреплена в Основном законе.',
    },
    {
      de: 'Leitartikel',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'передовая статья',
      example: 'Im heutigen Leitartikel kritisiert die Chefredakteurin die Haltung der Regierung.',
      exampleRu: 'В сегодняшней передовице главный редактор критикует позицию правительства.',
    },
    {
      de: 'Algorithmus',
      article: 'der',
      plural: 'Algorithmen',
      pos: 'noun',
      ru: 'алгоритм',
      example: 'Der Algorithmus bevorzugt Inhalte, die starke Emotionen auslösen.',
      exampleRu: 'Алгоритм отдаёт предпочтение контенту, вызывающему сильные эмоции.',
    },
    {
      de: 'reißerisch',
      pos: 'adj',
      ru: 'сенсационный, кричащий (о подаче материала)',
      example: 'Mit reißerischen Schlagzeilen wollen manche Portale möglichst viele Klicks erzielen.',
      exampleRu: 'Кричащими заголовками некоторые порталы стремятся собрать как можно больше кликов.',
    },
    {
      de: 'ausgewogen',
      pos: 'adj',
      ru: 'взвешенный, сбалансированный',
      example: 'Öffentlich-rechtliche Sender sind zu einer ausgewogenen Berichterstattung verpflichtet.',
      exampleRu: 'Общественные телерадиокомпании обязаны освещать события взвешенно.',
    },
    {
      de: 'Faktencheck',
      article: 'der',
      plural: '-s',
      pos: 'noun',
      ru: 'проверка фактов',
      example: 'Ein unabhängiger Faktencheck ergab, dass das Zitat frei erfunden war.',
      exampleRu: 'Независимая проверка фактов показала, что цитата была полностью выдумана.',
    },
    {
      de: 'Deutungshoheit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'монополия на интерпретацию (событий)',
      example: 'Die traditionellen Medien haben ihre Deutungshoheit längst verloren.',
      exampleRu: 'Традиционные СМИ давно утратили монополию на интерпретацию событий.',
    },
    {
      de: 'angeblich',
      pos: 'adj',
      ru: 'якобы, мнимый',
      example: 'Der angebliche Zeuge hat sich als Schauspieler entpuppt.',
      exampleRu: 'Мнимый свидетель оказался актёром.',
    },
    {
      de: 'Schlagzeilen machen',
      pos: 'phrase',
      ru: 'попадать в заголовки, становиться громкой новостью',
      example: 'Der Fall machte wochenlang bundesweit Schlagzeilen.',
      exampleRu: 'Это дело неделями не сходило с первых полос по всей стране.',
    },
    {
      de: 'etwas aus dem Zusammenhang reißen',
      forms: 'reißt, riss, hat gerissen',
      pos: 'phrase',
      ru: 'вырывать что-либо из контекста',
      example: 'Der Politiker beklagte, seine Äußerung sei aus dem Zusammenhang gerissen worden.',
      exampleRu: 'Политик жаловался, что его высказывание вырвали из контекста.',
    },
    {
      de: 'die vierte Gewalt',
      pos: 'phrase',
      ru: 'четвёртая власть (о прессе)',
      example: 'Als vierte Gewalt soll die Presse die Mächtigen kontrollieren.',
      exampleRu: 'Как четвёртая власть пресса должна контролировать власть имущих.',
    },
  ],
  listening: {
    title: 'Radiofeature: Wer bestimmt, was wir denken?',
    kind: 'monolog',
    text: `Wie bilden wir uns heute eine Meinung? Noch vor zwanzig Jahren hätte die Antwort gelautet: über die Zeitung, das Radio und die Abendnachrichten. Heute beziehen vor allem jüngere Menschen ihre Informationen überwiegend aus sozialen Netzwerken – und dort entscheiden Algorithmen darüber, was sie zu sehen bekommen.

Einer aktuellen Studie zufolge nutzt mehr als die Hälfte der unter Dreißigjährigen soziale Medien als wichtigste Nachrichtenquelle. Die Kommunikationswissenschaftlerin Dr. Miriam Kessler sieht diese Entwicklung mit gemischten Gefühlen. Sie räumt ein, die Plattformen hätten den Zugang zu Informationen in gewisser Weise demokratisiert. Gleichzeitig warnt sie, die Algorithmen seien nicht auf Ausgewogenheit, sondern auf Aufmerksamkeit programmiert. Reißerische und emotionale Inhalte würden systematisch bevorzugt, weil Empörung mehr Reaktionen hervorrufe als nüchterne Information.

Die viel zitierte These von der Filterblase hält Kessler allerdings für übertrieben. Kaum jemand, so die Forscherin, bewege sich in einer völlig abgeschotteten Informationswelt. Problematisch sei vielmehr, dass sich Desinformation in kürzester Zeit verbreiten könne, bevor ein Faktencheck überhaupt möglich sei.

Die Plattformbetreiber bestreiten jede Verantwortung für die Inhalte ihrer Nutzer. Ein Sprecher eines großen Netzwerks erklärte auf Anfrage, man lösche jährlich Millionen von Beiträgen wegen Verstößen gegen die Richtlinien. Kritiker halten dem entgegen, dies sei nur ein Tropfen auf den heißen Stein.

Und die klassischen Medien? Auch sie haben mit einem Verlust an Glaubwürdigkeit zu kämpfen. Laut einer repräsentativen Umfrage vertrauen nur noch rund 40 Prozent der Befragten den etablierten Zeitungen. Der Chefredakteur einer überregionalen Tageszeitung, der anonym bleiben möchte, gibt zu, man habe sich zu lange auf die eigene Deutungshoheit verlassen. Viele Leserinnen und Leser hätten das Gefühl gehabt, die Medien würden an ihrer Lebensrealität vorbeischreiben.

Was also tun? Kessler plädiert für mehr Medienkompetenz bereits in der Schule. Junge Menschen müssten lernen, Quellen kritisch zu prüfen und Aussagen nicht vorschnell aus dem Zusammenhang zu reißen. Nur so könne die Presse ihrer Rolle als vierte Gewalt auch in Zukunft gerecht werden.`,
    questions: [
      {
        question: 'Was besagt die im Beitrag erwähnte Studie?',
        options: [
          'Junge Menschen lesen wieder häufiger gedruckte Zeitungen.',
          'Soziale Medien verlieren bei Jüngeren an Bedeutung.',
          'Mehr als die Hälfte der unter Dreißigjährigen informiert sich vor allem über soziale Medien.',
          'Algorithmen bevorzugen ausgewogene Inhalte.',
        ],
        answer: 2,
      },
      {
        question: 'Wie beurteilt Dr. Kessler die These von der Filterblase?',
        options: [
          'Sie hält sie für übertrieben.',
          'Sie hält sie für wissenschaftlich bewiesen.',
          'Sie hält sie für das größte Problem der Gegenwart.',
          'Sie hat dazu keine Meinung.',
        ],
        answer: 0,
      },
      {
        question: 'Welches Problem hebt die Forscherin besonders hervor?',
        options: [
          'Die Plattformen löschen zu viele Beiträge.',
          'Ältere Menschen nutzen keine sozialen Medien.',
          'Öffentlich-rechtliche Sender sind zu teuer.',
          'Falschinformationen verbreiten sich schneller, als man sie überprüfen kann.',
        ],
        answer: 3,
      },
      {
        question: 'Was gibt der anonyme Chefredakteur zu?',
        options: [
          'Seine Zeitung habe bewusst Falschmeldungen verbreitet.',
          'Die Medien hätten sich zu sehr auf ihre Deutungshoheit verlassen.',
          'Die Umfrageergebnisse seien gefälscht.',
        ],
        answer: 1,
      },
      {
        question: 'Wie bewerten Kritiker die Löschmaßnahmen der Plattformen?',
        options: [
          'als vorbildlich',
          'als Verstoß gegen die Pressefreiheit',
          'als bei Weitem nicht ausreichend',
          'als überflüssig',
        ],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu:
      'Кратко изложите основные положения радиорепортажа «Wer bestimmt, was wir denken?», используя косвенную речь, а затем выскажите своё мнение: должна ли медиаграмотность стать отдельным школьным предметом?',
    taskDe:
      'Fassen Sie die zentralen Aussagen des Radiofeatures „Wer bestimmt, was wir denken?“ in indirekter Rede zusammen und nehmen Sie anschließend Stellung zu der Frage, ob Medienkompetenz ein eigenes Schulfach werden sollte.',
    points: [
      'Geben Sie die Hauptthesen von Dr. Kessler sachlich wieder (Konjunktiv I).',
      'Stellen Sie die Position der Plattformbetreiber und ihrer Kritiker dar.',
      'Nehmen Sie begründet Stellung zur Forderung nach einem Schulfach Medienkompetenz.',
      'Schließen Sie mit einem eigenen Vorschlag oder Ausblick.',
    ],
    minWords: 240,
    usefulPhrases: [
      'Der Beitrag befasst sich mit der Frage, …',
      'Die Autorin vertritt die Auffassung, … sei …',
      'Kessler zufolge …',
      'Sie räumt zwar ein, dass …, warnt jedoch davor, …',
      'Die Plattformbetreiber hingegen betonen, …',
      'Ich teile die Einschätzung, dass …, halte es aber für fraglich, ob …',
      'Aus meiner Sicht spricht vieles dafür, …',
      'Zusammenfassend möchte ich festhalten, …',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы участвуете в подиумной дискуссии о регулировании социальных сетей. Ваш оппонент — пресс-секретарь крупной платформы. Вы выступаете за более строгую ответственность платформ за распространение дезинформации.',
    aiRole:
      'Sie sind Jonas Reinhardt, Pressesprecher eines großen sozialen Netzwerks, auf einem Podium zum Thema Desinformation. Sie sprechen gewandt auf C1-Niveau, mit idiomatischen Wendungen, und verteidigen Ihre Plattform selbstbewusst. Sie stellen die Aussagen Ihres Gegenübers infrage, fragen nach Quellen und fordern Belege für jede Behauptung.',
    opener:
      'Ich höre immer wieder, Plattformen wie unsere seien schuld an der Spaltung der Gesellschaft. Mit Verlaub, das ist mir zu einfach. Woher nehmen Sie eigentlich diese Gewissheit?',
    tasksRu: [
      'Сошлитесь на исследование или эксперта, используя laut, zufolge или косвенную речь.',
      'Передайте утверждение оппонента и дистанцируйтесь от него (angeblich, wollen, sollen).',
      'Приведите конкретные примеры вреда от дезинформации.',
      'Сформулируйте требования к платформам и обоснуйте их.',
    ],
    readAloud: [
      'Einer aktuellen Studie zufolge informiert sich mehr als die Hälfte der jungen Erwachsenen überwiegend über soziale Netzwerke.',
      'Der Sprecher räumte ein, man habe die Verbreitung von Desinformation lange unterschätzt, bestritt jedoch jede rechtliche Verantwortung.',
      'Kritiker werfen den Plattformen vor, sie würden reißerische Inhalte systematisch bevorzugen und damit der Glaubwürdigkeit seriöser Berichterstattung schaden.',
    ],
  },
};
