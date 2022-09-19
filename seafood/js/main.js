$(function(){

  $('.header-slider').slick({
    dots : true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="arrow"></button>',
    vertical : true,

    responsive: [
      {
      breakpoint: 361,
      settings: {
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      }
    }]
    
  });


  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    asNavFor: '.product__content',
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="arrow"></button>',

    responsive: [
      {
        breakpoint: 898,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 3
        },
      },
      {
        breakpoint: 764,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 501,
        settings: {
          vertical: false,
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      }
]
  });

  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    arrows: false,
    fade: true
  });

  $('.nav-button').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});
