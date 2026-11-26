import type { VocabItem } from '../../types';

// Word bank A2 · Unit 12 — Reisen und Urlaub
export const words: VocabItem[] = [
  // Hotel & Unterkunft
  { de: 'Einzelzimmer', article: 'das', plural: '-', pos: 'noun', ru: 'одноместный номер', example: 'Ein Einzelzimmer kostet 60 Euro pro Nacht.', exampleRu: 'Одноместный номер стоит 60 евро за ночь.', pronRu: 'дас АЙН-цель-ци-ма' },
  { de: 'Pension', article: 'die', plural: '-en', pos: 'noun', ru: 'пансион, маленькая гостиница', example: 'Die Pension ist klein, aber sehr gemütlich.', exampleRu: 'Пансион маленький, но очень уютный.', pronRu: 'ди пан-ЗЬО:Н' },
  { de: 'Jugendherberge', article: 'die', plural: '-n', pos: 'noun', ru: 'молодёжная турбаза, хостел', example: 'In der Jugendherberge schlafen wir in einem Zimmer mit sechs Betten.', exampleRu: 'В хостеле мы спим в комнате на шесть кроватей.', pronRu: 'ди Ю:-гент-хер-бэр-ге' },
  { de: 'Halbpension', article: 'die', plural: '–', pos: 'noun', ru: 'полупансион (завтрак и ужин)', example: 'Wir haben ein Zimmer mit Halbpension gebucht.', exampleRu: 'Мы забронировали номер с полупансионом.' },
  { de: 'Reservierung', article: 'die', plural: '-en', pos: 'noun', ru: 'бронь, бронирование', example: 'Ich habe eine Reservierung auf den Namen Petrow.', exampleRu: 'У меня бронь на имя Петров.' },
  { de: 'reservieren', forms: 'reserviert, hat reserviert', pos: 'verb', ru: 'бронировать, резервировать', example: 'Können Sie bitte ein Zimmer für uns reservieren?', exampleRu: 'Вы можете забронировать для нас номер?' },
  { de: 'Anreise', article: 'die', plural: '-n', pos: 'noun', ru: 'приезд, заезд', example: 'Die Anreise ist am Samstag ab 15 Uhr möglich.', exampleRu: 'Заезд возможен в субботу с 15 часов.' },
  { de: 'Abreise', article: 'die', plural: '-n', pos: 'noun', ru: 'отъезд, выезд', example: 'Am Tag der Abreise muss das Zimmer um zehn Uhr frei sein.', exampleRu: 'В день отъезда номер нужно освободить к десяти часам.' },
  { de: 'Aufzug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'лифт', example: 'Der Aufzug ist gleich neben der Rezeption.', exampleRu: 'Лифт сразу рядом с ресепшеном.' },
  { de: 'Aussicht', article: 'die', plural: '-en', pos: 'noun', ru: 'вид (из окна, с горы)', example: 'Vom Balkon haben wir eine tolle Aussicht auf den See.', exampleRu: 'С балкона у нас прекрасный вид на озеро.' },
  { de: 'Ferienhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'дом для отдыха (съёмный)', example: 'Wir haben ein Ferienhaus am Meer gemietet.', exampleRu: 'Мы сняли дом для отдыха на море.' },
  { de: 'Zelt', article: 'das', plural: '-e', pos: 'noun', ru: 'палатка', example: 'Im Zelt war es in der Nacht ziemlich kalt.', exampleRu: 'В палатке ночью было довольно холодно.', pronRu: 'дас ЦЭЛЬТ' },
  { de: 'Wohnwagen', article: 'der', plural: '-', pos: 'noun', ru: 'дом на колёсах, трейлер', example: 'Meine Eltern reisen gern mit dem Wohnwagen.', exampleRu: 'Мои родители любят путешествовать в доме на колёсах.' },

  // Reiseplanung
  { de: 'Reisebüro', article: 'das', plural: '-s', pos: 'noun', ru: 'турагентство', example: 'Im Reisebüro hat man uns gut beraten.', exampleRu: 'В турагентстве нас хорошо проконсультировали.' },
  { de: 'Reiseführer', article: 'der', plural: '-', pos: 'noun', ru: 'путеводитель; гид', example: 'Im Reiseführer stehen viele Tipps für Wien.', exampleRu: 'В путеводителе много советов для Вены.' },
  { de: 'Stadtplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'план города', example: 'Ohne Stadtplan finden wir das Hotel nicht.', exampleRu: 'Без плана города мы не найдём отель.' },
  { de: 'Landkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'географическая карта', example: 'Zeig mir die Insel auf der Landkarte!', exampleRu: 'Покажи мне остров на карте!' },
  { de: 'Rucksack', article: 'der', plural: '-¨e', pos: 'noun', ru: 'рюкзак', example: 'Für die Wanderung nehme ich nur einen Rucksack mit.', exampleRu: 'В поход я беру только рюкзак.', pronRu: 'дер РУК-зак' },
  { de: 'Visum', article: 'das', plural: 'die Visa', pos: 'noun', ru: 'виза', example: 'Für dieses Land braucht man kein Visum.', exampleRu: 'Для этой страны виза не нужна.', pronRu: 'дас ВИ:-зум' },
  { de: 'Grenze', article: 'die', plural: '-n', pos: 'noun', ru: 'граница', example: 'Bis zur Grenze sind es nur 20 Kilometer.', exampleRu: 'До границы всего 20 километров.' },
  { de: 'verreisen', forms: 'verreist, ist verreist', pos: 'verb', ru: 'уехать (в поездку), путешествовать', example: 'Im August sind unsere Nachbarn verreist.', exampleRu: 'В августе наши соседи в отъезде.' },
  { de: 'unterwegs', pos: 'adv', ru: 'в пути, в дороге', example: 'Ruf mich an, wenn du unterwegs bist.', exampleRu: 'Позвони мне, когда будешь в дороге.' },
  { de: 'Tourist', article: 'der', plural: '-en', pos: 'noun', ru: 'турист (die Touristin)', example: 'Im Sommer kommen viele Touristen in die Stadt.', exampleRu: 'Летом в город приезжает много туристов.' },

  // Flugzeug & Schiff
  { de: 'Flug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'полёт, рейс', example: 'Der Flug nach Antalya dauert drei Stunden.', exampleRu: 'Полёт в Анталью длится три часа.' },
  { de: 'Abflug', article: 'der', plural: '-¨e', pos: 'noun', ru: 'вылет', example: 'Der Abflug ist um 7.30 Uhr.', exampleRu: 'Вылет в 7:30.' },
  { de: 'Ankunft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'прибытие', example: 'Nach der Ankunft fahren wir mit dem Taxi ins Hotel.', exampleRu: 'После прибытия мы едем на такси в отель.' },
  { de: 'landen', forms: 'landet, ist gelandet', pos: 'verb', ru: 'приземляться', example: 'Das Flugzeug ist pünktlich in Berlin gelandet.', exampleRu: 'Самолёт вовремя приземлился в Берлине.' },
  { de: 'Schiff', article: 'das', plural: '-e', pos: 'noun', ru: 'корабль, теплоход', example: 'Mit dem Schiff fahren wir auf die Insel.', exampleRu: 'На теплоходе мы плывём на остров.' },
  { de: 'Fähre', article: 'die', plural: '-n', pos: 'noun', ru: 'паром', example: 'Die Fähre fährt jede Stunde.', exampleRu: 'Паром ходит каждый час.', pronRu: 'ди ФЭ:-рэ' },
  { de: 'Hafen', article: 'der', plural: 'die Häfen', pos: 'noun', ru: 'порт, гавань', example: 'Am Abend gehen wir im Hafen spazieren.', exampleRu: 'Вечером мы гуляем в порту.' },

  // Natur & Landschaft
  { de: 'Küste', article: 'die', plural: '-n', pos: 'noun', ru: 'побережье', example: 'An der Küste ist es oft windig.', exampleRu: 'На побережье часто ветрено.' },
  { de: 'Ostsee', article: 'die', plural: '–', pos: 'noun', ru: 'Балтийское море', example: 'Wir fahren jedes Jahr an die Ostsee.', exampleRu: 'Мы каждый год ездим на Балтийское море.' },
  { de: 'Nordsee', article: 'die', plural: '–', pos: 'noun', ru: 'Северное море', example: 'An der Nordsee ist das Wasser ziemlich kalt.', exampleRu: 'В Северном море вода довольно холодная.' },
  { de: 'Fluss', article: 'der', plural: '-¨e', pos: 'noun', ru: 'река', example: 'Die Stadt liegt an einem großen Fluss.', exampleRu: 'Город стоит на большой реке.' },
  { de: 'Ufer', article: 'das', plural: '-', pos: 'noun', ru: 'берег (реки, озера)', example: 'Wir machen ein Picknick am Ufer.', exampleRu: 'Мы устраиваем пикник на берегу.' },
  { de: 'Tal', article: 'das', plural: '-¨er', pos: 'noun', ru: 'долина', example: 'Unten im Tal liegt ein kleines Dorf.', exampleRu: 'Внизу в долине лежит маленькая деревня.' },
  { de: 'Gipfel', article: 'der', plural: '-', pos: 'noun', ru: 'вершина (горы)', example: 'Vom Gipfel sieht man drei Länder.', exampleRu: 'С вершины видны три страны.' },
  { de: 'Dorf', article: 'das', plural: '-¨er', pos: 'noun', ru: 'деревня', example: 'Unsere Pension ist in einem kleinen Dorf.', exampleRu: 'Наш пансион находится в маленькой деревне.' },
  { de: 'Landschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'пейзаж, природа (местность)', example: 'Die Landschaft in Bayern ist wunderschön.', exampleRu: 'Природа в Баварии прекрасна.' },

  // Am Strand & Besichtigen
  { de: 'Sonnencreme', article: 'die', plural: '-s', pos: 'noun', ru: 'солнцезащитный крем', example: 'Vergiss die Sonnencreme nicht!', exampleRu: 'Не забудь солнцезащитный крем!' },
  { de: 'Sonnenbrille', article: 'die', plural: '-n', pos: 'noun', ru: 'солнечные очки', example: 'Wo ist meine Sonnenbrille?', exampleRu: 'Где мои солнечные очки?' },
  { de: 'Badehose', article: 'die', plural: '-n', pos: 'noun', ru: 'плавки', example: 'Ich habe meine Badehose zu Hause vergessen.', exampleRu: 'Я забыл свои плавки дома.' },
  { de: 'baden', forms: 'badet, hat gebadet', pos: 'verb', ru: 'купаться (в море, озере)', example: 'Im See kann man im Sommer baden.', exampleRu: 'Летом в озере можно купаться.' },
  { de: 'besichtigen', forms: 'besichtigt, hat besichtigt', pos: 'verb', ru: 'осматривать (достопримечательности)', example: 'Heute besichtigen wir die Altstadt.', exampleRu: 'Сегодня мы осматриваем старый город.' },
  { de: 'Altstadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'старый город, исторический центр', example: 'Die Altstadt ist nur fünf Minuten vom Hotel entfernt.', exampleRu: 'Старый город всего в пяти минутах от отеля.' },
  { de: 'Schloss', article: 'das', plural: '-¨er', pos: 'noun', ru: 'замок, дворец', example: 'Das Schloss kann man von April bis Oktober besichtigen.', exampleRu: 'Замок можно осматривать с апреля по октябрь.' },
  { de: 'Burg', article: 'die', plural: '-en', pos: 'noun', ru: 'крепость, замок (укреплённый)', example: 'Auf dem Berg steht eine alte Burg.', exampleRu: 'На горе стоит старая крепость.' },
  { de: 'Führung', article: 'die', plural: '-en', pos: 'noun', ru: 'экскурсия с гидом', example: 'Die Führung durch das Museum dauert eine Stunde.', exampleRu: 'Экскурсия по музею длится час.' },
  { de: 'Souvenir', article: 'das', plural: '-s', pos: 'noun', ru: 'сувенир', example: 'Für meine Enkel kaufe ich ein Souvenir.', exampleRu: 'Для внуков я покупаю сувенир.', pronRu: 'дас зу-вэ-НИ:Р' },
  { de: 'Postkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'открытка', example: 'Ich schreibe meiner Mutter eine Postkarte aus Rom.', exampleRu: 'Я пишу маме открытку из Рима.' },
  { de: 'Heimweh', article: 'das', plural: '–', pos: 'noun', ru: 'тоска по дому, по родине', example: 'Nach zwei Wochen hatte ich ein bisschen Heimweh.', exampleRu: 'Через две недели я немного затосковал по дому.' },
];
