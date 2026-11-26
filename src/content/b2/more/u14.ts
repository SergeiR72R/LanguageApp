import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ruf mich bitte an, ___ du beim Arzt fertig bist.',
      options: ['sobald', 'seitdem', 'während', 'bevor'],
      answer: 0,
      explanationRu: '«Позвони, как только освободишься» — сразу после окончания приёма → sobald.',
    },
    {
      type: 'gap',
      prompt: '___ sie ein Kind war, hatte sie oft Mittelohrentzündungen.',
      answers: ['Als'],
      hintRu: 'повторение B1: als или wenn?',
      explanationRu: 'Повторение: детство — один отрезок в прошлом, поэтому als (даже если воспаления были часто — повторяемость выражена словом oft в главном).',
    },
    {
      type: 'choice',
      prompt: 'Immer ___ ich Erdbeeren esse, bekomme ich einen Ausschlag.',
      options: ['als', 'wenn', 'wann', 'ob'],
      answer: 1,
      explanationRu: 'Повторение: повторяющееся действие («каждый раз, когда») → wenn. Wann — вопросительное слово, ob — «ли».',
    },
    {
      type: 'choice',
      prompt: '___ dem Eingriff müssen Sie noch zwei Stunden in der Praxis bleiben.',
      options: ['Nachdem', 'Nach', 'Danach', 'Seitdem'],
      answer: 1,
      explanationRu: 'Далее идёт существительное в Dativ (dem Eingriff) — нужен предлог nach. Nachdem — союз (нужно придаточное), danach — наречие.',
    },
    {
      type: 'gap',
      prompt: 'Tragen Sie die Salbe zweimal täglich auf, ___ der Ausschlag verschwunden ist.',
      answers: ['bis'],
      hintRu: '«пока не, до тех пор пока»',
      explanationRu: 'Действие продолжается до определённого момента (исчезновение сыпи) → bis.',
    },
    {
      type: 'choice',
      prompt: 'Warten Sie bitte, ___ die Schwester Sie aufruft.',
      options: ['bis', 'bis nicht', 'solange', 'während'],
      answer: 0,
      explanationRu: 'Ловушка: по-русски «пока не вызовет», но в немецком после bis отрицание не ставится: Warten Sie, bis die Schwester Sie aufruft.',
    },
    {
      type: 'gap',
      prompt: 'Ich habe vor einem Jahr mit dem Rauchen aufgehört. ___ habe ich deutlich mehr Kondition.',
      answers: ['Seitdem', 'Seither'],
      hintRu: '«с тех пор» (наречие, за ним глагол)',
      explanationRu: 'Здесь seitdem — наречие на первом месте (поэтому сразу глагол habe). Seitdem может быть и союзом, и наречием.',
    },
    {
      type: 'choice',
      prompt: 'Nachdem Sie die Tablette ___, warten Sie bitte eine Stunde mit dem Essen.',
      options: ['nehmen', 'genommen haben', 'genommen hatten', 'nahmen'],
      answer: 1,
      explanationRu: 'Главное предложение в Präsens (warten) → в придаточном с nachdem Perfekt: genommen haben.',
    },
    {
      type: 'gap',
      prompt: 'Nachdem der Rettungswagen angekommen ___, ging alles sehr schnell.',
      answers: ['war'],
      hintRu: 'Plusquamperfekt от ankommen',
      explanationRu: 'Главное в Präteritum (ging) → Plusquamperfekt. Ankommen образует Perfekt с sein, поэтому angekommen war.',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet „während“ in diesem Satz? „Während Privatpatienten schnell einen Termin bekommen, warten Kassenpatienten oft wochenlang.“',
      options: [
        'zeitlich: in der Zeit, in der',
        'Gegensatz: wohingegen',
        'Grund: weil',
        'Bedingung: falls',
      ],
      answer: 1,
      explanationRu: 'Здесь während выражает не одновременность, а противопоставление двух групп пациентов («тогда как») = wohingegen.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью bevor.',
      prompt: 'Sie unterschreiben die Einwilligung. Danach beginnt die Behandlung.',
      answers: [
        'Bevor die Behandlung beginnt, unterschreiben Sie die Einwilligung.',
        'Sie unterschreiben die Einwilligung, bevor die Behandlung beginnt.',
      ],
      explanationRu: 'Bevor вводит более позднее действие (начало лечения). Подписание происходит раньше — оно в главном предложении.',
    },
    {
      type: 'gap',
      prompt: '___ man ein Antibiotikum verschreibt, sollte man klären, ob überhaupt Bakterien die Ursache sind.',
      answers: ['Bevor', 'Ehe'],
      hintRu: '«прежде чем» (возможен книжный вариант)',
      explanationRu: 'Bevor или книжное ehe: сначала выяснить причину, потом выписывать антибиотик.',
    },
    {
      type: 'choice',
      prompt: 'Sie dürfen nicht Auto fahren, ___ das Medikament wirkt.',
      options: ['solange', 'bis', 'sobald', 'seit'],
      answer: 0,
      explanationRu: 'Запрет действует всё время действия лекарства — оба процесса длятся одинаково → solange. Bis означало бы «пока не начнёт действовать».',
    },
    {
      type: 'transform',
      instructionRu: 'Замените предложную группу придаточным с seitdem.',
      prompt: 'Seit seiner Operation hat er keine Rückenschmerzen mehr.',
      answers: [
        'Seitdem er operiert worden ist, hat er keine Rückenschmerzen mehr.',
        'Seit er operiert worden ist, hat er keine Rückenschmerzen mehr.',
        'Seitdem er operiert wurde, hat er keine Rückenschmerzen mehr.',
        'Seit er operiert wurde, hat er keine Rückenschmerzen mehr.',
      ],
      explanationRu: 'Seit + Dativ (предлог) → seitdem/seit + придаточное. Его оперировали → пассив: er ist operiert worden / er wurde operiert.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените предложную группу придаточным с nachdem.',
      prompt: 'Nach der Untersuchung des Patienten schrieb die Ärztin ein Rezept.',
      answers: [
        'Nachdem die Ärztin den Patienten untersucht hatte, schrieb sie ein Rezept.',
        'Nachdem der Patient untersucht worden war, schrieb die Ärztin ein Rezept.',
      ],
      explanationRu: 'Nach + существительное → nachdem + придаточное. Главное в Präteritum (schrieb) → Plusquamperfekt: untersucht hatte (актив) или untersucht worden war (пассив).',
    },
    {
      type: 'order',
      words: ['Sobald', 'die Ergebnisse', 'vorliegen,', 'rufen', 'wir', 'Sie', 'an.'],
      translationRu: 'Как только будут готовы результаты, мы вам позвоним.',
      explanationRu: 'Sobald + глагол в конце (vorliegen). Главное начинается с глагола rufen, отделяемая приставка an — в конце.',
    },
    {
      type: 'order',
      words: ['Nachdem', 'die Narkose', 'nachgelassen', 'hatte,', 'durfte', 'der Patient', 'etwas', 'trinken.'],
      translationRu: 'После того как действие наркоза ослабло, пациенту разрешили немного попить.',
      explanationRu: 'Plusquamperfekt в придаточном (nachgelassen hatte) + Präteritum в главном (durfte … trinken).',
    },
    {
      type: 'gap',
      prompt: 'Ich gehe heute zur Arbeit, ___ ich mich noch nicht ganz fit fühle.',
      answers: ['obwohl', 'obgleich', 'wenngleich'],
      hintRu: 'повторение (B2-13): уступка',
      explanationRu: 'Повторение: здесь нет временного значения, а есть противоречие («хотя чувствую себя не совсем здоровым») → obwohl.',
    },
    {
      type: 'choice',
      prompt: 'Kaum ___, klingelte schon mein Handy.',
      options: [
        'hatte ich die Praxis verlassen',
        'ich hatte die Praxis verlassen',
        'ich die Praxis verlassen hatte',
        'habe ich die Praxis verlassen',
      ],
      answer: 0,
      explanationRu: 'Kaum («едва») на первом месте ведёт себя как наречие: инверсия (hatte ich …). Действие раньше другого действия в прошлом → Plusquamperfekt.',
    },
    {
      type: 'gap',
      prompt: 'Sobald die Wunde vollständig verheilt ___, können Sie wieder schwimmen gehen.',
      answers: ['ist'],
      hintRu: 'Perfekt от verheilen',
      explanationRu: 'Действие придаточного закончится раньше действия главного (Präsens с будущим значением) → Perfekt. Verheilen образует Perfekt с sein: verheilt ist.',
    },
  ],
  reading: [
    {
      title: 'Wenn die Notaufnahme zum Wartezimmer wird',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Freitagabend, 22 Uhr, in der Zentralen Notaufnahme eines städtischen Krankenhauses: Auf den Fluren stehen Betten, im Wartebereich sind alle Stühle besetzt. Ein Mann hält sich den verbundenen Arm, eine junge Frau hustet, ein älterer Herr ist auf seinem Stuhl eingeschlafen. Seitdem sie vor zwei Stunden angekommen sind, hat sich für viele von ihnen nichts getan. „So sieht es hier fast jedes Wochenende aus“, sagt Oberärztin Dr. Katrin Mohr, die die Notaufnahme seit sechs Jahren leitet.

Das Problem ist bekannt: Die Zahl der Patientinnen und Patienten in deutschen Notaufnahmen ist in den vergangenen Jahren deutlich gestiegen. Nach Schätzungen von Fachleuten wäre ein großer Teil von ihnen in einer Hausarztpraxis besser aufgehoben. „Wir behandeln hier Menschen, die seit drei Wochen Rückenschmerzen haben oder eine Krankschreibung brauchen“, berichtet Mohr. „Das ist kein Vorwurf. Viele wissen einfach nicht, wohin sie sonst gehen sollen.“

Tatsächlich ist vielen nicht bekannt, dass es außerhalb der Sprechzeiten einen ärztlichen Bereitschaftsdienst gibt, der über die Telefonnummer 116 117 erreichbar ist. Andere haben schlechte Erfahrungen gemacht: Bis sie einen Termin beim Facharzt bekommen, vergehen oft Wochen. In der Notaufnahme dagegen wird jeder irgendwann behandelt – auch wenn man dafür Stunden warten muss.

Damit echte Notfälle nicht zu kurz kommen, arbeiten die meisten Kliniken mit einem System der Ersteinschätzung. Sobald ein Patient angekommen ist, entscheidet eine speziell geschulte Pflegekraft, wie dringend die Behandlung ist. Wer mit Verdacht auf Herzinfarkt kommt, ist sofort an der Reihe; wer sich die Hand verstaucht hat, muss warten. „Viele empfinden das als ungerecht, weil sie die Reihenfolge nicht verstehen“, erklärt Mohr. „Deshalb hängen bei uns inzwischen Bildschirme, auf denen die ungefähre Wartezeit angezeigt wird.“ Seitdem gebe es deutlich weniger Beschwerden und Konflikte.

Die Politik plant seit Längerem eine Reform. Künftig sollen an vielen Krankenhäusern sogenannte Integrierte Notfallzentren entstehen, in denen Klinikärzte und niedergelassene Ärzte unter einem Dach zusammenarbeiten. Am Eingang soll dann entschieden werden, ob jemand in die Notaufnahme oder in die angeschlossene Bereitschaftspraxis gehört. Eine Gebühr für Patienten, die ohne echten Notfall kommen, wie sie manche Krankenkassen fordern, lehnt Mohr dagegen ab: „Ob etwas ein Notfall ist, kann ein Laie oft gar nicht beurteilen. Ich möchte nicht, dass jemand mit Brustschmerzen zu Hause bleibt, weil er Angst vor einer Rechnung hat.“

Bis die Reform umgesetzt ist, wird es allerdings noch dauern. Bis dahin hilft vor allem eines: Geduld – auf beiden Seiten.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was beschreibt der erste Abschnitt?',
              options: [
                'einen ungewöhnlich ruhigen Abend',
                'eine typische Situation am Wochenende',
                'einen Abend mit vielen schweren Unfällen',
              ],
              answer: 1,
              explanationRu: '«So sieht es hier fast jedes Wochenende aus» — это типичная картина выходных.',
            },
            {
              kind: 'mc',
              question: 'Warum kommen laut Dr. Mohr viele Menschen ohne echten Notfall?',
              options: [
                'Sie kennen keine andere Anlaufstelle.',
                'Sie haben keine Krankenversicherung.',
                'Ihre Hausärzte schicken sie dorthin.',
              ],
              answer: 0,
              explanationRu: '«Viele wissen einfach nicht, wohin sie sonst gehen sollen.»',
            },
            {
              kind: 'mc',
              question: 'Wozu dient die Nummer 116 117?',
              options: [
                'Man ruft damit einen Rettungswagen.',
                'Man erreicht darüber außerhalb der Sprechzeiten einen ärztlichen Dienst.',
                'Man erfährt darüber die aktuelle Wartezeit in der Notaufnahme.',
              ],
              answer: 1,
              explanationRu: 'По номеру 116 117 вне часов приёма доступна дежурная врачебная служба (Bereitschaftsdienst).',
            },
            {
              kind: 'mc',
              question: 'Wie wird in der Notaufnahme die Reihenfolge der Behandlung festgelegt?',
              options: [
                'nach der Uhrzeit der Ankunft',
                'nach der Art der Krankenversicherung',
                'nach der Dringlichkeit, die eine Pflegekraft einschätzt',
              ],
              answer: 2,
              explanationRu: 'Специально обученная медсестра оценивает срочность: подозрение на инфаркт — сразу, растяжение — ждёт.',
            },
            {
              kind: 'mc',
              question: 'Was hat sich durch die Bildschirme verändert?',
              options: [
                'Es gibt weniger Streit und Beschwerden.',
                'Die Wartezeiten sind deutlich kürzer geworden.',
                'Patienten können sich jetzt online anmelden.',
              ],
              answer: 0,
              explanationRu: '«Seitdem gebe es deutlich weniger Beschwerden und Konflikte.» Время ожидания экраны не сокращают, а только показывают.',
            },
            {
              kind: 'mc',
              question: 'Wie steht Dr. Mohr zu einer Gebühr für Patienten ohne echten Notfall?',
              options: [
                'Sie hält sie für dringend notwendig.',
                'Sie findet sie nur für Privatpatienten sinnvoll.',
                'Sie lehnt sie ab, weil Laien Notfälle oft nicht erkennen können.',
              ],
              answer: 2,
              explanationRu: 'Мор против платы: непрофессионал часто не может оценить, экстренный ли это случай, и человек с болью в груди может остаться дома.',
            },
          ],
        },
      ],
    },
    {
      title: 'Merkblatt: Ihre ambulante Operation',
      textType: 'Informationstext',
      texts: [
        {
          label: '1',
          body: `Bitte erscheinen Sie nüchtern zur Operation. Das bedeutet: Ab Mitternacht vor dem Eingriff dürfen Sie nichts mehr essen. Klares Wasser oder ungesüßten Tee dürfen Sie bis zwei Stunden vor dem Termin trinken. Bevor Sie Ihre üblichen Medikamente einnehmen, sprechen Sie bitte mit uns; blutverdünnende Mittel müssen unter Umständen schon einige Tage vorher abgesetzt werden.`,
        },
        {
          label: '2',
          body: `Nach einer Narkose dürfen Sie 24 Stunden lang weder Auto noch Fahrrad fahren. Bitte organisieren Sie deshalb rechtzeitig eine erwachsene Person, die Sie nach dem Eingriff in der Praxis abholt und nach Hause bringt. Ist niemand da, der Sie begleitet, müssen wir Sie aus Sicherheitsgründen über Nacht in der Klinik behalten.`,
        },
        {
          label: '3',
          body: `Bringen Sie bitte Ihre Versichertenkarte, den Überweisungsschein, aktuelle Befunde sowie Ihren Medikamentenplan mit. Schmuck, Piercings und Uhren lassen Sie am besten zu Hause, da sie vor der Operation ohnehin abgelegt werden müssen. Kontaktlinsen nehmen Sie bitte vor dem Eingriff heraus.`,
        },
        {
          label: '4',
          body: `Solange die Wirkung der Narkose noch anhält, sollten Sie keine wichtigen Entscheidungen treffen und keine Verträge unterschreiben. Auch Alkohol ist am Tag der Operation tabu. Ruhen Sie sich aus, bis Sie sich wieder ganz wach und sicher fühlen, und lassen Sie in der ersten Nacht möglichst jemanden bei sich übernachten.`,
        },
        {
          label: '5',
          body: `Sobald Sie Fieber über 38,5 Grad, starke Schmerzen, Blutungen oder eine zunehmende Schwellung bemerken, rufen Sie uns bitte sofort unter der unten genannten Nummer an. Außerhalb unserer Öffnungszeiten wenden Sie sich an die nächstgelegene Notaufnahme.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Abschnitte 1–5 des Merkblatts. Welche Überschrift a–g passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
          instructionRu: 'Прочитайте разделы 1–5 памятки. Какой заголовок a–g подходит к какому разделу? Два заголовка лишние.',
          options: [
            'Besuchszeiten auf der Station',
            'Die ersten Stunden zu Hause',
            'Essen, Trinken und Medikamente vor dem Eingriff',
            'Kosten und Zuzahlungen',
            'Wann Sie sich sofort melden müssen',
            'Wer Sie nach Hause bringt',
            'Was Sie mitbringen sollten – und was nicht',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Abschnitt 1',
              answer: 2,
              explanationRu: 'Раздел о том, что нельзя есть с полуночи, что можно пить и какие лекарства, возможно, надо отменить.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 2',
              answer: 5,
              explanationRu: 'Главное — организовать взрослого, который заберёт вас и отвезёт домой; иначе придётся остаться в клинике.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 3',
              answer: 6,
              explanationRu: 'Перечислено, что взять с собой (карта, направление, результаты) и что оставить дома (украшения, часы).',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 4',
              answer: 1,
              explanationRu: 'Правила поведения дома после операции: не принимать решений, не пить алкоголь, отдыхать.',
            },
            {
              kind: 'match',
              prompt: 'Abschnitt 5',
              answer: 4,
              explanationRu: 'При каких симптомах (температура, боль, кровотечение) нужно сразу позвонить. Заголовки о часах посещения и расходах не подходят ни к одному разделу.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Ansage auf dem Anrufbeantworter einer Arztpraxis',
      kind: 'monolog',
      situation: 'Sie rufen bei Ihrer Hausarztpraxis an und hören die Ansage auf dem Anrufbeantworter.',
      text: `Guten Tag, Sie sind verbunden mit der Hausarztpraxis Dr. Lehmann und Dr. Öztürk. Unsere Praxis ist vom 4. bis einschließlich 15. August wegen Urlaubs geschlossen. In dringenden Fällen wenden Sie sich bitte an unsere Vertretung, die Praxis Dr. Fischer in der Bahnhofstraße 12. Bitte bringen Sie dorthin Ihre Versichertenkarte mit. Rezepte, die Sie vor dem Urlaub bei uns bestellt haben, können Sie noch bis Freitag, den 1. August, um 12 Uhr in unserer Praxis abholen. Nachdem wir am 18. August wieder geöffnet haben, gelten zunächst geänderte Sprechzeiten: In der ersten Woche bieten wir nur eine offene Sprechstunde am Vormittag an, für die Sie keinen Termin brauchen. Feste Termine vergeben wir erst wieder ab dem 25. August. Außerhalb der Sprechzeiten erreichen Sie den ärztlichen Bereitschaftsdienst unter der Nummer 116 117. Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort die 112. Vielen Dank für Ihr Verständnis.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Ansage zweimal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слушаете запись дважды. Верны ли утверждения?',
          items: [
            {
              kind: 'tf',
              statement: 'Die Praxis ist zwei Wochen lang geschlossen.',
              answer: true,
              explanationRu: 'С 4 по 15 августа включительно — две недели.',
            },
            {
              kind: 'tf',
              statement: 'Bestellte Rezepte kann man während des Urlaubs bei der Vertretung abholen.',
              answer: false,
              explanationRu: 'Заказанные рецепты можно забрать только в самой практике до 1 августа, 12 часов.',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was gilt in der ersten Woche nach dem Urlaub?',
              options: [
                'Man bekommt nur mit einem festen Termin eine Behandlung.',
                'Man kann vormittags ohne Termin in die Praxis kommen.',
                'Die Praxis ist nur nachmittags geöffnet.',
              ],
              answer: 1,
              explanationRu: 'В первую неделю — только открытый приём по утрам без записи; записи по времени — с 25 августа.',
            },
            {
              kind: 'mc',
              question: 'Wen soll man bei lebensbedrohlichen Notfällen anrufen?',
              options: ['die Praxis Dr. Fischer', 'den Bereitschaftsdienst unter 116 117', 'die Notrufnummer 112'],
              answer: 2,
              explanationRu: '«Bei lebensbedrohlichen Notfällen wählen Sie bitte sofort die 112.» 116 117 — дежурная служба для неэкстренных случаев.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Antibiotikaresistenzen – eine stille Gefahr',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag einer Ärztin in der Volkshochschule.',
      text: `Meine sehr geehrten Damen und Herren, vielen Dank, dass Sie heute Abend trotz des schlechten Wetters gekommen sind. Ich möchte mit einer kleinen Geschichte beginnen. Als Alexander Fleming 1928 das Penicillin entdeckte, war das eine medizinische Revolution. Infektionen, an denen Menschen bis dahin gestorben waren, ließen sich plötzlich innerhalb weniger Tage heilen. Doch schon in seiner Nobelpreisrede 1945 warnte Fleming: Wenn man Antibiotika falsch einsetzt, werden die Bakterien lernen, ihnen zu widerstehen.

Genau das ist eingetreten. Heute sprechen Fachleute von Antibiotikaresistenzen. Gemeint ist, dass bestimmte Bakterien gegen ein oder sogar mehrere Medikamente unempfindlich geworden sind. Weltweit sterben jedes Jahr über eine Million Menschen an Infektionen, die früher problemlos behandelbar waren.

Wie entstehen solche Resistenzen? Jedes Mal, wenn wir ein Antibiotikum einnehmen, sterben die empfindlichen Bakterien ab. Die wenigen, die zufällig widerstandsfähig sind, überleben und vermehren sich. Je häufiger Antibiotika eingesetzt werden, desto schneller setzen sich diese Bakterien durch.

Dabei spielen drei Faktoren eine besondere Rolle. Erstens werden Antibiotika zu oft verschrieben – zum Beispiel bei einer Erkältung, obwohl sie gegen Viren überhaupt nicht wirken. Viele Patientinnen und Patienten erwarten aber ein Rezept, und manche Ärzte geben nach, weil die Zeit im Sprechzimmer knapp ist. Zweitens brechen viele die Einnahme eigenmächtig ab, sobald es ihnen besser geht. Das kann gefährlich sein, denn so überleben unter Umständen gerade die widerstandsfähigeren Erreger. Drittens – und das wird oft vergessen – werden große Mengen Antibiotika in der Tierhaltung eingesetzt. Über Gülle und Abwasser gelangen resistente Keime in die Umwelt.

Was kann man tun? Auf politischer Ebene gibt es inzwischen strengere Regeln für die Tiermedizin. In Krankenhäusern helfen konsequente Hygiene und spezielle Teams, die Ärztinnen und Ärzte bei der Auswahl des richtigen Medikaments beraten. Das größte Problem ist allerdings ein wirtschaftliches: Für Pharmakonzerne lohnt sich die Entwicklung neuer Antibiotika kaum. Denn ein neues Mittel soll ja möglichst selten eingesetzt werden, damit keine Resistenzen entstehen – und bringt deshalb wenig Umsatz. Fachleute fordern daher neue Modelle, bei denen die Forschung unabhängig von den Verkaufszahlen finanziert wird.

Und was können Sie persönlich tun? Fragen Sie nach, bevor Sie ein Antibiotikum einnehmen: Ist es wirklich nötig? Nehmen Sie es genau so lange, wie Ihre Ärztin es verordnet hat. Geben Sie übrig gebliebene Tabletten nicht an andere weiter, sondern fragen Sie in der Apotheke, wie Sie sie richtig entsorgen.

Vielen Dank. Ich freue mich jetzt auf Ihre Fragen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören einen Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете доклад дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Womit beginnt die Referentin ihren Vortrag?',
              options: ['mit einer persönlichen Erfahrung', 'mit der Geschichte des Penicillins', 'mit aktuellen Zahlen aus Deutschland'],
              answer: 1,
              explanationRu: 'Она начинает с истории открытия пенициллина Флемингом в 1928 году.',
            },
            {
              kind: 'mc',
              question: 'Wovor warnte Fleming bereits 1945?',
              options: ['vor einem falschen Einsatz von Antibiotika', 'vor zu hohen Preisen für Medikamente', 'vor gefährlichen Nebenwirkungen'],
              answer: 0,
              explanationRu: 'В нобелевской речи он предупреждал: при неправильном применении бактерии научатся сопротивляться.',
            },
            {
              kind: 'mc',
              question: 'Was versteht man unter einer Antibiotikaresistenz?',
              options: [
                'eine Allergie gegen Antibiotika',
                'dass Antibiotika nicht mehr hergestellt werden',
                'dass Bakterien gegen Medikamente unempfindlich geworden sind',
              ],
              answer: 2,
              explanationRu: '«…dass bestimmte Bakterien gegen ein oder sogar mehrere Medikamente unempfindlich geworden sind.»',
            },
            {
              kind: 'mc',
              question: 'Warum werden Antibiotika oft unnötig verschrieben?',
              options: [
                'weil Patienten ein Rezept erwarten und Ärzte wenig Zeit haben',
                'weil Antibiotika auch gegen Viren helfen',
                'weil sie billiger sind als andere Medikamente',
              ],
              answer: 0,
              explanationRu: 'Пациенты ждут рецепт, а некоторые врачи уступают, потому что времени на приём мало.',
            },
            {
              kind: 'mc',
              question: 'Was kann passieren, wenn man die Einnahme zu früh beendet?',
              options: [
                'Die Nebenwirkungen werden stärker.',
                'Gerade widerstandsfähige Erreger können überleben.',
                'Die Krankheit wird ansteckender.',
              ],
              answer: 1,
              explanationRu: 'При самовольном прекращении приёма могут выжить как раз более устойчивые возбудители.',
            },
            {
              kind: 'mc',
              question: 'Welche Rolle spielt die Tierhaltung?',
              options: [
                'Dort werden inzwischen keine Antibiotika mehr eingesetzt.',
                'Tiere sind gegen resistente Keime immun.',
                'Über Gülle und Abwasser gelangen resistente Keime in die Umwelt.',
              ],
              answer: 2,
              explanationRu: 'В животноводстве используют много антибиотиков; устойчивые бактерии попадают в окружающую среду через навоз и сточные воды.',
            },
            {
              kind: 'mc',
              question: 'Warum entwickeln Pharmakonzerne kaum neue Antibiotika?',
              options: [
                'Neue Mittel sollen selten eingesetzt werden und bringen deshalb wenig Umsatz.',
                'Die Forschung an Antibiotika ist gesetzlich eingeschränkt.',
                'Es gibt zu wenige Wissenschaftler auf diesem Gebiet.',
              ],
              answer: 0,
              explanationRu: 'Новое средство нужно применять как можно реже, чтобы не возникла устойчивость, — поэтому оно приносит мало выручки.',
            },
            {
              kind: 'mc',
              question: 'Was rät die Referentin den Zuhörern?',
              options: [
                'übrig gebliebene Tabletten an Familienmitglieder weiterzugeben',
                'das Antibiotikum so lange zu nehmen, wie es verordnet wurde',
                'Antibiotika vorbeugend vor einer Reise einzunehmen',
              ],
              answer: 1,
              explanationRu: '«Nehmen Sie es genau so lange, wie Ihre Ärztin es verordnet hat.» Остатки таблеток другим не передавать.',
            },
          ],
        },
      ],
    },
  ],
};
