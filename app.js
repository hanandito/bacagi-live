  //  Favor
  $('.carousel-banner').addClass('owl-carousel owl-theme').owlCarousel({
    autoplay:false,
    navText: ["<img src='chevron-left-square-08.png'>","<img src='chevron-right-square-08.png'>"],
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
       items: 1,
       dots: false,
       nav: false
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