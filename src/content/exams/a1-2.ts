import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'a1-exam-2',
  level: 'A1',
  title: 'Übungstest A1 – 2',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 25,
    parts: [
      {
        teil: 1,
        minutes: 8,
        title: 'Eine Nachricht und eine E-Mail',
        textType: 'Nachricht / E-Mail',
        texts: [
          {
            label: 'Text 1',
            heading: 'Nachricht von Petra',
            body: `Hallo Lisa,
ich bin heute im Krankenhaus bei meiner Mutter. Sie hat ein Problem mit dem Bein. Ich bin erst um 21 Uhr wieder zu Hause. Kannst du bitte die Kinder um 16 Uhr vom Kindergarten abholen? Das Essen für die Kinder ist im Kühlschrank.
Vielen Dank!
Petra`,
          },
          {
            label: 'Text 2',
            heading: 'E-Mail',
            body: `Lieber Herr Braun,
vielen Dank für Ihre E-Mail. Leider kann ich am Montag nicht zu unserem Termin kommen. Ich bin bis Mittwoch in Wien. Geht es am Donnerstag um 14 Uhr? Ich bringe die Fotos von unserem neuen Produkt mit.
Mit freundlichen Grüßen
Katrin Lehmann`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text 1 und die Aufgaben 1 bis 3. Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст 1 и задания 1–3. Утверждения верны (richtig) или неверны (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: '1. Petras Mutter ist im Krankenhaus.',
                answer: true,
                explanationRu: '«Ich bin heute im Krankenhaus bei meiner Mutter» — Петра в больнице у мамы, у мамы проблема с ногой.',
              },
              {
                kind: 'tf',
                statement: '2. Lisa soll die Kinder um 16 Uhr abholen.',
                answer: true,
                explanationRu: '«Kannst du bitte die Kinder um 16 Uhr vom Kindergarten abholen?» — забрать детей из детского сада в 16 часов.',
              },
              {
                kind: 'tf',
                statement: '3. Petra kocht am Abend für die Kinder.',
                answer: false,
                explanationRu: 'Петра будет дома только в 21 час. Еда для детей уже готова и стоит в холодильнике («im Kühlschrank»).',
              },
            ],
          },
          {
            instructionDe: 'Lesen Sie den Text 2 und die Aufgaben 4 und 5. Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте текст 2 и задания 4 и 5. Утверждения верны (richtig) или неверны (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: '4. Frau Lehmann ist am Montag in Wien.',
                answer: true,
                explanationRu: '«Ich bin bis Mittwoch in Wien» — до среды она в Вене, значит, в понедельник тоже.',
              },
              {
                kind: 'tf',
                statement: '5. Frau Lehmann möchte am Donnerstag um 10 Uhr kommen.',
                answer: false,
                explanationRu: 'Она предлагает четверг, но в 14 часов: «am Donnerstag um 14 Uhr».',
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
          { label: '6a', heading: 'www.berlin-rad.de', body: 'Fahrräder mieten in Berlin: ab 10 Euro pro Tag. Sie bekommen das Fahrrad am Hauptbahnhof.' },
          { label: '6b', heading: 'www.fahrrad-shop.de', body: 'Neue Fahrräder für Kinder und Erwachsene – billig kaufen im Online-Shop!' },
          { label: '6c', heading: 'www.berlin-auto.de', body: 'Autos mieten in Berlin: kleine und große Autos ab 39 Euro pro Tag.' },
          { label: '7a', heading: 'Steakhaus Texas', body: 'Steaks, Burger und Würstchen – Fleisch vom Grill! Jeden Tag von 12 bis 23 Uhr.' },
          { label: '7b', heading: 'Café Morgenrot', body: 'Frühstück, Kaffee und Kuchen. Geöffnet von 7 bis 14 Uhr.' },
          { label: '7c', heading: 'Restaurant Grünes Blatt', body: 'Vegetarisches Essen: Salate, Suppen, Gemüse aus der Region. Geöffnet von 17 bis 23 Uhr.' },
          { label: '8a', heading: 'Bäckerei Krause sucht Verkäufer/in', body: 'Arbeitszeit: Montag bis Samstag von 6 bis 12 Uhr.' },
          { label: '8b', heading: 'Restaurant Adria sucht Kellner/in', body: 'Arbeitszeit: 17 bis 23 Uhr, auch am Wochenende.' },
          { label: '8c', heading: 'Hotel am See sucht Mitarbeiter/in für die Rezeption', body: 'Arbeitszeit: in der Nacht, von 22 bis 6 Uhr.' },
          { label: '9a', heading: 'www.tv-programm.de', body: 'Was kommt heute im Fernsehen? Filme, Sport und Nachrichten – das ganze Programm.' },
          { label: '9b', heading: 'www.kleinanzeigen-nord.de', body: 'Hier verkaufen Sie alles: Möbel, Kleidung, Fernseher, Fahrräder. Ihre Anzeige ist kostenlos!' },
          { label: '9c', heading: 'www.elektro-reparatur.de', body: 'Ihr Fernseher ist kaputt? Wir reparieren schnell und billig.' },
          { label: '10a', heading: 'www.muenchen-kultur.de', body: 'Museen, Theater und Konzerte in München: alle Termine für die nächste Woche.' },
          { label: '10b', heading: 'www.wetter-heute.de', body: 'Das Wetter in Deutschland: heute, morgen und die nächsten sieben Tage. Wählen Sie Ihre Stadt!' },
          { label: '10c', heading: 'www.muenchen-hotel.de', body: 'Hotels in München: Zimmer ab 59 Euro pro Nacht. Jetzt online buchen!' },
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
                question: '6. Sie machen Urlaub in Berlin. Sie möchten zwei Tage mit dem Fahrrad fahren. Sie haben kein Fahrrad.',
                options: ['www.berlin-rad.de', 'www.fahrrad-shop.de', 'www.berlin-auto.de'],
                answer: 0,
                explanationRu: '«Fahrräder mieten» — взять велосипед напрокат, от 10 евро в день. Покупать новый велосипед для отпуска не нужно, а «berlin-auto» — машины.',
              },
              {
                kind: 'mc',
                question: '7. Sie möchten am Abend mit Freunden essen gehen. Sie essen kein Fleisch.',
                options: ['Steakhaus Texas', 'Café Morgenrot', 'Restaurant Grünes Blatt'],
                answer: 2,
                explanationRu: '«Vegetarisches Essen» — вегетарианская еда, открыто вечером (17–23). В стейкхаусе — мясо, а кафе открыто только до 14.',
              },
              {
                kind: 'mc',
                question: '8. Sie suchen Arbeit. Sie können nur am Vormittag arbeiten.',
                options: [
                  'Bäckerei Krause sucht Verkäufer/in',
                  'Restaurant Adria sucht Kellner/in',
                  'Hotel am See sucht Mitarbeiter/in für die Rezeption',
                ],
                answer: 0,
                explanationRu: 'В пекарне работают с 6 до 12 — это утро («Vormittag»). В ресторане работают вечером, в отеле — ночью.',
              },
              {
                kind: 'mc',
                question: '9. Sie haben einen alten Fernseher. Sie möchten ihn verkaufen.',
                options: ['www.tv-programm.de', 'www.kleinanzeigen-nord.de', 'www.elektro-reparatur.de'],
                answer: 1,
                explanationRu: '«Hier verkaufen Sie alles … Fernseher» — на сайте объявлений можно продать телевизор. Остальные сайты — программа ТВ и ремонт.',
              },
              {
                kind: 'mc',
                question: '10. Sie sind in München. Wie ist das Wetter morgen?',
                options: ['www.muenchen-kultur.de', 'www.wetter-heute.de', 'www.muenchen-hotel.de'],
                answer: 1,
                explanationRu: '«Das Wetter … heute, morgen und die nächsten sieben Tage» — прогноз погоды, можно выбрать свой город.',
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
            heading: 'Am Bürgeramt',
            body: `Bürgeramt Mitte
Öffnungszeiten:
Montag bis Freitag: 8–13 Uhr
Donnerstag auch: 14–18 Uhr
Bitte nehmen Sie eine Nummer!`,
          },
          {
            label: '12',
            heading: 'An der Bushaltestelle',
            body: `Achtung!
Vom 3. bis 20. März hält der Bus Linie 5 nicht hier. Wir haben eine Baustelle. Die Haltestelle ist jetzt 200 Meter weiter in der Schillerstraße.`,
          },
          {
            label: '13',
            heading: 'An der Tür vom Supermarkt',
            body: `Liebe Kunden,
Hunde müssen leider draußen bleiben!
Vielen Dank.`,
          },
          {
            label: '14',
            heading: 'In der Sprachschule',
            body: `Deutschkurs A1 – Raum 12
Heute ist der Kurs nicht in Raum 12, sondern in Raum 21 im 2. Stock.`,
          },
          {
            label: '15',
            heading: 'Am Museum',
            body: `Stadtmuseum
Eintritt: Erwachsene 6 Euro, Kinder bis 14 Jahre frei
Jeden Mittwoch: Eintritt für alle frei!`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie die Texte und die Aufgaben 11 bis 15. Sind die Aussagen richtig oder falsch?',
            instructionRu: 'Прочитайте тексты (таблички и объявления) и задания 11–15. Утверждения верны (richtig) или неверны (falsch)?',
            items: [
              {
                kind: 'tf',
                statement: '11. Bürgeramt: Sie können am Donnerstag um 16 Uhr zum Bürgeramt gehen.',
                answer: true,
                explanationRu: 'В четверг ведомство работает ещё и после обеда, с 14 до 18. 16 часов — подходит.',
              },
              {
                kind: 'tf',
                statement: '12. Bushaltestelle: Der Bus Linie 5 hält am 10. März an dieser Haltestelle.',
                answer: false,
                explanationRu: 'С 3 по 20 марта автобус здесь не останавливается («hält … nicht hier») — 10 марта входит в это время.',
              },
              {
                kind: 'tf',
                statement: '13. Supermarkt: Sie dürfen mit Ihrem Hund in den Supermarkt gehen.',
                answer: false,
                explanationRu: '«Hunde müssen leider draußen bleiben» — собаки должны оставаться снаружи.',
              },
              {
                kind: 'tf',
                statement: '14. Sprachschule: Der Deutschkurs ist heute im 2. Stock.',
                answer: true,
                explanationRu: 'Сегодня курс в кабинете 21 «im 2. Stock» — на втором этаже.',
              },
              {
                kind: 'tf',
                statement: '15. Museum: Erwachsene bezahlen am Mittwoch 6 Euro.',
                answer: false,
                explanationRu: '«Jeden Mittwoch: Eintritt für alle frei» — по средам вход бесплатный для всех.',
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
            title: 'Am Fahrkartenschalter',
            kind: 'dialog',
            speakers: { A: 'Reisende', B: 'Mitarbeiter am Schalter' },
            situation: 'Eine Frau kauft eine Fahrkarte.',
            playCount: 2,
            text: `A: Guten Tag. Eine Fahrkarte nach Hamburg, bitte.
B: Hin und zurück?
A: Nein, nur hin. Und wann fährt der nächste Zug?
B: Um elf Uhr zwanzig, von Gleis vier. Das macht 45 Euro.
A: Danke schön.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 1: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 1: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Von welchem Gleis fährt der Zug?',
                    options: ['Von Gleis 4.', 'Von Gleis 11.', 'Von Gleis 20.'],
                    answer: 0,
                    explanationRu: '«…von Gleis vier» — с четвёртого пути. 11:20 — это время отправления.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Auf dem Markt',
            kind: 'dialog',
            speakers: { A: 'Kundin', B: 'Verkäufer' },
            situation: 'Eine Frau kauft Obst auf dem Markt.',
            playCount: 2,
            text: `A: Guten Tag. Ich möchte Äpfel, bitte.
B: Gern. Wie viel möchten Sie?
A: Ein Kilo, bitte. Und dazu noch zwei Zitronen.
B: Also ein Kilo Äpfel und zwei Zitronen. Das macht drei Euro fünfzig.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 2: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 2: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was kauft die Frau?',
                    options: ['Zwei Kilo Äpfel und eine Zitrone.', 'Ein Kilo Zitronen und zwei Äpfel.', 'Ein Kilo Äpfel und zwei Zitronen.'],
                    answer: 2,
                    explanationRu: 'Продавец повторяет заказ: «ein Kilo Äpfel und zwei Zitronen» — килограмм яблок и два лимона.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Wo ist die Jacke?',
            kind: 'dialog',
            speakers: { A: 'Tochter', B: 'Vater' },
            situation: 'Ein Mädchen sucht seine Jacke.',
            playCount: 2,
            text: `A: Papa, wo ist meine Jacke?
B: Deine Jacke? Die ist nicht hier im Flur. Vielleicht ist sie in deinem Zimmer.
A: Nein, da ist sie nicht.
B: Ach, jetzt weiß ich es! Sie ist im Auto.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 3: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 3: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wo ist die Jacke?',
                    options: ['Im Flur.', 'Im Zimmer.', 'Im Auto.'],
                    answer: 2,
                    explanationRu: 'В коридоре и в комнате куртки нет. Папа вспоминает: «Sie ist im Auto» — она в машине.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Ein Termin beim Arzt',
            kind: 'dialog',
            speakers: { A: 'Praxis Dr. Lang', B: 'Klaus Meyer' },
            situation: 'Ein Mann ruft beim Arzt an.',
            playCount: 2,
            text: `A: Praxis Dr. Lang, guten Morgen.
B: Guten Morgen, hier ist Klaus Meyer. Ich habe Kopfschmerzen. Kann ich heute kommen?
A: Heute Vormittag geht es leider nicht. Können Sie um fünfzehn Uhr kommen?
B: Ja, das geht. Vielen Dank!`,
            tasks: [
              {
                instructionDe: 'Aufgabe 4: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 4: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann geht Herr Meyer zum Arzt?',
                    options: ['Heute Vormittag.', 'Heute um 15 Uhr.', 'Morgen um 15 Uhr.'],
                    answer: 1,
                    explanationRu: 'Утром сегодня нельзя, ему предлагают «um fünfzehn Uhr» — сегодня в 15 часов, и он соглашается.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Am Wochenende',
            kind: 'dialog',
            speakers: { A: 'Freund', B: 'Sara' },
            situation: 'Zwei Freunde sprechen über das Wochenende.',
            playCount: 2,
            text: `A: Was machst du am Wochenende, Sara?
B: Am Samstag spiele ich Tennis, und am Sonntag besuche ich meine Oma. Und du?
A: Ich gehe am Samstag ins Kino. Kommst du mit?
B: Nein, leider nicht. Am Samstag habe ich keine Zeit.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 5: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 5: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was macht Sara am Sonntag?',
                    options: ['Sie spielt Tennis.', 'Sie besucht ihre Oma.', 'Sie geht ins Kino.'],
                    answer: 1,
                    explanationRu: '«am Sonntag besuche ich meine Oma» — в воскресенье она навещает бабушку. Теннис — в субботу.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Hotel',
            kind: 'dialog',
            speakers: { A: 'Frau Novak', B: 'Hotelmitarbeiter' },
            situation: 'Eine Frau kommt im Hotel an.',
            playCount: 2,
            text: `A: Guten Abend. Ich habe ein Zimmer reserviert. Mein Name ist Novak.
B: Guten Abend, Frau Novak. Sie haben Zimmer 214. Das ist im zweiten Stock. Frühstück gibt es von sieben bis zehn Uhr.
A: Vielen Dank.`,
            tasks: [
              {
                instructionDe: 'Aufgabe 6: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 6: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Welche Zimmernummer hat Frau Novak?',
                    options: ['204', '214', '240'],
                    answer: 1,
                    explanationRu: '«zweihundertvierzehn» — 214. Внимание: в немецком числе сначала единицы, потом десятки: vier-zehn = 14.',
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
            text: 'Achtung, eine Information zu Gleis 7: Der ICE nach Frankfurt fährt heute von Gleis 9. Abfahrt dreizehn Uhr fünf. Ich wiederhole: Der ICE nach Frankfurt fährt heute nicht von Gleis 7, sondern von Gleis 9.',
            tasks: [
              {
                instructionDe: 'Aufgabe 7: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 7: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Zug nach Frankfurt fährt heute von Gleis 7.',
                    answer: false,
                    explanationRu: '«…fährt heute nicht von Gleis 7, sondern von Gleis 9» — поезд отправляется с 9-го пути.',
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
            text: 'Liebe Kundinnen und Kunden, unsere Kasse drei ist jetzt geöffnet. Bitte kommen Sie auch zur Kasse drei. Und heute im Angebot: Orangensaft, die Flasche nur neunundneunzig Cent. Vielen Dank für Ihren Einkauf!',
            tasks: [
              {
                instructionDe: 'Aufgabe 8: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 8: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Eine Flasche Orangensaft kostet heute 99 Cent.',
                    answer: true,
                    explanationRu: '«die Flasche nur neunundneunzig Cent» — бутылка стоит всего 99 центов.',
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
            text: 'Liebe Fluggäste nach Rom! Ihr Flug hat leider eine Stunde Verspätung. Er startet erst um sechzehn Uhr dreißig. Im Restaurant im ersten Stock bekommen Sie einen Kaffee kostenlos. Wir bitten um Entschuldigung.',
            tasks: [
              {
                instructionDe: 'Aufgabe 9: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 9: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Der Flug nach Rom startet eine Stunde später.',
                    answer: true,
                    explanationRu: '«Ihr Flug hat leider eine Stunde Verspätung» — рейс задерживается на час.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Kaufhaus',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Kaufhaus.',
            playCount: 1,
            text: 'Liebe Kundinnen und Kunden, heute ist unser Kaufhaus bis zweiundzwanzig Uhr geöffnet. In der Kinderabteilung im dritten Stock sind alle T-Shirts fünfzig Prozent billiger. Viel Spaß beim Einkaufen!',
            tasks: [
              {
                instructionDe: 'Aufgabe 10: Ist die Aussage richtig oder falsch?',
                instructionRu: 'Задание 10: верно или неверно?',
                items: [
                  {
                    kind: 'tf',
                    statement: 'Die Kinderabteilung ist im zweiten Stock.',
                    answer: false,
                    explanationRu: 'Детский отдел — «im dritten Stock», на третьем этаже.',
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
            title: 'Nachricht von der Sprachschule',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo, Herr Schulz, hier ist Monika Weber von der Sprachschule. Ihr Kurs am Dienstag beginnt nicht um neun Uhr, sondern erst um zehn Uhr. Der Raum ist auch neu: Raum fünfzehn im ersten Stock. Bis Dienstag!',
            tasks: [
              {
                instructionDe: 'Aufgabe 11: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 11: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann beginnt der Kurs am Dienstag?',
                    options: ['Um 9 Uhr.', 'Um 10 Uhr.', 'Um 15 Uhr.'],
                    answer: 1,
                    explanationRu: '«nicht um neun Uhr, sondern erst um zehn Uhr» — курс начинается в 10. 15 — это номер кабинета.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von Mehmet',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Hallo Tanja, hier ist Mehmet. Am Samstag habe ich Geburtstag. Ich mache eine kleine Party bei mir zu Hause, ab acht Uhr. Kommst du? Bring bitte etwas zu trinken mit. Einen Kuchen habe ich schon. Ruf mich an! Tschüss!',
            tasks: [
              {
                instructionDe: 'Aufgabe 12: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 12: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was soll Tanja mitbringen?',
                    options: ['Einen Kuchen.', 'Ein Geschenk.', 'Etwas zu trinken.'],
                    answer: 2,
                    explanationRu: '«Bring bitte etwas zu trinken mit» — принеси что-нибудь попить. Торт у Мехмета уже есть.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht vom Möbelhaus',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, Frau Becker, hier ist das Möbelhaus Wohnwelt. Ihr Tisch und die vier Stühle sind da. Wir bringen die Möbel am Freitag zwischen acht und zwölf Uhr zu Ihnen. Ist das gut für Sie? Bitte rufen Sie uns an. Auf Wiederhören!',
            tasks: [
              {
                instructionDe: 'Aufgabe 13: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 13: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann kommen die Möbel?',
                    options: ['Am Freitagvormittag.', 'Am Freitagnachmittag.', 'Am Samstag.'],
                    answer: 0,
                    explanationRu: '«am Freitag zwischen acht und zwölf Uhr» — в пятницу с 8 до 12, то есть утром (до обеда).',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht von Julia',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf der Mailbox.',
            playCount: 2,
            text: 'Hallo Ali, ich bin es, Julia. Ich bin gerade im Supermarkt. Brauchen wir noch Milch? Und haben wir noch Eier? Ich möchte heute Abend einen Kuchen backen. Schreib mir bitte schnell eine SMS. Danke!',
            tasks: [
              {
                instructionDe: 'Aufgabe 14: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 14: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was möchte Julia heute Abend machen?',
                    options: ['Einkaufen gehen.', 'Einen Kuchen backen.', 'Ali besuchen.'],
                    answer: 1,
                    explanationRu: '«Ich möchte heute Abend einen Kuchen backen» — вечером она хочет испечь пирог. В супермаркете она сейчас.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Nachricht vom Techniker',
            kind: 'monolog',
            situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
            playCount: 2,
            text: 'Guten Tag, hier ist Thomas Klein von der Firma Elektro Klein. Ich komme morgen und repariere Ihre Waschmaschine. Ich bin um halb neun bei Ihnen. Haben Sie da keine Zeit? Dann rufen Sie mich bitte an. Danke!',
            tasks: [
              {
                instructionDe: 'Aufgabe 15: Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Задание 15: выберите правильный ответ.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann kommt Herr Klein?',
                    options: ['Morgen um 8.30 Uhr.', 'Morgen um 9.30 Uhr.', 'Heute um 8.30 Uhr.'],
                    answer: 0,
                    explanationRu: '«morgen … um halb neun» — завтра в 8:30. «halb neun» = половина девятого, то есть 8:30, а не 9:30!',
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
          'Ihr Freund Miguel Torres macht mit seiner Familie Urlaub in Deutschland. Im Hotel muss er ein Formular ausfüllen. Im Formular fehlen fünf Informationen. Helfen Sie Ihrem Freund und schreiben Sie die fünf fehlenden Informationen (1) bis (5) in das Formular.',
        instructionRu:
          'Ваш друг Мигель Торрес с семьёй отдыхает в Германии. В отеле нужно заполнить анкету, но в ней не хватает пяти данных. Помогите другу: впишите пять недостающих данных (1)–(5). Вся нужная информация есть в тексте о друге.',
        situationDe: `Miguel Torres kommt aus Spanien. Er wohnt in Madrid, Calle Mayor 7. Er macht mit seiner Frau und seinen zwei Kindern Urlaub. Die Familie ist vom 4. bis 11. August im Hotel Seeblick in Lindau. Miguel ist Lehrer von Beruf. Er möchte mit Kreditkarte bezahlen.

ANMELDUNG – Hotel Seeblick, Lindau
Familienname: Torres
Vorname: Miguel
Straße, Hausnummer: Calle Mayor 7
Wohnort, Land: (1) ____________
Personen: Erwachsene (2) ____ Kinder ____
Ankunft: 4. August
Abreise: (3) ____________
Beruf: (4) ____________
Zahlung: bar / Kreditkarte: (5) ____________
Unterschrift: Miguel Torres`,
        points: [
          '(1) Wohnort und Land',
          '(2) Anzahl der Personen (Erwachsene und Kinder)',
          '(3) Abreise (Datum)',
          '(4) Beruf',
          '(5) Zahlung (bar / Kreditkarte)',
        ],
        minWords: 10,
        register: 'formell',
        minutes: 10,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Sie möchten einen Deutschkurs für Anfänger machen. Schreiben Sie an die Sprachschule Sonne. Schreiben Sie zu jedem Punkt ein bis zwei Sätze (circa 30 Wörter). Schreiben Sie auch eine Anrede und einen Gruß.',
        instructionRu:
          'Вы хотите записаться на курс немецкого для начинающих. Напишите в языковую школу «Sonne» (официально, на «Sie»): по одному-два предложения к каждому пункту (около 30 слов). Не забудьте обращение (Sehr geehrte Damen und Herren,) и приветствие в конце (Mit freundlichen Grüßen).',
        situationDe: 'Deutschkurs für Anfänger – Anfrage an die Sprachschule Sonne.',
        points: [
          'Warum schreiben Sie?',
          'Wann haben Sie Zeit? (Sie arbeiten bis 17 Uhr.)',
          'Fragen Sie nach dem Preis.',
        ],
        minWords: 30,
        register: 'formell',
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
          'Sich vorstellen. Stellen Sie sich vor. Sagen Sie etwas zu allen Punkten. Danach buchstabieren Sie Ihren Namen und sagen eine Zahl (zum Beispiel Ihre Hausnummer oder Ihre Telefonnummer).',
        instructionRu:
          'Представьтесь. Скажите что-нибудь по каждому пункту: имя, возраст, страна, где живёте, какие языки знаете, профессия, хобби. Потом экзаменатор попросит продиктовать по буквам имя и назвать число (например, номер дома или телефона).',
        situationDe: 'Name? – Alter? – Land? – Wohnort? – Sprachen? – Beruf? – Hobby?',
        points: ['Name', 'Alter', 'Land', 'Wohnort', 'Sprachen', 'Beruf', 'Hobby'],
        aiRole:
          'Prüfer in der Prüfung Start Deutsch 1. Er hört zu, wenn der Teilnehmer sich vorstellt. Danach bittet er ihn, seinen Familiennamen zu buchstabieren, und fragt nach seiner Hausnummer oder Telefonnummer. Er spricht sehr langsam und sehr einfach, nur kurze Sätze im Präsens. Wenn der Teilnehmer nicht weiterweiß, hilft er mit einer einfachen Frage, zum Beispiel: „Was sind Sie von Beruf?“ oder „Welche Sprachen sprechen Sie?“',
        opener: 'Guten Tag! Mein Name ist Wagner. Bitte stellen Sie sich vor.',
        minutes: 3,
        maxPoints: 20,
      },
      {
        teil: 2,
        mode: 'dialog',
        instructionDe:
          'Fragen stellen und beantworten. Thema: Freizeit. Auf den Karten stehen Wörter. Stellen Sie mit dem Wort eine Frage. Ihr Partner antwortet. Dann fragt Ihr Partner, und Sie antworten.',
        instructionRu:
          'Задавать вопросы и отвечать на них. Тема: свободное время. На карточках написаны слова. Задайте вопрос с этим словом — партнёр ответит. Потом партнёр задаёт вопрос вам, и вы отвечаете. Например: «Sport» → «Machen Sie gern Sport?»',
        situationDe: 'Thema: Freizeit\nKarten: Wochenende – Sport – Musik – Urlaub – Freunde – Fernsehen',
        points: ['Wochenende', 'Sport', 'Musik', 'Urlaub', 'Freunde', 'Fernsehen'],
        aiRole:
          'Gesprächspartner in der Prüfung Start Deutsch 1, Thema „Freizeit“. Er stellt abwechselnd mit dem Teilnehmer einfache Fragen zu den Wörtern auf den Karten (Wochenende, Sport, Musik, Urlaub, Freunde, Fernsehen) und beantwortet seine Fragen in ein bis zwei kurzen Sätzen. Nach seiner Antwort sagt er: „Jetzt fragen Sie, bitte.“ Er spricht sehr langsam und einfach, nur Präsens, keine langen Sätze.',
        opener: 'Hallo! Meine Karte ist „Wochenende“. Was machen Sie am Wochenende?',
        minutes: 6,
        maxPoints: 40,
      },
      {
        teil: 3,
        mode: 'dialog',
        instructionDe:
          'Bitten formulieren und darauf reagieren. Auf den Karten sehen Sie Bilder. Bitten Sie Ihre Partnerin um etwas. Ihre Partnerin reagiert. Dann bittet Ihre Partnerin Sie um etwas, und Sie reagieren.',
        instructionRu:
          'Сформулировать просьбу и отреагировать на неё. На карточках — картинки (здесь — слова). Попросите партнёра о чём-то, что изображено на карточке, — он отреагирует. Потом партнёр просит вас, а вы реагируете. Например: «Geben Sie mir bitte das Salz.» — «Hier, bitte.»',
        situationDe: 'Karten (Bilder): das Salz – eine Tasse Kaffee – eine Uhr – ein Stift – das Licht – ein Regenschirm',
        points: ['das Salz', 'eine Tasse Kaffee', 'eine Uhr', 'ein Stift', 'das Licht', 'ein Regenschirm'],
        aiRole:
          'Gesprächspartnerin in der Prüfung Start Deutsch 1. Sie formuliert abwechselnd mit dem Teilnehmer eine höfliche Bitte zu einem Bild (Salz, Tasse Kaffee, Uhr, Stift, Licht, Regenschirm) und reagiert kurz auf die Bitten des Teilnehmers, zum Beispiel: „Ja, natürlich. Hier, bitte.“ oder „Tut mir leid, ich habe keinen Stift.“ Sie spricht sehr langsam und einfach, nur kurze Sätze.',
        opener: 'Geben Sie mir bitte das Salz.',
        minutes: 6,
        maxPoints: 40,
      },
    ],
  },
};
