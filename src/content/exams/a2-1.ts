import type { MockExam } from '../types';

export const exam: MockExam = {
  id: 'a2-exam-1',
  level: 'A2',
  title: 'Übungstest A2 – 1',

  // ───────────────────────────── LESEN ─────────────────────────────
  lesen: {
    minutes: 30,
    parts: [
      {
        teil: 1,
        minutes: 7,
        title: 'Der Bücherbus kommt',
        textType: 'Zeitungsartikel',
        texts: [
          {
            heading: 'Bücher auf Rädern: Der Bücherbus kommt jetzt auch nach Lindenau',
            body: `Lindenau. Seit Anfang März hält jeden Dienstag ein besonderer Bus auf dem Marktplatz von Lindenau: der Bücherbus der Stadtbibliothek. Von 14 bis 17 Uhr können die Leute dort Bücher, Zeitschriften und Filme ausleihen. Der Ausweis ist für Kinder und Jugendliche kostenlos, Erwachsene bezahlen zehn Euro im Jahr.

„Früher mussten wir mit dem Auto in die Stadt fahren, wenn wir neue Bücher wollten“, erzählt Rentnerin Helga Möller (71). „Das war für mich immer schwierig, weil ich nicht mehr gern Auto fahre. Jetzt gehe ich einfach fünf Minuten zu Fuß. Das finde ich wirklich praktisch.“

Im Bus gibt es etwa 3000 Bücher und Filme. Am meisten leihen die Leute Kinderbücher und Krimis aus. Die Leser können auch Bücher im Internet oder am Telefon bestellen. Der Fahrer bringt sie dann in der nächsten Woche mit.

Busfahrer Jens Albrecht ist sehr zufrieden: „Am ersten Tag sind über hundert Leute gekommen. Das war eine große Überraschung für uns.“ Im Sommer soll der Bus auch samstags nach Lindenau kommen.`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie den Text aus der Zeitung. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте текст из газеты. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Der Bücherbus kommt …',
                options: ['jeden Tag nach Lindenau.', 'einmal in der Woche nach Lindenau.', 'nur am Wochenende nach Lindenau.'],
                answer: 1,
                explanationRu: 'В тексте: «jeden Dienstag» — каждый вторник, то есть раз в неделю. По субботам автобус, может быть, будет приезжать только летом.',
              },
              {
                kind: 'mc',
                question: 'Was kostet der Ausweis für Erwachsene?',
                options: ['Nichts.', '10 Euro im Monat.', '10 Euro im Jahr.'],
                answer: 2,
                explanationRu: '«Erwachsene bezahlen zehn Euro im Jahr». Бесплатно — только для детей и подростков.',
              },
              {
                kind: 'mc',
                question: 'Frau Möller …',
                options: ['fährt jetzt mit dem Auto zum Bücherbus.', 'findet den Bücherbus sehr praktisch.', 'leiht am liebsten Krimis aus.'],
                answer: 1,
                explanationRu: 'Она говорит: «Jetzt gehe ich einfach fünf Minuten zu Fuß. Das finde ich wirklich praktisch.» Про детективы сказано обо всех читателях, а не о ней.',
              },
              {
                kind: 'mc',
                question: 'Was können die Leser machen, wenn sie ein bestimmtes Buch möchten?',
                options: ['Sie können es bestellen.', 'Sie müssen in die Stadtbibliothek fahren.', 'Sie können es beim Fahrer kaufen.'],
                answer: 0,
                explanationRu: '«Die Leser können auch Bücher im Internet oder am Telefon bestellen» — книгу можно заказать, водитель привезёт её через неделю.',
              },
              {
                kind: 'mc',
                question: 'Am ersten Tag …',
                options: ['sind nur wenige Leute gekommen.', 'sind mehr als 100 Besucher gekommen.', 'hatte der Bus ein Problem.'],
                answer: 1,
                explanationRu: '«Am ersten Tag sind über hundert Leute gekommen» — über hundert = больше ста.',
              },
            ],
          },
        ],
      },
      {
        teil: 2,
        minutes: 6,
        title: 'Im Kaufhaus',
        textType: 'Informationstafel',
        texts: [
          {
            heading: 'Kaufhaus Brandt – Wegweiser',
            body: `Öffnungszeiten: Montag bis Samstag 9.30 – 20.00 Uhr

4. Stock: Restaurant mit Dachterrasse · Kundenservice · Fundbüro · Toiletten
3. Stock: Fernseher · Computer · Handys · Fotoservice · Musik und Filme · Spielwaren
2. Stock: Damenmode · Herrenmode · Kinderkleidung · Sportkleidung · Schuhe
1. Stock: Geschirr · Töpfe · Küchengeräte · Bettwäsche · Handtücher · Lampen
Erdgeschoss: Parfüm und Kosmetik · Schmuck und Uhren · Taschen · Zeitschriften · Information · Café
Untergeschoss: Lebensmittel · Getränke · Bäckerei · Blumen · Schlüsseldienst`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Sie sind im Kaufhaus. Lesen Sie die Aufgaben und den Wegweiser. In welches Stockwerk gehen Sie? Wählen Sie die richtige Lösung.',
            instructionRu: 'Вы в универмаге. Прочитайте задания и указатель. На какой этаж вы пойдёте? Выберите правильный ответ.',
            options: ['Untergeschoss', 'Erdgeschoss', '1. Stock', '2. Stock', '3. Stock', '4. Stock'],
            items: [
              {
                kind: 'match',
                prompt: 'Sie möchten für Ihre Enkelin (5 Jahre) ein Kleid kaufen.',
                answer: 3,
                explanationRu: 'Платье для ребёнка — детская одежда (Kinderkleidung), 2-й этаж. Игрушки (Spielwaren) на 3-м этаже — но вам нужно платье.',
              },
              {
                kind: 'match',
                prompt: 'Sie haben gestern im Kaufhaus Ihren Regenschirm vergessen.',
                answer: 5,
                explanationRu: 'Забытые вещи ищут в бюро находок (Fundbüro) — 4-й этаж.',
              },
              {
                kind: 'match',
                prompt: 'Sie brauchen neue Handtücher für das Bad.',
                answer: 2,
                explanationRu: 'Handtücher (полотенца) — 1-й этаж.',
              },
              {
                kind: 'match',
                prompt: 'Sie möchten Ihrer Nachbarin zum Geburtstag einen Blumenstrauß schenken.',
                answer: 0,
                explanationRu: 'Цветы (Blumen) продаются в цокольном этаже (Untergeschoss).',
              },
              {
                kind: 'match',
                prompt: 'Sie möchten Ihre Urlaubsfotos vom Handy auf Papier haben.',
                answer: 4,
                explanationRu: 'Напечатать фотографии можно в фотосервисе (Fotoservice) — 3-й этаж. Новый телефон вам не нужен.',
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        minutes: 8,
        title: 'Eine E-Mail von Sabine',
        textType: 'E-Mail',
        texts: [
          {
            heading: 'Von: Sabine Kraus · An: Olga Petrova · Betreff: Endlich Zeit für eine Antwort!',
            body: `Liebe Olga,

vielen Dank für deine Karte aus Wien! Ich habe mich sehr darüber gefreut. Es tut mir leid, dass ich erst heute schreibe, aber die letzten Wochen waren wirklich anstrengend.

Du weißt ja, dass wir im Mai umgezogen sind. Die neue Wohnung ist größer als die alte und hat einen schönen Balkon. Leider ist sie nicht so zentral. Ich brauche jetzt mit dem Bus vierzig Minuten zur Arbeit, früher waren es nur zehn Minuten zu Fuß. Deshalb überlege ich, ob ich mir ein E-Bike kaufe.

Lukas geht jetzt in eine neue Schule. Am Anfang war er traurig, weil er seine alten Freunde vermisst hat. Aber jetzt hat er schon zwei neue Freunde gefunden und spielt mit ihnen Fußball im Verein.

Und jetzt die große Neuigkeit: Wir haben im August zwei Wochen Urlaub und möchten gern nach Hamburg fahren. Wohnst du noch in Hamburg? Dann könnten wir uns endlich wiedersehen! Hast du am Wochenende vom 10. August Zeit? Wir schlafen im Hotel, du musst also kein Bett für uns haben.

Schreib mir bald!

Liebe Grüße
Sabine`,
          },
        ],
        tasks: [
          {
            instructionDe: 'Lesen Sie die E-Mail. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
            instructionRu: 'Прочитайте электронное письмо. В каждом задании выберите правильный ответ a, b или c.',
            items: [
              {
                kind: 'mc',
                question: 'Sabine schreibt erst jetzt, weil …',
                options: ['sie Olgas Karte nicht bekommen hat.', 'sie in den letzten Wochen viel zu tun hatte.', 'sie im Urlaub in Wien war.'],
                answer: 1,
                explanationRu: '«…die letzten Wochen waren wirklich anstrengend» — последние недели были очень напряжёнными. Открытку она получила, а в Вене была Ольга.',
              },
              {
                kind: 'mc',
                question: 'Die neue Wohnung …',
                options: ['ist kleiner als die alte.', 'liegt im Stadtzentrum.', 'hat einen Balkon.'],
                answer: 2,
                explanationRu: '«…ist größer als die alte und hat einen schönen Balkon». Она больше старой и находится не в центре («nicht so zentral»).',
              },
              {
                kind: 'mc',
                question: 'Wie fährt Sabine jetzt zur Arbeit?',
                options: ['Mit dem Bus.', 'Zu Fuß.', 'Mit dem E-Bike.'],
                answer: 0,
                explanationRu: '«Ich brauche jetzt mit dem Bus vierzig Minuten». Пешком она ходила раньше, а электровелосипед только хочет купить.',
              },
              {
                kind: 'mc',
                question: 'Lukas …',
                options: ['möchte wieder in seine alte Schule gehen.', 'hat in der neuen Schule Freunde gefunden.', 'spielt nicht mehr Fußball.'],
                answer: 1,
                explanationRu: '«…hat er schon zwei neue Freunde gefunden». Грустным он был только в начале.',
              },
              {
                kind: 'mc',
                question: 'Was möchte Sabine im August?',
                options: ['Olga in Hamburg treffen.', 'Bei Olga übernachten.', 'Mit Olga nach Wien fahren.'],
                answer: 0,
                explanationRu: 'Сабина хочет поехать в Гамбург и увидеться с Ольгой («Dann könnten wir uns endlich wiedersehen!»). Жить они будут в гостинице.',
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        minutes: 9,
        title: 'Kurse und Freizeit',
        textType: 'Anzeigen',
        texts: [
          {
            label: 'a',
            heading: 'Schwimmen lernen – nur für Erwachsene',
            body: 'Sie haben nie schwimmen gelernt? Kein Problem! Kleine Gruppen, nur Erwachsene. Mittwochs um 19 Uhr im Hallenbad Nord, 8 Termine für 60 Euro.',
          },
          {
            label: 'b',
            heading: 'Gitarre lernen – online',
            body: 'Lernen Sie Gitarre bequem zu Hause am Computer. Videos für Anfänger, Sie lernen allein und wann Sie wollen. Nur 9,99 Euro im Monat. Eine Gitarre brauchen Sie selbst.',
          },
          {
            label: 'c',
            heading: 'Radtour am Sonntag',
            body: 'Der Radclub lädt alle ein: Am Sonntag fahren wir 40 Kilometer am Fluss entlang. Treffpunkt: 10 Uhr am Bahnhof. Die Tour ist kostenlos. Kein Fahrrad? Bei uns können Sie eins leihen (5 Euro).',
          },
          {
            label: 'd',
            heading: 'Computerkurs ab 60',
            body: 'E-Mails schreiben, im Internet suchen, Fotos speichern: Unser Kurs ist für Menschen ab 60 Jahren ohne Vorkenntnisse. Dienstags von 10 bis 12 Uhr in der Volkshochschule, Raum 3.',
          },
          {
            label: 'e',
            heading: 'Kochen mit Kindern',
            body: 'Eltern und Kinder (6 bis 10 Jahre) kochen zusammen einfache und gesunde Gerichte. Samstags um 11 Uhr im Familienzentrum. Bitte eine Schürze mitbringen!',
          },
          {
            label: 'f',
            heading: 'Deutsch-Stammtisch',
            body: 'Sie lernen Deutsch und möchten mehr sprechen? Jeden Donnerstag um 19 Uhr treffen sich Deutschlerner und Deutsche im Café Mondschein. Einfach kommen – es kostet nichts!',
          },
        ],
        tasks: [
          {
            instructionDe:
              'Sechs Personen suchen im Internet nach Angeboten. Lesen Sie die Aufgaben und die Anzeigen a bis f. Welche Anzeige passt zu welcher Person? Für eine Person gibt es keine passende Anzeige. Dann wählen Sie „0“.',
            instructionRu:
              'Шесть человек ищут предложения в интернете. Прочитайте задания и объявления a–f. Какое объявление подходит какому человеку? Для одного человека подходящего объявления нет — тогда выберите «0».',
            options: [
              'Schwimmen lernen – nur für Erwachsene',
              'Gitarre lernen – online',
              'Radtour am Sonntag',
              'Computerkurs ab 60',
              'Kochen mit Kindern',
              'Deutsch-Stammtisch',
            ],
            allowNone: true,
            items: [
              {
                kind: 'match',
                prompt: 'Herr Novak ist 67 und hat einen neuen Laptop. Er möchte lernen, wie man E-Mails schreibt.',
                answer: 3,
                explanationRu: 'd — компьютерный курс для людей от 60 лет без знаний: «E-Mails schreiben».',
              },
              {
                kind: 'match',
                prompt: 'Frau Lee möchte am Samstag mit ihrer Tochter (8) etwas Neues lernen. Die Tochter hilft gern in der Küche.',
                answer: 4,
                explanationRu: 'e — родители и дети 6–10 лет вместе готовят, по субботам. Велопрогулка c — в воскресенье.',
              },
              {
                kind: 'match',
                prompt: 'Marco möchte Gitarre spielen lernen. Er möchte aber in einer Gruppe mit anderen Leuten üben.',
                answer: -1,
                explanationRu: 'Подходящего объявления нет: курс гитары b — онлайн, учатся одни дома («Sie lernen allein»), а Марко хочет в группе.',
              },
              {
                kind: 'match',
                prompt: 'Ana spricht schon ein bisschen Deutsch. Sie möchte abends mit Deutschen sprechen, aber sie hat wenig Geld.',
                answer: 5,
                explanationRu: 'f — разговорный клуб по четвергам в 19 часов, бесплатно («es kostet nichts»).',
              },
              {
                kind: 'match',
                prompt: 'Peter ist 45 und kann nicht schwimmen. Er möchte es jetzt lernen, aber nicht in einem Kurs mit Kindern.',
                answer: 0,
                explanationRu: 'a — курс плавания только для взрослых («nur Erwachsene»).',
              },
              {
                kind: 'match',
                prompt: 'Familie Schulz möchte am Sonntag einen Ausflug mit dem Fahrrad machen. Sie haben aber keine Fahrräder.',
                answer: 2,
                explanationRu: 'c — велопрогулка в воскресенье, велосипед можно взять напрокат («Bei uns können Sie eins leihen»).',
              },
            ],
          },
        ],
      },
    ],
  },

  // ───────────────────────────── HÖREN ─────────────────────────────
  hoeren: {
    minutes: 30,
    parts: [
      {
        teil: 1,
        instructionDe: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu: 'Вы услышите пять коротких текстов. Каждый текст звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Ansage der Arztpraxis',
            kind: 'monolog',
            situation: 'Sie rufen in einer Arztpraxis an und hören eine Ansage.',
            playCount: 2,
            text: 'Praxis Dr. Berger, guten Tag. Leider rufen Sie außerhalb unserer Sprechzeiten an. Unsere Praxis ist von Montag bis Freitag von 8 bis 12 Uhr geöffnet. Am Dienstag und am Donnerstag sind wir auch am Nachmittag von 15 bis 18 Uhr für Sie da. In dringenden Fällen rufen Sie bitte den ärztlichen Notdienst an. Die Nummer ist 116 117.',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann ist die Praxis auch am Nachmittag geöffnet?',
                    options: ['Am Montag und am Mittwoch.', 'Am Dienstag und am Donnerstag.', 'Jeden Tag.'],
                    answer: 1,
                    explanationRu: '«Am Dienstag und am Donnerstag sind wir auch am Nachmittag von 15 bis 18 Uhr für Sie da.»',
                  },
                ],
              },
            ],
          },
          {
            title: 'Wetterbericht',
            kind: 'monolog',
            situation: 'Sie hören den Wetterbericht im Radio.',
            playCount: 2,
            text: 'Und jetzt das Wetter für morgen, Samstag. Am Vormittag regnet es im ganzen Land, und es ist mit 12 Grad ziemlich kühl. Am Nachmittag hört der Regen auf, und im Süden kommt sogar die Sonne heraus. Am Sonntag wird es dann überall schön und warm, bis 20 Grad.',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie ist das Wetter am Samstagnachmittag im Süden?',
                    options: ['Es regnet.', 'Die Sonne scheint.', 'Es ist warm, 20 Grad.'],
                    answer: 1,
                    explanationRu: 'Днём в субботу дождь прекращается, и на юге выходит солнце («kommt sogar die Sonne heraus»). 20 градусов будет только в воскресенье.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Durchsage am Bahnhof',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage am Bahnhof.',
            playCount: 2,
            text: 'Achtung am Gleis 3! Der Intercity nach Hamburg, Abfahrt 10.45 Uhr, fährt heute nicht von Gleis 3, sondern von Gleis 6. Bitte beachten Sie: Der Zug hat heute etwa 15 Minuten Verspätung. Wir bitten um Entschuldigung.',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Von welchem Gleis fährt der Zug nach Hamburg heute?',
                    options: ['Von Gleis 3.', 'Von Gleis 6.', 'Von Gleis 15.'],
                    answer: 1,
                    explanationRu: '«…fährt heute nicht von Gleis 3, sondern von Gleis 6». 15 — это минуты опоздания.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Im Supermarkt',
            kind: 'monolog',
            situation: 'Sie hören eine Durchsage im Supermarkt.',
            playCount: 2,
            text: 'Liebe Kundinnen und Kunden, heute ist bei uns Obsttag! Alle Äpfel und Birnen kosten heute nur 1,49 Euro pro Kilo. Und an unserer Käsetheke bekommen Sie 20 Prozent Rabatt auf alle Käsesorten aus Frankreich. Das Angebot gilt nur heute bis 18 Uhr. Vielen Dank für Ihren Einkauf!',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was ist heute billiger?',
                    options: ['Bananen.', 'Brot.', 'Äpfel.'],
                    answer: 2,
                    explanationRu: 'Сегодня «Obsttag»: яблоки и груши стоят всего 1,49 евро за килограмм. О бананах и хлебе ничего не сказано.',
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
            text: 'Hallo Mehmet, hier ist Jonas. Wir wollten doch heute Abend ins Kino gehen. Leider muss ich länger arbeiten, um sieben schaffe ich es nicht. Können wir den Film um halb zehn sehen? Dann treffen wir uns um Viertel nach neun vor dem Kino. Ruf mich bitte kurz an. Tschüss!',
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann möchte Jonas Mehmet treffen?',
                    options: ['Um 19 Uhr.', 'Um 21.15 Uhr.', 'Um 21.30 Uhr.'],
                    answer: 1,
                    explanationRu: '«…treffen wir uns um Viertel nach neun» = 21:15. В 21:30 (halb zehn) начинается фильм, а в 19 часов Йонас не успевает.',
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
          'Sie hören ein Gespräch. Sie hören den Text einmal. Was macht Paula an welchem Tag? Wählen Sie für jeden Tag die passende Aktivität a bis h. Sie können jeden Buchstaben nur einmal wählen.',
        instructionRu:
          'Вы услышите разговор один раз. Что Паула делает в какой день? Для каждого дня выберите подходящее занятие a–h. Каждую букву можно выбрать только один раз.',
        segments: [
          {
            title: 'Wann gehen wir ins Kino?',
            kind: 'dialog',
            speakers: { A: 'Tim', B: 'Paula' },
            situation: 'Tim möchte mit Paula ins Kino gehen. Sie suchen einen Tag.',
            playCount: 1,
            text: `A: Hallo Paula! Wir wollten doch nächste Woche zusammen ins Kino gehen. Wann hast du Zeit?
B: Hm, nächste Woche ist schwierig. Am Montag gehe ich nach der Arbeit schwimmen. Das mache ich jeden Montag.
A: Und am Dienstag?
B: Am Dienstag habe ich einen Termin beim Zahnarzt. Danach habe ich bestimmt keine Lust auf Kino.
A: Das verstehe ich. Und Mittwoch?
B: Mittwochs habe ich doch meinen Englischkurs. Der geht bis neun Uhr.
A: Ach ja, stimmt. Und am Donnerstag?
B: Am Donnerstag zieht meine Schwester um. Ich habe ihr versprochen, dass ich ihr helfe. Wir müssen alle Kisten in den vierten Stock tragen.
A: Oh je! Und Freitag? Am Freitag habe ich nämlich frei.
B: Am Freitagabend passe ich auf die Kinder von meinen Nachbarn auf. Die Eltern gehen ins Theater.
A: Dann bleibt ja nur das Wochenende.
B: Am Samstag besuche ich meine Oma, aber am Sonntag geht es. Gehen wir am Sonntag ins Kino?
A: Super, Sonntag ist gut!`,
            tasks: [
              {
                instructionDe: 'Was macht Paula an welchem Tag? Wählen Sie die passende Aktivität.',
                instructionRu: 'Что Паула делает в какой день? Выберите подходящее занятие.',
                options: [
                  'schwimmen gehen',
                  'zum Zahnarzt gehen',
                  'die Oma besuchen',
                  'einen Englischkurs besuchen',
                  'ins Kino gehen',
                  'beim Umzug helfen',
                  'auf Kinder aufpassen',
                  'ins Theater gehen',
                ],
                items: [
                  {
                    kind: 'match',
                    prompt: 'Montag',
                    answer: 0,
                    explanationRu: '«Am Montag gehe ich nach der Arbeit schwimmen.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Dienstag',
                    answer: 1,
                    explanationRu: '«Am Dienstag habe ich einen Termin beim Zahnarzt.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Mittwoch',
                    answer: 3,
                    explanationRu: '«Mittwochs habe ich doch meinen Englischkurs.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Donnerstag',
                    answer: 5,
                    explanationRu: 'В четверг переезжает сестра, Паула ей помогает: «Am Donnerstag zieht meine Schwester um … dass ich ihr helfe.»',
                  },
                  {
                    kind: 'match',
                    prompt: 'Freitag',
                    answer: 6,
                    explanationRu: '«Am Freitagabend passe ich auf die Kinder von meinen Nachbarn auf.» В театр идут соседи, а не Паула.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 3,
        instructionDe: 'Sie hören fünf kurze Gespräche. Sie hören jedes Gespräch zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
        instructionRu: 'Вы услышите пять коротких диалогов. Каждый диалог звучит два раза. В каждом задании выберите правильный ответ a, b или c.',
        segments: [
          {
            title: 'Im Kleidungsgeschäft',
            kind: 'dialog',
            speakers: { A: 'Kundin', B: 'Verkäufer' },
            situation: 'Eine Frau kauft eine Jacke.',
            playCount: 2,
            text: `A: Guten Tag, ich suche eine Regenjacke für meinen Mann. Er trägt normalerweise Größe L.
B: Hier haben wir diese blaue Jacke. In L ist sie leider ausverkauft, aber wir haben sie noch in M und XL.
A: Hm, M ist bestimmt zu klein. Dann nehme ich die XL. Kann ich sie umtauschen, wenn sie nicht passt?
B: Natürlich, innerhalb von vierzehn Tagen mit dem Kassenbon.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Welche Größe kauft die Frau?',
                    options: ['L.', 'M.', 'XL.'],
                    answer: 2,
                    explanationRu: 'Размера L нет, M слишком маленький, поэтому она берёт XL: «Dann nehme ich die XL.»',
                  },
                ],
              },
            ],
          },
          {
            title: 'Am Bahnhof',
            kind: 'dialog',
            speakers: { A: 'Lisa', B: 'Sven' },
            situation: 'Lisa und Sven telefonieren. Sie wollen sich am Bahnhof treffen.',
            playCount: 2,
            text: `A: Hallo Sven, ich bin jetzt am Bahnhof. Wo bist du?
B: Ich stehe vor der Bäckerei, neben dem Eingang. Siehst du mich?
A: Nein, hier sind so viele Leute. Weißt du was? Wir treffen uns am Kiosk bei Gleis 1. Da ist es ruhiger.
B: Gut, ich komme sofort.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wo treffen sich Lisa und Sven?',
                    options: ['Vor der Bäckerei.', 'Am Kiosk.', 'Am Eingang.'],
                    answer: 1,
                    explanationRu: 'Лиза предлагает: «Wir treffen uns am Kiosk bei Gleis 1», и Свен соглашается. У булочной стоит Свен сейчас.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Beim Arzt',
            kind: 'dialog',
            speakers: { A: 'Ärztin', B: 'Herr Wagner' },
            situation: 'Herr Wagner ist beim Arzt.',
            playCount: 2,
            text: `A: So, Herr Wagner, hier ist Ihr Rezept. Nehmen Sie die Tabletten bitte dreimal am Tag nach dem Essen.
B: Dreimal? Letztes Mal waren es nur zweimal am Tag.
A: Ja, aber jetzt ist es schlimmer. Nehmen Sie die Tabletten bitte eine Woche lang. Danach kommen Sie noch einmal zu mir.
B: Gut, vielen Dank, Frau Doktor.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wie oft soll Herr Wagner die Tabletten nehmen?',
                    options: ['Einmal am Tag.', 'Zweimal am Tag.', 'Dreimal am Tag.'],
                    answer: 2,
                    explanationRu: '«Nehmen Sie die Tabletten bitte dreimal am Tag». Два раза в день было в прошлый раз.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Was machen wir heute Abend?',
            kind: 'dialog',
            speakers: { A: 'Mann', B: 'Frau' },
            situation: 'Ein Paar spricht über den Abend.',
            playCount: 2,
            text: `A: Was machen wir heute Abend? Wollen wir ins Restaurant gehen?
B: Ach nein, das ist mir zu teuer. Und ins Kino möchte ich heute auch nicht.
A: Dann kochen wir zu Hause? Ich kann eine Pizza machen.
B: Gute Idee! Und danach sehen wir zusammen einen Film im Fernsehen.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Was machen die beiden heute Abend?',
                    options: ['Sie gehen ins Restaurant.', 'Sie kochen zu Hause.', 'Sie gehen ins Kino.'],
                    answer: 1,
                    explanationRu: 'Ресторан слишком дорогой, в кино женщина не хочет. Они готовят пиццу дома и смотрят фильм по телевизору.',
                  },
                ],
              },
            ],
          },
          {
            title: 'Am Fahrkartenschalter',
            kind: 'dialog',
            speakers: { A: 'Kundin', B: 'Mitarbeiter' },
            situation: 'Eine Frau kauft eine Fahrkarte.',
            playCount: 2,
            text: `A: Guten Tag, eine Fahrkarte nach Leipzig, bitte. Wann fährt der nächste Zug?
B: Der nächste Zug fährt um 13.20 Uhr, aber da müssen Sie zweimal umsteigen. Um 14.05 Uhr gibt es einen direkten Zug.
A: Ich habe viel Gepäck. Ich nehme lieber den direkten Zug.
B: Gut, das macht 39 Euro.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
                instructionRu: 'Выберите правильный ответ a, b или c.',
                items: [
                  {
                    kind: 'mc',
                    question: 'Wann fährt die Frau nach Leipzig?',
                    options: ['Um 13.20 Uhr.', 'Um 14.05 Uhr.', 'Um 13.50 Uhr.'],
                    answer: 1,
                    explanationRu: 'У неё много багажа, поэтому она выбирает прямой поезд в 14:05, а не поезд в 13:20 с двумя пересадками.',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        teil: 4,
        instructionDe:
          'Sie hören ein Interview im Radio. Sie hören den Text zweimal. Wählen Sie für die Aufgaben: Ja oder Nein?',
        instructionRu: 'Вы услышите интервью по радио. Текст звучит два раза. Для каждого утверждения выберите: да (Ja) или нет (Nein)?',
        segments: [
          {
            title: 'Menschen in Bergstadt: Die Busfahrerin',
            kind: 'dialog',
            speakers: { A: 'Moderator', B: 'Frau Hoffmann, Busfahrerin' },
            situation: 'Der Moderator spricht mit Frau Hoffmann. Sie ist Busfahrerin.',
            playCount: 2,
            text: `A: Herzlich willkommen bei „Menschen in Bergstadt“. Heute ist Frau Hoffmann bei uns. Frau Hoffmann, Sie sind seit drei Jahren Busfahrerin. Was haben Sie vorher gemacht?
B: Ich war zwanzig Jahre lang Verkäuferin in einem Schuhgeschäft. Dann hat das Geschäft zugemacht, und ich musste eine neue Arbeit suchen.
A: Und warum gerade Busfahrerin?
B: Mein Vater war auch Busfahrer. Als Kind bin ich oft mit ihm gefahren. Das hat mir immer gefallen.
A: War die Ausbildung schwer?
B: Ja, ziemlich. Ich musste viel lernen, auch über Technik. Und am Anfang hatte ich Angst vor dem großen Bus. Aber nach ein paar Wochen war alles gut.
A: Wann beginnt Ihr Arbeitstag?
B: Das ist verschieden. Manchmal fange ich schon um fünf Uhr morgens an, manchmal arbeite ich bis Mitternacht. Das ist nicht immer leicht für meine Familie.
A: Was gefällt Ihnen an Ihrem Beruf?
B: Die Menschen! Viele Fahrgäste kenne ich schon lange. Eine ältere Dame bringt mir zum Beispiel jeden Freitag einen Apfel mit.
A: Das ist ja nett! Möchten Sie diesen Beruf noch lange machen?
B: Auf jeden Fall. Ich möchte nie wieder in einem Geschäft arbeiten.`,
            tasks: [
              {
                instructionDe: 'Wählen Sie: Ja oder Nein?',
                instructionRu: 'Выберите: да (Ja) или нет (Nein)?',
                tfLabels: ['Ja', 'Nein'],
                items: [
                  {
                    kind: 'tf',
                    statement: 'Frau Hoffmann hat früher in einem Geschäft gearbeitet.',
                    answer: true,
                    explanationRu: '«Ich war zwanzig Jahre lang Verkäuferin in einem Schuhgeschäft.»',
                  },
                  {
                    kind: 'tf',
                    statement: 'Ihr Vater hatte einen ganz anderen Beruf.',
                    answer: false,
                    explanationRu: 'Нет: «Mein Vater war auch Busfahrer» — отец тоже был водителем автобуса.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Am Anfang hatte Frau Hoffmann Angst vor dem Bus.',
                    answer: true,
                    explanationRu: '«…am Anfang hatte ich Angst vor dem großen Bus».',
                  },
                  {
                    kind: 'tf',
                    statement: 'Frau Hoffmann arbeitet jeden Tag zu den gleichen Zeiten.',
                    answer: false,
                    explanationRu: 'Нет: «Das ist verschieden» — иногда она начинает в пять утра, иногда работает до полуночи.',
                  },
                  {
                    kind: 'tf',
                    statement: 'Frau Hoffmann mag den Kontakt mit den Fahrgästen.',
                    answer: true,
                    explanationRu: 'На вопрос, что ей нравится в профессии, она отвечает: «Die Menschen!»',
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
    minutes: 30,
    tasks: [
      {
        teil: 1,
        instructionDe:
          'Sie sind heute um 15 Uhr mit Ihrer Freundin Julia im Café am Markt verabredet. Ihr Bus hat Verspätung. Schreiben Sie Julia eine SMS. Schreiben Sie etwas zu allen drei Punkten. Schreiben Sie 20–30 Wörter.',
        instructionRu:
          'Сегодня в 15 часов вы договорились встретиться с подругой Юлией в кафе на рынке. Ваш автобус опаздывает. Напишите Юлии SMS (20–30 слов). Напишите что-нибудь по каждому из трёх пунктов.',
        situationDe: 'Treffen mit Julia heute um 15 Uhr im Café am Markt. Ihr Bus hat Verspätung.',
        points: [
          'Entschuldigen Sie sich.',
          'Schreiben Sie, warum Sie später kommen.',
          'Nennen Sie eine neue Uhrzeit.',
        ],
        minWords: 20,
        register: 'informell',
        minutes: 10,
        maxPoints: 40,
      },
      {
        teil: 2,
        instructionDe:
          'Ihre Vermieterin, Frau Schubert, schreibt Ihnen: Am Donnerstag um 10 Uhr kommt ein Techniker und kontrolliert die Heizung in Ihrer Wohnung. Sie haben an diesem Tag keine Zeit. Schreiben Sie Frau Schubert eine E-Mail. Schreiben Sie etwas zu allen drei Punkten. Schreiben Sie 30–40 Wörter. Vergessen Sie nicht die Anrede und den Gruß.',
        instructionRu:
          'Ваша квартирная хозяйка, фрау Шуберт, пишет вам: в четверг в 10 часов придёт техник проверить отопление в вашей квартире. В этот день у вас нет времени. Напишите фрау Шуберт письмо (30–40 слов) по всем трём пунктам. Не забудьте обращение и приветствие в конце. Стиль — официальный (Sie).',
        situationDe: 'E-Mail von Frau Schubert: „Am Donnerstag um 10 Uhr kommt ein Techniker und kontrolliert die Heizung in Ihrer Wohnung. Bitte seien Sie an diesem Tag zu Hause.“',
        points: [
          'Bedanken Sie sich für die Information.',
          'Schreiben Sie, warum Sie am Donnerstag keine Zeit haben.',
          'Schlagen Sie einen anderen Termin vor.',
        ],
        minWords: 30,
        register: 'formell',
        minutes: 20,
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
        mode: 'dialog',
        instructionDe:
          'Fragen zur Person. Sie bekommen Karten mit Wörtern. Stellen Sie mit jedem Wort eine Frage an Ihre Gesprächspartnerin / Ihren Gesprächspartner und beantworten Sie auch ihre / seine Fragen.',
        instructionRu:
          'Вопросы о себе. У вас карточки со словами. С каждым словом задайте вопрос партнёру и отвечайте на его вопросы. Пример: «Geburtstag?» → «Wann haben Sie Geburtstag?»',
        situationDe: 'Karten: Geburtstag? · Wohnen? · Beruf? · Familie? · Hobby? · Sprachen?',
        points: ['Geburtstag?', 'Wohnen?', 'Beruf?', 'Familie?', 'Hobby?', 'Sprachen?'],
        aiRole:
          'Sie sind Maria, eine andere Teilnehmerin der Prüfung (Niveau A2). Sie sprechen einfach, langsam und freundlich und siezen Ihren Partner. Sie stellen abwechselnd mit Ihrem Partner Fragen zu den Karten (Geburtstag, Wohnen, Beruf, Familie, Hobby, Sprachen) und beantworten seine Fragen kurz (Maria: 45 Jahre, aus Spanien, wohnt in Köln, Krankenschwester, zwei Kinder, Hobby Tanzen, spricht Spanisch, Englisch und ein bisschen Deutsch). Wenn er etwas nicht versteht, sagen Sie es noch einmal mit anderen Worten.',
        opener: 'Hallo, ich bin Maria. Ich fange an, ja? Meine Karte ist „Wohnen“. Wo wohnen Sie?',
        minutes: 4,
        maxPoints: 25,
      },
      {
        teil: 2,
        mode: 'presentation',
        instructionDe:
          'Über sich erzählen. Sie bekommen eine Karte mit einer Frage und vier Stichpunkten. Erzählen Sie etwa eine Minute über sich. Danach stellt die Prüferin Ihnen eine Frage.',
        instructionRu:
          'Рассказ о себе. Вы получаете карточку с вопросом и четырьмя пунктами. Расскажите о себе примерно одну минуту — по всем пунктам. Потом экзаменатор задаст вам вопрос.',
        situationDe: 'Thema: „Was machen Sie in Ihrer Freizeit?“',
        points: [
          'Was machen Sie gern?',
          'Mit wem?',
          'Wie oft? Wann?',
          'Was möchten Sie gern noch ausprobieren?',
        ],
        aiRole:
          'Sie sind Prüferin in einer Prüfung auf Niveau A2. Sie sprechen langsam und deutlich. Sie hören dem Teilnehmer zu und unterbrechen ihn nicht. Am Ende stellen Sie eine einfache Frage zum Thema Freizeit (zum Beispiel: Was haben Sie letztes Wochenende gemacht?).',
        opener: 'Bitte erzählen Sie: Was machen Sie in Ihrer Freizeit?',
        minutes: 5,
        maxPoints: 40,
      },
      {
        teil: 3,
        mode: 'dialog',
        instructionDe:
          'Gemeinsam etwas planen. Ihr Freund Thomas liegt im Krankenhaus. Sie möchten ihn am Samstag zusammen besuchen. Besuchszeit im Krankenhaus: 10–12 Uhr und 14–19 Uhr. Finden Sie eine Zeit, wann Sie beide Zeit haben.',
        instructionRu:
          'Совместное планирование. Ваш друг Томас лежит в больнице. Вы хотите навестить его вместе в субботу. Часы посещения: 10–12 и 14–19. Сравните ваши планы и найдите время, когда вы оба свободны. Договоритесь также, где встретиться и что принести.',
        situationDe:
          'Ihr Kalender am Samstag: 8.00–9.30 Frühstück mit den Nachbarn · 10.00–12.00 Fahrrad reparieren · 12.30 Mittagessen bei den Eltern · 14.00–16.00 Wohnung putzen · 16.00–18.00 frei · 19.30 Kino mit Anna',
        points: ['Wann gehen Sie?', 'Wo treffen Sie sich?', 'Was bringen Sie mit?'],
        aiRole:
          'Sie sind ein Freund / eine Freundin des Teilnehmers und duzen ihn. Sie sprechen einfach (Niveau A2). Sie möchten zusammen Thomas im Krankenhaus besuchen. Ihr Kalender am Samstag: 9.00–11.00 Einkaufen auf dem Markt; 11.30 Friseur; 13.00–15.00 Deutschkurs; 15.30 Kaffee mit der Schwester (bis 16.30); 16.30–18.30 frei; ab 19.00 Geburtstagsparty. Die einzige gemeinsame Zeit ist 16.30–18.00. Machen Sie Vorschläge, sagen Sie, wann Sie nicht können und warum, und reagieren Sie auf die Vorschläge des Partners. Sprechen Sie auch darüber, wo Sie sich treffen und was Sie Thomas mitbringen (z. B. Obst, Blumen, eine Zeitschrift).',
        opener: 'Hallo! Du, Thomas liegt doch im Krankenhaus. Wollen wir ihn am Samstag zusammen besuchen? Wann hast du Zeit?',
        minutes: 6,
        maxPoints: 35,
      },
    ],
  },
};
