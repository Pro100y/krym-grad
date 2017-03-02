document.addEventListener('DOMContentLoaded', function () {

    /*
    |--------------------------------------------------------------------------
    | SEND FORM
    |--------------------------------------------------------------------------
    |
    | Валидация полей и отправка формы
    |
    */

    var templateName = '';
    var mailAddr = 'ljazzmail@gmail.com';

    $('[data-form-phone-field]').mask("+7 (999) 999-99-99");
    $('[data-form-time-field]').mask("99:99");

    $('[data-form-btn]').click(function () {
        var $b = $(this);
        var $f = $(this).parents('[data-form]');
        var $s = $f.find('[data-form-status]');
        var data = {};

        var action = $f.attr('action') || '/assets/forms/send-form.php';
        console.log(action);

        var bVal = $b.text();

        var status = [
            'Пожалуйста, укажите номер телефона',
            '',
            'При отправке сообщения возникли проблемы. Пожалуйста, отправьте письмо на ящик ' + mailAddr
        ]

        // тряска формы если не проходим валидацию при отправке
        $f.find('*[required]').each(function () {
            $(this).removeAttr('data-form-field-invalid')
            if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                $(this).attr('data-form-field-invalid', '')
                $f.find('[data-form-field-invalid]')
                    .addClass('shake animated');
                setTimeout(function () {
                    $f.find('[data-form-field-invalid]')
                        .removeClass('shake animated');
                }, 1000);
            }
        });

        if ($f.find('[data-form-field-invalid]').length) {
            $s.html(status[0]).slideDown(500);
            return false;
        }

        $f.find('input, textarea, select').each(function (i) {
            var name = $(this).attr('name');
            var label = $(this).attr('placeholder') || $(this).prev().html();
            label = $.trim(label.replace(/[:*]/g, ''));
            data[name] = {
                label: label,
                value: $(this).val()
            };
        });

        $.ajax({
            url: action,
            type: 'POST',
            data: {
                send: 'do',
                to: mailAddr,
                subj: $f.attr('title'),
                data: data
            },
            beforeSend: function () {
                $b.text('Отправка...');
            },
            success: function (response) {
                var r = parseInt(response);

                $b.text(bVal);
                $s.html(status[r]).slideDown(500);

                if (r == 1) {
                    $f.attr('data-form-success', '');
                    $f.find('input, textarea, select').val('');
                }
            },
            error: function (jqXHR, textStatus, ex) {
                alert(textStatus + "," + ex + "," + jqXHR.responseText);
            }
        });
        return false;
    });
});