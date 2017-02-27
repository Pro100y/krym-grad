jQuery(document).ready(function ($) {

    //Конфигурация плагина подсветки area
    jQuery(".choose-house__image").maphilight({
        fill: true,
        fillColor: 'ffffff',
        fillOpacity: 0.54,
        stroke: true,
        strokeColor: 'ffffff',
        strokeOpacity: 0.54,
        strokeWidth: 1,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: false,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: '000000',
        shadowOpacity: 0.8,
        shadowPosition: 'outside',
        shadowFrom: false
    });

});