// tap_btn

const $tapBtns = document.querySelectorAll('.tap_btn');
const $vertuoCapsule = document.querySelector('.vertuo_capsule');
const $originalCapsule = document.querySelector('.original_capsule');

$tapBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 0) {
      // vertuo click
      $tapBtns[0].classList.add('on');
      $tapBtns[1].classList.remove('on');
      $vertuoCapsule.style.display = 'block';
      $originalCapsule.style.display = 'none';
    } else {
      // original click
      $tapBtns[0].classList.remove('on');
      $tapBtns[1].classList.add('on');
      $vertuoCapsule.style.display = 'none';
      $originalCapsule.style.display = 'block';
    }
  });
});



