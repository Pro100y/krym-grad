document.addEventListener('DOMContentLoaded', function () {

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
    normalizeHeight('.footer-menu__link--title');
    $(window).resize(function () {
        normalizeHeight('.footer-menu__link--title');
    });


});