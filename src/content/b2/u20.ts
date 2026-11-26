import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-20',
  level: 'B2',
  order: 20,
  title: 'Prüfungstraining B2: Argumentieren & Diskutieren',
  titleRu: 'Подготовка к экзамену B2: аргументация и дискуссия',
  goalsRu: [
    'Связно строить письменный и устный текст с помощью коннекторов (folglich, infolgedessen, dennoch, zudem, im Gegensatz dazu …).',
    'Различать союзы, подчинительные союзы и коннекторы-наречия и правильно ставить после них глагол.',
    'Использовать речевые клише для выражения мнения, возражения и поиска компромисса в экзаменационной дискуссии.',
    'Повторить и применить основные грамматические темы уровня B2 в заданиях экзаменационного формата.',
  ],
  grammar: {
    topic: 'Textkohärenz und Konnektoren',
    topicRu: 'Связность текста и коннекторы',
    explanationRu: `**Связность текста (Textkohärenz)** — один из главных критериев оценки на экзамене B2 в письме и в устной части. Предложения связывают с помощью **коннекторов** и **слов-отсылок** (dies, dabei, dadurch, deshalb …).

**Три типа связующих слов — три разных порядка слов:**
- **Konjunktionen** (und, aber, oder, denn, sondern) стоят на «нулевой» позиции, порядок слов прямой: …, **denn** die Mieten **steigen**.
- **Subjunktionen** (weil, obwohl, während, sodass, da) открывают придаточное, глагол уходит в конец: …, **weil** die Mieten **steigen**.
- **Коннекторы-наречия** (deshalb, folglich, infolgedessen, dennoch, trotzdem, außerdem, zudem, im Gegensatz dazu) занимают первое место, сразу за ними — глагол: **Folglich steigen** die Mieten. Они могут стоять и в средней части: Die Mieten steigen **folglich**.

**Значения:**
- добавление: außerdem, zudem, darüber hinaus;
- следствие: folglich (логический вывод), infolgedessen (фактическое последствие события), somit, deshalb;
- уступка: dennoch, trotzdem;
- противопоставление: im Gegensatz dazu, dagegen, hingegen.

**Отсылки вместо повторов:** Viele Firmen erlauben Homeoffice. **Dies** spart Zeit, **dadurch** sinkt der Stress.

**Схема аргументации на экзамене:** введение (тема, актуальность) → аргументы (Zum einen …, zudem …, dagegen spricht …) → собственная позиция (Dennoch bin ich der Meinung, …) → вывод (Zusammenfassend lässt sich sagen, dass …).

**Типичные ошибки русскоговорящих:**
- нет инверсии после коннектора: *Folglich die Mieten steigen* → Folglich **steigen** die Mieten;
- запятая после коннектора, как в русском «следовательно,»: *Folglich, steigen …* — в немецком запятая не нужна;
- путают denn (причина, прямой порядок) и deshalb (следствие, инверсия);
- *im Gegensatz dazu* ≠ *im Gegensatz zu* + Dat: Im Gegensatz **zu** Berlin … / Berlin ist teuer. **Im Gegensatz dazu** …;
- *Trotzdem es regnet, …* → **Obwohl** es regnet, … / Es regnet. **Trotzdem** …;
- außerdem («кроме того») путают с außer («кроме, за исключением»).`,
    table: [
      ['Значение', 'Konjunktion (позиция 0)', 'Subjunktion (глагол в конце)', 'Konnektor (позиция 1 + инверсия)'],
      ['причина → следствие', 'denn', 'weil, da, sodass', 'deshalb, folglich, infolgedessen, somit'],
      ['уступка', 'aber', 'obwohl', 'dennoch, trotzdem'],
      ['противопоставление', 'aber, sondern', 'während, wohingegen', 'im Gegensatz dazu, dagegen, hingegen'],
      ['добавление', 'und', '—', 'außerdem, zudem, darüber hinaus'],
    ],
    examples: [
      {
        de: 'Die Mieten in den Großstädten steigen seit Jahren. Infolgedessen ziehen immer mehr Familien ins Umland.',
        ru: 'Арендная плата в крупных городах растёт уже много лет. Вследствие этого всё больше семей переезжают в пригороды.',
      },
      {
        de: 'Das Homeoffice spart Fahrtzeit. Zudem können sich viele Beschäftigte besser konzentrieren.',
        ru: 'Удалённая работа экономит время на дорогу. Кроме того, многим сотрудникам легче сосредоточиться.',
      },
      {
        de: 'Die Studie hat nur 50 Personen befragt. Folglich sind ihre Ergebnisse nur begrenzt aussagekräftig.',
        ru: 'В исследовании опросили лишь 50 человек. Следовательно, его результаты показательны лишь отчасти.',
      },
      {
        de: 'Die Argumente der Gegner sind nachvollziehbar. Dennoch überwiegen meiner Meinung nach die Vorteile.',
        ru: 'Аргументы противников понятны. Тем не менее, на мой взгляд, преимущества перевешивают.',
      },
      {
        de: 'In Skandinavien ist bargeldloses Bezahlen längst Alltag. Im Gegensatz dazu zahlen viele Deutsche noch immer lieber bar.',
        ru: 'В Скандинавии безналичная оплата давно стала нормой. В противоположность этому многие немцы всё ещё предпочитают платить наличными.',
      },
      {
        de: 'Zusammenfassend lässt sich sagen, dass beide Seiten gute Gründe haben.',
        ru: 'Подводя итог, можно сказать, что у обеих сторон есть веские причины.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Die Mieten in der Innenstadt haben sich verdoppelt. ___ ziehen viele junge Familien aufs Land.',
        options: ['Denn', 'Infolgedessen', 'Obwohl', 'Im Gegensatz zu'],
        answer: 1,
        explanationRu: 'Второе предложение — следствие первого, после пропуска стоит глагол (ziehen) → нужен коннектор-наречие на первом месте: Infolgedessen. Denn требует прямого порядка и означает причину.',
      },
      {
        type: 'choice',
        prompt: 'Das Homeoffice spart viel Fahrtzeit. ___ können Eltern Familie und Beruf besser vereinbaren.',
        options: ['Außer', 'Weil', 'Dennoch', 'Zudem'],
        answer: 3,
        explanationRu: 'Добавляем ещё один аргумент «за» → zudem (= außerdem). Außer — предлог «кроме, за исключением»; dennoch выражает уступку, а здесь нет противоречия.',
      },
      {
        type: 'choice',
        prompt: 'Viele Schulen haben Tablets für alle Klassen angeschafft. ___ fehlt es an Lehrkräften, die damit sinnvoll arbeiten können.',
        options: ['Dennoch', 'Folglich', 'Außerdem', 'Deshalb'],
        answer: 0,
        explanationRu: 'Между предложениями противоречие: планшеты есть, а учителей, которые умеют с ними работать, нет → уступительный коннектор dennoch.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist korrekt?',
        options: [
          'Folglich die Zahl der Pendler sinkt.',
          'Folglich, die Zahl der Pendler sinkt.',
          'Folglich sinkt die Zahl der Pendler.',
          'Folglich, sinkt die Zahl der Pendler.',
        ],
        answer: 2,
        explanationRu: 'Коннектор занимает первое место, сразу за ним идёт спрягаемый глагол. Запятая после folglich в немецком не ставится.',
      },
      {
        type: 'gap',
        prompt: 'Im Süden Deutschlands regnet es relativ viel. Im Gegensatz ___ ist es im Nordosten eher trocken.',
        answers: ['dazu'],
        hintRu: 'местоименное наречие',
        explanationRu: 'Когда противопоставление относится ко всему предыдущему предложению, используют im Gegensatz dazu. Im Gegensatz zu + Dat требует существительного: im Gegensatz zum Süden.',
      },
      {
        type: 'gap',
        prompt: 'In Großstädten gibt es zahlreiche Kulturangebote. Auf dem Land ___ ist das Angebot deutlich kleiner.',
        answers: ['dagegen', 'hingegen', 'jedoch'],
        hintRu: 'противопоставление в средней части предложения',
        explanationRu: 'Dagegen/hingegen противопоставляют две ситуации и могут стоять в средней части после первого члена предложения: Auf dem Land dagegen ist …',
      },
      {
        type: 'gap',
        prompt: 'Die Firma hat ihre Produktion ins Ausland verlagert. ___ haben 300 Menschen ihren Arbeitsplatz verloren.',
        answers: ['Infolgedessen', 'Folglich', 'Deshalb', 'Daher', 'Dadurch', 'Somit'],
        hintRu: 'следствие, коннектор на первом месте',
        explanationRu: 'Потеря работы — последствие переноса производства. Подходит коннектор следствия; лучше всего infolgedessen (фактическое последствие события). Инверсия: … haben 300 Menschen …',
      },
      {
        type: 'gap',
        prompt: 'Wir mussten das Projekt verschieben, ___ es fehlte schlicht das Geld.',
        answers: ['denn'],
        hintRu: 'причина, после пропуска прямой порядок слов',
        explanationRu: 'После пропуска прямой порядок (es fehlte) → союз на нулевой позиции. Причина → denn. Weil потребовал бы глагол в конце: weil das Geld fehlte.',
      },
      {
        type: 'order',
        words: ['Infolgedessen', 'hat', 'die Stadt', 'die Parkgebühren', 'deutlich', 'erhöht.'],
        translationRu: 'Вследствие этого город значительно повысил плату за парковку.',
        explanationRu: 'Коннектор на первом месте → спрягаемый глагол hat на втором, подлежащее die Stadt сразу после него.',
      },
      {
        type: 'order',
        words: ['Zusammenfassend', 'lässt sich', 'sagen,', 'dass', 'die Vorteile', 'überwiegen.'],
        translationRu: 'Подводя итог, можно сказать, что преимущества перевешивают.',
        explanationRu: 'Типичное клише для заключения. Zusammenfassend на первом месте, затем глагол (lässt); в придаточном с dass глагол в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите в виде двух предложений с коннектором trotzdem.',
        prompt: 'Obwohl das Angebot teuer ist, nutzen es viele Menschen.',
        answers: [
          'Das Angebot ist teuer. Trotzdem nutzen es viele Menschen.',
          'Das Angebot ist teuer, trotzdem nutzen es viele Menschen.',
        ],
        explanationRu: 'obwohl вводит придаточное (глагол в конце), trotzdem — наречие на первом месте второго предложения с инверсией: Trotzdem nutzen …',
      },
      {
        type: 'transform',
        instructionRu: 'Перепишите в виде двух предложений с коннектором folglich.',
        prompt: 'Weil der Zug ausgefallen ist, kamen viele Teilnehmer zu spät.',
        answers: [
          'Der Zug ist ausgefallen. Folglich kamen viele Teilnehmer zu spät.',
          'Der Zug ist ausgefallen, folglich kamen viele Teilnehmer zu spät.',
        ],
        explanationRu: 'Причина становится самостоятельным предложением (Der Zug ist ausgefallen.), следствие вводится коннектором folglich с инверсией: Folglich kamen …',
      },
    ],
  },
  vocab: [
    {
      de: 'These',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'тезис, утверждение',
      example: 'Der Autor vertritt die These, dass soziale Medien die Demokratie schwächen.',
      exampleRu: 'Автор отстаивает тезис о том, что социальные сети ослабляют демократию.',
    },
    {
      de: 'Kernaussage',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'главная мысль, основное утверждение',
      example: 'Fassen Sie die Kernaussage des Textes in einem Satz zusammen.',
      exampleRu: 'Сформулируйте главную мысль текста одним предложением.',
    },
    {
      de: 'Wortmeldung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'просьба слова, выступление (в дискуссии)',
      example: 'Gibt es zu diesem Punkt noch weitere Wortmeldungen?',
      exampleRu: 'Есть ли ещё желающие высказаться по этому пункту?',
    },
    {
      de: 'Gesichtspunkt',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'точка зрения, аспект',
      example: 'Unter ökologischen Gesichtspunkten ist die Bahn dem Flugzeug klar überlegen.',
      exampleRu: 'С экологической точки зрения железная дорога явно превосходит самолёт.',
    },
    {
      de: 'im Gegensatz dazu',
      pos: 'phrase',
      ru: 'в противоположность этому',
      example: 'Viele Ältere lesen Zeitung. Im Gegensatz dazu informieren sich Jugendliche vor allem online.',
      exampleRu: 'Многие пожилые люди читают газеты. В противоположность этому молодёжь получает информацию в основном онлайн.',
    },
    {
      de: 'somit',
      pos: 'adv',
      ru: 'таким образом, следовательно',
      example: 'Alle Teilnehmer haben zugestimmt. Somit ist der Vorschlag angenommen.',
      exampleRu: 'Все участники согласились. Таким образом, предложение принято.',
    },
    {
      de: 'Position beziehen',
      forms: 'bezog, hat bezogen; zu + Dat',
      pos: 'phrase',
      ru: 'занять (чёткую) позицию',
      example: 'In Ihrem Forumsbeitrag sollten Sie klar Position beziehen.',
      exampleRu: 'В своём сообщении на форуме вам следует занять чёткую позицию.',
    },
    {
      de: 'eine Meinung vertreten',
      forms: 'vertritt, vertrat, hat vertreten',
      pos: 'phrase',
      ru: 'придерживаться (отстаивать) мнения',
      example: 'Ich vertrete die Meinung, dass Bildung kostenlos sein sollte.',
      exampleRu: 'Я придерживаюсь мнения, что образование должно быть бесплатным.',
    },
    {
      de: 'entgegnen',
      forms: 'entgegnete, hat entgegnet; + Dat',
      pos: 'verb',
      ru: 'возразить, ответить (на довод)',
      example: 'Dem lässt sich entgegnen, dass die Kosten langfristig sinken werden.',
      exampleRu: 'На это можно возразить, что в долгосрочной перспективе расходы снизятся.',
    },
    {
      de: 'Einigung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'соглашение, договорённость',
      example: 'Nach langer Diskussion kamen die beiden Parteien zu einer Einigung.',
      exampleRu: 'После долгой дискуссии обе стороны пришли к соглашению.',
    },
    {
      de: 'Hauptargument',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'главный аргумент',
      example: 'Das Hauptargument der Befürworter ist der Schutz der Gesundheit.',
      exampleRu: 'Главный аргумент сторонников — защита здоровья.',
    },
    {
      de: 'anführen',
      forms: 'führt an, führte an, hat angeführt',
      pos: 'verb',
      ru: 'приводить (аргументы, примеры)',
      example: 'Um Ihre Meinung zu stützen, sollten Sie mindestens ein konkretes Beispiel anführen.',
      exampleRu: 'Чтобы подкрепить своё мнение, вам следует привести хотя бы один конкретный пример.',
    },
    {
      de: 'sich auseinandersetzen mit',
      forms: 'setzt sich auseinander, setzte sich auseinander, hat sich auseinandergesetzt; + Dat',
      pos: 'verb',
      ru: 'разбираться, критически заниматься чем-л.',
      example: 'In der Prüfung sollen Sie sich kritisch mit dem Thema auseinandersetzen.',
      exampleRu: 'На экзамене вы должны критически разобрать тему.',
    },
    {
      de: 'Argumentation',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'аргументация',
      example: 'Ihre Argumentation ist logisch aufgebaut und gut nachvollziehbar.',
      exampleRu: 'Ваша аргументация логично выстроена и хорошо понятна.',
    },
    {
      de: 'Gliederung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'план, структура (текста)',
      example: 'Bevor Sie schreiben, sollten Sie eine kurze Gliederung erstellen.',
      exampleRu: 'Прежде чем писать, стоит составить краткий план.',
    },
    {
      de: 'Überleitung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'переход, связка (между частями текста)',
      example: 'Eine gute Überleitung verbindet die Einleitung mit dem ersten Argument.',
      exampleRu: 'Хорошая связка соединяет введение с первым аргументом.',
    },
    {
      de: 'Redemittel',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'речевое клише, речевая формула',
      example: 'Lernen Sie für die mündliche Prüfung einige Redemittel zum Widersprechen auswendig.',
      exampleRu: 'Выучите к устному экзамену несколько речевых клише для возражения.',
    },
    {
      de: 'objektiv',
      pos: 'adj',
      ru: 'объективный',
      example: 'Ein Zeitungsbericht sollte möglichst objektiv informieren.',
      exampleRu: 'Газетная статья должна информировать как можно объективнее.',
    },
    {
      de: 'zusammenfassend',
      pos: 'adv',
      ru: 'подводя итог, резюмируя',
      example: 'Zusammenfassend lässt sich sagen, dass beide Modelle Vor- und Nachteile haben.',
      exampleRu: 'Подводя итог, можно сказать, что у обеих моделей есть преимущества и недостатки.',
    },
    {
      de: 'Streitfrage',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'спорный вопрос',
      example: 'Ob Hausaufgaben sinnvoll sind, ist unter Pädagogen eine alte Streitfrage.',
      exampleRu: 'Полезны ли домашние задания — старый спорный вопрос среди педагогов.',
    },
  ],
  listening: {
    title: 'Prüfungssimulation: Vier-Tage-Woche – ja oder nein?',
    kind: 'dialog',
    text: `A: Also, unser Thema lautet: „Sollte die Vier-Tage-Woche für alle Beschäftigten eingeführt werden?“ Tomasz, möchtest du anfangen?
B: Gern. Ich bin ehrlich gesagt skeptisch. Zwar klingt ein freier Freitag verlockend, aber in vielen Berufen ist das kaum umsetzbar. Denk an Krankenhäuser oder Pflegeheime: Dort fehlt schon jetzt Personal. Folglich müssten die anderen noch mehr arbeiten.
A: Das ist ein wichtiger Punkt. Ich sehe das trotzdem anders. In Pilotprojekten waren die Beschäftigten weniger gestresst und seltener krank. Infolgedessen ist die Produktivität in vielen Firmen sogar gestiegen.
B: Das mag für Büros gelten. Im Gegensatz dazu kann eine Pflegekraft ihre Arbeit nicht einfach schneller erledigen. Ein Patient braucht so viel Zeit, wie er eben braucht.
A: Da gebe ich dir recht. Aber niemand sagt, dass es überall gleich funktionieren muss. Man könnte mit Branchen anfangen, in denen es leichter ist. Außerdem würde eine kürzere Woche viele Berufe attraktiver machen – und dadurch vielleicht sogar den Personalmangel verringern.
B: Hm, das ist ein interessantes Argument. Aber wer bezahlt das? Wenn die Leute bei vollem Lohn weniger arbeiten, steigen die Kosten für die Unternehmen. Kleine Betriebe könnten sich das kaum leisten.
A: Das stimmt. Dennoch glaube ich, dass sich die Investition lohnt, wenn die Mitarbeiter motivierter sind und seltener kündigen. Eine neue Kollegin einzuarbeiten ist schließlich auch teuer.
B: Okay. Was hältst du von folgendem Kompromiss: Statt einer Pflicht für alle sollte es ein Recht geben, die Arbeitszeit auf vier Tage zu verteilen, zum Beispiel mit längeren Arbeitstagen.
A: Also viermal zehn Stunden? Das wäre für Eltern schwierig, weil die Kita um fünf schließt. Aber als freiwilliges Modell, das jede Firma an ihre Bedingungen anpassen kann, fände ich das gut.
B: Dann sind wir uns ja einig: keine Pflicht, aber mehr Flexibilität. Zusammenfassend lässt sich sagen, dass die Vier-Tage-Woche Chancen bietet, aber nicht zu jeder Branche passt.`,
    questions: [
      {
        question: 'Warum ist Tomasz am Anfang skeptisch?',
        options: [
          'Weil er selbst gern freitags arbeitet.',
          'Weil in manchen Berufen schon jetzt Personal fehlt.',
          'Weil die Pilotprojekte gescheitert sind.',
          'Weil die Produktivität sinken würde.',
        ],
        answer: 1,
      },
      {
        question: 'Was berichtet Lena über die Pilotprojekte?',
        options: [
          'Die Beschäftigten waren seltener krank und weniger gestresst.',
          'Die meisten Firmen haben die Projekte abgebrochen.',
          'Die Beschäftigten mussten auf Lohn verzichten.',
          'Nur Krankenhäuser haben teilgenommen.',
        ],
        answer: 0,
      },
      {
        question: 'Welches Gegenargument bringt Tomasz in Bezug auf die Pflege?',
        options: [
          'Pflegekräfte wollen gar nicht weniger arbeiten.',
          'In der Pflege gibt es zu viel Bürokratie.',
          'Die Arbeit mit Patienten lässt sich nicht beschleunigen.',
          'Pflegeheime haben bereits eine Vier-Tage-Woche.',
        ],
        answer: 2,
      },
      {
        question: 'Welches Problem sieht Tomasz für kleine Betriebe?',
        options: [
          'Sie finden keine Bewerber.',
          'Sie haben zu wenige Aufträge.',
          'Sie müssen die Kita-Zeiten berücksichtigen.',
          'Sie können die höheren Kosten kaum tragen.',
        ],
        answer: 3,
      },
      {
        question: 'Worauf einigen sich Lena und Tomasz am Ende?',
        options: [
          'Auf eine gesetzliche Vier-Tage-Woche für alle.',
          'Auf ein freiwilliges, flexibles Modell.',
          'Auf Zehn-Stunden-Tage für alle Eltern.',
          'Darauf, das Modell nur in Krankenhäusern zu testen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'На онлайн-форуме обсуждают, нужно ли ввести для всех молодых людей после школы обязательный «год служения обществу» (Gesellschaftsjahr), например в больнице, доме престарелых или в охране природы. Напишите свой форумный пост (экзамен B2, Schreiben Teil 1).',
    taskDe: 'In einem Online-Forum wird diskutiert, ob für alle jungen Menschen nach der Schule ein verpflichtendes Gesellschaftsjahr eingeführt werden soll, z. B. im Krankenhaus, im Pflegeheim oder im Naturschutz. Schreiben Sie einen Forumsbeitrag.',
    points: [
      'Äußern Sie Ihre Meinung zu einem verpflichtenden Gesellschaftsjahr.',
      'Nennen Sie Gründe dafür und dagegen.',
      'Beschreiben Sie, wie man junge Menschen auch ohne Pflicht für soziales Engagement gewinnen könnte.',
      'Vergleichen Sie mit der Situation in Ihrem Heimatland.',
    ],
    minWords: 180,
    usefulPhrases: [
      'Zunächst möchte ich auf die Frage eingehen, ob …',
      'Befürworter argumentieren, dass … Im Gegensatz dazu …',
      'Hinzu kommt, dass …',
      'Folglich / Infolgedessen …',
      'Dennoch bin ich der Meinung, dass …',
      'Zusammenfassend lässt sich sagen, dass …',
    ],
  },
  speaking: {
    scenarioRu: 'Устный экзамен B2, Teil 2: дискуссия с партнёром. Тема: «Нужно ли отменить оценки в начальной школе?» Ваш партнёр придерживается противоположной точки зрения. Обменяйтесь аргументами, реагируйте на доводы партнёра и придите к компромиссу.',
    aiRole: 'Sie sind Prüfungspartnerin oder Prüfungspartner in der mündlichen Prüfung Goethe-Zertifikat B2, Teil 2 (Diskussion). Thema: „Sollen Noten in der Grundschule abgeschafft werden?“ Sie sind gegen die Abschaffung: Noten geben Orientierung, sind für Eltern verständlich und bereiten auf das spätere Leben vor. Sprechen Sie natürliches Deutsch auf B2-Niveau, nutzen Sie Konnektoren, widersprechen Sie freundlich, aber deutlich, fragen Sie nach Beispielen und lassen Sie sich nur durch gute Argumente zu einem Kompromiss bewegen.',
    opener: 'Also, ich fange einfach mal an: Ich finde, Noten haben ihren Sinn. Kinder wollen doch wissen, wo sie stehen – und Eltern erst recht. Wie siehst du das?',
    tasksRu: [
      'Чётко выразите свою позицию и обоснуйте её минимум двумя аргументами.',
      'Используйте не менее пяти разных коннекторов (zudem, folglich, dennoch, im Gegensatz dazu, infolgedessen …).',
      'Отреагируйте на аргументы партнёра: согласитесь частично и возразите (Da hast du recht, aber …; Dem kann ich nur bedingt zustimmen …).',
      'Предложите компромисс и подведите итог дискуссии (Zusammenfassend …).',
    ],
    readAloud: [
      'Einerseits geben Noten den Kindern eine klare Rückmeldung, andererseits erzeugen sie schon früh großen Leistungsdruck.',
      'Die Mieten in den Städten sind stark gestiegen; infolgedessen ziehen immer mehr junge Familien ins Umland.',
      'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen, auch wenn einige Bedenken durchaus berechtigt sind.',
    ],
  },
};
