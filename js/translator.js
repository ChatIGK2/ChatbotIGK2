// Traduzioni per i testi dell'interfaccia
const translations = {
    it: {
        welcomeTitle: "Benvenuto in IGK2 Chat Assistant",
        welcomeMessage: "Benvenuto! Sono a tua disposizione per fornirti tutte le informazioni sul nostro prodotto. Sentiti libero di chiedere.",
        inputPlaceholder: "Scrivi un messaggio...",
        sendButton: "Invia",
        docsButton: "Documenti Scaricabili",
        contactButton: "Contatta Direttamente il Tecnico",
        videoButton: "Video Esplicativi del Prodotto",
        siteButton: "Sito Ufficiale"
    },
    en: {
        welcomeTitle: "Welcome to IGK2 Chat Assistant",
        welcomeMessage: "Welcome! I'm here to provide you with all the information about our product. Feel free to ask.",
        inputPlaceholder: "Type a message...",
        sendButton: "Send",
        docsButton: "Downloadable Documents",
        contactButton: "Contact Technical Support",
        videoButton: "Product Explanatory Videos",
        siteButton: "Official Website"
    },
    de: {
        welcomeTitle: "Willkommen beim IGK2 Chat-Assistenten",
        welcomeMessage: "Willkommen! Ich bin hier, um Ihnen alle Informationen über unser Produkt zu geben. Fragen Sie frei heraus.",
        inputPlaceholder: "Nachricht eingeben...",
        sendButton: "Senden",
        docsButton: "Herunterladbare Dokumente",
        contactButton: "Technischen Support kontaktieren",
        videoButton: "Produkt-Erklärungsvideos",
        siteButton: "Offizielle Website"
    },
    es: {
        welcomeTitle: "Bienvenido al Asistente de Chat IGK2",
        welcomeMessage: "¡Bienvenido! Estoy aquí para proporcionarte toda la información sobre nuestro producto. Siéntete libre de preguntar.",
        inputPlaceholder: "Escribe un mensaje...",
        sendButton: "Enviar",
        docsButton: "Documentos Descargables",
        contactButton: "Contactar Soporte Técnico",
        videoButton: "Videos Explicativos del Producto",
        siteButton: "Sitio Web Oficial"
    }
};

// Funzione per ottenere il parametro della lingua dall'URL
function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'it';
    console.log('Current language:', lang);
    return lang;
}

// Funzione per cambiare la lingua dell'interfaccia
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    
    // Seleziona tutti gli elementi con l'attributo data-translate
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements with data-translate:', elements.length);
    
    const texts = translations[lang] || translations.it;

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Translating element:', key);
        if (texts[key]) {
            if (element.tagName.toLowerCase() === 'input') {
                element.placeholder = texts[key];
            } else {
                element.textContent = texts[key];
            }
        }
    });

    // Aggiorna anche il titolo della pagina
    document.title = texts.welcomeTitle || 'IGK2 Chat Assistant';
    
    // Aggiorna l'attributo lang dell'HTML
    document.documentElement.lang = lang;
}

// Quando il documento è pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Imposta la lingua iniziale basata sull'URL
    const currentLang = getLanguageFromURL();
    changeLanguage(currentLang);

    // Aggiungi click event alle bandiere
    const languageFlags = document.querySelectorAll('.language-flag');
    languageFlags.forEach(flag => {
        flag.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            window.location.href = `chat.html?lang=${lang}`;
        });
    });
});
