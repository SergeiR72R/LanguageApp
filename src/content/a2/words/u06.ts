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
  { de: 'Gast', article: 'der', plural: '-¨e', pos: 'noun', ru: 'гость, посетитель', example: 'Am Wochenende hat das Restaurant viele Gäste.', exampleRu: 'В выходные в ресторане много посетителей.' },
  { de: 'Bedienung', article: 'die', plural: '-en', pos: 'noun', ru: 'обслуживание; официант(ка)', example: 'Die Bedienung war sehr freundlich.', exampleRu: 'Обслуживание было очень приветливым.' },
  { de: 'Koch', article: 'der', plural: '-¨e', pos: 'noun', ru: 'повар (die Köchin — повариха)', example: 'Der Koch kommt aus Italien.', exampleRu: 'Повар из Италии.' },
  { de: 'Reservierung', article: 'die', plural: '-en', pos: 'noun', ru: 'бронирование', example: 'Ich habe eine Reservierung auf den Namen Bauer.', exampleRu: 'У меня забронирован столик на имя Бауэр.' },
  { de: 'Bestellung', article: 'die', plural: '-en', pos: 'noun', ru: 'заказ', example: 'Der Kellner bringt unsere Bestellung.', exampleRu: 'Официант приносит наш заказ.' },
  { de: 'Getränkekarte', article: 'die', plural: '-n', pos: 'noun', ru: 'карта напитков', example: 'Die Getränkekarte liegt auf dem Tisch.', exampleRu: 'Карта напитков лежит на столе.' },
  { de: 'Gericht', article: 'das', plural: '-e', pos: 'noun', ru: 'блюдо', example: 'Das Gericht heißt „Königsberger Klopse“.', exampleRu: 'Блюдо называется «Кёнигсбергские клопсы».' },
  { de: 'Menü', article: 'das', plural: '-s', pos: 'noun', ru: 'комплексный обед (не меню!)', example: 'Das Menü hat drei Gänge und kostet 25 Euro.', exampleRu: 'Комплексный обед из трёх блюд стоит 25 евро.' },
  { de: 'Tagesgericht', article: 'das', plural: '-e', pos: 'noun', ru: 'блюдо дня', example: 'Was ist heute das Tagesgericht?', exampleRu: 'Какое сегодня блюдо дня?' },
  { de: 'Quittung', article: 'die', plural: '-en', pos: 'noun', ru: 'квитанция, чек', example: 'Kann ich bitte eine Quittung bekommen?', exampleRu: 'Можно мне, пожалуйста, чек?' },
  { de: 'Messer', article: 'das', plural: '-', pos: 'noun', ru: 'нож', example: 'Das Messer liegt rechts neben dem Teller.', exampleRu: 'Нож лежит справа от тарелки.' },
  { de: 'Gabel', article: 'die', plural: '-n', pos: 'noun', ru: 'вилка', example: 'Entschuldigung, mir fehlt eine Gabel.', exampleRu: 'Извините, у меня нет вилки.' },
  { de: 'Löffel', article: 'der', plural: '-', pos: 'noun', ru: 'ложка', example: 'Für die Suppe brauche ich einen Löffel.', exampleRu: 'Для супа мне нужна ложка.' },
  { de: 'Serviette', article: 'die', plural: '-n', pos: 'noun', ru: 'салфетка', example: 'Können Sie mir bitte eine Serviette bringen?', exampleRu: 'Можете принести мне салфетку?' },
  { de: 'besetzt', pos: 'adj', ru: 'занятый (о месте)', example: 'Ist der Platz noch frei? – Nein, leider besetzt.', exampleRu: 'Это место свободно? — Нет, к сожалению, занято.' },
  { de: 'Ist hier noch frei?', pos: 'phrase', ru: 'Здесь свободно?', example: 'Entschuldigung, ist hier noch frei?', exampleRu: 'Извините, здесь свободно?' },
  { de: 'Platz nehmen', forms: 'nimmt Platz, hat Platz genommen', pos: 'phrase', ru: 'садиться, занимать место (вежливо)', example: 'Bitte nehmen Sie Platz!', exampleRu: 'Пожалуйста, присаживайтесь!' },
  { de: 'wählen', forms: 'wählt, hat gewählt', pos: 'verb', ru: 'выбирать', example: 'Haben Sie schon gewählt?', exampleRu: 'Вы уже выбрали?' },
  { de: 'aussuchen', forms: 'sucht aus, hat ausgesucht', pos: 'verb', ru: 'выбирать, подбирать', example: 'Such dir etwas aus, ich lade dich ein!', exampleRu: 'Выбери себе что-нибудь, я тебя угощаю!' },
  { de: 'probieren', forms: 'probiert, hat probiert', pos: 'verb', ru: 'пробовать', example: 'Möchtest du den Kuchen mal probieren?', exampleRu: 'Хочешь попробовать пирог?' },
  { de: 'bedienen', forms: 'bedient, hat bedient', pos: 'verb', ru: 'обслуживать', example: 'Wer bedient hier? Wir warten schon lange.', exampleRu: 'Кто здесь обслуживает? Мы уже долго ждём.' },
  { de: 'servieren', forms: 'serviert, hat serviert', pos: 'verb', ru: 'подавать (блюдо)', example: 'Der Kellner serviert den Fisch mit Reis.', exampleRu: 'Официант подаёт рыбу с рисом.' },
  { de: 'Prost!', pos: 'phrase', ru: 'Будем здоровы! (тост)', example: 'Prost! Auf deinen Geburtstag!', exampleRu: 'Будем здоровы! За твой день рождения!' },
  { de: 'Zum Wohl!', pos: 'phrase', ru: 'За ваше здоровье! (вежливый тост)', example: 'Zum Wohl, Frau Schmidt!', exampleRu: 'Ваше здоровье, госпожа Шмидт!' },

  // Speisen und Zutaten
  { de: 'Schnitzel', article: 'das', plural: '-', pos: 'noun', ru: 'шницель (отбивная)', example: 'Das Schnitzel ist sehr groß.', exampleRu: 'Шницель очень большой.' },
  { de: 'Braten', article: 'der', plural: '-', pos: 'noun', ru: 'жаркое (мясо, запечённое куском)', example: 'Am Sonntag gibt es bei Oma immer Braten.', exampleRu: 'В воскресенье у бабушки всегда жаркое.' },
  { de: 'Hähnchen', article: 'das', plural: '-', pos: 'noun', ru: 'курица (блюдо)', example: 'Ich nehme das Hähnchen mit Reis.', exampleRu: 'Я возьму курицу с рисом.' },
  { de: 'Pommes', article: 'die', plural: 'только мн. ч.', pos: 'noun', ru: 'картофель фри', example: 'Die Kinder möchten Pommes mit Ketchup.', exampleRu: 'Дети хотят картошку фри с кетчупом.' },
  { de: 'Kartoffelsalat', article: 'der', plural: '-e', pos: 'noun', ru: 'картофельный салат', example: 'Zum Schnitzel gibt es Kartoffelsalat.', exampleRu: 'К шницелю подают картофельный салат.' },
  { de: 'Soße', article: 'die', plural: '-n', pos: 'noun', ru: 'соус', example: 'Die Soße ist mir zu scharf.', exampleRu: 'Соус для меня слишком острый.' },
  { de: 'Pilz', article: 'der', plural: '-e', pos: 'noun', ru: 'гриб', example: 'Ich esse gern Pizza mit Pilzen.', exampleRu: 'Я люблю пиццу с грибами.' },
  { de: 'Zwiebel', article: 'die', plural: '-n', pos: 'noun', ru: 'лук (луковица)', example: 'Bitte ohne Zwiebeln!', exampleRu: 'Пожалуйста, без лука!' },
  { de: 'Knoblauch', article: 'der', plural: '–', pos: 'noun', ru: 'чеснок', example: 'In der Soße ist viel Knoblauch.', exampleRu: 'В соусе много чеснока.' },
  { de: 'Pfeffer', article: 'der', plural: '–', pos: 'noun', ru: 'перец (специя)', example: 'Kannst du mir bitte den Pfeffer geben?', exampleRu: 'Можешь передать мне перец?' },
  { de: 'Sahne', article: 'die', plural: '–', pos: 'noun', ru: 'сливки', example: 'Ich nehme den Kaffee mit Sahne.', exampleRu: 'Я возьму кофе со сливками.' },
  { de: 'Vegetarier', article: 'der', plural: '-', pos: 'noun', ru: 'вегетарианец', example: 'Mein Bruder ist Vegetarier, er isst kein Fleisch.', exampleRu: 'Мой брат вегетарианец, он не ест мясо.' },
  { de: 'vegetarisch', pos: 'adj', ru: 'вегетарианский', example: 'Ist die Gemüsesuppe vegetarisch?', exampleRu: 'Овощной суп вегетарианский?' },
  { de: 'Allergie', article: 'die', plural: '-n', pos: 'noun', ru: 'аллергия', example: 'Ich habe eine Allergie gegen Nüsse.', exampleRu: 'У меня аллергия на орехи.' },

  // Geschmack
  { de: 'Geschmack', article: 'der', plural: '-¨e', pos: 'noun', ru: 'вкус', example: 'Der Käse hat viel Geschmack.', exampleRu: 'У этого сыра яркий вкус.' },
  { de: 'köstlich', pos: 'adj', ru: 'очень вкусный, восхитительный', example: 'Der Apfelkuchen war köstlich!', exampleRu: 'Яблочный пирог был восхитительным!' },
  { de: 'bitter', pos: 'adj', ru: 'горький', example: 'Der Kaffee ist sehr bitter.', exampleRu: 'Кофе очень горький.' },
  { de: 'mild', pos: 'adj', ru: 'мягкий, неострый', example: 'Die Suppe ist mild, auch Kinder können sie essen.', exampleRu: 'Суп неострый, его могут есть и дети.' },
  { de: 'fett', pos: 'adj', ru: 'жирный', example: 'Die Pommes sind mir zu fett.', exampleRu: 'Картошка фри для меня слишком жирная.' },
  { de: 'roh', pos: 'adj', ru: 'сырой', example: 'Das Fleisch ist innen noch roh.', exampleRu: 'Мясо внутри ещё сырое.' },
  { de: 'gebraten', pos: 'adj', ru: 'жареный', example: 'Ich nehme die gebratenen Kartoffeln.', exampleRu: 'Я возьму жареную картошку.' },
  { de: 'hungrig', pos: 'adj', ru: 'голодный', example: 'Nach der Arbeit bin ich immer sehr hungrig.', exampleRu: 'После работы я всегда очень голодный.' },
];
