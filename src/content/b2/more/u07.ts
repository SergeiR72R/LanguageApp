import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Sie hat seit drei Tagen hohes Fieber und Gliederschmerzen. Sie ___ sich mit der Grippe angesteckt haben, da bin ich mir ganz sicher.',
      options: ['dürfte', 'muss', 'will', 'soll'],
      answer: 1,
      explanationRu: 'Говорящий почти уверен («da bin ich mir ganz sicher») → muss + Infinitiv Perfekt. Dürfte — только «вероятно».',
    },
    {
      type: 'choice',
      prompt: 'Mein Kollege ___ noch nie einen Tag krank gewesen sein – das behauptet er jedenfalls.',
      options: ['soll', 'muss', 'will', 'kann'],
      answer: 2,
      explanationRu: 'Человек сам утверждает о себе («das behauptet er»), говорящий сомневается → will.',
    },
    {
      type: 'choice',
      prompt: 'Er ___ sich beim Fußball nicht verletzt haben – er war am Samstag doch gar nicht beim Spiel.',
      options: ['kann', 'muss', 'soll', 'will'],
      answer: 0,
      explanationRu: 'kann nicht — «не может быть», говорящий исключает возможность: его не было на игре.',
    },
    {
      type: 'choice',
      prompt: 'Die Patientin soll schon gestern nach Hause ___.',
      options: ['gegangen haben', 'gegangen sein', 'gehen haben', 'gegangen werden'],
      answer: 1,
      explanationRu: 'Infinitiv Perfekt образуется с тем же вспомогательным глаголом, что и Perfekt: sie ist gegangen → gegangen sein.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz drückt eine Vermutung aus?',
      options: [
        'Er hat den Termin absagen müssen.',
        'Er musste den Termin absagen.',
        'Er muss den Termin abgesagt haben.',
        'Er hat den Termin abgesagt.',
      ],
      answer: 2,
      explanationRu: 'Предположение о прошлом: muss + Infinitiv Perfekt (abgesagt haben). «Hat absagen müssen» и «musste absagen» — объективное значение: ему пришлось отменить.',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Sie wird die Tabletten wohl vergessen haben.“?',
      options: [
        'Sie wird die Tabletten in Zukunft vergessen.',
        'Sie soll die Tabletten nicht vergessen.',
        'Sie hat die Tabletten absichtlich vergessen.',
        'Sie hat die Tabletten wahrscheinlich vergessen.',
      ],
      answer: 3,
      explanationRu: 'Futur II с wohl выражает предположение о прошлом: «она, наверное, забыла таблетки». Это не будущее время.',
    },
    {
      type: 'gap',
      prompt: 'Bei dem Lärm ___ er kaum geschlafen haben – er sieht völlig erschöpft aus.',
      answers: ['kann'],
      hintRu: '«вряд ли мог»',
      explanationRu: 'kann kaum / kann nicht — говорящий считает это почти невозможным: «вряд ли он мог выспаться».',
    },
    {
      type: 'gap',
      prompt: 'Ich weiß nicht, wo Lena ist. Sie ___ noch beim Yoga sein, vielleicht ist sie aber auch schon zu Hause.',
      answers: ['könnte', 'kann'],
      explanationRu: 'Неуверенное предположение («vielleicht … aber auch») → könnte (или kann): «возможно, она ещё на йоге».',
    },
    {
      type: 'gap',
      prompt: 'Wie alt ist der neue Therapeut? – Er ___ so um die fünfzig sein.',
      answers: ['dürfte'],
      hintRu: '«вероятно», Konjunktiv II от dürfen',
      explanationRu: 'В значении «вероятно» используется только форма dürfte, а не darf.',
    },
    {
      type: 'gap',
      prompt: 'Der Schauspieler soll nach seinem Burn-out monatelang in einer Klinik ___ sein.',
      answers: ['gewesen'],
      explanationRu: 'Чужое утверждение о прошлом: soll + Infinitiv Perfekt. Er ist gewesen → gewesen sein.',
    },
    {
      type: 'gap',
      prompt: 'Keine Sorge, bis zum Wochenende ___ sich die Patientin sicher gut erholt haben.',
      answers: ['wird'],
      hintRu: 'Futur II',
      explanationRu: 'Futur II (wird + Partizip II + haben) выражает уверенность, что действие завершится к определённому моменту.',
    },
    {
      type: 'gap',
      prompt: 'Der Patient muss falsch behandelt ___ sein, sonst hätte er keine Komplikationen bekommen.',
      answers: ['worden'],
      hintRu: 'повторение: пассив',
      explanationRu: 'Предположение о прошлом в пассиве: muss + Partizip II + worden sein (Er ist falsch behandelt worden).',
    },
    {
      type: 'gap',
      prompt: 'Ich habe gelesen, dass dunkle Schokolade gegen Stress helfen ___.',
      answers: ['soll'],
      explanationRu: 'Информация из чужого источника → soll. В придаточном с dass модальный глагол стоит в самом конце, после инфинитива.',
    },
    {
      type: 'order',
      words: ['Das', 'kann', 'unmöglich', 'an', 'dem Medikament', 'liegen.'],
      translationRu: 'Это никак не может быть связано с лекарством.',
      explanationRu: 'kann unmöglich = kann nicht: говорящий исключает возможность. Модальный глагол на втором месте, инфинитив в конце.',
    },
    {
      type: 'order',
      words: ['Er', 'will', 'das Rauchen', 'ohne', 'fremde Hilfe', 'aufgegeben', 'haben.'],
      translationRu: 'Он утверждает, что бросил курить без посторонней помощи.',
      explanationRu: 'will + Infinitiv Perfekt (aufgegeben haben): человек сам так утверждает о своём прошлом.',
    },
    {
      type: 'order',
      words: ['Die Ärztin', 'meint,', 'dass', 'die Beschwerden', 'durch Stress', 'ausgelöst worden', 'sein', 'könnten.'],
      translationRu: 'Врач считает, что жалобы могли быть вызваны стрессом.',
      explanationRu: 'В придаточном: Partizip II + worden sein + модальный глагол в самом конце (ausgelöst worden sein könnten).',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите уверенное предположение с помощью модального глагола.',
      prompt: 'Ich bin fast sicher, dass sie den Arzttermin verpasst hat.',
      answers: ['Sie muss den Arzttermin verpasst haben.'],
      explanationRu: 'Почти полная уверенность → muss. Прошлое → Infinitiv Perfekt: verpasst haben.',
    },
    {
      type: 'transform',
      instructionRu: 'Повторение (Konjunktiv I): передайте ту же информацию косвенной речью, без soll.',
      prompt: 'Die neue Therapie soll sehr wirksam sein.',
      answers: [
        'Man sagt, die neue Therapie sei sehr wirksam.',
        'Es heißt, die neue Therapie sei sehr wirksam.',
        'Man sagt, dass die neue Therapie sehr wirksam sei.',
        'Es heißt, dass die neue Therapie sehr wirksam sei.',
      ],
      explanationRu: 'soll в субъективном значении = «говорят, что». То же можно выразить косвенной речью с Konjunktiv I: …, die Therapie sei sehr wirksam.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите предположение с помощью Futur II и wohl.',
      prompt: 'Wahrscheinlich hat er sich überarbeitet.',
      answers: ['Er wird sich wohl überarbeitet haben.', 'Er wird sich überarbeitet haben.'],
      explanationRu: 'Futur II: wird + Partizip II + haben. Wohl подчёркивает предположение и стоит после wird и возвратного местоимения.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите, что это исключено, с помощью модального глагола.',
      prompt: 'Es ist unmöglich, dass der Test positiv gewesen ist.',
      answers: ['Der Test kann nicht positiv gewesen sein.'],
      explanationRu: 'Es ist unmöglich, dass … = kann nicht. Прошлое со вспомогательным глаголом sein → gewesen sein.',
    },
  ],
  reading: [
    {
      title: 'Warum Langeweile gesund sein kann',
      textType: 'Zeitschriftenartikel (Lückentext)',
      texts: [
        {
          heading: 'Lob der Langeweile',
          body: `Wann haben Sie sich zuletzt so richtig gelangweilt? Vermutlich können sich viele Menschen kaum daran erinnern. Sobald wir an der Bushaltestelle warten oder im Wartezimmer sitzen, greifen wir zum Smartphone. [1] Doch genau das könnte ein Fehler sein, meinen Psychologen.

Langeweile hat einen schlechten Ruf. Sie gilt als unproduktiv, und wer sich langweilt, muss – so denken viele – faul oder uninteressiert sein. [2] Die britische Psychologin Sandra Miles ließ in einem Experiment eine Gruppe von Teilnehmern zunächst eine Viertelstunde lang Nummern aus einem Telefonbuch abschreiben. Danach sollten sie möglichst viele Verwendungsmöglichkeiten für zwei Plastikbecher finden. Das Ergebnis: Die gelangweilte Gruppe hatte deutlich mehr und originellere Ideen als eine Kontrollgruppe, die direkt mit der kreativen Aufgabe begonnen hatte.

Wie lässt sich das erklären? Wenn das Gehirn keine Reize von außen bekommt, schaltet es in eine Art Ruhemodus. [3] In diesem Zustand verknüpft es Erinnerungen und Gedanken auf neue Weise. Viele Menschen kennen das: Die besten Ideen kommen ihnen unter der Dusche oder bei einem Spaziergang.

[4] Wer sich ständig ablenkt, gönnt seinem Gehirn kaum Pausen. Auf Dauer dürfte das zu Erschöpfung führen, vermuten Fachleute. Manche bringen die ständige Erreichbarkeit sogar mit der steigenden Zahl von Burn-out-Fällen in Verbindung. [5]

Was also tun? Psychologen raten nicht dazu, das Smartphone ganz aus dem Alltag zu verbannen. Es genüge schon, bewusst kleine Lücken im Tagesablauf zu lassen: zehn Minuten aus dem Fenster schauen, ohne Kopfhörer spazieren gehen oder im Zug einfach nur nachdenken. [6] Doch mit etwas Übung, so die Forscher, werde es leichter – und vielleicht entdecke man dabei sogar eine neue Idee.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние (формат Goethe B2 Lesen, Teil 3).',
          options: [
            'Am Anfang dürfte das vielen schwerfallen.',
            'Deshalb sollten Kinder möglichst früh ein eigenes Smartphone bekommen.',
            'Langeweile kommt so gar nicht erst auf.',
            'Ein eindeutiger Beweis für diesen Zusammenhang fehlt allerdings noch.',
            'Neuere Studien zeichnen jedoch ein ganz anderes Bild.',
            'Telefonbücher werden heute kaum noch gedruckt.',
            'Untätig ist es dabei aber keineswegs.',
            'Die ständige Beschäftigung mit dem Handy könnte aber auch der Gesundheit schaden.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 2,
              explanationRu: 'Мы сразу берём смартфон — поэтому скука даже не возникает. Следующее «Doch genau das …» относится к этому.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 4,
              explanationRu: 'Противопоставление плохой репутации скуки: новые исследования показывают другое — далее описан эксперимент.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 6,
              explanationRu: 'Мозг переходит в режим покоя, но при этом не бездействует: «In diesem Zustand verknüpft es …».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 7,
              explanationRu: 'Начало абзаца о вреде для здоровья: постоянное отвлечение, усталость, выгорание.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 3,
              explanationRu: 'После «bringen … in Verbindung» — оговорка: однозначного доказательства этой связи пока нет.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 0,
              explanationRu: 'Сначала многим это будет трудно; дальше: «Doch mit etwas Übung … werde es leichter».',
            },
          ],
        },
      ],
    },
    {
      title: 'Krankschreibung per Telefon – Leserkommentare',
      textType: 'Leserkommentare',
      texts: [
        {
          label: 'Karin, 52, Hausärztin',
          body: 'Seit wir Patienten mit leichten Erkältungen telefonisch krankschreiben dürfen, ist unser Wartezimmer im Winter deutlich leerer. Das ist ein Segen – nicht nur für uns, sondern auch für chronisch Kranke, die sich früher stundenlang zwischen hustenden Menschen anstecken konnten. Natürlich kann ich am Telefon nicht jede Krankheit erkennen. Wer mehrere Tage hohes Fieber hat, muss trotzdem in die Praxis kommen.',
        },
        {
          label: 'Dennis, 34, Teamleiter',
          body: 'In meinem Team hat sich seit der Einführung kaum etwas verändert. Wer krank ist, ist krank – das war vorher so und ist jetzt auch so. Dass die Regelung massenhaft ausgenutzt wird, halte ich für ein Märchen. Wer blaumachen wollte, hat das früher auch geschafft. Viel wichtiger fände ich, dass Führungskräfte lernen, Überlastung bei ihren Mitarbeitern früher zu erkennen.',
        },
        {
          label: 'Monika, 61, Inhaberin einer Bäckerei',
          body: 'Ich bin skeptisch. In einem kleinen Betrieb wie meinem fällt jede Krankmeldung sofort ins Gewicht. Seit es die telefonische Krankschreibung gibt, sind die Fehltage bei uns gestiegen, vor allem montags. Beweisen kann ich nichts, aber das dürfte kein Zufall sein. Abschaffen muss man die Regelung nicht, aber ich fände es fair, wenn man nach drei Tagen wieder persönlich zum Arzt müsste.',
        },
        {
          label: 'Jonas, 27, Pflegekraft',
          body: 'Ich arbeite im Krankenhaus und weiß, wie wichtig es ist, dass kranke Menschen zu Hause bleiben. Früher bin ich oft mit Erkältung zur Arbeit gegangen, weil ich keine Zeit hatte, stundenlang beim Arzt zu sitzen. Damit muss ich Kolleginnen und vielleicht sogar Patienten angesteckt haben. Die telefonische Krankschreibung schützt also nicht nur den Einzelnen, sondern alle.',
        },
        {
          label: 'Sabine, 45, Lehrerin',
          body: 'Mich stört an der Debatte, dass immer nur über Missbrauch gesprochen wird. Viel häufiger ist doch das Gegenteil: Menschen gehen krank zur Arbeit, weil sie Angst um ihren Job haben oder die Kollegen nicht im Stich lassen wollen. Gerade an Schulen ist das weit verbreitet. Statt über Kontrollen sollten wir lieber darüber reden, warum sich so viele nicht trauen, zu Hause zu bleiben.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Kommentare. Welche Aussage passt zu welcher Person? Für eine Aussage gibt es keine passende Person.',
          instructionRu: 'Прочитайте комментарии. Какое утверждение относится к какому человеку? Для одного утверждения подходящего человека нет (формат Goethe B2 Lesen, Teil 4).',
          options: ['Karin', 'Dennis', 'Monika', 'Jonas', 'Sabine'],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Diese Person vermutet, dass manche Beschäftigte die Regelung ausnutzen.',
              answer: 2,
              explanationRu: 'Моника: число пропусков выросло, особенно по понедельникам — «das dürfte kein Zufall sein».',
            },
            {
              kind: 'match',
              prompt: 'Diese Person ist früher selbst krank zur Arbeit gegangen.',
              answer: 3,
              explanationRu: 'Йонас: «Früher bin ich oft mit Erkältung zur Arbeit gegangen».',
            },
            {
              kind: 'match',
              prompt: 'Diese Person weist darauf hin, dass eine Diagnose am Telefon Grenzen hat.',
              answer: 0,
              explanationRu: 'Карин: «Natürlich kann ich am Telefon nicht jede Krankheit erkennen».',
            },
            {
              kind: 'match',
              prompt: 'Diese Person meint, dass Vorgesetzte Überlastung früher bemerken sollten.',
              answer: 1,
              explanationRu: 'Деннис: руководители должны раньше распознавать перегрузку сотрудников.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person fordert, die telefonische Krankschreibung ganz abzuschaffen.',
              answer: -1,
              explanationRu: 'Никто этого не требует. Моника прямо пишет: «Abschaffen muss man die Regelung nicht» — она хочет лишь личного визита к врачу через три дня.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person findet, dass in der Diskussion ein wichtiges Problem zu kurz kommt.',
              answer: 4,
              explanationRu: 'Сабина: говорят только о злоупотреблениях, а чаще люди приходят на работу больными.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person erwähnt, dass die Regelung auch chronisch Kranken nützt.',
              answer: 0,
              explanationRu: 'Карин: хронически больные больше не заражаются в переполненной приёмной.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Streitfrage: Gesundheits-Apps – Hilfe oder Stress?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin', B: 'Dr. Lukas Heim, Sportmediziner', C: 'Nina Berger, Psychologin' },
      situation: 'Sie hören eine Diskussion im Radio über Apps, mit denen man Schlaf, Schritte und Kalorien misst.',
      playCount: 1,
      text: `A: Guten Abend und willkommen zur „Streitfrage“. Schrittzähler, Schlaf-Apps, Kalorienrechner – Millionen Menschen vermessen inzwischen ihren Körper. Ist das gesund, oder setzt es uns unter Druck? Darüber spreche ich mit dem Sportmediziner Dr. Lukas Heim und der Psychologin Nina Berger. Herr Heim, Sie nutzen solche Apps selbst, oder?
B: Ja, seit Jahren. Und ich empfehle sie auch vielen Patienten. Wer schwarz auf weiß sieht, dass er an einem Tag nur zweitausend Schritte gegangen ist, bewegt sich am nächsten Tag meistens mehr. Die Zahlen machen sichtbar, was wir sonst gern verdrängen.
C: Das mag für manche stimmen. In meiner Praxis erlebe ich aber oft das Gegenteil. Ich habe Klientinnen, die nachts aufwachen und als Erstes auf ihre Schlaf-App schauen – und sich dann Sorgen machen, weil sie angeblich zu wenig Tiefschlaf hatten. Das kann nicht gesund sein.
A: Frau Berger, Sie sprechen von einer Art Abhängigkeit?
C: In extremen Fällen ja. Die meisten Nutzer haben damit natürlich kein Problem. Aber wer ohnehin zu Perfektionismus neigt, für den können solche Apps zur Belastung werden. Dann geht es nicht mehr ums Wohlbefinden, sondern nur noch darum, ein Ziel zu erreichen.
B: Da muss ich widersprechen. Das Problem ist doch nicht die App, sondern wie man sie nutzt. Mit einem Messer kann man Gemüse schneiden oder sich verletzen – deshalb verbietet man ja auch keine Messer.
A: Wie genau sind die Daten eigentlich, Herr Heim?
B: Bei Schritten und Puls ziemlich genau. Bei Schlafphasen oder beim Kalorienverbrauch muss man vorsichtig sein, da dürften die Abweichungen erheblich sein. Ich sage meinen Patienten immer: Achten Sie auf Trends über mehrere Wochen, nicht auf den einzelnen Wert.
C: Genau das ist mein Punkt: Viele Menschen vertrauen der App mehr als ihrem eigenen Körpergefühl. Wenn ich mich ausgeruht fühle, die App aber sagt, ich hätte schlecht geschlafen – wem glaube ich dann?
A: Ein Hörer hat uns gerade geschrieben, seine Krankenkasse belohne ihn mit Bonuspunkten, wenn er seine Schritte mit ihr teilt. Was halten Sie davon?
C: Da bin ich sehr skeptisch. Gesundheitsdaten sind äußerst sensibel. Heute gibt es Bonuspunkte, morgen vielleicht höhere Beiträge für alle, die sich angeblich zu wenig bewegen.
B: Diese Sorge verstehe ich, aber im Moment ist das völlig freiwillig. Und wenn so ein Bonus Menschen motiviert, sich mehr zu bewegen, finde ich das grundsätzlich richtig.
A: Zum Schluss: Ihr Rat an unsere Hörerinnen und Hörer?
B: Nutzen Sie die Apps als Werkzeug, nicht als Richter.
C: Und legen Sie das Handy ab und zu bewusst weg. Ihr Körper sagt Ihnen meistens selbst, was er braucht.`,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слышите дискуссию один раз. Кто что говорит? (формат Goethe B2 Hören, Teil 3)',
          options: ['Moderatorin', 'Dr. Heim', 'Frau Berger'],
          items: [
            {
              kind: 'match',
              prompt: 'Konkrete Zahlen können Menschen dazu bringen, sich mehr zu bewegen.',
              answer: 1,
              explanationRu: 'Хайм: кто видит, что прошёл всего 2000 шагов, на следующий день двигается больше.',
            },
            {
              kind: 'match',
              prompt: 'Schlaf-Apps können Menschen unnötig beunruhigen.',
              answer: 2,
              explanationRu: 'Бергер: клиентки просыпаются ночью, смотрят в приложение и волнуются из-за «недостатка глубокого сна».',
            },
            {
              kind: 'match',
              prompt: 'Besonders gefährdet sind Menschen, die zum Perfektionismus neigen.',
              answer: 2,
              explanationRu: 'Бергер: «wer ohnehin zu Perfektionismus neigt, für den können solche Apps zur Belastung werden».',
            },
            {
              kind: 'match',
              prompt: 'Einzelne Messwerte sollte man nicht überbewerten.',
              answer: 1,
              explanationRu: 'Хайм: следите за тенденциями в течение недель, а не за отдельным значением.',
            },
            {
              kind: 'match',
              prompt: 'Für Nutzer könnten in Zukunft finanzielle Nachteile entstehen.',
              answer: 2,
              explanationRu: 'Бергер: сегодня бонусы, завтра, возможно, более высокие взносы для тех, кто мало двигается.',
            },
            {
              kind: 'match',
              prompt: 'Die Nachricht eines Hörers bringt die Krankenkassen ins Gespräch.',
              answer: 0,
              explanationRu: 'Модератор зачитывает сообщение слушателя о бонусных баллах больничной кассы.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Was uns in Krisen stark macht',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag einer Psychologin über Resilienz an einer Volkshochschule.',
      playCount: 2,
      text: `Meine Damen und Herren, herzlich willkommen zu unserem Vortragsabend. Mein Thema heute ist Resilienz – also die Fähigkeit, Krisen zu bewältigen, ohne daran zu zerbrechen. Sie alle dürften Menschen kennen, die nach einem Jobverlust oder einer Trennung schnell wieder auf die Beine kommen, während andere monatelang darunter leiden. Woran liegt das?

Lange Zeit glaubte man, Resilienz sei angeboren. Bekannt wurde der Begriff unter anderem durch eine Langzeitstudie auf der Hawaii-Insel Kauai. Forscher begleiteten dort fast siebenhundert Kinder über vierzig Jahre lang. Etwa ein Drittel dieser Kinder wuchs unter sehr schwierigen Bedingungen auf – in Armut, mit kranken oder gewalttätigen Eltern. Trotzdem entwickelte sich ein Teil von ihnen zu zufriedenen, erfolgreichen Erwachsenen.

Was hatten diese Kinder gemeinsam? Das wichtigste Ergebnis war erstaunlich einfach: Fast alle hatten mindestens eine stabile Bezugsperson. Das musste nicht die Mutter oder der Vater sein – oft war es eine Großmutter, ein Lehrer oder eine Nachbarin. Heute wissen wir: Resilienz ist nicht in erster Linie eine Frage der Gene. Sie entsteht vor allem durch Beziehungen und Erfahrungen, und sie lässt sich auch im Erwachsenenalter noch trainieren.

Wie kann so ein Training aussehen? Ich möchte Ihnen drei Ansätze vorstellen. Erstens: Akzeptanz. Resiliente Menschen verschwenden wenig Energie darauf, sich über Dinge zu ärgern, die sie nicht ändern können. Sie konzentrieren sich auf das, was in ihrer Macht steht. Zweitens: soziale Kontakte. Wer sich in schwierigen Zeiten Unterstützung sucht, ist nicht schwach, sondern klug. Drittens: ein realistischer Optimismus. Damit meine ich nicht, alles schönzureden. Es geht darum, darauf zu vertrauen, dass man selbst etwas bewirken kann.

Ein häufiges Missverständnis möchte ich noch ansprechen. Resilient zu sein bedeutet nicht, keine negativen Gefühle zu haben. Auch resiliente Menschen sind traurig, wütend oder verzweifelt. Der Unterschied ist, dass sie diese Gefühle zulassen und nach einer gewissen Zeit wieder nach vorne schauen.

Kritisch sehe ich übrigens, dass Resilienz in manchen Unternehmen zum Modewort geworden ist. Wenn eine Firma ihren Mitarbeitenden Resilienzkurse anbietet, gleichzeitig aber die Arbeitsbelastung immer weiter erhöht, dann wird die Verantwortung auf den Einzelnen abgeschoben. Ein Yogakurs kann schlechte Arbeitsbedingungen nicht ersetzen.

Zum Schluss noch ein praktischer Tipp für heute Abend: Schreiben Sie vor dem Schlafengehen drei Dinge auf, die heute gut gelaufen sind. Das klingt banal, aber Studien zeigen, dass diese kleine Übung nach einigen Wochen die Stimmung messbar verbessern kann. Nach der Pause freue ich mich auf Ihre Fragen.`,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите доклад два раза. Выберите правильный ответ (формат Goethe B2 Hören, Teil 4).',
          items: [
            {
              kind: 'mc',
              question: 'Worum geht es in dem Vortrag?',
              options: [
                'Um die Behandlung von Depressionen.',
                'Um die Fähigkeit, Krisen zu bewältigen.',
                'Um Stress im Kindesalter.',
              ],
              answer: 1,
              explanationRu: 'Тема — Resilienz, «die Fähigkeit, Krisen zu bewältigen, ohne daran zu zerbrechen».',
            },
            {
              kind: 'mc',
              question: 'Was wurde in der Studie auf Kauai untersucht?',
              options: [
                'Die Entwicklung von Kindern über mehrere Jahrzehnte.',
                'Die Wirkung von Medikamenten auf Kinder.',
                'Die Schulleistungen von Kindern aus armen Familien.',
              ],
              answer: 0,
              explanationRu: 'Исследователи сопровождали почти 700 детей в течение сорока лет.',
            },
            {
              kind: 'mc',
              question: 'Wie viele der Kinder wuchsen unter schwierigen Bedingungen auf?',
              options: ['Fast alle.', 'Etwa die Hälfte.', 'Etwa ein Drittel.'],
              answer: 2,
              explanationRu: '«Etwa ein Drittel dieser Kinder wuchs unter sehr schwierigen Bedingungen auf».',
            },
            {
              kind: 'mc',
              question: 'Was hatten die resilienten Kinder gemeinsam?',
              options: [
                'Sie hatten besonders gute Gene.',
                'Sie hatten mindestens eine verlässliche Bezugsperson.',
                'Sie stammten aus wohlhabenden Familien.',
              ],
              answer: 1,
              explanationRu: 'Почти у всех был хотя бы один стабильный близкий взрослый — не обязательно родитель.',
            },
            {
              kind: 'mc',
              question: 'Was sagt die Referentin über Resilienz bei Erwachsenen?',
              options: [
                'Sie kann noch gestärkt werden.',
                'Sie lässt sich nicht mehr verändern.',
                'Sie hängt vor allem vom Beruf ab.',
              ],
              answer: 0,
              explanationRu: '«… sie lässt sich auch im Erwachsenenalter noch trainieren».',
            },
            {
              kind: 'mc',
              question: 'Was versteht die Referentin unter „realistischem Optimismus“?',
              options: [
                'Alle Probleme positiv zu sehen.',
                'Schwierigkeiten zu ignorieren.',
                'Das Vertrauen, selbst etwas bewirken zu können.',
              ],
              answer: 2,
              explanationRu: 'Не всё приукрашивать, а верить, «dass man selbst etwas bewirken kann».',
            },
            {
              kind: 'mc',
              question: 'Was gilt laut dem Vortrag für resiliente Menschen?',
              options: [
                'Sie haben kaum negative Gefühle.',
                'Sie lassen negative Gefühle zu.',
                'Sie sprechen nicht über ihre Gefühle.',
              ],
              answer: 1,
              explanationRu: 'Они тоже грустят и злятся, но допускают эти чувства и потом снова смотрят вперёд.',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert die Referentin an manchen Unternehmen?',
              options: [
                'Sie schieben die Verantwortung für die Belastung auf die Mitarbeitenden ab.',
                'Sie bieten ihren Mitarbeitenden keine Gesundheitskurse an.',
                'Sie zahlen zu niedrige Gehälter.',
              ],
              answer: 0,
              explanationRu: 'Фирмы предлагают курсы, но повышают нагрузку — ответственность перекладывается на отдельного сотрудника.',
            },
          ],
        },
      ],
    },
  ],
};
