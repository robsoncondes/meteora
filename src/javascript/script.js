var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    
    hashNavigation: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

        breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },


}


    });

const button = document.querySelector(".newsletter-button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector(".close-modal")


button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}