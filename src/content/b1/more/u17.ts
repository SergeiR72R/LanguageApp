import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: [
        'Ich gehe heute früh schlafen, denn ich bin sehr müde.',
        'Ich gehe heute früh schlafen, denn ich sehr müde bin.',
        'Ich gehe heute früh schlafen, denn bin ich sehr müde.',
      ],
      answer: 0,
      explanationRu: 'denn стоит на позиции 0 и не влияет на порядок слов: после него подлежащее, потом глагол (ich bin).',
    },
    {
      type: 'choice',
      prompt: '___ das Museum montags geschlossen ist, gehen wir erst am Dienstag hin.',
      options: ['Denn', 'Da', 'Deshalb', 'Sondern'],
      answer: 1,
      explanationRu: 'Причина стоит в начале, глагол ist — в конце придаточного → da. denn и sondern не могут начинать предложение с причиной, deshalb вводит следствие.',
    },
    {
      type: 'choice',
      prompt: 'Er spielt nicht Gitarre, ___ Schlagzeug.',
      options: ['aber', 'sondern', 'denn', 'jedoch'],
      answer: 1,
      explanationRu: 'Есть отрицание (nicht Gitarre), а вторая часть исправляет первую → sondern («а»).',
    },
    {
      type: 'choice',
      prompt: 'Der Roman ist zwar sehr lang, ___ er ist unglaublich spannend.',
      options: ['aber', 'sondern', 'denn', 'da'],
      answer: 0,
      explanationRu: 'Ловушка: отрицания нет, мы ничего не исправляем, а просто противопоставляем → aber (zwar … aber — «хотя и …, но»). sondern возможно только после nicht/kein.',
    },
    {
      type: 'choice',
      prompt: 'Die Karten waren sehr teuer. Wir sind ___ nicht hingegangen.',
      options: ['daher', 'denn', 'weil', 'sondern'],
      answer: 0,
      explanationRu: 'Наречие daher может стоять и внутри предложения (после глагола): Wir sind daher nicht hingegangen. Союзы denn, weil, sondern так не употребляются.',
    },
    {
      type: 'choice',
      prompt: 'Ich kaufe die Karten schon heute, ___ wir am Samstag nicht an der Kasse warten müssen.',
      options: ['sodass', 'damit', 'denn', 'deshalb'],
      answer: 1,
      explanationRu: 'Повторение юнита 10: здесь выражена цель («чтобы нам не пришлось ждать») → damit. sodass выражает результат, который уже наступил или наступает сам собой.',
    },
    {
      type: 'choice',
      prompt: 'Meine Eltern lieben klassische Musik, ___ meine Geschwister nur Hip-Hop hören.',
      options: ['während', 'sondern', 'deshalb', 'denn'],
      answer: 0,
      explanationRu: 'Сравниваем две группы людей («тогда как»), глагол hören стоит в конце → während в противительном значении.',
    },
    {
      type: 'gap',
      prompt: 'Das Konzert war ___ laut, dass mir danach die Ohren wehgetan haben.',
      answers: ['so'],
      explanationRu: 'Степень + следствие: so + прилагательное (laut) …, dass …',
    },
    {
      type: 'gap',
      prompt: 'Wir sind zu spät gekommen, ___ wir den Anfang des Films verpasst haben.',
      answers: ['sodass', 'so dass'],
      explanationRu: 'Вторая часть — следствие опоздания, глагол haben в конце → sodass (или so dass).',
    },
    {
      type: 'gap',
      prompt: 'Die Hauptdarstellerin ist erkältet. ___ spielt heute Abend eine Kollegin ihre Rolle.',
      answers: ['Deshalb', 'Deswegen', 'Daher', 'Darum'],
      explanationRu: 'Следствие, после пропуска сразу глагол (spielt) → наречие deshalb/deswegen/daher/darum на первом месте.',
    },
    {
      type: 'gap',
      prompt: 'Ich lese keine Krimis, ___ lieber historische Romane.',
      answers: ['sondern'],
      explanationRu: 'Отрицание (keine Krimis) + исправление → sondern.',
    },
    {
      type: 'gap',
      prompt: 'Das Festival war wunderschön, das Wetter war ___ leider ziemlich schlecht.',
      answers: ['jedoch', 'aber', 'allerdings'],
      hintRu: 'однако (наречие внутри предложения)',
      explanationRu: 'jedoch («однако») может стоять внутри предложения после глагола: das Wetter war jedoch … Так же можно употребить aber или allerdings.',
    },
    {
      type: 'gap',
      prompt: 'Wegen ___ starken Regens fand das Konzert in der Stadthalle statt.',
      answers: ['des'],
      explanationRu: 'Повторение юнита 15: причину можно выразить и предлогом wegen + Genitiv: wegen des starken Regens (der Regen → des Regens).',
    },
    {
      type: 'gap',
      prompt: 'Je länger die Serie lief, ___ langweiliger fand ich sie.',
      answers: ['desto', 'umso'],
      explanationRu: 'Повторение юнита 7: je + сравнительная степень …, desto/umso + сравнительная степень.',
    },
    {
      type: 'order',
      words: ['Das', 'ist', 'nicht', 'mein', 'Lieblingslied,', 'sondern', 'ihres.'],
      translationRu: 'Это не моя любимая песня, а её.',
      explanationRu: 'Первая часть с отрицанием (nicht), вторая исправляет её → sondern; после sondern можно опустить повторяющиеся слова.',
    },
    {
      type: 'order',
      words: ['Während', 'ich', 'gern', 'ins', 'Theater', 'gehe,', 'sieht', 'mein', 'Mann', 'lieber', 'fern.'],
      translationRu: 'Тогда как я люблю ходить в театр, мой муж предпочитает смотреть телевизор.',
      explanationRu: 'Придаточное с während стоит первым (глагол gehe в конце), поэтому главное предложение начинается с глагола sieht; приставка fern — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение с da так, чтобы придаточное стояло первым.',
      prompt: 'Das Museum ist heute geschlossen, denn das Personal streikt.',
      answers: ['Da das Personal streikt, ist das Museum heute geschlossen.', 'Weil das Personal streikt, ist das Museum heute geschlossen.'],
      explanationRu: 'В придаточном с da глагол streikt уходит в конец. Придаточное стоит первым → главное начинается с глагола ist («глагол — запятая — глагол»).',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините два предложения с помощью so … dass.',
      prompt: 'Die Sängerin war sehr nervös. Sie hat den Text vergessen.',
      answers: ['Die Sängerin war so nervös, dass sie den Text vergessen hat.'],
      explanationRu: 'sehr заменяется на so; следствие вводится союзом dass, вспомогательный глагол hat стоит в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Исправьте ошибку в выборе союза.',
      prompt: 'Wir gehen heute nicht ins Konzert, aber ins Theater.',
      answers: ['Wir gehen heute nicht ins Konzert, sondern ins Theater.'],
      explanationRu: 'После отрицания, когда вторая часть исправляет первую, нужен sondern, а не aber.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью während (противопоставление).',
      prompt: 'Lisa liest gern Romane. Ihr Bruder spielt lieber Videospiele.',
      answers: [
        'Lisa liest gern Romane, während ihr Bruder lieber Videospiele spielt.',
        'Während Lisa gern Romane liest, spielt ihr Bruder lieber Videospiele.',
      ],
      explanationRu: 'während вводит придаточное: глагол уходит в конец (spielt / liest). Если придаточное стоит первым, главное начинается с глагола.',
    },
  ],
  reading: [
    {
      title: 'Kultur in der Stadt: Veranstaltungen und Angebote',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Konzerthaus: „Peter und der Wolf“',
          body: 'Klassik für die Kleinsten! Unser Orchester erzählt das berühmte musikalische Märchen – mit Erzählerin und Bildern auf großer Leinwand. Sonntag, 11 Uhr. Für Kinder ab 4 Jahren. Erwachsene 12 Euro, Kinder 5 Euro.',
        },
        {
          label: 'b',
          heading: 'VHS: Theaterspielen für Erwachsene',
          body: 'Sie wollten schon immer einmal auf der Bühne stehen? In unserem Kurs lernen Sie Stimme, Körpersprache und Improvisation – ganz ohne Vorkenntnisse. 10 Termine, dienstags 19–21 Uhr. Zum Abschluss spielen wir ein kurzes Stück vor Publikum.',
        },
        {
          label: 'c',
          heading: 'Kino am See',
          body: 'Open-Air-Kino im Stadtpark, Juli und August, jeden Freitag bei Sonnenuntergang. Alle Filme laufen in der englischen Originalfassung mit deutschen Untertiteln. Bringen Sie eine Decke mit! Bei Regen fällt die Vorstellung aus.',
        },
        {
          label: 'd',
          heading: 'Gitarrenunterricht',
          body: 'Erfahrener Musiker gibt Gitarrenunterricht für Anfänger und Fortgeschrittene, für Kinder und Erwachsene. Bei Ihnen zu Hause oder online. Erste Stunde gratis! Tel. 0176 2384419',
        },
        {
          label: 'e',
          heading: 'Literarischer Spaziergang',
          body: 'Wo hat der berühmte Dichter seine ersten Gedichte geschrieben? Und in welchem Café traf sich die Künstlerszene der Zwanzigerjahre? Unsere Führung durch die Altstadt beantwortet diese Fragen. Samstags 14 Uhr, Treffpunkt: Marktbrunnen. Dauer ca. 90 Minuten.',
        },
        {
          label: 'f',
          heading: 'Kino Lichtspiele: Kino für Junggebliebene',
          body: 'Jeden Mittwoch um 15 Uhr zeigen wir deutsche Filmklassiker der 50er- und 60er-Jahre. Im Eintrittspreis von 6 Euro sind Kaffee und ein Stück Kuchen schon enthalten. Der Saal ist barrierefrei.',
        },
        {
          label: 'g',
          heading: 'Gospelchor „Happy Voices“ sucht Verstärkung',
          body: 'Du singst gern und hast Spaß an Rhythmus? Dann komm zu uns! Noten lesen musst du nicht können – wir lernen alle Lieder nach Gehör. Proben jeden Donnerstag, 19:30 Uhr, im Gemeindehaus St. Paul.',
        },
        {
          label: 'h',
          heading: 'Comedy-Club „Lachbar“: Offene Bühne',
          body: 'Jeden ersten Samstag im Monat: Newcomer-Abend! Wer sich traut, bekommt fünf Minuten auf der Bühne, um das Publikum zum Lachen zu bringen. Anmeldung bis Donnerstag per E-Mail. Eintritt für Zuschauer: 8 Euro.',
        },
        {
          label: 'i',
          heading: 'Lange Nacht der Museen',
          body: 'Am 14. September öffnen 30 Museen von 18 bis 2 Uhr ihre Türen. Ein Ticket für 15 Euro gilt für alle Museen und für die Shuttlebusse zwischen den Häusern. Kinder unter 12 Jahren frei.',
        },
        {
          label: 'j',
          heading: 'Ticketbörse „Fairticket“',
          body: 'Sie haben Karten für ein Konzert oder ein Theaterstück, können aber nicht hingehen? Bei uns verkaufen Sie Ihre Tickets sicher zum Originalpreis an andere Fans weiter. Das Geld bekommen Sie innerhalb von drei Tagen.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: [
            'Konzerthaus: „Peter und der Wolf“',
            'VHS: Theaterspielen für Erwachsene',
            'Kino am See',
            'Gitarrenunterricht',
            'Literarischer Spaziergang',
            'Kino Lichtspiele: Kino für Junggebliebene',
            'Gospelchor „Happy Voices“',
            'Comedy-Club „Lachbar“',
            'Lange Nacht der Museen',
            'Ticketbörse „Fairticket“',
          ],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihre Nachbarin, 72, sieht gern alte Filme, geht aber abends nicht mehr gern aus dem Haus.', answer: 5, explanationRu: 'f: старые немецкие фильмы по средам в 15 часов, т. е. днём, а не вечером.' },
            { kind: 'match', prompt: 'Sie haben Karten für ein Konzert, sind an dem Tag aber auf Dienstreise und möchten Ihr Geld zurück.', answer: 9, explanationRu: 'j: билетная биржа — можно продать билеты по исходной цене другим фанатам.' },
            { kind: 'match', prompt: 'Ihr Kollege möchte am Wochenende mit seiner fünfjährigen Tochter etwas mit Musik erleben.', answer: 0, explanationRu: 'a: детский концерт в воскресенье, для детей от 4 лет.' },
            { kind: 'match', prompt: 'Ein Freund singt sehr gern, kann aber keine Noten lesen. Er sucht eine Gruppe.', answer: 6, explanationRu: 'g: хор ищет певцов, «Noten lesen musst du nicht können».' },
            { kind: 'match', prompt: 'Ihre Freundin möchte ihr Englisch verbessern und Filme gern im Original sehen.', answer: 2, explanationRu: 'c: все фильмы идут в английской оригинальной версии с субтитрами.' },
            { kind: 'match', prompt: 'Sie möchten selbst lernen, wie man Theater spielt, haben aber keine Erfahrung.', answer: 1, explanationRu: 'b: курс театральной игры без предварительных знаний. В h можно выступить, но это не курс, а комедийный вечер.' },
            { kind: 'match', prompt: 'Ihr Sohn möchte Klavier spielen lernen und sucht einen Lehrer.', answer: -1, explanationRu: 'Подходящего объявления нет: в d предлагают только уроки гитары, а не фортепиано.' },
          ],
        },
      ],
    },
    {
      title: 'Kultur vor der Haustür',
      textType: 'Zeitungsartikel',
      texts: [
        {
          label: 'Text 1',
          heading: 'Kino im Hinterhof',
          body: `Jeden Donnerstag im Juli und August wird ein ganz normaler Hinterhof im Leipziger Westen zum Kino. Die Idee hatte Jonas Feld, 34, Grafikdesigner und großer Filmfan. „Im Sommer war es in unseren Wohnungen so heiß, dass niemand drinnen bleiben wollte“, erzählt er. „Da hatte ich die Idee, einen Beamer zu leihen und die weiße Hauswand als Leinwand zu nutzen.“ Beim ersten Mal kamen nur zwölf Nachbarn. Heute sind es oft über hundert Besucher, sodass manche sogar auf der Mauer sitzen müssen.

Eintritt kostet der Abend nicht, die Besucher können jedoch etwas in eine Spendenbox werfen. Mit dem Geld bezahlen die Organisatoren die Filmrechte, denn auch ein kleines Hinterhofkino darf Filme nicht einfach so öffentlich zeigen. Gezeigt werden vor allem ältere Filme, über die die Nachbarn vorher online abstimmen. Nicht alle im Haus sind allerdings begeistert: Einige ältere Mieter haben sich über den Lärm beschwert. Deshalb endet jede Vorstellung spätestens um 23 Uhr.`,
        },
        {
          label: 'Text 2',
          heading: 'Das Orchester kommt in die Schule',
          body: `Klassische Musik? Für viele Jugendliche klingt das nach Langeweile. Das Sinfonieorchester Bergstadt möchte das ändern und besucht deshalb seit diesem Schuljahr regelmäßig Schulen in der Region. Die Musikerinnen und Musiker geben dort jedoch nicht einfach ein Konzert, sondern arbeiten einen ganzen Vormittag mit den Klassen zusammen. Die Schüler dürfen die Instrumente ausprobieren und dem Dirigenten Fragen stellen.

„Viele Kinder haben noch nie eine Geige in der Hand gehabt“, sagt die Musikerin Miriam Okafor. „Da viele Familien selten oder nie ins Konzert gehen, kommen wir eben zu ihnen.“ Am Ende des Projekts besuchen die Klassen kostenlos eine Probe im Konzerthaus.

Die ersten Ergebnisse sind positiv: An zwei Schulen haben sich so viele Kinder für Instrumentalunterricht angemeldet, dass die städtische Musikschule zusätzliche Lehrkräfte sucht. Bezahlt wird das Projekt von einer Stiftung, allerdings nur für zwei Jahre. Wie es danach weitergeht, ist noch unklar.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie Text 1. Wählen Sie für die Aufgaben 1–3 die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1. Выберите правильный ответ a, b или c для заданий 1–3.',
          items: [
            {
              kind: 'mc',
              question: 'Wie ist die Idee für das Hinterhofkino entstanden?',
              options: ['Jonas Feld wollte mit Filmen Geld verdienen.', 'In den Wohnungen war es im Sommer zu heiß.', 'Das Kino im Stadtteil wurde geschlossen.'],
              answer: 1,
              explanationRu: '«Im Sommer war es in unseren Wohnungen so heiß, dass niemand drinnen bleiben wollte» — так появилась идея.',
            },
            {
              kind: 'mc',
              question: 'Wofür wird das Geld aus der Spendenbox verwendet?',
              options: ['Für die Rechte an den Filmen.', 'Für einen eigenen Beamer.', 'Für neue Stühle im Hof.'],
              answer: 0,
              explanationRu: '«Mit dem Geld bezahlen die Organisatoren die Filmrechte». Проектор, наоборот, взяли напрокат.',
            },
            {
              kind: 'mc',
              question: 'Warum endet das Kino spätestens um 23 Uhr?',
              options: ['Weil die Besucher am nächsten Tag arbeiten müssen.', 'Weil die Filme nicht länger sind.', 'Weil sich manche Mieter über den Lärm beschwert haben.'],
              answer: 2,
              explanationRu: '«Einige ältere Mieter haben sich über den Lärm beschwert. Deshalb endet jede Vorstellung spätestens um 23 Uhr.»',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie Text 2. Wählen Sie für die Aufgaben 4–6 die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2. Выберите правильный ответ a, b или c для заданий 4–6.',
          items: [
            {
              kind: 'mc',
              question: 'Was machen die Musiker in den Schulen?',
              options: ['Sie spielen ein kurzes Konzert in der Pause.', 'Sie arbeiten einen ganzen Vormittag mit den Schülern.', 'Sie verkaufen günstige Konzertkarten.'],
              answer: 1,
              explanationRu: '«…geben dort jedoch nicht einfach ein Konzert, sondern arbeiten einen ganzen Vormittag mit den Klassen zusammen».',
            },
            {
              kind: 'mc',
              question: 'Warum kommt das Orchester in die Schulen?',
              options: ['Viele Familien gehen kaum ins Konzert.', 'Die Schulen haben keinen Musikunterricht.', 'Das Konzerthaus wird gerade renoviert.'],
              answer: 0,
              explanationRu: '«Da viele Familien selten oder nie ins Konzert gehen, kommen wir eben zu ihnen.»',
            },
            {
              kind: 'mc',
              question: 'Welches Problem gibt es bei dem Projekt?',
              options: ['Die Schüler interessieren sich nicht dafür.', 'Die Musikschule hat zu wenige Schüler.', 'Die Finanzierung ist nur für eine begrenzte Zeit sicher.'],
              answer: 2,
              explanationRu: 'Фонд оплачивает проект «allerdings nur für zwei Jahre», что будет дальше — неясно. Учеников в музыкальной школе, наоборот, стало больше.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Stadtgespräch: Hat das Kino noch eine Zukunft?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin Frau Kessler', B: 'Herr Brandt, Kinobetreiber', C: 'Lena Vogt, Studentin' },
      situation: 'Sie hören eine Diskussion im Radio. Die Moderatorin diskutiert mit einem Kinobetreiber und einer Studentin.',
      text: `A: Herzlich willkommen zum „Stadtgespräch“! Unser Thema heute: Hat das Kino noch eine Zukunft? Immer mehr Menschen schauen Filme zu Hause, denn Streamingdienste sind billig und bequem. Bei mir im Studio sind Herr Brandt, der seit dreißig Jahren ein kleines Kino in der Altstadt leitet, und Lena Vogt, Studentin und großer Serienfan. Herr Brandt, wie geht es Ihrem Kino?
B: Ehrlich gesagt nicht besonders gut. Seit einigen Jahren kommen deutlich weniger Besucher, vor allem unter der Woche. Am Wochenende ist der Saal zwar oft noch voll, aber das reicht nicht, sodass wir die Eintrittspreise leider erhöhen mussten.
A: Frau Vogt, wann waren Sie zum letzten Mal im Kino?
C: Puh, das ist bestimmt ein halbes Jahr her. Ich habe drei Streamingdienste, daher finde ich fast alles zu Hause. Außerdem kann ich jederzeit auf Pause drücken, wenn ich mir einen Tee machen will.
B: Aber zu Hause fehlt doch das Erlebnis! Die große Leinwand, der Ton, die vielen Menschen, die zusammen lachen oder sich zusammen erschrecken … Das kann kein Fernseher ersetzen.
C: Das stimmt schon. Allerdings ist ein Kinoabend für Studenten ziemlich teuer. Mit Popcorn und Getränk bin ich schnell bei zwanzig Euro, während ich für ein Streaming-Abo nur zehn Euro im Monat zahle.
A: Herr Brandt, was tun Sie gegen dieses Problem?
B: Wir haben einiges ausprobiert. Montags gibt es jetzt einen Studententag, da kostet jede Karte nur sechs Euro. Und einmal im Monat zeigen wir einen alten Klassiker und diskutieren danach mit dem Publikum über den Film.
C: Das klingt toll! Davon wusste ich gar nichts. Ich glaube, viele junge Leute kennen solche Angebote nicht, denn kleine Kinos machen kaum Werbung in den sozialen Medien.
A: Das ist ein interessanter Punkt. Ich persönlich gehe übrigens am liebsten ins Kino, wenn es draußen stürmt und regnet – dann ist es dort besonders gemütlich.
B: Sie haben recht, Frau Vogt, bei Social Media müssen wir besser werden. Meine Enkelin hat mir schon angeboten, dass sie uns dabei hilft.
C: Dann komme ich nächsten Montag auf jeden Fall vorbei – und bringe meine Mitbewohner mit!
A: Na, das ist doch ein schönes Ergebnis. Vielen Dank Ihnen beiden!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слышите дискуссию два раза. Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Herr Brandt', 'Lena Vogt'],
          items: [
            { kind: 'match', prompt: 'Am Wochenende kommen noch relativ viele Zuschauer.', answer: 1, explanationRu: 'Брандт: «Am Wochenende ist der Saal zwar oft noch voll».' },
            { kind: 'match', prompt: 'Zu Hause kann man einen Film unterbrechen, wann man will.', answer: 2, explanationRu: 'Лена: «…kann ich jederzeit auf Pause drücken».' },
            { kind: 'match', prompt: 'Einen Film zusammen mit vielen Menschen zu sehen, ist ein besonderes Erlebnis.', answer: 1, explanationRu: 'Брандт: «Aber zu Hause fehlt doch das Erlebnis! … die vielen Menschen, die zusammen lachen».' },
            { kind: 'match', prompt: 'Für junge Leute mit wenig Geld ist ein Kinobesuch zu teuer.', answer: 2, explanationRu: 'Лена: «…ist ein Kinoabend für Studenten ziemlich teuer… zwanzig Euro».' },
            { kind: 'match', prompt: 'Nach manchen Filmen kann das Publikum über den Film sprechen.', answer: 1, explanationRu: 'Брандт: раз в месяц классика и обсуждение с публикой.' },
            { kind: 'match', prompt: 'Kleine Kinos informieren junge Leute zu wenig im Internet.', answer: 2, explanationRu: 'Лена: «…kleine Kinos machen kaum Werbung in den sozialen Medien».' },
            { kind: 'match', prompt: 'Bei schlechtem Wetter ist ein Kinobesuch besonders schön.', answer: 0, explanationRu: 'Модератор: «…am liebsten ins Kino, wenn es draußen stürmt und regnet».' },
            { kind: 'match', prompt: 'Eine Verwandte möchte bei der Werbung im Internet helfen.', answer: 1, explanationRu: 'Брандт: «Meine Enkelin hat mir schon angeboten, dass sie uns dabei hilft».' },
          ],
        },
      ],
    },
    {
      title: 'Eine Führung hinter den Kulissen',
      kind: 'monolog',
      situation: 'Sie nehmen an einer Führung durch das Stadttheater teil.',
      text: `Guten Tag, meine Damen und Herren, und herzlich willkommen im Stadttheater! Mein Name ist Petra Lindner, ich arbeite hier seit zwölf Jahren in der Bühnentechnik. Unsere Führung dauert etwa eine Stunde. Bitte bleiben Sie immer in der Gruppe, denn hinter der Bühne liegen viele Kabel, und manchmal werden schwere Teile bewegt. Fotografieren dürfen Sie gern, aber bitte ohne Blitz.

Wir beginnen hier im großen Saal. Er hat 650 Plätze und wurde 1912 eröffnet. Vor drei Jahren haben wir ihn komplett renoviert, da die alten Sitze wirklich sehr unbequem waren. Die rote Farbe haben wir jedoch behalten, denn das wollte unser Publikum unbedingt so.

Jetzt gehen wir auf die Bühne. Sehen Sie den runden Teil im Boden? Er kann sich drehen, sodass wir zwischen zwei Szenen in wenigen Sekunden ein ganz neues Bühnenbild zeigen können. Darauf sind wir besonders stolz.

Weiter geht es in die Werkstätten. Hier bauen unsere Schreiner und Maler alle Dekorationen selbst. Und hier ist meine Lieblingsabteilung: der Kostümfundus. Wir haben über 20.000 Kostüme! Übrigens werden die meisten nach der Spielzeit nicht weggeworfen, sondern man kann sie bei uns ausleihen. Das nutzen vor allem im Februar viele Leute, denn dann ist Karneval.

Zum Schluss gehen wir in die Kantine, wo die Schauspieler vor der Vorstellung essen. Dort bekommen Sie einen Kaffee, und Sie können mir gern noch Fragen stellen. Ach ja: Mit Ihrer Führungskarte bekommen Sie in diesem Monat zehn Prozent Rabatt auf alle Vorstellungen.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Text einmal. Wählen Sie für die Aufgaben 1–5 die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите текст один раз. Выберите правильный ответ a, b или c для заданий 1–5.',
          items: [
            {
              kind: 'mc',
              question: 'Warum sollen die Teilnehmer in der Gruppe bleiben?',
              options: ['Weil es hinter der Bühne gefährlich sein kann.', 'Weil Fotografieren verboten ist.', 'Weil die Führung sonst zu lange dauert.'],
              answer: 0,
              explanationRu: 'Там лежат кабели и иногда передвигают тяжёлые детали. Фотографировать можно, только без вспышки.',
            },
            {
              kind: 'mc',
              question: 'Warum wurde der Saal renoviert?',
              options: ['Weil die rote Farbe nicht mehr modern war.', 'Weil die Sitze unbequem waren.', 'Weil man mehr Plätze brauchte.'],
              answer: 1,
              explanationRu: '«…da die alten Sitze wirklich sehr unbequem waren». Красный цвет как раз сохранили.',
            },
            {
              kind: 'mc',
              question: 'Was ist das Besondere an der Bühne?',
              options: ['Sie stammt noch aus dem Jahr 1912.', 'Sie ist die größte Bühne der Region.', 'Ein Teil des Bodens kann sich drehen.'],
              answer: 2,
              explanationRu: 'Круглая часть пола вращается, и декорации можно сменить за секунды. 1912 год относится к залу.',
            },
            {
              kind: 'mc',
              question: 'Was erfährt man über die Kostüme?',
              options: ['Sie werden nach der Spielzeit weggeworfen.', 'Man kann sie im Theatershop kaufen.', 'Man kann sie ausleihen.'],
              answer: 2,
              explanationRu: '«…nicht weggeworfen, sondern man kann sie bei uns ausleihen» — особенно на карнавал.',
            },
            {
              kind: 'mc',
              question: 'Was bekommen die Teilnehmer am Ende der Führung?',
              options: ['Eine kostenlose Theaterkarte.', 'Einen Rabatt für Vorstellungen in diesem Monat.', 'Ein Mittagessen in der Kantine.'],
              answer: 1,
              explanationRu: 'С билетом экскурсии — скидка 10 % на все спектакли этого месяца. В столовой — только кофе.',
            },
          ],
        },
      ],
    },
  ],
};
