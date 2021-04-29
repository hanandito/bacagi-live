  //  Favor
  $('.carousel-homebanner').addClass('owl-carousel owl-theme').owlCarousel({
    autoplay:false,
    autoplayTimeout: 3000,
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
       items: 3,
       stagePadding: 50,
       dots: false,
       nav: true,
       margin: 10
     }
   }
 })