import type { UnitMore } from '../../types';

export const more: UnitMore = {
  exercises: [
    {
      type: 'choice',
      prompt: 'Das ist die Frau, ___ bei der Bank arbeitet.',
      options: ['die', 'der', 'den'],
      answer: 0,
      explanationRu: 'die Frau — ж. р., в придаточном она подлежащее → die.',
    },
    {
      type: 'choice',
      prompt: 'Ich suche den Schlüssel, ___ hier gelegen hat.',
      options: ['der', 'den', 'das'],
      answer: 0,
      explanationRu: 'der Schlüssel — м. р. В придаточном он подлежащее (Der Schlüssel hat hier gelegen) → Nominativ: der.',
    },
    {
      type: 'choice',
      prompt: 'Wo ist der Brief, ___ du gestern bekommen hast?',
      options: ['den', 'der', 'die'],
      answer: 0,
      explanationRu: 'Подлежащее в придаточном — du; письмо — дополнение (du hast den Brief bekommen) → den.',
    },
    {
      type: 'choice',
      prompt: 'Das ist das Paket, ___ meine Tante geschickt hat.',
      options: ['das', 'der', 'die'],
      answer: 0,
      explanationRu: 'das Paket — ср. р. В Nominativ и Akkusativ форма одна: das.',
    },
    {
      type: 'choice',
      prompt: 'Die Formulare, ___ Sie brauchen, liegen am Eingang.',
      options: ['die', 'den', 'das'],
      answer: 0,
      explanationRu: 'die Formulare — мн. ч. Во множественном числе относительное местоимение всегда die (Nom и Akk).',
    },
    {
      type: 'choice',
      prompt: 'Was bedeutet: „Der Mann, den ich angerufen habe, war nicht da.“?',
      options: [
        'Мужчины, которому я звонил, не было на месте.',
        'Мужчина, который мне звонил, не был на месте.',
        'Мужчина, которого я видел, звонил.',
      ],
      answer: 0,
      explanationRu: 'den — Akkusativ: мужчина — дополнение, звонил «я». Внимание: anrufen требует Akkusativ, хотя по-русски «звонить кому».',
    },
    {
      type: 'gap',
      prompt: 'Ich habe einen Kollegen, ___ sehr gut Englisch spricht.',
      answers: ['der'],
      explanationRu: 'der Kollege — м. р.; в придаточном он подлежащее (Er spricht Englisch) → der. Akkusativ «einen Kollegen» в главном предложении не важен!',
    },
    {
      type: 'gap',
      prompt: 'Der Kollege, ___ ich morgen treffe, kommt aus Wien.',
      answers: ['den'],
      explanationRu: 'В придаточном подлежащее — ich, коллега — дополнение (Ich treffe den Kollegen) → den.',
    },
    {
      type: 'gap',
      prompt: 'Wie heißt die Bank, ___ am Samstag geöffnet hat?',
      answers: ['die'],
      explanationRu: 'die Bank — ж. р. → die. Глагол hat — в конце придаточного.',
    },
    {
      type: 'gap',
      prompt: 'Das Konto, ___ ich eröffnet habe, kostet nichts.',
      answers: ['das'],
      explanationRu: 'das Konto — ср. р. → das (Akkusativ, форма как в Nominativ).',
    },
    {
      type: 'choice',
      audio: 'Der Mann, der am Schalter sitzt, ist sehr freundlich.',
      prompt: 'Кто очень дружелюбный?',
      options: ['мужчина у окошка', 'мужчина, которого я знаю', 'женщина у окошка'],
      answer: 0,
      explanationRu: '«Der Mann, der am Schalter sitzt» — мужчина, который сидит у окошка.',
    },
    {
      type: 'choice',
      audio: 'Ich habe die Briefmarken gekauft, die du brauchst.',
      prompt: 'Что купил человек?',
      options: ['марки', 'конверты', 'открытки'],
      answer: 0,
      explanationRu: 'die Briefmarken — почтовые марки. die — относительное местоимение мн. ч.',
    },
    {
      type: 'gap',
      audio: 'Das ist das Formular, das Sie unterschreiben müssen.',
      prompt: 'Что нужно сделать с бланком? Напишите глагол: ___',
      answers: ['unterschreiben'],
      explanationRu: 'unterschreiben — подписать. Модальный глагол müssen стоит в конце придаточного.',
    },
    {
      type: 'order',
      words: ['Das', 'ist', 'der', 'Mann,', 'der', 'mir', 'geholfen', 'hat.'],
      translationRu: 'Это мужчина, который мне помог.',
      explanationRu: 'Придаточное начинается с der (подлежащее), спрягаемый глагол hat стоит в самом конце.',
    },
    {
      type: 'order',
      words: ['Ich', 'suche', 'die', 'Unterlagen,', 'die', 'ich', 'mitgebracht', 'habe.'],
      translationRu: 'Я ищу документы, которые я принёс.',
      explanationRu: 'die Unterlagen — мн. ч. → die. В придаточном: подлежащее ich, Partizip II, потом habe в конце.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения (относительное местоимение в Nominativ).',
      prompt: 'Ich habe eine Nachbarin. Die Nachbarin arbeitet im Bürgeramt.',
      answers: ['Ich habe eine Nachbarin, die im Bürgeramt arbeitet.'],
      explanationRu: 'Nachbarin — подлежащее во втором предложении → die; глагол arbeitet уходит в конец.',
    },
    {
      type: 'transform',
      instructionRu: 'Соедините предложения (относительное местоимение в Akkusativ).',
      prompt: 'Das ist der Pass. Ich habe den Pass beantragt.',
      answers: ['Das ist der Pass, den ich beantragt habe.'],
      explanationRu: 'den Pass — дополнение во втором предложении → den; habe стоит в конце после Partizip II.',
    },
    {
      type: 'choice',
      prompt: 'Die Pakete ___ jeden Tag um 10 Uhr abgeholt.',
      options: ['werden', 'wird', 'werdet'],
      answer: 0,
      explanationRu: 'Повторение (юнит 17): пассив, die Pakete — мн. ч. → werden + Partizip II.',
    },
    {
      type: 'gap',
      prompt: 'Ich warte schon ___ einer Stunde auf meine Nummer!',
      answers: ['seit'],
      explanationRu: 'Повторение (юнит 16): ожидание началось час назад и продолжается → seit + Präsens.',
    },
    {
      type: 'choice',
      prompt: 'Können Sie mir sagen, wo ___?',
      options: ['der Geldautomat ist', 'ist der Geldautomat', 'der Geldautomat sein'],
      answer: 0,
      explanationRu: 'Повторение (юнит 14): в косвенном вопросе спрягаемый глагол стоит в конце: …, wo der Geldautomat ist.',
    },
  ],
  reading: [
    {
      title: 'Informationen vom Bürgeramt',
      textType: 'Aushang',
      texts: [
        {
          heading: 'Bürgeramt Mitte – Öffnungszeiten und Hinweise',
          body: `Montag und Mittwoch: 8 bis 14 Uhr
Dienstag und Donnerstag: 11 bis 19 Uhr
Freitag: 8 bis 12 Uhr

Wichtig: Ohne Termin können wir Ihnen leider nicht helfen. Einen Termin bekommen Sie online oder unter der Telefonnummer 115.

Bitte bringen Sie immer Ihren Personalausweis oder Reisepass mit. Für einen neuen Ausweis brauchen Sie außerdem ein aktuelles Passfoto. Im Bürgeramt gibt es einen Fotoautomaten (6 Euro).

Die Gebühren können Sie bei uns nur mit Karte bezahlen. Bargeld wird nicht angenommen.

Nach drei bis vier Wochen ist Ihr neuer Ausweis fertig. Wir schicken Ihnen dann einen Brief. Bringen Sie diesen Brief bitte mit, wenn Sie den Ausweis abholen.

Für Menschen, die nicht gut gehen können, gibt es einen Aufzug am Eingang B.`,
        },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie den Text. Sind die Aussagen richtig oder falsch?',
          instructionRu: 'Прочитайте текст. Верны или неверны утверждения?',
          items: [
            { kind: 'tf', statement: 'Am Dienstag ist das Bürgeramt bis 19 Uhr geöffnet.', answer: true, explanationRu: '«Dienstag und Donnerstag: 11 bis 19 Uhr».' },
            { kind: 'tf', statement: 'Man kann ohne Termin ins Bürgeramt kommen.', answer: false, explanationRu: '«Ohne Termin können wir Ihnen leider nicht helfen» — без записи не помогут.' },
            { kind: 'tf', statement: 'Man kann im Bürgeramt ein Passfoto machen.', answer: true, explanationRu: '«Im Bürgeramt gibt es einen Fotoautomaten» — там есть фотоавтомат.' },
            { kind: 'tf', statement: 'Man kann die Gebühr bar bezahlen.', answer: false, explanationRu: '«…nur mit Karte bezahlen. Bargeld wird nicht angenommen» — наличные не принимают.' },
            { kind: 'tf', statement: 'Der neue Ausweis ist nach drei bis vier Wochen fertig.', answer: true, explanationRu: '«Nach drei bis vier Wochen ist Ihr neuer Ausweis fertig».' },
          ],
        },
      ],
    },
    {
      title: 'Dienstleistungen in der Stadt',
      textType: 'Anzeigen',
      texts: [
        { label: 'a', heading: 'Änderungsschneiderei Nadel', body: 'Hose zu lang? Kleid zu weit? Wir ändern Ihre Kleidung schnell und günstig. Montag bis Freitag 9 bis 18 Uhr, Bahnhofstraße 12.' },
        { label: 'b', heading: 'Schlüsseldienst – Tag und Nacht', body: 'Sie stehen vor der Tür und haben keinen Schlüssel? Rufen Sie uns an! Wir sind in 30 Minuten bei Ihnen – auch am Wochenende und in der Nacht.' },
        { label: 'c', heading: 'Copy-Shop am Markt', body: 'Kopien, Passfotos, Drucken vom USB-Stick. Fotos für Ausweis und Bewerbung in fünf Minuten – ohne Termin! Montag bis Samstag 8 bis 20 Uhr.' },
        { label: 'd', heading: 'Fahrradwerkstatt Speiche', body: 'Ihr Fahrrad ist kaputt? Wir reparieren alle Fahrräder. Kleine Reparaturen sind meistens am gleichen Tag fertig.' },
        { label: 'e', heading: 'Reinigung Blitzblank', body: 'Wir reinigen Hemden, Anzüge, Jacken und Mäntel. Hemden nur 2,50 Euro. Ihre Kleidung ist nach 24 Stunden fertig.' },
      ],
      tasks: [
        {
          instructionDe: 'Lesen Sie die Anzeigen. Welche Anzeige passt? Für eine Situation gibt es keine passende Anzeige.',
          instructionRu: 'Прочитайте объявления. Какое объявление подходит к ситуации? Для одной ситуации подходящего объявления нет.',
          options: ['a', 'b', 'c', 'd', 'e'],
          allowNone: true,
          items: [
            { kind: 'match', prompt: 'Ihre neue Hose ist zu lang.', answer: 0, explanationRu: 'a: «Hose zu lang? … Wir ändern Ihre Kleidung» — ателье по переделке одежды.' },
            { kind: 'match', prompt: 'Sie brauchen schnell ein Foto für Ihren Ausweis.', answer: 2, explanationRu: 'c: «Fotos für Ausweis … in fünf Minuten – ohne Termin».' },
            { kind: 'match', prompt: 'Es ist Sonntagabend und Sie kommen nicht in Ihre Wohnung.', answer: 1, explanationRu: 'b: служба вскрытия замков работает «auch am Wochenende und in der Nacht».' },
            { kind: 'match', prompt: 'Ihr Anzug ist schmutzig, und Sie brauchen ihn übermorgen.', answer: 4, explanationRu: 'e: химчистка чистит костюмы, одежда готова через 24 часа.' },
            { kind: 'match', prompt: 'Ihr Auto ist kaputt.', answer: -1, explanationRu: 'Ни одно объявление не подходит: d — мастерская только для велосипедов.' },
          ],
        },
      ],
    },
  ],
  listening: [
    {
      title: 'Eine Nachricht von der Bank',
      kind: 'monolog',
      situation: 'Sie hören eine Nachricht auf dem Anrufbeantworter.',
      text: `Guten Tag, Frau Petrova, hier ist Herr Weber von der Stadtbank. Sie haben letzte Woche ein Konto bei uns eröffnet. Die Bankkarte, die Sie bestellt haben, ist jetzt da. Sie können sie ab morgen bei uns in der Filiale abholen. Bitte bringen Sie Ihren Reisepass mit. Die PIN bekommen Sie in einem extra Brief per Post. Wir haben von Montag bis Freitag von 9 bis 16 Uhr geöffnet, am Donnerstag sogar bis 18 Uhr. Wenn Sie Fragen haben, rufen Sie mich einfach an. Auf Wiederhören!`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Frau Petrova kann die Karte schon heute abholen.', answer: false, explanationRu: '«Sie können sie ab morgen … abholen» — только начиная с завтрашнего дня.' },
          ],
        },
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Was soll Frau Petrova mitbringen?', options: ['Ihren Reisepass', 'Ihre PIN', 'Ein Foto'], answer: 0, explanationRu: '«Bitte bringen Sie Ihren Reisepass mit».' },
            { kind: 'mc', question: 'Wie bekommt sie die PIN?', options: ['In der Filiale', 'Per Post', 'Am Telefon'], answer: 1, explanationRu: '«Die PIN bekommen Sie in einem extra Brief per Post».' },
            { kind: 'mc', question: 'An welchem Tag ist die Filiale am längsten geöffnet?', options: ['Am Montag', 'Am Donnerstag', 'Am Freitag'], answer: 1, explanationRu: 'Обычно до 16 часов, «am Donnerstag sogar bis 18 Uhr».' },
          ],
        },
      ],
    },
    {
      title: 'Auf der Post',
      kind: 'dialog',
      speakers: { A: 'Mitarbeiter in der Post', B: 'Kundin' },
      situation: 'Eine Frau möchte auf der Post ein Paket schicken.',
      text: `A: Guten Tag! Der Nächste, bitte.
B: Guten Tag. Ich möchte dieses Paket nach Kasachstan schicken.
A: Gern. Haben Sie das Formular ausgefüllt, das man für Pakete ins Ausland braucht?
B: Nein. Welches Formular?
A: Dieses hier. Sie schreiben hier, was im Paket ist und wie viel es kostet.
B: Okay. Da sind nur Kleidung und ein Buch drin. Was kostet das Paket?
A: Es wiegt sechs Kilo. Das kostet 48 Euro.
B: So viel? Und wie lange braucht es?
A: Ungefähr zwei bis drei Wochen.
B: Na gut. Und ich brauche noch zehn Briefmarken für Briefe in Deutschland.
A: Das sind zehn mal 95 Cent, also 9 Euro 50. Zusammen 57 Euro 50.
B: Kann ich mit Karte bezahlen?
A: Natürlich.`,
      playCount: 2,
      tasks: [
        {
          instructionDe: 'Wählen Sie die richtige Lösung a, b oder c.',
          instructionRu: 'Выберите правильный ответ a, b или c.',
          items: [
            { kind: 'mc', question: 'Wohin schickt die Frau das Paket?', options: ['Nach Kasachstan', 'Nach Russland', 'In eine andere Stadt in Deutschland'], answer: 0, explanationRu: '«Ich möchte dieses Paket nach Kasachstan schicken».' },
            { kind: 'mc', question: 'Was ist im Paket?', options: ['Kleidung und ein Buch', 'Briefe und Fotos', 'Essen'], answer: 0, explanationRu: '«Da sind nur Kleidung und ein Buch drin».' },
            { kind: 'mc', question: 'Wie lange braucht das Paket?', options: ['Zwei bis drei Tage', 'Eine Woche', 'Zwei bis drei Wochen'], answer: 2, explanationRu: '«Ungefähr zwei bis drei Wochen».' },
          ],
        },
        {
          instructionDe: 'Ist die Aussage richtig oder falsch?',
          instructionRu: 'Верно или неверно утверждение?',
          items: [
            { kind: 'tf', statement: 'Die Frau bezahlt zusammen 57,50 Euro.', answer: true, explanationRu: 'Посылка 48 евро + марки 9,50 евро = 57,50 евро: «Zusammen 57 Euro 50».' },
          ],
        },
      ],
    },
  ],
};
