import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ist ein ___ Rock.',
      options: ['kurzer', 'kurze', 'kurzes', 'kurzen'],
      answer: 0,
      explanationRu: 'der Rock — мужской род, Nominativ. После ein прилагательное берёт окончание артикля der: ein kurzer Rock.',
    },
    {
      type: 'choice',
      prompt: 'Ich habe eine ___ Bluse gekauft.',
      options: ['weiße', 'weißen', 'weißer', 'weißes'],
      answer: 0,
      explanationRu: 'die Bluse — женский род. В Akkusativ женский род не меняется: eine weiße Bluse.',
    },
    {
      type: 'choice',
      prompt: 'Hast du ein ___ Kleid für die Party?',
      options: ['elegantes', 'eleganter', 'eleganten', 'elegante'],
      answer: 0,
      explanationRu: 'das Kleid — средний род. После ein (Nominativ и Akkusativ) окончание -es: ein elegantes Kleid.',
    },
    {
      type: 'choice',
      audio: 'Die Hose ist mir zu eng.',
      prompt: 'Какая проблема у покупателя?',
      options: ['Die Hose ist zu eng.', 'Die Hose ist zu weit.', 'Die Hose ist zu teuer.', 'Die Hose ist zu kurz.'],
      answer: 0,
      explanationRu: 'Вы слышите «zu eng» — брюки слишком тесные. weit — широкие, kurz — короткие, teuer — дорогие.',
    },
    {
      type: 'choice',
      audio: 'Ich trage heute meinen neuen Anzug.',
      prompt: 'Что вы слышите?',
      options: ['meinen neuen Anzug', 'meinen neuer Anzug', 'mein neuer Anzug', 'meine neuen Anzüge'],
      answer: 0,
      explanationRu: 'tragen + Akkusativ, der Anzug — мужской род: meinen neuen Anzug. И артикль, и прилагательное кончаются на -en.',
    },
    {
      type: 'choice',
      prompt: 'Das sind keine ___ Schuhe.',
      options: ['billigen', 'billige', 'billiger', 'billiges'],
      answer: 0,
      explanationRu: 'Множественное число после kein (и mein, dein…) — всегда -en: keine billigen Schuhe.',
    },
    {
      type: 'choice',
      prompt: 'Sie geht mit einer ___ Freundin einkaufen.',
      options: ['guten', 'gute', 'guter', 'gutes'],
      answer: 0,
      explanationRu: 'mit требует Dativ. В Dativ прилагательное после ein/eine всегда получает -en: mit einer guten Freundin.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Der Pullover ist warm.', 'Der Pullover ist warmer.', 'Der Pullover ist warme.'],
      answer: 0,
      explanationRu: 'После глагола sein прилагательное не изменяется: Der Pullover ist warm. Окончания нужны только перед существительным.',
    },
    {
      type: 'gap',
      prompt: 'Ich suche ein ___ Hemd.',
      answers: ['blaues'],
      hintRu: 'blau',
      explanationRu: 'das Hemd — средний род, Akkusativ после suchen. Окончание -es, как в Nominativ: ein blaues Hemd.',
    },
    {
      type: 'gap',
      prompt: 'Mein Mann braucht einen ___ Anzug.',
      answers: ['schwarzen'],
      hintRu: 'schwarz',
      explanationRu: 'brauchen + Akkusativ, der Anzug — мужской род: einen schwarzen Anzug.',
    },
    {
      type: 'gap',
      prompt: 'Unsere ___ Wohnung hat einen großen Kleiderschrank.',
      answers: ['neue'],
      hintRu: 'neu',
      explanationRu: 'die Wohnung — женский род, Nominativ (подлежащее): unsere neue Wohnung — окончание -e.',
    },
    {
      type: 'gap',
      audio: 'Ich suche bequeme Schuhe.',
      prompt: 'Напишите прилагательное, которое вы слышите: Ich suche ___ Schuhe.',
      answers: ['bequeme'],
      explanationRu: 'Множественное число без артикля — окончание -e: bequeme Schuhe. (С kein/mein было бы -en: keine bequemen Schuhe.)',
    },
    {
      type: 'gap',
      audio: 'Er hat keine warmen Handschuhe.',
      prompt: 'Напишите прилагательное: keine ___ Handschuhe',
      answers: ['warmen'],
      explanationRu: 'После keine во множественном числе — окончание -en: keine warmen Handschuhe.',
    },
    {
      type: 'gap',
      prompt: 'Die Jacke ist schön, aber ein bisschen zu ___.',
      answers: ['teuer'],
      hintRu: 'teuer',
      explanationRu: 'После sein (ist) прилагательное без окончания: Die Jacke ist zu teuer.',
    },
    {
      type: 'gap',
      prompt: 'Das ist aber ein ___ Mantel!',
      answers: ['teurer'],
      hintRu: 'teuer',
      explanationRu: 'Перед существительным мужского рода после ein — окончание -er. teuer при этом теряет -e-: ein teurer Mantel.',
    },
    {
      type: 'order',
      words: ['Ich', 'möchte', 'ein', 'kariertes', 'Hemd', 'anprobieren.'],
      translationRu: 'Я хотел бы примерить рубашку в клетку.',
      explanationRu: 'Модальный глагол möchte на втором месте, инфинитив anprobieren — в конце. Между ними: ein kariertes Hemd (средний род, -es).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените der на ein и измените окончание прилагательного.',
      prompt: 'Das ist der neue Verkäufer.',
      answers: ['Das ist ein neuer Verkäufer.', 'Das ist ein neuer Verkäufer'],
      explanationRu: 'После der окончание -e (der neue), после ein в мужском роде — -er: ein neuer Verkäufer.',
    },
    {
      type: 'choice',
      prompt: 'Gestern ___ ich in die Stadt gefahren und habe eine Jacke gekauft.',
      options: ['bin', 'habe', 'war', 'hatte'],
      answer: 0,
      explanationRu: 'Повторение (юнит 1): fahren — глагол движения, перфект с sein: ich bin gefahren.',
    },
    {
      type: 'order',
      words: ['Ich', 'kaufe', 'die Jacke,', 'weil', 'sie', 'reduziert', 'ist.'],
      translationRu: 'Я покупаю куртку, потому что она со скидкой.',
      explanationRu: 'Повторение (юнит 3): после weil спрягаемый глагол (ist) стоит в самом конце.',
    },
    {
      type: 'choice',
      prompt: 'Warte bitte, ich ziehe ___ noch schnell um.',
      options: ['mich', 'mir', 'sich', 'dich'],
      answer: 0,
      explanationRu: 'Повторение (юнит 5): sich umziehen — переодеваться. С ich возвратное местоимение — mich: ich ziehe mich um.',
    },
  ],
  reading: [
    {
      title: 'Im Kaufhaus',
      textType: 'Informationstafel',
      texts: [
        {
          heading: 'Kaufhaus Lindner – Wegweiser',
          body: `4. Stock: Restaurant mit Dachterrasse, Toiletten, Kundenservice (Umtausch und Reklamationen)
3. Stock: Sport und Freizeit: Sportkleidung, Turnschuhe, Bademode, Fahrräder, Campingartikel
2. Stock: Herrenmode: Anzüge, Hemden, Krawatten, Jacken und Mäntel, Herrenschuhe
1. Stock: Damenmode: Kleider, Röcke, Blusen, Hosen, Damenschuhe und Taschen; Kindermode
Erdgeschoss: Kosmetik, Schmuck und Uhren, Sonnenbrillen, Schals, Mützen und Handschuhe, Zeitschriften
Untergeschoss: Supermarkt, Getränke, Haushaltswaren, Bäckerei

Öffnungszeiten: Montag bis Samstag von 9.30 bis 20 Uhr. Rolltreppen und Aufzüge finden Sie neben dem Haupteingang. Kundenparkplätze gibt es hinter dem Kaufhaus.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Informationstafel. Wohin gehen Sie? Wählen Sie die richtige Lösung.',
          instructionRu: 'Прочитайте указатель в универмаге. Куда вы пойдёте? Выберите правильный ответ. «anderes Stockwerk» — «другой этаж».',
          items: [
            {
              kind: 'mc',
              question: 'Sie möchten für Ihren Mann ein Hemd kaufen.',
              options: ['1. Stock', '2. Stock', 'anderes Stockwerk'],
              answer: 1,
              explanationRu: 'Рубашки (Hemden) — в мужском отделе (Herrenmode) на 2. Stock.',
            },
            {
              kind: 'mc',
              question: 'Ihre neue Hose ist zu klein. Sie möchten sie umtauschen.',
              options: ['Erdgeschoss', '1. Stock', 'anderes Stockwerk'],
              answer: 2,
              explanationRu: 'Обмен (Umtausch) — в службе клиентов (Kundenservice) на 4. Stock, а не в отделе брюк. Значит, «другой этаж».',
            },
            {
              kind: 'mc',
              question: 'Ihre Tochter braucht einen Badeanzug für den Schwimmkurs.',
              options: ['1. Stock', '3. Stock', 'Untergeschoss'],
              answer: 1,
              explanationRu: 'Купальники — это Bademode, она на 3. Stock (Sport und Freizeit).',
            },
            {
              kind: 'mc',
              question: 'Sie suchen warme Handschuhe.',
              options: ['Erdgeschoss', '2. Stock', '3. Stock'],
              answer: 0,
              explanationRu: '«Schals, Mützen und Handschuhe» — в Erdgeschoss (первый этаж по-русски).',
            },
            {
              kind: 'mc',
              question: 'Sie möchten im Kaufhaus zu Mittag essen.',
              options: ['Untergeschoss', 'Erdgeschoss', 'anderes Stockwerk'],
              answer: 2,
              explanationRu: 'Ресторан находится на 4. Stock. В Untergeschoss — супермаркет и пекарня, а не ресторан.',
            },
          ],
        },
      ],
    },
    {
      title: 'Ein neuer Mantel',
      textType: 'E-Mail',
      texts: [
        {
          body: `Liebe Sabine,

wie geht es dir? Am Samstag war ich mit meiner Schwester im Kaufhaus Lindner. Dort gibt es gerade viele Sonderangebote. Ich habe einen schönen Wintermantel gefunden. Er ist dunkelgrün und aus Wolle. Normalerweise kostet er 199 Euro, aber er war reduziert, und ich habe nur 120 Euro bezahlt! Meine Schwester hat ein elegantes Kleid für die Hochzeit von ihrer Freundin gekauft.

Leider habe ich zu Hause ein Problem gesehen: Am Mantel fehlt ein Knopf. Am Montag gehe ich noch einmal ins Kaufhaus und tausche den Mantel um. Hoffentlich haben sie noch einen in meiner Größe!

Kommst du mit? Danach können wir im Restaurant im vierten Stock einen Kaffee trinken. Ich warte um 15 Uhr am Eingang.

Liebe Grüße
Olga`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die E-Mail. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте письмо. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Olga war am Samstag allein im Kaufhaus.', answer: false, explanationRu: 'Она была там с сестрой: «mit meiner Schwester».' },
            { kind: 'tf', statement: 'Olga hat für den Mantel 120 Euro bezahlt.', answer: true, explanationRu: 'Пальто было со скидкой: «ich habe nur 120 Euro bezahlt».' },
            { kind: 'tf', statement: 'Die Schwester hat auch einen Mantel gekauft.', answer: false, explanationRu: 'Сестра купила элегантное платье (ein elegantes Kleid), а не пальто.' },
            { kind: 'tf', statement: 'Mit dem Mantel gibt es ein Problem.', answer: true, explanationRu: '«Am Mantel fehlt ein Knopf» — не хватает пуговицы.' },
            { kind: 'tf', statement: 'Olga möchte am Montag ihr Geld zurück.', answer: false, explanationRu: 'Она хочет обменять пальто (tausche den Mantel um) на другое в своём размере, а не вернуть деньги.' },
            { kind: 'tf', statement: 'Olga möchte Sabine um 15 Uhr am Eingang treffen.', answer: true, explanationRu: '«Ich warte um 15 Uhr am Eingang» — она будет ждать подругу у входа.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Durchsage im Kaufhaus',
      kind: 'monolog',
      situation: 'Sie sind im Kaufhaus und hören eine Durchsage.',
      text: `Liebe Kundinnen und Kunden, herzlich willkommen im Kaufhaus Lindner! Heute ist unser großer Aktionstag. Alle Wintermäntel und Winterjacken im zweiten Stock sind um dreißig Prozent reduziert. In unserer Schuhabteilung im ersten Stock finden Sie warme Stiefel schon ab neununddreißig Euro. Und für unsere kleinen Kunden: Jedes Kind bekommt heute an der Kasse im Erdgeschoss einen bunten Luftballon. Bitte beachten Sie: Heute schließt das Kaufhaus schon um achtzehn Uhr. Vielen Dank für Ihren Einkauf!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist heute reduziert?',
              options: ['Wintermäntel und Winterjacken', 'Alle Schuhe', 'Alle Sachen im Kaufhaus'],
              answer: 0,
              explanationRu: '«Alle Wintermäntel und Winterjacken … sind um dreißig Prozent reduziert».',
            },
            {
              kind: 'mc',
              question: 'Wo gibt es warme Stiefel?',
              options: ['Im Erdgeschoss', 'Im ersten Stock', 'Im zweiten Stock'],
              answer: 1,
              explanationRu: 'Отдел обуви (Schuhabteilung) — «im ersten Stock».',
            },
            {
              kind: 'mc',
              question: 'Was kosten die Stiefel?',
              options: ['Ab 30 Euro', 'Ab 39 Euro', 'Ab 90 Euro'],
              answer: 1,
              explanationRu: '«schon ab neununddreißig Euro» — от 39 евро. 30 процентов — это скидка на куртки.',
            },
          ],
        },
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Kinder bekommen an der Kasse einen Luftballon.', answer: true, explanationRu: '«Jedes Kind bekommt … einen bunten Luftballon» — каждый ребёнок получает воздушный шарик.' },
            { kind: 'tf', statement: 'Das Kaufhaus ist heute bis 20 Uhr geöffnet.', answer: false, explanationRu: 'Сегодня магазин закрывается уже в 18 часов: «schon um achtzehn Uhr».' },
          ],
        },
      ],
    },
    {
      title: 'Was ziehst du zur Hochzeit an?',
      kind: 'dialog',
      speakers: { A: 'Maria', B: 'Lena' },
      situation: 'Zwei Freundinnen sprechen am Telefon über eine Hochzeit.',
      text: `A: Hallo Lena! Was ziehst du am Samstag zur Hochzeit von Jana an?
B: Ich weiß es noch nicht. Ich habe kein elegantes Kleid. Mein blaues Kleid ist schon sehr alt.
A: Und dein schwarzes Kleid? Das ist doch sehr schön.
B: Schwarz zu einer Hochzeit? Nein, das finde ich nicht so gut.
A: Stimmt. Dann gehen wir doch morgen zusammen einkaufen! Bei Mode Krause gibt es gerade viele Sonderangebote.
B: Gute Idee! Ich brauche auch neue Schuhe. Meine alten Schuhe sind nicht bequem, und wir tanzen bestimmt viel.
A: Ich habe letzte Woche einen hellgrünen Rock und eine weiße Bluse gekauft. Dazu trage ich meine neue Kette.
B: Das klingt toll. Treffen wir uns morgen um zehn vor dem Geschäft?
A: Lieber um elf. Morgens muss ich noch arbeiten.
B: Okay, bis morgen!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Lena hat schon ein neues Kleid für die Hochzeit.', answer: false, explanationRu: '«Ich habe kein elegantes Kleid» — подходящего платья у неё нет.' },
            { kind: 'tf', statement: 'Lena möchte auf der Hochzeit kein schwarzes Kleid tragen.', answer: true, explanationRu: '«Schwarz zu einer Hochzeit? Nein, das finde ich nicht so gut.»' },
            { kind: 'tf', statement: 'Lena braucht auch neue Schuhe.', answer: true, explanationRu: '«Ich brauche auch neue Schuhe» — старые неудобные.' },
            { kind: 'tf', statement: 'Maria trägt auf der Hochzeit einen hellgrünen Rock.', answer: true, explanationRu: 'Мария купила светло-зелёную юбку и белую блузку и наденет их с новой цепочкой.' },
            { kind: 'tf', statement: 'Die Freundinnen treffen sich um zehn Uhr.', answer: false, explanationRu: 'Лена предлагает в десять, но Мария говорит: «Lieber um elf» — лучше в одиннадцать.' },
          ],
        },
      ],
    },
  ],
};
