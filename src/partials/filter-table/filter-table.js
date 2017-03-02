document.addEventListener('DOMContentLoaded', function () {

    var item = $('.filter-table [data-href]');
    var link = item.attr('data-href');

    item.on('click', function () {
        location.pathname = link;
    });

});