if (document.getElementsByClassName('choose-floor').length) {

    var chooseFloor = new Vue({
        delimiters: ['[[', ']]'],
        el: '.choose-floor',
        name: 'choose-floor',
        data: {},
        created: function () {

            document.addEventListener('DOMContentLoaded', function () {

                // Конфигурация плагина подсветки area
                $(".choose-floor__image").maphilight({
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
                }).rwdImageMaps();


                // Конфигурация плагина тултипов
                $('area').each(function () {

                    var floor = $(this).attr('data-floor');
                    var rooms = $(this).attr('data-rooms');

                    $(this).qtip({
                        style: {
                            classes: 'choose-floor__tooltip-wrap'
                        },
                        content: {
                            text: '<div class="choose-floor__tooltip"> <figure class="choose-floor__label choose-floor__label--floor"> <span class="choose-floor__label-title">этаж</span> <span class="choose-floor__label-accent">' + floor + '</span> </figure> <figure class="choose-floor__label choose-floor__label--rooms"> <span class="choose-floor__label-title">' + rooms + ' квартиры <br>в продаже</span> </figure> </div>'
                        },
                        position: {
                            my: 'left center',
                            at: 'right center'
                        }
                    });
                });


            });
        }
    });
}