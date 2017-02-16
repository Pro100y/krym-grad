jQuery(document).ready(function ($) {

    /*
    |--------------------------------------------------------------------------
    | SWIPER
    |--------------------------------------------------------------------------
    |
    | Конфигурация слайдера
    |
    */
    var newsCarouselConfig = {
        paginationClickable: true,
        nextButton: '.news-carousel__nav-btn--next',
        prevButton: '.news-carousel__nav-btn--prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 20,
        freeMode: true,
        freeModeSticky: true,
        speed: 1000,
        loop: false,
        autoplay: 3000,
        autoHeight: false,
        observer: true,
        breakpoints: {
            1640: {
                slidesPerView: 2
            },
            980: {
                slidesPerView: 1,
                autoplay: false
            }
        }
    }

    var newsCarousel = new Swiper('.news-carousel', newsCarouselConfig);

    /**
     * Выравнивание высот
     *
     * @param {string} node Элемент у которого нужно выровнять высоту
     */
    function normalizeHeight(node) {

        var maxColHeight = 0;

        $(node).height('auto');

        $(node).each(function () {
            if ($(this).height() > maxColHeight) {
                maxColHeight = $(this).height();
            }
        });

        $(node).height(maxColHeight);
    }

    normalizeHeight('.news-carousel__item-title');
    $(window).resize(function () {
        normalizeHeight('.news-carousel__item-title');
    });

});