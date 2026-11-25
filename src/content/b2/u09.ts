import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b2-09',
  level: 'B2',
  order: 9,
  title: 'Kultur & Kunst',
  titleRu: 'Культура и искусство',
  goalsRu: [
    'Понимать культурные новости и репортажи о выставках, театре и музеях.',
    'Переходить от глагольного стиля к именному и обратно (weil ↔ wegen, obwohl ↔ trotz, wenn ↔ bei, nachdem ↔ nach, bevor ↔ vor, um … zu ↔ zur).',
    'Правильно образовывать отглагольные существительные и согласовывать их с родительным падежом.',
    'Написать рецензию на выставку, фильм или спектакль.',
  ],
  grammar: {
    topic: 'Nominalisierung und Verbalisierung',
    topicRu: 'Именной и глагольный стиль',
    explanationRu: `В письменных текстах — в новостях, отчётах, научных статьях — немцы часто используют **именной стиль**: вместо придаточного предложения — **предлог + существительное**. В устной речи чаще используют **глагольный стиль**. На уровне B2 нужно уметь переходить от одного к другому.

**Основные пары:**

- **weil / da** ↔ **wegen / aufgrund** + Genitiv
- **obwohl** ↔ **trotz** + Genitiv
- **wenn / als** ↔ **bei** + Dativ
- **nachdem** ↔ **nach** + Dativ
- **bevor** ↔ **vor** + Dativ
- **um … zu / damit** ↔ **zu** + Dativ (zum, zur)

**Как превратить придаточное в именную группу:**

- глагол → существительное: eröffnen → die Eröff**nung**, beginnen → der Beginn, besuchen → der Besuch, malen → das Malen
- подлежащее или дополнение → родительный падеж: Der Künstler stirbt. → der Tod **des Künstlers**; Man restauriert das Bild. → die Restaurierung **des Bildes**
- наречие → прилагательное: Man betrachtet das Bild genau. → bei genau**er** Betrachtung
- местоимение → притяжательное местоимение: weil er krank war → wegen **seiner** Krankheit

Пример: **Weil** das Museum renoviert **wird**, bleibt es geschlossen. ↔ **Wegen der Renovierung** bleibt das Museum geschlossen.

**При обратном переходе** (Verbalisierung) нужно восстановить подлежащее и спрягаемый глагол, а также поставить глагол в конец придаточного: Nach der Restaurierung des Gemäldes … → **Nachdem** das Gemälde restauriert worden **war**, …

**Типичные ошибки русскоговорящих:**

- Смешение стилей: *Wegen das Museum renoviert wird* — после предлога не может стоять придаточное.
- Неверный падеж: trotz, wegen, aufgrund, während + **Genitiv**; bei, nach, vor, zu + **Dativ**.
- Наречие остаётся без окончания: *bei genau Betrachtung* — правильно **bei genauer Betrachtung**.
- Русское «для того чтобы» в именном стиле — не *für die Rettung*, а чаще **zur Rettung**.`,
    table: [
      ['Придаточное', 'Предлог + существительное', 'Пример'],
      ['weil, da', 'wegen, aufgrund + Gen', 'wegen der Renovierung'],
      ['obwohl', 'trotz + Gen', 'trotz der schlechten Kritiken'],
      ['wenn, als', 'bei + Dat', 'bei der Eröffnung'],
      ['nachdem', 'nach + Dat', 'nach dem Konzert'],
      ['bevor', 'vor + Dat', 'vor Beginn der Vorstellung'],
      ['um … zu, damit', 'zu + Dat', 'zur Rettung des Theaters'],
      ['während', 'während + Gen', 'während der Aufführung'],
    ],
    examples: [
      {
        de: 'Trotz der schlechten Kritiken war das Theaterstück monatelang ausverkauft.',
        ru: 'Несмотря на плохие рецензии, на спектакль несколько месяцев не было билетов.',
      },
      {
        de: 'Bei genauer Betrachtung erkennt man im Hintergrund des Gemäldes eine zweite Figur.',
        ru: 'При внимательном рассмотрении на заднем плане картины можно увидеть вторую фигуру.',
      },
      {
        de: 'Nach der Eröffnung der Ausstellung bildeten sich lange Schlangen vor dem Museum.',
        ru: 'После открытия выставки перед музеем выстроились длинные очереди.',
      },
      {
        de: 'Bevor die Vorstellung beginnt, werden die Zuschauer gebeten, ihre Handys auszuschalten.',
        ru: 'Перед началом спектакля зрителей просят выключить телефоны.',
      },
      {
        de: 'Zur Finanzierung des neuen Konzertsaals hat die Stadt eine Spendenaktion gestartet.',
        ru: 'Для финансирования нового концертного зала город начал сбор пожертвований.',
      },
      {
        de: 'Weil die Nachfrage so groß war, wurde die Ausstellung um zwei Monate verlängert.',
        ru: 'Поскольку спрос был очень большим, выставку продлили на два месяца.',
      },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: '___ der Aufführung ist das Fotografieren verboten.',
        options: ['Während', 'Wenn', 'Nachdem', 'Obwohl'],
        answer: 0,
        explanationRu: 'Перед существительным в родительном падеже (der Aufführung) нужен предлог. Wenn, nachdem и obwohl — союзы, после них идёт придаточное.',
      },
      {
        type: 'choice',
        prompt: 'Obwohl es stark regnete, kamen viele Besucher zum Open-Air-Konzert. → ___ kamen viele Besucher zum Open-Air-Konzert.',
        options: ['Wegen des starken Regens', 'Bei starkem Regen', 'Trotz des starken Regens', 'Trotz dem stark Regen'],
        answer: 2,
        explanationRu: 'obwohl ↔ trotz + Genitiv. Наречие stark становится прилагательным с окончанием: des starken Regens.',
      },
      {
        type: 'choice',
        prompt: 'Zur ___ des Theaters wurde ein Förderverein gegründet.',
        options: ['Retten', 'Rettung', 'Gerettet', 'Rettende'],
        answer: 1,
        explanationRu: 'После zur (= zu der) нужно существительное женского рода: retten → die Rettung.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz entspricht „Nach dem Tod des Malers wurden seine Bilder berühmt.“?',
        options: [
          'Bevor der Maler starb, wurden seine Bilder berühmt.',
          'Als der Maler starb, wurden seine Bilder berühmt.',
          'Weil der Maler starb, wurden seine Bilder berühmt.',
          'Nachdem der Maler gestorben war, wurden seine Bilder berühmt.',
        ],
        answer: 3,
        explanationRu: 'nach + Dativ ↔ nachdem. После nachdem обычно стоит Plusquamperfekt, так как действие произошло раньше.',
      },
      {
        type: 'gap',
        prompt: 'Bei der ___ des Festivals hielt die Bürgermeisterin eine kurze Rede.',
        answers: ['Eröffnung'],
        hintRu: 'eröffnen → существительное',
        explanationRu: 'Bei der Eröffnung = als das Festival eröffnet wurde. От глагола eröffnen образуется существительное на -ung.',
      },
      {
        type: 'gap',
        prompt: '___ Beginn des Konzerts bitten wir Sie, Ihre Plätze einzunehmen.',
        answers: ['Vor'],
        explanationRu: 'vor + Dativ ↔ bevor: Vor Beginn des Konzerts = Bevor das Konzert beginnt.',
      },
      {
        type: 'gap',
        prompt: 'Wegen ___ Krankheit des Hauptdarstellers fällt die Vorstellung heute aus.',
        answers: ['der'],
        explanationRu: 'wegen + Genitiv; die Krankheit (женский род) → der Krankheit.',
      },
      {
        type: 'gap',
        prompt: 'Nachdem das Gemälde restauriert ___ war, wurde es wieder ausgestellt.',
        answers: ['worden'],
        explanationRu: 'Вербализация «Nach der Restaurierung des Gemäldes»: пассив в Plusquamperfekt — restauriert worden war.',
      },
      {
        type: 'order',
        words: ['Aufgrund', 'der großen Nachfrage', 'wurde', 'die Ausstellung', 'verlängert.'],
        translationRu: 'Из-за большого спроса выставку продлили.',
        explanationRu: 'Именная группа aufgrund + Genitiv стоит на первом месте, за ней сразу спрягаемый глагол.',
      },
      {
        type: 'order',
        words: ['Bei', 'genauer', 'Betrachtung', 'entdeckt man', 'viele', 'Details.'],
        translationRu: 'При внимательном рассмотрении можно обнаружить много деталей.',
        explanationRu: 'Bei genauer Betrachtung = Wenn man genau hinsieht. Наречие genau стало прилагательным genauer (Dativ, женский род, без артикля).',
      },
      {
        type: 'transform',
        instructionRu: 'Замените придаточное предложение именной группой (wegen/aufgrund).',
        prompt: 'Weil die Eintrittspreise gestiegen sind, kommen weniger Besucher.',
        answers: [
          'Wegen der gestiegenen Eintrittspreise kommen weniger Besucher.',
          'Aufgrund der gestiegenen Eintrittspreise kommen weniger Besucher.',
          'Wegen des Anstiegs der Eintrittspreise kommen weniger Besucher.',
          'Aufgrund des Anstiegs der Eintrittspreise kommen weniger Besucher.',
        ],
        explanationRu: 'weil ↔ wegen/aufgrund + Genitiv. Глагол gestiegen sind превращается в причастное определение (der gestiegenen Eintrittspreise) или в существительное der Anstieg.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените именную группу придаточным предложением с obwohl.',
        prompt: 'Trotz der Kritik der Presse hält der Regisseur an seinem Konzept fest.',
        answers: [
          'Obwohl die Presse ihn kritisiert, hält der Regisseur an seinem Konzept fest.',
          'Obwohl die Presse den Regisseur kritisiert, hält er an seinem Konzept fest.',
          'Obwohl die Presse ihn kritisiert hat, hält der Regisseur an seinem Konzept fest.',
          'Obwohl die Presse Kritik übt, hält der Regisseur an seinem Konzept fest.',
          'Der Regisseur hält an seinem Konzept fest, obwohl die Presse ihn kritisiert.',
        ],
        explanationRu: 'trotz ↔ obwohl. Genitiv «der Presse» становится подлежащим, существительное Kritik — глаголом kritisieren, который стоит в конце придаточного.',
      },
    ],
  },
  vocab: [
    {
      de: 'Vernissage',
      article: 'die',
      plural: '-n',
      pos: 'noun',
      ru: 'вернисаж, открытие выставки',
      example: 'Zur Vernissage kamen neben der Künstlerin auch zahlreiche Sammler.',
      exampleRu: 'На вернисаж, кроме самой художницы, пришли многочисленные коллекционеры.',
    },
    {
      de: 'Gemälde',
      article: 'das',
      plural: '-',
      pos: 'noun',
      ru: 'картина (живопись)',
      example: 'Das Gemälde wurde bei einer Auktion für mehrere Millionen Euro versteigert.',
      exampleRu: 'Картину продали на аукционе за несколько миллионов евро.',
    },
    {
      de: 'Aufführung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'спектакль, представление, исполнение',
      example: 'Die Aufführung dauerte mit zwei Pausen über vier Stunden.',
      exampleRu: 'Спектакль с двумя антрактами длился более четырёх часов.',
    },
    {
      de: 'Inszenierung',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'постановка',
      example: 'Die moderne Inszenierung von „Faust“ hat das Publikum gespalten.',
      exampleRu: 'Современная постановка «Фауста» разделила публику.',
    },
    {
      de: 'Regisseur',
      article: 'der',
      plural: '-e',
      pos: 'noun',
      ru: 'режиссёр',
      example: 'Der Regisseur hat den Film in nur drei Wochen gedreht.',
      exampleRu: 'Режиссёр снял фильм всего за три недели.',
    },
    {
      de: 'Publikum',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'публика, зрители',
      example: 'Nach der Premiere applaudierte das Publikum minutenlang.',
      exampleRu: 'После премьеры публика аплодировала несколько минут.',
    },
    {
      de: 'Rezension',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'рецензия',
      example: 'In ihrer Rezension lobt die Kritikerin vor allem die Schauspieler.',
      exampleRu: 'В своей рецензии критик хвалит прежде всего актёров.',
    },
    {
      de: 'Kulturerbe',
      article: 'das',
      plural: '–',
      pos: 'noun',
      ru: 'культурное наследие',
      example: 'Die historische Altstadt gilt als wichtiges Kulturerbe der Region.',
      exampleRu: 'Исторический старый город считается важным культурным наследием региона.',
    },
    {
      de: 'Skulptur',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'скульптура',
      example: 'Im Park stehen mehrere Skulpturen zeitgenössischer Künstler.',
      exampleRu: 'В парке стоят несколько скульптур современных художников.',
    },
    {
      de: 'Subvention',
      article: 'die',
      plural: '-en',
      pos: 'noun',
      ru: 'субсидия, дотация',
      example: 'Ohne staatliche Subventionen müssten viele Theater schließen.',
      exampleRu: 'Без государственных дотаций многим театрам пришлось бы закрыться.',
    },
    {
      de: 'Meisterwerk',
      article: 'das',
      plural: '-e',
      pos: 'noun',
      ru: 'шедевр',
      example: 'Viele halten diesen Roman für ein Meisterwerk der Weltliteratur.',
      exampleRu: 'Многие считают этот роман шедевром мировой литературы.',
    },
    {
      de: 'darstellen',
      forms: 'stellt dar, stellte dar, hat dargestellt',
      pos: 'verb',
      ru: 'изображать, представлять',
      example: 'Das Bild stellt eine Szene aus der griechischen Mythologie dar.',
      exampleRu: 'Картина изображает сцену из греческой мифологии.',
    },
    {
      de: 'inszenieren',
      forms: 'inszenierte, hat inszeniert',
      pos: 'verb',
      ru: 'ставить (спектакль)',
      example: 'Die junge Regisseurin hat die Oper ganz neu inszeniert.',
      exampleRu: 'Молодой режиссёр поставила оперу совершенно по-новому.',
    },
    {
      de: 'restaurieren',
      forms: 'restaurierte, hat restauriert',
      pos: 'verb',
      ru: 'реставрировать',
      example: 'Das beschädigte Fresko wird zurzeit aufwendig restauriert.',
      exampleRu: 'Повреждённую фреску сейчас тщательно реставрируют.',
    },
    {
      de: 'sich auseinandersetzen',
      forms: 'mit + Dat; setzt sich auseinander, setzte sich auseinander, hat sich auseinandergesetzt',
      pos: 'verb',
      ru: 'разбираться, серьёзно заниматься (темой)',
      example: 'In seinen Werken setzt sich der Künstler mit dem Thema Migration auseinander.',
      exampleRu: 'В своих работах художник обращается к теме миграции.',
    },
    {
      de: 'ausverkauft',
      pos: 'adj',
      ru: 'распроданный (о билетах)',
      example: 'Die Konzerte waren innerhalb weniger Minuten ausverkauft.',
      exampleRu: 'Билеты на концерты были распроданы за несколько минут.',
    },
    {
      de: 'zeitgenössisch',
      pos: 'adj',
      ru: 'современный (об искусстве)',
      example: 'Das Museum zeigt vor allem zeitgenössische Kunst.',
      exampleRu: 'Музей показывает в основном современное искусство.',
    },
    {
      de: 'gelungen',
      pos: 'adj',
      ru: 'удачный',
      example: 'Die Premiere war ein rundum gelungener Abend.',
      exampleRu: 'Премьера стала во всех отношениях удачным вечером.',
    },
    {
      de: 'großen Anklang finden',
      forms: 'findet, fand, hat gefunden',
      pos: 'phrase',
      ru: 'найти широкий отклик, иметь успех',
      example: 'Das neue Musical hat beim Publikum großen Anklang gefunden.',
      exampleRu: 'Новый мюзикл нашёл широкий отклик у публики.',
    },
    {
      de: 'Geschmackssache sein',
      pos: 'phrase',
      ru: 'быть делом вкуса',
      example: 'Ob man moderne Kunst mag, ist letztlich Geschmackssache.',
      exampleRu: 'Нравится ли кому-то современное искусство — в конечном счёте дело вкуса.',
    },
  ],
  listening: {
    title: 'Kulturnachrichten: Das Kunstmuseum ist wieder offen',
    kind: 'monolog',
    text: `Und nun zur Kultur. Nach fast drei Jahren Bauzeit hat das Städtische Kunstmuseum am Wochenende wieder seine Türen geöffnet. Schon vor Beginn der Eröffnungsfeier bildete sich eine lange Schlange vor dem Eingang – trotz des Regens.

Die Renovierung war dringend notwendig gewesen. Aufgrund undichter Dächer und einer veralteten Klimaanlage waren mehrere Gemälde beschädigt worden. Zur Rettung der Sammlung hatte die Stadt schließlich 40 Millionen Euro bereitgestellt, deutlich mehr als ursprünglich geplant. Wegen der gestiegenen Kosten gab es im Stadtrat heftige Diskussionen.

Bei einem Rundgang durch die neuen Räume fällt vor allem das Licht auf. „Wir wollten, dass man die Werke wieder so sieht, wie die Künstler sie gemalt haben“, erklärt Museumsdirektorin Dr. Elena Ruiz. Besonders stolz ist sie auf ein Gemälde aus dem 17. Jahrhundert, das während der Schließung aufwendig restauriert worden ist. „Bei genauer Betrachtung erkennt man jetzt im Hintergrund eine Figur, die jahrhundertelang unter einer Schicht aus Schmutz verborgen war.“

Neu ist auch das Konzept. Statt die Kunst nur chronologisch zu präsentieren, setzt sich das Museum in thematischen Räumen mit Fragen wie Migration, Arbeit und Umwelt auseinander. Neben klassischen Gemälden hängen dort Werke zeitgenössischer Künstlerinnen und Künstler aus der Region. Nicht alle Besucher sind davon überzeugt. „Ich finde die Mischung etwas beliebig“, sagt ein älterer Herr. Eine junge Studentin dagegen ist begeistert: „Endlich ein Museum, das etwas mit meinem Leben zu tun hat.“

Kritik gibt es allerdings an den Eintrittspreisen. Nach der Wiedereröffnung kostet ein Ticket 16 Euro statt bisher 9. Die Direktorin verteidigt die Erhöhung: Ohne zusätzliche Einnahmen sei der Betrieb nicht zu finanzieren. Immerhin bleibt der Eintritt für Kinder und Jugendliche bis 18 Jahre frei, und am ersten Sonntag im Monat können alle Besucher das Museum kostenlos besichtigen.

Die Eröffnungsausstellung läuft noch bis Ende Juni.`,
    questions: [
      {
        question: 'Warum musste das Museum renoviert werden?',
        options: [
          'Weil es zu wenige Besucher hatte.',
          'Weil Schäden am Gebäude die Kunstwerke gefährdeten.',
          'Weil die Sammlung verkauft werden sollte.',
          'Weil ein neues Café eingebaut werden sollte.',
        ],
        answer: 1,
      },
      {
        question: 'Was ist das Besondere an dem restaurierten Gemälde aus dem 17. Jahrhundert?',
        options: [
          'Das Museum hat es neu gekauft.',
          'Es wurde bei den Bauarbeiten im Keller gefunden.',
          'Man sieht jetzt eine Figur, die früher verborgen war.',
          'Es wurde an ein anderes Museum verliehen.',
        ],
        answer: 2,
      },
      {
        question: 'Wie präsentiert das Museum seine Sammlung jetzt?',
        options: [
          'Nach Themen, alte und neue Kunst gemischt.',
          'Streng chronologisch.',
          'Nur mit Werken aus dem 17. Jahrhundert.',
          'Ausschließlich digital.',
        ],
        answer: 0,
      },
      {
        question: 'Wie reagieren die Besucher auf das neue Konzept?',
        options: [
          'Alle sind begeistert.',
          'Niemand interessiert sich dafür.',
          'Vor allem ältere Besucher sind begeistert.',
          'Die Meinungen sind geteilt.',
        ],
        answer: 3,
      },
      {
        question: 'Was gilt nach der Wiedereröffnung?',
        options: [
          'Der Eintritt ist für alle kostenlos.',
          'Kinder und Jugendliche zahlen keinen Eintritt.',
          'Ein Ticket kostet weiterhin 9 Euro.',
          'Das Museum ist sonntags geschlossen.',
        ],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Напишите для культурного блога рецензию на выставку, фильм или спектакль, который вы недавно посмотрели. Используйте элементы именного стиля.',
    taskDe: 'Sie haben vor Kurzem eine Ausstellung, einen Film oder ein Theaterstück gesehen. Schreiben Sie darüber eine Rezension für einen Kulturblog.',
    points: [
      'Um welche Veranstaltung es sich handelt (wann, wo)',
      'Kurze Beschreibung von Inhalt oder Konzept',
      'Was Ihnen gefallen hat und was nicht',
      'Ihre Empfehlung für die Leserinnen und Leser',
    ],
    minWords: 160,
    usefulPhrases: [
      'Bei meinem Besuch der Ausstellung fiel mir sofort auf, dass …',
      'Das Stück setzt sich mit … auseinander.',
      'Trotz einiger Schwächen …',
      'Besonders gelungen finde ich …',
      'Weniger überzeugt hat mich …',
      'Wer sich für … interessiert, sollte … auf keinen Fall verpassen.',
    ],
  },
  speaking: {
    scenarioRu: 'Ваш друг Йенс считает театр и оперу элитарными и уверен, что городу стоит тратить деньги на бассейны и школы, а не на культуру. Город как раз решил дать театру новые дотации. Обсудите это с ним.',
    aiRole: 'Sie sind Jens, ein Freund, der Theater und Oper für elitär und Geldverschwendung hält und findet, dass Kulturgelder lieber in Schwimmbäder und Schulen fließen sollten. Sprechen Sie natürliches Deutsch auf B2-Niveau, bringen Sie provokante Gegenargumente und fragen Sie nach konkreten Beispielen.',
    opener: 'Hast du das gelesen? Die Stadt will das Theater mit weiteren drei Millionen Euro unterstützen. Ehrlich, wer geht denn da noch hin? Das Geld könnte man doch viel sinnvoller einsetzen.',
    tasksRu: [
      'Объясните, почему культура важна для города и общества.',
      'Используйте именной стиль хотя бы в трёх фразах (trotz der …, zur Förderung …, bei …).',
      'Возразите против аргумента об «элитарности» и приведите примеры доступной культуры.',
      'Предложите компромисс (например, скидки для молодёжи, новые форматы).',
    ],
    readAloud: [
      'Aufgrund der großen Nachfrage wurde die Ausstellung zeitgenössischer Kunst um weitere zwei Monate verlängert.',
      'Trotz hoher Subventionen kämpfen viele kleine Theater ums Überleben, weil ihr Publikum immer älter wird.',
      'Nach der aufwendigen Restaurierung des Gemäldes erkennt man bei genauer Betrachtung zahlreiche Details, die jahrhundertelang verborgen waren.',
    ],
  },
};
