import type { VocabItem } from '../../types';

// Word bank A2 · Unit 15 — Feste und Geschenke
export const words: VocabItem[] = [
  // Feiern und Gäste
  { de: 'Gastgeberin', article: 'die', plural: '-nen', pos: 'noun', ru: 'хозяйка (принимающая гостей)', example: 'Die Gastgeberin hat ein tolles Essen gekocht.', exampleRu: 'Хозяйка приготовила отличный ужин.' },
  { de: 'Gästeliste', article: 'die', plural: '-n', pos: 'noun', ru: 'список гостей', example: 'Auf der Gästeliste stehen dreißig Namen.', exampleRu: 'В списке гостей тридцать имён.' },
  { de: 'Vorbereitung', article: 'die', plural: '-en', pos: 'noun', ru: 'подготовка', example: 'Die Vorbereitung für das Fest hat drei Tage gedauert.', exampleRu: 'Подготовка к празднику заняла три дня.', pronRu: 'ФО:Р-бэ-рай-тунг' },
  { de: 'Zusage', article: 'die', plural: '-n', pos: 'noun', ru: 'согласие (прийти)', example: 'Wir haben schon zwanzig Zusagen für die Party.', exampleRu: 'Уже двадцать человек подтвердили, что придут на вечеринку.' },
  { de: 'Geburtstagskuchen', article: 'der', plural: '-', pos: 'noun', ru: 'праздничный торт (на день рождения)', example: 'Der Geburtstagskuchen hat zehn Kerzen.', exampleRu: 'На праздничном торте десять свечей.' },
  { de: 'Girlande', article: 'die', plural: '-n', pos: 'noun', ru: 'гирлянда (бумажная)', example: 'Wir hängen eine Girlande an die Wand.', exampleRu: 'Мы вешаем гирлянду на стену.', pronRu: 'гир-ЛАН-дэ' },
  { de: 'Ständchen', article: 'das', plural: '-', pos: 'noun', ru: 'песня-поздравление (под окном, для именинника)', example: 'Am Morgen haben wir Oma ein Ständchen gesungen.', exampleRu: 'Утром мы спели бабушке поздравительную песню.', pronRu: 'ШТЭНТ-хьен' },
  { de: 'Mitternacht', article: 'die', plural: '–', pos: 'noun', ru: 'полночь', example: 'Um Mitternacht beginnt das neue Jahr.', exampleRu: 'В полночь начинается новый год.' },
  { de: 'Neujahrstag', article: 'der', plural: '-e', pos: 'noun', ru: 'первое января, Новый год', example: 'Am Neujahrstag schlafen viele Leute lange.', exampleRu: 'Первого января многие долго спят.' },
  { de: 'Muttertag', article: 'der', plural: '-e', pos: 'noun', ru: 'День матери', example: 'Zum Muttertag schenke ich meiner Mutter Blumen.', exampleRu: 'На День матери я дарю маме цветы.' },
  { de: 'Valentinstag', article: 'der', plural: '-e', pos: 'noun', ru: 'День святого Валентина', example: 'Am Valentinstag gehen wir zusammen essen.', exampleRu: 'В День святого Валентина мы вместе идём в ресторан.' },
  { de: 'Fasching', article: 'der', plural: '–', pos: 'noun', ru: 'карнавал, масленичные гуляния (на юге Германии)', example: 'Zum Fasching trägt mein Sohn eine Maske.', exampleRu: 'На карнавал мой сын надевает маску.' },
  { de: 'Maske', article: 'die', plural: '-n', pos: 'noun', ru: 'маска', example: 'Die Kinder haben ihre Masken selbst gemacht.', exampleRu: 'Дети сами сделали свои маски.' },

  // Weihnachten und Ostern
  { de: 'Adventskranz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'рождественский венок со свечами', example: 'Auf dem Adventskranz sind vier Kerzen.', exampleRu: 'На рождественском венке четыре свечи.', pronRu: 'ат-ВЭНЦ-кранц' },
  { de: 'Nikolaus', article: 'der', plural: '–', pos: 'noun', ru: 'Святой Николай (6 декабря)', example: 'Am 6. Dezember bringt der Nikolaus den Kindern Süßigkeiten.', exampleRu: '6 декабря Святой Николай приносит детям сладости.' },
  { de: 'Bescherung', article: 'die', plural: '-en', pos: 'noun', ru: 'вручение рождественских подарков', example: 'Bei uns ist die Bescherung am Abend.', exampleRu: 'У нас подарки дарят вечером.', pronRu: 'бэ-ШЭ:-рунг' },
  { de: 'Wunschzettel', article: 'der', plural: '-', pos: 'noun', ru: 'список желаний (письмо с пожеланиями подарков)', example: 'Meine Tochter schreibt einen langen Wunschzettel.', exampleRu: 'Моя дочь пишет длинный список желаний.' },
  { de: 'Plätzchen', article: 'das', plural: '-', pos: 'noun', ru: 'печенье (особенно рождественское)', example: 'Im Dezember backen wir Plätzchen.', exampleRu: 'В декабре мы печём печенье.', pronRu: 'ПЛЭЦ-хьен' },
  { de: 'Glühwein', article: 'der', plural: '-e', pos: 'noun', ru: 'глинтвейн', example: 'Auf dem Markt trinken wir einen Glühwein.', exampleRu: 'На рынке мы пьём глинтвейн.', pronRu: 'ГЛЮ:-вайн' },
  { de: 'Osterhase', article: 'der', plural: '-n', pos: 'noun', ru: 'пасхальный заяц', example: 'Der Osterhase bringt die Eier – so sagt man den Kindern.', exampleRu: 'Пасхальный заяц приносит яйца — так говорят детям.' },
  { de: 'bemalen', forms: 'bemalt, hat bemalt', pos: 'verb', ru: 'раскрашивать', example: 'Wir bemalen Eier für Ostern.', exampleRu: 'Мы раскрашиваем яйца к Пасхе.' },
  { de: 'verstecken', forms: 'versteckt, hat versteckt', pos: 'verb', ru: 'прятать', example: 'Wo hast du das Geschenk versteckt?', exampleRu: 'Где ты спрятал подарок?' },

  // Hochzeit
  { de: 'Hochzeitsgast', article: 'der', plural: '-¨e', pos: 'noun', ru: 'гость на свадьбе', example: 'Alle Hochzeitsgäste haben getanzt.', exampleRu: 'Все гости на свадьбе танцевали.' },
  { de: 'Hochzeitskleid', article: 'das', plural: '-er', pos: 'noun', ru: 'свадебное платье', example: 'Das Hochzeitskleid war lang und weiß.', exampleRu: 'Свадебное платье было длинным и белым.' },

  // Geschenke
  { de: 'Schleife', article: 'die', plural: '-n', pos: 'noun', ru: 'бант, бантик', example: 'Auf dem Geschenk ist eine rote Schleife.', exampleRu: 'На подарке красный бант.' },
  { de: 'verpacken', forms: 'verpackt, hat verpackt', pos: 'verb', ru: 'упаковывать', example: 'Im Geschäft hat man mir das Geschenk schön verpackt.', exampleRu: 'В магазине мне красиво упаковали подарок.' },
  { de: 'Mitbringsel', article: 'das', plural: '-', pos: 'noun', ru: 'небольшой гостинец, сувенир', example: 'Als Mitbringsel nehme ich Pralinen mit.', exampleRu: 'В качестве гостинца я возьму конфеты.', pronRu: 'МИТ-брин-зэль' },
  { de: 'Praline', article: 'die', plural: '-n', pos: 'noun', ru: 'шоколадная конфета (пралине)', example: 'Die Pralinen sind für die Gastgeberin.', exampleRu: 'Конфеты — для хозяйки.', pronRu: 'пра-ЛИ:-нэ' },
  { de: 'Armband', article: 'das', plural: '-¨er', pos: 'noun', ru: 'браслет', example: 'Das Armband ist ein Geschenk von meiner Oma.', exampleRu: 'Этот браслет — подарок от моей бабушки.' },
  { de: 'Parfüm', article: 'das', plural: '-s', pos: 'noun', ru: 'духи', example: 'Zum Geburtstag hat sie ein Parfüm bekommen.', exampleRu: 'На день рождения она получила духи.', pronRu: 'пар-ФЮ:М' },
  { de: 'Kuscheltier', article: 'das', plural: '-e', pos: 'noun', ru: 'мягкая игрушка', example: 'Das Baby hat ein Kuscheltier bekommen.', exampleRu: 'Малыш получил мягкую игрушку.', pronRu: 'КУ-шэль-ти:р' },
  { de: 'Rose', article: 'die', plural: '-n', pos: 'noun', ru: 'роза', example: 'Er hat ihr zwölf rote Rosen geschenkt.', exampleRu: 'Он подарил ей двенадцать красных роз.' },
  { de: 'Tulpe', article: 'die', plural: '-n', pos: 'noun', ru: 'тюльпан', example: 'Im Frühling kaufe ich gern Tulpen.', exampleRu: 'Весной я люблю покупать тюльпаны.' },
  // Mehr Feste und Bräuche
  { de: 'Adventskalender', article: 'der', plural: '-', pos: 'noun', ru: 'адвент-календарь', example: 'Im Adventskalender ist jeden Tag ein kleines Stück Schokolade.', exampleRu: 'В адвент-календаре каждый день маленький кусочек шоколада.', pronRu: 'ат-ВЭНЦ-ка-лен-да' },
  { de: 'Lebkuchen', article: 'der', plural: '-', pos: 'noun', ru: 'пряник', example: 'Auf dem Weihnachtsmarkt kaufen wir Lebkuchen.', exampleRu: 'На рождественской ярмарке мы покупаем пряники.', pronRu: 'ЛЭ:П-ку:-хэн' },
  { de: 'Christkind', article: 'das', plural: '–', pos: 'noun', ru: 'младенец Христос (приносит подарки на юге Германии)', example: 'In Bayern bringt das Christkind die Geschenke.', exampleRu: 'В Баварии подарки приносит младенец Христос.', pronRu: 'КРИСТ-кинт' },
  { de: 'Weihnachtsmann', article: 'der', plural: '-¨er', pos: 'noun', ru: 'Дед Мороз, Санта-Клаус', example: 'Der Weihnachtsmann hat einen langen weißen Bart.', exampleRu: 'У Деда Мороза длинная белая борода.' },
  { de: 'Weihnachtskarte', article: 'die', plural: '-n', pos: 'noun', ru: 'рождественская открытка', example: 'Jedes Jahr schreibe ich zwanzig Weihnachtskarten.', exampleRu: 'Каждый год я пишу двадцать рождественских открыток.' },
  { de: 'Weihnachtslied', article: 'das', plural: '-er', pos: 'noun', ru: 'рождественская песня', example: 'Am Abend singen wir zusammen Weihnachtslieder.', exampleRu: 'Вечером мы вместе поём рождественские песни.' },
  { de: 'Laterne', article: 'die', plural: '-n', pos: 'noun', ru: 'фонарик (бумажный)', example: 'Im November gehen die Kinder mit Laternen durch die Straßen.', exampleRu: 'В ноябре дети ходят с фонариками по улицам.', pronRu: 'ла-ТЭР-нэ' },
  { de: 'Festessen', article: 'das', plural: '-', pos: 'noun', ru: 'праздничный обед / ужин', example: 'Zum Festessen kommt die ganze Familie.', exampleRu: 'На праздничный ужин приходит вся семья.' },
  { de: 'Konfetti', article: 'das', plural: '–', pos: 'noun', ru: 'конфетти', example: 'Um Mitternacht werfen wir Konfetti.', exampleRu: 'В полночь мы бросаем конфетти.' },
  { de: 'Glücksbringer', article: 'der', plural: '-', pos: 'noun', ru: 'талисман на удачу', example: 'Zu Silvester schenkt man sich in Deutschland kleine Glücksbringer.', exampleRu: 'В Германии на Новый год дарят друг другу маленькие талисманы.' },
  { de: 'ein runder Geburtstag', pos: 'phrase', ru: 'круглая дата, юбилей (30, 40, 50 лет …)', example: 'Mein Vater wird 60 – das ist ein runder Geburtstag!', exampleRu: 'Моему отцу исполняется 60 — это юбилей!' },
  { de: 'Polterabend', article: 'der', plural: '-e', pos: 'noun', ru: 'вечер перед свадьбой (бьют старую посуду на счастье)', example: 'Beim Polterabend macht man altes Geschirr kaputt.', exampleRu: 'На польтерабенде бьют старую посуду.' },
  { de: 'Trauzeuge', article: 'der', plural: '-n', pos: 'noun', ru: 'свидетель на свадьбе', example: 'Mein bester Freund war mein Trauzeuge.', exampleRu: 'Мой лучший друг был моим свидетелем на свадьбе.' },
  { de: 'Hochzeitstorte', article: 'die', plural: '-n', pos: 'noun', ru: 'свадебный торт', example: 'Die Hochzeitstorte war sehr groß und weiß.', exampleRu: 'Свадебный торт был очень большим и белым.' },
  { de: 'Hochzeitsreise', article: 'die', plural: '-n', pos: 'noun', ru: 'свадебное путешествие', example: 'Für die Hochzeitsreise fahren sie nach Paris.', exampleRu: 'В свадебное путешествие они едут в Париж.' },
  { de: 'Flitterwochen', article: 'die', plural: 'nur Plural', pos: 'noun', ru: 'медовый месяц', example: 'In den Flitterwochen waren sie am Meer.', exampleRu: 'В медовый месяц они были на море.' },
  { de: 'Geschenkidee', article: 'die', plural: '-n', pos: 'noun', ru: 'идея подарка', example: 'Hast du eine gute Geschenkidee für Oma?', exampleRu: 'У тебя есть хорошая идея подарка для бабушки?' },
  { de: 'Fotobuch', article: 'das', plural: '-¨er', pos: 'noun', ru: 'фотокнига', example: 'Wir schenken unseren Eltern ein Fotobuch.', exampleRu: 'Мы дарим родителям фотокнигу.' },
  { de: 'Bilderrahmen', article: 'der', plural: '-', pos: 'noun', ru: 'рамка для фотографии', example: 'Ich schenke ihr ein Foto in einem schönen Bilderrahmen.', exampleRu: 'Я подарю ей фотографию в красивой рамке.' },
  { de: 'Vase', article: 'die', plural: '-n', pos: 'noun', ru: 'ваза', example: 'Kannst du die Blumen bitte in eine Vase stellen?', exampleRu: 'Можешь поставить цветы в вазу?' },
  { de: 'Kochbuch', article: 'das', plural: '-¨er', pos: 'noun', ru: 'кулинарная книга', example: 'Meine Schwester kocht gern, ich schenke ihr ein Kochbuch.', exampleRu: 'Моя сестра любит готовить, я подарю ей кулинарную книгу.' },
  { de: 'Gesellschaftsspiel', article: 'das', plural: '-e', pos: 'noun', ru: 'настольная игра', example: 'An Weihnachten spielen wir immer ein Gesellschaftsspiel.', exampleRu: 'На Рождество мы всегда играем в настольную игру.' },
];
