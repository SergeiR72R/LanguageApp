import type { VocabItem } from '../../types';

// Word bank A1 · Unit 09 — Einkaufen
export const words: VocabItem[] = [
  // Wo kaufen wir ein?
  { de: 'Markt', article: 'der', plural: '-¨e', pos: 'noun', ru: 'рынок', example: 'Der Markt ist sehr schön.', exampleRu: 'Рынок очень красивый.', pronRu: 'дер МАРКТ' },
  { de: 'Bäckerei', article: 'die', plural: '-en', pos: 'noun', ru: 'пекарня, булочная', example: 'Die Bäckerei ist hier links.', exampleRu: 'Пекарня здесь слева.', pronRu: 'ди бэ-кэ-РАЙ' },
  { de: 'Lebensmittel', article: 'die', plural: 'только мн. ч.', pos: 'noun', ru: 'продукты питания', example: 'Die Lebensmittel sind hier billig.', exampleRu: 'Продукты здесь дешёвые.', pronRu: 'ди ЛЕ-бэнс-ми-тэль' },
  { de: 'Verkäuferin', article: 'die', plural: '-nen', pos: 'noun', ru: 'продавщица', example: 'Die Verkäuferin heißt Frau Huber.', exampleRu: 'Продавщицу зовут фрау Хубер.', pronRu: 'ди фэа-КОЙ-фэ-рин' },
  { de: 'Pfund', article: 'das', plural: '-e (после числа: 2 Pfund)', pos: 'noun', ru: 'полкило (500 г)', example: 'Ein Pfund Tomaten, bitte.', exampleRu: 'Полкило помидоров, пожалуйста.', pronRu: 'дас ПФУНТ' },
  { de: 'Preis', article: 'der', plural: '-e', pos: 'noun', ru: 'цена', example: 'Der Preis ist gut.', exampleRu: 'Цена хорошая.', pronRu: 'дер ПРАЙС' },
  { de: 'Einkaufszettel', article: 'der', plural: '–', pos: 'noun', ru: 'список покупок', example: 'Wo ist mein Einkaufszettel?', exampleRu: 'Где мой список покупок?', pronRu: 'дер АЙН-кауфс-цэ-тэль' },
  { de: 'bezahlen', forms: 'er bezahlt', pos: 'verb', ru: 'платить', example: 'Wo bezahle ich, bitte?', exampleRu: 'Где мне заплатить, пожалуйста?', pronRu: 'бэ-ЦА-лен' },
  { de: 'Karotte', article: 'die', plural: '-n', pos: 'noun', ru: 'морковь', example: 'Die Karotten sind frisch.', exampleRu: 'Морковь свежая.', pronRu: 'ди ка-РО-тэ' },
  { de: 'frisch', pos: 'adj', ru: 'свежий', example: 'Das Brot ist ganz frisch.', exampleRu: 'Хлеб совсем свежий.', pronRu: 'ФРИШ' },
  // Mengen und Verpackungen
  { de: 'Liter', article: 'der', plural: '–', pos: 'noun', ru: 'литр', example: 'Ich brauche zwei Liter Milch.', exampleRu: 'Мне нужно два литра молока.', pronRu: 'дер ЛИ-та' },
  { de: 'Stück', article: 'das', plural: '-e (после числа: 6 Stück)', pos: 'noun', ru: 'штука; кусок', example: 'Zehn Stück kosten 2 Euro.', exampleRu: 'Десять штук стоят 2 евро.', pronRu: 'дас ШТЮК' },
  { de: 'Dose', article: 'die', plural: '-n', pos: 'noun', ru: 'банка (жестяная)', example: 'Eine Dose Tomaten, bitte.', exampleRu: 'Банку (консервированных) помидоров, пожалуйста.', pronRu: 'ди ДО-зэ' },
  { de: 'Tüte', article: 'die', plural: '-n', pos: 'noun', ru: 'пакет', example: 'Brauchen Sie eine Tüte?', exampleRu: 'Вам нужен пакет?', pronRu: 'ди ТЮ-тэ' },
  { de: 'Becher', article: 'der', plural: '–', pos: 'noun', ru: 'стаканчик (йогурта и т. п.)', example: 'Ich kaufe zwei Becher Joghurt.', exampleRu: 'Я покупаю два стаканчика йогурта.', pronRu: 'дер БЭ-хьа' },
  // Obst und Gemüse
  { de: 'Orange', article: 'die', plural: '-n', pos: 'noun', ru: 'апельсин', example: 'Die Orangen sind sehr süß.', exampleRu: 'Апельсины очень сладкие.', pronRu: 'ди о-РАН-жэ' },
  { de: 'Zitrone', article: 'die', plural: '-n', pos: 'noun', ru: 'лимон', example: 'Ich möchte Tee mit Zitrone.', exampleRu: 'Я хотел бы чай с лимоном.', pronRu: 'ди ци-ТРО-нэ' },
  { de: 'Birne', article: 'die', plural: '-n', pos: 'noun', ru: 'груша', example: 'Die Birnen kosten 3 Euro.', exampleRu: 'Груши стоят 3 евро.', pronRu: 'ди БИР-нэ' },
  { de: 'Erdbeere', article: 'die', plural: '-n', pos: 'noun', ru: 'клубника', example: 'Die Erdbeeren sind sehr lecker.', exampleRu: 'Клубника очень вкусная.', pronRu: 'ди ЭРТ-бэ:-рэ' },
  { de: 'Gurke', article: 'die', plural: '-n', pos: 'noun', ru: 'огурец', example: 'Eine Gurke kostet 80 Cent.', exampleRu: 'Огурец стоит 80 центов.', pronRu: 'ди ГУР-кэ' },
  { de: 'Zwiebel', article: 'die', plural: '-n', pos: 'noun', ru: 'лук (луковица)', example: 'Wir brauchen keine Zwiebeln.', exampleRu: 'Лук нам не нужен.', pronRu: 'ди ЦВИ:-бэль' },
  { de: 'Paprika', article: 'die', plural: '-s', pos: 'noun', ru: 'сладкий перец, паприка', example: 'Die Paprika ist rot.', exampleRu: 'Перец красный.', pronRu: 'ди ПАП-ри-ка' },
  // Im Regal
  { de: 'Salz', article: 'das', plural: '-e', pos: 'noun', ru: 'соль', example: 'Wir haben kein Salz.', exampleRu: 'У нас нет соли.', pronRu: 'дас ЗАЛЬЦ' },
  { de: 'Öl', article: 'das', plural: '-e', pos: 'noun', ru: 'масло (растительное)', example: 'Eine Flasche Öl, bitte.', exampleRu: 'Бутылку масла, пожалуйста.', pronRu: 'дас ЁЛЬ' },
];
