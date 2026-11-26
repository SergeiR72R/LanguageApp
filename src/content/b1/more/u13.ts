import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Ihr ___ den neuen Lehrer bestimmt mögen.',
      options: ['werden', 'werdet', 'wird', 'wirst'],
      answer: 1,
      explanationRu: 'ihr → werdet. Сравните: wir/sie werden, du wirst, er wird.',
    },
    {
      type: 'choice',
      prompt: 'Ich ___ später Lehrerin werden. (= Я хочу стать учительницей.)',
      options: ['werde', 'will', 'wird'],
      answer: 1,
      explanationRu: 'Ловушка: «хочу» = will (модальный глагол wollen). Ich werde … werden означало бы «я стану». wird — форма для er/sie/es.',
    },
    {
      type: 'choice',
      prompt: 'Welche Funktion hat „werden“ in diesem Satz? – Im Deutschkurs wird viel gesprochen.',
      options: ['Vollverb („становиться“)', 'Futur I', 'Passiv', 'Konjunktiv II'],
      answer: 2,
      explanationRu: 'wird + Partizip II (gesprochen) = пассив: «На курсе много говорят».',
    },
    {
      type: 'choice',
      prompt: 'Welche Funktion hat „werden“ in diesem Satz? – Es ist schon acht Uhr, Lisa wird schon zu Hause sein.',
      options: ['Futur I: Versprechen', 'Futur I: Vermutung', 'Passiv', 'Vollverb („становиться“)'],
      answer: 1,
      explanationRu: 'wird + инфинитив (sein) о настоящем моменте = предположение: «Лиза, наверное, уже дома».',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist ein Versprechen?',
      options: [
        'Er wird wohl im Stau stehen.',
        'Es wird langsam dunkel.',
        'Ich werde ab morgen pünktlich kommen, ganz bestimmt!',
        'Die Hefte werden am Ende der Stunde eingesammelt.',
      ],
      answer: 2,
      explanationRu: 'Обещание — Futur I от первого лица с «ganz bestimmt». Остальное: предположение, «становиться», пассив.',
    },
    {
      type: 'gap',
      prompt: 'Nach dem Studium möchte Tobias Tierarzt ___.',
      answers: ['werden'],
      hintRu: 'стать',
      explanationRu: 'werden как полнозначный глагол «становиться»; после модального möchte — инфинитив в конце.',
    },
    {
      type: 'gap',
      prompt: 'Es ___ schon dunkel, wir sollten nach Hause gehen.',
      answers: ['wird'],
      hintRu: 'werden',
      explanationRu: 'werden + прилагательное (dunkel) = «становиться»: Es wird dunkel — темнеет.',
    },
    {
      type: 'gap',
      prompt: 'Seit sie den Intensivkurs macht, ist ihr Deutsch viel besser ___.',
      answers: ['geworden'],
      hintRu: 'werden, Perfekt',
      explanationRu: 'Перфект от werden «становиться» — ist geworden. Не путайте с worden (только в пассиве в перфекте).',
    },
    {
      type: 'gap',
      prompt: 'Laut Wetterbericht ___ es morgen den ganzen Tag regnen.',
      answers: ['wird'],
      hintRu: 'werden',
      explanationRu: 'Прогноз → Futur I: wird + инфинитив regnen в конце.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz klingt im Alltag am natürlichsten? (= Завтра я буду дома.)',
      options: ['Morgen werde ich zu Hause bin.', 'Morgen bin ich zu Hause.', 'Morgen ich werde zu Hause sein.'],
      answer: 1,
      explanationRu: 'Если есть указание времени (morgen), немцы обычно используют Präsens. Варианты 1 и 3 грамматически неверны.',
    },
    {
      type: 'gap',
      prompt: 'Weißt du, ob Lisa morgen zum Unterricht kommen ___?',
      answers: ['wird'],
      hintRu: 'werden',
      explanationRu: 'Повторение (косвенный вопрос с ob): спрягаемый глагол стоит в конце, после инфинитива: kommen wird.',
    },
    {
      type: 'gap',
      prompt: 'Das alte Schulgebäude ___ im Jahr 1912 gebaut.',
      answers: ['wurde'],
      hintRu: 'Passiv Präteritum',
      explanationRu: 'Повторение юнита 9: пассив в претерите — wurde + Partizip II (gebaut).',
    },
    {
      type: 'gap',
      prompt: 'Wenn ich mehr Zeit hätte, ___ ich einen Spanischkurs machen.',
      answers: ['würde'],
      explanationRu: 'Повторение юнита 8: нереальное условие → Konjunktiv II: würde + инфинитив. Это тоже форма от werden.',
    },
    {
      type: 'order',
      words: ['Ich', 'glaube,', 'dass', 'du', 'die', 'Prüfung', 'bestehen', 'wirst.'],
      translationRu: 'Я думаю, что ты сдашь экзамен.',
      explanationRu: 'Придаточное с dass: в конце сначала инфинитив (bestehen), потом спрягаемое wirst.',
    },
    {
      type: 'order',
      words: ['Nächste', 'Woche', 'wird', 'unsere', 'Lehrerin', 'die', 'Noten', 'bekannt', 'geben.'],
      translationRu: 'На следующей неделе наша учительница объявит оценки.',
      explanationRu: 'Обстоятельство времени на 1-м месте → wird на 2-м месте, затем подлежащее. Инфинитив bekannt geben — в конце.',
    },
    {
      type: 'order',
      words: ['Wenn', 'ich', 'die', 'Prüfung', 'bestehe,', 'werde', 'ich', 'eine', 'Party', 'machen.'],
      translationRu: 'Если я сдам экзамен, я устрою вечеринку.',
      explanationRu: 'Придаточное с wenn стоит первым → главное начинается со спрягаемого werde («глагол — запятая — глагол»); инфинитив machen в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Переделайте предложение в Futur I.',
      prompt: 'Am Montag fängt der neue Kurs an.',
      answers: ['Am Montag wird der neue Kurs anfangen.', 'Der neue Kurs wird am Montag anfangen.'],
      explanationRu: 'Отделяемый глагол в Futur I снова «склеивается» в инфинитив и стоит в конце: wird … anfangen.',
    },
    {
      type: 'transform',
      instructionRu: 'Выразите предположение с помощью Futur I (можно добавить wohl).',
      prompt: 'Ich vermute, dass Tom gerade in der Bibliothek ist.',
      answers: [
        'Tom wird gerade in der Bibliothek sein.',
        'Tom wird wohl gerade in der Bibliothek sein.',
        'Er wird wohl gerade in der Bibliothek sein.',
      ],
      explanationRu: 'Предположение о настоящем: wird + инфинитив sein в конце. Ich vermute, dass … заменяется на Futur I (+ wohl).',
    },
    {
      type: 'transform',
      instructionRu: 'Начните с «Ich verspreche dir, dass …».',
      prompt: 'Ich werde dir bei den Hausaufgaben helfen.',
      answers: ['Ich verspreche dir, dass ich dir bei den Hausaufgaben helfen werde.'],
      explanationRu: 'В придаточном с dass werde уходит в самый конец, после инфинитива helfen.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist richtig? (= Завтра мне придётся работать дольше.)',
      options: [
        'Ich werde morgen länger müssen arbeiten.',
        'Ich werde morgen länger arbeiten müssen.',
        'Ich werde morgen müssen länger arbeiten.',
      ],
      answer: 1,
      explanationRu: 'Futur I с модальным глаголом: в конце стоят два инфинитива — смысловой глагол, затем модальный: arbeiten müssen.',
    },
  ],
  reading: [
    {
      title: 'Noten in der Grundschule abschaffen?',
      textType: 'Leserbriefe',
      texts: [
        {
          label: 'Claudia',
          body: 'Meine Tochter hatte in der zweiten Klasse vor jeder Mathearbeit Bauchschmerzen. Mit acht Jahren sollte man keine Angst vor Noten haben müssen. Außerdem sagt mir ein ausführlicher Bericht der Lehrerin viel mehr über mein Kind als eine Drei.',
        },
        {
          label: 'Jens',
          body: 'Ich verstehe die ganze Diskussion nicht. Kinder wollen wissen, wo sie stehen, und eine Note ist klar und einfach. Im Leben wird man später auch ständig bewertet. Warum sollen Kinder das erst mit zehn Jahren lernen?',
        },
        {
          label: 'Rüdiger',
          body: 'Früher war nicht alles besser, das gebe ich zu. Aber die Berichte, die meine Enkel bekommen, sind oft so vorsichtig formuliert, dass die Eltern gar nicht merken, wenn ihr Kind Probleme hat. Bei einer Fünf merkt man das sofort. Ich bin dafür, die Noten zu behalten.',
        },
        {
          label: 'Frau Okonkwo',
          body: 'Ich bin Grundschullehrerin. An unserer Schule gibt es bis zur dritten Klasse nur Lernberichte und Gespräche mit den Eltern. Die Kinder vergleichen sich weniger und helfen sich mehr gegenseitig. Ich möchte nie wieder zurück zu den Ziffernnoten.',
        },
        {
          label: 'Mila',
          body: 'Ich bin 16 und hatte in der Grundschule fast nur Einsen. Trotzdem finde ich Noten für kleine Kinder nicht gut. Meine beste Freundin hat damals immer schlechte Noten bekommen und irgendwann gar keine Lust mehr auf Schule gehabt. Ich glaube, dass Noten so kleinen Kindern mehr schaden als helfen.',
        },
        {
          label: 'Herr Albers',
          body: 'Als Leiter eines Gymnasiums sehe ich das kritisch. Wenn die Kinder nach der vierten Klasse zu uns kommen, brauchen wir klare Informationen über ihre Leistungen. Und ohne Noten ist es für die Eltern auch schwieriger zu entscheiden, welche Schule die richtige ist. Deshalb halte ich nichts von der Idee.',
        },
        {
          label: 'Tanja',
          body: 'Ich war zuerst skeptisch, weil ich selbst mit Noten groß geworden bin. Aber seit mein Sohn auf eine Schule ohne Noten geht, geht er endlich wieder gern hin. Wichtig ist nur, dass die Lehrer den Eltern regelmäßig und ehrlich sagen, wie es läuft.',
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Kommentare zu einem Zeitungsartikel. In einigen Bundesländern wird diskutiert, ob es in den ersten Grundschuljahren keine Noten mehr geben soll. Ist die Person für die Abschaffung der Noten?',
          instructionRu:
            'Прочитайте комментарии к газетной статье об отмене оценок в первых классах начальной школы. Выступает ли человек за отмену оценок?',
          tfLabels: ['Ja', 'Nein'],
          items: [
            { kind: 'tf', statement: 'Claudia', answer: true, explanationRu: 'Да: восьмилетние дети не должны бояться оценок, а подробный отчёт говорит ей больше, чем «тройка».' },
            { kind: 'tf', statement: 'Jens', answer: false, explanationRu: 'Нет: оценка — это ясно и просто, и в жизни всех постоянно оценивают.' },
            { kind: 'tf', statement: 'Rüdiger', answer: false, explanationRu: 'Ловушка: «Früher war nicht alles besser», но вывод — «Ich bin dafür, die Noten zu behalten».' },
            { kind: 'tf', statement: 'Frau Okonkwo', answer: true, explanationRu: 'Да: в её школе до 3-го класса нет оценок, и она «nie wieder zurück» к цифровым отметкам.' },
            { kind: 'tf', statement: 'Mila', answer: true, explanationRu: 'Ловушка: у неё самой были отличные оценки, но она считает, что маленьким детям оценки больше вредят, чем помогают.' },
            { kind: 'tf', statement: 'Herr Albers', answer: false, explanationRu: 'Нет: гимназии нужна ясная информация об успеваемости — «Deshalb halte ich nichts von der Idee».' },
            { kind: 'tf', statement: 'Tanja', answer: true, explanationRu: 'Да: сначала сомневалась, но теперь сын снова с удовольствием ходит в школу без оценок.' },
          ],
        },
      ],
    },
    {
      title: 'Teilnahmebedingungen der Volkshochschule Neustadt',
      textType: 'Informationstext',
      texts: [
        {
          heading: 'Volkshochschule Neustadt – Teilnahmebedingungen',
          body: `Anmeldung
Sie können sich online, telefonisch oder persönlich in unserer Geschäftsstelle anmelden. Jede Anmeldung ist verbindlich. Für Sprachkurse ab Niveau A2 machen neue Teilnehmerinnen und Teilnehmer vorher einen kostenlosen Einstufungstest. Wer schon einen Kurs bei uns besucht hat, braucht keinen Test.

Kursgebühren
Die Kursgebühr wird zwei Wochen vor Kursbeginn von Ihrem Konto abgebucht. Schüler, Studierende und Menschen mit geringem Einkommen bekommen 30 Prozent Ermäßigung, wenn sie einen Nachweis vorlegen. Lehrbücher und andere Materialien sind nicht in der Gebühr enthalten.

Abmeldung
Bis zehn Tage vor Kursbeginn können Sie sich kostenlos abmelden. Danach müssen Sie die volle Gebühr bezahlen – außer Sie nennen uns eine andere Person, die Ihren Platz übernimmt.

Kursausfall
Ein Kurs findet nur statt, wenn sich mindestens acht Personen anmelden. Ist das nicht der Fall, informieren wir Sie spätestens drei Tage vor dem ersten Termin, und Sie bekommen die Gebühr vollständig zurück. Fällt eine Stunde wegen Krankheit der Kursleitung aus, wird sie am Ende des Kurses nachgeholt.

Bescheinigungen
Wer an mindestens 80 Prozent der Termine teilgenommen hat, bekommt auf Wunsch eine Teilnahmebestätigung. Prüfungen mit Zertifikat (z. B. für Sprachkurse) kosten extra und werden separat angeboten.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text und die Aufgaben. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Прочитайте текст и задания. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Einen Einstufungstest machen …',
              options: ['alle Teilnehmer von Sprachkursen.', 'neue Teilnehmer von Sprachkursen ab Niveau A2.', 'nur Personen, die eine Ermäßigung möchten.'],
              answer: 1,
              explanationRu: '«Für Sprachkurse ab Niveau A2 machen neue Teilnehmerinnen und Teilnehmer … einen Einstufungstest»; кто уже учился здесь, тест не пишет.',
            },
            {
              kind: 'mc',
              question: 'Sie melden sich eine Woche vor Kursbeginn ab. Was passiert?',
              options: [
                'Sie bekommen die Hälfte der Gebühr zurück.',
                'Sie müssen nichts bezahlen.',
                'Sie müssen alles bezahlen, wenn niemand Ihren Platz übernimmt.',
              ],
              answer: 2,
              explanationRu: 'Бесплатно — только до 10 дней до начала. Позже — полная плата, «außer Sie nennen uns eine andere Person».',
            },
            {
              kind: 'mc',
              question: 'Wenn zu wenige Personen angemeldet sind, …',
              options: ['bekommen Sie die ganze Gebühr zurück.', 'kommen Sie automatisch in einen anderen Kurs.', 'bekommen Sie einen Gutschein für das nächste Semester.'],
              answer: 0,
              explanationRu: 'Курс не состоится при менее чем 8 участниках, и «Sie bekommen die Gebühr vollständig zurück».',
            },
            {
              kind: 'mc',
              question: 'Eine Teilnahmebestätigung bekommt man, …',
              options: ['wenn man eine Prüfung bestanden hat.', 'wenn man oft genug im Kurs war und danach fragt.', 'automatisch am Ende jedes Kurses.'],
              answer: 1,
              explanationRu: 'Нужно посетить не менее 80 % занятий, и справку выдают «auf Wunsch» — по запросу.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Tag der offenen Tür am Abendgymnasium',
      kind: 'monolog',
      situation: 'Sie hören eine Führung durch eine Schule für Erwachsene.',
      text: `Guten Abend, meine Damen und Herren, und herzlich willkommen am Abendgymnasium Lindenstraße! Mein Name ist Werner Hollmann, ich bin der Schulleiter. Schön, dass so viele von Ihnen gekommen sind. Ich werde Ihnen in den nächsten zwanzig Minuten unsere Schule zeigen, und danach werden Sie Zeit für Ihre Fragen haben.

Zuerst ein paar Worte zu uns. Bei uns können Erwachsene das Abitur nachholen – neben dem Beruf. Unsere Schülerinnen und Schüler sind zwischen 19 und 55 Jahre alt, und die meisten arbeiten tagsüber. Der Unterricht beginnt von Montag bis Donnerstag um halb sechs und endet um Viertel vor zehn. Freitags ist frei.

Wir stehen hier im Erdgeschoss. Rechts sehen Sie das Sekretariat. Dort bekommen Sie auch die Anmeldeformulare. Anmeldeschluss für das nächste Schuljahr ist der 1. März.

Gehen wir jetzt in den ersten Stock. Hier sind unsere Klassenzimmer und der Computerraum. Den Computerraum dürfen Sie auch am Samstagvormittag zum Lernen benutzen; den Schlüssel bekommen Sie beim Hausmeister.

Und hier links ist unsere Cafeteria. Ehrlich gesagt ist sie im Moment noch ziemlich klein, aber im Sommer wird sie renoviert und vergrößert. Ab Herbst werden Sie hier dann auch warme Mahlzeiten bekommen – bisher gibt es nur belegte Brötchen und Kaffee.

Viele fragen mich: Was kostet das Ganze? Die Antwort: Der Unterricht ist kostenlos. Nur die Bücher müssen Sie selbst kaufen. Wer finanzielle Unterstützung braucht, kann sich im Sekretariat beraten lassen.

Zum Schluss noch etwas Wichtiges: Das Abitur am Abendgymnasium dauert drei Jahre. Das ist eine lange Zeit, und es wird bestimmt Momente geben, in denen Sie aufgeben wollen. Deshalb hat jede Klasse eine Mentorin oder einen Mentor, mit dem Sie über Probleme sprechen können. So, und jetzt beantworte ich gern Ihre Fragen.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören den Text einmal. Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите текст один раз. Выберите правильный ответ a, b или c.',
          items: [
            {
              kind: 'mc',
              question: 'Wer besucht das Abendgymnasium?',
              options: ['Vor allem Jugendliche unter 18 Jahren.', 'Erwachsene, die meistens tagsüber arbeiten.', 'Nur Menschen, die schon Abitur haben.'],
              answer: 1,
              explanationRu: 'Ученикам от 19 до 55 лет, «die meisten arbeiten tagsüber».',
            },
            {
              kind: 'mc',
              question: 'Wo bekommt man die Anmeldeformulare?',
              options: ['Beim Hausmeister.', 'Im Computerraum.', 'Im Sekretariat.'],
              answer: 2,
              explanationRu: '«Rechts sehen Sie das Sekretariat. Dort bekommen Sie auch die Anmeldeformulare.» У завхоза — только ключ от компьютерного класса.',
            },
            {
              kind: 'mc',
              question: 'Was kann man am Samstag machen?',
              options: ['Im Computerraum lernen.', 'Am Unterricht teilnehmen.', 'In der Cafeteria frühstücken.'],
              answer: 0,
              explanationRu: '«Den Computerraum dürfen Sie auch am Samstagvormittag zum Lernen benutzen.»',
            },
            {
              kind: 'mc',
              question: 'Was wird sich in der Cafeteria ändern?',
              options: ['Sie wird im Sommer geschlossen.', 'Man wird dort warmes Essen bekommen.', 'Der Kaffee wird billiger.'],
              answer: 1,
              explanationRu: 'Летом её отремонтируют и расширят, а с осени будут «warme Mahlzeiten».',
            },
            {
              kind: 'mc',
              question: 'Was muss man selbst bezahlen?',
              options: ['Nur die Bücher.', 'Eine Gebühr pro Halbjahr.', 'Den Unterricht und die Bücher.'],
              answer: 0,
              explanationRu: '«Der Unterricht ist kostenlos. Nur die Bücher müssen Sie selbst kaufen.»',
            },
          ],
        },
      ],
    },
    {
      title: 'Thema am Abend: Weiterbildung – Pflicht oder Privatsache?',
      kind: 'discussion',
      speakers: { A: 'Moderatorin', B: 'Herr Demir, Personalleiter', C: 'Frau Lorenz, Krankenpflegerin' },
      situation: 'Sie hören eine Diskussion im Radio. Die Moderatorin diskutiert mit Herrn Demir und Frau Lorenz über Weiterbildung.',
      text: `A: Guten Abend und willkommen zu „Thema am Abend“. Heute geht es um Weiterbildung. Früher hat man einen Beruf gelernt und ihn bis zur Rente ausgeübt. Heute heißt es: Wer nicht ständig dazulernt, wird es auf dem Arbeitsmarkt schwer haben. Bei mir im Studio sind Herr Demir, Personalleiter in einem Logistikunternehmen, und Frau Lorenz, Krankenpflegerin. Herr Demir, wie wichtig ist Weiterbildung für Ihre Firma?
B: Sehr wichtig. In der Logistik ändert sich durch die Digitalisierung fast jedes Jahr etwas. Vor zehn Jahren haben unsere Lagerarbeiter noch mit Papierlisten gearbeitet, heute arbeiten sie mit Scannern und Tablets. Wer da nicht mitlernt, wird irgendwann nicht mehr mitkommen.
A: Und wer bezahlt die Kurse?
B: Wenn die Weiterbildung etwas mit der Arbeit zu tun hat, übernehmen wir die Kosten komplett. Und die Kurse finden bei uns während der Arbeitszeit statt. Das ist für mich die Aufgabe des Arbeitgebers.
A: Frau Lorenz, Sie machen gerade selbst eine Weiterbildung.
C: Genau, zur Praxisanleiterin. Danach werde ich die Auszubildenden auf unserer Station betreuen. Das ist eine tolle Aufgabe, aber die Weiterbildung kostet viel Kraft. Der Unterricht ist an meinen freien Tagen, und ich habe zwei Kinder.
A: Unterstützt Ihr Arbeitgeber Sie?
C: Das Krankenhaus bezahlt den Kurs, ja. Aber freie Tage bekomme ich dafür nicht. Und so ist es leider in vielen Betrieben: Die Firmen wollen gut ausgebildete Leute, aber die Zeit soll man selbst investieren.
A: Herr Demir, sollte Weiterbildung für alle Pflicht sein? In manchen Berufen ist sie das ja schon, zum Beispiel bei Ärzten.
B: Für bestimmte Berufe ja. Aber eine allgemeine Pflicht halte ich für falsch. Man kann niemanden zum Lernen zwingen. Wer keine Lust hat, sitzt im Kurs und schaut nur auf die Uhr. Wir setzen lieber auf Motivation, zum Beispiel mit mehr Gehalt nach einer erfolgreichen Weiterbildung.
C: Da muss ich widersprechen. Ohne Pflicht machen nur die Leute Weiterbildungen, die sowieso schon motiviert sind. Gerade ältere Kollegen haben oft Angst vor Prüfungen und melden sich deshalb nie an. Eine Pflicht mit fester Zeit dafür würde ihnen helfen.
A: Interessant. Ich selbst habe übrigens nach dem Studium nie wieder einen Kurs gemacht – und ehrlich gesagt habe ich deswegen manchmal ein schlechtes Gewissen. Was raten Sie Menschen wie mir?
B: Klein anfangen! Es muss nicht gleich eine Weiterbildung über zwei Jahre sein. Ein Online-Kurs am Abend reicht für den Anfang.
C: Und am besten mit Kollegen zusammen lernen. Allein gibt man viel schneller auf.
A: Vielen Dank Ihnen beiden. Nach den Nachrichten sprechen wir mit unseren Hörerinnen und Hörern.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören die Diskussion zweimal. Wer sagt was? Ordnen Sie die Aussagen zu.',
          instructionRu: 'Вы слышите дискуссию два раза. Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Herr Demir', 'Frau Lorenz'],
          items: [
            { kind: 'match', prompt: 'Ohne ständiges Lernen findet man heute schwerer eine gute Stelle.', answer: 0, explanationRu: 'Модератор во вступлении: «Wer nicht ständig dazulernt, wird es auf dem Arbeitsmarkt schwer haben».' },
            { kind: 'match', prompt: 'Neue Technik hat die Arbeit in meiner Branche stark verändert.', answer: 1, explanationRu: 'Господин Демир: раньше бумажные списки, сегодня сканеры и планшеты.' },
            { kind: 'match', prompt: 'Ich muss für meine Weiterbildung meine Freizeit nutzen.', answer: 2, explanationRu: 'Госпожа Лоренц: занятия в её свободные дни, выходных за это не дают.' },
            { kind: 'match', prompt: 'Bei uns lernen die Mitarbeiter während der Arbeitszeit.', answer: 1, explanationRu: 'Господин Демир: «die Kurse finden bei uns während der Arbeitszeit statt».' },
            { kind: 'match', prompt: 'Eine allgemeine Pflicht zur Weiterbildung bringt nichts.', answer: 1, explanationRu: 'Господин Демир: «eine allgemeine Pflicht halte ich für falsch» — никого нельзя заставить учиться.' },
            { kind: 'match', prompt: 'Viele ältere Beschäftigte melden sich aus Angst nicht zu Kursen an.', answer: 2, explanationRu: 'Госпожа Лоренц: пожилые коллеги боятся экзаменов и поэтому не записываются.' },
            { kind: 'match', prompt: 'Ich habe seit dem Ende meines Studiums keine Weiterbildung gemacht.', answer: 0, explanationRu: 'Модератор признаётся, что после учёбы не прошла ни одного курса.' },
            { kind: 'match', prompt: 'Gemeinsam mit anderen hält man beim Lernen länger durch.', answer: 2, explanationRu: 'Госпожа Лоренц: «am besten mit Kollegen zusammen lernen. Allein gibt man viel schneller auf».' },
          ],
        },
      ],
    },
  ],
};
