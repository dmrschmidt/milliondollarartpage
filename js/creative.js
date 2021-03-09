(function ($) {
    "use strict";

    function validateEmail(id) {
        const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if (!email_regex.test($(`#${id}`).val())) {
            $("#" + id).addClass("is-invalid");
            return false;
        }
        return true;
    }

    $('#subscribe').submit(function (event) {
        event.preventDefault();

        if (validateEmail('email')) {
            $('button.submit').prop("disabled", true);
            $('button.submit .loading').show();
            $('button.submit .prompt').hide();

            const form = $(this);
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize(),
                success: () => {
                    $('#subscribe').hide();
                    $('#thanks').show();
                }
            });
        }
    });

})(jQuery);
