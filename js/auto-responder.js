// Funzione per ottenere la lingua corrente
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'it';
}

// Mappa delle parole chiave per ogni risposta e lingua
const keywordMap = {
    // Italiano
    "Cos'è IGK2?": ['cos è igk2', 'cosa è igk2', 'che cosa è igk2', 'che cos è igk2', 'cos e igk2', 'cosa e igk2'],
    "Quanto spesso va applicato IGK2?": ['quanto spesso', 'spessore', 'quanto è spesso', 'spesso è', 'quanto e spesso'],
    "Quali sono i vantaggi di IGK2?": ['vantaggi', 'vantaggio', 'benefici', 'beneficio', 'meglio', 'differenza', 'confronto'],
    "Come si applica IGK2?": ['come si applica', 'applicazione', 'come applicare', 'applicare igk2', 'come si usa', 'come usare'],
    
    // English
    "What is IGK2?": ['what is igk2', 'what\'s igk2', 'tell me about igk2', 'explain igk2'],
    "How often should IGK2 be applied?": ['how thick', 'thickness', 'how often', 'application thickness'],
    "What are the advantages of IGK2?": ['advantages', 'benefits', 'better', 'difference', 'comparison', 'compare'],
    "How is IGK2 applied?": ['how to apply', 'application', 'apply igk2', 'how to use', 'usage', 'instructions'],
    
    // Deutsch
    "Was ist IGK2?": ['was ist igk2', 'erkläre igk2', 'erzähl mir von igk2'],
    "Wie oft sollte IGK2 aufgetragen werden?": ['wie dick', 'dicke', 'wie oft', 'auftragsstärke'],
    "Was sind die Vorteile von IGK2?": ['vorteile', 'nutzen', 'besser', 'unterschied', 'vergleich'],
    "Wie wird IGK2 aufgetragen?": ['wie auftragen', 'anwendung', 'auftragen', 'wie benutzen', 'gebrauchsanweisung'],
    
    // Español
    "¿Qué es IGK2?": ['que es igk2', 'qué es igk2', 'explica igk2', 'dime sobre igk2'],
    "¿Cuántas veces debe aplicarse IGK2?": ['qué grosor', 'cual es el grosor', 'cuántas veces', 'espesor'],
    "¿Cuáles son las ventajas de IGK2?": ['ventajas', 'beneficios', 'mejor', 'diferencia', 'comparación', 'comparar'],
    "¿Cómo se aplica IGK2?": ['cómo se aplica', 'aplicación', 'como aplicar', 'instrucciones', 'como usar']
};

