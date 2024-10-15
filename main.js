document.getElementById("paragrafo-1").innerHTML = "Me chamo Rodrigo Sampaio, tenho 29 anos, moro atualmente no estado do Rio de Janeiro, sou estudante de Analise e desenvolvimento de sistemas, estou cursando o 5º periodo na instituição Estácio."

document.getElementById("paragrafo-2").innerHTML = "Amo esportes, atualmente treino musculação e nos tempos vagos gosto de jogar um game on-line."




const mobilebtn = document.getElementById('mobile-btn');
const menu = document.getElementById('menu');


function toggleMenu() {
    menu.classList.toggle('active');
}


mobilebtn.addEventListener('click', toggleMenu);