document.addEventListener('DOMContentLoaded', function () {

   /*
    |--------------------------------------------------------------------------
    | Fotorama
    |--------------------------------------------------------------------------
    |
    | Конфиг плагина фотогалареи
    |
    */

    var commercialObjectGallery= $('.commercial-object-gallery').fotorama({
        nav: 'thumbs',
        thumbwidth: 136,
        thumbheight: 80,
        width: '100%',
        // height: '530px',
        margin: 10,
        thumbmargin: 10,
        navposition: 'bottom',
        fit: 'cover',
        transitionduration: 1000,
        loop: false,
        thumbborderwidth: 5,
        allowfullscreen: false,
        shadows: false,
        arrows: "always",
        ratio: 940/530
    });

});