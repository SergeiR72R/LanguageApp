import type { VocabItem } from '../../types';

// Word bank A2 · Unit 06 — Essen gehen
export const words: VocabItem[] = [
  // Wo man essen kann
  { de: 'Imbiss', article: 'der', plural: '-e', pos: 'noun', ru: 'закусочная', example: 'Mittags esse ich oft eine Wurst am Imbiss.', exampleRu: 'В обед я часто ем сосиску в закусочной.' },
  { de: 'Kantine', article: 'die', plural: '-n', pos: 'noun', ru: 'столовая (на работе)', example: 'Das Essen in der Kantine ist billig.', exampleRu: 'Еда в столовой дешёвая.' },
  { de: 'Gasthaus', article: 'das', plural: '-¨er', pos: 'noun', ru: 'трактир, ресторанчик', example: 'Das Essen im Gasthaus ist sehr gut.', exampleRu: 'Еда в трактире очень хорошая.' },
  { de: 'Kneipe', article: 'die', plural: '-n', pos: 'noun', ru: 'пивная, бар', example: 'Nach der Arbeit gehen die Kollegen in die Kneipe.', exampleRu: 'После работы коллеги идут в пивную.' },
  { de: 'Terrasse', article: 'die', plural: '-n', pos: 'noun', ru: 'терраса', example: 'Im Sommer sitzen wir gern auf der Terrasse.', exampleRu: 'Летом мы любим сидеть на террасе.' },

  // Im Restaurant
  { de: 'Reservierung', article: 'die', plural: '-en', pos: 'noun', ru: 'бронирование', example: 'Ich habe eine Reservierung auf den Namen Bauer.', exampleRu: 'У меня забронирован столик на имя Бауэр.' },
  { de: 'Bestellung', article: 'die', plural: '-en', pos: 'noun', ru: 'заказ', example: 'Der Kellner bringt unsere Bestellung.', exampleRu: 'Официант приносит наш заказ.' },
  { de: 'Getränkekarte', article: 'die', plural: '-n', pos: 'noun', ru: 'карта напитков', example: 'Die Getränkekarte liegt auf dem Tisch.', exampleRu: 'Карта напитков лежит на столе.' },
  { de: 'Gericht', article: 'das', plural: '-e', pos: 'noun', ru: 'блюдо', example: 'Das Gericht heißt „Königsberger Klopse“.', exampleRu: 'Блюдо называется «Кёнигсбергские клопсы».' },
  { de: 'Menü', article: 'das', plural: '-s', pos: 'noun', ru: 'комплексный обед (не меню!)', example: 'Das Menü hat drei Gänge und kostet 25 Euro.', exampleRu: 'Комплексный обед из трёх блюд стоит 25 евро.' },
  { de: 'Tagesgericht', article: 'das', plural: '-e', pos: 'noun', ru: 'блюдо дня', example: 'Was ist heute das Tagesgericht?', exampleRu: 'Какое сегодня блюдо дня?' },
  { de: 'Quittung', article: 'die', plural: '-en', pos: 'noun', ru: 'квитанция, чек', example: 'Kann ich bitte eine Quittung bekommen?', exampleRu: 'Можно мне, пожалуйста, чек?' },
  { de: 'Serviette', article: 'die', plural: '-n', pos: 'noun', ru: 'салфетка', example: 'Können Sie mir bitte eine Serviette bringen?', exampleRu: 'Можете принести мне салфетку?' },
  { de: 'Ist hier noch frei?', pos: 'phrase', ru: 'Здесь свободно?', example: 'Entschuldigung, ist hier noch frei?', exampleRu: 'Извините, здесь свободно?' },
  { de: 'Platz nehmen', forms: 'nimmt Platz, hat Platz genommen', pos: 'phrase', ru: 'садиться, занимать место (вежливо)', example: 'Bitte nehmen Sie Platz!', exampleRu: 'Пожалуйста, присаживайтесь!' },
  { de: 'wählen', forms: 'wählt, hat gewählt', pos: 'verb', ru: 'выбирать', example: 'Haben Sie schon gewählt?', exampleRu: 'Вы уже выбрали?' },
  { de: 'aussuchen', forms: 'sucht aus, hat ausgesucht', pos: 'verb', ru: 'выбирать, подбирать', example: 'Such dir etwas aus, ich lade dich ein!', exampleRu: 'Выбери себе что-нибудь, я тебя угощаю!' },
  { de: 'bedienen', forms: 'bedient, hat bedient', pos: 'verb', ru: 'обслуживать', example: 'Wer bedient hier? Wir warten schon lange.', exampleRu: 'Кто здесь обслуживает? Мы уже долго ждём.' },
  { de: 'servieren', forms: 'serviert, hat serviert', pos: 'verb', ru: 'подавать (блюдо)', example: 'Der Kellner serviert den Fisch mit Reis.', exampleRu: 'Официант подаёт рыбу с рисом.' },
  { de: 'Zum Wohl!', pos: 'phrase', ru: 'За ваше здоровье! (вежливый тост)', example: 'Zum Wohl, Frau Schmidt!', exampleRu: 'Ваше здоровье, госпожа Шмидт!' },

  // Speisen und Zutaten
  { de: 'Schnitzel', article: 'das', plural: '-', pos: 'noun', ru: 'шницель (отбивная)', example: 'Das Schnitzel ist sehr groß.', exampleRu: 'Шницель очень большой.' },
  { de: 'Braten', article: 'der', plural: '-', pos: 'noun', ru: 'жаркое (мясо, запечённое куском)', example: 'Am Sonntag gibt es bei Oma immer Braten.', exampleRu: 'В воскресенье у бабушки всегда жаркое.' },
  { de: 'Pommes', article: 'die', plural: 'только мн. ч.', pos: 'noun', ru: 'картофель фри', example: 'Die Kinder möchten Pommes mit Ketchup.', exampleRu: 'Дети хотят картошку фри с кетчупом.' },
  { de: 'Kartoffelsalat', article: 'der', plural: '-e', pos: 'noun', ru: 'картофельный салат', example: 'Zum Schnitzel gibt es Kartoffelsalat.', exampleRu: 'К шницелю подают картофельный салат.' },
  { de: 'Soße', article: 'die', plural: '-n', pos: 'noun', ru: 'соус', example: 'Die Soße ist mir zu scharf.', exampleRu: 'Соус для меня слишком острый.' },
  { de: 'Pilz', article: 'der', plural: '-e', pos: 'noun', ru: 'гриб', example: 'Ich esse gern Pizza mit Pilzen.', exampleRu: 'Я люблю пиццу с грибами.' },
  { de: 'Knoblauch', article: 'der', plural: '–', pos: 'noun', ru: 'чеснок', example: 'In der Soße ist viel Knoblauch.', exampleRu: 'В соусе много чеснока.' },
  { de: 'Pfeffer', article: 'der', plural: '–', pos: 'noun', ru: 'перец (специя)', example: 'Kannst du mir bitte den Pfeffer geben?', exampleRu: 'Можешь передать мне перец?' },
  { de: 'Sahne', article: 'die', plural: '–', pos: 'noun', ru: 'сливки', example: 'Ich nehme den Kaffee mit Sahne.', exampleRu: 'Я возьму кофе со сливками.' },
  { de: 'vegetarisch', pos: 'adj', ru: 'вегетарианский', example: 'Ist die Gemüsesuppe vegetarisch?', exampleRu: 'Овощной суп вегетарианский?' },

  // Geschmack
  { de: 'köstlich', pos: 'adj', ru: 'очень вкусный, восхитительный', example: 'Der Apfelkuchen war köstlich!', exampleRu: 'Яблочный пирог был восхитительным!' },
  { de: 'bitter', pos: 'adj', ru: 'горький', example: 'Der Kaffee ist sehr bitter.', exampleRu: 'Кофе очень горький.' },
  { de: 'mild', pos: 'adj', ru: 'мягкий, неострый', example: 'Die Suppe ist mild, auch Kinder können sie essen.', exampleRu: 'Суп неострый, его могут есть и дети.' },
  { de: 'fett', pos: 'adj', ru: 'жирный', example: 'Die Pommes sind mir zu fett.', exampleRu: 'Картошка фри для меня слишком жирная.' },
  { de: 'roh', pos: 'adj', ru: 'сырой', example: 'Das Fleisch ist innen noch roh.', exampleRu: 'Мясо внутри ещё сырое.' },
  { de: 'gebraten', pos: 'adj', ru: 'жареный', example: 'Ich nehme die gebratenen Kartoffeln.', exampleRu: 'Я возьму жареную картошку.' },
  { de: 'hungrig', pos: 'adj', ru: 'голодный', example: 'Nach der Arbeit bin ich immer sehr hungrig.', exampleRu: 'После работы я всегда очень голодный.' },
  // Ergänzungen
  { de: 'Kellnerin', article: 'die', plural: '-nen', pos: 'noun', ru: 'официантка', example: 'Die Kellnerin bringt uns die Speisekarte.', exampleRu: 'Официантка приносит нам меню.' },
  { de: 'Stammgast', article: 'der', plural: '-¨e', pos: 'noun', ru: 'постоянный посетитель', example: 'Herr Braun ist hier Stammgast, er kommt jeden Freitag.', exampleRu: 'Господин Браун здесь постоянный гость, он приходит каждую пятницу.' },
  { de: 'Theke', article: 'die', plural: '-n', pos: 'noun', ru: 'стойка, прилавок', example: 'Bitte bestellen und bezahlen Sie an der Theke.', exampleRu: 'Пожалуйста, заказывайте и платите у стойки.' },
  { de: 'Lieblingsgericht', article: 'das', plural: '-e', pos: 'noun', ru: 'любимое блюдо', example: 'Mein Lieblingsgericht ist Schnitzel mit Kartoffelsalat.', exampleRu: 'Моё любимое блюдо — шницель с картофельным салатом.' },
  { de: 'Steak', article: 'das', plural: '-s', pos: 'noun', ru: 'стейк', example: 'Wie möchten Sie das Steak? Medium?', exampleRu: 'Какой вам стейк? Средней прожарки?', pronRu: 'СТЕЙК' },
  { de: 'Bratwurst', article: 'die', plural: '-¨e', pos: 'noun', ru: 'жареная колбаска', example: 'Ich nehme eine Bratwurst mit Senf.', exampleRu: 'Я возьму жареную колбаску с горчицей.' },
  { de: 'Rindfleisch', article: 'das', plural: '–', pos: 'noun', ru: 'говядина', example: 'Die Suppe ist mit Rindfleisch.', exampleRu: 'Суп с говядиной.' },
  { de: 'Schweinefleisch', article: 'das', plural: '–', pos: 'noun', ru: 'свинина', example: 'Ich esse kein Schweinefleisch.', exampleRu: 'Я не ем свинину.' },
  { de: 'Rotwein', article: 'der', plural: '-e', pos: 'noun', ru: 'красное вино', example: 'Zum Fleisch trinke ich gern ein Glas Rotwein.', exampleRu: 'К мясу я люблю выпить бокал красного вина.' },
  { de: 'Mineralwasser', article: 'das', plural: '-', pos: 'noun', ru: 'минеральная вода', example: 'Eine Flasche Mineralwasser, bitte.', exampleRu: 'Бутылку минеральной воды, пожалуйста.' },
  { de: 'Apfelschorle', article: 'die', plural: '-n', pos: 'noun', ru: 'яблочный сок с минеральной водой', example: 'Die Kinder trinken eine Apfelschorle.', exampleRu: 'Дети пьют яблочный сок с минералкой.' },
  { de: 'Kugel', article: 'die', plural: '-n', pos: 'noun', ru: 'шарик (мороженого)', example: 'Ich möchte zwei Kugeln Eis, bitte.', exampleRu: 'Мне два шарика мороженого, пожалуйста.' },
  { de: 'lauwarm', pos: 'adj', ru: 'чуть тёплый, едва тёплый', example: 'Der Kaffee ist nur lauwarm.', exampleRu: 'Кофе лишь чуть тёплый.' },
  { de: 'angebrannt', pos: 'adj', ru: 'подгоревший', example: 'Entschuldigung, die Pizza ist angebrannt.', exampleRu: 'Извините, пицца подгорела.' },
  { de: 'Guten Appetit!', pos: 'phrase', ru: 'Приятного аппетита!', example: 'Das Essen ist fertig. Guten Appetit!', exampleRu: 'Еда готова. Приятного аппетита!' },
  { de: 'mit Karte zahlen', pos: 'phrase', ru: 'платить картой', example: 'Kann ich hier mit Karte zahlen?', exampleRu: 'Здесь можно заплатить картой?' },
  { de: 'Ich lade dich ein.', pos: 'phrase', ru: 'Я тебя угощаю.', example: 'Lass dein Geld stecken, ich lade dich ein.', exampleRu: 'Убери деньги, я тебя угощаю.' },
];
