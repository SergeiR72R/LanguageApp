import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    // ---------- choice ----------
    {
      type: 'choice',
      prompt: 'Die ___ Proben wurden sofort nach der Ankunft tiefgekühlt.',
      options: [
        'aus dem Polarmeer gestammten',
        'stammenden aus dem Polarmeer',
        'aus dem Polarmeer stammenden',
        'aus dem Polarmeer stammende',
      ],
      answer: 2,
      explanationRu:
        '«stammen» — непереходный глагол с haben, поэтому как определение возможно только Partizip I: «stammend». Зависимые слова стоят перед причастием; после «die» во мн. ч. окончание -en.',
    },
    {
      type: 'choice',
      prompt: 'Ein ___ Gutachten liegt der Kommission seit gestern vor.',
      options: [
        'von unabhängigen Experten verfasste',
        'von unabhängigen Experten verfasstes',
        'von unabhängigen Experten verfassten',
        'unabhängigen Experten verfassendes',
      ],
      answer: 1,
      explanationRu:
        'После неопределённого артикля «ein» в им. п. среднего рода прилагательное (и причастие) получает сильное окончание -es: «ein … verfasstes Gutachten». Агент вводится через «von».',
    },
    {
      type: 'choice',
      prompt: '___ stellt die Universitäten vor völlig neue Herausforderungen.',
      options: [
        'Die sich ständig verändernde Forschungslandschaft',
        'Die sich ständig veränderte Forschungslandschaft',
        'Die sich ständig verändernden Forschungslandschaft',
        'Die ständig verändernde sich Forschungslandschaft',
      ],
      answer: 0,
      explanationRu:
        'Возвратный глагол «sich verändern» в функции определения используется в Partizip I, а «sich» стоит в начале оборота. Partizip II с «sich» как определение невозможен. Им. п. ед. ч. после «die» → -e.',
    },
    {
      type: 'choice',
      prompt: 'Welche Nominalphrase entspricht dem Satz: „Nachdem die Daten erhoben worden waren, begann die Auswertung.“?',
      options: [
        'Nach der Erhebung von den Daten begann die Auswertung.',
        'Seit der Erhebung der Daten begann die Auswertung.',
        'Nach Erhebung der Daten begann die Auswertung.',
        'Vor der Erhebung der Daten begann die Auswertung.',
      ],
      answer: 2,
      explanationRu:
        '«nachdem» → предлог «nach» + Dat. Объект действия переходит в генитив: «der Daten». «von den Daten» неверно, так как при наличии артикля нужен генитив. «seit» и «vor» меняют смысл.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz entspricht inhaltlich: „Bei sorgfältiger Prüfung der Quellen hätte man den Fehler bemerkt.“?',
      options: [
        'Obwohl man die Quellen sorgfältig geprüft hatte, bemerkte man den Fehler.',
        'Während man die Quellen sorgfältig prüfte, bemerkte man den Fehler.',
        'Weil man die Quellen sorgfältig geprüft hat, hat man den Fehler bemerkt.',
        'Wenn man die Quellen sorgfältig geprüft hätte, hätte man den Fehler bemerkt.',
      ],
      answer: 3,
      explanationRu:
        'Предлог «bei» в сочетании с Konjunktiv II в главном предложении выражает условие: «bei + Nomen» = «wenn …». Поскольку условие нереальное и относится к прошлому, нужен «geprüft hätte».',
    },
    {
      type: 'choice',
      prompt: 'Die ___ Fördermittel reichen bei Weitem nicht aus.',
      options: ['dem Institut zugesagten', 'das Institut zugesagten', 'dem Institut zusagenden', 'des Instituts zugesagte'],
      answer: 0,
      explanationRu:
        'Ловушка: «jdm. etw. zusagen» — косвенное дополнение в дательном падеже сохраняется и внутри причастного оборота: «die dem Institut zugesagten Mittel» (средства, обещанные институту). Пассив → Partizip II.',
    },
    // ---------- gap ----------
    {
      type: 'gap',
      prompt: 'Die Zahl der an der Umfrage ___ (teilnehmen) Personen war deutlich geringer als erwartet.',
      answers: ['teilnehmenden'],
      hintRu: 'Partizip I + окончание (генитив мн. ч.)',
      explanationRu:
        '«teilnehmen» спрягается с haben и не имеет прямого дополнения → только Partizip I. Генитив мн. ч. после «der» → окончание -en: «der … teilnehmenden Personen».',
    },
    {
      type: 'gap',
      prompt: 'Die durch die Hitze ___ (entstehen) Schäden an den Messgeräten müssen umgehend behoben werden.',
      answers: ['entstandenen'],
      hintRu: 'глагол с sein → Partizip II',
      explanationRu:
        '«entstehen» образует перфект с sein (ist entstanden), поэтому Partizip II выражает завершённое активное действие: повреждения, которые возникли. Мн. ч. после «die» → -en.',
    },
    {
      type: 'gap',
      prompt: 'Es handelt sich um eine bislang kaum ___ (erforschen) Erkrankung des Nervensystems.',
      answers: ['erforschte'],
      hintRu: 'Partizip II + окончание после «eine»',
      explanationRu:
        'Заболевание мало исследовано (пассив) → Partizip II «erforscht». После «eine» в вин. п. женского рода → окончание -e.',
    },
    {
      type: 'gap',
      prompt: 'Ein vollständiger Verzicht ___ Tierversuche ist in der Pharmaforschung bislang nicht möglich.',
      answers: ['auf'],
      explanationRu:
        'Существительное сохраняет управление глагола: «auf etwas verzichten» → «der Verzicht auf + Akk.». Именной стиль требует знать управление существительных.',
    },
    {
      type: 'gap',
      prompt: '___ Überprüfung der Ergebnisse wurde ein zweites, unabhängiges Labor beauftragt.',
      answers: ['Zur', 'Zwecks'],
      hintRu: 'именной эквивалент «um … zu»',
      explanationRu:
        'Цель «um die Ergebnisse zu überprüfen» в именном стиле передаётся через «zu + Dat.» (zur Überprüfung) или канцелярское «zwecks + Gen.» (обычно без артикля).',
    },
    {
      type: 'gap',
      prompt: '___ der äußerst dünnen Datenlage wagte das Team eine langfristige Prognose.',
      answers: ['Trotz', 'Ungeachtet'],
      hintRu: 'именной эквивалент «obwohl»',
      explanationRu:
        'Уступительное придаточное «obwohl die Datenlage dünn war» в именном стиле передаётся предлогом «trotz» (или книжным «ungeachtet») + Gen.',
    },
    {
      type: 'gap',
      prompt: 'Der im Vorjahr beschriebene Effekt ___ sich in keinem weiteren Experiment reproduzieren.',
      answers: ['ließ', 'lässt'],
      hintRu: 'заменитель пассива с возможностью (повторение B2)',
      explanationRu:
        'Повторение: «sich lassen + Infinitiv» = пассив с модальным значением возможности («не удалось воспроизвести» / «не удаётся воспроизвести»).',
    },
    // ---------- order ----------
    {
      type: 'order',
      words: ['Die', 'bereits im Frühjahr von der Kommission', 'angekündigte', 'Reform', 'lässt', 'auf sich warten.'],
      translationRu: 'Реформа, объявленная комиссией ещё весной, заставляет себя ждать.',
      explanationRu:
        'Рамка «артикль … существительное»: внутри стоят обстоятельство и агент, причастие «angekündigte» замыкает определение непосредственно перед существительным.',
    },
    {
      type: 'order',
      words: ['Die Ergebnisse', 'der', 'an drei Universitäten', 'durchgeführten', 'Langzeitstudie', 'überraschten', 'die Fachwelt.'],
      translationRu: 'Результаты долгосрочного исследования, проведённого в трёх университетах, удивили научное сообщество.',
      explanationRu:
        'Причастное определение находится внутри генитивного дополнения: «der … durchgeführten Langzeitstudie» (род. п. ед. ч. ж. р. → -en). Затем сказуемое и прямое дополнение.',
    },
    {
      type: 'order',
      words: ['Zur Überprüfung', 'der aufgestellten', 'Hypothese', 'wurde', 'ein zweites Experiment', 'durchgeführt.'],
      translationRu: 'Для проверки выдвинутой гипотезы был проведён второй эксперимент.',
      explanationRu:
        'Именная группа цели «Zur Überprüfung der … Hypothese» занимает первую позицию, за ней — спрягаемый глагол «wurde», подлежащее и причастие в конце (пассив).',
    },
    // ---------- transform ----------
    {
      type: 'transform',
      instructionRu: 'Замените относительное придаточное расширенным причастным определением.',
      prompt: 'Die Forscher untersuchten die Gletscher, die in den letzten Jahrzehnten stark geschrumpft sind.',
      answers: ['Die Forscher untersuchten die in den letzten Jahrzehnten stark geschrumpften Gletscher.'],
      explanationRu:
        '«schrumpfen» образует перфект с sein → Partizip II выражает завершённое активное действие. Вин. п. мн. ч. после «die» → -en. Все обстоятельства стоят перед причастием.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное причины именной группой (именной стиль).',
      prompt: 'Weil die Fördermittel gekürzt wurden, musste das Projekt eingestellt werden.',
      answers: [
        'Wegen der Kürzung der Fördermittel musste das Projekt eingestellt werden.',
        'Aufgrund der Kürzung der Fördermittel musste das Projekt eingestellt werden.',
        'Infolge der Kürzung der Fördermittel musste das Projekt eingestellt werden.',
      ],
      explanationRu:
        '«weil» → «wegen / aufgrund / infolge» + Gen. Глагол «kürzen» → «die Kürzung», а объект «die Fördermittel» переходит в генитив: «der Fördermittel».',
    },
    {
      type: 'transform',
      instructionRu: 'Переведите именной стиль в глагольный: замените группу с «durch» придаточным с «indem».',
      prompt: 'Durch die Analyse großer Datenmengen konnten die Forschenden neue Muster erkennen.',
      answers: [
        'Indem die Forschenden große Datenmengen analysierten, konnten sie neue Muster erkennen.',
        'Indem sie große Datenmengen analysierten, konnten die Forschenden neue Muster erkennen.',
        'Die Forschenden konnten neue Muster erkennen, indem sie große Datenmengen analysierten.',
        'Dadurch, dass die Forschenden große Datenmengen analysierten, konnten sie neue Muster erkennen.',
      ],
      explanationRu:
        '«durch + Nomen» (способ) ↔ «indem / dadurch, dass». Генитивное дополнение «großer Datenmengen» становится прямым дополнением в аккузативе: «große Datenmengen analysieren».',
    },
    {
      type: 'transform',
      instructionRu: 'Замените причастное определение относительным придаточным в пассиве.',
      prompt: 'Die Kommission legte einen von zahlreichen Fachleuten scharf kritisierten Bericht vor.',
      answers: [
        'Die Kommission legte einen Bericht vor, der von zahlreichen Fachleuten scharf kritisiert wurde.',
        'Die Kommission legte einen Bericht vor, der von zahlreichen Fachleuten scharf kritisiert worden ist.',
        'Die Kommission legte einen Bericht vor, der von zahlreichen Fachleuten scharf kritisiert worden war.',
        'Die Kommission legte einen Bericht vor, der von zahlreichen Fachleuten scharf kritisiert wird.',
      ],
      explanationRu:
        'Partizip II переходного глагола = пассив: «der kritisiert wurde». Отделяемая приставка «vor» остаётся в рамке главного предложения, а придаточное выносится за неё (Nachfeld).',
    },
  ],

  reading: [
    {
      title: 'Vorabveröffentlichungen: Fluch oder Segen?',
      textType: 'Sachtext (Lückentext)',
      texts: [
        {
          body: `Noch vor zwanzig Jahren war der Weg einer Forschungsarbeit in die Öffentlichkeit klar geregelt: Ein Manuskript wurde bei einer Fachzeitschrift eingereicht, von unabhängigen Gutachterinnen und Gutachtern geprüft und – oft nach mehreren Überarbeitungsrunden – schließlich veröffentlicht. [1] Inzwischen hat sich jedoch ein Verfahren etabliert, das diese Logik auf den Kopf stellt: die Veröffentlichung sogenannter Preprints, also noch nicht begutachteter Fassungen wissenschaftlicher Aufsätze, auf frei zugänglichen Servern.

Die Vorteile liegen auf der Hand. Neue Erkenntnisse stehen der Fachwelt sofort zur Verfügung, statt monatelang in Begutachtungsverfahren festzustecken. [2] Gerade während der Corona-Pandemie, als Forschende weltweit unter enormem Zeitdruck an Impfstoffen und Therapien arbeiteten, erwies sich dieser Zeitgewinn als unschätzbar. Hinzu kommt, dass Preprints kostenlos abrufbar sind – ein nicht zu unterschätzender Vorteil für Wissenschaftlerinnen und Wissenschaftler an finanziell schlecht ausgestatteten Hochschulen.

Doch die Schnelligkeit hat ihren Preis. [3] Mehrfach wurden während der Pandemie Studien mit methodisch fragwürdigen Ergebnissen von Medien aufgegriffen und als gesicherte Erkenntnisse dargestellt. Die später von Fachleuten geäußerte Kritik erreichte die Öffentlichkeit dagegen kaum. [4]

Befürworter halten dem entgegen, dass auch das klassische Begutachtungsverfahren keineswegs fehlerfrei sei. Gutachtende seien in der Regel unbezahlt und neben ihren eigentlichen Aufgaben tätig; Fälschungen oder Rechenfehler würden daher immer wieder übersehen. [5] Manche Plattformen gehen inzwischen noch einen Schritt weiter und ermöglichen eine offene Kommentierung, sodass Schwachstellen einer Arbeit öffentlich diskutiert werden können.

Was folgt daraus? Ein Zurück zur alten Ordnung scheint weder möglich noch wünschenswert. Entscheidend wird vielmehr sein, die Kompetenz im Umgang mit vorläufigen Befunden zu stärken – bei Journalistinnen und Journalisten ebenso wie beim Publikum. [6] Nur so lässt sich verhindern, dass der Gewinn an Geschwindigkeit mit einem Verlust an Glaubwürdigkeit erkauft wird.`,
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze bleiben übrig.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Dieses Verfahren galt lange Zeit als Garant für die Qualität wissenschaftlicher Veröffentlichungen.',
            'Andere Teams können sie aufgreifen, überprüfen und weiterentwickeln, noch bevor die Originalarbeit offiziell erschienen ist.',
            'Da keine Qualitätskontrolle vorgeschaltet ist, gelangen auch fehlerhafte oder sogar unseriöse Arbeiten in Umlauf.',
            'So blieb in vielen Köpfen hängen, was sich längst als unhaltbar erwiesen hatte.',
            'Ein Preprint sei insofern nicht weniger zuverlässig, sondern lediglich ehrlicher, was seinen vorläufigen Charakter betreffe.',
            'Wer über eine Vorabveröffentlichung berichtet, sollte deutlich kennzeichnen, dass die Ergebnisse noch nicht unabhängig geprüft wurden.',
            'Aus diesem Grund haben die meisten Fachzeitschriften die Veröffentlichung von Preprints inzwischen untersagt.',
            'Die Begutachtung dauert daher heute meist nur noch wenige Tage.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 0,
              explanationRu:
                '«Dieses Verfahren» отсылает к описанной процедуре рецензирования; следующее предложение («Inzwischen … jedoch») противопоставляет ей новый подход.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 1,
              explanationRu:
                '«sie» = «neue Erkenntnisse» из предыдущего предложения; речь идёт о преимуществе: другие команды могут сразу использовать результаты.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 2,
              explanationRu:
                'После «Doch die Schnelligkeit hat ihren Preis» называется проблема — отсутствие контроля качества; далее следуют примеры сомнительных исследований.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 3,
              explanationRu:
                'Критика специалистов не дошла до публики — следовательно, у людей в памяти осталось то, что уже было опровергнуто («So blieb … hängen»).',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 4,
              explanationRu:
                'Продолжается позиция сторонников в косвенной речи (Konjunktiv I «sei»): раз классическое рецензирование тоже не безупречно, препринт не менее надёжен.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 5,
              explanationRu:
                'Предложение конкретизирует «Kompetenz im Umgang mit vorläufigen Befunden» у журналистов: нужно явно помечать непроверенные результаты.',
            },
          ],
        },
      ],
    },
    {
      title: 'Citizen Science: Wenn Laien forschen',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Wer an einem frühen Sonntagmorgen durch den Leipziger Stadtpark spaziert, begegnet mitunter Menschen, die mit Fernglas und Notizbuch reglos unter Bäumen stehen. Es handelt sich nicht um Sonderlinge, sondern um Freiwillige eines Projekts, das den Bestand heimischer Singvögel erfasst. Ihre Beobachtungen fließen in eine bundesweite Datenbank ein, auf die Ornithologinnen und Ornithologen für ihre Studien zurückgreifen. Citizen Science, zu Deutsch Bürgerwissenschaft, nennt sich dieser Ansatz, und er erlebt seit einigen Jahren einen beispiellosen Aufschwung.

Neu ist die Idee freilich nicht. Bereits im 19. Jahrhundert trugen Pfarrer, Lehrer und Apotheker in ihrer Freizeit Pflanzen- und Insektensammlungen zusammen, die bis heute in naturkundlichen Museen lagern. Neu ist vielmehr die Größenordnung: Dank Smartphones und Internetplattformen können sich heute Hunderttausende an einem einzigen Projekt beteiligen – sei es, indem sie Stechmücken einsenden, Galaxienbilder klassifizieren oder historische Wetteraufzeichnungen abtippen.

Für die Wissenschaft ist das ein Gewinn, der sich kaum beziffern lässt. Viele Fragestellungen, etwa zur Verbreitung eingeschleppter Arten oder zu den Folgen des Klimawandels für einzelne Regionen, ließen sich ohne die Mithilfe von Laien schlicht nicht beantworten, weil die nötige flächendeckende Datenerhebung für Forschungseinrichtungen unbezahlbar wäre. „Wir hätten niemals das Personal, um an zehntausend Orten gleichzeitig zu messen“, räumt die Biologin Katrin Albers ein, die ein Projekt zur Erfassung von Wildbienen leitet.

Ganz unumstritten ist der Ansatz dennoch nicht. Kritiker bemängeln vor allem die Qualität der von Freiwilligen gesammelten Daten. Wer eine Hummel nicht von einer Schwebfliege unterscheiden könne, liefere eben fehlerhafte Befunde, so ein häufig geäußerter Einwand. Albers hält diese Sorge für berechtigt, aber beherrschbar: Gezielte Schulungen, Fotobelege und statistische Verfahren, die auffällige Meldungen automatisch markieren, sorgten dafür, dass die Fehlerquote mittlerweile kaum höher liege als bei professionellen Erhebungen.

Schwerer wiegt ein anderer Vorwurf: Bürgerinnen und Bürger würden in vielen Projekten lediglich als kostenlose Hilfskräfte eingesetzt, ohne an der Formulierung der Forschungsfragen oder der Interpretation der Ergebnisse beteiligt zu werden. Tatsächlich beschränkt sich die Mitwirkung in der überwiegenden Zahl der Projekte auf das Sammeln von Daten. Dabei zeigen Beispiele aus der Medizin, wie fruchtbar eine engere Zusammenarbeit sein kann: Patientengruppen, die selbst Studien mitkonzipieren, lenken den Blick häufig auf Fragen, die im Forschungsalltag übersehen werden – etwa auf die Lebensqualität während einer Behandlung statt allein auf deren Erfolgsquote.

Hinzu kommt ein Effekt, der sich in keiner Datenbank niederschlägt. Wer selbst Vögel zählt oder Bodenproben nimmt, erfährt aus erster Hand, wie mühsam Erkenntnisgewinn ist und warum Forschende ihre Aussagen so vorsichtig formulieren. Studien deuten darauf hin, dass Teilnehmende wissenschaftlichen Ergebnissen anschließend zwar nicht unkritischer, aber deutlich verständiger gegenüberstehen. In Zeiten, in denen das Vertrauen in die Wissenschaft vielerorts bröckelt, ist das womöglich der wertvollste Ertrag der Bürgerforschung.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text und lösen Sie die Aufgaben. Welche Antwort ist richtig?',
          instructionRu: 'Прочитайте текст и выполните задания. Какой ответ правильный?',
          items: [
            {
              kind: 'mc',
              question: 'Was erfährt man im ersten Absatz über die Menschen im Stadtpark?',
              options: [
                'Sie arbeiten hauptberuflich für ein naturkundliches Museum.',
                'Sie liefern Daten, die von Fachleuten weiterverwendet werden.',
                'Sie werden für ihre Beobachtungen von einer Universität bezahlt.',
              ],
              answer: 1,
              explanationRu:
                '«Ihre Beobachtungen fließen in eine bundesweite Datenbank ein, auf die Ornithologinnen und Ornithologen … zurückgreifen» — данные используют специалисты.',
            },
            {
              kind: 'mc',
              question: 'Was ist laut Text das eigentlich Neue an Citizen Science?',
              options: [
                'die Zahl der Menschen, die sich beteiligen können',
                'dass Laien sich überhaupt an Forschung beteiligen',
                'dass Sammlungen in Museen aufbewahrt werden',
              ],
              answer: 0,
              explanationRu:
                '«Neu ist die Idee freilich nicht … Neu ist vielmehr die Größenordnung» — сотни тысяч участников благодаря смартфонам.',
            },
            {
              kind: 'mc',
              question: 'Warum ist die Forschung in manchen Bereichen auf Laien angewiesen?',
              options: [
                'Laien entwickeln häufig bessere Messmethoden.',
                'Professionelle Forschende dürfen bestimmte Daten nicht erheben.',
                'Eine flächendeckende Datenerhebung wäre sonst nicht finanzierbar.',
              ],
              answer: 2,
              explanationRu:
                '«weil die nötige flächendeckende Datenerhebung für Forschungseinrichtungen unbezahlbar wäre» и цитата Альберс о нехватке персонала.',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt Katrin Albers die Kritik an der Datenqualität?',
              options: [
                'Sie hält die Kritik für völlig unbegründet.',
                'Sie fordert, auf Daten von Laien künftig zu verzichten.',
                'Sie erkennt das Problem an, hält es aber für lösbar.',
              ],
              answer: 2,
              explanationRu:
                '«Albers hält diese Sorge für berechtigt, aber beherrschbar» — обучение, фотодоказательства и статистика снижают долю ошибок.',
            },
            {
              kind: 'mc',
              question: 'Welchen Vorwurf hält der Autor für schwerwiegender als die Kritik an der Datenqualität?',
              options: [
                'Freiwillige werden kaum in die inhaltliche Gestaltung der Forschung einbezogen.',
                'Medizinische Studien mit Patientengruppen sind methodisch unzuverlässig.',
                'Die meisten Projekte sind für die Teilnehmenden zu zeitaufwendig.',
              ],
              answer: 0,
              explanationRu:
                '«Schwerer wiegt ein anderer Vorwurf»: граждан используют как бесплатную рабочую силу, не привлекая к формулировке вопросов и интерпретации результатов.',
            },
            {
              kind: 'mc',
              question: 'Welchen zusätzlichen Nutzen der Bürgerforschung hebt der Autor am Ende hervor?',
              options: [
                'Die Teilnehmenden übernehmen Ergebnisse unkritischer als zuvor.',
                'Die Teilnehmenden entwickeln mehr Verständnis für wissenschaftliches Arbeiten.',
                'Die Teilnehmenden können langfristig professionelle Forschende ersetzen.',
              ],
              answer: 1,
              explanationRu:
                'Участники относятся к научным результатам «nicht unkritischer, aber deutlich verständiger» — с большим пониманием, а не менее критично.',
            },
          ],
        },
      ],
    },
  ],

  listening: [
    {
      title: 'Statements: Alltag im Wissenschaftsbetrieb',
      kind: 'discussion',
      speakers: {
        A: 'Lea, Doktorandin der Biologie',
        B: 'Dr. Jonas Maurer, Postdoc in der Physik',
        C: 'Prof. em. Heinrich Albrecht, Chemiker',
        D: 'Sandra Kühn, Wissenschaftsjournalistin',
      },
      situation: 'Sie hören vier kurze Statements von Personen, die über ihre Erfahrungen mit dem Wissenschaftsbetrieb sprechen.',
      text: `A: Also, ich muss ehrlich sagen, dass ich mir die Promotion ganz anders vorgestellt hatte. Ich dachte, ich würde den ganzen Tag im Labor stehen und experimentieren. Tatsächlich verbringe ich mindestens die Hälfte meiner Zeit damit, Fachliteratur auszuwerten, Daten aufzubereiten und Protokolle zu schreiben. Das klingt jetzt negativer, als es gemeint ist – ich habe mich inzwischen damit arrangiert, und manches davon macht mir sogar Spaß. Aber wer glaubt, Forschung bestehe vor allem aus Geistesblitzen, der irrt sich gewaltig.
B: Mein aktueller Vertrag läuft in elf Monaten aus, und es ist der fünfte befristete Vertrag in Folge. Ich liebe meine Arbeit, wirklich, aber ich bin jetzt achtunddreißig, habe zwei Kinder, und irgendwann muss man sich fragen, ob man sich diese Unsicherheit noch leisten kann. Ein Kollege von mir ist letztes Jahr in die Industrie gewechselt – nicht, weil ihn die Forschung nicht mehr interessiert hätte, sondern weil er endlich planen wollte. Ehrlich gesagt schließe ich das für mich inzwischen auch nicht mehr aus.
C: Als ich angefangen habe, hat man vielleicht zwei, drei Aufsätze im Jahr veröffentlicht, dafür aber gründlich durchdachte. Heute zählt vor allem die Menge. Ich will die alten Zeiten nicht verklären, da lief auch vieles schief, keine Frage. Aber dieser Druck verleitet junge Leute dazu, ihre Ergebnisse in möglichst viele kleine Häppchen aufzuteilen. Der Erkenntnisgewinn wird dadurch nicht größer – nur die Publikationsliste wird länger.
D: In meinem Beruf erlebe ich ständig, dass Forschende regelrecht Angst haben, mit Medien zu sprechen. Sie fürchten, verkürzt oder falsch zitiert zu werden, und – das muss man zugeben – ganz unbegründet ist diese Sorge nicht. Trotzdem halte ich es für einen Fehler, sich zurückzuziehen. Wenn die Fachleute schweigen, füllen andere die Lücke, und zwar meistens nicht die kompetentesten. Ich wünsche mir, dass Kommunikation an den Hochschulen nicht länger als lästige Zusatzaufgabe gilt.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Statements zweimal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слушаете высказывания дважды. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Lea verbringt den größten Teil ihrer Arbeitszeit mit Experimenten im Labor.',
              answer: false,
              explanationRu:
                'Наоборот: не меньше половины времени она тратит на литературу, обработку данных и протоколы, хотя ожидала, что будет весь день экспериментировать.',
            },
            {
              kind: 'tf',
              statement: 'Dr. Maurer zieht einen Wechsel in die Industrie mittlerweile in Betracht.',
              answer: true,
              explanationRu: '«Ehrlich gesagt schließe ich das für mich inzwischen auch nicht mehr aus.»',
            },
            {
              kind: 'tf',
              statement: 'Prof. Albrecht ist der Meinung, dass früher in der Wissenschaft alles besser war.',
              answer: false,
              explanationRu: '«Ich will die alten Zeiten nicht verklären, da lief auch vieles schief» — он не идеализирует прошлое.',
            },
            {
              kind: 'tf',
              statement: 'Frau Kühn hält die Angst der Forschenden vor falschen Zitaten für teilweise nachvollziehbar.',
              answer: true,
              explanationRu: '«ganz unbegründet ist diese Sorge nicht» — она признаёт, что опасения отчасти обоснованы.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie für jedes Statement die richtige Antwort.',
          instructionRu: 'Выберите правильный ответ к каждому высказыванию.',
          items: [
            {
              kind: 'mc',
              question: 'Wie steht Lea heute zu ihrem Arbeitsalltag?',
              options: [
                'Sie denkt darüber nach, die Promotion abzubrechen.',
                'Sie hat sich mit der Situation abgefunden.',
                'Sie fühlt sich von ihren Betreuern getäuscht.',
              ],
              answer: 1,
              explanationRu: '«ich habe mich inzwischen damit arrangiert» = она смирилась и даже находит в этом удовольствие.',
            },
            {
              kind: 'mc',
              question: 'Warum hat Dr. Maurers Kollege die Wissenschaft verlassen?',
              options: [
                'Er wollte mehr Planungssicherheit.',
                'Er hatte das Interesse an der Forschung verloren.',
                'Er bekam in der Industrie ein deutlich höheres Gehalt.',
              ],
              answer: 0,
              explanationRu: '«nicht, weil ihn die Forschung nicht mehr interessiert hätte, sondern weil er endlich planen wollte».',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert Prof. Albrecht?',
              options: [
                'dass junge Forschende zu wenig veröffentlichen',
                'dass Fachzeitschriften zu lange Aufsätze verlangen',
                'dass Ergebnisse zerstückelt werden, um mehr Publikationen zu erzielen',
              ],
              answer: 2,
              explanationRu:
                'Давление количества приводит к тому, что результаты делят на «möglichst viele kleine Häppchen» — список публикаций растёт, а знаний не прибавляется.',
            },
            {
              kind: 'mc',
              question: 'Was wünscht sich Frau Kühn?',
              options: [
                'dass Journalisten Interviews vor der Veröffentlichung freigeben lassen',
                'dass Wissenschaftskommunikation an Hochschulen aufgewertet wird',
                'dass sich Forschende aus der Öffentlichkeit zurückziehen',
              ],
              answer: 1,
              explanationRu:
                'Она хочет, чтобы коммуникация в вузах «nicht länger als lästige Zusatzaufgabe gilt», т. е. чтобы её ценили больше.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vorlesung: Der Zufall in der Forschung',
      kind: 'monolog',
      situation: 'Sie hören einen Ausschnitt aus einer Ringvorlesung an einer Universität.',
      text: `Meine Damen und Herren, ich begrüße Sie zur heutigen Sitzung unserer Ringvorlesung „Wie Wissen entsteht“. In den vergangenen Wochen haben wir uns vor allem mit den planbaren Aspekten der Forschung beschäftigt: mit der Formulierung von Hypothesen, mit Versuchsdesigns, mit statistischen Verfahren. Heute möchte ich Ihren Blick auf einen Faktor lenken, der in keinem Methodenhandbuch auftaucht und dennoch erstaunlich viele bahnbrechende Entdeckungen ermöglicht hat: den Zufall – oder genauer gesagt das, was man in der Wissenschaftsgeschichte als Serendipität bezeichnet.

Das wohl bekannteste Beispiel kennen Sie alle. Als der Bakteriologe Alexander Fleming 1928 aus dem Urlaub in sein Labor zurückkehrte, fiel ihm auf, dass in einer seiner Bakterienkulturen ein Schimmelpilz gewachsen war – und dass sich die Bakterien rund um diesen Pilz nicht vermehrt hatten. Ein weniger aufmerksamer Forscher hätte die verunreinigte Schale vermutlich einfach entsorgt. Fleming dagegen erkannte, dass er etwas Ungewöhnliches vor sich hatte. Aus seiner Beobachtung ging, wenn auch erst Jahre später und durch die Arbeit anderer, das Penicillin als Medikament hervor.

Nun könnte man aus solchen Geschichten den Schluss ziehen, Forschung sei letztlich eine Art Lotterie. Das wäre allerdings ein grobes Missverständnis. Louis Pasteur hat es treffend formuliert: Der Zufall begünstigt nur den vorbereiteten Geist. Fleming konnte die Bedeutung seiner Beobachtung nur deshalb einschätzen, weil er sich seit Jahren mit der Bekämpfung von Bakterien beschäftigt hatte. Serendipität setzt also gerade jenes fundierte Fachwissen voraus, zu dem sie auf den ersten Blick im Widerspruch zu stehen scheint.

Und damit komme ich zu einem Punkt, der mir besonders am Herzen liegt: den Bedingungen, unter denen heute geforscht wird. Ein Großteil der Forschungsgelder wird mittlerweile projektbezogen vergeben. Wer einen Antrag stellt, muss möglichst genau darlegen, welche Ergebnisse in welchem Zeitraum zu erwarten sind. Das ist aus Sicht der Geldgeber nachvollziehbar – schließlich geht es um Steuermittel. Es birgt aber die Gefahr, dass für das Unerwartete kein Raum mehr bleibt. Wer unter Zeitdruck einen fest vereinbarten Arbeitsplan abarbeiten muss, wird eine merkwürdige Abweichung in seinen Messdaten eher als lästigen Störfaktor betrachten denn als möglichen Hinweis auf etwas Neues.

Einige Förderinstitutionen haben daraus inzwischen Konsequenzen gezogen. Sie vergeben einen Teil ihrer Mittel bewusst für sogenannte Hochrisikoprojekte, bei denen ein Scheitern ausdrücklich einkalkuliert ist, oder sie fördern nicht Projekte, sondern Personen, denen sie über mehrere Jahre hinweg weitgehende Freiheit lassen. Ob sich diese Modelle bewähren, lässt sich noch nicht abschließend beurteilen; die bisherigen Erfahrungen sind aber durchaus ermutigend.

Für Sie als künftige Forschende möchte ich daraus eine ganz praktische Lehre ableiten: Nehmen Sie Ihre Fehlschläge ernst. Dokumentieren Sie auch die Experimente, die nicht so verlaufen, wie Sie es erwartet hatten. Nicht jede Abweichung ist ein Penicillin – aber ohne Neugier auf das Unerwartete werden Sie es nie herausfinden. In der nächsten Woche beschäftigen wir uns dann mit der Frage, wie wissenschaftliche Irrtümer korrigiert werden.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Vorlesung zweimal. Wählen Sie die richtige Antwort.',
          instructionRu: 'Вы слушаете лекцию дважды. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Womit hat sich die Ringvorlesung in den vergangenen Wochen beschäftigt?',
              options: [
                'mit berühmten Zufallsentdeckungen',
                'mit planbaren Aspekten wissenschaftlicher Arbeit',
                'mit der Finanzierung von Forschungsprojekten',
              ],
              answer: 1,
              explanationRu: 'Раньше речь шла о «planbaren Aspekten der Forschung»: гипотезы, дизайн экспериментов, статистика.',
            },
            {
              kind: 'mc',
              question: 'Was betont die Dozentin am Beispiel Fleming?',
              options: [
                'Fleming hatte das Penicillin schon vor seinem Urlaub entwickelt.',
                'Fleming entsorgte die verunreinigte Schale, erinnerte sich aber später daran.',
                'Erst durch spätere Arbeiten anderer wurde aus der Beobachtung ein Medikament.',
              ],
              answer: 2,
              explanationRu:
                '«wenn auch erst Jahre später und durch die Arbeit anderer» — лекарство появилось благодаря последующей работе других учёных.',
            },
            {
              kind: 'mc',
              question: 'Wozu dient das Zitat von Louis Pasteur?',
              options: [
                'Es soll zeigen, dass man Zufälle nur mit Fachwissen fruchtbar machen kann.',
                'Es soll belegen, dass Forschung im Grunde eine Lotterie ist.',
                'Es soll erklären, warum Zufallsentdeckungen heute seltener sind.',
              ],
              answer: 0,
              explanationRu:
                '«Der Zufall begünstigt nur den vorbereiteten Geist»: Флеминг понял значение наблюдения благодаря многолетним знаниям. Мысль о лотерее лектор называет недоразумением.',
            },
            {
              kind: 'mc',
              question: 'Welche Gefahr sieht die Dozentin in der projektbezogenen Forschungsförderung?',
              options: [
                'Steuermittel könnten für sinnlose Projekte verschwendet werden.',
                'Unerwartete Befunde könnten eher als Störung wahrgenommen werden.',
                'Anträge könnten zu ungenau formuliert werden.',
              ],
              answer: 1,
              explanationRu:
                'При жёстком плане отклонение в данных воспринимается «eher als lästigen Störfaktor … denn als möglichen Hinweis auf etwas Neues».',
            },
            {
              kind: 'mc',
              question: 'Wie bewertet die Dozentin die neuen Fördermodelle?',
              options: [
                'Sie hält sie für bereits gescheitert.',
                'Sie hält sie für endgültig bewährt.',
                'Sie hält ein abschließendes Urteil für verfrüht, ist aber zuversichtlich.',
              ],
              answer: 2,
              explanationRu:
                '«lässt sich noch nicht abschließend beurteilen; die bisherigen Erfahrungen sind aber durchaus ermutigend».',
            },
            {
              kind: 'mc',
              question: 'Welchen praktischen Rat gibt die Dozentin den Studierenden?',
              options: [
                'auch misslungene Experimente sorgfältig festzuhalten',
                'sich ausschließlich um Hochrisikoprojekte zu bewerben',
                'Abweichungen in den Messdaten möglichst schnell zu korrigieren',
              ],
              answer: 0,
              explanationRu: '«Dokumentieren Sie auch die Experimente, die nicht so verlaufen, wie Sie es erwartet hatten.»',
            },
          ],
        },
      ],
    },
  ],
};
