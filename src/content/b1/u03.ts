import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-03',
  level: 'B1',
  order: 3,
  title: 'Arbeit & Beruf',
  titleRu: 'Работа и профессия',
  goalsRu: [
    'Рассказывать о своей работе, условиях труда и обязанностях',
    'Объяснять причины и противоречия с помощью weil, obwohl, deshalb, trotzdem',
    'Правильно строить придаточные предложения с глаголом в конце',
    'Участвовать в собеседовании и писать деловые письма начальству',
  ],
  grammar: {
    topic: 'Nebensätze mit dass, weil, obwohl, wenn; Konnektoren deshalb, deswegen, trotzdem',
    topicRu: 'Придаточные предложения; коннекторы deshalb, deswegen, trotzdem',
    explanationRu: `**Придаточные предложения** вводятся союзами:

- **dass** — что: Ich glaube, dass er recht hat.
- **weil** — потому что: Ich bin müde, weil ich viel arbeite.
- **obwohl** — хотя: Ich arbeite, obwohl ich krank bin.
- **wenn** — если; когда (в настоящем/будущем или при повторении): Wenn ich Zeit habe, rufe ich dich an.

Главное правило: в придаточном спрягаемый глагол стоит **в самом конце**. Отделяемая приставка при этом не отделяется: …, weil er früh **aufsteht**. Модальный глагол и вспомогательный глагол тоже в конце: …, weil ich arbeiten **muss** / …, weil ich viel gearbeitet **habe**. Перед союзом всегда ставится **запятая**.

Если придаточное стоит **первым**, главное предложение начинается со спрягаемого глагола: «Wenn ich Zeit habe, **rufe** ich dich an». Запомните формулу «глагол — запятая — глагол».

**Коннекторы deshalb, deswegen** (поэтому) и **trotzdem** (тем не менее, всё равно) — это наречия, а не союзы. Они занимают первое место в предложении, и сразу после них идёт глагол: «Ich bin krank, **deshalb bleibe** ich zu Hause». Они могут стоять и внутри предложения: «Ich bleibe deshalb zu Hause».

Сравните: weil называет **причину**, deshalb — **следствие**; obwohl и trotzdem выражают **противоречие**:

- Obwohl es regnet, gehe ich spazieren.
- Es regnet, trotzdem gehe ich spazieren.

**Типичные ошибки русскоговорящих:**

- Порядок слов как в русском: «…, weil ich habe keine Zeit» вместо **«…, weil ich keine Zeit habe»**.
- После deshalb/trotzdem ставят подлежащее: «deshalb ich bleibe» вместо **«deshalb bleibe ich»**.
- Путают trotzdem и obwohl: «Trotzdem es regnet, …» — неверно.
- Русское «если … ли» в косвенном вопросе — это не wenn, а **ob**: Ich weiß nicht, ob er kommt.`,
    table: [
      ['Тип', 'Слова', 'Место глагола', 'Пример'],
      ['Подчинительный союз', 'dass, weil, obwohl, wenn', 'в конце', '…, weil ich Überstunden machen muss.'],
      ['Наречие-коннектор', 'deshalb, deswegen, trotzdem', 'сразу после коннектора', '…, deshalb bin ich so müde.'],
      ['Сочинительный союз', 'und, aber, oder, denn', 'обычный порядок (позиция 0)', '…, denn ich muss arbeiten.'],
    ],
    examples: [
      { de: 'Ich glaube, dass die neue Chefin sehr kompetent ist.', ru: 'Я думаю, что новая начальница очень компетентна.' },
      { de: 'Er hat gekündigt, weil er mit seinem Gehalt nicht zufrieden war.', ru: 'Он уволился, потому что был недоволен зарплатой.' },
      { de: 'Obwohl sie viele Überstunden macht, verdient sie nicht besonders gut.', ru: 'Хотя она много перерабатывает, зарабатывает она не особенно хорошо.' },
      { de: 'Wenn ich im Homeoffice arbeite, fange ich schon um sieben Uhr an.', ru: 'Когда я работаю из дома, я начинаю уже в семь часов.' },
      { de: 'Die Firma sucht dringend Fachkräfte, deshalb bietet sie flexible Arbeitszeiten an.', ru: 'Фирма срочно ищет специалистов, поэтому предлагает гибкий график.' },
      { de: 'Das Projekt war sehr stressig, trotzdem hat das Team gut zusammengearbeitet.', ru: 'Проект был очень напряжённым, тем не менее команда хорошо сработалась.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: [
          'Ich bleibe heute zu Hause, weil ich bin krank.',
          'Ich bleibe heute zu Hause, weil ich krank bin.',
          'Ich bleibe heute zu Hause, weil krank ich bin.',
        ],
        answer: 1,
        explanationRu: 'После weil спрягаемый глагол стоит в конце придаточного: weil ich krank bin.',
      },
      {
        type: 'choice',
        prompt: 'Es regnet stark. ___ fahren wir mit dem Fahrrad zur Arbeit.',
        options: ['Obwohl', 'Trotzdem', 'Weil', 'Deshalb'],
        answer: 1,
        explanationRu: 'Противоречие (дождь, но всё равно на велосипеде) и глагол сразу после пропуска → наречие trotzdem. Obwohl требовал бы глагол в конце.',
      },
      {
        type: 'choice',
        prompt: 'Mein Kollege ist krank, ___ muss ich heute länger arbeiten.',
        options: ['deshalb', 'obwohl', 'weil', 'trotzdem'],
        answer: 0,
        explanationRu: 'Вторая часть — следствие (поэтому я работаю дольше), глагол стоит сразу после пропуска → deshalb.',
      },
      {
        type: 'choice',
        prompt: '___ du Fragen hast, ruf mich einfach an!',
        options: ['Wenn', 'Dass', 'Obwohl', 'Deshalb'],
        answer: 0,
        explanationRu: 'Условие «если у тебя есть вопросы» → wenn. Глагол hast стоит в конце придаточного.',
      },
      {
        type: 'gap',
        prompt: 'Ich finde es gut, ___ unsere Firma Weiterbildungen bezahlt.',
        answers: ['dass'],
        explanationRu: 'После «Ich finde es gut» следует содержание мнения → dass («что»). Глагол bezahlt в конце.',
      },
      {
        type: 'gap',
        prompt: 'Sie geht zur Arbeit, ___ sie Fieber hat.',
        answers: ['obwohl', 'obgleich'],
        explanationRu: 'Противоречие (температура, но идёт на работу) + глагол в конце → obwohl.',
      },
      {
        type: 'gap',
        prompt: 'Er sagt, dass er morgen um fünf Uhr ___.',
        answers: ['aufsteht'],
        hintRu: 'aufstehen',
        explanationRu: 'В придаточном отделяемый глагол не разделяется и стоит в конце целиком: aufsteht.',
      },
      {
        type: 'gap',
        prompt: 'Die Arbeit macht mir viel Spaß, ___ suche ich keine neue Stelle.',
        answers: ['deshalb', 'deswegen', 'daher', 'darum'],
        explanationRu: 'Вторая часть — следствие, глагол стоит сразу после пропуска → deshalb/deswegen.',
      },
      {
        type: 'order',
        words: ['Obwohl', 'er', 'wenig', 'verdient,', 'mag', 'er', 'seinen', 'Job.'],
        translationRu: 'Хотя он мало зарабатывает, ему нравится его работа.',
        explanationRu: 'Придаточное с obwohl стоит первым, поэтому главное предложение начинается с глагола: «глагол — запятая — глагол».',
      },
      {
        type: 'order',
        words: ['Ich', 'hoffe,', 'dass', 'ich', 'die', 'Stelle', 'bekomme.'],
        translationRu: 'Я надеюсь, что получу это место.',
        explanationRu: 'В придаточном с dass спрягаемый глагол bekomme стоит в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините два предложения с помощью weil (придаточное во второй части).',
        prompt: 'Ich mache viele Überstunden. Wir haben ein wichtiges Projekt.',
        answers: ['Ich mache viele Überstunden, weil wir ein wichtiges Projekt haben.'],
        explanationRu: 'weil вводит причину; глагол haben уходит в конец придаточного.',
      },
      {
        type: 'transform',
        instructionRu: 'Выразите то же самое с помощью trotzdem.',
        prompt: 'Obwohl das Gehalt niedrig ist, nimmt Anna die Stelle an.',
        answers: [
          'Das Gehalt ist niedrig, trotzdem nimmt Anna die Stelle an.',
          'Das Gehalt ist niedrig. Trotzdem nimmt Anna die Stelle an.',
          'Das Gehalt ist niedrig, Anna nimmt die Stelle trotzdem an.',
          'Das Gehalt ist niedrig. Anna nimmt die Stelle trotzdem an.',
        ],
        explanationRu: 'Первая часть становится обычным главным предложением. После trotzdem сразу идёт глагол: trotzdem nimmt Anna …',
      },
    ],
  },
  vocab: [
    { de: 'Gehalt', article: 'das', plural: '-¨er', pos: 'noun', ru: 'зарплата, оклад', example: 'Mit meinem Gehalt bin ich eigentlich zufrieden.', exampleRu: 'Своей зарплатой я, в общем-то, доволен.' },
    { de: 'Überstunde', article: 'die', plural: '-n', pos: 'noun', ru: 'сверхурочный час', example: 'Letzte Woche habe ich zehn Überstunden gemacht.', exampleRu: 'На прошлой неделе я отработал десять сверхурочных часов.' },
    { de: 'Vorgesetzte', article: 'der', plural: '-n', pos: 'noun', ru: 'начальник, руководитель (die Vorgesetzte — начальница)', example: 'Mein Vorgesetzter hat mir mehr Verantwortung gegeben.', exampleRu: 'Мой руководитель дал мне больше ответственности.' },
    { de: 'Besprechung', article: 'die', plural: '-en', pos: 'noun', ru: 'совещание', example: 'Die Besprechung beginnt heute erst um zehn Uhr.', exampleRu: 'Совещание сегодня начинается только в десять часов.' },
    { de: 'Vorstellungsgespräch', article: 'das', plural: '-e', pos: 'noun', ru: 'собеседование', example: 'Für das Vorstellungsgespräch habe ich mich gut vorbereitet.', exampleRu: 'К собеседованию я хорошо подготовился.' },
    { de: 'Arbeitsvertrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'трудовой договор', example: 'Sie hat den Arbeitsvertrag gestern unterschrieben.', exampleRu: 'Она вчера подписала трудовой договор.' },
    { de: 'Teilzeit', article: 'die', plural: '–', pos: 'noun', ru: 'неполный рабочий день', example: 'Seit der Geburt ihres Sohnes arbeitet sie in Teilzeit.', exampleRu: 'После рождения сына она работает неполный день.' },
    { de: 'Fachkraft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'квалифицированный специалист', example: 'In der Pflege fehlen viele Fachkräfte.', exampleRu: 'В сфере ухода не хватает многих специалистов.' },
    { de: 'Kündigung', article: 'die', plural: '-en', pos: 'noun', ru: 'увольнение; заявление об уходе', example: 'Er hat seine Kündigung schriftlich eingereicht.', exampleRu: 'Он подал заявление об увольнении в письменной форме.' },
    { de: 'Arbeitszeit', article: 'die', plural: '-en', pos: 'noun', ru: 'рабочее время', example: 'Wir haben flexible Arbeitszeiten.', exampleRu: 'У нас гибкий график работы.' },
    { de: 'Verantwortung', article: 'die', plural: '-en', pos: 'noun', ru: 'ответственность', example: 'In der neuen Position trägt sie mehr Verantwortung.', exampleRu: 'На новой должности у неё больше ответственности.' },
    { de: 'kündigen', pos: 'verb', ru: 'увольняться; увольнять; расторгать (договор)', example: 'Er hat gekündigt, weil er eine bessere Stelle gefunden hat.', exampleRu: 'Он уволился, потому что нашёл место получше.' },
    { de: 'verdienen', pos: 'verb', ru: 'зарабатывать', example: 'Als Ingenieur verdient man in Deutschland ziemlich gut.', exampleRu: 'Инженер в Германии зарабатывает довольно хорошо.' },
    { de: 'einstellen', forms: 'stellt ein, stellte ein, hat eingestellt', pos: 'verb', ru: 'нанимать на работу', example: 'Die Firma will dieses Jahr zehn neue Mitarbeiter einstellen.', exampleRu: 'В этом году фирма хочет нанять десять новых сотрудников.' },
    { de: 'erledigen', pos: 'verb', ru: 'выполнять, улаживать (дела)', example: 'Ich muss noch ein paar Aufgaben erledigen, dann mache ich Schluss.', exampleRu: 'Мне ещё нужно сделать пару дел, потом я заканчиваю.' },
    { de: 'zuständig', forms: 'für + Akk', pos: 'adj', ru: 'ответственный, компетентный (за что-л.)', example: 'Frau Klein ist für die Urlaubsplanung zuständig.', exampleRu: 'Госпожа Кляйн отвечает за планирование отпусков.' },
    { de: 'befristet', pos: 'adj', ru: 'срочный, ограниченный по времени', example: 'Mein Vertrag ist auf ein Jahr befristet.', exampleRu: 'Мой договор заключён на один год.' },
    { de: 'selbstständig', pos: 'adj', ru: 'самостоятельный; работающий на себя', example: 'Seit zwei Jahren ist mein Bruder als Fotograf selbstständig.', exampleRu: 'Уже два года мой брат работает фотографом на себя.' },
    { de: 'unter Druck stehen', forms: 'stand, hat gestanden', pos: 'phrase', ru: 'находиться под давлением', example: 'Vor dem Projektende stehen alle unter Druck.', exampleRu: 'Перед завершением проекта все под давлением.' },
    { de: 'Feierabend machen', pos: 'phrase', ru: 'заканчивать рабочий день', example: 'Heute mache ich früher Feierabend, weil ich zum Arzt muss.', exampleRu: 'Сегодня я закончу работу раньше, потому что мне нужно к врачу.' },
  ],
  listening: {
    title: 'Podcast „Arbeitswelten“: Warum ich meinen Job gewechselt habe',
    kind: 'monolog',
    text: `Willkommen zu unserem Podcast „Arbeitswelten“. Heute erzählt Dmitri, 34, warum er seinen Job gewechselt hat.

Also, ich habe acht Jahre als Programmierer in einer großen Firma in Frankfurt gearbeitet. Das Gehalt war wirklich gut, trotzdem war ich am Ende nicht mehr zufrieden. Wir hatten ständig Termindruck, und ich habe fast jede Woche Überstunden gemacht. Mein Vorgesetzter hat oft erwartet, dass wir auch am Wochenende E-Mails beantworten. Wenn ich abends Feierabend gemacht habe, war ich einfach nur noch müde. Für meine Familie hatte ich kaum Zeit.

Vor einem Jahr habe ich dann gekündigt, obwohl ich noch keinen neuen Arbeitsvertrag hatte. Meine Frau fand das zuerst ein bisschen verrückt. Aber ich hatte vorher etwas Geld gespart, deshalb hatte ich keine Angst.

Nach zwei Monaten hatte ich ein Vorstellungsgespräch bei einem kleinen Start-up in Darmstadt. Dort bin ich jetzt für die App-Entwicklung zuständig. Ich verdiene etwa zehn Prozent weniger als früher, aber ich arbeite nur noch vier Tage pro Woche, und zwei davon im Homeoffice. Der Vertrag ist zwar auf zwei Jahre befristet, trotzdem fühle ich mich sicher, weil die Firma dringend Fachkräfte sucht.

Was ich gelernt habe? Ein hohes Gehalt ist nicht alles. Ich finde, dass Arbeit auch Spaß machen muss. Wenn man jeden Tag unter Druck steht, wird man irgendwann krank.`,
    questions: [
      { question: 'Wie lange hat Dmitri in Frankfurt gearbeitet?', options: ['Zwei Jahre', 'Vier Jahre', 'Acht Jahre'], answer: 2 },
      {
        question: 'Warum war Dmitri in seinem alten Job unzufrieden?',
        options: [
          'Weil das Gehalt zu niedrig war.',
          'Weil er zu viel arbeiten musste und kaum Zeit für die Familie hatte.',
          'Weil er keine netten Kollegen hatte.',
          'Weil die Firma zu weit weg war.',
        ],
        answer: 1,
      },
      {
        question: 'Warum hatte Dmitri nach der Kündigung keine Angst?',
        options: ['Er hatte Geld gespart.', 'Er hatte schon einen neuen Vertrag.', 'Seine Frau verdient sehr viel Geld.'],
        answer: 0,
      },
      {
        question: 'Was ist im neuen Job anders?',
        options: ['Er verdient mehr als früher.', 'Er arbeitet nur im Büro.', 'Er hat einen unbefristeten Vertrag.', 'Er arbeitet nur vier Tage pro Woche.'],
        answer: 3,
      },
      {
        question: 'Warum fühlt sich Dmitri sicher, obwohl sein Vertrag befristet ist?',
        options: ['Weil sein Chef ein Freund von ihm ist.', 'Weil die Firma dringend Fachkräfte sucht.', 'Weil er viele Überstunden macht.'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Вы хотите один день в неделю работать из дома. Напишите письмо своей руководительнице, госпоже Вебер.',
    taskDe: 'Sie möchten einen Tag pro Woche im Homeoffice arbeiten. Schreiben Sie eine E-Mail an Ihre Vorgesetzte, Frau Weber.',
    points: [
      'Grund für Ihre Bitte',
      'Vorteile für die Firma',
      'wie Sie im Homeoffice erreichbar sind',
      'Vorschlag für ein persönliches Gespräch',
    ],
    minWords: 100,
    usefulPhrases: [
      'Sehr geehrte Frau Weber,',
      'ich möchte Sie fragen, ob ich …',
      'Der Grund dafür ist, dass …',
      'Obwohl ich zu Hause arbeite, bin ich jederzeit per Telefon und E-Mail erreichbar.',
      'Deshalb schlage ich vor, dass wir …',
      'Ich freue mich auf Ihre Antwort. Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'У вас собеседование на должность в отделе обслуживания клиентов логистической компании в Гамбурге.',
    aiRole:
      'Sie sind Frau Hoffmann, Personalleiterin bei einem mittelgroßen Logistikunternehmen in Hamburg. Sie führen ein Vorstellungsgespräch für eine Stelle im Kundenservice und fragen nach Motivation, Stärken, Schwächen, Erfahrungen und Arbeitszeiten. Sprechen Sie höflich und klar auf B1-Niveau und fragen Sie nach, wenn eine Antwort zu kurz ist.',
    opener: 'Guten Tag und herzlich willkommen! Schön, dass Sie da sind. Erzählen Sie doch mal: Warum haben Sie sich bei uns beworben?',
    tasksRu: [
      'Объясните, почему вы хотите получить эту работу (weil …).',
      'Расскажите о своих сильных сторонах (Ich glaube, dass …).',
      'Используйте obwohl или trotzdem, говоря о своей слабой стороне.',
      'Задайте вопрос о рабочем времени или о работе из дома.',
    ],
    readAloud: [
      'Obwohl ich viele Überstunden mache, gefällt mir meine Arbeit.',
      'Ich glaube, dass ich für diese Stelle gut geeignet bin.',
      'Mein Vertrag ist befristet, deshalb suche ich schon jetzt eine neue Stelle.',
    ],
  },
};