const responses = {
    it: {
        "Cos'è IGK2?": "<div style='margin-bottom: 20px'><span style='color: #007bff'>IGK2</span> utilizza una rivoluzionaria nanotecnologia a base di silicio. Le molecole di silicio di dimensioni nanometriche penetrano e riempiono anche le più piccole fessure nelle superfici delle pareti, creando una barriera termica altamente efficace.</div>\
<div style='margin-bottom: 20px'>Per maggiori dettagli, consulta i <span style='color: #6c757d'>Documenti Scaricabili</span> dove troverai le schede tecniche complete.</div>\
<div style='margin-bottom: 15px'>Ecco alcune domande frequenti su <span style='color: #007bff'>IGK2</span>:</div>\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Come si applica IGK2?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Quanto spesso va applicato?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Quali sono i vantaggi rispetto ai sistemi tradizionali?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Dove posso acquistarlo?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Come funziona la nanotecnologia?</a>\
</div>",
        "Quanto spesso va applicato IGK2?": "<div style='margin-bottom: 20px'>\
<span style='color: #007bff'>IGK2</span> richiede uno spessore molto ridotto per essere efficace grazie alla nanotecnologia:<br>\
Lo spessore di applicazione va da 2 mm a 10 mm<br>\
Il consumo è di circa 1 litro per m² per mm di spessore\
</div>\
\
<div style='margin-bottom: 20px'>\
I tempi di asciugatura variano in base allo spessore:<br>\
<div style='margin-left: 20px'>\
• 4 mm: 24 ore<br>\
• 5 mm: 48 ore<br>\
• 6 mm: 72 ore<br>\
• 7 mm: 96 ore<br>\
• 8 mm: 144 ore\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
Per vedere la corretta applicazione, consulta i <span style='color: #dc3545'>Video Esplicativi del Prodotto</span> che mostrano il processo passo dopo passo.\
</div>\
\
<div style='margin-bottom: 15px'>\
Ecco alcune domande correlate su <span style='color: #007bff'>IGK2</span>:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Come si applica IGK2?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Quali strumenti servono?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Come va preparata la superficie?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Quanto tempo richiede l'applicazione?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Si può applicare su pareti già dipinte?</a>\
</div>",
        "Quali sono i vantaggi di IGK2?": "Ecco un confronto tra <span style='color: #007bff'>IGK2</span> e il rivestimento tradizionale:\n\n1) Spessore:\n   ✅ IGK2: Solo 4-8 mm\n   ❌ Tradizionale: 8-12 cm\n\n2) Isolamento Termico:\n   ✅ IGK2: Lambda 0,0019 W/mK\n   ❌ Tradizionale: Lambda 0,035-0,040 W/mK\n\n3) Applicazione:\n   ✅ IGK2: Veloce, come normale rivestimento armato\n   ❌ Tradizionale: Complessa, richiede tasselli\n\n4) Traspirabilità:\n   ✅ IGK2: Altamente traspirante\n   ❌ Tradizionale: Può creare condensa",
        "Come si applica IGK2?": "<div style='margin-bottom: 20px'>\
Per applicare IGK2 correttamente, segui questi passaggi:\
</div>\
\
<div style='margin-bottom: 10px'>\
1. <span style='color: #007bff'>Preparazione della superficie</span>: deve essere asciutta, pulita, priva di residui, polvere, sporco, oli, grassi o cere. Rimuovere eventuali pitture granulate vecchie mediante spazzolatura o carteggiatura.\
</div>\
\
<div style='margin-bottom: 10px'>\
2. <span style='color: #007bff'>Applicazione del primer</span>: utilizzare un fondo acrilico isolante ai silicati ad alta penetrazione (diluito 1:1 con acqua) se la superficie è molto assorbente o ha alto contenuto di calce.\
</div>\
\
<div style='margin-bottom: 10px'>\
3. <span style='color: #007bff'>Prima mano di IGK2</span>: applicare con spatola dentata (denti da 1cm) per garantire uno spessore uniforme. Il rendimento è di circa 1 litro per mm per m².\
</div>\
\
<div style='margin-bottom: 10px'>\
4. <span style='color: #007bff'>Applicazione rete in fibra di vetro</span>: posizionare la rete (peso max 160gr) con sovrapposizione di almeno 10cm tra le fasce, sia in verticale che in orizzontale.\
</div>\
\
<div style='margin-bottom: 10px'>\
5. <span style='color: #007bff'>Seconda mano di IGK2</span>: applicare dopo 12-24 ore dalla prima mano, coprendo completamente la rete in fibra di vetro.\
</div>\
\
<div style='margin-bottom: 10px'>\
6. <span style='color: #007bff'>Tempi di asciugatura</span>: attendere 24-48 ore per spessori fino a 3mm, 48-72 ore per spessori maggiori.\
</div>\
\
<div style='margin-bottom: 10px'>\
7. <span style='color: #007bff'>Applicazione primer</span>: dopo completa asciugatura, applicare un primer idoneo per la successiva finitura.\
</div>\
\
<div style='margin-bottom: 10px'>\
8. <span style='color: #007bff'>Rasatura cementizia</span>: applicare un rasante cementizio per uniformare la superficie.\
</div>\
\
<div style='margin-bottom: 10px'>\
9. <span style='color: #007bff'>Finitura</span>: applicare la finitura liquida o in pasta desiderata.\
</div>",
        "default": "Mi dispiace, non ho capito la tua domanda. Potresti riformularla in modo diverso?"
    },
    en: {
        "What is IGK2?": "<div style='margin-bottom: 20px'><span style='color: #007bff'>IGK2</span> uses revolutionary silicon-based nanotechnology. Silicon molecules of nanometric size penetrate and fill even the smallest cracks in wall surfaces, creating a highly effective thermal barrier.</div>\
<div style='margin-bottom: 20px'>For more details, check the <span style='color: #6c757d'>Downloadable Documents</span> where you'll find complete technical specifications.</div>\
<div style='margin-bottom: 15px'>Here are some frequently asked questions about <span style='color: #007bff'>IGK2</span>:</div>\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How is IGK2 applied?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How often should it be applied?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>What are the advantages over traditional systems?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Where can I buy it?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How does the nanotechnology work?</a>\
</div>",
        "How often should IGK2 be applied?": "<div style='margin-bottom: 20px'>\
<span style='color: #007bff'>IGK2</span> requires a very thin layer to be effective thanks to nanotechnology:<br>\
The application thickness ranges from 2 mm to 10 mm<br>\
Consumption is about 1 liter per m² per mm of thickness\
</div>\
\
<div style='margin-bottom: 20px'>\
Drying times vary according to thickness:<br>\
<div style='margin-left: 20px'>\
• 4 mm: 24 hours<br>\
• 5 mm: 48 hours<br>\
• 6 mm: 72 hours<br>\
• 7 mm: 96 hours<br>\
• 8 mm: 144 hours\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
To see the correct application, check out our <span style='color: #dc3545'>Product Explanatory Videos</span> that show the process step by step.\
</div>\
\
<div style='margin-bottom: 15px'>\
Here are some related questions about <span style='color: #007bff'>IGK2</span>:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How is IGK2 applied?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>What tools are needed?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How should the surface be prepared?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How long does the application take?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Can it be applied to already painted walls?</a>\
</div>",
        "What are the advantages of IGK2?": "Here's a comparison between <span style='color: #007bff'>IGK2</span> and traditional coating:\n\n1) Thickness:\n   ✅ IGK2: Only 4-8 mm\n   ❌ Traditional: 8-12 cm\n\n2) Thermal Insulation:\n   ✅ IGK2: Lambda 0.0019 W/mK\n   ❌ Traditional: Lambda 0.035-0.040 W/mK\n\n3) Application:\n   ✅ IGK2: Quick, like normal reinforced coating\n   ❌ Traditional: Complex, requires dowels\n\n4) Breathability:\n   ✅ IGK2: Highly breathable\n   ❌ Traditional: Can create condensation",
        "How is IGK2 applied?": "<div style='margin-bottom: 20px'>\
The application of <span style='color: #007bff'>IGK2</span> is a simple but precise process:\
</div>\
\
<div style='margin-bottom: 20px'>\
1. Surface preparation:<br>\
<div style='margin-left: 20px'>\
• Clean the wall thoroughly<br>\
• Remove any loose parts<br>\
• Apply the specific primer\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
2. Application:<br>\
<div style='margin-left: 20px'>\
• Mix the product according to instructions<br>\
• Apply with notched trowel or plastering machine<br>\
• Spread evenly with a thickness of 4-8 mm<br>\
• Smooth the surface with a float\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
For a detailed demonstration, watch our <span style='color: #dc3545'>Product Explanatory Videos</span>.\
</div>\
\
<div style='margin-bottom: 15px'>\
Related questions:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>What tools are needed?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How long does drying take?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Can it be applied to already painted walls?</a>\
</div>",
        "default": "I'm sorry, I didn't understand your question. Could you rephrase it?"
    },
    de: {
        "Was ist IGK2?": "<div style='margin-bottom: 20px'><span style='color: #007bff'>IGK2</span> verwendet revolutionäre Silizium-basierte Nanotechnologie. Siliziummoleküle von nanometrischer Größe dringen in die kleinsten Risse in der Wand ein und schaffen eine hochwirksame Wärmebarriere.</div>\
<div style='margin-bottom: 20px'>Für weitere Informationen, sehen Sie sich die <span style='color: #6c757d'>Downloadbaren Dokumente</span> an, wo Sie die vollständigen technischen Spezifikationen finden.</div>\
<div style='margin-bottom: 15px'>Hier sind einige häufig gestellte Fragen zu <span style='color: #007bff'>IGK2</span>:</div>\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie wird IGK2 aufgetragen?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie oft sollte es aufgetragen werden?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Was sind die Vorteile gegenüber traditionellen Systemen?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wo kann ich es kaufen?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie funktioniert die Nanotechnologie?</a>\
</div>",
        "Wie oft sollte IGK2 aufgetragen werden?": "<div style='margin-bottom: 20px'>\
<span style='color: #007bff'>IGK2</span> benötigt dank der Nanotechnologie nur eine sehr dünne Schicht, um effektiv zu sein:<br>\
Die Auftragsdicke reicht von 2 mm bis 10 mm<br>\
Der Verbrauch beträgt etwa 1 Liter pro m² pro mm Dicke\
</div>\
\
<div style='margin-bottom: 20px'>\
Die Trocknungszeiten variieren je nach Dicke:<br>\
<div style='margin-left: 20px'>\
• 4 mm: 24 Stunden<br>\
• 5 mm: 48 Stunden<br>\
• 6 mm: 72 Stunden<br>\
• 7 mm: 96 Stunden<br>\
• 8 mm: 144 Stunden\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
Um die korrekte Anwendung zu sehen, schauen Sie sich unsere <span style='color: #dc3545'>Produkt-Erklärungsvideos</span> an, die den Prozess Schritt für Schritt zeigen.\
</div>\
\
<div style='margin-bottom: 15px'>\
Hier sind einige verwandte Fragen zu <span style='color: #007bff'>IGK2</span>:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie wird IGK2 aufgetragen?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Welche Werkzeuge werden benötigt?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie muss die Oberfläche vorbereitet werden?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie lange dauert die Anwendung?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Kann es auf bereits gestrichene Wände aufgetragen werden?</a>\
</div>",
        "Was sind die Vorteile von IGK2?": "Hier ist ein Vergleich zwischen <span style='color: #007bff'>IGK2</span> und traditioneller Beschichtung:\n\n1) Dicke:\n   ✅ IGK2: Nur 4-8 mm\n   ❌ Traditionell: 8-12 cm\n\n2) Wärmeisolierung:\n   ✅ IGK2: Lambda 0,0019 W/mK\n   ❌ Traditionell: Lambda 0,035-0,040 W/mK\n\n3) Anwendung:\n   ✅ IGK2: Schnell, wie normale verstärkte Beschichtung\n   ❌ Traditionell: Komplex, erfordert Dübel\n\n4) Atmungsaktivität:\n   ✅ IGK2: Hoch atmungsaktiv\n   ❌ Traditionell: Kann Kondenswasser bilden",
        "Wie wird IGK2 aufgetragen?": "<div style='margin-bottom: 20px'>\
Die Anwendung von <span style='color: #007bff'>IGK2</span> ist ein einfacher, aber präziser Prozess:\
</div>\
\
<div style='margin-bottom: 20px'>\
1. Oberflächenvorbereitung:<br>\
<div style='margin-left: 20px'>\
• Wand gründlich reinigen<br>\
• Lose Teile entfernen<br>\
• Speziellen Primer auftragen\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
2. Anwendung:<br>\
<div style='margin-left: 20px'>\
• Produkt nach Anweisung mischen<br>\
• Mit Zahnspachtel oder Putzmaschine auftragen<br>\
• Gleichmäßig mit einer Dicke von 4-8 mm auftragen<br>\
• Oberfläche mit Reibebrett glätten\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
Für eine detaillierte Demonstration sehen Sie sich unsere <span style='color: #dc3545'>Produkt-Erklärungsvideos</span> an.\
</div>\
\
<div style='margin-bottom: 15px'>\
Verwandte Fragen:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Welche Werkzeuge werden benötigt?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie lange dauert die Trocknung?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Kann es auf bereits gestrichene Wände aufgetragen werden?</a>\
</div>",
        "default": "Es tut mir leid, ich habe Ihre Frage nicht verstanden. Könnten Sie sie anders formulieren?"
    },
    es: {
        "¿Qué es IGK2?": "<div style='margin-bottom: 20px'><span style='color: #007bff'>IGK2</span> utiliza una revolucionaria nanotecnología a base de silicio. Las moléculas de silicio de tamaño nanométrico penetran y llenan incluso las grietas más pequeñas en las superficies de las paredes, creando una barrera térmica altamente eficaz.</div>\
<div style='margin-bottom: 20px'>Para más detalles, consulte los <span style='color: #6c757d'>Documentos Descargables</span> donde encontrará las especificaciones técnicas completas.</div>\
<div style='margin-bottom: 15px'>Aquí hay algunas preguntas frecuentes sobre <span style='color: #007bff'>IGK2</span>:</div>\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cómo se aplica IGK2?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cuántas veces debe aplicarse?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cuáles son las ventajas sobre los sistemas tradicionales?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Dónde puedo comprarlo?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cómo funciona la nanotecnología?</a>\
</div>",
        "¿Cuántas veces debe aplicarse IGK2?": "<div style='margin-bottom: 20px'>\
<span style='color: #007bff'>IGK2</span> requiere una capa muy fina para ser efectivo gracias a la nanotecnología:<br>\
El espesor de aplicación varía de 2 mm a 10 mm<br>\
El consumo es de aproximadamente 1 litro por m² por mm de espesor\
</div>\
\
<div style='margin-bottom: 20px'>\
Los tiempos de secado varían según el espesor:<br>\
<div style='margin-left: 20px'>\
• 4 mm: 24 horas<br>\
• 5 mm: 48 horas<br>\
• 6 mm: 72 horas<br>\
• 7 mm: 96 horas<br>\
• 8 mm: 144 horas\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
Para ver la correcta aplicación, consulte nuestros <span style='color: #dc3545'>Videos Explicativos del Producto</span> que muestran el proceso paso a paso.\
</div>\
\
<div style='margin-bottom: 15px'>\
Aquí hay algunas preguntas relacionadas sobre <span style='color: #007bff'>IGK2</span>:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cómo se aplica IGK2?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Qué herramientas se necesitan?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cómo se debe preparar la superficie?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cuánto tiempo requiere la aplicación?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Se puede aplicar sobre paredes ya pintadas?</a>\
</div>",
        "¿Cuáles son las ventajas de IGK2?": "Aquí está una comparación entre <span style='color: #007bff'>IGK2</span> y el recubrimiento tradicional:\n\n1) Espesor:\n   ✅ IGK2: Solo 4-8 mm\n   ❌ Tradicional: 8-12 cm\n\n2) Aislamiento Térmico:\n   ✅ IGK2: Lambda 0,0019 W/mK\n   ❌ Tradicional: Lambda 0,035-0,040 W/mK\n\n3) Aplicación:\n   ✅ IGK2: Rápido, como recubrimiento reforzado normal\n   ❌ Tradicional: Complejo, requiere tacos\n\n4) Transpirabilidad:\n   ✅ IGK2: Altamente transpirable\n   ❌ Tradicional: Puede crear condensación",
        "¿Cómo se aplica IGK2?": "<div style='margin-bottom: 20px'>\
La aplicación de <span style='color: #007bff'>IGK2</span> es un proceso simple pero preciso:\
</div>\
\
<div style='margin-bottom: 20px'>\
1. Preparación de la superficie:<br>\
<div style='margin-left: 20px'>\
• Limpiar la pared a fondo<br>\
• Eliminar cualquier parte suelta<br>\
• Aplicar el imprimador específico\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
2. Aplicación:<br>\
<div style='margin-left: 20px'>\
• Mezclar el producto según las instrucciones<br>\
• Aplicar con llana dentada o máquina de enlucir<br>\
• Extender uniformemente con un espesor de 4-8 mm<br>\
• Alisar la superficie con una llana\
</div>\
</div>\
\
<div style='margin-bottom: 20px'>\
Para una demostración detallada, vea nuestros <span style='color: #dc3545'>Videos Explicativos del Producto</span>.\
</div>\
\
<div style='margin-bottom: 15px'>\
Preguntas relacionadas:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Qué herramientas se necesitan?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cuánto tiempo tarda en secar?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Se puede aplicar sobre paredes ya pintadas?</a>\
</div>",
        "default": "Lo siento, no entendí su pregunta. ¿Podría reformularla de otra manera?"
    }
};

