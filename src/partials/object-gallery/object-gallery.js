document.addEventListener('DOMContentLoaded', function () {

    /*
    |--------------------------------------------------------------------------
    | Fotorama
    |--------------------------------------------------------------------------
    |
    | Конфиг плагина фотогалареи
    |
    */

    var $fotoramaDiv = $('.object-gallery__slideshow').fotorama({
        nav: 'thumbs',
        thumbwidth: 136,
        thumbheight: 80,
        width: '100%',
        height: '530px',
        margin: 20,
        thumbmargin: 20,
        navposition: 'top',
        fit: 'cover',
        transitionduration: 1000,
        loop: false,
        thumbborderwidth: 5,
        allowfullscreen: false,
        shadows: false,
        arrows: "always"
    });

    /*
    |--------------------------------------------------------------------------
    | TABTAB
    |--------------------------------------------------------------------------
    |
    | Конфиг плагина табуляции
    |
    */

    $('.object-gallery__inner').tabtab({
        tabMenu: '.object-gallery__inner-nav', // direct container of the tab menu items
        tabContent: '.object-gallery__inner-tabs-wrap', // direct container of the tab content items
        // next: '.tabs-controls__next',       // next slide trigger
        // prev: '.tabs-controls__prev',       // previous slide trigger

        startSlide: 1, // starting slide on pageload
        arrows: true, // keyboard arrow navigation
        dynamicHeight: false, // if true the height will dynamic and animated.
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

    $('.object-gallery').tabtab({
        tabMenu: '.object-gallery__nav', // direct container of the tab menu items
        tabContent: '.object-gallery__tabs-wrap', // direct container of the tab content items
        // next: '.tabs-controls__next',       // next slide trigger
        // prev: '.tabs-controls__prev',       // previous slide trigger

        startSlide: 1, // starting slide on pageload
        arrows: true, // keyboard arrow navigation
        dynamicHeight: false, // if true the height will dynamic and animated.
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