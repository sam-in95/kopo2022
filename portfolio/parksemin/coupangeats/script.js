const allA = document.querySelectorAll('a');
allA.forEach((a, index) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

const bike = document.querySelector('.banner_bike');

window.addEventListener('load', () => {
  bike.style.transition = 'ease-in-out 2s';
  bike.style.transform = 'translate(300px, -25px)';
});

const iconLine = document.querySelector('.icon_line');
const $header = document.querySelector('header');
const benefitCard = document.querySelectorAll('.benefit_card');
const joinCard = document.querySelectorAll('.join_card');
const $topBtn = document.querySelector('.top_btn');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  console.log(scrollTop);
  if (scrollTop > 30) {
    $header.style.boxShadow = '10px 0px 20px rgba(0,0,0,0.2)';
  } else {
    $header.style.boxShadow = '0px 0px 0px rgba(0,0,0,0.2)';
  }

  if (scrollTop > 200) {
    $topBtn.style.opacity = '1';
  } else {
    $topBtn.style.opacity = '0';
  }

  if (scrollTop > 450) {
    iconLine.style.transform = 'translateX(110px)';
  }

  if (scrollTop > 1600) {
    benefitCard.forEach((card, index) => {
      setTimeout(() => {
        benefitCard[index].style.transform = 'translateY(0)';
        benefitCard[index].style.opacity = '1';
      }, index * 100);
    });
  }

  if (scrollTop > 2420) {
    joinCard.forEach((card, index) => {
      setTimeout(() => {
        joinCard[index].style.transform = 'translateY(0)';
        joinCard[index].style.opacity = '1';
      }, index * 100);
    });
  }
});

const $navs = document.querySelectorAll('nav ul li');
const $navContents = document.querySelectorAll('.nav_contents');
const $section = document.querySelectorAll('section');

$navs[0].addEventListener('click', () => {
  window.scrollTo({ top: '800', behavior: 'smooth' });
});
$navs[1].addEventListener('click', () => {
  window.scrollTo({ top: '2140', behavior: 'smooth' });
});
$navs[2].addEventListener('click', () => {
  window.scrollTo({ top: '2920', behavior: 'smooth' });
});
$navs[3].addEventListener('click', () => {
  window.scrollTo({ top: '3780', behavior: 'smooth' });
});

$topBtn.addEventListener('click', () => {
  window.scrollTo({ top: '0', behavior: 'smooth' });
});
