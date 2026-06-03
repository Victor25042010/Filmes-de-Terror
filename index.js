const aparecerDepois = 10000; // 10s
const tempoNaTela = 5000; // 5s

const video = document.getElementById("jumpscare");

video.style.display = "none";

setTimeout(() => {
    video.style.display = "block";
    video.play();

    setTimeout(() => {
        video.style.display = "none";
        video.pause();
    }, tempoNaTela);

}, aparecerDepois);

function iniciarAnimacao(){

    const video = document.getElementById("animacao");

    video.style.display = "block";

    video.play();

    video.onended = () => {

        window.location.href = "https://seusite.com";

    };

}