// Funzione per trovare la migliore risposta
window.findBestResponse = function(userMessage) {
    const currentLang = getCurrentLanguage();
    const langResponses = responses[currentLang] || responses.it;
    
    // Normalizza il messaggio dell'utente (rimuovi punteggiatura e converti in minuscolo)
    const normalizedMessage = userMessage.toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?']/g, '')  // Aggiunto l'apostrofo
        .replace(/\s+/g, ' ')
        .trim();

    console.log('Messaggio normalizzato:', normalizedMessage); // Debug

    // Cerca nelle parole chiave prima delle corrispondenze esatte
    for (const [key, keywords] of Object.entries(keywordMap)) {
        console.log('Controllo keywords per:', key); // Debug
        if (keywords.some(keyword => {
            const matches = normalizedMessage.includes(keyword.toLowerCase());
            console.log('Keyword:', keyword, 'Matches:', matches); // Debug
            return matches;
        })) {
            return langResponses[key] || langResponses.default;
        }
    }

    // Se non trova nelle keywords, cerca corrispondenze esatte nelle chiavi
    for (const [key, response] of Object.entries(langResponses)) {
        const normalizedKey = key.toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?']/g, '')  // Aggiunto l'apostrofo
            .trim();
        console.log('Confronto chiave:', normalizedKey); // Debug
        if (normalizedKey === normalizedMessage) {
            return response;
        }
    }
    
    return langResponses.default;
};
