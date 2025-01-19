// Variables to manage conversation state
let currentLanguage = 'en';
let lastQuestion = '';
let followUpState = 0;

// Array with all possible questions
const allQuestions = [
    "What is IGK2?",
    "How is it applied?",
    "What are the advantages?",
    "Is it certified?",
    "What is the final thickness?",
    "Can it be applied on painted walls?",
    "Do you need a specialized installer?",
    "How long are the drying times?",
    "How does IGK2 nanotechnology work?",
    "Is it breathable?",
    "How much does it cost?",
    "Where can I buy it?",
    "Is there a warranty?",
    "Is it eco-friendly?",
    "How long does it last?",
    "Is it toxic?",
    "What tools are needed?",
    "How to prepare the surface?",
    "How much can I save?",
    "Does it need maintenance?"
];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get 5 random questions
function getRandomQuestions() {
    const shuffled = [...allQuestions];
    shuffleArray(shuffled);
    return shuffled.slice(0, 5);
}

// Function to get a default response
function getDefaultResponse() {
    const randomQuestions = getRandomQuestions().map(q => 
        `<span style='color: purple; cursor: pointer;' onclick='handleResponse("${q}")'>${q}</span>`
    ).join('\n- ');
    return "I'm sorry, I didn't understand your question. Could you rephrase it differently?\n\nYou can ask me about:\n- " + randomQuestions;
}

// Function to find the best response
function findBestResponse(userInput) {
    const input = userInput.toLowerCase();
    console.log("Input received:", input);
    
    if (followUpState > 0 && (input.includes('yes') || input.includes('ok'))) {
        return handleFollowUp(lastQuestion);
    }
    
    followUpState = 0;
    
    const keywords = {
        what_is_igk2: ['what is', 'what does', 'explain', 'describe'],
        thickness: ['thickness', 'how thick', 'layer', 'millimeters'],
        advantages: ['advantage', 'benefit', 'why', 'better'],
        application: ['apply', 'use', 'install', 'how to use'],
        certification: ['certified', 'norm', 'standard', 'requirement'],
        painted_wall: ['painted wall', 'paint', 'painted', 'painted surface'],
        installer: ['installer', 'professional', 'expert', 'technician'],
        drying: ['drying', 'dry', 'wait', 'time'],
        technology: ['nanotechnology', 'work', 'how does it work', 'principle'],
        breathable: ['breathable', 'vapor', 'humidity', 'breathe']
    };

    for (const [category, categoryKeywords] of Object.entries(keywords)) {
        if (categoryKeywords.some(keyword => input.includes(keyword))) {
            return getResponseWithFollowUp(category);
        }
    }

    return getDefaultResponse();
}

