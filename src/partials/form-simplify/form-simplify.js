document.addEventListener('DOMContentLoaded', function () {

    function formSimplify() {

        var parentsWrapper = $('.header__contacts-col:first-child');
        var parentsPhone = $('.header__contacts-phone');
        var parentsAddress = $('.header__contacts-address');

        var label = $('.form-simplify__label');
        var contentWrap = $('.form-simplify__content-wrap');
        var questionBtn = $('.form-simplify__question');
        var field = $('.form-simplify__field');
        var sendBtn = $('.form-simplify__send');
        var formHeight = 36;

        // нажатие на мотивирующую кнопку
        questionBtn
            .click(function () {
                contentWrap
                    .css({
                        transform: 'translateY(-' + formHeight + 'px)'
                    });
                label
                    .removeClass('form-simplify__label--hidden');
                parentsWrapper
                    .addClass('header__contacts-col--animate');
                parentsPhone
                    .addClass('header__contacts-phone--hidden');
                parentsAddress
                    .addClass('header__contacts-address--hidden');
            });

        // валидация
        field
            .keyup(function (event) {
                if (event.which == 13) {
                    sendBtn
                        .trigger('click');
                };
            });
        sendBtn
            .click(function () {
                if (!$('.form-simplify [data-form-field-invalid]').length) {
                    contentWrap
                        .css({
                            transform: 'translateY(-' + formHeight * 2 + 'px)'
                        });

                    label
                        .addClass('form-simplify__label--hidden');

                    setTimeout(function () {

                        field
                            .val('');

                        contentWrap
                            .css({
                                transform: 'translateY(0)'
                            });

                        parentsWrapper
                            .removeClass('header__contacts-col--animate');
                        parentsPhone
                            .removeClass('header__contacts-phone--hidden');
                        parentsAddress
                            .removeClass('header__contacts-address--hidden');

                    }, 5000);
                }
            });

    }
    formSimplify();

});