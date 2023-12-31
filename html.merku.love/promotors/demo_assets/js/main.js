(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // sticky header - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.site_header').addClass("sticky")
    } else {
      $('.site_header').removeClass("sticky")
    }
  });
  // sticky header - End
  // --------------------------------------------------

  // Splitting Text Animation - Start
  // --------------------------------------------------
  $(window).on("load", function () {
    Splitting({
      target: "[data-splitting]",
      by: "chars"
    });
  });
  // Splitting Text Animation - End
  // --------------------------------------------------

  // wow js - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 400,
  });
  wow.init();
  // wow js - End
  // --------------------------------------------------

  // Dropdown - Start
  // --------------------------------------------------
  $(document).ready(function () {
    $(".dropdown").on('mouseover', function () {
      $(this).find('> .dropdown-menu').addClass('show');
    });
    $(".dropdown").on('mouseout', function () {
      $(this).find('> .dropdown-menu').removeClass('show');
    });
  });
  // Dropdown - End
  // --------------------------------------------------

  // Background Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 0,
  });
  // Background Parallax - End
  // --------------------------------------------------

})(jQuery);