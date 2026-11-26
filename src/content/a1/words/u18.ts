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
  { de: 'Himmel', article: 'der', plural: '-', pos: 'noun', ru: 'небо', example: 'Der Himmel ist heute blau.', exampleRu: 'Небо сегодня голубое.', pronRu: 'дер ХИ-мэль' },
  { de: 'Wetterbericht', article: 'der', plural: '-e', pos: 'noun', ru: 'прогноз погоды', example: 'Was sagt der Wetterbericht?', exampleRu: 'Что говорит прогноз погоды?', pronRu: 'дер ВЕ-та-бэ-рихьт' },
  { de: 'Regenschirm', article: 'der', plural: '-e', pos: 'noun', ru: 'зонт', example: 'Nimm deinen Regenschirm mit!', exampleRu: 'Возьми с собой зонт!', pronRu: 'дер РЕ:-гэн-ширм' },
  { de: 'Sonnenbrille', article: 'die', plural: '-n', pos: 'noun', ru: 'солнечные очки', example: 'Wo ist meine Sonnenbrille?', exampleRu: 'Где мои солнечные очки?', pronRu: 'ди ЗО-нэн-бри-лэ' },
  { de: 'frieren', forms: 'er friert, hat gefroren', pos: 'verb', ru: 'мёрзнуть', example: 'Ich friere, es ist so kalt!', exampleRu: 'Я мёрзну, так холодно!', pronRu: 'ФРИ:-рэн' },
  { de: 'Eis', article: 'das', plural: '–', pos: 'noun', ru: 'лёд; мороженое', example: 'Im Sommer essen wir gern Eis.', exampleRu: 'Летом мы любим есть мороженое.', pronRu: 'дас АЙС' },
  { de: 'Schneemann', article: 'der', plural: '-¨er', pos: 'noun', ru: 'снеговик', example: 'Die Kinder bauen einen Schneemann.', exampleRu: 'Дети лепят снеговика.', pronRu: 'дер ШНЕ:-ман' },
  { de: 'Regenbogen', article: 'der', plural: '-¨', pos: 'noun', ru: 'радуга', example: 'Schau mal, ein Regenbogen!', exampleRu: 'Смотри, радуга!', pronRu: 'дер РЕ:-гэн-бо:-гэн' },
  { de: 'Sonnencreme', article: 'die', plural: '-s', pos: 'noun', ru: 'солнцезащитный крем', example: 'Hast du Sonnencreme dabei?', exampleRu: 'У тебя есть с собой крем от солнца?', pronRu: 'ди ЗО-нэн-крэ:м' },
  // Natur und Ausflug
  { de: 'Hitze', article: 'die', plural: '–', pos: 'noun', ru: 'жара', example: 'Bei Hitze trinke ich viel Wasser.', exampleRu: 'В жару я пью много воды.', pronRu: 'ди ХИ-цэ' },
  { de: 'Schlitten', article: 'der', plural: '-', pos: 'noun', ru: 'санки; Schlitten fahren — кататься на санках', example: 'Im Winter fahren die Kinder Schlitten.', exampleRu: 'Зимой дети катаются на санках.', pronRu: 'дер ШЛИ-тэн' },
  { de: 'Berg', article: 'der', plural: '-e', pos: 'noun', ru: 'гора', example: 'Der Berg ist sehr hoch.', exampleRu: 'Гора очень высокая.', pronRu: 'дер БЕРК' },
  { de: 'Picknick', article: 'das', plural: '-s', pos: 'noun', ru: 'пикник', example: 'Wir machen ein Picknick im Park.', exampleRu: 'Мы устраиваем пикник в парке.', pronRu: 'дас ПИК-ник' },
  { de: 'Urlaub', article: 'der', plural: '-e', pos: 'noun', ru: 'отпуск', example: 'Im Sommer haben wir zwei Wochen Urlaub.', exampleRu: 'Летом у нас две недели отпуска.', pronRu: 'дер У:А-лауп' },
  { de: 'Sand', article: 'der', plural: '–', pos: 'noun', ru: 'песок', example: 'Die Kinder spielen im Sand.', exampleRu: 'Дети играют в песке.', pronRu: 'дер ЗАНТ' },
  { de: 'baden', forms: 'er badet, hat gebadet', pos: 'verb', ru: 'купаться', example: 'Die Kinder baden im See.', exampleRu: 'Дети купаются в озере.', pronRu: 'БА:-дэн' },
  { de: 'grillen', forms: 'er grillt, hat gegrillt', pos: 'verb', ru: 'жарить на гриле', example: 'Am Samstag haben wir gegrillt.', exampleRu: 'В субботу мы жарили шашлыки (на гриле).', pronRu: 'ГРИ-лэн' },
];
