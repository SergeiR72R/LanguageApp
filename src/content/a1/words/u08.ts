import type { VocabItem } from '../../types';

// Word bank A1 · Unit 08 — Essen und Trinken
export const words: VocabItem[] = [
  // Mahlzeiten, Hunger und Durst
  { de: 'Mittagessen', article: 'das', plural: '–', pos: 'noun', ru: 'обед', example: 'Das Mittagessen ist fertig!', exampleRu: 'Обед готов!', pronRu: 'дас МИ-так-э-сэн' },
  { de: 'Abendessen', article: 'das', plural: '–', pos: 'noun', ru: 'ужин', example: 'Das Abendessen ist sehr lecker.', exampleRu: 'Ужин очень вкусный.', pronRu: 'дас А-бэнт-э-сэн' },
  { de: 'Hunger', article: 'der', plural: '–', pos: 'noun', ru: 'голод', example: 'Ich habe Hunger.', exampleRu: 'Я голоден.', pronRu: 'дер ХУН-га' },
  { de: 'Durst', article: 'der', plural: '–', pos: 'noun', ru: 'жажда', example: 'Hast du Durst?', exampleRu: 'Ты хочешь пить?', pronRu: 'дер ДУРСТ' },
  { de: 'frühstücken', forms: 'er frühstückt', pos: 'verb', ru: 'завтракать', example: 'Wir frühstücken zusammen.', exampleRu: 'Мы завтракаем вместе.', pronRu: 'ФРЮ-штю-кен' },
  { de: 'kochen', forms: 'er kocht', pos: 'verb', ru: 'готовить, варить', example: 'Mein Mann kocht sehr gut.', exampleRu: 'Мой муж очень хорошо готовит.', pronRu: 'КО-хен' },
  // Essen
  { de: 'Fisch', article: 'der', plural: '-e', pos: 'noun', ru: 'рыба', example: 'Ich mag keinen Fisch.', exampleRu: 'Я не люблю рыбу.', pronRu: 'дер ФИШ' },
  { de: 'Kuchen', article: 'der', plural: '–', pos: 'noun', ru: 'пирог, торт', example: 'Möchtest du Kuchen?', exampleRu: 'Хочешь пирога?', pronRu: 'дер КУ-хен' },
  { de: 'Marmelade', article: 'die', plural: '-n', pos: 'noun', ru: 'варенье, джем', example: 'Ich esse ein Brötchen mit Marmelade.', exampleRu: 'Я ем булочку с джемом.', pronRu: 'ди мар-мэ-ЛА-дэ' },
  { de: 'Müsli', article: 'das', plural: '-s', pos: 'noun', ru: 'мюсли', example: 'Mein Sohn isst Müsli mit Milch.', exampleRu: 'Мой сын ест мюсли с молоком.', pronRu: 'дас МЮС-ли' },
  { de: 'Joghurt', article: 'der', plural: '-s', pos: 'noun', ru: 'йогурт', example: 'Der Joghurt ist sehr lecker.', exampleRu: 'Йогурт очень вкусный.', pronRu: 'дер ЙО-гурт' },
  { de: 'Salat', article: 'der', plural: '-e', pos: 'noun', ru: 'салат', example: 'Ich möchte einen Salat.', exampleRu: 'Я хотел бы салат.', pronRu: 'дер за-ЛАТ' },
  { de: 'Reis', article: 'der', plural: '–', pos: 'noun', ru: 'рис', example: 'Wir essen Fisch und Reis.', exampleRu: 'Мы едим рыбу с рисом.', pronRu: 'дер РАЙС' },
  { de: 'Nudel', article: 'die', plural: '-n', pos: 'noun', ru: 'макаронина; мн. ч.: макароны', example: 'Die Kinder mögen Nudeln.', exampleRu: 'Дети любят макароны.', pronRu: 'ди НУ-дэль' },
  { de: 'Hähnchen', article: 'das', plural: '–', pos: 'noun', ru: 'курица (блюдо)', example: 'Das Hähnchen ist sehr gut.', exampleRu: 'Курица очень хорошая.', pronRu: 'дас ХЭН-хьен' },
  { de: 'Zucker', article: 'der', plural: '–', pos: 'noun', ru: 'сахар', example: 'Ich trinke Tee ohne Zucker.', exampleRu: 'Я пью чай без сахара.', pronRu: 'дер ЦУ-ка' },
  { de: 'Schokolade', article: 'die', plural: '-n', pos: 'noun', ru: 'шоколад', example: 'Magst du Schokolade?', exampleRu: 'Ты любишь шоколад?', pronRu: 'ди шо-ко-ЛА-дэ' },
  { de: 'süß', pos: 'adj', ru: 'сладкий', example: 'Der Kuchen ist sehr süß.', exampleRu: 'Пирог очень сладкий.', pronRu: 'ЗЮС' },
  // Getränke
  { de: 'Bier', article: 'das', plural: '-e', pos: 'noun', ru: 'пиво', example: 'Ein Bier, bitte!', exampleRu: 'Одно пиво, пожалуйста!', pronRu: 'дас БИ:А' },
  { de: 'Wein', article: 'der', plural: '-e', pos: 'noun', ru: 'вино', example: 'Meine Frau trinkt keinen Wein.', exampleRu: 'Моя жена не пьёт вино.', pronRu: 'дер ВАЙН' },
  // Geschirr und Besteck
  { de: 'Tasse', article: 'die', plural: '-n', pos: 'noun', ru: 'чашка', example: 'Möchten Sie eine Tasse Kaffee?', exampleRu: 'Хотите чашку кофе?', pronRu: 'ди ТА-сэ' },
  { de: 'Teller', article: 'der', plural: '–', pos: 'noun', ru: 'тарелка', example: 'Der Teller ist leer.', exampleRu: 'Тарелка пустая.', pronRu: 'дер ТЭ-ла' },
  { de: 'Gabel', article: 'die', plural: '-n', pos: 'noun', ru: 'вилка', example: 'Ich brauche eine Gabel.', exampleRu: 'Мне нужна вилка.', pronRu: 'ди ГА-бэль' },
  { de: 'Löffel', article: 'der', plural: '–', pos: 'noun', ru: 'ложка', example: 'Hast du einen Löffel?', exampleRu: 'У тебя есть ложка?', pronRu: 'дер ЛЁ-фэль' },
  { de: 'Messer', article: 'das', plural: '–', pos: 'noun', ru: 'нож', example: 'Das Messer ist hier.', exampleRu: 'Нож здесь.', pronRu: 'дас МЭ-са' },
];
