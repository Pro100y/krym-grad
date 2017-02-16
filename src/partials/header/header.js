jQuery(document).ready(function ($) {

    $('.header__menu-button').click(function () {
        $('.header__menu-button').toggleClass('header__menu-button--active');
        $('.main-menu__lists-wrap').toggleClass('main-menu__lists-wrap--active');
    });

});