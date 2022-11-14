const $headerWrap = document.querySelector('.header_wrap');
const $storyCards = document.querySelectorAll('.story_card');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;

  if (scrollTop >= 150 && scrollTop < 900) {
    $headerWrap.classList.add('scroll_header');
    $headerWrap.classList.remove('scroll_header_2');
  } else if (scrollTop >= 900) {
    $headerWrap.classList.add('scroll_header_2');
  } else {
    $headerWrap.classList.remove('scroll_header');
    $headerWrap.classList.remove('scroll_header_2');
  }

  if (scrollTop >= 2300) {
    $storyCards.forEach((card, index) => {
      card.style.opacity = '1';
    });
    $storyCards[0].style.marginTop = '40px';
    $storyCards[1].style.marginTop = '140px';
    $storyCards[2].style.marginTop = '60px';
  }
});
