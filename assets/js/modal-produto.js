// MODAL 2 - PRODUTOS

const modalProduto = document.querySelector("#modal-produto");
const fecharProduto = document.querySelector("#fechar-produto");

const imagemModal = document.querySelector("#imagem-modal");
const nomeModal = document.querySelector("#nome-modal");
const descricaoModal = document.querySelector("#descricao-modal");
const precoModal = document.querySelector("#preco-modal");
const tamanhosModal = document.querySelector("#tamanhos-modal");

// Todos os botões Ver mais dos produtos
const botoesProdutos = document.querySelectorAll(
    ".product-category button"
);

botoesProdutos.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const produto = botao.closest(".product-category");

        imagemModal.src = produto.querySelector("img").src;
        nomeModal.textContent = produto.querySelector("h2").textContent;
        descricaoModal.textContent = produto.querySelector("p").textContent;
        precoModal.textContent = produto.querySelector("strong").textContent;

        // Descobrir a categoria pelo título da página
        const categoria = document.querySelector(".category-page h1")
            .textContent.toLowerCase();

        let tamanhos;

        if (categoria.includes("calçados")) {
    tamanhos = ["34", "35", "36", "37", "38", "39", "40", "41", "42"];

} else if (categoria.includes("calças")) {
    tamanhos = ["36", "38", "40", "42", "44", "46"];

} else if (
    categoria.includes("camisetas") ||
    categoria.includes("jaquetas") ||
    categoria.includes("casacos")
) {
    tamanhos = ["PP", "P", "M", "G", "GG"];

} else {
    tamanhos = [];
}

// Esconde a seleção em bolsas e óculos
document.querySelector("#area-tamanhos").style.display =
    tamanhos.length === 0 ? "none" : "block";

        tamanhosModal.innerHTML = "";

        tamanhos.forEach(function(tamanho) {

            const botaoTamanho = document.createElement("button");

            botaoTamanho.textContent = tamanho;
            botaoTamanho.type = "button";

            botaoTamanho.addEventListener("click", function() {

                const selecionado = tamanhosModal.querySelector(".selecionado");

                if (selecionado) {
                    selecionado.classList.remove("selecionado");
                }

                botaoTamanho.classList.add("selecionado");

            });

            tamanhosModal.appendChild(botaoTamanho);

        });

        modalProduto.style.display = "flex";

    });

});

// Fechar modal
fecharProduto.addEventListener("click", function() {
    modalProduto.style.display = "none";
});