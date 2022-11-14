// tasty_note

const $roastingBar = document.querySelector('.roasting .bar');
const $bitterBar = document.querySelector('.bitter .bar');
const $sourBar = document.querySelector('.sour .bar');
const $bodyBar = document.querySelector('.body .bar');
const $tastyBars = document.querySelectorAll('.tasty .bar');

let tastyRoasting = 4;
let roastingWidth = (tastyRoasting * 120) / 5;

let tastyBitter = 4;
let bitterWidth = (tastyBitter * 120) / 5;

let tastySour = 2;
let sourWidth = (tastySour * 120) / 5;

let tastyBody = 4;
let bodyWidth = (tastyBody * 120) / 5;

$roastingBar.style.width = `${roastingWidth}px`;
$bitterBar.style.width = `${bitterWidth}px`;
$sourBar.style.width = `${sourWidth}px`;
$bodyBar.style.width = `${bodyWidth}px`;

$roastingBar.style.transform = `translateX(-${roastingWidth}px)`;
$bitterBar.style.transform = `translateX(-${bitterWidth}px)`;
$sourBar.style.transform = `translateX(-${sourWidth}px)`;
$bodyBar.style.transform = `translateX(-${bodyWidth}px)`;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  if (scrollTop > 799) {
    $tastyBars.forEach((bar, index) => {
      bar.style.transform = `translateX(0)`;
    });
  }
});
