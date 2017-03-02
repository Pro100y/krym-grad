document.addEventListener('DOMContentLoaded', function () {

    /*
    |--------------------------------------------------------------------------
    | nstSlider
    |--------------------------------------------------------------------------
    |
    | Плагин слейдера
    |
    */

    //конфигурация плагина
    $('.filter-range__item-slider').nstSlider({
        "left_grip_selector": ".filter-range__item-slider-grip--left",
        "right_grip_selector": ".filter-range__item-slider-grip--right",
        "value_bar_selector": ".filter-range__item-slider-bar",
        "value_changed_callback": function (cause, leftValue, rightValue) {
            $(this).parent()
                .find('.filter-range__item-label--left')
                .text(leftValue.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $(this).parent()
                .find('.filter-range__item-label--right')
                .text(rightValue.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        }
    });

    //обновляем компонент при ресайзе
    $(window).on('resize', function () {
        $('.filter-range__item-slider').each(function () {
            $(this).nstSlider('refresh');
        });
    });

});