//Конфигурация плагина подсветки area
if (document.getElementsByClassName('choose-room__image') !== null) {
    var chooseRoomImage = new Vue({
        delimiters: ['[[', ']]'],
        el: '.choose-room__image',
        name: 'choose-room-image',
        created: function () {
            jQuery(document).ready(function ($) {
                $(".choose-room__image").maphilight({
                    fill: true,
                    fillColor: '0062cd',
                    fillOpacity: 0.54,
                    stroke: true,
                    strokeColor: '0062cd',
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
        }
    });
}

//пробрасывание параметров квартиры в таблицу
if (document.getElementsByClassName('choose-room__map') !== null) {
    var chooseRoomMap = new Vue({
        delimiters: ['[[', ']]'],
        el: '.choose-room__map',
        name: 'choose-room-map',
        methods: {
            changeInfo: function (num, area, balcony, cost) {
                chooseTableContent.num = num;
                chooseTableContent.area = area;
                chooseTableContent.balcony = balcony;
                chooseTableContent.cost = cost;
            }
        }
    });
}