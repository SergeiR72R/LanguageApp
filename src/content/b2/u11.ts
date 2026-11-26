import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-11',
  level: 'B2',
  order: 11,
  title: 'Wohnen & Stadtleben',
  titleRu: 'Жильё и городская жизнь',
  goalsRu: [
    'Понимать газетные статьи, репортажи и дискуссии о рынке жилья, аренде и развитии городских районов.',
    'Использовать относительные местоимения was, wo и wo(r) + предлог (worüber, wofür), а также обобщающие придаточные с wer.',
    'Строить относительные придаточные с предлогом и родительным падежом (in dessen Garten, mit deren Hilfe).',
    'Аргументированно высказываться письменно и устно о городских проектах и проблемах своего района.',
  ],
  grammar: {
    topic: 'Relativsätze (Vertiefung): was, wo(r) + Präposition, wo, wer …, (der), Präposition + dessen/deren',
    topicRu: 'Относительные придаточные: углубление',
    explanationRu: `На уровне B1 вы выучили относительные местоимения der/die/das. Теперь — конструкции, которые особенно часто встречаются в текстах B2.

**1. was** — относительное местоимение, когда определяемое слово **не существительное**:
- после **alles, nichts, etwas, vieles, manches, einiges, das**: Das ist alles, **was** ich über die Wohnung weiß.
- после субстантивированной превосходной степени и **das Einzige**: das Beste, **was** …
- когда придаточное относится ко **всему предыдущему предложению**: Die Mieten steigen, **was** viele Familien beunruhigt.

**2. wo(r) + предлог** заменяет «предлог + was»: über was → **worüber**, für was → **wofür**, mit was → **womit**. Перед гласной вставляется **-r-**: wo**r**an, wo**r**auf, wo**r**über. Wir haben eine Wohnung gefunden, **worüber** wir sehr froh sind. После **существительного** в письменной речи нужен предлог + der/die/das: die Wohnung, **über die** ich mich freue.

**3. wo / woher / wohin** — для места, особенно после названий городов, стран и наречий (dort, überall): Ich ziehe nach Leipzig, **wo** die Mieten noch bezahlbar sind. После существительного возможно и **in dem / in der**.

**4. wer …, (der)** — «тот, кто»: **Wer** im Zentrum wohnt, (**der**) braucht kein Auto. Если падежи совпадают, der можно опустить. Если различаются — второе местоимение обязательно: **Wer** laute Nachbarn hat, **dem** hilft oft nur ein Gespräch.

**5. Предлог + dessen/deren + существительное** («в чьём…», «с чьей…»): der Vermieter, **in dessen** Haus ich wohne. Dessen/deren не склоняются, а прилагательное после них получает **сильное** окончание: mit dessen alt**em** Auto.

**Типичные ошибки русскоговорящих:**
- *das Haus, was ich gekauft habe* — после существительного нужно **das**.
- *über was* в письменной речи — правильно **worüber**.
- *in dessen dem Garten* — после dessen/deren артикль не ставится.
- *Wer zu spät kommt, ihm …* — нужно относительное **dem**, а не личное местоимение.`,
    table: [
      ['Конструкция', 'Когда употребляется', 'Пример'],
      ['was', 'после alles, nichts, etwas, das Beste …; относится ко всему предложению', 'Das ist alles, was ich weiß.'],
      ['wo(r) + предлог', 'вместо «предлог + was»', '…, worüber sich alle freuen.'],
      ['wo / woher / wohin', 'место, особенно после топонимов', 'in Berlin, wo ich wohne'],
      ['wer …, der / dem / den', 'обобщение «тот, кто»', 'Wer sucht, der findet.'],
      ['предлог + dessen / deren', 'принадлежность внутри предложной группы', 'die Stadt, in deren Zentrum …'],
    ],
    examples: [
      {
        de: 'In vielen Großstädten steigen die Mieten weiter, was vor allem junge Familien zu spüren bekommen.',
        ru: 'Во многих крупных городах арендная плата продолжает расти, что особенно ощущают молодые семьи.',
      },
      {
        de: 'Das Einzige, was in unserem Viertel fehlt, ist ein vernünftiger Supermarkt.',
        ru: 'Единственное, чего не хватает в нашем районе, — это нормальный супермаркет.',
      },
      {
        de: 'Die Stadt plant am Flussufer ein Hochhaus mit Luxuswohnungen, wogegen die Anwohner protestieren.',
        ru: 'Город планирует на берегу реки высотку с элитными квартирами, против чего протестуют жители.',
      },
      {
        de: 'Wer eine Sozialwohnung beziehen will, braucht einen Wohnberechtigungsschein.',
        ru: 'Тот, кто хочет въехать в социальное жильё, должен получить специальное разрешение.',
      },
      {
        de: 'Wem der Lärm in der Innenstadt zu viel wird, dem bleibt oft nur der Umzug an den Stadtrand.',
        ru: 'Тому, кому шум в центре города становится невыносим, часто остаётся лишь переезд на окраину.',
      },
      {
        de: 'Die Genossenschaft, in deren Häusern über 3000 Menschen leben, baut jetzt auch Wohnungen für Studierende.',
        ru: 'Кооператив, в домах которого живут более 3000 человек, теперь строит и квартиры для студентов.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Nebenkosten sind schon wieder gestiegen, ___ mich ziemlich ärgert.',
        options: ['das', 'was', 'die', 'wo'],
        answer: 1,
        explanationRu: 'Придаточное относится ко всему предыдущему предложению (то, что расходы выросли), поэтому нужно was.',
      },
      {
        type: 'choice',
        prompt: 'Im neuen Viertel gibt es vieles, ___ mir gut gefällt.',
        options: ['das', 'dem', 'was', 'wo'],
        answer: 2,
        explanationRu: 'После неопределённых местоимений vieles, alles, nichts, etwas относительное местоимение — was.',
      },
      {
        type: 'choice',
        prompt: 'Der Vermieter lässt das Dach endlich reparieren, ___ wir ihn seit Monaten gebeten haben.',
        options: ['worum', 'um das', 'wofür', 'was'],
        answer: 0,
        explanationRu: 'bitten um + Akk. Придаточное относится ко всему предложению, поэтому wo(r) + предлог: worum. Вариант «um das» был бы возможен только после существительного.',
      },
      {
        type: 'choice',
        prompt: 'Das ist meine Nachbarin, mit ___ Sohn ich jeden Morgen zur Uni fahre.',
        options: ['deren', 'dessen', 'der', 'ihrem'],
        answer: 0,
        explanationRu: 'Принадлежность (сын соседки) → родительное относительное местоимение. Nachbarin — женский род → deren. Предлог mit стоит перед deren, а артикль после deren не нужен.',
      },
      {
        type: 'gap',
        prompt: '___ sich für die Wohnung interessiert, sollte sich schnell bei der Hausverwaltung melden.',
        answers: ['Wer'],
        hintRu: '«тот, кто …»',
        explanationRu: 'Обобщающее придаточное «тот, кто» вводится словом wer. Оба предложения в Nominativ, поэтому der в главном предложении можно опустить.',
      },
      {
        type: 'gap',
        prompt: 'Wem die Miete in München zu hoch ist, ___ bleibt oft nur das Pendeln.',
        answers: ['dem'],
        hintRu: 'bleiben + Dativ',
        explanationRu: 'Wem … — Dativ; в главном предложении (jemandem bleibt etwas) тоже нужен Dativ → dem. Опустить его нельзя.',
      },
      {
        type: 'gap',
        prompt: 'Wir ziehen nach Freiburg, ___ meine Frau eine neue Stelle gefunden hat.',
        answers: ['wo'],
        hintRu: 'место после названия города',
        explanationRu: 'После названий городов и стран для обозначения места используется wo (in dem здесь звучит неестественно).',
      },
      {
        type: 'gap',
        prompt: 'Der Architekt, nach ___ Plänen das Viertel gebaut wurde, wohnt heute selbst dort.',
        answers: ['dessen'],
        hintRu: 'Genitiv, мужской род',
        explanationRu: 'По чьим планам? — по планам архитектора (der Architekt, м. р.) → dessen. Предлог nach стоит перед dessen.',
      },
      {
        type: 'order',
        words: ['Die Stadt', 'hat', 'den Park', 'verkauft,', 'worüber', 'sich', 'viele Anwohner', 'aufregen.'],
        translationRu: 'Город продал парк, из-за чего возмущаются многие жители.',
        explanationRu: 'sich aufregen über + Akk → worüber, так как речь идёт о всём событии. В придаточном глагол в конце; возвратное sich стоит перед подлежащим-существительным.',
      },
      {
        type: 'order',
        words: ['Ein offenes Gespräch', 'ist', 'das Beste,', 'was', 'man', 'bei Streit mit Nachbarn', 'tun', 'kann.'],
        translationRu: 'Открытый разговор — это лучшее, что можно сделать при ссоре с соседями.',
        explanationRu: 'После субстантивированной превосходной степени (das Beste) используется was. Модальный глагол kann стоит в самом конце придаточного.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью wo(r) + предлог.',
        prompt: 'Die Stadt baut 500 neue Sozialwohnungen. Darauf haben viele Familien lange gewartet.',
        answers: ['Die Stadt baut 500 neue Sozialwohnungen, worauf viele Familien lange gewartet haben.'],
        explanationRu: 'warten auf + Akk. Darauf относится ко всему событию → worauf. Вспомогательный глагол haben уходит в конец.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения: используйте предлог + dessen/deren.',
        prompt: 'Wir wohnen in einem Altbau. In seinem Keller gibt es oft Wasserschäden.',
        answers: ['Wir wohnen in einem Altbau, in dessen Keller es oft Wasserschäden gibt.'],
        explanationRu: 'seinem Keller (подвал старого дома, der Altbau — м. р.) → in dessen Keller. Артикль/притяжательное местоимение исчезает, глагол gibt — в конце.',
      },
    ],
  },
  vocab: [
    {
      de: 'Wohnraum',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'жильё, жилая площадь (как ресурс)',
      example: 'In den Ballungsräumen fehlt vor allem bezahlbarer Wohnraum.',
      exampleRu: 'В агломерациях прежде всего не хватает доступного жилья.',
    },
    {
      de: 'Wohnungsmarkt',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'рынок жилья',
      example: 'Der Wohnungsmarkt in Hamburg gilt als einer der angespanntesten in Deutschland.',
      exampleRu: 'Рынок жилья в Гамбурге считается одним из самых напряжённых в Германии.',
    },
    {
      de: 'Mietpreisbremse',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'ограничение роста арендной платы («тормоз цен на аренду»)',
      example: 'Die Mietpreisbremse gilt nicht für Wohnungen, die zum ersten Mal vermietet werden.',
      exampleRu: 'Ограничение арендной платы не распространяется на квартиры, которые сдаются впервые.',
    },
    {
      de: 'Mietspiegel',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'обзор средних цен на аренду в городе',
      example: 'Laut Mietspiegel ist unsere Miete um 15 Prozent zu hoch.',
      exampleRu: 'Согласно обзору арендных цен, наша плата завышена на 15 процентов.',
    },
    {
      de: 'Sozialwohnung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'социальное (субсидируемое) жильё',
      example: 'Jedes Jahr fallen mehr Sozialwohnungen aus der Preisbindung, als neue gebaut werden.',
      exampleRu: 'Каждый год из ценового регулирования выпадает больше социальных квартир, чем строится новых.',
    },
    {
      de: 'Immobilie',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'недвижимость, объект недвижимости',
      example: 'Viele Anleger kaufen Immobilien in Großstädten als Geldanlage.',
      exampleRu: 'Многие инвесторы покупают недвижимость в крупных городах как вложение денег.',
    },
    {
      de: 'Infrastruktur',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'инфраструктура',
      example: 'Im Neubaugebiet fehlt noch die nötige Infrastruktur: Es gibt weder Schulen noch Ärzte.',
      exampleRu: 'В новом жилом районе пока нет нужной инфраструктуры: ни школ, ни врачей.',
    },
    {
      de: 'Anwohner',
      article: 'der',
      plural: '-',
      pos: 'noun',
      ru: 'житель (прилегающей улицы, района)',
      example: 'Die Anwohner beschweren sich über den nächtlichen Lärm der Bars.',
      exampleRu: 'Жители жалуются на ночной шум баров.',
    },
    {
      de: 'Lärmbelästigung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'шумовое беспокойство, шум как помеха',
      example: 'Wegen der Lärmbelästigung durch die Baustelle haben mehrere Mieter die Miete gemindert.',
      exampleRu: 'Из-за шума стройки несколько жильцов снизили арендную плату.',
    },
    {
      de: 'Viertel',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'квартал, район города',
      example: 'Das ehemalige Arbeiterviertel ist heute bei jungen Kreativen sehr beliebt.',
      exampleRu: 'Бывший рабочий квартал сегодня очень популярен у молодых творческих людей.',
    },
    {
      de: 'Zuzug',
      article: 'der',
      plural: '-¨e',
      pos: 'noun',
      ru: 'приток новых жителей, переселение в город',
      example: 'Durch den starken Zuzug junger Familien braucht die Gemeinde eine zweite Grundschule.',
      exampleRu: 'Из-за сильного притока молодых семей общине нужна вторая начальная школа.',
    },
    {
      de: 'Bauvorhaben',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'строительный проект',
      example: 'Gegen das umstrittene Bauvorhaben wurden über 2000 Einwände eingereicht.',
      exampleRu: 'Против спорного строительного проекта было подано более 2000 возражений.',
    },
    {
      de: 'Wohnungsgenossenschaft',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'жилищный кооператив',
      example: 'Wer Mitglied einer Wohnungsgenossenschaft ist, zahlt meist deutlich weniger Miete.',
      exampleRu: 'Тот, кто состоит в жилищном кооперативе, обычно платит заметно меньше за аренду.',
    },
    {
      de: 'abreißen',
      forms: 'reißt ab, riss ab, hat abgerissen',
      pos: 'verb',
      ru: 'сносить (здание)',
      example: 'Der alte Bahnhof soll abgerissen werden, obwohl viele Bürger ihn erhalten wollen.',
      exampleRu: 'Старый вокзал собираются снести, хотя многие горожане хотят его сохранить.',
    },
    {
      de: 'aufwerten',
      forms: 'wertet auf, wertete auf, hat aufgewertet',
      pos: 'verb',
      ru: 'повышать ценность, облагораживать (район)',
      example: 'Der neue Park hat das ganze Quartier deutlich aufgewertet.',
      exampleRu: 'Новый парк заметно повысил привлекательность всего квартала.',
    },
    {
      de: 'leer stehen',
      forms: 'steht leer, stand leer, hat leer gestanden',
      pos: 'phrase',
      ru: 'пустовать (о помещении, здании)',
      example: 'Während Tausende eine Wohnung suchen, stehen in der Innenstadt ganze Bürogebäude leer.',
      exampleRu: 'Пока тысячи людей ищут квартиру, в центре города пустуют целые офисные здания.',
    },
    {
      de: 'denkmalgeschützt',
      pos: 'adj',
      ru: 'охраняемый как памятник архитектуры',
      example: 'An der Fassade des denkmalgeschützten Hauses darf nichts verändert werden.',
      exampleRu: 'На фасаде дома — памятника архитектуры ничего нельзя менять.',
    },
    {
      de: 'verkehrsberuhigt',
      pos: 'adj',
      ru: 'с ограниченным движением транспорта',
      example: 'In verkehrsberuhigten Straßen dürfen Kinder auf der Fahrbahn spielen.',
      exampleRu: 'На улицах с ограниченным движением дети могут играть на проезжей части.',
    },
    {
      de: 'renovierungsbedürftig',
      pos: 'adj',
      ru: 'требующий ремонта',
      example: 'Die Wohnung ist günstig, aber leider stark renovierungsbedürftig.',
      exampleRu: 'Квартира недорогая, но, к сожалению, требует серьёзного ремонта.',
    },
    {
      de: 'städtisch',
      pos: 'adj',
      ru: 'городской; муниципальный',
      example: 'Die städtische Wohnungsbaugesellschaft vermietet ihre Wohnungen unter dem Marktpreis.',
      exampleRu: 'Муниципальная жилищная компания сдаёт свои квартиры дешевле рыночной цены.',
    },
  ],
  listening: {
    title: 'Stadtgespräch: Wem gehört das Bahnhofsviertel?',
    kind: 'dialog',
    text: `A: Willkommen bei „Stadtgespräch“. Heute geht es um das Bahnhofsviertel, über das gerade die ganze Stadt diskutiert. Bei mir ist Dr. Miriam Jansen, Stadtplanerin bei einer Wohnungsgenossenschaft. Frau Jansen, was ist im Bahnhofsviertel eigentlich los?
B: Vor zehn Jahren wollte dort kaum jemand wohnen. Viele Läden standen leer, und die meisten Häuser waren renovierungsbedürftig. Dann kamen Studierende und Künstler, die günstige Ateliers suchten. Es entstanden Cafés und kleine Galerien, was das Viertel natürlich aufgewertet hat.
A: Das klingt doch zunächst positiv.
B: Ja, aber es gibt eine Kehrseite. Investoren haben ganze Straßenzüge gekauft und aufwendig saniert. Wer heute im Viertel eine Wohnung sucht, zahlt fast doppelt so viel wie vor zehn Jahren. Und viele alte Mieter, deren Einkommen nicht gestiegen ist, müssen wegziehen.
A: Die Stadt hat doch eine Mietpreisbremse eingeführt.
B: Das stimmt, aber sie gilt nicht für Neubauten und nicht für Wohnungen, die umfassend modernisiert wurden, was wir seit Jahren kritisieren.
A: Was schlagen Sie konkret vor?
B: Erstens mehr Sozialwohnungen. Die Stadt besitzt am alten Güterbahnhof ein Grundstück, auf dem rund 400 Wohnungen entstehen könnten. Zweitens sollten Genossenschaften stärker gefördert werden. Bei uns gehören die Häuser den Mitgliedern, sodass niemand mit den Mieten spekulieren kann.
A: Kritiker sagen, Genossenschaften hätten endlos lange Wartelisten.
B: Das ist leider richtig, worüber wir selbst nicht glücklich sind. Wer heute bei uns eintritt, wartet etwa drei Jahre auf eine Wohnung. Deshalb bauen wir gerade zwei neue Häuser, in deren Erdgeschoss auch eine Kita und ein Nachbarschaftscafé Platz finden.
A: Zum Schluss: Wie sieht für Sie ein lebenswertes Viertel aus?
B: Es ist ein Viertel, in dem die Krankenpflegerin neben dem Anwalt wohnt und die Rentnerin nicht ausziehen muss, nur weil ihr Haus verkauft wurde. Das ist alles, was ich mir wünsche – und eigentlich ist das gar nicht so viel.
A: Frau Jansen, vielen Dank für das Gespräch.`,
    questions: [
      {
        question: 'Wie war die Situation im Bahnhofsviertel vor zehn Jahren?',
        options: [
          'Das Viertel war bei Investoren sehr beliebt.',
          'Viele Geschäfte waren leer und die Häuser in schlechtem Zustand.',
          'Dort lebten fast nur Studierende und Künstler.',
          'Es war das teuerste Viertel der Stadt.',
        ],
        answer: 1,
      },
      {
        question: 'Worin sieht Frau Jansen die Kehrseite der Entwicklung?',
        options: [
          'Die neuen Cafés verursachen zu viel Lärm.',
          'Die Künstler haben das Viertel wieder verlassen.',
          'Langjährige Mieter können sich ihre Wohnungen nicht mehr leisten.',
          'Die Stadt hat zu viele Sozialwohnungen gebaut.',
        ],
        answer: 2,
      },
      {
        question: 'Warum hilft die Mietpreisbremse nur begrenzt?',
        options: [
          'Sie gilt nur für Genossenschaftswohnungen.',
          'Sie wurde erst vor Kurzem eingeführt.',
          'Viele Vermieter kennen sie nicht.',
          'Neubauten und umfassend modernisierte Wohnungen sind ausgenommen.',
        ],
        answer: 3,
      },
      {
        question: 'Welches Problem der Genossenschaft gibt Frau Jansen zu?',
        options: [
          'Neue Mitglieder müssen lange auf eine Wohnung warten.',
          'Die Mieten sind in den letzten Jahren stark gestiegen.',
          'Die Mitglieder dürfen die Häuser verkaufen.',
          'Es gibt zu wenige Interessenten.',
        ],
        answer: 0,
      },
      {
        question: 'Was ist für Frau Jansen ein lebenswertes Viertel?',
        options: [
          'Ein Viertel mit möglichst vielen Cafés und Galerien.',
          'Ein Viertel, in dem Menschen mit unterschiedlichem Einkommen zusammenleben.',
          'Ein ruhiges Viertel am Stadtrand.',
          'Ein Viertel, in dem nur Eigentümer wohnen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Город планирует застроить часть парка в вашем районе жилыми домами, чтобы бороться с нехваткой жилья. Местная газета собирает мнения жителей на своём онлайн-форуме. Напишите комментарий (Forumsbeitrag).',
    taskDe: 'Die Stadt plant, einen Teil des Parks in Ihrem Viertel zu bebauen, um neuen Wohnraum zu schaffen. Die Lokalzeitung sammelt in ihrem Onlineforum Meinungen der Anwohner. Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Bedeutung des Parks für Sie und Ihr Viertel',
      'Situation auf dem Wohnungsmarkt in Ihrer Stadt',
      'Vor- und Nachteile des Bauvorhabens',
      'Ihr Vorschlag für eine Lösung, die möglichst vielen Interessen gerecht wird',
    ],
    minWords: 160,
    usefulPhrases: [
      'Der Park ist für viele Anwohner ein Ort, an dem …',
      'Was in der Diskussion oft vergessen wird, ist …',
      'Wer in unserer Stadt eine Wohnung sucht, weiß, dass …',
      'Das ist ein Punkt, worüber man sachlich diskutieren sollte.',
      'Einerseits …, andererseits darf man nicht übersehen, dass …',
      'Statt den Park zu bebauen, könnte man zum Beispiel …',
    ],
  },
  speaking: {
    scenarioRu: 'В вашем районе проходит собрание жителей. Представитель инвестора представляет проект: на месте старого пустующего завода хотят построить жилой комплекс с дорогими квартирами. Вы выступаете от имени инициативы жителей.',
    aiRole: 'Sie sind Projektleiter eines großen Immobilienunternehmens und stellen auf einer Bürgerversammlung ein Bauvorhaben vor: Auf dem Gelände einer leer stehenden Fabrik sollen 200 hochwertige Eigentumswohnungen entstehen. Sie sind freundlich, aber überzeugt, dass das Projekt das Viertel aufwertet, und Sie spielen Sorgen über steigende Mieten herunter. Sprechen Sie natürliches Deutsch auf B2-Niveau, fragen Sie nach Belegen und verlangen Sie konkrete Gegenvorschläge.',
    opener: 'Guten Abend, schön, dass so viele gekommen sind! Unser Projekt bringt neues Leben in die alte Fabrik: moderne Wohnungen, ein kleiner Park, ein Café. Ehrlich gesagt verstehe ich die Aufregung nicht. Was spricht denn aus Ihrer Sicht dagegen?',
    tasksRu: [
      'Опишите, что ценят жители в своём районе и чего им не хватает (используйте was / das Einzige, was …).',
      'Объясните, почему вы боитесь роста арендной платы, и приведите пример (Wer …, der/dem …).',
      'Сошлитесь на опыт других районов или городов (… in X, wo …; ein Viertel, in dessen …).',
      'Предложите компромисс: например, долю социальных квартир или помещения для жителей.',
    ],
    readAloud: [
      'Wer in der Innenstadt eine bezahlbare Wohnung sucht, braucht heute viel Geduld und noch mehr Glück.',
      'Die Genossenschaft, in deren Häusern über dreitausend Menschen leben, baut jetzt auch Wohnungen für Studierende.',
      'Viele Läden im Viertel stehen leer, was die Stadt mit niedrigeren Gewerbemieten ändern möchte.',
    ],
  },
};
