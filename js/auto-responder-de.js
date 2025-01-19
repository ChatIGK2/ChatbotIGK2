// Variablen für den Gesprächsstatus
let currentLanguage = 'de';
let lastQuestion = '';
let followUpState = 0;

// Array mit allen möglichen Fragen
const allQuestions = [
    "Was ist IGK2?",
    "Wie wird es aufgetragen?",
    "Was sind die Vorteile?",
    "Ist es zertifiziert?",
    "Wie dick ist die Endschicht?",
    "Kann es auf gestrichene Wände aufgetragen werden?",
    "Braucht man einen spezialisierten Installateur?",
    "Wie lange sind die Trocknungszeiten?",
    "Wie funktioniert die IGK2-Nanotechnologie?",
    "Ist es atmungsaktiv?",
    "Wie viel kostet es?",
    "Wo kann ich es kaufen?",
    "Gibt es eine Garantie?",
    "Ist es umweltfreundlich?",
    "Wie lange hält es?",
    "Ist es giftig?",
    "Welche Werkzeuge werden benötigt?",
    "Wie wird die Oberfläche vorbereitet?",
    "Wie viel kann ich sparen?",
    "Braucht es Wartung?"
];

// Funktion zum Mischen eines Arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Funktion zum Erhalten von 5 zufälligen Fragen
function getRandomQuestions() {
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, 5);
}

// Funktion zum Erhalten einer Standardantwort
function getDefaultResponse() {
    const randomQuestions = getRandomQuestions().map(q => 
        `<span style='color: purple; cursor: pointer;' onclick='handleResponse("${q}")'>${q}</span>`
    ).join('\n- ');
    return "Entschuldigung, ich habe Ihre Frage nicht verstanden. Könnten Sie sie anders formulieren?\n\nSie können mich Folgendes fragen:\n- " + randomQuestions;
}

// Funktion zum Finden der besten Antwort
function findBestResponse(userInput) {
    const input = userInput.toLowerCase();
    console.log("Eingabe erhalten:", input);
    
    if (followUpState > 0 && (input.includes('ja') || input.includes('ok'))) {
        return handleFollowUp(lastQuestion);
    }
    
    followUpState = 0;
    
    const keywords = {
        was_ist_igk2: ['was ist', 'was bedeutet', 'erklären', 'beschreiben'],
        dicke: ['dick', 'schicht', 'stärke', 'millimeter'],
        vorteile: ['vorteil', 'nutzen', 'warum', 'besser'],
        anwendung: ['auftragen', 'anwenden', 'verwenden', 'installieren'],
        zertifizierung: ['zertifiziert', 'norm', 'standard', 'anforderung'],
        gestrichene_wand: ['gestrichene wand', 'farbe', 'bemalt', 'gestrichen'],
        installateur: ['installateur', 'fachmann', 'experte', 'monteur'],
        trocknung: ['trocknung', 'trocken', 'warten', 'zeit'],
        technologie: ['nanotechnologie', 'funktion', 'wie funktioniert', 'prinzip'],
        atmungsaktiv: ['atmungsaktiv', 'dampf', 'feuchtigkeit', 'atmen']
    };

    for (const [category, categoryKeywords] of Object.entries(keywords)) {
        if (categoryKeywords.some(keyword => input.includes(keyword))) {
            return getResponseWithFollowUp(category);
        }
    }

    return getDefaultResponse();
}

