if (document.getElementsByClassName('choose-table__content').length != 0) {
    var chooseTableContent = new Vue({
        delimiters: ['[[', ']]'],
        el: '.choose-table__content',
        name: 'choose-table-content',
        data: {
            num: '',
            area: '',
            balcony: '',
            cost: '',
        },
        mounted: function () {}
    });
}