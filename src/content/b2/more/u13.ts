import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Er fährt mit dem Fahrrad zur Arbeit, ___ es draußen stürmt.',
      options: ['weil', 'obwohl', 'trotzdem', 'deshalb'],
      answer: 1,
      explanationRu: 'Ехать на велосипеде в бурю — неожиданно, это уступка: obwohl. После obwohl глагол (stürmt) стоит в конце. Trotzdem и deshalb — наречия, они не открывают придаточное.',
    },
    {
      type: 'gap',
      prompt: 'Die Jacke war ein Fehlkauf. ___ trage ich sie ab und zu.',
      answers: ['Trotzdem', 'Dennoch', 'Nichtsdestotrotz'],
      hintRu: '«тем не менее», за ним сразу глагол',
      explanationRu: 'После пропуска сразу стоит глагол trage — значит, на первом месте наречие: Trotzdem / Dennoch trage ich sie …',
    },
    {
      type: 'choice',
      prompt: '___ der langen Lieferzeit hat sie wieder bei demselben Shop bestellt.',
      options: ['Obwohl', 'Trotz', 'Trotzdem', 'Dennoch'],
      answer: 1,
      explanationRu: 'За пропуском идёт существительное в Genitiv (der langen Lieferzeit), а не предложение. Значит, нужен предлог trotz.',
    },
    {
      type: 'choice',
      prompt: 'Das Handy war sehr teuer. Trotzdem ___.',
      options: ['er hat es gekauft', 'hat er es gekauft', 'er es gekauft hat', 'hat es er gekauft'],
      answer: 1,
      explanationRu: 'Trotzdem занимает первое место, поэтому изменяемый глагол стоит на втором (hat), затем подлежащее (er), местоимение es и причастие в конце.',
    },
    {
      type: 'gap',
      prompt: 'Der Hofladen liegt weit außerhalb, aber wir kaufen ___ jede Woche dort ein.',
      answers: ['trotzdem', 'dennoch'],
      hintRu: 'наречие в середине предложения',
      explanationRu: 'Trotzdem/dennoch могут стоять не только на первом месте, но и в середине предложения — после глагола и подлежащего: wir kaufen trotzdem … ein.',
    },
    {
      type: 'choice',
      prompt: 'Die Bio-Äpfel sind fast doppelt so teuer. ___ kaufen viele Menschen sie nicht.',
      options: ['Trotzdem', 'Deshalb', 'Obwohl', 'Zwar'],
      answer: 1,
      explanationRu: 'Ловушка: здесь нет противоречия, а есть причина и следствие (дорого → поэтому не покупают). Нужно deshalb, а не trotzdem.',
    },
    {
      type: 'gap',
      prompt: 'Er bestellte erneut bei dem Versandhändler, ___ er sich schon zweimal über die Verpackungsflut beschwert hatte.',
      answers: ['obwohl', 'obgleich', 'wenngleich'],
      hintRu: 'союз «хотя» (возможен книжный вариант)',
      explanationRu: 'Придаточное с глаголом в конце (hatte) выражает уступку: obwohl или книжные obgleich/wenngleich.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите с помощью obwohl (придаточное в начале).',
      prompt: 'Der Akku ist schwach. Trotzdem will sie das Handy nicht ersetzen.',
      answers: ['Obwohl der Akku schwach ist, will sie das Handy nicht ersetzen.'],
      explanationRu: 'Первое предложение становится придаточным (ist в конце), trotzdem исчезает. Главное предложение начинается с глагола will.',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Zwar das Angebot ist günstig, aber die Qualität stimmt nicht.',
        'Zwar ist das Angebot günstig, aber die Qualität stimmt nicht.',
        'Zwar ist das Angebot günstig, aber stimmt die Qualität nicht.',
        'Das Angebot zwar ist günstig, aber die Qualität stimmt nicht.',
      ],
      answer: 1,
      explanationRu: 'Zwar на первом месте требует инверсии (ist das Angebot). Aber инверсии не вызывает: aber die Qualität stimmt nicht. Zwar не может стоять перед глаголом после подлежащего.',
    },
    {
      type: 'gap',
      prompt: 'Trotz ___ Preise kaufen viele Kunden weiterhin Markenprodukte.',
      answers: ['steigender'],
      hintRu: 'steigend; Genitiv Plural без артикля',
      explanationRu: 'Trotz + Genitiv. Без артикля прилагательное получает сильное окончание Genitiv Plural -er: trotz steigender Preise.',
    },
    {
      type: 'choice',
      prompt: 'Selbst wenn das Gerät kostenlos ___, würde ich es nicht nehmen.',
      options: ['ist', 'wäre', 'war', 'sei'],
      answer: 1,
      explanationRu: 'Гипотетическая уступка («даже если бы»): в обеих частях Konjunktiv II — wäre … würde … nehmen.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с obwohl конструкцией trotz + Genitiv.',
      prompt: 'Obwohl die Kritik groß war, hielt die Firma an ihren Plänen fest.',
      answers: ['Trotz der großen Kritik hielt die Firma an ihren Plänen fest.'],
      explanationRu: 'Die große Kritik → Genitiv: der großen Kritik. Предложная группа стоит на первом месте, за ней глагол hielt.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените конструкцию trotz + Genitiv придаточным с obwohl.',
      prompt: 'Trotz seines hohen Einkommens lebt er sehr sparsam.',
      answers: [
        'Obwohl er ein hohes Einkommen hat, lebt er sehr sparsam.',
        'Obwohl er viel verdient, lebt er sehr sparsam.',
        'Obwohl sein Einkommen hoch ist, lebt er sehr sparsam.',
      ],
      explanationRu: 'При «вербализации» существительное превращается в предложение с глаголом: sein hohes Einkommen → er hat ein hohes Einkommen / er verdient viel. Глагол — в конце придаточного.',
    },
    {
      type: 'order',
      words: ['Auch wenn', 'die Reparatur', 'länger dauert,', 'lohnt', 'sie sich', 'für die Umwelt.'],
      translationRu: 'Даже если ремонт займёт больше времени, он того стоит ради окружающей среды.',
      explanationRu: 'Auch wenn открывает придаточное (dauert в конце). Главное предложение начинается с глагола lohnt.',
    },
    {
      type: 'choice',
      prompt: 'Das war ein guter, ___ teurer Kauf.',
      options: ['auch wenn', 'wenn auch', 'obwohl', 'trotzdem'],
      answer: 1,
      explanationRu: '«Хотя и дорогая» внутри группы существительного выражают сокращённым wenn auch: ein guter, wenn auch teurer Kauf. Auch wenn и obwohl требуют полного придаточного с глаголом.',
    },
    {
      type: 'gap',
      prompt: 'Man kann viel Verpackungsmüll vermeiden, ___ man eigene Behälter zum Einkaufen mitbringt.',
      answers: ['indem'],
      hintRu: 'повторение (B2-12): способ действия',
      explanationRu: 'Повторение: здесь нет уступки, а описывается способ («тем, что / путём»). Нужен союз indem.',
    },
    {
      type: 'choice',
      prompt: '___ ich mich beim Onlineshopping am meisten ärgere, ist die unnötige Verpackung.',
      options: ['Worüber', 'Was', 'Darüber', 'Über das'],
      answer: 0,
      explanationRu: 'Повторение (B2-11): sich ärgern über + Akk. Относительное придаточное без опорного слова вводится словом wo(r) + предлог: Worüber ich mich ärgere, … Darüber — указательное слово, не вводит придаточное.',
    },
    {
      type: 'gap',
      prompt: '___ günstig das Angebot auch ist, einen dritten Fernseher brauche ich nicht.',
      answers: ['So'],
      hintRu: '«как бы … ни» (so … auch)',
      explanationRu: 'Конструкция so + прилагательное … auch («как бы ни») выражает уступку: So günstig das Angebot auch ist, … Глагол стоит в конце придаточного.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью selbst wenn (гипотетическая уступка, Konjunktiv II).',
      prompt: 'Die Reparatur ist teuer. Ich würde das Gerät nicht wegwerfen.',
      answers: [
        'Selbst wenn die Reparatur teuer wäre, würde ich das Gerät nicht wegwerfen.',
        'Auch wenn die Reparatur teuer wäre, würde ich das Gerät nicht wegwerfen.',
      ],
      explanationRu: 'В гипотетической уступке обе части стоят в Konjunktiv II: teuer wäre … würde … wegwerfen. Главное предложение начинается с глагола würde.',
    },
    {
      type: 'order',
      words: ['Der Konzern', 'hat', 'seine Klimaziele', 'verfehlt;', 'nichtsdestotrotz', 'wirbt', 'er', 'weiter', 'mit Klimaneutralität.'],
      translationRu: 'Концерн не достиг своих климатических целей; тем не менее он продолжает рекламировать свою климатическую нейтральность.',
      explanationRu: 'Nichtsdestotrotz — наречие, как trotzdem: на первом месте второй части оно вызывает инверсию (wirbt er).',
    },
  ],
  reading: [
    {
      title: 'Leihen statt kaufen?',
      textType: 'Meinungstexte',
      texts: [
        {
          label: 'a',
          heading: 'Miriam, 34, Grafikdesignerin',
          body: `Seit unser Viertel einen Leihladen hat, habe ich bestimmt ein Dutzend Dinge nicht gekauft: eine Bohrmaschine, ein Zelt, einen Raclette-Grill. Ich wohne in einer kleinen Zweizimmerwohnung, da ist jeder Quadratmeter kostbar, und ich will meinen Keller nicht mit Sachen füllen, die ich einmal im Jahr brauche. Das Schönste daran ist aber etwas anderes: Ich kenne inzwischen viele Nachbarn, mit denen ich vorher nie ein Wort gewechselt hatte. Zugegeben, für Dinge, die ich täglich benutze, wäre Leihen Unsinn. Meinen Föhn oder mein Fahrrad würde ich nie teilen wollen.`,
        },
        {
          label: 'b',
          heading: 'Tobias, 41, Vater von drei Kindern',
          body: `In der Theorie klingt das alles wunderbar. In der Praxis habe ich keine Zeit, für jede Kleinigkeit zu einem Laden zu fahren, der nur zweimal pro Woche geöffnet ist, und das Ding danach pünktlich zurückzubringen. Mit drei Kindern muss vieles spontan gehen. Außerdem waren die Sachen, die ich mir geliehen habe, nicht immer im besten Zustand: Beim Kinderwagen fehlte eine Schraube, und der Teppichreiniger war so verdreckt, dass ich ihn erst einmal selbst sauber machen musste. Ich kaufe lieber einmal etwas Hochwertiges und verkaufe es weiter, wenn wir es nicht mehr brauchen. Das ist auch nachhaltig.`,
        },
        {
          label: 'c',
          heading: 'Helga, 67, Rentnerin',
          body: `Wenn ich heute von der „Sharing Economy“ lese, muss ich schmunzeln. In dem Dorf, in dem ich aufgewachsen bin, hat man sich selbstverständlich die Leiter vom Nachbarn geholt, und beim Schlachten haben alle geholfen. Das hat niemand „Teilen“ genannt, es war einfach normal. Was mich stört, ist, dass heute aus allem ein Geschäftsmodell gemacht wird. Da verdienen Firmen mit Apps daran, dass man sich eine Bohrmaschine ausleiht. Ich verleihe meine Nähmaschine an die jungen Leute im Haus, und zwar umsonst. So sollte es sein.`,
        },
        {
          label: 'd',
          heading: 'Kemal, 28, Masterstudent',
          body: `Ich miete fast alles: meinen Laptop, mein Sofa, sogar die Waschmaschine. Weil ich wegen Praktika und Auslandssemestern ständig umziehe, ist das für mich die beste Lösung. Ich muss nichts verkaufen und nichts schleppen, ich schicke die Sachen einfach zurück. Natürlich ist mir klar, dass ich auf Dauer mehr bezahle, als wenn ich die Dinge kaufen würde. Und manchmal ärgert es mich, dass ich nichts selbst reparieren darf, weil die Geräte der Firma gehören. Trotzdem überwiegen für mich in dieser Lebensphase die Vorteile.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Texte a–d. Zu welcher Person passen die Aussagen 1–9? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте тексты a–d. К какому человеку относятся высказывания 1–9? Одного человека можно выбирать несколько раз.',
          options: ['Miriam', 'Tobias', 'Helga', 'Kemal'],
          items: [
            {
              kind: 'match',
              prompt: '1. Durch das Leihen hat diese Person neue Kontakte in der Nachbarschaft geknüpft.',
              answer: 0,
              explanationRu: 'Miriam: «Ich kenne inzwischen viele Nachbarn, mit denen ich vorher nie ein Wort gewechselt hatte.»',
            },
            {
              kind: 'match',
              prompt: '2. Diese Person findet Leihen im Familienalltag zu umständlich.',
              answer: 1,
              explanationRu: 'Tobias: нет времени ездить в магазин, который открыт два раза в неделю; с тремя детьми многое должно быть спонтанным.',
            },
            {
              kind: 'match',
              prompt: '3. Für diese Person ist die Idee des Teilens keineswegs neu.',
              answer: 2,
              explanationRu: 'Helga: в её деревне всегда брали лестницу у соседа — «es war einfach normal».',
            },
            {
              kind: 'match',
              prompt: '4. Wegen häufiger Umzüge ist Mieten für diese Person praktisch.',
              answer: 3,
              explanationRu: 'Kemal: «Weil ich … ständig umziehe, ist das für mich die beste Lösung.»',
            },
            {
              kind: 'match',
              prompt: '5. Diese Person setzt lieber auf Qualität und späteren Weiterverkauf.',
              answer: 1,
              explanationRu: 'Tobias: «Ich kaufe lieber einmal etwas Hochwertiges und verkaufe es weiter.»',
            },
            {
              kind: 'match',
              prompt: '6. Diese Person räumt ein, dass ihr Modell langfristig teurer ist.',
              answer: 3,
              explanationRu: 'Kemal: «Natürlich ist mir klar, dass ich auf Dauer mehr bezahle …»',
            },
            {
              kind: 'match',
              prompt: '7. Diese Person kritisiert, dass mit dem Teilen Geld verdient wird.',
              answer: 2,
              explanationRu: 'Helga: её раздражает, что из всего делают бизнес-модель и фирмы зарабатывают на приложениях.',
            },
            {
              kind: 'match',
              prompt: '8. Wenig Platz in der Wohnung ist für diese Person ein wichtiges Argument.',
              answer: 0,
              explanationRu: 'Miriam живёт в маленькой двухкомнатной квартире: «da ist jeder Quadratmeter kostbar».',
            },
            {
              kind: 'match',
              prompt: '9. Diese Person hat mit dem Zustand geliehener Gegenstände schlechte Erfahrungen gemacht.',
              answer: 1,
              explanationRu: 'Tobias: у коляски не хватало винта, а пылесос для ковров был грязным.',
            },
          ],
        },
      ],
    },
    {
      title: 'Secondhand – die bessere Mode?',
      textType: 'Zeitungsartikel (Lückentext)',
      texts: [
        {
          body: `Secondhand ist längst kein Nischenthema mehr. Was früher nach muffigen Kellern und knappem Studentenbudget klang, ist heute ein Milliardenmarkt. Über Apps verkaufen Millionen Menschen ihre aussortierte Kleidung, und selbst große Modeketten haben in ihren Filialen eigene Secondhand-Bereiche eingerichtet. [1] Doch ist gebrauchte Mode tatsächlich so nachhaltig, wie es scheint?

Auf den ersten Blick spricht vieles dafür. Jedes Kleidungsstück, das ein zweites Leben bekommt, muss nicht neu produziert werden. [2] Fachleute weisen allerdings darauf hin, dass dieser Effekt nur dann eintritt, wenn das gebrauchte Teil tatsächlich einen Neukauf ersetzt.

Genau hier beginnt das Problem. Eine Befragung unter Nutzerinnen und Nutzern von Secondhand-Apps zeigt, dass viele von ihnen nicht weniger, sondern mehr Kleidung kaufen als zuvor. [3] Hinzu kommt, dass manche Teile inzwischen nur gekauft werden, um sie nach einmaligem Tragen wieder anzubieten. Experten sprechen vom Rebound-Effekt: Die Ersparnis wird durch zusätzlichen Konsum wieder aufgefressen.

Auch der Versand ist nicht zu unterschätzen. Wenn ein T-Shirt für vier Euro quer durch das Land geschickt wird, fallen Verpackung und Transport durchaus ins Gewicht. [4] Wer gebrauchte Kleidung im Laden vor Ort oder beim Kleidertausch im Viertel findet, schneidet in der Bilanz deshalb deutlich besser ab.

Ein weiteres Problem ist die sinkende Qualität der angebotenen Ware. [5] Viele gemeinnützige Händler klagen, dass sie einen immer größeren Teil der Spenden nicht mehr verkaufen können und auf eigene Kosten entsorgen müssen.

Heißt das, man sollte auf Secondhand lieber verzichten? Keineswegs, betonen Umweltverbände. [6] Entscheidend sei aber die Haltung: Secondhand ist dann nachhaltig, wenn es den Kleiderschrank nicht voller, sondern bewusster macht.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Welcher Satz a–h passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение a–h подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Bei Rücksendungen verdoppelt sich dieser Aufwand sogar.',
            'Weil Fast Fashion immer billiger hergestellt wird, landen auch in Secondhand-Läden zunehmend Teile, die schon nach wenigen Wäschen kaputt sind.',
            'Gebrauchte Kleidung zu tragen, ist nach wie vor eine der wirksamsten Möglichkeiten, die eigene Umweltbelastung zu senken.',
            'So werden Wasser, Energie und Chemikalien gespart, die bei der Herstellung anfallen würden.',
            'Der niedrige Preis senkt offenbar die Hemmschwelle, sich ständig etwas Neues zu gönnen.',
            'Wer gebrauchte Kleidung trägt, gilt heute nicht mehr als geizig, sondern als modern und verantwortungsvoll.',
            'Die meisten Apps verlangen deshalb inzwischen keine Gebühren mehr.',
            'Aus diesem Grund haben mehrere Städte den Onlinehandel mit gebrauchter Kleidung verboten.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 5,
              explanationRu: 'Абзац о том, что секонд-хенд стал мейнстримом; предложение f продолжает эту мысль (уже не «скупо», а модно), а затем следует вопрос «Doch ist …?».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 3,
              explanationRu: 'После «muss nicht neu produziert werden» логично назвать, что экономится (вода, энергия, химия). Следующее предложение говорит об «этом эффекте».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 4,
              explanationRu: 'Объяснение, почему пользователи покупают больше: низкая цена снижает барьер.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 0,
              explanationRu: '«Dieser Aufwand» относится к упаковке и транспорту из предыдущего предложения; при возврате он удваивается.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 1,
              explanationRu: 'Абзац о падении качества: в секонд-хенд попадают вещи быстрой моды, которые быстро рвутся, поэтому их потом утилизируют.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 2,
              explanationRu: 'Ответ на вопрос «стоит ли отказаться?» — «Keineswegs»: носить подержанное по-прежнему один из самых эффективных способов снизить нагрузку на природу. Предложения g и h в тексте не подходят никуда.',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Interview: Die Lebensmittelretterin',
      kind: 'dialog',
      speakers: { A: 'Moderator', B: 'Lisa Brandt, Lebensmittelretterin' },
      situation: 'Sie hören ein Interview im Radio mit einer Frau, die sich gegen Lebensmittelverschwendung engagiert.',
      text: `A: Frau Brandt, Sie retten seit fünf Jahren Lebensmittel vor der Mülltonne. Wie sind Sie dazu gekommen?
B: Eigentlich durch Zufall. Ich habe während des Studiums in einer Bäckerei gejobbt, und jeden Abend mussten wir säckeweise Brötchen wegwerfen, obwohl sie völlig in Ordnung waren. Das hat mich so geärgert, dass ich irgendwann gefragt habe, ob ich die Reste mitnehmen darf.
A: Und heute?
B: Heute holen wir mit rund achtzig Ehrenamtlichen bei über vierzig Betrieben in der Stadt ab – Supermärkte, Bäckereien, Kantinen. Die Lebensmittel verteilen wir dann über sogenannte Fair-Teiler. Das sind öffentliche Regale und Kühlschränke, an denen sich jeder bedienen kann.
A: Jeder? Auch Leute, die eigentlich genug Geld haben?
B: Ja, und das ist uns wichtig. Wir sind keine Konkurrenz zur Tafel, die sich gezielt an Bedürftige richtet. Uns geht es darum, dass gutes Essen nicht im Müll landet – ganz egal, wer es isst.
A: Machen die Betriebe denn gern mit?
B: Inzwischen meistens. Am Anfang gab es viel Skepsis, vor allem wegen der Haftung. Viele dachten, sie müssten zahlen, wenn jemandem von einem abgelaufenen Joghurt schlecht wird. Wir unterschreiben deshalb eine Vereinbarung, in der wir die Verantwortung übernehmen. Trotzdem gibt es immer noch Ketten, die lieber wegwerfen, weil das für sie einfacher ist.
A: Wo entsteht denn eigentlich die meiste Verschwendung?
B: Das überrascht viele: nicht im Handel, sondern in den privaten Haushalten. Wir kaufen zu viel, wir planen nicht, und wir verwechseln das Mindesthaltbarkeitsdatum mit einem Verfallsdatum. Ein Joghurt ist oft noch lange danach genießbar.
A: Was raten Sie unseren Hörerinnen und Hörern?
B: Ganz einfach: erst in den Kühlschrank schauen, dann einkaufen. Und den eigenen Sinnen vertrauen – riechen, schauen, probieren. Nur bei Fleisch und Fisch sollte man vorsichtig sein, auch wenn sie noch gut aussehen.
A: Ist das, was Sie tun, nicht trotz allem nur ein Tropfen auf den heißen Stein?
B: Wir retten zwar im Jahr „nur“ ungefähr hundert Tonnen, aber darum geht es nicht allein. Wer einmal gesehen hat, wie viel jeden Abend übrig bleibt, kauft selbst anders ein. Und genau das wollen wir erreichen: dass die Leute umdenken.
A: Frau Brandt, vielen Dank für das Gespräch.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören ein Interview. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Sie hören den Text zweimal.',
          instructionRu: 'Вы слушаете интервью. Выберите в каждом задании правильный ответ a, b или c. Текст звучит дважды.',
          items: [
            {
              kind: 'mc',
              question: 'Wie kam Frau Brandt zur Lebensmittelrettung?',
              options: [
                'durch ihren Nebenjob in einer Bäckerei',
                'durch einen Bericht in der Zeitung',
                'durch eine Freundin, die bei der Tafel arbeitet',
              ],
              answer: 0,
              explanationRu: 'Во время учёбы она подрабатывала в пекарне, где каждый вечер выбрасывали булочки.',
            },
            {
              kind: 'mc',
              question: 'Was sind „Fair-Teiler“?',
              options: [
                'Supermärkte mit besonders günstigen Preisen',
                'öffentliche Orte, an denen jeder Lebensmittel mitnehmen kann',
                'Helfer, die Essen direkt an Bedürftige liefern',
              ],
              answer: 1,
              explanationRu: 'Это общественные полки и холодильники, где каждый может взять продукты.',
            },
            {
              kind: 'mc',
              question: 'Was unterscheidet die Initiative von der Tafel?',
              options: [
                'Sie arbeitet nur mit Bäckereien zusammen.',
                'Sie verlangt für die Lebensmittel einen kleinen Beitrag.',
                'Ihre Lebensmittel sind für alle Menschen gedacht.',
              ],
              answer: 2,
              explanationRu: 'Tafel работает целенаправленно для нуждающихся, а инициатива — для всех: «ganz egal, wer es isst».',
            },
            {
              kind: 'mc',
              question: 'Warum waren viele Betriebe anfangs skeptisch?',
              options: [
                'Sie fürchteten, bei gesundheitlichen Problemen haften zu müssen.',
                'Sie wollten die Reste lieber selbst günstig verkaufen.',
                'Sie hatten Angst vor schlechter Werbung.',
              ],
              answer: 0,
              explanationRu: 'Скепсис был связан с ответственностью (Haftung): боялись платить, если кому-то станет плохо.',
            },
            {
              kind: 'mc',
              question: 'Wo werden laut Frau Brandt die meisten Lebensmittel verschwendet?',
              options: ['in Supermärkten', 'in Kantinen', 'in privaten Haushalten'],
              answer: 2,
              explanationRu: '«…nicht im Handel, sondern in den privaten Haushalten.»',
            },
            {
              kind: 'mc',
              question: 'Was ist das wichtigste Ziel der Initiative?',
              options: [
                'jedes Jahr mehr Tonnen Lebensmittel zu retten',
                'dass Menschen ihr eigenes Einkaufsverhalten ändern',
                'ein Gesetz gegen das Wegwerfen durchzusetzen',
              ],
              answer: 1,
              explanationRu: 'Главное — чтобы люди переосмыслили своё поведение: «dass die Leute umdenken».',
            },
          ],
        },
      ],
    },
    {
      title: 'Streitfrage: Black Friday – Schnäppchen oder Konsumwahn?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin',
        B: 'Thomas Stein, Handelsverband',
        C: 'Dr. Leyla Yilmaz, Konsumforscherin',
      },
      situation: 'Sie hören eine Radiodiskussion zum Thema „Black Friday“.',
      text: `A: Willkommen zu unserer Sendung „Streitfrage“. Am Freitag ist wieder Black Friday, und schon seit Tagen werben Händler mit Rabatten von bis zu siebzig Prozent. Bei mir im Studio sind Thomas Stein vom Handelsverband und die Konsumforscherin Dr. Leyla Yilmaz. Herr Stein, ist der Black Friday ein Segen für den Handel?
B: Für viele Geschäfte auf jeden Fall. Gerade kleinere Händler stehen durch den Onlinehandel unter enormem Druck. Für manche entscheidet das Wochenende rund um den Black Friday darüber, ob das ganze Jahr mit Gewinn oder mit Verlust endet.
A: Frau Yilmaz, Sie sehen das kritischer.
C: Deutlich kritischer. Wir haben Preise über Wochen beobachtet, und das Ergebnis ist ernüchternd: Viele angeblich reduzierte Produkte waren kurz vorher genauso günstig zu haben. Die Rabatte sind oft weniger wert, als die roten Schilder versprechen.
B: Das will ich gar nicht bestreiten. Es gibt leider schwarze Schafe, die mit erfundenen Streichpreisen arbeiten. Aber genau das schadet dem Ruf der gesamten Branche, und deshalb unterstützen wir strengere Kontrollen.
A: Auffällig ist ja: In Umfragen sagen viele Menschen, Nachhaltigkeit sei ihnen wichtig. Trotzdem sind die Geschäfte und Onlineshops am Black Friday voll.
C: Genau das ist der Punkt. Der Zeitdruck – „nur heute“, „nur noch drei Stück“ – schaltet das Nachdenken aus. Die Folge sind Spontankäufe, die man später bereut. Nach solchen Aktionstagen steigt die Zahl der Rücksendungen deutlich, und ein Teil der zurückgeschickten Ware wird nicht wieder verkauft, sondern vernichtet.
B: Da muss ich widersprechen. Die Kundinnen und Kunden sind mündige Erwachsene. Viele warten ganz bewusst auf diesen Tag, um sich etwas Größeres zu leisten, zum Beispiel eine neue Waschmaschine, die sie ohnehin brauchen. Das ist kein Konsumwahn, sondern vernünftige Planung.
C: Wenn es so wäre, hätte ich nichts dagegen. Aber die Werbung zielt doch gerade darauf ab, Wünsche zu wecken, die vorher gar nicht da waren.
A: Frau Yilmaz, sollte man solche Aktionstage also verbieten?
C: Nein, ein Verbot halte ich nicht für sinnvoll. Aber die bestehenden Regeln zur Preisangabe müssen endlich konsequent kontrolliert werden.
A: Dann liegen Sie beide gar nicht so weit auseinander. Vielleicht ist der gemeinsame Nenner: Wer kauft, sollte vorher wissen, was er wirklich braucht. Vielen Dank Ihnen beiden.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Sie hören eine Diskussion. Wer sagt was? Ordnen Sie die Aussagen zu. Sie hören den Text einmal.',
          instructionRu: 'Вы слушаете дискуссию. Кто что говорит? Соотнесите высказывания с участниками. Текст звучит один раз.',
          options: ['Moderatorin', 'Thomas Stein', 'Dr. Leyla Yilmaz'],
          items: [
            {
              kind: 'match',
              prompt: '1. Für manche Geschäfte hängt das wirtschaftliche Ergebnis des ganzen Jahres von diesem Tag ab.',
              answer: 1,
              explanationRu: 'Стейн: для некоторых выходные вокруг Black Friday решают, закончится ли год с прибылью или убытком.',
            },
            {
              kind: 'match',
              prompt: '2. Viele Preisnachlässe sind in Wirklichkeit kleiner, als sie scheinen.',
              answer: 2,
              explanationRu: 'Йылмаз: многие «сниженные» товары незадолго до этого стоили столько же.',
            },
            {
              kind: 'match',
              prompt: '3. Unseriöse Händler schaden dem Ansehen aller.',
              answer: 1,
              explanationRu: 'Стейн признаёт, что есть «паршивые овцы», и это вредит репутации всей отрасли.',
            },
            {
              kind: 'match',
              prompt: '4. Was Menschen über Nachhaltigkeit sagen, passt nicht zu ihrem Verhalten.',
              answer: 0,
              explanationRu: 'Модератор: в опросах людям важна экологичность, но магазины в Black Friday всё равно переполнены.',
            },
            {
              kind: 'match',
              prompt: '5. Nach Aktionstagen wird besonders viel Ware zurückgeschickt.',
              answer: 2,
              explanationRu: 'Йылмаз: после таких дней число возвратов заметно растёт, часть товара уничтожают.',
            },
            {
              kind: 'match',
              prompt: '6. Viele Kunden nutzen den Tag, um notwendige Anschaffungen günstiger zu machen.',
              answer: 1,
              explanationRu: 'Стейн: многие ждут этого дня, чтобы купить, например, нужную стиральную машину, — это разумное планирование.',
            },
          ],
        },
      ],
    },
  ],
};
