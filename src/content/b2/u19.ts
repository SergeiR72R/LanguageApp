import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-19',
  level: 'B2',
  order: 19,
  title: 'Tourismus & Reisen',
  titleRu: 'Туризм и путешествия',
  goalsRu: [
    'Понимать репортажи и статьи о туризме, массовом туризме и правах путешественников.',
    'Правильно использовать es как заполнитель первого места, как коррелят и в безличных выражениях (es gibt, es geht um, es handelt sich um).',
    'Строить среднюю часть предложения (Mittelfeld): порядок дополнений и местоимений, обстоятельства по схеме TeKaMoLo.',
    'Письменно и устно аргументировать свою позицию по проблемам туризма.',
  ],
  grammar: {
    topic: 'Funktionen von „es“ und Satzbau im Mittelfeld',
    topicRu: 'Функции местоимения es и порядок слов в средней части предложения',
    explanationRu: `Местоимение **es** выполняет в немецком несколько функций. В русском у него часто нет соответствия, поэтому его либо забывают, либо оставляют там, где оно уже не нужно.

**1. es — заполнитель первого места (Platzhalter).** Глагол в повествовательном предложении стоит на втором месте. Если мы не хотим начинать с подлежащего (например, чтобы подчеркнуть новую информацию), первое место занимает es: **Es** kamen gestern Tausende Besucher. Это es — не подлежащее: глагол согласуется с настоящим подлежащим (kamen — мн. ч.). Как только первое место занято другим членом предложения, es исчезает: Gestern kamen Tausende Besucher.

**2. es — коррелят.** Оно заранее указывает на придаточное (dass, ob, w-) или инфинитивный оборот: **Es** ist sinnvoll, früh zu buchen. Ich finde **es** schade, dass … Если придаточное стоит в начале, es обычно отпадает: Früh zu buchen ist sinnvoll. После некоторых глаголов es обязательно: Ich hasse **es**, … Wir haben **es** geschafft, …

**3. Безличное es — постоянная часть выражения.** Оно никогда не исчезает, а при инверсии просто встаёт после глагола: es gibt + Akk, es geht um + Akk, es handelt sich um + Akk, es kommt auf + Akk an, es fehlt an + Dat: Im Hotel gibt **es** keinen Aufzug.

**Средняя часть предложения (Mittelfeld):**
- два существительных: обычно Dativ перед Akkusativ — Sie zeigt **dem Gast das Zimmer**;
- местоимение стоит перед существительным — Sie zeigt **ihm** das Zimmer / Sie zeigt **es** dem Gast;
- два местоимения: Akkusativ перед Dativ — Sie zeigt **es ihm**;
- обстоятельства часто идут по схеме **Te**mporal – **Ka**usal – **Mo**dal – **Lo**kal: Wir fahren **morgen wegen des Streiks mit dem Auto nach Wien**.

**Типичные ошибки русскоговорящих:**
- пропуск es: *Ist wichtig, dass …* → **Es** ist wichtig, dass …
- *Es geben viele Hotels* → es gibt всегда в ед. ч.: Es **gibt** viele Hotels.
- *Der Text handelt sich um …* → **Im Text handelt es sich um …** или Der Text handelt **von** …
- лишнее es после инверсии: *Heute kommen es viele Gäste* → Heute kommen viele Gäste.
- местоимение после существительного: *Ich gebe dem Gast ihn* → Ich gebe **ihn dem Gast**.`,
    table: [
      ['Функция', 'Пример', 'Что происходит с es, если первое место занято?'],
      ['Platzhalter', 'Es warten viele Gäste an der Rezeption.', 'исчезает: An der Rezeption warten viele Gäste.'],
      ['Korrelat', 'Es ist ratsam, eine Versicherung abzuschließen.', 'отпадает, если инфинитив/придаточное впереди: Eine Versicherung abzuschließen ist ratsam.'],
      ['безличное es', 'Es gibt in der Saison kaum freie Zimmer.', 'остаётся: In der Saison gibt es kaum freie Zimmer.'],
      ['Mittelfeld: Nomen', 'Der Portier gibt dem Gast den Schlüssel.', 'Dativ → Akkusativ'],
      ['Mittelfeld: Pronomen', 'Der Portier gibt ihn dem Gast. / Er gibt ihn ihm.', 'Pronomen vor Nomen; Akkusativ- vor Dativpronomen'],
    ],
    examples: [
      {
        de: 'Es drängen sich jeden Sommer Hunderttausende Besucher durch die engen Gassen der Altstadt.',
        ru: 'Каждое лето сотни тысяч посетителей протискиваются по узким переулкам старого города.',
      },
      {
        de: 'Es ist ratsam, die Einreisebestimmungen schon vor der Buchung zu prüfen.',
        ru: 'Рекомендуется проверить правила въезда ещё до бронирования.',
      },
      {
        de: 'In dem Bericht geht es um die Frage, wie viel Tourismus eine kleine Insel verträgt.',
        ru: 'В репортаже речь идёт о том, сколько туризма может выдержать маленький остров.',
      },
      {
        de: 'Bei dem Schaden handelt es sich um einen Reisemangel, für den der Veranstalter haftet.',
        ru: 'Этот ущерб является дефектом путешествия, за который отвечает туроператор.',
      },
      {
        de: 'Die Reiseleiterin hat es uns am ersten Abend ausführlich erklärt.',
        ru: 'Гид подробно объяснила нам это в первый же вечер.',
      },
      {
        de: 'Wir sind letzten Herbst wegen des Bahnstreiks mit einem Mietwagen quer durch Norwegen gefahren.',
        ru: 'Прошлой осенью из-за забастовки на железной дороге мы проехали через всю Норвегию на арендованной машине.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'In der Altstadt ___ zahlreiche kleine Pensionen.',
        options: ['es gibt', 'gibt es', 'gibt', 'geben es'],
        answer: 1,
        explanationRu: 'es gibt — безличное выражение, es не исчезает. При инверсии оно встаёт сразу после глагола: In der Altstadt gibt es … Глагол всегда в ед. ч.',
      },
      {
        type: 'choice',
        prompt: 'Gestern ___ wegen des Streiks Tausende Reisende am Flughafen fest.',
        options: ['saßen es', 'es saßen', 'saß es', 'saßen'],
        answer: 3,
        explanationRu: 'Platzhalter-es возможно только на первом месте (Es saßen …). Первое место занято словом gestern, поэтому es исчезает. Глагол согласуется с подлежащим Reisende (мн. ч.) → saßen.',
      },
      {
        type: 'choice',
        prompt: 'Hast du den Gästen die Zimmerschlüssel schon gegeben? – Ja, ich habe ___ gegeben.',
        options: ['ihnen sie', 'sie ihnen', 'ihnen die', 'es ihnen'],
        answer: 1,
        explanationRu: 'Два местоимения: Akkusativ перед Dativ. die Schlüssel → sie (Akk), den Gästen → ihnen (Dat): Ich habe sie ihnen gegeben.',
      },
      {
        type: 'choice',
        prompt: 'In der Reportage ___ die Folgen des Massentourismus für die Bewohner.',
        options: ['geht es um', 'handelt es um', 'geht um', 'handelt sich es um'],
        answer: 0,
        explanationRu: 'Устойчивое выражение es geht um + Akk; es не исчезает. handeln требует sich: es handelt sich um. Порядок: handelt es sich, а не handelt sich es.',
      },
      {
        type: 'gap',
        prompt: 'Wir haben ___ gerade noch geschafft, den letzten Zug nach Salzburg zu erreichen.',
        answers: ['es'],
        hintRu: 'коррелят к инфинитивному обороту',
        explanationRu: 'После schaffen коррелят es обязателен: Wir haben es geschafft, … zu erreichen.',
      },
      {
        type: 'gap',
        prompt: 'Bei dem Problem handelt es sich ___ einen Wasserschaden im Badezimmer.',
        answers: ['um'],
        hintRu: 'sich handeln + предлог',
        explanationRu: 'Выражение es handelt sich um + Akk («речь идёт о, это …»). Ошибка: *es handelt sich von*.',
      },
      {
        type: 'gap',
        prompt: 'Die Reiseleiterin hat den Teilnehmern die Route erklärt. → Sie hat ___ den Teilnehmern erklärt.',
        answers: ['sie'],
        hintRu: 'местоимение вместо die Route',
        explanationRu: 'die Route → sie (Akkusativ). Местоимение стоит перед существительным в Dativ: Sie hat sie den Teilnehmern erklärt.',
      },
      {
        type: 'gap',
        prompt: 'Bei einer Fernreise kommt ___ vor allem auf eine gute Planung an.',
        answers: ['es'],
        hintRu: 'ankommen auf + Akk',
        explanationRu: 'Безличное выражение es kommt auf + Akk an («всё зависит от, важно»). Es не исчезает, а стоит после глагола.',
      },
      {
        type: 'order',
        words: ['Es', 'haben sich', 'bereits', 'über hundert Teilnehmer', 'für die Studienreise', 'angemeldet.'],
        translationRu: 'На учебную поездку уже записались более ста участников.',
        explanationRu: 'Platzhalter-es на первом месте; подлежащее (Teilnehmer, мн. ч.) — в средней части, поэтому haben, а не hat.',
      },
      {
        type: 'order',
        words: ['Der Reiseleiter', 'hat', 'es', 'uns', 'gestern Abend', 'noch einmal', 'erklärt.'],
        translationRu: 'Гид вчера вечером ещё раз объяснил нам это.',
        explanationRu: 'Местоимения стоят сразу после спрягаемого глагола, Akkusativ (es) перед Dativ (uns), затем обстоятельства.',
      },
      {
        type: 'transform',
        instructionRu: 'Начните предложение с es (Platzhalter).',
        prompt: 'Viele Urlauber kamen trotz des Regens zum Stadtfest.',
        answers: [
          'Es kamen trotz des Regens viele Urlauber zum Stadtfest.',
          'Es kamen viele Urlauber trotz des Regens zum Stadtfest.',
        ],
        explanationRu: 'Es занимает первое место, подлежащее viele Urlauber уходит в среднюю часть. Глагол остаётся во мн. ч. (kamen).',
      },
      {
        type: 'transform',
        instructionRu: 'Начните предложение с инфинитивной группы.',
        prompt: 'Es ist leider nicht möglich, das Zimmer kostenlos zu stornieren.',
        answers: [
          'Das Zimmer kostenlos zu stornieren ist leider nicht möglich.',
          'Das Zimmer kostenlos zu stornieren, ist leider nicht möglich.',
        ],
        explanationRu: 'Если инфинитивный оборот стоит на первом месте, коррелят es отпадает: Das Zimmer kostenlos zu stornieren ist …',
      },
    ],
  },
  vocab: [
    {
      de: 'Massentourismus',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'массовый туризм',
      example: 'Der Massentourismus hat das einst ruhige Fischerdorf völlig verändert.',
      exampleRu: 'Массовый туризм полностью изменил некогда тихую рыбацкую деревню.',
    },
    {
      de: 'Reisewarnung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'официальное предупреждение о поездках (в страну)',
      example: 'Wegen der Unruhen hat das Auswärtige Amt eine Reisewarnung für die Region ausgesprochen.',
      exampleRu: 'Из-за беспорядков МИД выпустил предупреждение о поездках в этот регион.',
    },
    {
      de: 'Fernweh',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'тяга к дальним странам, жажда путешествий',
      example: 'Jedes Mal, wenn ich ein Flugzeug sehe, packt mich das Fernweh.',
      exampleRu: 'Каждый раз, когда я вижу самолёт, меня охватывает тяга к путешествиям.',
    },
    {
      de: 'Umbuchung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'перебронирование',
      example: 'Für eine Umbuchung verlangt die Fluggesellschaft eine Gebühr von 70 Euro.',
      exampleRu: 'За перебронирование авиакомпания берёт сбор 70 евро.',
    },
    {
      de: 'Annullierung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'отмена (рейса, брони)',
      example: 'Bei einer Annullierung des Fluges haben Passagiere Anspruch auf eine Entschädigung.',
      exampleRu: 'При отмене рейса пассажиры имеют право на компенсацию.',
    },
    {
      de: 'Gastfreundschaft',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'гостеприимство',
      example: 'Am meisten hat uns die Gastfreundschaft der Menschen auf dem Land beeindruckt.',
      exampleRu: 'Больше всего нас впечатлило гостеприимство людей в сельской местности.',
    },
    {
      de: 'erkunden',
      forms: 'erkundete, hat erkundet',
      pos: 'verb',
      ru: 'исследовать, разведывать (местность)',
      example: 'Am liebsten erkunden wir eine neue Stadt zu Fuß oder mit dem Fahrrad.',
      exampleRu: 'Больше всего нам нравится исследовать новый город пешком или на велосипеде.',
    },
    {
      de: 'einen Abstecher machen',
      forms: 'nach/zu + Dat',
      pos: 'phrase',
      ru: 'заехать куда-л. по пути, сделать крюк',
      example: 'Auf dem Weg nach Venedig haben wir noch einen Abstecher zum Gardasee gemacht.',
      exampleRu: 'По дороге в Венецию мы ещё заехали на озеро Гарда.',
    },
    {
      de: 'Überbuchung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'овербукинг, продажа мест сверх наличия',
      example: 'Wegen einer Überbuchung konnten zwölf Passagiere nicht mitfliegen.',
      exampleRu: 'Из-за овербукинга двенадцать пассажиров не смогли улететь.',
    },
    {
      de: 'Reiserücktrittsversicherung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'страховка от отмены поездки',
      example: 'Zum Glück hatten wir eine Reiserücktrittsversicherung abgeschlossen, als unser Sohn krank wurde.',
      exampleRu: 'К счастью, у нас была страховка от отмены поездки, когда заболел наш сын.',
    },
    {
      de: 'abseits der Touristenpfade',
      pos: 'phrase',
      ru: 'вдали от туристических маршрутов',
      example: 'Abseits der Touristenpfade entdeckt man oft die schönsten Orte.',
      exampleRu: 'Вдали от туристических маршрутов часто открываешь самые красивые места.',
    },
    {
      de: 'überlaufen',
      pos: 'adj',
      ru: 'переполненный (туристами)',
      example: 'Im August ist die Insel völlig überlaufen, deshalb fahren wir lieber im Mai.',
      exampleRu: 'В августе остров переполнен туристами, поэтому мы лучше поедем в мае.',
    },
    {
      de: 'abgelegen',
      pos: 'adj',
      ru: 'отдалённый, уединённый',
      example: 'Die Hütte liegt so abgelegen, dass es dort weder Handyempfang noch Strom gibt.',
      exampleRu: 'Хижина находится так далеко, что там нет ни мобильной связи, ни электричества.',
    },
    {
      de: 'authentisch',
      pos: 'adj',
      ru: 'подлинный, аутентичный',
      example: 'Viele Reisende wünschen sich authentische Erlebnisse statt organisierter Programme.',
      exampleRu: 'Многие путешественники хотят подлинных впечатлений вместо организованных программ.',
    },
    {
      de: 'Einreisebestimmung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'правило въезда (обычно мн. ч.)',
      example: 'Die Einreisebestimmungen haben sich kurzfristig geändert.',
      exampleRu: 'Правила въезда неожиданно изменились.',
    },
    {
      de: 'Ausgleichszahlung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'компенсационная выплата',
      example: 'Bei mehr als drei Stunden Verspätung steht Fluggästen eine Ausgleichszahlung zu.',
      exampleRu: 'При задержке более трёх часов пассажирам полагается компенсационная выплата.',
    },
    {
      de: 'Auslastung',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'загрузка, заполняемость',
      example: 'Die Hotels in der Region melden für den Sommer eine Auslastung von über 90 Prozent.',
      exampleRu: 'Гостиницы региона сообщают о загрузке летом более 90 процентов.',
    },
    {
      de: 'Kulturschock',
      article: 'der',
      plural: '-s',
      pos: 'noun',
      ru: 'культурный шок',
      example: 'In den ersten Wochen in Tokio erlebte sie einen regelrechten Kulturschock.',
      exampleRu: 'В первые недели в Токио она пережила настоящий культурный шок.',
    },
    {
      de: 'vor Ort',
      pos: 'phrase',
      ru: 'на месте',
      example: 'Die Tickets für die Bootsfahrt kann man auch vor Ort kaufen.',
      exampleRu: 'Билеты на прогулку на лодке можно купить и на месте.',
    },
    {
      de: 'Unannehmlichkeit',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'неудобство, неприятность',
      example: 'Wir bitten, die entstandenen Unannehmlichkeiten zu entschuldigen.',
      exampleRu: 'Приносим извинения за доставленные неудобства.',
    },
  ],
  listening: {
    title: 'Radioreportage: Wenn das Paradies überläuft',
    kind: 'monolog',
    text: `Es ist kurz nach acht Uhr morgens, und schon jetzt schieben sich Hunderte Menschen über die schmale Holzbrücke von Seebrück. Das kleine Dorf am Alpensee hat nur 800 Einwohner, aber an manchen Sommertagen kommen bis zu zehntausend Besucher. Die meisten bleiben nur ein, zwei Stunden: Sie steigen aus dem Reisebus, machen ein Foto vom berühmten Blick auf den See und fahren weiter.

„Früher haben wir uns über jeden Gast gefreut“, erzählt Bürgermeisterin Helga Brandner. „Heute gibt es Tage, an denen sich die Einheimischen nicht mehr aus dem Haus trauen.“ Die Bewohner klagen über Lärm, Müll und Busse, die die engen Straßen blockieren. Viele Häuser im Ortskern werden inzwischen als Ferienwohnungen vermietet, und es fehlt an bezahlbarem Wohnraum für junge Familien.

Dabei geht es der Gemeinde nicht darum, Touristen fernzuhalten. Der Tourismus ist die wichtigste Einnahmequelle. Es handelt sich vielmehr um die Frage, wie man die Besucherströme besser lenken kann. Seit diesem Jahr dürfen Reisebusse nur noch mit einem gebuchten Zeitfenster in den Ort fahren. Außerdem müssen Tagesgäste am Parkplatz eine Gebühr von fünf Euro zahlen. Das Geld fließt in die Müllentsorgung und in einen neuen Wanderweg, der die Besucher aus dem Zentrum hinaus zu weniger bekannten Aussichtspunkten führen soll.

Nicht alle sind von den Maßnahmen begeistert. Ein Souvenirhändler befürchtet Umsatzeinbußen: „Wenn weniger Busse kommen, verkaufe ich weniger.“ Die Hotelbetreiber dagegen begrüßen die Regeln. Ihre Übernachtungsgäste, so sagen sie, bringen der Region deutlich mehr als Tagestouristen, die oft nicht einmal einen Kaffee trinken.

Erste Zahlen geben der Bürgermeisterin recht: Die Zahl der Tagesbesucher ist um ein Drittel gesunken, die Zahl der Übernachtungen dagegen leicht gestiegen. Ob das Modell Schule macht, wird sich zeigen. Anfragen aus anderen Gemeinden, sagt Brandner, gebe es jedenfalls schon genug.`,
    questions: [
      {
        question: 'Welches Problem hat Seebrück?',
        options: [
          'Es kommen zu wenige Touristen in das Dorf.',
          'An manchen Tagen kommen sehr viele Tagesbesucher in den kleinen Ort.',
          'Die Holzbrücke ist baufällig und muss gesperrt werden.',
          'Die Hotels sind im Sommer nur halb ausgelastet.',
        ],
        answer: 1,
      },
      {
        question: 'Worüber klagen die Bewohner unter anderem?',
        options: [
          'Über fehlende Wohnungen für junge Familien.',
          'Über zu hohe Steuern für Hausbesitzer.',
          'Über die schlechte Busverbindung in die Stadt.',
          'Über zu wenige Geschäfte im Ortskern.',
        ],
        answer: 0,
      },
      {
        question: 'Was ist das Ziel der Gemeinde?',
        options: [
          'Sie will den Tourismus ganz verbieten.',
          'Sie will mehr Reisebusse in den Ort holen.',
          'Sie will die Besucher besser verteilen und lenken.',
          'Sie will neue Hotels im Zentrum bauen.',
        ],
        answer: 2,
      },
      {
        question: 'Wofür wird die Parkgebühr verwendet?',
        options: [
          'Für einen neuen Parkplatz am See.',
          'Für günstigere Mieten im Ortskern.',
          'Für Werbung in anderen Ländern.',
          'Für die Müllentsorgung und einen neuen Wanderweg.',
        ],
        answer: 3,
      },
      {
        question: 'Wie reagieren die Hotelbetreiber auf die neuen Regeln?',
        options: [
          'Sie befürchten weniger Übernachtungen.',
          'Sie sind dafür, weil Übernachtungsgäste der Region mehr bringen.',
          'Sie fordern eine höhere Gebühr für Tagesgäste.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На туристическом форуме обсуждают вопрос: должны ли популярные туристические места брать с туристов плату за вход или ограничивать число посетителей? Напишите свой форумный пост (Forumsbeitrag).',
    taskDe: 'In einem Reiseforum wird diskutiert: Sollen beliebte Reiseziele Eintritt verlangen oder die Zahl der Besucher begrenzen? Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Ihre Meinung zu Eintrittsgebühren und Besucherbegrenzungen',
      'Folgen des Massentourismus für Einheimische und Umwelt',
      'Eine eigene Reiseerfahrung mit einem überlaufenen oder einem ruhigen Ort',
      'Andere Möglichkeiten, Besucherströme besser zu lenken',
    ],
    minWords: 160,
    usefulPhrases: [
      'Es steht außer Frage, dass …',
      'Dabei geht es nicht nur um …, sondern auch um …',
      'Mir ist es besonders wichtig, dass …',
      'Bei … handelt es sich meiner Meinung nach um …',
      'Es wäre sinnvoller, …',
      'Es kommt letztlich darauf an, ob …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы участвуете в собрании жителей курортного городка. Город обсуждает введение туристического налога и ограничение краткосрочной аренды квартир туристам. Ваш собеседник — владелец нескольких квартир для отдыхающих, который против новых правил.',
    aiRole: 'Sie sind Thomas Berger, Besitzer von vier Ferienwohnungen in einem beliebten Urlaubsort an der Ostsee. Sie sind gegen eine Tourismusabgabe und gegen Einschränkungen bei der Vermietung von Ferienwohnungen, weil Sie Ihr Einkommen bedroht sehen. Diskutieren Sie auf B2-Niveau mit einem Anwohner, bringen Sie Gegenargumente (Arbeitsplätze, Einnahmen der Gemeinde, Freiheit des Eigentums) und sind Sie nur langsam zu einem Kompromiss bereit.',
    opener: 'Ich verstehe ja, dass es im Sommer voll wird. Aber ganz ehrlich: Ohne die Touristen gäbe es hier doch weder Restaurants noch Arbeitsplätze. Warum wollen Sie uns Vermietern das Leben schwer machen?',
    tasksRu: [
      'Опишите, какие проблемы туризм создаёт для жителей (жильё, шум, цены).',
      'Используйте не менее четырёх конструкций с es: es gibt, es geht um, es handelt sich um, es ist wichtig, dass …',
      'Возразите собеседнику и приведите пример из своего опыта путешествий.',
      'Предложите компромисс (например, квоты, налог только для коротких поездок) и договоритесь.',
    ],
    readAloud: [
      'Es kommen jeden Sommer mehr Tagesgäste in den kleinen Ort, als dort Menschen leben.',
      'In der Diskussion geht es nicht darum, Touristen fernzuhalten, sondern darum, die Besucherströme sinnvoll zu lenken.',
      'Wir haben es dem Reiseveranstalter sofort gemeldet, aber er hat uns keine Ersatzunterkunft angeboten.',
    ],
  },
};
