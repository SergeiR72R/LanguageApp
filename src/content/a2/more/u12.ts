import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Im Mai fliegen wir ___ Spanien.',
      options: ['nach', 'in', 'zu'],
      answer: 0,
      explanationRu: 'Spanien — страна без артикля, вопрос «куда?» → nach.',
    },
    {
      type: 'choice',
      prompt: 'Es ist spät. Ich gehe jetzt ___ Hause.',
      options: ['nach', 'zu', 'in'],
      answer: 0,
      explanationRu: '«Домой» (куда?) — всегда nach Hause.',
    },
    {
      type: 'choice',
      prompt: 'Am Abend bin ich immer ___ Hause.',
      options: ['zu', 'nach', 'bei'],
      answer: 0,
      explanationRu: '«Дома» (где?) — всегда zu Hause. Не путайте: nach Hause — домой, zu Hause — дома.',
    },
    {
      type: 'choice',
      audio: 'Wir sind gerade am See.',
      prompt: 'Послушайте. Где сейчас люди?',
      options: ['На озере', 'На море', 'В горах'],
      answer: 0,
      explanationRu: '«am See» — на озере (der See — озеро). Море — das Meer, горы — die Berge.',
    },
    {
      type: 'gap',
      prompt: 'Im Juli fahren wir ___ die Berge.',
      answers: ['in'],
      explanationRu: 'В горы — in die Berge (куда? → Akkusativ). В горах — in den Bergen.',
    },
    {
      type: 'gap',
      prompt: 'Herr Kim kommt ___ Korea.',
      answers: ['aus'],
      explanationRu: 'Откуда? Из страны → aus. Не von: «von Korea» — ошибка.',
    },
    {
      type: 'choice',
      prompt: 'Wo bist du? – ___ meinem Bruder. Er hat heute Geburtstag.',
      options: ['Bei', 'Zu', 'Nach'],
      answer: 0,
      explanationRu: 'Вопрос «где?» и человек → bei: bei meinem Bruder — у брата. zu — «к кому?».',
    },
    {
      type: 'choice',
      prompt: 'Ich habe Zahnschmerzen. Ich muss heute noch ___ Zahnarzt.',
      options: ['zum', 'beim', 'vom'],
      answer: 0,
      explanationRu: 'Куда? К врачу → zu + dem = zum Zahnarzt. beim — «у врача», vom — «от врача».',
    },
    {
      type: 'gap',
      prompt: 'Wir haben zwei Wochen ___ einer Insel in Griechenland Urlaub gemacht.',
      answers: ['auf'],
      explanationRu: 'На острове (где?) — auf + Dativ: auf einer Insel.',
    },
    {
      type: 'gap',
      audio: 'Fährst du in die Schweiz?',
      prompt: 'Послушайте и напишите пропущенное слово: Fährst du in ___ Schweiz?',
      answers: ['die'],
      explanationRu: 'die Schweiz — страна с артиклем, поэтому «куда?» = in die Schweiz (не nach).',
    },
    {
      type: 'choice',
      prompt: 'Woher kommst du so spät? – ___',
      options: ['Von der Arbeit.', 'Zur Arbeit.', 'Bei der Arbeit.'],
      answer: 0,
      explanationRu: 'Вопрос «откуда?» → von der Arbeit (с работы). zur Arbeit — «на работу», bei der Arbeit — «на работе».',
    },
    {
      type: 'choice',
      prompt: 'Am Wochenende fahren wir ___ See.',
      options: ['an den', 'am', 'im', 'nach'],
      answer: 0,
      explanationRu: 'Куда? К воде → an + Akkusativ: an den See (der See). am See — «где?».',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Wir fahren nach die Türkei.', 'Wir fahren in die Türkei.', 'Wir fahren zu der Türkei.'],
      answer: 1,
      explanationRu: 'Страны с артиклем (die Türkei, die Schweiz, die USA) — с in: in die Türkei.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените «куда?» на «где?». Используйте глагол sein: Ich bin …',
      prompt: 'Ich fahre ans Meer.',
      answers: ['Ich bin am Meer.'],
      explanationRu: 'ans Meer (куда? Akkusativ) → am Meer (где? Dativ).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените «куда?» на «где?». Используйте глагол sein: Ich bin …',
      prompt: 'Ich fahre zu meinen Eltern.',
      answers: ['Ich bin bei meinen Eltern.'],
      explanationRu: 'С людьми: zu (к кому?) → bei (у кого?). Падеж остаётся Dativ: meinen Eltern.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените «где?» на «откуда?». Используйте глагол kommen: Ich komme …',
      prompt: 'Ich bin auf der Insel.',
      answers: ['Ich komme von der Insel.'],
      explanationRu: 'auf der Insel (где?) → von der Insel (откуда?). С острова, с пляжа, с берега — von.',
    },
    {
      type: 'order',
      words: ['Nach', 'dem', 'Frühstück', 'gehen', 'wir', 'an', 'den', 'Strand.'],
      translationRu: 'После завтрака мы идём на пляж.',
      explanationRu: 'Глагол gehen на 2-м месте после «Nach dem Frühstück». На пляж (куда?) — an den Strand.',
    },
    {
      type: 'choice',
      audio: 'Woher kommen Sie? – Aus der Ukraine.',
      prompt: 'Послушайте. Откуда человек?',
      options: ['Из Украины', 'Из Турции', 'Из Швейцарии'],
      answer: 0,
      explanationRu: '«Aus der Ukraine» — из Украины. die Ukraine — страна с артиклем, поэтому aus der.',
    },
    {
      type: 'gap',
      prompt: 'Ich freue mich schon ___ den Urlaub.',
      answers: ['auf'],
      explanationRu: 'Повторение (юнит 11): отпуск впереди → sich freuen auf + Akk.',
    },
    {
      type: 'choice',
      prompt: 'Wenn das Wetter schön ist, ___',
      options: ['gehen wir an den Strand.', 'wir gehen an den Strand.', 'an den Strand wir gehen.'],
      answer: 0,
      explanationRu: 'Повторение (юнит 10): после части с wenn сразу идёт глагол: «…, gehen wir …».',
    },
    {
      type: 'gap',
      prompt: 'Das Hotel am See ist teurer ___ die Pension im Dorf.',
      answers: ['als'],
      explanationRu: 'Повторение (юнит 8): после сравнительной степени (teurer) — als.',
    },
  ],
  reading: [
    {
      title: 'Informationen für unsere Gäste',
      textType: 'Hotelinformation',
      texts: [
        {
          heading: 'Herzlich willkommen im Hotel Bergblick!',
          body: `Frühstück: täglich von 7 bis 10 Uhr im Restaurant im Erdgeschoss. Am Sonntag gibt es Frühstück bis 11 Uhr.

Abreise: Bitte geben Sie Ihren Schlüssel am Tag der Abreise bis 10 Uhr an der Rezeption ab.

Ausflüge: Jeden Dienstag und Freitag fährt um 9 Uhr ein Bus vom Hotel auf den Hochkopf. Vom Gipfel haben Sie eine tolle Aussicht auf drei Länder. Die Fahrt ist für Hotelgäste kostenlos. Bitte melden Sie sich bis zum Abend vorher an der Rezeption an.

Sauna: Die Sauna im Keller ist von 16 bis 21 Uhr geöffnet.

Fahrräder: Bei uns können Sie Fahrräder leihen (10 Euro pro Tag).

Hunde: Hunde sind im Hotel erlaubt, aber nicht im Restaurant.

Wir wünschen Ihnen einen schönen Urlaub!`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Am Sonntag kann man länger frühstücken.', answer: true, explanationRu: 'В будни завтрак до 10, а в воскресенье — до 11 часов.' },
            { kind: 'tf', statement: 'Am Tag der Abreise muss man den Schlüssel bis 12 Uhr abgeben.', answer: false, explanationRu: 'Ключ нужно сдать до 10 часов: «bis 10 Uhr an der Rezeption».' },
            { kind: 'tf', statement: 'Der Bus auf den Hochkopf fährt jeden Tag.', answer: false, explanationRu: 'Автобус ходит только по вторникам и пятницам.' },
            { kind: 'tf', statement: 'Für Hotelgäste kostet die Fahrt nichts.', answer: true, explanationRu: '«Die Fahrt ist für Hotelgäste kostenlos» — для гостей бесплатно.' },
            { kind: 'tf', statement: 'Man darf seinen Hund mit ins Restaurant nehmen.', answer: false, explanationRu: 'Собаки разрешены в отеле, но не в ресторане: «aber nicht im Restaurant».' },
          ],
        },
      ],
    },
    {
      title: 'Grüße von der Insel',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Oma, lieber Opa,

viele Grüße von der Insel Rügen! Wir sind jetzt schon eine Woche hier. Wir wohnen in einer Ferienwohnung in einem kleinen Dorf, nur 300 Meter vom Strand.

Am Anfang war das Wetter leider nicht so gut, es hat zwei Tage geregnet. An diesen Tagen sind wir ins Museum gegangen und haben die Stadt Stralsund besichtigt. Aber am Mittwoch ist endlich die Sonne gekommen, und jetzt gehen wir jeden Tag ans Meer. Das Wasser ist kalt, aber Leon badet jeden Tag.

Gestern haben wir mit dem Schiff einen Ausflug auf die Insel Hiddensee gemacht. Dort gibt es keine Autos, nur Fahrräder und Pferde!

Am Samstag fahren wir wieder nach Hause. Am Sonntag kommen wir dann zu euch zum Kaffee. Wir bringen euch auch ein Souvenir mit!

Viele Küsse
Eure Mia und Leon`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте письмо. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wo wohnt die Familie?',
              options: ['In einem Hotel in Stralsund', 'In einer Ferienwohnung in einem Dorf', 'Auf einem Campingplatz am Strand'],
              answer: 1,
              explanationRu: '«Wir wohnen in einer Ferienwohnung in einem kleinen Dorf».',
            },
            {
              kind: 'mc',
              question: 'Was hat die Familie an den Regentagen gemacht?',
              options: ['Sie war im Museum und in Stralsund.', 'Sie war am Strand.', 'Sie hat eine Fahrt mit dem Schiff gemacht.'],
              answer: 0,
              explanationRu: '«An diesen Tagen sind wir ins Museum gegangen und haben die Stadt Stralsund besichtigt».',
            },
            {
              kind: 'mc',
              question: 'Was gibt es auf Hiddensee nicht?',
              options: ['Fahrräder', 'Autos', 'Pferde'],
              answer: 1,
              explanationRu: '«Dort gibt es keine Autos, nur Fahrräder und Pferde».',
            },
            {
              kind: 'mc',
              question: 'Wann besuchen Mia und Leon Oma und Opa?',
              options: ['Am Samstag', 'Am Sonntag', 'Am Mittwoch'],
              answer: 1,
              explanationRu: 'В субботу они едут домой, а в воскресенье придут к бабушке с дедушкой на кофе.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Ausflug zur Insel Mainau',
      kind: 'monolog',
      situation: 'Sie sind im Bus. Der Reiseleiter spricht.',
      text: `Guten Morgen, liebe Gäste! Mein Name ist Thomas, ich bin heute Ihr Reiseleiter. Wir fahren jetzt vom Hotel zum Hafen. Dort nehmen wir um zehn Uhr das Schiff auf die Insel Mainau. Auf der Insel haben Sie drei Stunden Zeit. Sie können den großen Park mit vielen Blumen besichtigen oder im Restaurant am Ufer essen. Bitte seien Sie um 14 Uhr wieder am Schiff. Dann fahren wir zurück nach Konstanz. Wenn Sie möchten, können Sie am Nachmittag mit mir noch eine Führung durch die Altstadt machen. Die Führung kostet fünf Euro. Um 18 Uhr sind wir wieder im Hotel.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wohin fährt der Bus jetzt?',
              options: ['Zum Hafen', 'In die Altstadt', 'Auf die Insel'],
              answer: 0,
              explanationRu: '«Wir fahren jetzt vom Hotel zum Hafen» — сначала в порт, а на остров — уже на теплоходе.',
            },
            {
              kind: 'mc',
              question: 'Wie lange bleiben die Gäste auf der Insel?',
              options: ['Zwei Stunden', 'Drei Stunden', 'Fünf Stunden'],
              answer: 1,
              explanationRu: '«Auf der Insel haben Sie drei Stunden Zeit».',
            },
            {
              kind: 'mc',
              question: 'Wann sollen die Gäste wieder am Schiff sein?',
              options: ['Um 10 Uhr', 'Um 14 Uhr', 'Um 18 Uhr'],
              answer: 1,
              explanationRu: '«Bitte seien Sie um 14 Uhr wieder am Schiff». В 18 часов все вернутся в отель.',
            },
            {
              kind: 'mc',
              question: 'Was kostet fünf Euro?',
              options: ['Das Essen im Restaurant', 'Die Fahrt mit dem Schiff', 'Die Führung durch die Altstadt'],
              answer: 2,
              explanationRu: '«Die Führung kostet fünf Euro» — экскурсия по старому городу.',
            },
          ],
        },
      ],
    },
    {
      title: 'An der Rezeption',
      kind: 'dialog',
      speakers: { A: 'Mitarbeiter an der Rezeption', B: 'Frau Sokolowa' },
      situation: 'Eine Frau kommt am Abend in ein Hotel.',
      text: `A: Guten Abend! Willkommen im Hotel am Markt.
B: Guten Abend. Ich habe ein Zimmer reserviert. Mein Name ist Sokolowa.
A: Einen Moment … Ja, Frau Sokolowa, ein Einzelzimmer für drei Nächte. Woher kommen Sie heute?
B: Aus Dresden. Ich bin mit dem Zug gekommen.
A: Hier ist Ihr Schlüssel. Sie haben Zimmer 315 im dritten Stock. Der Aufzug ist dort links.
B: Danke. Wann gibt es Frühstück?
A: Von halb sieben bis zehn, im Restaurant im Erdgeschoss.
B: Und kann ich im Hotel auch zu Abend essen?
A: Leider nicht, unser Restaurant ist am Abend geschlossen. Aber direkt neben dem Hotel ist eine gute Pizzeria.
B: Gut. Noch eine Frage: Ich möchte morgen zum Schloss. Wie komme ich dahin?
A: Am besten mit der Straßenbahn, Linie 4. Die Haltestelle ist direkt vor dem Hotel.
B: Vielen Dank!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Frau Sokolowa hat ein Doppelzimmer reserviert.', answer: false, explanationRu: 'У неё одноместный номер: «ein Einzelzimmer für drei Nächte».' },
            { kind: 'tf', statement: 'Sie ist mit dem Zug aus Dresden gekommen.', answer: true, explanationRu: '«Aus Dresden. Ich bin mit dem Zug gekommen».' },
            { kind: 'tf', statement: 'Ihr Zimmer ist im dritten Stock.', answer: true, explanationRu: '«Zimmer 315 im dritten Stock».' },
            { kind: 'tf', statement: 'Im Hotel kann man am Abend essen.', answer: false, explanationRu: 'Ресторан вечером закрыт, но рядом есть пиццерия.' },
            { kind: 'tf', statement: 'Zum Schloss fährt man am besten mit dem Bus.', answer: false, explanationRu: 'Лучше всего на трамвае: «mit der Straßenbahn, Linie 4».' },
          ],
        },
      ],
    },
  ],
};
