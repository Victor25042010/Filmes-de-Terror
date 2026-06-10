function iniciarAnimacao(){

    const video = document.getElementById("animacao");

    video.style.display = "block";

    video.play();

    video.onended = () => {
        window.location.href = "https://seusite.com";
    };
}

const titulo = document.getElementById("easterEgg");
const videoSecreto = document.getElementById("videoSecreto");

let cliques = 0;

titulo.addEventListener("click", () => {

    cliques++;

    if(cliques === 5){

        videoSecreto.style.display = "block";
        videoSecreto.play();

        cliques = 0;

        videoSecreto.onended = () => {
            videoSecreto.style.display = "none";
        };
    }
});

function abrirPagina(pagina) {
    window.location.href = pagina;
}
