import type { VocabItem } from '../../types';

// Word bank A1 · Unit 11 — Freizeit und Hobbys
export const words: VocabItem[] = [
  // Sport
  { de: 'joggen', forms: 'er joggt', pos: 'verb', ru: 'бегать трусцой', example: 'Ich jogge jeden Morgen.', exampleRu: 'Я бегаю каждое утро.', pronRu: 'ДЖО-ген' },
  { de: 'Rad fahren', forms: 'er fährt Rad', pos: 'phrase', ru: 'кататься на велосипеде', example: 'Ich fahre gern Rad.', exampleRu: 'Я люблю кататься на велосипеде.', pronRu: 'РА:Т фа:-рэн' },
  { de: 'Ski fahren', forms: 'er fährt Ski', pos: 'phrase', ru: 'кататься на лыжах', example: 'Fährst du gern Ski?', exampleRu: 'Ты любишь кататься на лыжах?', pronRu: 'ШИ: фа:-рэн' },
  { de: 'spazieren gehen', forms: 'er geht spazieren', pos: 'phrase', ru: 'гулять, ходить на прогулку', example: 'Wir gehen am Sonntag spazieren.', exampleRu: 'В воскресенье мы идём гулять.', pronRu: 'шпа-ЦИ:-рэн ге:-эн' },
  { de: 'Tennis', article: 'das', plural: '–', pos: 'noun', ru: 'теннис', example: 'Wir spielen am Montag Tennis.', exampleRu: 'В понедельник мы играем в теннис.', pronRu: 'дас ТЭ-нис' },
  { de: 'Volleyball', article: 'der', plural: '–', pos: 'noun', ru: 'волейбол', example: 'Spielst du gern Volleyball?', exampleRu: 'Ты любишь играть в волейбол?', pronRu: 'дер ВО-ли-баль' },
  { de: 'Schwimmbad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'бассейн', example: 'Das Schwimmbad macht um neun Uhr auf.', exampleRu: 'Бассейн открывается в девять часов.', pronRu: 'дас ШВИМ-ба:т' },
  { de: 'Fitnessstudio', article: 'das', plural: '-s', pos: 'noun', ru: 'фитнес-клуб, спортзал', example: 'Das Fitnessstudio ist sehr groß.', exampleRu: 'Фитнес-клуб очень большой.', pronRu: 'дас ФИТ-нэс-шту:-ди-о' },
  { de: 'Spiel', article: 'das', plural: '-e', pos: 'noun', ru: 'игра; матч', example: 'Das Spiel fängt um drei Uhr an.', exampleRu: 'Игра начинается в три часа.', pronRu: 'дас ШПИ:ЛЬ' },
  // Musik & Kunst
  { de: 'Gitarre', article: 'die', plural: '-n', pos: 'noun', ru: 'гитара', example: 'Mein Sohn spielt Gitarre.', exampleRu: 'Мой сын играет на гитаре.', pronRu: 'ди ги-ТА-рэ' },
  { de: 'Klavier', article: 'das', plural: '-e', pos: 'noun', ru: 'пианино, фортепиано', example: 'Spielst du Klavier?', exampleRu: 'Ты играешь на пианино?', pronRu: 'дас кла-ВИ:А' },
  { de: 'Lied', article: 'das', plural: '-er', pos: 'noun', ru: 'песня', example: 'Das Lied ist sehr schön.', exampleRu: 'Песня очень красивая.', pronRu: 'дас ЛИ:Т' },
  { de: 'malen', forms: 'er malt', pos: 'verb', ru: 'рисовать (красками)', example: 'Meine Tochter malt gern.', exampleRu: 'Моя дочь любит рисовать.', pronRu: 'МА:-лэн' },
  { de: 'fotografieren', forms: 'er fotografiert', pos: 'verb', ru: 'фотографировать', example: 'Er fotografiert gern Blumen.', exampleRu: 'Он любит фотографировать цветы.', pronRu: 'фо-то-гра-ФИ:-рэн' },
  { de: 'Film', article: 'der', plural: '-e', pos: 'noun', ru: 'фильм', example: 'Der Film ist sehr gut.', exampleRu: 'Фильм очень хороший.', pronRu: 'дер ФИЛЬМ' },
  { de: 'Theater', article: 'das', plural: '-', pos: 'noun', ru: 'театр', example: 'Das Theater fängt um sieben Uhr an.', exampleRu: 'Спектакль в театре начинается в семь часов.', pronRu: 'дас тэ-А:-та' },
  // zu Hause
  { de: 'Zeitung', article: 'die', plural: '-en', pos: 'noun', ru: 'газета', example: 'Mein Opa liest gern die Zeitung.', exampleRu: 'Мой дедушка любит читать газету.', pronRu: 'ди ЦАЙ-тунг' },
  { de: 'Schach', article: 'das', plural: '–', pos: 'noun', ru: 'шахматы', example: 'Mein Opa spielt gern Schach.', exampleRu: 'Мой дедушка любит играть в шахматы.', pronRu: 'дас ШАХ' },
  { de: 'Karten spielen', forms: 'er spielt Karten', pos: 'phrase', ru: 'играть в карты', example: 'Wir spielen am Abend Karten.', exampleRu: 'Вечером мы играем в карты.', pronRu: 'КАР-тэн шпи:-лэн' },
  { de: 'Computerspiel', article: 'das', plural: '-e', pos: 'noun', ru: 'компьютерная игра', example: 'Mein Sohn spielt gern Computerspiele.', exampleRu: 'Мой сын любит компьютерные игры.', pronRu: 'дас ком-ПЬЮ:-та-шпи:ль' },
  { de: 'chatten', forms: 'er chattet', pos: 'verb', ru: 'переписываться в чате', example: 'Meine Tochter chattet gern.', exampleRu: 'Моя дочь любит переписываться в чате.', pronRu: 'ЧЭ-тэн' },
  { de: 'stricken', forms: 'er strickt', pos: 'verb', ru: 'вязать (спицами)', example: 'Meine Frau strickt gern.', exampleRu: 'Моя жена любит вязать.', pronRu: 'ШТРИ-кэн' },
  { de: 'faulenzen', forms: 'er faulenzt', pos: 'verb', ru: 'бездельничать, лениться', example: 'Am Sonntag faulenze ich.', exampleRu: 'В воскресенье я бездельничаю.', pronRu: 'ФАУЛЬ-эн-цэн' },
  // mit Freunden
  { de: 'Party', article: 'die', plural: '-s', pos: 'noun', ru: 'вечеринка', example: 'Am Samstag machen wir eine Party.', exampleRu: 'В субботу мы устраиваем вечеринку.', pronRu: 'ди ПА:-ти' },
  { de: 'Spaß', article: 'der', plural: '–', pos: 'noun', ru: 'удовольствие, веселье (Das macht Spaß. — Это весело.)', example: 'Tanzen macht Spaß!', exampleRu: 'Танцевать — это весело!', pronRu: 'дер ШПА:С' },
  { de: 'manchmal', pos: 'adv', ru: 'иногда', example: 'Wir spielen manchmal Karten.', exampleRu: 'Мы иногда играем в карты.', pronRu: 'МАНХЬ-маль' },
];
