// // // var swiper = new Swiper('.mySwiper', {
// // //   effect: 'coverflow',
// // //   grabCursor: true,
// // //   centeredSlides: true,
// // //   slidesPerView: 'auto',
// // //   coverflowEffect: {
// // //     rotate: 50,
// // //     stretch: 10,
// // //     depth: 1,
// // //     modifier: 10,
// // //     slideShadows: true,
// // //   },
// // //   pagination: {
// // //     el: '.swiper-pagination',
// // //   },
// // //   autoplay: {
// // //     delay: 3000,
// // //   },
// // // });
// // var swiper = new Swiper('.mySwiper', {
// //   slidesPerView: 3,
// //   spaceBetween: 30,
// //   pagination: {
// //     el: '.swiper-pagination',
// //     clickable: true,
// //   },
// //   autoplay: {
// //     delay: 5000,
// //   },
// });

const $swiperWrap = document.querySelector('.swiper_wrapper');
const $swiperSlide = document.querySelectorAll('.swiper_slide');

const $slidePrev = document.querySelector('.swiper_prev');
const $slideNext = document.querySelector('.swiper_next');
const $slideDot = document.querySelectorAll('.swiper ul li');

let slidePosition = 0;
let slideWidth = 770;
let slideSpeed = 200;
let current = 0;

setInterval(() => {
  $swiperWrap.style.transition = `${slideSpeed}ms`;
  current++;
  // slideWidth = slideWidth + current;
  slidePosition = slideWidth * current;
  $swiperWrap.style.transform = `translateX(-${slidePosition}px)`;

  $swiperSlide.forEach((slide, index) => {
    slide.classList.remove('slide_now');
  });
  $swiperSlide[current + 1].classList.add('slide_now');

  $slideDot.forEach((dot, index) => {
    dot.classList.remove('swiper_nav_now');
  });
  if (current < 3) {
    $slideDot[current].classList.add('swiper_nav_now');
  }
  if (current === 3) {
    $slideDot[0].classList.add('swiper_nav_now');
  }

  if (current === 3) {
    setTimeout(() => {
      current = 0;
      slidePosition = 0;
      $swiperSlide[current + 1].classList.add('slide_now');
      $swiperWrap.style.transition = `0ms`;
      $swiperWrap.style.transform = `translateX(-${slidePosition}px)`;
      // $swiperWrap.style.transform = `translateX(-${0}px)`;
    }, 1000);
  }

  console.log(current);
}, 2000);

// $slidePrev.addEventListener('click', () => {
//   current--;
// });

// $slideNext.addEventListener('click', () => {
//   current++;
// });
