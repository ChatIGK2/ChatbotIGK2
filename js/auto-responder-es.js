// Variables para gestionar el estado de la conversación
let currentLanguage = 'es';
let lastQuestion = '';
let followUpState = 0;

// Array con todas las posibles preguntas
const allQuestions = [
    "¿Qué es IGK2?",
    "¿Cómo se aplica?",
    "¿Cuáles son las ventajas?",
    "¿Está certificado?",
    "¿Cuál es el espesor final?",
    "¿Se puede aplicar sobre paredes pintadas?",
    "¿Se necesita un instalador especializado?",
    "¿Cuánto tiempo tarda en secar?",
    "¿Cómo funciona la nanotecnología IGK2?",
    "¿Es transpirable?",
    "¿Cuánto cuesta?",
    "¿Dónde puedo comprarlo?",
    "¿Tiene garantía?",
    "¿Es ecológico?",
    "¿Cuánto dura?",
    "¿Es tóxico?",
    "¿Qué herramientas se necesitan?",
    "¿Cómo se prepara la superficie?",
    "¿Cuánto puedo ahorrar?",
    "¿Necesita mantenimiento?"
];

// Función para mezclar un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para obtener 5 preguntas aleatorias
function getRandomQuestions() {
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, 5);
}

// Función para obtener una respuesta predeterminada
function getDefaultResponse() {
    const randomQuestions = getRandomQuestions().map(q => 
        `<span style='color: purple; cursor: pointer;' onclick='handleResponse("${q}")'>${q}</span>`
    ).join('\n- ');
    return "Lo siento, no he entendido tu pregunta. ¿Podrías reformularla de otra manera?\n\nPuedes preguntarme sobre:\n- " + randomQuestions;
}

// Función para encontrar la mejor respuesta
function findBestResponse(userInput) {
    const input = userInput.toLowerCase();
    console.log("Input recibido:", input);
    
    if (followUpState > 0 && (input.includes('si') || input.includes('sí') || input.includes('ok'))) {
        return handleFollowUp(lastQuestion);
    }
    
    followUpState = 0;
    
    const keywords = {
        que_es_igk2: ['qué es', 'que es', 'explicar', 'describir'],
        espesor: ['espesor', 'grosor', 'capa', 'milímetros'],
        ventajas: ['ventaja', 'beneficio', 'por qué', 'mejor'],
        aplicacion: ['aplicar', 'usar', 'utilizar', 'instalar'],
        certificacion: ['certificado', 'norma', 'estándar', 'requisito'],
        pared_pintada: ['pared pintada', 'pintura', 'pintado', 'superficie pintada'],
        instalador: ['instalador', 'profesional', 'experto', 'técnico'],
        secado: ['secado', 'secar', 'esperar', 'tiempo'],
        tecnologia: ['nanotecnología', 'funciona', 'cómo funciona', 'principio'],
        transpirable: ['transpirable', 'vapor', 'humedad', 'respirar'],
        costo: ['costo', 'precio', 'cuánto cuesta'],
        compra: ['comprar', 'dónde comprar', 'tienda'],
        garantia: ['garantía', 'seguridad', 'protección'],
        ecologico: ['ecológico', 'medio ambiente', 'sostenible'],
        duracion: ['duración', 'vida útil', 'longevidad'],
        toxicidad: ['tóxico', 'seguridad', 'riesgo'],
        herramientas: ['herramientas', 'instrumentos', 'necesarios'],
        preparacion: ['preparar', 'superficie', 'antes'],
        ahorro: ['ahorro', 'economía', 'beneficio'],
        mantenimiento: ['mantenimiento', 'cuidado', 'revisión']
    };

    for (const [category, categoryKeywords] of Object.entries(keywords)) {
        if (categoryKeywords.some(keyword => input.includes(keyword))) {
            return getResponseWithFollowUp(category);
        }
    }

    return getDefaultResponse();
}

