document.addEventListener('DOMContentLoaded', function () {

   var sertificatesSlideshow = new Swiper('.sertificates__slideshow', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 3,
        speed: 500,
        freeMode: true,
        freeModeSticky: true,
        breakpoints: {
            980: {
                spaceBetween: 10,
            }
        }
    });

});