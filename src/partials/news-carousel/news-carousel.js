jQuery(document).ready(function ($) {

   var newsCarousel = new Swiper('.news-carousel', {

        paginationClickable: true,
        nextButton: '.news-carousel__nav-btn--next',
        prevButton: '.news-carousel__nav-btn--prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 14,
        freeMode: true,
        speed: 1000,
        loop: false

   });

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
    normalizeHeight('.news-carousel__item');
    $(window).resize(function () {
        normalizeHeight('.news-carousel__item-title');
        normalizeHeight('.news-carousel__item');
    });

});