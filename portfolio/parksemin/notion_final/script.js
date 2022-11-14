// header shadow
const $header = document.querySelector('header');
const $navDot = document.querySelector('.nav_dot');
const $logo = document.querySelector('.logo');
const $nav = document.querySelectorAll('.nav_btn');

const navColor = (navIndex) => {
  $nav.forEach((nav, index) => {
    nav.style.color = '#222222';
    $nav[navIndex].style.color = '#e16259';
  });
};

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  if (scrollTop === 0) {
    $header.classList.remove('header_shadow');
    $header.style.height = '100px';
    $logo.style.transform = 'scale(1)';
  } else {
    $header.classList.add('header_shadow');
    $header.style.height = '70px';
    $logo.style.transform = 'scale(0.8)';
  }

  if (scrollTop >= 0 && scrollTop < 946) {
    $navDot.style.top = '10px';
    navColor(0);
  } else if (scrollTop >= 946 && scrollTop < 1996) {
    $navDot.style.top = '40px';
    navColor(1);
  } else if (scrollTop >= 1996 && scrollTop < 3046) {
    $navDot.style.top = '70px';
    navColor(2);
  } else {
    $navDot.style.top = '100px';
    navColor(3);
  }
});

// background animation

const $bannerDots = document.querySelectorAll('.banner_back');
const $firstAni = document.querySelectorAll('.first');
const $secondAni = document.querySelectorAll('.second');

// backDotAni();

// const backDotAni = () => {};

setInterval(() => {
  $firstAni.forEach((dot, index) => {
    dot.classList.remove('ani');
    void dot.offsetWidth;
    dot.classList.add('ani');
  });
}, 50000);

setInterval(() => {
  $secondAni.forEach((dot, index) => {
    dot.classList.remove('ani');
    void dot.offsetWidth;
    dot.classList.add('ani');
  });
}, 20000);

// head text

const $headTitle = document.querySelectorAll('h2');

const controller_1 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: '#trigger1',
  triggerHook: 0.9,
  offset: 250, // move trigger to center of element
  // duration: '100%',
  reverse: false, // only do once
})
  .setClassToggle('.ability_title', 'title_show') // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller_1);

// video on
const $videoTextCon = document.querySelectorAll('.video_text_con');
const $video = document.querySelectorAll('video');
const $videoImg = document.querySelectorAll('.video_text_img');

$videoTextCon.forEach((text, index) => {
  text.addEventListener('click', (e) => {
    $videoTextCon.forEach((text) => {
      text.classList.remove('video_on');
    });
    e.target.classList.add('video_on');
    if (text.classList.contains('video_on')) {
      $video.forEach((video) => {
        video.style.display = 'none';
      });
      $video[index].style.display = 'block';

      $videoImg.forEach((img) => {
        img.style.display = 'none';
      });
      $videoImg[index].style.display = 'block';
    }
  });
});

// nav scroll
const $scrollBtn = document.querySelectorAll('.nav_btn');
const $contents = document.querySelectorAll('section');
let slideCurrent = 0;

$scrollBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    $contents[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// card slide
const controller_2 = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: '#trigger1',
  triggerHook: 0.9,
  offset: 1550, // move trigger to center of element
  // duration: '100%',
  reverse: false, // only do once
})
  .setClassToggle('.story_title', 'title_show') // add class toggle
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller_2);

const $storyBoxSlide = document.querySelector('.story_box_slide');
const $storyBoxes = document.querySelectorAll('.story_box');
const slideLen = $storyBoxes.length;
const slideSpeed = 3000;
const slideWidth = 3864;

// setInterval(() => {
//   slideCurrent++;
//   let slideWidth = $storyBoxSlide.style.transform;
//   $storyBoxSlide.style.transition = `${slideSpeed}ms`;
//   $storyBoxSlide.style.transform = `translateX(${slideCurrent * -50}px)`;
//   if (slideCurrent === 72) {
//     setTimeout(() => {
//       $storyBoxSlide.style.transition = '0ms';
//       $storyBoxSlide.style.transform = `translateX(-280px)`;
//       slideCurrent = 0;
//     });
//   }
// }, 1000);
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  speed: 50000,
  loop: true,
  loopFillGroupWithBlank: true,

  autoplay: {
    delay: 00,
  },
});

gsap.to('.ok_2', { duration: 1, x: 10, y: 50, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.note', { duration: 1, x: 30, y: 10, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.clock', { duration: 0.8, x: 10, y: 40, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.finger', { duration: 1, x: 40, y: 0, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.ok_3', { duration: 1.2, x: 15, y: 25, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.clock_2', { duration: 1.3, x: 50, y: 20, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.note_2', { duration: 0.5, x: 10, y: 20, ease: 'bounce', repeat: -1, yoyo: true });
gsap.to('.finger_2', { duration: 1, x: 20, y: 20, ease: 'bounce', repeat: -1, yoyo: true });
