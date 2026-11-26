import type { VocabItem } from '../../types';

// Word bank A1 · Unit 17 — Arbeit und Beruf
export const words: VocabItem[] = [
  // Berufe
  { de: 'Polizist', article: 'der', plural: '-en', pos: 'noun', ru: 'полицейский (die Polizistin)', example: 'Mein Nachbar ist Polizist.', exampleRu: 'Мой сосед — полицейский.', pronRu: 'дер по-ли-ЦИСТ' },
  { de: 'Friseur', article: 'der', plural: '-e', pos: 'noun', ru: 'парикмахер (die Friseurin)', example: 'Morgen gehe ich zum Friseur.', exampleRu: 'Завтра я иду к парикмахеру.', pronRu: 'дер фри-ЗЁ:А' },
  { de: 'Bäcker', article: 'der', plural: '-', pos: 'noun', ru: 'пекарь (die Bäckerin)', example: 'Der Bäcker arbeitet schon um 4 Uhr.', exampleRu: 'Пекарь работает уже в 4 часа утра.', pronRu: 'дер БЕ-ка' },
  { de: 'Elektriker', article: 'der', plural: '-', pos: 'noun', ru: 'электрик', example: 'Wir brauchen einen Elektriker.', exampleRu: 'Нам нужен электрик.', pronRu: 'дер э-ЛЕК-три-ка' },
  { de: 'Programmierer', article: 'der', plural: '-', pos: 'noun', ru: 'программист (die Programmiererin)', example: 'Mein Sohn ist Programmierer.', exampleRu: 'Мой сын — программист.', pronRu: 'дер про-гра-МИ:-ра' },
  { de: 'Taxifahrer', article: 'der', plural: '-', pos: 'noun', ru: 'таксист (die Taxifahrerin)', example: 'Er hat lange als Taxifahrer gearbeitet.', exampleRu: 'Он долго работал таксистом.', pronRu: 'дер ТАК-си-фа:-ра' },
  { de: 'Hausfrau', article: 'die', plural: '-en', pos: 'noun', ru: 'домохозяйка (der Hausmann)', example: 'Meine Mutter ist Hausfrau.', exampleRu: 'Моя мама — домохозяйка.', pronRu: 'ди ХАУС-фрау' },
  { de: 'Hausmeister', article: 'der', plural: '-', pos: 'noun', ru: 'завхоз, управдом, дворник', example: 'Der Hausmeister repariert die Tür.', exampleRu: 'Завхоз ремонтирует дверь.', pronRu: 'дер ХАУС-май-ста' },
  // Arbeitsort
  { de: 'Arbeitsplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'рабочее место', example: 'Mein Arbeitsplatz ist am Fenster.', exampleRu: 'Моё рабочее место у окна.', pronRu: 'дер АР-байтс-плац' },
  { de: 'Werkstatt', article: 'die', plural: 'die Werkstätten', pos: 'noun', ru: 'мастерская, автосервис', example: 'Das Auto ist in der Werkstatt.', exampleRu: 'Машина в автосервисе.', pronRu: 'ди ВЕРК-штат' },
  { de: 'Laden', article: 'der', plural: '-¨', pos: 'noun', ru: 'магазин, лавка', example: 'Sie arbeitet in einem Laden.', exampleRu: 'Она работает в магазине.', pronRu: 'дер ЛА:-дэн' },
  { de: 'Kunde', article: 'der', plural: '-n', pos: 'noun', ru: 'клиент, покупатель', example: 'Der Kunde möchte bezahlen.', exampleRu: 'Клиент хочет заплатить.', pronRu: 'дер КУН-дэ' },
  { de: 'Kundin', article: 'die', plural: '-nen', pos: 'noun', ru: 'клиентка, покупательница', example: 'Die Kundin sucht eine Jacke.', exampleRu: 'Покупательница ищет куртку.', pronRu: 'ди КУН-дин' },
  // Arbeitszeit und Geld
  { de: 'Pause', article: 'die', plural: '-n', pos: 'noun', ru: 'перерыв', example: 'Um 12 Uhr machen wir Pause.', exampleRu: 'В 12 часов у нас перерыв.', pronRu: 'ди ПАУ-зэ' },
  { de: 'Feierabend', article: 'der', plural: '-e', pos: 'noun', ru: 'конец рабочего дня', example: 'Um 17 Uhr habe ich Feierabend.', exampleRu: 'В 17 часов у меня заканчивается рабочий день.', pronRu: 'дер ФАЙ-а-а:-бэнт' },
  { de: 'Teilzeit', article: 'die', plural: '–', pos: 'noun', ru: 'неполный рабочий день', example: 'Sie arbeitet in Teilzeit.', exampleRu: 'Она работает неполный день.', pronRu: 'ди ТАЙЛЬ-цайт' },
  { de: 'Vollzeit', article: 'die', plural: '–', pos: 'noun', ru: 'полный рабочий день', example: 'Ich möchte in Vollzeit arbeiten.', exampleRu: 'Я хочу работать полный день.', pronRu: 'ди ФОЛЬ-цайт' },
  { de: 'Schicht', article: 'die', plural: '-en', pos: 'noun', ru: 'смена (на работе)', example: 'Heute habe ich die Nachtschicht.', exampleRu: 'Сегодня у меня ночная смена.', pronRu: 'ди ШИХЬТ' },
  { de: 'Lohn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'зарплата (рабочего)', example: 'Der Lohn ist nicht hoch.', exampleRu: 'Зарплата невысокая.', pronRu: 'дер ЛО:Н' },
  { de: 'Rente', article: 'die', plural: '-n', pos: 'noun', ru: 'пенсия', example: 'Mein Vater ist schon in Rente.', exampleRu: 'Мой отец уже на пенсии.', pronRu: 'ди РЕН-тэ' },
  // Verben
  { de: 'telefonieren', forms: 'er telefoniert, hat telefoniert', pos: 'verb', ru: 'звонить, говорить по телефону', example: 'Ich habe mit dem Chef telefoniert.', exampleRu: 'Я поговорил с начальником по телефону.', pronRu: 'тэ-лэ-фо-НИ:-рэн' },
  { de: 'reparieren', forms: 'er repariert, hat repariert', pos: 'verb', ru: 'ремонтировать', example: 'Er repariert Fahrräder.', exampleRu: 'Он ремонтирует велосипеды.', pronRu: 'рэ-па-РИ:-рэн' },
  { de: 'verkaufen', forms: 'er verkauft, hat verkauft', pos: 'verb', ru: 'продавать', example: 'Wir verkaufen unser Auto.', exampleRu: 'Мы продаём нашу машину.', pronRu: 'фэа-КАУ-фэн' },
  { de: 'putzen', forms: 'er putzt, hat geputzt', pos: 'verb', ru: 'чистить, убирать', example: 'Am Samstag putze ich die Wohnung.', exampleRu: 'В субботу я убираю квартиру.', pronRu: 'ПУ-цэн' },
  { de: 'fleißig', pos: 'adj', ru: 'прилежный, трудолюбивый', example: 'Die neue Kollegin ist sehr fleißig.', exampleRu: 'Новая коллега очень трудолюбивая.', pronRu: 'ФЛАЙ-сихь' },
];
