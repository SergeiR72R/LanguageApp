import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wo ___ du gestern? Ich habe dich angerufen.',
      options: ['warst', 'wart', 'war', 'bist'],
      answer: 0,
      explanationRu: 'Вчера → прошедшее время. Претерит от sein для du — warst.',
    },
    {
      type: 'choice',
      prompt: 'Ihr ___ damals noch keine Kinder.',
      options: ['hattet', 'hattest', 'hatten', 'hatte'],
      answer: 0,
      explanationRu: 'Для ihr претерит от haben — hattet (как в настоящем времени: ihr habt → ihr hattet).',
    },
    {
      type: 'choice',
      audio: 'Ich konnte nicht kommen.',
      prompt: 'Что вы слышите?',
      options: ['Ich konnte nicht kommen.', 'Ich kann nicht kommen.', 'Ich wollte nicht kommen.'],
      answer: 0,
      explanationRu: 'Звучит konnte — «не смог» (прошедшее время от können).',
    },
    {
      type: 'choice',
      prompt: 'Als Kind ___ ich keinen Kaffee trinken. Das war verboten.',
      options: ['durfte', 'musste', 'wollte'],
      answer: 0,
      explanationRu: 'Das war verboten — «это было запрещено». Значит, «мне нельзя было»: ich durfte nicht / keinen …',
    },
    {
      type: 'choice',
      prompt: 'Meine Mutter war krank. Ich ___ für die Familie kochen.',
      options: ['musste', 'war', 'hatte'],
      answer: 0,
      explanationRu: 'Мама болела, поэтому «мне пришлось готовить» — müssen → musste. Инфинитив kochen стоит в конце.',
    },
    {
      type: 'choice',
      prompt: 'Как правильно сказать «В детстве я хорошо плавал (умел плавать)»?',
      options: ['Als Kind konnte ich gut schwimmen.', 'Als Kind könnte ich gut schwimmen.', 'Als Kind kann ich gut schwimmen.'],
      answer: 0,
      explanationRu: 'Прошлое → konnte (без умлаута). könnte — «мог бы», kann — настоящее время.',
    },
    {
      type: 'gap',
      prompt: 'Wir ___ in der Schule eine Uniform tragen.',
      answers: ['mussten'],
      hintRu: 'müssen',
      explanationRu: 'müssen → mussten (wir). Умлаут в претерите исчезает.',
    },
    {
      type: 'gap',
      prompt: '___ du als Kind ein Fahrrad?',
      answers: ['Hattest'],
      hintRu: 'haben',
      explanationRu: 'Вопрос без W-слова: глагол на 1-м месте. haben → du hattest.',
    },
    {
      type: 'gap',
      prompt: 'Mein Opa ___ sehr gut Geschichten erzählen.',
      answers: ['konnte'],
      hintRu: 'können',
      explanationRu: 'können → konnte. У er (он) окончания нет.',
    },
    {
      type: 'gap',
      prompt: 'Ihr ___ damals noch sehr jung.',
      answers: ['wart'],
      hintRu: 'sein',
      explanationRu: 'Претерит от sein для ihr — wart (без -e!).',
    },
    {
      type: 'gap',
      prompt: 'Was ___ Sie als Kind werden?',
      answers: ['wollten'],
      hintRu: 'wollen',
      explanationRu: 'wollen → wollten (Sie, вежливая форма). Инфинитив werden стоит в конце.',
    },
    {
      type: 'gap',
      prompt: 'Früher ___ es hier keinen Supermarkt.',
      answers: ['gab'],
      hintRu: 'es gibt → прошедшее время',
      explanationRu: 'es gibt → es gab: «раньше здесь не было супермаркета».',
    },
    {
      type: 'gap',
      audio: 'Kindheit',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Kindheit'],
      explanationRu: 'die Kindheit — детство. Существительные пишутся с большой буквы, суффикс -heit.',
    },
    {
      type: 'gap',
      audio: 'Meine Schwester durfte nicht ins Kino gehen.',
      prompt: 'Напишите пропущенное слово: Meine Schwester durfte nicht ins ___ gehen.',
      answers: ['Kino'],
      explanationRu: 'Сестре нельзя было ходить в кино: ins Kino gehen.',
    },
    {
      type: 'order',
      words: ['Als', 'Kind', 'durfte', 'ich', 'nicht', 'fernsehen.'],
      translationRu: 'В детстве мне нельзя было смотреть телевизор.',
      explanationRu: 'Als Kind на 1-м месте, модальный глагол durfte — на 2-м, подлежащее ich — после него, инфинитив fernsehen — в конце.',
    },
    {
      type: 'order',
      words: ['Wir', 'mussten', 'jeden', 'Tag', 'Hausaufgaben', 'machen.'],
      translationRu: 'Нам каждый день нужно было делать домашние задания.',
      explanationRu: 'mussten на 2-м месте, инфинитив machen — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте в претерит.',
      prompt: 'Ich will Ärztin werden.',
      answers: ['Ich wollte Ärztin werden.'],
      explanationRu: 'wollen → ich wollte. Инфинитив werden остаётся в конце.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (перфект). Ich ___ in einem Dorf aufgewachsen.',
      options: ['bin', 'habe', 'hat'],
      answer: 0,
      explanationRu: 'aufwachsen — изменение состояния, перфект с sein: ich bin aufgewachsen.',
    },
    {
      type: 'gap',
      prompt: 'Повторение (перфект). Wir haben 1975 ___.',
      answers: ['geheiratet'],
      hintRu: 'heiraten',
      explanationRu: 'heiraten — правильный глагол: ge- + heirat + -et = geheiratet.',
    },
    {
      type: 'choice',
      prompt: 'Повторение A1. Ich habe meinen Opa oft besucht. Ich habe ___ sehr geliebt.',
      options: ['ihn', 'ihm', 'er'],
      answer: 0,
      explanationRu: 'lieben требует аккузатива: er → ihn («его»).',
    },
  ],
  reading: [
    {
      title: 'Mein erster Schultag',
      textType: 'Blogbeitrag',
      texts: [
        {
          body: `Es war der 1. September 1966. Ich war sieben Jahre alt und sehr nervös. Meine Mutter hatte keine Zeit, sie musste arbeiten. Also ist mein Opa mit mir zur Schule gegangen. Ich hatte Blumen für die Lehrerin dabei, wie alle Kinder.

Unsere Lehrerin, Anna Petrowna, war schon alt und sehr streng, aber auch nett. In der Klasse waren 38 Kinder! Ich durfte neben meiner Freundin Olga sitzen. Das war gut, denn ich war sehr schüchtern.

Am ersten Tag mussten wir nicht viel machen: Wir haben ein Lied gesungen und unsere Namen geschrieben. Am Abend wollte ich gar nicht schlafen – ich wollte sofort wieder zur Schule gehen!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wer ist mit dem Kind zur Schule gegangen?', options: ['Die Mutter', 'Der Opa', 'Die Freundin Olga'], answer: 1, explanationRu: '«Meine Mutter hatte keine Zeit … Also ist mein Opa mit mir zur Schule gegangen».' },
            { kind: 'mc', question: 'Wie war die Lehrerin?', options: ['Jung und lustig', 'Alt und streng, aber nett', 'Alt und schüchtern'], answer: 1, explanationRu: '«war schon alt und sehr streng, aber auch nett». Застенчивым (schüchtern) был сам ребёнок.' },
            { kind: 'mc', question: 'Wie viele Kinder waren in der Klasse?', options: ['7', '38', '66'], answer: 1, explanationRu: '«In der Klasse waren 38 Kinder!» 7 — возраст ребёнка, 66 — из года 1966.' },
            { kind: 'mc', question: 'Was haben die Kinder am ersten Tag gemacht?', options: ['Sie haben viel gerechnet.', 'Sie haben gesungen und ihre Namen geschrieben.', 'Sie haben Blumen gekauft.'], answer: 1, explanationRu: '«Wir haben ein Lied gesungen und unsere Namen geschrieben».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Am Abend wollte das Kind nicht mehr zur Schule gehen.', answer: false, explanationRu: 'Наоборот: «ich wollte sofort wieder zur Schule gehen» — ребёнок хотел снова в школу.' },
          ],
        },
      ],
    },
    {
      title: 'Schule früher und heute',
      textType: 'Forumsbeiträge',
      texts: [
        { label: 'Werner, 72', body: 'Als Kind musste ich nach der Schule immer auf dem Bauernhof helfen. Ich hatte wenig Zeit für Hausaufgaben. In der Schule durften wir nicht sprechen, und der Lehrer war sehr streng. Aber ich war gern in der Schule, denn ich wollte viel lernen.' },
        { label: 'Swetlana, 55', body: 'Ich bin in Moskau zur Schule gegangen. Wir mussten eine Schuluniform tragen, das fand ich schrecklich. Mein Lieblingsfach war Musik, ich konnte gut singen. Nach der Schule war ich oft im Sportverein.' },
        { label: 'Jonas, 16', body: 'Meine Oma erzählt oft von früher: Sie hatte nur ein Buch für jedes Fach und keinen Computer. Heute ist alles anders. Wir lernen mit Tablets und dürfen im Unterricht viel diskutieren. Aber wir haben auch viel Stress und viele Tests.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Beiträge. Wer sagt das? Werner, Swetlana oder Jonas?',
          instructionRu: 'Прочитайте сообщения. Кто это говорит: Вернер, Светлана или Йонас?',
          options: ['Werner', 'Swetlana', 'Jonas'],
          items: [
            { kind: 'match', prompt: 'Diese Person musste nach der Schule arbeiten.', answer: 0, explanationRu: 'Вернер: «musste ich nach der Schule immer auf dem Bauernhof helfen».' },
            { kind: 'match', prompt: 'Diese Person fand die Schulkleidung nicht schön.', answer: 1, explanationRu: 'Светлана: школьную форму она находила ужасной («schrecklich»).' },
            { kind: 'match', prompt: 'Diese Person lernt mit Tablets.', answer: 2, explanationRu: 'Йонас: «Wir lernen mit Tablets».' },
            { kind: 'match', prompt: 'Diese Person konnte gut singen.', answer: 1, explanationRu: 'Светлана: «ich konnte gut singen».' },
            { kind: 'match', prompt: 'Diese Person durfte im Unterricht nicht sprechen.', answer: 0, explanationRu: 'Вернер: «In der Schule durften wir nicht sprechen».' },
            { kind: 'match', prompt: 'Diese Person sagt: Die Schule macht heute auch Stress.', answer: 2, explanationRu: 'Йонас: «wir haben auch viel Stress und viele Tests».' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Ein Anruf von einem Schulfreund',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Hallo Sergej, hier ist Wladimir – Wolodja aus deiner Klasse in Tomsk! Weißt du noch? Wir haben immer zusammen im Hof Fußball gespielt. Ich habe deine Nummer von Irina bekommen. Und jetzt die Neuigkeit: Im Juni machen wir ein Klassentreffen! Es ist genau fünfzig Jahre nach dem Schulabschluss. Leider kann nicht jeder kommen, aber wir sind schon fünfzehn Leute. Das Treffen ist am 14. Juni um 18 Uhr im Restaurant „Sibirien“ in Berlin. Kannst du kommen? Ruf mich bitte bis Ende Mai an. Meine Nummer ist 0176 33 48 21. Bis bald!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Nachricht. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте сообщение. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Woher kennt Wladimir Sergej?', options: ['Aus der Schule', 'Von der Arbeit', 'Aus dem Fußballverein'], answer: 0, explanationRu: '«Wolodja aus deiner Klasse in Tomsk» — они учились в одном классе. Футбол они играли во дворе, а не в клубе.' },
            { kind: 'mc', question: 'Wann ist das Klassentreffen?', options: ['Am 14. Juni', 'Ende Mai', 'Am 15. Juni'], answer: 0, explanationRu: '«Das Treffen ist am 14. Juni». До конца мая нужно только позвонить.' },
            { kind: 'mc', question: 'Wo ist das Treffen?', options: ['In Tomsk', 'In einem Restaurant in Berlin', 'Bei Irina zu Hause'], answer: 1, explanationRu: '«im Restaurant „Sibirien“ in Berlin».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Sergej soll bis Ende Mai anrufen.', answer: true, explanationRu: '«Ruf mich bitte bis Ende Mai an» — позвонить до конца мая.' },
          ],
        },
      ],
    },
    {
      title: 'Ein altes Foto',
      kind: 'dialog',
      speakers: { A: 'Natalia', B: 'Karin' },
      situation: 'Zwei Freundinnen sehen ein altes Foto an.',
      text: `A: Schau mal, das Foto habe ich gestern im Keller gefunden.
B: Wer ist das Mädchen hier? Bist du das?
A: Ja, da war ich fünf. Und das ist mein Bruder Sascha.
B: Ihr seht so lustig aus! Wo war das?
A: Im Garten von meiner Oma. Wir waren jeden Sommer drei Monate bei ihr auf dem Land.
B: Drei Monate? So lange?
A: Ja, die Sommerferien waren damals sehr lang. Wir durften den ganzen Tag draußen spielen, das war toll. Aber wir mussten auch helfen: Wasser holen, Beeren sammeln …
B: Ich war im Sommer immer im Ferienlager. Das war nicht so toll, denn ich war oft allein und hatte keine Freunde dort.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Natalia hat das Foto im Keller gefunden.', answer: true, explanationRu: '«das Foto habe ich gestern im Keller gefunden».' },
            { kind: 'tf', statement: 'Auf dem Foto ist Natalia sieben Jahre alt.', answer: false, explanationRu: '«da war ich fünf» — ей было пять лет.' },
            { kind: 'tf', statement: 'Die Kinder waren jeden Sommer bei der Oma.', answer: true, explanationRu: '«Wir waren jeden Sommer drei Monate bei ihr auf dem Land».' },
            { kind: 'tf', statement: 'Bei der Oma mussten die Kinder nicht helfen.', answer: false, explanationRu: '«Aber wir mussten auch helfen: Wasser holen, Beeren sammeln» — помогать приходилось.' },
            { kind: 'tf', statement: 'Karin war im Sommer gern im Ferienlager.', answer: false, explanationRu: '«Das war nicht so toll» — ей там не нравилось, она была одна.' },
          ],
        },
      ],
    },
  ],
};
