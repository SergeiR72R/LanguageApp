import type { Unit } from '../types';

export const unit: Unit = {
  id: 'b1-09',
  level: 'B1',
  order: 9,
  title: 'Umwelt & Natur',
  titleRu: 'Окружающая среда и природа',
  goalsRu: [
    'Говорить об экологических проблемах и защите природы',
    'Описывать процессы и правила с помощью пассива в настоящем и прошедшем времени',
    'Использовать пассив с модальными глаголами (muss gemacht werden)',
    'Писать письмо в газету или пост с предложениями по защите окружающей среды',
  ],
  grammar: {
    topic: 'Passiv Präsens und Präteritum; Passiv mit Modalverben',
    topicRu: 'Пассивный залог в настоящем и прошедшем времени; пассив с модальными глаголами',
    explanationRu: `**Пассив** используется, когда важно **действие или процесс**, а не тот, кто его выполняет. Он очень частотен в новостях, инструкциях и правилах.

**Образование:** **werden + Partizip II** (в конце предложения).

- **Präsens:** Der Müll **wird** getrennt. Die Flaschen **werden** recycelt.
- **Präteritum:** Das Haus **wurde** 1990 gebaut. Die Bäume **wurden** gefällt.
- **С модальным глаголом:** модальный глагол + Partizip II + **werden**: Plastik **muss** vermieden **werden**. В прошедшем: Der Wald **musste** geschützt **werden**.

**Из актива в пассив:** дополнение в Akkusativ становится подлежащим в Nominativ. Предложения с man очень удобно переделывать в пассив:

- Man schützt **den Wald**. → **Der Wald** wird geschützt.

Если нужно назвать исполнителя: **von + Dativ** (люди, организации): von den Schülern; **durch + Akkusativ** (средство, причина): durch die Industrie.

**Типичные ошибки русскоговорящих:**

- Русский пассив «был построен» переводят с sein: «Das Haus war 1990 gebaut» — для процесса правильно **wurde gebaut**.
- Русские формы на -ся («мусор сортируется») переводят возвратным глаголом: «Der Müll trennt sich» — неверно, нужно **Der Müll wird getrennt**.
- Неправильный порядок с модальным глаголом: «muss werden getrennt» — правильно **muss getrennt werden** (werden в самом конце).
- Забывают поменять падеж: «Den Müll wird getrennt» — правильно **Der Müll**.
- Путают три значения werden: Ich **werde** Lehrer (становлюсь), Ich **werde** lesen (буду), Das Buch **wird** gelesen (пассив).`,
    table: [
      ['Zeit', 'Aktiv (mit man)', 'Passiv'],
      ['Präsens', 'Man recycelt das Glas.', 'Das Glas wird recycelt.'],
      ['Präteritum', 'Man recycelte das Glas.', 'Das Glas wurde recycelt.'],
      ['Modalverb (Präsens)', 'Man muss das Glas recyceln.', 'Das Glas muss recycelt werden.'],
      ['Modalverb (Präteritum)', 'Man musste das Glas recyceln.', 'Das Glas musste recycelt werden.'],
    ],
    examples: [
      { de: 'In Deutschland wird der Müll getrennt.', ru: 'В Германии мусор сортируют.' },
      { de: 'Jedes Jahr werden Millionen Bäume gefällt.', ru: 'Каждый год вырубают миллионы деревьев.' },
      { de: 'Der Nationalpark wurde 1970 gegründet.', ru: 'Национальный парк был основан в 1970 году.' },
      { de: 'Der Fluss wurde durch die Industrie stark verschmutzt.', ru: 'Река была сильно загрязнена промышленностью.' },
      { de: 'Plastiktüten sollen in Zukunft verboten werden.', ru: 'Пластиковые пакеты в будущем собираются запретить.' },
      { de: 'Hier darf kein Müll weggeworfen werden.', ru: 'Здесь нельзя выбрасывать мусор.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Altpapier ___ in die blaue Tonne geworfen.',
        options: ['wird', 'ist', 'hat', 'werden'],
        answer: 0,
        explanationRu: 'Пассив Präsens: werden + Partizip II. Подлежащее Altpapier — ед. ч., поэтому wird.',
      },
      {
        type: 'choice',
        prompt: 'Das Windrad ___ letztes Jahr gebaut.',
        options: ['wird', 'wurde', 'wurden', 'hat'],
        answer: 1,
        explanationRu: 'letztes Jahr → прошедшее время. Пассив Präteritum: wurde + Partizip II (ед. ч.).',
      },
      {
        type: 'choice',
        prompt: 'Energie muss gespart ___.',
        options: ['wird', 'worden', 'geworden', 'werden'],
        answer: 3,
        explanationRu: 'Пассив с модальным глаголом: muss + Partizip II + werden (инфинитив в конце).',
      },
      {
        type: 'choice',
        prompt: 'Die Bäume wurden ___ den Schülern gepflanzt.',
        options: ['durch', 'mit', 'von', 'bei'],
        answer: 2,
        explanationRu: 'Исполнитель-человек вводится через von + Dativ (den Schülern). durch требует Akkusativ и используется для средства или причины.',
      },
      {
        type: 'gap',
        prompt: 'Im Supermarkt ___ immer mehr Bio-Produkte verkauft.',
        answers: ['werden'],
        explanationRu: 'Подлежащее Bio-Produkte во мн. ч. → werden + Partizip II.',
      },
      {
        type: 'gap',
        prompt: 'Die Mülltonnen ___ gestern geleert.',
        answers: ['wurden'],
        explanationRu: 'gestern → Präteritum, подлежащее во мн. ч. → wurden.',
      },
      {
        type: 'gap',
        prompt: 'Batterien dürfen nicht in den Hausmüll ___ werden.',
        answers: ['geworfen'],
        hintRu: 'werfen',
        explanationRu: 'Пассив с модальным глаголом: dürfen + Partizip II (geworfen) + werden.',
      },
      {
        type: 'gap',
        prompt: 'Glas wird in Deutschland seit Jahrzehnten ___.',
        answers: ['recycelt'],
        hintRu: 'recyceln',
        explanationRu: 'Пассив Präsens: wird + Partizip II. Partizip II от recyceln — recycelt.',
      },
      {
        type: 'order',
        words: ['Die', 'Fahrräder', 'können', 'im', 'Hof', 'abgestellt', 'werden.'],
        translationRu: 'Велосипеды можно оставлять во дворе.',
        explanationRu: 'Модальный глагол können на втором месте, в конце — Partizip II + werden.',
      },
      {
        type: 'order',
        words: ['Das', 'Gesetz', 'wurde', 'im', 'Jahr', '2021', 'beschlossen.'],
        translationRu: 'Закон был принят в 2021 году.',
        explanationRu: 'Пассив Präteritum: wurde на втором месте, Partizip II beschlossen — в конце.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в пассив (Präsens).',
        prompt: 'Man schützt die Tiere im Nationalpark.',
        answers: ['Die Tiere im Nationalpark werden geschützt.', 'Im Nationalpark werden die Tiere geschützt.'],
        explanationRu: 'Akkusativ (die Tiere) становится подлежащим; мн. ч. → werden + geschützt. man в пассиве исчезает.',
      },
      {
        type: 'transform',
        instructionRu: 'Переделайте предложение в пассив с модальным глаголом.',
        prompt: 'Man muss den Plastikmüll reduzieren.',
        answers: ['Der Plastikmüll muss reduziert werden.'],
        explanationRu: 'den Plastikmüll → der Plastikmüll (Nominativ); muss + Partizip II + werden.',
      },
    ],
  },
  vocab: [
    { de: 'Klimawandel', article: 'der', plural: '–', pos: 'noun', ru: 'изменение климата', example: 'Der Klimawandel ist eines der größten Probleme unserer Zeit.', exampleRu: 'Изменение климата — одна из крупнейших проблем нашего времени.' },
    { de: 'Umweltverschmutzung', article: 'die', plural: '–', pos: 'noun', ru: 'загрязнение окружающей среды', example: 'Gegen die Umweltverschmutzung muss mehr getan werden.', exampleRu: 'Против загрязнения окружающей среды нужно делать больше.' },
    { de: 'Abfall', article: 'der', plural: '-¨e', pos: 'noun', ru: 'отходы, мусор', example: 'Bitte nehmen Sie Ihren Abfall wieder mit.', exampleRu: 'Пожалуйста, забирайте свой мусор с собой.' },
    { de: 'Energie', article: 'die', plural: '-n', pos: 'noun', ru: 'энергия', example: 'Mit LED-Lampen kann man viel Energie sparen.', exampleRu: 'Со светодиодными лампами можно сэкономить много энергии.' },
    { de: 'Treibhausgas', article: 'das', plural: '-e', pos: 'noun', ru: 'парниковый газ', example: 'Autos und Fabriken produzieren viele Treibhausgase.', exampleRu: 'Машины и заводы производят много парниковых газов.' },
    { de: 'Art', article: 'die', plural: '-en', pos: 'noun', ru: 'вид (животных, растений); способ', example: 'Viele Tierarten sind vom Aussterben bedroht.', exampleRu: 'Многим видам животных грозит вымирание.' },
    { de: 'Naturschutz', article: 'der', plural: '–', pos: 'noun', ru: 'охрана природы', example: 'Mein Onkel engagiert sich seit Jahren im Naturschutz.', exampleRu: 'Мой дядя уже много лет занимается охраной природы.' },
    { de: 'Hitzewelle', article: 'die', plural: '-n', pos: 'noun', ru: 'волна жары', example: 'Während der Hitzewelle hat es sechs Wochen nicht geregnet.', exampleRu: 'Во время жары шесть недель не было дождя.' },
    { de: 'Überschwemmung', article: 'die', plural: '-en', pos: 'noun', ru: 'наводнение', example: 'Nach der Überschwemmung wurden viele Häuser renoviert.', exampleRu: 'После наводнения многие дома отремонтировали.' },
    { de: 'Rohstoff', article: 'der', plural: '-e', pos: 'noun', ru: 'сырьё', example: 'Aus altem Papier werden neue Rohstoffe gewonnen.', exampleRu: 'Из старой бумаги получают новое сырьё.' },
    { de: 'Verpackung', article: 'die', plural: '-en', pos: 'noun', ru: 'упаковка', example: 'Im Unverpackt-Laden gibt es Lebensmittel ohne Verpackung.', exampleRu: 'В магазине без упаковки продукты продаются без тары.' },
    { de: 'schützen', forms: 'vor + Dat', pos: 'verb', ru: 'защищать, охранять', example: 'Wir müssen die Natur besser schützen.', exampleRu: 'Мы должны лучше защищать природу.' },
    { de: 'verschmutzen', pos: 'verb', ru: 'загрязнять', example: 'Die Fabrik hat jahrelang den Fluss verschmutzt.', exampleRu: 'Фабрика годами загрязняла реку.' },
    { de: 'vermeiden', forms: 'vermeidet, vermied, hat vermieden', pos: 'verb', ru: 'избегать', example: 'Im Alltag vermeide ich Plastik, so gut es geht.', exampleRu: 'В быту я по возможности избегаю пластика.' },
    { de: 'verbrauchen', pos: 'verb', ru: 'потреблять, расходовать', example: 'Ein alter Kühlschrank verbraucht sehr viel Strom.', exampleRu: 'Старый холодильник потребляет очень много электричества.' },
    { de: 'recyceln', pos: 'verb', ru: 'перерабатывать (вторсырьё)', example: 'Aus recyceltem Plastik werden zum Beispiel Jacken hergestellt.', exampleRu: 'Из переработанного пластика производят, например, куртки.' },
    { de: 'aussterben', forms: 'stirbt aus, starb aus, ist ausgestorben', pos: 'verb', ru: 'вымирать', example: 'Der Luchs war in Deutschland fast ausgestorben.', exampleRu: 'Рысь в Германии почти вымерла.' },
    { de: 'erneuerbar', pos: 'adj', ru: 'возобновляемый', example: 'Fast die Hälfte unseres Stroms kommt aus erneuerbaren Energien.', exampleRu: 'Почти половина нашей электроэнергии поступает из возобновляемых источников.' },
    { de: 'umweltfreundlich', pos: 'adj', ru: 'экологичный, безвредный для окружающей среды', example: 'Mit dem Fahrrad fährt man umweltfreundlich und billig.', exampleRu: 'На велосипеде ездить экологично и дёшево.' },
    { de: 'einen Beitrag leisten', forms: 'zu + Dat', pos: 'phrase', ru: 'вносить вклад', example: 'Jeder kann einen kleinen Beitrag zum Umweltschutz leisten.', exampleRu: 'Каждый может внести небольшой вклад в защиту окружающей среды.' },
  ],
  listening: {
    title: 'Eine Führung im Nationalpark Harz',
    kind: 'monolog',
    text: `Herzlich willkommen im Nationalpark Harz! Ich bin Frau Lindner und begleite Sie heute auf unserer Wanderung. Zuerst erzähle ich Ihnen ein bisschen über den Park.

Der erste Teil des Nationalparks wurde 1990 gegründet, kurz nach der Wiedervereinigung. Damals war die Natur hier in keinem guten Zustand. Über viele Jahrhunderte wurden im Harz Bäume gefällt, weil Holz für die Bergwerke gebraucht wurde. Später wurden fast überall Fichten gepflanzt, denn sie wachsen schnell.

Heute sehen Sie an vielen Stellen tote, graue Bäume. Viele Besucher sind darüber erschrocken. Die Fichten wurden in den letzten Jahren durch Hitzewellen und Trockenheit stark geschwächt, und dann kam der Borkenkäfer. Aber keine Sorge: Hier wird absichtlich nicht aufgeräumt. Die toten Bäume werden nicht entfernt, weil sie Lebensraum für Insekten, Vögel und Pilze sind. Zwischen ihnen wächst schon ein neuer, gemischter Wald mit Buchen, Birken und Ebereschen.

Auch seltene Tierarten werden hier geschützt. Der Luchs zum Beispiel war im Harz schon lange ausgestorben. Ab dem Jahr 2000 wurden wieder Luchse ausgewildert, und heute leben in der Region wieder viele Tiere. Mit etwas Glück sehen wir heute sogar ihre Spuren.

Noch ein paar Regeln für unsere Wanderung: Die Wege dürfen nicht verlassen werden, und Hunde müssen an der Leine geführt werden. Bitte nehmen Sie Ihren Abfall wieder mit, denn Mülleimer gibt es im Park nicht. So kann jeder einen kleinen Beitrag zum Naturschutz leisten. Haben Sie noch Fragen? Nein? Dann geht es los!`,
    questions: [
      { question: 'Wann wurde der erste Teil des Nationalparks gegründet?', options: ['1990', '2000', '1970', '2006'], answer: 0 },
      {
        question: 'Warum wurden früher im Harz viele Bäume gefällt?',
        options: ['Weil man Platz für Häuser brauchte.', 'Weil Holz für die Bergwerke gebraucht wurde.', 'Weil der Borkenkäfer die Bäume krank gemacht hatte.'],
        answer: 1,
      },
      {
        question: 'Warum werden die toten Bäume nicht entfernt?',
        options: ['Weil das zu teuer ist.', 'Weil es nicht genug Personal gibt.', 'Weil sie Lebensraum für Tiere und Pilze sind.', 'Weil die Besucher sie sehen wollen.'],
        answer: 2,
      },
      {
        question: 'Was ist mit dem Luchs passiert?',
        options: [
          'Er lebt nur noch im Zoo.',
          'Er ist ausgestorben und nicht zurückgekommen.',
          'Er wurde aus dem Park vertrieben.',
          'Er wurde wieder im Harz ausgewildert.',
        ],
        answer: 3,
      },
      {
        question: 'Welche Regel gilt im Nationalpark?',
        options: ['Abfall muss in die Mülleimer geworfen werden.', 'Hunde müssen an der Leine geführt werden.', 'Man darf auch abseits der Wege wandern.'],
        answer: 1,
      },
    ],
  },
  writing: {
    taskRu: 'Местная газета спрашивает читателей: «Что можно сделать в нашем городе для защиты окружающей среды?» Напишите письмо читателя.',
    taskDe: 'Die Lokalzeitung fragt ihre Leser: „Was kann in unserer Stadt für die Umwelt getan werden?“ Schreiben Sie einen Leserbrief.',
    points: [
      'Welches Umweltproblem gibt es in Ihrer Stadt?',
      'Was wird schon dagegen gemacht?',
      'Was sollte noch gemacht werden?',
      'Was tun Sie persönlich für die Umwelt?',
    ],
    minWords: 100,
    usefulPhrases: [
      'Sehr geehrte Damen und Herren,',
      'in unserer Stadt gibt es ein großes Problem: …',
      'Zwar wird schon … gemacht, aber …',
      'Meiner Meinung nach muss/sollte … verboten/gefördert werden.',
      'Ich persönlich achte im Alltag darauf, dass …',
      'Mit freundlichen Grüßen',
    ],
  },
  speaking: {
    scenarioRu: 'Вы живёте в общей квартире (WG) во Фрайбурге. Ваш сосед хочет, чтобы все жили экологичнее. Обсудите новые правила для квартиры.',
    aiRole:
      'Sie sind Lukas, Mitbewohner in einer WG in Freiburg. Sie möchten, dass die WG umweltfreundlicher lebt (Müll trennen, weniger Plastik, Strom sparen), sind aber manchmal selbst etwas bequem. Diskutieren Sie konkrete Regeln, benutzen Sie dabei oft das Passiv („Der Müll muss getrennt werden …“) und sprechen Sie auf B1-Niveau.',
    opener: 'Du, wir müssen mal über unseren Müll reden. Gestern war schon wieder Plastik im Papiermüll! Wie können wir das besser organisieren?',
    tasksRu: [
      'Предложите правила для квартиры, используя пассив с модальными глаголами (… muss/soll/darf … werden).',
      'Расскажите, как сортируют мусор в вашем родном городе (… wird …).',
      'Предложите, как можно экономить энергию.',
      'Договоритесь о распределении обязанностей.',
    ],
    readAloud: [
      'In unserer Stadt wird der Müll sorgfältig getrennt.',
      'Erneuerbare Energien müssen stärker gefördert werden.',
      'Früher wurden hier große Wälder für den Bergbau gerodet.',
    ],
  },
};
