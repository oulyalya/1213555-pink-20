(function () {
  var menu = document.querySelector('.main-nav');
  var menuBtn = menu.querySelector('.main-nav__toggle');

  var hideMenu = function () {
    if(menu && menu.classList.contains('main-nav--nojs')) {
      menu.classList.add('main-nav--closed');
      menu.classList.remove('main-nav--nojs');
    }
  }

  var toggleMenu = function () {
    menu.classList.toggle('main-nav--closed');
  }

  hideMenu();
  menuBtn.addEventListener('click', toggleMenu);
})();


// var reviewsLeft = document.querySelector('.slider__btn--left');
// var reviewsRight = document.querySelector('.slider__btn--right');
// var slides = document.querySelectorAll('.slider__slide');



// var showNextSlide = function () {
  // var currentSlide = slides[0];

  // for (var i = 0; i < slides.length; i++) {
  //   if (i < slides.length - 1) {
      // currentSlide.classList.remove('slider__slide--active');

  //     console.log("click")
  //   } else {
  //     console.log("stop")
  //   }
  // }
// }

/*reviewsLeft.addEventListener ('click', function () {
console.log('left');
})*/

// reviewsRight.addEventListener('click', showNextSlide);
