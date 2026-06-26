const videoFaca = document.getElementById("youtubePlayer");
const videoModal = document.getElementById("videoModal");

function abrirJumpscare() {
    videoFaca.pause();
    videoFaca.removeAttribute("src");
    videoFaca.load();

    videoModal.style.display = "flex";

    videoFaca.src = "Videos/jumpscare.mp4";
    videoFaca.controls = false;

    const aoCarregar = () => {
        videoFaca.currentTime = 12;
        videoFaca.play().catch((erro) => {
            console.log("Não foi possível iniciar o vídeo:", erro);
        });
    };

    const aoAtualizarTempo = () => {
        if (videoFaca.currentTime >= 14) {
            videoFaca.pause();
            videoModal.style.display = "none";
            videoFaca.removeEventListener("timeupdate", aoAtualizarTempo);
        }
    };

    videoFaca.addEventListener("loadedmetadata", aoCarregar, { once: true });
    videoFaca.addEventListener("timeupdate", aoAtualizarTempo);
}

document.getElementById("faca").addEventListener("click", abrirJumpscare);

document.getElementById("fecharVideo").addEventListener("click", () => {
    videoModal.style.display = "none";
    videoFaca.pause();
    videoFaca.removeAttribute("src");
    videoFaca.load();
});