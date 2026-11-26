import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Wir warten ___ die Lehrerin.',
      options: ['auf', 'an', 'für', 'um'],
      answer: 0,
      explanationRu: 'warten auf + Akk. Предлог auf нужен всегда, даже если в русском его нет: «ждать учительницу».',
    },
    {
      type: 'choice',
      prompt: 'Ich denke oft ___ dich.',
      options: ['an', 'über', 'von', 'auf'],
      answer: 0,
      explanationRu: 'denken an + Akk. Русское «думаю о тебе» соблазняет сказать über, но правильно: Ich denke an dich.',
    },
    {
      type: 'choice',
      prompt: 'Er kümmert sich ___ seine kranke Mutter.',
      options: ['um', 'für', 'über', 'an'],
      answer: 0,
      explanationRu: 'sich kümmern um + Akk — заботиться о ком-то, ухаживать за кем-то.',
    },
    {
      type: 'choice',
      prompt: 'Wir haben gestern lange ___ das Problem gesprochen.',
      options: ['über', 'von', 'an', 'auf'],
      answer: 0,
      explanationRu: 'sprechen über + Akk (über das Problem). «von» бывает только с дательным падежом (von dem Problem), а здесь стоит das.',
    },
    {
      type: 'gap',
      prompt: 'Ich nehme jeden Dienstag ___ einem Yogakurs teil.',
      answers: ['an'],
      explanationRu: 'teilnehmen an + Dat — участвовать в чём-то. Здесь an требует дательного падежа: an einem Kurs.',
    },
    {
      type: 'gap',
      prompt: 'Hast du die Lehrerin schon ___ dem Preis gefragt?',
      answers: ['nach'],
      explanationRu: 'fragen nach + Dat — спрашивать о чём-то, узнавать что-то: nach dem Preis, nach dem Weg, nach der Uhrzeit.',
    },
    {
      type: 'choice',
      audio: 'Ich freue mich so auf den Urlaub!',
      prompt: 'Послушайте. Чему радуется человек?',
      options: ['Предстоящему отпуску', 'Подарку', 'Хорошей оценке'],
      answer: 0,
      explanationRu: '«Ich freue mich auf den Urlaub» — отпуск ещё впереди, поэтому auf.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe heute mein Zertifikat bekommen! Ich freue mich so ___ das Zertifikat.',
      options: ['über', 'auf', 'für', 'an'],
      answer: 0,
      explanationRu: 'Сертификат уже получен — радость о том, что уже есть: sich freuen über.',
    },
    {
      type: 'choice',
      prompt: 'Morgen kommt meine Schwester zu Besuch. Ich freue mich schon ___ ihren Besuch.',
      options: ['auf', 'über', 'an', 'um'],
      answer: 0,
      explanationRu: 'Визит будет завтра (в будущем) → sich freuen auf. Слово schon («уже») часто стоит рядом: Ich freue mich schon auf …',
    },
    {
      type: 'gap',
      prompt: 'Ich warte auf ___ Bus.',
      answers: ['den'],
      hintRu: 'der Bus',
      explanationRu: 'После auf в warten auf — Akkusativ: der Bus → den Bus.',
    },
    {
      type: 'gap',
      prompt: 'Ich spreche heute mit ___ Chef.',
      answers: ['dem'],
      hintRu: 'der Chef',
      explanationRu: 'mit всегда требует Dativ: der Chef → mit dem Chef.',
    },
    {
      type: 'gap',
      audio: 'Wir sprechen über die Hausaufgaben.',
      prompt: 'Послушайте и напишите пропущенный предлог: Wir sprechen ___ die Hausaufgaben.',
      answers: ['über', 'uber', 'ueber'],
      explanationRu: 'sprechen über + Akk — говорить о чём-то.',
    },
    {
      type: 'choice',
      prompt: '___ interessierst du dich? – Für Fotografie.',
      options: ['Wofür', 'Für wen', 'Worauf', 'Was'],
      answer: 0,
      explanationRu: 'Ответ — занятие (не человек), предлог für → вопрос wofür. Для человека было бы «Für wen?».',
    },
    {
      type: 'choice',
      prompt: '___ sprichst du gerade? – Mit meiner Mutter.',
      options: ['Mit wem', 'Womit', 'Mit wen', 'Wovon'],
      answer: 0,
      explanationRu: 'Ответ — человек, после mit — Dativ, поэтому «Mit wem?» (wem — дательный падеж от wer).',
    },
    {
      type: 'gap',
      prompt: '___ wartest du? – Auf die Antwort von der Schule.',
      answers: ['Worauf'],
      explanationRu: 'Ответ — вещь (ответ из школы), предлог auf начинается с гласной → wo + r + auf = worauf.',
    },
    {
      type: 'gap',
      prompt: '___ denkst du? – An meinen Urlaub.',
      answers: ['Woran'],
      explanationRu: 'denken an; отпуск — не человек → woran (с r, потому что an начинается с гласной).',
    },
    {
      type: 'choice',
      prompt: 'Denkst du an deinen Termin beim Arzt? – Ja, ich denke ___.',
      options: ['daran', 'an ihn', 'darauf', 'dafür'],
      answer: 0,
      explanationRu: 'Термин — вещь, а не человек, поэтому da + r + an = daran. «an ihn» говорят о человеке.',
    },
    {
      type: 'choice',
      prompt: 'Wartest du auf Peter? – Ja, ich warte ___.',
      options: ['auf ihn', 'darauf', 'auf es', 'dafür'],
      answer: 0,
      explanationRu: 'Петер — человек. Для людей не используют da-: предлог + местоимение в Akkusativ → auf ihn.',
    },
    {
      type: 'transform',
      instructionRu: 'Ответьте «да» коротко, без повтора слова: используйте da(r) + предлог.',
      prompt: 'Freust du dich auf die Ferien?',
      answers: ['Ja, ich freue mich darauf.', 'Ich freue mich darauf.', 'Ja, ich freue mich sehr darauf.', 'Ja, darauf freue ich mich.', 'Ja, ich freue mich schon darauf.'],
      explanationRu: 'Каникулы — не человек: auf die Ferien → darauf (r вставляем, потому что auf начинается с гласной).',
    },
    {
      type: 'transform',
      instructionRu: 'Ответьте «да» коротко: замените человека местоимением.',
      prompt: 'Sprichst du oft mit deiner Lehrerin?',
      answers: ['Ja, ich spreche oft mit ihr.', 'Ich spreche oft mit ihr.', 'Ja, mit ihr spreche ich oft.'],
      explanationRu: 'Учительница — человек, поэтому не «damit», а mit + местоимение в Dativ: mit ihr.',
    },
    {
      type: 'transform',
      instructionRu: 'Задайте вопрос о выделенной части (в скобках). Обращайтесь на «du».',
      prompt: 'Ich interessiere mich für Politik. (für Politik)',
      answers: ['Wofür interessierst du dich?'],
      explanationRu: 'Политика — вещь/тема → wo + für = wofür. Глагол на 2-м месте, sich → dich: Wofür interessierst du dich?',
    },
    {
      type: 'gap',
      audio: 'Worauf wartest du? – Auf den Zug nach Berlin.',
      prompt: 'Послушайте и допишите: Er wartet auf den ___ nach Berlin.',
      answers: ['Zug'],
      explanationRu: '«Worauf wartest du?» — «Чего ты ждёшь?» Ответ: «Auf den Zug nach Berlin» — поезда в Берлин.',
    },
    {
      type: 'order',
      words: ['Ich', 'bereite', 'mich', 'auf', 'die', 'Prüfung', 'vor.'],
      translationRu: 'Я готовлюсь к экзамену.',
      explanationRu: 'sich vorbereiten auf + Akk. Отделяемая приставка vor уходит в конец, mich стоит сразу после глагола.',
    },
    {
      type: 'order',
      words: ['Worüber', 'habt', 'ihr', 'im', 'Kurs', 'gesprochen?'],
      translationRu: 'О чём вы говорили на курсе?',
      explanationRu: 'Вопросительное слово worüber на 1-м месте, habt — на 2-м, причастие gesprochen — в конце.',
    },
    {
      type: 'choice',
      audio: 'Mit wem hast du gesprochen? – Mit dem Kursleiter.',
      prompt: 'Послушайте. С кем говорил человек?',
      options: ['С руководителем курса', 'С начальником', 'С коллегой'],
      answer: 0,
      explanationRu: '«Mit dem Kursleiter» — с руководителем курса. Вопрос о человеке: Mit wem?',
    },
    {
      type: 'gap',
      prompt: 'Ich habe mich für den Kurs angemeldet, weil ich mich ___ Computer interessiere.',
      answers: ['für', 'fur', 'fuer'],
      explanationRu: 'sich interessieren für + Akk; после weil глагол interessiere стоит в конце, а предлог — как обычно, перед существительным.',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich Zeit ___, lerne ich neue Wörter.',
      answers: ['habe'],
      explanationRu: 'Повторение (юнит 10): в части с wenn глагол стоит в конце, а вторая часть начинается с глагола (lerne ich).',
    },
    {
      type: 'choice',
      prompt: 'Die Kursleiterin hilft ___ Teilnehmern bei den Hausaufgaben.',
      options: ['den', 'die', 'der'],
      answer: 0,
      explanationRu: 'Повторение (юнит 9): helfen требует Dativ. Дательный падеж множественного числа: den Teilnehmern (с -n на конце).',
    },
    {
      type: 'gap',
      prompt: 'Gestern ___ ich nicht zum Kurs gegangen, weil ich krank war.',
      answers: ['bin'],
      explanationRu: 'Повторение (юнит 1): gehen — глагол движения, перфект с sein: ich bin gegangen.',
    },
  ],
  reading: [
    {
      title: 'Das neue Kursprogramm',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Deutsch für den Beruf (B1)',
          body: 'Montag und Mittwoch, 18–20.30 Uhr. Sie üben E-Mails, Telefongespräche und Bewerbungen. 12 Wochen, 150 Euro.',
        },
        {
          label: 'b',
          heading: 'Computer für Seniorinnen und Senioren',
          body: 'Donnerstag, 10–12 Uhr. Sie lernen E-Mails schreiben, im Internet suchen und mit der Familie per Video sprechen. 6 Wochen, 45 Euro.',
        },
        {
          label: 'c',
          heading: 'Kochen wie in Italien',
          body: 'Samstag, 14–18 Uhr, einmal im Monat. Wir kochen Pasta, Pizza und Tiramisu und essen dann zusammen. 25 Euro pro Termin.',
        },
        {
          label: 'd',
          heading: 'Fit nach der Arbeit: Yoga',
          body: 'Dienstag, 19–20 Uhr. Für Anfänger, gut gegen Rückenschmerzen. 10 Termine, 60 Euro.',
        },
        {
          label: 'e',
          heading: 'Englisch für die Reise (A1)',
          body: 'Freitag, 17–18.30 Uhr. Für Leute ohne Vorkenntnisse: Hotel, Restaurant, Weg fragen. 8 Wochen, 70 Euro.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welcher Kurs passt zu welcher Person? Für eine Person gibt es keinen passenden Kurs.',
          instructionRu: 'Прочитайте объявления. Какой курс подходит какому человеку? Для одного человека подходящего курса нет.',
          options: ['a: Deutsch für den Beruf', 'b: Computer für Senioren', 'c: Kochen wie in Italien', 'd: Yoga', 'e: Englisch für die Reise'],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Frau Schulz ist 68. Ihre Enkel wohnen in Kanada. Sie möchte am Computer mit ihnen sprechen und sie dabei sehen.',
              answer: 1,
              explanationRu: 'Компьютер для пожилых: там учат разговаривать с семьёй по видео (per Video sprechen).',
            },
            {
              kind: 'match',
              prompt: 'Herr Nowak hat eine neue Stelle. Er muss viele E-Mails auf Deutsch schreiben. Er arbeitet bis 17 Uhr.',
              answer: 0,
              explanationRu: '«Deutsch für den Beruf»: тренируют деловые письма, занятия вечером (с 18 часов), после работы.',
            },
            {
              kind: 'match',
              prompt: 'Lena sitzt den ganzen Tag am Schreibtisch und hat oft Rückenschmerzen. Sie sucht Sport für den Abend.',
              answer: 3,
              explanationRu: 'Йога по вторникам в 19 часов, «gut gegen Rückenschmerzen» — хорошо помогает при болях в спине.',
            },
            {
              kind: 'match',
              prompt: 'Herr Demir fährt im Sommer nach London. Er spricht noch kein Wort Englisch.',
              answer: 4,
              explanationRu: 'Английский для путешествий, уровень A1, «ohne Vorkenntnisse» — без предварительных знаний.',
            },
            {
              kind: 'match',
              prompt: 'Anna interessiert sich für Malen und möchte am Wochenende einen Kurs machen.',
              answer: -1,
              explanationRu: 'Курса рисования (Malen) нет. Курс в субботу — это кулинария, он не подходит.',
            },
          ],
        },
      ],
    },
    {
      title: 'Mit 61 wieder im Kurs',
      textType: 'Forumsbeitrag',
      texts: [
        {
          body: `Hallo zusammen! Ich heiße Viktor, bin 61 Jahre alt und wohne mit meiner Frau in Leipzig. Vor zwei Jahren sind wir aus Kasachstan nach Deutschland gekommen.

Am Anfang hatte ich Angst vor der deutschen Sprache. Die vielen Artikel, die langen Wörter! Aber meine Tochter hat gesagt: „Papa, du schaffst das.“ Also habe ich mich bei der Volkshochschule angemeldet.

Jetzt besuche ich einen Kurs auf Niveau A2. Wir sind zwölf Teilnehmer aus acht Ländern. Unsere Kursleiterin, Frau Brandt, ist sehr geduldig. Wenn wir etwas nicht verstehen, erklärt sie es noch einmal. Im Kurs sprechen wir über ganz normale Dinge: über den Arzt, über die Arbeit, über das Einkaufen.

Am schwierigsten finde ich die Verben mit Präpositionen. Warum wartet man „auf“ den Bus? Ich schreibe die Verben auf kleine Karten und lerne sie im Bus auswendig.

Im Juni mache ich die Prüfung. Ich freue mich schon darauf – na ja, ein bisschen Angst habe ich auch. Und danach? Ich interessiere mich sehr für Geschichte. Vielleicht besuche ich dann einen Geschichtskurs, auf Deutsch natürlich!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Viktor ist vor zwei Jahren nach Deutschland gekommen.', answer: true, explanationRu: '«Vor zwei Jahren sind wir aus Kasachstan nach Deutschland gekommen».' },
            { kind: 'tf', statement: 'Am Anfang hatte Viktor keine Angst vor der deutschen Sprache.', answer: false, explanationRu: '«Am Anfang hatte ich Angst vor der deutschen Sprache» — сначала он боялся.' },
            { kind: 'tf', statement: 'Im Kurs sind Teilnehmer aus zwölf Ländern.', answer: false, explanationRu: 'Участников двенадцать, а стран — восемь: «zwölf Teilnehmer aus acht Ländern».' },
            {
              kind: 'tf',
              statement: 'Wenn die Teilnehmer etwas nicht verstehen, erklärt Frau Brandt es noch einmal.',
              answer: true,
              explanationRu: '«Wenn wir etwas nicht verstehen, erklärt sie es noch einmal».',
            },
            { kind: 'tf', statement: 'Viktor lernt die Verben mit Präpositionen im Bus.', answer: true, explanationRu: '«…und lerne sie im Bus auswendig».' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was findet Viktor am schwierigsten?',
              options: ['Die Artikel', 'Die Verben mit Präpositionen', 'Die Aussprache'],
              answer: 1,
              explanationRu: '«Am schwierigsten finde ich die Verben mit Präpositionen». Об артиклях он говорит, что боялся их в начале.',
            },
            {
              kind: 'mc',
              question: 'Wofür interessiert sich Viktor?',
              options: ['Für Geschichte', 'Für Musik', 'Für Computer'],
              answer: 0,
              explanationRu: '«Ich interessiere mich sehr für Geschichte».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Informationen von der Kursleiterin',
      kind: 'monolog',
      situation: 'Sie hören die Kursleiterin am Ende des Unterrichts.',
      text: `So, liebe Teilnehmerinnen und Teilnehmer, zum Schluss noch ein paar Informationen. Nächste Woche haben wir am Mittwoch keinen Unterricht, weil ich an einer Weiterbildung teilnehme. Am Freitag sehen wir uns wie immer um neun Uhr. Bitte denken Sie an die Hausaufgaben: Übung vier und fünf auf Seite 62. Am Freitag sprechen wir dann über das Thema „Wohnen“. Und noch etwas: Die Anmeldung für die Prüfung ist bis zum 15. Mai. Wenn Sie an der Prüfung teilnehmen möchten, gehen Sie bitte ins Büro im Erdgeschoss. Die Prüfung kostet 120 Euro. Wenn Sie Fragen haben, können Sie auch Frau Yilmaz im Büro fragen. Also, bis Freitag!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum gibt es am Mittwoch keinen Unterricht?',
              options: ['Die Kursleiterin ist krank.', 'Die Kursleiterin nimmt an einer Weiterbildung teil.', 'Am Mittwoch ist ein Feiertag.'],
              answer: 1,
              explanationRu: '«…weil ich an einer Weiterbildung teilnehme» — преподавательница сама будет на повышении квалификации.',
            },
            {
              kind: 'mc',
              question: 'Welche Hausaufgaben gibt es?',
              options: ['Übung vier und fünf auf Seite 62', 'Übung vier auf Seite 26', 'Einen Text über das Thema „Wohnen“'],
              answer: 0,
              explanationRu: '«Übung vier und fünf auf Seite 62». О жилье будут говорить на занятии в пятницу.',
            },
            {
              kind: 'mc',
              question: 'Bis wann muss man sich für die Prüfung anmelden?',
              options: ['Bis Freitag', 'Bis zum 15. Mai', 'Bis zum 5. Mai'],
              answer: 1,
              explanationRu: '«Die Anmeldung für die Prüfung ist bis zum 15. Mai».',
            },
            {
              kind: 'mc',
              question: 'Wo meldet man sich für die Prüfung an?',
              options: ['Im Kursraum', 'Im Büro im Erdgeschoss', 'Bei der Kursleiterin per E-Mail'],
              answer: 1,
              explanationRu: '«…gehen Sie bitte ins Büro im Erdgeschoss».',
            },
          ],
        },
      ],
    },
    {
      title: 'In der Pause',
      kind: 'dialog',
      speakers: { A: 'Olena', B: 'Karim' },
      situation: 'Zwei Teilnehmer aus einem Deutschkurs sprechen nach dem Unterricht.',
      text: `A: Hallo Karim, worauf wartest du denn?
B: Auf meine Frau. Sie holt mich heute mit dem Auto ab. Und du, Olena? Gehst du schon nach Hause?
A: Nein, ich treffe mich gleich mit meiner Lerngruppe. Wir bereiten uns auf die Prüfung vor.
B: Ach, die Prüfung … Ich denke jeden Tag daran. Ich habe ein bisschen Angst.
A: Warum? Dein Deutsch ist doch gut!
B: Sprechen geht. Aber beim Schreiben mache ich viele Fehler. Ich ärgere mich immer darüber.
A: Dann komm doch mit in unsere Lerngruppe! Wir treffen uns jeden Donnerstag in der Bibliothek.
B: Gern! Wann genau?
A: Um halb fünf. Wir schreiben zusammen E-Mails und sprechen über die Fehler.
B: Super, das hilft mir bestimmt. Oh, da ist meine Frau. Bis Donnerstag!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Karim wartet auf seine Frau.', answer: true, explanationRu: '«Worauf wartest du?» — «Auf meine Frau».' },
            { kind: 'tf', statement: 'Olena geht jetzt nach Hause.', answer: false, explanationRu: 'Нет, она встречается со своей учебной группой: «ich treffe mich gleich mit meiner Lerngruppe».' },
            { kind: 'tf', statement: 'Karim hat die meisten Probleme beim Sprechen.', answer: false, explanationRu: 'Говорить у него получается («Sprechen geht»), а ошибки он делает в письме.' },
            { kind: 'tf', statement: 'Die Lerngruppe trifft sich jeden Donnerstag in der Bibliothek.', answer: true, explanationRu: '«Wir treffen uns jeden Donnerstag in der Bibliothek».' },
            { kind: 'tf', statement: 'Karim möchte nicht in die Lerngruppe kommen.', answer: false, explanationRu: 'Он соглашается: «Gern!» и «Bis Donnerstag!».' },
          ],
        },
      ],
    },
  ],
};