// Base de datos de respuestas
const responses = {
    que_es_igk2: {
        response: "<span style='color: #007bff'>IGK2</span> utiliza nanotecnología revolucionaria basada en silicio. Las moléculas de silicio de tamaño nanométrico (una mil millonésima de metro) penetran y llenan incluso las grietas más pequeñas en las superficies de las paredes, creando una barrera térmica altamente efectiva.\n\nA diferencia de los materiales termorreflectantes que solo reflejan el calor mediante partículas cerámicas huecas, <span style='color: #007bff'>IGK2</span> es un verdadero aislante térmico: sus nanomoléculas de silicio absorben y dispersan activamente el calor, evitando su paso del interior al exterior (o viceversa). Este proceso garantiza una eficiencia energética excepcional y mantiene las casas frescas en verano y cálidas en invierno.",
        followUpQuestions: [
            "¿Cómo se aplica?",
            "¿Cuáles son las ventajas?",
            "¿Cómo funciona la nanotecnología?"
        ]
    },
    espesor: {
        response: "<span style='color: #007bff'>IGK2</span> es un sistema de aislamiento térmico nanotecnológico que se aplica en tres capas:\nEl espesor total del sistema puede alcanzar hasta 10mm.\n\n<span style='color: #007bff; font-weight: bold'>El proceso de aplicación de la pasta IGK2 para exteriores es el siguiente:</span>\n\n1) Imprimación/fijador transpirable\n2) Primera capa de pasta térmica IGK2\n3) Malla de fibra reforzada de 160gr\n4) Segunda capa de pasta térmica IGK2\n5) Imprimación/fijador transpirable\n6) Acabado con revestimiento en pasta o pintura para paredes exteriores\n7) Acabado con revestimiento en pasta o pintura para exteriores\n\n<span style='color: #007bff; font-weight: bold'>Para obtener mayores espesores, se pueden aplicar capas adicionales según el siguiente esquema:</span>\n\n1️⃣ 4 mm - 24 horas de secado\n2️⃣ 5 mm - 48 horas de secado\n3️⃣ 6 mm - 72 horas de secado\n4️⃣ 7 mm - 96 horas de secado\n5️⃣ 8 mm - 144 horas de secado\n\nNota: En condiciones óptimas de temperatura y humedad, los tiempos de secado pueden reducirse en un 50-60%. El producto es de base acuosa y durante la aplicación el agua se evapora mientras el aglutinante hidráulico se endurece, garantizando el rendimiento térmico especificado.",
        followUpQuestions: [
            "¿Cómo se aplica?",
            "¿Se puede aplicar sobre paredes pintadas?",
            "¿Se necesita un instalador especializado?",
            "¿Cuánto tiempo tarda en secar?",
            "¿Cómo funciona la nanotecnología IGK2?"
        ]
    },
    ventajas: {
        response: "Aquí una comparación entre <span style='color: #007bff'>IGK2</span> y el aislamiento tradicional:\n\n1) Espesor y volumen:\n   ✅ IGK2: Solo 4-8 mm de espesor, no altera la estética\n   ❌ Aislamiento tradicional: 8-12 cm de espesor, cambio estético considerable\n\n2) Aislamiento térmico:\n   ✅ IGK2: Lambda 0,0019 W/mK gracias a la nanotecnología\n   ❌ Aislamiento tradicional: Lambda 0,035-0,040 W/mK (EPS o lana de roca)\n\n3) Aplicación:\n   ✅ IGK2: Rápida, como un revoco armado normal\n   ❌ Aislamiento tradicional: Complejo, requiere tacos y perfiles\n\n4) Transpirabilidad:\n   ✅ IGK2: Altamente transpirable, previene el moho\n   ❌ Aislamiento tradicional: Puede causar condensación intersticial\n\n5) Durabilidad:\n   ✅ IGK2: Resistente a los agentes atmosféricos\n   ❌ Aislamiento tradicional: Se deteriora con el tiempo\n\nTe recomiendo ver los <span style='color: #ff0000'>\"Vídeos explicativos del producto\"</span> para ver estas ventajas en acción.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cómo se aplica?",
            "¿Está certificado?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    aplicacion: {
        response: "<span style='color: #007bff'>IGK2</span> se aplica como un revoco armado normal, siguiendo estos pasos:\n\n1) Imprimación/fijador transpirable\n2) Primera capa de pasta térmica IGK2\n3) Malla de fibra reforzada de 160gr\n4) Segunda capa de pasta térmica IGK2\n5) Capa de granulometría blanca para nivelar\n6) Imprimación/fijador transpirable\n7) Acabado con revestimiento en pasta o pintura para paredes exteriores\n\nPara obtener resultados óptimos, se recomienda que el producto sea aplicado por profesionales con experiencia en revocos armados, aunque no se requiere una certificación específica.\n\nTe recomiendo hacer clic en el botón <span style='color: #ff0000'>\"Vídeos explicativos del producto\"</span> para ver una demostración práctica.",
        followUpQuestions: [
            "¿Cuál es el espesor final?",
            "¿Se puede aplicar sobre paredes pintadas?",
            "¿Se necesita un instalador especializado?",
            "¿Cuánto tiempo tarda en secar?",
            "¿Cómo funciona la nanotecnología IGK2?"
        ]
    },
    tecnologia: {
        response: "<span style='color: #007bff'>IGK2</span> utiliza nanotecnología revolucionaria basada en silicio:\n\n1) Composición:\n   - Nanomoléculas de silicio de tamaño nanométrico\n   - Partículas especialmente desarrolladas para penetración profunda\n\n2) Funcionamiento:\n   - Las nanomoléculas penetran en las grietas más pequeñas\n   - Crean una barrera térmica efectiva\n   - Absorben y dispersan el calor activamente\n\n3) Ventajas sobre sistemas convencionales:\n   - Mayor eficiencia térmica\n   - Menor espesor requerido\n   - Mejor distribución del material\n\nTe recomiendo ver los <span style='color: #ff0000'>\"Vídeos explicativos del producto\"</span> para ver una demostración visual del funcionamiento.",
        followUpQuestions: [
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Está certificado?",
            "¿Cuál es el espesor final?",
            "¿Es transpirable?"
        ]
    },
    certificacion: {
        response: "<span style='color: #007bff'>IGK2</span> posee importantes certificaciones:\n\n1) Marcado CE\n2) Certificación de conductividad térmica\n3) Conformidad con CAM (Criterios Ambientales Mínimos)\n4) Certificado AJAEU/14021/20/0095 de conformidad UNI/ISO 14021\n5) Pruebas de envejecimiento acelerado\n6) Certificaciones para deducciones fiscales",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Es transpirable?"
        ]
    },
    pared_pintada: {
        response: "La aplicación de <span style='color: #007bff'>IGK2</span> es compatible con sustratos de pared ya pintados. Sin embargo, es importante evaluar la naturaleza de la pintura existente:\n\n1) Si la pintura existente está basada en polímeros plásticos, el producto podría no garantizar una transpirabilidad completa. En este caso, tienes dos opciones:\n   - Eliminar completamente la pintura existente\n   - Aplicar <span style='color: #007bff'>IGK2</span> directamente, aceptando una transpirabilidad reducida\n\n2) Si la pintura existente es transpirable, puedes proceder normalmente con la aplicación de <span style='color: #007bff'>IGK2</span> siguiendo estos pasos:\n   - Limpiar cuidadosamente la superficie\n   - Aplicar imprimación/fijador transpirable\n   - Proceder con la aplicación de <span style='color: #007bff'>IGK2</span>\n\nTe recomiendo hacer clic en el botón <span style='color: #ff0000'>\"Vídeos explicativos del producto\"</span> para ver una demostración práctica.",
        followUpQuestions: [
            "¿Cómo se aplica IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Se necesita un instalador especializado?",
            "¿Cómo se prepara la superficie?",
            "¿Es transpirable?"
        ]
    },
    instalador: {
        response: "Para obtener resultados óptimos, se recomienda que <span style='color: #007bff'>IGK2</span> sea aplicado por profesionales con experiencia en revocos armados, aunque no se requiere una certificación específica.",
        followUpQuestions: [
            "¿Cómo se aplica?",
            "¿Cuáles son las ventajas?",
            "¿Cuál es el espesor final?",
            "¿Se puede aplicar sobre paredes pintadas?",
            "¿Cuánto tiempo tarda en secar?"
        ]
    },
    secado: {
        response: "<span style='color: #007bff'>IGK2</span> es un producto de base acuosa que se seca rápidamente. El tiempo de secado depende de factores como la temperatura y la humedad del ambiente.",
        followUpQuestions: [
            "¿Cómo se aplica?",
            "¿Cuáles son las ventajas?",
            "¿Cuál es el espesor final?",
            "¿Se puede aplicar sobre paredes pintadas?",
            "¿Cómo funciona la nanotecnología IGK2?"
        ]
    },
    transpirable: {
        response: "<span style='color: #007bff'>IGK2</span> es altamente transpirable, lo que significa que permite la circulación del aire y la evaporación del agua, evitando la condensación y el moho.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    costo: {
        response: "El costo de <span style='color: #007bff'>IGK2</span> varía dependiendo del tamaño del área a tratar y del número de capas necesarias. Te recomiendo consultar con un profesional para obtener un presupuesto personalizado.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    compra: {
        response: "Puedes comprar <span style='color: #007bff'>IGK2</span> en nuestra tienda en línea o en uno de nuestros distribuidores autorizados. Te recomiendo consultar nuestra sección de preguntas frecuentes para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    garantia: {
        response: "<span style='color: #007bff'>IGK2</span> ofrece una garantía de 10 años contra defectos de fabricación y materiales. Te recomiendo consultar nuestra sección de garantía para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    ecologico: {
        response: "<span style='color: #007bff'>IGK2</span> es un producto ecológico que no contiene sustancias nocivas para el medio ambiente. Te recomiendo consultar nuestra sección de sostenibilidad para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    duracion: {
        response: "<span style='color: #007bff'>IGK2</span> es un producto duradero que puede durar hasta 20 años o más dependiendo de las condiciones de uso y mantenimiento. Te recomiendo consultar nuestra sección de mantenimiento para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    toxicidad: {
        response: "<span style='color: #007bff'>IGK2</span> no es tóxico y no contiene sustancias nocivas para la salud humana. Te recomiendo consultar nuestra sección de seguridad para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    herramientas: {
        response: "Para aplicar <span style='color: #007bff'>IGK2</span>, se necesitan herramientas básicas como un rodillo, un pincel y un cubo. Te recomiendo consultar nuestra sección de herramientas para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    preparacion: {
        response: "Para preparar la superficie para la aplicación de <span style='color: #007bff'>IGK2</span>, es necesario limpiarla cuidadosamente y aplicar un imprimación/fijador transpirable. Te recomiendo consultar nuestra sección de preparación para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    ahorro: {
        response: "<span style='color: #007bff'>IGK2</span> puede ayudarte a ahorrar hasta un 50% en tus facturas de energía. Te recomiendo consultar nuestra sección de ahorro para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    },
    mantenimiento: {
        response: "Para mantener <span style='color: #007bff'>IGK2</span> en buen estado, es necesario realizar un mantenimiento regular. Te recomiendo consultar nuestra sección de mantenimiento para obtener más información.",
        followUpQuestions: [
            "¿Qué es IGK2?",
            "¿Cuáles son las ventajas?",
            "¿Cómo se aplica?",
            "¿Se necesita un instalador especializado?",
            "¿Cuál es el espesor final?"
        ]
    }
};

// Función para obtener una respuesta con preguntas de seguimiento
function getResponseWithFollowUp(category) {
    if (responses[category]) {
        const response = responses[category];
        if (typeof response === 'string') {
            return response;
        }
        
        lastQuestion = category;
        followUpState = 1;
        
        const followUpText = response.followUpQuestions ? 
            "\n\n¿Quieres saber más sobre:\n- " + response.followUpQuestions.join('\n- ') :
            "";
            
        return response.response + followUpText;
    }
    return getDefaultResponse();
}

// Función para manejar preguntas de seguimiento
function handleFollowUp(category) {
    if (responses[category] && responses[category].followUpQuestions) {
        const nextQuestion = responses[category].followUpQuestions[followUpState - 1];
        followUpState = (followUpState + 1) % (responses[category].followUpQuestions.length + 1);
        if (followUpState === 0) followUpState = 1;
        return findBestResponse(nextQuestion);
    }
    return getDefaultResponse();
}

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLanguage = lang;
}

// Exportar las funciones necesarias
window.findBestResponse = findBestResponse;
window.handleFollowUp = handleFollowUp;
window.handleResponse = handleResponse;
window.changeLanguage = changeLanguage;
