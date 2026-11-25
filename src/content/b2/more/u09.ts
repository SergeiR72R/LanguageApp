import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: '___ ihrer Ankunft in Wien besuchte die Malerin sofort das Kunsthistorische Museum.',
      options: ['Nach', 'Nachdem', 'Als', 'Seitdem'],
      answer: 0,
      explanationRu: 'После пропуска стоит именная группа (ihrer Ankunft), поэтому нужен предлог nach + Dativ. Nachdem, als, seitdem — союзы, после них идёт придаточное.',
    },
    {
      type: 'choice',
      prompt: 'Vor der ___ des Museums gab es eine lange Debatte über die Kosten.',
      options: ['Eröffnen', 'Eröffnung', 'Eröffnete', 'Öffnen'],
      answer: 1,
      explanationRu: 'После der нужно существительное женского рода: eröffnen → die Eröffnung.',
    },
    {
      type: 'choice',
      prompt: 'Indem sie die Eintrittspreise senkte, gewann die Oper neues Publikum. → ___ der Eintrittspreise gewann die Oper neues Publikum.',
      options: ['Bei der Senkung', 'Zur Senkung', 'Durch die Senkung', 'Trotz der Senkung'],
      answer: 2,
      explanationRu: 'indem (способ: «тем, что…») ↔ durch + Akkusativ: durch die Senkung der Eintrittspreise.',
    },
    {
      type: 'choice',
      prompt: 'Nach dem ___ des berühmten Dirigenten wurde das Konzert abgesagt.',
      options: ['Sterben', 'Tod', 'Gestorbenen', 'Tot'],
      answer: 1,
      explanationRu: 'Существительное к глаголу sterben — der Tod (не все существительные образуются на -ung!). Tot — прилагательное.',
    },
    {
      type: 'choice',
      prompt: 'Wenn das Wetter gut ist, findet die Aufführung im Freien statt. → Bei ___ Wetter findet die Aufführung im Freien statt.',
      options: ['guten', 'guter', 'gutem', 'gut'],
      answer: 2,
      explanationRu: 'Наречие/предикатив становится прилагательным. bei + Dativ, средний род без артикля → сильное окончание -em: bei gutem Wetter.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz entspricht: „Zur Finanzierung des Festivals sucht die Stadt Sponsoren.“?',
      options: [
        'Weil das Festival finanziert wird, sucht die Stadt Sponsoren.',
        'Nachdem das Festival finanziert wurde, sucht die Stadt Sponsoren.',
        'Obwohl das Festival finanziert ist, sucht die Stadt Sponsoren.',
        'Um das Festival zu finanzieren, sucht die Stadt Sponsoren.',
      ],
      answer: 3,
      explanationRu: 'zu + Dativ (zur Finanzierung) выражает цель ↔ um … zu / damit.',
    },
    {
      type: 'gap',
      prompt: 'Bis ___ Ende der Ausstellung sind es nur noch zwei Wochen.',
      answers: ['zum'],
      explanationRu: 'Союз bis ↔ предлог bis zu + Dativ. das Ende → bis zum Ende (zu + dem).',
    },
    {
      type: 'gap',
      prompt: '___ der Wiedereröffnung des Theaters kommen doppelt so viele Zuschauer.',
      answers: ['Seit'],
      explanationRu: 'seit + Dativ ↔ seitdem: Seit der Wiedereröffnung = Seitdem das Theater wiedereröffnet wurde.',
    },
    {
      type: 'gap',
      prompt: 'Wegen der ___ des Regisseurs musste die Premiere verschoben werden.',
      answers: ['Erkrankung'],
      hintRu: 'erkranken → существительное',
      explanationRu: 'Weil der Regisseur erkrankt war → wegen der Erkrankung des Regisseurs. Подлежащее становится родительным падежом.',
    },
    {
      type: 'gap',
      prompt: 'Bei der ___ der Gäste spielte ein Streichquartett.',
      answers: ['Ankunft'],
      hintRu: 'ankommen → существительное',
      explanationRu: 'ankommen → die Ankunft (нестандартное образование). Bei der Ankunft = Als die Gäste ankamen.',
    },
    {
      type: 'gap',
      prompt: 'Weil die Sängerin krank war, fiel das Konzert aus. → Wegen ___ Krankheit fiel das Konzert aus.',
      answers: ['ihrer'],
      explanationRu: 'Местоимение (sie) превращается в притяжательное: wegen ihrer Krankheit (Genitiv, женский род).',
    },
    {
      type: 'gap',
      prompt: 'Die Ministerin eröffnet die Ausstellung. → Die Eröffnung der Ausstellung ___ die Ministerin ist für 18 Uhr geplant.',
      answers: ['durch'],
      explanationRu: 'Если в именной группе уже есть Genitiv (der Ausstellung), деятель выражается через durch + Akkusativ.',
    },
    {
      type: 'gap',
      prompt: 'Vor Beginn des Konzerts gab es einen kleinen Empfang. → Bevor das Konzert ___, gab es einen kleinen Empfang.',
      answers: ['begann', 'anfing'],
      explanationRu: 'Вербализация: vor + Dativ → bevor. Нужно восстановить спрягаемый глагол (Präteritum: begann/anfing) в конце придаточного.',
    },
    {
      type: 'order',
      words: ['Nach', 'dem Ende', 'der Vorstellung', 'applaudierte', 'das Publikum', 'minutenlang.'],
      translationRu: 'После окончания спектакля публика аплодировала несколько минут.',
      explanationRu: 'Именная группа nach dem Ende der Vorstellung занимает первое место, спрягаемый глагол — второе.',
    },
    {
      type: 'order',
      words: ['Ohne', 'die Unterstützung', 'der Sponsoren', 'hätte', 'das Festival', 'nicht', 'stattfinden', 'können.'],
      translationRu: 'Без поддержки спонсоров фестиваль не смог бы состояться.',
      explanationRu: 'ohne + именная группа = «если бы не было…». Повторение: Konjunktiv II прошедшего времени с модальным глаголом — hätte … stattfinden können.',
    },
    {
      type: 'order',
      words: ['Nachdem', 'das Gemälde', 'gestohlen', 'worden', 'war,', 'wurde', 'das Museum', 'geschlossen.'],
      translationRu: 'После того как картину украли, музей закрыли.',
      explanationRu: 'Вербализация «Nach dem Diebstahl des Gemäldes»: nachdem + пассив в Plusquamperfekt (gestohlen worden war).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложение именной группой с bei.',
      prompt: 'Als das Museum eröffnet wurde, kamen über 3.000 Besucher.',
      answers: ['Bei der Eröffnung des Museums kamen über 3.000 Besucher.'],
      explanationRu: 'als ↔ bei + Dativ; eröffnen → die Eröffnung; подлежащее das Museum → Genitiv des Museums.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложение именной группой с trotz.',
      prompt: 'Obwohl die Kritiken negativ waren, war die Inszenierung ein großer Erfolg.',
      answers: [
        'Trotz der negativen Kritiken war die Inszenierung ein großer Erfolg.',
        'Trotz negativer Kritiken war die Inszenierung ein großer Erfolg.',
      ],
      explanationRu: 'obwohl ↔ trotz + Genitiv. Предикатив negativ становится определением: der negativen Kritiken / negativer Kritiken.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените именную группу придаточным предложением с nachdem (в пассиве).',
      prompt: 'Nach der Restaurierung des Altars durch Fachleute wurde die Kirche wieder geöffnet.',
      answers: [
        'Nachdem der Altar von Fachleuten restauriert worden war, wurde die Kirche wieder geöffnet.',
        'Nachdem der Altar durch Fachleute restauriert worden war, wurde die Kirche wieder geöffnet.',
        'Nachdem Fachleute den Altar restauriert hatten, wurde die Kirche wieder geöffnet.',
      ],
      explanationRu: 'Genitiv (des Altars) становится подлежащим пассива, durch Fachleute → von Fachleuten. Предшествование → Plusquamperfekt: restauriert worden war.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените именную группу с zur инфинитивным оборотом um … zu.',
      prompt: 'Zur Rettung des alten Kinos gründeten die Anwohner einen Verein.',
      answers: [
        'Um das alte Kino zu retten, gründeten die Anwohner einen Verein.',
        'Die Anwohner gründeten einen Verein, um das alte Kino zu retten.',
      ],
      explanationRu: 'zu + Dativ (цель) ↔ um … zu. Genitiv des alten Kinos становится прямым дополнением: das alte Kino retten.',
    },
  ],
  reading: [
    {
      title: 'Besucherordnung des Stadtmuseums',
      textType: 'Hausordnung',
      texts: [
        {
          label: '1',
          body: 'Das Museum ist dienstags bis sonntags von 10 bis 18 Uhr geöffnet, donnerstags bis 21 Uhr. Montags bleibt es geschlossen, außer an Feiertagen. Einlass ist bis 30 Minuten vor Schließung. An Heiligabend und Silvester gelten verkürzte Öffnungszeiten, die rechtzeitig auf unserer Website bekannt gegeben werden.',
        },
        {
          label: '2',
          body: 'Mäntel, große Taschen, Rucksäcke und Regenschirme sind vor dem Betreten der Ausstellungsräume an der Garderobe abzugeben. Die Nutzung der Schließfächer ist kostenlos; Sie benötigen dafür lediglich eine 1-Euro-Münze, die Sie bei der Rückgabe des Schlüssels zurückerhalten. Für Wertgegenstände übernimmt das Museum keine Haftung.',
        },
        {
          label: '3',
          body: 'Das Fotografieren ist für private Zwecke ohne Blitz und Stativ gestattet. In der Sonderausstellung gilt aufgrund von Leihverträgen mit anderen Museen ein generelles Fotoverbot. Film- und Fotoaufnahmen für kommerzielle Zwecke bedürfen einer vorherigen schriftlichen Genehmigung durch die Museumsleitung.',
        },
        {
          label: '4',
          body: 'Zum Schutz der Kunstwerke halten Sie bitte stets ausreichend Abstand zu den Exponaten. Das Berühren der Objekte ist – mit Ausnahme der gekennzeichneten Tastobjekte für blinde und sehbehinderte Menschen – nicht erlaubt. Essen und Trinken ist ausschließlich im Museumscafé gestattet.',
        },
        {
          label: '5',
          body: 'Gruppen ab zehn Personen werden gebeten, ihren Besuch mindestens zwei Wochen im Voraus anzumelden. Schulklassen erhalten freien Eintritt; pro zehn Schülerinnen und Schüler muss eine Lehrkraft die Klasse während des gesamten Besuchs begleiten. Führungen für Gruppen können in sechs Sprachen gebucht werden.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Sie lesen die Besucherordnung eines Museums. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте правила для посетителей музея. Подберите заголовок к каждому разделу. Два заголовка лишние (формат Goethe B2 Lesen, Teil 5).',
          options: [
            'Schutz der Ausstellungsstücke',
            'Ermäßigungen für Studierende und Senioren',
            'Wann Sie uns besuchen können',
            'Regeln für Foto- und Filmaufnahmen',
            'Besuche mit Gruppen und Schulklassen',
            'Barrierefreier Zugang für Rollstuhlfahrer',
            'Garderobe und Gepäck',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 2,
              explanationRu: 'Часы работы, выходной день, последний вход — когда можно посетить музей.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 6,
              explanationRu: 'Пальто, сумки, рюкзаки сдают в гардероб; шкафчики для хранения.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 3,
              explanationRu: 'Правила фотосъёмки: частные фото без вспышки, запрет на выставке, коммерческая съёмка с разрешения.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 0,
              explanationRu: '«Zum Schutz der Kunstwerke»: держать дистанцию, не трогать экспонаты. Тактильные объекты упомянуты лишь как исключение — это не тема доступа для колясок.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 4,
              explanationRu: 'Регистрация групп, бесплатный вход для школьных классов, экскурсии на шести языках.',
            },
          ],
        },
      ],
    },
    {
      title: 'Freier Eintritt ins Museum?',
      textType: 'Meinungen',
      texts: [
        {
          label: 'Felix, 29, Kunststudent',
          body: 'Ich bin für freien Eintritt in alle staatlichen Museen. Als Student kann ich mir nicht jede Woche 15 Euro leisten, und gerade wir brauchen den direkten Kontakt zu den Originalen. In London habe ich erlebt, wie selbstverständlich die Menschen dort in der Mittagspause kurz ins Museum gehen, weil es nichts kostet. So wird Kunst ein Teil des Alltags. Und finanziert werden die Museen ohnehin schon von unseren Steuern.',
        },
        {
          label: 'Ursula, 55, Museumsdirektorin',
          body: 'Freier Eintritt klingt sympathisch, aber er hat seinen Preis. Bei uns machen die Eintrittsgelder fast ein Viertel des Budgets aus. Fielen sie weg, müssten wir entweder bei den Ausstellungen sparen, oder die Politik müsste die Lücke schließen – und darauf kann man sich nicht verlassen. Außerdem zeigen Untersuchungen, dass bei freiem Eintritt vor allem diejenigen häufiger kommen, die sowieso schon regelmäßig Museen besuchen.',
        },
        {
          label: 'Petra, 41, Mutter von drei Kindern',
          body: 'Für Kinder ist der Eintritt bei uns zum Glück schon frei, aber für uns Eltern summiert sich das trotzdem. Mir würde schon ein kostenloser Sonntag im Monat reichen – den gibt es in einigen Städten bereits, und die Museen sind an diesem Tag immer voll. Viel wichtiger als der Preis ist für mich aber, dass die Ausstellungen kindgerecht gestaltet sind. Wenn sich meine Kinder nach zehn Minuten langweilen, nützt mir auch der freie Eintritt nichts.',
        },
        {
          label: 'Ralf, 67, ehrenamtlicher Museumsführer',
          body: 'Seit meiner Pensionierung führe ich Gruppen durch unser Heimatmuseum. Was ich beobachte: Wer nicht kommt, bleibt meistens nicht wegen des Geldes weg, sondern weil er glaubt, Museen seien nichts für ihn. Gegen diese Schwellenangst hilft kein Gratiseintritt, sondern nur persönliche Ansprache – etwa durch Angebote in Stadtteilzentren, Vereinen oder Seniorenheimen. Wir müssen zu den Menschen gehen, nicht umgekehrt.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Meinungen. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте мнения. Какое утверждение относится к какому человеку? Одного человека можно выбирать несколько раз (формат Goethe B2 Lesen, Teil 1).',
          options: ['Felix', 'Ursula', 'Petra', 'Ralf'],
          items: [
            {
              kind: 'match',
              prompt: 'Ohne Eintrittsgelder wäre die Finanzierung eines Museums unsicher.',
              answer: 1,
              explanationRu: 'Урсула: входная плата — почти четверть бюджета, а на политиков нельзя положиться.',
            },
            {
              kind: 'match',
              prompt: 'Kostenloser Eintritt würde Museumsbesuche zu etwas Alltäglichem machen.',
              answer: 0,
              explanationRu: 'Феликс: «So wird Kunst ein Teil des Alltags» — пример с Лондоном.',
            },
            {
              kind: 'match',
              prompt: 'Ein kostenloser Tag pro Monat wäre schon ausreichend.',
              answer: 2,
              explanationRu: 'Петра: «Mir würde schon ein kostenloser Sonntag im Monat reichen».',
            },
            {
              kind: 'match',
              prompt: 'Viele Menschen meiden Museen aus anderen Gründen als dem Preis.',
              answer: 3,
              explanationRu: 'Ральф: люди не приходят не из-за денег, а потому что думают, что музеи «не для них».',
            },
            {
              kind: 'match',
              prompt: 'Die Bürgerinnen und Bürger bezahlen die Museen bereits über ihre Steuern.',
              answer: 0,
              explanationRu: 'Феликс: «finanziert werden die Museen ohnehin schon von unseren Steuern».',
            },
            {
              kind: 'match',
              prompt: 'Die Gestaltung der Ausstellungen ist wichtiger als der Eintrittspreis.',
              answer: 2,
              explanationRu: 'Петра: важнее цены, чтобы выставки были интересны детям.',
            },
            {
              kind: 'match',
              prompt: 'Vom freien Eintritt profitieren vor allem Menschen, die ohnehin oft ins Museum gehen.',
              answer: 1,
              explanationRu: 'Урсула ссылается на исследования: чаще приходят те, кто и так регулярно ходит в музеи.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person hat im Ausland positive Erfahrungen gemacht.',
              answer: 0,
              explanationRu: 'Феликс рассказывает о своём опыте в Лондоне.',
            },
            {
              kind: 'match',
              prompt: 'Museen sollten mit ihren Angeboten aktiv auf die Menschen zugehen.',
              answer: 3,
              explanationRu: 'Ральф: «Wir müssen zu den Menschen gehen, nicht umgekehrt».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Kultur kontrovers: Muss das Theater sparen?',
      kind: 'discussion',
      speakers: { A: 'Moderator', B: 'Sabine Hartwig, Intendantin des Stadttheaters', C: 'Markus Feld, Stadtrat' },
      situation: 'Sie hören eine Radiodiskussion über mögliche Kürzungen beim Stadttheater.',
      playCount: 1,
      text: `A: Willkommen zu „Kultur kontrovers“. Unsere Stadt muss sparen, und auf der Liste der möglichen Kürzungen steht auch das Stadttheater. Darüber diskutiere ich mit Sabine Hartwig, der Intendantin des Stadttheaters, und mit Markus Feld, dem finanzpolitischen Sprecher seiner Fraktion im Stadtrat. Herr Feld, warum ausgerechnet das Theater?
C: Weil wir ehrlich sein müssen. Jede Eintrittskarte im Theater wird mit fast 150 Euro aus Steuergeldern subventioniert. Gleichzeitig fehlt Geld für die Sanierung von Schulen und Kitas. Bei der Verteilung knapper Mittel müssen wir Prioritäten setzen.
B: Diese Rechnung höre ich immer wieder, und sie ist irreführend. Ein Theater ist ja nicht nur ein Ort, an dem abends Vorstellungen stattfinden. Wir haben Theaterpädagogik, wir arbeiten mit über dreißig Schulen zusammen, es gibt Kurse für Jugendliche und für Menschen mit Behinderung. All das taucht in dieser Zahl gar nicht auf.
A: Aber man hört doch oft, dass vor allem ein gebildetes, wohlhabendes Publikum ins Theater geht.
B: Das war vielleicht vor zwanzig Jahren so. Heute haben wir ein Sozialticket für fünf Euro, und bei unseren Inszenierungen im Stadtteilzentrum sitzen Menschen, die vorher noch nie ein Theater betreten haben.
C: Das erkenne ich ausdrücklich an. Trotzdem: Die Auslastung des großen Hauses lag in der letzten Saison bei gerade einmal 68 Prozent. Ich frage mich, ob man nicht mit weniger Premieren genauso viel erreichen könnte.
B: Weniger Premieren bedeuten weniger Abwechslung, und dann kommen noch weniger Zuschauer. Das ist ein Teufelskreis.
A: Herr Feld, was würde eine Kürzung konkret bedeuten?
C: Wir sprechen über zehn Prozent des Zuschusses, verteilt auf drei Jahre. Niemand will das Theater schließen. Aber auch die Kultur muss einen Beitrag zur Sanierung des Haushalts leisten.
B: Zehn Prozent klingen nach wenig. Aber da der größte Teil unseres Budgets aus festen Personalkosten besteht, müssten wir genau bei den Projekten kürzen, die nicht zum Pflichtprogramm gehören – also bei der Arbeit mit Schulen und Jugendlichen.
A: Gibt es einen Kompromiss?
C: Ich könnte mir vorstellen, dass das Theater stärker mit privaten Sponsoren zusammenarbeitet.
B: Dafür sind wir offen. Aber Sponsoren finanzieren lieber glanzvolle Premieren als Theaterkurse in sozialen Brennpunkten. Die Grundfinanzierung muss öffentlich bleiben.
A: Vielen Dank Ihnen beiden.`,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слышите дискуссию один раз. Кто что говорит? (формат Goethe B2 Hören, Teil 3)',
          options: ['Moderator', 'Frau Hartwig', 'Herr Feld'],
          items: [
            {
              kind: 'match',
              prompt: 'Jeder Theaterbesuch wird mit einem hohen Betrag aus öffentlichen Mitteln bezahlt.',
              answer: 2,
              explanationRu: 'Фельд: каждый билет субсидируется почти на 150 евро из налогов.',
            },
            {
              kind: 'match',
              prompt: 'Die Arbeit eines Theaters umfasst mehr als die Abendvorstellungen.',
              answer: 1,
              explanationRu: 'Хартвиг: театральная педагогика, сотрудничество со школами, курсы для молодёжи.',
            },
            {
              kind: 'match',
              prompt: 'Es gibt das Vorurteil, Theater sei vor allem etwas für Wohlhabende.',
              answer: 0,
              explanationRu: 'Модератор: «man hört doch oft, dass vor allem ein gebildetes, wohlhabendes Publikum ins Theater geht».',
            },
            {
              kind: 'match',
              prompt: 'Mit einem kleineren Programm ließe sich vielleicht dasselbe erreichen.',
              answer: 2,
              explanationRu: 'Фельд: можно ли с меньшим числом премьер достичь того же.',
            },
            {
              kind: 'match',
              prompt: 'Kürzungen würden vor allem die Bildungsangebote treffen.',
              answer: 1,
              explanationRu: 'Хартвиг: из-за постоянных расходов на персонал пришлось бы сокращать работу со школами и молодёжью.',
            },
            {
              kind: 'match',
              prompt: 'Geldgeber aus der Wirtschaft unterstützen nicht alle Projekte gleich gern.',
              answer: 1,
              explanationRu: 'Хартвиг: спонсоры охотнее финансируют блестящие премьеры, чем курсы в проблемных районах.',
            },
          ],
        },
      ],
    },
    {
      title: 'Blick hinter die Kulissen: Die Arbeit einer Restauratorin',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag einer Restauratorin in einem Kunstmuseum.',
      playCount: 2,
      text: `Guten Abend, meine Damen und Herren. Ich freue mich, dass Sie im Rahmen unserer Reihe „Blick hinter die Kulissen“ so zahlreich gekommen sind. Ich arbeite seit fast zwanzig Jahren als Restauratorin für Gemälde, und heute möchte ich Ihnen zeigen, was in unserer Werkstatt eigentlich passiert – und dabei mit einem verbreiteten Irrtum aufräumen.

Viele Menschen glauben, Restauratoren würden alte Bilder „wie neu“ machen. Genau das ist aber nicht unser Ziel. Unsere wichtigste Aufgabe ist die Erhaltung des Kunstwerks, nicht seine Verschönerung. Jeder Eingriff muss so gering wie möglich sein, und er muss sich später wieder rückgängig machen lassen. Das ist ein Grundprinzip unseres Berufs.

Bevor wir überhaupt etwas an einem Bild verändern, steht eine gründliche Untersuchung. Mithilfe von Röntgen- und Infrarotaufnahmen können wir unter die Oberfläche schauen. Dabei erleben wir manchmal echte Überraschungen. Bei der Untersuchung eines Porträts aus dem 17. Jahrhundert haben wir zum Beispiel entdeckt, dass der Maler ursprünglich eine ganz andere Person gemalt und das Bild später übermalt hatte. Solche Funde sind für die Kunstgeschichte ungeheuer wertvoll.

Der zweite Schritt ist die Reinigung. Im Lauf der Jahrhunderte lagern sich Staub, Ruß und vor allem vergilbter Firnis auf den Bildern ab. Firnis ist eine Schutzschicht, die früher auf fast alle Gemälde aufgetragen wurde. Mit der Zeit wird er gelb und dunkel. Wenn wir ihn vorsichtig abnehmen, staunen die Leute oft, wie farbig ein Bild ursprünglich war. Die Reinigung eines großen Gemäldes kann übrigens mehrere Monate dauern – wir arbeiten zum Teil mit Wattestäbchen, Zentimeter für Zentimeter.

Erst danach kommt die Retusche, also das Schließen von Fehlstellen. Und jetzt kommt das, was Besucher am meisten erstaunt: Wir malen nie über das Original. Wir füllen nur die Lücken, und zwar mit Farben, die sich jederzeit wieder entfernen lassen. Aus der Nähe kann ein Fachmann unsere Ergänzungen immer erkennen, aus normaler Entfernung sollen sie aber nicht stören.

Zum Schluss möchte ich noch auf ein Problem hinweisen, das mir große Sorgen macht. Die größte Gefahr für Kunstwerke ist heute nicht der Zahn der Zeit, sondern das Klima in den Ausstellungsräumen. Schwankungen der Temperatur und der Luftfeuchtigkeit lassen Holz und Leinwand arbeiten, und die Farbschicht bekommt Risse. Viele kleinere Museen können sich moderne Klimaanlagen schlicht nicht leisten. Hier ist die Politik gefragt, denn die Erhaltung unseres Kulturerbes ist eine Aufgabe der gesamten Gesellschaft.

Und nun lade ich Sie herzlich ein, mit mir in die Werkstatt zu kommen. Dort zeige ich Ihnen das Porträt, von dem ich eben erzählt habe.`,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите доклад два раза. Выберите правильный ответ (формат Goethe B2 Hören, Teil 4).',
          items: [
            {
              kind: 'mc',
              question: 'Was möchte die Restauratorin in ihrem Vortrag unter anderem tun?',
              options: [
                'Einen verbreiteten Irrtum über ihren Beruf korrigieren.',
                'Neue Mitarbeiter für die Werkstatt gewinnen.',
                'Eine neue Ausstellung eröffnen.',
              ],
              answer: 0,
              explanationRu: '«… und dabei mit einem verbreiteten Irrtum aufräumen».',
            },
            {
              kind: 'mc',
              question: 'Was ist laut der Referentin das wichtigste Ziel einer Restaurierung?',
              options: [
                'Das Bild wieder wie neu aussehen zu lassen.',
                'Das Kunstwerk zu erhalten.',
                'Den Marktwert des Bildes zu steigern.',
              ],
              answer: 1,
              explanationRu: '«Unsere wichtigste Aufgabe ist die Erhaltung des Kunstwerks, nicht seine Verschönerung».',
            },
            {
              kind: 'mc',
              question: 'Was gilt für jeden Eingriff?',
              options: [
                'Er muss von der Museumsleitung genehmigt werden.',
                'Er muss möglichst schnell erfolgen.',
                'Er muss sich wieder rückgängig machen lassen.',
              ],
              answer: 2,
              explanationRu: 'Основной принцип: вмешательство минимально и обратимо.',
            },
            {
              kind: 'mc',
              question: 'Was wurde bei der Untersuchung des Porträts entdeckt?',
              options: [
                'Das Bild ist eine Fälschung.',
                'Unter der Oberfläche war ursprünglich eine andere Person gemalt.',
                'Das Bild stammt aus einem anderen Jahrhundert.',
              ],
              answer: 1,
              explanationRu: 'Художник сначала написал другого человека, а потом записал его.',
            },
            {
              kind: 'mc',
              question: 'Warum wirken alte Gemälde oft dunkel?',
              options: [
                'Weil die Maler früher dunkle Farben bevorzugten.',
                'Weil die Schutzschicht mit der Zeit vergilbt.',
                'Weil sie zu viel Sonnenlicht ausgesetzt waren.',
              ],
              answer: 1,
              explanationRu: 'Лак (Firnis) со временем желтеет и темнеет.',
            },
            {
              kind: 'mc',
              question: 'Wie lange kann die Reinigung eines großen Gemäldes dauern?',
              options: ['Einige Tage.', 'Mehrere Wochen.', 'Mehrere Monate.'],
              answer: 2,
              explanationRu: '«Die Reinigung eines großen Gemäldes kann … mehrere Monate dauern».',
            },
            {
              kind: 'mc',
              question: 'Was gilt für die Retusche?',
              options: [
                'Das Original wird an beschädigten Stellen übermalt.',
                'Die Ergänzungen sind auch für Fachleute unsichtbar.',
                'Fehlstellen werden mit Farben gefüllt, die man wieder entfernen kann.',
              ],
              answer: 2,
              explanationRu: 'Оригинал никогда не записывают; пробелы заполняют удаляемыми красками, специалист видит дополнения вблизи.',
            },
            {
              kind: 'mc',
              question: 'Was ist laut der Referentin heute die größte Gefahr für Kunstwerke?',
              options: ['Schwankungen des Raumklimas.', 'Diebstahl.', 'Zu viele Besucher.'],
              answer: 0,
              explanationRu: 'Главная угроза — колебания температуры и влажности в выставочных залах.',
            },
          ],
        },
      ],
    },
  ],
};
