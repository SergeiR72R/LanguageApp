import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-14',
  level: 'A2',
  order: 14,
  title: 'Medien und Kommunikation',
  titleRu: 'СМИ и общение',
  goalsRu: [
    'Вежливо спрашивать с косвенным вопросом: Wissen Sie, wo …? Können Sie mir sagen, ob …?',
    'Говорить, чего вы не знаете: Ich weiß nicht, ob …',
    'Говорить о смартфоне, интернете, сообщениях и письмах',
    'Отправить письмо или посылку на почте, попросить помощи с телефоном',
  ],
  grammar: {
    topic: 'Indirekte Fragen mit ob und W-Wörtern',
    topicRu: 'Косвенные вопросы с ob и вопросительными словами',
    explanationRu: `**Косвенный вопрос** — это вопрос «внутри» другого предложения. По-русски: «Где почта?» → «Вы не знаете, **где** почта?». Немцы часто так спрашивают, потому что это **вежливее**, чем прямой вопрос.

**Начало фразы:** Wissen Sie, … ? / Weißt du, … ? / Können (Könnten) Sie mir sagen, … ? / Ich möchte wissen, … / Ich weiß nicht, …

**1. Вопрос с W-словом** (wo, wann, wie, was, warum, wie viel …). W-слово остаётся, а **спрягаемый глагол уходит в конец** — как после weil и dass:

- Wo **ist** die Post? → Wissen Sie, wo die Post **ist**?
- Wann **kommt** der Brief **an**? → Weißt du, wann der Brief **ankommt**? (отделяемая приставка снова «прилипает» к глаголу)

**2. Вопрос «да/нет»** (без W-слова). Здесь нужен союз **ob** — это русское «**ли**»:

- **Hast** du mein Handy? → Ich weiß nicht, **ob** du mein Handy **hast**. — Я не знаю, у тебя ли мой телефон.
- **Kann** ich hier telefonieren? → Wissen Sie, **ob** ich hier telefonieren **kann**?

**Знаки препинания.** Перед ob и W-словом всегда ставится **запятая**. В конце — вопросительный знак, если вся фраза — вопрос (Wissen Sie, …?), и точка, если это утверждение (Ich weiß nicht, …).

**Типичные ошибки русскоговорящих:**

- Глагол остаётся на 2-м месте: «Wissen Sie, wo **ist** die Post?» ✗ → Wissen Sie, wo die Post **ist**? ✓
- Вместо ob ставят wenn, потому что по-русски «если»: «Ich weiß nicht, wenn er kommt» ✗ → Ich weiß nicht, **ob** er kommt ✓. Запомните: «**ли**» = **ob**.
- Забывают запятую перед ob / wo / wann.`,
    table: [
      ['Direkte Frage', 'Indirekte Frage'],
      ['Wo ist die Post?', 'Wissen Sie, wo die Post ist?'],
      ['Wie viel kostet das Handy?', 'Können Sie mir sagen, wie viel das Handy kostet?'],
      ['Wann ruft er zurück?', 'Ich weiß nicht, wann er zurückruft.'],
      ['Gibt es hier WLAN?', 'Wissen Sie, ob es hier WLAN gibt?'],
      ['Hat sie die Nachricht gelesen?', 'Ich weiß nicht, ob sie die Nachricht gelesen hat.'],
    ],
    examples: [
      { de: 'Wissen Sie, wo ich hier Briefmarken kaufen kann?', ru: 'Вы не знаете, где здесь можно купить марки?' },
      { de: 'Kannst du mir sagen, wie das WLAN-Passwort ist?', ru: 'Ты можешь сказать мне, какой пароль от вай-фая?' },
      { de: 'Ich weiß nicht, ob Oma eine E-Mail-Adresse hat.', ru: 'Я не знаю, есть ли у бабушки адрес электронной почты.' },
      { de: 'Könnten Sie mir sagen, wann die Post aufmacht?', ru: 'Не могли бы вы сказать, когда открывается почта?' },
      { de: 'Ich möchte wissen, wie viel der Brief nach Russland kostet.', ru: 'Я хотел бы узнать, сколько стоит письмо в Россию.' },
      { de: 'Weißt du, warum mein Handy so langsam ist?', ru: 'Ты не знаешь, почему мой телефон такой медленный?' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Wissen Sie, wo ___?',
        options: ['die Post ist', 'ist die Post', 'die Post sein'],
        answer: 0,
        explanationRu: 'В косвенном вопросе спрягаемый глагол (ist) стоит в конце: …, wo die Post ist?',
      },
      {
        type: 'choice',
        prompt: 'Ich weiß nicht, ___ mein Handy wieder funktioniert.',
        options: ['ob', 'wenn', 'weil'],
        answer: 0,
        explanationRu: 'Вопрос «да/нет» (Funktioniert es wieder?) → ob = «ли». wenn = «если/когда», weil = «потому что».',
      },
      {
        type: 'choice',
        prompt: 'Kannst du mir sagen, wann der Film ___?',
        options: ['anfängt', 'fängt an', 'anfangen'],
        answer: 0,
        explanationRu: 'В конце придаточного отделяемый глагол пишется слитно: anfängt.',
      },
      {
        type: 'choice',
        prompt: 'Welcher Satz ist richtig?',
        options: ['Weißt du, ob Lisa heute kommt?', 'Weißt du, ob kommt Lisa heute?', 'Weißt du, ob Lisa kommt heute?'],
        answer: 0,
        explanationRu: 'После ob глагол (kommt) стоит в самом конце: ob Lisa heute kommt.',
      },
      {
        type: 'gap',
        prompt: 'Ich möchte wissen, ___ das neue Handy kostet.',
        answers: ['was', 'wie viel'],
        explanationRu: 'Вопрос о цене: Was/Wie viel kostet das Handy? В косвенном вопросе W-слово остаётся.',
      },
      {
        type: 'gap',
        prompt: 'Ist das WLAN kostenlos? → Ich frage den Kellner, ___ das WLAN kostenlos ist.',
        answers: ['ob'],
        explanationRu: 'Прямой вопрос без W-слова (да/нет) → в косвенном вопросе нужен ob.',
      },
      {
        type: 'gap',
        prompt: 'Wo kann ich Briefmarken kaufen? → Können Sie mir sagen, wo ich Briefmarken kaufen ___?',
        answers: ['kann'],
        explanationRu: 'Модальный глагол kann уходит в самый конец, после инфинитива kaufen.',
      },
      {
        type: 'order',
        words: ['Wissen', 'Sie,', 'wo', 'der', 'Drucker', 'steht?'],
        translationRu: 'Вы не знаете, где стоит принтер?',
        explanationRu: 'Главная часть Wissen Sie, затем запятая, W-слово wo, подлежащее и глагол steht в конце.',
      },
      {
        type: 'order',
        words: ['Ich', 'weiß', 'nicht,', 'ob', 'er', 'meine', 'Nachricht', 'gelesen', 'hat.'],
        translationRu: 'Я не знаю, прочитал ли он моё сообщение.',
        explanationRu: 'После ob вспомогательный глагол hat стоит в самом конце, после Partizip II gelesen.',
      },
      {
        type: 'transform',
        instructionRu: 'Сделайте косвенный вопрос. Начните с «Wissen Sie, …».',
        prompt: 'Wann kommt der Brief an?',
        answers: ['Wissen Sie, wann der Brief ankommt?'],
        explanationRu: 'W-слово wann остаётся, глагол ankommt уходит в конец и пишется слитно.',
      },
      {
        type: 'choice',
        audio: 'Weißt du, ob Peter heute Abend anruft?',
        prompt: 'Что хочет узнать человек?',
        options: ['Позвонит ли Петер сегодня вечером.', 'Когда Петер позвонит.', 'Где сейчас Петер.'],
        answer: 0,
        explanationRu: 'Вы слышите «ob Peter heute Abend anruft» — ob = «ли»: позвонит ли Петер.',
      },
      {
        type: 'gap',
        audio: 'Ich weiß nicht, wo meine Briefmarken sind.',
        prompt: 'Что человек не может найти? Напишите слово по-немецки: ___',
        answers: ['Briefmarken', 'die Briefmarken', 'meine Briefmarken'],
        explanationRu: 'Вы слышите «wo meine Briefmarken sind» — человек не знает, где его марки.',
      },
    ],
  },
  vocab: [
    { de: 'Smartphone', article: 'das', plural: '-s', pos: 'noun', ru: 'смартфон', example: 'Mein Opa hat jetzt auch ein Smartphone.', exampleRu: 'У моего деда теперь тоже есть смартфон.', pronRu: 'СМАРТ-фоун' },
    { de: 'schicken', forms: 'schickt, hat geschickt', pos: 'verb', ru: 'отправлять, посылать', example: 'Kannst du mir die Fotos schicken?', exampleRu: 'Можешь прислать мне фотографии?' },
    { de: 'Anrufbeantworter', article: 'der', plural: '-', pos: 'noun', ru: 'автоответчик', example: 'Bitte sprechen Sie auf den Anrufbeantworter.', exampleRu: 'Пожалуйста, оставьте сообщение на автоответчике.', pronRu: 'АН-руф-бэ-ант-вор-та' },
    { de: 'erreichen', forms: 'erreicht, hat erreicht', pos: 'verb', ru: 'дозвониться, связаться; достичь', example: 'Ich habe dich gestern nicht erreicht.', exampleRu: 'Я вчера не смог до тебя дозвониться.', pronRu: 'эр-РАЙ-хьен' },
    { de: 'herunterladen', forms: 'lädt herunter, hat heruntergeladen', pos: 'verb', ru: 'скачивать, загружать', example: 'Ich habe die App gestern heruntergeladen.', exampleRu: 'Я вчера скачал это приложение.', pronRu: 'хэ-РУН-та-ла:-дэн' },
    { de: 'App', article: 'die', plural: '-s', pos: 'noun', ru: 'приложение (на телефоне)', example: 'Mit dieser App kann man Bustickets kaufen.', exampleRu: 'С этим приложением можно покупать билеты на автобус.', pronRu: 'ЭП' },
    { de: 'Passwort', article: 'das', plural: '-¨er', pos: 'noun', ru: 'пароль', example: 'Ich habe mein Passwort vergessen.', exampleRu: 'Я забыл свой пароль.', pronRu: 'ПАС-ворт' },
    { de: 'WLAN', article: 'das', plural: '-s', pos: 'noun', ru: 'вай-фай, беспроводной интернет', example: 'Gibt es in diesem Café WLAN?', exampleRu: 'В этом кафе есть вай-фай?', pronRu: 'ВЭ:-лан' },
    { de: 'Bildschirm', article: 'der', plural: '-e', pos: 'noun', ru: 'экран', example: 'Der Bildschirm von meinem Handy ist kaputt.', exampleRu: 'Экран моего телефона разбит.', pronRu: 'БИЛЬТ-ширм' },
    { de: 'speichern', forms: 'speichert, hat gespeichert', pos: 'verb', ru: 'сохранять', example: 'Hast du die Telefonnummer gespeichert?', exampleRu: 'Ты сохранил номер телефона?', pronRu: 'ШПАЙ-хьерн' },
    { de: 'ausdrucken', forms: 'druckt aus, hat ausgedruckt', pos: 'verb', ru: 'распечатать', example: 'Könntest du mir die Fahrkarte ausdrucken?', exampleRu: 'Ты не мог бы распечатать мне билет?' },
    { de: 'Brief', article: 'der', plural: '-e', pos: 'noun', ru: 'письмо', example: 'Heute habe ich einen Brief von der Bank bekommen.', exampleRu: 'Сегодня я получил письмо из банка.' },
    { de: 'Briefmarke', article: 'die', plural: '-n', pos: 'noun', ru: 'почтовая марка', example: 'Für den Brief brauche ich noch eine Briefmarke.', exampleRu: 'Для письма мне ещё нужна марка.', pronRu: 'БРИ:Ф-мар-кэ' },
    { de: 'Umschlag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'конверт', example: 'Schreiben Sie die Adresse auf den Umschlag.', exampleRu: 'Напишите адрес на конверте.', pronRu: 'УМ-шла:к' },
    { de: 'Absender', article: 'der', plural: '-', pos: 'noun', ru: 'отправитель', example: 'Auf dem Brief steht kein Absender.', exampleRu: 'На письме не указан отправитель.', pronRu: 'АП-зэн-да' },
    { de: 'Empfänger', article: 'der', plural: '-', pos: 'noun', ru: 'получатель', example: 'Der Empfänger war leider nicht zu Hause.', exampleRu: 'Получателя, к сожалению, не было дома.', pronRu: 'эм-ПФЭН-га' },
    { de: 'Zeitschrift', article: 'die', plural: '-en', pos: 'noun', ru: 'журнал', example: 'Beim Arzt lese ich gern Zeitschriften.', exampleRu: 'У врача я люблю читать журналы.', pronRu: 'ЦАЙТ-шрифт' },
    { de: 'Sendung', article: 'die', plural: '-en', pos: 'noun', ru: 'передача (по ТВ, радио); почтовое отправление', example: 'Um acht Uhr kommt eine Sendung über Russland.', exampleRu: 'В восемь часов будет передача о России.', pronRu: 'ЗЭН-дунг' },
    { de: 'Akku', article: 'der', plural: '-s', pos: 'noun', ru: 'аккумулятор (телефона)', example: 'Mein Akku ist fast leer.', exampleRu: 'У меня почти сел аккумулятор.', pronRu: 'А-ку' },
    { de: 'Ladegerät', article: 'das', plural: '-e', pos: 'noun', ru: 'зарядное устройство', example: 'Hast du ein Ladegerät für mein Handy?', exampleRu: 'У тебя есть зарядка для моего телефона?', pronRu: 'ЛА:-дэ-гэ-рэ:т' },
  ],
  listening: {
    title: 'Opa hat ein neues Smartphone',
    kind: 'dialog',
    text: `A: Max, hast du kurz Zeit? Ich habe ein Problem mit meinem neuen Smartphone.
B: Klar, Opa. Was ist denn los?
A: Ich möchte Fotos an Tante Olga schicken. Aber ich weiß nicht, wie das geht.
B: Kein Problem. Weißt du, ob Tante Olga die gleiche App hat?
A: Ich glaube, ja. Sie hat mir gestern eine Nachricht geschrieben.
B: Super. Dann öffnest du die App und klickst auf ihren Namen. Siehst du das kleine Bild hier unten? Da klickst du und wählst die Fotos.
A: Ah, das ist ja einfach! Kannst du mir auch sagen, warum mein Akku immer so schnell leer ist?
B: Du hast zu viele Apps offen. Du solltest sie schließen.
A: Aha. Und noch eine Frage: Ich habe ein neues Passwort für das WLAN bekommen. Weißt du, wo ich es eingeben muss?
B: Zeig mal. Hier, bei den Einstellungen. Fertig! Jetzt bist du wieder online.
A: Danke, Max! Was würde ich nur ohne dich machen?`,
    questions: [
      { question: 'Was möchte der Opa machen?', options: ['Fotos schicken.', 'Ein Handy kaufen.', 'Tante Olga anrufen.'], answer: 0 },
      { question: 'Was hat Tante Olga gestern gemacht?', options: ['Sie hat angerufen.', 'Sie hat eine Nachricht geschrieben.', 'Sie hat Fotos geschickt.'], answer: 1 },
      { question: 'Warum ist der Akku so schnell leer?', options: ['Das Handy ist sehr alt.', 'Viele Apps sind offen.', 'Das WLAN ist kaputt.'], answer: 1 },
      { question: 'Was hat der Opa bekommen?', options: ['Ein neues WLAN-Passwort.', 'Eine neue App.', 'Einen neuen Akku.'], answer: 0 },
      { question: 'Wo muss man das Passwort eingeben?', options: ['In der Foto-App.', 'Bei den Einstellungen.', 'Auf dem Bildschirm von Max.'], answer: 1 },
    ],
  },
  writing: {
    taskRu:
      'Вы хотите пойти на компьютерный курс для начинающих в народном университете (Volkshochschule). Напишите туда e-mail (45–70 слов). Задайте вопросы вежливо — косвенными вопросами: Könnten Sie mir sagen, wann …? Ich möchte gern wissen, ob …',
    taskDe:
      'Sie möchten einen Computerkurs für Anfänger an der Volkshochschule machen. Schreiben Sie eine E-Mail und fragen Sie nach Informationen.',
    points: [
      'Wann beginnt der Kurs und wie lange dauert er?',
      'Wie viel kostet der Kurs?',
      'Muss man einen eigenen Laptop mitbringen?',
    ],
    minWords: 45,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'ich interessiere mich für Ihren Computerkurs.',
      'Könnten Sie mir bitte sagen, wann …?',
      'Ich möchte gern wissen, wie viel …',
      'Außerdem möchte ich fragen, ob …',
      'Vielen Dank für Ihre Antwort.',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы в магазине мобильных телефонов. Вам нужен простой смартфон и недорогой тариф. Расспросите продавца — вежливо, с косвенными вопросами.',
    aiRole:
      'Sie sind Verkäuferin in einem Handygeschäft. Der Kunde sucht ein einfaches Smartphone. Ihre Angebote: Modell „Nova“ für 189 Euro (großer Bildschirm, gute Kamera, der Akku hält zwei Tage) und Modell „Mini“ für 129 Euro (kleiner, die Kamera ist nicht so gut). Prepaid-Karte: 10 Euro im Monat mit 5 GB Internet, man kann jeden Monat kündigen. Sprechen Sie sehr einfach (Niveau A2), in kurzen Sätzen. Seien Sie freundlich und geduldig. Wenn der Kunde ein Wort nicht weiß, helfen Sie ihm. Stellen Sie auch selbst Fragen, z. B. was der Kunde mit dem Handy machen möchte.',
    opener: 'Hallo! Kann ich Ihnen helfen?',
    tasksRu: [
      'Скажите, что вы ищете простой смартфон',
      'Спросите косвенным вопросом, сколько он стоит (Können Sie mir sagen, wie viel …?)',
      'Узнайте, хорошая ли у телефона камера (Ich möchte wissen, ob …)',
      'Спросите про тариф и интернет и скажите, что вы выбираете',
    ],
    readAloud: [
      'Wissen Sie, wo die Post ist?',
      'Ich weiß nicht, ob er zu Hause ist.',
      'Können Sie mir sagen, wie viel das kostet?',
      'Mein Akku ist fast leer.',
    ],
  },
};
