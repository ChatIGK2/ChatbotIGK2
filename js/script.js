// Funzioni di utilità
function showLoading() {
    document.querySelector('.loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.querySelector('.loading-overlay').style.display = 'none';
}

function showError(message) {
    const errorContainer = document.querySelector('.error-container');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    errorContainer.innerHTML = '';
    errorContainer.appendChild(errorMessage);
    errorContainer.style.display = 'block';
    
    setTimeout(() => {
        errorContainer.style.display = 'none';
    }, 3000);
}

function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'it';
}

function addMessage(message, isUser = false) {
    const messagesContainer = document.querySelector('.messages-container');
    const template = document.getElementById('message-template');
    const messageElement = template.content.cloneNode(true);
    
    const messageDiv = messageElement.querySelector('.message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    
    const contentDiv = messageElement.querySelector('.message-content');
    contentDiv.innerHTML = message;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Funzione per gestire l'invio del messaggio
function handleSendMessage() {
    const chatInput = document.querySelector('.chat-input');
    const message = chatInput.value.trim();
    
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        showLoading();
        
        try {
            // Ottieni la risposta dal bot
            const response = findBestResponse(message);
            setTimeout(() => {
                hideLoading();
                addMessage(response);
            }, 500);
        } catch (error) {
            hideLoading();
            const errorMessages = {
                it: 'Si è verificato un errore nel processare il messaggio',
                en: 'An error occurred while processing the message',
                de: 'Beim Verarbeiten der Nachricht ist ein Fehler aufgetreten',
                es: 'Se produjo un error al procesar el mensaje'
            };
            const currentLang = getCurrentLanguage();
            showError(errorMessages[currentLang] || errorMessages.it);
            console.error('Errore:', error);
        }
    }
}

// Funzione per mostrare il messaggio di benvenuto e le domande
function showInitialMessages() {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
        messagesContainer.innerHTML = '';
    }

    // Aspetta un momento e poi mostra le domande
    setTimeout(() => {
        if (typeof window.displayClickableQuestions === 'function') {
            window.displayClickableQuestions();
        } else {
            console.error('displayClickableQuestions function not found');
        }
    }, 100);
}

// Inizializzazione quando il documento è pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('Chatbot inizializzato');
    
    // Inizializza gli elementi dell'interfaccia
    const sendButton = document.querySelector('.send-button');
    const chatInput = document.querySelector('.chat-input');
    const languageFlags = document.querySelectorAll('.language-flag');
    
    // Gestisci l'invio del messaggio
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', handleSendMessage);
        
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });
    }
    
    // Gestisci il cambio lingua
    languageFlags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            window.location.href = `chat.html?lang=${lang}`;
        });
    });
    
    // Gestisci i pulsanti laterali
    const docsButton = document.querySelector('.docs-button');
    const contactButton = document.querySelector('.contact-button');
    const videoButton = document.querySelector('.video-button');
    const siteButton = document.querySelector('.site-button');
    
    if (docsButton) {
        docsButton.addEventListener('click', () => {
            window.open('https://drive.google.com/drive/folders/1VsarjqQRcTsrF6Krf5PRmUafF2_hW4LL?usp=sharing', '_blank');
        });
    }
    
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            window.open('https://wa.me/34662148620', '_blank');
        });
    }

    if (videoButton) {
        videoButton.addEventListener('click', () => {
            window.open('https://youtube.com/@econanotherm?si=XIT_QLyUNSoWGZUT', '_blank');
        });
    }

    if (siteButton) {
        siteButton.addEventListener('click', () => {
            window.open('https://econanotherm.com/', '_blank');
        });
    }

    // Mostra il messaggio di benvenuto e le domande dopo un breve ritardo
    setTimeout(showInitialMessages, 500);
});
