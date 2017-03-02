document.addEventListener('DOMContentLoaded', function () {

    /**
     * Мобильное меню
     * @param {string} button Селектор кнопки
     * @param {string} activeButtonClass Класс активной кнопки
     * @param {string} wrapper Враппер меню
     * @param {number} time Продолжительность анимации
     * @param {number} breakpoint Мобильное разрешение в пикселях
     */
    function toggleMobileMenu(button, activeButtonClass, wrapper, time, breakpoint) {
        $(button).on('click', function () {
            $(this).toggleClass(activeButtonClass);
            $(wrapper).slideToggle(time);
        });
        $(window).on('resize', function () {
            $(button).removeClass(activeButtonClass);
            if ($(window).width() >= breakpoint) {
                $(wrapper).slideDown(0);
                console.info('Меню ' + wrapper + ' раскрыто при ресайзе окна');
            } else {
                $(wrapper).slideUp(0);
                console.info('Меню ' + wrapper + ' скрыто при ресайзе окна');
            }
        });
    }

    toggleMobileMenu(
        '.object-menu__mobile-button',
        'object-menu__mobile-button--active',
        '.object-menu__mobile-content',
        1000,
        980
    );



});