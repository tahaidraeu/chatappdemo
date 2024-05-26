let chatHistory = [];

function addMessageToHistory(message) {
    chatHistory.push(message);
}

function clearChatHistory() {
    chatHistory = [];
}

function displayChatHistory() {
    console.log("Chat History:");
    chatHistory.forEach((message, index) => {
        console.log(`${index + 1}. ${message}`);
    });
}
