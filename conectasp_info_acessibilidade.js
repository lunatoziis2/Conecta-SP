const categorias = document.querySelectorAll(".recurso");

categorias.forEach(function(categoria) {

    const itens = categoria.querySelectorAll("li");
    const botao = categoria.querySelector(".ver-mais");

    for (let i = 2; i < itens.length; i++) {
        itens[i].style.display = "none";
    }

    botao.addEventListener("click", function() {

        if (botao.textContent === "Ver mais recursos") {

            for (let i = 2; i < itens.length; i++) {
                itens[i].style.display = "list-item";
            }

            botao.textContent = "Ver menos recursos";

        } else {

            for (let i = 2; i < itens.length; i++) {
                itens[i].style.display = "none";
            }

            botao.textContent = "Ver mais recursos";
        }
    });
});