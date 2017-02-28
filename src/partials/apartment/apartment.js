//пробрасывание параметров квартиры в таблицу
if (document.getElementsByClassName('apartment__image').length != 0) {
    var apartmentImage = new Vue({
        delimiters: ['[[', ']]'],
        el: '.apartment__image',
        name: 'apartment-image',
        methods: {
            changeInfo: function () {
                chooseTableContent.num = 131;
                chooseTableContent.area = 41.1;
                chooseTableContent.balcony = 15.9;
                chooseTableContent.cost = 1500000;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    apartmentImage.changeInfo();
});