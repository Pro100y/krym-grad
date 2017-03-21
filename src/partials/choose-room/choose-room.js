if (document.getElementsByClassName('choose-room').length) {

    var chooseRoom = new Vue({
        delimiters: ['[[', ']]'],
        el: '.choose-room',
        name: 'choose-room',
        data: {
            num: '',
            area: '',
            balcony: '',
            cost: '',
            code: '',
        },
        methods: {
            //пробрасывание параметров квартиры в таблицу
            changeInfo: function (num, area, balcony, cost, code) {
                this.num = num;
                this.area = area;
                this.balcony = balcony;
                this.cost = cost.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                this.code = code;
            }
        },
        created: function () {
            //Конфигурация плагина подсветки area
            document.addEventListener('DOMContentLoaded', function () {
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
                }).rwdImageMaps();
            });
        }
    });
}