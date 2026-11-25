import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    // ---------- choice ----------
    {
      type: 'choice',
      prompt: 'Die Löhne in der Region sind deutlich gestiegen. ___ bleibt der Standort für viele Investoren attraktiv.',
      options: ['Obwohl', 'Dennoch', 'Trotz', 'Zwar'],
      answer: 1,
      explanationRu:
        'После пропуска сразу идёт спрягаемый глагол («bleibt») → нужно союзное наречие на позиции 1: «Dennoch» (тем не менее). «Obwohl» требует глагола в конце, «trotz» — существительного, «zwar» требует пары с «aber».',
    },
    {
      type: 'choice',
      prompt: 'Die Exporte nach Asien sind eingebrochen, ___ die Nachfrage aus Nordamerika stabil geblieben ist.',
      options: ['während', 'dagegen', 'hingegen', 'jedoch'],
      answer: 0,
      explanationRu:
        'Глагол стоит в конце («geblieben ist») → нужен подчинительный союз. «während» здесь имеет противительное значение («тогда как»). «dagegen, hingegen, jedoch» — наречия, после них нужен другой порядок слов.',
    },
    {
      type: 'choice',
      prompt: 'Das Abkommen tritt im Januar in Kraft, ___, eines der nationalen Parlamente legt noch ein Veto ein.',
      options: ['sofern', 'vorausgesetzt dass', 'es sei denn', 'falls'],
      answer: 2,
      explanationRu:
        '«es sei denn» («если только не») вводит исключение, и после него следует порядок главного предложения (глагол на 2-м месте: «legt … ein»). «sofern» и «falls» требовали бы глагола в конце и не имеют значения исключения.',
    },
    {
      type: 'choice',
      prompt:
        'Industrieländer und Schwellenländer profitieren gleichermaßen vom Handel; ___ verzeichnen dabei allerdings höhere Wachstumsraten, da sie von einem niedrigeren Niveau aus starten.',
      options: ['Erstere', 'Letztere', 'Ersterer', 'Letzteres'],
      answer: 1,
      explanationRu:
        '«Letztere» (мн. ч.) отсылает к последнему из названных — к развивающимся рынкам, которые стартуют с более низкого уровня. «Ersterer / Letzteres» не согласуются с мн. ч.',
    },
    {
      type: 'choice',
      prompt: 'Die Firma verlagert ihre Produktion nur, ___ sich die Kosten dadurch spürbar senken lassen.',
      options: ['insofern', 'sofern', 'indem', 'sodass'],
      answer: 1,
      explanationRu:
        '«sofern» = «при условии, что» (условие). Не путайте с коррелятом «insofern» (пара «insofern … als»). «indem» обозначает способ, «sodass» — следствие.',
    },
    {
      type: 'choice',
      prompt: 'Die Abhängigkeit von einem einzigen Lieferanten ist ___ gefährlicher, als dieser in einer politisch instabilen Region sitzt.',
      options: ['desto', 'so', 'je', 'umso'],
      answer: 3,
      explanationRu:
        'Конструкция «umso + сравнительная степень, als …» = «тем более …, что …» указывает на особенно весомую причину. «desto» и «je» употребляются только в паре «je … desto».',
    },
    // ---------- gap ----------
    {
      type: 'gap',
      prompt: 'Die Zölle auf Stahl wurden verdoppelt. ___ sind viele Baumaterialien deutlich teurer geworden.',
      answers: ['Infolgedessen', 'Folglich', 'Demzufolge', 'Deshalb', 'Daher', 'Deswegen', 'Darum', 'Somit', 'Dadurch', 'Also'],
      hintRu: '«вследствие этого»',
      explanationRu:
        '«Infolgedessen» (вследствие этого) — союзное наречие следствия на позиции 1, поэтому за ним сразу идёт спрягаемый глагол «sind».',
    },
    {
      type: 'gap',
      prompt: 'Das Unternehmen investiert nicht nur in Südostasien, ___ zunehmend auch in Afrika.',
      answers: ['sondern'],
      explanationRu: 'Повторение B2: двойной союз «nicht nur …, sondern (auch)» — «не только …, но и».',
    },
    {
      type: 'gap',
      prompt: 'Viele Schwellenländer haben ___ von der Globalisierung profitiert, gleichzeitig hat dort aber die soziale Ungleichheit zugenommen.',
      answers: ['zwar'],
      explanationRu:
        '«zwar … aber» вводит уступку: первая часть признаёт факт, вторая ограничивает его. «zwar» стоит в среднем поле или на позиции 1.',
    },
    {
      type: 'gap',
      prompt: 'Die Lieferketten müssen widerstandsfähiger werden; ___ drohen bei der nächsten Krise erneut massive Engpässe.',
      answers: ['andernfalls', 'sonst', 'ansonsten', 'anderenfalls'],
      hintRu: '«в противном случае»',
      explanationRu:
        '«andernfalls / sonst» вводит негативное последствие, если условие не выполнено. Как союзное наречие на позиции 1 требует инверсии: «drohen».',
    },
    {
      type: 'gap',
      prompt: 'Die Folgen des Freihandelsabkommens fallen sehr unterschiedlich aus, ___ welche Branche man betrachtet.',
      answers: ['je nachdem'],
      hintRu: '«в зависимости от того»',
      explanationRu:
        '«je nachdem, ob / wie / welche …» — «в зависимости от того, …». Вводит придаточное с глаголом в конце.',
    },
    {
      type: 'gap',
      prompt: '___ diesem Hintergrund ist es wenig überraschend, dass immer mehr Firmen auf regionale Zulieferer setzen.',
      answers: ['Vor'],
      explanationRu:
        'Устойчивое отсылочное выражение «vor diesem Hintergrund» («на этом фоне, с учётом этого») связывает новый тезис с предыдущим контекстом.',
    },
    {
      type: 'gap',
      prompt: 'Ich halte den Freihandel für sinnvoll, ___ soziale und ökologische Mindeststandards eingehalten werden.',
      answers: ['sofern', 'solange', 'wenn', 'falls', 'vorausgesetzt, dass', 'vorausgesetzt dass'],
      hintRu: '«при условии, что»',
      explanationRu:
        'Условие с глаголом в конце: «sofern / solange / vorausgesetzt, dass …». Без «dass» после «vorausgesetzt» был бы нужен порядок главного предложения.',
    },
    // ---------- order ----------
    {
      type: 'order',
      words: ['Darüber hinaus', 'hat der Handelskonflikt', 'die Preise', 'in die Höhe', 'getrieben.'],
      translationRu: 'Кроме того, торговый конфликт привёл к росту цен.',
      explanationRu:
        '«Darüber hinaus» (кроме того) — добавляющий коннектор на позиции 1; за ним спрягаемый глагол «hat», подлежащее и причастие в конце.',
    },
    {
      type: 'order',
      words: ['Die Regierung', 'setzt', 'einerseits', 'auf Freihandel,', 'andererseits', 'schützt', 'sie', 'die heimische Landwirtschaft.'],
      translationRu: 'С одной стороны, правительство делает ставку на свободную торговлю, с другой — защищает отечественное сельское хозяйство.',
      explanationRu:
        '«einerseits» стоит в среднем поле первой части, «andererseits» — на позиции 1 второй части, поэтому за ним идёт глагол «schützt», затем подлежащее «sie».',
    },
    {
      type: 'order',
      words: ['Die Kosten', 'sind', 'so stark', 'gestiegen,', 'dass', 'die Fabrik', 'geschlossen', 'werden musste.'],
      translationRu: 'Расходы выросли так сильно, что фабрику пришлось закрыть.',
      explanationRu:
        'Конструкция следствия «so + наречие …, dass …»: «so» стоит в главном предложении перед наречием, придаточное с «dass» имеет глагол в конце (пассив с модальным глаголом).',
    },
    // ---------- transform ----------
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью «zwar … aber».',
      prompt: 'Die Globalisierung hat den Wohlstand vermehrt. Sie hat auch neue Abhängigkeiten geschaffen.',
      answers: [
        'Die Globalisierung hat zwar den Wohlstand vermehrt, aber auch neue Abhängigkeiten geschaffen.',
        'Die Globalisierung hat zwar den Wohlstand vermehrt, sie hat aber auch neue Abhängigkeiten geschaffen.',
        'Die Globalisierung hat zwar den Wohlstand vermehrt, aber sie hat auch neue Abhängigkeiten geschaffen.',
        'Zwar hat die Globalisierung den Wohlstand vermehrt, aber sie hat auch neue Abhängigkeiten geschaffen.',
        'Zwar hat die Globalisierung den Wohlstand vermehrt, sie hat aber auch neue Abhängigkeiten geschaffen.',
      ],
      explanationRu:
        '«zwar» стоит в первой части (в среднем поле или на позиции 1 с инверсией), «aber» — во второй. При одинаковом подлежащем вторую часть можно сократить.',
    },
    {
      type: 'transform',
      instructionRu: 'Замените придаточное с «obwohl» конструкцией с союзным наречием «dennoch».',
      prompt: 'Obwohl die Transportkosten gestiegen sind, importiert das Unternehmen weiterhin aus Übersee.',
      answers: [
        'Die Transportkosten sind gestiegen; dennoch importiert das Unternehmen weiterhin aus Übersee.',
        'Die Transportkosten sind gestiegen, dennoch importiert das Unternehmen weiterhin aus Übersee.',
        'Die Transportkosten sind gestiegen. Dennoch importiert das Unternehmen weiterhin aus Übersee.',
        'Die Transportkosten sind gestiegen; das Unternehmen importiert dennoch weiterhin aus Übersee.',
        'Die Transportkosten sind gestiegen, das Unternehmen importiert dennoch weiterhin aus Übersee.',
        'Die Transportkosten sind gestiegen. Das Unternehmen importiert dennoch weiterhin aus Übersee.',
      ],
      explanationRu:
        'Придаточное с «obwohl» становится самостоятельным предложением, а уступка выражается наречием «dennoch»: на позиции 1 (с инверсией) или в среднем поле.',
    },
    {
      type: 'transform',
      instructionRu: 'Перефразируйте условие с помощью «es sei denn».',
      prompt: 'Wenn die Regierung nicht eingreift, wird die Werft schließen.',
      answers: [
        'Die Werft wird schließen, es sei denn, die Regierung greift ein.',
        'Die Werft wird schließen, es sei denn, dass die Regierung eingreift.',
      ],
      explanationRu:
        '«wenn … nicht» = «es sei denn» (если только не). Отрицание исчезает. После «es sei denn,» — порядок главного предложения либо придаточное с «dass».',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения с помощью конструкции «umso + Komparativ, als».',
      prompt: 'Die Abhängigkeit von Rohstoffimporten ist riskant. Das gilt besonders, weil viele Lieferländer politisch instabil sind.',
      answers: ['Die Abhängigkeit von Rohstoffimporten ist umso riskanter, als viele Lieferländer politisch instabil sind.'],
      explanationRu:
        '«umso riskanter, als …» = «тем более рискованно, что …». Прилагательное ставится в сравнительную степень, «als» открывает придаточное с глаголом в конце.',
    },
  ],

  reading: [
    {
      title: 'Kehren die Fabriken zurück?',
      textType: 'Zeitungsartikel',
      texts: [
        {
          body: `Jahrzehntelang schien die Richtung klar: Wer in Europa produzierte, suchte nach Möglichkeiten, Teile der Fertigung in Länder mit niedrigeren Löhnen zu verlagern. Ganze Branchen – von der Textilindustrie bis zur Elektronik – folgten diesem Muster. Spätestens seit der Pandemie jedoch hat ein Umdenken eingesetzt. Als Containerschiffe vor überfüllten Häfen festlagen und Bauteile im Wert weniger Cent ganze Produktionsstraßen lahmlegten, wurde vielen Unternehmen schlagartig bewusst, wie verwundbar ihre weit verzweigten Lieferketten waren.

Seitdem ist viel von „Nearshoring“ die Rede, also davon, Produktion in geografisch nähere Länder zurückzuholen – etwa nach Osteuropa, in die Türkei oder nach Nordafrika. Ein mittelständischer Hersteller von Medizintechnik aus Baden-Württemberg etwa hat einen Teil seiner Fertigung von Südchina nach Rumänien verlegt. Die Lohnkosten seien dort zwar höher, räumt der Geschäftsführer ein, dafür betrage die Lieferzeit nun drei Tage statt sechs Wochen. Zudem könne man Qualitätsprobleme schneller beheben, weil die eigenen Ingenieure in wenigen Stunden vor Ort seien.

Wie weit verbreitet dieser Trend tatsächlich ist, lässt sich allerdings schwer beziffern. Umfragen unter Unternehmen zeichnen ein widersprüchliches Bild: Zwar gibt ein erheblicher Teil an, Verlagerungen zu prüfen oder zu planen, doch nur ein Bruchteil hat solche Pläne bislang umgesetzt. Wirtschaftsforscher warnen deshalb davor, aus einzelnen Erfolgsgeschichten auf eine grundlegende Trendwende zu schließen. Der Aufbau neuer Standorte sei teuer und langwierig; geeignete Zulieferer müssten erst gefunden, Fachkräfte erst ausgebildet werden.

Hinzu kommt, dass Nähe allein keine Sicherheit garantiert. Auch Produktionsstandorte in Europa sind vor Energiekrisen, Streiks oder Naturkatastrophen nicht gefeit. Viele Fachleute halten es daher für sinnvoller, Lieferketten zu diversifizieren, statt sie lediglich zu verkürzen. Gemeint ist, sich bei wichtigen Vorprodukten nicht auf einen einzigen Lieferanten oder ein einziges Land zu verlassen, sondern mehrere Bezugsquellen aufzubauen – selbst wenn das zunächst höhere Kosten verursacht. „Resilienz hat ihren Preis“, sagt eine Logistikexpertin. „Die Frage ist, ob die Kundschaft bereit ist, ihn mitzutragen.“

Genau darin liegt ein Kernproblem. Solange sich Konsumentinnen und Konsumenten vor allem am Preis orientieren, geraten Unternehmen, die in widerstandsfähigere, aber teurere Strukturen investieren, gegenüber der Konkurrenz ins Hintertreffen. Einige Ökonomen fordern deshalb politische Rahmenbedingungen, die Resilienz belohnen – etwa Vorgaben zur Lagerhaltung bei kritischen Gütern wie Medikamenten. Andere warnen, derartige Eingriffe könnten leicht in Protektionismus umschlagen, der am Ende allen schade.

Fest steht: Das Bild einer Welt, in der Waren stets dort hergestellt werden, wo es am billigsten ist, hat Risse bekommen. Ob daraus eine neue Ordnung entsteht oder lediglich eine vorsichtigere Variante der alten, ist noch nicht ausgemacht.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Artikel und lösen Sie die Aufgaben. Welche Antwort ist richtig?',
          instructionRu: 'Прочитайте статью и выполните задания. Какой ответ правильный?',
          items: [
            {
              kind: 'mc',
              question: 'Was hat laut Text das Umdenken in vielen Unternehmen ausgelöst?',
              options: [
                'deutlich steigende Löhne in asiatischen Ländern',
                'Störungen der Lieferketten während der Pandemie',
                'neue gesetzliche Vorgaben der Europäischen Union',
              ],
              answer: 1,
              explanationRu:
                'Во время пандемии суда простаивали у портов, а дешёвые детали останавливали производство — компании осознали уязвимость цепочек поставок.',
            },
            {
              kind: 'mc',
              question: 'Welchen Vorteil nennt der Geschäftsführer des Medizintechnik-Herstellers?',
              options: [
                'kürzere Lieferzeiten und eine schnellere Behebung von Qualitätsproblemen',
                'niedrigere Lohnkosten als in Südchina',
                'großzügige staatliche Förderung in Rumänien',
              ],
              answer: 0,
              explanationRu:
                'Зарплаты в Румынии «zwar höher», но срок поставки — три дня вместо шести недель, а инженеры быстро добираются до места.',
            },
            {
              kind: 'mc',
              question: 'Was zeigen Umfragen unter Unternehmen?',
              options: [
                'Die meisten Firmen haben ihre Produktion bereits zurückverlagert.',
                'Kaum ein Unternehmen denkt über Verlagerungen nach.',
                'Viele erwägen Verlagerungen, aber nur wenige haben sie umgesetzt.',
              ],
              answer: 2,
              explanationRu: '«Zwar gibt ein erheblicher Teil an, Verlagerungen zu prüfen …, doch nur ein Bruchteil hat solche Pläne bislang umgesetzt.»',
            },
            {
              kind: 'mc',
              question: 'Warum halten viele Fachleute eine Diversifizierung für sinnvoller als eine bloße Verkürzung der Lieferketten?',
              options: [
                'weil Diversifizierung kurzfristig Kosten spart',
                'weil auch nahe gelegene Standorte Risiken ausgesetzt sind',
                'weil Diversifizierung schneller umzusetzen ist',
              ],
              answer: 1,
              explanationRu:
                '«Nähe allein [garantiert] keine Sicherheit»: и в Европе возможны энергетические кризисы, забастовки, стихийные бедствия. Диверсификация при этом сначала дороже.',
            },
            {
              kind: 'mc',
              question: 'Welches Problem sieht der Artikel im Verhalten der Konsumenten?',
              options: [
                'Sie kaufen grundsätzlich zu wenige europäische Produkte.',
                'Sie verlangen von der Politik protektionistische Maßnahmen.',
                'Ihre starke Preisorientierung benachteiligt Unternehmen, die in Resilienz investieren.',
              ],
              answer: 2,
              explanationRu:
                'Пока покупатели ориентируются на цену, компании с более устойчивыми, но дорогими структурами «geraten … ins Hintertreffen».',
            },
            {
              kind: 'mc',
              question: 'Welches Fazit zieht der Artikel?',
              options: [
                'Die Globalisierung ist endgültig vorbei.',
                'Wie grundlegend der Wandel ausfällt, ist noch offen.',
                'Nearshoring hat sich bereits flächendeckend durchgesetzt.',
              ],
              answer: 1,
              explanationRu: '«Ob daraus eine neue Ordnung entsteht oder lediglich eine vorsichtigere Variante der alten, ist noch nicht ausgemacht.»',
            },
          ],
        },
      ],
    },
    {
      title: 'Kann fairer Handel die Welt verbessern?',
      textType: 'Meinungsbeiträge',
      texts: [
        {
          label: 'A',
          heading: 'Johanna Brenner, Inhaberin eines Weltladens',
          body: `Seit fünfzehn Jahren verkaufe ich fair gehandelte Produkte, und ich erlebe immer wieder, dass Kundinnen und Kunden durchaus bereit sind, mehr zu bezahlen – vorausgesetzt, sie wissen, wofür. Wenn ich erzähle, wie die Kooperative arbeitet, von der unser Kaffee stammt, greifen viele bewusst zum teureren Produkt. Das Entscheidende am fairen Handel sind für mich die garantierten Mindestpreise. Sie schützen die Erzeuger davor, bei jedem Einbruch der Weltmarktpreise in existenzielle Not zu geraten. Natürlich ist unser Marktanteil nach wie vor klein. Gerade deshalb brauchen wir mehr Aufklärung, nicht weniger.`,
        },
        {
          label: 'B',
          heading: 'Dr. Felix Hahn, Entwicklungsökonom',
          body: `Ich halte den fairen Handel für gut gemeint, warne aber vor überzogenen Erwartungen. Die Effekte auf das Einkommen der Bauern sind empirisch erstaunlich schwer nachzuweisen; die Studienlage ist uneinheitlich. Hinzu kommt ein strukturelles Problem: Die Zertifizierung kostet Geld, und das können sich gerade die ärmsten Kleinbauern oft nicht leisten. Sie bleiben folglich außen vor. Weit größere Wirkung hätten aus meiner Sicht politische Maßnahmen – etwa ein Abbau der Agrarsubventionen in reichen Ländern, die Produzenten im globalen Süden seit Jahrzehnten benachteiligen.`,
        },
        {
          label: 'C',
          heading: 'Amara Owusu, Kakaobäuerin aus Ghana (übersetzt)',
          body: `Mit der Prämie aus dem fairen Handel haben wir in unserem Dorf eine Schule renoviert und einen neuen Brunnen gebaut. Dafür bin ich dankbar. Aber ehrlich gesagt reicht das, was ich für meinen Kakao bekomme, trotzdem kaum zum Leben. Das eigentliche Problem ist, dass wir nur die Rohbohnen verkaufen. Die Schokolade, an der richtig verdient wird, entsteht in Europa. Solange die Verarbeitung nicht auch bei uns stattfindet, bleibt der größte Teil des Gewinns woanders. Daran ändert auch das schönste Siegel nichts.`,
        },
        {
          label: 'D',
          heading: 'Martin Kleist, Leser aus Kassel',
          body: `Ich will ja verantwortungsvoll einkaufen, aber im Supermarkt stehe ich vor einem regelrechten Siegeldschungel. Mal ist es ein grünes Blatt, mal ein Frosch, mal irgendein Logo, das sich ein Konzern selbst ausgedacht hat. Welchem soll man da noch trauen? Inzwischen kaufe ich, wenn möglich, einfach regional ein. Ich finde, man überfordert die Verbraucher, wenn man ihnen die Verantwortung für die Zustände in der Welt aufbürdet. Es kann doch nicht sein, dass ich beim Wocheneinkauf ausgleichen soll, was Unternehmen und Regierungen versäumen.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Beiträge. Welche Aussage passt zu welcher Person? Die Personen können mehrmals gewählt werden.',
          instructionRu: 'Прочитайте высказывания. Какое утверждение относится к какому человеку? Людей можно выбирать несколько раз.',
          options: ['Johanna Brenner', 'Felix Hahn', 'Amara Owusu', 'Martin Kleist'],
          items: [
            {
              kind: 'match',
              prompt: 'Käufer zahlen höhere Preise, wenn sie über die Herkunft der Waren informiert sind.',
              answer: 0,
              explanationRu: 'Бреннер: покупатели готовы платить больше, «vorausgesetzt, sie wissen, wofür».',
            },
            {
              kind: 'match',
              prompt: 'Die Vielzahl an Gütesiegeln stiftet eher Verwirrung.',
              answer: 3,
              explanationRu: 'Кляйст: «Siegeldschungel» — непонятно, какому знаку доверять.',
            },
            {
              kind: 'match',
              prompt: 'Die Kosten der Zertifizierung können gerade die Bedürftigsten ausschließen.',
              answer: 1,
              explanationRu: 'Хан: сертификация стоит денег, беднейшие мелкие фермеры «bleiben folglich außen vor».',
            },
            {
              kind: 'match',
              prompt: 'Entscheidend wäre, dass mehr Wertschöpfung im Herkunftsland stattfindet.',
              answer: 2,
              explanationRu: 'Овусу: пока переработка какао происходит в Европе, основная прибыль остаётся там.',
            },
            {
              kind: 'match',
              prompt: 'Es ist unangemessen, den Verbrauchern die Verantwortung für globale Missstände aufzuerlegen.',
              answer: 3,
              explanationRu: 'Кляйст: «man überfordert die Verbraucher, wenn man ihnen die Verantwortung … aufbürdet».',
            },
            {
              kind: 'match',
              prompt: 'Die Wirkung des fairen Handels lässt sich wissenschaftlich kaum eindeutig belegen.',
              answer: 1,
              explanationRu: 'Хан: эффекты «empirisch erstaunlich schwer nachzuweisen; die Studienlage ist uneinheitlich».',
            },
            {
              kind: 'match',
              prompt: 'Mit dem Aufpreis wurden konkrete Verbesserungen vor Ort finanziert.',
              answer: 2,
              explanationRu: 'Овусу: на премию отремонтировали школу и построили колодец в деревне.',
            },
            {
              kind: 'match',
              prompt: 'Feste Untergrenzen beim Preis bewahren Erzeuger vor den Folgen von Marktschwankungen.',
              answer: 0,
              explanationRu: 'Бреннер: гарантированные минимальные цены защищают производителей при падении мировых цен.',
            },
          ],
        },
      ],
    },
  ],

  listening: [
    {
      title: 'Interview: Die erste Globalisierung',
      kind: 'dialog',
      speakers: { A: 'Moderatorin', B: 'Prof. Dr. Stefan Krüger, Wirtschaftshistoriker' },
      situation: 'Sie hören ein Interview mit einem Wirtschaftshistoriker über die Geschichte der Globalisierung.',
      text: `A: Herr Professor Krüger, wenn heute von Globalisierung die Rede ist, denken die meisten an Containerschiffe, das Internet und internationale Konzerne. Sie behaupten aber, das Phänomen sei viel älter. Inwiefern?
B: Nun, Fernhandel gab es schon in der Antike – denken Sie an die Seidenstraße. Aber das meine ich gar nicht in erster Linie. Wirtschaftshistoriker sprechen von einer ersten Globalisierung, die etwa um 1870 einsetzte und mit dem Ersten Weltkrieg abrupt endete. In diesen Jahrzehnten wuchs der Welthandel rasant, Kapital floss in großem Umfang über Grenzen hinweg, und Millionen Menschen wanderten aus, vor allem von Europa nach Amerika.
A: Was hat diese Entwicklung damals ermöglicht?
B: Im Wesentlichen technische Neuerungen, die die Transport- und Kommunikationskosten drastisch senkten. Dampfschiffe machten die Atlantiküberquerung schneller und berechenbarer, Eisenbahnen erschlossen das Landesinnere ganzer Kontinente. Und dank des Telegrafenkabels durch den Atlantik konnten Händler in London plötzlich innerhalb von Minuten erfahren, was Weizen in Chicago kostete. Das war, wenn Sie so wollen, das Internet des neunzehnten Jahrhunderts.
A: Und warum ging diese erste Globalisierung zu Ende?
B: Der Krieg war der Auslöser, aber nicht die alleinige Ursache. Schon vorher hatten viele Länder ihre Zölle wieder erhöht, weil die heimische Landwirtschaft unter der billigen Konkurrenz aus Übersee litt. Nach dem Krieg verschärfte sich dieser Protektionismus, und mit der Weltwirtschaftskrise brach der internationale Handel regelrecht zusammen. Es hat Jahrzehnte gedauert, bis der Anteil des Handels an der Wirtschaftsleistung wieder das Niveau von 1913 erreichte.
A: Welche Lehre ziehen Sie daraus für heute?
B: Vor allem diese: Globalisierung ist kein Naturgesetz, das sich unaufhaltsam fortsetzt. Sie beruht auf politischen Entscheidungen und kann folglich auch durch politische Entscheidungen zurückgedreht werden. Wer Freihandel für selbstverständlich hält, unterschätzt, wie zerbrechlich diese Ordnung ist.
A: Sehen Sie Parallelen zur Gegenwart?
B: Durchaus, auch wenn man mit historischen Vergleichen vorsichtig sein sollte. Damals wie heute gab es Gruppen, die von der Öffnung der Märkte enorm profitierten, und andere, die sich als Verlierer fühlten – oft zu Recht. Wenn die Politik die Sorgen dieser Verlierer ignoriert, wächst der Druck, sich abzuschotten. Insofern ist die Frage, wie die Gewinne der Globalisierung verteilt werden, nicht nur eine Frage der Gerechtigkeit, sondern auch eine Frage ihrer Stabilität.
A: Gibt es denn auch wichtige Unterschiede?
B: Natürlich. Heute sind die Produktionsprozesse viel stärker miteinander verflochten. Ein Auto besteht aus Tausenden Teilen aus Dutzenden Ländern, wohingegen man um 1900 vor allem mit Rohstoffen und fertigen Waren handelte. Eine Abkopplung wäre heute daher sehr viel teurer – was einerseits stabilisierend wirkt, andererseits aber auch die Verwundbarkeit erhöht.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören das Interview zweimal. Wählen Sie die richtige Antwort.',
          instructionRu: 'Вы слушаете интервью дважды. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was versteht Professor Krüger unter der „ersten Globalisierung“?',
              options: [
                'den Fernhandel entlang der Seidenstraße',
                'eine Phase von etwa 1870 bis zum Ersten Weltkrieg',
                'den Aufschwung des Welthandels nach 1945',
              ],
              answer: 1,
              explanationRu: 'Первая глобализация «etwa um 1870 einsetzte und mit dem Ersten Weltkrieg abrupt endete». Шёлковый путь он прямо исключает.',
            },
            {
              kind: 'mc',
              question: 'Welche Bedeutung hatte das Telegrafenkabel durch den Atlantik?',
              options: [
                'Es ermöglichte, Preisinformationen sehr schnell zu übermitteln.',
                'Es machte den Transport von Waren per Schiff überflüssig.',
                'Es wurde vor allem für militärische Zwecke genutzt.',
              ],
              answer: 0,
              explanationRu: 'Торговцы в Лондоне за минуты узнавали цену пшеницы в Чикаго — «das Internet des neunzehnten Jahrhunderts».',
            },
            {
              kind: 'mc',
              question: 'Warum endete die erste Globalisierung laut Krüger?',
              options: [
                'ausschließlich wegen des Ersten Weltkriegs',
                'weil die Auswanderung nach Amerika gestoppt wurde',
                'durch das Zusammenwirken von Krieg, Zollerhöhungen und Wirtschaftskrise',
              ],
              answer: 2,
              explanationRu:
                'Война была «der Auslöser, aber nicht die alleinige Ursache»: пошлины повышали ещё до неё, затем протекционизм и мировой экономический кризис.',
            },
            {
              kind: 'mc',
              question: 'Welche Lehre zieht Krüger aus der Geschichte?',
              options: [
                'Die Globalisierung ist ein unumkehrbarer Prozess.',
                'Die Globalisierung hängt von politischen Entscheidungen ab und kann rückgängig gemacht werden.',
                'Freihandel schadet langfristig allen beteiligten Ländern.',
              ],
              answer: 1,
              explanationRu: '«Globalisierung ist kein Naturgesetz … Sie beruht auf politischen Entscheidungen und kann folglich auch … zurückgedreht werden.»',
            },
            {
              kind: 'mc',
              question: 'Warum ist die Verteilung der Gewinne aus Krügers Sicht so wichtig?',
              options: [
                'weil sie über die Stabilität der Globalisierung mitentscheidet',
                'weil sonst die Exporte der Industrieländer sinken',
                'weil die Verlierer sonst massenhaft auswandern',
              ],
              answer: 0,
              explanationRu:
                'Если политика игнорирует проигравших, растёт давление в пользу изоляции; распределение — «nicht nur eine Frage der Gerechtigkeit, sondern auch … ihrer Stabilität».',
            },
            {
              kind: 'mc',
              question: 'Worin unterscheidet sich die heutige Globalisierung von der damaligen?',
              options: [
                'Heute wird insgesamt weniger gehandelt als um 1900.',
                'Heute handelt man vor allem mit Rohstoffen.',
                'Heute sind die Produktionsprozesse international viel stärker verflochten.',
              ],
              answer: 2,
              explanationRu: 'Автомобиль состоит из тысяч деталей из десятков стран, «wohingegen man um 1900 vor allem mit Rohstoffen und fertigen Waren handelte».',
            },
          ],
        },
      ],
    },
    {
      title: 'Vortrag: Virtuelles Wasser',
      kind: 'monolog',
      situation: 'Sie hören einen Vortrag im Rahmen einer Tagung zum Thema Ressourcen und Welthandel.',
      text: `Guten Tag, meine Damen und Herren. In meinem heutigen Vortrag möchte ich Ihnen ein Konzept vorstellen, das die Debatte über Globalisierung und Ressourcen in den vergangenen Jahrzehnten maßgeblich geprägt hat: das sogenannte virtuelle Wasser. Der Begriff wurde Anfang der Neunzigerjahre von dem britischen Geografen John Anthony Allan eingeführt. Gemeint ist die Wassermenge, die bei der Herstellung eines Produkts verbraucht wird, die man dem fertigen Produkt aber nicht mehr ansieht.

Lassen Sie mich das an einem Beispiel verdeutlichen. Für eine einzige Tasse Kaffee werden Schätzungen zufolge rund 130 Liter Wasser benötigt – für die Bewässerung der Pflanzen, die Verarbeitung der Bohnen und so weiter. Für ein Kilogramm Rindfleisch sind es sogar über 15.000 Liter. Wer also Kaffee aus Äthiopien oder Rindfleisch aus Argentinien kauft, importiert gewissermaßen auch das Wasser, das dort zu ihrer Erzeugung eingesetzt wurde.

Warum ist das relevant? Zunächst einmal macht das Konzept sichtbar, dass Länder wie Deutschland einen erheblichen Teil ihres Wasserbedarfs nicht aus eigenen Quellen decken, sondern über den Handel. Demnach ist unser tatsächlicher Wasserverbrauch um ein Vielfaches höher als die rund 125 Liter, die jeder von uns täglich aus der Leitung entnimmt.

Nun könnte man vorschnell schließen, wir sollten auf Importe aus trockenen Regionen grundsätzlich verzichten. Ganz so einfach ist es indes nicht. Allan selbst hat nämlich auf einen ganz anderen Aspekt hingewiesen: Für wasserarme Länder kann es durchaus sinnvoll sein, wasserintensive Güter wie Getreide zu importieren, statt sie selbst anzubauen. Auf diese Weise schonen sie ihre knappen Reserven. Der Handel mit virtuellem Wasser kann insofern sogar zur Entschärfung von Konflikten beitragen, als er den Druck auf umkämpfte Flüsse und Grundwasservorkommen verringert.

Problematisch wird es allerdings, wenn der Handel in die umgekehrte Richtung läuft – wenn also ausgerechnet Regionen, in denen Wasser knapp ist, große Mengen wasserintensiver Exportgüter produzieren. Denken Sie an den Anbau von Avocados oder Baumwolle in Gebieten, in denen die Grundwasserspiegel seit Jahren sinken. Die Gewinne fließen hier häufig an internationale Abnehmer, wohingegen die Folgen – ausgetrocknete Brunnen, versalzte Böden – vor Ort von der lokalen Bevölkerung getragen werden.

Was folgt daraus für Politik und Verbraucher? Ich möchte hier ausdrücklich vor einfachen Rezepten warnen. Entscheidend ist nicht allein, wie viel Wasser in einem Produkt steckt, sondern woher dieses Wasser stammt: Regenwasser, das ohnehin auf eine Weide fällt, ist anders zu bewerten als Grundwasser, das in einer Wüstenregion abgepumpt wird. Seriöse Bewertungen müssen also den regionalen Kontext berücksichtigen, zumal sich die Lage durch den Klimawandel in vielen Anbaugebieten weiter verschärfen dürfte. In der anschließenden Diskussion freue ich mich auf Ihre Fragen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Sie hören den Vortrag zweimal. Wählen Sie die richtige Antwort.',
          instructionRu: 'Вы слушаете доклад дважды. Выберите правильный ответ.',
          items: [
            {
              kind: 'mc',
              question: 'Was versteht man unter „virtuellem Wasser“?',
              options: [
                'Wasser, das in Flaschen exportiert wird',
                'Wasser, das bei der Herstellung eines Produkts verbraucht wird',
                'Wasser, das als Reserve im Boden gespeichert ist',
              ],
              answer: 1,
              explanationRu: '«die Wassermenge, die bei der Herstellung eines Produkts verbraucht wird, die man dem fertigen Produkt aber nicht mehr ansieht».',
            },
            {
              kind: 'mc',
              question: 'Wozu dienen die Beispiele Kaffee und Rindfleisch?',
              options: [
                'Sie sollen zeigen, dass mit Waren indirekt Wasser importiert wird.',
                'Sie sollen vom Konsum tierischer Produkte abraten.',
                'Sie sollen Unterschiede zwischen Äthiopien und Argentinien verdeutlichen.',
              ],
              answer: 0,
              explanationRu: 'Кто покупает такой кофе или мясо, «importiert gewissermaßen auch das Wasser», использованное при их производстве.',
            },
            {
              kind: 'mc',
              question: 'Welche Schlussfolgerung zieht die Rednerin für Deutschland?',
              options: [
                'Der Verbrauch von Leitungswasser ist in Deutschland zu hoch.',
                'Deutschland exportiert mehr virtuelles Wasser, als es importiert.',
                'Der tatsächliche Wasserverbrauch liegt weit über dem Verbrauch aus der Leitung.',
              ],
              answer: 2,
              explanationRu: '«Demnach ist unser tatsächlicher Wasserverbrauch um ein Vielfaches höher als die rund 125 Liter … aus der Leitung».',
            },
            {
              kind: 'mc',
              question: 'Auf welchen Gedanken von John Anthony Allan verweist die Rednerin?',
              options: [
                'Wasserarme Länder sollten grundsätzlich keine Lebensmittel importieren.',
                'Der Import wasserintensiver Güter kann wasserarme Länder entlasten.',
                'Getreide sollte vorrangig in Wüstenregionen angebaut werden.',
              ],
              answer: 1,
              explanationRu: 'Для засушливых стран разумно импортировать, например, зерно: «Auf diese Weise schonen sie ihre knappen Reserven».',
            },
            {
              kind: 'mc',
              question: 'Wann wird der Handel mit virtuellem Wasser problematisch?',
              options: [
                'wenn trockene Regionen wasserintensive Güter für den Export erzeugen',
                'wenn Industrieländer Getreide aus dem Ausland beziehen',
                'wenn für die Produktion überwiegend Regenwasser genutzt wird',
              ],
              answer: 0,
              explanationRu:
                'Проблема — когда именно засушливые регионы производят влагоёмкие экспортные товары (авокадо, хлопок): прибыль уходит, а последствия остаются на месте.',
            },
            {
              kind: 'mc',
              question: 'Was ist laut der Rednerin für eine seriöse Bewertung entscheidend?',
              options: [
                'allein die Wassermenge, die in einem Produkt steckt',
                'die Herkunft des Wassers und der regionale Kontext',
                'der Preis, den Verbraucher für ein Produkt zahlen',
              ],
              answer: 1,
              explanationRu:
                'Важно не только количество, но и «woher dieses Wasser stammt»: дождевая вода на пастбище ≠ грунтовые воды в пустыне.',
            },
          ],
        },
      ],
    },
  ],
};
