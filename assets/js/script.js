

const swiper = new Swiper('.swiper', {
    loop: true,

    autoplay: {
        delay: 3000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
            clickable: true,
    },
});

// Modal 1 -NEWSLETTER

const botaoEnviar = document.querySelector("#btn-enviar");

const modalEmail = document.querySelector("#modal-email");

const botaoFechar = document.querySelector("#fechar-modal");

const campoEmail = document.querySelector("#email");

// Abrir o modal
botaoEnviar.addEventListener("click", function () {
    if(campoEmail.value.trim() !== "" && campoEmail.checkValidity()) {
        modalEmail.style.display = "flex";
        campoEmail.value = "";
    } else {
        campoEmail.reportValidity();
    }
});

//Fechar o modal
botaoFechar.addEventListener("click", function () {

    modalEmail.style.display = "none";
});