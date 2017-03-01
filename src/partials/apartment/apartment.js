//пробрасывание параметров квартиры в таблицу
if (document.getElementsByClassName('apartment__image').length) {

    //компонент таблицы
    Vue.component('ChooseTable', {
        delimiters: ['[[', ']]'],
        template: '#choose-table',
        props: [
            'num',
            'area',
            'balcony',
            'cost'
        ]
    });

    var Apartment = new Vue({
        delimiters: ['[[', ']]'],
        el: '.apartment',
        name: 'Apartment'
    });
}