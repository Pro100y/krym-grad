document.addEventListener('DOMContentLoaded', function () {

   var partnersCarousel = new Swiper('.partners-carousel__wrapper', {
        slidesPerView: 4,
        spaceBetween: 0,
        nextButton: '.partners-carousel__button--next',
        prevButton: '.partners-carousel__button--prev',
        pagination: '.partners-carousel__pagination',
        paginationClickable: true,
        freeMode: true,
        freeModeSticky: true,
        speed: 1000,
        loop: true,
        autoplay: 3000,
        breakpoints: {
            980: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

});