// Datenbank der Antworten
const responses = {
    was_ist_igk2: {
        response: "<span style='color: #007bff'>IGK2</span> verwendet revolutionäre Nanotechnologie auf Siliziumbasis. Silizium-Moleküle in nanometrischer Größe (ein Milliardstel Meter) dringen in kleinste Risse der Wandoberflächen ein und füllen diese aus, wodurch eine hocheffektive thermische Barriere entsteht.\n\nIm Gegensatz zu thermoreflektierenden Materialien, die Wärme nur durch hohle Keramikpartikel reflektieren, ist <span style='color: #007bff'>IGK2</span> ein echter Wärmeisolator: Seine Silizium-Nanomoleküle absorbieren und verteilen Wärme aktiv und verhindern deren Durchgang von innen nach außen (oder umgekehrt). Dieser Prozess gewährleistet außergewöhnliche Energieeffizienz und hält Häuser im Sommer kühl und im Winter warm.",
        followUpQuestions: [
            "Wie wird es aufgetragen?",
            "Was sind die Vorteile?",
            "Wie funktioniert die Nanotechnologie?"
        ]
    },
    dicke: {
        response: "<span style='color: #007bff'>IGK2</span> ist ein nanotechnologisches Wärmedämmsystem, das in drei Schichten aufgetragen wird:\nDie Gesamtdicke des Systems kann bis zu 10mm betragen.\n\n<span style='color: #007bff; font-weight: bold'>Der Auftragungsprozess der IGK2-Paste für Außenbereiche ist wie folgt:</span>\n\n1) Atmungsaktiver Primer/Fixiermittel\n2) Erste Schicht IGK2 Thermopaste\n3) 160gr verstärktes Fasernetz\n4) Zweite Schicht IGK2 Thermopaste\n5) Atmungsaktiver Primer/Fixiermittel\n6) Abschluss mit Wandbeschichtung in Paste oder Farbe für Außenwände\n7) Abschluss mit Wandbeschichtung in Paste oder Farbe für Außenbereiche\n\n<span style='color: #007bff; font-weight: bold'>Um größere Dicken zu erhalten, können weitere Schichten nach folgendem Schema aufgetragen werden:</span>\n\n1️⃣ 4 mm - 24 Stunden Trocknung\n2️⃣ 5 mm - 48 Stunden Trocknung\n3️⃣ 6 mm - 72 Stunden Trocknung\n4️⃣ 7 mm - 96 Stunden Trocknung\n5️⃣ 8 mm - 144 Stunden Trocknung\n\nHinweis: Bei optimalen Temperatur- und Feuchtigkeitsbedingungen können sich die Trocknungszeiten um 50-60% reduzieren. Das Produkt ist wasserbasiert und während der Anwendung verdunstet das Wasser, während das hydraulische Bindemittel aushärtet, wodurch die angegebene thermische Leistung gewährleistet wird.",
        followUpQuestions: [
            "Wie wird es aufgetragen?",
            "Kann es auf gestrichene Wände aufgetragen werden?",
            "Braucht man einen spezialisierten Installateur?",
            "Wie lange sind die Trocknungszeiten?",
            "Wie funktioniert die IGK2-Nanotechnologie?"
        ]
    },
    vorteile: {
        response: "Hier ein Vergleich zwischen <span style='color: #007bff'>IGK2</span> und herkömmlicher Dämmung:\n\n1) Dicke und Volumen:\n   ✅ IGK2: Nur 4-8 mm Dicke, verändert die Ästhetik nicht\n   ❌ Herkömmliche Dämmung: 8-12 cm Dicke, erhebliche ästhetische Veränderung\n\n2) Wärmedämmung:\n   ✅ IGK2: Lambda 0,0019 W/mK dank Nanotechnologie\n   ❌ Herkömmliche Dämmung: Lambda 0,035-0,040 W/mK (EPS oder Steinwolle)\n\n3) Anwendung:\n   ✅ IGK2: Schnell, wie ein normaler armierter Putz\n   ❌ Herkömmliche Dämmung: Komplex, erfordert Dübel und Profile\n\n4) Atmungsaktivität:\n   ✅ IGK2: Hochatmungsaktiv, verhindert Schimmel\n   ❌ Herkömmliche Dämmung: Kann interstitielle Kondensation verursachen\n\n5) Haltbarkeit:\n   ✅ IGK2: Beständig gegen Witterungseinflüsse\n   ❌ Herkömmliche Dämmung: Verschlechtert sich im Laufe der Zeit\n\nIch empfehle, die <span style='color: #ff0000'>\"Produkt-Erklärungsvideos\"</span> anzusehen, um diese Vorteile in Aktion zu sehen.",
        followUpQuestions: [
            "Was ist IGK2?",
            "Wie wird es aufgetragen?",
            "Ist es zertifiziert?",
            "Braucht man einen spezialisierten Installateur?",
            "Wie dick ist die finale Schicht?"
        ]
    },
    anwendung: {
        response: "<span style='color: #007bff'>IGK2</span> wird wie ein normaler armierter Putz aufgetragen, wobei folgende Schritte zu beachten sind:\n\n1) Atmungsaktiver Primer/Fixiermittel\n2) Erste Schicht IGK2 Thermopaste\n3) 160gr verstärktes Fasernetz\n4) Zweite Schicht IGK2 Thermopaste\n5) Weiße Granulometrie-Ausgleichsschicht zum Nivellieren\n6) Atmungsaktiver Primer/Fixiermittel\n7) Abschluss mit Wandbeschichtung in Paste oder Farbe für Außenbereiche\n\nFür optimale Ergebnisse wird empfohlen, das Produkt von Fachleuten mit Erfahrung in armierten Putzen auftragen zu lassen, auch wenn eine spezifische Zertifizierung nicht unbedingt erforderlich ist.\n\nIch empfehle, auf die Schaltfläche <span style='color: #ff0000'>\"Produkt-Erklärungsvideos\"</span> zu klicken, um eine praktische Demonstration zu sehen.",
        followUpQuestions: [
            "Wie dick ist die finale Schicht?",
            "Kann es auf gestrichene Wände aufgetragen werden?",
            "Braucht man einen spezialisierten Installateur?",
            "Wie lange sind die Trocknungszeiten?",
            "Wie funktioniert die IGK2-Nanotechnologie?"
        ]
    },
    technologie: {
        response: "<span style='color: #007bff'>IGK2</span> verwendet revolutionäre Nanotechnologie auf Siliziumbasis:\n\n1) Zusammensetzung:\n   - Silizium-Nanomoleküle in nanometrischer Größe\n   - Speziell entwickelte Partikel für tiefe Penetration\n\n2) Funktionsweise:\n   - Nanomoleküle dringen in kleinste Risse ein\n   - Schaffen eine effektive thermische Barriere\n   - Absorbieren und verteilen Wärme aktiv\n\n3) Vorteile gegenüber herkömmlichen Systemen:\n   - Höhere thermische Effizienz\n   - Geringere erforderliche Dicke\n   - Bessere Materialverteilung\n\nIch empfehle, die <span style='color: #ff0000'>\"Produkt-Erklärungsvideos\"</span> anzusehen, um eine visuelle Demonstration der Funktionsweise zu sehen.",
        followUpQuestions: [
            "Was sind die Vorteile?",
            "Wie wird es aufgetragen?",
            "Ist es zertifiziert?",
            "Wie dick ist die finale Schicht?",
            "Ist es atmungsaktiv?"
        ]
    },
    zertifizierung: {
        response: "<span style='color: #007bff'>IGK2</span> besitzt wichtige Zertifizierungen:\n\n1) CE-Kennzeichnung\n2) Wärmeleitfähigkeitszertifizierung\n3) Konformität mit CAM (Mindestumweltkriterien)\n4) AJAEU/14021/20/0095 Zertifikat für UNI/ISO 14021 Konformität\n5) Beschleunigte Alterungstests\n6) Zertifizierungen für steuerliche Abzüge",
        followUpQuestions: [
            "Was ist IGK2?",
            "Was sind die Vorteile?",
            "Wie wird es aufgetragen?",
            "Braucht man einen spezialisierten Installateur?",
            "Ist es atmungsaktiv?"
        ]
    },
    gestrichene_wand: {
        response: "Die Anwendung von <span style='color: #007bff'>IGK2</span> ist mit bereits gestrichenen Wanduntergründen kompatibel. Es ist jedoch wichtig, die Beschaffenheit des vorhandenen Anstrichs zu bewerten:\n\n1) Wenn der vorhandene Anstrich auf Kunststoffpolymeren basiert, kann das Produkt möglicherweise keine vollständige Atmungsaktivität gewährleisten. In diesem Fall haben Sie zwei Möglichkeiten:\n   - Den vorhandenen Anstrich vollständig entfernen\n   - <span style='color: #007bff'>IGK2</span> direkt auftragen, wobei eine reduzierte Atmungsaktivität in Kauf genommen wird\n\n2) Wenn der vorhandene Anstrich atmungsaktiv ist, können Sie normal mit der Anwendung von <span style='color: #007bff'>IGK2</span> fortfahren, indem Sie diese Schritte befolgen:\n   - Die Oberfläche sorgfältig reinigen\n   - Atmungsaktiven Primer/Fixiermittel auftragen\n   - Mit der Anwendung von <span style='color: #007bff'>IGK2</span> fortfahren\n\nIch empfehle, auf die Schaltfläche <span style='color: #ff0000'>\"Produkt-Erklärungsvideos\"</span> zu klicken, um eine praktische Demonstration zu sehen.",
        followUpQuestions: [
            "Wie wird IGK2 aufgetragen?",
            "Was sind die Vorteile?",
            "Braucht man einen spezialisierten Installateur?",
            "Wie bereitet man die Oberfläche vor?",
            "Ist es atmungsaktiv?"
        ]
    },
    atmungsaktiv: {
        response: "<span style='color: #007bff'>IGK2</span> ist ein hochatmungsaktives Produkt, das die Bildung von Schimmel und Feuchtigkeit verhindert. Es ermöglicht eine optimale Luftzirkulation und gewährleistet eine gesunde Innenraumluft.\n\nIch empfehle, die <span style='color: #ff0000'>\"Produkt-Erklärungsvideos\"</span> anzusehen, um die Vorteile der Atmungsaktivität zu sehen.",
        followUpQuestions: [
            "Was sind die Vorteile?",
            "Wie wird es aufgetragen?",
            "Ist es zertifiziert?",
            "Wie dick ist die finale Schicht?",
            "Wie funktioniert die IGK2-Nanotechnologie?"
        ]
    }
};