// Database of responses
const responses = {
    what_is_igk2: {
        response: "<span style='color: #007bff'>IGK2</span> uses revolutionary silicon-based nanotechnology. Silicon molecules of nanometric size (one billionth of a meter) penetrate and fill even the smallest cracks in wall surfaces, creating a highly effective thermal barrier.\n\nUnlike thermoreflective materials that only reflect heat through hollow ceramic particles, <span style='color: #007bff'>IGK2</span> is a true thermal insulator: its silicon nanomolecules actively absorb and disperse heat, preventing its passage from inside to outside (or vice versa). This process ensures exceptional energy efficiency and keeps houses cool in summer and warm in winter.",
        followUpQuestions: [
            "How is it applied?",
            "What are the advantages?",
            "How does the nanotechnology work?"
        ]
    },
    thickness: {
        response: "<span style='color: #007bff'>IGK2</span> is a nanotechnological thermal insulation system that is applied in three layers:\nThe total thickness of the system can reach up to 10mm.\n\n<span style='color: #007bff; font-weight: bold'>The application process of IGK2 paste for exteriors is as follows:</span>\n\n1) Breathable primer/fixative\n2) First layer of IGK2 thermal paste\n3) 160gr reinforced fiber mesh\n4) Second layer of IGK2 thermal paste\n5) Breathable primer/fixative\n6) Finishing with paste coating or paint for exterior walls\n7) Finishing with paste coating or paint for exteriors\n\n<span style='color: #007bff; font-weight: bold'>To obtain greater thicknesses, additional layers can be applied according to the following scheme:</span>\n\n1️⃣ 4 mm - 24 hours drying\n2️⃣ 5 mm - 48 hours drying\n3️⃣ 6 mm - 72 hours drying\n4️⃣ 7 mm - 96 hours drying\n5️⃣ 8 mm - 144 hours drying\n\nNote: Under optimal temperature and humidity conditions, drying times can be reduced by 50-60%. The product is water-based and during application the water evaporates while the hydraulic binder hardens, ensuring the specified thermal performance.",
        followUpQuestions: [
            "How is it applied?",
            "Can it be applied on painted walls?",
            "Do you need a specialized installer?",
            "How does IGK2 nanotechnology work?"
        ]
    },
    advantages: {
        response: "Here's a comparison between <span style='color: #007bff'>IGK2</span> and traditional insulation:\n\n1) Thickness and volume:\n   ✅ IGK2: Only 4-8 mm thickness, doesn't alter aesthetics\n   ❌ Traditional insulation: 8-12 cm thickness, considerable aesthetic change\n\n2) Thermal insulation:\n   ✅ IGK2: Lambda 0.0019 W/mK thanks to nanotechnology\n   ❌ Traditional insulation: Lambda 0.035-0.040 W/mK (EPS or rock wool)\n\n3) Application:\n   ✅ IGK2: Quick, like a normal reinforced plaster\n   ❌ Traditional insulation: Complex, requires dowels and profiles\n\n4) Breathability:\n   ✅ IGK2: Highly breathable, prevents mold\n   ❌ Traditional insulation: Can cause interstitial condensation\n\n5) Durability:\n   ✅ IGK2: Resistant to atmospheric agents\n   ❌ Traditional insulation: Deteriorates over time\n\nI recommend watching the <span style='color: #ff0000'>\"Product Explanation Videos\"</span> to see these advantages in action.",
        followUpQuestions: [
            "What is IGK2?",
            "How is it applied?",
            "Is it certified?",
            "Do you need a specialized installer?",
            "What is the final thickness?"
        ]
    },
    application: {
        response: "<span style='color: #007bff'>IGK2</span> is applied like a normal reinforced plaster, following these steps:\n\n1) Breathable primer/fixative\n2) First layer of IGK2 thermal paste\n3) 160gr reinforced fiber mesh\n4) Second layer of IGK2 thermal paste\n5) White granulometry layer for leveling\n6) Breathable primer/fixative\n7) Finishing with paste coating or paint for exterior walls\n\nFor optimal results, it is recommended that the product be applied by professionals with experience in reinforced plasters, although specific certification is not required.\n\nI recommend clicking on the <span style='color: #ff0000'>\"Product Explanation Videos\"</span> button to see a practical demonstration.",
        followUpQuestions: [
            "What is the final thickness?",
            "Can it be applied on painted walls?",
            "Do you need a specialized installer?",
            "How long are the drying times?",
            "How does IGK2 nanotechnology work?"
        ]
    },
    technology: {
        response: "<span style='color: #007bff'>IGK2</span> uses revolutionary silicon-based nanotechnology:\n\n1) Composition:\n   - Silicon nanomolecules of nanometric size\n   - Particles specially developed for deep penetration\n\n2) Operation:\n   - Nanomolecules penetrate the smallest cracks\n   - Create an effective thermal barrier\n   - Actively absorb and disperse heat\n\n3) Advantages over conventional systems:\n   - Higher thermal efficiency\n   - Less thickness required\n   - Better material distribution\n\nI recommend watching the <span style='color: #ff0000'>\"Product Explanation Videos\"</span> to see a visual demonstration of how it works.",
        followUpQuestions: [
            "What are the advantages?",
            "How is it applied?",
            "Is it certified?",
            "What is the final thickness?",
            "Is it breathable?"
        ]
    },
    certification: {
        response: "<span style='color: #007bff'>IGK2</span> has important certifications:\n\n1) CE marking\n2) Thermal conductivity certification\n3) Compliance with CAM (Minimum Environmental Criteria)\n4) AJAEU/14021/20/0095 certificate of UNI/ISO 14021 compliance\n5) Accelerated aging tests\n6) Certifications for tax deductions",
        followUpQuestions: [
            "What is IGK2?",
            "What are the advantages?",
            "How is it applied?",
            "Is it breathable?"
        ]
    },
    painted_wall: {
        response: "The application of <span style='color: #007bff'>IGK2</span> is compatible with already painted wall substrates. However, it's important to evaluate the nature of the existing paint:\n\n1) If the existing paint is based on plastic polymers, the product might not guarantee complete breathability. In this case, you have two options:\n   - Completely remove the existing paint\n   - Apply <span style='color: #007bff'>IGK2</span> directly, accepting reduced breathability\n\n2) If the existing paint is breathable, you can proceed normally with the application of <span style='color: #007bff'>IGK2</span> following these steps:\n   - Clean the surface carefully\n   - Apply breathable primer/fixative\n   - Proceed with the application of <span style='color: #007bff'>IGK2</span>\n\nI recommend clicking on the <span style='color: #ff0000'>\"Product Explanation Videos\"</span> button to see a practical demonstration.",
        followUpQuestions: [
            "How is it applied?",
            "Do you need a specialized installer?",
            "How to prepare the surface?",
            "Is it breathable?"
        ]
    },
    installer: {
        response: "For optimal results, it is recommended that <span style='color: #007bff'>IGK2</span> be applied by professionals with experience in reinforced plasters, although specific certification is not required.",
        followUpQuestions: [
            "How is it applied?",
            "What are the advantages?",
            "What is the final thickness?",
            "Can it be applied on painted walls?",
            "How long are the drying times?"
        ]
    },
    drying: {
        response: "<span style='color: #007bff'>IGK2</span> is a water-based product that dries quickly. Drying time depends on factors such as temperature and ambient humidity.",
        followUpQuestions: [
            "How is it applied?",
            "What are the advantages?",
            "What is the final thickness?",
            "Can it be applied on painted walls?",
            "How does IGK2 nanotechnology work?"
        ]
    },
    breathable: {
        response: "<span style='color: #007bff'>IGK2</span> is highly breathable, which means it allows air circulation and water evaporation, preventing condensation and mold.",
        followUpQuestions: [
            "What is IGK2?",
            "What are the advantages?",
            "How is it applied?",
            "Do you need a specialized installer?",
            "What is the final thickness?"
        ]
    }
};

// Function to get a response with follow-up questions
function getResponseWithFollowUp(category) {
    if (responses[category]) {
        const response = responses[category];
        if (typeof response === 'string') {
            return response;
        }
        
        lastQuestion = category;
        followUpState = 1;
        
        const followUpText = response.followUpQuestions ? 
            "\n\nWould you like to know more about:\n- " + response.followUpQuestions.join('\n- ') :
            "";
            
        return response.response + followUpText;
    }
    return getDefaultResponse();
}

// Function to handle follow-up questions
function handleFollowUp(category) {
    if (responses[category] && responses[category].followUpQuestions) {
        const nextQuestion = responses[category].followUpQuestions[followUpState - 1];
        followUpState = (followUpState + 1) % (responses[category].followUpQuestions.length + 1);
        if (followUpState === 0) followUpState = 1;
        return findBestResponse(nextQuestion);
    }
    return getDefaultResponse();
}

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
}

// Export required functions
window.findBestResponse = findBestResponse;
window.handleFollowUp = handleFollowUp;
window.handleResponse = handleResponse;
window.changeLanguage = changeLanguage;
