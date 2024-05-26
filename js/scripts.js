const users = [
    { username: "user1", password: "password1", displayName: "المستخدم الأول", profilePicture: 'img/default_profile.png' },
    { username: "user2", password: "password2", displayName: "المستخدم الثاني", profilePicture: 'img/default_profile.png' },
    { username: "user3", password: "password3", displayName: "المستخدم الثالث", profilePicture: 'img/default_profile.png' },
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('chat-page').classList.remove('hidden');
        document.getElementById('error-message').textContent = '';
    } else {
        document.getElementById('error-message').textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    }
}

function logout() {
    currentUser = null;
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('chat-page').classList.add('hidden');
    document.getElementById('message-input').value = '';
    document.getElementById('chat-box').innerHTML = '';
}

function openSettings() {
    document.getElementById('settings-page').classList.remove('hidden');
    document.getElementById('chat-page').classList.add('hidden');
    document.getElementById('new-username').value = currentUser.username;
    document.getElementById('new-password').value = currentUser.password;
}

function closeSettings() {
    document.getElementById('settings-page').classList.add('hidden');
    document.getElementById('chat-page').classList.remove('hidden');
}

function saveSettings() {
    currentUser.username = document.getElementById('new-username').value;
    currentUser.password = document.getElementById('new-password').value;
    const fileInput = document.getElementById('profile-picture');
    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            currentUser.profilePicture = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    closeSettings();
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'message';

        const profileImg = document.createElement('img');
        profileImg.src = currentUser.profilePicture || 'img/default_profile.png';
        messageElement.appendChild(profileImg);

        const messageText = document.createElement('div');
        messageText.textContent = `${currentUser.displayName}: ${message}`;
        messageElement.appendChild(messageText);

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = '';
    }
}

// scripts.js

import { loadModel, classifyImage } from './imageClassification.js';

// Example usage
async function runExample() {
    const model = await loadModel();
    const imageElement = document.getElementById('image');
    const predictions = await classifyImage(imageElement, model);
    console.log(predictions);
}

// Run example
runExample();

