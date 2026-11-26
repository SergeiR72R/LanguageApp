import type { VocabItem } from '../../types';

// Word bank A2 · Unit 12 — Reisen und Urlaub
export const words: VocabItem[] = [
  // Hotel & Unterkunft
  { de: 'Einzelzimmer', article: 'das', plural: '-', pos: 'noun', ru: 'одноместный номер', example: 'Ein Einzelzimmer kostet 60 Euro pro Nacht.', exampleRu: 'Одноместный номер стоит 60 евро за ночь.', pronRu: 'дас АЙН-цель-ци-ма' },
  { de: 'Pension', article: 'die', plural: '-en', pos: 'noun', ru: 'пансион, маленькая гостиница', example: 'Die Pension ist klein, aber sehr gemütlich.', exampleRu: 'Пансион маленький, но очень уютный.', pronRu: 'ди пан-ЗЬО:Н' },
  { de: 'Jugendherberge', article: 'die', plural: '-n', pos: 'noun', ru: 'молодёжная турбаза, хостел', example: 'In der Jugendherberge schlafen wir in einem Zimmer mit sechs Betten.', exampleRu: 'В хостеле мы спим в комнате на шесть кроватей.', pronRu: 'ди Ю:-гент-хер-бэр-ге' },
  { de: 'Halbpension', article: 'die', plural: '–', pos: 'noun', ru: 'полупансион (завтрак и ужин)', example: 'Wir haben ein Zimmer mit Halbpension gebucht.', exampleRu: 'Мы забронировали номер с полупансионом.' },
  { de: 'Anreise', article: 'die', plural: '-n', pos: 'noun', ru: 'приезд, заезд', example: 'Die Anreise ist am Samstag ab 15 Uhr möglich.', exampleRu: 'Заезд возможен в субботу с 15 часов.' },
  { de: 'Abreise', article: 'die', plural: '-n', pos: 'noun', ru: 'отъезд, выезд', example: 'Am Tag der Abreise muss das Zimmer um zehn Uhr frei sein.', exampleRu: 'В день отъезда номер нужно освободить к десяти часам.' },
  { de: 'Ferienhaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'дом для отдыха (съёмный)', example: 'Wir haben ein Ferienhaus am Meer gemietet.', exampleRu: 'Мы сняли дом для отдыха на море.' },
  { de: 'Zelt', article: 'das', plural: '-e', pos: 'noun', ru: 'палатка', example: 'Im Zelt war es in der Nacht ziemlich kalt.', exampleRu: 'В палатке ночью было довольно холодно.', pronRu: 'дас ЦЭЛЬТ' },
  { de: 'Wohnwagen', article: 'der', plural: '-', pos: 'noun', ru: 'дом на колёсах, трейлер', example: 'Meine Eltern reisen gern mit dem Wohnwagen.', exampleRu: 'Мои родители любят путешествовать в доме на колёсах.' },

  // Reiseplanung
  { de: 'Reisebüro', article: 'das', plural: '-s', pos: 'noun', ru: 'турагентство', example: 'Im Reisebüro hat man uns gut beraten.', exampleRu: 'В турагентстве нас хорошо проконсультировали.' },
  { de: 'Reiseführer', article: 'der', plural: '-', pos: 'noun', ru: 'путеводитель; гид', example: 'Im Reiseführer stehen viele Tipps für Wien.', exampleRu: 'В путеводителе много советов для Вены.' },
  { de: 'Stadtplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'план города', example: 'Ohne Stadtplan finden wir das Hotel nicht.', exampleRu: 'Без плана города мы не найдём отель.' },
  { de: 'Landkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'географическая карта', example: 'Zeig mir die Insel auf der Landkarte!', exampleRu: 'Покажи мне остров на карте!' },
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
  { de: 'Ostsee', article: 'die', plural: '–', pos: 'noun', ru: 'Балтийское море', example: 'Wir fahren jedes Jahr an die Ostsee.', exampleRu: 'Мы каждый год ездим на Балтийское море.' },
  { de: 'Nordsee', article: 'die', plural: '–', pos: 'noun', ru: 'Северное море', example: 'An der Nordsee ist das Wasser ziemlich kalt.', exampleRu: 'В Северном море вода довольно холодная.' },
  { de: 'Gipfel', article: 'der', plural: '-', pos: 'noun', ru: 'вершина (горы)', example: 'Vom Gipfel sieht man drei Länder.', exampleRu: 'С вершины видны три страны.' },

  // Am Strand & Besichtigen
  { de: 'Burg', article: 'die', plural: '-en', pos: 'noun', ru: 'крепость, замок (укреплённый)', example: 'Auf dem Berg steht eine alte Burg.', exampleRu: 'На горе стоит старая крепость.' },
  { de: 'Führung', article: 'die', plural: '-en', pos: 'noun', ru: 'экскурсия с гидом', example: 'Die Führung durch das Museum dauert eine Stunde.', exampleRu: 'Экскурсия по музею длится час.' },
  { de: 'Souvenir', article: 'das', plural: '-s', pos: 'noun', ru: 'сувенир', example: 'Für meine Enkel kaufe ich ein Souvenir.', exampleRu: 'Для внуков я покупаю сувенир.', pronRu: 'дас зу-вэ-НИ:Р' },
  { de: 'Postkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'открытка', example: 'Ich schreibe meiner Mutter eine Postkarte aus Rom.', exampleRu: 'Я пишу маме открытку из Рима.' },
  { de: 'Heimweh', article: 'das', plural: '–', pos: 'noun', ru: 'тоска по дому, по родине', example: 'Nach zwei Wochen hatte ich ein bisschen Heimweh.', exampleRu: 'Через две недели я немного затосковал по дому.' },
  // Strand, Berge & Reisen (Ergänzung)
  { de: 'sich sonnen', forms: 'sonnt sich, hat sich gesonnt', pos: 'verb', ru: 'загорать', example: 'Am Nachmittag sonnen wir uns am Strand.', exampleRu: 'После обеда мы загораем на пляже.' },
  { de: 'Liegestuhl', article: 'der', plural: '-¨e', pos: 'noun', ru: 'шезлонг', example: 'Ein Liegestuhl am Strand kostet fünf Euro pro Tag.', exampleRu: 'Шезлонг на пляже стоит пять евро в день.' },
  { de: 'Sonnenschirm', article: 'der', plural: '-e', pos: 'noun', ru: 'пляжный зонт', example: 'Unter dem Sonnenschirm ist es nicht so heiß.', exampleRu: 'Под пляжным зонтом не так жарко.' },
  { de: 'Welle', article: 'die', plural: '-n', pos: 'noun', ru: 'волна', example: 'Heute sind die Wellen sehr hoch.', exampleRu: 'Сегодня волны очень высокие.' },
  { de: 'Muschel', article: 'die', plural: '-n', pos: 'noun', ru: 'ракушка', example: 'Die Kinder sammeln Muscheln am Strand.', exampleRu: 'Дети собирают ракушки на пляже.' },
  { de: 'Wanderweg', article: 'der', plural: '-e', pos: 'noun', ru: 'пешеходная (туристическая) тропа', example: 'Der Wanderweg führt zu einem kleinen See.', exampleRu: 'Тропа ведёт к маленькому озеру.' },
  { de: 'Seilbahn', article: 'die', plural: '-en', pos: 'noun', ru: 'канатная дорога', example: 'Mit der Seilbahn fahren wir auf den Berg.', exampleRu: 'На канатной дороге мы поднимаемся на гору.' },
  { de: 'Urlauber', article: 'der', plural: '-', pos: 'noun', ru: 'отдыхающий, отпускник', example: 'Im August sind viele Urlauber an der Ostsee.', exampleRu: 'В августе на Балтийском море много отдыхающих.' },
  { de: 'Hauptsaison', article: 'die', plural: '-s', pos: 'noun', ru: 'высокий сезон', example: 'In der Hauptsaison sind die Hotels teuer.', exampleRu: 'В высокий сезон гостиницы дорогие.' },
  { de: 'Erholung', article: 'die', plural: '–', pos: 'noun', ru: 'отдых, восстановление сил', example: 'Nach dem stressigen Jahr brauche ich Erholung.', exampleRu: 'После напряжённого года мне нужен отдых.' },
  { de: 'Kreuzfahrt', article: 'die', plural: '-en', pos: 'noun', ru: 'круиз', example: 'Meine Eltern machen eine Kreuzfahrt im Mittelmeer.', exampleRu: 'Мои родители отправляются в круиз по Средиземному морю.' },
  { de: 'Stadtrundfahrt', article: 'die', plural: '-en', pos: 'noun', ru: 'обзорная экскурсия по городу', example: 'Bei der Stadtrundfahrt sieht man alle Sehenswürdigkeiten.', exampleRu: 'На обзорной экскурсии видишь все достопримечательности.' },
  { de: 'Eintritt', article: 'der', plural: '–', pos: 'noun', ru: 'вход; плата за вход', example: 'Der Eintritt ins Museum ist am Sonntag frei.', exampleRu: 'В воскресенье вход в музей бесплатный.' },
  { de: 'einchecken', forms: 'checkt ein, hat eingecheckt', pos: 'verb', ru: 'регистрироваться (в отеле, в аэропорту)', example: 'Im Hotel kann man ab 15 Uhr einchecken.', exampleRu: 'В отеле можно заселиться с 15 часов.', pronRu: 'АЙН-чэ-кен' },
  { de: 'Bordkarte', article: 'die', plural: '-n', pos: 'noun', ru: 'посадочный талон', example: 'Bitte zeigen Sie Ihre Bordkarte und Ihren Pass.', exampleRu: 'Пожалуйста, покажите посадочный талон и паспорт.' },
  { de: 'Handgepäck', article: 'das', plural: '–', pos: 'noun', ru: 'ручная кладь', example: 'Im Handgepäck darf man keine großen Flaschen haben.', exampleRu: 'В ручной клади нельзя иметь больших бутылок.' },
  { de: 'Mietwagen', article: 'der', plural: '-', pos: 'noun', ru: 'машина напрокат', example: 'Auf der Insel fahren wir mit einem Mietwagen.', exampleRu: 'На острове мы ездим на машине напрокат.' },
  { de: 'Schlafsack', article: 'der', plural: '-¨e', pos: 'noun', ru: 'спальный мешок', example: 'Für den Campingplatz brauchen wir zwei Schlafsäcke.', exampleRu: 'Для кемпинга нам нужны два спальных мешка.' },
  { de: 'Klimaanlage', article: 'die', plural: '-n', pos: 'noun', ru: 'кондиционер', example: 'Das Zimmer hat leider keine Klimaanlage.', exampleRu: 'В номере, к сожалению, нет кондиционера.', pronRu: 'ди КЛИ:-ма-ан-ла:-ге' },
  { de: 'Frühstücksbuffet', article: 'das', plural: '-s', pos: 'noun', ru: 'завтрак «шведский стол»', example: 'Das Frühstücksbuffet ist von sieben bis zehn Uhr.', exampleRu: 'Завтрак «шведский стол» — с семи до десяти часов.', pronRu: 'дас ФРЮ:-штюкс-бю-фе:' },
];
