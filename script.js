const botao = document.querySelector("#botao");

const mensagem = document.querySelector(".mensagem");


/*
    Função responsável por
    alterar a mensagem da página.
*/

function mostrarMensagem() {

    mensagem.style.opacity = "0";

    setTimeout(function () {

        mensagem.textContent =
            "Acredite em você! ✨ Você é capaz de aprender, crescer e conquistar seus sonhos. Nunca desista! 💗🌸";

        mensagem.style.opacity = "1";

    }, 300);

}


/*
    Quando o usuário clicar
    no botão, a função será executada.
*/

botao.addEventListener("click", mostrarMensagem);
