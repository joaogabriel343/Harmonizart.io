/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})




/* CHATBOT */
const botMessages = {
    "olá": "Olá! Eu sou Apollo, como posso te ajudar hoje?",
    "Oi":"Oi, tudo bem? Como irei te ajudar Hoje?",
    "oii":"Oii, qual sua duvida?",
    "salve":"Salve, Salve, qual sua duvida meu parceiro?",
    "eae":"Eae, tudo bom? Qual sua duvidade Hoje?",
    "preço": "As aulas custam R$ 200,00. E aí, barato ou caro? 😉",
    "valor": "O valor das aulas é R$ 200,00. Está dentro do que você esperava?",
    "valores": "O valor para as aulas é R$ 200,00. Qualquer dúvida, só perguntar!",
    "quanto custa": "Cada aula sai por R$ 200,00, mas você pode parcelar no cartão.",
    "aulas": "Temos aulas de violão, guitarra e piano. Qual instrumento você curte mais?",
    "instrumento": "As opções são violão, guitarra e piano. Qual é o seu favorito?",
    "professores": "Nossos professores são Luiz e Laura. Eles são incríveis, quer saber mais sobre eles?",
    "professor": "O professor Luiz é fera em guitarra e violão, e a professora Laura manda muito no piano!",
    "localização": "As aulas acontecem na Rua João Paulino Damasceno, 543, Alfenas - MG. Fácil de achar, viu?",
    "onde fica": "Fica em Alfenas - MG, Rua João Paulino Damasceno, 543. Qualquer coisa, é só me chamar!",
    "tempo de aula": "Cada aula tem duração de 50 minutos, tempo suficiente para aprender bastante!",
    "duração": "As aulas duram 50 minutinhos. Dá pra aprender muito nesse tempo!",
    "horário": "O horário das aulas é flexível, podemos combinar um horário que fique bom para você.",
    "violao":"Os valores são de 200 reais, entre em contato no simbolo do whatsapp ao lado esquerdo!",
    "guitarre":"Os valores são de 200 reais, entre em contato no simbolo do whatsapp ao lado esquerdo!",
    "piano":"Os valores são de 200 reais, entre em contato no simbolo do whatsapp ao lado esquerdo!",
    "contato":"Basta clicar na parte do contato, que você será redirecionado para o whatsapp dos nosso professores!!",
    "numero":"Basta clicar na parte do contato, que você será redirecionado para o whatsapp dos nosso professores!!",
    "whatsapp":"Basta clicar na parte do contato, que você será redirecionado para o whatsapp dos nosso professores!!",
    "whatssap":"Basta clicar na parte do contato, que você será redirecionado para o whatsapp dos nosso professores!!",
    "default": "Posso te ajudar com informações sobre aulas, professores, preço e localização. O que você quer saber?"
};

const maxResponses = 50;
let responseCount = 0;

function sendMessage() {
    if (responseCount >= maxResponses) {
        alert("O chat atingiu o limite de interações. Tente novamente mais tarde.");
        return;
    }

    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const chatBox = document.getElementById("chat-box");

    if (userInput === "") return;

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");

    if (userInput.includes("música") || userInput.includes("instrumento") || userInput.includes("violão") || userInput.includes("guitarra") || userInput.includes("piano")) {
        botMessage.textContent = "Podemos te ajudar com aulas de violão, guitarra e piano! Que instrumento você quer aprender?";
    } else if (userInput.includes("professor") || userInput.includes("professores") || userInput.includes("luiz") || userInput.includes("laura")) {
        botMessage.textContent = "Nossos professores são Luiz e Laura. Eles são ótimos no que fazem! Quer saber mais sobre eles?";
    } else if (userInput.includes("preço") || userInput.includes("valor") || userInput.includes("custar") || userInput.includes("quanto custa")) {
        botMessage.textContent = "As aulas custam R$ 200,00. E aí, tá bom para você? 😎";
    } else if (userInput.includes("onde") || userInput.includes("fica") || userInput.includes("localização")) {
        botMessage.textContent = "As aulas acontecem na Rua João Paulino Damasceno, 543, Alfenas - MG. Vem que é fácil de achar!";
    } else if (userInput.includes("tempo") || userInput.includes("duração") || userInput.includes("aula")) {
        botMessage.textContent = "Cada aula tem duração de 50 minutos. Dá tempo de aprender bastante, né?";
    } else {
        botMessage.textContent = botMessages[userInput] || botMessages["default"];
    }

    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("user-input").value = "";

    responseCount++;
}

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const chatIcon = document.querySelector(".chat-icon");

    if (chatContainer.style.right === "20px") {
        chatContainer.style.right = "-350px";
        chatIcon.style.display = "flex";
    } else {
        chatContainer.style.right = "20px";
        chatIcon.style.display = "none";
    }
}


/*COOKIES*/
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

