$(document).ready(function() {
  //$('nav.more-nav ul').before('<div class="menu-btn">+ More</div>');
  $('nav.more-nav ul').addClass('hide');

  $(".menu-btn").click(function() {
      $("nav.more-nav ul").toggleClass('hide');
      $(".menu-btn").toggleClass('close');
  });

	if(Modernizr.mq('only all')) {
		$('html').addClass('mq');
	} else {
		$('html').addClass('no-mq');
	};

  if (!Modernizr.svg) {
    $(".logo img").attr("src", "/assets/images/logos/logo.png");
  }

});