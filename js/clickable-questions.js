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
    const messagesContainer = document.querySelector('.messages-container');
    if (!messagesContainer) {
        console.error('Messages container not found');
        return;
    }

    // Get current language
    const currentLanguage = getCurrentLanguage();

    // Creo il container per le domande
    const questionsContainer = document.createElement('div');
    questionsContainer.className = 'bot-message';
    
    // Aggiungo il messaggio introduttivo
    const introMessage = document.createElement('p');
    introMessage.style.fontWeight = 'bold';
    introMessage.style.marginBottom = '10px';
    introMessage.textContent = questionIntroMessages[currentLanguage] || questionIntroMessages.it;
    questionsContainer.appendChild(introMessage);
    
    // Creo il container per i pulsanti delle domande
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'questions-buttons';
    buttonsContainer.style.display = 'grid';
    buttonsContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    buttonsContainer.style.gap = '5px';
    buttonsContainer.style.maxHeight = '400px';
    buttonsContainer.style.overflow = 'auto';
    
    // Ottengo le domande nella lingua corrente
    let questions;
    switch(currentLanguage) {
        case 'en':
            questions = questionsList_en;
            break;
        case 'de':
            questions = questionsList_de;
            break;
        case 'es':
            questions = questionsList_es;
            break;
        default:
            questions = questionsList_it;
    }
    
    // Creo i pulsanti per ogni domanda
    questions.forEach(question => {
        const button = document.createElement('button');
        button.className = 'question-button';
        button.style.width = '100%';
        button.style.padding = '8px';
        button.style.border = '1px solid #ddd';
        button.style.borderRadius = '4px';
        button.style.background = '#f8f9fa';
        button.style.cursor = 'pointer';
        button.style.transition = 'all 0.2s';
        button.style.textAlign = 'left';
        button.style.whiteSpace = 'normal';
        button.style.height = 'auto';
        button.style.minHeight = '44px';
        button.style.fontSize = '14px';
        button.textContent = question;
        
        // Aggiungi hover effect
        button.onmouseover = () => {
            button.style.background = '#e9ecef';
            button.style.borderColor = '#ced4da';
        };
        button.onmouseout = () => {
            button.style.background = '#f8f9fa';
            button.style.borderColor = '#ddd';
        };
        
        button.onclick = () => handleQuestionClick(question);
        buttonsContainer.appendChild(button);
    });
    
    questionsContainer.appendChild(buttonsContainer);
    messagesContainer.appendChild(questionsContainer);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Funzione per gestire il click su una domanda
function handleQuestionClick(question) {
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');
    
    if (chatInput && sendButton) {
        chatInput.value = question;
        sendButton.click();
    }
}

// Esporta le funzioni necessarie
window.displayClickableQuestions = displayClickableQuestions;
window.handleQuestionClick = handleQuestionClick;
