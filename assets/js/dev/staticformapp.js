$(document).ready(function() {
        var targetURL = "https://staticformapp.com/send/";
        $("#form").submit(function(ev) {
            ev.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                type: 'POST', url: targetURL, data: formData,
                cache: false,
                success: function(data) {
                    console.log(data);
                    if (data == "true") {
                        //$('.reponse').html('<p><em>worked!</em></p>');
                        $('#form-message').css("display","block");
                        $("html, body").delay(0).animate({scrollTop: $('#form-message').offset().top }, 2000);
                        $('#form-message').hide(0).delay(300).fadeIn(2000);
                        $('#form-message').delay(6000).fadeOut(2000);
                        grecaptcha.reset();
                        $('#form').trigger("reset");
                    } else {
                        $('#fail').hide(0).delay(300).fadeIn(2000);
                        $('#fail').delay(10000).fadeOut(2000);
                        grecaptcha.reset();
                    }
                },
                error: function(request, status, error) {
                    $('#fail').hide(0).delay(300).fadeIn(2000);
                    $('#fail').delay(6000).fadeOut(2000);
                    grecaptcha.reset();
                }
            });

        });
    });
