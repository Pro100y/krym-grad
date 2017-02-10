jQuery(document).ready(function ($) {

    /*
    |--------------------------------------------------------------------------
    | TABTAB
    |--------------------------------------------------------------------------
    |
    | Конфиг плагина табуляции
    |
    */

    $('.reviews').tabtab({
        tabMenu: '.reviews__nav', // direct container of the tab menu items
        tabContent: '.reviews__tabs-wrap', // direct container of the tab content items
        // next: '.tabs-controls__next',       // next slide trigger
        // prev: '.tabs-controls__prev',       // previous slide trigger

        startSlide: 1, // starting slide on pageload
        arrows: true, // keyboard arrow navigation
        dynamicHeight: true, // if true the height will dynamic and animated.
        useAnimations: true, // disables animations.

        easing: 'ease', // http://julian.com/research/velocity/#easing
        speed: 1000, // animation speed
        slideDelay: 0, // delay the animation
        perspective: 1200, // set 3D perspective
        transformOrigin: 'center top', // set the center point of the 3d animation
        perspectiveOrigin: '50% 50%', // camera angle

        translateY: 0, // animate along the Y axis (val: px or ‘slide’)
        translateX: 16, // animate along the X axis (val: px or ‘slide’)
        scale: 1, // animate scale (val: 0-2)
        rotateX: 0, // animate rotation (val: 0deg-360deg)
        rotateY: 0, // animate Y acces rotation (val: 0deg-360deg)
        skewY: 0, // animate Y skew (val: 0deg-360deg)
        skewX: 0, // animate X skew (val: 0deg-360deg)
    });

});