import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-11',
  level: 'B1',
  order: 11,
  title: 'Familie & Generationen',
  titleRu: 'Семья и поколения',
  goalsRu: [
    'Рассказывать о своей семье, родственниках и отношениях между поколениями',
    'Выражать принадлежность с помощью родительного падежа (Genitiv) и вопроса wessen?',
    'Правильно использовать Genitiv с именами (Annas Bruder) и заменять его на von + Dativ',
    'Писать личное письмо о семейном празднике и вместе планировать семейное торжество',
  ],
  grammar: {
    topic: 'Genitiv: Artikel, Possessivartikel, Namen; Frage „wessen?“; Alternative von + Dativ',
    topicRu: 'Родительный падеж (Genitiv): артикли, притяжательные местоимения, имена; вопрос wessen?; замена на von + Dativ',
    explanationRu: `**Родительный падеж (Genitiv)** отвечает на вопрос **wessen?** (чей? чья? чьё?) и выражает принадлежность или отношение: das Haus **meiner Großeltern** — дом моих бабушки и дедушки.

**Окончания артикля и существительного:**

- мужской и средний род: **des / eines / meines** + существительное с окончанием **-s** или **-es**: des Vaters, eines Kindes, meines Onkels;
- женский род и множественное число: **der / einer / meiner**, у существительного окончания нет: der Mutter, meiner Eltern.

**-es** обычно получают односложные слова (des Mannes, des Sohnes) и слова на -s, -ß, -z, -sch (des Hauses, des Fußes). **-s** — многосложные слова (des Vaters, des Onkels, des Großvaters). Существительные n-склонения получают **-n / -en**: des Neffen, des Kollegen, des Herrn (подробнее — в юните 15).

Прилагательные в Genitiv почти всегда оканчиваются на **-en**: die Hochzeit meiner **jüngeren** Schwester, das Auto des **alten** Nachbarn.

**Имена** стоят **перед** существительным и получают **-s без апострофа**: Annas Bruder, Peters Frau, Oma Hildes Garten. Если имя оканчивается на -s, -ß, -x, -z, пишется только апостроф: Hans' Tochter, Max' Schwester. Артикля перед такой конструкцией нет.

**Альтернатива: von + Dativ.** В разговорной речи Genitiv часто заменяют на von: der Bruder von Anna, das Auto von meinem Vater. Если перед существительным во множественном числе нет артикля, **von** обязательно: die Meinung **von Experten**, die Zahl **von Alleinerziehenden**.

**Типичные ошибки русскоговорящих:**

- Забывают окончание: «des Vater» → **des Vaters**.
- Добавляют -s к женскому роду: «der Mutters» → **der Mutter**.
- Ставят апостроф, как в английском: «Anna's Bruder» → **Annas Bruder**.
- Путают der (Genitiv жен. рода) с der (Nominativ муж. рода): das Zimmer **der Tochter** — комната дочери.
- Ставят Genitiv с артиклем перед существительным: «des Vaters Auto» звучит устаревше → **das Auto des Vaters**. Впереди обычно стоят только имена.`,
    table: [
      ['', 'мужской род', 'средний род', 'женский род', 'множественное число'],
      ['определённый артикль', 'des Vaters', 'des Kindes', 'der Mutter', 'der Eltern'],
      ['неопределённый артикль', 'eines Onkels', 'eines Babys', 'einer Tante', '— (von + Dat: von Enkeln)'],
      ['притяжательный артикль', 'meines Bruders', 'unseres Hauses', 'ihrer Schwester', 'seiner Großeltern'],
      ['с прилагательным', 'des jüngeren Sohnes', 'des kleinen Kindes', 'der älteren Tochter', 'der neuen Nachbarn'],
    ],
    examples: [
      { de: 'Das ist das Haus meiner Großeltern.', ru: 'Это дом моих бабушки и дедушки.' },
      { de: 'Der Mann meiner Schwester kommt aus Polen.', ru: 'Муж моей сестры родом из Польши.' },
      { de: 'Wessen Fotoalbum ist das? – Das ist Omas Fotoalbum.', ru: 'Чей это фотоальбом? — Это бабушкин фотоальбом.' },
      { de: 'Am Ende des Familientreffens haben wir ein großes Gruppenfoto gemacht.', ru: 'В конце семейной встречи мы сделали большое групповое фото.' },
      { de: 'Die Kinder meines älteren Bruders sind schon erwachsen.', ru: 'Дети моего старшего брата уже взрослые.' },
      { de: 'Im Alltag sagt man oft „das Auto von meinem Vater“ statt „das Auto meines Vaters“.', ru: 'В повседневной речи часто говорят «машина от моего отца» вместо «машина моего отца».' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Das ist das Zimmer ___ Sohnes.',
        options: ['meinem', 'meines', 'meiner', 'meinen'],
        answer: 1,
        explanationRu: 'der Sohn — мужской род. В Genitiv: meines + окончание -es у существительного: meines Sohnes.',
      },
      {
        type: 'choice',
        prompt: 'Kennst du den Freund ___ Schwester?',
        options: ['deines', 'deiner', 'deine', 'deinem'],
        answer: 1,
        explanationRu: 'die Schwester — женский род. Genitiv женского рода: deiner Schwester, а само существительное окончания не получает.',
      },
      {
        type: 'choice',
        prompt: 'Welche Form ist richtig?',
        options: ['Annas Bruder wohnt in Köln.', 'Anna’s Bruder wohnt in Köln.', 'Der Annas Bruder wohnt in Köln.'],
        answer: 0,
        explanationRu: 'Имя в Genitiv стоит перед существительным и получает -s без апострофа и без артикля: Annas Bruder.',
      },
      {
        type: 'choice',
        prompt: '___ Auto steht vor der Garage? – Das ist das Auto meines Onkels.',
        options: ['Wer', 'Wessen', 'Wem', 'Wen'],
        answer: 1,
        explanationRu: 'Вопрос о принадлежности («чья машина?») задаётся словом wessen. Wem — Dativ, wen — Akkusativ.',
      },
      {
        type: 'gap',
        prompt: 'Die Hochzeit meiner Cousine war das schönste Fest des ___.',
        answers: ['Jahres', 'Jahrs'],
        hintRu: 'das Jahr',
        explanationRu: 'das Jahr — средний род, односложное слово → в Genitiv обычно -es: des Jahres.',
      },
      {
        type: 'gap',
        prompt: 'Das Haus ___ Großeltern steht in einem kleinen Dorf in Bayern.',
        answers: ['meiner'],
        hintRu: 'mein',
        explanationRu: 'Großeltern — множественное число. Genitiv множественного числа: meiner Großeltern (как у женского рода).',
      },
      {
        type: 'gap',
        prompt: 'Der Geburtstag ___ Vaters ist im März.',
        answers: ['unseres', 'unsres'],
        hintRu: 'unser',
        explanationRu: 'der Vater — мужской род → unseres Vaters. Существительное получает -s.',
      },
      {
        type: 'gap',
        prompt: 'Wir feiern am Sonntag den 90. Geburtstag meiner ___ Tante.',
        answers: ['alten'],
        hintRu: 'alt',
        explanationRu: 'Прилагательное в Genitiv после артикля почти всегда получает -en: meiner alten Tante.',
      },
      {
        type: 'order',
        words: ['Das', 'ist', 'das', 'Fotoalbum', 'meiner', 'Großmutter.'],
        translationRu: 'Это фотоальбом моей бабушки.',
        explanationRu: 'Genitiv стоит после существительного, к которому относится: das Fotoalbum meiner Großmutter.',
      },
      {
        type: 'order',
        words: ['Am', 'Ende', 'des', 'Abends', 'haben', 'wir', 'ein', 'Familienfoto', 'gemacht.'],
        translationRu: 'В конце вечера мы сделали семейную фотографию.',
        explanationRu: 'am Ende + Genitiv: am Ende des Abends. Обстоятельство стоит на первом месте, поэтому дальше идёт глагол haben, затем подлежащее.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените Genitiv конструкцией von + Dativ.',
        prompt: 'Das ist das Auto meines Vaters.',
        answers: ['Das ist das Auto von meinem Vater.'],
        explanationRu: 'von всегда требует Dativ: meines Vaters → von meinem Vater. Окончание -s у существительного исчезает.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените von + Dativ на Genitiv.',
        prompt: 'Die Wohnung von meiner Tante ist sehr groß.',
        answers: ['Die Wohnung meiner Tante ist sehr groß.'],
        explanationRu: 'von meiner Tante (Dativ) → meiner Tante (Genitiv). У женского рода форма артикля совпадает, но предлог исчезает.',
      },
    ],
  },
  vocab: [
    { de: 'Schwiegermutter', article: 'die', plural: '-¨', pos: 'noun', ru: 'свекровь; тёща', example: 'Meine Schwiegermutter passt jeden Mittwoch auf unsere Kinder auf.', exampleRu: 'Моя свекровь каждую среду присматривает за нашими детьми.' },
    { de: 'Enkelkind', article: 'das', plural: '-er', pos: 'noun', ru: 'внук, внучка', example: 'Die Großeltern freuen sich über jeden Besuch ihrer Enkelkinder.', exampleRu: 'Бабушка и дедушка радуются каждому визиту своих внуков.' },
    { de: 'Geschwister', article: 'die', plural: '(nur Pl.)', pos: 'noun', ru: 'братья и сёстры', example: 'Hast du Geschwister? – Ja, einen Bruder und zwei Schwestern.', exampleRu: 'У тебя есть братья или сёстры? — Да, один брат и две сестры.' },
    { de: 'Einzelkind', article: 'das', plural: '-er', pos: 'noun', ru: 'единственный ребёнок в семье', example: 'Als Einzelkind habe ich mir immer einen Bruder gewünscht.', exampleRu: 'Будучи единственным ребёнком, я всегда мечтал о брате.' },
    { de: 'Verwandtschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'родня, родственники', example: 'Zur Hochzeit meines Cousins ist die ganze Verwandtschaft gekommen.', exampleRu: 'На свадьбу моего двоюродного брата приехала вся родня.' },
    { de: 'Stammbaum', article: 'der', plural: '-¨e', pos: 'noun', ru: 'генеалогическое древо, родословная', example: 'Auf dem Stammbaum unserer Familie stehen über hundert Namen.', exampleRu: 'На генеалогическом древе нашей семьи больше ста имён.' },
    { de: 'Vorfahr', article: 'der', plural: '-en', forms: 'des Vorfahren', pos: 'noun', ru: 'предок', example: 'Die Vorfahren meines Vaters kamen aus Ostpreußen.', exampleRu: 'Предки моего отца были родом из Восточной Пруссии.' },
    { de: 'Großfamilie', article: 'die', plural: '-n', pos: 'noun', ru: 'большая семья (несколько поколений вместе)', example: 'In einer Großfamilie ist eigentlich immer etwas los.', exampleRu: 'В большой семье всегда что-то происходит.' },
    { de: 'Alleinerziehende', article: 'die', plural: '-n', pos: 'noun', ru: 'мать-одиночка (der Alleinerziehende / ein Alleinerziehender — отец-одиночка)', example: 'Als Alleinerziehende muss sie Beruf und Kinder ganz allein organisieren.', exampleRu: 'Как мать-одиночка, она вынуждена совмещать работу и детей совсем одна.' },
    { de: 'Elternzeit', article: 'die', plural: '–', pos: 'noun', ru: 'отпуск по уходу за ребёнком (для матери или отца)', example: 'Nach der Geburt unserer Tochter hat mein Mann sechs Monate Elternzeit genommen.', exampleRu: 'После рождения нашей дочери муж взял шесть месяцев отпуска по уходу за ребёнком.' },
    { de: 'Generationenkonflikt', article: 'der', plural: '-e', pos: 'noun', ru: 'конфликт поколений', example: 'Beim Thema Handy gibt es in vielen Familien einen Generationenkonflikt.', exampleRu: 'В вопросе телефонов во многих семьях возникает конфликт поколений.' },
    { de: 'Erbe', article: 'das', plural: '–', pos: 'noun', ru: 'наследство (der Erbe — наследник)', example: 'Mit dem Erbe ihrer Tante hat sie eine kleine Wohnung gekauft.', exampleRu: 'На наследство своей тёти она купила небольшую квартиру.' },
    { de: 'Pflegeheim', article: 'das', plural: '-e', pos: 'noun', ru: 'дом престарелых, дом сестринского ухода', example: 'Seit dem Schlaganfall lebt der Vater meiner Freundin in einem Pflegeheim.', exampleRu: 'После инсульта отец моей подруги живёт в доме престарелых.' },
    { de: 'Familientreffen', article: 'das', plural: '-', pos: 'noun', ru: 'семейная встреча, сбор родственников', example: 'Beim Familientreffen habe ich die Kinder meines Cousins zum ersten Mal gesehen.', exampleRu: 'На семейной встрече я впервые увидел детей своего двоюродного брата.' },
    { de: 'erben', pos: 'verb', ru: 'наследовать, получать в наследство', example: 'Das alte Klavier hat sie von ihrer Großmutter geerbt.', exampleRu: 'Старое пианино она унаследовала от бабушки.' },
    { de: 'erziehen', forms: 'erzieht, erzog, hat erzogen', pos: 'verb', ru: 'воспитывать', example: 'Meine Eltern haben uns ziemlich frei erzogen.', exampleRu: 'Родители воспитывали нас довольно свободно.' },
    { de: 'verwöhnen', pos: 'verb', ru: 'баловать', example: 'Oma verwöhnt ihre Enkel jedes Wochenende mit Kuchen.', exampleRu: 'Бабушка каждые выходные балует внуков пирогом.' },
    { de: 'versorgen', forms: 'mit + Dat', pos: 'verb', ru: 'обеспечивать; ухаживать (за кем-л.)', example: 'Nach der Operation hat meine Schwester unseren Vater zwei Wochen lang versorgt.', exampleRu: 'После операции моя сестра две недели ухаживала за нашим отцом.' },
    { de: 'ähneln', forms: '+ Dat', pos: 'verb', ru: 'быть похожим (на кого-л.)', example: 'Mein Sohn ähnelt seinem Großvater sehr.', exampleRu: 'Мой сын очень похож на своего дедушку.' },
    { de: 'streng', pos: 'adj', ru: 'строгий', example: 'Mein Vater war früher sehr streng, heute ist er ein lockerer Opa.', exampleRu: 'Раньше мой отец был очень строгим, а сегодня он спокойный, расслабленный дедушка.' },
  ],
  listening: {
    title: 'Radioreportage: Vier Generationen unter einem Dach',
    kind: 'monolog',
    text: `Hallo, ich heiße Katharina Brandt, ich bin 42 und lebe mit meiner Familie in einem alten Bauernhaus bei Kassel. Das Besondere: Bei uns wohnen vier Generationen unter einem Dach. Im Erdgeschoss wohnen meine Eltern, im ersten Stock mein Mann, unsere zwei Kinder und ich. Und unter dem Dach hat die Großmutter meines Mannes ihre kleine Wohnung. Sie ist 91 und erstaunlich fit.

Das Haus war früher das Haus der Großeltern meines Mannes. Nach dem Tod ihres Mannes wollte seine Oma auf keinen Fall ins Pflegeheim, sie wollte in ihrem Haus bleiben. Wir haben damals in einer engen Wohnung in der Stadt gewohnt und hatten gerade ein Baby bekommen. Deshalb sind wir vor zehn Jahren eingezogen und haben das Haus renoviert. Zwei Jahre später sind dann auch meine Eltern gekommen.

Natürlich gibt es auch Konflikte. Meine Mutter findet, dass ich die Kinder zu sehr verwöhne, und die Oma meines Mannes findet die Musik unseres Sohnes viel zu laut. Wir haben deshalb klare Regeln: Jede Familie hat ihre eigene Küche, und nur am Sonntag essen alle zusammen.

Die Vorteile sind aber riesig. Wenn ich abends länger arbeiten muss, holen meine Eltern die Kinder von der Schule ab. Und die Kinder helfen ihrer Uroma beim Einkaufen. Unsere Tochter interessiert sich sehr für die Geschichte der Familie. Mit ihrer Uroma hat sie sogar einen Stammbaum gezeichnet – bis zu den Urgroßeltern der Uroma!

Ich glaube, dass alle voneinander lernen. Die Kinder erfahren, wie das Leben ihrer Vorfahren war, und die Großeltern bleiben jung.`,
    questions: [
      {
        question: 'Wer wohnt unter dem Dach?',
        options: ['Katharinas Eltern', 'die Großmutter von Katharinas Mann', 'Katharinas Kinder'],
        answer: 1,
      },
      {
        question: 'Warum ist die Familie vor zehn Jahren in das Haus gezogen?',
        options: [
          'Weil Katharinas Eltern Hilfe brauchten.',
          'Weil sie das Haus sehr billig kaufen konnten.',
          'Weil die Oma ihres Mannes in ihrem Haus bleiben wollte und ihre Stadtwohnung zu eng war.',
        ],
        answer: 2,
      },
      {
        question: 'Was stört die Uroma?',
        options: ['die laute Musik ihres Urenkels', 'das gemeinsame Essen am Sonntag', 'Katharinas lange Arbeitszeiten', 'die Küche im Erdgeschoss'],
        answer: 0,
      },
      {
        question: 'Wer holt die Kinder ab, wenn Katharina länger arbeitet?',
        options: ['ihr Mann', 'die Uroma', 'Katharinas Eltern'],
        answer: 2,
      },
      {
        question: 'Was hat die Tochter zusammen mit ihrer Uroma gemacht?',
        options: ['ein Fotoalbum gestaltet', 'einen Stammbaum gezeichnet', 'die Küche renoviert'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'В выходные вы были на большой семейной встрече. Напишите письмо своей подруге Лене.',
    taskDe: 'Sie waren am Wochenende bei einem großen Familientreffen. Schreiben Sie Ihrer Freundin Lena eine E-Mail.',
    points: [
      'Wo und warum hat das Treffen stattgefunden?',
      'Wen haben Sie (wieder)getroffen?',
      'Was war besonders schön oder lustig?',
      'Fragen Sie Lena nach ihrer Familie.',
    ],
    minWords: 80,
    usefulPhrases: [
      'Liebe Lena,',
      'am Samstag haben wir den 80. Geburtstag meiner Großmutter gefeiert.',
      'Ich habe endlich die Kinder meines Cousins kennengelernt.',
      'Am schönsten war der Moment, als …',
      'Wie geht es eigentlich deiner Familie? Was machen deine Geschwister?',
      'Viele liebe Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Ваши бабушка и дедушка скоро отмечают золотую свадьбу (50 лет). Вместе с двоюродным братом вы планируете для них праздник-сюрприз.',
    aiRole:
      'Sie sind Jonas, der Cousin des Lernenden. Die Großeltern feiern bald ihre goldene Hochzeit, und Sie planen zusammen eine Überraschungsfeier: Ort, Termin, Gäste aus der Verwandtschaft, Essen, Musik und ein Geschenk. Machen Sie eigene Vorschläge, reagieren Sie auf die Vorschläge Ihres Gesprächspartners und haben Sie manchmal eine andere Meinung. Sprechen Sie natürlich auf B1-Niveau und benutzen Sie oft Genitivformen (das Haus meiner Eltern, der Garten unserer Tante).',
    opener: 'Hey, schön, dass du Zeit hast! Oma und Opa sind im Mai fünfzig Jahre verheiratet – wir müssen unbedingt etwas planen. Hast du schon eine Idee, wo wir feiern könnten?',
    tasksRu: [
      'Предложите место и время праздника (например: im Garten unserer Tante).',
      'Обсудите, кого из родственников пригласить — используйте Genitiv (die Geschwister meines Vaters, Annas Kinder).',
      'Договоритесь, кто за что отвечает: еда, музыка, подарок.',
      'Вежливо возразите хотя бы одному предложению партнёра и предложите компромисс.',
    ],
    readAloud: [
      'Die goldene Hochzeit meiner Großeltern feiern wir im Garten meiner Tante.',
      'Wessen Idee war das eigentlich? – Das war Annas Idee.',
      'Die Kinder meines Cousins basteln die Einladungen für die ganze Verwandtschaft.',
    ],
  },
};
