import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ich warte schon seit einer Stunde ___ deine Antwort im Chat.',
      options: ['für', 'auf', 'nach', 'an'],
      answer: 1,
      explanationRu: 'warten auf + Akk. По-русски «ждать (кого? что?)» без предлога, поэтому предлог auf часто забывают или заменяют на für.',
    },
    {
      type: 'gap',
      prompt: 'Nimmst du morgen auch ___ der Videokonferenz teil?',
      answers: ['an'],
      hintRu: 'teilnehmen … + Dat',
      explanationRu: 'teilnehmen an + Dativ (an der Videokonferenz). Ошибка-калька с русского «участвовать в» — *teilnehmen in*.',
    },
    {
      type: 'choice',
      prompt: 'Ich ärgere mich jeden Tag über ___ langsamen Internetanschluss.',
      options: ['dem', 'des', 'den', 'der'],
      answer: 2,
      explanationRu: 'sich ärgern über + Akkusativ. Предлог über в переносном значении почти всегда требует Akkusativ: über den langsamen Anschluss (мужской род).',
    },
    {
      type: 'gap',
      prompt: 'Wir freuen uns schon ___ das lange Wochenende ohne Handy.',
      answers: ['auf'],
      hintRu: 'радоваться предстоящему событию',
      explanationRu: 'sich freuen auf + Akk — радоваться тому, что ещё будет (выходные впереди). sich freuen über — радоваться тому, что уже есть или случилось.',
    },
    {
      type: 'choice',
      prompt: 'Die Kollegen haben sich sehr ___ das Lob der Chefin gefreut.',
      options: ['auf', 'an', 'für', 'über'],
      answer: 3,
      explanationRu: 'Похвала уже прозвучала, значит, радуются тому, что произошло: sich freuen über + Akk. Сравните: sich freuen auf — о будущем.',
    },
    {
      type: 'gap',
      prompt: '„___ interessierst du dich eigentlich beruflich?“ – „Für Datenjournalismus.“',
      answers: ['Wofür'],
      hintRu: 'вопрос о предмете: wo(r) + предлог',
      explanationRu: 'sich interessieren für + Akk. Вопрос о предмете (не о человеке): wo + für = Wofür? Предлог начинается с согласной, поэтому -r- не нужно.',
    },
    {
      type: 'choice',
      prompt: '„Ist das dein neuer Kollege aus der IT-Abteilung?“ – „Ja, ich habe schon viel ___ gehört.“',
      options: ['davon', 'von ihm', 'wovon', 'von es'],
      answer: 1,
      explanationRu: 'hören von + Dat. Речь о человеке (коллега), поэтому используется предлог + личное местоимение: von ihm. davon — только о предметах и ситуациях.',
    },
    {
      type: 'gap',
      prompt: 'Unsere Redaktion besteht ___ drei Teams: Print, Online und Video.',
      answers: ['aus'],
      hintRu: 'состоять из',
      explanationRu: 'bestehen aus + Dat — «состоять из». У глагола bestehen несколько значений в зависимости от предлога: bestehen auf (настаивать), bestehen in (заключаться в).',
    },
    {
      type: 'choice',
      prompt: 'Das eigentliche Problem besteht ___, dass niemand die gesammelten Daten kontrolliert.',
      options: ['darauf', 'daraus', 'darin', 'davon'],
      answer: 2,
      explanationRu: 'bestehen in + Dat — «заключаться в». Коррелят: darin, dass … («заключается в том, что …»).',
    },
    {
      type: 'gap',
      prompt: 'Die Kundin bestand ___, dass alle ihre Daten sofort gelöscht werden.',
      answers: ['darauf'],
      hintRu: 'bestehen … + коррелят («настаивать на том, что…»)',
      explanationRu: 'bestehen auf — «настаивать на». Перед придаточным обязателен коррелят darauf (= «на том, чтобы …»).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Es kommt an, ob das Netz stabil ist.',
        'Es kommt davon an, ob das Netz stabil ist.',
        'Es kommt darauf an, ob das Netz stabil ist.',
        'Es kommt daran an, ob das Netz stabil ist.',
      ],
      answer: 2,
      explanationRu: 'Выражение es kommt auf + Akk an («зависит от, дело в»). Перед придаточным нужен коррелят darauf. Не путайте с es hängt davon ab, ob …',
    },
    {
      type: 'choice',
      prompt: 'Der Pressesprecher erklärte, das Unternehmen ___ sich nicht für die Datenpanne verantwortlich.',
      options: ['fühlt', 'fühle', 'fühlte', 'gefühlt'],
      answer: 1,
      explanationRu: 'Повторение (B2, Einheit 4): в косвенной речи используется Konjunktiv I: er/sie/es fühle. Обратите внимание и на управление: sich verantwortlich fühlen für + Akk.',
    },
    {
      type: 'gap',
      prompt: 'Trotz ___ Warnungen vor Betrugs-Mails klicken viele Menschen auf unbekannte Links.',
      answers: ['der'],
      hintRu: 'повторение: trotz + Genitiv, мн. ч.',
      explanationRu: 'Повторение (B2, Einheit 8): trotz управляет родительным падежом: trotz der Warnungen (мн. ч.). Управление существительного: die Warnung vor + Dativ.',
    },
    {
      type: 'gap',
      prompt: 'Die Nachfrage ___ Kursen zum Thema Datenschutz ist im letzten Jahr stark gestiegen.',
      answers: ['nach'],
      hintRu: 'die Nachfrage … + Dat',
      explanationRu: 'die Nachfrage nach + Dativ («спрос на»). Русский предлог «на» здесь не помогает — надо запомнить nach.',
    },
    {
      type: 'choice',
      prompt: 'Viele Seniorinnen und Senioren sind beim Online-Banking ___ die Hilfe ihrer Enkel angewiesen.',
      options: ['von', 'an', 'mit', 'auf'],
      answer: 3,
      explanationRu: 'angewiesen sein auf + Akk — «зависеть от, нуждаться в». По смыслу похоже на abhängig von, но предлог другой.',
    },
    {
      type: 'transform',
      instructionRu: 'Ответьте утвердительно, заменив предложные группы местоимением или местоименным наречием.',
      prompt: 'Hast du dich schon bei der Kundin für die Verspätung entschuldigt?',
      answers: [
        'Ja, ich habe mich schon bei ihr dafür entschuldigt.',
        'Ja, ich habe mich bei ihr schon dafür entschuldigt.',
        'Ja, ich habe mich schon dafür bei ihr entschuldigt.',
      ],
      explanationRu: 'sich bei jdm. für etw. entschuldigen. Человек (die Kundin) → bei + личное местоимение: bei ihr. Предмет/ситуация (die Verspätung) → dafür.',
    },
    {
      type: 'order',
      words: ['Ich', 'kann', 'mich', 'nicht', 'daran', 'erinnern,', 'wann', 'ich', 'zuletzt', 'offline', 'war.'],
      translationRu: 'Я не могу вспомнить, когда я в последний раз был офлайн.',
      explanationRu: 'sich erinnern an + Akk → коррелят daran перед косвенным вопросом (wann …). Коррелят стоит в конце среднего поля, перед вторым элементом сказуемого (erinnern).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с dass инфинитивным оборотом.',
      prompt: 'Ich habe keine Lust darauf, dass ich am Wochenende dienstliche E-Mails beantworte.',
      answers: ['Ich habe keine Lust darauf, am Wochenende dienstliche E-Mails zu beantworten.'],
      explanationRu: 'Подлежащее главного и придаточного предложения совпадает (ich), поэтому лучше использовать инфинитив с zu. Коррелят darauf (die Lust auf + Akk) сохраняется.',
    },
    {
      type: 'order',
      words: ['Der Konzern', 'hat', 'sich', 'dazu', 'verpflichtet,', 'alle Nutzerdaten', 'in Europa', 'zu', 'speichern.'],
      translationRu: 'Концерн взял на себя обязательство хранить все данные пользователей в Европе.',
      explanationRu: 'sich verpflichten zu + Dat → коррелят dazu + инфинитив с zu. Инфинитивный оборот отделяется запятой и стоит после главного предложения.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените выделенную существительным группу придаточным предложением с dass (пассив). Сохраните коррелят.',
      prompt: 'Die Ärzte haben lange über die Einführung der elektronischen Patientenakte diskutiert.',
      answers: [
        'Die Ärzte haben lange darüber diskutiert, dass die elektronische Patientenakte eingeführt wird.',
        'Die Ärzte haben lange darüber diskutiert, dass die elektronische Patientenakte eingeführt werden soll.',
        'Die Ärzte haben lange darüber diskutiert, ob die elektronische Patientenakte eingeführt werden soll.',
      ],
      explanationRu: 'diskutieren über + Akk. При замене именной группы придаточным предлог превращается в коррелят darüber. Номинализация die Einführung → глагол einführen в пассиве (повторение B2, Einheit 9).',
    },
  ],
  reading: [
    {
      title: 'Sollen Nachrichten im Internet etwas kosten?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Lena Hofmann, 27, Studentin',
          body: `Ich lese Nachrichten fast nur auf dem Handy, meistens über Links, die Freunde in sozialen Netzwerken teilen. Und genau da liegt mein Problem: Ich klicke auf einen spannenden Artikel – und lande vor einer Bezahlschranke. Das passiert mir mehrmals am Tag und ärgert mich jedes Mal. Für fünf verschiedene Zeitungen jeweils zehn Euro im Monat zu zahlen, kann ich mir als Studentin aber nicht leisten. Bei Musik und Filmen funktioniert es doch auch: Man zahlt einen Betrag und bekommt Zugang zu fast allem. Wenn sich mehrere Verlage auf so ein gemeinsames Angebot einigen würden, wäre ich sofort dabei.`,
        },
        {
          label: 'b',
          heading: 'Bernd Albers, 58, Lokaljournalist',
          body: `Seit über dreißig Jahren berichte ich über meine Stadt. Eine gründliche Recherche über die Vergabe öffentlicher Aufträge kann Wochen dauern – und diese Arbeit muss jemand bezahlen. Früher haben Anzeigen den Großteil finanziert, doch die Werbekunden sind längst zu den großen Plattformen abgewandert. Wenn die Leser nicht bereit sind, für unsere Arbeit zu zahlen, werden immer mehr Lokalzeitungen verschwinden. Und dann schaut niemand mehr genau hin, was im Rathaus beschlossen wird. Mich wundert übrigens, dass viele ohne nachzudenken vier Euro für einen Kaffee ausgeben, aber über ein Digitalabo für den Preis von drei Kaffees im Monat diskutieren.`,
        },
        {
          label: 'c',
          heading: 'Dr. Yasemin Arslan, Medienwissenschaftlerin',
          body: `Ich verstehe, dass Verlage auf zahlende Leser angewiesen sind. Trotzdem sehe ich die Entwicklung mit Sorge. Wenn gut recherchierte Informationen nur noch für diejenigen zugänglich sind, die dafür bezahlen können, droht eine Spaltung: Auf der einen Seite stehen gut informierte Bürger, auf der anderen Menschen, die sich aus kostenlosen und oft zweifelhaften Quellen bedienen. Denn eines darf man nicht vergessen: Falschmeldungen und Propaganda stehen niemals hinter einer Bezahlschranke. Ich plädiere daher für neue Modelle, bei denen auch öffentliche Gelder oder Stiftungen unabhängigen Journalismus mitfinanzieren – natürlich ohne Einfluss auf die Inhalte zu nehmen.`,
        },
        {
          label: 'd',
          heading: 'Tobias Krämer, 41, IT-Berater',
          body: `Ich habe zwei Digitalabos und bereue das nicht. Gerade als IT-Berater weiß ich, dass „kostenlos“ im Internet selten wirklich kostenlos ist: Wer nicht mit Geld bezahlt, bezahlt mit seinen Daten, weil jeder Klick für personalisierte Werbung ausgewertet wird. Ein bezahltes Abo bedeutet für mich daher auch weniger Tracking und ein ruhigeres Lesen ohne blinkende Anzeigen. Was mich allerdings stört, ist das Verhalten mancher Verlage: Nach einem günstigen Probemonat steigt der Preis plötzlich auf das Dreifache, und die Kündigung ist oft so gut versteckt, dass man sie kaum findet. Mit mehr Transparenz würden die Verlage sicher mehr Vertrauen gewinnen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte a–d. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты a–d. Какое высказывание относится к какому человеку? Одного человека можно выбирать несколько раз.',
          options: ['Lena Hofmann', 'Bernd Albers', 'Dr. Yasemin Arslan', 'Tobias Krämer'],
          items: [
            {
              kind: 'match',
              prompt: '1. Wer kostenlose Angebote nutzt, zahlt oft auf andere Weise.',
              answer: 3,
              explanationRu: 'Tobias Krämer: «Wer nicht mit Geld bezahlt, bezahlt mit seinen Daten».',
            },
            {
              kind: 'match',
              prompt: '2. Ein gemeinsames Abo für mehrere Zeitungen wäre attraktiv.',
              answer: 0,
              explanationRu: 'Lena Hofmann сравнивает с музыкой и фильмами и готова подписаться, если издательства договорятся о совместном предложении.',
            },
            {
              kind: 'match',
              prompt: '3. Ohne bezahlten Journalismus fehlt die Kontrolle der Lokalpolitik.',
              answer: 1,
              explanationRu: 'Bernd Albers: если местные газеты исчезнут, «schaut niemand mehr genau hin, was im Rathaus beschlossen wird».',
            },
            {
              kind: 'match',
              prompt: '4. Bezahlschranken könnten die Gesellschaft spalten.',
              answer: 2,
              explanationRu: 'Dr. Arslan: «…droht eine Spaltung» между хорошо информированными и теми, кто читает бесплатные сомнительные источники.',
            },
            {
              kind: 'match',
              prompt: '5. Manche Verlage machen es ihren Kunden schwer, ein Abo zu beenden.',
              answer: 3,
              explanationRu: 'Tobias Krämer: кнопку отмены подписки так хорошо прячут, что её трудно найти.',
            },
            {
              kind: 'match',
              prompt: '6. Für andere Dinge des Alltags geben viele Menschen ohne Zögern Geld aus.',
              answer: 1,
              explanationRu: 'Bernd Albers удивляется, что люди не задумываясь платят четыре евро за кофе, но спорят о цене подписки.',
            },
            {
              kind: 'match',
              prompt: '7. Falschinformationen sind immer frei zugänglich.',
              answer: 2,
              explanationRu: 'Dr. Arslan: «Falschmeldungen und Propaganda stehen niemals hinter einer Bezahlschranke».',
            },
            {
              kind: 'match',
              prompt: '8. Es ist frustrierend, über soziale Medien auf gesperrte Artikel zu stoßen.',
              answer: 0,
              explanationRu: 'Lena Hofmann переходит по ссылкам друзей и натыкается на платный доступ — это её каждый раз злит.',
            },
            {
              kind: 'match',
              prompt: '9. Journalismus sollte zum Teil auch aus anderen Quellen als den Lesern finanziert werden.',
              answer: 2,
              explanationRu: 'Dr. Arslan выступает за модели, в которых независимую журналистику софинансируют государственные средства или фонды.',
            },
          ],
        },
      ],
    },
    {
      title: 'Was bleibt von uns im Netz?',
      textType: 'Zeitungsartikel mit Lücken',
      texts: [
        {
          body: `Was passiert eigentlich mit unseren E-Mails, Fotos und Social-Media-Konten, wenn wir sterben? Über diese Frage denken die wenigsten Menschen nach. [1] Dabei hinterlässt heute fast jeder einen umfangreichen digitalen Nachlass: Konten bei Onlinehändlern, Streaming-Abos, Cloud-Speicher mit Tausenden Fotos und manchmal sogar Guthaben bei Bezahldiensten.

Für die Angehörigen beginnt nach einem Todesfall oft eine mühsame Suche. Sie müssen zunächst herausfinden, bei welchen Diensten die verstorbene Person überhaupt angemeldet war. [2] Ohne Passwörter kommen sie aber häufig nicht weiter, und viele Anbieter reagieren auf Anfragen nur sehr langsam.

Rechtlich ist die Lage in Deutschland inzwischen relativ klar. Der Bundesgerichtshof hat 2018 entschieden, dass digitale Konten genauso vererbt werden wie Briefe oder Tagebücher. [3] Im konkreten Fall hatten Eltern jahrelang darum gekämpft, Zugriff auf das Konto ihrer verstorbenen Tochter in einem sozialen Netzwerk zu bekommen. Sie hofften, darin Hinweise auf die Umstände ihres Todes zu finden.

Verbraucherschützer raten deshalb dazu, sich rechtzeitig um den eigenen digitalen Nachlass zu kümmern. [4] Darin sollte man alle wichtigen Konten auflisten und festlegen, was mit ihnen geschehen soll: Soll ein Profil gelöscht oder als Gedenkseite weitergeführt werden? Wer darf auf die Fotos zugreifen?

Die Passwörter selbst gehören allerdings nicht ungeschützt auf einen Zettel in der Schreibtischschublade. [5] So muss man sich nur ein einziges Passwort merken und kann dieses zum Beispiel in einem versiegelten Umschlag bei einer Vertrauensperson hinterlegen.

Einige Plattformen bieten inzwischen eigene Lösungen an. Bei manchen Diensten kann man einen sogenannten Nachlasskontakt bestimmen, der nach dem Tod bestimmte Rechte erhält. [6] Wer sich frühzeitig mit dem Thema beschäftigt, erspart seinen Angehörigen also viel Arbeit – und oft auch zusätzlichen Kummer.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Eine sicherere Lösung ist ein Passwortmanager mit einem einzigen Hauptpasswort.',
            'Laut einer Umfrage hat nur etwa jeder Fünfte seinen digitalen Nachlass geregelt.',
            'Deshalb sollte man seine Passwörter regelmäßig an Freunde und Kollegen weitergeben.',
            'Andere löschen Konten automatisch, wenn sie längere Zeit nicht genutzt wurden.',
            'Hinweise darauf liefern oft Kontoauszüge oder Rechnungen im E-Mail-Postfach.',
            'Sinnvoll ist eine sogenannte digitale Vollmacht, die man mit Datum und Unterschrift versieht.',
            'Soziale Netzwerke sind deshalb für ältere Menschen grundsätzlich ungeeignet.',
            'Die Erben haben also grundsätzlich einen Anspruch darauf, die Inhalte einzusehen.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 1,
              explanationRu: 'Перед пропуском: мало кто думает об этом вопросе. Статистика («только каждый пятый») подтверждает это, а Dabei … после пропуска противопоставляет: при этом цифровое наследство есть почти у каждого.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 4,
              explanationRu: 'Родственники должны выяснить, где был зарегистрирован умерший. Hinweise darauf (= на это) дают выписки по счёту и счета в почте.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 7,
              explanationRu: 'Суд решил, что аккаунты наследуются, как письма. Отсюда вывод с also: наследники имеют право (Anspruch darauf) видеть содержимое.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 5,
              explanationRu: 'После пропуска стоит Darin sollte man … auflisten — darin относится к документу, то есть к цифровой доверенности (Vollmacht).',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 0,
              explanationRu: 'Пароли не стоит хранить на бумажке. Альтернатива — менеджер паролей; дальше: So muss man sich nur ein einziges Passwort merken.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 3,
              explanationRu: 'Bei manchen Diensten … — Andere … : предложение продолжает перечисление решений разных платформ.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Radiodiskussion: Ein Recht auf Nichterreichbarkeit?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin',
        B: 'Herr Wolff, Geschäftsführer eines Softwareunternehmens',
        C: 'Frau Lindner, Arbeitspsychologin',
      },
      situation: 'Sie hören eine Diskussion im Radio. Sie hören den Text einmal.',
      text: `A: Guten Abend und willkommen zu „Thema am Abend“. Heute geht es um die Frage, ob Beschäftigte ein Recht darauf haben sollten, nach Feierabend nicht erreichbar zu sein. In Frankreich gibt es so eine Regelung bereits seit einigen Jahren. Bei mir sind Herr Wolff, Geschäftsführer eines Softwareunternehmens, und Frau Lindner, Arbeitspsychologin. Frau Lindner, warum brauchen wir überhaupt so ein Recht?
C: Weil die Grenze zwischen Arbeit und Freizeit immer mehr verschwimmt. In unseren Befragungen gibt fast die Hälfte der Beschäftigten an, abends regelmäßig dienstliche Nachrichten zu lesen. Viele tun das gar nicht, weil der Chef es verlangt, sondern weil sie Angst davor haben, etwas Wichtiges zu verpassen. So kommt das Gehirn nie richtig zur Ruhe.
A: Herr Wolff, Sie halten ein Gesetz für überflüssig. Warum?
B: Ich bin keineswegs dagegen, dass Mitarbeiter abschalten – im Gegenteil, wir sind darauf angewiesen, dass unsere Leute ausgeruht sind. Aber ein starres Gesetz passt nicht zu jeder Branche. Wir haben Kunden in Asien und in den USA, da muss manchmal jemand abends kurz reagieren können. Das sollten die Betriebe selbst regeln, nicht der Gesetzgeber.
A: Wie machen Sie das in Ihrer Firma?
B: Bei uns gibt es seit zwei Jahren eine Vereinbarung: Nach 19 Uhr erwartet niemand eine Antwort, außer bei echten Notfällen. Und wer abends trotzdem arbeiten muss, bekommt die Zeit am nächsten Tag als Freizeit gutgeschrieben.
C: Das klingt gut, aber Ihre Firma ist leider eine Ausnahme. In vielen Betrieben gibt es keine solchen Regeln, und gerade Beschäftigte mit befristeten Verträgen trauen sich nicht, sich darüber zu beschweren. Deshalb bin ich davon überzeugt, dass wir eine gesetzliche Mindestregel brauchen. Die Details können die Firmen dann selbst festlegen.
A: Ich darf hier eine Studie ergänzen: Forscher haben gezeigt, dass schon das bloße Gefühl, erreichbar sein zu müssen, Stress auslöst – auch dann, wenn gar keine Nachricht kommt.
C: Genau. Es geht also nicht nur um die Zahl der E-Mails.
B: Trotzdem warne ich davor, alles zu verbieten. Viele junge Mitarbeiter wünschen sich gerade Flexibilität. Sie wollen nachmittags ihre Kinder abholen und abends noch eine Stunde arbeiten. Ein striktes Gesetz würde das unmöglich machen.
A: Gibt es denn technische Lösungen?
B: Manche Unternehmen stellen E-Mails nach Feierabend gar nicht mehr zu, sondern erst am nächsten Morgen. Davon halte ich allerdings wenig. Das ist mir zu bevormundend.
C: Ich finde solche Lösungen durchaus sinnvoll, zumindest für den Urlaub. Wer nach zwei Wochen zurückkommt und fünfhundert ungelesene Mails vorfindet, ist nach einem Tag wieder genauso erschöpft wie vorher.
A: Herr Wolff, Frau Lindner, vielen Dank für die Diskussion.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion einmal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слушаете дискуссию один раз. Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Herr Wolff', 'Frau Lindner'],
          items: [
            {
              kind: 'match',
              prompt: '1. Viele lesen abends dienstliche Nachrichten aus Sorge, etwas zu verpassen.',
              answer: 2,
              explanationRu: 'Frau Lindner: многие читают сообщения не по требованию начальника, а из страха что-то пропустить.',
            },
            {
              kind: 'match',
              prompt: '2. Unternehmen sollten selbst bestimmen, wie sie die Erreichbarkeit regeln.',
              answer: 1,
              explanationRu: 'Herr Wolff: «Das sollten die Betriebe selbst regeln, nicht der Gesetzgeber».',
            },
            {
              kind: 'match',
              prompt: '3. Schon das Gefühl, erreichbar sein zu müssen, belastet die Menschen.',
              answer: 0,
              explanationRu: 'Модератор приводит исследование: уже само ощущение, что нужно быть на связи, вызывает стресс.',
            },
            {
              kind: 'match',
              prompt: '4. In einem anderen europäischen Land gibt es bereits eine gesetzliche Regelung.',
              answer: 0,
              explanationRu: 'Модератор во вступлении: «In Frankreich gibt es so eine Regelung bereits seit einigen Jahren».',
            },
            {
              kind: 'match',
              prompt: '5. Wer einen befristeten Vertrag hat, beschwert sich selten.',
              answer: 2,
              explanationRu: 'Frau Lindner: сотрудники с срочными договорами не решаются жаловаться.',
            },
            {
              kind: 'match',
              prompt: '6. Das automatische Zurückhalten von E-Mails nimmt den Mitarbeitern die Entscheidung ab.',
              answer: 1,
              explanationRu: 'Herr Wolff считает такую техническую блокировку писем «zu bevormundend» — слишком опекающей.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Wer entscheidet, was wir sehen?',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag an einer Volkshochschule. Sie hören den Text zweimal.',
      text: `Guten Abend, meine Damen und Herren, und herzlich willkommen zu unserer Vortragsreihe „Leben im digitalen Zeitalter“. Ich möchte heute über etwas sprechen, das Sie alle täglich nutzen, ohne es zu sehen: Empfehlungsalgorithmen.

Beginnen wir mit einem kleinen Experiment. Vor einem Monat haben zwei meiner Studierenden neue Konten bei einer bekannten Videoplattform angelegt. Die eine hat sich nur Kochvideos angesehen, der andere nur Videos über Fitness. Nach zwei Wochen bekamen beide fast ausschließlich Inhalte zu ihrem Thema angezeigt – und zwar zunehmend extreme. Bei der Fitness waren es plötzlich Videos über radikale Diäten und fragwürdige Nahrungsergänzungsmittel.

Wie kommt es dazu? Ein solcher Algorithmus hat im Grunde nur ein Ziel: Er soll dafür sorgen, dass wir möglichst lange auf der Plattform bleiben. Denn je länger wir bleiben, desto mehr Werbung sehen wir. Der Algorithmus beobachtet deshalb genau, worauf wir reagieren: Wie lange schauen wir ein Video an? Was teilen wir? Worüber regen wir uns in den Kommentaren auf? Und hier liegt das Problem: Inhalte, die uns empören oder überraschen, halten uns besonders lange fest.

Man sollte daraus allerdings nicht den Schluss ziehen, dass Algorithmen grundsätzlich schlecht sind. Ohne sie wären wir angesichts der Menge an Inhalten völlig überfordert. Jede Minute werden Hunderte Stunden Videomaterial hochgeladen. Irgendjemand muss auswählen – früher waren das Redaktionen, heute sind es Maschinen.

Der entscheidende Unterschied ist: Eine Redaktion kann man kritisieren, sie muss sich an den Pressekodex halten, und man weiß, wer verantwortlich ist. Bei einem Algorithmus wissen wir dagegen kaum, nach welchen Kriterien er auswählt. Die Firmen betrachten das als Geschäftsgeheimnis.

Was kann man also tun? Auf politischer Ebene verlangt die EU inzwischen, dass große Plattformen offenlegen, wie ihre Empfehlungen grundsätzlich funktionieren, und dass Nutzer eine Variante ohne Personalisierung wählen können. Das ist ein wichtiger Schritt, aber kaum jemand weiß davon.

Und ganz persönlich? Drei kleine Tipps. Erstens: Schauen Sie sich ab und zu bewusst Inhalte an, die nicht Ihrer Meinung entsprechen. Zweitens: Nutzen Sie für Nachrichten direkt die Seiten oder Apps seriöser Medien statt der Startseite eines Netzwerks. Und drittens: Löschen Sie gelegentlich Ihren Verlauf – Sie werden staunen, wie anders Ihre Startseite danach aussieht.

Im zweiten Teil des Abends möchte ich mit Ihnen darüber diskutieren, ob Schulen das Thema stärker aufgreifen sollten. Doch vorher machen wir zehn Minuten Pause.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете доклад дважды. Выберите в каждом задании правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was zeigte das Experiment der Studierenden?',
              options: [
                'Die Plattform zeigte beiden sehr ähnliche Inhalte.',
                'Die Empfehlungen wurden mit der Zeit immer extremer.',
                'Kochvideos sind beliebter als Fitnessvideos.',
              ],
              answer: 1,
              explanationRu: 'Через две недели оба получали почти только контент по своей теме, причём всё более радикальный (zunehmend extreme).',
            },
            {
              kind: 'mc',
              question: 'Welches Ziel verfolgt ein Empfehlungsalgorithmus laut Vortrag?',
              options: [
                'Nutzer möglichst lange auf der Plattform zu halten.',
                'Nutzern möglichst viele Informationen zu vermitteln.',
                'Die Menge der Werbung zu reduzieren.',
              ],
              answer: 0,
              explanationRu: '«Er soll dafür sorgen, dass wir möglichst lange auf der Plattform bleiben» — чем дольше, тем больше рекламы.',
            },
            {
              kind: 'mc',
              question: 'Welche Inhalte halten Nutzer besonders lange fest?',
              options: [
                'kurze, sachliche Videos',
                'Videos von Freunden und Bekannten',
                'Inhalte, die starke Gefühle auslösen',
              ],
              answer: 2,
              explanationRu: 'Inhalte, die uns empören oder überraschen — то есть вызывающие сильные эмоции.',
            },
            {
              kind: 'mc',
              question: 'Wie bewertet die Referentin Algorithmen grundsätzlich?',
              options: [
                'als völlig überflüssig',
                'als besser als jede Redaktion',
                'als notwendig, um die Menge an Inhalten zu bewältigen',
              ],
              answer: 2,
              explanationRu: 'Без них мы были бы перегружены объёмом контента: каждую минуту загружаются сотни часов видео.',
            },
            {
              kind: 'mc',
              question: 'Was unterscheidet Redaktionen von Algorithmen?',
              options: [
                'Redaktionen arbeiten schneller.',
                'Bei Redaktionen ist klar, wer die Verantwortung trägt.',
                'Algorithmen müssen sich an den Pressekodex halten.',
              ],
              answer: 1,
              explanationRu: 'Редакцию можно критиковать, она соблюдает кодекс, и известно, кто отвечает. Критерии алгоритма — коммерческая тайна.',
            },
            {
              kind: 'mc',
              question: 'Was verlangt die EU von großen Plattformen?',
              options: [
                'Nutzer sollen Empfehlungen ohne Personalisierung wählen können.',
                'Die Plattformen sollen ihren vollständigen Programmcode veröffentlichen.',
                'Die Plattformen sollen keine Werbung mehr zeigen.',
              ],
              answer: 0,
              explanationRu: 'ЕС требует объяснять принцип работы рекомендаций и давать вариант без персонализации. О публикации всего кода речи нет.',
            },
            {
              kind: 'mc',
              question: 'Welchen Tipp gibt die Referentin?',
              options: [
                'soziale Netzwerke ganz zu meiden',
                'nur Inhalte anzusehen, die der eigenen Meinung entsprechen',
                'Nachrichten direkt bei seriösen Medien zu lesen',
              ],
              answer: 2,
              explanationRu: 'Второй совет: для новостей пользоваться сайтами или приложениями серьёзных СМИ, а не стартовой страницей соцсети.',
            },
            {
              kind: 'mc',
              question: 'Was passiert nach der Pause?',
              options: [
                'Es gibt eine Diskussion über die Rolle der Schulen.',
                'Die Studierenden stellen ihr Experiment vor.',
                'Die Teilnehmenden löschen gemeinsam ihren Verlauf.',
              ],
              answer: 0,
              explanationRu: 'Во второй части вечера — обсуждение того, должны ли школы больше заниматься этой темой.',
            },
          ],
        },
      ],
    },
  ],
};
