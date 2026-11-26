import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'a1-exam-1',
  level: 'A1',
  title: 'Übungstest A1 – 1',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 25,
    parts: [
      {
        teil: 1,
        minutes: 8,
        title: 'Eine Notiz und eine E-Mail',
        textType: 'Notiz / E-Mail',
        texts: [
          {
            label: 'Text 1',
            heading: 'Notiz auf dem Küchentisch',
            body: `Hallo Paul,
ich bin heute bis 18 Uhr im Büro. Kannst du bitte einkaufen gehen? Wir brauchen Brot, Milch und Äpfel. Der Supermarkt ist bis 20 Uhr geöffnet. Das Geld liegt auf dem Tisch in der Küche. Am Abend kommen Oma und Opa zum Essen.
Danke!
Sabine`,
          },
          {
            label: 'Text 2',
            heading: 'E-Mail',
            body: `Liebe Frau Klein,
ich kann morgen leider nicht in den Deutschkurs kommen. Mein Sohn ist krank, und ich muss mit ihm zum Arzt gehen. Am Donnerstag bin ich wieder da. Können Sie mir bitte die Hausaufgaben schicken?
Vielen Dank und viele Grüße
Ivan Petrow`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text 1 und die Aufgaben 1 bis 3. Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст 1 и задания 1–3. Утверждения верны (richtig) или неверны (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: '1. Sabine arbeitet heute bis 20 Uhr.',
                answer: false,
                explanationRu: 'Сабина в офисе «bis 18 Uhr» — до 18 часов. До 20 часов открыт супермаркет.',
              },
              {
                kind: 'tf',
                statement: '2. Paul soll Brot, Milch und Äpfel kaufen.',
                answer: true,
                explanationRu: '«Wir brauchen Brot, Milch und Äpfel» — нам нужны хлеб, молоко и яблоки. Пауль должен их купить.',
              },
              {
                kind: 'tf',
                statement: '3. Am Abend kommen Freunde zum Essen.',
                answer: false,
                explanationRu: 'Вечером придут не друзья, а бабушка и дедушка: «Oma und Opa».',
              },
            ],
          },
          {
            instructionDe: 'Lesen Sie den Text 2 und die Aufgaben 4 und 5. Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст 2 и задания 4 и 5. Утверждения верны (richtig) или неверны (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: '4. Ivan kommt morgen nicht in den Kurs.',
                answer: true,
                explanationRu: '«Ich kann morgen leider nicht in den Deutschkurs kommen» — завтра он не может прийти на курс.',
              },
              {
                kind: 'tf',
                statement: '5. Ivan ist krank.',
                answer: false,
                explanationRu: 'Болен не Иван, а его сын: «Mein Sohn ist krank».',
              },
            ],
          },
        ],
      },
      {
        teil: 2,
        minutes: 9,
        title: 'Informationen suchen',
        textType: 'Anzeigen / Internetseiten',
        texts: [
          { label: '6a', heading: 'www.bahn-reisen.de', body: 'Mit dem Zug von Hamburg nach Berlin: jeden Tag, alle zwei Stunden. Fahrkarten ab 49 Euro.' },
          { label: '6b', heading: 'www.fernbus-blau.de', body: 'Mit dem Bus von Hamburg nach Berlin: am Wochenende schon ab 15 Euro! Jetzt online buchen.' },
          { label: '6c', heading: 'www.flug-schnell.de', body: 'Flüge von Hamburg nach München und Wien. Heute buchen, morgen fliegen!' },
          { label: '7a', heading: 'Volkshochschule Nord', body: 'Deutsch A1: Montag und Mittwoch von 9 bis 12 Uhr. Für Mütter und Väter: Kinderbetreuung im Haus.' },
          { label: '7b', heading: 'Sprachschule Linde', body: 'Deutsch für Anfänger: Dienstag und Donnerstag von 18.30 bis 20 Uhr. Neue Kurse ab 1. März.' },
          { label: '7c', heading: 'Englisch-Café', body: 'Englisch sprechen und Kaffee trinken: jeden Freitag um 19 Uhr. Alle sind willkommen!' },
          { label: '8a', heading: 'Wohnung zu vermieten', body: '3-Zimmer-Wohnung, 85 m², Balkon. Kindergarten und Schule in der Nähe. Miete: 950 Euro.' },
          { label: '8b', heading: 'Zimmer frei', body: 'Kleines Zimmer für Studenten, 14 m², 300 Euro. Bad und Küche für alle.' },
          { label: '8c', heading: 'Büro zu vermieten', body: 'Büro im Zentrum, zwei Räume, 60 m². Miete: 800 Euro.' },
          { label: '9a', heading: 'Hallenbad am Park', body: 'Montag bis Freitag 7 bis 21 Uhr, Samstag 9 bis 18 Uhr. Sonntag geschlossen.' },
          { label: '9b', heading: 'Sportgeschäft Fit', body: 'Badehosen und Badeanzüge – jetzt 20 % billiger! Montag bis Samstag 10 bis 20 Uhr.' },
          { label: '9c', heading: 'Freibad Sonnenwiese', body: 'Von Mai bis September jeden Tag von 8 bis 20 Uhr geöffnet – auch am Wochenende!' },
          { label: '10a', heading: 'PC-Doktor', body: 'Ihr Computer funktioniert nicht? Wir kommen zu Ihnen nach Hause! Telefon: 0176 445566.' },
          { label: '10b', heading: 'Elektro-Markt', body: 'Neue Fernseher und Handys – sehr billig! Nur diese Woche.' },
          { label: '10c', heading: 'Computerkurs ab 60', body: 'Lernen Sie E-Mails schreiben! Jeden Montag um 10 Uhr. Für Menschen ab 60 Jahren.' },
        ],
        tasks: [
          {
            instructionDe:
              'Lesen Sie die Texte und die Aufgaben 6 bis 10. Wo finden Sie Informationen? Wählen Sie die richtige Lösung a, b oder c.',
            instructionRu:
              'Прочитайте тексты и задания 6–10. Где вы найдёте нужную информацию? Выберите правильный ответ a, b или c (объявления с номером задания: 6a, 6b, 6c и т. д.).',
            items: [
              {
                kind: 'mc',
                question: '6. Sie sind in Hamburg und möchten am Samstag nach Berlin fahren. Die Fahrt soll nicht viel kosten.',
                options: ['www.bahn-reisen.de', 'www.fernbus-blau.de', 'www.flug-schnell.de'],
                answer: 1,
                explanationRu: 'Автобус в выходные стоит от 15 евро — это дешевле, чем поезд (от 49 евро). Самолёты летят только в Мюнхен и Вену.',
              },
              {
                kind: 'mc',
                question: '7. Sie arbeiten von 8 bis 17 Uhr. Sie möchten am Abend Deutsch lernen.',
                options: ['Volkshochschule Nord', 'Sprachschule Linde', 'Englisch-Café'],
                answer: 1,
                explanationRu: 'Курс в «Sprachschule Linde» — с 18:30 до 20:00, то есть вечером. В VHS курс утром, а в кафе учат английский.',
              },
              {
                kind: 'mc',
                question: '8. Sie suchen eine Wohnung für Ihre Familie. Sie haben zwei Kinder.',
                options: ['Wohnung zu vermieten', 'Zimmer frei', 'Büro zu vermieten'],
                answer: 0,
                explanationRu: 'Для семьи подходит квартира из трёх комнат, рядом детский сад и школа. Маленькая комната — для студентов, а офис — не жильё.',
              },
              {
                kind: 'mc',
                question: '9. Es ist Juli. Sie möchten am Sonntag schwimmen gehen.',
                options: ['Hallenbad am Park', 'Sportgeschäft Fit', 'Freibad Sonnenwiese'],
                answer: 2,
                explanationRu: 'Открытый бассейн работает с мая по сентябрь каждый день, и в выходные тоже. Крытый бассейн в воскресенье закрыт, а в магазине не плавают.',
              },
              {
                kind: 'mc',
                question: '10. Ihr Computer ist kaputt. Sie suchen Hilfe.',
                options: ['PC-Doktor', 'Elektro-Markt', 'Computerkurs ab 60'],
                answer: 0,
                explanationRu: '«Ihr Computer funktioniert nicht? Wir kommen zu Ihnen» — «PC-Doktor» чинит компьютеры. Магазин продаёт новые вещи, а курс учит писать e-mail.',
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        minutes: 8,
        title: 'Schilder und Aushänge',
        textType: 'Schilder',
        texts: [
          {
            label: '11',
            heading: 'An der Tür einer Arztpraxis',
            body: `Praxis Dr. Schneider
Sprechzeiten:
Montag, Dienstag, Donnerstag: 8–12 Uhr und 15–18 Uhr
Mittwoch und Freitag: 8–12 Uhr`,
          },
          {
            label: '12',
            heading: 'An der Tür einer Bäckerei',
            body: `Liebe Kundinnen und Kunden,
wir haben Urlaub! Vom 1. bis 14. August ist die Bäckerei geschlossen. Ab 15. August sind wir wieder für Sie da.`,
          },
          {
            label: '13',
            heading: 'Im Kaufhaus',
            body: `Erdgeschoss: Taschen, Kosmetik
1. Stock: Damenmode
2. Stock: Herrenmode, Kindermode
3. Stock: Spielwaren, Café`,
          },
          {
            label: '14',
            heading: 'Im Hausflur',
            body: `Liebe Mieterinnen und Mieter,
am Dienstag, 10. Mai, gibt es von 9 bis 12 Uhr kein Wasser. Wir haben Reparaturen im Haus.
Ihre Hausverwaltung`,
          },
          {
            label: '15',
            heading: 'Vor einem Restaurant',
            body: `Restaurant Adler
Heute Mittag: Suppe und Salat – 7,50 €
Getränke extra
Montag Ruhetag`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie die Texte und die Aufgaben 11 bis 15. Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте тексты (таблички и объявления) и задания 11–15. Утверждения верны (richtig) или неверны (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: '11. Arztpraxis: Sie können am Mittwoch um 16 Uhr zum Arzt gehen.',
                answer: false,
                explanationRu: 'В среду врач принимает только с 8 до 12. После обеда (15–18) — только в понедельник, вторник и четверг.',
              },
              {
                kind: 'tf',
                statement: '12. Bäckerei: Die Bäckerei ist im August zwei Wochen geschlossen.',
                answer: true,
                explanationRu: 'С 1 по 14 августа пекарня закрыта — это две недели.',
              },
              {
                kind: 'tf',
                statement: '13. Kaufhaus: Sie möchten eine Hose für Ihren Sohn kaufen. Sie gehen in den 1. Stock.',
                answer: false,
                explanationRu: 'Детская одежда («Kindermode») — на 2-м этаже. На 1-м этаже — женская одежда.',
              },
              {
                kind: 'tf',
                statement: '14. Hausflur: Am Dienstag von 9 bis 12 Uhr haben die Mieter kein Wasser.',
                answer: true,
                explanationRu: '«…gibt es von 9 bis 12 Uhr kein Wasser» — во вторник с 9 до 12 воды нет.',
              },
              {
                kind: 'tf',
                statement: '15. Restaurant: Am Montag kann man im Restaurant Adler nicht essen.',
                answer: true,
                explanationRu: '«Ruhetag» — выходной день ресторана. В понедельник ресторан закрыт.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────── HÖREN ─────────────────────────────
  hoeren: {
    minutes: 20,
    parts: [
      {
        teil: 1,
        instructionDe:
          'Sie hören sechs kurze Gespräche. Sie hören jedes Gespräch zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите шесть коротких диалогов. Каждый диалог звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Im Kleidungsgeschäft',
            kind: 'dialog',
            speakers: { A: 'Kundin', B: 'Verkäufer' },
            situation: 'Eine Frau kauft einen Pullover.',
            playCount: 2,
            text: `A: Entschuldigung, wie viel kostet der Pullover hier?
B: Der blaue? Der kostet 39 Euro.
A: Und der rote?
B: Der rote ist heute im Angebot. Er kostet nur 25 Euro.
A: Gut, dann nehme ich den Pullover in Rot.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 1: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 1: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie viel bezahlt die Frau?',
                    options: ['39 Euro.', '25 Euro.', '35 Euro.'],
                    answer: 1,
                    explanationRu: 'Женщина берёт красный свитер, а он сегодня стоит 25 евро. 39 евро стоит синий.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Ins Kino',
            kind: 'dialog',
            speakers: { A: 'Frau', B: 'Tom' },
            situation: 'Zwei Freunde sprechen über einen Film.',
            playCount: 2,
            text: `A: Hallo Tom! Wann beginnt der Film heute Abend?
B: Um acht Uhr. Aber wir treffen uns schon um halb acht vor dem Kino, okay?
A: Um halb acht? Das ist gut. Ich komme mit dem Bus.
B: Prima. Bis später!`,
            tasks: [
              {
                instructionDe: 'Aufgabe 2: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 2: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann treffen sich die zwei?',
                    options: ['Um 7.30 Uhr.', 'Um 8.00 Uhr.', 'Um 8.30 Uhr.'],
                    answer: 0,
                    explanationRu: '«Wir treffen uns schon um halb acht» — «halb acht» = 7:30. Фильм начинается в 8.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Restaurant',
            kind: 'dialog',
            speakers: { A: 'Mann', B: 'Kellnerin' },
            situation: 'Ein Mann fragt nach der Toilette.',
            playCount: 2,
            text: `A: Entschuldigung, wo ist hier die Toilette?
B: Die Toiletten sind im ersten Stock. Gehen Sie hier die Treppe hoch und dann links.
A: Im ersten Stock, dann links. Vielen Dank!
B: Bitte, gern.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 3: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 3: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wo ist die Toilette?',
                    options: ['Im Erdgeschoss rechts.', 'Im ersten Stock links.', 'Im ersten Stock rechts.'],
                    answer: 1,
                    explanationRu: '«im ersten Stock … dann links» — на первом этаже (по-русски «на втором»), налево.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Beim Arzt anrufen',
            kind: 'dialog',
            speakers: { A: 'Praxis Dr. Berger', B: 'Lena Wolf' },
            situation: 'Eine Frau ruft in einer Arztpraxis an.',
            playCount: 2,
            text: `A: Praxis Dr. Berger, guten Tag.
B: Guten Tag, hier ist Lena Wolf. Ich möchte bitte einen Termin.
A: Gern. Wie ist Ihre Telefonnummer, Frau Wolf?
B: Meine Nummer ist null eins sieben drei, vier fünf, sechs zwei, acht null.
A: Danke. Wir rufen Sie heute noch an.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 4: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 4: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie ist die Telefonnummer von Frau Wolf?',
                    options: ['0173 45 62 80', '0173 54 26 80', '0137 45 62 08'],
                    answer: 0,
                    explanationRu: 'Она диктует по одной цифре: null eins sieben drei (0173), vier fünf (45), sechs zwei (62), acht null (80).',
                  },
                ],
              },
            ],
          },
          {
            title: 'Ins Schwimmbad',
            kind: 'dialog',
            speakers: { A: 'Freundin', B: 'Freund' },
            situation: 'Zwei Freunde möchten zusammen schwimmen gehen.',
            playCount: 2,
            text: `A: Wann hast du Zeit? Gehen wir zusammen ins Schwimmbad?
B: Am Montag und am Dienstag muss ich arbeiten. Aber am Mittwoch habe ich frei.
A: Am Mittwoch kann ich leider nicht. Und am Donnerstag?
B: Ja, Donnerstag geht auch. Super!`,
            tasks: [
              {
                instructionDe: 'Aufgabe 5: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 5: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann gehen die zwei ins Schwimmbad?',
                    options: ['Am Dienstag.', 'Am Mittwoch.', 'Am Donnerstag.'],
                    answer: 2,
                    explanationRu: 'В среду не может подруга, поэтому они договариваются на четверг: «Donnerstag geht auch».',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Café',
            kind: 'dialog',
            speakers: { A: 'Kellnerin', B: 'Gast' },
            situation: 'Ein Mann bestellt im Café.',
            playCount: 2,
            text: `A: Guten Tag! Was möchten Sie trinken?
B: Einen Tee, bitte. Ach nein, ich nehme lieber ein Wasser.
A: Ein Wasser, gern. Und was möchten Sie essen?
B: Ich möchte die Gemüsesuppe, bitte.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 6: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 6: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was trinkt der Mann?',
                    options: ['Tee.', 'Kaffee.', 'Wasser.'],
                    answer: 2,
                    explanationRu: 'Сначала он говорит «чай», но потом передумывает: «Ach nein, ich nehme lieber ein Wasser».',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 2,
        instructionDe:
          'Sie hören vier Durchsagen. Sie hören jeden Text einmal. Sind die Aussagen richtig oder falsch?',
        instructionRu:
          'Вы услышите четыре объявления. Каждый текст звучит только один раз. Утверждения верны (richtig) или неверны (falsch)?',
        segments: [
          {
            title: 'Am Bahnhof',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage am Bahnhof.',
            playCount: 1,
            text: 'Achtung am Gleis 3! Der Regionalzug nach Bremen, Abfahrt zehn Uhr fünfzehn, hat heute zwanzig Minuten Verspätung. Wir bitten um Entschuldigung. Ich wiederhole: Der Regionalzug nach Bremen hat zwanzig Minuten Verspätung.',
            tasks: [
              {
                instructionDe: 'Aufgabe 7: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 7: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Zug nach Bremen fährt zwanzig Minuten später.',
                    answer: true,
                    explanationRu: '«…hat heute zwanzig Minuten Verspätung» — поезд опаздывает на 20 минут, значит, отправится на 20 минут позже.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Supermarkt',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Supermarkt.',
            playCount: 1,
            text: 'Liebe Kundinnen und Kunden! Heute im Angebot: Ein Kilo Tomaten kostet nur einen Euro neunundneunzig. Und in unserer Bäckerei gibt es frische Brötchen: sechs Stück für zwei Euro. Wir wünschen Ihnen einen schönen Tag!',
            tasks: [
              {
                instructionDe: 'Aufgabe 8: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 8: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Ein Kilo Tomaten kostet heute 2,99 Euro.',
                    answer: false,
                    explanationRu: 'Килограмм помидоров стоит «einen Euro neunundneunzig» — 1,99 евро, а не 2,99.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Am Flughafen',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage am Flughafen.',
            playCount: 1,
            text: 'Liebe Fluggäste nach Istanbul! Ihr Flug startet heute nicht von Ausgang B 12, sondern von Ausgang C 4. Bitte gehen Sie jetzt zum Ausgang C 4. Vielen Dank und einen guten Flug!',
            tasks: [
              {
                instructionDe: 'Aufgabe 9: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 9: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Die Fluggäste nach Istanbul sollen zum Ausgang C 4 gehen.',
                    answer: true,
                    explanationRu: '«nicht von Ausgang B 12, sondern von Ausgang C 4» — не от выхода B 12, а от выхода C 4.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Geschäft',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage in einem Geschäft.',
            playCount: 1,
            text: 'Liebe Kundinnen und Kunden, unser Geschäft schließt in zehn Minuten. Bitte gehen Sie jetzt zur Kasse. Morgen sind wir ab neun Uhr wieder für Sie da. Vielen Dank und auf Wiedersehen!',
            tasks: [
              {
                instructionDe: 'Aufgabe 10: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 10: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Das Geschäft öffnet morgen um zehn Uhr.',
                    answer: false,
                    explanationRu: '«Morgen sind wir ab neun Uhr wieder für Sie da» — завтра магазин открывается в 9, а «in zehn Minuten» — это «через 10 минут» (сегодня закрывается).',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        instructionDe:
          'Sie hören fünf Nachrichten am Telefon. Sie hören jeden Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu:
          'Вы услышите пять сообщений на автоответчике. Каждый текст звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Nachricht von Kerstin',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo Anna, hier ist Kerstin. Wir kochen heute Abend zusammen, oder? Kannst du bitte Reis und eine Flasche Wein mitbringen? Gemüse und Fleisch habe ich schon. Ich warte um sieben Uhr bei mir zu Hause. Bis dann!',
            tasks: [
              {
                instructionDe: 'Aufgabe 11: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 11: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was soll Anna mitbringen?',
                    options: ['Reis und Wein.', 'Gemüse und Fleisch.', 'Reis und Gemüse.'],
                    answer: 0,
                    explanationRu: '«Kannst du bitte Reis und eine Flasche Wein mitbringen?» Овощи и мясо у Керстин уже есть.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von der Autowerkstatt',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, Herr Fischer, hier ist die Autowerkstatt Klein. Ihr Auto ist fertig. Sie können es heute bis achtzehn Uhr abholen. Morgen, am Samstag, haben wir leider geschlossen. Die Reparatur kostet zweihundertvierzig Euro. Auf Wiederhören!',
            tasks: [
              {
                instructionDe: 'Aufgabe 12: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 12: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann kann Herr Fischer sein Auto abholen?',
                    options: ['Heute bis 18 Uhr.', 'Morgen ab 8 Uhr.', 'Am Samstag.'],
                    answer: 0,
                    explanationRu: '«Sie können es heute bis achtzehn Uhr abholen». Завтра, в субботу, мастерская закрыта.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von Jonas',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo Mama, ich bin es, Jonas. Ich komme heute später nach Hause, so um halb sieben. Nach der Schule spiele ich noch Fußball mit Max. Ich telefoniere mit dem Handy von Max. Tschüss, bis später!',
            tasks: [
              {
                instructionDe: 'Aufgabe 13: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 13: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was macht Jonas nach der Schule?',
                    options: ['Er geht sofort nach Hause.', 'Er spielt Fußball.', 'Er macht Hausaufgaben bei Max.'],
                    answer: 1,
                    explanationRu: '«Nach der Schule spiele ich noch Fußball mit Max» — после школы он играет в футбол, поэтому придёт домой позже.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von der Arztpraxis',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, Frau Yilmaz, hier ist die Praxis Dr. Hoffmann. Sie haben morgen um zehn Uhr einen Termin. Leider ist Frau Doktor Hoffmann morgen nicht da. Können Sie am Freitag um zehn Uhr kommen? Bitte rufen Sie uns zurück. Danke!',
            tasks: [
              {
                instructionDe: 'Aufgabe 14: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 14: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann ist der neue Termin?',
                    options: ['Morgen um 10 Uhr.', 'Am Freitag um 10 Uhr.', 'Am Freitag um 12 Uhr.'],
                    answer: 1,
                    explanationRu: 'Завтра врача не будет, поэтому новый термин: «am Freitag um zehn Uhr» — в пятницу в 10.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von Stefan',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo Peter, hier ist Stefan. Ich bin jetzt am Bahnhof, aber mein Zug fährt erst um fünfzehn Uhr vierzig. Ich bin also um siebzehn Uhr in Köln. Kannst du mich bitte vom Bahnhof abholen? Ruf mich bitte an. Danke!',
            tasks: [
              {
                instructionDe: 'Aufgabe 15: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 15: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann ist Stefan in Köln?',
                    options: ['Um 15.40 Uhr.', 'Um 15.00 Uhr.', 'Um 17.00 Uhr.'],
                    answer: 2,
                    explanationRu: 'В 15:40 поезд только отправляется. В Кёльне Штефан будет «um siebzehn Uhr» — в 17:00.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────── SCHREIBEN ───────────────────────────
  schreiben: {
    minutes: 20,
    tasks: [
      {
        teil: 1,
        instructionDe:
          'Ihre Freundin Olga Smirnova möchte einen Deutschkurs machen. Im Anmeldeformular fehlen fünf Informationen. Helfen Sie Ihrer Freundin und schreiben Sie die fünf fehlenden Informationen (1) bis (5) in das Formular.',
        instructionRu:
          'Ваша подруга Ольга Смирнова хочет записаться на курс немецкого. В анкете не хватает пяти данных. Помогите подруге: впишите пять недостающих данных (1)–(5). Вся нужная информация есть в тексте о подруге.',
        situationDe: `Olga Smirnova ist am 3. April 1975 in Samara in Russland geboren. Sie wohnt mit ihrem Mann in Leipzig, Gartenstraße 12, 04109 Leipzig. Ihre Telefonnummer ist 0341 556677. Sie arbeitet als Köchin in einem Hotel. Sie hat nur am Abend Zeit. Sie möchte mit Karte bezahlen.

ANMELDUNG – Sprachschule Linde
Familienname: Smirnova
Vorname: Olga
Geburtsdatum: (1) ____________
Geburtsort / Land: (2) ____________
Straße, Hausnummer: Gartenstraße 12
Postleitzahl, Wohnort: (3) ____________
Telefon: 0341 556677
Beruf: (4) ____________
Kurszeit: vormittags / nachmittags / abends: (5) ____________
Zahlung: mit Karte`,
        points: [
          '(1) Geburtsdatum',
          '(2) Geburtsort und Land',
          '(3) Postleitzahl und Wohnort',
          '(4) Beruf',
          '(5) Kurszeit (vormittags / nachmittags / abends)',
        ],
        minWords: 10,
        register: 'formell',
        minutes: 10,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Sie haben am Samstag Geburtstag und machen eine Party. Schreiben Sie Ihrem Freund Martin eine Einladung. Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.',
        instructionRu:
          'В субботу у вас день рождения, вы устраиваете вечеринку. Напишите другу Мартину приглашение: по одному-два предложения к каждому пункту (около 30 слов). Не забудьте обращение (Lieber Martin,) и приветствие в конце (Viele Grüße).',
        situationDe: 'Geburtstagsparty am Samstag – Einladung an Ihren Freund Martin.',
        points: ['Warum schreiben Sie?', 'Wann und wo ist die Party?', 'Was soll Martin mitbringen?'],
        minWords: 30,
        register: 'informell',
        minutes: 10,
        maxPoints: 60,
      },
    ],
  },

  // ─────────────────────────── SPRECHEN ───────────────────────────
  sprechen: {
    minutes: 15,
    tasks: [
      {
        teil: 1,
        mode: 'presentation',
        instructionDe:
          'Sich vorstellen. Stellen Sie sich vor. Sagen Sie etwas zu allen Punkten. Danach buchstabieren Sie Ihren Namen und sagen eine Zahl (zum Beispiel Ihre Telefonnummer).',
        instructionRu:
          'Представьтесь. Скажите что-нибудь по каждому пункту: имя, возраст, страна, где живёте, какие языки знаете, профессия, хобби. Потом экзаменатор попросит продиктовать по буквам имя и назвать число (например, номер телефона).',
        situationDe: 'Name? – Alter? – Land? – Wohnort? – Sprachen? – Beruf? – Hobby?',
        points: ['Name', 'Alter', 'Land', 'Wohnort', 'Sprachen', 'Beruf', 'Hobby'],
        aiRole:
          'Prüferin in der Prüfung Start Deutsch 1. Sie hört zu, wenn der Teilnehmer sich vorstellt. Danach bittet sie ihn, seinen Namen zu buchstabieren, und fragt nach einer Zahl (Telefonnummer oder Hausnummer). Sie spricht sehr langsam und sehr einfach, nur kurze Sätze im Präsens. Wenn der Teilnehmer nicht weiterweiß, hilft sie mit einer einfachen Frage, zum Beispiel: „Woher kommen Sie?“ oder „Wo wohnen Sie?“',
        opener: 'Guten Tag! Ich bin Frau Becker. Bitte stellen Sie sich vor.',
        minutes: 3,
        maxPoints: 20,
      },
      {
        teil: 2,
        mode: 'dialog',
        instructionDe:
          'Fragen stellen und beantworten. Thema: Essen und Trinken. Auf den Karten stehen Wörter. Stellen Sie mit dem Wort eine Frage. Ihre Partnerin antwortet. Dann fragt Ihre Partnerin, und Sie antworten.',
        instructionRu:
          'Задавать вопросы и отвечать на них. Тема: еда и напитки. На карточках написаны слова. Задайте вопрос с этим словом — партнёр ответит. Потом партнёр задаёт вопрос вам, и вы отвечаете. Например: «Frühstück» → «Was essen Sie zum Frühstück?»',
        situationDe: 'Thema: Essen und Trinken\nKarten: Frühstück – Lieblingsessen – Obst – Getränke – Restaurant – Kochen',
        points: ['Frühstück', 'Lieblingsessen', 'Obst', 'Getränke', 'Restaurant', 'Kochen'],
        aiRole:
          'Gesprächspartnerin in der Prüfung Start Deutsch 1, Thema „Essen und Trinken“. Sie stellt abwechselnd mit dem Teilnehmer einfache Fragen zu den Wörtern auf den Karten (Frühstück, Lieblingsessen, Obst, Getränke, Restaurant, Kochen) und beantwortet seine Fragen in ein bis zwei kurzen Sätzen. Nach ihrer Antwort sagt sie: „Jetzt fragen Sie, bitte.“ Sie spricht sehr langsam und einfach, nur Präsens, keine langen Sätze.',
        opener: 'Hallo! Meine Karte ist „Frühstück“. Was essen Sie zum Frühstück?',
        minutes: 6,
        maxPoints: 40,
      },
      {
        teil: 3,
        mode: 'dialog',
        instructionDe:
          'Bitten formulieren und darauf reagieren. Auf den Karten sehen Sie Bilder. Bitten Sie Ihren Partner um etwas. Ihr Partner reagiert. Dann bittet Ihr Partner Sie um etwas, und Sie reagieren.',
        instructionRu:
          'Сформулировать просьбу и отреагировать на неё. На карточках — картинки (здесь — слова). Попросите партнёра о чём-то, что изображено на карточке, — он отреагирует. Потом партнёр просит вас, а вы реагируете. Например: «Können Sie bitte das Fenster aufmachen?» — «Ja, gern.»',
        situationDe: 'Karten (Bilder): ein Fenster – ein Kugelschreiber – ein Glas Wasser – ein Wörterbuch – ein Handy – eine Tür',
        points: ['ein Fenster', 'ein Kugelschreiber', 'ein Glas Wasser', 'ein Wörterbuch', 'ein Handy', 'eine Tür'],
        aiRole:
          'Gesprächspartner in der Prüfung Start Deutsch 1. Er formuliert abwechselnd mit dem Teilnehmer eine höfliche Bitte zu einem Bild (Fenster, Kugelschreiber, Glas Wasser, Wörterbuch, Handy, Tür) und reagiert kurz auf die Bitten des Teilnehmers, zum Beispiel: „Ja, gern. Hier, bitte.“ oder „Tut mir leid, ich habe kein Wörterbuch.“ Er spricht sehr langsam und einfach, nur kurze Sätze.',
        opener: 'Können Sie bitte das Fenster aufmachen? Es ist sehr warm hier.',
        minutes: 6,
        maxPoints: 40,
      },
    ],
  },
};
