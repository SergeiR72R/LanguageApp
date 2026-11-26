import type { VocabItem } from '../../types';

// Word bank A2 · Unit 17 — Natur und Umwelt
export const words: VocabItem[] = [
  // Wetter
  { de: 'Blitz', article: 'der', plural: '-e', pos: 'noun', ru: 'молния', example: 'Bei Blitz und Donner bleiben wir im Haus.', exampleRu: 'Во время грозы с молнией мы остаёмся дома.' },
  { de: 'Donner', article: 'der', plural: '-', pos: 'noun', ru: 'гром', example: 'Der Hund hat Angst vor dem Donner.', exampleRu: 'Собака боится грома.' },
  { de: 'Sturm', article: 'der', plural: '-¨e', pos: 'noun', ru: 'буря, шторм', example: 'Der Sturm hat viele Bäume umgeworfen.', exampleRu: 'Буря повалила много деревьев.' },
  { de: 'Kälte', article: 'die', plural: '–', pos: 'noun', ru: 'холод', example: 'Im Januar war die Kälte schlimm, minus 15 Grad!', exampleRu: 'В январе был сильный холод, минус 15 градусов!', pronRu: 'ди КЭЛЬ-тэ' },
  { de: 'Grad', article: 'das', plural: '–', pos: 'noun', ru: 'градус', example: 'Heute sind es 25 Grad.', exampleRu: 'Сегодня 25 градусов.' },
  { de: 'Wettervorhersage', article: 'die', plural: '-n', pos: 'noun', ru: 'прогноз погоды', example: 'Laut Wettervorhersage regnet es am Wochenende.', exampleRu: 'По прогнозу погоды на выходных будет дождь.', pronRu: 'ди ВЭ-та-фо:а-хэа-за:-гэ' },
  { de: 'Glatteis', article: 'das', plural: '–', pos: 'noun', ru: 'гололёд', example: 'Fahr bitte langsam, es gibt Glatteis!', exampleRu: 'Езжай, пожалуйста, медленно, гололёд!' },
  { de: 'feucht', pos: 'adj', ru: 'влажный, сырой', example: 'Im Keller ist die Luft immer feucht.', exampleRu: 'В подвале воздух всегда сырой.', pronRu: 'ФОЙХЬТ' },

  // Natur
  { de: 'Vogel', article: 'der', plural: '-¨', pos: 'noun', ru: 'птица', example: 'Am Morgen singen die Vögel im Garten.', exampleRu: 'Утром в саду поют птицы.', pronRu: 'дер ФО:-гэль' },
  { de: 'Insekt', article: 'das', plural: '-en', pos: 'noun', ru: 'насекомое', example: 'Bienen sind wichtige Insekten.', exampleRu: 'Пчёлы — важные насекомые.' },
  { de: 'Wiese', article: 'die', plural: '-n', pos: 'noun', ru: 'луг', example: 'Die Kinder spielen auf der Wiese hinter dem Haus.', exampleRu: 'Дети играют на лугу за домом.', pronRu: 'ди ВИ:-зэ' },
  { de: 'Erde', article: 'die', plural: '–', pos: 'noun', ru: 'земля (почва; планета)', example: 'Die Pflanze braucht frische Erde.', exampleRu: 'Растению нужна свежая земля.' },
  { de: 'blühen', forms: 'blüht, hat geblüht', pos: 'verb', ru: 'цвести', example: 'Im April blühen die Bäume im Park.', exampleRu: 'В апреле в парке цветут деревья.' },
  { de: 'wachsen', forms: 'wächst, ist gewachsen', pos: 'verb', ru: 'расти', example: 'Die Tomaten wachsen dieses Jahr sehr gut.', exampleRu: 'Помидоры в этом году растут очень хорошо.', pronRu: 'ВАК-сэн' },
  { de: 'pflanzen', forms: 'pflanzt, hat gepflanzt', pos: 'verb', ru: 'сажать (растения)', example: 'Im Herbst pflanzen wir einen Apfelbaum.', exampleRu: 'Осенью мы посадим яблоню.' },
  { de: 'retten', forms: 'rettet, hat gerettet', pos: 'verb', ru: 'спасать', example: 'Die Feuerwehr hat die Katze gerettet.', exampleRu: 'Пожарные спасли кошку.' },

  // Müll
  { de: 'Biomüll', article: 'der', plural: '–', pos: 'noun', ru: 'пищевые и растительные отходы', example: 'Kartoffelschalen gehören in den Biomüll.', exampleRu: 'Картофельные очистки выбрасывают в биоотходы.' },
  { de: 'Altglas', article: 'das', plural: '–', pos: 'noun', ru: 'стеклотара (для переработки)', example: 'Altglas bringen wir zum Container an der Ecke.', exampleRu: 'Старое стекло мы относим к контейнеру на углу.' },
  { de: 'Sack', article: 'der', plural: '-¨e', pos: 'noun', ru: 'мешок (der gelbe Sack — для упаковок)', example: 'Der gelbe Sack ist schon wieder voll.', exampleRu: 'Жёлтый мешок опять полный.' },
  { de: 'Karton', article: 'der', plural: '-s', pos: 'noun', ru: 'картонная коробка', example: 'Bitte mach die Kartons klein, bevor du sie wegwirfst.', exampleRu: 'Пожалуйста, сложи коробки, прежде чем выбросить.', pronRu: 'дер кар-ТОНГ' },
  { de: 'Plastiktüte', article: 'die', plural: '-n', pos: 'noun', ru: 'пластиковый пакет', example: 'Ich nehme zum Einkaufen keine Plastiktüte mehr.', exampleRu: 'Я больше не беру за покупками пластиковый пакет.' },
  { de: 'Stofftasche', article: 'die', plural: '-n', pos: 'noun', ru: 'тканевая сумка', example: 'Zum Einkaufen nehme ich immer eine Stofftasche mit.', exampleRu: 'За покупками я всегда беру с собой тканевую сумку.' },
  { de: 'Mehrwegflasche', article: 'die', plural: '-n', pos: 'noun', ru: 'многоразовая бутылка', example: 'Mehrwegflaschen werden gewaschen und wieder benutzt.', exampleRu: 'Многоразовые бутылки моют и используют снова.' },
  { de: 'wegwerfen', forms: 'wirft weg, hat weggeworfen', pos: 'verb', ru: 'выбрасывать', example: 'Wirf das Brot nicht weg, ich esse es morgen.', exampleRu: 'Не выбрасывай хлеб, я съем его завтра.' },
  { de: 'leeren', forms: 'leert, hat geleert', pos: 'verb', ru: 'опорожнять, освобождать', example: 'Die Mülltonnen werden jeden Mittwoch geleert.', exampleRu: 'Мусорные баки опорожняют каждую среду.' },
  { de: 'schädlich', pos: 'adj', ru: 'вредный', example: 'Rauchen ist schädlich für die Gesundheit.', exampleRu: 'Курение вредно для здоровья.' },

  // Energie
  { de: 'Solaranlage', article: 'die', plural: '-n', pos: 'noun', ru: 'солнечная электростанция, солнечные панели', example: 'Unser Nachbar hat eine Solaranlage auf dem Dach.', exampleRu: 'У нашего соседа на крыше солнечные панели.', pronRu: 'ди зо-ЛА:А-ан-ла:-гэ' },
  { de: 'Windrad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'ветряк, ветрогенератор', example: 'An der Küste sieht man viele Windräder.', exampleRu: 'На побережье видно много ветряков.' },
  { de: 'heizen', forms: 'heizt, hat geheizt', pos: 'verb', ru: 'топить, отапливать', example: 'Im Schlafzimmer heizen wir nicht so viel.', exampleRu: 'В спальне мы топим не так сильно.' },
  { de: 'lüften', forms: 'lüftet, hat gelüftet', pos: 'verb', ru: 'проветривать', example: 'Im Winter lüfte ich dreimal am Tag kurz.', exampleRu: 'Зимой я коротко проветриваю три раза в день.', pronRu: 'ЛЮФ-тэн' },
  { de: 'Stecker', article: 'der', plural: '-', pos: 'noun', ru: 'вилка (электрическая)', example: 'Zieh bitte den Stecker vom Fernseher.', exampleRu: 'Выдерни, пожалуйста, вилку телевизора из розетки.' },
  { de: 'Leitungswasser', article: 'das', plural: '–', pos: 'noun', ru: 'водопроводная вода', example: 'In Deutschland kann man Leitungswasser trinken.', exampleRu: 'В Германии можно пить воду из-под крана.' },
  { de: 'regional', pos: 'adj', ru: 'местный, региональный', example: 'Ich kaufe gern regionales Obst und Gemüse.', exampleRu: 'Я люблю покупать местные фрукты и овощи.', pronRu: 'рэ-ги-о-НА:ЛЬ' },
  { de: 'Umweltschutz', article: 'der', plural: '–', pos: 'noun', ru: 'охрана окружающей среды', example: 'Umweltschutz ist heute sehr wichtig.', exampleRu: 'Охрана окружающей среды сегодня очень важна.' },
  { de: 'Klimaschutz', article: 'der', plural: '–', pos: 'noun', ru: 'защита климата', example: 'Viele junge Menschen demonstrieren für mehr Klimaschutz.', exampleRu: 'Многие молодые люди выходят на демонстрации за защиту климата.' },
  { de: 'Fahrgemeinschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'совместные поездки (на одной машине)', example: 'Mit zwei Kollegen habe ich eine Fahrgemeinschaft.', exampleRu: 'Мы с двумя коллегами ездим на работу на одной машине.' },
  // Mehr Wetter und Natur
  { de: 'Schauer', article: 'der', plural: '-', pos: 'noun', ru: 'ливень (кратковременный)', example: 'Am Nachmittag gibt es einzelne Schauer.', exampleRu: 'Днём местами кратковременные ливни.', pronRu: 'дер ШАУ-а' },
  { de: 'Hagel', article: 'der', plural: '–', pos: 'noun', ru: 'град', example: 'Der Hagel hat unser Auto beschädigt.', exampleRu: 'Град повредил нашу машину.', pronRu: 'дер ХА:-гэль' },
  { de: 'Frost', article: 'der', plural: '-¨e', pos: 'noun', ru: 'мороз', example: 'In der Nacht gibt es Frost, bis minus fünf Grad.', exampleRu: 'Ночью мороз, до минус пяти градусов.' },
  { de: 'Sonnenschein', article: 'der', plural: '–', pos: 'noun', ru: 'солнечный свет, солнце', example: 'Am Wochenende erwartet uns viel Sonnenschein.', exampleRu: 'На выходных нас ждёт много солнца.' },
  { de: 'Unwetter', article: 'das', plural: '-', pos: 'noun', ru: 'непогода, ненастье (буря, ливень)', example: 'Nach dem Unwetter sind viele Bäume umgefallen.', exampleRu: 'После непогоды упало много деревьев.' },
  { de: 'Hochwasser', article: 'das', plural: '-', pos: 'noun', ru: 'наводнение, паводок', example: 'Nach dem langen Regen gibt es am Fluss Hochwasser.', exampleRu: 'После долгого дождя на реке паводок.' },
  { de: 'Waldbrand', article: 'der', plural: '-¨e', pos: 'noun', ru: 'лесной пожар', example: 'Im Sommer gibt es oft Waldbrände, weil es so trocken ist.', exampleRu: 'Летом часто бывают лесные пожары, потому что очень сухо.' },
  { de: 'Feuer', article: 'das', plural: '-', pos: 'noun', ru: 'огонь, пожар', example: 'Im Wald darf man kein Feuer machen.', exampleRu: 'В лесу нельзя разводить огонь.', pronRu: 'дас ФОЙ-а' },
  { de: 'Nationalpark', article: 'der', plural: '-s', pos: 'noun', ru: 'национальный парк', example: 'Im Nationalpark werden Tiere und Pflanzen geschützt.', exampleRu: 'В национальном парке охраняют животных и растения.' },
  { de: 'Biene', article: 'die', plural: '-n', pos: 'noun', ru: 'пчела', example: 'Die Bienen fliegen von Blume zu Blume.', exampleRu: 'Пчёлы летают от цветка к цветку.' },
  { de: 'Schmetterling', article: 'der', plural: '-e', pos: 'noun', ru: 'бабочка', example: 'Im Garten sitzt ein bunter Schmetterling.', exampleRu: 'В саду сидит пёстрая бабочка.', pronRu: 'дер ШМЭ-та-линг' },

  // Mehr Haushalt und Energie
  { de: 'Glühbirne', article: 'die', plural: '-n', pos: 'noun', ru: 'лампочка (накаливания)', example: 'Die Glühbirne in der Küche ist kaputt.', exampleRu: 'Лампочка на кухне перегорела.', pronRu: 'ди ГЛЮ:-бир-нэ' },
  { de: 'Wärme', article: 'die', plural: '–', pos: 'noun', ru: 'тепло', example: 'Mach das Fenster zu, sonst geht die Wärme raus.', exampleRu: 'Закрой окно, а то тепло уходит.', pronRu: 'ди ВЭР-мэ' },
  { de: 'Wasserhahn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'водопроводный кран', example: 'Mach bitte den Wasserhahn zu, wenn du dir die Zähne putzt.', exampleRu: 'Закрывай, пожалуйста, кран, когда чистишь зубы.' },
  { de: 'Abgas', article: 'das', plural: '-e', pos: 'noun', ru: 'выхлопной газ', example: 'Die Abgase von Autos sind schlecht für die Luft.', exampleRu: 'Выхлопные газы машин вредны для воздуха.' },
];
