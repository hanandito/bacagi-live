  //  Favor
  $('.carousel-banner').addClass('owl-carousel owl-theme').owlCarousel({
    autoplay:false,
    navText: ["<img src='chevron-left-square-08.png'>","<img src='chevron-right-square-08.png'>"],
    autoplayTimeout: 3500,
    autoplay: true,
    responsive:{
     0: {
       items: 1,
       dots: true,
       nav: false,
     },
     600: {
       items: 1,
       nav: false
     },
     1000: {
       items: 1,
       dots: false,
       nav: false,
       loop: true
     }
   }
 })
  $('.carousel-point').addClass('owl-carousel owl-theme').owlCarousel({
    autoplay:false,
    navText: ["<img src='chevron-left-square-08.png'>","<img src='chevron-right-square-08.png'>"],
    autoplayTimeout: 3000,
    responsive:{
     0: {
       items: 1,
       dots: false,
       nav: true,
       stagePadding: 40,
       margin: 10
     },
     600: {
       items: 1,
       nav: false
     },
     1000: {
       items: 3,
       stagePadding: 50,
       dots: false,
       nav: true,
       margin: 10
     }
   }
 })
   //  Favor
   $('.carousel-testi').addClass('owl-carousel owl-theme').owlCarousel({
    navText: ["<img src='chevron-left-square-08.png'>","<img src='chevron-right-square-08.png'>"],
    autoplayTimeout: 3500,
    autoplay: true,
    responsive:{
     0: {
       items: 1,
       dots: true,
       nav: false,
     },
     600: {
       items: 1,
       nav: false
     },
     1000: {
       items: 1,
       dots: false,
       nav: false,
       loop: true
     }
   }
 })

  var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-wrapper').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.number-counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
$(document).ready(function() {
  // Transition effect for navbar
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 70) {
        $('.navbar-bacagi').addClass('solid');
        $(".navbar-bacagi .logo").attr("src", 'logo.png');
        $('.menu-icon').addClass('scrolled');
    } else {
        $('.navbar-bacagi').removeClass('solid');
        $(".navbar-bacagi .logo").attr("src", 'logo-white.png');
        $('.menu-icon').removeClass('scrolled');
    }
  });
  // Side Menu on Mobile
  $('.menu-icon').click(function() {
    $('.side-menu').addClass("active");
 })
  $('.close-menu-icon').click(function() {
    $('.side-menu').removeClass("active");
 })
});