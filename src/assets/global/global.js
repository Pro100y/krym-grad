//jQuery noconflict
// $.noConflict();

document.addEventListener('DOMContentLoaded', function () {


    /*
    |--------------------------------------------------------------------------
    | toggleAttr() jQuery plugin
    |--------------------------------------------------------------------------
    |
    | Добавление метода toggleAttr()
    |
    */

    $.fn.toggleAttr = function (attr, value) {
        return this.each(function () {
            var $this = $(this);
            $this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, value);
        });
    };

    /*
    |--------------------------------------------------------------------------
    | BOWSER
    |--------------------------------------------------------------------------
    |
    | Определение браузера пользователя
    |
    */

    $('html').attr('data-browser', bowser.name.toLowerCase().replace(/\s/g, '-'));
    $('html').attr('data-browser-version', Math.floor(bowser.version));

    /*
    |--------------------------------------------------------------------------
    | LIGHTCASE
    |--------------------------------------------------------------------------
    |
    | Подключение лайтбокса для галерей
    |
    */

    $('[data-rel^=lightcase]').lightcase({
        liveResize: true,
        fullScreenModeForMobile: true,
        showSequenceInfo: false,
        maxWidth: 1200,
        maxHeight: 1000,
        overlayOpacity: 1
    });

    /*
    |--------------------------------------------------------------------------
    | WOW
    |--------------------------------------------------------------------------
    |
    | Плагин анимации
    |
    */

    //new WOW().init();

    /*
    |--------------------------------------------------------------------------
    | PAGE-SCROLL-TO-ID
    |--------------------------------------------------------------------------
    |
    | Скролл страницы до анкора
    |
    */

    $("a[href*='#'], button[href*='#']").mPageScroll2id({
        offset: 0,
        scrollSpeed: 1000,
        scrollEasing: 'easeInOutCubic'
    });

    /*
    |--------------------------------------------------------------------------
    | ANIMSITION
    |--------------------------------------------------------------------------
    |
    | Прелоадер страницы
    |
    */

    // $("[data-page-preloader]").animsition({
    //     inClass: 'fade-in',
    //     outClass: 'fade-out',
    //     inDuration: 300,
    //     outDuration: 300,
    //     linkElement: 'a:not([data-remodal-target]):not([target="_blank"]):not([href*="#"]):not([href*=":"]):not([href*="."])',
    //     loading: true,
    //     loadingParentElement: 'html', //animsition wrapper element
    //     loadingClass: 'animsition-loading',
    //     loadingInner: '', // e.g '<img src="loading.svg" />'
    //     timeout: true,
    //     timeoutCountdown: 1000,
    //     onLoadEvent: true,
    //     browser: ['animation-duration', '-webkit-animation-duration'],
    //     // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //     // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    //     overlay: false,
    //     overlayClass: 'animsition-overlay-slide',
    //     overlayParentElement: 'html',
    //     transition: function (url) {
    //         window.location.href = url;
    //     }
    // });

    /*
    |--------------------------------------------------------------------------
    | STICKY SIDEBAR
    |--------------------------------------------------------------------------
    |
    | Плавающий сайдбар
    |
    */
    if ($('[data-sticky]').length) {
        stickySidebar = function () {
            $('[data-sticky]').theiaStickySidebar({
                additionalMarginTop: 32
            });
        };
        if ($(document).width() >= 1120) {
            setTimeout(stickySidebar, 0);
        };
        setTimeout(stickySidebar, 0);
        $(window).resize(function () {
            setTimeout(stickySidebar, 0);
        });
    }


    /*
    |--------------------------------------------------------------------------
    | TIPSO
    |--------------------------------------------------------------------------
    |
    | Кастомные тултипы
    |
    */

    $('[data-tooltip-text]').each(function () {
        $(this).tipso({
            speed: 400,
            background: '#ededed',
            titleBackground: '#0f69a8',
            color: '#33373d',
            titleColor: '#F0F0F0',
            titleContent: $(this).attr('data-tooltip-title'),
            showArrow: true,
            position: 'top',
            width: 'auto',
            maxWidth: '',
            delay: 500,
            hideDelay: 0,
            animationIn: 'fadeIn',
            animationOut: 'fadeOut',
            offsetX: 0,
            offsetY: 0,
            tooltipHover: false,
            content: $(this).attr('data-tooltip-text'),
            ajaxContentUrl: null,
            contentElementId: null,
            useTitle: true,
            templateEngineFunc: null,
            onBeforeShow: null,
            onShow: null,
            onHide: null,
            size: 'medium'
        });
    });

    /*
    |--------------------------------------------------------------------------
    | RIPPLE
    |--------------------------------------------------------------------------
    |
    | Эффект material design при нажатии на кнопки
    |
    */

    //$('[data-ripple]').ripple();

    /*
    |--------------------------------------------------------------------------
    | Infinite-AJAX-Scroll
    |--------------------------------------------------------------------------
    |
    | Ajax подгрузка материалов
    |
    */

    // var ias = jQuery.ias({
    //     container: '.layout-wrap',
    //     item: '.items-row',
    //     pagination: '.pagination',
    //     next: '.pagination-next a'
    // });
    // ias.extension(new IASSpinnerExtension({
    //     src: ''
    // }));
    // ias.extension(new IASTriggerExtension({
    // 	offset: 2,
    // 	text: 'Load more items'
    // }));
    // ias.extension(new IASNoneLeftExtension({
    // 	text: "You reached the end"
    // }));

    /*
    |--------------------------------------------------------------------------
    | IE FIX
    |--------------------------------------------------------------------------
    |
    | Фикс css свойства 'object-fit' для IE и Edge браузеров
    |
    */

    if ($('html[data-browser=internet-explorer]').length || $('html[data-browser=microsoft-edge]').length) {
        $('img[data-fix--ie--object-fit]').each(function () {
            $(this).css({
                    'backgroundImage': 'url(' + $(this).attr('src') + ')',
                    'backgroundPosition': 'center center',
                    'backgroundRepeat': 'no-repeat',
                    'backgroundSize': 'cover',
                    'display': 'block'
                })
                .removeAttr('src');
            console.log($(this).css('objectPosition'));
            console.log($(this).css('objectFit'));
        });
    };

    /*
    |--------------------------------------------------------------------------
    | SELECTRIC
    |--------------------------------------------------------------------------
    |
    | Кастомизация селектов
    |
    */

    $('select').selectric();

    /*
    |--------------------------------------------------------------------------
    | NICEFILEINPUT
    |--------------------------------------------------------------------------
    |
    | Кастомизация input[type=file]
    |
    */

    $('input[type=file]').nicefileinput({
        label : 'Обзор'
    });

    /*
    |--------------------------------------------------------------------------
    | NOSELECT
    |--------------------------------------------------------------------------
    |
    | Защита страницы от копирования
    |
    */

    // document.ondragstart = noselect;
    // document.onselectstart = noselect;
    // document.oncontextmenu = noselect;
    // function noselect() {
    // 	return false;
    // };

});