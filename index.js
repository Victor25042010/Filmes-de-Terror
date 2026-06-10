const titulo = document.getElementById("easterEgg");
const videoSecreto = document.getElementById("videoSecreto");

let cliques = 0;

titulo.addEventListener("click", () => {
    cliques++;

    if (cliques === 5) {
        videoSecreto.style.display = "block";
        videoSecreto.play();

        cliques = 0;

        videoSecreto.onended = () => {
            videoSecreto.style.display = "none";
        };
    }
});

const youtubeURL = "https://www.youtube.com/watch?v=8KxkzngOGJY";

document.getElementById("faca").addEventListener("click", () => {

    const videoId = youtubeURL.includes("youtu.be/")
        ? youtubeURL.split("youtu.be/")[1].split("?")[0]
        : youtubeURL.split("v=")[1].split("&")[0];

    document.getElementById("youtubePlayer").src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    document.getElementById("videoModal").style.display = "flex";
});

document.getElementById("fecharVideo").addEventListener("click", () => {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("youtubePlayer").src = "";
});
