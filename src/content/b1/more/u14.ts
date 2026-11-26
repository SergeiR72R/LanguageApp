import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Entschuldigung, dieser Kugelschreiber gehört ___.',
      options: ['mich', 'mir', 'ich'],
      answer: 1,
      explanationRu: 'gehören + Dativ: ich → mir («принадлежит мне»).',
    },
    {
      type: 'choice',
      prompt: 'Wie gefällt ___ die neue Wohnung? (= тебе)',
      options: ['dich', 'dir', 'du'],
      answer: 1,
      explanationRu: 'gefallen + Dativ: du → dir. Подлежащее — die Wohnung.',
    },
    {
      type: 'choice',
      prompt: 'Ich rufe morgen früh ___ an. (= моему арендодателю)',
      options: ['meinem Vermieter', 'meinen Vermieter', 'mein Vermieter'],
      answer: 1,
      explanationRu: 'Ловушка: anrufen + Akkusativ, хотя по-русски «звонить кому». der Vermieter → meinen Vermieter.',
    },
    {
      type: 'choice',
      prompt: 'Welche Frage ist richtig?',
      options: ['Wen hast du das Paket geschickt?', 'Wem hast du das Paket geschickt?', 'Wer hast du das Paket geschickt?'],
      answer: 1,
      explanationRu: 'schicken: кому? — Dativ → вопрос wem. wen — вопрос к Akkusativ (что/кого), а «что» здесь уже есть: das Paket.',
    },
    {
      type: 'gap',
      prompt: 'Mir ___ leider noch zwei Unterlagen.',
      answers: ['fehlen'],
      hintRu: 'fehlen',
      explanationRu: 'Подлежащее — zwei Unterlagen (мн. ч.), поэтому fehlen. Человек (mir) стоит в Dativ, как в русском «мне не хватает».',
    },
    {
      type: 'gap',
      prompt: 'Ich gratuliere ___ herzlich zum neuen Job! (= тебя)',
      answers: ['dir'],
      explanationRu: 'Ловушка: gratulieren + Dativ (по-русски «поздравляю тебя» — винительный). du → dir.',
    },
    {
      type: 'gap',
      prompt: 'Ich frage ___ Bankberater, ob das Konto wirklich kostenlos ist.',
      answers: ['den'],
      explanationRu: 'fragen + Akkusativ: der Berater → den Berater. Не путайте с antworten + Dativ.',
    },
    {
      type: 'gap',
      prompt: 'Wir bitten ___ um eine schnelle Antwort. (= вас, вежливо)',
      answers: ['Sie'],
      explanationRu: 'bitten + Akkusativ (+ um + Akk): вежливая форма в Akkusativ — Sie, а не Ihnen.',
    },
    {
      type: 'gap',
      prompt: 'Ich unterstütze meine Eltern gern, und ich helfe ___ oft beim Papierkram.',
      answers: ['ihnen'],
      explanationRu: 'unterstützen + Akk (meine Eltern), но helfen + Dativ: sie (мн. ч.) → ihnen.',
    },
    {
      type: 'gap',
      prompt: 'Hast du ___ Schwester das Geld schon zurückgegeben?',
      answers: ['deiner'],
      hintRu: 'deine Schwester',
      explanationRu: 'zurückgeben: кому? — Dativ (deiner Schwester), что? — Akkusativ (das Geld). Порядок существительных: Dativ → Akkusativ.',
    },
    {
      type: 'choice',
      prompt: 'Wo ist meine neue Karte? – Die Bank hat ___ noch nicht geschickt.',
      options: ['dir sie', 'sie dir', 'dir ihr', 'ihr dir'],
      answer: 1,
      explanationRu: 'Два местоимения: сначала Akkusativ (sie = die Karte), потом Dativ (dir).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig?',
      options: ['Ich zeige den Ausweis ihm.', 'Ich zeige ihm den Ausweis.', 'Ich zeige ihm ihn.'],
      answer: 1,
      explanationRu: 'Местоимение (ihm) стоит перед существительным (den Ausweis). Два местоимения были бы в порядке «ihn ihm», а не «ihm ihn».',
    },
    {
      type: 'gap',
      prompt: 'Den Antrag? Den habe ich ___ schon gestern gegeben. (= ей)',
      answers: ['ihr'],
      explanationRu: 'geben + Dativ: sie (она) → ihr. Den (= den Antrag) вынесен на первое место для акцента.',
    },
    {
      type: 'gap',
      prompt: 'Die Bank ___ Ihnen die neue Karte in den nächsten Tagen zuschicken.',
      answers: ['wird'],
      hintRu: 'Futur I',
      explanationRu: 'Повторение юнита 13: Futur I — wird + инфинитив (zuschicken) в конце. Ihnen — Dativ, die neue Karte — Akkusativ.',
    },
    {
      type: 'gap',
      prompt: 'Können Sie mir sagen, ___ ich die Gebühr auch mit Karte bezahlen kann?',
      answers: ['ob'],
      explanationRu: 'Повторение юнита 12: косвенный вопрос без вопросительного слова вводится союзом ob, глагол — в конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'habe', 'meinem', 'Bruder', 'mein', 'Auto', 'geliehen.'],
      translationRu: 'Я одолжил брату свою машину.',
      explanationRu: 'leihen + Dativ + Akkusativ. Два существительных: Dativ (meinem Bruder) → Akkusativ (mein Auto).',
    },
    {
      type: 'order',
      words: ['Können', 'Sie', 'es', 'mir', 'bitte', 'noch', 'einmal', 'erklären?'],
      translationRu: 'Не могли бы вы объяснить мне это ещё раз?',
      explanationRu: 'Два местоимения: Akkusativ (es) перед Dativ (mir). Bitte и noch einmal идут после местоимений.',
    },
    {
      type: 'order',
      words: ['Ich', 'weiß', 'nicht', 'mehr,', 'ob', 'ich', 'ihn', 'ihr', 'schon', 'geschickt', 'habe.'],
      translationRu: 'Я уже не помню, отправил ли я его ей.',
      explanationRu: 'В придаточном с ob глагол в конце (geschickt habe); местоимения стоят сразу после подлежащего: ihn (Akk) → ihr (Dat).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените дополнение в Dativ местоимением.',
      prompt: 'Der Postbote gibt der Nachbarin das Paket.',
      answers: ['Der Postbote gibt ihr das Paket.'],
      explanationRu: 'der Nachbarin → ihr. Местоимение стоит перед существительным das Paket.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените оба дополнения местоимениями.',
      prompt: 'Hat die Versicherung meinem Vater das Geld schon überwiesen?',
      answers: ['Hat die Versicherung es ihm schon überwiesen?', 'Hat es ihm die Versicherung schon überwiesen?'],
      explanationRu: 'das Geld → es (Akk), meinem Vater → ihm (Dat). Два местоимения: Akkusativ перед Dativ. Короткие местоимения могут стоять даже перед подлежащим-существительным.',
    },
  ],
  reading: [
    {
      title: 'Dienstleistungen in Ihrer Stadt',
      textType: 'Anzeigen',
      texts: [
        {
          label: 'a',
          heading: 'Schlüsselnotdienst Fix',
          body: 'Tür zugefallen? Schlüssel verloren? Wir sind in 30 Minuten bei Ihnen – 24 Stunden am Tag, 7 Tage die Woche. Festpreis tagsüber 89 Euro, nachts und am Wochenende 129 Euro. Keine versteckten Kosten!',
        },
        {
          label: 'b',
          heading: 'Lohnsteuerhilfeverein Steuerring',
          body: 'Wir machen Ihre Steuererklärung! Für Arbeitnehmer, Rentner und Studierende mit Nebenjob. Mitgliedsbeitrag ab 60 Euro im Jahr. Bitte beachten Sie: Selbstständige und Firmen dürfen wir leider nicht beraten.',
        },
        {
          label: 'c',
          heading: 'Copyshop Druckpunkt',
          body: 'Kopien, Ausdrucke, Bewerbungsmappen – und biometrische Passfotos für Ausweis und Reisepass in nur 5 Minuten, ohne Termin. Mo–Sa 8–20 Uhr.',
        },
        {
          label: 'd',
          heading: 'Umzugsservice Leicht & Schnell',
          body: 'Wir bringen Ihre Möbel sicher ans Ziel – innerhalb der Stadt schon ab 299 Euro. Umzugskartons bekommen Sie bei uns kostenlos. Kostenvoranschlag per Telefon.',
        },
        {
          label: 'e',
          heading: 'Stadtsparkasse – Konto für junge Leute',
          body: 'Für alle unter 27: Girokonto ohne Kontoführungsgebühr, mit kostenloser Karte und App. Eröffnung online in zehn Minuten oder persönlich in jeder Filiale.',
        },
        {
          label: 'f',
          heading: 'Klar versichert – unabhängige Beratung',
          body: 'Haftpflicht, Hausrat, Auto: Wir vergleichen die Angebote von über 50 Versicherungen und finden den besten Preis für Sie. Beratungstermine auch abends bis 21 Uhr und samstags.',
        },
        {
          label: 'g',
          heading: 'Kiosk am Markt',
          body: 'Zeitungen, Getränke, Snacks – und jetzt auch Paketshop für alle großen Paketdienste! Pakete abgeben und abholen täglich von 7 bis 22 Uhr, auch sonn- und feiertags.',
        },
        {
          label: 'h',
          heading: 'Reinigung & Schneiderei Faden',
          body: 'Hemden waschen und bügeln für 2,50 Euro. Hosen kürzen, Reißverschlüsse wechseln. Express-Service: abends abgeben, morgens abholen.',
        },
        {
          label: 'i',
          heading: 'Bürgerservice mobil',
          body: 'Kein Bürgeramt in Ihrem Ort? Unser Bürgerbus kommt zu Ihnen! Ausweis oder Pass beantragen, ummelden, Bescheinigungen abholen: jeden zweiten Dienstag in allen Ortsteilen. Termine unter 0731 55 20.',
        },
        {
          label: 'j',
          heading: 'Migrationsberatung der Caritas',
          body: 'Sie haben einen Brief vom Amt bekommen und verstehen ihn nicht? Wir helfen Ihnen kostenlos bei Briefen und Formularen – auch auf Arabisch, Englisch und Russisch. Offene Sprechstunde: donnerstags 9–13 Uhr.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Situationen 1–7 und die Anzeigen a–j. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige.',
          instructionRu:
            'Прочитайте ситуации 1–7 и объявления a–j. Какое объявление подходит к какой ситуации? Каждое объявление можно использовать только один раз. Для одной ситуации подходящего объявления нет.',
          options: [
            'Schlüsselnotdienst Fix',
            'Lohnsteuerhilfeverein Steuerring',
            'Copyshop Druckpunkt',
            'Umzugsservice Leicht & Schnell',
            'Stadtsparkasse – Konto für junge Leute',
            'Klar versichert – unabhängige Beratung',
            'Kiosk am Markt',
            'Reinigung & Schneiderei Faden',
            'Bürgerservice mobil',
            'Migrationsberatung der Caritas',
          ],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihr Nachbar hat am Sonntagabend seine Wohnungstür zugemacht – der Schlüssel liegt in der Wohnung.', answer: 0, explanationRu: 'a: аварийная служба вскрытия замков работает круглосуточно, в том числе в выходные.' },
            { kind: 'match', prompt: 'Eine Bekannte hat einen Brief von der Ausländerbehörde bekommen und versteht ihn nicht.', answer: 9, explanationRu: 'j: бесплатная помощь с письмами и бланками из ведомств, в том числе на русском и арабском.' },
            { kind: 'match', prompt: 'Sie beantragen morgen einen neuen Personalausweis und haben noch kein Foto.', answer: 2, explanationRu: 'c: биометрические фото на удостоверение за 5 минут без записи.' },
            { kind: 'match', prompt: 'Sie möchten ein Paket am Sonntag abschicken.', answer: 6, explanationRu: 'g: пункт приёма посылок в киоске работает ежедневно, «auch sonn- und feiertags».' },
            { kind: 'match', prompt: 'Ihre Großmutter wohnt in einem kleinen Dorf, sie braucht einen neuen Pass, kann aber nicht in die Stadt fahren.', answer: 8, explanationRu: 'i: мобильный автобус-Bürgeramt приезжает в посёлки: можно оформить паспорт на месте.' },
            { kind: 'match', prompt: 'Sie suchen eine günstige Hausratversicherung, haben aber nur nach der Arbeit, also nach 18 Uhr, Zeit.', answer: 5, explanationRu: 'f: независимое сравнение страховок, консультации вечером до 21 часа.' },
            { kind: 'match', prompt: 'Ihr Freund ist seit einem Jahr selbstständig und sucht Hilfe bei seiner Steuererklärung.', answer: -1, explanationRu: 'Нет подходящего объявления. Ловушка: b помогает с декларацией, но «Selbstständige … dürfen wir leider nicht beraten».' },
          ],
        },
      ],
    },
    {
      title: 'Aus der Lokalzeitung',
      textType: 'Zeitungsartikel',
      texts: [
        {
          heading: 'Text 1: Ummelden vom Sofa aus',
          body: `Wer in Neustadt umzieht, muss bald nicht mehr ins Bürgeramt. Ab dem 1. März können sich die Bürgerinnen und Bürger online ummelden – mit dem Smartphone und dem Personalausweis mit Online-Funktion. „Das spart allen Zeit“, sagt Bürgermeisterin Katrin Vogt. Bisher mussten die Menschen oft wochenlang auf einen Termin warten, obwohl man sich nach einem Umzug innerhalb von zwei Wochen ummelden muss.

Ganz ohne Papier geht es allerdings noch nicht: Die Wohnungsgeberbestätigung des Vermieters muss man als Datei hochladen, und die Meldebescheinigung schickt die Stadt weiterhin per Post. Wer die Online-Funktion seines Ausweises noch nicht benutzen kann, kann sie im Bürgeramt kostenlos aktivieren lassen – dafür braucht man allerdings wieder einen Termin.

Die Stadt hofft, dass im ersten Jahr etwa ein Drittel aller Ummeldungen online erledigt wird. Die gewonnene Zeit sollen die Mitarbeiterinnen und Mitarbeiter für Menschen nutzen, die mehr Hilfe brauchen, zum Beispiel für ältere Personen oder für Neuankömmlinge, die noch kaum Deutsch sprechen.`,
        },
        {
          heading: 'Text 2: Wenn die Bank geht',
          body: `In Lindach (1200 Einwohner) hat Ende Juni die letzte Bankfiliale geschlossen. Für viele ältere Menschen ist das ein Problem. „Ich habe mein Geld immer am Schalter abgehoben und dabei ein bisschen mit Frau Huber geplaudert“, erzählt die 81-jährige Erna Maier. Online-Banking will sie nicht mehr lernen. Der nächste Geldautomat steht jetzt in der Kleinstadt, zwölf Kilometer entfernt, und der Bus fährt nur dreimal am Tag.

Die Bank erklärt, dass immer weniger Kunden in die Filiale gekommen sind: Zuletzt waren es nur noch zwanzig pro Tag. Als Ersatz fährt jetzt jeden Donnerstag ein Bankbus ins Dorf. Dort kann man Geld abheben, Überweisungen abgeben und sich beraten lassen.

Auch der Supermarkt hilft: Wer beim Einkaufen mit Karte bezahlt, kann an der Kasse bis zu 200 Euro Bargeld bekommen. Erna Maier ist trotzdem nicht ganz zufrieden. „Der Bus ist eine gute Idee“, sagt sie. „Aber Frau Huber fehlt mir.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie Text 1. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist ab März neu?',
              options: ['Man muss sich nach einem Umzug nicht mehr ummelden.', 'Man kann sich über das Internet ummelden.', 'Das Bürgeramt hat länger geöffnet.'],
              answer: 1,
              explanationRu: '«Ab dem 1. März können sich die Bürgerinnen und Bürger online ummelden».',
            },
            {
              kind: 'mc',
              question: 'Was bekommt man weiterhin per Post?',
              options: ['Die Meldebescheinigung.', 'Die Wohnungsgeberbestätigung.', 'Einen neuen Personalausweis.'],
              answer: 0,
              explanationRu: '«…die Meldebescheinigung schickt die Stadt weiterhin per Post». Подтверждение арендодателя, наоборот, загружают файлом.',
            },
            {
              kind: 'mc',
              question: 'Wofür wollen die Mitarbeiter die gewonnene Zeit nutzen?',
              options: ['Für mehr Online-Angebote.', 'Für kürzere Arbeitszeiten.', 'Für Menschen, die mehr Unterstützung brauchen.'],
              answer: 2,
              explanationRu: 'Время пойдёт на тех, «die mehr Hilfe brauchen»: пожилых и новоприбывших.',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie Text 2. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Warum hat die Bank die Filiale geschlossen?',
              options: ['Es kamen zu wenige Kunden.', 'Frau Huber ist in Rente gegangen.', 'Das Gebäude war zu alt.'],
              answer: 0,
              explanationRu: 'Банк объясняет, что клиентов становилось всё меньше — в конце лишь двадцать в день.',
            },
            {
              kind: 'mc',
              question: 'Was können die Menschen in Lindach jetzt donnerstags machen?',
              options: ['Kostenlos mit dem Bus in die Stadt fahren.', 'Im Bankbus ihre Bankgeschäfte erledigen.', 'Im Supermarkt Online-Banking lernen.'],
              answer: 1,
              explanationRu: 'Каждый четверг приезжает банковский автобус: снять деньги, сдать переводы, получить консультацию.',
            },
            {
              kind: 'mc',
              question: 'Was sagt Erna Maier?',
              options: ['Sie möchte jetzt Online-Banking lernen.', 'Sie findet den Bankbus schlecht.', 'Ihr fehlt der persönliche Kontakt.'],
              answer: 2,
              explanationRu: '«Der Bus ist eine gute Idee … Aber Frau Huber fehlt mir» — ей не хватает живого общения.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Nachricht von der Versicherung',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Guten Tag, Herr Sokolov, hier spricht Jana Wolff von der Rheinland Versicherung. Es geht um Ihre Schadensmeldung vom 3. Mai, also um das Handy Ihres Kollegen. Ich habe mir Ihre Unterlagen angesehen. Die Fotos haben Sie uns schon geschickt, vielen Dank dafür. Leider fehlt uns aber noch die Rechnung für das Handy. Könnten Sie Ihren Kollegen bitten, dass er sie Ihnen gibt, und sie uns dann per E-Mail schicken? Sobald wir die Rechnung haben, überweisen wir das Geld direkt an Ihren Kollegen – Sie müssen also nichts bezahlen. Bei Fragen erreichen Sie mich montags bis freitags von 8 bis 16 Uhr unter der Nummer 0221 44 78 30. Auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Herr Sokolov muss der Versicherung noch Fotos schicken.', answer: false, explanationRu: 'Фото он уже прислал: «Die Fotos haben Sie uns schon geschickt». Не хватает счёта.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was soll Herr Sokolov tun?',
              options: ['Die Rechnung per E-Mail schicken.', 'Seinem Kollegen das Geld überweisen.', 'Frau Wolff am Samstag anrufen.'],
              answer: 0,
              explanationRu: 'Ему нужно взять счёт у коллеги и прислать его по e-mail. Деньги страховая переведёт коллеге сама.',
            },
          ],
        },
      ],
    },
    {
      title: 'Papierkram nach dem Umzug',
      kind: 'dialog',
      speakers: { A: 'Anna', B: 'Tim, ihr Freund' },
      situation: 'Sie hören ein Gespräch zwischen zwei Freunden in einem Café.',
      text: `A: Hey Tim! Na, wie ist die neue Wohnung?
B: Hallo Anna! Die Wohnung ist super, aber der Papierkram macht mich verrückt.
A: Was ist denn passiert?
B: Also, zuerst wollte ich mich ummelden. Online gab es keinen Termin mehr, erst wieder in sechs Wochen. Dann hat mir ein Kollege einen Tipp gegeben: Man soll morgens um halb acht anrufen, weil dann kurzfristig Termine frei werden.
A: Und, hat es geklappt?
B: Ja, beim dritten Versuch. Ich war letzten Dienstag dort. Aber dann hat mir die Sachbearbeiterin gesagt, dass mir die Wohnungsgeberbestätigung fehlt.
A: Oh nein. Die bekommt man doch vom Vermieter.
B: Genau. Mein Vermieter war aber im Urlaub. Er hat sie mir erst gestern gemailt. Zum Glück kann ich sie jetzt online nachreichen und muss nicht noch einmal hingehen.
A: Na, immerhin. Und hast du einen Nachsendeauftrag gemacht?
B: Ja, schon vor dem Umzug. Trotzdem ist ein Paket an die alte Adresse gegangen – ein Geschenk von meiner Schwester.
A: Und jetzt?
B: Der neue Mieter hat es angenommen. Er war sehr nett und hat es mir gestern vorbeigebracht.
A: Glück gehabt! Ich habe übrigens auch Neuigkeiten: Ich wechsle die Bank.
B: Warum das denn?
A: Meine Bank will ab nächstem Monat sechs Euro Kontoführungsgebühr im Monat. Das sehe ich nicht ein. Ich habe eine Bank gefunden, bei der das Konto kostenlos ist, wenn jeden Monat ein Gehalt eingeht.
B: Ist das nicht kompliziert, mit allen Daueraufträgen und so?
A: Nein, gar nicht. Die neue Bank hat einen Kontowechselservice. Sie informiert meinen Arbeitgeber und meinen Vermieter für mich. Ich muss nur ein Formular unterschreiben.
B: Das klingt gut. Kannst du mir den Namen der Bank schicken? Vielleicht wechsle ich auch.
A: Klar, ich schicke ihn dir heute Abend.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören das Gespräch einmal. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Вы слышите разговор один раз. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Tim hat seinen Termin im Bürgeramt online gebucht.', answer: false, explanationRu: 'Онлайн свободных дат не было; он дозвонился утром в половине восьмого с третьей попытки.' },
            { kind: 'tf', statement: 'Bei seinem Termin hat Tim ein Dokument gefehlt.', answer: true, explanationRu: 'Не хватало подтверждения от арендодателя (Wohnungsgeberbestätigung).' },
            { kind: 'tf', statement: 'Tim muss noch einmal ins Bürgeramt gehen.', answer: false, explanationRu: 'Документ можно донести онлайн: «…muss nicht noch einmal hingehen».' },
            { kind: 'tf', statement: 'Trotz Nachsendeauftrag ist ein Paket an die alte Adresse gegangen.', answer: true, explanationRu: '«Trotzdem ist ein Paket an die alte Adresse gegangen».' },
            { kind: 'tf', statement: 'Tim hat das Paket in der Postfiliale abgeholt.', answer: false, explanationRu: 'Посылку принёс новый жилец старой квартиры.' },
            { kind: 'tf', statement: 'Anna muss ihrem Arbeitgeber die neue Bankverbindung selbst mitteilen.', answer: false, explanationRu: 'Новый банк сам сообщит работодателю и арендодателю (Kontowechselservice).' },
            { kind: 'tf', statement: 'Anna wechselt die Bank, weil ihre Bank bald eine monatliche Gebühr verlangt.', answer: true, explanationRu: 'Её банк хочет со следующего месяца шесть евро в месяц за ведение счёта.' },
          ],
        },
      ],
    },
  ],
};
