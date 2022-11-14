//header esc button

const $alertNav = document.querySelector('.alert_nav_wrap');
const $escBtn = document.querySelector('.esc');

$escBtn.addEventListener('click', () => {
  $alertNav.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    $alertNav.style.display = 'none';
  }, 200);
});

// header button
const $headerBtns = document.querySelectorAll('.header_btn');
const $headerBtnsIcon = document.querySelectorAll('.header_btn .icon');

$headerBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const targetRect = btn.getBoundingClientRect();

    const buttonTop = y - targetRect.y;
    const buttonLeft = x - targetRect.x;

    const $circle = document.createElement('span');
    $circle.classList.add('circle');
    $circle.style.top = buttonTop + 'px';
    $circle.style.left = buttonLeft + 'px';

    e.target.appendChild($circle);

    if (index === 0) {
      // .header
      // btn.style.color = '#000';
      $circle.style.backgroundColor = '#fff';
    } else {
      // btn.style.color = '#000';
      $circle.style.backgroundColor = '#c75b18';
    }

    setTimeout(() => {
      $circle.remove();
    }, 500);
  });
});

// nav
const $navLi = document.querySelectorAll('.nav_wrap > ul > li');
const $subNavBackWrap = document.querySelector('.sub_nav_back_wrap');
const $subNavBack = document.querySelectorAll('.sub_nav_color');
const $subNav = document.querySelectorAll('.sub_nav');

$navLi.forEach((nav, index) => {
  nav.addEventListener('mouseover', () => {
    nav.classList.add('nav_now');
    $subNavBackWrap.style.borderTop = '1px solid #707070';
    $subNavBackWrap.style.height = '250px';
    $subNavBack[index].style.backgroundColor = '#3e3e3e';
    nav.style.color = '#d3391b';

    $subNav.forEach((subNav) => {
      subNav.style.display = 'block';
    });
  });

  nav.addEventListener('mouseleave', () => {
    nav.classList.remove('nav_now');
    $subNavBackWrap.style.borderTop = 'none';
    $subNavBackWrap.style.height = '0';
    $subNavBack[index].style.backgroundColor = '#333';
    nav.style.color = '#fff';

    $subNav.forEach((subNav) => {
      subNav.style.display = 'none';
    });
  });
});
