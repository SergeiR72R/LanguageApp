import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-19',
  level: 'A2',
  order: 19,
  title: 'Pläne und Wünsche',
  titleRu: 'Планы и мечты',
  goalsRu: [
    'Говорить о планах на будущее с помощью Futur I (werden + инфинитив)',
    'Давать обещания и делать прогнозы: «Ich werde dich anrufen», «Morgen wird es regnen»',
    'Выражать мечты и желания: ich würde gern…, ich hätte gern…, ich wäre gern…',
    'Рассказывать о планах на отпуск, работу и пенсию',
  ],
  grammar: {
    topic: 'Futur I mit werden; Wünsche mit Konjunktiv II',
    topicRu: 'Будущее время с werden; желания с würde / hätte / wäre gern',
    explanationRu: `**Будущее время (Futur I)** строится просто: глагол **werden** в нужной форме стоит **на 2-м месте**, а **инфинитив** основного глагола — **в самом конце** предложения. Это похоже на русское «буду делать», только инфинитив уходит в конец.

- Ich **werde** nächstes Jahr in Rente **gehen**. — В следующем году я выйду на пенсию.
- **Wirst** du mich im Sommer **besuchen**? — Ты навестишь меня летом?

**Когда нужен Futur?** О простых планах немцы чаще говорят в **настоящем времени** со словом времени: «Morgen fahre ich nach Berlin». Futur используют, чтобы подчеркнуть:
- **обещание**: Ich werde dir helfen. — Я тебе помогу.
- **прогноз, предположение**: Morgen wird es wahrscheinlich regnen.
- **твёрдое решение**: Ab Montag werde ich jeden Tag Deutsch lernen.

В придаточном предложении (dass, weil, wenn) **werden** уходит в самый конец: Ich glaube, dass er die Prüfung bestehen **wird**.

**Мечты и желания** выражают формами Konjunktiv II (вы уже знаете их по вежливым просьбам):
- **würde gern + инфинитив** (действие): Ich würde gern nach Japan fliegen.
- **hätte gern + существительное** (иметь что-то): Ich hätte gern einen Garten.
- **wäre gern + кто / какой / где** (быть): Ich wäre gern jünger. Ich wäre jetzt gern am Meer.
- **Am liebsten würde ich …** — больше всего мне хотелось бы…

**Типичные ошибки:**
- Инфинитив не в конце. Неправильно: «Ich werde fahren morgen». Правильно: Ich werde morgen **fahren**.
- Путают два значения werden: Er **wird Arzt** — он станет врачом; Er **wird arbeiten** — он будет работать.
- Формы: du **wirst**, er **wird** — запомните их, они неправильные.
- Неправильно: «Ich würde gern einen Garten». Если второго глагола нет, нужно **hätte**: Ich hätte gern einen Garten.`,
    table: [
      ['Person', 'werden', 'Futur I', 'Wunsch (Konjunktiv II)'],
      ['ich', 'werde', 'ich werde arbeiten', 'ich würde / hätte / wäre gern'],
      ['du', 'wirst', 'du wirst arbeiten', 'du würdest / hättest / wärst gern'],
      ['er / sie / es', 'wird', 'er wird arbeiten', 'er würde / hätte / wäre gern'],
      ['wir', 'werden', 'wir werden arbeiten', 'wir würden / hätten / wären gern'],
      ['ihr', 'werdet', 'ihr werdet arbeiten', 'ihr würdet / hättet / wärt gern'],
      ['sie / Sie', 'werden', 'sie werden arbeiten', 'sie würden / hätten / wären gern'],
    ],
    examples: [
      { de: 'Nächsten Sommer werden wir ans Meer fahren.', ru: 'Следующим летом мы поедем на море.' },
      { de: 'Keine Sorge, ich werde dich jeden Tag anrufen.', ru: 'Не волнуйся, я буду звонить тебе каждый день.' },
      { de: 'Morgen wird es wahrscheinlich regnen.', ru: 'Завтра, вероятно, будет дождь.' },
      { de: 'Ich glaube, dass er die Prüfung bestehen wird.', ru: 'Я думаю, что он сдаст экзамен.' },
      { de: 'Ich würde gern besser Deutsch sprechen.', ru: 'Я бы хотел лучше говорить по-немецки.' },
      { de: 'Meine Frau hätte gern ein kleines Haus mit Garten.', ru: 'Моя жена хотела бы маленький дом с садом.' },
      { de: 'Am liebsten wäre ich jetzt im Urlaub.', ru: 'Больше всего мне хотелось бы сейчас быть в отпуске.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Nächstes Jahr ___ meine Tochter in Leipzig studieren.',
        options: ['wird', 'werdet', 'wirst', 'werde'],
        answer: 0,
        explanationRu: 'Подлежащее «meine Tochter» = sie (она), поэтому нужна форма wird. Инфинитив studieren стоит в конце.',
      },
      {
        type: 'choice',
        prompt: '___ du mir morgen beim Umzug helfen?',
        options: ['Wirst', 'Wird', 'Werdet', 'Werde'],
        answer: 0,
        explanationRu: 'С du глагол werden имеет форму wirst: Wirst du … helfen? В вопросе без вопросительного слова werden стоит на первом месте.',
      },
      {
        type: 'choice',
        prompt: 'Ich ___ gern einen Hund, aber unsere Wohnung ist zu klein.',
        options: ['hätte', 'würde', 'wäre', 'werde'],
        answer: 0,
        explanationRu: 'Здесь нет второго глагола, только существительное (einen Hund) — значит, нужно hätte gern («хотел бы иметь»).',
      },
      {
        type: 'choice',
        prompt: 'Bei diesem Wetter ___ ich jetzt am liebsten am Strand.',
        options: ['wäre', 'hätte', 'würde', 'werde'],
        answer: 0,
        explanationRu: '«Я хотел бы быть на пляже» — желание «быть где-то» выражается через wäre (Konjunktiv II от sein).',
      },
      {
        type: 'choice',
        audio: 'Ich werde dich am Wochenende besuchen.',
        prompt: 'Что обещает говорящий?',
        options: ['Навестить в выходные', 'Позвонить в выходные', 'Приехать сегодня вечером'],
        answer: 0,
        explanationRu: '«Ich werde dich am Wochenende besuchen» — «Я навещу тебя в выходные». werden + besuchen = обещание на будущее.',
      },
      {
        type: 'gap',
        prompt: 'Wir ___ im August nach Italien fahren.',
        answers: ['werden'],
        hintRu: 'глагол werden',
        explanationRu: 'С wir глагол werden имеет форму werden: wir werden … fahren. Инфинитив fahren — в конце.',
      },
      {
        type: 'gap',
        prompt: 'Ich ___ gern Klavier spielen lernen, aber ich habe keine Zeit.',
        answers: ['würde'],
        hintRu: 'Konjunktiv II от werden',
        explanationRu: 'Желание что-то делать: würde gern + инфинитив (spielen lernen) в конце.',
      },
      {
        type: 'gap',
        audio: 'Morgen wird es schneien.',
        prompt: 'Послушайте и вставьте слово: Morgen ___ es schneien.',
        answers: ['wird'],
        explanationRu: 'Прогноз погоды в Futur: es wird + инфинитив schneien. С es — форма wird.',
      },
      {
        type: 'order',
        words: ['Nächstes Jahr', 'werden', 'wir', 'ein Haus', 'kaufen.'],
        translationRu: 'В следующем году мы купим дом.',
        explanationRu: 'Слово времени на 1-м месте, werden — на 2-м, потом подлежащее wir, а инфинитив kaufen — в самом конце.',
      },
      {
        type: 'order',
        words: ['Ich', 'glaube,', 'dass', 'es', 'morgen', 'regnen', 'wird.'],
        translationRu: 'Я думаю, что завтра будет дождь.',
        explanationRu: 'В придаточном с dass спрягаемый глагол wird стоит в самом конце, после инфинитива regnen.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в Futur I (обещание).',
        prompt: 'Ich rufe dich morgen an.',
        answers: ['Ich werde dich morgen anrufen.'],
        explanationRu: 'werde на 2-м месте, а отделяемый глагол anrufen в инфинитиве стоит целиком в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Выразите это как мечту с «würde gern».',
        prompt: 'Ich reise nach Kanada.',
        answers: ['Ich würde gern nach Kanada reisen.', 'Ich würde gerne nach Kanada reisen.'],
        explanationRu: 'würde — на 2-м месте, gern сразу после него, инфинитив reisen — в конце.',
      },
    ],
  },
  vocab: [
    { de: 'Zukunft', article: 'die', plural: '–', pos: 'noun', ru: 'будущее', example: 'In Zukunft werde ich mehr Sport machen.', exampleRu: 'В будущем я буду больше заниматься спортом.', pronRu: 'ди ЦУ-кунфт' },
    { de: 'Plan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'план', example: 'Hast du schon Pläne für den Sommer?', exampleRu: 'У тебя уже есть планы на лето?' },
    { de: 'Wunsch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'желание', example: 'Mein größter Wunsch ist eine Reise nach Australien.', exampleRu: 'Моё самое большое желание — поездка в Австралию.', pronRu: 'дер ВУНШ' },
    { de: 'Traum', article: 'der', plural: '-¨e', pos: 'noun', ru: 'мечта; сон', example: 'Ein Haus am Meer ist mein Traum.', exampleRu: 'Дом у моря — моя мечта.' },
    { de: 'Ziel', article: 'das', plural: '-e', pos: 'noun', ru: 'цель', example: 'Mein Ziel ist die A2-Prüfung im Juni.', exampleRu: 'Моя цель — экзамен A2 в июне.', pronRu: 'дас ЦИ:ЛЬ' },
    { de: 'vorhaben', forms: 'hat vor, hatte vor, hat vorgehabt', pos: 'verb', ru: 'собираться, планировать', example: 'Was hast du am Wochenende vor?', exampleRu: 'Что ты собираешься делать на выходных?', pronRu: 'ФОР-ха-бэн' },
    { de: 'planen', forms: 'plant, hat geplant', pos: 'verb', ru: 'планировать', example: 'Wir planen eine Reise nach Wien.', exampleRu: 'Мы планируем поездку в Вену.' },
    { de: 'sich wünschen', forms: 'wünscht sich, hat sich gewünscht; ich wünsche mir', pos: 'verb', ru: 'желать (себе), хотеть (в подарок)', example: 'Ich wünsche mir mehr Zeit für meine Familie.', exampleRu: 'Я хотел бы больше времени для своей семьи.' },
    { de: 'träumen', forms: 'träumt, hat geträumt; von + Dat', pos: 'verb', ru: 'мечтать (о чём-то); видеть сон', example: 'Er träumt von einem eigenen Restaurant.', exampleRu: 'Он мечтает о собственном ресторане.', pronRu: 'ТРОЙ-мэн' },
    { de: 'werden', forms: 'wird, wurde, ist geworden', pos: 'verb', ru: 'становиться; вспомогательный глагол будущего времени', example: 'Meine Enkelin will Ärztin werden.', exampleRu: 'Моя внучка хочет стать врачом.' },
    { de: 'Rente', article: 'die', plural: '-n', pos: 'noun', ru: 'пенсия', example: 'Mein Mann geht nächstes Jahr in Rente.', exampleRu: 'Мой муж в следующем году выходит на пенсию.' },
    { de: 'Rentner', article: 'der', plural: '-', pos: 'noun', ru: 'пенсионер', example: 'Als Rentner werde ich viel Zeit für den Garten haben.', exampleRu: 'На пенсии у меня будет много времени для сада.' },
    { de: 'sparen', forms: 'spart, hat gespart; für + Akk', pos: 'verb', ru: 'копить, экономить', example: 'Wir sparen für ein neues Auto.', exampleRu: 'Мы копим на новую машину.' },
    { de: 'erreichen', forms: 'erreicht, hat erreicht', pos: 'verb', ru: 'достигать; успевать (на поезд)', example: 'Mit viel Übung wirst du dein Ziel erreichen.', exampleRu: 'С большой практикой ты достигнешь своей цели.', pronRu: 'эр-РАЙ-хьен' },
    { de: 'Weltreise', article: 'die', plural: '-n', pos: 'noun', ru: 'кругосветное путешествие', example: 'Nach der Rente wollen wir eine Weltreise machen.', exampleRu: 'После выхода на пенсию мы хотим совершить кругосветное путешествие.', pronRu: 'ди ВЕЛЬТ-рай-зэ' },
    { de: 'eigen', pos: 'adj', ru: 'собственный, свой', example: 'Ich hätte gern ein eigenes Zimmer.', exampleRu: 'Я хотел бы свою собственную комнату.', pronRu: 'АЙ-гэн' },
    { de: 'wahrscheinlich', pos: 'adv', ru: 'вероятно, наверное', example: 'Morgen wird es wahrscheinlich schneien.', exampleRu: 'Завтра, вероятно, пойдёт снег.', pronRu: 'ва:р-ШАЙН-лихь' },
    { de: 'bestimmt', pos: 'adv', ru: 'наверняка, точно', example: 'Du wirst die Prüfung bestimmt bestehen.', exampleRu: 'Ты наверняка сдашь экзамен.', pronRu: 'бэ-ШТИМТ' },
    { de: 'irgendwann', pos: 'adv', ru: 'когда-нибудь', example: 'Irgendwann werde ich Japan besuchen.', exampleRu: 'Когда-нибудь я побываю в Японии.', pronRu: 'ИР-гэнт-ван' },
    { de: 'hoffen', forms: 'hofft, hat gehofft; auf + Akk', pos: 'verb', ru: 'надеяться', example: 'Ich hoffe, dass du bald gesund wirst.', exampleRu: 'Я надеюсь, что ты скоро поправишься.' },
  ],
  listening: {
    title: 'Bald in Rente',
    kind: 'dialog',
    text: `A: Guten Morgen, Herr Wolf! Sie sehen aber zufrieden aus.
B: Guten Morgen, Frau Berger! Ja, ich habe gute Nachrichten. Ende März gehe ich in Rente.
A: Wirklich? Herzlichen Glückwunsch! Und was werden Sie mit der vielen Zeit machen?
B: Oh, ich habe viele Pläne. Zuerst werden meine Frau und ich nach Norwegen fahren. Davon träumen wir schon lange.
A: Mit dem Auto?
B: Nein, mit dem Schiff. Unser Auto ist zu alt für so eine lange Reise.
A: Und danach?
B: Danach werde ich endlich einen Computerkurs machen. Meine Enkel lachen immer, weil ich nicht einmal Fotos schicken kann.
A: Das kenne ich. Ich würde auch gern mehr mit dem Computer machen.
B: Dann kommen Sie doch mit! Der Kurs ist an der Volkshochschule, immer dienstags.
A: Gute Idee. Aber am liebsten hätte ich einen eigenen Garten. Ich habe nur einen kleinen Balkon.
B: Mein Sohn hat einen großen Garten, aber er hat nie Zeit dafür. Ich werde ihn mal fragen.
A: Das wäre wunderbar!`,
    questions: [
      { question: 'Wann geht Herr Wolf in Rente?', options: ['Ende März', 'Anfang März', 'Ende Mai'], answer: 0 },
      { question: 'Wie fahren Herr und Frau Wolf nach Norwegen?', options: ['Mit dem Auto', 'Mit dem Schiff', 'Mit dem Zug'], answer: 1 },
      {
        question: 'Warum möchte Herr Wolf einen Computerkurs machen?',
        options: ['Er braucht den Computer für die Arbeit.', 'Er möchte Fotos schicken können.', 'Seine Frau möchte das.'],
        answer: 1,
      },
      { question: 'Wann ist der Computerkurs?', options: ['Montags', 'Dienstags', 'Am Wochenende'], answer: 1 },
      { question: 'Was wünscht sich Frau Berger?', options: ['Einen Balkon', 'Einen Garten', 'Eine Reise nach Norwegen'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Ваш друг Михаэль спрашивает в письме, какие у вас планы на следующий год. Напишите ему ответ (e-mail). Расскажите о своих планах (используйте werden), о своей большой мечте (würde gern / hätte gern / wäre gern) и спросите о его планах.',
    taskDe: 'Ihr Freund Michael fragt nach Ihren Plänen für das nächste Jahr. Schreiben Sie ihm eine E-Mail.',
    points: [
      'Was werden Sie nächstes Jahr machen?',
      'Welchen großen Wunsch oder Traum haben Sie?',
      'Fragen Sie Michael nach seinen Plänen.',
    ],
    minWords: 50,
    usefulPhrases: [
      'Lieber Michael,',
      'danke für deine E-Mail!',
      'Nächstes Jahr werde ich …',
      'Ich habe einen großen Plan: …',
      'Am liebsten würde ich …',
      'Ich hätte gern … / Ich wäre gern …',
      'Und was hast du nächstes Jahr vor?',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы встречаете на улице соседку, фрау Ланге. Скоро лето, и она расспрашивает вас о ваших планах и мечтах. Расскажите о них и спросите о её планах.',
    aiRole:
      'Sie sind Frau Lange, eine freundliche Nachbarin (65 Jahre). Sie sprechen mit dem Lerner über Pläne für den Sommer und über Wünsche und Träume. Sprechen Sie einfach auf A2-Niveau, in kurzen Sätzen und langsam. Stellen Sie immer nur eine Frage. Benutzen Sie oft das Futur mit „werden“ und „würde gern / hätte gern / wäre gern“. Wenn der Lerner nicht weiterweiß, helfen Sie mit einer einfachen Frage, z. B. „Werden Sie verreisen?“ oder „Was würden Sie gern lernen?“.',
    opener: 'Hallo! Bald ist Sommer. Was werden Sie im Sommer machen?',
    tasksRu: [
      'Расскажите минимум о двух планах, используя werden + инфинитив.',
      'Расскажите о своей мечте: «Ich würde gern …», «Ich hätte gern …», «Ich wäre gern …».',
      'Спросите соседку о её планах и желаниях.',
      'Пообещайте ей что-нибудь (например: «Ich werde Ihnen eine Postkarte schicken.»).',
    ],
    readAloud: [
      'Nächstes Jahr werde ich in Rente gehen.',
      'Wir werden im Sommer nach Österreich fahren.',
      'Ich würde gern besser Deutsch sprechen.',
      'Am liebsten wäre ich jetzt am Meer.',
    ],
  },
};
