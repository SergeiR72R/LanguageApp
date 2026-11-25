import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    // ---------- choice ----------
    {
      type: 'choice',
      prompt: 'Die Sprecherin sagte, alle Mitarbeiter ___ über die Vorwürfe informiert worden. (Schriftsprache)',
      options: ['sind', 'seien', 'wären', 'haben'],
      answer: 1,
      explanationRu:
        'У глагола «sein» форма Konjunktiv I во мн. ч. («seien») отличается от индикатива («sind»), поэтому замена на Konjunktiv II «wären» не нужна. Пассив Perfekt: «informiert worden sein».',
    },
    {
      type: 'choice',
      prompt: 'Der Konzernchef kündigte an, das Unternehmen ___ im nächsten Jahr 500 neue Stellen schaffen.',
      options: ['wird', 'werden', 'werde', 'würden'],
      answer: 2,
      explanationRu:
        'Будущее время в косвенной речи: Konjunktiv I от «werden» + Infinitiv. Подлежащее «das Unternehmen» — 3-е л. ед. ч. → «werde» (отличается от индикатива «wird»).',
    },
    {
      type: 'choice',
      prompt: 'Wie gibt man „Wir fordern eine Lohnerhöhung um acht Prozent“ in der indirekten Rede korrekt wieder?',
      options: [
        'Die Gewerkschaften erklärten, sie fordern eine Lohnerhöhung um acht Prozent.',
        'Die Gewerkschaften erklärten, sie forderten eine Lohnerhöhung um acht Prozent.',
        'Die Gewerkschaften erklärten, sie würden eine Lohnerhöhung um acht Prozent fordern.',
        'Die Gewerkschaften erklärten, sie fordere eine Lohnerhöhung um acht Prozent.',
      ],
      answer: 2,
      explanationRu:
        'Цепочка замен: Konjunktiv I «sie fordern» = индикатив → Konjunktiv II «sie forderten» = Präteritum слабого глагола → остаётся «würden + Infinitiv». «fordere» не согласуется с мн. ч.',
    },
    {
      type: 'choice',
      prompt:
        '„Ich komme morgen hierher zurück“, sagte der Bürgermeister am Montag. Wie gibt man das eine Woche später in einer anderen Stadt wieder?',
      options: [
        'Der Bürgermeister sagte, ich komme morgen hierher zurück.',
        'Der Bürgermeister sagte, er komme am folgenden Tag dorthin zurück.',
        'Der Bürgermeister sagte, er kommen am nächsten Tag zurück.',
        'Der Bürgermeister sagte, er sei am folgenden Tag dorthin zurückgekommen.',
      ],
      answer: 1,
      explanationRu:
        'В косвенной речи меняются не только местоимения (ich → er), но и указания на время и место с точки зрения нового говорящего: «morgen» → «am folgenden Tag», «hierher» → «dorthin». Одновременность → «komme».',
    },
    {
      type: 'choice',
      prompt: 'Die Ministerin bat die Journalisten, man ___ ihr noch etwas Zeit für eine Stellungnahme geben.',
      options: ['möge', 'mag', 'möchte', 'müsse'],
      answer: 0,
      explanationRu:
        'Вежливая просьба в косвенной речи передаётся через Konjunktiv I от «mögen»: «man möge …» (книжный стиль). Требование передавалось бы через «solle», «müsse» означало бы необходимость.',
    },
    {
      type: 'choice',
      prompt: '„Die Akten wurden vernichtet“, gab der Archivar zu. → Der Archivar gab zu, die Akten ___.',
      options: ['wären vernichtet', 'seien vernichtet worden', 'hätten vernichtet worden', 'seien vernichtet gewesen'],
      answer: 1,
      explanationRu:
        'Повторение пассива (B2): прошедшее время в косвенной речи → Konjunktiv I «seien» + Partizip II + «worden». Пассив образуется только с «sein», а «worden» — без приставки ge-.',
    },
    // ---------- gap ----------
    {
      type: 'gap',
      prompt: 'Der Experte betonte, man ___ (können) die Folgen der Entscheidung noch nicht abschätzen.',
      answers: ['könne'],
      explanationRu:
        'Konjunktiv I модальных глаголов образуется от основы инфинитива: «können» → «er/man könne». Форма отличается от индикатива «kann», поэтому замена не нужна.',
    },
    {
      type: 'gap',
      prompt: 'Die Wissenschaftlerinnen warnten, die Lage ___ (sein) weit ernster als bisher angenommen.',
      answers: ['sei'],
      explanationRu: 'Одновременность в косвенной речи: Konjunktiv I «sei» (3-е л. ед. ч. от «sein», подлежащее — «die Lage»).',
    },
    {
      type: 'gap',
      prompt: 'Die Zuschauer wollten wissen, warum die Sendung so kurzfristig abgesetzt worden ___.',
      answers: ['sei'],
      hintRu: 'косвенный вопрос, пассив, прошедшее',
      explanationRu:
        'Косвенный вопрос с вопросительным словом: спрягаемый глагол в конце. Пассив в прошедшем времени → «abgesetzt worden sei» (Konjunktiv I). В разговорной речи встречается и «wäre», но нормой является «sei».',
    },
    {
      type: 'gap',
      prompt: 'Der Arzt sagte mir, ich ___ (dürfen) vorerst keinen Sport treiben.',
      answers: ['dürfe', 'dürfte'],
      hintRu: 'Konjunktiv I, 1-е лицо ед. ч.',
      explanationRu:
        'У модальных глаголов форма 1-го лица ед. ч. в Konjunktiv I отличается от индикатива («ich darf» → «ich dürfe»), поэтому она и используется. «dürfte» (Konj. II) тоже встречается.',
    },
    {
      type: 'gap',
      prompt: 'Der ___ Täter wurde gestern Abend festgenommen; ein Geständnis liegt bislang nicht vor.',
      answers: ['mutmaßliche', 'mutmassliche', 'angebliche'],
      hintRu: '«предполагаемый» (юридический термин в СМИ)',
      explanationRu:
        '«mutmaßlich» используется в СМИ, пока вина не доказана: журналист дистанцируется от утверждения. «vermeintlich» означало бы, что предположение ошибочно.',
    },
    {
      type: 'gap',
      prompt: 'Wie die Nachrichtenagentur meldete, ___ der Flughafen wegen des Sturms vorübergehend gesperrt.',
      answers: ['ist', 'wurde', 'war', 'bleibt'],
      hintRu: 'после «wie …» — какое наклонение?',
      explanationRu:
        'В конструкции «Wie X meldet/berichtet, …» источник указан явно, и автор не дистанцируется от сообщения, поэтому используется индикатив, а не Konjunktiv I.',
    },
    {
      type: 'gap',
      prompt: 'Der Kandidat beteuerte, er ___ (wissen) nichts von den illegalen Spenden an seine Partei.',
      answers: ['wisse'],
      explanationRu: 'Konjunktiv I от «wissen» образуется от основы инфинитива: «er wisse» (индикатив — «er weiß»).',
    },
    // ---------- order ----------
    {
      type: 'order',
      words: ['Der Pressesprecher', 'versicherte,', 'man', 'werde', 'die Vorwürfe umgehend', 'prüfen.'],
      translationRu: 'Пресс-секретарь заверил, что обвинения будут немедленно проверены.',
      explanationRu:
        'Косвенная речь без «dass» имеет порядок главного предложения: «werde» (Konjunktiv I) на втором месте, инфинитив «prüfen» в конце.',
    },
    {
      type: 'order',
      words: ['Die Opposition', 'wollte wissen,', 'wer', 'die Entscheidung', 'getroffen', 'habe.'],
      translationRu: 'Оппозиция хотела знать, кто принял это решение.',
      explanationRu:
        'Косвенный вопрос вводится вопросительным словом «wer», спрягаемый глагол «habe» (Konjunktiv I) стоит в самом конце после причастия.',
    },
    {
      type: 'order',
      words: ['Der Fußballer', 'soll', 'seinem Trainer mit Rücktritt', 'gedroht', 'haben.'],
      translationRu: 'Говорят, что футболист пригрозил своему тренеру уходом.',
      explanationRu:
        '«sollen» + Infinitiv Perfekt («gedroht haben») передаёт чужое утверждение, за которое говорящий не ручается. Инфинитив Perfekt стоит в конце.',
    },
    // ---------- transform ----------
    {
      type: 'transform',
      instructionRu: 'Передайте высказывание в косвенной речи (с точки зрения следующего дня).',
      prompt: '„Ich habe meinen Vertrag gestern verlängert“, sagte die Moderatorin.',
      answers: [
        'Die Moderatorin sagte, sie habe ihren Vertrag am Vortag verlängert.',
        'Die Moderatorin sagte, sie habe ihren Vertrag am Tag zuvor verlängert.',
        'Die Moderatorin sagte, sie habe ihren Vertrag tags zuvor verlängert.',
        'Die Moderatorin sagte, dass sie ihren Vertrag am Vortag verlängert habe.',
        'Die Moderatorin sagte, dass sie ihren Vertrag am Tag zuvor verlängert habe.',
      ],
      explanationRu:
        'ich → sie, mein → ihr; предшествование → «habe + Partizip II». Указание времени смещается: «gestern» → «am Vortag / am Tag zuvor».',
    },
    {
      type: 'transform',
      instructionRu: 'Передайте вопрос в косвенной речи.',
      prompt: '„Wann werden die Ergebnisse veröffentlicht?“, fragte der Journalist.',
      answers: [
        'Der Journalist fragte, wann die Ergebnisse veröffentlicht würden.',
        'Der Journalist fragte, wann die Ergebnisse veröffentlicht werden würden.',
      ],
      explanationRu:
        'Konjunktiv I «sie werden» совпадает с индикативом, поэтому нужен Konjunktiv II «würden». Вопросительное слово «wann» вводит придаточное, глагол стоит в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите слух с помощью модального глагола «sollen».',
      prompt: 'Man sagt, dass der Konzern Millionen an Steuern hinterzogen hat.',
      answers: ['Der Konzern soll Millionen an Steuern hinterzogen haben.'],
      explanationRu:
        '«Man sagt, dass …» → «sollen» + Infinitiv Perfekt. Говорящий передаёт чужое утверждение, не ручаясь за его правдивость.',
    },
    {
      type: 'transform',
      instructionRu: 'Восстановите прямую речь министра (только слова министра).',
      prompt: 'Die Ministerin erklärte, sie habe von den Plänen nichts gewusst und werde den Fall prüfen lassen.',
      answers: [
        'Ich habe von den Plänen nichts gewusst und werde den Fall prüfen lassen.',
        '„Ich habe von den Plänen nichts gewusst und werde den Fall prüfen lassen.“',
      ],
      explanationRu:
        'Обратное преобразование: sie → ich, Konjunktiv I → индикатив («habe … gewusst», «werde … prüfen lassen»). Формы 1-го лица «ich habe», «ich werde» совпадают по написанию с Konjunktiv I.',
    },
  ],

  reading: [
    {
      title: 'Wenn Menschen die Nachrichten meiden',
      textType: 'Sachtext (Lückentext)',
      texts: [
        {
          body: `Immer mehr Menschen wenden sich bewusst von den Nachrichten ab. [1] einer international angelegten Befragung meiden inzwischen fast vier von zehn Erwachsenen zumindest gelegentlich aktuelle Meldungen – ein Wert, der sich innerhalb weniger Jahre deutlich erhöht hat. Medienforscher sprechen von „Nachrichtenmüdigkeit“ und warnen, das Phänomen [2] langfristig die Grundlagen der demokratischen Meinungsbildung gefährden.

Die Gründe, die die Befragten selbst nennen, sind vielfältig. Viele geben an, die ständige Flut negativer Schlagzeilen drücke auf ihre Stimmung; andere klagen, sie fühlten sich angesichts der Fülle an Informationen schlicht [3]. Wieder andere bemängeln, die Berichterstattung sei zu einseitig oder zu reißerisch, und bezweifeln, dass ihnen die Lektüre überhaupt einen Nutzen bringe. Zudem zeigt sich, dass das Vertrauen in die Medien bei denjenigen, die Nachrichten meiden, deutlich geringer ausfällt als im Durchschnitt der Bevölkerung.

Auffällig ist, dass sich gerade jüngere Menschen und Personen mit niedrigerem Bildungsabschluss abwenden. Dies ist [4] bedenklich, als diese Gruppen ohnehin seltener an Wahlen teilnehmen und in politischen Debatten unterrepräsentiert sind. Wer sich nicht informiert, so die Befürchtung, [5] zudem leichter für Desinformation empfänglich, die sich in sozialen Netzwerken weitgehend ungehindert verbreitet.

Einige Redaktionen haben aus diesen Befunden bereits Konsequenzen gezogen. Statt ausschließlich über Krisen und Konflikte zu berichten, setzen sie verstärkt auf sogenannten konstruktiven Journalismus. [6] ist nicht gemeint, Probleme zu beschönigen oder nur noch positive Nachrichten zu verbreiten. Vielmehr sollen Beiträge neben der Beschreibung eines Missstands auch aufzeigen, welche Lösungsansätze es gibt und wo diese bereits erprobt werden. Ein Regionalsender in Norddeutschland etwa begleitet seit zwei Jahren Gemeinden, die mit leer stehenden Ladenlokalen kämpfen, und stellt dabei ausführlich dar, welche Ideen anderswo funktioniert haben – vom genossenschaftlich betriebenen Dorfladen bis zur Zwischennutzung durch Kunstschaffende. Die Redaktion berichtet von ungewöhnlich vielen Zuschriften, in denen Leserinnen und Leser schreiben, sie fühlten sich endlich nicht mehr nur ohnmächtig.

Kritiker [7] allerdings ein, dass die Grenze zwischen konstruktiver Berichterstattung und Aktivismus mitunter verschwimme. Journalisten hätten die Aufgabe, zu informieren und zu kontrollieren, nicht aber, ihr Publikum zu beruhigen. Die Befürworter halten dagegen, gerade die Kontrollfunktion der Medien laufe ins Leere, wenn das Publikum gar nicht mehr zuhöre.

Ob der neue Ansatz die Nachrichtenmüdigkeit tatsächlich lindern kann, ist noch offen. Erste Auswertungen deuten [8] hin, dass Leserinnen und Leser lösungsorientierte Artikel länger lesen und häufiger teilen. Für eine abschließende Bewertung ist es jedoch zu früh.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welches Wort passt in die Lücke? Wählen Sie die richtige Lösung.',
          instructionRu: 'Прочитайте текст. Какое слово подходит к пропуску? Выберите правильный вариант.',
          items: [
            {
              kind: 'mc',
              question: 'Lücke 1',
              options: ['Laut', 'Zufolge', 'Wegen', 'Seit'],
              answer: 0,
              explanationRu:
                '«laut» указывает на источник и стоит перед существительным. «zufolge» — постпозитивный предлог («einer Befragung zufolge»), поэтому в начале невозможен.',
            },
            {
              kind: 'mc',
              question: 'Lücke 2',
              options: ['kann', 'konnte', 'könne', 'könnten'],
              answer: 2,
              explanationRu:
                'После «warnen» передаётся чужое мнение без «dass» → Konjunktiv I «könne» (подлежащее «das Phänomen» — ед. ч.).',
            },
            {
              kind: 'mc',
              question: 'Lücke 3',
              options: ['überfordernd', 'überfordert', 'überforderten', 'überfordern'],
              answer: 1,
              explanationRu:
                '«sich überfordert fühlen» — чувствовать себя перегруженным. После «sich fühlen» стоит предикативное Partizip II без окончания.',
            },
            {
              kind: 'mc',
              question: 'Lücke 4',
              options: ['sofern', 'insofern', 'sodass', 'soweit'],
              answer: 1,
              explanationRu: 'Коррелятная пара «insofern … als» — «в том смысле, что / постольку, поскольку».',
            },
            {
              kind: 'mc',
              question: 'Lücke 5',
              options: ['ist', 'werde', 'sei', 'würden'],
              answer: 2,
              explanationRu:
                'Вставка «so die Befürchtung» показывает, что передаётся чужое опасение → Konjunktiv I «sei». «werde» потребовал бы инфинитива, «würden» не согласуется с ед. ч.',
            },
            {
              kind: 'mc',
              question: 'Lücke 6',
              options: ['Dafür', 'Davon', 'Damit', 'Darum'],
              answer: 2,
              explanationRu: 'Устойчивое выражение «Damit ist gemeint, …» — «Под этим подразумевается …».',
            },
            {
              kind: 'mc',
              question: 'Lücke 7',
              options: ['wenden', 'führen', 'stellen', 'legen'],
              answer: 0,
              explanationRu:
                '«einwenden» — возражать: «Kritiker wenden ein, dass …». Это один из типичных вводящих глаголов для передачи чужой позиции.',
            },
            {
              kind: 'mc',
              question: 'Lücke 8',
              options: ['daran', 'darauf', 'darüber', 'dafür'],
              answer: 1,
              explanationRu: '«auf etwas hindeuten» → коррелят «darauf», который отсылает к придаточному с «dass».',
            },
          ],
        },
      ],
    },
    {
      title: 'Die Macht der Anführungszeichen',
      textType: 'Kommentar',
      texts: [
        {
          body: `Kaum ein journalistisches Werkzeug wirkt so unschuldig wie das Zitat. Wer jemanden wörtlich wiedergibt, scheint sich jeder Wertung zu enthalten: Man lässt die Person ja selbst sprechen. Doch dieser Eindruck täuscht. Wer zitiert, wählt aus – und jede Auswahl ist bereits eine Deutung.

Ein Beispiel aus der jüngeren Vergangenheit mag das verdeutlichen. In einem gut einstündigen Interview hatte eine Landespolitikerin ausführlich dargelegt, unter welchen Bedingungen sie eine umstrittene Steuerreform mittragen würde. Am folgenden Morgen titelten mehrere Onlineportale mit einem einzigen Halbsatz: Sie „schließe nichts aus“. Formal war das korrekt, denn genau diese Worte waren gefallen. Inhaltlich jedoch erweckte die Schlagzeile den Eindruck einer Kehrtwende, die es so nie gegeben hatte. Die anschließende Empörung war beträchtlich, die spätere Richtigstellung fand kaum Beachtung.

Man könnte solche Fälle als bedauerliche Ausrutscher abtun. Das hieße allerdings, die Mechanismen zu verkennen, die dahinterstehen. In einer Medienlandschaft, in der die Reichweite über die Werbeeinnahmen entscheidet, ist die Versuchung groß, Aussagen so zuzuspitzen, dass sie zum Klicken verleiten. Algorithmen, die besonders emotionalisierende Inhalte bevorzugt verbreiten, verstärken diesen Effekt zusätzlich. Das Problem ist also kein individuelles, sondern ein strukturelles.

Gleichwohl wäre es zu bequem, die Verantwortung allein bei den Plattformen abzuladen. Redaktionen haben es in der Hand, Standards zu setzen und durchzusetzen. Dazu gehört etwa, Zitate nur in einem Kontext zu verwenden, der ihrem ursprünglichen Sinn entspricht, und kenntlich zu machen, wenn eine Aussage verkürzt wurde. Dazu gehört auch, zwischen dem zu unterscheiden, was jemand gesagt hat, und dem, was man herausgehört zu haben glaubt. Die indirekte Rede mit ihrem oft als altmodisch belächelten Konjunktiv ist hier übrigens ein erstaunlich präzises Instrument: Sie macht sprachlich sichtbar, dass eine Aussage wiedergegeben und nicht als Tatsache behauptet wird.

Nicht zuletzt sind auch die Leserinnen und Leser gefragt. Wer auf eine empörende Äußerung stößt, sollte sich die Mühe machen, den Zusammenhang zu prüfen, bevor er sie weiterverbreitet. Das klingt nach einer Binsenweisheit, wird im Alltag aber kaum beherzigt. Untersuchungen legen nahe, dass ein erheblicher Teil der in sozialen Netzwerken geteilten Artikel zuvor gar nicht geöffnet wurde.

Zitate werden auch künftig unverzichtbar bleiben; sie verleihen Texten Authentizität und Lebendigkeit. Gerade deshalb aber verdienen sie mehr Sorgfalt, als ihnen gegenwärtig zuteilwird.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Kommentar. Welche Antwort entspricht der Position des Autors?',
          instructionRu: 'Прочитайте комментарий. Какой ответ соответствует позиции автора?',
          items: [
            {
              kind: 'mc',
              question: 'Welche These vertritt der Autor im ersten Absatz?',
              options: [
                'Zitate sind das neutralste Mittel journalistischer Darstellung.',
                'Auch das Zitieren ist bereits eine Form der Interpretation.',
                'Journalisten sollten möglichst ganz auf Zitate verzichten.',
              ],
              answer: 1,
              explanationRu: '«Wer zitiert, wählt aus – und jede Auswahl ist bereits eine Deutung.» Нейтральность цитаты — лишь видимость.',
            },
            {
              kind: 'mc',
              question: 'Wozu dient das Beispiel der Landespolitikerin?',
              options: [
                'Es soll belegen, dass die Politikerin ihre Haltung tatsächlich geändert hat.',
                'Es soll zeigen, dass Richtigstellungen meist große Wirkung entfalten.',
                'Es soll zeigen, dass auch ein wörtlich korrektes Zitat in die Irre führen kann.',
              ],
              answer: 2,
              explanationRu:
                '«Formal war das korrekt … Inhaltlich jedoch erweckte die Schlagzeile den Eindruck einer Kehrtwende, die es so nie gegeben hatte.» Опровержение почти не заметили.',
            },
            {
              kind: 'mc',
              question: 'Wie erklärt der Autor das Zustandekommen solcher Fälle?',
              options: [
                'vor allem durch wirtschaftliche und technische Rahmenbedingungen',
                'vor allem durch das Fehlverhalten einzelner Journalisten',
                'vor allem durch die mangelnde Medienkompetenz von Politikern',
              ],
              answer: 0,
              explanationRu:
                'Охват определяет доходы от рекламы, алгоритмы продвигают эмоциональный контент: «Das Problem ist also kein individuelles, sondern ein strukturelles.»',
            },
            {
              kind: 'mc',
              question: 'Welche Rolle schreibt der Autor den Redaktionen zu?',
              options: [
                'Sie sind den Plattformen gegenüber im Grunde machtlos.',
                'Sie können und sollten selbst verbindliche Standards festlegen.',
                'Sie tragen die alleinige Verantwortung für verzerrte Zitate.',
              ],
              answer: 1,
              explanationRu:
                '«Gleichwohl wäre es zu bequem, die Verantwortung allein bei den Plattformen abzuladen. Redaktionen haben es in der Hand, Standards zu setzen».',
            },
            {
              kind: 'mc',
              question: 'Wie bewertet der Autor die indirekte Rede?',
              options: [
                'als veraltetes Stilmittel, das Leser eher verwirrt',
                'als präzises Mittel, um Wiedergabe und Tatsachenbehauptung zu trennen',
                'als Möglichkeit, eigene Meinungen unauffällig einzuflechten',
              ],
              answer: 1,
              explanationRu:
                'Косвенная речь — «ein erstaunlich präzises Instrument»: она показывает, что высказывание передаётся, а не утверждается как факт.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert der Autor am Verhalten des Publikums?',
              options: [
                'Viele teilen Artikel, ohne sie vorher gelesen zu haben.',
                'Viele lesen ausschließlich Zeitungen mit Bezahlschranke.',
                'Viele beschweren sich zu selten bei den Redaktionen.',
              ],
              answer: 0,
              explanationRu: 'Значительную часть статей в соцсетях репостят, «zuvor gar nicht geöffnet» — даже не открыв.',
            },
          ],
        },
      ],
    },
  ],

  listening: [
    {
      title: 'Kurznachrichten aus der Medienwelt',
      kind: 'monolog',
      situation: 'Sie hören fünf kurze Meldungen aus einer Nachrichtensendung im Radio.',
      text: `Und nun die Nachrichten.

Berlin. Die Bundesregierung will die Förderung des Lokaljournalismus ausbauen. Wie die Kulturstaatsministerin am Vormittag mitteilte, sollen kleine Regionalzeitungen ab dem kommenden Jahr Zuschüsse für die Zustellung erhalten. Die Ministerin betonte, eine vielfältige Presselandschaft sei für die Demokratie unverzichtbar. Der Verlegerverband begrüßte den Schritt grundsätzlich, nannte die geplante Summe jedoch völlig unzureichend.

Hamburg. Ein großes Nachrichtenportal hat einen Bericht über angebliche Mängel bei einem Bauprojekt zurückgezogen. Die Chefredaktion räumte ein, man habe sich auf eine einzige Quelle gestützt und deren Angaben nicht ausreichend überprüft. Man bedauere den Fehler und werde die internen Abläufe überarbeiten. Das betroffene Bauunternehmen kündigte dennoch rechtliche Schritte an.

Brüssel. Die Europäische Kommission hat mehrere Online-Plattformen aufgefordert, entschiedener gegen gezielte Desinformation vorzugehen. Einem Bericht der Kommission zufolge wurden in den vergangenen sechs Monaten Tausende gefälschte Konten entdeckt, die koordiniert Falschmeldungen verbreitet haben sollen. Die Unternehmen haben nun vier Wochen Zeit, um Stellung zu nehmen.

München. Ein bekannter Fernsehmoderator will von umstrittenen Werbeverträgen seines Senders nichts gewusst haben. In einer schriftlichen Erklärung hieß es, er sei über die Vereinbarungen zu keinem Zeitpunkt informiert worden. Der Sender selbst wollte sich zu den Vorwürfen zunächst nicht äußern und verwies auf eine laufende interne Prüfung.

Wien. Ein Wiener Presseclub hat seinen diesjährigen Preis für Medienkritik an ein Rechercheteam vergeben, das monatelang die Finanzierung anonymer Nachrichtenseiten untersucht hatte. Die Jury erklärte, die Arbeit zeige beispielhaft, wie Desinformation gezielt finanziert werde. Die ausgezeichneten Journalistinnen kündigten an, das Preisgeld für die Fortsetzung ihrer Recherchen zu verwenden.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Meldungen zweimal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слушаете сообщения дважды. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Der Verlegerverband ist mit der geplanten Förderung uneingeschränkt zufrieden.',
              answer: false,
              explanationRu: 'Союз издателей приветствовал шаг, но назвал сумму «völlig unzureichend».',
            },
            {
              kind: 'tf',
              statement: 'Das Nachrichtenportal gibt zu, nicht gründlich genug recherchiert zu haben.',
              answer: true,
              explanationRu: '«Die Chefredaktion räumte ein, man habe sich auf eine einzige Quelle gestützt und deren Angaben nicht ausreichend überprüft.»',
            },
            {
              kind: 'tf',
              statement: 'Die Plattformen müssen innerhalb eines Monats auf die Aufforderung reagieren.',
              answer: true,
              explanationRu: '«Die Unternehmen haben nun vier Wochen Zeit, um Stellung zu nehmen.»',
            },
            {
              kind: 'tf',
              statement: 'Der Sender hat die Vorwürfe gegen den Moderator bereits zurückgewiesen.',
              answer: false,
              explanationRu: 'Телеканал «wollte sich … zunächst nicht äußern» и сослался на внутреннюю проверку.',
            },
            {
              kind: 'tf',
              statement: 'Das ausgezeichnete Team möchte mit dem Preisgeld seine Recherchen fortsetzen.',
              answer: true,
              explanationRu: 'Журналистки «kündigten an, das Preisgeld für die Fortsetzung ihrer Recherchen zu verwenden».',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie für jede Meldung die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ к каждому сообщению.',
          items: [
            {
              kind: 'mc',
              question: 'Wofür sollen kleine Regionalzeitungen Geld erhalten?',
              options: ['für zusätzliche Redaktionsstellen', 'für die Zustellung ihrer Zeitungen', 'für den Ausbau ihrer Online-Angebote'],
              answer: 1,
              explanationRu: '«sollen kleine Regionalzeitungen … Zuschüsse für die Zustellung erhalten».',
            },
            {
              kind: 'mc',
              question: 'Wie reagiert das Bauunternehmen auf die Entschuldigung des Portals?',
              options: [
                'Es nimmt die Entschuldigung an.',
                'Es veröffentlicht einen eigenen Bericht.',
                'Es will trotzdem juristisch vorgehen.',
              ],
              answer: 2,
              explanationRu: '«Das betroffene Bauunternehmen kündigte dennoch rechtliche Schritte an.»',
            },
            {
              kind: 'mc',
              question: 'Was wird den gefälschten Konten vorgeworfen?',
              options: [
                'Sie sollen abgestimmt Falschmeldungen verbreitet haben.',
                'Sie sollen Daten der Kommission gestohlen haben.',
                'Sie sollen illegale Werbung geschaltet haben.',
              ],
              answer: 0,
              explanationRu: 'Аккаунты, «die koordiniert Falschmeldungen verbreitet haben sollen» — «sollen» передаёт обвинение, а не установленный факт.',
            },
            {
              kind: 'mc',
              question: 'Was behauptet der Fernsehmoderator?',
              options: [
                'Er habe die Verträge selbst ausgehandelt.',
                'Er sei über die Verträge nie informiert worden.',
                'Er werde den Sender in Kürze verlassen.',
              ],
              answer: 1,
              explanationRu: '«will … nichts gewusst haben»; в заявлении: «er sei über die Vereinbarungen zu keinem Zeitpunkt informiert worden».',
            },
            {
              kind: 'mc',
              question: 'Wofür wurde das Rechercheteam ausgezeichnet?',
              options: [
                'für eine Fernsehdokumentation über die Geschichte der Presseclubs',
                'für eine Untersuchung zur Finanzierung anonymer Nachrichtenseiten',
                'für ein Lehrbuch über den Umgang mit Desinformation',
              ],
              answer: 1,
              explanationRu: 'Команда несколько месяцев исследовала, кто финансирует анонимные новостные сайты; жюри: работа показывает, «wie Desinformation gezielt finanziert werde».',
            },
          ],
        },
      ],
    },
    {
      title: 'Diskussion: Kommentarspalten schließen?',
      kind: 'discussion',
      speakers: {
        A: 'Moderator',
        B: 'Katja Rehm, Chefredakteurin einer Regionalzeitung',
        C: 'Prof. Daniel Oswald, Medienwissenschaftler',
        D: 'Ben Yilmaz, Initiative für digitale Debattenkultur',
      },
      situation: 'Sie hören eine Diskussion in der Radiosendung „Medien im Gespräch“.',
      text: `A: Guten Abend und willkommen zu „Medien im Gespräch“. Immer mehr Nachrichtenseiten schließen ihre Kommentarbereiche – zumindest bei heiklen Themen. Man könnte das als Akt der Vernunft sehen, aber auch als Kapitulation vor den Pöblern. Darüber diskutiere ich heute mit Katja Rehm, Chefredakteurin einer Regionalzeitung, mit dem Medienwissenschaftler Professor Daniel Oswald und mit Ben Yilmaz, der eine Initiative für digitale Debattenkultur gegründet hat. Frau Rehm, Ihre Zeitung hat die Kommentarfunktion vor zwei Jahren komplett abgeschaltet. Warum?
B: Ganz einfach: Wir konnten sie nicht mehr verantworten. Wir hatten zuletzt mehrere Tausend Kommentare am Tag, und ein erheblicher Teil davon war beleidigend oder schlicht falsch. Um das ordentlich zu moderieren, hätten wir drei zusätzliche Stellen gebraucht. Das Geld stecke ich lieber in Recherche.
C: Das kann ich wirtschaftlich nachvollziehen. Trotzdem halte ich die Entscheidung für problematisch. Die Diskussion findet ja nicht mehr unter dem Artikel statt, sondern in den sozialen Netzwerken – und dort hat die Redaktion überhaupt keinen Einfluss mehr darauf, was über ihre Texte behauptet wird.
B: Den hatten wir in unserem eigenen Forum aber auch nur begrenzt, Herr Oswald.
C: Das stimmt. Aber es gibt Untersuchungen, die zeigen, dass sich der Ton spürbar verbessert, sobald sich Journalistinnen und Journalisten selbst an der Diskussion beteiligen. Wer merkt, dass jemand mitliest und antwortet, formuliert offenbar vorsichtiger.
A: Herr Yilmaz, Sie sammeln mit Ihrer Initiative Erfahrungen mit solchen Modellen. Was funktioniert?
D: Am besten funktionieren Formate, die die Debatte bündeln. Einige Redaktionen öffnen die Kommentare nur unter ausgewählten Artikeln und nur für einen begrenzten Zeitraum, zum Beispiel für vierundzwanzig Stunden. Das reduziert den Aufwand enorm. Außerdem stellen sie eine konkrete Frage, statt einfach zu fragen, was die Leute denken. Die Antworten werden dadurch deutlich sachlicher.
A: Frau Rehm, wäre das eine Option für Sie?
B: Darüber denken wir tatsächlich nach. Ich muss aber auch sagen: Viele unserer Leserinnen und Leser haben die Kommentare gar nicht vermisst. Die Zahl der Zuschriften per E-Mail ist sogar gestiegen, und die sind in aller Regel ausgesprochen konstruktiv.
D: Das glaube ich gern. Aber eine E-Mail ist eben ein Gespräch zwischen zwei Parteien. Was verloren geht, ist der Austausch der Leser untereinander. Gerade in einer Region, in der es immer weniger Orte gibt, an denen Menschen mit unterschiedlichen Ansichten aufeinandertreffen, finde ich das schade.
C: Da möchte ich Herrn Yilmaz ausdrücklich zustimmen. Lokalzeitungen haben als Forum für die Gemeinschaft eine besondere Verantwortung.
A: Herr Oswald, sollte der Gesetzgeber hier eingreifen, etwa mit einer Pflicht, unter dem echten Namen zu kommentieren?
C: Davon halte ich wenig. Studien zeigen, dass viele Menschen auch unter vollem Namen beleidigen. Und es gibt gute Gründe für Pseudonyme, etwa für Menschen, die sich zu ihrer Krankheit oder zu ihrer sexuellen Orientierung äußern.
A: Das war eine lebhafte Runde. Ich danke Ihnen allen.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was?',
          instructionRu: 'Вы слушаете дискуссию один раз. Кто что говорит?',
          options: ['Moderator', 'Katja Rehm', 'Prof. Daniel Oswald', 'Ben Yilmaz'],
          items: [
            {
              kind: 'match',
              prompt: 'Die Schließung von Kommentarbereichen lässt sich auch als Aufgeben vor Störern deuten.',
              answer: 0,
              explanationRu: 'Модератор во вступлении: это можно расценить и как «Kapitulation vor den Pöblern».',
            },
            {
              kind: 'match',
              prompt: 'Eine angemessene Betreuung der Kommentare hätte zusätzliches Personal erfordert.',
              answer: 1,
              explanationRu: 'Рем: «hätten wir drei zusätzliche Stellen gebraucht».',
            },
            {
              kind: 'match',
              prompt: 'Ohne Kommentarbereich verlagert sich die Debatte an Orte ohne redaktionellen Einfluss.',
              answer: 2,
              explanationRu: 'Освальд: дискуссия переходит в соцсети, где у редакции «überhaupt keinen Einfluss» нет.',
            },
            {
              kind: 'match',
              prompt: 'Wenn sich Redakteure an Diskussionen beteiligen, wird der Umgangston besser.',
              answer: 2,
              explanationRu: 'Освальд ссылается на исследования: тон улучшается, когда журналисты сами участвуют в обсуждении.',
            },
            {
              kind: 'match',
              prompt: 'Zeitlich begrenzte Diskussionen zu einer konkreten Frage führen zu sachlicheren Beiträgen.',
              answer: 3,
              explanationRu: 'Йылмаз: комментарии на 24 часа и конкретный вопрос делают ответы «deutlich sachlicher».',
            },
            {
              kind: 'match',
              prompt: 'Seit der Abschaffung schreiben Leser häufiger direkt an die Redaktion.',
              answer: 1,
              explanationRu: 'Рем: «Die Zahl der Zuschriften per E-Mail ist sogar gestiegen».',
            },
            {
              kind: 'match',
              prompt: 'Verloren geht vor allem der Austausch der Leser untereinander.',
              answer: 3,
              explanationRu: 'Йылмаз: письмо — разговор двух сторон, «Was verloren geht, ist der Austausch der Leser untereinander».',
            },
            {
              kind: 'match',
              prompt: 'Eine Pflicht zur Verwendung des echten Namens hält diese Person nicht für sinnvoll.',
              answer: 2,
              explanationRu: 'Освальд: «Davon halte ich wenig» — люди оскорбляют и под настоящим именем, а псевдонимы иногда необходимы.',
            },
          ],
        },
      ],
    },
  ],
};
