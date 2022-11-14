// banner svg
const $svgLogoWrap = document.querySelector('.svg_logo_wrap');
const $svgLogo = document.querySelector('#svg_logo');
const $bannerMachine = document.querySelector('.banner_machine');

addEventListener('load', () => {
  setTimeout(() => {
    $svgLogoWrap.style.backgroundColor = 'transparent';
    $svgLogoWrap.style.width = '20vw';
    $svgLogoWrap.style.height = '200px';
    $svgLogoWrap.style.top = '0px';
    $svgLogoWrap.style.zIndex = '0';
    $svgLogo.style.top = '20%';
    $svgLogo.style.width = '20vw';
  }, 1300);

  setTimeout(() => {
    $bannerMachine.style.transform = 'translateY(0)';
    $bannerMachine.style.opacity = '1';
  }, 1300);
});

// section_dot
const $sectionDot = document.querySelectorAll('.section_dot > div');

const dotControl = (dot) => {
  $sectionDot.forEach((dot, index) => {
    dot.classList.remove('section_now');
  });
  dot.classList.add('section_now');
};

const dotScroll = (scrollTop) => {
  if (scrollTop === 0) {
    dotControl($sectionDot[0]);
  } else if (scrollTop > 999 && scrollTop < 1500) {
    dotControl($sectionDot[1]);
  } else if (scrollTop > 1500 && scrollTop < 2500) {
    dotControl($sectionDot[2]);
  } else if (scrollTop > 2500 && scrollTop < 3300) {
    dotControl($sectionDot[3]);
  } else if (scrollTop > 3300) {
    dotControl($sectionDot[4]);
  }
};
$sectionDot.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dotControl(dot);
    if (index === 0) {
      window.scrollTo({ top: '0', behavior: 'smooth' });
    } else if (index === 1) {
      window.scrollTo({ top: '1000', behavior: 'smooth' });
    } else if (index === 2) {
      window.scrollTo({ top: '1800', behavior: 'smooth' });
    } else if (index === 3) {
      window.scrollTo({ top: '2800', behavior: 'smooth' });
    } else if (index === 4) {
      window.scrollTo({ top: '3600', behavior: 'smooth' });
    }
  });
});

// experience_slide
const $exBtns = document.querySelectorAll('.experience_slide_btn');
const $exSlideMove = document.querySelector('.experience_slide_move');
const $exImgs = document.querySelectorAll('.ex_imgs');

let exTextSlideWidth = 380;
let current = 0;

$exBtns.forEach((exBtn, index) => {
  current = 0;
  exBtn.addEventListener('click', () => {
    if (index === 0) {
      if (current !== 0) {
        current--;
      }
    } else {
      if (current !== 3) {
        current++;
      }
    }
    $exSlideMove.style.transform = `translateX(-${current * exTextSlideWidth}px)`;

    $exImgs.forEach((img, index) => {
      img.classList.remove('now');
      $exImgs[current].classList.add('now');
    });

    if (current === 0) {
      $exBtns[0].classList.add('disabled');
    } else if (current === 3) {
      $exBtns[1].classList.add('disabled');
    } else {
      $exBtns[0].classList.remove('disabled');
      $exBtns[1].classList.remove('disabled');
    }
  });
});

//machine
const $machineBtns = document.querySelectorAll('.machine_slide_btn');
const $machineMove = document.querySelector('.machine_slide_move');
const $machineDot = document.querySelectorAll('.machine_slide_dot ul li');

let machineSlideWidth = 1240 / 2;

const btnDisabled = (current) => {
  if (current === 0) {
    $machineBtns[0].classList.add('disabled');
  } else if (current === 2) {
    $machineBtns[1].classList.add('disabled');
  } else {
    $machineBtns[0].classList.remove('disabled');
    $machineBtns[1].classList.remove('disabled');
  }
};

const dotOn = (current) => {
  $machineDot.forEach((dot, index) => {
    dot.classList.remove('now');
    $machineDot[current].classList.add('now');
  });
};

$machineBtns.forEach((machineBtn, index) => {
  current = 0;
  machineBtn.addEventListener('click', () => {
    if (index === 0) {
      if (current !== 0) {
        current--;
      }
    } else {
      if (current !== 2) {
        current++;
      }
    }
    $machineMove.style.transform = `translateX(-${current * machineSlideWidth}px)`;

    dotOn(current);

    btnDisabled(current);
  });
});

$machineDot.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    current = index;
    console.log(current);
    $machineMove.style.transform = `translateX(-${current * machineSlideWidth}px)`;

    dotOn(current);

    btnDisabled(current);
  });
});

//capsule
const $capsuleCircle = document.querySelector('.capsule_circle');
const $capsuleN = document.querySelector('.capsule_n');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;

  $capsuleCircle.style.transform = `rotate(${scrollTop / 10}deg)`;

  dotScroll(scrollTop);
});
