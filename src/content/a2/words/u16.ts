import type { VocabItem } from '../../types';

// Word bank A2 · Unit 16 — Sport und Freizeit
export const words: VocabItem[] = [
  // Menschen im Sport
  { de: 'Spieler', article: 'der', plural: '-', pos: 'noun', ru: 'игрок (die Spielerin)', example: 'In einer Fußballmannschaft spielen elf Spieler.', exampleRu: 'В футбольной команде играют одиннадцать игроков.' },
  { de: 'Sportler', article: 'der', plural: '-', pos: 'noun', ru: 'спортсмен (die Sportlerin)', example: 'Viele Sportler trainieren jeden Tag.', exampleRu: 'Многие спортсмены тренируются каждый день.', pronRu: 'дер ШПОРТ-ла' },
  { de: 'Fan', article: 'der', plural: '-s', pos: 'noun', ru: 'болельщик, фанат', example: 'Mein Bruder ist ein großer Fan von unserem Fußballverein.', exampleRu: 'Мой брат — большой болельщик нашего футбольного клуба.', pronRu: 'дер ФЭН' },
  { de: 'Torwart', article: 'der', plural: '-e', pos: 'noun', ru: 'вратарь', example: 'Unser Torwart hat heute sehr gut gespielt.', exampleRu: 'Наш вратарь сегодня очень хорошо сыграл.', pronRu: 'дер ТО:А-варт' },

  // Spiel und Ergebnis
  { de: 'Halbzeit', article: 'die', plural: '-en', pos: 'noun', ru: 'тайм; перерыв между таймами', example: 'In der Halbzeit hat es angefangen zu regnen.', exampleRu: 'Во время перерыва начался дождь.' },
  { de: 'Ergebnis', article: 'das', plural: '-se', pos: 'noun', ru: 'результат, счёт', example: 'Weißt du das Ergebnis vom Spiel gestern?', exampleRu: 'Ты знаешь результат вчерашней игры?', pronRu: 'дас эр-ГЭ:П-нис' },
  { de: 'Ball', article: 'der', plural: '-¨e', pos: 'noun', ru: 'мяч', example: 'Die Kinder spielen im Hof mit dem Ball.', exampleRu: 'Дети играют во дворе с мячом.' },
  { de: 'schießen', forms: 'schießt, hat geschossen', pos: 'verb', ru: 'стрелять; бить (по мячу)', example: 'Er hat den Ball direkt ins Tor geschossen.', exampleRu: 'Он ударил мяч прямо в ворота.', pronRu: 'ШИ:-сэн' },
  { de: 'zuschauen', forms: 'schaut zu, hat zugeschaut', pos: 'verb', ru: 'смотреть, наблюдать (как зритель)', example: 'Ich spiele nicht mit, ich schaue nur zu.', exampleRu: 'Я не играю, я только смотрю.' },
  { de: 'spannend', pos: 'adj', ru: 'захватывающий, напряжённый', example: 'Das Spiel war bis zur letzten Minute spannend.', exampleRu: 'Игра была захватывающей до последней минуты.' },

  // Orte
  { de: 'Sporthalle', article: 'die', plural: '-n', pos: 'noun', ru: 'спортивный зал', example: 'Im Winter trainieren wir in der Sporthalle.', exampleRu: 'Зимой мы тренируемся в спортзале.' },
  { de: 'Sportplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'спортивная площадка', example: 'Hinter der Schule ist ein großer Sportplatz.', exampleRu: 'За школой есть большая спортивная площадка.' },
  { de: 'Hallenbad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'крытый бассейн', example: 'Das Hallenbad hat auch im Winter geöffnet.', exampleRu: 'Крытый бассейн открыт и зимой.' },
  { de: 'Freibad', article: 'das', plural: '-¨er', pos: 'noun', ru: 'открытый бассейн', example: 'Im Sommer gehen wir oft ins Freibad.', exampleRu: 'Летом мы часто ходим в открытый бассейн.' },
  { de: 'Umkleidekabine', article: 'die', plural: '-n', pos: 'noun', ru: 'раздевалка', example: 'Die Umkleidekabinen sind rechts neben dem Eingang.', exampleRu: 'Раздевалки справа от входа.', pronRu: 'ди УМ-клай-дэ-ка-би:-нэ' },
  { de: 'Tennisplatz', article: 'der', plural: '-¨e', pos: 'noun', ru: 'теннисный корт', example: 'Wir haben den Tennisplatz für eine Stunde gemietet.', exampleRu: 'Мы сняли теннисный корт на час.' },

  // Sportarten und Aktivitäten
  { de: 'Yoga', article: 'das', plural: '–', pos: 'noun', ru: 'йога', example: 'Seit einem Jahr mache ich jeden Morgen Yoga.', exampleRu: 'Уже год я каждое утро занимаюсь йогой.', pronRu: 'дас ЙО:-га' },
  { de: 'Gymnastik', article: 'die', plural: '–', pos: 'noun', ru: 'гимнастика, зарядка', example: 'Meine Mutter macht zweimal pro Woche Gymnastik.', exampleRu: 'Моя мама два раза в неделю занимается гимнастикой.' },
  { de: 'Tischtennis', article: 'das', plural: '–', pos: 'noun', ru: 'настольный теннис', example: 'In der Pause spielen wir oft Tischtennis.', exampleRu: 'На перерыве мы часто играем в настольный теннис.' },
  { de: 'Handball', article: 'der', plural: '–', pos: 'noun', ru: 'гандбол', example: 'Handball ist in Deutschland sehr beliebt.', exampleRu: 'Гандбол в Германии очень популярен.' },
  { de: 'Schach', article: 'das', plural: '–', pos: 'noun', ru: 'шахматы', example: 'Mein Großvater hat mir Schach beigebracht.', exampleRu: 'Мой дедушка научил меня играть в шахматы.' },
  { de: 'Brettspiel', article: 'das', plural: '-e', pos: 'noun', ru: 'настольная игра', example: 'Am Sonntagabend spielen wir oft Brettspiele.', exampleRu: 'В воскресенье вечером мы часто играем в настольные игры.' },
  { de: 'Chor', article: 'der', plural: '-¨e', pos: 'noun', ru: 'хор', example: 'Meine Frau singt seit zehn Jahren in einem Chor.', exampleRu: 'Моя жена уже десять лет поёт в хоре.', pronRu: 'дер КО:А' },
  { de: 'Radtour', article: 'die', plural: '-en', pos: 'noun', ru: 'велосипедная прогулка, велопоход', example: 'Am Wochenende machen wir eine Radtour an den See.', exampleRu: 'На выходных мы едем на велосипедах к озеру.' },
  { de: 'Wanderung', article: 'die', plural: '-en', pos: 'noun', ru: 'поход (пешком)', example: 'Die Wanderung hat fünf Stunden gedauert.', exampleRu: 'Поход длился пять часов.' },
  { de: 'Rad fahren', forms: 'fährt Rad, ist Rad gefahren', pos: 'verb', ru: 'ездить на велосипеде', example: 'Bei schönem Wetter fahre ich mit den Kindern Rad.', exampleRu: 'В хорошую погоду я катаюсь с детьми на велосипеде.' },
  { de: 'Ski fahren', forms: 'fährt Ski, ist Ski gefahren', pos: 'verb', ru: 'кататься на лыжах', example: 'Im Februar fahren wir für eine Woche Ski.', exampleRu: 'В феврале мы на неделю едем кататься на лыжах.', pronRu: 'ШИ: фа:-рэн' },
  { de: 'reiten', forms: 'reitet, ist geritten', pos: 'verb', ru: 'ездить верхом', example: 'Meine Tochter reitet seit drei Jahren.', exampleRu: 'Моя дочь уже три года занимается верховой ездой.' },
  { de: 'klettern', forms: 'klettert, ist geklettert', pos: 'verb', ru: 'лазать, заниматься скалолазанием', example: 'In der Halle kann man auch im Winter klettern.', exampleRu: 'В зале можно лазать и зимой.' },
  { de: 'segeln', forms: 'segelt, ist gesegelt', pos: 'verb', ru: 'ходить под парусом', example: 'Im Urlaub sind wir auf dem See gesegelt.', exampleRu: 'В отпуске мы ходили под парусом по озеру.', pronRu: 'ЗЭ:-гэльн' },
  { de: 'angeln', forms: 'angelt, hat geangelt', pos: 'verb', ru: 'ловить рыбу удочкой', example: 'Mein Vater angelt gern am Fluss.', exampleRu: 'Мой отец любит ловить рыбу на реке.' },
  { de: 'malen', forms: 'malt, hat gemalt', pos: 'verb', ru: 'рисовать (красками)', example: 'In meiner Freizeit male ich gern Bilder.', exampleRu: 'В свободное время я люблю рисовать картины.' },

  // Körper und Training
  { de: 'schwitzen', forms: 'schwitzt, hat geschwitzt', pos: 'verb', ru: 'потеть', example: 'Beim Joggen schwitze ich sehr.', exampleRu: 'Когда бегаю, я сильно потею.' },
  { de: 'sich verletzen', forms: 'verletzt sich, hat sich verletzt', pos: 'verb', ru: 'пораниться, получить травму', example: 'Er hat sich beim Fußball am Knie verletzt.', exampleRu: 'Он повредил колено во время футбола.' },
  { de: 'Verletzung', article: 'die', plural: '-en', pos: 'noun', ru: 'травма, ранение', example: 'Wegen einer Verletzung kann sie nicht spielen.', exampleRu: 'Из-за травмы она не может играть.' },
  { de: 'sich ausruhen', forms: 'ruht sich aus, hat sich ausgeruht', pos: 'verb', ru: 'отдыхать', example: 'Nach dem Training ruhe ich mich eine Stunde aus.', exampleRu: 'После тренировки я час отдыхаю.' },
  { de: 'aufhören', forms: 'hört auf, hat aufgehört; mit + Dat', pos: 'verb', ru: 'прекращать, переставать', example: 'Vor einem Jahr habe ich mit dem Rauchen aufgehört.', exampleRu: 'Год назад я бросил курить.' },
  { de: 'anstrengend', pos: 'adj', ru: 'утомительный, тяжёлый', example: 'Das Training heute war sehr anstrengend.', exampleRu: 'Сегодняшняя тренировка была очень тяжёлой.' },
  { de: 'sportlich', pos: 'adj', ru: 'спортивный', example: 'Mein Mann ist sehr sportlich, er joggt jeden Tag.', exampleRu: 'Мой муж очень спортивный, он бегает каждый день.' },
  { de: 'aktiv', pos: 'adj', ru: 'активный', example: 'Auch im Alter möchte ich aktiv bleiben.', exampleRu: 'И в старости я хочу оставаться активным.' },
  { de: 'Sportschuh', article: 'der', plural: '-e', pos: 'noun', ru: 'спортивная обувь, кроссовка', example: 'Für die Halle brauchst du saubere Sportschuhe.', exampleRu: 'Для зала нужна чистая спортивная обувь.' },
  { de: 'Helm', article: 'der', plural: '-e', pos: 'noun', ru: 'шлем', example: 'Beim Radfahren trage ich immer einen Helm.', exampleRu: 'Когда езжу на велосипеде, я всегда надеваю шлем.' },

  // Verein und Kurs
  { de: 'Mitgliedschaft', article: 'die', plural: '-en', pos: 'noun', ru: 'членство', example: 'Die Mitgliedschaft im Verein kostet 15 Euro im Monat.', exampleRu: 'Членство в клубе стоит 15 евро в месяц.' },
  { de: 'Beitrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'взнос', example: 'Für Kinder ist der Beitrag billiger.', exampleRu: 'Для детей взнос дешевле.' },
  { de: 'Ermäßigung', article: 'die', plural: '-en', pos: 'noun', ru: 'скидка, льгота', example: 'Rentner bekommen eine Ermäßigung von 20 Prozent.', exampleRu: 'Пенсионеры получают скидку 20 процентов.', pronRu: 'ди эр-МЭ:-си-гунг' },
  { de: 'Probetraining', article: 'das', plural: '-s', pos: 'noun', ru: 'пробная тренировка', example: 'Das erste Probetraining ist kostenlos.', exampleRu: 'Первая пробная тренировка бесплатна.' },
  { de: 'Feierabend', article: 'der', plural: '-e', pos: 'noun', ru: 'конец рабочего дня', example: 'Nach Feierabend gehe ich oft joggen.', exampleRu: 'После работы я часто хожу на пробежку.' },

  // Zeitangaben
  { de: 'damals', pos: 'adv', ru: 'тогда, в то время', example: 'Damals habe ich noch im Verein Fußball gespielt.', exampleRu: 'Тогда я ещё играл в футбол в клубе.' },
  { de: 'vorher', pos: 'adv', ru: 'до этого, раньше', example: 'Das Spiel beginnt um drei. Vorher essen wir noch etwas.', exampleRu: 'Игра начинается в три. До этого мы ещё что-нибудь поедим.' },
  { de: 'seitdem', pos: 'adv', ru: 'с тех пор', example: 'Ich war im Mai beim Arzt. Seitdem gehe ich jeden Tag spazieren.', exampleRu: 'В мае я был у врача. С тех пор я каждый день гуляю.' },
  { de: 'inzwischen', pos: 'adv', ru: 'тем временем; теперь уже', example: 'Am Anfang war Yoga schwer, aber inzwischen macht es mir Spaß.', exampleRu: 'Сначала йога была трудной, но теперь она мне нравится.' },
  { de: 'zurzeit', pos: 'adv', ru: 'в настоящее время, сейчас', example: 'Zurzeit kann ich nicht trainieren, mein Fuß tut weh.', exampleRu: 'Сейчас я не могу тренироваться, у меня болит нога.' },
  { de: 'wöchentlich', pos: 'adj', ru: 'еженедельный; еженедельно', example: 'Der Kurs findet wöchentlich statt, immer am Freitag.', exampleRu: 'Курс проходит еженедельно, всегда по пятницам.' },
];
