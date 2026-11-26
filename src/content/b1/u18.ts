import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-18',
  level: 'B1',
  order: 18,
  title: 'Freundschaft & Gefühle',
  titleRu: 'Дружба и чувства',
  goalsRu: [
    'Рассказывать о друзьях, отношениях и своих чувствах, описывать конфликты и примирение',
    'Описывать людей с помощью относительных придаточных с dessen/deren, с предлогами, а также с wer, was и wo',
    'Правильно употреблять возвратное местоимение в дательном падеже: Ich wünsche mir …, Merk dir …',
    'Утешать, давать советы и писать дружеские письма',
  ],
  grammar: {
    topic: 'Relativsätze vertieft (dessen/deren, Präposition + Relativpronomen, wer/was/wo) und Reflexivpronomen im Dativ',
    topicRu: 'Относительные придаточные (продолжение) и возвратное местоимение в дательном падеже',
    explanationRu: `**Часть 1. Относительные придаточные — продолжение** (основы — в юните 5).

**Genitiv: dessen / deren** — «чей, у которого / у которой»:

- der Freund, das Kind → **dessen**: Das ist Tom, **dessen** Schwester in Wien lebt.
- die Freundin, множественное число → **deren**: Ich habe eine Kollegin, **deren** Mann Koch ist.

После dessen/deren существительное стоит **без артикля**. Род выбираем по «владельцу», а не по следующему слову: mein Freund, **dessen** Mutter … (не deren!).

**Предлог + местоимение:** предлог стоит **перед** местоимением, падеж задаёт предлог: die Freundin, **auf die** ich mich verlassen kann; die Leute, **mit denen** ich mich gestritten habe.

**wer / was / wo:**

- **wer** — «тот, кто» (без существительного): **Wer** echte Freunde hat, ist nie allein.
- **was** — после alles, nichts, etwas, vieles, das, превосходной степени (das Beste, **was** …) и после целого предложения: Er hat mich angerufen, **was** mich sehr gefreut hat.
- **wo** — после обозначений места: das Café, **wo** wir uns kennengelernt haben.

**Часть 2. Возвратное местоимение в Dativ.** Если у глагола есть ещё и прямое дополнение (Akkusativ), возвратное местоимение стоит в **дательном** падеже: Ich wasche **mir** die Hände. Ich kaufe **mir** ein Buch. Отличие видно только у **ich → mir** и **du → dir**; остальные формы те же: sich, uns, euch, sich.

Сравните: Ich ziehe **mich** an. — Ich ziehe **mir** eine Jacke an.

Частые глаголы: sich (Dat) etwas wünschen, vorstellen, merken, ansehen, leisten, Sorgen machen. Местоимение стоит рано, обычно сразу после спрягаемого глагола: Ich habe **mir** gestern einen Film angesehen.

**Типичные ошибки русскоговорящих:**

- «Mein Freund, der Schwester …» → **dessen** Schwester.
- Артикль после dessen: «dessen die Mutter» → **dessen Mutter**.
- Предлог в конце: «die Freundin, die ich mich verlasse auf» → **auf die** ich mich verlasse.
- «Ich wünsche mich …» → **Ich wünsche mir** …
- Притяжательное вместо местоимения: «Ich putze meine Zähne» → естественнее **Ich putze mir die Zähne**.`,
    table: [
      ['Падеж', 'der (м. р.)', 'das (ср. р.)', 'die (ж. р.)', 'die (мн. ч.)'],
      ['Nominativ', 'der', 'das', 'die', 'die'],
      ['Akkusativ', 'den', 'das', 'die', 'die'],
      ['Dativ', 'dem', 'dem', 'der', 'denen'],
      ['Genitiv', 'dessen', 'dessen', 'deren', 'deren'],
    ],
    examples: [
      { de: 'Das ist Tom, dessen Schwester mit mir in eine Klasse gegangen ist.', ru: 'Это Том, сестра которого ходила со мной в один класс.' },
      { de: 'Anna ist eine Freundin, auf die ich mich immer verlassen kann.', ru: 'Анна — подруга, на которую я всегда могу положиться.' },
      { de: 'Alles, was du mir erzählt hast, bleibt unter uns.', ru: 'Всё, что ты мне рассказал, останется между нами.' },
      { de: 'Wer echte Freunde hat, ist nie ganz allein.', ru: 'Тот, у кого есть настоящие друзья, никогда не бывает совсем один.' },
      { de: 'Zum Geburtstag habe ich mir nur einen Abend mit meinen Freunden gewünscht.', ru: 'На день рождения я пожелал себе только вечер с друзьями.' },
      { de: 'Kannst du dir vorstellen, dass wir uns schon zwanzig Jahre kennen?', ru: 'Можешь себе представить, что мы знаем друг друга уже двадцать лет?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Das ist meine Freundin Mia, ___ Bruder in Berlin studiert.',
        options: ['deren', 'dessen', 'die', 'der'],
        answer: 0,
        explanationRu: '«Владелец» — Mia (женский род) → deren Bruder. Род следующего слова (der Bruder) роли не играет.',
      },
      {
        type: 'choice',
        prompt: 'Kannst du ___ vorstellen, wie wütend ich war?',
        options: ['dich', 'dir', 'sich', 'du'],
        answer: 1,
        explanationRu: 'sich (Dat) etwas vorstellen: прямое дополнение — придаточное «wie wütend ich war», поэтому возвратное местоимение в Dativ → dir.',
      },
      {
        type: 'choice',
        prompt: 'Mein Kumpel hat sich bei mir entschuldigt, ___ mich sehr gefreut hat.',
        options: ['was', 'das', 'der', 'wo'],
        answer: 0,
        explanationRu: 'Придаточное относится ко всему предыдущему предложению (то, что он извинился) → was.',
      },
      {
        type: 'choice',
        prompt: 'Der Freund, ___ ich mich gestritten habe, hat mich gestern angerufen.',
        options: ['mit dem', 'mit den', 'dem', 'mit der'],
        answer: 0,
        explanationRu: 'sich streiten mit + Dativ; der Freund → мужской род, Dativ → mit dem. Предлог обязательно стоит перед местоимением.',
      },
      {
        type: 'gap',
        prompt: 'Paul ist ein Freund, ___ Meinung mir sehr wichtig ist.',
        answers: ['dessen'],
        explanationRu: '«Чьё мнение» — Genitiv; «владелец» Paul — мужской род → dessen. Артикль после dessen не ставится.',
      },
      {
        type: 'gap',
        prompt: 'Das ist das Schönste, ___ du je für mich gemacht hast.',
        answers: ['was'],
        explanationRu: 'После превосходной степени, употреблённой как существительное (das Schönste), используется was.',
      },
      {
        type: 'gap',
        prompt: 'Merk ___ bitte, wann Lisa Geburtstag hat!',
        answers: ['dir'],
        hintRu: 'sich (Dat) etwas merken, обращение на «ты»',
        explanationRu: 'sich (Dat) etwas merken — «запомнить». В повелительном наклонении для du: Merk dir …',
      },
      {
        type: 'gap',
        prompt: 'Die Freunde, ___ ich am meisten vertraue, kenne ich seit der Schule.',
        answers: ['denen'],
        explanationRu: 'vertrauen + Dativ, множественное число → denen (не den!).',
      },
      {
        type: 'order',
        words: ['Sie', 'ist', 'die', 'Freundin,', 'auf', 'die', 'ich', 'mich', 'immer', 'verlassen', 'kann.'],
        translationRu: 'Она — подруга, на которую я всегда могу положиться.',
        explanationRu: 'sich verlassen auf + Akk → auf die. Предлог стоит в начале придаточного, модальный глагол kann — в конце.',
      },
      {
        type: 'order',
        words: ['Ich', 'habe', 'mir', 'gestern', 'einen', 'traurigen', 'Film', 'angesehen.'],
        translationRu: 'Вчера я посмотрел грустный фильм.',
        explanationRu: 'sich (Dat) etwas ansehen: местоимение mir стоит сразу после спрягаемого глагола, Partizip II angesehen — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью относительного местоимения в Genitiv.',
        prompt: 'Ich habe einen Freund. Seine Eltern wohnen in Kasachstan.',
        answers: ['Ich habe einen Freund, dessen Eltern in Kasachstan wohnen.'],
        explanationRu: 'seine Eltern → dessen Eltern (владелец — der Freund). Глагол wohnen уходит в конец придаточного.',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите предложение с возвратным местоимением в Dativ (без «für mich»).',
        prompt: 'Ich kaufe ein neues Handy für mich.',
        answers: ['Ich kaufe mir ein neues Handy.'],
        explanationRu: 'Вместо «für mich» по-немецки обычно говорят sich (Dat) etwas kaufen: Ich kaufe mir …',
      },
    ],
  },
  vocab: [
    { de: 'Freundschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'дружба', example: 'Unsere Freundschaft hat schon viele Umzüge überlebt.', exampleRu: 'Наша дружба пережила уже много переездов.' },
    { de: 'Kumpel', article: 'der', plural: '-', pos: 'noun', ru: '(разг.) приятель, кореш', example: 'Am Freitag gehe ich mit meinen Kumpels zum Fußball.', exampleRu: 'В пятницу я иду с приятелями на футбол.' },
    { de: 'Bekanntschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'знакомство; знакомые', example: 'Im Sprachkurs habe ich viele interessante Bekanntschaften gemacht.', exampleRu: 'На языковых курсах я завёл много интересных знакомств.' },
    { de: 'Geheimnis', article: 'das', plural: '-se', pos: 'noun', ru: 'тайна, секрет', example: 'Kannst du ein Geheimnis für dich behalten?', exampleRu: 'Ты умеешь хранить секреты?' },
    { de: 'Mitgefühl', article: 'das', plural: '–', pos: 'noun', ru: 'сочувствие, сострадание', example: 'Sie hat mir in der schweren Zeit viel Mitgefühl gezeigt.', exampleRu: 'В трудное время она проявила ко мне много сочувствия.' },
    { de: 'Laune', article: 'die', plural: '-n', pos: 'noun', ru: 'настроение', example: 'Warum hast du heute so schlechte Laune?', exampleRu: 'Почему у тебя сегодня такое плохое настроение?' },
    { de: 'Wut', article: 'die', plural: '–', pos: 'noun', ru: 'ярость, гнев', example: 'Vor Wut hat er die Tür zugeknallt.', exampleRu: 'В ярости он хлопнул дверью.' },
    { de: 'Liebeskummer', article: 'der', plural: '–', pos: 'noun', ru: 'несчастная любовь, страдания из-за любви', example: 'Seit der Trennung hat meine Schwester großen Liebeskummer.', exampleRu: 'После расставания моя сестра очень страдает.' },
    { de: 'Kompliment', article: 'das', plural: '-e', pos: 'noun', ru: 'комплимент', example: 'Er hat mir ein Kompliment für meine neue Frisur gemacht.', exampleRu: 'Он сделал мне комплимент по поводу новой причёски.' },
    { de: 'trösten', pos: 'verb', ru: 'утешать', example: 'Als ihr Hund gestorben ist, hat ihre beste Freundin sie getröstet.', exampleRu: 'Когда у неё умерла собака, лучшая подруга её утешала.' },
    { de: 'vertrauen', forms: '+ Dat', pos: 'verb', ru: 'доверять', example: 'Meiner Schwester vertraue ich mehr als allen anderen.', exampleRu: 'Своей сестре я доверяю больше всех.' },
    { de: 'sich verstehen', forms: 'mit + Dat; verstand, hat verstanden', pos: 'verb', ru: 'ладить, понимать друг друга', example: 'Mit meiner neuen Mitbewohnerin verstehe ich mich super.', exampleRu: 'С новой соседкой по квартире я отлично лажу.' },
    { de: 'verletzen', pos: 'verb', ru: 'ранить, обидеть', example: 'Deine Worte haben mich wirklich verletzt.', exampleRu: 'Твои слова меня по-настоящему ранили.' },
    { de: 'Lüge', article: 'die', plural: '-n', pos: 'noun', ru: 'ложь', example: 'Eine einzige Lüge kann viel Vertrauen kaputtmachen.', exampleRu: 'Одна-единственная ложь может разрушить много доверия.' },
    { de: 'Freundeskreis', article: 'der', plural: '-e', pos: 'noun', ru: 'круг друзей', example: 'In meinem Freundeskreis haben fast alle schon Kinder.', exampleRu: 'В моём кругу друзей почти у всех уже есть дети.' },
    { de: 'erleichtert', pos: 'adj', ru: 'с облегчением, почувствовавший облегчение', example: 'Wir waren sehr erleichtert, als endlich ihre Nachricht kam.', exampleRu: 'Мы почувствовали большое облегчение, когда наконец пришло её сообщение.' },
    { de: 'schüchtern', pos: 'adj', ru: 'застенчивый, робкий', example: 'Als Kind war sie so schüchtern, dass sie kaum gesprochen hat.', exampleRu: 'В детстве она была такой застенчивой, что почти не разговаривала.' },
    { de: 'ehrlich', pos: 'adj', ru: 'честный, искренний', example: 'Ein echter Freund ist ehrlich, auch wenn es wehtut.', exampleRu: 'Настоящий друг честен, даже если это больно.' },
    { de: 'beleidigt', pos: 'adj', ru: 'обиженный', example: 'Sie ist beleidigt, weil ich ihren Geburtstag vergessen habe.', exampleRu: 'Она обиделась, потому что я забыл про её день рождения.' },
    { de: 'anvertrauen', forms: 'jdm. etwas; vertraut an, vertraute an, hat anvertraut', pos: 'verb', ru: 'доверить (тайну, вещь)', example: 'Sie hat mir ein Geheimnis anvertraut, das ich niemandem erzählen darf.', exampleRu: 'Она доверила мне тайну, которую я никому не должен рассказывать.' },
  ],
  listening: {
    title: 'Streit unter besten Freundinnen',
    kind: 'dialog',
    text: `A: Hallo Jana! Du hast am Telefon so komisch geklungen. Was ist los?
B: Ach, Max, ehrlich gesagt geht es mir nicht so gut. Ich habe mich mit Sophie gestritten.
A: Mit Sophie? Mit der du seit der Grundschule befreundet bist? Was ist denn passiert?
B: Du weißt doch, dass ich mir seit Monaten Gedanken über einen neuen Job mache. Ich habe Sophie erzählt, dass ich mich bei einer Firma in Hamburg beworben habe. Das war ein Geheimnis! Und am Samstag auf der Party hat sie es allen erzählt – auch Tobias, dessen Mutter in meiner Firma arbeitet.
A: Oh nein. Weiß es dein Chef jetzt schon?
B: Keine Ahnung. Aber ich habe Angst davor. Ich war so wütend, dass ich Sophie vor allen Leuten angeschrien habe.
A: Und was sagt Sophie dazu?
B: Sie hat mir gestern eine lange Nachricht geschrieben. Es tut ihr schrecklich leid. Sie hatte zu viel getrunken und hat einfach nicht nachgedacht.
A: Weißt du, was ich glaube? Wer seit zwanzig Jahren befreundet ist, schafft auch so einen Streit. Sophie ist doch die Freundin, die dich damals getröstet hat, als dein Vater so krank war.
B: Ich weiß. Und jetzt habe ich auch ein schlechtes Gewissen, weil ich so laut geworden bin. Vieles, was ich gesagt habe, war wirklich gemein.
A: Dann schreib ihr nicht nur, sondern triff dich mit ihr. Nimm dir Zeit, und dann redet ihr in Ruhe.
B: Du hast recht. Ich schlage ihr vor, dass wir am Sonntag in das Café gehen, wo wir uns früher nach der Schule immer getroffen haben.
A: Gute Idee! Und wegen deines Chefs: Sprich am besten selbst mit ihm, bevor er es von anderen hört.
B: Puh, das wird schwer. Aber wahrscheinlich hast du recht. Danke, Max. Du bist ein echter Freund.`,
    questions: [
      {
        question: 'Warum geht es Jana nicht gut?',
        options: ['Sie hat ihren Job verloren.', 'Sie hat sich mit einer alten Freundin gestritten.', 'Ihr Vater ist krank geworden.'],
        answer: 1,
      },
      {
        question: 'Was hat Sophie gemacht?',
        options: [
          'Sie hat Janas Geheimnis anderen Leuten erzählt.',
          'Sie hat Jana nicht zu ihrer Party eingeladen.',
          'Sie hat sich bei einer Firma in Hamburg beworben.',
          'Sie hat Janas Chef angerufen.',
        ],
        answer: 0,
      },
      {
        question: 'Warum hat Jana ein schlechtes Gewissen?',
        options: ['Weil sie auf der Party zu viel getrunken hat.', 'Weil sie Sophie vor allen Leuten angeschrien hat.', 'Weil sie Sophies Nachricht nicht beantwortet hat.'],
        answer: 1,
      },
      {
        question: 'Was rät Max seiner Freundin?',
        options: [
          'Sie soll Sophie eine lange Nachricht schreiben.',
          'Sie soll eine Weile keinen Kontakt zu Sophie haben.',
          'Sie soll sich mit Sophie treffen und in Ruhe mit ihr reden.',
        ],
        answer: 2,
      },
      {
        question: 'Wo möchte Jana Sophie treffen?',
        options: ['Auf einer Party.', 'In ihrer alten Schule.', 'Bei Sophie zu Hause.', 'In einem Café, das sie von früher kennen.'],
        answer: 3,
      },
    ],
  },
  writing: {
    taskRu:
      'Ваша подруга Катя два месяца назад переехала в другой город. Она пишет вам, что чувствует себя там одиноко и пока не нашла друзей. Ответьте ей.',
    taskDe:
      'Ihre Freundin Katja ist vor zwei Monaten in eine andere Stadt gezogen. Sie schreibt Ihnen, dass sie sich dort einsam fühlt und noch keine Freunde gefunden hat. Antworten Sie ihr.',
    points: [
      'Zeigen Sie Verständnis für Katjas Situation.',
      'Erzählen Sie von einer ähnlichen Erfahrung.',
      'Geben Sie Tipps, wie man neue Leute kennenlernen kann.',
      'Schlagen Sie einen Besuch vor.',
    ],
    minWords: 90,
    usefulPhrases: [
      'Liebe Katja, vielen Dank für deine Nachricht.',
      'Ich kann mir gut vorstellen, wie du dich fühlst.',
      'Als ich nach …, habe ich mich auch …',
      'Wer neue Leute kennenlernen will, sollte …',
      'Vielleicht gibt es einen Verein, in dem …',
      'Was hältst du davon, wenn ich dich im … besuche? Liebe Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Устный экзамен, часть 2: вы представляете тему «Можно ли найти настоящих друзей в интернете?». Экзаменатор слушает и задаёт вопросы по вашей презентации.',
    aiRole:
      'Sie sind Prüferin bei der Goethe-Prüfung B1 (Sprechen, Teil 2 und 3). Die Kandidatin oder der Kandidat präsentiert das Thema „Kann man im Internet echte Freunde finden?“: eigene Erfahrung, Situation im Heimatland, Vor- und Nachteile, eigene Meinung, Abschluss. Hören Sie zu, ermutigen Sie freundlich, wenn die Person stockt, und stellen Sie nach der Präsentation ein bis zwei passende Rückfragen. Sprechen Sie klar auf B1-Niveau.',
    opener:
      'Guten Tag! Ihr Thema heißt: „Kann man im Internet echte Freunde finden?“ Bitte beginnen Sie mit Ihrer eigenen Erfahrung. Sie haben etwa drei Minuten Zeit.',
    tasksRu: [
      'Расскажите о собственном опыте: есть ли у вас друг, с которым вы познакомились онлайн (der Freund, den/mit dem …).',
      'Опишите ситуацию в вашей стране; используйте придаточное с dessen/deren или с предлогом.',
      'Назовите плюсы и минусы и выскажите своё мнение (Wer …, der …; Ich kann mir (nicht) vorstellen, dass …).',
      'Завершите презентацию и ответьте на вопрос экзаменатора.',
    ],
    readAloud: [
      'Meine beste Freundin, deren Familie in Riga lebt, kenne ich seit dem Kindergarten.',
      'Das ist der Freund, mit dem ich mich nie streite.',
      'Ich wünsche mir, dass wir uns bald wiedersehen.',
    ],
  },
};
