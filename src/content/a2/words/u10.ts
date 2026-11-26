import type { VocabItem } from '../../types';

// Word bank A2 · Unit 10 — Arbeit und Beruf
export const words: VocabItem[] = [
  // Arbeitszeit & Schichten
  { de: 'Frühschicht', article: 'die', plural: '-en', pos: 'noun', ru: 'утренняя смена', example: 'Die Frühschicht beginnt um sechs Uhr.', exampleRu: 'Утренняя смена начинается в шесть часов.', pronRu: 'ди ФРЮ:-шихьт' },
  { de: 'Spätschicht', article: 'die', plural: '-en', pos: 'noun', ru: 'вечерняя смена', example: 'Nächste Woche habe ich Spätschicht.', exampleRu: 'На следующей неделе у меня вечерняя смена.', pronRu: 'ди ШПЭТ-шихьт' },
  { de: 'Nachtschicht', article: 'die', plural: '-en', pos: 'noun', ru: 'ночная смена', example: 'Nach der Nachtschicht schlafe ich bis Mittag.', exampleRu: 'После ночной смены я сплю до обеда.', pronRu: 'ди НАХТ-шихьт' },
  { de: 'Schichtplan', article: 'der', plural: '-¨e', pos: 'noun', ru: 'график смен', example: 'Der neue Schichtplan hängt an der Tür.', exampleRu: 'Новый график смен висит на двери.' },
  { de: 'Mittagspause', article: 'die', plural: '-n', pos: 'noun', ru: 'обеденный перерыв', example: 'In der Mittagspause gehe ich kurz spazieren.', exampleRu: 'В обеденный перерыв я ненадолго выхожу погулять.' },
  { de: 'Urlaubstag', article: 'der', plural: '-e', pos: 'noun', ru: 'день отпуска', example: 'Ich habe 28 Urlaubstage im Jahr.', exampleRu: 'У меня 28 дней отпуска в год.' },
  { de: 'sich krankmelden', forms: 'meldet sich krank, hat sich krankgemeldet', pos: 'verb', ru: 'сообщить на работу о болезни', example: 'Wenn du Fieber hast, musst du dich krankmelden.', exampleRu: 'Если у тебя температура, ты должен сообщить о болезни.' },
  { de: 'tauschen', forms: 'tauscht, hat getauscht', pos: 'verb', ru: 'менять(ся), обменивать', example: 'Kann ich am Freitag die Schicht mit dir tauschen?', exampleRu: 'Можно мне в пятницу поменяться с тобой сменой?' },

  // Geld & Vertrag
  { de: 'Stundenlohn', article: 'der', plural: '-¨e', pos: 'noun', ru: 'почасовая оплата', example: 'Der Stundenlohn ist 14 Euro.', exampleRu: 'Почасовая оплата — 14 евро.' },
  { de: 'Vertrag', article: 'der', plural: '-¨e', pos: 'noun', ru: 'договор, контракт', example: 'Morgen unterschreibe ich meinen Vertrag.', exampleRu: 'Завтра я подписываю свой договор.', pronRu: 'дер фэр-ТРА:К' },
  { de: 'brutto', pos: 'adv', ru: 'брутто (до вычета налогов)', example: 'Ich verdiene 2500 Euro brutto.', exampleRu: 'Я зарабатываю 2500 евро брутто.' },
  { de: 'netto', pos: 'adv', ru: 'нетто, «на руки» (после вычета налогов)', example: 'Netto bekomme ich ungefähr 1800 Euro.', exampleRu: 'На руки я получаю примерно 1800 евро.' },
  { de: 'Minijob', article: 'der', plural: '-s', pos: 'noun', ru: 'мини-работа (подработка с небольшой зарплатой)', example: 'Am Wochenende hat sie einen Minijob in einem Café.', exampleRu: 'По выходным у неё подработка в кафе.' },
  { de: 'Jobcenter', article: 'das', plural: '-', pos: 'noun', ru: 'джобцентр (служба занятости)', example: 'Morgen habe ich einen Termin im Jobcenter.', exampleRu: 'Завтра у меня приём в джобцентре.', pronRu: 'дас ДЖОП-сэн-та' },

  // Bewerbung
  { de: 'Anschreiben', article: 'das', plural: '-', pos: 'noun', ru: 'сопроводительное письмо (к заявлению о работе)', example: 'Im Anschreiben schreibe ich, warum ich die Stelle möchte.', exampleRu: 'В сопроводительном письме я пишу, почему хочу эту должность.' },
  { de: 'Berufserfahrung', article: 'die', plural: '-en', pos: 'noun', ru: 'опыт работы', example: 'Haben Sie Berufserfahrung als Fahrer?', exampleRu: 'У вас есть опыт работы водителем?' },
  { de: 'Arbeitsagentur', article: 'die', plural: '-en', pos: 'noun', ru: 'агентство по труду (биржа труда)', example: 'Bei der Arbeitsagentur gibt es viele Stellenangebote.', exampleRu: 'В агентстве по труду много предложений работы.' },
  { de: 'Team', article: 'das', plural: '-s', pos: 'noun', ru: 'команда, коллектив', example: 'Unser Team ist klein, aber sehr nett.', exampleRu: 'Наша команда маленькая, но очень дружная.', pronRu: 'дас ТИ:М' },
  { de: 'Leiter', article: 'der', plural: '-', pos: 'noun', ru: 'руководитель (die Leiterin — руководительница)', example: 'Der Leiter der Abteilung heißt Herr Krause.', exampleRu: 'Руководителя отдела зовут господин Краузе.' },
  { de: 'Teamleiter', article: 'der', plural: '-', pos: 'noun', ru: 'руководитель группы, бригадир', example: 'Wenn du Fragen hast, frag den Teamleiter.', exampleRu: 'Если у тебя есть вопросы, спроси бригадира.' },
  { de: 'Arbeitnehmer', article: 'der', plural: '-', pos: 'noun', ru: 'работник, наёмный работник', example: 'Die Firma hat 200 Arbeitnehmer.', exampleRu: 'На фирме 200 работников.' },

  // Arbeitsorte
  { de: 'Lager', article: 'das', plural: '-', pos: 'noun', ru: 'склад', example: 'Im Lager ist es im Winter kalt.', exampleRu: 'На складе зимой холодно.', pronRu: 'дас ЛА:-га' },
  { de: 'Baustelle', article: 'die', plural: '-n', pos: 'noun', ru: 'стройка, строительная площадка', example: 'Mein Bruder arbeitet auf einer Baustelle.', exampleRu: 'Мой брат работает на стройке.', pronRu: 'ди БАУ-штэ-ле' },

  // Berufe
  { de: 'Handwerker', article: 'der', plural: '-', pos: 'noun', ru: 'ремесленник, мастер (сантехник, плотник и т. п.)', example: 'Ein Handwerker repariert heute unsere Heizung.', exampleRu: 'Сегодня мастер ремонтирует наше отопление.' },
  { de: 'Maler', article: 'der', plural: '-', pos: 'noun', ru: 'маляр; художник', example: 'Der Maler streicht die Wände weiß.', exampleRu: 'Маляр красит стены в белый цвет.' },
  { de: 'Busfahrer', article: 'der', plural: '-', pos: 'noun', ru: 'водитель автобуса', example: 'Der Busfahrer ist immer freundlich.', exampleRu: 'Водитель автобуса всегда приветлив.' },
  { de: 'Reinigungskraft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'уборщик, уборщица', example: 'Die Reinigungskraft kommt jeden Abend ins Büro.', exampleRu: 'Уборщица приходит в офис каждый вечер.', pronRu: 'ди РАЙ-ни-гунгс-крафт' },
  { de: 'Lagerarbeiter', article: 'der', plural: '-', pos: 'noun', ru: 'работник склада, кладовщик', example: 'Als Lagerarbeiter muss man viel tragen.', exampleRu: 'Работнику склада приходится много носить.' },
  { de: 'Kassierer', article: 'der', plural: '-', pos: 'noun', ru: 'кассир (die Kassiererin)', example: 'Die Kassiererin gibt mir den Kassenzettel.', exampleRu: 'Кассирша даёт мне чек.', pronRu: 'дер ка-СИ:-ра' },
  { de: 'Altenpfleger', article: 'der', plural: '-', pos: 'noun', ru: 'работник по уходу за пожилыми (die Altenpflegerin)', example: 'In Deutschland sucht man dringend Altenpfleger.', exampleRu: 'В Германии срочно ищут работников по уходу за пожилыми.' },

  // Tätigkeiten & Eigenschaften
  { de: 'beraten', forms: 'berät, hat beraten', pos: 'verb', ru: 'консультировать, давать совет', example: 'Die Verkäuferin berät die Kunden.', exampleRu: 'Продавщица консультирует покупателей.' },
  { de: 'liefern', forms: 'liefert, hat geliefert', pos: 'verb', ru: 'доставлять, поставлять', example: 'Wir liefern die Möbel am Montag.', exampleRu: 'Мы доставим мебель в понедельник.' },
  { de: 'flexibel', pos: 'adj', ru: 'гибкий (готовый работать в разное время)', example: 'Ich bin flexibel und kann auch am Wochenende arbeiten.', exampleRu: 'Я гибок и могу работать и по выходным.', pronRu: 'флэк-СИ:-бель' },
  { de: 'hilfsbereit', pos: 'adj', ru: 'отзывчивый, готовый помочь', example: 'Meine Kollegen sind sehr hilfsbereit.', exampleRu: 'Мои коллеги очень отзывчивые.' },
  // Bewerbung & Arbeitsalltag (Ergänzung)
  { de: 'Stellenangebot', article: 'das', plural: '-e', pos: 'noun', ru: 'предложение работы, вакансия', example: 'Im Internet gibt es viele Stellenangebote.', exampleRu: 'В интернете много вакансий.' },
  { de: 'Stellensuche', article: 'die', plural: '–', pos: 'noun', ru: 'поиск работы', example: 'Bei der Stellensuche hilft mir das Jobcenter.', exampleRu: 'В поиске работы мне помогает джобцентр.' },
  { de: 'Bewerber', article: 'der', plural: '-', pos: 'noun', ru: 'кандидат, соискатель (die Bewerberin)', example: 'Für die Stelle gibt es zwanzig Bewerber.', exampleRu: 'На эту должность двадцать кандидатов.' },
  { de: 'Absage', article: 'die', plural: '-n', pos: 'noun', ru: 'отказ', example: 'Leider habe ich wieder eine Absage bekommen.', exampleRu: 'К сожалению, я снова получил отказ.' },
  { de: 'Personalabteilung', article: 'die', plural: '-en', pos: 'noun', ru: 'отдел кадров', example: 'Schicken Sie die Krankmeldung bitte an die Personalabteilung.', exampleRu: 'Отправьте, пожалуйста, больничный в отдел кадров.' },
  { de: 'Bezahlung', article: 'die', plural: '-en', pos: 'noun', ru: 'оплата', example: 'Die Arbeit ist schwer, aber die Bezahlung ist gut.', exampleRu: 'Работа тяжёлая, но оплата хорошая.' },
  { de: 'Gehaltserhöhung', article: 'die', plural: '-en', pos: 'noun', ru: 'повышение зарплаты', example: 'Nach der Probezeit bekomme ich eine Gehaltserhöhung.', exampleRu: 'После испытательного срока мне повысят зарплату.', pronRu: 'ди гэ-ХАЛЬТС-эр-хё:-унг' },
  { de: 'Schichtarbeit', article: 'die', plural: '–', pos: 'noun', ru: 'сменная работа', example: 'Schichtarbeit ist anstrengend für die Familie.', exampleRu: 'Сменная работа тяжела для семьи.' },
  { de: 'Teamarbeit', article: 'die', plural: '–', pos: 'noun', ru: 'работа в команде', example: 'In unserem Betrieb ist Teamarbeit sehr wichtig.', exampleRu: 'На нашем предприятии работа в команде очень важна.' },
  { de: 'Arbeitsweg', article: 'der', plural: '-e', pos: 'noun', ru: 'дорога на работу', example: 'Mein Arbeitsweg dauert nur zehn Minuten.', exampleRu: 'Дорога на работу занимает у меня всего десять минут.' },
  { de: 'Arbeitskleidung', article: 'die', plural: '–', pos: 'noun', ru: 'рабочая одежда, спецодежда', example: 'Die Arbeitskleidung bekommen Sie von der Firma.', exampleRu: 'Рабочую одежду вы получите от фирмы.' },
  { de: 'Drucker', article: 'der', plural: '-', pos: 'noun', ru: 'принтер', example: 'Der Drucker im Büro ist schon wieder kaputt.', exampleRu: 'Принтер в офисе опять сломался.' },
  { de: 'Azubi', article: 'der', plural: '-s', pos: 'noun', ru: 'ученик, стажёр на профобучении (сокращение от Auszubildende)', example: 'Unser Azubi lernt sehr schnell.', exampleRu: 'Наш ученик очень быстро учится.', pronRu: 'дер а-ЦУ:-би' },
  { de: 'Pflegekraft', article: 'die', plural: '-¨e', pos: 'noun', ru: 'работник по уходу (сиделка, медсестра)', example: 'Im Krankenhaus fehlen viele Pflegekräfte.', exampleRu: 'В больнице не хватает многих медсестёр и сиделок.' },
  { de: 'Paketbote', article: 'der', plural: '-n', pos: 'noun', ru: 'курьер, доставщик посылок', example: 'Der Paketbote kommt meistens am Vormittag.', exampleRu: 'Курьер с посылками обычно приходит утром.' },
  { de: 'sortieren', forms: 'sortiert, hat sortiert', pos: 'verb', ru: 'сортировать', example: 'Im Lager sortiere ich die Pakete.', exampleRu: 'На складе я сортирую посылки.' },
  { de: 'Streik', article: 'der', plural: '-s', pos: 'noun', ru: 'забастовка', example: 'Wegen des Streiks fahren heute keine Busse.', exampleRu: 'Из-за забастовки сегодня не ходят автобусы.', pronRu: 'дер ШТРАЙК' },
];
