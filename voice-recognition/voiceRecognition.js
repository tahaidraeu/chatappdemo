let recognition;

function startVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript;
        processRecognizedSpeech(speechResult);
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
    };

    recognition.onend = function() {
        console.log("Voice recognition ended");
    };

    recognition.start();
}

function stopVoiceRecognition() {
    recognition.stop();
}

function processRecognizedSpeech(speech) {
    console.log("Recognized speech:", speech);
    // Add code here to process recognized speech
}

export { startVoiceRecognition, stopVoiceRecognition, processRecognizedSpeech };
