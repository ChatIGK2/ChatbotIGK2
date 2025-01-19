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
Per applicare <span style='color: #007bff'>IGK2</span> correttamente, segui questi passaggi:\
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
3. <span style='color: #007bff'>Prima mano di <span style='color: #007bff'>IGK2</span></span>: applicare con spatola dentata (denti da 1cm) per garantire uno spessore uniforme. Il rendimento è di circa 1 litro per mm per m².\
</div>\
\
<div style='margin-bottom: 10px'>\
4. <span style='color: #007bff'>Applicazione rete in fibra di vetro</span>: posizionare la rete (peso max 160gr) con sovrapposizione di almeno 10cm tra le fasce, sia in verticale che in orizzontale.\
</div>\
\
<div style='margin-bottom: 10px'>\
5. <span style='color: #007bff'>Seconda mano di <span style='color: #007bff'>IGK2</span></span>: applicare dopo 12-24 ore dalla prima mano, coprendo completamente la rete in fibra di vetro.\
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
</div>\
\
<div style='margin-bottom: 20px'>\
Per una dimostrazione dettagliata, clicca sul pulsante <span style='color: #dc3545'>Video Esplicativi del Prodotto</span>.\
</div>\
\
<div style='margin-bottom: 15px'>\
Ecco altre domande correlate che potrebbero interessarti:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Quali strumenti servono?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Quanto tempo richiede l'asciugatura?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Si può applicare su pareti già dipinte?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Chi può installare <span style='color: #007bff'>IGK2</span>?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Come si prepara la superficie?</a>\
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
        "How often should IGK2 be applied?": "The application thickness of <span style='color: #007bff'>IGK2</span> varies between 4-8mm, depending on the surface and requirements. One application is sufficient for long-lasting effectiveness.",
        "What are the advantages of IGK2?": "Here's a comparison between <span style='color: #007bff'>IGK2</span> and traditional coating:\n\n1) Thickness:\n   ✅ IGK2: Only 4-8 mm\n   ❌ Traditional: 8-12 cm\n\n2) Thermal Insulation:\n   ✅ IGK2: Lambda 0.0019 W/mK\n   ❌ Traditional: Lambda 0.035-0.040 W/mK\n\n3) Application:\n   ✅ IGK2: Fast, like normal reinforced coating\n   ❌ Traditional: Complex, requires anchors\n\n4) Breathability:\n   ✅ IGK2: Highly breathable\n   ❌ Traditional: Can create condensation",
        "How is IGK2 applied?": "<div style='margin-bottom: 20px'>\
To apply <span style='color: #007bff'>IGK2</span> correctly, follow these steps:\
</div>\
\
<div style='margin-bottom: 10px'>\
1. <span style='color: #007bff'>Surface preparation</span>: must be dry, clean, free of residues, dust, dirt, oils, grease, or waxes. Remove any old granulated paint by brushing or sanding.\
</div>\
\
<div style='margin-bottom: 10px'>\
2. <span style='color: #007bff'>Primer application</span>: use a high-penetration acrylic silicate insulating primer (diluted 1:1 with water) if the surface is highly absorbent or has high lime content.\
</div>\
\
<div style='margin-bottom: 10px'>\
3. <span style='color: #007bff'>First coat of <span style='color: #007bff'>IGK2</span></span>: apply with a notched trowel (1cm teeth) to ensure uniform thickness. Coverage is approximately 1 liter per mm per m².\
</div>\
\
<div style='margin-bottom: 10px'>\
4. <span style='color: #007bff'>Fiberglass mesh application</span>: position the mesh (max weight 160gr) with at least 10cm overlap between strips, both vertically and horizontally.\
</div>\
\
<div style='margin-bottom: 10px'>\
5. <span style='color: #007bff'>Second coat of <span style='color: #007bff'>IGK2</span></span>: apply after 12-24 hours from the first coat, completely covering the fiberglass mesh.\
</div>\
\
<div style='margin-bottom: 10px'>\
6. <span style='color: #007bff'>Drying times</span>: wait 24-48 hours for thicknesses up to 3mm, 48-72 hours for greater thicknesses.\
</div>\
\
<div style='margin-bottom: 10px'>\
7. <span style='color: #007bff'>Primer application</span>: after complete drying, apply a suitable primer for the subsequent finish.\
</div>\
\
<div style='margin-bottom: 10px'>\
8. <span style='color: #007bff'>Cement skim coat</span>: apply a cement-based skim coat to even out the surface.\
</div>\
\
<div style='margin-bottom: 10px'>\
9. <span style='color: #007bff'>Finish</span>: apply the desired liquid or paste finish.\
</div>\
\
<div style='margin-bottom: 20px'>\
For a detailed demonstration, click on the <span style='color: #dc3545'>Product Explanatory Videos</span> button.\
</div>\
\
<div style='margin-bottom: 15px'>\
Here are other related questions that might interest you:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>What tools are needed?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How long does it take to dry?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Can it be applied on painted walls?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Who can install <span style='color: #007bff'>IGK2</span>?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>How to prepare the surface?</a>\
</div>",
        "default": "I'm sorry, I didn't understand your question. Could you rephrase it differently?"
    },
    de: {
        "Was ist IGK2?": "<div style='margin-bottom: 20px'><span style='color: #007bff'>IGK2</span> verwendet revolutionäre Nanotechnologie auf Siliziumbasis. Silizium-Moleküle in Nanometergröße dringen in die kleinsten Risse der Wandoberflächen ein und füllen diese aus, wodurch eine hocheffektive thermische Barriere entsteht.</div>",
        "Wie oft sollte IGK2 aufgetragen werden?": "Die Auftragsstärke von <span style='color: #007bff'>IGK2</span> variiert zwischen 4-8mm, je nach Oberfläche und Anforderungen. Eine Anwendung reicht für eine langanhaltende Wirksamkeit aus.",
        "Was sind die Vorteile von IGK2?": "Hier ein Vergleich zwischen <span style='color: #007bff'>IGK2</span> und herkömmlicher Beschichtung:\n\n1) Dicke:\n   ✅ IGK2: Nur 4-8 mm\n   ❌ Traditionell: 8-12 cm\n\n2) Wärmedämmung:\n   ✅ IGK2: Lambda 0,0019 W/mK\n   ❌ Traditionell: Lambda 0,035-0,040 W/mK\n\n3) Anwendung:\n   ✅ IGK2: Schnell, wie normale armierte Beschichtung\n   ❌ Traditionell: Komplex, erfordert Dübel\n\n4) Atmungsaktivität:\n   ✅ IGK2: Hochatmungsaktiv\n   ❌ Traditionell: Kann Kondensat bilden",
        "Wie wird IGK2 aufgetragen?": "<div style='margin-bottom: 20px'>\
Um <span style='color: #007bff'>IGK2</span> korrekt aufzutragen, befolgen Sie diese Schritte:\
</div>\
\
<div style='margin-bottom: 10px'>\
1. <span style='color: #007bff'>Oberflächenvorbereitung</span>: muss trocken, sauber, frei von Rückständen, Staub, Schmutz, Ölen, Fett oder Wachsen sein. Entfernen Sie alte, körnige Farbe durch Bürsten oder Schleifen.\
</div>\
\
<div style='margin-bottom: 10px'>\
2. <span style='color: #007bff'>Grundierung auftragen</span>: verwenden Sie eine hochpenetrierende Acryl-Silikat-Isoliergrundierung (1:1 mit Wasser verdünnt), wenn die Oberfläche stark saugfähig ist oder einen hohen Kalkgehalt aufweist.\
</div>\
\
<div style='margin-bottom: 10px'>\
3. <span style='color: #007bff'>Erste Schicht <span style='color: #007bff'>IGK2</span></span>: mit einer Zahnkelle (1cm Zähne) auftragen, um eine gleichmäßige Dicke zu gewährleisten. Der Verbrauch beträgt ca. 1 Liter pro mm pro m².\
</div>\
\
<div style='margin-bottom: 10px'>\
4. <span style='color: #007bff'>Glasfasergewebe auflegen</span>: das Gewebe (max. Gewicht 160gr) mit mindestens 10cm Überlappung zwischen den Bahnen, sowohl vertikal als auch horizontal, positionieren.\
</div>\
\
<div style='margin-bottom: 10px'>\
5. <span style='color: #007bff'>Zweite Schicht <span style='color: #007bff'>IGK2</span></span>: nach 12-24 Stunden von der ersten Schicht auftragen, das Glasfasergewebe vollständig bedecken.\
</div>\
\
<div style='margin-bottom: 10px'>\
6. <span style='color: #007bff'>Trocknungszeiten</span>: 24-48 Stunden für Dicken bis 3mm warten, 48-72 Stunden für größere Dicken.\
</div>\
\
<div style='margin-bottom: 10px'>\
7. <span style='color: #007bff'>Grundierung auftragen</span>: nach vollständiger Trocknung eine geeignete Grundierung für die nachfolgende Endbearbeitung auftragen.\
</div>\
\
<div style='margin-bottom: 10px'>\
8. <span style='color: #007bff'>Zementspachtelung</span>: eine zementbasierte Spachtelmasse auftragen, um die Oberfläche zu glätten.\
</div>\
\
<div style='margin-bottom: 10px'>\
9. <span style='color: #007bff'>Endbearbeitung</span>: die gewünschte Flüssig- oder Pastenendbearbeitung auftragen.\
</div>\
\
<div style='margin-bottom: 20px'>\
Für eine detaillierte Demonstration klicken Sie auf die Schaltfläche <span style='color: #dc3545'>Produkt-Erklärungsvideos</span>.\
</div>\
\
<div style='margin-bottom: 15px'>\
Hier sind weitere verwandte Fragen, die Sie interessieren könnten:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Welche Werkzeuge werden benötigt?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie lange dauert die Trocknung?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Kann es auf gestrichene Wände aufgetragen werden?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wer kann <span style='color: #007bff'>IGK2</span> installieren?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>Wie bereitet man die Oberfläche vor?</a>\
</div>",
        "default": "Tut mir leid, ich habe Ihre Frage nicht verstanden. Könnten Sie sie anders formulieren?"
    },
    es: {
        "¿Qué es IGK2?": "<div style='margin-bottom: 20px'><span style='color: #007bff'>IGK2</span> utiliza nanotecnología revolucionaria basada en silicio. Las moléculas de silicio de tamaño nanométrico penetran y llenan incluso las grietas más pequeñas en las superficies de las paredes, creando una barrera térmica altamente efectiva.</div>",
        "¿Cuántas veces debe aplicarse IGK2?": "El espesor de aplicación de <span style='color: #007bff'>IGK2</span> varía entre 4-8mm, dependiendo de la superficie y los requisitos. Una aplicación es suficiente para una eficacia duradera.",
        "¿Cuáles son las ventajas de IGK2?": "Aquí una comparación entre <span style='color: #007bff'>IGK2</span> y el revestimiento tradicional:\n\n1) Espesor:\n   ✅ IGK2: Solo 4-8 mm\n   ❌ Tradicional: 8-12 cm\n\n2) Aislamiento Térmico:\n   ✅ IGK2: Lambda 0,0019 W/mK\n   ❌ Tradicional: Lambda 0,035-0,040 W/mK\n\n3) Aplicación:\n   ✅ IGK2: Rápida, como revestimiento armado normal\n   ❌ Tradicional: Compleja, requiere tacos\n\n4) Transpirabilidad:\n   ✅ IGK2: Altamente transpirable\n   ❌ Tradicional: Puede crear condensación",
        "¿Cómo se aplica IGK2?": "<div style='margin-bottom: 20px'>\
Para aplicar <span style='color: #007bff'>IGK2</span> correctamente, siga estos pasos:\
</div>\
\
<div style='margin-bottom: 10px'>\
1. <span style='color: #007bff'>Preparación de la superficie</span>: debe estar seca, limpia, libre de residuos, polvo, suciedad, aceites, grasas o ceras. Elimine cualquier pintura granulada antigua mediante cepillado o lijado.\
</div>\
\
<div style='margin-bottom: 10px'>\
2. <span style='color: #007bff'>Aplicación del imprimador</span>: utilice un imprimador aislante acrílico de silicatos de alta penetración (diluido 1:1 con agua) si la superficie es muy absorbente o tiene alto contenido de cal.\
</div>\
\
<div style='margin-bottom: 10px'>\
3. <span style='color: #007bff'>Primera capa de <span style='color: #007bff'>IGK2</span></span>: aplicar con llana dentada (dientes de 1cm) para garantizar un espesor uniforme. El rendimiento es de aproximadamente 1 litro por mm por m².\
</div>\
\
<div style='margin-bottom: 10px'>\
4. <span style='color: #007bff'>Aplicación de malla de fibra de vidrio</span>: colocar la malla (peso máximo 160gr) con superposición de al menos 10cm entre las bandas, tanto vertical como horizontalmente.\
</div>\
\
<div style='margin-bottom: 10px'>\
5. <span style='color: #007bff'>Segunda capa de <span style='color: #007bff'>IGK2</span></span>: aplicar después de 12-24 horas de la primera capa, cubriendo completamente la malla de fibra de vidrio.\
</div>\
\
<div style='margin-bottom: 10px'>\
6. <span style='color: #007bff'>Tiempos de secado</span>: esperar 24-48 horas para espesores de hasta 3mm, 48-72 horas para espesores mayores.\
</div>\
\
<div style='margin-bottom: 10px'>\
7. <span style='color: #007bff'>Aplicación de imprimador</span>: después del secado completo, aplicar un imprimador adecuado para el acabado posterior.\
</div>\
\
<div style='margin-bottom: 10px'>\
8. <span style='color: #007bff'>Enlucido de cemento</span>: aplicar un enlucido cementoso para uniformar la superficie.\
</div>\
\
<div style='margin-bottom: 10px'>\
9. <span style='color: #007bff'>Acabado</span>: aplicar el acabado líquido o en pasta deseado.\
</div>\
\
<div style='margin-bottom: 20px'>\
Para una demostración detallada, haga clic en el botón <span style='color: #dc3545'>Videos Explicativos del Producto</span>.\
</div>\
\
<div style='margin-bottom: 15px'>\
Aquí hay otras preguntas relacionadas que podrían interesarle:\
</div>\
\
<div style='margin-left: 20px'>\
1. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Qué herramientas se necesitan?</a><br>\
2. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cuánto tiempo tarda en secar?</a><br>\
3. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Se puede aplicar sobre paredes pintadas?</a><br>\
4. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Quién puede instalar <span style='color: #007bff'>IGK2</span>?</a><br>\
5. <a href='#' onclick='return false;' style='color: #007bff; text-decoration: none;'>¿Cómo se prepara la superficie?</a>\
</div>",
        "default": "Lo siento, no he entendido tu pregunta. ¿Podrías reformularla de otra manera?"
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
