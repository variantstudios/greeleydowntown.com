$(document).ready(function() {

    // Helper function to get form data in the supported format
    function getFormDataString(formEl) {
        var formData = new FormData(formEl),
            data = [];

        //for (var keyValue of formData) {
        formData.each(function(keyValue){
            data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
        });

        return data.join("&");
    }

    // Fetch the form element
    var formEl = document.getElementById("form");

    // Override the submit event
    formEl.addEventListener("submit", function(e) {
        e.preventDefault();

        var request = new XMLHttpRequest();

        request.addEventListener("load", function() {
            if (request.status === 302) { // CloudCannon redirects on success
                // It worked
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
        });

        request.open(formEl.method, formEl.action);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(getFormDataString(formEl));
    });

});
