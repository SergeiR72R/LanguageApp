import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-01',
  level: 'A2',
  order: 1,
  title: 'Mein Lebenslauf',
  titleRu: 'Моя биография',
  goalsRu: [
    'Рассказывать о своей жизни: рождение, детство, учёба, работа, семья',
    'Уверенно образовывать перфект правильных и неправильных глаголов',
    'Выбирать вспомогательный глагол: haben или sein',
    'Понимать короткие биографии на слух и при чтении',
  ],
  grammar: {
    topic: 'Perfekt: Wiederholung, unregelmäßige Verben, haben oder sein',
    topicRu: 'Перфект: повторение, неправильные глаголы, haben или sein',
    explanationRu: `**Перфект** (Perfekt) — главное прошедшее время в разговорной речи. Вы уже знаете его с уровня A1: «Ich habe gearbeitet», «Ich bin gefahren». В этом юните мы повторим правила и выучим много **неправильных глаголов** — они нужны, чтобы рассказать о своей жизни.

**Как строится перфект:** **haben** или **sein** (спрягается и стоит на 2-м месте) + **Partizip II** (причастие, стоит в самом конце).

- Ich **habe** in Moskau Maschinenbau **studiert**.
- 1990 **bin** ich nach Kiew **gezogen**.

**Как образуется Partizip II:**

- правильные глаголы: **ge- … -t**: machen → gemacht, arbeiten → gearbeitet, heiraten → geheiratet;
- неправильные глаголы: **ge- … -en**, часто с другой гласной: schreiben → geschrieben, finden → gefunden, sprechen → gesprochen. Их нужно учить наизусть (см. таблицу);
- отделяемые глаголы: ge- стоит в середине: aufwachsen → auf**ge**wachsen, anfangen → an**ge**fangen;
- **без ge-**: глаголы на -ieren (studieren → studiert) и глаголы с приставками be-, ver-, er- (bekommen → bekommen, verlieren → verloren, erzählen → erzählt).

**haben или sein?** Большинство глаголов образуют перфект с **haben**. С **sein** — три группы:

1. движение из точки А в точку Б: gehen, fahren, fliegen, kommen, ziehen (переезжать);
2. изменение состояния: werden, aufwachsen, sterben, einschlafen;
3. особые глаголы: sein, bleiben, passieren.

Сравните: Ich **habe** zwei Jahre in Riga **gewohnt** (жил — нет движения). Ich **bin** nach Riga **gezogen** (переехал — движение).

**Запомните фразу:** «Ich **bin** 1958 in Omsk **geboren**.» — «Я родился в 1958 году в Омске». Здесь всегда **bin**, а не habe.

**Типичные ошибки русскоговорящих:**

- «Ich habe nach Berlin gefahren» → правильно: Ich **bin** nach Berlin gefahren.
- «Ich bin dort gearbeitet» → правильно: Ich **habe** dort gearbeitet.
- Partizip II не в конце: «Ich habe gemacht eine Ausbildung» → Ich habe eine Ausbildung **gemacht**.
- Лишняя приставка: «gestudiert», «geerzählt» → studiert, erzählt.`,
    table: [
      ['Infinitiv', 'Perfekt', 'Перевод'],
      ['arbeiten', 'hat gearbeitet', 'работать'],
      ['studieren', 'hat studiert', 'учиться в вузе'],
      ['beginnen', 'hat begonnen', 'начинать'],
      ['finden', 'hat gefunden', 'находить'],
      ['verlieren', 'hat verloren', 'терять'],
      ['bestehen', 'hat bestanden', 'сдать (экзамен)'],
      ['fahren', 'ist gefahren', 'ехать'],
      ['ziehen', 'ist gezogen', 'переезжать (куда-то)'],
      ['aufwachsen', 'ist aufgewachsen', 'вырасти'],
      ['werden', 'ist geworden', 'стать'],
      ['bleiben', 'ist geblieben', 'оставаться'],
      ['sterben', 'ist gestorben', 'умереть'],
    ],
    examples: [
      { de: 'Ich bin 1961 in Tula geboren und dort aufgewachsen.', ru: 'Я родился в 1961 году в Туле и там вырос.' },
      { de: 'Nach der Schule habe ich eine Ausbildung als Elektriker gemacht.', ru: 'После школы я выучился на электрика.' },
      { de: '1985 haben wir geheiratet.', ru: 'В 1985 году мы поженились.' },
      { de: 'Mein Sohn ist Arzt geworden.', ru: 'Мой сын стал врачом.' },
      { de: 'Wir sind 2001 nach Deutschland gekommen.', ru: 'Мы приехали в Германию в 2001 году.' },
      { de: 'Ich habe 35 Jahre in einer Fabrik gearbeitet.', ru: 'Я 35 лет проработал на заводе.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich ___ 1985 nach Sankt Petersburg gezogen.',
        options: ['habe', 'bin', 'hat', 'ist'],
        answer: 1,
        explanationRu: 'ziehen (переезжать) — это движение из одного места в другое, поэтому перфект с sein: ich bin gezogen.',
      },
      {
        type: 'choice',
        prompt: 'Wir ___ zwei Jahre in Kasan gewohnt.',
        options: ['sind', 'haben', 'hat', 'seid'],
        answer: 1,
        explanationRu: 'wohnen (жить где-то) — нет движения, поэтому перфект с haben: wir haben gewohnt.',
      },
      {
        type: 'choice',
        prompt: 'Meine Tochter ist Lehrerin ___.',
        options: ['geworden', 'gewerdet', 'gewesen', 'werden'],
        answer: 0,
        explanationRu: 'werden — неправильный глагол: ist geworden («стала»). gewesen — это причастие от sein («была»).',
      },
      {
        type: 'choice',
        audio: 'Ich bin in Minsk aufgewachsen.',
        prompt: 'Что вы слышите?',
        options: ['Ich bin in Minsk aufgewachsen.', 'Ich habe in Minsk gewohnt.', 'Ich bin nach Minsk gefahren.'],
        answer: 0,
        explanationRu: 'Звучит aufgewachsen — «вырос». Глагол aufwachsen (изменение состояния) образует перфект с sein.',
      },
      {
        type: 'gap',
        prompt: 'Nach der Schule habe ich eine Ausbildung ___.',
        answers: ['gemacht'],
        hintRu: 'machen',
        explanationRu: 'machen — правильный глагол: ge- + mach + -t = gemacht. Partizip II стоит в конце.',
      },
      {
        type: 'gap',
        prompt: 'Er hat die Prüfung leider nicht ___.',
        answers: ['bestanden'],
        hintRu: 'bestehen',
        explanationRu: 'bestehen — неправильный глагол с приставкой be-, поэтому без ge-: hat bestanden.',
      },
      {
        type: 'gap',
        prompt: 'Mein Großvater ist 1995 ___.',
        answers: ['gestorben'],
        hintRu: 'sterben',
        explanationRu: 'sterben (умереть) — изменение состояния, перфект с sein: ist gestorben.',
      },
      {
        type: 'gap',
        audio: 'Ich habe dreißig Jahre als Busfahrer gearbeitet.',
        prompt: 'Сколько лет мужчина работал водителем автобуса? Напишите число цифрами: ___',
        answers: ['30'],
        explanationRu: 'dreißig = 30. «Ich habe dreißig Jahre als Busfahrer gearbeitet» — 30 лет водителем автобуса.',
      },
      {
        type: 'order',
        words: ['Mein', 'Vater', 'ist', 'in', 'Rente', 'gegangen.'],
        translationRu: 'Мой отец вышел на пенсию.',
        explanationRu: 'in Rente gehen — движение (gehen), поэтому ist; Partizip II gegangen стоит в конце.',
      },
      {
        type: 'order',
        words: ['Wann', 'bist', 'du', 'nach', 'Deutschland', 'gekommen?'],
        translationRu: 'Когда ты приехал в Германию?',
        explanationRu: 'В вопросе с W-словом вспомогательный глагол стоит на 2-м месте, Partizip II — в конце. kommen → bist gekommen.',
      },
      {
        type: 'transform',
        instructionRu: 'Перескажите в перфекте.',
        prompt: 'Wir bleiben drei Wochen in Italien.',
        answers: ['Wir sind drei Wochen in Italien geblieben.'],
        explanationRu: 'bleiben — особый глагол: перфект с sein, хотя движения нет: sind … geblieben.',
      },
      {
        type: 'transform',
        instructionRu: 'Перескажите в перфекте.',
        prompt: 'Er verliert seine Stelle.',
        answers: ['Er hat seine Stelle verloren.'],
        explanationRu: 'verlieren — приставка ver-, поэтому без ge-: hat verloren.',
      },
    ],
  },
  vocab: [
    { de: 'Lebenslauf', article: 'der', plural: '-¨e', pos: 'noun', ru: 'биография; резюме', example: 'Bitte schreiben Sie Ihren Lebenslauf.', exampleRu: 'Пожалуйста, напишите свою биографию.', pronRu: 'дер ЛЕ-бэнс-лауф' },
    { de: 'geboren', forms: 'ich bin … geboren', pos: 'adj', ru: 'рождённый; родился', example: 'Ich bin 1960 in Samara geboren.', exampleRu: 'Я родился в 1960 году в Самаре.', pronRu: 'гэ-БО-рэн' },
    { de: 'aufwachsen', forms: 'wächst auf, ist aufgewachsen', pos: 'verb', ru: 'вырасти, расти', example: 'Meine Frau ist in Odessa aufgewachsen.', exampleRu: 'Моя жена выросла в Одессе.', pronRu: 'АУФ-вак-сэн' },
    { de: 'Ausbildung', article: 'die', plural: '-en', pos: 'noun', ru: 'профессиональное обучение (на рабочую профессию)', example: 'Er hat eine Ausbildung als Koch gemacht.', exampleRu: 'Он выучился на повара.', pronRu: 'ди АУС-биль-дунг' },
    { de: 'Studium', article: 'das', plural: 'die Studien', pos: 'noun', ru: 'учёба в вузе', example: 'Das Studium hat fünf Jahre gedauert.', exampleRu: 'Учёба длилась пять лет.', pronRu: 'дас ШТУ-ди-ум' },
    { de: 'Diplom', article: 'das', plural: '-e', pos: 'noun', ru: 'диплом', example: 'Ich habe mein Diplom 1983 bekommen.', exampleRu: 'Я получил диплом в 1983 году.', pronRu: 'дас ди-ПЛО:М' },
    { de: 'bestehen', forms: 'besteht, hat bestanden', pos: 'verb', ru: 'сдать (экзамен), выдержать', example: 'Sie hat die Prüfung mit „sehr gut“ bestanden.', exampleRu: 'Она сдала экзамен на «отлично».', pronRu: 'бэ-ШТЕ-эн' },
    { de: 'Stelle', article: 'die', plural: '-n', pos: 'noun', ru: 'место работы, должность', example: 'Mein Sohn hat eine Stelle in Hamburg gefunden.', exampleRu: 'Мой сын нашёл работу в Гамбурге.', pronRu: 'ди ШТЭ-ле' },
    { de: 'heiraten', forms: 'heiratet, hat geheiratet', pos: 'verb', ru: 'жениться, выйти замуж', example: 'Wir haben 1982 geheiratet.', exampleRu: 'Мы поженились в 1982 году.', pronRu: 'ХАЙ-ра-тэн' },
    { de: 'Rente', article: 'die', plural: '-n', pos: 'noun', ru: 'пенсия', example: 'Mein Vater ist mit 60 in Rente gegangen.', exampleRu: 'Мой отец вышел на пенсию в 60 лет.', pronRu: 'ди РЭН-тэ' },
    { de: 'beginnen', forms: 'beginnt, hat begonnen', pos: 'verb', ru: 'начинать(ся)', example: 'Der Kurs hat im Mai begonnen.', exampleRu: 'Курс начался в мае.', pronRu: 'бэ-ГИ-нэн' },
    { de: 'verlieren', forms: 'verliert, hat verloren', pos: 'verb', ru: 'терять', example: 'Ich habe meinen Schlüssel verloren.', exampleRu: 'Я потерял свой ключ.', pronRu: 'фэр-ЛИ:-рэн' },
    { de: 'werden', forms: 'wird, ist geworden', pos: 'verb', ru: 'становиться, стать', example: 'Mein Bruder ist Ingenieur geworden.', exampleRu: 'Мой брат стал инженером.', pronRu: 'ВЕА-дэн' },
    { de: 'bleiben', forms: 'bleibt, ist geblieben', pos: 'verb', ru: 'оставаться', example: 'Wir sind zehn Jahre in Kiew geblieben.', exampleRu: 'Мы прожили в Киеве десять лет.', pronRu: 'БЛАЙ-бэн' },
    { de: 'sterben', forms: 'stirbt, ist gestorben', pos: 'verb', ru: 'умирать', example: 'Meine Großmutter ist 2010 gestorben.', exampleRu: 'Моя бабушка умерла в 2010 году.', pronRu: 'ШТЭР-бэн' },
    { de: 'erzählen', forms: 'erzählt, hat erzählt', pos: 'verb', ru: 'рассказывать', example: 'Erzählen Sie bitte von Ihrem Leben!', exampleRu: 'Расскажите, пожалуйста, о своей жизни!', pronRu: 'эр-ЦЭ-лен' },
    { de: 'Leben', article: 'das', plural: '–', pos: 'noun', ru: 'жизнь', example: 'Das Leben in Deutschland ist anders.', exampleRu: 'Жизнь в Германии другая.', pronRu: 'дас ЛЕ-бэн' },
    { de: 'Ausland', article: 'das', plural: '–', pos: 'noun', ru: 'заграница', example: 'Meine Tochter lebt im Ausland.', exampleRu: 'Моя дочь живёт за границей.', pronRu: 'дас АУС-ланд' },
    { de: 'damals', pos: 'adv', ru: 'тогда, в то время', example: 'Damals war ich zwanzig Jahre alt.', exampleRu: 'Тогда мне было двадцать лет.', pronRu: 'ДА-мальс' },
    { de: 'danach', pos: 'adv', ru: 'после этого, потом', example: 'Zuerst habe ich studiert, danach habe ich in einer Bank gearbeitet.', exampleRu: 'Сначала я учился в вузе, потом работал в банке.', pronRu: 'да-НАХ' },
  ],
  listening: {
    title: 'Herr Petrow erzählt aus seinem Leben',
    kind: 'monolog',
    text: `Guten Tag, ich heiße Juri Petrow. Ich bin 1959 in Wolgograd geboren und dort auch aufgewachsen. Nach der Schule habe ich eine Ausbildung als Elektriker gemacht. Danach war ich zwei Jahre bei der Armee. 1981 habe ich meine Frau Tanja kennengelernt, und ein Jahr später haben wir geheiratet. Wir haben zwei Kinder bekommen, einen Sohn und eine Tochter. Fast dreißig Jahre habe ich in einer Fabrik gearbeitet. 2012 sind wir nach Deutschland gezogen, denn unsere Tochter hat schon hier gewohnt. Am Anfang war es nicht leicht. Ich habe einen Deutschkurs besucht und viele Wörter gelernt. Jetzt bin ich in Rente. Ich habe viel Zeit für meine Enkel und für meinen Garten.`,
    questions: [
      { question: 'Wo ist Herr Petrow aufgewachsen?', options: ['In Moskau', 'In Wolgograd', 'In Deutschland'], answer: 1 },
      { question: 'Was hat er nach der Schule gemacht?', options: ['Er hat studiert.', 'Er hat eine Ausbildung gemacht.', 'Er hat in einer Bank gearbeitet.'], answer: 1 },
      { question: 'Wann hat er geheiratet?', options: ['1959', '1981', '1982'], answer: 2 },
      {
        question: 'Warum ist die Familie nach Deutschland gezogen?',
        options: ['Die Tochter hat dort gewohnt.', 'Herr Petrow hat dort eine Stelle gefunden.', 'Der Sohn hat dort studiert.'],
        answer: 0,
      },
      {
        question: 'Was macht Herr Petrow heute?',
        options: ['Er arbeitet als Elektriker.', 'Er ist bei der Armee.', 'Er ist in Rente und hat Zeit für die Enkel.'],
        answer: 2,
      },
    ],
  },
  writing: {
    taskRu: 'Ваша новая знакомая из Германии, Сабина, хочет больше узнать о вашей жизни. Напишите ей электронное письмо. Рассказывайте о прошлом в перфекте (habe/bin + Partizip II).',
    taskDe: 'Ihre Bekannte Sabine möchte mehr über Ihr Leben wissen. Schreiben Sie ihr eine E-Mail.',
    points: ['Wo sind Sie geboren und aufgewachsen?', 'Was haben Sie gelernt oder studiert?', 'Wo und wie lange haben Sie gearbeitet?'],
    minWords: 50,
    usefulPhrases: [
      'Liebe Sabine,',
      'Ich bin … in … geboren.',
      'Ich bin in … aufgewachsen.',
      'Nach der Schule habe ich …',
      'Ich habe … Jahre als … gearbeitet.',
      'Im Jahr … habe ich geheiratet.',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы пришли на первое занятие в новый языковой курс. Преподавательница просит вас коротко рассказать о своей жизни.',
    aiRole:
      'Sie sind Frau Becker, Lehrerin in einem Deutschkurs für Erwachsene (Niveau A2). Sie fragen freundlich nach dem Leben der Person: Geburtsort, Schule, Ausbildung, Arbeit, Familie. Sprechen Sie langsam und einfach, benutzen Sie kurze Sätze und das Perfekt. Stellen Sie immer nur eine Frage. Wenn die Person einen Fehler macht, wiederholen Sie den Satz kurz und richtig. Wenn die Person nicht weiterweiß, helfen Sie mit einem Beispiel.',
    opener: 'Guten Tag! Schön, dass Sie da sind. Wo sind Sie geboren?',
    tasksRu: [
      'Скажите, где и когда вы родились и где выросли.',
      'Расскажите об учёбе или профессиональном обучении (в перфекте!).',
      'Расскажите, где и сколько лет вы работали.',
      'Спросите преподавательницу, где она выросла.',
    ],
    readAloud: [
      'Ich bin in Kasan geboren.',
      'Dort bin ich auch aufgewachsen.',
      'Danach habe ich in Moskau studiert.',
      'Ich habe dreißig Jahre gearbeitet.',
      'Jetzt bin ich in Rente.',
    ],
  },
};
