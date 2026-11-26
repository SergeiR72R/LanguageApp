import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Heute nehme ich das Fahrrad ___ des Autos.',
      options: ['statt', 'wegen', 'während', 'außerhalb'],
      answer: 0,
      explanationRu: 'Одно средство транспорта вместо другого → statt (вместо) + Genitiv: statt des Autos.',
    },
    {
      type: 'choice',
      prompt: 'Wegen ___ Streiks fahren heute keine Züge.',
      options: ['des', 'dem', 'der', 'den'],
      answer: 0,
      explanationRu: 'wegen + Genitiv; der Streik — мужской род → des Streiks.',
    },
    {
      type: 'choice',
      prompt: 'Wir wohnen ___ der Stadt, ungefähr zwanzig Kilometer vom Zentrum entfernt.',
      options: ['außerhalb', 'innerhalb', 'während', 'trotz'],
      answer: 0,
      explanationRu: 'Двадцать километров от центра — значит за пределами города → außerhalb.',
    },
    {
      type: 'choice',
      prompt: 'Kennst du schon ___? Er wohnt im dritten Stock.',
      options: ['den neuen Nachbarn', 'den neuen Nachbar', 'dem neuen Nachbarn', 'der neue Nachbarn'],
      answer: 0,
      explanationRu: 'kennen + Akkusativ. Nachbar — n-склонение, поэтому в аккузативе den Nachbarn.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: [
        'Trotz es regnet, fahre ich mit dem Rad.',
        'Obwohl des Regens fahre ich mit dem Rad.',
        'Trotz des Regens fahre ich mit dem Rad.',
        'Trotzdem des Regens fahre ich mit dem Rad.',
      ],
      answer: 2,
      explanationRu: 'Ловушка: trotz — предлог (+ существительное в генитиве), obwohl — союз (+ придаточное), trotzdem — наречие (без существительного).',
    },
    {
      type: 'choice',
      prompt: 'Die Adresse des ___ ist leider falsch.',
      options: ['Kunden', 'Kundens', 'Kunde', 'Kundes'],
      answer: 0,
      explanationRu: 'Ловушка: у существительных n-склонения в генитиве только -n, без -s: des Kunden.',
    },
    {
      type: 'choice',
      prompt: 'Die Schreibweise des ___ ist nicht korrekt.',
      options: ['Namens', 'Namen', 'Name', 'Names'],
      answer: 0,
      explanationRu: 'Исключение: der Name склоняется по n-склонению, но в генитиве получает -ns: des Namens.',
    },
    {
      type: 'gap',
      prompt: 'Statt ___ Taxis haben wir den Nachtbus genommen.',
      answers: ['eines'],
      hintRu: 'неопределённый артикль',
      explanationRu: 'statt + Genitiv; das Taxi — средний род → eines Taxis.',
    },
    {
      type: 'gap',
      prompt: 'Trotz ___ hohen Preise fahren viele Leute mit dem Auto in die Stadt.',
      answers: ['der'],
      explanationRu: 'Preise — множественное число. Генитив мн. ч.: der hohen Preise.',
    },
    {
      type: 'gap',
      prompt: 'Innerhalb ___ zwei Wochen bekommen Sie Ihren neuen Führerschein.',
      answers: ['von'],
      explanationRu: 'Перед «zwei Wochen» нет артикля, генитив не виден → innerhalb von + Dativ.',
    },
    {
      type: 'gap',
      prompt: 'Während des ganzen ___ hat es geregnet.',
      answers: ['Ausflugs', 'Ausfluges'],
      hintRu: 'der Ausflug',
      explanationRu: 'während + Genitiv; der Ausflug — мужской род → des ganzen Ausflugs (Ausfluges).',
    },
    {
      type: 'gap',
      prompt: 'Der Busfahrer hat einem älteren ___ beim Einsteigen geholfen.',
      answers: ['Herrn'],
      hintRu: 'der Herr',
      explanationRu: 'helfen + Dativ. Herr — n-склонение: в единственном числе -n (dem Herrn), во множественном -en (die Herren).',
    },
    {
      type: 'gap',
      prompt: 'Hat jemand den ___ gesehen, der bei Rot über die Straße gelaufen ist?',
      answers: ['Jungen'],
      hintRu: 'der Junge',
      explanationRu: 'sehen + Akkusativ. Junge — n-склонение: den Jungen.',
    },
    {
      type: 'gap',
      prompt: 'Wegen des ___ Verkehrs bin ich zu spät gekommen.',
      answers: ['starken'],
      hintRu: 'stark',
      explanationRu: 'Повторение юнита 6: после определённого артикля в генитиве прилагательное получает -en: des starken Verkehrs.',
    },
    {
      type: 'gap',
      prompt: 'Die Brücke ___ wegen Bauarbeiten bis Freitag gesperrt.',
      answers: ['ist', 'wird', 'bleibt'],
      explanationRu: 'Повторение юнита 9 (пассив): «ist gesperrt» — состояние, «wird gesperrt» — процесс. Заметьте: перед «Bauarbeiten» нет артикля, поэтому генитив не виден — так часто говорят в объявлениях.',
    },
    {
      type: 'order',
      words: ['Trotz', 'der', 'Verspätung', 'haben', 'wir', 'den', 'Anschlusszug', 'noch', 'erreicht.'],
      translationRu: 'Несмотря на опоздание, мы ещё успели на пересадку.',
      explanationRu: 'Группа «trotz + Genitiv» занимает первое место, сразу за ней спрягаемый глагол haben, Partizip II — в конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'habe', 'den', 'Kunden', 'innerhalb', 'einer', 'Stunde', 'zurückgerufen.'],
      translationRu: 'Я перезвонил клиенту в течение часа.',
      explanationRu: 'zurückrufen + Akkusativ: den Kunden (n-склонение). innerhalb einer Stunde — «в течение часа».',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с während на предлог während + существительное «die Fahrt».',
      prompt: 'Während wir gefahren sind, haben wir Musik gehört.',
      answers: ['Während der Fahrt haben wir Musik gehört.', 'Wir haben während der Fahrt Musik gehört.'],
      explanationRu: 'Союз während + придаточное → предлог während + Genitiv: während der Fahrt. После группы на первом месте сразу идёт глагол.',
    },
    {
      type: 'transform',
      instructionRu: 'Повторение юнита 10: замените statt … zu + инфинитив на statt + Genitiv (das Auto).',
      prompt: 'Statt mit dem Auto zu fahren, nehme ich das Fahrrad.',
      answers: [
        'Statt des Autos nehme ich das Fahrrad.',
        'Anstatt des Autos nehme ich das Fahrrad.',
        'Ich nehme statt des Autos das Fahrrad.',
        'Ich nehme das Fahrrad statt des Autos.',
      ],
      explanationRu: 'statt … zu вводит инфинитивную группу, а statt + Genitiv — только существительное: statt des Autos.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите с wegen, используя существительное «der Schnee».',
      prompt: 'Weil es stark geschneit hat, sind viele Züge ausgefallen.',
      answers: [
        'Wegen des starken Schnees sind viele Züge ausgefallen.',
        'Viele Züge sind wegen des starken Schnees ausgefallen.',
        'Wegen des Schnees sind viele Züge ausgefallen.',
        'Viele Züge sind wegen des Schnees ausgefallen.',
      ],
      explanationRu: 'Глагол schneien превращается в существительное der Schnee; wegen + Genitiv → des (starken) Schnees.',
    },
  ],
  reading: [
    {
      title: 'Kostenloser Nahverkehr – gute Idee?',
      textType: 'Leserkommentare',
      texts: [
        {
          label: '1',
          heading: 'Monika, 34, Hannover',
          body: 'Wir sind eine Familie mit drei Kindern. Wegen der hohen Ticketpreise fahren wir am Wochenende fast immer mit dem Auto in die Stadt – fünf Fahrkarten sind einfach zu teuer. Wenn Busse und Bahnen nichts kosten, lassen wir das Auto sofort stehen. Ich hoffe, dass die Stadt das bald möglich macht.',
        },
        {
          label: '2',
          heading: 'Jürgen, 61, Kassel',
          body: 'Kostenlos klingt schön, aber irgendjemand muss die Busse ja bezahlen – am Ende sind das wir alle mit unseren Steuern. Statt kostenloser Tickets brauchen wir lieber mehr Busse, neue Haltestellen und einen besseren Takt am Abend. Ein leerer Bus, der nichts kostet, hilft niemandem.',
        },
        {
          label: '3',
          heading: 'Thomas Brandt, 45, Busfahrer',
          body: 'Ich fahre seit zwanzig Jahren Bus. Schon heute sind unsere Busse während des Berufsverkehrs total voll, und wir haben zu wenige Fahrer. Wenn die Fahrt nichts mehr kostet, kommen noch mehr Fahrgäste. Ohne zusätzliche Busse und Kollegen funktioniert das nicht. Deshalb halte ich die Idee im Moment für falsch.',
        },
        {
          label: '4',
          heading: 'Aylin, 22, Studentin',
          body: 'Mit meinem Semesterticket fahre ich zwar günstig, aber meine Eltern zahlen jeden Monat fast 90 Euro. Für Menschen mit wenig Geld ist Mobilität ein echtes Problem. Ein kostenloser Nahverkehr wäre gerecht: Jeder könnte ohne Sorgen zum Arzt, zur Arbeit oder ins Kino fahren. Ich wäre sofort dabei!',
        },
        {
          label: '5',
          heading: 'Sofia, 38, Freiburg',
          body: 'Natürlich kostet so etwas viel Geld. Trotz der Kosten bin ich aber dafür, denn Staus, Lärm und schlechte Luft kosten uns auch viel – nur merken wir es nicht direkt. In einigen Städten in Europa gibt es das Modell schon, und dort sind deutlich weniger Autos im Zentrum unterwegs.',
        },
        {
          label: '6',
          heading: 'Karl, 70, aus einem Dorf bei Ulm',
          body: 'Ich wohne außerhalb der Stadt, und bei uns hält der Bus nur zweimal am Tag. Ob er Geld kostet oder nicht, ist mir egal – ich kann ihn sowieso kaum benutzen. Die Leute in der Stadt bekommen alles geschenkt, und wir auf dem Land haben wieder nichts davon. So eine Idee unterstütze ich nicht.',
        },
        {
          label: '7',
          heading: 'Lea, 29, Leipzig',
          body: 'Ich arbeite in einer Arztpraxis in der Innenstadt und finde, dass die Stadt den Menschen gehören soll, nicht den Autos. Wenn Bus und Bahn nichts kosten, steigen viele um – davon bin ich überzeugt. Am Anfang wird es vielleicht Probleme geben, aber innerhalb weniger Jahre lohnt sich das.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Kommentare. Ist die Person für einen kostenlosen Nahverkehr?',
          instructionRu: 'Прочитайте комментарии. Выступает ли человек за бесплатный общественный транспорт?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: '1 Monika', answer: true, explanationRu: 'Если транспорт будет бесплатным, семья оставит машину; она надеется, что город это сделает.' },
            { kind: 'tf', statement: '2 Jürgen', answer: false, explanationRu: '«Statt kostenloser Tickets brauchen wir lieber mehr Busse…» — он против.' },
            { kind: 'tf', statement: '3 Thomas Brandt', answer: false, explanationRu: '«Deshalb halte ich die Idee im Moment für falsch» — автобусы и так переполнены.' },
            { kind: 'tf', statement: '4 Aylin', answer: true, explanationRu: '«Ein kostenloser Nahverkehr wäre gerecht … Ich wäre sofort dabei!»' },
            { kind: 'tf', statement: '5 Sofia', answer: true, explanationRu: '«Trotz der Kosten bin ich aber dafür».' },
            { kind: 'tf', statement: '6 Karl', answer: false, explanationRu: 'В его деревне автобус ходит редко: «So eine Idee unterstütze ich nicht».' },
            { kind: 'tf', statement: '7 Lea', answer: true, explanationRu: 'Она уверена, что люди пересядут на транспорт, и через несколько лет это окупится.' },
          ],
        },
      ],
    },
    {
      title: 'Beförderungsbedingungen der Stadtwerke Neustadt',
      textType: 'Regeln / Informationstext',
      texts: [
        {
          heading: 'Unterwegs mit Bus und Bahn – das sollten Sie wissen',
          body: `Fahrkarten: Bitte kaufen Sie Ihre Fahrkarte vor Beginn der Fahrt am Automaten, in der App oder im Kundenzentrum. In Bussen ist der Kauf beim Fahrer nur noch mit Karte möglich, Bargeld wird nicht mehr angenommen. Papierfahrkarten müssen Sie sofort nach dem Einsteigen entwerten. Wer bei einer Kontrolle keine gültige Fahrkarte hat, zahlt 60 Euro. Haben Sie eine persönliche Monatskarte nur vergessen, zahlen Sie lediglich 7 Euro, wenn Sie die Karte innerhalb einer Woche im Kundenzentrum zeigen.

Kinder: Kinder unter sechs Jahren fahren kostenlos. Kinder von sechs bis vierzehn Jahren brauchen eine Kinderfahrkarte.

Fahrräder und E-Scooter: Fahrräder dürfen außerhalb der Hauptverkehrszeiten (Montag bis Freitag vor 6 Uhr, zwischen 9 und 15 Uhr und nach 19 Uhr) kostenlos mitgenommen werden. Während der Hauptverkehrszeiten ist eine Fahrradkarte nötig. Kinderwagen und Rollstühle haben immer Vorrang. Die Mitnahme von E-Scootern ist aus Sicherheitsgründen nicht erlaubt.

Tiere: Kleine Tiere in einer Transportbox fahren kostenlos. Für Hunde ohne Box brauchen Sie eine Kinderfahrkarte; sie müssen an der Leine geführt werden.

Verhalten: Essen und laute Musik sind in allen Fahrzeugen nicht gestattet. Bitte bieten Sie älteren Menschen, Schwangeren und Menschen mit Behinderung Ihren Sitzplatz an.

Fundsachen: Haben Sie etwas verloren? Gegenstände, die in unseren Fahrzeugen gefunden werden, bringen wir am nächsten Werktag ins Fundbüro der Stadt.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Sie haben Ihre persönliche Monatskarte zu Hause vergessen und werden kontrolliert. Was passiert?',
              options: [
                'Sie müssen sofort 60 Euro bezahlen.',
                'Sie zahlen nur 7 Euro, wenn Sie die Karte später im Kundenzentrum zeigen.',
                'Sie dürfen ohne Strafe weiterfahren.',
              ],
              answer: 1,
              explanationRu: 'Если забыли личный проездной, платите только 7 евро, предъявив его в течение недели в центре обслуживания.',
            },
            {
              kind: 'mc',
              question: 'Sie möchten am Dienstag um 17 Uhr Ihr Fahrrad im Bus mitnehmen.',
              options: [
                'Das ist kostenlos.',
                'Das ist verboten.',
                'Sie brauchen eine Fahrradkarte.',
              ],
              answer: 2,
              explanationRu: '17 часов — час пик (бесплатно только до 6, с 9 до 15 и после 19 часов), поэтому нужен билет для велосипеда.',
            },
            {
              kind: 'mc',
              question: 'Was gilt für Hunde?',
              options: [
                'Große Hunde dürfen nicht mitfahren.',
                'Ein Hund ohne Transportbox braucht eine Kinderfahrkarte.',
                'Alle Hunde fahren kostenlos.',
              ],
              answer: 1,
              explanationRu: '«Für Hunde ohne Box brauchen Sie eine Kinderfahrkarte».',
            },
            {
              kind: 'mc',
              question: 'Sie haben Ihren Schirm im Bus liegen lassen. Wo finden Sie ihn wahrscheinlich?',
              options: [
                'Am nächsten Werktag im Fundbüro der Stadt.',
                'Im Kundenzentrum der Stadtwerke.',
                'Beim Busfahrer an der Endstation.',
              ],
              answer: 0,
              explanationRu: 'Найденные вещи на следующий рабочий день передают в городское бюро находок.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Durchsage am Hauptbahnhof',
      kind: 'monolog',
      situation: 'Sie hören eine Durchsage am Bahnhof.',
      text: `Achtung an Gleis 5! Information zum Regionalexpress RE 7 nach Kiel, planmäßige Abfahrt 14:32 Uhr. Wegen einer Reparatur am Zug verspätet sich die Abfahrt um etwa 25 Minuten. Fahrgäste nach Neumünster und Kiel können alternativ den Intercity um 14:50 Uhr von Gleis 8 nutzen. Ihre Fahrkarten für den Regionalverkehr sind in diesem Zug ausnahmsweise ohne Zuschlag gültig. Bitte beachten Sie außerdem: Der RE 7 hält heute wegen Bauarbeiten nicht in Bordesholm. Statt des Zuges fährt ein Ersatzbus ab dem Bahnhofsvorplatz. Wir bitten um Entschuldigung.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Der Regionalexpress nach Kiel fällt heute aus.', answer: false, explanationRu: 'Поезд не отменён, а задерживается примерно на 25 минут.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was können Fahrgäste nach Kiel tun?',
              options: [
                'Mit dem Intercity fahren, ohne extra zu bezahlen.',
                'Mit dem Ersatzbus vom Bahnhofsvorplatz fahren.',
                'Ihre Fahrkarte am Schalter zurückgeben.',
              ],
              answer: 0,
              explanationRu: 'Можно поехать на Intercity в 14:50 с 8-го пути: билеты действительны без доплаты. Автобус идёт только вместо остановки в Бордесхольме.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Mehr Platz für Fahrräder?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin Frau Lenz', B: 'Herr Wolf, Taxifahrer', C: 'Frau Yilmaz, Fahrradclub' },
      situation: 'Sie hören eine Diskussion im Radio. Die Moderatorin spricht mit Herrn Wolf und Frau Yilmaz über das Thema „Mehr Platz für Fahrräder in der Stadt?“.',
      text: `A: Guten Abend und willkommen bei „Stadtgespräch“. Die Stadt plant, auf der Ringstraße eine Autospur in einen breiten Radweg umzuwandeln. Darüber streiten gerade viele. Bei mir sind Herr Wolf, er fährt seit fünfzehn Jahren Taxi, und Frau Yilmaz vom Fahrradclub. Frau Yilmaz, warum brauchen wir den neuen Radweg?
C: Weil Radfahren auf der Ringstraße im Moment einfach gefährlich ist. Letztes Jahr gab es dort zwölf Unfälle mit Radfahrern. Viele Menschen würden gern mit dem Rad zur Arbeit fahren, aber sie haben Angst. Wenn wir sichere Radwege bauen, steigen sie um.
A: Herr Wolf, Sie sind gegen den Plan?
B: Ja. Schon heute stehe ich wegen der vielen Baustellen jeden Tag im Stau. Wenn eine Spur wegfällt, wird es noch schlimmer. Und denken Sie an die Lieferwagen, an die Handwerker, an alte Menschen, die ein Taxi zum Arzt brauchen. Die können nicht alle Fahrrad fahren.
C: Das sagt ja auch niemand. Aber jeder, der Rad fährt, ist ein Auto weniger im Stau. Davon profitieren am Ende auch Sie, Herr Wolf.
A: Ich habe gelesen, dass es in Kopenhagen ähnliche Diskussionen gab. Dort fährt heute fast die Hälfte der Menschen mit dem Rad zur Arbeit. Das hat allerdings zwanzig Jahre gedauert.
B: Kopenhagen ist flach. Bei uns gibt es viele Hügel, und im Winter ist es oft glatt. Trotz aller schönen Pläne werden die meisten Leute im Januar nicht mit dem Rad fahren.
C: Mit einem E-Bike sind Hügel heute kein Problem mehr. Und im Winter fahren vielleicht weniger, aber trotzdem viele.
A: Gibt es denn einen Kompromiss?
B: Vielleicht. Man könnte den Radweg durch die Parkstraße führen, statt der Ringstraße eine Spur wegzunehmen. Die Parkstraße ist ruhiger.
C: Darüber kann man reden. Wichtig ist nur, dass der Weg innerhalb der nächsten zwei Jahre gebaut wird und nicht wieder in einer Schublade landet.
A: Vielen Dank Ihnen beiden für das Gespräch!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was? Ordnen Sie zu.',
          instructionRu: 'Вы слышите дискуссию два раза. Кто что говорит? Соотнесите.',
          options: ['Moderatorin Frau Lenz', 'Herr Wolf', 'Frau Yilmaz'],
          items: [
            { kind: 'match', prompt: 'Auf der Ringstraße passieren viele Unfälle mit Radfahrern.', answer: 2, explanationRu: 'Фрау Йылмаз: в прошлом году там было двенадцать аварий с велосипедистами.' },
            { kind: 'match', prompt: 'Ich verliere wegen der Baustellen schon jetzt viel Zeit im Stau.', answer: 1, explanationRu: 'Герр Вольф: «…stehe ich wegen der vielen Baustellen jeden Tag im Stau».' },
            { kind: 'match', prompt: 'Nicht alle Menschen können mit dem Fahrrad fahren.', answer: 1, explanationRu: 'Герр Вольф говорит о мастерах, фургонах доставки и пожилых людях.' },
            { kind: 'match', prompt: 'Weniger Autos auf der Straße helfen auch den Taxifahrern.', answer: 2, explanationRu: 'Фрау Йылмаз: «Davon profitieren am Ende auch Sie, Herr Wolf».' },
            { kind: 'match', prompt: 'In einer anderen Stadt hat die Veränderung viele Jahre gedauert.', answer: 0, explanationRu: 'Ведущая рассказывает о Копенгагене: на это ушло двадцать лет.' },
            { kind: 'match', prompt: 'Das Wetter und die Hügel sind ein Problem für Radfahrer.', answer: 1, explanationRu: 'Герр Вольф: в городе много холмов, а зимой скользко.' },
            { kind: 'match', prompt: 'Mit elektrischer Unterstützung ist Bergauffahren leicht.', answer: 2, explanationRu: 'Фрау Йылмаз: «Mit einem E-Bike sind Hügel heute kein Problem mehr».' },
            { kind: 'match', prompt: 'Der Radweg könnte auch durch eine andere Straße gehen.', answer: 1, explanationRu: 'Компромисс предлагает герр Вольф: провести велодорожку по Паркштрассе.' },
          ],
        },
      ],
    },
  ],
};
