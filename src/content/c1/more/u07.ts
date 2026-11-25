import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Die Methode ist unter Fachleuten umstritten; ___ wird sie in vielen Kliniken angewandt.',
      options: ['obwohl', 'dennoch', 'wenngleich', 'trotz'],
      answer: 1,
      explanationRu:
        'После пропуска идёт глагол «wird» (инверсия) → нужно союзное наречие на первой позиции: «dennoch». «obwohl/wenngleich» требуют глагола в конце, «trotz» — предлог.',
    },
    {
      type: 'gap',
      prompt: 'Introvertierte Menschen tanken in der Stille auf; Extrovertierte ___ schöpfen Kraft aus Begegnungen.',
      answers: ['hingegen', 'dagegen', 'jedoch', 'wiederum', 'aber'],
      explanationRu:
        'Противопоставление двух групп: «hingegen/dagegen/jedoch» могут стоять после подлежащего, не меняя порядка слов.',
    },
    {
      type: 'choice',
      prompt: 'Meine Schwester ist eher ängstlich, ___ ich fast jedes Risiko eingehe.',
      options: ['obwohl', 'wohingegen', 'trotzdem', 'zwar'],
      answer: 1,
      explanationRu:
        'Здесь не уступка, а противопоставление двух людей → «wohingegen» (тогда как). «obwohl» дало бы бессмыслицу: «она боязлива, хотя я рискую».',
    },
    {
      type: 'gap',
      prompt: 'Der Patient wirkte gefasst, ___ auch sichtlich erschöpft.',
      answers: ['wenn'],
      explanationRu:
        'Сокращённая уступительная конструкция «wenn auch» (хотя и): «gefasst, wenn auch erschöpft» — без глагола.',
    },
    {
      type: 'gap',
      prompt: '___ man es auch dreht und wendet, die Daten lassen keinen anderen Schluss zu.',
      answers: ['Wie'],
      explanationRu:
        'Обобщающая уступка «wie … auch» = «как ни крути». Глагол — в конце придаточного, главное предложение сохраняет прямой порядок слов.',
    },
    {
      type: 'gap',
      prompt: 'Bei ___ Verständnis für Ihre Lage: Diese Entscheidung kann ich nicht mittragen.',
      answers: ['allem'],
      explanationRu:
        '«bei aller/allem + Dat.» = «при всём …». «Verständnis» — средний род, поэтому «bei allem Verständnis».',
    },
    {
      type: 'gap',
      prompt: 'Angst ist kein Zeichen von Schwäche, ___ ist sie ein sinnvolles Warnsignal des Körpers.',
      answers: ['vielmehr'],
      explanationRu:
        '«vielmehr» (скорее, напротив) исправляет отрицаемое утверждение и стоит на первом месте с инверсией: «vielmehr ist sie …».',
    },
    {
      type: 'choice',
      prompt: 'Zwar ist Prokrastination kein Charakterfehler, ___ kann sie erhebliche Folgen haben.',
      options: ['aber', 'doch', 'sondern', 'obwohl'],
      answer: 1,
      explanationRu:
        'После пропуска сразу идёт глагол «kann». «doch» может занимать первую позицию с инверсией; после «aber» нужен прямой порядок («aber sie kann»), «sondern» — только после отрицания.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt und drückt eine Einräumung aus?',
      options: [
        'So sehr sie sich auch anstrengte, die Prüfung bestand sie nicht.',
        'So sehr strengte sie sich auch an, sie bestand die Prüfung nicht.',
        'So sehr sie sich anstrengte, bestand sie die Prüfung trotzdem.',
        'So sehr sie auch sich anstrengte, sie die Prüfung nicht bestand.',
      ],
      answer: 0,
      explanationRu:
        'В «so … auch» глагол стоит в конце, возвратное местоимение — перед «auch» после подлежащего-местоимения; главное предложение — обычное, с глаголом на втором месте.',
    },
    {
      type: 'gap',
      prompt: 'Der Warnungen ___ setzte er sein riskantes Verhalten unbeirrt fort.',
      answers: ['ungeachtet'],
      hintRu: 'предлог с генитивом в постпозиции',
      explanationRu:
        '«ungeachtet + Gen.» может стоять после существительного: «der Warnungen ungeachtet». «der Warnungen» — генитив мн. ч.',
    },
    {
      type: 'gap',
      prompt: 'Allen Ratschlägen ___ brach sie das Studium ab und gründete ein Unternehmen.',
      answers: ['zum Trotz'],
      hintRu: 'вопреки (постпозиция, дательный падеж)',
      explanationRu:
        'Ловушка: «Allen Ratschlägen» — дательный падеж, поэтому не «ungeachtet» (генитив), а «zum Trotz» (+ Dat., после существительного).',
    },
    {
      type: 'choice',
      prompt: 'Was auch immer die Untersuchung ___, die Debatte wird weitergehen.',
      options: ['ergeben mag', 'ergibt mag', 'mag ergeben', 'ergeben möge'],
      answer: 0,
      explanationRu:
        'В обобщающих уступительных предложениях часто используется «mögen» в значении допущения; спрягаемый глагол «mag» стоит в конце придаточного.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Konnektor passt NICHT? „Die Ergebnisse sind vorläufig. ___ sind sie aufschlussreich.“',
      options: ['Nichtsdestotrotz', 'Gleichwohl', 'Wenngleich', 'Dennoch'],
      answer: 2,
      explanationRu:
        '«wenngleich» — подчинительный союз, требует глагола в конце и не может начинать самостоятельное предложение с инверсией. Остальные — союзные наречия.',
    },
    {
      type: 'order',
      words: ['Es', 'war', 'ein', 'kleiner,', 'wenn auch', 'entscheidender', 'Fortschritt.'],
      translationRu: 'Это был небольшой, хотя и решающий, шаг вперёд.',
      explanationRu:
        '«wenn auch» вводит уступительное определение между двумя прилагательными перед существительным.',
    },
    {
      type: 'order',
      words: ['Ungeachtet', 'aller', 'Bedenken', 'hielt', 'die Klinik', 'an dem Programm', 'fest.'],
      translationRu: 'Несмотря на все сомнения, клиника продолжала придерживаться программы.',
      explanationRu:
        'Предложная группа «ungeachtet aller Bedenken» занимает первое место → глагол «hielt» на втором, затем подлежащее; приставка «fest» — в конце.',
    },
    {
      type: 'order',
      words: ['Wie gut', 'sie', 'es', 'auch', 'gemeint haben mag,', 'das Ergebnis war verheerend.'],
      translationRu: 'Как бы хорошо она это ни задумывала, результат был катастрофическим.',
      explanationRu:
        'Порядок в обобщающем уступительном придаточном: «wie + наречие» – подлежащее – дополнение – «auch» – глагольная группа в конце. Главное предложение — прямой порядок.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините в одно предложение с помощью «wenngleich».',
      prompt: 'Die Therapie war anstrengend. Trotzdem brach kaum jemand sie ab.',
      answers: [
        'Wenngleich die Therapie anstrengend war, brach kaum jemand sie ab.',
        'Wenngleich die Therapie anstrengend war, brach sie kaum jemand ab.',
        'Kaum jemand brach die Therapie ab, wenngleich sie anstrengend war.',
      ],
      explanationRu:
        '«trotzdem» (наречие) заменяется союзом «wenngleich» в придаточном с глаголом в конце; если придаточное стоит первым, главное начинается с глагола.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложной группой с «bei aller».',
      prompt: 'Obwohl die Kritik berechtigt ist, sollte man die Leistung anerkennen.',
      answers: ['Bei aller berechtigten Kritik sollte man die Leistung anerkennen.'],
      explanationRu:
        '«bei aller + Dat.»: после «aller» прилагательное склоняется слабо → «berechtigten» (а не «berechtigter»). Глагол «sollte» — сразу после предложной группы.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите с обобщающей уступительной конструкцией «wie/so … auch».',
      prompt: 'Es ist egal, wie sehr wir uns bemühen – wir können nicht alle Vorurteile ablegen.',
      answers: [
        'Wie sehr wir uns auch bemühen, wir können nicht alle Vorurteile ablegen.',
        'So sehr wir uns auch bemühen, wir können nicht alle Vorurteile ablegen.',
        'Wie sehr wir uns auch immer bemühen, wir können nicht alle Vorurteile ablegen.',
        'So sehr wir uns auch bemühen mögen, wir können nicht alle Vorurteile ablegen.',
        'Wie sehr wir uns auch bemühen mögen, wir können nicht alle Vorurteile ablegen.',
      ],
      explanationRu:
        '«Как бы мы ни старались» = «Wie/So sehr wir uns auch bemühen». После такого придаточного главное предложение обычно сохраняет прямой порядок слов.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините два предложения с помощью двойного союза «zwar … aber/doch/jedoch».',
      prompt: 'Die Studie ist methodisch solide. Ihre Aussagekraft ist aber begrenzt.',
      answers: [
        'Die Studie ist zwar methodisch solide, aber ihre Aussagekraft ist begrenzt.',
        'Die Studie ist zwar methodisch solide, ihre Aussagekraft ist aber begrenzt.',
        'Die Studie ist zwar methodisch solide, doch ihre Aussagekraft ist begrenzt.',
        'Die Studie ist zwar methodisch solide, doch ist ihre Aussagekraft begrenzt.',
        'Die Studie ist zwar methodisch solide, ihre Aussagekraft ist jedoch begrenzt.',
        'Die Studie ist zwar methodisch solide, jedoch ist ihre Aussagekraft begrenzt.',
        'Zwar ist die Studie methodisch solide, aber ihre Aussagekraft ist begrenzt.',
        'Zwar ist die Studie methodisch solide, ihre Aussagekraft ist aber begrenzt.',
        'Zwar ist die Studie methodisch solide, doch ihre Aussagekraft ist begrenzt.',
        'Zwar ist die Studie methodisch solide, doch ist ihre Aussagekraft begrenzt.',
        'Zwar ist die Studie methodisch solide, ihre Aussagekraft ist jedoch begrenzt.',
      ],
      explanationRu:
        '«zwar» стоит после глагола (или на первом месте с инверсией); вторая часть вводится «aber» (прямой порядок), «doch» (оба варианта) или «jedoch».',
    },
  ],
  reading: [
    {
      title: 'Morgen, ganz bestimmt: Warum wir Unangenehmes aufschieben',
      textType: 'Zeitschriftenartikel',
      texts: [
        {
          body: `Die Steuererklärung liegt seit Wochen auf dem Schreibtisch, die Hausarbeit ist längst überfällig, und doch räumen wir lieber den Keller auf oder sortieren alte Fotos. Prokrastination, das chronische Aufschieben wichtiger Aufgaben, betrifft nach Schätzungen von Psychologen rund jeden fünften Erwachsenen so stark, dass Beruf, Gesundheit oder Beziehungen darunter leiden. Unter Studierenden liegt der Anteil sogar noch höher.

Lange galt das Aufschieben als Ausdruck mangelnder Disziplin oder schlechten Zeitmanagements. Entsprechend zielten die meisten Ratgeber darauf ab, den Tag besser zu strukturieren: To-do-Listen, Prioritätenmatrizen, feste Arbeitszeiten. So nützlich solche Werkzeuge im Einzelfall auch sein mögen, am Kern des Problems gehen sie häufig vorbei. Denn die neuere Forschung deutet darauf hin, dass Prokrastination weniger ein Zeit- als vielmehr ein Gefühlsproblem ist.

Wer eine Aufgabe aufschiebt, so die These, flieht vor den unangenehmen Emotionen, die sie auslöst – Langeweile, Unsicherheit, Angst vor dem Scheitern. Der kurzfristige Gewinn ist beträchtlich: Kaum ist die Aufgabe verschoben, stellt sich Erleichterung ein. Gerade diese Erleichterung aber wirkt wie eine Belohnung und verstärkt das Verhalten. Langfristig wächst der Druck, die Schuldgefühle nehmen zu, und die Aufgabe erscheint noch bedrohlicher als zuvor. Ein Teufelskreis entsteht.

Bemerkenswert ist, welche Rolle dabei unser Verhältnis zum zukünftigen Ich spielt. In Experimenten zeigte sich, dass Menschen, die zum Aufschieben neigen, ihr eigenes Ich in einem Jahr ähnlich wahrnehmen wie einen Fremden. Und wenn das zukünftige Ich ein Fremder ist, fällt es leicht, ihm die Arbeit aufzubürden. Wer sich dagegen eng mit seinem späteren Selbst verbunden fühlt, handelt eher in dessen Interesse.

Was folgt daraus für die Praxis? Erstaunlich wirksam ist offenbar ein Ansatz, der auf den ersten Blick wenig mit Leistung zu tun hat: Selbstmitgefühl. In einer kanadischen Studie schoben Studierende, die sich verziehen hatten, dass sie das Lernen für die erste Prüfung aufgeschoben hatten, die Vorbereitung auf die nächste Prüfung seltener auf als jene, die hart mit sich ins Gericht gegangen waren. Selbstkritik, wenngleich gut gemeint, verstärkt offenbar genau jene negativen Gefühle, vor denen man durch das Aufschieben fliehen will.

Hilfreich ist zudem, die Einstiegshürde möglichst niedrig zu halten. Statt sich vorzunehmen, „die Hausarbeit zu schreiben“, genügt es, das Dokument zu öffnen und einen einzigen Satz zu formulieren. Ist der Anfang erst gemacht, fällt das Weiterarbeiten meist erheblich leichter.

Allerdings warnen Fachleute davor, jedes Zögern zu pathologisieren. Nicht jedes Aufschieben ist schädlich: Wer eine Entscheidung bewusst vertagt, um mehr Informationen zu sammeln, handelt durchaus rational. Problematisch wird es erst, wenn man gegen die eigenen Interessen handelt, dies auch weiß – und dennoch nicht anders kann.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Artikel. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прочитайте статью. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Was sagt der Text über herkömmliche Ratgeber zum Thema Aufschieben?',
              options: [
                'Sie sind grundsätzlich nutzlos und sollten gemieden werden.',
                'Sie setzen vor allem bei der Zeitplanung an und verfehlen damit oft das eigentliche Problem.',
                'Sie richten sich fast ausschließlich an Studierende.',
              ],
              answer: 1,
              explanationRu:
                '«So nützlich solche Werkzeuge … auch sein mögen, am Kern des Problems gehen sie häufig vorbei» — они не бесполезны, но бьют мимо сути.',
            },
            {
              kind: 'mc',
              question: 'Warum verstärkt sich das Aufschieben nach Darstellung des Textes von selbst?',
              options: [
                'Weil die Erleichterung nach dem Verschieben wie eine Belohnung wirkt.',
                'Weil unangenehme Aufgaben mit der Zeit an Bedeutung verlieren.',
                'Weil Schuldgefühle die Betroffenen kurzfristig motivieren.',
              ],
              answer: 0,
              explanationRu:
                '«Gerade diese Erleichterung aber wirkt wie eine Belohnung und verstärkt das Verhalten».',
            },
            {
              kind: 'mc',
              question: 'Was haben Experimente zum „zukünftigen Ich“ gezeigt?',
              options: [
                'Menschen, die aufschieben, planen ihre Zukunft besonders genau.',
                'Wer an die Zukunft denkt, schiebt grundsätzlich mehr auf.',
                'Menschen, die zum Aufschieben neigen, nehmen ihr späteres Ich eher wie eine fremde Person wahr.',
              ],
              answer: 2,
              explanationRu:
                'Склонные к прокрастинации воспринимают себя через год «ähnlich wie einen Fremden» — и легко перекладывают на него работу.',
            },
            {
              kind: 'mc',
              question: 'Welches Ergebnis hatte die kanadische Studie?',
              options: [
                'Strenge Selbstkritik führte zu besseren Prüfungsergebnissen.',
                'Studierende, die sich ihr Aufschieben verziehen, schoben beim nächsten Mal seltener auf.',
                'Selbstmitgefühl hatte keinen messbaren Einfluss auf das Verhalten.',
              ],
              answer: 1,
              explanationRu:
                'Студенты, простившие себя, реже откладывали подготовку к следующему экзамену, чем те, кто строго себя критиковал.',
            },
            {
              kind: 'mc',
              question: 'Welchen praktischen Rat gibt der Text außerdem?',
              options: [
                'mit einem sehr kleinen ersten Schritt zu beginnen',
                'feste Belohnungen für erledigte Aufgaben einzuplanen',
                'unangenehme Aufgaben grundsätzlich an andere abzugeben',
              ],
              answer: 0,
              explanationRu:
                '«die Einstiegshürde möglichst niedrig zu halten» — например, открыть документ и написать одно предложение.',
            },
            {
              kind: 'mc',
              question: 'Welche Einschränkung machen Fachleute am Ende des Textes?',
              options: [
                'Aufschieben sei nur bei Studierenden ein ernstes Problem.',
                'Prokrastination lasse sich nur durch Therapie behandeln.',
                'Nicht jedes Hinauszögern sei krankhaft oder schädlich.',
              ],
              answer: 2,
              explanationRu:
                'Специалисты предостерегают от того, чтобы считать патологией любое промедление: осознанно отложить решение может быть рационально.',
            },
          ],
        },
      ],
    },
    {
      title: 'Die Resilienz-Falle',
      textType: 'Kommentar',
      texts: [
        {
          heading: 'Kommentar: Wenn Widerstandskraft zur Privatsache erklärt wird',
          body: `Resilienz ist das Zauberwort unserer Zeit. Kaum ein Personalentwicklungsprogramm kommt noch ohne Kurse aus, in denen Beschäftigte lernen sollen, gelassener mit Druck umzugehen, Rückschläge wegzustecken und sich nach Krisen rasch wieder aufzurichten. Schon in Kindergärten werden Programme zur Stärkung der seelischen Widerstandskraft angeboten. Wer wollte etwas dagegen haben?

Ich will gleich vorausschicken: Ich halte die Resilienzforschung für wertvoll. Dass manche Menschen schwere Schicksalsschläge erstaunlich gut verkraften, während andere an weit geringeren Belastungen zerbrechen, ist eine wichtige Erkenntnis. Und es ist ermutigend zu wissen, dass sich Widerstandskraft zumindest teilweise erlernen lässt.

Gleichwohl beschleicht mich ein Unbehagen, wenn ich sehe, wie der Begriff im Arbeitsleben verwendet wird. Ein Unternehmen, das seine Belegschaft seit Jahren mit Stellenabbau, ständiger Erreichbarkeit und unrealistischen Zielvorgaben belastet, bietet ein Achtsamkeitsseminar an – und betrachtet die Sache damit als erledigt. Die Botschaft, so freundlich sie auch verpackt sein mag, ist unmissverständlich: Wenn du nicht mehr kannst, liegt das an dir. Du bist eben nicht widerstandsfähig genug.

Damit wird ein strukturelles Problem in ein individuelles umgedeutet. Nicht die Arbeitsbedingungen gelten als krankmachend, sondern die mangelnde Anpassungsfähigkeit des Einzelnen. Das ist bequem, denn ein Yoga-Kurs kostet weniger als zusätzliches Personal. Und es ist perfide, weil es denjenigen, die ohnehin erschöpft sind, auch noch ein schlechtes Gewissen einredet.

Man wird mir entgegenhalten, dass Unternehmen nicht jede Belastung verhindern können und dass es durchaus sinnvoll ist, Beschäftigten Werkzeuge an die Hand zu geben. Das bestreite ich nicht. Ein Kurs, in dem man lernt, Grenzen zu setzen, kann einem Menschen tatsächlich helfen. Aber er kann nicht ersetzen, was eigentlich zu tun wäre: Arbeitsmengen realistisch planen, Führungskräfte schulen, Überlastung ernst nehmen, bevor sie in die Krankschreibung mündet.

Bemerkenswert ist im Übrigen, dass Resilienz in der frühen Forschung gerade nicht als reine Charaktereigenschaft verstanden wurde. Die berühmte Langzeitstudie der Psychologin Emmy Werner auf der Hawaii-Insel Kauai zeigte, dass sich Kinder aus schwierigsten Verhältnissen vor allem dann gut entwickelten, wenn sie mindestens eine verlässliche Bezugsperson hatten. Widerstandskraft entsteht also in Beziehungen und unter förderlichen Bedingungen – nicht im luftleeren Raum.

Wer es mit der Resilienz seiner Mitarbeitenden ernst meint, sollte daher zuerst die Verhältnisse in den Blick nehmen und erst dann das Verhalten. Alles andere ist Kosmetik.`,
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie den Kommentar. Entsprechen die Aussagen der Meinung des Autors? Wählen Sie „Richtig“ oder „Falsch“.',
          instructionRu: 'Прочитайте комментарий. Соответствуют ли утверждения мнению автора? Выберите «Richtig» или «Falsch».',
          items: [
            {
              kind: 'tf',
              statement: 'Der Autor lehnt die wissenschaftliche Resilienzforschung grundsätzlich ab.',
              answer: false,
              explanationRu: 'Напротив: «Ich halte die Resilienzforschung für wertvoll».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor kritisiert, dass Unternehmen strukturelle Probleme dem Einzelnen zuschreiben.',
              answer: true,
              explanationRu: '«Damit wird ein strukturelles Problem in ein individuelles umgedeutet».',
            },
            {
              kind: 'tf',
              statement: 'Nach Ansicht des Autors sind Kurse für Beschäftigte grundsätzlich wirkungslos.',
              answer: false,
              explanationRu: 'Автор признаёт: курс, где учат устанавливать границы, «kann einem Menschen tatsächlich helfen».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor vermutet, dass bei der Wahl solcher Angebote auch Kostenüberlegungen eine Rolle spielen.',
              answer: true,
              explanationRu: '«Das ist bequem, denn ein Yoga-Kurs kostet weniger als zusätzliches Personal».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor räumt ein, dass Unternehmen nicht jede Belastung vermeiden können.',
              answer: true,
              explanationRu: 'На возражение, что компании не могут предотвратить любую нагрузку, он отвечает: «Das bestreite ich nicht».',
            },
            {
              kind: 'tf',
              statement: 'Laut dem Autor betrachtete die frühe Forschung Resilienz als angeborene Charaktereigenschaft.',
              answer: false,
              explanationRu: 'Наоборот: в ранних исследованиях устойчивость «gerade nicht als reine Charaktereigenschaft» понималась.',
            },
            {
              kind: 'tf',
              statement: 'Der Autor ist der Meinung, dass man zuerst die Arbeitsbedingungen verbessern sollte.',
              answer: true,
              explanationRu: '«… sollte daher zuerst die Verhältnisse in den Blick nehmen und erst dann das Verhalten».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Umfrage: Wie ändert man eine Gewohnheit?',
      kind: 'discussion',
      speakers: {
        A: 'Markus, 34, Krankenpfleger',
        B: 'Hanna, 52, Lehrerin',
        C: 'Dilan, 23, Student',
        D: 'Herr Petersen, 67, Rentner',
      },
      situation:
        'Sie hören vier kurze Statements aus einer Radioumfrage zur Frage: „Haben Sie schon einmal eine Gewohnheit dauerhaft geändert?“',
      text: `A: Also, ich hab zwölf Jahre lang geraucht und bestimmt fünfmal versucht aufzuhören. Jedes Mal hab ich mir gesagt: Diesmal ziehst du's durch. So fest ich's mir auch vorgenommen hab – nach ein paar Wochen stand ich wieder mit den Kollegen im Raucherhof. Geklappt hat's erst, als ich auf eine andere Station gewechselt bin. Da raucht keiner, die Pausen verbringen wir im Aufenthaltsraum. Ich glaub inzwischen, Willenskraft wird total überschätzt. Wenn das Umfeld nicht mitspielt, hat man kaum eine Chance.
B: Ich wollte jahrelang morgens joggen. Ich hab mir sogar teure Laufschuhe gekauft und eine App, die mich jeden Morgen erinnert hat. Die Erinnerung hab ich dann halt jeden Morgen weggedrückt. Was wirklich geholfen hat, war meine Nachbarin. Wir laufen jetzt dreimal die Woche zusammen, um halb sieben. Ein Morgenmensch bin ich zwar immer noch nicht, aber ich lass sie doch nicht vor der Tür stehen! So eine Verabredung ist mir irgendwie verbindlicher als jedes Versprechen, das ich mir selbst gebe.
C: Bei mir war's das Handy. Irgendwann hab ich gemerkt, dass ich locker fünf Stunden am Tag dran bin. Also hab ich alle sozialen Netzwerke gelöscht – und nach zehn Tagen wieder installiert. Mittlerweile denk ich, ich hab das Problem falsch angepackt. Ich greif ja nicht zum Handy, weil es so spannend ist, sondern weil mir langweilig ist oder weil ich nervös bin. Jetzt versuch ich eher, diesen Moment zu bemerken. Perfekt ist das noch lange nicht, aber es sind immerhin zwei Stunden weniger am Tag.
D: Ehrlich gesagt halte ich nicht viel von diesen ganzen Tricks, über die man heute in jeder Zeitschrift liest. Ich hab mein Leben lang Süßes gegessen, jeden Nachmittag Kuchen, das war für mich wie ein Ritual. Dann hat mir mein Hausarzt die Blutwerte gezeigt und gesagt: So geht's nicht weiter. Da hab ich von heute auf morgen aufgehört. Schön ist das nicht, das gebe ich zu. Aber die Angst vor den Folgen war stärker als jede Gewohnheit. Bei mir hat nur das geholfen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Statements. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте высказывания. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Markus hält das Umfeld für wichtiger als die Willenskraft.',
              answer: true,
              explanationRu: '«Willenskraft wird total überschätzt. Wenn das Umfeld nicht mitspielt, hat man kaum eine Chance».',
            },
            {
              kind: 'tf',
              statement: 'Hanna steht inzwischen gern früh am Morgen auf.',
              answer: false,
              explanationRu: '«Ein Morgenmensch bin ich zwar immer noch nicht» — она по-прежнему не жаворонок.',
            },
            {
              kind: 'tf',
              statement: 'Dilan verbringt heute weniger Zeit am Smartphone als früher.',
              answer: true,
              explanationRu: '«… es sind immerhin zwei Stunden weniger am Tag».',
            },
            {
              kind: 'tf',
              statement: 'Herr Petersen hat seine Gewohnheit nach und nach verändert.',
              answer: false,
              explanationRu: 'Он бросил «von heute auf morgen» — сразу, а не постепенно.',
            },
          ],
        },
        {
          instructionDe: 'Hören Sie die Statements noch einmal. Wählen Sie die richtige Lösung.',
          instructionRu: 'Прослушайте ещё раз. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was half Markus schließlich, mit dem Rauchen aufzuhören?',
              options: ['eine Nikotinersatztherapie', 'ein Wechsel des Arbeitsumfelds', 'ein ernstes Gespräch mit Kollegen'],
              answer: 1,
              explanationRu: 'Получилось только после перехода в другое отделение, где никто не курит.',
            },
            {
              kind: 'mc',
              question: 'Warum klappt das Laufen bei Hanna jetzt?',
              options: [
                'Sie hat eine bessere App gefunden.',
                'Sie läuft inzwischen lieber abends.',
                'Sie fühlt sich ihrer Nachbarin gegenüber verpflichtet.',
              ],
              answer: 2,
              explanationRu: 'Договорённость с соседкой для неё «verbindlicher als jedes Versprechen, das ich mir selbst gebe».',
            },
            {
              kind: 'mc',
              question: 'Welche Einsicht hat Dilan gewonnen?',
              options: [
                'Er greift oft aus Langeweile oder Nervosität zum Handy.',
                'Das Löschen der Apps ist die einzig wirksame Methode.',
                'Soziale Netzwerke sind für ihn beruflich unverzichtbar.',
              ],
              answer: 0,
              explanationRu: '«… weil mir langweilig ist oder weil ich nervös bin» — удаление приложений не помогло.',
            },
            {
              kind: 'mc',
              question: 'Was hat Herrn Petersen zur Veränderung bewegt?',
              options: [
                'ein Artikel in einer Zeitschrift',
                'die Angst vor gesundheitlichen Folgen',
                'der Wunsch nach einem neuen Ritual',
              ],
              answer: 1,
              explanationRu: 'Врач показал анализы крови: «die Angst vor den Folgen war stärker als jede Gewohnheit». К советам из журналов он относится скептически.',
            },
          ],
        },
      ],
    },
    {
      title: 'Interview: Einsamkeit – mehr als Alleinsein',
      kind: 'dialog',
      speakers: { A: 'Moderator', B: 'Prof. Dr. Katrin Wendt, Sozialpsychologin' },
      situation: 'Sie hören ein Radiointerview mit einer Sozialpsychologin.',
      text: `A: Frau Professor Wendt, Einsamkeit wird inzwischen als gesellschaftliches Problem diskutiert; Großbritannien hat sogar eine eigene Ministerin dafür ernannt. Ist das nicht ein bisschen übertrieben?
B: Das glaube ich nicht. Wir wissen heute, dass chronische Einsamkeit der Gesundheit ähnlich schaden kann wie Rauchen oder starkes Übergewicht. Sie erhöht das Risiko für Herz-Kreislauf-Erkrankungen, für Depressionen und im Alter auch für Demenz. Insofern halte ich es für folgerichtig, dass sich die Politik damit befasst.
A: Viele denken bei Einsamkeit zuerst an ältere Menschen, die allein leben.
B: Das ist ein weit verbreitetes Missverständnis. Zum einen ist Alleinsein nicht dasselbe wie Einsamkeit. Man kann allein leben und sich rundum wohlfühlen – und umgekehrt inmitten einer großen Familie zutiefst einsam sein. Einsamkeit ist das schmerzliche Gefühl, dass die eigenen Beziehungen nicht den eigenen Bedürfnissen entsprechen. Zum anderen zeigen neuere Befragungen, dass sich junge Erwachsene mindestens ebenso häufig einsam fühlen wie Hochbetagte, teilweise sogar häufiger.
A: Woran liegt das?
B: Da kommt einiges zusammen. Junge Menschen befinden sich in einer Phase großer Umbrüche: Auszug, Studium, erster Job, oft ein Umzug in eine fremde Stadt. Hinzu kommt der ständige Vergleich in den sozialen Medien. Wer sieht, wie die anderen scheinbar pausenlos feiern, reisen und Freundschaften pflegen, empfindet sein eigenes soziales Leben schnell als mangelhaft – so reich es objektiv betrachtet auch sein mag.
A: Also sind die sozialen Medien schuld?
B: So einfach ist es nicht. Für manche sind sie eine echte Brücke zu anderen, etwa für Menschen mit chronischen Erkrankungen oder für Angehörige von Minderheiten, die vor Ort niemanden finden, der ihre Erfahrungen teilt. Entscheidend ist, wie man sie nutzt: aktiv, im Austausch mit anderen, oder passiv, indem man nur konsumiert.
A: Was macht es den Betroffenen eigentlich so schwer, aus der Einsamkeit herauszufinden?
B: Einsamkeit verändert die Wahrnehmung. Einsame Menschen sind – evolutionär gesehen durchaus sinnvoll – wachsamer gegenüber sozialen Bedrohungen. Sie deuten neutrale Signale häufiger als Ablehnung. Ein Kollege grüßt nicht zurück, und man denkt sofort: Der mag mich nicht. Daraufhin zieht man sich zurück, was die Einsamkeit wiederum verstärkt.
A: Was hilft denn tatsächlich?
B: Interessanterweise sind Programme, die einfach nur Gelegenheiten für Kontakte schaffen, weniger wirksam als solche, die an genau diesen Denkmustern ansetzen. Wer lernt, seine negativen Erwartungen zu hinterfragen, geht offener auf andere zu. Und dann gibt es noch eine ganz einfache Maßnahme, die ich jedem empfehle: anderen helfen. Ehrenamtliches Engagement stiftet Sinn und Beziehungen zugleich – ohne dass man sich als bedürftig zu erkennen geben muss.
A: Frau Professor Wendt, vielen Dank für das Gespräch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Interview. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прослушайте интервью. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Wie bewertet Frau Wendt das politische Engagement gegen Einsamkeit?',
              options: [
                'als übertriebene Symbolpolitik',
                'als angemessen angesichts der gesundheitlichen Folgen',
                'als Aufgabe, die eher Familien übernehmen sollten',
              ],
              answer: 1,
              explanationRu: 'Хроническое одиночество вредно как курение, поэтому она считает это «folgerichtig».',
            },
            {
              kind: 'mc',
              question: 'Wie unterscheidet sie Einsamkeit vom Alleinsein?',
              options: [
                'Einsamkeit ist das Gefühl, dass die eigenen Beziehungen den Bedürfnissen nicht genügen.',
                'Einsamkeit betrifft nur Menschen, die allein leben.',
                'Alleinsein ist auf Dauer immer gesundheitsschädlich.',
              ],
              answer: 0,
              explanationRu: 'Можно жить одному и чувствовать себя хорошо; одиночество — субъективное ощущение нехватки отношений.',
            },
            {
              kind: 'mc',
              question: 'Welche Rolle spielt der Vergleich in sozialen Medien für junge Menschen?',
              options: [
                'Er motiviert sie, mehr Freundschaften zu knüpfen.',
                'Er betrifft nur Menschen, die bereits isoliert leben.',
                'Er lässt das eigene soziale Leben unzureichend erscheinen, auch wenn es das nicht ist.',
              ],
              answer: 2,
              explanationRu: 'Собственная жизнь кажется «mangelhaft – so reich es objektiv betrachtet auch sein mag».',
            },
            {
              kind: 'mc',
              question: 'Wie beurteilt sie soziale Medien insgesamt?',
              options: [
                'Sie sind die Hauptursache für Einsamkeit.',
                'Ihre Wirkung hängt davon ab, ob man sie aktiv oder passiv nutzt.',
                'Sie helfen ausschließlich Menschen mit chronischen Krankheiten.',
              ],
              answer: 1,
              explanationRu: '«Entscheidend ist, wie man sie nutzt: aktiv … oder passiv». Для некоторых они — настоящий мост к другим.',
            },
            {
              kind: 'mc',
              question: 'Warum fällt es einsamen Menschen schwer, aus ihrer Lage herauszukommen?',
              options: [
                'Sie interpretieren neutrale Signale als Ablehnung und ziehen sich zurück.',
                'Sie haben grundsätzlich kein Interesse an Kontakten.',
                'Es gibt kaum Angebote, die ihnen offenstehen.',
              ],
              answer: 0,
              explanationRu: 'Одинокие люди воспринимают нейтральные сигналы как отказ, отстраняются, и одиночество усиливается.',
            },
            {
              kind: 'mc',
              question: 'Was empfiehlt Frau Wendt?',
              options: [
                'möglichst viele Veranstaltungen zu besuchen, um Menschen kennenzulernen',
                'auf soziale Medien vollständig zu verzichten',
                'sich ehrenamtlich zu engagieren und negative Erwartungen zu hinterfragen',
              ],
              answer: 2,
              explanationRu: 'Эффективнее программы, работающие с моделями мышления; плюс простая мера — помогать другим (волонтёрство).',
            },
          ],
        },
      ],
    },
  ],
};
