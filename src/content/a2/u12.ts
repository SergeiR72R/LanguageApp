import type { Unit } from '../types';

export const unit: Unit = {
  id: 'a2-12',
  level: 'A2',
  order: 12,
  title: 'Reisen und Urlaub',
  titleRu: 'Путешествия и отпуск',
  goalsRu: [
    'Рассказывать, куда вы едете в отпуск, где вы отдыхаете и откуда возвращаетесь',
    'Правильно выбирать предлоги: nach, in, an, auf, zu (куда?), in, an, auf, bei (где?), aus, von (откуда?)',
    'Не путать nach Hause и zu Hause',
    'Бронировать номер в гостинице и спрашивать об экскурсиях',
  ],
  grammar: {
    topic: 'Lokale Präpositionen: Wohin? – Wo? – Woher?',
    topicRu: 'Предлоги места: куда? — где? — откуда?',
    explanationRu: `В немецком очень важно, какой у нас вопрос: **Wohin?** (куда?), **Wo?** (где?) или **Woher?** (откуда?). От этого зависит предлог.

**Wohin? — куда?**
- **nach** — города и большинство стран (они без артикля): nach Wien, nach Italien, nach Russland. И запомните: **nach Hause** — домой.
- **in + Akk** — страны с артиклем (die Schweiz, die Türkei, die USA) и места, куда мы входим внутрь: in die Schweiz, ins Hotel, in die Berge.
- **an + Akk** — к воде, на берег: ans Meer, an den See, an den Strand.
- **auf + Akk** — на остров, на открытое место: auf die Insel, auf den Campingplatz.
- **zu + Dat** — к людям и «к точке»: zu Freunden, zum Arzt, zum Bahnhof.

**Wo? — где?** Те же in, an, auf, но с **Dativ** (как в юните 4), а у людей — **bei**: in Wien, in der Schweiz, am Meer, auf der Insel, bei Freunden, beim Arzt. И: **zu Hause** — дома.

**Woher? — откуда?**
- **aus** — из страны, города, здания: aus Russland, aus der Türkei, aus dem Hotel.
- **von** — от людей, с берега, с острова, «от точки»: von Freunden, vom Strand, vom Arzt. И: **von zu Hause** — из дома.

**Подсказка:** zu → bei → von (люди: к кому? — у кого? — от кого?); in → in → aus (внутрь — внутри — изнутри).

**Типичные ошибки русскоговорящих:**
- ~~nach die Schweiz~~ → **in die Schweiz** (страна с артиклем).
- ~~Ich fahre nach Oma~~ → **zu Oma**; ~~zu Berlin~~ → **nach Berlin**.
- ~~Ich bin nach Hause~~ → **zu Hause**; ~~Ich gehe zu Hause~~ → **nach Hause**.
- Русское «**на** море» — это **am Meer / ans Meer**, а не auf dem Meer (это «по морю, на корабле»).
- ~~von Russland~~ → **aus Russland**.`,
    table: [
      ['', 'Wohin? (куда?)', 'Wo? (где?)', 'Woher? (откуда?)'],
      ['город, страна без артикля', 'nach Berlin, nach Spanien', 'in Berlin, in Spanien', 'aus Berlin, aus Spanien'],
      ['страна с артиклем', 'in die Schweiz, in die Türkei', 'in der Schweiz, in der Türkei', 'aus der Schweiz, aus der Türkei'],
      ['здание, горы', 'ins Hotel, in die Berge', 'im Hotel, in den Bergen', 'aus dem Hotel, aus den Bergen'],
      ['вода, берег', 'ans Meer, an den See', 'am Meer, am See', 'vom Meer, vom See'],
      ['остров', 'auf die Insel', 'auf der Insel', 'von der Insel'],
      ['человек', 'zu Oma, zum Arzt', 'bei Oma, beim Arzt', 'von Oma, vom Arzt'],
      ['дом', 'nach Hause', 'zu Hause', 'von zu Hause'],
    ],
    examples: [
      { de: 'Im Sommer fahren wir nach Österreich in die Berge.', ru: 'Летом мы едем в Австрию, в горы.' },
      { de: 'Meine Schwester wohnt in der Schweiz.', ru: 'Моя сестра живёт в Швейцарии.' },
      { de: 'Wir haben eine Woche am Meer gewohnt.', ru: 'Мы неделю жили на море.' },
      { de: 'Morgen machen wir einen Ausflug auf die Insel.', ru: 'Завтра мы едем на экскурсию на остров.' },
      { de: 'Am Wochenende fahre ich zu meinen Eltern. Ich bin dann bei meinen Eltern.', ru: 'В выходные я еду к родителям. Я тогда буду у родителей.' },
      { de: 'Woher kommst du gerade? – Vom Strand.', ru: 'Откуда ты сейчас идёшь? — С пляжа.' },
    ],
    exercises: [
      {
        type: 'choice',
        prompt: 'Im Sommer fahren wir ___ Italien.',
        options: ['nach', 'in', 'zu', 'an'],
        answer: 0,
        explanationRu: 'Italien — страна без артикля, вопрос «куда?» → nach Italien.',
      },
      {
        type: 'choice',
        prompt: 'Mein Bruder wohnt ___ der Schweiz.',
        options: ['in', 'nach', 'zu', 'bei'],
        answer: 0,
        explanationRu: 'Вопрос «где?», страна с артиклем (die Schweiz) → in + Dativ: in der Schweiz.',
      },
      {
        type: 'choice',
        prompt: 'In den Ferien fahren wir ___ Meer.',
        options: ['ans', 'am', 'nach', 'im'],
        answer: 0,
        explanationRu: 'К воде — предлог an. Вопрос «куда?» → Akkusativ: an + das Meer = ans Meer. (am Meer — «где?»)',
      },
      {
        type: 'choice',
        prompt: 'Am Wochenende sind wir ___ meinen Eltern.',
        options: ['bei', 'zu', 'nach', 'an'],
        answer: 0,
        explanationRu: 'Вопрос «где?» (sind), речь о людях → bei: bei meinen Eltern — у моих родителей.',
      },
      {
        type: 'gap',
        prompt: 'Nach der Arbeit gehe ich direkt nach ___.',
        answers: ['Hause'],
        explanationRu: 'Домой (куда?) — nach Hause. Дома (где?) — zu Hause.',
      },
      {
        type: 'gap',
        prompt: 'Unser Hotel liegt direkt ___ Meer.',
        answers: ['am'],
        explanationRu: 'Вопрос «где?» (liegt), у воды → an + Dativ: an dem Meer = am Meer.',
      },
      {
        type: 'gap',
        prompt: 'Frau Yilmaz kommt ___ der Türkei.',
        answers: ['aus'],
        explanationRu: 'Откуда? Из страны → aus. Türkei — с артиклем (die Türkei), поэтому aus der Türkei.',
      },
      {
        type: 'choice',
        prompt: 'Morgen machen wir einen Ausflug ___ die Insel.',
        options: ['auf', 'nach', 'in', 'an'],
        answer: 0,
        explanationRu: 'На остров — auf + Akkusativ: auf die Insel. (На острове — auf der Insel.)',
      },
      {
        type: 'choice',
        prompt: 'Wohin fährst du? – ___',
        options: ['Zu meiner Tante.', 'Bei meiner Tante.', 'Von meiner Tante.'],
        answer: 0,
        explanationRu: 'Вопрос «куда?» и речь о человеке → zu: zu meiner Tante. bei — «где?», von — «откуда?».',
      },
      {
        type: 'order',
        words: ['Im', 'August', 'fliegen', 'wir', 'in', 'die', 'Türkei.'],
        translationRu: 'В августе мы летим в Турцию.',
        explanationRu: 'Im August на 1-м месте, глагол fliegen — на 2-м. die Türkei — страна с артиклем, поэтому in die Türkei, а не nach.',
      },
      {
        type: 'choice',
        audio: 'Wir fahren dieses Jahr in die Berge.',
        prompt: 'Послушайте. Куда едут люди?',
        options: ['В горы', 'На море', 'К родителям'],
        answer: 0,
        explanationRu: '«in die Berge» — в горы. Море было бы «ans Meer», родители — «zu den Eltern».',
      },
      {
        type: 'gap',
        audio: 'Ich komme gerade vom Arzt.',
        prompt: 'Послушайте и напишите пропущенное слово: Ich komme gerade ___ Arzt.',
        answers: ['vom'],
        explanationRu: 'Откуда? От человека / из кабинета врача → von + dem = vom Arzt.',
      },
    ],
  },
  vocab: [
    { de: 'Unterkunft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'жильё (на время поездки), место для ночлега', example: 'Wir suchen eine billige Unterkunft in Hamburg.', exampleRu: 'Мы ищем недорогое жильё в Гамбурге.', pronRu: 'ди УН-та-кунфт' },
    { de: 'Ferienwohnung', article: 'die', plural: '-en', pos: 'noun', ru: 'квартира для отдыха (съёмная на отпуск)', example: 'Die Ferienwohnung hat zwei Zimmer und eine Küche.', exampleRu: 'В квартире для отдыха две комнаты и кухня.', pronRu: 'ди ФЕ:-ри-ен-во:-нунг' },
    { de: 'Doppelzimmer', article: 'das', plural: '-', pos: 'noun', ru: 'двухместный номер (das Einzelzimmer — одноместный)', example: 'Ich möchte ein Doppelzimmer für drei Nächte.', exampleRu: 'Мне нужен двухместный номер на три ночи.', pronRu: 'дас ДО-пель-ци-ма' },
    { de: 'Übernachtung', article: 'die', plural: '-en', pos: 'noun', ru: 'ночёвка, проживание (за одну ночь)', example: 'Eine Übernachtung mit Frühstück kostet 70 Euro.', exampleRu: 'Ночь с завтраком стоит 70 евро.', pronRu: 'ди ю-ба-НАХ-тунг' },
    { de: 'Rezeption', article: 'die', plural: '-en', pos: 'noun', ru: 'стойка регистрации, ресепшен', example: 'Den Schlüssel bekommen Sie an der Rezeption.', exampleRu: 'Ключ вы получите на ресепшене.', pronRu: 'ди рэ-цэп-ЦЬО:Н' },
    { de: 'buchen', forms: 'bucht, hat gebucht', pos: 'verb', ru: 'бронировать, заказывать', example: 'Ich habe das Hotel im Internet gebucht.', exampleRu: 'Я забронировал отель в интернете.', pronRu: 'БУ:-хен' },
    { de: 'übernachten', forms: 'übernachtet, hat übernachtet', pos: 'verb', ru: 'ночевать', example: 'Wir übernachten bei Freunden.', exampleRu: 'Мы ночуем у друзей.', pronRu: 'ю-ба-НАХ-тэн' },
    { de: 'packen', forms: 'packt, hat gepackt', pos: 'verb', ru: 'упаковывать, собирать (вещи)', example: 'Hast du schon den Koffer gepackt?', exampleRu: 'Ты уже собрал чемодан?', pronRu: 'ПА-кен' },
    { de: 'Koffer', article: 'der', plural: '-', pos: 'noun', ru: 'чемодан', example: 'Mein Koffer ist zu schwer.', exampleRu: 'Мой чемодан слишком тяжёлый.', pronRu: 'дер КО-фа' },
    { de: 'Reisepass', article: 'der', plural: '-¨e', pos: 'noun', ru: 'заграничный паспорт', example: 'Vergiss deinen Reisepass nicht!', exampleRu: 'Не забудь свой загранпаспорт!', pronRu: 'дер РАЙ-зэ-пас' },
    { de: 'Ausland', article: 'das', plural: '–', pos: 'noun', ru: 'заграница (ins Ausland — за границу, im Ausland — за границей)', example: 'Wir machen dieses Jahr Urlaub im Ausland.', exampleRu: 'В этом году мы отдыхаем за границей.', pronRu: 'дас АУС-лант' },
    { de: 'Strand', article: 'der', plural: '-¨e', pos: 'noun', ru: 'пляж', example: 'Am Nachmittag liegen wir am Strand.', exampleRu: 'После обеда мы лежим на пляже.', pronRu: 'дер ШТРАНТ' },
    { de: 'Meer', article: 'das', plural: '-e', pos: 'noun', ru: 'море', example: 'Im Sommer fahren wir ans Meer.', exampleRu: 'Летом мы едем на море.', pronRu: 'дас МЕ:Р' },
    { de: 'See', article: 'der', plural: '-n', pos: 'noun', ru: 'озеро (внимание: die See — море)', example: 'Wir wohnen in einem Hotel am See.', exampleRu: 'Мы живём в гостинице на озере.', pronRu: 'дер ЗЕ:' },
    { de: 'Insel', article: 'die', plural: '-n', pos: 'noun', ru: 'остров', example: 'Rügen ist die größte Insel in Deutschland.', exampleRu: 'Рюген — самый большой остров Германии.', pronRu: 'ди ИН-зель' },
    { de: 'Gebirge', article: 'das', plural: '-', pos: 'noun', ru: 'горы, горный массив', example: 'Im Gebirge ist das Wetter oft kühl.', exampleRu: 'В горах погода часто прохладная.', pronRu: 'дас гэ-БИР-ге' },
    { de: 'Ausflug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'экскурсия, поездка на день', example: 'Am Sonntag machen wir einen Ausflug an den See.', exampleRu: 'В воскресенье мы поедем на экскурсию на озеро.', pronRu: 'дер АУС-флу:к' },
    { de: 'Sehenswürdigkeit', article: 'die', plural: '-en', pos: 'noun', ru: 'достопримечательность', example: 'Der Kölner Dom ist eine berühmte Sehenswürdigkeit.', exampleRu: 'Кёльнский собор — известная достопримечательность.', pronRu: 'ди ЗЕ:-энс-вюр-дихь-кайт' },
    { de: 'Campingplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'кемпинг', example: 'Auf dem Campingplatz schlafen wir im Zelt.', exampleRu: 'В кемпинге мы спим в палатке.', pronRu: 'дер КЭМ-пинг-плац' },
    { de: 'sich erholen', forms: 'erholt sich, hat sich erholt', pos: 'verb', ru: 'отдыхать, восстанавливать силы', example: 'Im Urlaub möchte ich mich gut erholen.', exampleRu: 'В отпуске я хочу хорошо отдохнуть.', pronRu: 'зихь эр-ХО:-лен' },
  ],
  listening: {
    title: 'Urlaubspläne',
    kind: 'dialog',
    text: `A: Hallo Sven! Habt ihr schon Pläne für den Urlaub?
B: Hallo Katja! Ja, wir fahren im Juli an die Ostsee. Wir haben eine Ferienwohnung auf der Insel Usedom gebucht.
A: Toll! Wie lange bleibt ihr dort?
B: Zwei Wochen. Die Wohnung liegt direkt am Strand. Und du? Fährst du wieder nach Spanien?
A: Nein, dieses Jahr nicht. In Spanien ist es mir im Sommer zu heiß. Wir fahren in die Berge, nach Österreich.
B: Ah, schön. Wo übernachtet ihr?
A: In einer kleinen Pension in Tirol. Wir wollen viel wandern und uns erholen.
B: Und eure Kinder? Fahren sie mit?
A: Unser Sohn kommt mit. Unsere Tochter fliegt mit ihrer Freundin in die Türkei.
B: Und euer Hund?
A: Der bleibt bei meiner Mutter. Sie kümmert sich gern um ihn.
B: Dann wünsche ich euch eine gute Reise!`,
    questions: [
      { question: 'Wohin fährt Sven im Juli?', options: ['An die Ostsee', 'Nach Spanien', 'In die Berge'], answer: 0 },
      { question: 'Wo liegt die Ferienwohnung?', options: ['In Tirol', 'Direkt am Strand', 'In der Stadt'], answer: 1 },
      { question: 'Warum fährt Katja nicht nach Spanien?', options: ['Es ist zu teuer.', 'Es ist dort im Sommer zu heiß.', 'Ihr Sohn möchte nicht.'], answer: 1 },
      { question: 'Wo übernachtet Katja?', options: ['In einem großen Hotel', 'In einer kleinen Pension', 'Auf einem Campingplatz'], answer: 1 },
      { question: 'Wo bleibt der Hund?', options: ['Bei Katjas Mutter', 'Bei Sven', 'Bei Katjas Tochter'], answer: 0 },
    ],
  },
  writing: {
    taskRu:
      'Вы в отпуске. Напишите другу или подруге письмо по электронной почте (минимум 50 слов). Расскажите, где вы, где живёте, что вы уже сделали и куда поедете завтра. Используйте предлоги места (nach, in, an, auf, bei, aus).',
    taskDe: 'Sie sind im Urlaub. Schreiben Sie einer Freundin oder einem Freund eine E-Mail.',
    points: ['Wo sind Sie und wo wohnen Sie (Hotel, Pension, Ferienwohnung …)?', 'Was haben Sie schon gemacht?', 'Wohin fahren Sie morgen oder am Wochenende?'],
    minWords: 50,
    usefulPhrases: [
      'Liebe Grüße aus …!',
      'Wir sind seit Montag in … / am Meer / in den Bergen.',
      'Wir wohnen in einem kleinen Hotel direkt am Strand.',
      'Gestern sind wir auf die Insel … gefahren.',
      'Das Wetter ist super / leider nicht so gut.',
      'Morgen machen wir einen Ausflug nach …',
      'Am Sonntag fahren wir wieder nach Hause.',
      'Bis bald!',
    ],
  },
  speaking: {
    scenarioRu:
      'Вы звоните в гостиницу на озере Боденское (Bodensee), чтобы забронировать номер. Сотрудник на ресепшене отвечает на ваши вопросы и рассказывает, куда можно съездить на экскурсию.',
    aiRole:
      'Sie sind Herr Brandt, Mitarbeiter an der Rezeption im Hotel „Seeblick“ in Lindau am Bodensee. Ein Gast ruft an und möchte ein Zimmer buchen. Der Gast lernt Deutsch auf Niveau A2. Sprechen Sie langsam und in kurzen, einfachen Sätzen. Fragen Sie: Wann kommen Sie an? Wie viele Nächte? Einzelzimmer oder Doppelzimmer? Woher kommen Sie? Das Doppelzimmer kostet 95 Euro pro Nacht mit Frühstück. Das Hotel liegt direkt am See, fünf Minuten von der Altstadt. Ausflüge: mit dem Schiff auf die Insel Mainau, nach Österreich oder in die Schweiz, in die Berge. Stellen Sie immer nur eine Frage. Wenn der Gast etwas nicht versteht, sagen Sie es noch einmal einfacher.',
    opener: 'Hotel Seeblick, guten Tag! Was kann ich für Sie tun?',
    tasksRu: [
      'Забронируйте номер: на сколько ночей и для скольких человек (Ich möchte ein Doppelzimmer für … Nächte buchen.).',
      'Спросите, где находится отель (Wo liegt das Hotel? Liegt es am See?).',
      'Спросите, куда можно поехать на экскурсию (Wohin kann man einen Ausflug machen?).',
      'Скажите, откуда вы приедете (Wir kommen aus …).',
    ],
    readAloud: [
      'Wir fahren im Sommer ans Meer.',
      'Meine Tochter wohnt in der Schweiz.',
      'Am Abend gehen wir nach Hause.',
      'Morgen fahren wir auf die Insel.',
      'Ich komme gerade vom Strand.',
    ],
  },
};
