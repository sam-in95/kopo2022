const $navUl = document.querySelectorAll('nav ul li');
const $navA = document.querySelectorAll('nav ul li a');
const $navUnderLine = document.querySelectorAll('.nav_line');

$navUl.forEach((ul, index) => {
  ul.addEventListener('mouseenter', () => {
    const liWidth = $navA[index].offsetWidth;

    console.log(liWidth);
    $navUnderLine[index].style.width = `${liWidth}px`;
  });

  ul.addEventListener('mouseleave', () => {
    $navUnderLine[index].style.width = `0`;
  });
});

const liWidth = $navA[0].offsetWidth;
