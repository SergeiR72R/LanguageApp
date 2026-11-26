import type { VocabItem } from '../../types';

// Word bank A1 · Unit 13 — In der Stadt
export const words: VocabItem[] = [
  // Orte in der Stadt
  { de: 'Zentrum', article: 'das', plural: 'die Zentren', pos: 'noun', ru: 'центр', example: 'Das Hotel ist im Zentrum.', exampleRu: 'Гостиница в центре.', pronRu: 'дас ЦЭН-трум' },
  { de: 'Innenstadt', article: 'die', plural: '-¨e', pos: 'noun', ru: 'центр города', example: 'In der Innenstadt sind viele Geschäfte.', exampleRu: 'В центре города много магазинов.', pronRu: 'ди И-нэн-штат' },
  { de: 'Markt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'рынок', example: 'Der Markt ist am Samstag.', exampleRu: 'Рынок работает в субботу.', pronRu: 'дер МАРКТ' },
  { de: 'Bibliothek', article: 'die', plural: '-en', pos: 'noun', ru: 'библиотека', example: 'Die Bibliothek ist neben der Schule.', exampleRu: 'Библиотека рядом со школой.', pronRu: 'ди биб-ли-о-ТЭ:К' },
  { de: 'Theater', article: 'das', plural: '–', pos: 'noun', ru: 'театр', example: 'Das Theater ist sehr alt.', exampleRu: 'Театр очень старый.', pronRu: 'дас тэ-А:-та' },
  { de: 'Polizei', article: 'die', plural: '–', pos: 'noun', ru: 'полиция', example: 'Die Polizei ist am Marktplatz.', exampleRu: 'Полиция на Рыночной площади.', pronRu: 'ди по-ли-ЦАЙ' },
  { de: 'Universität', article: 'die', plural: '-en', pos: 'noun', ru: 'университет', example: 'Mein Sohn studiert an der Universität.', exampleRu: 'Мой сын учится в университете.', pronRu: 'ди у-ни-вэр-зи-ТЭ:Т' },
  { de: 'Zoo', article: 'der', plural: '-s', pos: 'noun', ru: 'зоопарк', example: 'Am Sonntag gehen wir in den Zoo.', exampleRu: 'В воскресенье мы идём в зоопарк.', pronRu: 'дер ЦО:' },
  { de: 'Stadion', article: 'das', plural: 'die Stadien', pos: 'noun', ru: 'стадион', example: 'Das Stadion ist sehr groß.', exampleRu: 'Стадион очень большой.', pronRu: 'дас ШТА:-ди-он' },
  { de: 'Spielplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'детская площадка', example: 'Der Spielplatz ist im Park.', exampleRu: 'Детская площадка в парке.', pronRu: 'дер ШПИ:ЛЬ-плац' },
  { de: 'Kiosk', article: 'der', plural: '-e', pos: 'noun', ru: 'киоск', example: 'Der Kiosk ist an der Ecke.', exampleRu: 'Киоск на углу.', pronRu: 'дер КИ:-оск' },
  { de: 'Information', article: 'die', plural: '-en', pos: 'noun', ru: 'справочная, информация', example: 'Fragen Sie bitte an der Information.', exampleRu: 'Спросите, пожалуйста, в справочной.', pronRu: 'ди ин-фор-ма-ЦЬО:Н' },
  { de: 'Toilette', article: 'die', plural: '-n', pos: 'noun', ru: 'туалет', example: 'Entschuldigung, wo ist die Toilette?', exampleRu: 'Извините, где туалет?', pronRu: 'ди той-ЛЭ-тэ' },
  // In der Straße
  { de: 'Brücke', article: 'die', plural: '-n', pos: 'noun', ru: 'мост', example: 'Gehen Sie über die Brücke.', exampleRu: 'Перейдите через мост.', pronRu: 'ди БРЮ-кэ' },
  { de: 'Fluss', article: 'der', plural: '-¨e', pos: 'noun', ru: 'река', example: 'Der Fluss heißt Elbe.', exampleRu: 'Река называется Эльба.', pronRu: 'дер ФЛУС' },
  { de: 'Turm', article: 'der', plural: '-¨e', pos: 'noun', ru: 'башня', example: 'Der Turm ist hundert Meter hoch.', exampleRu: 'Башня высотой сто метров.', pronRu: 'дер ТУРМ' },
  { de: 'Brunnen', article: 'der', plural: '–', pos: 'noun', ru: 'фонтан; колодец', example: 'Der Brunnen ist auf dem Marktplatz.', exampleRu: 'Фонтан на Рыночной площади.', pronRu: 'дер БРУ-нэн' },
  { de: 'Schild', article: 'das', plural: '-er', pos: 'noun', ru: 'табличка, вывеска, знак', example: 'Lesen Sie das Schild!', exampleRu: 'Прочитайте табличку!', pronRu: 'дас ШИЛЬТ' },
  { de: 'Stadtplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'карта города', example: 'Hast du einen Stadtplan?', exampleRu: 'У тебя есть карта города?', pronRu: 'дер ШТАТ-пла:н' },
  { de: 'Eingang', article: 'der', plural: '-¨e', pos: 'noun', ru: 'вход', example: 'Der Eingang ist links.', exampleRu: 'Вход слева.', pronRu: 'дер АЙН-ганг' },
  { de: 'Ausgang', article: 'der', plural: '-¨e', pos: 'noun', ru: 'выход', example: 'Wo ist der Ausgang?', exampleRu: 'Где выход?', pronRu: 'дер АУС-ганг' },
  // Wo?
  { de: 'gegenüber', pos: 'adv', ru: 'напротив', example: 'Die Bank ist gleich gegenüber.', exampleRu: 'Банк прямо напротив.', pronRu: 'гэ-гэн-Ю:-ба' },
  { de: 'nah', pos: 'adj', ru: 'близко, близкий', example: 'Der Park ist ganz nah.', exampleRu: 'Парк совсем близко.', pronRu: 'НА:' },
  { de: 'dort', pos: 'adv', ru: 'там', example: 'Dort ist die Kirche.', exampleRu: 'Там церковь.', pronRu: 'ДОРТ' },
];
