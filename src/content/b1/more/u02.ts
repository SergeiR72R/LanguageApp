import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Unsere Katze schläft am liebsten ___ Sofa.',
      options: ['auf dem', 'auf das', 'auf den', 'auf der'],
      answer: 0,
      explanationRu: 'Где? (schlafen — состояние) → Dativ. das Sofa — средний род: auf dem Sofa.',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ die Vase mit den Blumen auf das Regal.',
      options: ['stelle', 'stehe', 'liege', 'sitze'],
      answer: 0,
      explanationRu: 'Куда? (auf das Regal — Akkusativ) → нужен глагол действия. Ваза стоит вертикально → stellen.',
    },
    {
      type: 'choice',
      prompt: 'Mein Handy ___ bestimmt wieder unter dem Kissen.',
      options: ['legt', 'liegt', 'steht', 'hängt'],
      answer: 1,
      explanationRu: 'unter dem Kissen — Dativ, вопрос «где?» → глагол состояния. Телефон лежит горизонтально → liegen.',
    },
    {
      type: 'choice',
      prompt: 'Gestern hat dein Mantel noch an der Garderobe ___.',
      options: ['gehängt', 'gehangen', 'gehangt', 'hängt'],
      answer: 1,
      explanationRu: 'Здесь hängen = «висеть» (состояние, an der Garderobe — Dativ). Это сильный глагол: hing, hat gehangen. gehängt — от «вешать».',
    },
    {
      type: 'choice',
      prompt: 'Der Hausmeister hat den Weihnachtsbaum ___ gestellt.',
      options: [
        'zwischen den Briefkästen und der Treppe',
        'zwischen die Briefkästen und die Treppe',
        'zwischen die Briefkästen und der Treppe',
      ],
      answer: 1,
      explanationRu: 'stellen — куда? → Akkusativ для обоих существительных после zwischen: die Briefkästen, die Treppe. Смешивать падежи нельзя.',
    },
    {
      type: 'choice',
      prompt: 'Frau Wolf wartet ___ Haltestelle vor unserem Haus.',
      options: ['auf der', 'in der', 'an der', 'an die'],
      answer: 2,
      explanationRu: 'Ловушка: русское «на остановке» — по-немецки an der Haltestelle. Вопрос «где?» → Dativ.',
    },
    {
      type: 'gap',
      prompt: 'Leg die Zeitung bitte auf ___ Tisch im Flur!',
      answers: ['den'],
      explanationRu: 'legen — куда? → Akkusativ. der Tisch → auf den Tisch.',
    },
    {
      type: 'gap',
      prompt: 'Die Kinder sitzen schon ___ Auto und warten auf uns.',
      answers: ['im'],
      hintRu: 'in + артикль (слитно)',
      explanationRu: 'sitzen — где? → Dativ: in dem Auto → im Auto.',
    },
    {
      type: 'gap',
      prompt: 'Heute Abend gehen wir mit den Nachbarn ___ Kino.',
      answers: ['ins'],
      hintRu: 'in + артикль (слитно)',
      explanationRu: 'gehen — куда? → Akkusativ: in das Kino → ins Kino.',
    },
    {
      type: 'gap',
      prompt: 'Ich habe mich auf ___ Bank vor dem Haus gesetzt und die Sonne genossen.',
      answers: ['die'],
      explanationRu: 'sich setzen — действие, куда? → Akkusativ: auf die Bank (die Bank — женский род).',
    },
    {
      type: 'gap',
      prompt: 'Früher ___ hier im Flur ein großer Spiegel.',
      answers: ['hing'],
      hintRu: 'hängen, претерит',
      explanationRu: 'Висеть (состояние) → сильный глагол: hängen – hing – hat gehangen. Претерит «вешать» был бы hängte, но тогда нужно дополнение.',
    },
    {
      type: 'gap',
      prompt: 'Wer hat die schmutzigen Schuhe vor die Wohnungstür ___?',
      answers: ['gestellt'],
      hintRu: 'stellen',
      explanationRu: 'vor die Wohnungstür — Akkusativ (куда?) → глагол действия stellen; он слабый: hat gestellt.',
    },
    {
      type: 'gap',
      prompt: 'Als wir einzogen, hatte der Vermieter schon neue Lampen an ___ Decke gehängt.',
      answers: ['die'],
      explanationRu: 'Повторение юнита 1 (плюсквамперфект hatte … gehängt) + hängen «вешать» → куда? → Akkusativ: an die Decke.',
    },
    {
      type: 'order',
      words: ['Der', 'Teppich', 'liegt', 'zwischen', 'dem', 'Sofa', 'und', 'dem', 'Sessel.'],
      translationRu: 'Ковёр лежит между диваном и креслом.',
      explanationRu: 'liegen — состояние → zwischen + Dativ: dem Sofa, dem Sessel.',
    },
    {
      type: 'order',
      words: ['Wir', 'haben', 'den', 'Kleiderschrank', 'neben', 'die', 'Tür', 'gestellt.'],
      translationRu: 'Мы поставили шкаф для одежды рядом с дверью.',
      explanationRu: 'stellen — действие → neben + Akkusativ (die Tür). Partizip II gestellt — в конце.',
    },
    {
      type: 'order',
      words: ['Nachdem', 'wir', 'die', 'Kisten', 'in', 'den', 'Keller', 'getragen', 'hatten,', 'tranken', 'wir', 'Kaffee.'],
      translationRu: 'После того как мы отнесли коробки в подвал, мы выпили кофе.',
      explanationRu: 'Повторение: nachdem + плюсквамперфект (getragen hatten). in den Keller — куда? → Akkusativ. После придаточного главное начинается с глагола (tranken).',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите, что вы сами кладёте чемодан туда. Начните с «Ich lege …».',
      prompt: 'Der Koffer liegt unter dem Bett.',
      answers: ['Ich lege den Koffer unter das Bett.'],
      explanationRu: 'liegen (где? + Dativ) → legen (куда? + Akkusativ): unter dem Bett → unter das Bett. Koffer становится прямым дополнением: den Koffer.',
    },
    {
      type: 'transform',
      instructionRu: 'Опишите результат: где теперь ребёнок? (Präsens)',
      prompt: 'Ich setze das Kind auf den Stuhl.',
      answers: ['Das Kind sitzt auf dem Stuhl.'],
      explanationRu: 'setzen (куда? + Akkusativ) → sitzen (где? + Dativ): auf den Stuhl → auf dem Stuhl.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте предложение в перфект.',
      prompt: 'Meine Mutter hängt die Wäsche auf den Balkon.',
      answers: ['Meine Mutter hat die Wäsche auf den Balkon gehängt.'],
      explanationRu: 'hängen «вешать» (с дополнением, куда?) — слабый глагол: hat gehängt.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте предложение в перфект (разговорный стиль).',
      prompt: 'Die Lampe hing lange über dem Esstisch.',
      answers: ['Die Lampe hat lange über dem Esstisch gehangen.', 'Die Lampe ist lange über dem Esstisch gehangen.'],
      explanationRu: 'hängen «висеть» — сильный глагол: hing → hat gehangen (на юге Германии и в Австрии также ist gehangen). Не путайте с gehängt!',
    },
  ],
  reading: [
    {
      title: 'Hausordnung der Wohnanlage Lindenhof',
      textType: 'Hausordnung',
      texts: [
        {
          heading: 'Hausordnung – Wohnanlage Lindenhof',
          body: `Liebe Mieterinnen und Mieter,
damit sich alle in unserer Wohnanlage wohlfühlen, bitten wir Sie, die folgenden Regeln zu beachten.

Ruhezeiten: Von 22 bis 7 Uhr sowie sonntags und an Feiertagen gilt im ganzen Haus Ruhe. Laute Arbeiten wie Bohren oder Hämmern sind außerdem werktags zwischen 13 und 15 Uhr nicht erlaubt. Wenn Sie eine Feier planen, informieren Sie bitte Ihre Nachbarn rechtzeitig mit einem Aushang im Treppenhaus.

Treppenhaus und Keller: Fahrräder, Kinderwagen und Schuhe dürfen nicht im Treppenhaus stehen, weil sie im Notfall den Fluchtweg versperren. Kinderwagen können Sie in den Abstellraum neben dem Eingang stellen. Fahrräder gehören in den Fahrradkeller. Das Treppenhaus wird jeden Donnerstag von einer Reinigungsfirma geputzt; die Kosten sind in den Nebenkosten enthalten.

Müll: Bitte trennen Sie Ihren Müll. Die Tonnen stehen hinter dem Haus. Altglas bringen Sie bitte zum Container an der Ecke Lindenstraße/Parkweg. Sperrmüll darf nicht neben die Mülltonnen gestellt werden; melden Sie ihn bitte bei der Stadt an.

Balkone: Blumenkästen müssen an der Innenseite des Balkongeländers hängen. Grillen mit Holzkohle ist auf den Balkonen verboten, Elektrogrills sind erlaubt. Wäsche dürfen Sie auf dem Balkon trocknen, aber nicht über das Geländer hängen.

Haustiere: Kleine Tiere wie Fische oder Hamster brauchen keine Genehmigung. Für Hunde und Katzen benötigen Sie die schriftliche Erlaubnis der Hausverwaltung.

Bei Problemen erreichen Sie unseren Hausmeister, Herrn Kowalski, montags bis freitags von 8 bis 12 Uhr unter 0351 47 11 20.

Ihre Hausverwaltung Lindenhof GmbH`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Hausordnung. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте правила проживания. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was sollen Mieter tun, wenn sie eine Party machen wollen?',
              options: ['Die Hausverwaltung um Erlaubnis bitten.', 'Die Nachbarn vorher mit einem Aushang informieren.', 'Den Hausmeister anrufen.'],
              answer: 1,
              explanationRu: '«Wenn Sie eine Feier planen, informieren Sie bitte Ihre Nachbarn rechtzeitig mit einem Aushang im Treppenhaus».',
            },
            {
              kind: 'mc',
              question: 'Wo dürfen Mieter ihren Kinderwagen abstellen?',
              options: ['Im Treppenhaus vor der Wohnungstür.', 'Im Fahrradkeller.', 'Im Raum neben dem Eingang.'],
              answer: 2,
              explanationRu: '«Kinderwagen können Sie in den Abstellraum neben dem Eingang stellen». В подъезде нельзя, подвал — для велосипедов.',
            },
            {
              kind: 'mc',
              question: 'Was ist auf dem Balkon erlaubt?',
              options: ['Mit einem Elektrogrill grillen.', 'Blumenkästen außen an das Geländer hängen.', 'Wäsche über das Geländer hängen.'],
              answer: 0,
              explanationRu: '«Elektrogrills sind erlaubt». Ящики для цветов — только с внутренней стороны, бельё — не через перила.',
            },
            {
              kind: 'mc',
              question: 'Wer braucht eine schriftliche Erlaubnis der Hausverwaltung?',
              options: ['Mieter, die einen Hamster haben möchten.', 'Mieter, die eine Katze halten möchten.', 'Mieter, die Sperrmüll loswerden wollen.'],
              answer: 1,
              explanationRu: '«Für Hunde und Katzen benötigen Sie die schriftliche Erlaubnis». Для хомяков разрешение не нужно, крупный мусор регистрируют в городе.',
            },
          ],
        },
      ],
    },
    {
      title: 'Haustiere in Mietwohnungen?',
      textType: 'Leserbriefe',
      texts: [
        {
          heading: 'Einleitung',
          body: 'Ein Gericht hat entschieden: Vermieter dürfen Hunde und Katzen in Mietwohnungen nicht mehr generell verbieten. Wir haben unsere Leserinnen und Leser gefragt, was sie davon halten.',
        },
        {
          label: 'Sabine, 45, Leipzig',
          body: 'Ich lebe seit Jahren mit zwei Katzen in einer Mietwohnung, und es gab noch nie Probleme. Katzen sind leise, sie bleiben in der Wohnung und stören niemanden. Für viele ältere Menschen, die allein leben, ist ein Tier der wichtigste Freund. Es ist höchste Zeit, dass Vermieter das nicht mehr einfach verbieten können.',
        },
        {
          label: 'Herbert, 67, Kassel',
          body: 'Ich vermiete selbst drei Wohnungen. Nach dem Auszug eines Mieters mit Hund musste ich den ganzen Parkettboden erneuern lassen. Das hat fast 6000 Euro gekostet, und die Kaution hat bei Weitem nicht gereicht. Wer die Böden nicht bezahlt, sollte auch nicht allein entscheiden, ob ein Hund in die Wohnung kommt.',
        },
        {
          label: 'Mira, 29, Köln',
          body: 'Ehrlich gesagt hatte ich zuerst Bedenken, als über uns ein Paar mit einem riesigen Hund eingezogen ist. Aber der Hund ist ruhiger als manche Nachbarskinder! Seitdem denke ich: Es kommt auf die Besitzer an, nicht auf das Tier. Deshalb finde ich die Entscheidung des Gerichts richtig.',
        },
        {
          label: 'Anja, 52, Rostock',
          body: 'In unserem Haus wohnen sechs Parteien, und vier davon haben Tiere: Hunde, Katzen, Meerschweinchen. Es funktioniert wunderbar, weil wir klare Regeln haben. Hunde sind im Treppenhaus an der Leine, und wer Dreck macht, putzt ihn sofort weg. Mit etwas Rücksicht ist das überhaupt kein Problem.',
        },
        {
          label: 'Paul, 34, Stuttgart',
          body: 'Meine Tochter hat eine schwere Tierhaarallergie. Wenn im Treppenhaus Katzen- oder Hundehaare liegen, bekommt sie sofort Atemprobleme. Natürlich verstehe ich Tierfreunde, aber die Gesundheit der Nachbarn muss wichtiger sein. Ich wünsche mir Häuser, in denen Tiere einfach nicht erlaubt sind.',
        },
        {
          label: 'Dieter, 58, Bremen',
          body: 'Ich habe nichts gegen Tiere, ich hatte früher selbst einen Hund. Aber unser Nachbar lässt seinen Hund jeden Tag stundenlang allein, und das arme Tier bellt ununterbrochen. Viele Leute überlegen nicht, ob eine kleine Stadtwohnung der richtige Ort für einen Hund ist. Der Vermieter sollte deshalb weiterhin Nein sagen dürfen.',
        },
        {
          label: 'Leonie, 23, Freiburg',
          body: 'Ich wohne mit zwei Freundinnen in einer WG, und wir wünschen uns schon lange eine Katze. Unser Vermieter hat es bisher immer verboten, ohne einen Grund zu nennen. Ich hoffe, dass sich das jetzt ändert. Ein Tier gibt einem so viel, gerade wenn man weit weg von der Familie lebt.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Leserbriefe. Ist die Person für Hunde und Katzen in Mietwohnungen?',
          instructionRu: 'Прочитайте письма читателей. Выступает ли человек за то, чтобы в съёмных квартирах можно было держать собак и кошек?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: 'Sabine', answer: true, explanationRu: 'Её кошки никому не мешают, и она считает, что запрет давно пора отменить («Es ist höchste Zeit …»).' },
            { kind: 'tf', statement: 'Herbert', answer: false, explanationRu: 'Как арендодатель он заплатил за новый паркет после собаки и хочет решать сам.' },
            { kind: 'tf', statement: 'Mira', answer: true, explanationRu: 'Сначала сомневалась, но теперь считает решение суда правильным: всё зависит от хозяев.' },
            { kind: 'tf', statement: 'Anja', answer: true, explanationRu: 'В её доме много животных, и с правилами и взаимным уважением это «überhaupt kein Problem».' },
            { kind: 'tf', statement: 'Paul', answer: false, explanationRu: 'Из-за аллергии дочери он хочет дома, где животные запрещены.' },
            { kind: 'tf', statement: 'Dieter', answer: false, explanationRu: 'Ловушка: «nichts gegen Tiere», но вывод — арендодатель должен иметь право говорить «нет».' },
            { kind: 'tf', statement: 'Leonie', answer: true, explanationRu: 'Она хочет кошку и надеется, что запрет арендодателя теперь отменят.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Führung durch das Mehrgenerationenhaus',
      kind: 'monolog',
      situation: 'Sie nehmen an einer Führung durch ein neues Mehrgenerationenhaus teil.',
      text: `Herzlich willkommen im Mehrgenerationenhaus „Sonnenhof“! Mein Name ist Claudia Brandt, ich arbeite bei der Wohnungsgenossenschaft Neustadt und zeige Ihnen heute unser neues Haus. Bitte bleiben Sie während der Führung zusammen, denn an einigen Stellen wird noch gebaut.

Wir stehen jetzt im Eingangsbereich. Hier links an der Wand hängen die Briefkästen, rechts sehen Sie das Schwarze Brett. Dort können die Bewohnerinnen und Bewohner Zettel aufhängen, zum Beispiel, wenn sie Hilfe suchen oder etwas verschenken wollen.

Insgesamt hat das Haus 32 Wohnungen auf vier Etagen. Im Erdgeschoss wohnen vor allem ältere Menschen, weil die Wohnungen dort barrierefrei sind. In den oberen Etagen leben Familien, Paare und auch zwei Wohngemeinschaften mit Studierenden. Die Idee ist ganz einfach: Die Generationen helfen sich gegenseitig. Die Studierenden gehen zum Beispiel für die Seniorinnen und Senioren einkaufen und zahlen dafür etwas weniger Miete.

Gehen wir jetzt bitte durch diese Tür in den Gemeinschaftsraum. Hier gibt es eine große Küche und lange Tische. Jeden Freitagabend kochen die Bewohner hier zusammen. Das ist freiwillig, aber meistens kommen mehr als zwanzig Leute. Den Raum kann man auch für private Feiern reservieren – die Liste hängt neben dem Kühlschrank.

Und jetzt gehen wir in den Garten. Vorsicht, hier ist eine Stufe! Den Garten pflegen die Bewohner selbst. Jede Familie hat ein kleines Beet, und in der Mitte steht ein Spielplatz für die Kinder.

Zum Schluss noch eine wichtige Information für alle, die sich für eine Wohnung interessieren: Zurzeit sind leider alle Wohnungen vermietet. Sie können sich aber auf unsere Warteliste setzen lassen. Die Formulare liegen vorne im Büro auf dem Tisch. Haben Sie noch Fragen?`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите текст один раз. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum sollen die Besucher zusammenbleiben?',
              options: ['Weil das Haus sehr groß ist.', 'Weil es noch Bauarbeiten gibt.', 'Weil die Bewohner nicht gestört werden wollen.'],
              answer: 1,
              explanationRu: '«…denn an einigen Stellen wird noch gebaut» — ещё идут строительные работы.',
            },
            {
              kind: 'mc',
              question: 'Wer wohnt im Erdgeschoss?',
              options: ['Vor allem Familien mit Kindern.', 'Studierende in Wohngemeinschaften.', 'Hauptsächlich ältere Menschen.'],
              answer: 2,
              explanationRu: '«Im Erdgeschoss wohnen vor allem ältere Menschen, weil die Wohnungen dort barrierefrei sind».',
            },
            {
              kind: 'mc',
              question: 'Warum zahlen die Studierenden weniger Miete?',
              options: ['Weil sie den älteren Bewohnern helfen.', 'Weil ihre Wohnungen kleiner sind.', 'Weil sie sich um den Garten kümmern.'],
              answer: 0,
              explanationRu: 'Студенты, например, ходят за покупками для пожилых «und zahlen dafür etwas weniger Miete».',
            },
            {
              kind: 'mc',
              question: 'Was passiert jeden Freitag im Gemeinschaftsraum?',
              options: ['Dort finden private Feiern statt.', 'Es gibt eine Hausversammlung.', 'Die Bewohner kochen gemeinsam.'],
              answer: 2,
              explanationRu: '«Jeden Freitagabend kochen die Bewohner hier zusammen». Частные праздники возможны по записи, но не каждую пятницу.',
            },
            {
              kind: 'mc',
              question: 'Was können Interessenten tun?',
              options: ['Eine freie Wohnung besichtigen.', 'Sich auf die Warteliste setzen lassen.', 'Eine Anzeige am Schwarzen Brett aufhängen.'],
              answer: 1,
              explanationRu: 'Все квартиры сданы, но можно записаться в лист ожидания — анкеты лежат в офисе.',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Wie viel Nachbarschaft brauchen wir?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin', B: 'Jan Becker, Gründer eines Nachbarschaftsvereins', C: 'Ruth Hagen, Rentnerin' },
      situation: 'Sie hören eine Diskussion im Radio zum Thema „Nachbarschaft in der Stadt“.',
      text: `A: Guten Abend und willkommen zu „Stadtgespräch“. Unser Thema heute: Nachbarschaft. Viele Menschen in der Stadt kennen nicht einmal die Namen ihrer Nachbarn. Ist das ein Problem? Bei mir im Studio sind Jan Becker, der in Leipzig einen Nachbarschaftsverein gegründet hat, und Ruth Hagen, Rentnerin aus Dresden. Herr Becker, warum haben Sie den Verein gegründet?
B: Als ich vor fünf Jahren in mein Haus eingezogen bin, habe ich mich zuerst ziemlich einsam gefühlt. Im Treppenhaus hat man sich kaum gegrüßt. Dann habe ich einfach einen Zettel an die Haustür gehängt und alle zu einem Hoffest eingeladen. Es sind fast vierzig Leute gekommen! Daraus ist dann der Verein entstanden.
A: Frau Hagen, Sie sehen das etwas anders, oder?
C: Ja. Ich wohne seit über dreißig Jahren im selben Haus, und ich verstehe mich gut mit meinen Nachbarn. Aber ich will nicht jeden Samstag auf einem Hoffest sitzen. Für mich ist die Wohnung ein privater Ort. Ein freundliches „Guten Tag“ im Treppenhaus reicht mir völlig.
A: Aber gerade ältere Menschen sind doch oft allein. Ist mehr Kontakt da nicht wichtig?
C: Natürlich, Einsamkeit ist ein großes Thema. Aber man kann niemanden zu Kontakten zwingen. Wenn ich Hilfe brauche, weiß ich, wen ich fragen kann. Das ist für mich gute Nachbarschaft – nicht ein Verein mit Terminen und Regeln.
B: Bei uns muss ja niemand mitmachen. Aber wir haben zum Beispiel eine Liste im Treppenhaus: Wer kann Pakete annehmen, wer gießt im Urlaub die Blumen? Viele ältere Nachbarn sind froh darüber, weil sie sich nicht trauen, einfach an fremden Türen zu klingeln.
A: Herr Becker, gibt es auch Konflikte?
B: Klar. Beim letzten Hoffest haben sich zwei Nachbarn über den Lärm beschwert. Seitdem hören wir um zehn Uhr auf. Ich finde, Konflikte kann man am besten lösen, wenn man sich persönlich kennt.
C: Da stimme ich Ihnen zu. In unserem Haus gab es früher oft Streit wegen der Mülltrennung. Erst als wir uns alle einmal zusammengesetzt und darüber gesprochen haben, ist es besser geworden.
A: Zum Schluss: Was raten Sie jemandem, der neu in ein Haus zieht?
C: Sich vorstellen! Einfach klingeln und Hallo sagen. Mehr braucht man am Anfang nicht.
B: Und keine Angst haben, um Hilfe zu bitten. Wer fragt, bekommt meistens auch eine Antwort.
A: Vielen Dank Ihnen beiden für das Gespräch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was?',
          instructionRu: 'Вы слышите дискуссию два раза. Кто что говорит?',
          options: ['Moderatorin', 'Jan Becker', 'Ruth Hagen'],
          items: [
            { kind: 'match', prompt: 'Viele Stadtbewohner wissen nicht, wie ihre Nachbarn heißen.', answer: 0, explanationRu: 'Модератор во вступлении: «Viele Menschen in der Stadt kennen nicht einmal die Namen ihrer Nachbarn».' },
            { kind: 'match', prompt: 'Nach dem Einzug habe ich mich zuerst allein gefühlt.', answer: 1, explanationRu: 'Ян Беккер: «…habe ich mich zuerst ziemlich einsam gefühlt».' },
            { kind: 'match', prompt: 'Ein kurzer Gruß im Treppenhaus ist für mich genug.', answer: 2, explanationRu: 'Рут Хаген: «Ein freundliches „Guten Tag“ … reicht mir völlig».' },
            { kind: 'match', prompt: 'Gerade ältere Leute sind häufig allein.', answer: 0, explanationRu: 'Вопрос модератора: «Aber gerade ältere Menschen sind doch oft allein».' },
            { kind: 'match', prompt: 'Gute Nachbarschaft braucht keine festen Termine und Regeln.', answer: 2, explanationRu: 'Рут Хаген: хорошее соседство — «nicht ein Verein mit Terminen und Regeln».' },
            { kind: 'match', prompt: 'Eine Liste hilft Menschen, die nicht gern bei Fremden klingeln.', answer: 1, explanationRu: 'Ян Беккер рассказывает о списке в подъезде для пожилых соседей.' },
            { kind: 'match', prompt: 'Ein gemeinsames Gespräch hat einen Streit über den Müll beendet.', answer: 2, explanationRu: 'Рут Хаген: спор о сортировке мусора закончился, когда все сели и поговорили.' },
            { kind: 'match', prompt: 'Man sollte sich trauen, andere um Hilfe zu bitten.', answer: 1, explanationRu: 'Ян Беккер: «…keine Angst haben, um Hilfe zu bitten».' },
          ],
        },
      ],
    },
  ],
};
