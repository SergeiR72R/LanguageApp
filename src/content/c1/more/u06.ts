import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Bei Verlust der Karte ___ der Kunde die Bank unverzüglich zu informieren.',
      options: ['ist', 'hat', 'wird', 'lässt'],
      answer: 1,
      explanationRu:
        'Клиент сам должен сообщить в банк — подлежащее является исполнителем, поэтому «haben + zu + Inf.» (= muss informieren).',
    },
    {
      type: 'gap',
      prompt: 'Das Formular ist vollständig und gut leserlich ___ (ausfüllen).',
      answers: ['auszufüllen'],
      hintRu: 'sein + zu + Infinitiv, отделяемый глагол',
      explanationRu:
        'Формуляр — объект действия → «sein + zu + Inf.». У отделяемого глагола «zu» стоит между приставкой и корнем: «auszufüllen».',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Der Schaden ist leicht zu beheben.“?',
      options: [
        'Der Schaden muss sofort behoben werden.',
        'Der Schaden kann leicht behoben werden.',
        'Der Schaden hat sich von selbst behoben.',
        'Der Schaden soll nicht behoben werden.',
      ],
      answer: 1,
      explanationRu:
        'Слова «leicht, schwer, kaum» указывают на значение возможности: «sein + zu» = «kann … werden».',
    },
    {
      type: 'gap',
      prompt: 'Die Zeugin ___ sich am Dienstag beim zuständigen Gericht zu melden.',
      answers: ['hat'],
      explanationRu:
        'Свидетельница сама должна явиться (активное действие) → «haben + zu + Inf.». С возвратным глаголом «sein + zu» невозможно.',
    },
    {
      type: 'gap',
      prompt: 'Die noch ___ (prüfen) Verträge liegen auf Ihrem Schreibtisch.',
      answers: ['zu prüfenden'],
      hintRu: 'Gerundivum',
      explanationRu:
        'Gerundivum: «zu» + Partizip I «prüfend» + окончание прилагательного. Мн. ч. после «die» → -en: «die zu prüfenden Verträge» (= die geprüft werden müssen).',
    },
    {
      type: 'choice',
      prompt: 'Welcher Satz ist korrekt?',
      options: [
        'Die Gebühr muss bis Montag zu bezahlen.',
        'Die Gebühr hat bis Montag zu bezahlen.',
        'Die Gebühr ist bis Montag zu bezahlt.',
        'Die Gebühr ist bis Montag zu bezahlen.',
      ],
      answer: 3,
      explanationRu:
        'Пошлину оплачивают (она — объект) → «ist … zu bezahlen». После «muss» не бывает «zu», «haben zu» требует подлежащего-исполнителя, а «zu» не сочетается с Partizip II.',
    },
    {
      type: 'gap',
      prompt: 'Der Verdacht gegen den Bürgermeister ___ sich bislang nicht erhärten.',
      answers: ['ließ', 'lässt'],
      explanationRu:
        '«sich lassen + Infinitiv» = пассив + «können»: подозрение не удалось/не удаётся подтвердить. Подходят формы «ließ» и «lässt».',
    },
    {
      type: 'gap',
      prompt: 'Ohne Zeugen ist die Tat kaum ___. (nachweisen → прилагательное)',
      answers: ['nachweisbar'],
      explanationRu:
        'Суффикс «-bar» = «можно сделать»: «nachweisbar» = «kann nachgewiesen werden». Синонимично «kaum nachzuweisen».',
    },
    {
      type: 'choice',
      prompt: 'Die vom Arbeitgeber ___ Fahrtkosten werden mit dem Gehalt überwiesen. (= die der Arbeitgeber erstatten muss)',
      options: ['erstatteten', 'erstattenden', 'zu erstattenden', 'zu erstattende'],
      answer: 2,
      explanationRu:
        'Значение долженствования передаёт только Gerundivum «zu erstattend-». Мн. ч. после «die» → -en. «erstatteten» = уже возмещённые (Partizip II), «erstattenden» = возмещающие (активно).',
    },
    {
      type: 'gap',
      prompt: 'In diesem Ausschuss ___ grundsätzlich hinter verschlossenen Türen verhandelt.',
      answers: ['wird'],
      explanationRu:
        'Бессубъектный пассив: «es wird verhandelt». Если первое место занято обстоятельством, «es» исчезает: «In diesem Ausschuss wird … verhandelt».',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Sie haben sich nicht in meine Angelegenheiten einzumischen.“?',
      options: [
        'Sie brauchen sich nicht in meine Angelegenheiten einzumischen.',
        'Sie können sich nicht in meine Angelegenheiten einmischen.',
        'Sie dürfen sich nicht in meine Angelegenheiten einmischen.',
        'Sie müssen sich in meine Angelegenheiten einmischen.',
      ],
      answer: 2,
      explanationRu:
        'Ловушка: «nicht … haben zu» выражает запрет (= nicht dürfen), а не отсутствие необходимости. «Не нужно» передаётся через «nicht brauchen zu».',
    },
    {
      type: 'gap',
      prompt: 'Der Gesetzgeber hat ___ zu sorgen, dass sensible Gesundheitsdaten wirksam geschützt werden.',
      answers: ['dafür'],
      hintRu: 'повторение: коррелят (C1-05)',
      explanationRu:
        '«sorgen für + Akk» → коррелят «dafür» перед придаточным с «dass». Конструкция «haben + zu» сохраняет управление глагола.',
    },
    {
      type: 'choice',
      prompt: 'Welche Konstruktion drückt NICHT „kann nicht … werden“ aus?',
      options: [
        'Das Ergebnis lässt sich nicht vorhersagen.',
        'Das Ergebnis ist nicht vorherzusagen.',
        'Das Ergebnis ist nicht vorhersagbar.',
        'Das Ergebnis ist nicht vorhergesagt worden.',
      ],
      answer: 3,
      explanationRu:
        '«sich lassen», «sein + zu» и прилагательное на «-bar» выражают (не)возможность. «ist nicht vorhergesagt worden» — обычный пассив перфекта: «не было предсказано».',
    },
    {
      type: 'order',
      words: ['Diese', 'Frage', 'lässt', 'sich', 'nicht', 'eindeutig', 'beantworten.'],
      translationRu: 'На этот вопрос нельзя однозначно ответить.',
      explanationRu:
        '«lässt» — на втором месте, «sich» — сразу после него, отрицание «nicht» — перед «eindeutig», инфинитив — в конце.',
    },
    {
      type: 'order',
      words: ['Der', 'Arbeitgeber', 'hat', 'die', 'privaten', 'E-Mails', 'nicht', 'zu lesen.'],
      translationRu: 'Работодатель не имеет права читать личные электронные письма.',
      explanationRu:
        '«hat» на втором месте, дополнение в середине, «nicht» перед «zu + Infinitiv» в конце. Смысл — запрет (= darf nicht lesen).',
    },
    {
      type: 'order',
      words: ['Die', 'bis Ende Mai abzugebende', 'Steuererklärung', 'liegt', 'noch', 'nicht', 'vor.'],
      translationRu: 'Налоговая декларация, которую нужно сдать до конца мая, ещё не представлена.',
      explanationRu:
        'Расширенное определение стоит между артиклем и существительным: обстоятельство «bis Ende Mai» — перед Gerundivum «abzugebende». Далее: «liegt … noch nicht vor».',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите с помощью «haben + zu + Infinitiv».',
      prompt: 'Der Antragsteller muss alle Belege im Original beifügen.',
      answers: ['Der Antragsteller hat alle Belege im Original beizufügen.'],
      explanationRu:
        'Подлежащее — исполнитель → «haben + zu». «muss beifügen» → «hat … beizufügen» (zu внутри отделяемого глагола).',
    },
    {
      type: 'transform',
      instructionRu: 'Замените модальный пассив конструкцией «sein + zu + Infinitiv».',
      prompt: 'Die Frist kann aus formalen Gründen nicht verlängert werden.',
      answers: ['Die Frist ist aus formalen Gründen nicht zu verlängern.'],
      explanationRu:
        '«kann nicht verlängert werden» → «ist nicht zu verlängern». Отрицание сохраняет значение невозможности.',
    },
    {
      type: 'transform',
      instructionRu: 'Раскройте Gerundivum с помощью относительного придаточного с модальным глаголом.',
      prompt: 'Die nicht zu unterschätzenden Risiken wurden lange ignoriert.',
      answers: [
        'Die Risiken, die nicht unterschätzt werden dürfen, wurden lange ignoriert.',
        'Die Risiken, die nicht unterschätzt werden sollten, wurden lange ignoriert.',
        'Die Risiken, die man nicht unterschätzen darf, wurden lange ignoriert.',
        'Die Risiken, die man nicht unterschätzen sollte, wurden lange ignoriert.',
        'Die Risiken, die nicht zu unterschätzen sind, wurden lange ignoriert.',
      ],
      explanationRu:
        '«nicht zu unterschätzend» = «die nicht unterschätzt werden dürfen/sollten». Относительное придаточное стоит после существительного и выделяется запятыми.',
    },
    {
      type: 'transform',
      instructionRu: 'Перепишите предложение с «man», используя «sich lassen + Infinitiv».',
      prompt: 'Man kann die Folgen dieser Entscheidung noch nicht absehen.',
      answers: [
        'Die Folgen dieser Entscheidung lassen sich noch nicht absehen.',
        'Noch lassen sich die Folgen dieser Entscheidung nicht absehen.',
      ],
      explanationRu:
        '«man kann … absehen» = «… lässt sich absehen». Бывшее прямое дополнение «die Folgen» становится подлежащим, поэтому глагол во мн. ч.: «lassen sich».',
    },
  ],
  reading: [
    {
      title: 'Wenn Ärzte nicht weiterwissen: Klinische Ethikkomitees',
      textType: 'Sachtext mit Lücken',
      texts: [
        {
          body: `An deutschen Krankenhäusern gehören klinische Ethikkomitees inzwischen zum Alltag. Sie werden immer dann angerufen, wenn sich Ärztinnen, Pflegekräfte und Angehörige nicht darüber einig sind, wie ein Patient weiter zu behandeln ist. [1] Typisch ist etwa der Fall einer hochbetagten Patientin, die nach einem schweren Schlaganfall nicht mehr ansprechbar ist und deren Kinder darüber streiten, ob sie künstlich ernährt werden soll.

Ein solches Komitee setzt sich in der Regel aus Medizinern, Pflegenden, Seelsorgern, Juristen und mitunter auch Patientenvertretern zusammen. [2] Gerade diese Vielfalt der Perspektiven gilt als seine größte Stärke: Wer täglich am Krankenbett steht, nimmt einen Fall anders wahr als jemand, der ihn ausschließlich aus rechtlicher Sicht beurteilt.

Wichtig ist allerdings, die Rolle des Gremiums nicht zu überschätzen. [3] Die Verantwortung für die Behandlung verbleibt bei den behandelnden Ärzten, und maßgeblich ist zuallererst der Wille des Patienten. Hat dieser eine Patientenverfügung verfasst, ist sie grundsätzlich zu befolgen – auch dann, wenn die Ärzte persönlich anders entscheiden würden. [4] Dann gilt es, den mutmaßlichen Willen zu ermitteln: Was hätte die Patientin gewollt, wenn sie sich noch äußern könnte? Hierzu werden Angehörige und Freunde befragt, frühere Äußerungen gesammelt und Wertvorstellungen rekonstruiert.

Kritiker bemängeln, dass die Qualität der Beratung stark von Haus zu Haus schwankt. Verbindliche Standards existieren bislang nicht; ob und wie ein Komitee eingerichtet wird, entscheidet jede Klinik selbst. [5] Zudem sind die Mitglieder meist ehrenamtlich tätig und haben die Beratungen neben ihrer regulären Arbeit zu bewältigen – in Zeiten akuten Personalmangels eine nicht zu unterschätzende Belastung.

Dennoch zeigen Befragungen, dass die Mehrheit der Beteiligten die Beratungen als hilfreich empfindet. Oft genügt es schon, dass alle an einem Tisch sitzen und ihre Sichtweisen offen darlegen können. [6] Viele Konflikte, so die Erfahrung der Moderatoren, entstehen weniger aus unterschiedlichen Werten als aus mangelnder Kommunikation.`,
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie den Text. Welcher Satz passt in welche Lücke? Zwei Sätze passen nicht.',
          instructionRu: 'Прочитайте текст. Какое предложение подходит к какому пропуску? Два предложения лишние.',
          options: [
            'Es spricht lediglich Empfehlungen aus; bindend sind diese für niemanden.',
            'Häufig stellt sich jedoch heraus, dass eine solche Verfügung fehlt oder die konkrete Situation nicht erfasst.',
            'Entscheidend ist, dass keine Berufsgruppe die Beratung dominiert.',
            'In solchen Situationen soll das Gremium helfen, eine ethisch begründete Entscheidung zu finden.',
            'Infolgedessen ist die Spannbreite groß: von professionell moderierten Fallbesprechungen bis zu Gremien, die nur auf dem Papier existieren.',
            'Nicht selten löst sich der Streit dabei auf, noch bevor ein Votum formuliert ist.',
            'Deshalb sind die Komitees gesetzlich verpflichtet, jede Entscheidung gerichtlich überprüfen zu lassen.',
            'Eine Patientenverfügung ist für Ärzte daher grundsätzlich unverbindlich.',
          ],
          items: [
            {
              kind: 'match',
              prompt: 'Lücke 1',
              answer: 3,
              explanationRu:
                '«In solchen Situationen» отсылает к описанным разногласиям о лечении, а следующий пример иллюстрирует такую ситуацию.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 2',
              answer: 2,
              explanationRu:
                'После перечисления профессий логично требование, чтобы ни одна группа не доминировала; дальше — «Gerade diese Vielfalt der Perspektiven».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 3',
              answer: 0,
              explanationRu:
                '«Не переоценивать роль комитета» поясняется тем, что он даёт лишь рекомендации; затем — ответственность остаётся у врачей.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 4',
              answer: 1,
              explanationRu:
                'После речи о Patientenverfügung говорится, что её часто нет; поэтому «Dann gilt es, den mutmaßlichen Willen zu ermitteln».',
            },
            {
              kind: 'match',
              prompt: 'Lücke 5',
              answer: 4,
              explanationRu:
                '«Infolgedessen» — следствие отсутствия обязательных стандартов: качество работы комитетов сильно различается.',
            },
            {
              kind: 'match',
              prompt: 'Lücke 6',
              answer: 5,
              explanationRu:
                'Достаточно сесть за один стол — и спор часто разрешается сам; следующее предложение объясняет: конфликты возникают из-за плохой коммуникации.',
            },
          ],
        },
      ],
    },
    {
      title: 'Schwarzfahren – eine Straftat?',
      textType: 'Meinungen / Expertenstatements',
      texts: [
        {
          label: 'A',
          heading: 'Petra Ahlers, Richterin am Amtsgericht',
          body: `Jede Woche verhandle ich Fälle, in denen Menschen ohne gültigen Fahrschein Bus oder Bahn gefahren sind. Die Verfahren binden Personal, das wir für schwerwiegende Delikte dringend bräuchten. Hinzu kommt ein Aspekt, der mich besonders umtreibt: Wer die verhängte Geldstrafe nicht bezahlen kann, muss ersatzweise ins Gefängnis. Ein Hafttag kostet den Staat weit über hundert Euro – also ein Vielfaches dessen, was die Fahrkarte gekostet hätte. Das ist weder ökonomisch noch moralisch zu rechtfertigen. Ich plädiere daher dafür, den entsprechenden Paragrafen ersatzlos zu streichen.`,
        },
        {
          label: 'B',
          heading: 'Jens Morawski, Geschäftsführer eines Verkehrsverbunds',
          body: `Ich halte die Debatte für gefährlich. Wer ohne Ticket fährt, nimmt eine Leistung in Anspruch, für die andere bezahlen – und zwar die große Mehrheit ehrlicher Fahrgäste. Würde man die Strafbarkeit abschaffen, wären die Leidtragenden genau diese Menschen, denn die Einnahmeausfälle müssten über höhere Preise ausgeglichen werden. Außerdem dürfen wir uns nichts vormachen: Unsere Kontrolleure können längst nicht jeden Zug überprüfen. Ihre Wirkung beruht darauf, dass am Ende ein Eintrag ins Führungszeugnis droht. Fällt diese Drohung weg, ist mit deutlich mehr Schwarzfahrern zu rechnen.`,
        },
        {
          label: 'C',
          heading: 'Leonie Brandt, Sozialarbeiterin',
          body: `In meiner Beratungsstelle begegne ich kaum jemandem, der aus Bequemlichkeit oder Abenteuerlust ohne Fahrschein fährt. Es sind Menschen, die sich das Ticket schlicht nicht leisten können – und trotzdem zum Jobcenter, zum Arzt oder zur Tafel müssen. Über das Strafrecht zu diskutieren, greift deshalb zu kurz. Solange Mobilität ein Luxus ist, wird sich an dem Verhalten wenig ändern lassen. Ein kostenloser Nahverkehr oder zumindest ein wirklich bezahlbares Sozialticket würde das Problem an der Wurzel packen, statt nur die Symptome zu bekämpfen.`,
        },
        {
          label: 'D',
          heading: 'Prof. Dr. Ulrich Seidel, Rechtsphilosoph',
          body: `In einem liberalen Rechtsstaat ist das Strafrecht als letztes Mittel zu verstehen: Es ist dort einzusetzen, wo ein Verhalten die Gemeinschaft erheblich schädigt und mildere Mittel nicht ausreichen. Ob das Erschleichen einer Fahrt dieses Gewicht hat, darf man bezweifeln. Gleichwohl halte ich es für falsch, das Verhalten einfach folgenlos zu stellen – das würde signalisieren, dass Regeln nur gelten, wenn man erwischt wird. Ein vernünftiger Mittelweg bestünde darin, Schwarzfahren als Ordnungswidrigkeit einzustufen. Dann bliebe es sanktionierbar, ohne dass jemand dafür im Gefängnis landet.`,
        },
      ],
      tasks: [
        {
          instructionDe:
            'Lesen Sie die Stellungnahmen. Welche Aussage passt zu welcher Person? Jede Person kann mehrmals gewählt werden.',
          instructionRu: 'Прочитайте высказывания. Какое утверждение относится к какому человеку? Каждого можно выбирать несколько раз.',
          options: ['Petra Ahlers', 'Jens Morawski', 'Leonie Brandt', 'Ulrich Seidel'],
          items: [
            {
              kind: 'match',
              prompt: 'Eine Abschaffung der Strafbarkeit würde vor allem den zahlenden Kunden schaden.',
              answer: 1,
              explanationRu: 'Моравски: «die Leidtragenden wären genau diese Menschen» — честные пассажиры заплатят через рост цен.',
            },
            {
              kind: 'match',
              prompt: 'Die Gerichte werden durch diese Verfahren unnötig belastet.',
              answer: 0,
              explanationRu: 'Алерс: «Die Verfahren binden Personal, das wir für schwerwiegende Delikte dringend bräuchten».',
            },
            {
              kind: 'match',
              prompt: 'Die Ursache des Problems liegt in der Armut vieler Betroffener.',
              answer: 2,
              explanationRu: 'Брандт: люди «sich das Ticket schlicht nicht leisten können».',
            },
            {
              kind: 'match',
              prompt: 'Strafen sollten nur dann verhängt werden, wenn mildere Mittel nicht genügen.',
              answer: 3,
              explanationRu: 'Зайдель: уголовное право — «letztes Mittel», применять там, где «mildere Mittel nicht ausreichen».',
            },
            {
              kind: 'match',
              prompt: 'Der Staat gibt für die Haft mehr aus, als durch das Schwarzfahren verloren geht.',
              answer: 0,
              explanationRu: 'Алерс: день заключения стоит «ein Vielfaches dessen, was die Fahrkarte gekostet hätte».',
            },
            {
              kind: 'match',
              prompt: 'Ohne die Androhung eines Eintrags ins Führungszeugnis verlieren Kontrollen ihre Wirkung.',
              answer: 1,
              explanationRu: 'Моравски: действие контролёров основано на угрозе записи в справке о несудимости.',
            },
            {
              kind: 'match',
              prompt: 'Eine Einstufung als Ordnungswidrigkeit wäre ein sinnvoller Kompromiss.',
              answer: 3,
              explanationRu: 'Зайдель: «Ein vernünftiger Mittelweg bestünde darin, Schwarzfahren als Ordnungswidrigkeit einzustufen».',
            },
            {
              kind: 'match',
              prompt: 'Eine Debatte, die sich nur um das Strafrecht dreht, verfehlt den Kern der Sache.',
              answer: 2,
              explanationRu: 'Брандт: «Über das Strafrecht zu diskutieren, greift deshalb zu kurz».',
            },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Radiodiskussion: Bewerber googeln – erlaubt und fair?',
      kind: 'discussion',
      speakers: {
        A: 'Moderatorin Sabine Hartwig',
        B: 'Thomas Krämer, Personalberater',
        C: 'Dr. Miriam Opitz, Datenschutzjuristin',
      },
      situation: 'Sie hören eine Diskussion in der Radiosendung „Recht im Alltag“.',
      text: `A: Herzlich willkommen zu „Recht im Alltag“. Unser Thema heute: Bewerber googeln – ist das erlaubt, und ist es fair? Bei mir im Studio sind der Personalberater Thomas Krämer und die Datenschutzjuristin Dr. Miriam Opitz. Herr Krämer, Hand aufs Herz: Schauen Sie sich die Profile von Bewerbern an?
B: Selbstverständlich. Und ich kenne kaum einen Kollegen, der das nicht tut. Wer sich um eine Führungsposition bewirbt, hat damit zu rechnen, dass man sich ein Bild von ihm macht. Was jemand öffentlich ins Netz stellt, ist nun mal öffentlich.
C: Ganz so einfach ist es nicht. Rechtlich ist zu unterscheiden zwischen beruflichen Netzwerken und privaten Plattformen. Ein Profil in einem Karrierenetzwerk darf ein Arbeitgeber in der Regel einsehen – es ist ja genau dafür gedacht. Bei privaten Netzwerken sieht das anders aus. Dort gilt eine gezielte Recherche nach überwiegender Auffassung als unzulässig.
A: Aber lässt sich das überhaupt kontrollieren? Ich meine, niemand erfährt doch, wer sich welches Profil angesehen hat.
C: Das ist der wunde Punkt, ganz klar. Trotzdem: Dass eine Regel schwer durchzusetzen ist, macht sie noch lange nicht überflüssig. Sie setzt einen Maßstab, an dem sich seriöse Unternehmen orientieren.
B: Ich verstehe den Ansatz, halte ihn aber für lebensfremd. Wenn ein Bewerber im Netz offen gegen Minderheiten hetzt – soll ich das dann ignorieren? Damit schade ich am Ende meinem Auftraggeber und dem ganzen Team.
C: Da gebe ich Ihnen insofern recht, als es solche Extremfälle gibt. Aber die sind nicht das Problem. Das Problem sind die Partyfotos von vor zehn Jahren, die Religionszugehörigkeit oder die politische Einstellung. Genau da beginnt die Diskriminierung – und zwar meistens ganz unbewusst.
A: Herr Krämer, wie gehen Sie mit solchen Informationen um?
B: Ehrlich gesagt: Was ich einmal gesehen habe, kann ich nicht einfach wieder vergessen. Insofern ist der Einwand nicht von der Hand zu weisen. Wir haben deshalb intern festgelegt, dass ausschließlich nach beruflich relevanten Informationen zu suchen ist und dass jede Recherche zu dokumentieren ist.
C: Das ist ein Schritt in die richtige Richtung. Ich würde mir allerdings wünschen, dass Bewerber vorab darüber informiert werden. Transparenz ist hier das A und O – im Übrigen verlangt die Datenschutz-Grundverordnung das ohnehin.
A: Zum Schluss: Was raten Sie Hörerinnen und Hörern, die sich gerade bewerben?
B: Räumen Sie Ihre Profile auf. Das klingt banal, ist aber nach wie vor der beste Schutz.
C: Und stellen Sie Ihre Privatsphäre-Einstellungen so ein, dass nur Freunde Ihre Beiträge sehen. Was sich nicht finden lässt, kann auch nicht gegen Sie verwendet werden.
A: Herzlichen Dank Ihnen beiden.`,
      playCount: 1,
      tasks: [
        {
          instructionDe: 'Wer sagt was? Ordnen Sie die Aussagen den Personen zu.',
          instructionRu: 'Кто что говорит? Соотнесите высказывания с участниками.',
          options: ['Moderatorin', 'Herr Krämer', 'Frau Dr. Opitz'],
          items: [
            {
              kind: 'match',
              prompt: 'Wer eine leitende Stelle anstrebt, muss mit einer Online-Recherche rechnen.',
              answer: 1,
              explanationRu: 'Кремер: «Wer sich um eine Führungsposition bewirbt, hat damit zu rechnen …».',
            },
            {
              kind: 'match',
              prompt: 'Es ist fraglich, ob die Einhaltung der Regel überprüft werden kann.',
              answer: 0,
              explanationRu: 'Ведущая: «Aber lässt sich das überhaupt kontrollieren?»',
            },
            {
              kind: 'match',
              prompt: 'Auch eine schwer durchsetzbare Regel erfüllt einen Zweck.',
              answer: 2,
              explanationRu: 'Опиц: правило, которое трудно соблюсти, не становится лишним — оно задаёт ориентир.',
            },
            {
              kind: 'match',
              prompt: 'Wer öffentliche Hetze übersieht, handelt gegen die Interessen seines Kunden.',
              answer: 1,
              explanationRu: 'Кремер: игнорируя травлю в сети, «schade ich am Ende meinem Auftraggeber».',
            },
            {
              kind: 'match',
              prompt: 'Alltägliche private Informationen führen häufiger zu Benachteiligung als Extremfälle.',
              answer: 2,
              explanationRu: 'Опиц: проблема не в крайних случаях, а в фото с вечеринок, религии, политических взглядах.',
            },
            {
              kind: 'match',
              prompt: 'Einmal gesehene Informationen beeinflussen das Urteil, auch wenn man das nicht will.',
              answer: 1,
              explanationRu: 'Кремер признаёт: «Was ich einmal gesehen habe, kann ich nicht einfach wieder vergessen».',
            },
            {
              kind: 'match',
              prompt: 'Bewerber sollten schon vor der Recherche darüber Bescheid wissen.',
              answer: 2,
              explanationRu: 'Опиц: «dass Bewerber vorab darüber informiert werden» — прозрачность.',
            },
          ],
        },
      ],
    },
    {
      title: 'Vorlesung: Das Trolley-Problem und das automatisierte Fahren',
      kind: 'monolog',
      situation: 'Sie hören einen Ausschnitt aus einer Vorlesung zur angewandten Ethik.',
      text: `Meine Damen und Herren, in der heutigen Sitzung wollen wir uns mit einer Frage befassen, die lange als rein theoretisches Gedankenspiel galt: Wie soll eine Maschine entscheiden, wenn ein Schaden unvermeidbar ist? Sie alle kennen vermutlich das sogenannte Trolley-Problem. Eine Straßenbahn rast auf fünf Menschen zu; durch das Umstellen einer Weiche ließe sie sich auf ein Nebengleis lenken, wo sie nur einen Menschen töten würde. Ist es erlaubt – oder sogar geboten –, die Weiche umzustellen?

Jahrzehntelang war dieses Szenario vor allem in Philosophieseminaren anzutreffen. Mit dem automatisierten Fahren hat es eine ganz praktische Dimension bekommen. Denn anders als ein Mensch, der in Sekundenbruchteilen intuitiv reagiert, handelt ein Fahrzeug nach Regeln, die vorab festzulegen sind. Die Entscheidung wird also gewissermaßen vom Unfallort in die Entwicklungsabteilung verlagert.

Deutschland hat hier früh einen eigenen Weg eingeschlagen. Eine vom Verkehrsministerium eingesetzte Ethikkommission hat bereits 2017 Leitlinien vorgelegt. Einer der Kernsätze lautet: Bei unausweichlichen Unfallsituationen ist jede Qualifizierung nach persönlichen Merkmalen – Alter, Geschlecht, körperliche oder geistige Konstitution – strikt untersagt. Ein Algorithmus darf also nicht errechnen, dass ein junges Leben mehr wert sei als ein altes.

Weniger eindeutig ist die Frage, ob man Opferzahlen gegeneinander abwägen darf. Die Kommission hält eine allgemeine Programmierung auf eine Minderung der Zahl von Personenschäden für vertretbar – Unbeteiligte dürfen dabei aber nicht geopfert werden. Sie sehen: Hier zeigt sich ein Spannungsfeld, das sich nicht ohne Weiteres auflösen lässt. Aus utilitaristischer Sicht ist es schlicht geboten, möglichst viele Leben zu retten. Aus Sicht unserer Verfassung hingegen ist jedes Menschenleben gleich viel wert und nicht gegen andere aufzurechnen. Das Bundesverfassungsgericht hat diesen Gedanken übrigens schon 2006 formuliert, als es den Abschuss entführter Passagierflugzeuge für verfassungswidrig erklärte.

Ich möchte Sie allerdings vor einem Missverständnis warnen. In der öffentlichen Debatte wird das Trolley-Problem häufig überschätzt. Die überwältigende Mehrheit der Unfälle ist nicht auf tragische Dilemmata zurückzuführen, sondern auf Unaufmerksamkeit, überhöhte Geschwindigkeit oder Alkohol. Wenn automatisierte Systeme diese Ursachen beseitigen, dürfte die Zahl der Verkehrstoten deutlich sinken. Die Kommission spricht deshalb sogar von einer ethischen Verpflichtung, solche Systeme einzuführen – vorausgesetzt, sie sind nachweislich sicherer als der Mensch.

Die eigentlich zu klärenden Fragen liegen also woanders: Wer haftet, wenn das System versagt? Welche Daten dürfen gespeichert werden? Und wie lässt sich verhindern, dass Hersteller ihre Algorithmen als Betriebsgeheimnis jeder Kontrolle entziehen? Damit werden wir uns in der nächsten Sitzung beschäftigen.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Hören Sie die Vorlesung. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
          instructionRu: 'Прослушайте лекцию. Выберите правильный ответ в каждом задании.',
          items: [
            {
              kind: 'mc',
              question: 'Warum hat das Trolley-Problem laut Dozent praktische Bedeutung gewonnen?',
              options: [
                'Weil Unfälle mit Straßenbahnen zugenommen haben.',
                'Weil automatisierte Fahrzeuge nach vorab festgelegten Regeln handeln.',
                'Weil Philosophen das Gedankenexperiment neu formuliert haben.',
              ],
              answer: 1,
              explanationRu: 'Машина действует по правилам, «die vorab festzulegen sind» — решение переносится в отдел разработки.',
            },
            {
              kind: 'mc',
              question: 'Was ist nach den Leitlinien der Ethikkommission strikt untersagt?',
              options: [
                'die Zahl möglicher Opfer überhaupt zu berücksichtigen',
                'automatisierte Fahrzeuge ohne Fahrer zuzulassen',
                'Menschen nach Merkmalen wie Alter oder Geschlecht zu bewerten',
              ],
              answer: 2,
              explanationRu: '«jede Qualifizierung nach persönlichen Merkmalen … ist strikt untersagt». Уменьшение числа жертв, напротив, считается допустимым.',
            },
            {
              kind: 'mc',
              question: 'Worin besteht das „Spannungsfeld“, von dem der Dozent spricht?',
              options: [
                'zwischen dem Ziel, möglichst viele Leben zu retten, und dem gleichen Wert jedes Lebens',
                'zwischen den Interessen der Hersteller und der Versicherungen',
                'zwischen dem Verkehrsministerium und dem Verfassungsgericht',
              ],
              answer: 0,
              explanationRu: 'Утилитаризм требует спасти как можно больше жизней, а конституция — не «aufrechnen» жизни друг против друга.',
            },
            {
              kind: 'mc',
              question: 'Warum erwähnt der Dozent das Urteil von 2006?',
              options: [
                'Es hat den Abschuss entführter Flugzeuge ausdrücklich erlaubt.',
                'Es zeigt, dass Menschenleben nicht gegeneinander aufgerechnet werden dürfen.',
                'Es war das erste Urteil zum automatisierten Fahren.',
              ],
              answer: 1,
              explanationRu: 'Суд признал сбивание самолётов неконституционным — та же идея: жизнь нельзя «взвешивать» против других.',
            },
            {
              kind: 'mc',
              question: 'Wovor warnt der Dozent?',
              options: [
                'die Bedeutung des Trolley-Problems für das reale Unfallgeschehen zu überschätzen',
                'automatisierte Systeme zu früh auf die Straße zu lassen',
                'Alkohol am Steuer als Unfallursache zu unterschätzen',
              ],
              answer: 0,
              explanationRu: '«In der öffentlichen Debatte wird das Trolley-Problem häufig überschätzt» — большинство аварий вызваны невнимательностью, скоростью, алкоголем.',
            },
            {
              kind: 'mc',
              question: 'Womit soll sich die nächste Sitzung beschäftigen?',
              options: [
                'mit weiteren philosophischen Gedankenexperimenten',
                'mit aktuellen Unfallstatistiken aus Deutschland',
                'mit Haftung, Datenspeicherung und der Kontrolle von Algorithmen',
              ],
              answer: 2,
              explanationRu: 'В конце: кто несёт ответственность, какие данные хранить и как не дать производителям скрыть алгоритмы от контроля.',
            },
          ],
        },
      ],
    },
  ],
};
