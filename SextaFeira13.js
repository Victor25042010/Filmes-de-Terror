const estrelas = document.querySelectorAll(".estrela");
const resultado = document.getElementById("resultado");

estrelas.forEach((estrela) => {

    estrela.addEventListener("click", () => {

        const nota = estrela.dataset.nota;

        estrelas.forEach((e) => {

            e.classList.remove("ativa");

            if(e.dataset.nota <= nota){
                e.classList.add("ativa");
            }

        });

        resultado.textContent =
        `Você avaliou o filme com ${nota} estrela(s)!`;
    });

});
