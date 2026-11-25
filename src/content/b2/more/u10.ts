import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: '___ die Temperaturen weiter, werden viele Gletscher in den Alpen verschwinden.',
      options: ['Steigen', 'Falls', 'Steigt', 'Wenn'],
      answer: 0,
      explanationRu: 'Условие без wenn: спрягаемый глагол на первом месте и согласуется с подлежащим во мн. числе (die Temperaturen steigen). Falls/Wenn не подходят: в части условия нет глагола в конце.',
    },
    {
      type: 'choice',
      prompt: 'Wir pflanzen am Samstag mit der Nachbarschaft Bäume, ___ das Wetter mitspielt.',
      options: ['es sei denn,', 'als ob', 'sofern', 'als'],
      answer: 2,
      explanationRu: 'sofern — «при условии что», глагол в конце (mitspielt). Es sei denn требует порядка слов главного предложения и имеет отрицательный смысл.',
    },
    {
      type: 'choice',
      prompt: 'Er fährt jeden Tag mit dem SUV zur Arbeit, als ob es keinen Klimawandel ___.',
      options: ['gäbe', 'gibt', 'geben', 'gegeben'],
      answer: 0,
      explanationRu: 'Нереальное сравнение: als ob + Konjunktiv II в конце предложения: es gäbe (от es gibt).',
    },
    {
      type: 'choice',
      prompt: 'Welche Fortsetzung ist korrekt? Wir erreichen die Klimaziele nicht, ___',
      options: [
        'es sei denn, alle Länder mithelfen.',
        'es sei denn, alle Länder helfen mit.',
        'es sei denn, alle Länder helfen nicht mit.',
        'als ob alle Länder mithelfen.',
      ],
      answer: 1,
      explanationRu: 'После es sei denn — порядок главного предложения (глагол на втором месте: helfen … mit). Отрицание nicht не нужно: es sei denn уже значит «если только не».',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Wäre der Damm höher gewesen, hätte es keine Überschwemmung gegeben.“?',
      options: [
        'Der Damm war hoch genug.',
        'Man wird den Damm bald höher bauen.',
        'Es gab keine Überschwemmung.',
        'Der Damm war nicht hoch genug, und es kam zu einer Überschwemmung.',
      ],
      answer: 3,
      explanationRu: 'Нереальное условие в прошлом (Konjunktiv II Plusquamperfekt без wenn): на самом деле дамба была низкой и наводнение произошло.',
    },
    {
      type: 'choice',
      prompt: 'Die Luft in der Innenstadt roch so stark nach Rauch, als ___ jemand ein Feuer gemacht.',
      options: ['hat', 'ob hätte', 'wenn hätte', 'hätte'],
      answer: 3,
      explanationRu: 'После als без ob спрягаемый глагол стоит сразу: als hätte jemand … gemacht. «Als ob hätte» — ошибка: после als ob глагол уходит в конец.',
    },
    {
      type: 'gap',
      prompt: '___ Sie Fragen zur Mülltrennung haben, wenden Sie sich bitte an das Umweltamt.',
      answers: ['Sollten'],
      hintRu: '«если вдруг», глагол на первом месте',
      explanationRu: 'Sollte(n) + Infinitiv на первом месте = «если вдруг / если у вас возникнут». Типично для официальных текстов.',
    },
    {
      type: 'gap',
      prompt: 'Wird nicht sofort gehandelt, ___ sterben bis 2050 Tausende Tierarten aus.',
      answers: ['so', 'dann'],
      explanationRu: 'После условия без wenn главное предложение часто начинается со so или dann, за ними сразу спрягаемый глагол (sterben).',
    },
    {
      type: 'gap',
      prompt: 'Der Konzernchef tut so, als ___ er von dem Ölunfall nichts gewusst.',
      answers: ['hätte'],
      explanationRu: 'Нереальное сравнение о прошлом: als + hätte … gewusst (глагол сразу после als).',
    },
    {
      type: 'gap',
      prompt: '___ das Projekt genug Fördergeld bekommt, wird die Solaranlage im Frühjahr gebaut.',
      answers: ['Sofern', 'Falls', 'Wenn'],
      hintRu: '«при условии что»',
      explanationRu: 'sofern — «при условии что»; глагол стоит в конце придаточного (bekommt). Возможны также falls/wenn.',
    },
    {
      type: 'gap',
      prompt: 'Die Kinder rannten aus dem Wald, als ob sie einen Bären gesehen ___.',
      answers: ['hätten'],
      explanationRu: 'als ob + Konjunktiv II Plusquamperfekt: спрягаемый глагол hätten стоит в самом конце.',
    },
    {
      type: 'gap',
      prompt: 'Der Bericht der Regierung klingt, als ___ die Klimakrise längst vorbei.',
      answers: ['sei', 'wäre'],
      explanationRu: 'После als (без ob) глагол сразу; в письменной речи возможен Konjunktiv I (sei) или Konjunktiv II (wäre).',
    },
    {
      type: 'gap',
      prompt: '___ großer Hitze sollten ältere Menschen viel Wasser trinken und die Mittagssonne meiden.',
      answers: ['Bei'],
      hintRu: 'повторение: именной стиль',
      explanationRu: 'Условие можно выразить именной группой: Wenn es sehr heiß ist → bei großer Hitze (bei + Dativ).',
    },
    {
      type: 'order',
      words: ['Sollte', 'der Strom', 'ausfallen,', 'schaltet sich', 'der Generator', 'automatisch', 'ein.'],
      translationRu: 'Если вдруг пропадёт электричество, генератор включится автоматически.',
      explanationRu: 'Sollte на первом месте, инфинитив ausfallen в конце условной части; главное предложение начинается со спрягаемого глагола.',
    },
    {
      type: 'order',
      words: ['Hätten', 'wir', 'früher', 'gehandelt,', 'wären', 'die Schäden', 'geringer', 'gewesen.'],
      translationRu: 'Если бы мы действовали раньше, ущерб был бы меньше.',
      explanationRu: 'Нереальное условие в прошлом без wenn: Hätten … gehandelt, wären … gewesen. Повторение: Konjunktiv II прошедшего времени.',
    },
    {
      type: 'order',
      words: ['Es', 'sieht', 'so aus,', 'als ob', 'der Sommer', 'nie', 'enden', 'würde.'],
      translationRu: 'Похоже, будто лето никогда не закончится.',
      explanationRu: 'После als ob спрягаемый глагол (würde) стоит в конце придаточного.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение с es sei denn.',
      prompt: 'Wenn die Industrie ihre Emissionen nicht senkt, wird das Klimaziel verfehlt.',
      answers: ['Das Klimaziel wird verfehlt, es sei denn, die Industrie senkt ihre Emissionen.'],
      explanationRu: 'wenn … nicht → es sei denn (без nicht!). Сначала главная мысль, затем es sei denn и предложение с прямым порядком слов.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите условное предложение без wenn.',
      prompt: 'Wenn ich mehr Zeit gehabt hätte, hätte ich mich in der Umweltgruppe engagiert.',
      answers: [
        'Hätte ich mehr Zeit gehabt, hätte ich mich in der Umweltgruppe engagiert.',
        'Hätte ich mehr Zeit gehabt, so hätte ich mich in der Umweltgruppe engagiert.',
        'Hätte ich mehr Zeit gehabt, dann hätte ich mich in der Umweltgruppe engagiert.',
      ],
      explanationRu: 'Wenn опускается, спрягаемый глагол hätte переходит на первое место; gehabt остаётся в конце условной части.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените falls конструкцией с sollte (глагол на первом месте).',
      prompt: 'Falls der Fluss über die Ufer tritt, werden die Anwohner evakuiert.',
      answers: [
        'Sollte der Fluss über die Ufer treten, werden die Anwohner evakuiert.',
        'Sollte der Fluss über die Ufer treten, so werden die Anwohner evakuiert.',
        'Sollte der Fluss über die Ufer treten, dann werden die Anwohner evakuiert.',
      ],
      explanationRu: 'Sollte на первом месте + инфинитив (treten) в конце = «если вдруг». Главное предложение (пассив) не меняется.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените als на als ob.',
      prompt: 'Sie sah aus, als hätte sie die ganze Nacht nicht geschlafen.',
      answers: [
        'Sie sah aus, als ob sie die ganze Nacht nicht geschlafen hätte.',
        'Sie sah aus, als wenn sie die ganze Nacht nicht geschlafen hätte.',
      ],
      explanationRu: 'После als ob / als wenn спрягаемый глагол hätte уходит в конец, после Partizip II.',
    },
  ],
  reading: [
    {
      title: 'Die Stadt als Schwamm',
      textType: 'Zeitungsartikel (Lückentext)',
      texts: [
        {
          heading: 'Die Stadt als Schwamm',
          body: `Wenn im Sommer ein heftiges Gewitter über einer Großstadt niedergeht, sind die Folgen oft dramatisch: Keller laufen voll, Straßen werden zu Flüssen, U-Bahn-Stationen müssen gesperrt werden. [1] Asphalt und Beton lassen das Wasser nicht versickern, und die Kanalisation ist für solche Mengen nicht ausgelegt.

Stadtplaner setzen deshalb zunehmend auf ein Konzept, das unter dem Namen „Schwammstadt“ bekannt geworden ist. Die Idee: Regenwasser soll nicht so schnell wie möglich abgeleitet, sondern dort gespeichert werden, wo es fällt. [2] Gründächer, Mulden in Parks, durchlässige Pflaster und unterirdische Speicher nehmen das Wasser auf und geben es langsam wieder ab.

Das hat einen doppelten Nutzen. [3] Denn das gespeicherte Wasser verdunstet an heißen Tagen und kühlt dabei die Umgebung. Auf einem begrünten Dach liegt die Oberflächentemperatur im Hochsommer oft um mehrere Dutzend Grad niedriger als auf einem dunklen Bitumendach. Auch Straßenbäume profitieren: Sie bekommen in Trockenperioden mehr Wasser und spenden mehr Schatten.

[4] Vor allem in dicht bebauten Altstadtvierteln fehlt schlicht der Platz für große Mulden oder neue Grünflächen. Hinzu kommen die Kosten: Ein Gründach ist deutlich teurer als ein herkömmliches Dach, und viele Hauseigentümer scheuen die Investition. Manche Städte haben deshalb Förderprogramme aufgelegt. [5]

Fachleute sind sich dennoch einig, dass an dem Konzept kein Weg vorbeiführt. „Würden wir einfach immer größere Kanäle bauen, wäre das nicht nur teuer, sondern es würde auch das Hitzeproblem nicht lösen“, sagt die Wasserbauingenieurin Katrin Vogt. Sollte die Zahl der Starkregenereignisse wie erwartet weiter zunehmen, sei der Umbau der Städte ohnehin unvermeidlich. [6] „Jedes neue Gebäude, das heute ohne Gründach gebaut wird, ist eine verpasste Chance.“`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние (формат Goethe B2 Lesen, Teil 3).',
          options: [
            'Im Winter dagegen spielt Regenwasser kaum eine Rolle.',
            'Die Schwammstadt schützt nämlich nicht nur vor Überschwemmungen, sondern auch vor Hitze.',
            'Je früher man damit beginne, desto günstiger werde es.',
            'Der Grund dafür ist meist die starke Versiegelung der Böden.',
            'Deshalb wurde die Kanalisation in den meisten Städten bereits verdoppelt.',
            'Wer sein Dach begrünen lässt, bekommt dort einen Teil der Kosten erstattet.',
            'Die Stadt soll also wie ein Schwamm funktionieren.',
            'Ganz so einfach ist die Umsetzung allerdings nicht.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 3,
              explanationRu: 'Причина затоплений — запечатанные поверхности; дальше это поясняется: «Asphalt und Beton lassen das Wasser nicht versickern».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 6,
              explanationRu: 'Вода должна накапливаться там, где выпала, — город работает «как губка». Это объясняет название концепции.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 1,
              explanationRu: '«Doppelter Nutzen»: защита не только от наводнений, но и от жары — дальше говорится об охлаждении.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 7,
              explanationRu: 'Начало абзаца о трудностях: нехватка места, высокие расходы.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 5,
              explanationRu: 'Программы поддержки: тем, кто озеленяет крышу, возмещают часть расходов («dort» = в этих городах).',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 2,
              explanationRu: 'Продолжение косвенной речи эксперта (Konjunktiv I: beginne, werde): чем раньше начать, тем дешевле.',
            },
          ],
        },
      ],
    },
    {
      title: 'Verzichten Sie aufs Fliegen? – Leserkommentare',
      textType: 'Leserkommentare',
      texts: [
        {
          label: 'Tobias, 38, Ingenieur',
          body: 'Ich fliege seit drei Jahren nicht mehr – nicht, weil mir das jemand verboten hätte, sondern weil ich nachgerechnet habe. Ein einziger Flug nach Thailand und zurück verursacht mehr CO2 als ein Jahr Autofahren. Seitdem machen wir Urlaub in Europa und fahren mit dem Nachtzug. Das ist langsamer, aber die Reise ist für uns inzwischen ein Teil des Urlaubs geworden. Der Verzicht fühlt sich ganz anders an, als ich gedacht hatte: eher wie ein Gewinn.',
        },
        {
          label: 'Elena, 45, Unternehmerin',
          body: 'Ich habe Kunden in Asien und Südamerika. Würde ich nicht mehr fliegen, könnte ich mein Geschäft schließen. Videokonferenzen sind nützlich, aber Vertrauen entsteht nur im persönlichen Kontakt. Ich gleiche meine Flüge deshalb über eine Klimaschutzorganisation aus, die Aufforstungsprojekte finanziert. Ich weiß, dass das umstritten ist, aber es ist besser als nichts.',
        },
        {
          label: 'Gerhard, 66, Rentner',
          body: 'Wir haben unser ganzes Berufsleben lang gespart, um im Ruhestand die Welt zu sehen. Und jetzt sollen wir ein schlechtes Gewissen haben? Ich finde, es ist nicht die Aufgabe des Einzelnen, das Klima zu retten. Solange die Politik Kerosin nicht besteuert und Flüge billiger sind als Bahnfahrten, wird sich nichts ändern – egal, ob ich fliege oder nicht.',
        },
        {
          label: 'Mira, 22, Studentin',
          body: 'Für meine Generation ist das eine echte Zwickmühle. Ein Auslandssemester, Freunde, die über die ganze Welt verteilt leben – das gehört für uns einfach dazu. Ich habe mir deshalb eine Regel gemacht: höchstens ein Flug pro Jahr, und nur, wenn ich mindestens drei Wochen bleibe. Kurztrips übers Wochenende nach Barcelona sind für mich tabu. Was andere machen, müssen sie selbst entscheiden.',
        },
        {
          label: 'Peter, 52, Reisebürokaufmann',
          body: 'In meinem Reisebüro erlebe ich, dass sich das Verhalten tatsächlich ändert – aber langsamer, als man denkt. Immer mehr Kunden fragen nach Zugreisen, vor allem Familien. Das Problem ist, dass internationale Zugverbindungen schwer zu buchen und oft teurer sind. Wäre das Buchen so einfach wie bei einem Flug, würden viel mehr Menschen umsteigen, da bin ich mir sicher.',
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Kommentare. Welche Aussage passt zu welcher Person? Für eine Aussage gibt es keine passende Person.',
          instructionRu: 'Прочитайте комментарии. Какое утверждение относится к какому человеку? Для одного утверждения подходящего человека нет (формат Goethe B2 Lesen, Teil 4).',
          options: ['Tobias', 'Elena', 'Gerhard', 'Mira', 'Peter'],
          allowNone: true,
          items: [
            {
              kind: 'match',
              prompt: 'Diese Person hat sich eine persönliche Obergrenze gesetzt.',
              answer: 3,
              explanationRu: 'Мира: не больше одного перелёта в год и только при поездке от трёх недель.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person gleicht die Emissionen ihrer Flüge aus.',
              answer: 1,
              explanationRu: 'Елена компенсирует перелёты через климатическую организацию.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person glaubt, dass einfachere Buchungen von Zugreisen viel bewirken würden.',
              answer: 4,
              explanationRu: 'Петер: «Wäre das Buchen so einfach wie bei einem Flug, würden viel mehr Menschen umsteigen».',
            },
            {
              kind: 'match',
              prompt: 'Für diese Person ist der Verzicht positiver als erwartet.',
              answer: 0,
              explanationRu: 'Тобиас: отказ ощущается «eher wie ein Gewinn».',
            },
            {
              kind: 'match',
              prompt: 'Diese Person fordert ein gesetzliches Verbot von Kurzstreckenflügen.',
              answer: -1,
              explanationRu: 'Никто не требует запрета. Мира лишь для себя исключает короткие поездки и подчёркивает: «Was andere machen, müssen sie selbst entscheiden».',
            },
            {
              kind: 'match',
              prompt: 'Diese Person sieht die Verantwortung vor allem bei der Politik.',
              answer: 2,
              explanationRu: 'Герхард: спасать климат — не задача отдельного человека; пока политика не обложит налогом керосин, ничего не изменится.',
            },
            {
              kind: 'match',
              prompt: 'Diese Person hält persönliche Treffen im Beruf für unverzichtbar.',
              answer: 1,
              explanationRu: 'Елена: «Vertrauen entsteht nur im persönlichen Kontakt».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Unwetterwarnung im Radio',
      kind: 'monolog',
      situation: 'Sie hören eine Unwetterwarnung im Radio.',
      playCount: 2,
      text: `Und nun eine aktuelle Unwetterwarnung für unser Sendegebiet. Nach der extremen Hitze der letzten Tage werden für heute Abend schwere Gewitter mit Starkregen und Hagel erwartet. Betroffen sind vor allem die südlichen Landkreise. Sollten Sie mit dem Auto unterwegs sein, meiden Sie bitte Unterführungen, denn diese können innerhalb weniger Minuten volllaufen. Hausbesitzer sollten Fenster und Kellertüren schließen und Gegenstände von Balkon und Terrasse in Sicherheit bringen. Die Stadt hat das für heute geplante Open-Air-Konzert auf dem Marktplatz bereits abgesagt. Die Tickets behalten ihre Gültigkeit für den Ersatztermin im September. Falls Sie dann keine Zeit haben, bekommen Sie den Kaufpreis erstattet. Ab morgen Mittag wird es übrigens deutlich kühler: Die Temperaturen sinken auf angenehme zweiundzwanzig Grad – es sei denn, die Wolken lösen sich schneller auf als erwartet.`,
      tasks: [
        {
          instructionDe: 'Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Верны ли утверждения? (формат Goethe B2 Hören, Teil 1)',
          items: [
            {
              kind: 'tf',
              statement: 'Die Gewitter werden vor allem im Norden des Sendegebiets erwartet.',
              answer: false,
              explanationRu: 'Затронуты прежде всего южные районы (die südlichen Landkreise).',
            },
            {
              kind: 'tf',
              statement: 'Autofahrer sollen Unterführungen meiden.',
              answer: true,
              explanationRu: '«Sollten Sie mit dem Auto unterwegs sein, meiden Sie bitte Unterführungen».',
            },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was passiert mit den Konzertkarten?',
              options: [
                'Sie verlieren ihre Gültigkeit.',
                'Sie gelten für einen späteren Termin.',
                'Man kann sie nur heute zurückgeben.',
              ],
              answer: 1,
              explanationRu: 'Билеты действительны на перенесённый концерт в сентябре; если не получится прийти — деньги вернут.',
            },
            {
              kind: 'mc',
              question: 'Wie wird das Wetter ab morgen Mittag?',
              options: ['Kühler als heute.', 'Noch heißer.', 'Weiterhin gewittrig.'],
              answer: 0,
              explanationRu: 'Станет заметно прохладнее — около 22 градусов.',
            },
          ],
        },
      ],
    },
    {
      title: 'Ringvorlesung: Kreislaufwirtschaft',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag eines Umweltökonomen an der Universität.',
      playCount: 2,
      text: `Liebe Studierende, liebe Gäste, herzlich willkommen zur heutigen Sitzung unserer Ringvorlesung „Umwelt und Zukunft“. Mein Thema ist die Kreislaufwirtschaft – ein Begriff, den Sie sicher schon oft gehört haben. Aber was steckt eigentlich dahinter?

Unsere Wirtschaft funktioniert bis heute weitgehend linear: Wir nehmen Rohstoffe aus der Erde, stellen daraus Produkte her, nutzen sie eine Weile und werfen sie dann weg. Das funktioniert nur so lange, wie Rohstoffe billig und scheinbar unbegrenzt verfügbar sind. Wir tun bis heute so, als hätten wir einen zweiten Planeten im Kofferraum. Würden alle Menschen so viel verbrauchen wie die Deutschen, bräuchten wir rechnerisch etwa drei Erden.

Die Kreislaufwirtschaft setzt dagegen auf ein einfaches Prinzip: Materialien sollen so lange wie möglich im Umlauf bleiben. Viele denken dabei sofort an Recycling. Recycling ist aber eigentlich nur die letzte Möglichkeit. Viel wichtiger ist es, Produkte so zu gestalten, dass sie lange halten und repariert oder wiederverwendet werden können. Ein Smartphone, dessen Akku man nicht austauschen kann, ist ein schlechtes Beispiel dafür.

Hier hat die Europäische Union in den letzten Jahren einiges bewegt. Hersteller bestimmter Geräte müssen Ersatzteile inzwischen über viele Jahre anbieten, und Verbraucher haben ein Recht auf Reparatur. Das klingt nach einer Kleinigkeit, verändert aber ganze Branchen: Muss ein Hersteller zehn Jahre lang Ersatzteile liefern, wird er seine Produkte von Anfang an robuster bauen.

Besonders viel Potenzial steckt übrigens im Bauwesen. Mehr als die Hälfte unseres Abfalls in Deutschland stammt aus Bau und Abriss. Stellen Sie sich vor, man würde Gebäude so planen, dass man sie am Ende ihrer Lebensdauer wie einen Bausatz wieder auseinandernehmen kann. Genau daran arbeiten Architekten heute – etwa mit Holzmodulen, die verschraubt statt verklebt werden.

Ich möchte aber nicht verschweigen, dass es auch Hindernisse gibt. Neue Rohstoffe sind oft immer noch günstiger als recycelte Materialien, weil die Umweltkosten im Preis nicht enthalten sind. Solange sich das nicht ändert, wird die Kreislaufwirtschaft eine Nische bleiben – es sei denn, die Politik schafft die richtigen Anreize, etwa durch eine Abgabe auf neue Rohstoffe.

Und was kann jeder Einzelne tun? Mein Rat ist ganz pragmatisch: Kaufen Sie weniger, aber bessere Produkte. Lassen Sie Dinge reparieren, bevor Sie sie ersetzen. Und fragen Sie beim Kauf, ob es Ersatzteile gibt. Stellen genug Kunden diese Frage, werden die Hersteller zuhören.

In der nächsten Sitzung schauen wir uns dann ein Unternehmen genauer an, das Teppiche komplett im Kreislauf produziert.`,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.',
          instructionRu: 'Вы слышите доклад два раза. Выберите правильный ответ (формат Goethe B2 Hören, Teil 4).',
          items: [
            {
              kind: 'mc',
              question: 'In welchem Rahmen findet der Vortrag statt?',
              options: [
                'Im Rahmen einer Vorlesungsreihe an der Universität.',
                'Auf einer Messe für Recyclingtechnik.',
                'Bei einer Veranstaltung einer Partei.',
              ],
              answer: 0,
              explanationRu: '«… zur heutigen Sitzung unserer Ringvorlesung „Umwelt und Zukunft“».',
            },
            {
              kind: 'mc',
              question: 'Was kritisiert der Referent an der heutigen Wirtschaft?',
              options: [
                'Sie produziert zu wenig.',
                'Sie verbraucht Rohstoffe, als wären sie unbegrenzt.',
                'Sie setzt zu stark auf Recycling.',
              ],
              answer: 1,
              explanationRu: '«Wir tun bis heute so, als hätten wir einen zweiten Planeten im Kofferraum».',
            },
            {
              kind: 'mc',
              question: 'Was ist laut dem Vortrag wichtiger als Recycling?',
              options: [
                'Abfälle zu verbrennen.',
                'Neue Rohstoffquellen zu erschließen.',
                'Langlebige und reparierbare Produkte herzustellen.',
              ],
              answer: 2,
              explanationRu: 'Переработка — лишь последний вариант; важнее делать товары долговечными и ремонтопригодными.',
            },
            {
              kind: 'mc',
              question: 'Was hat die EU eingeführt?',
              options: [
                'Ein Verbot von Smartphones mit fest eingebautem Akku.',
                'Ein Recht auf Reparatur.',
                'Eine Steuer auf alle Rohstoffe.',
              ],
              answer: 1,
              explanationRu: 'Производители должны долго поставлять запчасти, у потребителей есть право на ремонт.',
            },
            {
              kind: 'mc',
              question: 'Welche Wirkung erwartet der Referent von der Pflicht, lange Ersatzteile anzubieten?',
              options: [
                'Die Hersteller werden ihre Produkte stabiler bauen.',
                'Die Produkte werden deutlich billiger.',
                'Es wird weniger Hersteller geben.',
              ],
              answer: 0,
              explanationRu: '«Muss ein Hersteller zehn Jahre lang Ersatzteile liefern, wird er seine Produkte von Anfang an robuster bauen».',
            },
            {
              kind: 'mc',
              question: 'Was sagt der Referent über das Bauwesen?',
              options: [
                'Es verursacht kaum Abfall.',
                'Holz ist als Baustoff ungeeignet.',
                'Gebäude sollen sich künftig wieder zerlegen lassen.',
              ],
              answer: 2,
              explanationRu: 'Здания планируют так, чтобы их можно было разобрать «wie einen Bausatz»; на стройку приходится больше половины отходов.',
            },
            {
              kind: 'mc',
              question: 'Warum ist die Kreislaufwirtschaft noch eine Nische?',
              options: [
                'Weil neue Rohstoffe oft billiger sind als recycelte.',
                'Weil die Verbraucher kein Interesse daran haben.',
                'Weil es noch keine passende Technik gibt.',
              ],
              answer: 0,
              explanationRu: 'Новое сырьё часто дешевле, потому что экологические издержки не включены в цену.',
            },
            {
              kind: 'mc',
              question: 'Was rät der Referent den Zuhörern?',
              options: [
                'Gar keine neuen Produkte mehr zu kaufen.',
                'Beim Kauf nach Ersatzteilen zu fragen.',
                'Nur noch gebrauchte Produkte zu kaufen.',
              ],
              answer: 1,
              explanationRu: 'Покупать меньше, но лучше, ремонтировать и спрашивать о запчастях при покупке.',
            },
          ],
        },
      ],
    },
  ],
};
