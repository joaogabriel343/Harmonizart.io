window.addEventListener("load", () => {
    const header = document.querySelector("header");
    header.style.transform = "translateX(100%)";
    header.style.transition = "transform 1s ease-in-out"; 

    setTimeout(() => {
        header.style.transform = "translateX(0)";
    }, 100);
});



document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");

    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "flex";
    }

    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});



/*CHATBOT */
const botMessages = {
    "olá": "Olá! Como posso te ajudar hoje?",
    "preço": "O preço das aulas varia dependendo do professor e da modalidade. Qual é a sua preferência?",
    "aulas": "Temos aulas de violão, guitarra e piano. Qual você gostaria de aprender?",
    "professores": "Temos professores qualificados para todas as idades. Gostaria de saber mais sobre eles?",
    "default": "Desculpe, não entendi. Pode reformular sua pergunta?"
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");

    const response = botMessages[userInput.toLowerCase()] || botMessages["default"];
    botMessage.textContent = response;

    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("user-input").value = "";
}

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const chatBox = document.getElementById("chat-box");

    if (chatContainer.style.right === "0px") {
        chatContainer.style.right = "-350px";
    } else {
        chatContainer.style.right = "0px";
    }
}
