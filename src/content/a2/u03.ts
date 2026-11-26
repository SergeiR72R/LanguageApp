import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-03',
  level: 'A2',
  order: 3,
  title: 'Familie und Beziehungen',
  titleRu: 'Семья и отношения',
  goalsRu: [
    'Рассказывать о семейном положении, браке, детях и внуках',
    'Объяснять причины с помощью weil и denn',
    'Правильно ставить глагол в конец придаточного предложения',
    'Понимать разговоры и письма о семейных новостях',
  ],
  grammar: {
    topic: 'Nebensätze mit weil; denn oder weil?',
    topicRu: 'Придаточные предложения с weil; denn или weil?',
    explanationRu: `Чтобы объяснить причину (ответить на вопрос **warum?** — «почему?»), в немецком есть два союза: **denn** и **weil**. Оба значат «потому что», но порядок слов после них разный.

**denn** вы уже знаете. После него обычный порядок слов: глагол на 2-м месте.

- Ich bleibe zu Hause, **denn** ich **bin** krank.

**weil** начинает **придаточное предложение** (Nebensatz) — это часть предложения, которая не может стоять одна. В придаточном спрягаемый глагол уходит в **самый конец**:

- Ich bleibe zu Hause, **weil** ich krank **bin**.
- Meine Tochter ruft oft an, **weil** sie mich **vermisst**.

Перед weil и denn всегда ставится **запятая**.

**Если глаголов два**, в самом конце стоит спрягаемый глагол, а перед ним — инфинитив или Partizip II:

- …, weil ich heute arbeiten **muss**. (модальный глагол)
- …, weil wir sehr jung geheiratet **haben**. (перфект)
- …, weil er jeden Tag früh **aufsteht**. (отделяемый глагол снова пишется **слитно**!)

**Ответ на вопрос «Warum?»** часто начинается прямо с weil:
— Warum lernst du Deutsch? — **Weil** meine Enkel in Berlin **wohnen**.

**Придаточное может стоять первым.** Тогда главное предложение начинается с глагола: **Weil** ich krank **war**, **konnte** ich nicht kommen. (глагол — запятая — глагол)

**denn или weil?** По смыслу одно и то же. Но с **denn** нельзя начинать ответ или предложение, а с **weil** можно.

**Типичные ошибки русскоговорящих:**

- «…, weil ich habe keine Zeit» → …, weil ich keine Zeit **habe**. (В разговоре немцы иногда так говорят, но на экзамене это ошибка.)
- «…, denn ich keine Zeit habe» → после denn глагол на 2-м месте: denn ich **habe** keine Zeit.
- забывают запятую перед weil;
- «weil er steht früh auf» → weil er früh **aufsteht**.`,
    table: [
      ['Тип', 'Главное предложение', 'Союз', 'Вторая часть'],
      ['denn', 'Ich komme nicht,', 'denn', 'ich habe keine Zeit.'],
      ['weil', 'Ich komme nicht,', 'weil', 'ich keine Zeit habe.'],
      ['weil + модальный глагол', 'Ich komme nicht,', 'weil', 'ich arbeiten muss.'],
      ['weil + перфект', 'Ich bin müde,', 'weil', 'ich schlecht geschlafen habe.'],
      ['weil + отделяемый глагол', 'Er ist müde,', 'weil', 'er früh aufsteht.'],
    ],
    examples: [
      { de: 'Ich besuche meine Eltern oft, weil sie allein leben.', ru: 'Я часто навещаю родителей, потому что они живут одни.' },
      { de: 'Wir haben früh geheiratet, weil wir sehr verliebt waren.', ru: 'Мы рано поженились, потому что были очень влюблены.' },
      { de: 'Meine Frau ist traurig, weil unsere Kinder weit weg wohnen.', ru: 'Моя жена грустит, потому что наши дети живут далеко.' },
      { de: 'Er konnte nicht zur Hochzeit kommen, weil er krank war.', ru: 'Он не смог прийти на свадьбу, потому что был болен.' },
      { de: 'Weil mein Sohn in Berlin arbeitet, sehe ich ihn nur selten.', ru: 'Так как мой сын работает в Берлине, я вижу его лишь изредка.' },
      { de: 'Ich rufe meine Schwester an, denn sie hat heute Geburtstag.', ru: 'Я звоню сестре, потому что у неё сегодня день рождения.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Ich komme heute nicht, weil ich keine Zeit ___.',
        options: ['habe', 'hast', 'hat'],
        answer: 0,
        explanationRu: 'После weil спрягаемый глагол стоит в конце. Подлежащее ich → habe.',
      },
      {
        type: 'choice',
        prompt: 'Какое предложение правильное?',
        options: [
          'Ich lerne Deutsch, weil meine Enkel sprechen Deutsch.',
          'Ich lerne Deutsch, weil meine Enkel Deutsch sprechen.',
          'Ich lerne Deutsch, weil sprechen meine Enkel Deutsch.',
        ],
        answer: 1,
        explanationRu: 'В придаточном с weil глагол (sprechen) стоит в самом конце.',
      },
      {
        type: 'choice',
        prompt: 'Wir feiern heute, ___ wir vierzig Jahre verheiratet sind.',
        options: ['weil', 'denn', 'aber'],
        answer: 0,
        explanationRu: 'Глагол sind стоит в конце — значит, это придаточное с weil. После denn было бы: denn wir sind …',
      },
      {
        type: 'choice',
        prompt: 'Er ist müde, ___ er hat schlecht geschlafen.',
        options: ['denn', 'weil', 'warum'],
        answer: 0,
        explanationRu: 'Глагол hat стоит на 2-м месте после подлежащего — это порядок слов после denn.',
      },
      {
        type: 'choice',
        audio: 'Sie ist glücklich, weil ihr Sohn heiratet.',
        prompt: 'Почему женщина счастлива?',
        options: ['Её сын женится.', 'Её сын разводится.', 'Её сын приезжает в гости.'],
        answer: 0,
        explanationRu: '«weil ihr Sohn heiratet» — потому что её сын женится.',
      },
      {
        type: 'gap',
        prompt: 'Ich rufe meine Mutter jeden Tag an, weil sie allein ___.',
        answers: ['lebt', 'wohnt'],
        explanationRu: 'Глагол в конце придаточного: weil sie allein lebt (или wohnt).',
      },
      {
        type: 'gap',
        prompt: 'Wir kommen später, weil wir noch einkaufen ___.',
        answers: ['müssen'],
        explanationRu: 'Модальный глагол стоит в самом конце, после инфинитива: einkaufen müssen.',
      },
      {
        type: 'gap',
        prompt: 'Sie ist traurig, weil ihr Mann nicht ___ ist.',
        answers: ['gekommen'],
        hintRu: 'kommen',
        explanationRu: 'Перфект в придаточном: Partizip II (gekommen) + вспомогательный глагол (ist) в самом конце.',
      },
      {
        type: 'gap',
        audio: 'Ich vermisse meine Enkelkinder, weil sie in Kanada wohnen.',
        prompt: 'Где живут внуки? Напишите страну: ___',
        answers: ['Kanada', 'in Kanada'],
        explanationRu: '«weil sie in Kanada wohnen» — внуки живут в Канаде.',
      },
      {
        type: 'order',
        words: ['Ich', 'bin', 'glücklich,', 'weil', 'meine', 'Tochter', 'kommt.'],
        translationRu: 'Я счастлив, потому что приезжает моя дочь.',
        explanationRu: 'Главное предложение, запятая, weil, подлежащее, а спрягаемый глагол kommt — в самом конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Соедините предложения с помощью weil.',
        prompt: 'Ich bleibe zu Hause. Ich bin krank.',
        answers: ['Ich bleibe zu Hause, weil ich krank bin.'],
        explanationRu: 'Второе предложение — причина. После weil глагол bin уходит в конец. Не забудьте запятую.',
      },
      {
        type: 'transform',
        instructionRu: 'Замените denn на weil.',
        prompt: 'Sie streiten oft, denn sie haben wenig Geld.',
        answers: ['Sie streiten oft, weil sie wenig Geld haben.'],
        explanationRu: 'После denn глагол на 2-м месте, после weil — в конце: weil sie wenig Geld haben.',
      },
    ],
  },
  vocab: [
    { de: 'Ehepaar', article: 'das', plural: '-e', pos: 'noun', ru: 'супружеская пара', example: 'Neben uns wohnt ein Ehepaar aus Polen.', exampleRu: 'Рядом с нами живёт супружеская пара из Польши.', pronRu: 'дас Е:-э-па:р' },
    { de: 'Ehepartner', article: 'der', plural: '-', pos: 'noun', ru: 'супруг (муж или жена)', example: 'Bitte bringen Sie Ihren Ehepartner mit.', exampleRu: 'Пожалуйста, приходите вместе с супругом.', pronRu: 'дер Е:-э-парт-на' },
    { de: 'Scheidung', article: 'die', plural: '-en', pos: 'noun', ru: 'развод', example: 'Nach der Scheidung ist er nach Bremen gezogen.', exampleRu: 'После развода он переехал в Бремен.', pronRu: 'ди ШАЙ-дунг' },
    { de: 'verwitwet', pos: 'adj', ru: 'овдовевший, вдовый', example: 'Mein Nachbar ist verwitwet und lebt allein.', exampleRu: 'Мой сосед — вдовец и живёт один.', pronRu: 'фэр-ВИТ-вэт' },
    { de: 'Trennung', article: 'die', plural: '-en', pos: 'noun', ru: 'расставание', example: 'Die Trennung war für die Kinder schwer.', exampleRu: 'Расставание было тяжёлым для детей.', pronRu: 'ди ТРЭ-нунг' },
    { de: 'Ehe', article: 'die', plural: '-n', pos: 'noun', ru: 'брак, супружество', example: 'Ihre Ehe war sehr glücklich.', exampleRu: 'Их брак был очень счастливым.', pronRu: 'ди Е:-э' },
    { de: 'Schwiegersohn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'зять (муж дочери)', example: 'Unser Schwiegersohn kommt aus Italien.', exampleRu: 'Наш зять из Италии.', pronRu: 'дер ШВИ:-гэ-зо:н' },
    { de: 'Schwiegertochter', article: 'die', plural: '-¨', pos: 'noun', ru: 'невестка, сноха (жена сына)', example: 'Meine Schwiegertochter kocht sehr gut.', exampleRu: 'Моя невестка очень хорошо готовит.', pronRu: 'ди ШВИ:-гэ-тох-та' },
    { de: 'Beziehung', article: 'die', plural: '-en', pos: 'noun', forms: 'zu + Dat', ru: 'отношения', example: 'Meine Beziehung zu meinem Bruder ist sehr gut.', exampleRu: 'У меня очень хорошие отношения с братом.', pronRu: 'ди бэ-ЦИ:-унг' },
    { de: 'verliebt', pos: 'adj', forms: 'in + Akk', ru: 'влюблённый', example: 'Mein Enkel ist zum ersten Mal verliebt.', exampleRu: 'Мой внук впервые влюблён.', pronRu: 'фэр-ЛИ:ПТ' },
    { de: 'kennenlernen', forms: 'lernt kennen, hat kennengelernt', pos: 'verb', ru: 'знакомиться, познакомиться (с кем-то)', example: 'Ich habe meine Frau im Urlaub kennengelernt.', exampleRu: 'Я познакомился с женой в отпуске.', pronRu: 'КЭ-нэн-лэр-нэн' },
    { de: 'zusammenleben', forms: 'lebt zusammen, hat zusammengelebt', pos: 'verb', ru: 'жить вместе', example: 'Mein Sohn und seine Freundin leben schon zusammen.', exampleRu: 'Мой сын и его девушка уже живут вместе.', pronRu: 'цу-ЗА-мэн-ле-бэн' },
    { de: 'streiten', forms: 'streitet, hat gestritten', pos: 'verb', ru: 'ссориться, спорить', example: 'Meine Enkel streiten oft.', exampleRu: 'Мои внуки часто ссорятся.', pronRu: 'ШТРАЙ-тэн' },
    { de: 'vermissen', forms: 'vermisst, hat vermisst', pos: 'verb', ru: 'скучать (по кому-то)', example: 'Ich vermisse meine Familie.', exampleRu: 'Я скучаю по своей семье.', pronRu: 'фэр-МИ-сэн' },
    { de: 'Enkelkind', article: 'das', plural: '-er', pos: 'noun', ru: 'внук, внучка', example: 'Wir haben fünf Enkelkinder.', exampleRu: 'У нас пятеро внуков.', pronRu: 'дас ЭН-кель-кинт' },
    { de: 'Grund', article: 'der', plural: '-¨e', pos: 'noun', ru: 'причина', example: 'Es gibt viele Gründe für einen Streit.', exampleRu: 'Для ссоры есть много причин.', pronRu: 'дер ГРУНТ' },
    { de: 'warum', pos: 'adv', ru: 'почему', example: 'Warum bist du so traurig?', exampleRu: 'Почему ты такой грустный?', pronRu: 'ва-РУМ' },
    { de: 'weil', pos: 'conj', ru: 'потому что, так как (глагол в конце)', example: 'Ich bin froh, weil du da bist.', exampleRu: 'Я рад, потому что ты здесь.', pronRu: 'ВАЙЛЬ' },
    { de: 'gemeinsam', pos: 'adj', ru: 'общий; вместе', example: 'Am Sonntag essen wir immer gemeinsam.', exampleRu: 'По воскресеньям мы всегда едим вместе.', pronRu: 'гэ-МАЙН-за:м' },
    { de: 'Schwiegermutter', article: 'die', plural: '-¨', pos: 'noun', ru: 'тёща; свекровь', example: 'Meine Schwiegermutter wohnt bei uns.', exampleRu: 'Моя тёща живёт у нас.', pronRu: 'ди ШВИ:-гэ-му-та' },
  ],
  listening: {
    title: 'Kommst du zu meinem Geburtstag?',
    kind: 'dialog',
    text: `A: Hallo Irina! Kommst du am Samstag zu meinem Geburtstag?
B: Ja, gern! Aber mein Mann kann leider nicht kommen, weil er am Samstag arbeiten muss.
A: Schade! Und deine Tochter?
B: Sie kommt auch nicht, weil sie jetzt in Hamburg wohnt. Sie hat dort eine Stelle gefunden.
A: In Hamburg? Das ist ja weit!
B: Ja, leider. Ich vermisse sie sehr. Aber sie ist glücklich, denn sie hat dort auch einen Freund.
A: Oh, ist sie verliebt?
B: Ja, sehr! Sie wollen bald zusammenleben. Vielleicht gibt es nächstes Jahr eine Hochzeit!
A: Wie schön! Und dein Sohn?
B: Mein Sohn kommt gern mit. Er hat am Samstag frei.
A: Super. Dann bis Samstag!`,
    questions: [
      { question: 'Warum kommt Irinas Mann nicht?', options: ['Er ist krank.', 'Er muss arbeiten.', 'Er wohnt in Hamburg.'], answer: 1 },
      { question: 'Wo wohnt Irinas Tochter jetzt?', options: ['In Hamburg', 'In Berlin', 'Bei Irina'], answer: 0 },
      { question: 'Warum ist die Tochter glücklich?', options: ['Sie hat geheiratet.', 'Sie hat dort einen Freund.', 'Sie hat am Samstag frei.'], answer: 1 },
      { question: 'Was planen die Tochter und ihr Freund?', options: ['Sie wollen zusammenleben.', 'Sie wollen nach Russland fahren.', 'Sie wollen ein Haus kaufen.'], answer: 0 },
      { question: 'Wer kommt mit Irina zum Geburtstag?', options: ['Ihr Mann', 'Ihre Tochter', 'Ihr Sohn'], answer: 2 },
    ],
  },
  writing: {
    taskRu: 'Ваш друг Томас пригласил вас на свадьбу своей дочери, но вы не можете прийти. Напишите ему электронное письмо: поблагодарите за приглашение, объясните причину (используйте weil) и предложите встретиться в другой день.',
    taskDe: 'Ihr Freund Thomas hat Sie zur Hochzeit von seiner Tochter eingeladen. Sie können nicht kommen. Schreiben Sie ihm eine E-Mail.',
    points: ['Danken Sie für die Einladung.', 'Erklären Sie, warum Sie nicht kommen können.', 'Machen Sie einen Vorschlag für ein Treffen.'],
    minWords: 50,
    usefulPhrases: [
      'Lieber Thomas,',
      'vielen Dank für die Einladung!',
      'Leider kann ich nicht kommen, weil …',
      'Das tut mir sehr leid.',
      'Ich wünsche dem Brautpaar alles Gute!',
      'Hast du vielleicht am … Zeit?',
      'Viele Grüße',
    ],
  },
  speaking: {
    scenarioRu: 'Вы сидите в кафе с новой знакомой Моникой. Она расспрашивает вас о семье и часто спрашивает «почему?».',
    aiRole:
      'Sie sind Monika, 60 Jahre alt, eine freundliche Frau aus Köln. Sie sitzen mit der Person im Café und sprechen über die Familie: Ehe, Kinder, Enkel, wer wo wohnt. Fragen Sie oft „Warum?“, damit die Person mit „weil“ antworten kann. Sprechen Sie langsam und einfach (Niveau A2), in kurzen Sätzen, und stellen Sie immer nur eine Frage. Erzählen Sie auch kurz von Ihrer Familie: Sie sind geschieden und haben zwei Enkelkinder in München.',
    opener: 'Erzählen Sie mal: Sind Sie verheiratet?',
    tasksRu: [
      'Расскажите о своей семье: семейное положение, дети, внуки.',
      'Отвечайте на вопросы «Warum?» с помощью weil (минимум 3 раза).',
      'Хотя бы один раз используйте denn.',
      'Спросите Монику, почему её внуки живут в Мюнхене.',
    ],
    readAloud: [
      'Ich bin seit vierzig Jahren verheiratet.',
      'Wir haben drei Enkelkinder.',
      'Ich vermisse meine Tochter.',
      'Ich lerne Deutsch, weil meine Enkel hier wohnen.',
      'Warum kommst du nicht?',
    ],
  },
};
