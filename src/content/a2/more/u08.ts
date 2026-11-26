import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ein Hochhaus ist höher ___ ein Bauernhaus.',
      options: ['als', 'wie', 'so', 'am'],
      answer: 0,
      explanationRu: 'После Komparativ (höher) всегда als — «чем».',
    },
    {
      type: 'choice',
      prompt: 'Mein Dorf ist nicht so groß ___ deine Stadt.',
      options: ['wie', 'als', 'so', 'von'],
      answer: 0,
      explanationRu: 'nicht so … wie — «не такой … как». После so всегда wie.',
    },
    {
      type: 'choice',
      prompt: 'Das Leben auf dem Land ist ___ als in der Großstadt.',
      options: ['ruhiger', 'ruhig', 'am ruhigsten', 'mehr ruhig'],
      answer: 0,
      explanationRu: 'Перед als нужен Komparativ: ruhig + -er = ruhiger. Форма «mehr ruhig» неправильная.',
    },
    {
      type: 'choice',
      prompt: 'Meine Schwester ist zwei Jahre ___ als ich.',
      options: ['jünger', 'junger', 'mehr jung', 'am jüngsten'],
      answer: 0,
      explanationRu: 'jung — короткое слово, в Komparativ с умлаутом: jünger.',
    },
    {
      type: 'choice',
      prompt: 'gut – besser – ___',
      options: ['am besten', 'am gutsten', 'am bessersten', 'am güten'],
      answer: 0,
      explanationRu: 'gut — неправильное слово: gut → besser → am besten. Его нужно просто запомнить.',
    },
    {
      type: 'choice',
      audio: 'Ich fahre lieber mit dem Fahrrad als mit dem Auto.',
      prompt: 'На чём человек предпочитает ездить?',
      options: ['mit dem Fahrrad', 'mit dem Auto', 'mit dem Bus', 'mit der U-Bahn'],
      answer: 0,
      explanationRu: '«Ich fahre lieber mit dem Fahrrad als mit dem Auto» — lieber значит «охотнее», то есть он предпочитает велосипед.',
    },
    {
      type: 'choice',
      audio: 'In der Stadt gibt es mehr Geschäfte.',
      prompt: 'Что вы слышите?',
      options: ['mehr Geschäfte', 'viele Geschäfte', 'die meisten Geschäfte', 'keine Geschäfte'],
      answer: 0,
      explanationRu: 'Вы слышите «mehr» — Komparativ от viel: viel → mehr → am meisten.',
    },
    {
      type: 'choice',
      prompt: 'Das ist das ___ Haus im Dorf.',
      options: ['älteste', 'ältesten', 'alteste', 'am ältesten'],
      answer: 0,
      explanationRu: 'Superlativ перед существительным: das + -ste. Как после das в юните 6, окончание -e: das älteste Haus.',
    },
    {
      type: 'gap',
      prompt: 'Im Juli ist es hier am ___.',
      answers: ['heißesten', 'heissesten'],
      hintRu: 'heiß',
      explanationRu: 'heiß кончается на -ß, поэтому вставляем -e-: am heißesten.',
    },
    {
      type: 'gap',
      prompt: 'Wir suchen eine ___ Wohnung.',
      answers: ['größere', 'grössere'],
      hintRu: 'groß, Komparativ',
      explanationRu: 'Komparativ перед существительным получает окончание: größer + -e (die Wohnung, Akkusativ): eine größere Wohnung.',
    },
    {
      type: 'gap',
      prompt: 'Die Luft im Wald ist ___ als in der Innenstadt.',
      answers: ['frischer'],
      hintRu: 'frisch',
      explanationRu: 'frisch + -er = frischer, потом als.',
    },
    {
      type: 'gap',
      prompt: 'Mein Opa ist der ___ Mann im Dorf.',
      answers: ['älteste'],
      hintRu: 'alt',
      explanationRu: 'Superlativ перед существительным: der älteste Mann. alt → älter → am ältesten (с умлаутом и -e-).',
    },
    {
      type: 'gap',
      audio: 'Berlin ist die größte Stadt in Deutschland.',
      prompt: 'Напишите недостающее слово: Berlin ist die ___ Stadt in Deutschland.',
      answers: ['größte', 'grösste', 'groesste'],
      explanationRu: 'Вы слышите «die größte Stadt» — самый большой город. groß → größer → am größten (без -e-).',
    },
    {
      type: 'gap',
      prompt: 'Mit dem Zug bin ich genauso schnell ___ mit dem Auto.',
      answers: ['wie'],
      explanationRu: 'genauso … wie — «так же … как». При равенстве всегда wie.',
    },
    {
      type: 'transform',
      instructionRu: 'Поставьте прилагательное в превосходную степень (am …-sten).',
      prompt: 'Im Herbst ist der Wald schön.',
      answers: ['Im Herbst ist der Wald am schönsten.', 'Im Herbst ist der Wald am schönsten'],
      explanationRu: 'После глагола sein Superlativ образуется с am: schön → am schönsten.',
    },
    {
      type: 'transform',
      instructionRu: 'Скажите то же самое с «nicht so … wie».',
      prompt: 'Das Dorf ist kleiner als die Stadt.',
      answers: ['Das Dorf ist nicht so groß wie die Stadt.', 'Das Dorf ist nicht so groß wie die Stadt'],
      explanationRu: '«меньше, чем» = «не такой большой, как»: nicht so groß wie. После so — исходная форма прилагательного.',
    },
    {
      type: 'order',
      words: ['Wo', 'wohnst', 'du', 'lieber,', 'in der Stadt', 'oder', 'auf dem Land?'],
      translationRu: 'Где ты предпочитаешь жить — в городе или в деревне?',
      explanationRu: 'W-вопрос: вопросительное слово, глагол, подлежащее, затем lieber и варианты с oder.',
    },
    {
      type: 'choice',
      prompt: 'Wir haben einen ___ Garten.',
      options: ['schönen', 'schöner', 'schönes', 'schöne'],
      answer: 0,
      explanationRu: 'Повторение (юнит 7): haben + Akkusativ, der Garten — мужской род: einen schönen Garten.',
    },
    {
      type: 'gap',
      prompt: 'Früher ___ unser Dorf keinen Supermarkt.',
      answers: ['hatte'],
      hintRu: 'haben, Präteritum',
      explanationRu: 'Повторение (юнит 2): Präteritum от haben — hatte (er/sie/es hatte).',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините два предложения с помощью weil.',
      prompt: 'Ich wohne gern auf dem Land. Es ist dort ruhig.',
      answers: ['Ich wohne gern auf dem Land, weil es dort ruhig ist.', 'Ich wohne gern auf dem Land, weil es dort ruhig ist'],
      explanationRu: 'Повторение (юнит 3): после weil глагол (ist) уходит в конец предложения.',
    },
  ],
  reading: [
    {
      title: 'Stadt oder Land?',
      textType: 'Forumsbeiträge',
      texts: [
        {
          label: 'Paula',
          body: `Ich wohne mitten in Hamburg und finde es toll. Hier ist immer etwas los: Kinos, Theater, Konzerte. Ich brauche kein Auto, denn Bus und U-Bahn fahren alle fünf Minuten. Klar, die Miete ist hoch und es ist oft laut. Aber für mich ist die Stadt am besten.`,
        },
        {
          label: 'Henrik',
          body: `Vor zehn Jahren sind wir von Frankfurt in ein kleines Dorf bei Kassel gezogen. Heute haben wir ein großes Haus, und es ist billiger als unsere alte Wohnung. Ich arbeite gern im Garten und habe zwölf Hühner. Ein Nachteil: Ohne Auto geht hier nichts. Der Bus fährt nur zweimal am Tag.`,
        },
        {
          label: 'Ayşe',
          body: `Ich wohne in einer Kleinstadt mit 20 000 Einwohnern. Für mich ist das ideal: Sie ist nicht so laut wie eine Großstadt, aber auch nicht so langweilig wie ein Dorf. Mit dem Zug bin ich in 30 Minuten in Stuttgart. Am Wochenende fahre ich oft dorthin und gehe ins Theater.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Forumsbeiträge. Wer sagt das? Paula, Henrik oder Ayşe?',
          instructionRu: 'Прочитайте сообщения в форуме. Кто это говорит: Паула, Хенрик или Айше?',
          options: ['Paula', 'Henrik', 'Ayşe'],
          items: [
            { kind: 'match', prompt: 'Diese Person braucht in ihrem Ort ein Auto.', answer: 1, explanationRu: 'Хенрик: «Ohne Auto geht hier nichts» — без машины тут никак, автобус ходит только два раза в день.' },
            { kind: 'match', prompt: 'Diese Person fährt am Wochenende oft in eine Großstadt.', answer: 2, explanationRu: 'Айше по выходным ездит в Штутгарт и ходит в театр.' },
            { kind: 'match', prompt: 'Diese Person bezahlt viel Geld für die Wohnung.', answer: 0, explanationRu: 'Паула: «die Miete ist hoch» — квартплата высокая.' },
            { kind: 'match', prompt: 'Diese Person hat Tiere.', answer: 1, explanationRu: 'У Хенрика двенадцать кур: «habe zwölf Hühner».' },
            { kind: 'match', prompt: 'Für diese Person ist eine kleine Stadt besser als ein Dorf oder eine Großstadt.', answer: 2, explanationRu: 'Айше: маленький город не такой шумный, как большой, и не такой скучный, как деревня.' },
            { kind: 'match', prompt: 'Diese Person fährt mit dem Bus und mit der U-Bahn.', answer: 0, explanationRu: 'Паула: ей не нужна машина, автобус и метро ходят каждые пять минут.' },
          ],
        },
      ],
    },
    {
      title: 'Urlaub auf dem Bauernhof',
      textType: 'Anzeige',
      texts: [
        {
          heading: 'Ferien auf dem Hof Sonnenwiese',
          body: `Sie möchten Ruhe und Natur? Dann kommen Sie zu uns! Unser Hof liegt im Schwarzwald, drei Kilometer vom Dorf Kirchberg. Wir haben zwei Ferienwohnungen für zwei bis fünf Personen, beide mit Küche und Balkon.

Für Kinder: Jeden Morgen können sie mit uns die Tiere füttern – Kühe, Schafe, Hühner und unsere zwei Pferde. Reiten kostet 10 Euro pro Stunde.

Frühstück mit Eiern, Milch und Käse von unserem Hof gibt es für 9 Euro pro Person.

Preise: ab 65 Euro pro Nacht, im Juli und August ab 80 Euro. Sie bleiben mindestens drei Nächte.

Sie kommen mit dem Zug? Wir holen Sie gern kostenlos am Bahnhof Kirchberg ab.

Familie Huber, Telefon 07651 234567`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeige. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте объявление. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wie viele Personen können in einer Ferienwohnung wohnen?',
              options: ['Nur zwei Personen.', 'Bis zu fünf Personen.', 'Bis zu zehn Personen.'],
              answer: 1,
              explanationRu: '«Ferienwohnungen für zwei bis fünf Personen» — от двух до пяти человек.',
            },
            {
              kind: 'mc',
              question: 'Was können Kinder jeden Morgen machen?',
              options: ['Die Tiere füttern.', 'Kostenlos reiten.', 'Käse machen.'],
              answer: 0,
              explanationRu: '«Jeden Morgen können sie … die Tiere füttern». Катание на лошади стоит 10 евро в час, так что не бесплатно.',
            },
            {
              kind: 'mc',
              question: 'Was kostet eine Nacht im August?',
              options: ['65 Euro.', 'Ab 80 Euro.', '9 Euro.'],
              answer: 1,
              explanationRu: 'В июле и августе — от 80 евро за ночь. 65 евро — в другие месяцы, 9 евро — завтрак.',
            },
            {
              kind: 'mc',
              question: 'Wie lange muss man mindestens bleiben?',
              options: ['Eine Nacht.', 'Drei Nächte.', 'Eine Woche.'],
              answer: 1,
              explanationRu: '«Sie bleiben mindestens drei Nächte» — минимум три ночи.',
            },
            {
              kind: 'mc',
              question: 'Gäste kommen mit dem Zug. Was macht Familie Huber?',
              options: ['Sie holt die Gäste am Bahnhof ab.', 'Sie bezahlt das Taxi.', 'Sie schickt einen Bus.'],
              answer: 0,
              explanationRu: '«Wir holen Sie gern kostenlos am Bahnhof Kirchberg ab» — хозяева бесплатно забирают гостей с вокзала.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Stadtführung',
      kind: 'monolog',
      situation: 'Sie machen eine Stadtführung in einer kleinen Stadt.',
      text: `Herzlich willkommen in Rothenstein! Ich bin Frau Bauer, und ich zeige Ihnen heute unsere kleine Stadt. Wir stehen hier am Marktplatz. Das ist der schönste Platz in der Stadt. Die Kirche dort ist das älteste Gebäude von Rothenstein. Sie ist fast achthundert Jahre alt. Ihr Turm ist fünfundsechzig Meter hoch, er ist höher als alle anderen Häuser. Von oben sieht man die ganze Stadt. Links sehen Sie das Rathaus. Es ist nicht so alt wie die Kirche, aber auch sehr schön. Rothenstein hat heute zwölftausend Einwohner. Früher war es nur ein kleines Dorf. Nach der Führung gehen wir ins Café Krone. Dort gibt es den besten Apfelkuchen in Rothenstein!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist das älteste Gebäude in Rothenstein?',
              options: ['Die Kirche.', 'Das Rathaus.', 'Das Café Krone.'],
              answer: 0,
              explanationRu: '«Die Kirche … ist das älteste Gebäude von Rothenstein».',
            },
            {
              kind: 'mc',
              question: 'Wie hoch ist der Turm?',
              options: ['56 Meter.', '65 Meter.', '800 Meter.'],
              answer: 1,
              explanationRu: '«fünfundsechzig Meter» — 65 метров. Внимание: по-немецки сначала единицы, потом десятки (fünf-und-sechzig).',
            },
            {
              kind: 'mc',
              question: 'Was gibt es im Café Krone?',
              options: ['Den besten Apfelkuchen.', 'Das beste Eis.', 'Den besten Kaffee.'],
              answer: 0,
              explanationRu: '«Dort gibt es den besten Apfelkuchen in Rothenstein».',
            },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Das Rathaus ist älter als die Kirche.', answer: false, explanationRu: '«Es ist nicht so alt wie die Kirche» — ратуша моложе церкви.' },
            { kind: 'tf', statement: 'Rothenstein war früher ein Dorf.', answer: true, explanationRu: '«Früher war es nur ein kleines Dorf».' },
          ],
        },
      ],
    },
    {
      title: 'Zwei Wohnungen',
      kind: 'dialog',
      speakers: { A: 'Anna', B: 'Tom' },
      situation: 'Anna und Tom suchen eine neue Wohnung für ihre Familie.',
      text: `A: Schau mal, Tom, ich habe zwei Wohnungen im Internet gefunden.
B: Zeig mal! Wo sind sie denn?
A: Die erste ist in der Innenstadt. Sie hat drei Zimmer und kostet 1100 Euro.
B: Das ist teuer! Und die zweite?
A: Die zweite ist in Neudorf, das ist ein Vorort. Sie ist größer, sie hat vier Zimmer und einen Garten. Und sie ist billiger, nur 950 Euro.
B: Ein Garten! Das ist toll für die Kinder. Aber wie lange brauche ich von dort zur Arbeit?
A: Mit dem Bus ungefähr vierzig Minuten. Aus der Innenstadt sind es nur zehn Minuten zu Fuß.
B: Hm. Und die Schule?
A: In Neudorf ist die Schule direkt neben dem Haus. In der Stadt ist der Schulweg länger.
B: Weißt du was? Für die Kinder ist Neudorf am besten. Ich fahre gern mit dem Bus. Ruf doch morgen an!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Die Wohnung in der Innenstadt ist teurer.', answer: true, explanationRu: 'В центре — 1100 евро, в Нойдорфе — 950. Значит, в центре дороже.' },
            { kind: 'tf', statement: 'Die Wohnung in Neudorf ist kleiner.', answer: false, explanationRu: '«Sie ist größer, sie hat vier Zimmer» — квартира в Нойдорфе больше.' },
            { kind: 'tf', statement: 'Von Neudorf braucht Tom vierzig Minuten zur Arbeit.', answer: true, explanationRu: '«Mit dem Bus ungefähr vierzig Minuten».' },
            { kind: 'tf', statement: 'In der Stadt ist die Schule näher.', answer: false, explanationRu: 'Наоборот: в Нойдорфе школа прямо рядом с домом, а в городе дорога в школу длиннее.' },
            { kind: 'tf', statement: 'Tom findet die Wohnung in Neudorf besser.', answer: true, explanationRu: '«Für die Kinder ist Neudorf am besten» — он выбирает Нойдорф.' },
          ],
        },
      ],
    },
  ],
};
