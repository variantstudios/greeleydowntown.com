$(document).ready(function() {

    // MOBILE MENU FUNCTIONALITY
    $(".action--open").click(function() {
        $(".menu").addClass("menu--open");
    });
    $(".action--close").click(function() {
        $(".menu").removeClass("menu--open");
    });

    $('nav.more-nav ul').addClass('hide');

    $(".menu-btn").click(function() {
        $("nav.more-nav ul").toggleClass('hide');
        $(".menu-btn").toggleClass('close');
    });

    // COLORBOX
    $(".gallery-item").colorbox({rel:'gallery-item'});

    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };
    // PNG LOGO FALLBACK FOR OLD BROWSERS
    if (!Modernizr.svg) {
        $(".logo img").attr("src", "/assets/images/logos/logo.png");
    }

    // OPEN UP ALL EXTERNAL LINKS IN A NEW WINDOW
    if (window.location.host != "app.cloudcannon.com") {
        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');
            if (!a.test(this.href)) {
                $(this).click(function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    window.open(this.href, '_blank');
                });
            }
        });
    };

    // SMOOTH ANCHOR SCROLL
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

});