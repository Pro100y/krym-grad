document.addEventListener('DOMContentLoaded', function () {

   var partnersCarousel = new Swiper('.partners-carousel__wrapper', {
        slidesPerView: 4,
        spaceBetween: 0,
        nextButton: '.partners-carousel__button--next',
        prevButton: '.partners-carousel__button--prev',
        freeMode: true,
        freeModeSticky: true,
        speed: 1000,
        loop: true,
        autoplay: 3000,
    });

});