import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-07',
  level: 'A2',
  order: 7,
  title: 'Kleidung kaufen',
  titleRu: 'Покупаем одежду',
  goalsRu: [
    'Покупать одежду: спрашивать размер, цвет, материал, примерять',
    'Описывать одежду с прилагательными после ein/eine, kein, mein (ein warmer Mantel)',
    'Говорить, что вещь мала, велика или хорошо сидит',
    'Обменивать покупку и понимать объявления в магазине',
  ],
  grammar: {
    topic: 'Adjektivdeklination nach ein, kein und mein',
    topicRu: 'Окончания прилагательных после ein, kein, mein',
    explanationRu: `В юните 6 вы выучили окончания прилагательных после **der, die, das** (der rote Wein). Теперь — после **ein/eine**. Так же, как ein, склоняются **kein** и притяжательные слова **mein, dein, sein, ihr, unser, Ihr**.

**Главная идея.** Окончание должно показать род. У **ein** в мужском и среднем роде окончания нет (ein Mantel, ein Hemd). Поэтому окончание «берёт на себя» прилагательное:

- der Mantel → ein warm**er** Mantel (-er, как в d**er**)
- das Hemd → ein weiß**es** Hemd (-es, как в da**s**)
- die Jacke → eine blau**e** Jacke (-e)

**Akkusativ** (кого? что? — после kaufen, suchen, brauchen, haben, möchten). Меняется только мужской род: Ich suche einen warm**en** Mantel. Женский и средний род — как в Nominativ: eine blaue Jacke, ein weißes Hemd.

**Dativ** (после mit, bei, zu, aus, von): всегда **-en**: mit einem warm**en** Mantel, mit einer blau**en** Jacke.

**Множественное число.** У ein нет множественного числа. После **kein, mein, dein…** — всегда **-en**: keine bequem**en** Schuhe, meine neu**en** Schuhe. Без артикля — **-e**: Ich suche bequem**e** Schuhe.

**Как запомнить:** почти везде **-en**. Особые формы: ein + **-er** (der, Nominativ), ein + **-es** (das), eine + **-e** (die).

**После sein окончания нет:** Der Mantel ist warm. Die Schuhe sind bequem.

Слова **teuer** и **dunkel** теряют -e-: ein teu**rer** Mantel, eine dun**kle** Hose.

**Типичные ошибки:**
- «ein schöne Mantel» → **ein schöner Mantel**
- «Ich kaufe ein neuer Rock» → **einen neuen Rock** (Akkusativ!)
- «meine neue Schuhe» → **meine neuen Schuhe**
- «Die Hose ist teure» → **Die Hose ist teuer** (после sein без окончания)`,
    table: [
      ['', 'Nominativ (wer? was?)', 'Akkusativ (wen? was?)', 'Dativ (wem?)'],
      ['der Mantel', 'ein warmer Mantel', 'einen warmen Mantel', 'einem warmen Mantel'],
      ['die Jacke', 'eine blaue Jacke', 'eine blaue Jacke', 'einer blauen Jacke'],
      ['das Hemd', 'ein weißes Hemd', 'ein weißes Hemd', 'einem weißen Hemd'],
      ['Plural', 'meine neuen Schuhe', 'meine neuen Schuhe', 'meinen neuen Schuhen'],
    ],
    examples: [
      { de: 'Ich suche einen warmen Wintermantel.', ru: 'Я ищу тёплое зимнее пальто.' },
      { de: 'Das ist ein sehr schönes Kleid!', ru: 'Это очень красивое платье!' },
      { de: 'Sie trägt eine rote Jacke und eine schwarze Hose.', ru: 'На ней красная куртка и чёрные брюки.' },
      { de: 'Mein neuer Pullover ist aus Wolle.', ru: 'Мой новый свитер из шерсти.' },
      { de: 'Hast du keine bequemen Schuhe?', ru: 'У тебя нет удобной обуви?' },
      { de: 'Ich gehe mit meiner kleinen Tochter einkaufen.', ru: 'Я иду за покупками со своей маленькой дочкой.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich brauche einen ___ Mantel für den Winter.',
        options: ['warmen', 'warmer', 'warme', 'warmes'],
        answer: 0,
        explanationRu: 'brauchen + Akkusativ. der Mantel — мужской род, в Akkusativ: einen warmen Mantel.',
      },
      {
        type: 'choice',
        prompt: 'Das ist ein sehr ___ Hemd.',
        options: ['schöner', 'schönes', 'schöne', 'schönen'],
        answer: 1,
        explanationRu: 'das Hemd — средний род. У ein нет окончания, поэтому прилагательное показывает род: ein schönes Hemd.',
      },
      {
        type: 'choice',
        prompt: 'Die Hose ist sehr ___.',
        options: ['teuer', 'teure', 'teurer', 'teuren'],
        answer: 0,
        explanationRu: 'Прилагательное стоит после глагола sein, а не перед существительным, — окончания нет: Die Hose ist teuer.',
      },
      {
        type: 'choice',
        audio: 'Ich suche einen dunklen Anzug.',
        prompt: 'Что ищет мужчина? Слушайте внимательно.',
        options: ['einen dunklen Anzug', 'einen dunklen Mantel', 'einen hellen Anzug', 'eine dunkle Hose'],
        answer: 0,
        explanationRu: 'Он говорит: «Ich suche einen dunklen Anzug» — тёмный костюм. dunkel теряет -e-: einen dunklen.',
      },
      {
        type: 'gap',
        prompt: 'Ich habe leider keine ___ Schuhe.',
        answers: ['bequemen'],
        hintRu: 'bequem',
        explanationRu: 'Множественное число после kein — всегда окончание -en: keine bequemen Schuhe.',
      },
      {
        type: 'gap',
        prompt: 'Er trägt heute ein ___ T-Shirt.',
        answers: ['weißes', 'weisses'],
        hintRu: 'weiß',
        explanationRu: 'das T-Shirt — средний род, Akkusativ после tragen: ein weißes T-Shirt (как в Nominativ).',
      },
      {
        type: 'gap',
        prompt: 'Mein ___ Pullover ist aus Wolle.',
        answers: ['neuer'],
        hintRu: 'neu',
        explanationRu: 'der Pullover — мужской род, Nominativ. После mein (без окончания) прилагательное получает -er: mein neuer Pullover.',
      },
      {
        type: 'gap',
        prompt: 'Wir suchen ein Geschenk für unseren ___ Sohn.',
        answers: ['kleinen'],
        hintRu: 'klein',
        explanationRu: 'für требует Akkusativ. der Sohn — мужской род: unseren kleinen Sohn (в Akkusativ мужского рода -en).',
      },
      {
        type: 'gap',
        audio: 'Sie kauft eine graue Mütze.',
        prompt: 'Какого цвета шапка? Напишите прилагательное: eine ___ Mütze',
        answers: ['graue'],
        explanationRu: 'Вы слышите «eine graue Mütze». die Mütze — женский род, после eine окончание -e.',
      },
      {
        type: 'order',
        words: ['Ich', 'suche', 'eine', 'warme', 'Jacke.'],
        translationRu: 'Я ищу тёплую куртку.',
        explanationRu: 'Глагол на втором месте, затем дополнение: артикль + прилагательное + существительное (eine warme Jacke).',
      },
      {
        type: 'transform',
        instructionRu: 'Напишите предложение «Ich kaufe …» с этими словами (Akkusativ).',
        prompt: 'ein grüner Pullover',
        answers: ['Ich kaufe einen grünen Pullover.', 'Ich kaufe einen grünen Pullover'],
        explanationRu: 'kaufen + Akkusativ. В мужском роде меняются и артикль, и прилагательное: ein grüner → einen grünen.',
      },
      {
        type: 'transform',
        instructionRu: 'Поставьте предложение во множественное число.',
        prompt: 'Das ist mein neues Kleid.',
        answers: ['Das sind meine neuen Kleider.', 'Das sind meine neuen Kleider'],
        explanationRu: 'Во множественном числе: das ist → das sind, mein → meine, а прилагательное после meine получает -en: meine neuen Kleider.',
      },
    ],
  },
  vocab: [
    { de: 'Umkleidekabine', article: 'die', plural: '-n', pos: 'noun', ru: 'примерочная', example: 'Die Umkleidekabine ist dort hinten.', exampleRu: 'Примерочная вон там, сзади.', pronRu: 'ди УМ-кляй-дэ-ка-би:-нэ' },
    { de: 'anprobieren', forms: 'probiert an, hat anprobiert', pos: 'verb', ru: 'примерять', example: 'Kann ich die Hose anprobieren?', exampleRu: 'Можно мне примерить брюки?', pronRu: 'АН-про-би:-рэн' },
    { de: 'Größe', article: 'die', plural: '-n', pos: 'noun', ru: 'размер', example: 'Welche Größe haben Sie?', exampleRu: 'Какой у вас размер?', pronRu: 'ди ГРЁ-сэ' },
    { de: 'passen', forms: 'passt, hat gepasst; + Dativ', pos: 'verb', ru: 'подходить (по размеру)', example: 'Die Jacke passt mir gut.', exampleRu: 'Куртка мне хорошо подходит.', pronRu: 'ПА-сэн' },
    { de: 'stehen', forms: 'steht, hat gestanden; + Dativ', pos: 'verb', ru: 'идти, быть к лицу (об одежде)', example: 'Die rote Farbe steht dir gut.', exampleRu: 'Красный цвет тебе идёт.', pronRu: 'ШТЕ:-эн' },
    { de: 'eng', pos: 'adj', ru: 'узкий, тесный', example: 'Der Rock ist mir zu eng.', exampleRu: 'Юбка мне слишком тесная.', pronRu: 'ЭНГ' },
    { de: 'weit', pos: 'adj', ru: 'широкий, свободный (об одежде)', example: 'Ich trage gern eine weite Hose.', exampleRu: 'Я люблю носить широкие брюки.', pronRu: 'ВАЙТ' },
    { de: 'bequem', pos: 'adj', ru: 'удобный', example: 'Ich brauche bequeme Schuhe.', exampleRu: 'Мне нужна удобная обувь.', pronRu: 'бэ-КВЕ:М' },
    { de: 'Stoff', article: 'der', plural: '-e', pos: 'noun', ru: 'ткань, материал', example: 'Der Stoff ist sehr weich.', exampleRu: 'Ткань очень мягкая.', pronRu: 'дер ШТОФ' },
    { de: 'Baumwolle', article: 'die', plural: '–', pos: 'noun', ru: 'хлопок', example: 'Das Hemd ist aus Baumwolle.', exampleRu: 'Рубашка из хлопка.', pronRu: 'ди БАУМ-во-лэ' },
    { de: 'Wolle', article: 'die', plural: '–', pos: 'noun', ru: 'шерсть', example: 'Ein Pullover aus Wolle ist schön warm.', exampleRu: 'Свитер из шерсти — тёплый.', pronRu: 'ди ВО-лэ' },
    { de: 'Anzug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'мужской костюм', example: 'Er trägt einen dunklen Anzug.', exampleRu: 'На нём тёмный костюм.', pronRu: 'дер АН-цу:к' },
    { de: 'Schal', article: 'der', plural: '-s', pos: 'noun', ru: 'шарф', example: 'Im Winter trage ich einen dicken Schal.', exampleRu: 'Зимой я ношу толстый шарф.', pronRu: 'дер ША:ЛЬ' },
    { de: 'Handschuh', article: 'der', plural: '-e', pos: 'noun', ru: 'перчатка', example: 'Ich habe meine Handschuhe verloren.', exampleRu: 'Я потерял свои перчатки.', pronRu: 'дер ХАНТ-шу:' },
    { de: 'gestreift', pos: 'adj', ru: 'полосатый, в полоску', example: 'Er hat ein gestreiftes Hemd gekauft.', exampleRu: 'Он купил рубашку в полоску.', pronRu: 'гэ-ШТРАЙФТ' },
    { de: 'kariert', pos: 'adj', ru: 'в клетку, клетчатый', example: 'Mein Opa trägt gern karierte Hemden.', exampleRu: 'Мой дедушка любит носить клетчатые рубашки.', pronRu: 'ка-РИ:РТ' },
    { de: 'umtauschen', forms: 'tauscht um, hat umgetauscht', pos: 'verb', ru: 'обменять (покупку)', example: 'Ich möchte diese Schuhe umtauschen.', exampleRu: 'Я хотел(а) бы обменять эту обувь.', pronRu: 'УМ-тау-шэн' },
    { de: 'Kassenbon', article: 'der', plural: '-s', pos: 'noun', ru: 'кассовый чек', example: 'Haben Sie den Kassenbon noch?', exampleRu: 'У вас ещё есть чек?', pronRu: 'дер КА-сэн-бон' },
    { de: 'reduziert', pos: 'adj', ru: 'уценённый, со скидкой', example: 'Alle Wintermäntel sind heute reduziert.', exampleRu: 'Все зимние пальто сегодня со скидкой.', pronRu: 'рэ-ду-ЦИ:РТ' },
    { de: 'Sonderangebot', article: 'das', plural: '-e', pos: 'noun', ru: 'специальное предложение, акция', example: 'Die Jeans ist im Sonderangebot.', exampleRu: 'Джинсы продаются по акции.', pronRu: 'дас ЗОН-да-ан-гэ-бо:т' },
  ],
  listening: {
    title: 'Eine Jacke für den Winter',
    kind: 'dialog',
    text: `A: Guten Tag, kann ich Ihnen helfen?
B: Ja, gern. Ich suche eine warme Jacke für den Winter.
A: Welche Größe haben Sie?
B: Größe 40, glaube ich.
A: Hier habe ich eine schöne lange Jacke aus Wolle. Sie kostet 129 Euro.
B: Hm, das ist mir zu teuer. Haben Sie auch eine günstige Jacke?
A: Ja, diese Jacke hier ist reduziert. Sie kostet nur 79 Euro. Es gibt sie in Grau und in Dunkelblau.
B: Dunkelblau gefällt mir. Kann ich sie anprobieren?
A: Natürlich. Die Umkleidekabine ist dort hinten.
B: Die Jacke ist ein bisschen eng. Haben Sie sie auch in Größe 42?
A: Ja, hier, bitte.
B: Die passt perfekt, und sie ist schön warm. Ich nehme sie.
A: Möchten Sie auch einen warmen Schal?
B: Nein, danke. Ich habe schon einen dunkelblauen Schal. Kann ich die Jacke später umtauschen?
A: Ja, zwei Wochen lang. Bringen Sie dann bitte den Kassenbon mit.`,
    questions: [
      { question: 'Was sucht die Kundin?', options: ['Eine warme Jacke.', 'Einen warmen Mantel.', 'Einen dunkelblauen Schal.'], answer: 0 },
      { question: 'Warum nimmt sie die Jacke aus Wolle nicht?', options: ['Sie ist zu eng.', 'Sie ist zu teuer.', 'Die Farbe gefällt ihr nicht.'], answer: 1 },
      { question: 'Wie viel kostet die reduzierte Jacke?', options: ['129 Euro', '42 Euro', '79 Euro'], answer: 2 },
      { question: 'Welche Größe passt der Kundin?', options: ['Größe 40', 'Größe 42', 'Größe 44'], answer: 1 },
      { question: 'Was braucht sie für den Umtausch?', options: ['Den Kassenbon.', 'Ihren Ausweis.', 'Den Schal.'], answer: 0 },
    ],
  },
  writing: {
    taskRu:
      'Вы вчера купили новую одежду. Напишите письмо подруге Кате (Katja): что вы купили (опишите вещь: цвет, материал), где и за сколько, и пригласите её в субботу вместе пройтись по магазинам. Используйте прилагательные после ein/eine (einen warmen Pullover, eine schöne Jacke).',
    taskDe: 'Sie haben gestern neue Kleidung gekauft. Schreiben Sie eine E-Mail an Ihre Freundin Katja.',
    points: [
      'Was haben Sie gekauft? Beschreiben Sie es (Farbe, Material).',
      'Wo haben Sie es gekauft und was hat es gekostet?',
      'Laden Sie Katja für Samstag zum Einkaufen ein.',
    ],
    minWords: 50,
    usefulPhrases: [
      'Liebe Katja,',
      'Gestern habe ich einen neuen … gekauft.',
      'Er ist aus Wolle / aus Baumwolle.',
      'Die Jacke war reduziert und hat nur … Euro gekostet.',
      'Ich habe auch eine schöne … gefunden.',
      'Hast du am Samstag Zeit? Wir können zusammen einkaufen gehen.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы в магазине одежды в Ганновере. Вам нужна новая вещь (например, тёплый свитер, брюки или куртка). Поговорите с продавщицей: скажите, что ищете, спросите о размере, цвете и цене, примерьте и решите, будете ли вы покупать.',
    aiRole:
      'Sie sind Frau Lange, Verkäuferin in einem Modegeschäft in Hannover. Ihr Kunde lernt Deutsch (Niveau A2). Sprechen Sie langsam, freundlich und in kurzen, einfachen Sätzen. Fragen Sie nach Größe, Farbe und Preis und zeigen Sie verschiedene Sachen, zum Beispiel „einen warmen Pullover aus Wolle“ oder „eine bequeme Hose aus Baumwolle“. Benutzen Sie oft Adjektive nach ein, eine, kein. Stellen Sie immer nur eine Frage. Wenn der Kunde nicht weiterweiß, machen Sie einen einfachen Vorschlag.',
    opener: 'Guten Tag! Kann ich Ihnen helfen? Was suchen Sie denn?',
    tasksRu: [
      'Скажите, что вы ищете, с прилагательным: «Ich suche einen warmen Pullover / eine bequeme Hose».',
      'Спросите о размере, цвете и материале (Haben Sie das auch in Größe …? Ist das aus Wolle?).',
      'Попросите примерить вещь и скажите, как она сидит: zu eng, zu weit или passt gut.',
      'Спросите, можно ли потом обменять покупку, и скажите, берёте ли вы её.',
    ],
    readAloud: [
      'Ich suche einen warmen Wintermantel.',
      'Haben Sie diese Hose auch in Größe 50?',
      'Die Jacke ist mir leider zu eng.',
      'Das ist ein sehr schönes Hemd.',
    ],
  },
};
