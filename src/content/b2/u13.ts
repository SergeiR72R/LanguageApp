import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-13',
  level: 'B2',
  order: 13,
  title: 'Konsum & Nachhaltigkeit',
  titleRu: 'Потребление и устойчивое развитие',
  goalsRu: [
    'Понимать журналистские тексты и радиопередачи о моде, отходах, переработке и «зелёном» маркетинге.',
    'Выражать уступку разными средствами: obwohl/obgleich, trotzdem/dennoch/nichtsdestotrotz, auch wenn/selbst wenn, zwar … aber, trotz + Genitiv.',
    'Правильно строить порядок слов после уступительных союзов и наречий и не путать trotz, trotzdem и obwohl.',
    'Аргументированно писать и спорить о противоречии между экологическими убеждениями и реальным поведением покупателей.',
  ],
  grammar: {
    topic: 'Konzessive Strukturen',
    topicRu: 'Уступительные конструкции',
    explanationRu: `**Уступительные (концессивные) конструкции** выражают противоречие: действие происходит, **несмотря на** препятствие. В немецком для этого есть несколько средств, и у каждого свой порядок слов.

**1. obwohl / obgleich** — подчинительные союзы («хотя»), глагол стоит в конце придаточного. Obgleich — более книжный вариант. Если придаточное стоит первым, главное начинается с глагола: Obwohl die Jacke teuer war, **habe** ich sie gekauft.

**2. trotzdem / dennoch / nichtsdestotrotz** — наречия («тем не менее»). Они стоят в главном предложении: на первом месте (сразу за ними глагол) или в середине: Trotzdem **habe** ich sie gekauft. / Ich habe sie trotzdem gekauft. Dennoch звучит более письменно, nichtsdestotrotz — книжно.

**3. auch wenn / selbst wenn** — «даже если». Уступка часто гипотетическая, поэтому нередко с Konjunktiv II: Selbst wenn Bio billiger wäre, würden nicht alle es kaufen.

**4. zwar …, aber …** — сначала признаём аргумент, потом противопоставляем другой. Zwar стоит в середине предложения или на первом месте (тогда инверсия): Zwar **ist** das Shirt billig, aber es hält nicht lange.

**5. trotz + Genitiv** — предлог, после него идёт существительное, а не предложение: trotz des hohen Preises. В разговорной речи встречается Dativ, в письменной нормой остаётся Genitiv.

**Типичные ошибки русскоговорящих:**

- *Obwohl es teuer war, aber ich habe es gekauft.* По-русски «хотя …, но …», а в немецком после obwohl-придаточного **aber не ставится**.
- *Trotzdem ich wenig Geld habe …* — trotzdem в литературном языке не союз. Правильно: Obwohl ich wenig Geld habe …
- *Trotzdem ich habe es gekauft.* — после trotzdem на первом месте нужна инверсия: Trotzdem habe ich es gekauft.
- *Trotz es regnet …* — после trotz нужно существительное: Trotz des Regens … или Obwohl es regnet …
- Путают **auch wenn** («даже если», союз) и **wenn auch** («хотя и», чаще в сокращённых оборотах): ein guter, wenn auch teurer Kauf.`,
    table: [
      ['Средство', 'Тип и порядок слов', 'Пример'],
      ['obwohl / obgleich', 'союз → глагол в конце', 'Obwohl das Handy noch funktioniert, will er ein neues.'],
      ['auch wenn / selbst wenn', 'союз → глагол в конце («даже если»)', 'Auch wenn Bio teurer ist, kaufe ich es.'],
      ['trotzdem / dennoch / nichtsdestotrotz', 'наречие → позиция 1 (инверсия) или середина', 'Das Handy funktioniert noch. Trotzdem will er ein neues.'],
      ['zwar …, aber …', 'парный союз, zwar в середине или в позиции 1', 'Das Shirt ist zwar billig, aber schlecht verarbeitet.'],
      ['trotz + Genitiv', 'предлог + существительное', 'Trotz des hohen Preises kaufe ich Bio.'],
    ],
    examples: [
      {
        de: 'Obwohl sich viele Menschen Sorgen um das Klima machen, steigt der Konsum weiter.',
        ru: 'Хотя многие люди беспокоятся о климате, потребление продолжает расти.',
      },
      {
        de: 'Das alte Smartphone funktioniert einwandfrei. Trotzdem kaufen viele jedes Jahr ein neues Modell.',
        ru: 'Старый смартфон работает безупречно. Тем не менее многие каждый год покупают новую модель.',
      },
      {
        de: 'Auch wenn nachhaltige Kleidung mehr kostet, hält sie meistens deutlich länger.',
        ru: 'Даже если экологичная одежда стоит дороже, она обычно служит значительно дольше.',
      },
      {
        de: 'Selbst wenn alle Verpackungen recycelt würden, bliebe das Problem des Überflusses bestehen.',
        ru: 'Даже если бы перерабатывалась вся упаковка, проблема избытка всё равно осталась бы.',
      },
      {
        de: 'Das Siegel klingt zwar vertrauenswürdig, aber es wird von keiner unabhängigen Stelle geprüft.',
        ru: 'Знак качества, правда, звучит солидно, но его не проверяет ни одна независимая организация.',
      },
      {
        de: 'Trotz der zahlreichen Berichte über Greenwashing glauben viele Kunden den Werbeversprechen.',
        ru: 'Несмотря на многочисленные сообщения о гринвошинге, многие покупатели верят рекламным обещаниям.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ die Jeans im Angebot war, hat Lena sie nicht gekauft.',
        options: ['Trotzdem', 'Obwohl', 'Trotz', 'Zwar'],
        answer: 1,
        explanationRu: 'Нужен союз, после которого глагол (war) стоит в конце придаточного, — это obwohl. Trotzdem — наречие, trotz — предлог с существительным.',
      },
      {
        type: 'choice',
        prompt: 'Die Waschmaschine ist erst drei Jahre alt. ___ ist sie schon kaputt.',
        options: ['Obwohl', 'Trotz', 'Dennoch', 'Auch wenn'],
        answer: 2,
        explanationRu: 'После пропуска сразу идёт глагол (ist) — значит, нужно наречие на первом месте с инверсией: Dennoch ist sie … Союзы obwohl/auch wenn требуют глагола в конце.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Obwohl der Pullover teuer war, aber er hat nicht lange gehalten.',
          'Trotzdem der Pullover teuer war, hat er nicht lange gehalten.',
          'Obwohl der Pullover teuer war, er hat nicht lange gehalten.',
          'Obwohl der Pullover teuer war, hat er nicht lange gehalten.',
        ],
        answer: 3,
        explanationRu: 'После придаточного главное начинается с глагола (hat). Aber после obwohl не ставится, trotzdem не является союзом, а «er hat» нарушает порядок слов.',
      },
      {
        type: 'choice',
        prompt: '___ des hohen Preises entscheiden sich immer mehr Familien für Bio-Lebensmittel.',
        options: ['Obwohl', 'Trotz', 'Trotzdem', 'Selbst wenn'],
        answer: 1,
        explanationRu: 'После пропуска идёт существительное в Genitiv (des hohen Preises), а не предложение. Значит, нужен предлог trotz.',
      },
      {
        type: 'gap',
        prompt: 'Die Firma wirbt mit dem Wort „klimaneutral“, ___ sie ihre Emissionen kaum reduziert hat.',
        answers: ['obwohl', 'obgleich', 'wenngleich'],
        hintRu: 'союз «хотя»',
        explanationRu: 'Глагол hat стоит в конце — это придаточное. Уступку выражает obwohl (или книжные obgleich/wenngleich).',
      },
      {
        type: 'gap',
        prompt: 'Diese Schuhe sind ___ teurer, aber sie lassen sich problemlos reparieren.',
        answers: ['zwar'],
        hintRu: 'парный союз … aber',
        explanationRu: 'Конструкция zwar …, aber …: сначала признаём недостаток (дороже), потом противопоставляем преимущество.',
      },
      {
        type: 'gap',
        prompt: '___ ich mehr verdienen würde, würde ich nicht öfter shoppen gehen.',
        answers: ['Selbst wenn', 'Auch wenn'],
        hintRu: '«даже если» (2 слова)',
        explanationRu: 'Гипотетическая уступка с Konjunktiv II: Selbst wenn / Auch wenn ich mehr verdienen würde, … — «даже если бы я зарабатывал больше».',
      },
      {
        type: 'gap',
        prompt: 'Trotz ___ massiven Kritik hält der Konzern an seiner Werbekampagne fest.',
        answers: ['der'],
        hintRu: 'die Kritik, Genitiv',
        explanationRu: 'Trotz требует Genitiv. Die Kritik (ж. р.) в Genitiv → der Kritik: trotz der massiven Kritik.',
      },
      {
        type: 'order',
        words: ['Obwohl', 'das Gerät', 'noch funktioniert,', 'will', 'er', 'ein neues', 'kaufen.'],
        translationRu: 'Хотя прибор ещё работает, он хочет купить новый.',
        explanationRu: 'В придаточном с obwohl глагол в конце (funktioniert). Главное предложение начинается с изменяемого глагола (will).',
      },
      {
        type: 'order',
        words: ['Das Siegel', 'wirkt', 'zwar', 'seriös,', 'aber', 'niemand', 'kontrolliert', 'die Angaben.'],
        translationRu: 'Знак качества, правда, выглядит солидно, но никто не проверяет указанные сведения.',
        explanationRu: 'Zwar стоит в середине первой части (после глагола). Aber занимает «нулевую» позицию и не меняет порядок слов: aber niemand kontrolliert …',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью obwohl (придаточное в начале).',
        prompt: 'Mode aus recycelten Materialien ist teurer. Viele junge Leute kaufen sie.',
        answers: [
          'Obwohl Mode aus recycelten Materialien teurer ist, kaufen viele junge Leute sie.',
          'Obwohl Mode aus recycelten Materialien teurer ist, kaufen sie viele junge Leute.',
        ],
        explanationRu: 'Obwohl отправляет глагол ist в конец придаточного. Главное предложение начинается с глагола kaufen.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное с obwohl конструкцией trotz + Genitiv.',
        prompt: 'Obwohl das Wetter schlecht war, kamen viele Besucher zum Flohmarkt.',
        answers: ['Trotz des schlechten Wetters kamen viele Besucher zum Flohmarkt.'],
        explanationRu: 'Das schlechte Wetter → Genitiv: des schlechten Wetters (окончание -s у существительного, -en у прилагательного). Trotz + группа существительного занимает первое место, за ней глагол kamen.',
      },
    ],
  },
  vocab: [
    {
      de: 'Greenwashing',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'гринвошинг, «зелёный» обман в рекламе',
      example: 'Verbraucherschützer werfen dem Konzern Greenwashing vor, weil seine „grüne“ Kollektion kaum Recyclingmaterial enthält.',
      exampleRu: 'Защитники прав потребителей обвиняют концерн в гринвошинге, потому что его «зелёная» коллекция почти не содержит переработанных материалов.',
    },
    {
      de: 'Verschwendung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'расточительство, напрасная трата',
      example: 'Die Verschwendung von Ressourcen gehört zu den größten Problemen der Konsumgesellschaft.',
      exampleRu: 'Расточительное расходование ресурсов — одна из крупнейших проблем общества потребления.',
    },
    {
      de: 'Haltbarkeit',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'долговечность, прочность; срок годности',
      example: 'Obwohl die Haltbarkeit für viele Kunden entscheidend ist, steht sie fast nie auf dem Etikett.',
      exampleRu: 'Хотя для многих покупателей долговечность имеет решающее значение, она почти никогда не указана на этикетке.',
    },
    {
      de: 'Elektroschrott',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'электронные отходы',
      example: 'Ein großer Teil des Elektroschrotts wird nicht fachgerecht recycelt, sondern ins Ausland exportiert.',
      exampleRu: 'Большая часть электронных отходов не перерабатывается надлежащим образом, а вывозится за границу.',
    },
    {
      de: 'Fast Fashion',
      article: 'die',
      plural: '–',
      pos: 'noun',
      ru: 'быстрая мода (дешёвая одежда с частой сменой коллекций)',
      example: 'Fast Fashion ist zwar billig, aber die ökologischen Kosten tragen andere.',
      exampleRu: 'Быстрая мода, конечно, дешёвая, но экологическую цену платят другие.',
    },
    {
      de: 'Siegel',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'знак качества, маркировка; печать',
      example: 'Das Siegel garantiert, dass die Baumwolle ohne Pestizide angebaut wurde.',
      exampleRu: 'Этот знак гарантирует, что хлопок выращен без пестицидов.',
    },
    {
      de: 'Anschaffung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'приобретение, (крупная) покупка',
      example: 'Vor jeder größeren Anschaffung frage ich mich, ob ich das Gerät wirklich brauche.',
      exampleRu: 'Перед каждой крупной покупкой я спрашиваю себя, действительно ли мне нужен этот прибор.',
    },
    {
      de: 'Überfluss',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'избыток, изобилие',
      example: 'Obwohl wir im Überfluss leben, sind viele Menschen mit ihrem Besitz unzufrieden.',
      exampleRu: 'Хотя мы живём в изобилии, многие люди недовольны тем, что имеют.',
    },
    {
      de: 'Verpackungsmüll',
      article: 'der',
      plural: '–',
      pos: 'noun',
      ru: 'упаковочный мусор',
      example: 'Durch den Onlinehandel ist der Verpackungsmüll in den letzten Jahren stark gestiegen.',
      exampleRu: 'Из-за онлайн-торговли количество упаковочного мусора за последние годы сильно выросло.',
    },
    {
      de: 'Umweltbelastung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'нагрузка на окружающую среду, загрязнение',
      example: 'Die Umweltbelastung durch die Textilindustrie wird häufig unterschätzt.',
      exampleRu: 'Нагрузку на окружающую среду со стороны текстильной промышленности часто недооценивают.',
    },
    {
      de: 'Versuchung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'соблазн, искушение',
      example: 'Bei Rabattaktionen ist die Versuchung groß, Dinge zu kaufen, die man gar nicht braucht.',
      exampleRu: 'Во время распродаж велик соблазн купить вещи, которые совсем не нужны.',
    },
    {
      de: 'widerstehen',
      forms: 'widersteht, widerstand, hat widerstanden (+ Dat)',
      pos: 'verb',
      ru: 'устоять (перед чем-л.), противостоять',
      example: 'Obwohl ich mir vorgenommen hatte, nichts zu kaufen, konnte ich dem Angebot nicht widerstehen.',
      exampleRu: 'Хотя я решил ничего не покупать, я не смог устоять перед этим предложением.',
    },
    {
      de: 'boykottieren',
      forms: 'boykottierte, hat boykottiert',
      pos: 'verb',
      ru: 'бойкотировать',
      example: 'Nach dem Skandal boykottierten viele Kundinnen die Modekette.',
      exampleRu: 'После скандала многие покупательницы стали бойкотировать сеть магазинов одежды.',
    },
    {
      de: 'ausmisten',
      forms: 'mistet aus, mistete aus, hat ausgemistet',
      pos: 'verb',
      ru: 'разбирать и избавляться от ненужного (разг.)',
      example: 'Einmal im Jahr miste ich meinen Kleiderschrank aus und bringe die Sachen in einen Secondhand-Laden.',
      exampleRu: 'Раз в год я разбираю свой шкаф и отношу вещи в секонд-хенд.',
    },
    {
      de: 'sich einschränken',
      forms: 'schränkt sich ein, schränkte sich ein, hat sich eingeschränkt',
      pos: 'verb',
      ru: 'ограничивать себя',
      example: 'Selbst wenn wir uns beim Konsum einschränken, müssen wir auf nichts Wesentliches verzichten.',
      exampleRu: 'Даже если мы ограничим потребление, нам не придётся отказываться ни от чего существенного.',
    },
    {
      de: 'irreführen',
      forms: 'führt irre, führte irre, hat irregeführt',
      pos: 'verb',
      ru: 'вводить в заблуждение',
      example: 'Begriffe wie „naturnah“ sollen Verbraucher oft gezielt irreführen.',
      exampleRu: 'Такие понятия, как «близкий к природе», часто целенаправленно вводят потребителей в заблуждение.',
    },
    {
      de: 'kurzlebig',
      pos: 'adj',
      ru: 'недолговечный',
      example: 'Billige Elektrogeräte sind häufig kurzlebig und lassen sich kaum reparieren.',
      exampleRu: 'Дешёвые электроприборы часто недолговечны, и их почти невозможно отремонтировать.',
    },
    {
      de: 'umweltbewusst',
      pos: 'adj',
      ru: 'экологически сознательный',
      example: 'Viele halten sich für umweltbewusst, fliegen aber trotzdem mehrmals im Jahr in den Urlaub.',
      exampleRu: 'Многие считают себя экологически сознательными, но тем не менее несколько раз в год летают в отпуск.',
    },
    {
      de: 'verschwenderisch',
      pos: 'adj',
      ru: 'расточительный',
      example: 'Der verschwenderische Umgang mit Wasser beim Baumwollanbau ist ein ernstes Problem.',
      exampleRu: 'Расточительное использование воды при выращивании хлопка — серьёзная проблема.',
    },
    {
      de: 'ein schlechtes Gewissen haben',
      pos: 'phrase',
      ru: 'испытывать угрызения совести',
      example: 'Obwohl ich ein schlechtes Gewissen habe, bestelle ich manchmal billige Kleidung im Internet.',
      exampleRu: 'Хотя меня мучает совесть, я иногда заказываю дешёвую одежду в интернете.',
    },
  ],
  listening: {
    title: 'Gewissensfrage: Warum wir anders kaufen, als wir denken',
    kind: 'monolog',
    text: `Guten Abend, liebe Hörerinnen und Hörer, und willkommen zu unserer Reihe „Gewissensfrage“. Heute geht es um ein Phänomen, das Fachleute die Lücke zwischen Einstellung und Verhalten nennen. Gemeint ist Folgendes: In Umfragen gibt regelmäßig eine große Mehrheit der Befragten an, beim Einkaufen auf Nachhaltigkeit zu achten. Trotzdem wächst der Umsatz mit Billigmode seit Jahren, und der Verpackungsmüll erreicht immer neue Rekordwerte.

Wie passt das zusammen? Die Konsumforscherin Dr. Sabine Ehlers hat dafür mehrere Erklärungen. „Obwohl die meisten Menschen wissen, dass ein T-Shirt für fünf Euro nicht fair produziert sein kann, greifen sie zu“, sagt sie. „Der Preis ist im Laden sofort sichtbar, die Umweltbelastung dagegen nicht.“ Hinzu kommt die Bequemlichkeit: Selbst wenn es im eigenen Viertel einen Unverpackt-Laden gibt, ist der Supermarkt meistens näher und hat länger geöffnet.

Eine weitere Rolle spielt die Verwirrung durch Siegel. Allein im Textilbereich gibt es Dutzende davon. Zwar werden einige streng und unabhängig kontrolliert, aber viele haben sich die Unternehmen selbst ausgedacht. „Das ist nicht immer Greenwashing im rechtlichen Sinn, dennoch werden Verbraucher dadurch in die Irre geführt“, kritisiert Ehlers.

Muss man also resignieren? Keineswegs, meint die Forscherin. Trotz aller Widersprüche gebe es positive Entwicklungen: Der Handel mit gebrauchter Kleidung boomt, vor allem über Apps, und Reparaturcafés sind in vielen Städten ausgebucht. Ihr Rat ist deshalb pragmatisch: „Niemand muss perfekt sein. Auch wenn man nur eine einzige Gewohnheit ändert und zum Beispiel seltener neue Kleidung kauft, ist das schon ein Gewinn.“ Entscheidend sei nicht das schlechte Gewissen, sondern die nächste Kaufentscheidung.

Nächste Woche fragen wir: Ist Leihen das neue Kaufen? Bis dahin – kaufen Sie bewusst!`,
    questions: [
      {
        question: 'Was ist mit der „Lücke zwischen Einstellung und Verhalten“ gemeint?',
        options: [
          'Menschen kaufen weniger, als sie eigentlich möchten.',
          'Viele handeln beim Einkaufen anders, als sie es in Umfragen angeben.',
          'Nachhaltige Produkte sind schwerer zu finden als billige.',
          'Junge Menschen denken anders über Konsum als ältere.',
        ],
        answer: 1,
      },
      {
        question: 'Warum kaufen Menschen laut Dr. Ehlers trotzdem billige T-Shirts?',
        options: [
          'Weil sie nicht wissen, wie Kleidung produziert wird.',
          'Weil billige Kleidung länger hält.',
          'Weil der Preis sichtbar ist, die Folgen für die Umwelt aber nicht.',
          'Weil es keine fair produzierte Kleidung gibt.',
        ],
        answer: 2,
      },
      {
        question: 'Was sagt die Expertin über Siegel?',
        options: [
          'Viele Siegel stammen von den Unternehmen selbst und verwirren die Kunden.',
          'Alle Siegel im Textilbereich werden unabhängig kontrolliert.',
          'Siegel sind im Textilbereich inzwischen verboten.',
          'Es gibt zu wenige Siegel für Kleidung.',
        ],
        answer: 0,
      },
      {
        question: 'Welche positive Entwicklung wird genannt?',
        options: [
          'Die Preise für Bio-Kleidung sinken deutlich.',
          'Supermärkte verzichten vollständig auf Plastik.',
          'Unverpackt-Läden haben länger geöffnet als Supermärkte.',
          'Gebrauchte Kleidung wird immer häufiger gehandelt.',
        ],
        answer: 3,
      },
      {
        question: 'Welchen Rat gibt Dr. Ehlers?',
        options: [
          'Man sollte ganz auf neue Kleidung verzichten.',
          'Schon kleine Veränderungen der eigenen Gewohnheiten lohnen sich.',
          'Man sollte nur noch Produkte mit Siegel kaufen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На форуме онлайн-журнала о потреблении обсуждают тему «Футболка за пять евро — кто платит настоящую цену?». Напишите свой комментарий (Forumsbeitrag) и раскройте все четыре пункта.',
    taskDe: 'In einem Onlineforum wird über das Thema „Das T-Shirt für fünf Euro – wer zahlt den wahren Preis?“ diskutiert. Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Ihre eigenen Erfahrungen beim Kauf von Kleidung',
      'Gründe, warum Menschen trotz aller Kritik Fast Fashion kaufen',
      'Vor- und Nachteile von Secondhand-Mode und Kleidertausch',
      'Ihre Meinung: Wer trägt die Verantwortung – Verbraucher, Unternehmen oder Politik?',
    ],
    minWords: 150,
    usefulPhrases: [
      'Obwohl ich weiß, dass …, muss ich zugeben, dass …',
      'Zwar …, aber man darf nicht vergessen, dass …',
      'Auch wenn viele behaupten, …, bin ich der Meinung, dass …',
      'Trotz aller Bemühungen der Unternehmen …',
      'Das mag zwar stimmen, dennoch …',
      'Meiner Ansicht nach liegt die Verantwortung in erster Linie bei …',
    ],
  },
  speaking: {
    scenarioRu: 'Вы живёте в общей квартире (WG) и хотите вместе с соседом перейти на «осознанное потребление»: покупать подержанные вещи, реже заказывать онлайн, ремонтировать сломанное. Сосед относится к идее скептически.',
    aiRole: 'Sie sind Mitbewohner in einer WG und sprechen mit Ihrer Mitbewohnerin bzw. Ihrem Mitbewohner über nachhaltigen Konsum. Sie halten die Idee für teuer, unbequem und wirkungslos („Was bringt das, wenn die Industrie nichts ändert?“). Bringen Sie Gegenargumente, verlangen Sie konkrete Beispiele und lassen Sie sich nur von guten Argumenten überzeugen. Am Ende sind Sie zu einem Kompromiss bereit. Sprechen Sie natürliches Deutsch auf B2-Niveau.',
    opener: 'Du willst also ab jetzt nichts Neues mehr kaufen? Ehrlich gesagt finde ich das ziemlich naiv. Selbst wenn wir beide nur noch Secondhand tragen, ändert das doch nichts am Klima, oder?',
    tasksRu: [
      'Объясните, почему вы хотите изменить свои покупательские привычки.',
      'Признавайте отдельные аргументы собеседника и возражайте с помощью zwar … aber, trotzdem, dennoch.',
      'Используйте минимум два придаточных с obwohl или auch wenn / selbst wenn.',
      'Предложите компромисс: какие конкретные шаги вы оба готовы сделать.',
    ],
    readAloud: [
      'Obwohl die meisten Menschen Nachhaltigkeit für wichtig halten, landen jedes Jahr Millionen kaum getragener Kleidungsstücke im Müll.',
      'Das Siegel wirkt zwar vertrauenswürdig, dennoch sollte man genau prüfen, wer hinter den Angaben steht.',
      'Selbst wenn ein reparierter Toaster nicht wie neu aussieht, schont er die Umwelt und den Geldbeutel.',
    ],
  },
};
