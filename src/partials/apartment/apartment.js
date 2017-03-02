//пробрасывание параметров квартиры в таблицу
if (document.getElementsByClassName('apartment__image').length) {

    //компонент таблицы
    // Vue.component('ChooseTable', {
    //     delimiters: ['[[', ']]'],
    //     template: '#choose-table',
    //     props: [
    //         'num',
    //         'area',
    //         'balcony',
    //         'cost'
    //     ]
    // });

    var Apartment = new Vue({
        delimiters: ['[[', ']]'],
        el: '.apartment',
        name: 'Apartment',
        data: {
            num: '',
            area: '',
            balcony: '',
            cost: ''
        },
        methods: {
            //пробрасывание параметров квартиры в таблицу
            changeInfo: function (num, area, balcony, cost) {
                this.num = num;
                this.area = area;
                this.balcony = balcony;
                this.cost = cost.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
            }
        },
        mounted: function () {
            this.changeInfo('140', '41.1', '15.9', '5650800');
        }
    });

}