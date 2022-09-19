$(document).ready(function () {
  $('.furniture__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slick-next.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slick-prev.svg" alt="arrow"></button>',

  });


  //________tabs_________
  $('.allFurniture__link').click(function (e) {
    e.preventDefault();

    $('.allFurniture__link').removeClass('allFurniture__link--active');
    $('.allFurniture__tabBody').removeClass('allFurniture__tabBody--active');

    $(this).addClass('allFurniture__link--active');
    $($(this).attr('href')).addClass('allFurniture__tabBody--active');
  });
  $('.allFurniture__link:first').click();


// content 1
  $('.allFurniture__contentLink').click(function (e) {
    e.preventDefault();

    $('.allFurniture__contentLink').removeClass('allFurniture__contentLink--active');
    $('.allFurniture__imgWrapper').removeClass('allFurniture__imgWrapper--active');

    $(this).addClass('allFurniture__contentLink--active');
    $($(this).attr('href')).addClass('allFurniture__imgWrapper--active');
  });
  $('.allFurniture__contentLink:first').click();

// content 2
  $('.allFurniture__contentLink2').click(function (e) {
    e.preventDefault();

    $('.allFurniture__contentLink2').removeClass('allFurniture__contentLink2--active');
    $('.allFurniture__imgWrapper2').removeClass('allFurniture__imgWrapper2--active');

    $(this).addClass('allFurniture__contentLink2--active');
    $($(this).attr('href')).addClass('allFurniture__imgWrapper2--active');
  });
  $('.allFurniture__contentLink2:first').click();

// content 3
  $('.allFurniture__contentLink3').click(function (e) {
    e.preventDefault();

    $('.allFurniture__contentLink3').removeClass('allFurniture__contentLink3--active');
    $('.allFurniture__imgWrapper3').removeClass('allFurniture__imgWrapper3--active');

    $(this).addClass('allFurniture__contentLink3--active');
    $($(this).attr('href')).addClass('allFurniture__imgWrapper3--active');

    console.log(this);
  });
  $('.allFurniture__contentLink3:first').click();
  



});


// let like = document.querySelector('.furniture__productLike');

// like.addEventListener('click', () => {
//   like.classList.toggle('furniture__productLike--active');
// });