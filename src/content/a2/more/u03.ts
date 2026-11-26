import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich bin müde, weil ich viel ___ habe.',
      options: ['gearbeitet', 'arbeite', 'arbeiten'],
      answer: 0,
      explanationRu: 'Перфект в придаточном: Partizip II (gearbeitet) + habe в самом конце.',
    },
    {
      type: 'choice',
      audio: 'Warum lernst du Deutsch? – Weil ich in Deutschland lebe.',
      prompt: 'Почему человек учит немецкий?',
      options: ['Он живёт в Германии.', 'Он хочет поехать в Германию.', 'Его жена — немка.'],
      answer: 0,
      explanationRu: '«Weil ich in Deutschland lebe» — потому что он живёт в Германии.',
    },
    {
      type: 'choice',
      prompt: '___ bist du so glücklich? – Weil mein Enkel heute kommt.',
      options: ['Warum', 'Wo', 'Wann'],
      answer: 0,
      explanationRu: 'Ответ начинается с weil — это причина. Вопрос о причине — warum? («почему?»).',
    },
    {
      type: 'choice',
      prompt: 'Er kommt nicht zur Party, ___ er ist krank.',
      options: ['denn', 'weil', 'warum'],
      answer: 0,
      explanationRu: 'Глагол ist стоит на 2-м месте после подлежащего — это порядок слов после denn.',
    },
    {
      type: 'choice',
      prompt: 'Er kommt nicht zur Party, weil er krank ___.',
      options: ['ist', 'sein', 'bist'],
      answer: 0,
      explanationRu: 'После weil глагол в конце и спрягается: er ist.',
    },
    {
      type: 'choice',
      prompt: 'Какое предложение правильное?',
      options: [
        'Wir können nicht kommen, weil wir arbeiten müssen.',
        'Wir können nicht kommen, weil wir müssen arbeiten.',
        'Wir können nicht kommen, weil müssen wir arbeiten.',
      ],
      answer: 0,
      explanationRu: 'В придаточном модальный глагол стоит в самом конце, после инфинитива: arbeiten müssen.',
    },
    {
      type: 'gap',
      prompt: 'Meine Mutter ist traurig, weil ich nicht oft ___.',
      answers: ['anrufe'],
      hintRu: 'anrufen',
      explanationRu: 'Отделяемый глагол в конце придаточного пишется слитно: weil ich nicht oft anrufe.',
    },
    {
      type: 'gap',
      prompt: 'Ich kann nicht schlafen, weil die Nachbarn laut ___.',
      answers: ['streiten'],
      hintRu: 'streiten',
      explanationRu: 'Подлежащее die Nachbarn («они») → streiten. Глагол стоит в конце придаточного.',
    },
    {
      type: 'gap',
      prompt: 'Sie haben früh geheiratet, weil sie sehr verliebt ___.',
      answers: ['waren'],
      hintRu: 'sein, прошедшее время',
      explanationRu: 'Речь о прошлом → претерит от sein: sie waren. Глагол стоит в конце.',
    },
    {
      type: 'gap',
      prompt: 'Ich bin froh, weil meine Tochter die Prüfung bestanden ___.',
      answers: ['hat'],
      explanationRu: 'bestehen образует перфект с haben. В придаточном вспомогательный глагол hat стоит последним.',
    },
    {
      type: 'gap',
      audio: 'Hochzeit',
      prompt: 'Напишите слово, которое слышите: ___',
      answers: ['Hochzeit'],
      explanationRu: 'die Hochzeit — свадьба. ch после o читается как «х», z — как «ц».',
    },
    {
      type: 'gap',
      audio: 'Mein Sohn kommt nicht, weil er in Moskau arbeiten muss.',
      prompt: 'Где должен работать сын? Напишите город: ___',
      answers: ['Moskau', 'in Moskau'],
      explanationRu: '«weil er in Moskau arbeiten muss» — сын должен работать в Москве.',
    },
    {
      type: 'order',
      words: ['Ich', 'vermisse', 'dich,', 'weil', 'du', 'weit weg', 'wohnst.'],
      translationRu: 'Я скучаю по тебе, потому что ты живёшь далеко.',
      explanationRu: 'После weil: подлежащее du, потом остальные слова, а глагол wohnst — в самом конце.',
    },
    {
      type: 'order',
      words: ['Weil', 'es', 'regnet,', 'bleiben', 'wir', 'zu Hause.'],
      translationRu: 'Так как идёт дождь, мы остаёмся дома.',
      explanationRu: 'Придаточное стоит первым, поэтому главное предложение начинается с глагола: bleiben wir.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью weil.',
      prompt: 'Wir besuchen Oma. Sie hat Geburtstag.',
      answers: ['Wir besuchen Oma, weil sie Geburtstag hat.'],
      explanationRu: 'Причина — второе предложение. После weil глагол hat уходит в конец.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените denn на weil.',
      prompt: 'Ich bleibe zu Hause, denn ich muss arbeiten.',
      answers: ['Ich bleibe zu Hause, weil ich arbeiten muss.'],
      explanationRu: 'После weil модальный глагол muss стоит в самом конце, после инфинитива arbeiten.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью weil.',
      prompt: 'Er ist glücklich. Er hat eine Freundin gefunden.',
      answers: ['Er ist glücklich, weil er eine Freundin gefunden hat.'],
      explanationRu: 'Перфект в придаточном: …gefunden hat — вспомогательный глагол стоит последним.',
    },
    {
      type: 'gap',
      prompt: 'Повторение (претерит). Als Kind ___ ich nicht allein in die Stadt fahren.',
      answers: ['durfte'],
      hintRu: 'dürfen',
      explanationRu: 'dürfen → ich durfte: умлаут исчезает, у ich нет окончания.',
    },
    {
      type: 'choice',
      prompt: 'Повторение (перфект). Wir ___ 2010 nach Köln gezogen.',
      options: ['sind', 'haben', 'hat'],
      answer: 0,
      explanationRu: 'ziehen (переезжать) — движение, поэтому перфект с sein: wir sind gezogen.',
    },
    {
      type: 'choice',
      prompt: 'Повторение A1. Das ist ___ Frau. Sie heißt Ljuba.',
      options: ['meine', 'mein', 'meinen'],
      answer: 0,
      explanationRu: 'die Frau — женский род, именительный падеж → meine Frau.',
    },
  ],
  reading: [
    {
      title: 'Eine E-Mail von Rita',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Swetlana,

vielen Dank für deine E-Mail! Entschuldige, ich antworte erst heute, weil ich so viel zu tun hatte. Und jetzt kommt die Neuigkeit: Ich heirate! Du kennst doch Klaus aus meinem Tanzkurs. Ich habe ihn vor zwei Jahren dort kennengelernt. Seit einem Jahr leben wir schon zusammen, und im Juli ist die Hochzeit.

Meine Kinder finden das toll. Nur meine Mutter ist ein bisschen skeptisch, weil Klaus schon zweimal geschieden ist. Aber ich weiß: Klaus ist der Mann für mich!

Wir feiern am 12. Juli im Garten von meinem Sohn. Kannst du kommen? Ich möchte dich unbedingt dabeihaben, denn wir sind schon seit dreißig Jahren Freundinnen. Bitte antworte mir bis Ende Mai.

Viele Grüße und bis bald
deine Rita`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Warum schreibt Rita erst heute?', options: ['Sie war krank.', 'Sie hatte viel zu tun.', 'Sie war im Urlaub.'], answer: 1, explanationRu: '«weil ich so viel zu tun hatte» — у неё было много дел.' },
            { kind: 'mc', question: 'Woher kennt Rita Klaus?', options: ['Aus dem Tanzkurs', 'Von der Arbeit', 'Von ihrem Sohn'], answer: 0, explanationRu: '«Du kennst doch Klaus aus meinem Tanzkurs».' },
            { kind: 'mc', question: 'Warum ist Ritas Mutter skeptisch?', options: ['Klaus ist zu alt.', 'Klaus war schon zweimal verheiratet.', 'Klaus hat keine Arbeit.'], answer: 1, explanationRu: '«weil Klaus schon zweimal geschieden ist» — если он дважды разведён, значит, дважды был женат.' },
            { kind: 'mc', question: 'Wo ist die Hochzeitsfeier?', options: ['In einem Restaurant', 'Im Garten von Ritas Sohn', 'Bei Swetlana'], answer: 1, explanationRu: '«Wir feiern am 12. Juli im Garten von meinem Sohn».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Rita und Klaus wohnen noch nicht zusammen.', answer: false, explanationRu: '«Seit einem Jahr leben wir schon zusammen» — они уже год живут вместе.' },
          ],
        },
      ],
    },
    {
      title: 'Familienanzeigen in der Zeitung',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Wir haben geheiratet!', body: 'Anna und Michael Kraus. Wir danken allen Freunden und Verwandten für die Geschenke und Glückwünsche. Bonn, im Juni' },
        { label: 'b', heading: 'Goldene Hochzeit', body: 'Vor 50 Jahren haben Gerda und Horst Lehmann geheiratet. Am Samstag feiern sie mit ihren drei Kindern und sieben Enkelkindern. Herzlichen Glückwunsch!' },
        { label: 'c', heading: 'Hallo, Welt!', body: 'Unser Sohn Leon ist am 3. März um 6:15 Uhr geboren. Er wiegt 3400 Gramm. Wir sind sehr glücklich! Julia und Tobias Wendt' },
        { label: 'd', heading: 'Partnersuche', body: 'Witwer, 67, Nichtraucher, sucht eine Partnerin für Spaziergänge, Gespräche und Reisen. Ich lebe allein und möchte nicht mehr einsam sein. Telefon: 0170 228 73 11' },
        { label: 'e', heading: 'Familientreffen', body: 'Liebe Familie Bauer! Unser Familientreffen ist dieses Jahr am 20. August im Gasthaus „Zur Linde“. Bitte ruft bis zum 1. Juli Tante Erika an.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine passende Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит к ситуации? Для одной ситуации подходящего объявления нет.',
          options: ['a', 'b', 'c', 'd', 'e'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Sie möchten wissen, wann das Baby von Ihren Nachbarn geboren ist.', answer: 2, explanationRu: 'В объявлении c сообщают о рождении сына Леона 3 марта.' },
            { kind: 'match', prompt: 'Ihr Onkel lebt allein und möchte eine Frau kennenlernen.', answer: 3, explanationRu: 'В объявлении d вдовец ищет спутницу жизни — можно позвонить по этому номеру.' },
            { kind: 'match', prompt: 'Sie möchten wissen: Wer ist seit 50 Jahren verheiratet?', answer: 1, explanationRu: 'Золотая свадьба — 50 лет брака (объявление b).' },
            { kind: 'match', prompt: 'Sie sind eine Cousine von Erika Bauer und möchten wissen, wann das Treffen ist.', answer: 4, explanationRu: 'В объявлении e: встреча семьи Бауэр 20 августа.' },
            { kind: 'match', prompt: 'Sie suchen einen Babysitter für Ihre Kinder.', answer: -1, explanationRu: 'Ни одно объявление не предлагает няню. Подходящего объявления нет.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Fünfzig Jahre verheiratet',
      kind: 'monolog',
      situation: 'Ein Mann erzählt im Radio von seiner Ehe.',
      text: `Mein Name ist Karl Weber, ich bin 74 Jahre alt. Am Sonntag feiern meine Frau Helga und ich Goldene Hochzeit. Ich habe Helga 1972 beim Tanzen kennengelernt. Ein Jahr später haben wir geheiratet, weil wir sehr verliebt waren – und weil Helga schon ein Kind erwartet hat! Unsere Ehe war nicht immer leicht. Wir hatten wenig Geld, und manchmal haben wir auch gestritten. Aber wir haben immer wieder miteinander gesprochen. Das ist sehr wichtig. Heute haben wir drei Kinder und sechs Enkelkinder. Zum Fest kommen alle, auch unser Sohn aus Amerika. Ihn sehen wir nur selten, weil der Flug so teuer ist. Wir sind sehr glücklich.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie den Text. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прослушайте текст. Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was feiern Karl und Helga am Sonntag?', options: ['Ihre Goldene Hochzeit', 'Karls Geburtstag', 'Die Hochzeit von ihrem Sohn'], answer: 0, explanationRu: '«Am Sonntag feiern meine Frau Helga und ich Goldene Hochzeit» — 50 лет брака.' },
            { kind: 'mc', question: 'Warum haben sie 1973 geheiratet?', options: ['Sie hatten viel Geld.', 'Sie waren verliebt und Helga war schwanger.', 'Ihre Eltern wollten es.'], answer: 1, explanationRu: '«weil wir sehr verliebt waren – und weil Helga schon ein Kind erwartet hat» (ein Kind erwarten = быть беременной).' },
            { kind: 'mc', question: 'Warum sehen sie ihren Sohn nur selten?', options: ['Er hat keine Zeit.', 'Der Flug ist teuer.', 'Er ist krank.'], answer: 1, explanationRu: '«weil der Flug so teuer ist» — перелёт из Америки дорогой.' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Karl sagt: Die Ehe war immer leicht.', answer: false, explanationRu: '«Unsere Ehe war nicht immer leicht» — было мало денег, иногда ссорились.' },
          ],
        },
      ],
    },
    {
      title: 'Wir kommen am Sonntag nicht',
      kind: 'dialog',
      speakers: { A: 'Andrej', B: 'seine Mutter' },
      situation: 'Andrej ruft seine Mutter an.',
      text: `A: Hallo Mama, hier ist Andrej.
B: Hallo, mein Schatz! Na, kommt ihr am Sonntag zum Essen?
A: Leider nicht, Mama. Mascha ist krank, sie hat Fieber.
B: Oh nein! Was hat sie denn?
A: Eine Grippe, glaube ich. Wir waren heute beim Arzt. Sie muss im Bett bleiben.
B: Das tut mir leid. Und die Kinder?
A: Die Kinder sind gesund. Aber ich muss zu Hause bleiben, weil Mascha nicht kochen kann.
B: Soll ich vorbeikommen und helfen? Ich kann Suppe kochen!
A: Das ist lieb, Mama, aber das geht schon. Wir kommen dann nächsten Sonntag, okay?
B: Gut. Gute Besserung für Mascha!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie das Gespräch. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прослушайте разговор. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Andrej und seine Familie kommen am Sonntag zum Essen.', answer: false, explanationRu: '«Leider nicht, Mama» — в это воскресенье они не придут.' },
            { kind: 'tf', statement: 'Mascha ist krank.', answer: true, explanationRu: '«Mascha ist krank, sie hat Fieber».' },
            { kind: 'tf', statement: 'Die Kinder sind auch krank.', answer: false, explanationRu: '«Die Kinder sind gesund» — дети здоровы.' },
            { kind: 'tf', statement: 'Andrejs Mutter möchte helfen.', answer: true, explanationRu: '«Soll ich vorbeikommen und helfen? Ich kann Suppe kochen!»' },
            { kind: 'tf', statement: 'Die Familie kommt nächsten Sonntag.', answer: true, explanationRu: '«Wir kommen dann nächsten Sonntag» — в следующее воскресенье.' },
          ],
        },
      ],
    },
  ],
};
