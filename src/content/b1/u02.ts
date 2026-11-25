import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-02',
  level: 'B1',
  order: 2,
  title: 'Wohnen & Nachbarschaft',
  titleRu: 'Жильё и соседи',
  goalsRu: [
    'Описывать квартиру и расположение мебели',
    'Правильно употреблять предлоги места с винительным и дательным падежом',
    'Различать пары глаголов stellen/stehen, legen/liegen, setzen/sitzen, hängen',
    'Вежливо обсуждать с соседями правила дома и проблемы',
  ],
  grammar: {
    topic: 'Wechselpräpositionen; stellen/stehen, legen/liegen, setzen/sitzen, hängen',
    topicRu: 'Предлоги с двойным управлением; глаголы положения',
    explanationRu: `Девять предлогов — **an, auf, hinter, in, neben, über, unter, vor, zwischen** — могут требовать двух падежей. Всё зависит от вопроса:

- **Wohin?** (куда? — движение, перемещение) → **Akkusativ**: Ich gehe in den Keller.
- **Wo?** (где? — место, положение) → **Dativ**: Ich bin im Keller.

Хорошая новость: в русском логика похожа — «положить **на стол**» (куда?) и «лежит **на столе**» (где?). Только вместо русского предложного падежа в немецком — **дательный**.

**Пары глаголов**

- **stellen → stehen** (ставить → стоять): предметы, которые стоят вертикально (бутылка, шкаф, ваза).
- **legen → liegen** (класть → лежать): предметы, которые лежат горизонтально (книга, телефон, ковёр).
- **setzen → sitzen** (сажать → сидеть): ich setze mich auf den Stuhl — я сажусь на стул.
- **hängen → hängen** (вешать → висеть): одинаковый инфинитив, но разные формы: hängte, hat gehängt (вешать) и hing, hat gehangen (висеть).

Глаголы действия (stellen, legen, setzen, hängen) — правильные и требуют **Akkusativ**. Глаголы состояния (stehen, liegen, sitzen, hängen) — сильные и требуют **Dativ**.

Слияния: in dem → **im**, in das → **ins**, an dem → **am**, an das → **ans**.

**Типичные ошибки русскоговорящих:**

- После глаголов состояния ставят винительный падеж: «Das Buch liegt auf den Tisch» вместо **auf dem Tisch**.
- Путают формы: «Ich habe das Bild gehangen» вместо **gehängt**.
- Говорят «Ich setze auf den Stuhl» без **mich**.
- Русское «в» не всегда = in: **an** der Wand (на стене), **an** der Haltestelle (на остановке), **auf** dem Balkon (на балконе).`,
    table: [
      ['Wohin? + Akkusativ (действие)', 'Wo? + Dativ (состояние)'],
      ['stellen: Ich stelle die Vase auf den Tisch.', 'stehen: Die Vase steht auf dem Tisch.'],
      ['legen: Ich lege das Handy auf den Schreibtisch.', 'liegen: Das Handy liegt auf dem Schreibtisch.'],
      ['setzen: Ich setze das Kind auf den Stuhl.', 'sitzen: Das Kind sitzt auf dem Stuhl.'],
      ['hängen (hängte, hat gehängt): Ich hänge das Bild an die Wand.', 'hängen (hing, hat gehangen): Das Bild hängt an der Wand.'],
    ],
    examples: [
      { de: 'Stell bitte die Getränke in den Kühlschrank!', ru: 'Поставь, пожалуйста, напитки в холодильник!' },
      { de: 'Die Getränke stehen schon im Kühlschrank.', ru: 'Напитки уже стоят в холодильнике.' },
      { de: 'Wir haben den neuen Teppich unter den Esstisch gelegt.', ru: 'Мы положили новый ковёр под обеденный стол.' },
      { de: 'Die Mülltonnen stehen hinter dem Haus.', ru: 'Мусорные баки стоят за домом.' },
      { de: 'Unser Nachbar hat ein Schild an die Haustür gehängt.', ru: 'Наш сосед повесил табличку на входную дверь.' },
      { de: 'Zwischen dem Sofa und dem Fenster ist noch Platz für eine Lampe.', ru: 'Между диваном и окном ещё есть место для лампы.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Kannst du die Flasche bitte auf ___ Tisch stellen?',
        options: ['den', 'dem', 'der', 'des'],
        answer: 0,
        explanationRu: 'stellen — действие, вопрос «Wohin?» → Akkusativ. der Tisch → den Tisch.',
      },
      {
        type: 'choice',
        prompt: 'Der Schlüssel ___ auf dem Schrank.',
        options: ['legt', 'liegt', 'stellt', 'setzt'],
        answer: 1,
        explanationRu: 'Речь о положении (Wo?), а не о действии. Для глагола состояния нужен liegen: der Schlüssel liegt.',
      },
      {
        type: 'choice',
        prompt: 'Gestern habe ich das Foto über das Sofa ___.',
        options: ['gehängt', 'gehangen', 'hing', 'hängt'],
        answer: 0,
        explanationRu: 'Вешать (действие, Akkusativ) — слабый глагол: hängte, hat gehängt. gehangen — форма от «висеть».',
      },
      {
        type: 'choice',
        prompt: 'Die Kinder ___ sich vor den Fernseher.',
        options: ['sitzen', 'setzen', 'sitzt', 'gesetzt'],
        answer: 1,
        explanationRu: 'sich setzen — «садиться» (действие, Akkusativ: vor den Fernseher). sitzen — «сидеть» и не бывает возвратным.',
      },
      {
        type: 'gap',
        prompt: 'Das Fahrrad steht im Hof neben ___ Garage.',
        answers: ['der'],
        explanationRu: 'stehen — состояние (Wo?) → Dativ. die Garage → der Garage.',
      },
      {
        type: 'gap',
        prompt: 'Häng deine Jacke bitte in ___ Schrank!',
        answers: ['den'],
        explanationRu: 'hängen здесь — действие (Wohin?) → Akkusativ. der Schrank → den Schrank.',
      },
      {
        type: 'gap',
        prompt: 'Wer hat meine Brille auf den Boden ___?',
        answers: ['gelegt'],
        hintRu: 'legen / liegen',
        explanationRu: 'Действие с Akkusativ (auf den Boden) → legen. Partizip II: gelegt.',
      },
      {
        type: 'gap',
        prompt: 'Die Nachbarn haben ihr Sofa vor ___ Fenster gestellt.',
        answers: ['das'],
        explanationRu: 'gestellt — действие (Wohin?) → Akkusativ. das Fenster → das Fenster.',
      },
      {
        type: 'order',
        words: ['Die', 'Mülltonnen', 'stehen', 'immer', 'hinter', 'dem', 'Haus.'],
        translationRu: 'Мусорные баки всегда стоят за домом.',
        explanationRu: 'stehen — состояние, поэтому hinter + Dativ: hinter dem Haus. Глагол на втором месте.',
      },
      {
        type: 'order',
        words: ['Ich', 'habe', 'den', 'Schlüssel', 'unter', 'die', 'Fußmatte', 'gelegt.'],
        translationRu: 'Я положил ключ под коврик у двери.',
        explanationRu: 'legen — действие → unter + Akkusativ: unter die Fußmatte. Partizip II стоит в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Опишите результат действия: где теперь находятся цветы? (вопрос «Wo?»)',
        prompt: 'Ich stelle die Blumen auf den Balkon.',
        answers: ['Die Blumen stehen auf dem Balkon.'],
        explanationRu: 'stellen (Akk) → stehen (Dat): auf den Balkon → auf dem Balkon.',
      },
      {
        type: 'transform',
        instructionRu: 'Опишите действие, которое привело к этому результату. Начните с «Ich …», настоящее время.',
        prompt: 'Das Bild hängt an der Wand.',
        answers: ['Ich hänge das Bild an die Wand.'],
        explanationRu: 'При действии (Wohin?) нужен Akkusativ: an der Wand → an die Wand.',
      },
    ],
  },
  vocab: [
    { de: 'Miete', article: 'die', plural: '-n', pos: 'noun', ru: 'арендная плата', example: 'Ich überweise die Miete immer am Ersten des Monats.', exampleRu: 'Я всегда перевожу квартплату первого числа месяца.' },
    { de: 'Vermieter', article: 'der', plural: '-', pos: 'noun', ru: 'арендодатель', example: 'Unser Vermieter hat das Bad endlich reparieren lassen.', exampleRu: 'Наш арендодатель наконец-то отремонтировал ванную.' },
    { de: 'Mieter', article: 'der', plural: '-', pos: 'noun', ru: 'квартиросъёмщик', example: 'Die Mieter im Erdgeschoss haben einen kleinen Garten.', exampleRu: 'У жильцов на первом этаже есть маленький сад.' },
    { de: 'Nebenkosten', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'коммунальные расходы', example: 'Die Nebenkosten für Heizung und Wasser sind gestiegen.', exampleRu: 'Расходы на отопление и воду выросли.' },
    { de: 'Kaution', article: 'die', plural: '-en', pos: 'noun', ru: 'залог', example: 'Beim Auszug bekommt man die Kaution zurück.', exampleRu: 'При выезде залог возвращают.' },
    { de: 'Mietvertrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'договор аренды', example: 'Lesen Sie den Mietvertrag genau, bevor Sie unterschreiben.', exampleRu: 'Внимательно прочитайте договор аренды, прежде чем подписывать.' },
    { de: 'Wohngemeinschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'совместное проживание (WG)', example: 'Während des Studiums habe ich in einer Wohngemeinschaft gewohnt.', exampleRu: 'Во время учёбы я жил в квартире с соседями.' },
    { de: 'Treppenhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'лестничная клетка, подъезд', example: 'Im Treppenhaus dürfen keine Kinderwagen stehen.', exampleRu: 'В подъезде нельзя оставлять детские коляски.' },
    { de: 'Hausordnung', article: 'die', plural: '-en', pos: 'noun', ru: 'правила внутреннего распорядка дома', example: 'Laut Hausordnung muss man den Gehweg im Winter räumen.', exampleRu: 'Согласно правилам дома зимой нужно расчищать тротуар.' },
    { de: 'Lärm', article: 'der', plural: '–', pos: 'noun', ru: 'шум', example: 'Der Lärm von der Baustelle stört mich bei der Arbeit.', exampleRu: 'Шум со стройки мешает мне работать.' },
    { de: 'Mülltrennung', article: 'die', plural: '–', pos: 'noun', ru: 'сортировка мусора', example: 'In Deutschland ist Mülltrennung ganz normal.', exampleRu: 'В Германии сортировка мусора — обычное дело.' },
    { de: 'Hausmeister', article: 'der', plural: '-', pos: 'noun', ru: 'завхоз, управдом', example: 'Der Hausmeister hat die Heizung im Keller kontrolliert.', exampleRu: 'Завхоз проверил отопление в подвале.' },
    { de: 'Ruhezeit', article: 'die', plural: '-en', pos: 'noun', ru: 'время тишины', example: 'Während der Ruhezeit von 22 bis 6 Uhr soll man leise sein.', exampleRu: 'Во время тишины с 22 до 6 часов нужно соблюдать тишину.' },
    { de: 'renovieren', pos: 'verb', ru: 'делать ремонт', example: 'Bevor wir eingezogen sind, haben wir die ganze Wohnung renoviert.', exampleRu: 'Прежде чем въехать, мы отремонтировали всю квартиру.' },
    { de: 'einziehen', forms: 'zieht ein, zog ein, ist eingezogen', pos: 'verb', ru: 'въезжать (в квартиру)', example: 'Im dritten Stock ist eine junge Familie eingezogen.', exampleRu: 'На третий этаж въехала молодая семья.' },
    { de: 'sich beschweren', forms: 'über + Akk; bei + Dat', pos: 'verb', ru: 'жаловаться', example: 'Frau Schulz hat sich beim Vermieter über den Lärm beschwert.', exampleRu: 'Госпожа Шульц пожаловалась арендодателю на шум.' },
    { de: 'stören', pos: 'verb', ru: 'мешать, беспокоить', example: 'Stört es Sie, wenn ich das Fenster aufmache?', exampleRu: 'Вам не помешает, если я открою окно?' },
    { de: 'möbliert', pos: 'adj', ru: 'меблированный', example: 'Ich suche ein möbliertes Zimmer für sechs Monate.', exampleRu: 'Я ищу меблированную комнату на шесть месяцев.' },
    { de: 'geräumig', pos: 'adj', ru: 'просторный', example: 'Die Küche ist hell und geräumig.', exampleRu: 'Кухня светлая и просторная.' },
    { de: 'Rücksicht nehmen auf', forms: 'nimmt, nahm, hat genommen; auf + Akk', pos: 'phrase', ru: 'считаться с кем-л., проявлять уважение', example: 'Bitte nehmen Sie Rücksicht auf die anderen Hausbewohner.', exampleRu: 'Пожалуйста, считайтесь с другими жильцами дома.' },
  ],
  listening: {
    title: 'Die neue Nachbarin',
    kind: 'dialog',
    text: `A: Hallo! Sie sind bestimmt die neue Nachbarin aus dem dritten Stock, oder?
B: Ja, genau. Ich bin gestern eingezogen. Ich heiße Marina Sokolowa.
A: Freut mich, ich bin Herr Becker. Ich wohne direkt unter Ihnen. Wie gefällt Ihnen die Wohnung?
B: Sehr gut! Sie ist hell und geräumig, und die Miete ist für die Lage wirklich in Ordnung. Nur die Küche muss ich noch ein bisschen renovieren.
A: Das kenne ich. Übrigens, haben Sie die Hausordnung schon gelesen? Sie hängt unten im Treppenhaus neben den Briefkästen.
B: Nein, noch nicht. Gibt es etwas Wichtiges?
A: Na ja, die Ruhezeiten. Mittags von eins bis drei und ab zehn Uhr abends soll es im Haus leise sein. Frau Schulz aus dem Erdgeschoss beschwert sich sonst sofort beim Hausmeister.
B: Oh, gut zu wissen. Ich wollte heute Abend noch ein paar Bilder an die Wand hängen.
A: Dann machen Sie das lieber vor zehn. Und noch etwas: Die Mülltonnen stehen hinter dem Haus. Papier kommt in die blaue Tonne, Plastik in die gelbe.
B: Und wohin kommt der Biomüll?
A: In die braune Tonne. Die steht direkt neben der Garage.
B: Vielen Dank! Darf ich Sie noch etwas fragen? Ich habe ein schweres Regal und weiß nicht, wie ich es allein in den dritten Stock tragen soll.
A: Kein Problem, mein Sohn hilft Ihnen sicher am Samstag. Wo ist das Regal denn jetzt?
B: Es steht noch unten im Keller.
A: Gut, dann sagen Sie einfach Bescheid. Und wenn Sie mal Probleme haben, klingeln Sie bei mir.
B: Das ist sehr nett. Dann lade ich Sie bald auf einen Kaffee ein!`,
    questions: [
      { question: 'Wann ist Marina eingezogen?', options: ['Vor einer Woche', 'Gestern', 'Heute Morgen'], answer: 1 },
      {
        question: 'Wo hängt die Hausordnung?',
        options: ['Im Keller neben der Garage', 'An der Wohnungstür von Herrn Becker', 'Im Treppenhaus neben den Briefkästen', 'Im Erdgeschoss bei Frau Schulz'],
        answer: 2,
      },
      { question: 'Was möchte Marina heute Abend machen?', options: ['Bilder aufhängen', 'Die Küche renovieren', 'Den Müll wegbringen', 'Herrn Becker besuchen'], answer: 0 },
      { question: 'Wohin kommt der Biomüll?', options: ['In die gelbe Tonne', 'In die blaue Tonne', 'In den Keller', 'In die braune Tonne'], answer: 3 },
      {
        question: 'Wie hilft Herr Becker Marina?',
        options: ['Er renoviert ihre Küche.', 'Sein Sohn trägt das Regal mit ihr nach oben.', 'Er spricht für sie mit dem Hausmeister.'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы недавно переехали в новую квартиру. Напишите письмо другу или подруге в Германии и расскажите о новом жилье.',
    taskDe: 'Sie sind vor Kurzem umgezogen. Schreiben Sie einer Freundin oder einem Freund eine E-Mail über Ihre neue Wohnung.',
    points: [
      'Wie ist die Wohnung (Größe, Lage, Miete)?',
      'Wo stehen und hängen Ihre Möbel und Bilder?',
      'Wie sind die Nachbarn?',
      'Laden Sie zu einer kleinen Einweihungsparty ein.',
    ],
    minWords: 90,
    usefulPhrases: [
      'Stell dir vor, ich bin endlich umgezogen!',
      'Die Wohnung liegt in der Nähe von …',
      'Im Wohnzimmer steht/hängt …',
      'Das Sofa habe ich vor das Fenster gestellt.',
      'Die Nachbarn sind sehr nett/etwas laut.',
      'Hast du am … Zeit? Ich mache eine kleine Party.',
    ],
  },
  speaking: {
    scenarioRu: 'Ваш сосед сверху часто громко слушает музыку поздно вечером. Вы поднимаетесь к нему, чтобы вежливо поговорить и найти решение.',
    aiRole:
      'Sie sind Jonas, 24 Jahre alt, Student. Sie wohnen in der Wohnung über Ihrem Gesprächspartner und feiern abends oft mit Freunden bei lauter Musik. Sie sind zuerst etwas überrascht, aber freundlich und am Ende bereit, einen Kompromiss zu finden; sprechen Sie locker, aber auf B1-Niveau.',
    opener: 'Oh, hallo! Sie wohnen doch unter mir, oder? Was kann ich für Sie tun?',
    tasksRu: [
      'Вежливо представьтесь и объясните проблему (шум, время).',
      'Сошлитесь на правила дома (Hausordnung, Ruhezeiten).',
      'Предложите компромисс.',
      'Дружелюбно попрощайтесь.',
    ],
    readAloud: [
      'Der Schlüssel liegt unter der Fußmatte vor der Tür.',
      'Bitte stellen Sie Ihre Fahrräder nicht ins Treppenhaus.',
      'Über dem Sofa hängt ein großes, schönes Bild von Köln.',
    ],
  },
};