// Funktion zum Erhalten einer Antwort mit Folgefragen
function getResponseWithFollowUp(category) {
    if (responses[category]) {
        const response = responses[category];
        if (typeof response === 'string') {
            return response;
        }
        
        lastQuestion = category;
        followUpState = 1;
        
        const followUpText = response.followUpQuestions ? 
            "\n\nMöchten Sie mehr wissen über:\n- " + response.followUpQuestions.join('\n- ') :
            "";
            
        return response.response + followUpText;
    }
    return getDefaultResponse();
}

// Funktion zum Umgang mit Folgefragen
function handleFollowUp(category) {
    if (responses[category] && responses[category].followUpQuestions) {
        const nextQuestion = responses[category].followUpQuestions[followUpState - 1];
        followUpState = (followUpState + 1) % (responses[category].followUpQuestions.length + 1);
        if (followUpState === 0) followUpState = 1;
        return findBestResponse(nextQuestion);
    }
    return getDefaultResponse();
}

// Funktion zum Ändern der Sprache
function changeLanguage(lang) {
    currentLanguage = lang;
}

// Export der erforderlichen Funktionen
window.findBestResponse = findBestResponse;
window.handleFollowUp = handleFollowUp;
window.handleResponse = handleResponse;
window.changeLanguage = changeLanguage;
