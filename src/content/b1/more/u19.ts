import type { UnitMore } from '../../types';

// Extra practice B1 · Unit 19 — Technik & Alltag (Wortbildung)
export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Welcher Artikel ist richtig? ___ Erfindung des Telefons hat die Welt verändert.',
      options: ['Der', 'Die', 'Das'],
      answer: 1,
      explanationRu: 'Все существительные на -ung женского рода: die Erfindung.',
    },
    {
      type: 'choice',
      prompt: '___ Einkaufen am Samstag macht mir keinen Spaß.',
      options: ['Der', 'Die', 'Das'],
      answer: 2,
      explanationRu: 'Субстантивированный инфинитив всегда среднего рода: das Einkaufen.',
    },
    {
      type: 'choice',
      prompt: 'Welches Nomen gehört zu „krank“?',
      options: ['die Krankkeit', 'die Krankheit', 'die Krankung'],
      answer: 1,
      explanationRu: 'krank → die Krankheit (-heit). -keit используется в основном после -ig, -lich, -bar, -sam.',
    },
    {
      type: 'choice',
      prompt: 'der Computer + das Spiel → ___ Computerspiel',
      options: ['der', 'die', 'das'],
      answer: 2,
      explanationRu: 'Род сложного слова определяет последняя часть: das Spiel → das Computerspiel.',
    },
    {
      type: 'choice',
      prompt: 'Die ___ der Verkäuferin hat mir sehr gefallen.',
      options: ['Freundlichheit', 'Freundlichkeit', 'Freundlichung', 'Freundlichtion'],
      answer: 1,
      explanationRu: 'После суффикса -lich ставится -keit: freundlich → die Freundlichkeit.',
    },
    {
      type: 'choice',
      prompt: 'Diese Pilze sind giftig, sie sind nicht ___.',
      options: ['essig', 'esslos', 'essbar', 'esslich'],
      answer: 2,
      explanationRu: '-bar = «можно сделать»: essbar — «съедобный». Ловушка: der Essig — это «уксус».',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Die Handschrift auf dem Zettel ist unlesbar.“?',
      options: ['Man kann sie nicht lesen.', 'Man liest sie nicht gern.', 'Auf dem Zettel steht nichts.'],
      answer: 0,
      explanationRu: 'un- (отрицание) + les- + -bar: «невозможно прочитать».',
    },
    {
      type: 'gap',
      prompt: 'Ich habe heute leider keine Zeit zum ___.',
      answers: ['Aufräumen'],
      hintRu: 'aufräumen',
      explanationRu: 'zum + субстантивированный инфинитив, с большой буквы и слитно с приставкой: zum Aufräumen.',
    },
    {
      type: 'gap',
      prompt: 'Die ___ beginnt bei uns um acht Uhr.',
      answers: ['Arbeitszeit'],
      hintRu: 'die Arbeit + die Zeit',
      explanationRu: 'В слове Arbeitszeit между частями стоит соединительное -s-.',
    },
    {
      type: 'gap',
      prompt: 'Die Besprechung war ___, wir haben nichts entschieden.',
      answers: ['sinnlos'],
      hintRu: 'der Sinn + «без»',
      explanationRu: '-los = «без»: sinnlos — «бессмысленный».',
    },
    {
      type: 'gap',
      prompt: 'Bei der ___ neuer Handys spielt die Kamera eine große Rolle.',
      answers: ['Entwicklung'],
      hintRu: 'entwickeln',
      explanationRu: 'entwickeln → die Entwicklung (-ung, женский род). После der — дательный падеж, но форма слова не меняется.',
    },
    {
      type: 'gap',
      prompt: 'Die ___ des Kundendienstes kam schon nach einer Stunde.',
      answers: ['Reaktion'],
      hintRu: 'reagieren',
      explanationRu: 'Глаголы на -ieren часто образуют существительные на -ion: reagieren → die Reaktion.',
    },
    {
      type: 'gap',
      prompt: 'Im Auto muss man immer den ___ anlegen.',
      answers: ['Sicherheitsgurt'],
      hintRu: 'die Sicherheit + der Gurt',
      explanationRu: 'После -heit обязательно -s-: Sicherheit + s + Gurt. Род — по последнему слову: der Gurt → der Sicherheitsgurt.',
    },
    {
      type: 'gap',
      prompt: 'In der Prüfung hatte ich keine großen ___.',
      answers: ['Schwierigkeiten'],
      hintRu: 'schwierig, мн. ч.',
      explanationRu: 'schwierig → die Schwierigkeit, мн. ч. die Schwierigkeiten (все существительные на -keit образуют мн. ч. на -en).',
    },
    {
      type: 'choice',
      prompt: 'Wo ist das Ladekabel, ___ ich gestern gekauft habe?',
      options: ['den', 'die', 'das'],
      answer: 2,
      explanationRu: 'Повторение (Relativsätze): относительное местоимение берёт род от слова Ladekabel, а оно среднего рода по последней части das Kabel → das.',
    },
    {
      type: 'order',
      words: ['Beim', 'Einschalten', 'des', 'Geräts', 'erscheint', 'eine', 'Fehlermeldung.'],
      translationRu: 'При включении прибора появляется сообщение об ошибке.',
      explanationRu: 'Beim Einschalten des Geräts — одна позиция (Position 1), затем спрягаемый глагол erscheint.',
    },
    {
      type: 'order',
      words: ['Die', 'Möglichkeit,', 'online', 'zu', 'bezahlen,', 'finde', 'ich', 'sehr', 'praktisch.'],
      translationRu: 'Возможность платить онлайн я считаю очень удобной.',
      explanationRu: 'Повторение: после существительного die Möglichkeit идёт инфинитив с zu. Вся группа «Die Möglichkeit, online zu bezahlen,» занимает первое место, потом глагол finde.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените выделенную часть прилагательным на -bar.',
      prompt: 'Diese alte Uhr kann man leider nicht mehr reparieren.',
      answers: ['Diese alte Uhr ist leider nicht mehr reparierbar.'],
      explanationRu: 'man kann … reparieren → … ist reparierbar. Суффикс -bar выражает возможность в пассивном значении.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное предложение конструкцией с существительным: Bei der … des Geräts …',
      prompt: 'Wenn man das Gerät repariert, muss man den Stecker ziehen.',
      answers: [
        'Bei der Reparatur des Geräts muss man den Stecker ziehen.',
        'Bei der Reparatur des Gerätes muss man den Stecker ziehen.',
      ],
      explanationRu: 'reparieren → die Reparatur (исключение: не *Reparation). Дополнение das Gerät становится генитивом: des Geräts.',
    },
    {
      type: 'transform',
      instructionRu: 'Повторение: переделайте в пассив (Präteritum).',
      prompt: 'Man schloss die Waschmaschine gestern an.',
      answers: ['Die Waschmaschine wurde gestern angeschlossen.', 'Gestern wurde die Waschmaschine angeschlossen.'],
      explanationRu: 'Пассив Präteritum: wurde + Partizip II. Отделяемая приставка остаётся в причастии: angeschlossen.',
    },
  ],
  reading: [
    {
      title: 'Technik in der Lokalzeitung',
      textType: 'Zeitungsartikel',
      texts: [
        {
          label: 'Text 1',
          heading: 'Fünf Jahre Reparaturcafé: Schraubenzieher statt Mülltonne',
          body: `Jeden ersten Samstag im Monat ist es im Gemeindehaus an der Lindenstraße laut: Es wird geschraubt, gelötet und diskutiert. Seit fünf Jahren gibt es hier das Reparaturcafé „Heile Welt“. Rund zwanzig Ehrenamtliche helfen den Besucherinnen und Besuchern, kaputte Toaster, Lampen, Fahrräder oder Kleidung wieder in Ordnung zu bringen.

„Am Anfang kamen vor allem ältere Leute“, erzählt Gründer Rainer Holt, ein pensionierter Elektriker. „Heute sind auch viele junge Familien dabei.“ Wichtig ist ihm, dass die Gäste nicht nur warten, sondern mitarbeiten: „Wer selbst mit dem Schraubenzieher in der Hand dabei war, wirft das nächste Gerät nicht so schnell weg.“

Etwa zwei Drittel aller Geräte können die Helfer reparieren. Schwierig wird es bei modernen Smartphones, weil viele Hersteller die Teile fest verkleben. Die Reparatur selbst kostet nichts, eine Spende in die Kaffeekasse ist aber willkommen. Zum Geburtstag wünscht sich das Team vor allem eines: mehr Platz. Die Stadt hat bereits einen größeren Raum im alten Bahnhof angeboten.`,
        },
        {
          label: 'Text 2',
          heading: 'Schülerinnen und Schüler erklären Senioren das Smartphone',
          body: `„Wie schicke ich meinem Enkel ein Foto?“ – Fragen wie diese hören die Jugendlichen der Gesamtschule Nord jeden Dienstagnachmittag. Im Projekt „Digital fit“ bringen sie älteren Menschen aus dem Stadtteil den Umgang mit Handy und Tablet bei.

Die Idee stammt von der Informatiklehrerin Selin Arslan. „Viele Senioren haben ein modernes Gerät, trauen sich aber nicht, es richtig zu benutzen“, sagt sie. „Unsere Schüler haben dagegen manchmal Schwierigkeiten, langsam und verständlich zu erklären. Beide Seiten lernen also etwas.“

Die Treffen finden in der Schulbibliothek statt, jede Seniorin und jeder Senior bekommt einen festen Partner. Die Teilnahme ist kostenlos, man sollte sich aber vorher im Sekretariat anmelden, weil die Plätze begrenzt sind. Besonders beliebt sind Videoanrufe und Online-Banking. Der 78-jährige Herbert Wolf ist begeistert: „Früher hat mir jedes Update Angst gemacht. Heute aktualisiere ich die Apps selbst – und mein Partner Jonas hat bei mir gelernt, wie man einen Wasserhahn repariert.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie Text 1 und wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 1 и выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was ist Rainer Holt besonders wichtig?',
              options: [
                'Die Besucher sollen bei der Reparatur selbst mithelfen.',
                'Es sollen mehr ältere Menschen ins Reparaturcafé kommen.',
                'Die Helfer sollen nur Elektrogeräte reparieren.',
              ],
              answer: 0,
              explanationRu: '«Wichtig ist ihm, dass die Gäste nicht nur warten, sondern mitarbeiten».',
            },
            {
              kind: 'mc',
              question: 'Warum ist die Reparatur von Smartphones schwierig?',
              options: [
                'Die Ehrenamtlichen kennen sich mit Handys nicht aus.',
                'Viele Teile sind fest verklebt.',
                'Die Ersatzteile sind zu teuer.',
              ],
              answer: 1,
              explanationRu: '«…weil viele Hersteller die Teile fest verkleben».',
            },
            {
              kind: 'mc',
              question: 'Was wünscht sich das Team zum Geburtstag?',
              options: ['Mehr Spenden', 'Mehr Helfer', 'Einen größeren Raum'],
              answer: 2,
              explanationRu: '«…wünscht sich das Team vor allem eines: mehr Platz». Город уже предложил помещение побольше.',
            },
          ],
        },
        {
          instructionDe: 'Lesen Sie Text 2 und wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст 2 и выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was lernen die Schüler laut Frau Arslan im Projekt?',
              options: [
                'Sie lernen, wie man Apps programmiert.',
                'Sie lernen, langsam und verständlich zu erklären.',
                'Sie lernen, wie man ein Tablet repariert.',
              ],
              answer: 1,
              explanationRu: '«Unsere Schüler haben … manchmal Schwierigkeiten, langsam und verständlich zu erklären. Beide Seiten lernen also etwas.»',
            },
            {
              kind: 'mc',
              question: 'Was muss man tun, wenn man am Projekt teilnehmen möchte?',
              options: [
                'Man muss sich im Sekretariat anmelden.',
                'Man muss ein eigenes Tablet kaufen.',
                'Man muss eine kleine Gebühr bezahlen.',
              ],
              answer: 0,
              explanationRu: '«…man sollte sich aber vorher im Sekretariat anmelden, weil die Plätze begrenzt sind». Участие бесплатное.',
            },
            {
              kind: 'mc',
              question: 'Was erzählt Herbert Wolf?',
              options: [
                'Er hat immer noch Angst vor Updates.',
                'Er hat Jonas beim Online-Banking geholfen.',
                'Er hat Jonas etwas Praktisches beigebracht.',
              ],
              answer: 2,
              explanationRu: '«…mein Partner Jonas hat bei mir gelernt, wie man einen Wasserhahn repariert». Обновлений он больше не боится.',
            },
          ],
        },
      ],
    },
    {
      title: 'Leserbriefe: Smartphone schon in der Grundschule?',
      textType: 'Leserbriefe',
      texts: [
        {
          label: 'Mia',
          body: 'Meine Tochter ist neun und fährt allein mit dem Bus zur Schule. Mit dem Handy kann sie mich jederzeit erreichen, und ich sehe, wo sie ist. Diese Sicherheit möchte ich nicht mehr verlieren.',
        },
        {
          label: 'Bernd',
          body: 'In der Klasse meines Sohnes haben fast alle ein Smartphone, und in den Chatgruppen wird gemobbt. Kinder unter zwölf können mit dieser Verantwortung einfach nicht umgehen. Ein einfaches Tastenhandy zum Telefonieren reicht völlig.',
        },
        {
          label: 'Olga',
          body: 'Natürlich gibt es Risiken. Aber ein Verbot ist sinnlos. Wichtiger ist, dass Eltern und Schule den Kindern früh zeigen, wie man das Gerät vernünftig benutzt. Deshalb haben unsere Kinder mit acht ein Smartphone bekommen – mit festen Regeln.',
        },
        {
          label: 'Tobias',
          body: 'Ich bin Kinderarzt und sehe jeden Tag die Folgen: Schlafprobleme, Konzentrationsschwierigkeiten, zu wenig Bewegung. Bis zum Ende der Grundschule gehört kein eigenes Smartphone in Kinderhände.',
        },
        {
          label: 'Hanna',
          body: 'Ich war selbst lange dagegen. Aber als mein Sohn als Einziger in der Klasse kein Handy hatte, wurde er bei vielen Verabredungen einfach vergessen. Seit er eins hat, ist er viel besser in der Gruppe integriert. Ich habe meine Meinung geändert.',
        },
        {
          label: 'Kemal',
          body: 'Die Hersteller verdienen viel Geld mit unseren Kindern, und die Apps sind so gemacht, dass man nicht mehr aufhören kann. Ich finde, die Kinder sollen draußen spielen und Bücher lesen. Ein Smartphone hat für mich in diesem Alter keinen Nutzen.',
        },
        {
          label: 'Lisa',
          body: 'Ich unterrichte in einer vierten Klasse. Mit Tablets lernen die Kinder im Unterricht sehr motiviert, und viele Lern-Apps sind wirklich gut. Ein eigenes Smartphone in der Hosentasche ist aber etwas ganz anderes: In der Pause schauen die Kinder nur noch auf den Bildschirm. Dafür sind sie mit neun oder zehn noch zu jung.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte. Ist die Person für ein eigenes Smartphone für Kinder unter zwölf Jahren?',
          instructionRu: 'Прочитайте тексты. Выступает ли человек за собственный смартфон для детей младше 12 лет?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: 'Mia', answer: true, explanationRu: 'Мия ценит безопасность: дочь всегда может с ней связаться, и она видит, где та находится.' },
            { kind: 'tf', statement: 'Bernd', answer: false, explanationRu: 'Бернд считает, что дети младше 12 не справляются с ответственностью; достаточно простого кнопочного телефона.' },
            { kind: 'tf', statement: 'Olga', answer: true, explanationRu: 'Ольга против запрета; её дети получили смартфон в 8 лет — с чёткими правилами.' },
            { kind: 'tf', statement: 'Tobias', answer: false, explanationRu: 'Педиатр Тобиас: до конца начальной школы — никакого собственного смартфона.' },
            { kind: 'tf', statement: 'Hanna', answer: true, explanationRu: 'Ханна раньше была против, но изменила мнение: с телефоном сын лучше интегрирован в группу.' },
            { kind: 'tf', statement: 'Kemal', answer: false, explanationRu: 'Кемаль: смартфон в этом возрасте бесполезен, дети должны играть на улице и читать.' },
            { kind: 'tf', statement: 'Lisa', answer: false, explanationRu: 'Лиза хвалит планшеты на уроках, но собственный смартфон в 9–10 лет считает преждевременным («noch zu jung»).' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Führung im Technikmuseum',
      kind: 'monolog',
      situation: 'Sie machen eine Führung durch ein Technikmuseum. Sie hören die Museumsführerin.',
      text: `Herzlich willkommen im Museum für Alltagstechnik! Mein Name ist Katrin Seidel, und ich begleite Sie heute durch unsere Ausstellung „Vom Waschbrett zum Saugroboter“. Die Führung dauert ungefähr eine Stunde. Ihre Jacken und Taschen können Sie gern in den Schließfächern hier rechts lassen. Fotografieren ist erlaubt, aber bitte ohne Blitz.

Wir beginnen im Erdgeschoss mit dem Thema Waschen. Bis in die Fünfzigerjahre war das Wäschewaschen in Deutschland harte Arbeit: Ein ganzer Tag pro Woche war dafür reserviert, meistens der Montag. Die erste elektrische Waschmaschine, die Sie hier sehen, war für normale Familien viel zu teuer. Sie kostete damals so viel wie drei Monatsgehälter.

Im ersten Stock geht es dann um die Küche. Besonders beliebt bei unseren Besuchern ist der Kühlschrank aus dem Jahr 1958. Vorher hat man Lebensmittel im Keller oder in einem Kasten mit Eis kühl gehalten. Der Kühlschrank war deshalb eine echte Erleichterung – und ein Statussymbol.

Danach gehen wir in den zweiten Stock, wo Sie die Entwicklung des Telefons verfolgen können: vom schweren Wandtelefon bis zum Smartphone. Dort dürfen Sie übrigens auch selbst etwas ausprobieren: An unserer Mitmachstation können Sie mit einer alten Wählscheibe telefonieren.

Zum Schluss zeige ich Ihnen unsere neue Sonderausstellung über Roboter im Haushalt. Sie ist nur noch bis Ende des Monats geöffnet. Und nach der Führung haben Sie die Möglichkeit, im Museumscafé im Erdgeschoss etwas zu trinken – mit Ihrer Eintrittskarte bekommen Sie dort zehn Prozent Rabatt. So, und jetzt folgen Sie mir bitte!`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слушаете текст один раз. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Was dürfen die Besucher im Museum nicht?',
              options: ['Taschen mitnehmen', 'Mit Blitz fotografieren', 'Die Schließfächer benutzen'],
              answer: 1,
              explanationRu: '«Fotografieren ist erlaubt, aber bitte ohne Blitz».',
            },
            {
              kind: 'mc',
              question: 'Was erfährt man über die erste elektrische Waschmaschine?',
              options: [
                'Sie war für normale Familien zu teuer.',
                'Man konnte damit nur montags waschen.',
                'Sie wurde 1958 gebaut.',
              ],
              answer: 0,
              explanationRu: '«…war für normale Familien viel zu teuer», стоила как три месячные зарплаты. 1958 — это год холодильника.',
            },
            {
              kind: 'mc',
              question: 'Wie hat man Lebensmittel vor dem Kühlschrank kühl gehalten?',
              options: ['Im Garten', 'Im Keller oder mit Eis', 'In der Waschküche'],
              answer: 1,
              explanationRu: '«Vorher hat man Lebensmittel im Keller oder in einem Kasten mit Eis kühl gehalten».',
            },
            {
              kind: 'mc',
              question: 'Was kann man im zweiten Stock machen?',
              options: [
                'Einen Roboter steuern',
                'Ein altes Telefon ausprobieren',
                'Ein Smartphone reparieren',
              ],
              answer: 1,
              explanationRu: 'На втором этаже есть интерактивная станция: можно позвонить с телефона с дисковым номеронабирателем.',
            },
            {
              kind: 'mc',
              question: 'Was gilt für die Sonderausstellung?',
              options: [
                'Sie kostet extra Eintritt.',
                'Sie ist im Erdgeschoss.',
                'Man kann sie nur noch kurze Zeit sehen.',
              ],
              answer: 2,
              explanationRu: '«Sie ist nur noch bis Ende des Monats geöffnet».',
            },
          ],
        },
      ],
    },
    {
      title: 'Radiodiskussion: Smart Home – Komfort oder Risiko?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Julia Brenner',
        B: 'Herr Yilmaz, Elektriker',
        C: 'Frau Kowalski, Verbraucherberaterin',
      },
      situation: 'Sie hören eine Diskussion im Radio zum Thema „Intelligente Technik im Haushalt“.',
      text: `A: Guten Abend und willkommen zu „Thema am Abend“. Lampen, die man per App einschaltet, Heizungen, die selbst merken, wann wir nach Hause kommen – das „Smart Home“ wird immer beliebter. Ich persönlich habe da ehrlich gesagt noch Bedenken. Bei mir sind heute Herr Yilmaz, Elektriker, und Frau Kowalski von der Verbraucherberatung. Herr Yilmaz, Sie installieren solche Systeme. Was wollen Ihre Kunden?
B: Vor allem Bequemlichkeit und Energie sparen. Wenn die Heizung automatisch herunterfährt, sobald niemand zu Hause ist, spart man schnell zehn Prozent. Und für ältere Menschen ist die Technik eine große Erleichterung: Sie müssen zum Beispiel nachts nicht mehr nach dem Lichtschalter suchen.
C: Das stimmt schon. Aber viele Menschen unterschätzen die Kosten. Die Geräte sind teuer, und nach ein paar Jahren gibt es oft keine Updates mehr. Dann muss man alles neu kaufen.
A: Frau Kowalski, was ist mit dem Datenschutz?
C: Das ist für mich das größte Problem. Die Geräte sammeln sehr viele Daten: wann man schläft, wann man das Haus verlässt. Wer diese Informationen hat, weiß fast alles über uns.
B: Da muss ich widersprechen. Man kann die meisten Systeme auch ohne Internet betreiben. Dann bleiben die Daten zu Hause. Man muss sich nur beim Kauf gut beraten lassen.
A: Und wenn die Technik einmal nicht funktioniert? Ich stelle mir vor, ich stehe vor der Haustür, und die App stürzt ab …
B: Deshalb empfehle ich immer: Ein normaler Schlüssel und ein normaler Lichtschalter sollten bleiben. Technik soll das Leben leichter machen, nicht komplizierter.
C: Da sind wir einer Meinung. Mein Rat an die Hörer: Fangen Sie klein an, zum Beispiel mit einem intelligenten Heizungsthermostat, und lesen Sie vor dem Kauf unabhängige Tests.
A: Vielen Dank Ihnen beiden. Ich glaube, ich probiere es tatsächlich mit dem Thermostat.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слушаете дискуссию два раза. Кто что говорит? Соотнесите высказывания.',
          options: ['Moderatorin Julia Brenner', 'Herr Yilmaz', 'Frau Kowalski'],
          items: [
            { kind: 'match', prompt: 'Ich war bisher eher skeptisch.', answer: 0, explanationRu: 'Ведущая: «Ich persönlich habe da ehrlich gesagt noch Bedenken».' },
            { kind: 'match', prompt: 'Mit einer automatischen Heizung kann man Energie sparen.', answer: 1, explanationRu: 'Йылмаз: отопление само снижается, экономия около 10 %.' },
            { kind: 'match', prompt: 'Manche Geräte bekommen schon nach wenigen Jahren keine Software mehr.', answer: 2, explanationRu: 'Ковальски: «…nach ein paar Jahren gibt es oft keine Updates mehr».' },
            { kind: 'match', prompt: 'Die Geräte wissen sehr viel über unseren Alltag.', answer: 2, explanationRu: 'Ковальски: устройства знают, когда мы спим и уходим из дома.' },
            { kind: 'match', prompt: 'Viele Systeme funktionieren auch ohne Internetverbindung.', answer: 1, explanationRu: 'Йылмаз: «Man kann die meisten Systeme auch ohne Internet betreiben».' },
            { kind: 'match', prompt: 'Man sollte die alten, einfachen Lösungen nicht ganz abschaffen.', answer: 1, explanationRu: 'Йылмаз советует оставить обычный ключ и обычный выключатель.' },
            { kind: 'match', prompt: 'Vor dem Kauf sollte man neutrale Testergebnisse lesen.', answer: 2, explanationRu: 'Ковальски: «…lesen Sie vor dem Kauf unabhängige Tests».' },
            { kind: 'match', prompt: 'Ich werde selbst ein Gerät ausprobieren.', answer: 0, explanationRu: 'Ведущая в конце: «Ich glaube, ich probiere es tatsächlich mit dem Thermostat».' },
          ],
        },
      ],
    },
  ],
};
