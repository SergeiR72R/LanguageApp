import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Die neue Studie ___ die These, dass sich immer mehr Menschen einsam fühlen.',
      options: ['belegt', 'verlegt', 'erlegt', 'zerlegt'],
      answer: 0,
      explanationRu:
        '«belegen» = подтверждать (данными). «verlegen» — переносить/терять, «erlegen» — убить на охоте, «zerlegen» — разбирать на части.',
    },
    {
      type: 'gap',
      prompt: 'Ist der Plan in so kurzer Zeit überhaupt ___? (umsetzen → прилагательное)',
      answers: ['umsetzbar'],
      explanationRu: 'Суффикс «-bar» от переходного глагола: «umsetzbar» = «kann umgesetzt werden» (осуществимый).',
    },
    {
      type: 'choice',
      prompt: 'Welches Wort ist feminin?',
      options: ['Wachstum', 'Erkenntnis', 'Ergebnis', 'Gemeinwohl'],
      answer: 1,
      explanationRu:
        'Ловушка: слова на «-nis» бывают женского (die Erkenntnis) и среднего рода (das Ergebnis). «das Wachstum» (-tum обычно ср. р.), «das Gemeinwohl» (по последнему компоненту «das Wohl»).',
    },
    {
      type: 'gap',
      prompt: 'Durch geschickte Kompromisse ließ sich der Konflikt schließlich ___. (scharf → смягчить)',
      answers: ['entschärfen'],
      explanationRu: 'Приставка «ent-» означает устранение: «entschärfen» = лишить остроты, разрядить (конфликт).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig? (= Многие фирмы переводят производство на электромобили.)',
      options: [
        'Viele Firmen stellen ihre Produktion auf E-Autos um.',
        'Viele Firmen umstellen ihre Produktion auf E-Autos.',
        'Viele Firmen stellen ihre Produktion auf E-Autos unter.',
        'Viele Firmen umstellen ihre Produktion um.',
      ],
      answer: 0,
      explanationRu:
        '«umstellen auf + Akk» (перестраивать, переводить на) — отделяемый глагол с ударением на «um». Неотделяемое «umstéllen» значит «окружить».',
    },
    {
      type: 'gap',
      prompt: 'Der Bericht muss vor der Veröffentlichung noch gründlich ___ werden. (доработать)',
      answers: ['überarbeitet'],
      explanationRu:
        '«überarbeiten» (неотделяемый) = дорабатывать, редактировать. Ловушка для русскоговорящих: это не «переработать» в смысле «утилизировать».',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Sie hat sich im letzten Jahr völlig überarbeitet.“?',
      options: [
        'Sie hat ihren Text vollständig verbessert.',
        'Sie hat zu viel gearbeitet und ist erschöpft.',
        'Sie hat eine neue Stelle angetreten.',
        'Sie hat ihre Überstunden abgebaut.',
      ],
      answer: 1,
      explanationRu: 'Возвратное «sich überarbeiten» = переутомиться от работы. Без «sich» — «доработать (текст)».',
    },
    {
      type: 'gap',
      prompt: 'Ein ___ Grundeinkommen würde ohne jede Gegenleistung an alle gezahlt. (Bedingung + -los)',
      answers: ['bedingungsloses'],
      explanationRu:
        'Соединительный элемент «-s-»: «Bedingung + s + los». После неопределённого артикля в ср. р. (das Grundeinkommen) — окончание «-es».',
    },
    {
      type: 'gap',
      prompt: 'Die Regierung will das Gesetz trotz aller Widerstände im Parlament ___. (провести, добиться принятия)',
      answers: ['durchsetzen', 'durchbringen'],
      explanationRu: '«durchsetzen» (отделяемый, ударение на «durch») = добиться, провести вопреки сопротивлению.',
    },
    {
      type: 'choice',
      prompt: 'Welche Formulierung leitet in einer Erörterung ein Gegenargument ein?',
      options: [
        'Abschließend lässt sich festhalten, dass …',
        'Zunächst möchte ich erläutern, worum es geht.',
        'Dem lässt sich allerdings entgegenhalten, dass …',
        'Wie bereits erwähnt, …',
      ],
      answer: 2,
      explanationRu: '«Dem lässt sich entgegenhalten, dass …» вводит контраргумент (антитезис). Остальные — для заключения, введения и отсылки.',
    },
    {
      type: 'gap',
      prompt: '___ man die Argumente sorgfältig gegeneinander ab, so überwiegen die Vorteile.',
      answers: ['Wägt'],
      hintRu: 'abwägen; условие без «wenn» (повторение B2-10)',
      explanationRu:
        'Условное предложение без «wenn»: спрягаемый глагол на первом месте — «Wägt man … ab, so …». Отделяемая приставка «ab» — в конце.',
    },
    {
      type: 'choice',
      prompt: 'Der Streit um den richtigen Kurs droht die Partei zu ___.',
      options: ['zerreißen', 'verreißen', 'entreißen', 'erreißen'],
      answer: 0,
      explanationRu:
        '«zer-» = разрушение, распад: «zerreißen» (разорвать). «verreißen» — разгромить (в рецензии), «entreißen» — вырвать у кого-л.; «erreißen» не существует.',
    },
    {
      type: 'gap',
      prompt: 'Die zunehmende ___ der Innenstädte bereitet vielen Kommunen Sorgen. (veröden → существительное)',
      answers: ['Verödung'],
      explanationRu: 'Отглагольное существительное на «-ung» (женский род): «veröden» → «die Verödung» (запустение).',
    },
    {
      type: 'order',
      words: ['Es', 'gilt,', 'die', 'Spaltung', 'der', 'Gesellschaft', 'zu', 'überwinden.'],
      translationRu: 'Необходимо преодолеть раскол общества.',
      explanationRu:
        '«überwinden» — неотделяемый глагол, поэтому «zu» стоит перед ним отдельно: «zu überwinden» (а не «überzuwinden»).',
    },
    {
      type: 'order',
      words: ['Es', 'ist', 'schwierig,', 'den', 'Stau', 'zu', 'umfahren.'],
      translationRu: 'Объехать пробку трудно.',
      explanationRu:
        '«umfáhren» (объехать) — неотделяемый: «zu umfahren». Ср. отделяемое «úmfahren» (сбить): «umzufahren».',
    },
    {
      type: 'order',
      words: ['Die', 'Stadt', 'plant,', 'die', 'alte', 'Kaserne', 'in', 'Wohnungen', 'umzubauen.'],
      translationRu: 'Город планирует перестроить старые казармы в жильё.',
      explanationRu: '«umbauen» — отделяемый, поэтому «zu» стоит внутри: «umzubauen». Инфинитивная группа — в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените конструкцию прилагательным на «-bar».',
      prompt: 'Die Mieten in der Innenstadt können kaum noch bezahlt werden.',
      answers: ['Die Mieten in der Innenstadt sind kaum noch bezahlbar.'],
      explanationRu: '«können bezahlt werden» = «sind bezahlbar». Наречия «kaum noch» сохраняются.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените конструкцию с «man» прилагательным с приставкой «un-» и суффиксом «-bar».',
      prompt: 'Man kann diese Entwicklung nicht mehr umkehren.',
      answers: ['Diese Entwicklung ist unumkehrbar.', 'Diese Entwicklung ist nicht mehr umkehrbar.'],
      explanationRu: '«nicht umkehren können» → «unumkehrbar» (необратимый): «un-» передаёт отрицание, «-bar» — возможность.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените генитивную группу сложным словом.',
      prompt: 'Die Bedingungen der Arbeit in der Pflege müssen dringend besser werden.',
      answers: ['Die Arbeitsbedingungen in der Pflege müssen dringend besser werden.'],
      explanationRu:
        '«die Bedingungen der Arbeit» → «die Arbeitsbedingungen» с соединительным «-s-». Род и число определяет последний компонент.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените глагол с предлогом переходным глаголом с приставкой «be-».',
      prompt: 'Viele Bürgerinnen und Bürger klagen über die steigenden Mieten.',
      answers: ['Viele Bürgerinnen und Bürger beklagen die steigenden Mieten.'],
      explanationRu: 'Приставка «be-» делает глагол переходным: «über etw. klagen» → «etw. beklagen» (прямое дополнение в Akk.).',
    },
  ],
  reading: [
    {
      title: 'Kurze Wege für alle: die 15-Minuten-Stadt',
      textType: 'Sachtext mit Lücken',
      texts: [
        {
          body: `Morgens mit dem Auto im Stau zur Arbeit, mittags in die Kantine eines Gewerbegebiets, abends zum Einkaufen in ein Einkaufszentrum am Stadtrand – für Millionen Menschen ist das Alltag. Der in Paris lehrende Stadtforscher Carlos Moreno hält dieses Modell für überholt. [1] Arbeit, Einkauf, Schule, Arztpraxis, Grünflächen und Kultur sollen zu Fuß oder mit dem Fahrrad innerhalb einer Viertelstunde erreichbar sein.

Neu ist der Gedanke nicht. Bis weit ins 20. Jahrhundert hinein waren die meisten Städte genau so organisiert. [2] Wohnen, Arbeiten und Erholung wurden räumlich voneinander getrennt, breite Straßen verbanden die einzelnen Zonen. Was damals als Fortschritt galt, hat Folgen, mit denen die Kommunen bis heute zu kämpfen haben: Verkehrslärm, verödete Innenstädte und Wohnviertel, in denen tagsüber kaum jemand anzutreffen ist.

Paris hat unter Bürgermeisterin Anne Hidalgo begonnen, das Konzept umzusetzen. Hunderte Kilometer Radwege wurden angelegt, Parkplätze in Grünflächen umgewandelt, Schulhöfe am Wochenende für die Nachbarschaft geöffnet. [3] Auch in Deutschland greifen immer mehr Städte das Leitbild der kurzen Wege auf.

Doch das Konzept stößt nicht überall auf Begeisterung. [4] Im Internet kursieren sogar Behauptungen, die 15-Minuten-Stadt sei ein Plan, die Menschen in ihren Vierteln einzusperren. Diese Befürchtungen sind unbegründet – niemand soll daran gehindert werden, sich frei zu bewegen. Ernster zu nehmen ist ein anderer Einwand: Wenn Viertel attraktiver werden, steigen dort die Mieten. [5] Am Ende profitieren dann womöglich vor allem jene, die sich ohnehin eine gute Wohnlage leisten können.

Hinzu kommt, dass das Modell nicht für jeden Raum gleichermaßen geeignet ist. In dicht besiedelten Großstädten mag eine Viertelstunde genügen. [6] Dort gilt es, andere Lösungen zu finden, etwa mobile Arztpraxen, Dorfläden in Bürgerhand oder einen besser getakteten öffentlichen Nahverkehr.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Er plädiert für Stadtviertel, in denen alles Wesentliche nah beieinanderliegt.',
            'Erst die autogerechte Planung der Nachkriegszeit hat diese Ordnung aufgelöst.',
            'Die Luftqualität in der Stadt hat sich seither messbar verbessert.',
            'Vor allem Pendler und Geschäftsleute befürchten Nachteile, wenn der Autoverkehr eingeschränkt wird.',
            'Wer dort bisher günstig gewohnt hat, kann sich seine Wohnung dann unter Umständen nicht mehr leisten.',
            'In ländlichen Regionen dagegen sind Schule, Supermarkt und Hausarzt oft viele Kilometer entfernt.',
            'Deshalb hat die Stadt den Autoverkehr inzwischen vollständig verboten.',
            'Die meisten Bewohner ziehen deshalb mittlerweile aufs Land.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 0,
              explanationRu: 'Морено считает старую модель устаревшей и предлагает районы, где всё рядом; затем перечисляется, что должно быть в 15 минутах.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 1,
              explanationRu: '«Erst die autogerechte Planung … hat diese Ordnung aufgelöst» — затем описывается разделение зон.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 2,
              explanationRu: 'После перечисления мер в Париже — их результат: качество воздуха улучшилось. Полный запрет автомобилей в тексте не упоминается.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 3,
              explanationRu: '«stößt nicht überall auf Begeisterung» → кто именно опасается недостатков: пендлеры и предприниматели.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 4,
              explanationRu: 'Рост аренды → прежние жильцы не смогут платить; дальше: выигрывают те, кто и так может позволить хорошее жильё.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 5,
              explanationRu: 'Противопоставление крупным городам — сельская местность; «Dort» в следующем предложении относится к ней.',
            },
          ],
        },
      ],
    },
    {
      title: 'Ein Pflichtjahr für alle?',
      textType: 'Kommentar',
      texts: [
        {
          heading: 'Kommentar: Zusammenhalt lässt sich nicht verordnen',
          body: `Kaum eine Idee erlebt in Deutschland so regelmäßig ein Comeback wie die eines verpflichtenden Gesellschaftsjahres. Alle jungen Menschen, so der Vorschlag, sollten nach der Schule ein Jahr lang in Pflegeheimen, Kitas, beim Katastrophenschutz oder bei der Bundeswehr Dienst tun. Das stärke den Zusammenhalt, bringe Menschen aus unterschiedlichen Milieus zusammen und entlaste zugleich Einrichtungen, in denen das Personal knapp ist.

Ich gestehe, dass mich dieser Gedanke anfangs überzeugt hat. Unsere Gesellschaft driftet auseinander; viele Jugendliche bewegen sich nahezu ausschließlich unter ihresgleichen. Ein Jahr, in dem die Abiturientin aus dem Villenviertel neben dem Hauptschüler aus der Hochhaussiedlung Rollstühle schiebt, klingt nach einem wirksamen Mittel gegen die Spaltung.

Bei genauerem Hinsehen überwiegen jedoch die Bedenken. Da ist zunächst die rechtliche Frage: Das Grundgesetz verbietet Zwangsarbeit, Ausnahmen sind eng begrenzt. Für ein Pflichtjahr müsste die Verfassung geändert werden – mit Zweidrittelmehrheit. Schwerer wiegt für mich allerdings ein anderer Einwand. Ausgerechnet die junge Generation, die in der Pandemie auf vieles verzichten musste und die die Lasten des demografischen Wandels einmal tragen wird, soll nun auch noch ein Jahr ihres Lebens abgeben? Generationengerecht ist das kaum.

Hinzu kommt ein praktisches Problem. Jahr für Jahr wären rund 700.000 junge Menschen unterzubringen, anzuleiten und zu betreuen. Gerade die Einrichtungen, die entlastet werden sollen, wären damit zunächst zusätzlich belastet. Und wer glaubt, man könne mit unwilligen Dienstpflichtigen den Fachkräftemangel in der Pflege beheben, unterschätzt, wie anspruchsvoll diese Arbeit ist.

Was folgt daraus? Keineswegs, dass alles so bleiben sollte, wie es ist. Schon heute wollen deutlich mehr junge Menschen einen Freiwilligendienst leisten, als es geförderte Plätze gibt. Statt über Zwang zu diskutieren, sollte der Staat zuerst diese Nachfrage bedienen: mit mehr Plätzen, mit einem Taschengeld, von dem man tatsächlich leben kann, und mit einer Anerkennung des Dienstes etwa bei der Vergabe von Studienplätzen. Ein Engagement, das aus freien Stücken geschieht, stiftet mehr Zusammenhalt als jeder verordnete Dienst.`,
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
              statement: 'Der Autor war von Anfang an gegen ein Pflichtjahr.',
              answer: false,
              explanationRu: '«Ich gestehe, dass mich dieser Gedanke anfangs überzeugt hat».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor hält die Spaltung der Gesellschaft für ein reales Problem.',
              answer: true,
              explanationRu: '«Unsere Gesellschaft driftet auseinander» — с этим он согласен.',
            },
            {
              kind: 'tf',
              statement: 'Nach Ansicht des Autors ließe sich ein Pflichtjahr ohne Verfassungsänderung einführen.',
              answer: false,
              explanationRu: '«Für ein Pflichtjahr müsste die Verfassung geändert werden – mit Zweidrittelmehrheit».',
            },
            {
              kind: 'tf',
              statement: 'Am schwersten wiegt für den Autor die Frage der Gerechtigkeit gegenüber der jungen Generation.',
              answer: true,
              explanationRu: '«Schwerer wiegt für mich allerdings ein anderer Einwand» — молодёжь и так несёт много нагрузок; «generationengerecht ist das kaum».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor erwartet, dass ein Pflichtjahr die Pflegeeinrichtungen sofort entlasten würde.',
              answer: false,
              explanationRu: 'Наоборот: учреждения «wären damit zunächst zusätzlich belastet».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor findet, dass alles so bleiben sollte, wie es ist.',
              answer: false,
              explanationRu: '«Keineswegs, dass alles so bleiben sollte, wie es ist».',
            },
            {
              kind: 'tf',
              statement: 'Der Autor fordert, zunächst mehr geförderte Plätze für Freiwilligendienste zu schaffen.',
              answer: true,
              explanationRu: 'Государство должно «zuerst diese Nachfrage bedienen: mit mehr Plätzen …».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Diskussion: Wählen ab 16 – auch für den Bundestag?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin',
        B: 'Prof. Dr. Henrik Lorenz, Politikwissenschaftler',
        C: 'Mia Schröder, Landesschülersprecherin',
      },
      situation: 'Sie hören eine Diskussion im Radio zum Wahlalter.',
      text: `A: Guten Abend und willkommen zu unserer Diskussion. Bei der Europawahl dürfen in Deutschland inzwischen schon Sechzehnjährige wählen, in mehreren Bundesländern auch bei Landtags- und Kommunalwahlen. Für den Bundestag gilt dagegen weiterhin die Altersgrenze von achtzehn. Sollte sich das ändern? Bei mir sind die Landesschülersprecherin Mia Schröder und der Politikwissenschaftler Professor Henrik Lorenz. Frau Schröder, warum sollten Sechzehnjährige wählen dürfen?
C: Weil es um unsere Zukunft geht. Ob Klimaschutz, Rente oder Bildung – die Entscheidungen, die heute getroffen werden, betreffen uns am längsten. Gleichzeitig wird die Gesellschaft immer älter. Wenn wir nicht mitbestimmen dürfen, verschiebt sich das Gewicht noch weiter zugunsten der Älteren.
B: Das Argument mit der demografischen Verschiebung ist nicht von der Hand zu weisen. Man sollte aber realistisch bleiben: Die beiden Jahrgänge der Sechzehn- und Siebzehnjährigen machen nur gut zwei Prozent der Wahlberechtigten aus. Am Kräfteverhältnis zwischen den Generationen würde das kaum etwas ändern.
C: Mag sein, aber es geht auch ums Prinzip. Wir dürfen arbeiten, Steuern zahlen, Verantwortung übernehmen – nur wählen dürfen wir nicht. Das ist schwer zu vermitteln.
A: Herr Lorenz, Gegner argumentieren oft, Jugendliche seien für eine so weitreichende Entscheidung noch nicht reif genug.
B: Ehrlich gesagt halte ich die Reifefrage für überbewertet. Untersuchungen aus Österreich, wo man seit 2007 mit sechzehn wählen darf, zeigen, dass junge Wählerinnen und Wähler ihre Entscheidung nicht weniger durchdacht treffen als ältere. Mein Einwand ist ein anderer: Viele Sechzehnjährige sind schlicht noch nicht an die Politik herangeführt worden. Die Wahlbeteiligung in dieser Gruppe hängt stark davon ab, ob in der Schule darüber gesprochen wird.
C: Genau deshalb fordern wir ja beides: das Wahlrecht und mehr politische Bildung. Wer früh wählt, gewöhnt sich daran. Es gibt Hinweise darauf, dass jemand, der bei seiner ersten Wahl hingeht, auch später eher wählen geht.
B: Da stimme ich Ihnen zu. Ich würde sogar sagen, mit sechzehn ist der Zeitpunkt günstiger als mit achtzehn. Mit sechzehn wohnen die meisten noch zu Hause und gehen zur Schule, wo man das Thema aufgreifen kann. Mit achtzehn stecken viele mitten im Umbruch – Umzug, Ausbildung, Studium –, und die erste Wahl geht in diesem Trubel leicht unter.
A: Das klingt ja beinahe nach einer Annäherung.
B: In der Sache bin ich gar nicht so weit weg. Ich warne nur davor, sich allzu viel davon zu versprechen. Das Wahlrecht allein entschärft keinen einzigen Generationenkonflikt.
C: Das behauptet auch niemand. Aber es wäre ein Zeichen, dass man uns ernst nimmt.
A: Vielen Dank Ihnen beiden.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
          instructionRu: 'Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Prof. Lorenz', 'Mia Schröder'],
          items: [
            {
              kind: 'match',
              prompt: 'Heutige politische Entscheidungen wirken sich auf junge Menschen am längsten aus.',
              answer: 2,
              explanationRu: 'Миа: решения, принятые сегодня, «betreffen uns am längsten».',
            },
            {
              kind: 'match',
              prompt: 'Die zusätzlichen jungen Wähler würden das Gewicht der Generationen kaum verändern.',
              answer: 1,
              explanationRu: 'Лоренц: это лишь «gut zwei Prozent der Wahlberechtigten».',
            },
            {
              kind: 'match',
              prompt: 'Es ist widersprüchlich, Jugendlichen Pflichten aufzuerlegen, ihnen aber das Wahlrecht zu verweigern.',
              answer: 2,
              explanationRu: 'Миа: «Wir dürfen arbeiten, Steuern zahlen … – nur wählen dürfen wir nicht».',
            },
            {
              kind: 'match',
              prompt: 'Die Frage, ob junge Menschen reif genug sind, wird überschätzt.',
              answer: 1,
              explanationRu: 'Лоренц: «Ehrlich gesagt halte ich die Reifefrage für überbewertet».',
            },
            {
              kind: 'match',
              prompt: 'Ob junge Menschen wählen gehen, hängt stark von der Schule ab.',
              answer: 1,
              explanationRu: 'Лоренц: участие зависит от того, «ob in der Schule darüber gesprochen wird».',
            },
            {
              kind: 'match',
              prompt: 'Wer früh mit dem Wählen beginnt, bleibt eher dabei.',
              answer: 2,
              explanationRu: 'Миа: «Wer früh wählt, gewöhnt sich daran».',
            },
            {
              kind: 'match',
              prompt: 'Die Standpunkte scheinen sich angenähert zu haben.',
              answer: 0,
              explanationRu: 'Ведущая: «Das klingt ja beinahe nach einer Annäherung».',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Der Generationenvertrag unter Druck',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag im Rahmen einer öffentlichen Vortragsreihe zur Zukunft des Sozialstaats.',
      text: `Meine sehr geehrten Damen und Herren, wenn in Deutschland über die Zukunft der Rente gesprochen wird, fällt fast immer das Wort „Generationenvertrag“. Gemeint ist ein Vertrag, den niemand je unterschrieben hat: Die heute Erwerbstätigen finanzieren mit ihren Beiträgen die Renten der heutigen Ruheständler – in der Erwartung, dass die nächste Generation später dasselbe für sie tut. Man spricht vom Umlageverfahren. Das Geld wird also nicht angespart, sondern unmittelbar umverteilt.

Dieses System hat Deutschland jahrzehntelang gute Dienste geleistet. Es hat die Altersarmut deutlich verringert und sich in Krisen, etwa bei hoher Inflation oder nach Börsencrashs, als erstaunlich robust erwiesen. Seine Achillesferse ist jedoch die Demografie. Das System funktioniert nur, solange das Verhältnis zwischen Beitragszahlern und Rentnern einigermaßen stabil bleibt. Und genau das ist nicht mehr der Fall.

Lassen Sie mich das an zwei Zahlen verdeutlichen. Anfang der Sechzigerjahre kamen auf einen Rentner noch rund sechs Beitragszahler. Heute sind es etwa zwei, und in den kommenden Jahrzehnten wird sich das Verhältnis weiter verschlechtern. Der Grund ist zum einen die gestiegene Lebenserwartung – eine erfreuliche Entwicklung, das sollten wir nicht vergessen. Zum anderen gehen jetzt die geburtenstarken Jahrgänge der Babyboomer in den Ruhestand, während seit den Siebzigerjahren deutlich weniger Kinder geboren werden.

Welche Stellschrauben gibt es? Im Kern nur drei: Man kann die Beiträge erhöhen, das Rentenniveau senken oder das Renteneintrittsalter anheben. Jede dieser Maßnahmen belastet eine bestimmte Gruppe. Höhere Beiträge treffen die Jüngeren, ein niedrigeres Rentenniveau trifft die Älteren, und ein späterer Renteneintritt trifft vor allem jene, die körperlich schwer arbeiten und oft schon vor dem regulären Rentenalter nicht mehr können.

Darüber hinaus werden zwei weitere Ansätze diskutiert. Erstens: mehr Menschen in Beschäftigung bringen – etwa indem man es Eltern erleichtert, Vollzeit zu arbeiten, oder gezielt Fachkräfte aus dem Ausland anwirbt. Zweitens: eine ergänzende kapitalgedeckte Vorsorge, wie sie Schweden schon seit den Neunzigerjahren kennt. Dort fließt ein kleiner Teil der Beiträge in Fonds, die am Kapitalmarkt angelegt werden.

Zum Schluss möchte ich vor zwei Fehlschlüssen warnen. Der erste lautet: Das Rentensystem bricht zusammen. Das ist falsch. Es wird nicht zusammenbrechen, aber es wird teurer, und wir müssen entscheiden, wie wir die Kosten verteilen. Der zweite Fehlschluss lautet, es handle sich um einen Konflikt zwischen Jung und Alt. Die meisten Älteren wünschen sich, dass ihre Kinder und Enkel eine faire Chance haben – und die meisten Jüngeren wissen, dass sie selbst einmal alt sein werden. Eine generationengerechte Lösung ist also möglich. Sie setzt allerdings voraus, dass man notwendige Reformen nicht länger auf die lange Bank schiebt.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Vortrag. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прослушайте доклад. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Was kennzeichnet das Umlageverfahren?',
              options: [
                'Jeder spart individuell für seine eigene Rente.',
                'Die Beiträge der Erwerbstätigen werden direkt an die heutigen Rentner weitergegeben.',
                'Der Staat finanziert die Renten vollständig aus Steuern.',
              ],
              answer: 1,
              explanationRu: '«Das Geld wird also nicht angespart, sondern unmittelbar umverteilt».',
            },
            {
              kind: 'mc',
              question: 'Welche Stärke des Systems hebt der Redner hervor?',
              options: [
                'Es hat sich in Krisen als widerstandsfähig erwiesen.',
                'Es ist unabhängig von der Bevölkerungsentwicklung.',
                'Es erzielt hohe Renditen am Kapitalmarkt.',
              ],
              answer: 0,
              explanationRu: 'Система уменьшила бедность пожилых и оказалась «erstaunlich robust» в кризисах.',
            },
            {
              kind: 'mc',
              question: 'Warum verschlechtert sich das Verhältnis von Beitragszahlern zu Rentnern?',
              options: [
                'Weil immer mehr Menschen vorzeitig in Rente gehen.',
                'Weil die Beiträge in den letzten Jahren gesenkt wurden.',
                'Weil die Lebenserwartung steigt und weniger Kinder geboren werden, während die Babyboomer in Rente gehen.',
              ],
              answer: 2,
              explanationRu: 'Две причины: рост продолжительности жизни и выход на пенсию бэби-бумеров при низкой рождаемости.',
            },
            {
              kind: 'mc',
              question: 'Wen trifft ein späterer Renteneintritt nach Ansicht des Redners besonders hart?',
              options: [
                'Menschen mit körperlich schwerer Arbeit',
                'Beamtinnen und Beamte',
                'junge Berufseinsteiger',
              ],
              answer: 0,
              explanationRu: '«… trifft vor allem jene, die körperlich schwer arbeiten».',
            },
            {
              kind: 'mc',
              question: 'Warum erwähnt der Redner Schweden?',
              options: [
                'als Beispiel für ein Land ohne gesetzliche Rente',
                'als Beispiel für eine ergänzende kapitalgedeckte Vorsorge',
                'als Land mit besonders hohem Renteneintrittsalter',
              ],
              answer: 1,
              explanationRu: 'В Швеции с 1990-х часть взносов идёт в фонды на рынке капитала — «kapitalgedeckte Vorsorge».',
            },
            {
              kind: 'mc',
              question: 'Welche Behauptung weist der Redner als Fehlschluss zurück?',
              options: [
                'dass das Rentensystem teurer wird',
                'dass Reformen notwendig sind',
                'dass das Rentensystem zusammenbrechen wird',
              ],
              answer: 2,
              explanationRu: '«Das Rentensystem bricht zusammen. Das ist falsch» — оно станет дороже, но не рухнет.',
            },
          ],
        },
      ],
    },
  ],
};
