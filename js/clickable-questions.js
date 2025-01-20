// Messaggi tradotti per le domande frequenti
const questionIntroMessages = {
    it: '👋 Puoi farmi una di queste domande o scrivere liberamente:',
    en: '👋 You can ask me one of these questions or write freely:',
    de: '👋 Sie können mir eine dieser Fragen stellen oder frei schreiben:',
    es: '👋 Puede hacerme una de estas preguntas o escribir libremente:'
};

// Get current language from URL
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'it';
}

// Domande in italiano
const questionsList_it = [
    "Cos'è IGK2?",
    "Come si applica IGK2?",
    "Quali sono i vantaggi di IGK2?",
    "Quanto spesso è IGK2?",
    "IGK2 è certificato?",
    "Si può applicare su pareti già dipinte?",
    "Chi può installare IGK2?",
    "Ci sono detrazioni fiscali?",
    "Dove posso acquistare IGK2?",
    "Come funziona la nanotecnologia?",
    "Qual è il lambda di IGK2?",
    "Come si prepara la superficie?",
    "Quali strumenti servono?",
    "Quanto si risparmia in bolletta?",
    "Che manutenzione richiede?",
    "IGK2 è atossico?",
    "È un prodotto ecologico?",
    "C'è una garanzia?",
    "Quanto costa IGK2?",
    "Quanto dura il trattamento?"
];

// Domande in inglese
const questionsList_en = [
    "What is IGK2?",
    "How is IGK2 applied?",
    "What are the advantages of IGK2?",
    "How thick is IGK2?",
    "Is IGK2 certified?",
    "Can it be applied on painted walls?",
    "Who can install IGK2?",
    "Are there tax deductions?",
    "Where can I buy IGK2?",
    "How does nanotechnology work?",
    "What is IGK2's lambda value?",
    "How to prepare the surface?",
    "What tools are needed?",
    "How much can I save on bills?",
    "What maintenance is required?",
    "Is IGK2 non-toxic?",
    "Is it environmentally friendly?",
    "Is there a warranty?",
    "How much does IGK2 cost?",
    "How long does the treatment last?"
];

// Domande in tedesco
const questionsList_de = [
    "Was ist IGK2?",
    "Wie wird IGK2 aufgetragen?",
    "Was sind die Vorteile von IGK2?",
    "Wie dick ist IGK2?",
    "Ist IGK2 zertifiziert?",
    "Kann es auf gestrichene Wände aufgetragen werden?",
    "Wer kann IGK2 installieren?",
    "Gibt es Steuerabzüge?",
    "Wo kann ich IGK2 kaufen?",
    "Wie funktioniert die Nanotechnologie?",
    "Was ist der Lambda-Wert von IGK2?",
    "Wie bereitet man die Oberfläche vor?",
    "Welche Werkzeuge werden benötigt?",
    "Wie viel kann ich an Rechnungen sparen?",
    "Welche Wartung ist erforderlich?",
    "Ist IGK2 ungiftig?",
    "Ist es umweltfreundlich?",
    "Gibt es eine Garantie?",
    "Wie viel kostet IGK2?",
    "Wie lange hält die Behandlung?"
];

// Domande in spagnolo
const questionsList_es = [
    "¿Qué es IGK2?",
    "¿Cómo se aplica IGK2?",
    "¿Cuáles son las ventajas de IGK2?",
    "¿Qué grosor tiene IGK2?",
    "¿IGK2 está certificado?",
    "¿Se puede aplicar sobre paredes pintadas?",
    "¿Quién puede instalar IGK2?",
    "¿Hay deducciones fiscales?",
    "¿Dónde puedo comprar IGK2?",
    "¿Cómo funciona la nanotecnología?",
    "¿Cuál es el valor lambda de IGK2?",
    "¿Cómo se prepara la superficie?",
    "¿Qué herramientas se necesitan?",
    "¿Cuánto puedo ahorrar en facturas?",
    "¿Qué mantenimiento requiere?",
    "¿IGK2 es no tóxico?",
    "¿Es un producto ecológico?",
    "¿Hay garantía?",
    "¿Cuánto cuesta IGK2?",
    "¿Cuánto dura el tratamiento?"
];

// Funzione per mostrare le domande cliccabili
function displayClickableQuestions() {
    const currentLang = getCurrentLanguage();
    const messagesContainer = document.querySelector('.messages-container');
    messagesContainer.innerHTML = ''; // Pulisce il contenitore

    // Seleziona la lista di domande corretta in base alla lingua
    let questionsList;
    switch (currentLang) {
        case 'en':
            questionsList = questionsList_en;
            break;
        case 'de':
            questionsList = questionsList_de;
            break;
        case 'es':
            questionsList = questionsList_es;
            break;
        default:
            questionsList = questionsList_it;
    }

    // Crea e aggiunge i pulsanti delle domande
    questionsList.forEach(question => {
        const button = document.createElement('button');
        button.textContent = question;
        button.onclick = () => handleQuestionClick(question);
        messagesContainer.appendChild(button);
    });
}

// Funzione per gestire il click su una domanda
function handleQuestionClick(question) {
    const input = document.querySelector('.chat-input');
    input.value = question;
    const sendButton = document.querySelector('.send-button');
    sendButton.click();
}

// Esporta le funzioni necessarie
window.displayClickableQuestions = displayClickableQuestions;
window.handleQuestionClick = handleQuestionClick;
