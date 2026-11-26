import type { VocabItem } from '../../types';

// Word bank A1 · Unit 18 — Wetter und Wochenende
export const words: VocabItem[] = [
  // Wetter
  { de: 'sonnig', pos: 'adj', ru: 'солнечный', example: 'Morgen ist es sonnig.', exampleRu: 'Завтра будет солнечно.', pronRu: 'ЗО-нихь' },
  { de: 'windig', pos: 'adj', ru: 'ветреный', example: 'Im Herbst ist es oft windig.', exampleRu: 'Осенью часто ветрено.', pronRu: 'ВИН-дихь' },
  { de: 'bewölkt', pos: 'adj', ru: 'облачный', example: 'Heute ist es bewölkt.', exampleRu: 'Сегодня облачно.', pronRu: 'бэ-ВЁЛЬКТ' },
  { de: 'nass', pos: 'adj', ru: 'мокрый', example: 'Meine Jacke ist ganz nass.', exampleRu: 'Моя куртка совсем мокрая.', pronRu: 'НАС' },
  { de: 'trocken', pos: 'adj', ru: 'сухой', example: 'Heute bleibt es trocken.', exampleRu: 'Сегодня будет сухо (без дождя).', pronRu: 'ТРО-кен' },
  { de: 'kühl', pos: 'adj', ru: 'прохладный', example: 'Am Abend ist es kühl.', exampleRu: 'Вечером прохладно.', pronRu: 'КЮ:ЛЬ' },
  { de: 'Gewitter', article: 'das', plural: '-', pos: 'noun', ru: 'гроза', example: 'Am Abend gibt es ein Gewitter.', exampleRu: 'Вечером будет гроза.', pronRu: 'дас гэ-ВИ-та' },
  { de: 'Nebel', article: 'der', plural: '-', pos: 'noun', ru: 'туман', example: 'Am Morgen gibt es oft Nebel.', exampleRu: 'Утром часто туман.', pronRu: 'дер НЕ:-бэль' },
  { de: 'Temperatur', article: 'die', plural: '-en', pos: 'noun', ru: 'температура (воздуха)', example: 'Die Temperatur ist heute 15 Grad.', exampleRu: 'Температура сегодня 15 градусов.', pronRu: 'ди тэм-пэ-ра-ТУ:А' },
  { de: 'minus', pos: 'adv', ru: 'минус (о температуре)', example: 'In der Nacht sind es minus zehn Grad.', exampleRu: 'Ночью минус десять градусов.', pronRu: 'МИ:-нус' },
  { de: 'Himmel', article: 'der', plural: '-', pos: 'noun', ru: 'небо', example: 'Der Himmel ist heute blau.', exampleRu: 'Небо сегодня голубое.', pronRu: 'дер ХИ-мэль' },
  { de: 'Wetterbericht', article: 'der', plural: '-e', pos: 'noun', ru: 'прогноз погоды', example: 'Was sagt der Wetterbericht?', exampleRu: 'Что говорит прогноз погоды?', pronRu: 'дер ВЕ-та-бэ-рихьт' },
  { de: 'Regenschirm', article: 'der', plural: '-e', pos: 'noun', ru: 'зонт', example: 'Nimm deinen Regenschirm mit!', exampleRu: 'Возьми с собой зонт!', pronRu: 'дер РЕ:-гэн-ширм' },
  { de: 'Sonnenbrille', article: 'die', plural: '-n', pos: 'noun', ru: 'солнечные очки', example: 'Wo ist meine Sonnenbrille?', exampleRu: 'Где мои солнечные очки?', pronRu: 'ди ЗО-нэн-бри-лэ' },
  { de: 'frieren', forms: 'er friert, hat gefroren', pos: 'verb', ru: 'мёрзнуть', example: 'Ich friere, es ist so kalt!', exampleRu: 'Я мёрзну, так холодно!', pronRu: 'ФРИ:-рэн' },
  // Natur und Ausflug
  { de: 'Meer', article: 'das', plural: '-e', pos: 'noun', ru: 'море', example: 'Das Meer ist heute warm.', exampleRu: 'Море сегодня тёплое.', pronRu: 'дас МЕ:А' },
  { de: 'Strand', article: 'der', plural: '-¨e', pos: 'noun', ru: 'пляж', example: 'Der Strand ist sehr schön.', exampleRu: 'Пляж очень красивый.', pronRu: 'дер ШТРАНТ' },
  { de: 'Berg', article: 'der', plural: '-e', pos: 'noun', ru: 'гора', example: 'Der Berg ist sehr hoch.', exampleRu: 'Гора очень высокая.', pronRu: 'дер БЕРК' },
  { de: 'Wald', article: 'der', plural: '-¨er', pos: 'noun', ru: 'лес', example: 'Wir gehen gern im Wald spazieren.', exampleRu: 'Мы любим гулять в лесу.', pronRu: 'дер ВАЛЬТ' },
  { de: 'Schwimmbad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'бассейн', example: 'Das Schwimmbad ist am Montag geschlossen.', exampleRu: 'Бассейн в понедельник закрыт.', pronRu: 'дас ШВИМ-ба:т' },
  { de: 'Picknick', article: 'das', plural: '-s', pos: 'noun', ru: 'пикник', example: 'Wir machen ein Picknick im Park.', exampleRu: 'Мы устраиваем пикник в парке.', pronRu: 'дас ПИК-ник' },
  { de: 'wandern', forms: 'er wandert, ist gewandert', pos: 'verb', ru: 'ходить в поход, гулять пешком (за городом)', example: 'Am Sonntag sind wir gewandert.', exampleRu: 'В воскресенье мы ходили в поход.', pronRu: 'ВАН-дан' },
  { de: 'spazieren gehen', forms: 'er geht spazieren, ist spazieren gegangen', pos: 'verb', ru: 'гулять', example: 'Wir sind im Park spazieren gegangen.', exampleRu: 'Мы гуляли в парке.', pronRu: 'шпа-ЦИ:-рэн ГЕ:-эн' },
  { de: 'schwimmen', forms: 'er schwimmt, ist geschwommen', pos: 'verb', ru: 'плавать', example: 'Wir sind im See geschwommen.', exampleRu: 'Мы плавали в озере.', pronRu: 'ШВИ-мэн' },
  { de: 'grillen', forms: 'er grillt, hat gegrillt', pos: 'verb', ru: 'жарить на гриле', example: 'Am Samstag haben wir gegrillt.', exampleRu: 'В субботу мы жарили шашлыки (на гриле).', pronRu: 'ГРИ-лэн' },
];
