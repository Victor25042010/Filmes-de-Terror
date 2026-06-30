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

(function(){
  const imagens = [
    "imgs/bonnie img.webp",
    "imgs/chica img.png",
    "imgs/freddy img.webp",
    "imgs/foxy img.png",
  ];

  const stage   = document.getElementById('fnaf');
  const photo   = document.getElementById('fotofnaf');
  const counter = document.getElementById('counter');

  const SIZE = 180;
  const TEMPO_MOVIMENTO = 2500; 
  let cliques = 0;
  let imgIndex = 0;
  let intervaloMovimento = null;

  photo.style.transition = `left ${TEMPO_MOVIMENTO * 0.8}ms ease, top ${TEMPO_MOVIMENTO * 0.8}ms ease`;

  function posicaoAleatoria(){
    const maxX = window.innerWidth  - SIZE - 20;
    const maxY = window.innerHeight - SIZE - 20;
    return {
      x: Math.max(20, Math.random() * maxX),
      y: Math.max(20, Math.random() * maxY)
    };
  }

  function proximaImagem(){
    let novo;
    do { novo = Math.floor(Math.random() * imagens.length); }
    while (novo === imgIndex && imagens.length > 1);
    imgIndex = novo;
    return imagens[imgIndex];
  }

  function moverParaPosicaoAleatoria(){
    const novaPos = posicaoAleatoria();
    photo.style.left = novaPos.x + 'px';
    photo.style.top  = novaPos.y + 'px';
  }

  function passoAutomatico(){
    moverParaPosicaoAleatoria();
  }

  function iniciarMovimentoAutomatico(){
    if (intervaloMovimento) clearInterval(intervaloMovimento);
    intervaloMovimento = setInterval(passoAutomatico, TEMPO_MOVIMENTO);
  }

  function moverFoto(){
    moverParaPosicaoAleatoria();
    photo.src = proximaImagem();

    cliques++;
    if (counter) counter.textContent = 'cliques: ' + cliques;

    iniciarMovimentoAutomatico();
  }

  function iniciar(){
    const pos = posicaoAleatoria();
    photo.style.left = pos.x + 'px';
    photo.style.top  = pos.y + 'px';
    photo.src = imagens[imgIndex];
    iniciarMovimentoAutomatico();
  }

  photo.addEventListener('click', moverFoto);
  window.addEventListener('resize', () => {
    const x = Math.min(parseFloat(photo.style.left)||0, window.innerWidth - SIZE - 20);
    const y = Math.min(parseFloat(photo.style.top)||0,  window.innerHeight - SIZE - 20);
    photo.style.left = Math.max(20,x) + 'px';
    photo.style.top  = Math.max(20,y) + 'px';
  });

  iniciar();
})();