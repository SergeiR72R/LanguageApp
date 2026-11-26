import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Es gibt nichts, ___ ich an meiner alten Wohnung vermisse.',
      options: ['das', 'was', 'wo', 'dem'],
      answer: 1,
      explanationRu: 'После nichts (как и после alles, etwas, vieles) относительное местоимение — was.',
    },
    {
      type: 'gap',
      prompt: 'Das ist das Schönste, ___ ich je in einer Stadt erlebt habe.',
      answers: ['was'],
      hintRu: 'после субстантивированной превосходной степени',
      explanationRu: 'После субстантивированной превосходной степени (das Schönste, das Beste) используется was, а не das.',
    },
    {
      type: 'choice',
      prompt: 'Unser Hausmeister repariert alles sofort, ___ alle Mieter sehr schätzen.',
      options: ['den', 'das', 'was', 'wo'],
      answer: 2,
      explanationRu: 'Жильцы ценят не самого смотрителя, а то, что он всё сразу чинит. Придаточное относится ко всему предложению → was. Если бы речь шла о человеке, было бы «den alle Mieter schätzen», но тогда оно стояло бы сразу после Hausmeister.',
    },
    {
      type: 'gap',
      prompt: 'Die Stadt hat den Bahnhof endlich renoviert, ___ die Pendler lange gewartet hatten.',
      answers: ['worauf'],
      hintRu: 'warten auf + Akk',
      explanationRu: 'Ждали всего события (ремонта вокзала) → wo(r) + auf. Перед гласной нужна вставка -r-: worauf.',
    },
    {
      type: 'choice',
      prompt: 'Die Mieter haben eine Mietminderung durchgesetzt, ___ der Vermieter nicht gerechnet hatte.',
      options: ['mit dem', 'womit', 'damit', 'wodurch'],
      answer: 1,
      explanationRu: 'rechnen mit + Dat. Придаточное относится ко всему предыдущему предложению → womit. Damit — указательное наречие, оно не вводит придаточное с глаголом в конце.',
    },
    {
      type: 'choice',
      prompt: 'Das ist die Initiative, ___ ich mich seit Jahren engagiere.',
      options: ['wofür', 'für die', 'für was', 'wo'],
      answer: 1,
      explanationRu: 'Ловушка: здесь есть существительное (die Initiative), поэтому нужен предлог + относительное местоимение: für die. Wofür в письменной речи — только после целого предложения или после alles, etwas, nichts.',
    },
    {
      type: 'gap',
      prompt: 'Ich komme aus Rostock, ___ übrigens auch meine Eltern stammen.',
      answers: ['woher'],
      hintRu: 'stammen aus — откуда?',
      explanationRu: 'Направление «откуда» после названия города → woher (= aus dem). Для места используется wo, для направления «куда» — wohin.',
    },
    {
      type: 'gap',
      prompt: 'Im Sommer fahren wir wieder an die Ostsee, ___ wir schon als Kinder gefahren sind.',
      answers: ['wohin'],
      hintRu: 'куда?',
      explanationRu: 'fahren — движение, вопрос «куда?» → wohin. Ошибка «wo wir gefahren sind» встречается часто, но для направления нужен wohin.',
    },
    {
      type: 'choice',
      prompt: '___ eine Wohnung in Berlin sucht, ___ rate ich zu viel Geduld.',
      options: ['Wer … dem', 'Wer … der', 'Wem … den', 'Der … wer'],
      answer: 0,
      explanationRu: 'В придаточном нужен Nominativ (wer sucht), а в главном — Dativ (jemandem raten) → dem. Так как падежи разные, местоимение dem опустить нельзя.',
    },
    {
      type: 'gap',
      prompt: 'Wen die laute Musik der Nachbarn stört, ___ sollte zuerst das Gespräch suchen.',
      answers: ['der'],
      hintRu: 'кто должен поговорить?',
      explanationRu: 'Wen — Akkusativ (die Musik stört jemanden), а в главном предложении подлежащее → Nominativ der. Падежи разные, поэтому der обязателен.',
    },
    {
      type: 'gap',
      prompt: 'Wer sich nicht an die Hausordnung hält, ___ kann der Vermieter abmahnen.',
      answers: ['den'],
      hintRu: 'jemanden abmahnen',
      explanationRu: 'abmahnen требует Akkusativ: der Vermieter mahnt jemanden ab → den. Подлежащее главного предложения здесь — der Vermieter.',
    },
    {
      type: 'choice',
      prompt: 'Die Familie, in ___ Wohnung es gebrannt hat, wohnt jetzt vorübergehend im Hotel.',
      options: ['dessen', 'deren', 'der', 'die'],
      answer: 1,
      explanationRu: 'Квартира семьи (die Familie, ж. р.) → deren. После deren артикль не ставится: in deren Wohnung.',
    },
    {
      type: 'choice',
      prompt: 'Der Park, an ___ Rand ein neues Café eröffnet hat, ist abends sehr belebt.',
      options: ['deren', 'dem', 'seinem', 'dessen'],
      answer: 3,
      explanationRu: 'На краю парка (der Park, м. р.) → an dessen Rand. Притяжательное seinem в относительном придаточном заменяется на dessen.',
    },
    {
      type: 'gap',
      prompt: 'Unser Nachbar, mit dessen ___ Hund wir oft spazieren gehen, ist schon 85 Jahre alt.',
      answers: ['altem'],
      hintRu: 'alt; mit + Dativ, der Hund',
      explanationRu: 'Dessen не показывает падеж, поэтому прилагательное получает сильное окончание, как без артикля: mit altem Hund → mit dessen altem Hund.',
    },
    {
      type: 'choice',
      prompt: 'Die Mieter, ___ gekündigt wurde, haben sich an den Mieterverein gewandt.',
      options: ['die', 'deren', 'denen', 'derer'],
      answer: 2,
      explanationRu: 'Повторение B1: kündigen + Dativ (jemandem kündigen), множественное число → denen. Deren — родительный падеж («чьи»).',
    },
    {
      type: 'order',
      words: ['Alles,', 'was', 'die Stadt', 'bisher', 'gebaut', 'hat,', 'reicht', 'bei Weitem', 'nicht', 'aus.'],
      translationRu: 'Всего, что город до сих пор построил, далеко не достаточно.',
      explanationRu: 'Всё сочетание «alles, was …» занимает первое место, поэтому сразу после придаточного идёт спрягаемый глагол reicht.',
    },
    {
      type: 'order',
      words: ['Wer', 'in der Innenstadt', 'wohnt,', 'dem', 'nützt', 'ein eigenes Auto', 'wenig.'],
      translationRu: 'Тому, кто живёт в центре города, собственный автомобиль мало что даёт.',
      explanationRu: 'Wer (Nominativ) — в придаточном, dem (Dativ: etwas nützt jemandem) — в главном. Придаточное с wer стоит на первом месте, затем dem и глагол.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью wo(r) + предлог.',
      prompt: 'Viele kleine Läden im Viertel schließen. Darüber sind die Anwohner traurig.',
      answers: ['Viele kleine Läden im Viertel schließen, worüber die Anwohner traurig sind.'],
      explanationRu: 'traurig sein über + Akk. Darüber относится ко всему событию → worüber; глагол sind уходит в конец.',
    },
    {
      type: 'transform',
      instructionRu: 'Повторение B2-03: замените причастное определение относительным придаточным.',
      prompt: 'Die vor hundert Jahren gebaute Siedlung steht heute unter Denkmalschutz.',
      answers: [
        'Die Siedlung, die vor hundert Jahren gebaut wurde, steht heute unter Denkmalschutz.',
        'Die Siedlung, die vor hundert Jahren gebaut worden ist, steht heute unter Denkmalschutz.',
      ],
      explanationRu: 'Partizip II переходного глагола = пассив: gebaut wurde. Относительное местоимение die согласуется с die Siedlung.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью dessen/deren.',
      prompt: 'Morgen besichtigen wir ein Haus. Sein großer Garten hat uns sofort gefallen.',
      answers: ['Morgen besichtigen wir ein Haus, dessen großer Garten uns sofort gefallen hat.'],
      explanationRu: 'sein (das Haus, ср. р.) → dessen. Прилагательное после dessen получает сильное окончание: großer Garten (Nominativ). Спрягаемый глагол hat — в конце.',
    },
  ],
  reading: [
    {
      title: 'Stadt oder Land – wo lebt es sich besser?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Lena Hofmann, 34, Grafikdesignerin',
          body: `Vor zwei Jahren bin ich mit meiner Familie von Hamburg in ein Dorf in der Lüneburger Heide gezogen, was viele Freunde damals für verrückt hielten. Für uns war es die richtige Entscheidung. Für das Geld, das wir in Hamburg für eine Dreizimmerwohnung bezahlt haben, bewohnen wir heute ein ganzes Haus mit Garten. Ich arbeite fast nur noch im Homeoffice, was dank schnellem Internet erstaunlich gut funktioniert. Was mir manchmal fehlt, sind spontane Kinobesuche oder ein Abendessen beim Vietnamesen um die Ecke. Aber unsere Kinder wachsen hier mit einer Freiheit auf, die sie in der Stadt nie gehabt hätten: Sie fahren allein mit dem Fahrrad zu Freunden und spielen stundenlang im Wald.`,
        },
        {
          label: 'b',
          heading: 'Karl-Heinz Brandt, 71, Rentner',
          body: `Ich habe mein ganzes Leben auf dem Land verbracht, und ich liebe meine Heimat. Aber ehrlich gesagt mache ich mir Sorgen. In unserem Dorf gibt es keinen Laden und keinen Arzt mehr, der Bus fährt zweimal am Tag. Wer kein Auto hat, ist hier verloren. Solange ich noch selbst fahren kann, geht es. Aber was ist in zehn Jahren? Meine Tochter möchte, dass ich zu ihr nach Kassel ziehe, in eine kleine Wohnung, in deren Nähe es Geschäfte, Ärzte und eine Straßenbahn gibt. Wahrscheinlich hat sie recht, auch wenn mir der Gedanke schwerfällt, das Haus zu verkaufen, in dem schon meine Eltern gewohnt haben.`,
        },
        {
          label: 'c',
          heading: 'Aylin Demir, 26, Doktorandin',
          body: `Für mich kommt nur die Großstadt infrage. Ich lebe in Köln, wo ich in fünf Minuten im Theater, im Club oder bei Freunden bin. Natürlich ist das teuer: Ich wohne in einer WG und zahle für zwölf Quadratmeter mehr als meine Cousine in Thüringen für eine ganze Wohnung. Aber diese Vielfalt, diese Begegnungen mit Menschen aus aller Welt – das ist etwas, worauf ich nicht verzichten möchte. Dass man auf dem Land gesünder lebt, halte ich übrigens für ein Klischee. Dort sitzen die Leute doch ständig im Auto, während ich fast alles zu Fuß oder mit dem Rad erledige.`,
        },
        {
          label: 'd',
          heading: 'Thomas Albers, 48, Bürgermeister einer Kleinstadt',
          body: `Die Diskussion „Stadt gegen Land“ ist mir zu schwarz-weiß. Kleinstädte wie unsere bieten oft das Beste aus beiden Welten: Es gibt Schulen, ein Krankenhaus und einen Bahnhof mit direkter Verbindung in die Großstadt – und trotzdem kennt man seine Nachbarn. Seit einigen Jahren erleben wir einen starken Zuzug junger Familien, worüber wir uns natürlich freuen. Das bringt aber auch Probleme mit sich: Die Kitas sind voll, und Bauland wird knapp. Wer jetzt nicht vorausschauend plant, macht dieselben Fehler, unter denen die Großstädte heute leiden.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte a–d. Zu welcher Person passen die Aussagen 1–9? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты a–d. К какому человеку относятся высказывания 1–9? Одного человека можно выбирать несколько раз.',
          options: ['Lena Hofmann', 'Karl-Heinz Brandt', 'Aylin Demir', 'Thomas Albers'],
          items: [
            {
              kind: 'match',
              prompt: '1. Diese Person nimmt für das kulturelle Angebot hohe Wohnkosten in Kauf.',
              answer: 2,
              explanationRu: 'Айлин платит за 12 м² больше, чем кузина за целую квартиру, но не хочет отказываться от театра, клубов и разнообразия.',
            },
            {
              kind: 'match',
              prompt: '2. Diese Person befürchtet, im Alter auf dem Land nicht mehr selbstständig zurechtzukommen.',
              answer: 1,
              explanationRu: 'Карл-Хайнц: без машины в деревне «verloren»; он спрашивает себя, что будет через десять лет.',
            },
            {
              kind: 'match',
              prompt: '3. Diese Person hält die Gegenüberstellung von Stadt und Land für zu einfach.',
              answer: 3,
              explanationRu: 'Томас Альберс: «Die Diskussion „Stadt gegen Land“ ist mir zu schwarz-weiß.»',
            },
            {
              kind: 'match',
              prompt: '4. Diese Person hat auf dem Land für das gleiche Geld viel mehr Wohnfläche.',
              answer: 0,
              explanationRu: 'Лена: за деньги, которые они платили за трёхкомнатную квартиру в Гамбурге, у них теперь целый дом с садом.',
            },
            {
              kind: 'match',
              prompt: '5. Diese Person bezweifelt, dass das Leben auf dem Land gesünder ist.',
              answer: 2,
              explanationRu: 'Айлин считает это клише: в деревне люди постоянно сидят в машине.',
            },
            {
              kind: 'match',
              prompt: '6. Diese Person sieht im Wachstum ihres Ortes auch Schwierigkeiten.',
              answer: 3,
              explanationRu: 'Томас рад притоку семей, но детские сады переполнены, а земли под застройку мало.',
            },
            {
              kind: 'match',
              prompt: '7. Diese Person kann ihren Beruf unabhängig vom Wohnort ausüben.',
              answer: 0,
              explanationRu: 'Лена почти всегда работает из дома, и благодаря быстрому интернету это хорошо получается.',
            },
            {
              kind: 'match',
              prompt: '8. Diese Person denkt darüber nach, auf Wunsch eines Familienmitglieds umzuziehen.',
              answer: 1,
              explanationRu: 'Дочь Карла-Хайнца хочет, чтобы он переехал к ней в Кассель, и он признаёт, что она, вероятно, права.',
            },
            {
              kind: 'match',
              prompt: '9. Diese Person meint, dass Kinder auf dem Land mehr Freiraum haben.',
              answer: 0,
              explanationRu: 'Лена: дети растут со свободой, которой у них в городе не было бы, — сами ездят к друзьям и играют в лесу.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vom Parkhaus zum Wohnhaus',
      textType: 'Zeitungsartikel (Lückentext)',
      texts: [
        {
          body: `Mitten in der Bremer Innenstadt steht ein grauer Betonbau aus den Siebzigerjahren, an dem die meisten Passanten bisher achtlos vorbeigingen. Es ist ein Parkhaus, dessen obere Etagen seit Jahren fast leer sind. [1] Doch nun soll sich das ändern: Ein Architekturbüro hat einen Plan vorgelegt, nach dem in dem Gebäude 80 Wohnungen, eine Kita und ein Dachgarten entstehen sollen.

Die Idee ist nicht ganz neu. In mehreren europäischen Städten wurden bereits Parkhäuser, Bürogebäude oder Kaufhäuser in Wohnraum umgewandelt. [2] Denn beim Abriss eines Gebäudes und beim anschließenden Neubau wird sehr viel CO₂ freigesetzt – vor allem durch die Herstellung von Zement.

Ganz einfach ist der Umbau allerdings nicht. Parkhäuser haben niedrige Decken und kaum Fenster, was für Wohnungen natürlich ungünstig ist. [3] So sollen helle Wohnungen entstehen, deren Zimmer sich um einen begrünten Innenhof gruppieren.

Auch rechtlich gibt es Hürden. Wer ein Parkhaus in ein Wohnhaus verwandeln will, braucht eine neue Baugenehmigung und muss strengere Vorschriften für Brand- und Lärmschutz erfüllen. [4] Die Stadt will das Verfahren deshalb beschleunigen und hat eine eigene Ansprechpartnerin für solche Projekte eingesetzt.

Bleibt die Frage, wer am Ende in den neuen Wohnungen leben wird. [5] Ein Drittel der Wohnungen soll deshalb als Sozialwohnungen vermietet werden, ein weiteres Drittel an eine Genossenschaft gehen.

Kritiker weisen darauf hin, dass mit dem Parkhaus auch 400 Stellplätze verloren gehen. Die Einzelhändler in der Umgebung befürchten, dass weniger Kundschaft kommt. [6] Ob die Rechnung aufgeht, wird man frühestens in drei Jahren wissen – dann sollen die ersten Mieterinnen und Mieter einziehen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz a–h passt in welche Lücke 1–6? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение a–h подходит к какому пропуску 1–6? Два предложения лишние.',
          options: [
            'Die Planer wollen deshalb einzelne Decken herausnehmen und große Öffnungen in die Fassade schneiden.',
            'Der Grund dafür ist einfach: Immer mehr Menschen in der Innenstadt besitzen gar kein Auto mehr.',
            'Für Umweltexperten ist das oft die bessere Lösung.',
            'Die Stadt verweist dagegen auf Umfragen, nach denen die meisten Besucher ohnehin mit Bus, Bahn oder Fahrrad kommen.',
            'Solche Genehmigungsverfahren können in Deutschland mehrere Jahre dauern.',
            'Die Initiatoren betonen, dass dort keine Luxuswohnungen entstehen sollen.',
            'Viele Autofahrer wünschen sich deshalb mehr Parkplätze in der Innenstadt.',
            'Das Parkhaus soll deshalb im kommenden Jahr abgerissen werden.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 1,
              explanationRu: 'Перед пропуском сказано, что верхние этажи пустуют; предложение b объясняет причину (der Grund dafür). Вариант g противоречит этому, h — дальнейшему плану перестройки.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 2,
              explanationRu: 'После пропуска идёт обоснование с Denn: при сносе и новом строительстве выделяется много CO₂ — поэтому экологи считают перестройку лучшим решением.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 0,
              explanationRu: 'Проблема — низкие потолки и мало окон; решение — убрать часть перекрытий и прорезать проёмы. После пропуска: «So sollen helle Wohnungen entstehen».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 4,
              explanationRu: 'Речь о новом разрешении на строительство; предложение e говорит о длительности таких процедур, поэтому город хочет их ускорить (deshalb beschleunigen).',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 5,
              explanationRu: 'Вопрос «кто будет там жить?» — инициаторы подчёркивают, что элитных квартир не будет; поэтому (deshalb) треть — социальное жильё.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 3,
              explanationRu: 'Торговцы боятся потерять покупателей; город возражает (dagegen), ссылаясь на опросы: большинство и так приезжает без машины.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Forum Stadt: Autofreie Innenstadt?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Katrin Vogt',
        B: 'Jonas Berger, Verkehrsplaner bei der Stadt',
        C: 'Sabine Krämer, Inhaberin eines Modegeschäfts',
      },
      situation: 'Sie hören eine Diskussion im Radio. Die Stadt plant, die Innenstadt weitgehend autofrei zu machen.',
      text: `A: Guten Abend und willkommen zu „Forum Stadt“. Unsere Stadt will die Innenstadt ab 2027 weitgehend autofrei machen, worüber seit Wochen heftig gestritten wird. Bei mir im Studio sind Jonas Berger, Verkehrsplaner bei der Stadt, und Sabine Krämer, die in der Altstadt ein Modegeschäft führt. Herr Berger, warum eigentlich autofrei?
B: Weil der Platz in der Innenstadt begrenzt ist. Heute gehört der größte Teil der Straßenfläche parkenden Autos, die im Durchschnitt 23 Stunden am Tag stillstehen. Diese Fläche wollen wir den Menschen zurückgeben: mit Bäumen, Bänken und Spielplätzen. Wer heute durch die Altstadt geht, findet kaum einen Ort, an dem man sich gern aufhält.
C: Das klingt schön, Herr Berger, aber Sie vergessen die Geschäfte. Ein großer Teil meiner Kundschaft kommt aus dem Umland, wo es keine vernünftige Busverbindung gibt. Wenn diese Leute nicht mehr in die Stadt fahren können, kaufen sie im Internet oder im Einkaufszentrum auf der grünen Wiese.
A: Frau Krämer, gibt es dafür Zahlen?
C: In anderen Städten hatten Einzelhändler nach der Sperrung zum Teil deutliche Umsatzeinbußen. Das ist kein Gefühl, sondern eine Tatsache, über die man nicht einfach hinweggehen kann.
B: Da muss ich widersprechen. Es gibt genauso viele Beispiele, bei denen der Umsatz nach einer Übergangszeit sogar gestiegen ist. Fußgänger und Radfahrer kaufen zwar pro Besuch weniger, aber sie kommen viel häufiger. Außerdem planen wir am Stadtrand große Parkplätze, von denen alle fünf Minuten ein Shuttlebus in die Innenstadt fährt.
C: Und was ist mit Menschen, die nicht gut zu Fuß sind?
B: Für Menschen mit Behinderung, für den Lieferverkehr und für Handwerker wird es selbstverständlich Ausnahmen geben.
A: Ich möchte noch einen Punkt ansprechen. In einer Umfrage unseres Senders waren 58 Prozent der Befragten für eine autofreie Innenstadt – allerdings vor allem diejenigen, die selbst im Zentrum wohnen. Wer am Stadtrand lebt, war mehrheitlich dagegen. Die Zustimmung hängt also stark vom Wohnort ab.
B: Das überrascht mich nicht. Deshalb wollen wir die Busverbindungen in die Außenbezirke deutlich verbessern, bevor die Innenstadt gesperrt wird. Ohne das wird es keine Sperrung geben – das ist für uns die wichtigste Voraussetzung.
C: Wenn das wirklich passiert, wäre ich bereit, neu über das Projekt nachzudenken. Mein Vorschlag wäre, zunächst eine Testphase von einem Jahr zu machen – mit klaren Kriterien, nach denen man am Ende entscheidet.
A: Ein Kompromiss, mit dem vielleicht beide Seiten leben können. Frau Krämer, Herr Berger, vielen Dank für die Diskussion.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слушаете дискуссию один раз. Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Jonas Berger', 'Sabine Krämer'],
          items: [
            {
              kind: 'match',
              prompt: '1. Parkende Autos nehmen in der Innenstadt zu viel Raum ein.',
              answer: 1,
              explanationRu: 'Бергер: большая часть улиц принадлежит припаркованным машинам, которые стоят 23 часа в сутки.',
            },
            {
              kind: 'match',
              prompt: '2. Viele Kunden kommen aus Orten, die schlecht an den öffentlichen Verkehr angebunden sind.',
              answer: 2,
              explanationRu: 'Крэмер: большая часть покупателей приезжает из пригородов, где нет нормального автобусного сообщения.',
            },
            {
              kind: 'match',
              prompt: '3. Wer zu Fuß oder mit dem Rad einkauft, kommt öfter in die Geschäfte.',
              answer: 1,
              explanationRu: 'Бергер: пешеходы и велосипедисты покупают меньше за раз, но приходят гораздо чаще.',
            },
            {
              kind: 'match',
              prompt: '4. Ob man für oder gegen das Projekt ist, hängt stark vom Wohnort ab.',
              answer: 0,
              explanationRu: 'Ведущая приводит опрос: «за» в основном жители центра, жители окраин — скорее «против».',
            },
            {
              kind: 'match',
              prompt: '5. Ein zeitlich begrenzter Versuch wäre ein sinnvoller erster Schritt.',
              answer: 2,
              explanationRu: 'Крэмер предлагает сначала годовой тестовый период с чёткими критериями.',
            },
            {
              kind: 'match',
              prompt: '6. Erst müssen die Busverbindungen in die Außenbezirke besser werden.',
              answer: 1,
              explanationRu: 'Бергер: без улучшения автобусного сообщения с окраинами закрытия не будет — это главное условие.',
            },
          ],
        },
      ],
    },
    {
      title: 'Interview: Eine Quartiersmanagerin erzählt',
      kind: 'dialog',
      speakers: {
        A: 'Moderator',
        B: 'Petra Lindner, Quartiersmanagerin',
      },
      situation: 'Sie hören ein Interview mit einer Quartiersmanagerin, die in einer großen Wohnsiedlung arbeitet.',
      text: `A: Frau Lindner, Sie arbeiten seit sechs Jahren als Quartiersmanagerin in der Sonnenhang-Siedlung. Was macht man in diesem Beruf eigentlich?
B: Viele stellen sich darunter eine Art Hausverwaltung vor, aber das ist es nicht. Ich bin eher eine Vermittlerin zwischen den Bewohnern, der Stadtverwaltung, den Wohnungsunternehmen und den Vereinen. Mein Ziel ist, dass die Menschen ihr Viertel selbst mitgestalten.
A: Die Siedlung hatte lange keinen guten Ruf.
B: Das stimmt. Als die Hochhäuser in den Siebzigern gebaut wurden, galten sie als sehr modern: Zentralheizung, eigenes Bad, Balkon – das war damals etwas, wovon viele Familien träumten. Nach der Wende sind dann aber viele weggezogen, vor allem junge Leute, die Arbeit hatten. Zurück blieben oft Menschen, die sich keinen Umzug leisten konnten. Dazu kamen Leerstand und kaputte Spielplätze.
A: Und wie sieht es heute aus?
B: Heute ist die Siedlung wieder fast vollständig vermietet, worüber ich mich sehr freue. Die Mieten sind im Vergleich zur Innenstadt niedrig, und es sind viele Familien hierhergezogen, auch aus anderen Ländern. In unseren Schulen werden über zwanzig Sprachen gesprochen.
A: Führt das nicht zu Konflikten?
B: Natürlich gibt es Konflikte, wie in jeder Nachbarschaft. Meistens geht es um ganz alltägliche Dinge: Lärm, Müll, Kinder, die im Treppenhaus spielen. Wer neu ist, kennt die Regeln oft nicht. Deshalb haben wir sogenannte Hauslotsen ausgebildet – Bewohnerinnen und Bewohner, die mehrere Sprachen sprechen und bei Streit zwischen Nachbarn vermitteln.
A: Was war bisher Ihr wichtigstes Projekt?
B: Ganz klar der Gemeinschaftsgarten. Auf einer Brachfläche, auf der früher nur Müll lag, gärtnern heute fast hundert Menschen. Das Schöne daran ist: Beim Gärtnern kommt man ins Gespräch, ohne es zu planen. Eine ältere Dame, die seit vierzig Jahren hier wohnt, hat mir erzählt, dass sie dort zum ersten Mal mit ihren syrischen Nachbarn gesprochen hat – nach fünf Jahren Tür an Tür.
A: Was fehlt der Siedlung noch?
B: Vor allem eine bessere Verkehrsanbindung. Die Straßenbahn fährt abends nur alle dreißig Minuten, und es gibt keine Hausarztpraxis mehr im Viertel. Das sind Dinge, die ich nicht allein lösen kann. Dafür brauchen wir die Politik.
A: Ihre Stelle ist nur bis Ende nächsten Jahres finanziert. Wie geht es dann weiter?
B: Das ist meine größte Sorge. Viele Projekte laufen nur, weil jemand sie koordiniert. Mein Ziel ist deshalb, dass die Bewohner bis dahin selbst einen Verein gründen, der die Arbeit fortsetzt. Die ersten Treffen dazu hat es schon gegeben.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете интервью дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wie beschreibt Frau Lindner ihre Aufgabe?',
              options: [
                'Sie verwaltet die Wohnungen der Siedlung.',
                'Sie vermittelt zwischen verschiedenen Gruppen und Institutionen.',
                'Sie sucht Mieter für leer stehende Wohnungen.',
              ],
              answer: 1,
              explanationRu: 'Она прямо говорит, что это не управление домами, а посредничество между жителями, администрацией, жилищными компаниями и объединениями.',
            },
            {
              kind: 'mc',
              question: 'Warum waren die Hochhäuser in den Siebzigerjahren attraktiv?',
              options: [
                'wegen ihrer modernen Ausstattung',
                'wegen der niedrigen Mieten',
                'wegen ihrer Lage im Zentrum',
              ],
              answer: 0,
              explanationRu: 'Центральное отопление, собственная ванная, балкон — «etwas, wovon viele Familien träumten».',
            },
            {
              kind: 'mc',
              question: 'Was geschah nach der Wende?',
              options: [
                'Die meisten Hochhäuser wurden abgerissen.',
                'Viele Familien aus anderen Ländern zogen ein.',
                'Viele Berufstätige verließen die Siedlung.',
              ],
              answer: 2,
              explanationRu: 'После объединения Германии уехали прежде всего молодые люди, у которых была работа. Семьи из других стран приехали позже, уже в наши дни.',
            },
            {
              kind: 'mc',
              question: 'Welche Aufgabe haben die Hauslotsen?',
              options: [
                'Sie kontrollieren, ob die Hausordnung eingehalten wird.',
                'Sie helfen, wenn es Streit zwischen Nachbarn gibt.',
                'Sie geben Deutschkurse für neue Bewohner.',
              ],
              answer: 1,
              explanationRu: 'Hauslotsen — жители, которые говорят на нескольких языках и выступают посредниками при ссорах соседей.',
            },
            {
              kind: 'mc',
              question: 'Was ist laut Frau Lindner das Besondere am Gemeinschaftsgarten?',
              options: [
                'Die Menschen kommen dort ganz zwanglos miteinander ins Gespräch.',
                'Dort wird Gemüse für die Schulen der Siedlung angebaut.',
                'Er wurde von der Stadtverwaltung angelegt.',
              ],
              answer: 0,
              explanationRu: 'В саду люди начинают разговаривать, «ohne es zu planen»: пожилая соседка впервые заговорила с сирийскими соседями.',
            },
            {
              kind: 'mc',
              question: 'Was soll nach dem Ende ihrer Stelle passieren?',
              options: [
                'Frau Lindner will ihre Stelle privat weiterfinanzieren.',
                'Die Bewohner sollen die Arbeit in einem eigenen Verein fortsetzen.',
                'Die Stadtverwaltung übernimmt alle Projekte.',
              ],
              answer: 1,
              explanationRu: 'Её цель — чтобы жители сами основали объединение (Verein), которое продолжит работу; первые встречи уже были.',
            },
          ],
        },
      ],
    },
  ],
};
