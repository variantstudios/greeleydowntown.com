$(document).ready(function() {

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


  if ($('.gallery-item').length > 0) {
    $(".gallery-item").colorbox({
      rel: 'gallery-item'
    });
  }
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }


  if (!Modernizr.svg) {
    $(".logo img").attr("src", "/assets/images/logos/logo.png");
  }


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
  }


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


if ($('body.form').length > 0) {
  if (queryString() == "true") {
    $('#form-message').css("display","block");
    $("html, body").delay(0).animate({scrollTop: $('#form-message').offset().top }, 2000);
    $('#form-message').hide(0).delay(300).fadeIn(2000);
  }
  
var CaptchaCallback = function() { 
  if ($('#RecaptchaField1').length) {
    grecaptcha.render('RecaptchaField1', {
      sitekey: '6LcfAAgUAAAAAHa4hua839vpLM4BubtgJ58MOuhY'
    });
  }
  if ($('#RecaptchaField2').length) {
    grecaptcha.render('RecaptchaField2', {
      sitekey: '6LcfAAgUAAAAAHa4hua839vpLM4BubtgJ58MOuhY'
    });
  }
};  
  
}

function queryString() {
  var queryString = window.location.search;
  var varArray = queryString.split("&");
  for (var i = 0; i < varArray.length; i++) {
    var param = varArray[i].split("=");
    return param[1];
  }
}

});
