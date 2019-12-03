$(document).ready(function () {

  // Инициализация Wow.js
  new WOW().init();
  // Слайдер
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// Анимация при скроле до нужного элемента
$(document).ready(function () {
  var container = $('.price__title'),
    win = $(window),
    windowHeight = win.height(),
    maptrigger = $('.features-subtitlerow');
  win.scroll(function () {
    var scrollPos = $(this).scrollTop(),
      containerPos = container.offset().top,
      maptriggerPos = maptrigger.offset().top;;
    if (scrollPos >= containerPos - windowHeight / 1.5) {
      container.addClass('animScale');
    }


  });


});;