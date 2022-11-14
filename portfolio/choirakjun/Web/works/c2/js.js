const images = document.querySelectorAll('.js-lazyload-image');

const sections = document.querySelectorAll('.section');

let config = {
  rootMargin: '0px',
  threshold: 0
};

let observer = new IntersectionObserver((entries) => {
    console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    } 

  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const current = document.querySelector('.section.active');
  const next = entry.target;
  const header = next.querySelector(".section--header");

  if (current) {
    current.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
    document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
  }
}

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) { return; }
  img.src = src;
}

const btnintro = document.querySelector('.intro');
const sectionintro = document.querySelector('#intro');
btnintro.addEventListener('click', function() {
    sectionintro.scrollIntoView({behavior:"smooth", block:"center"})
})
const btnspring = document.querySelector('.spring');
const sectionspring = document.querySelector('#spring');
btnspring.addEventListener('click', function() {
    sectionspring.scrollIntoView({behavior:"smooth", block:"center"})
})
const btnsummer = document.querySelector('.summer');
const sectionsummer = document.querySelector('#summer');
btnsummer.addEventListener('click', function() {
    sectionsummer.scrollIntoView({behavior:"smooth", block:"center"})
})
const btnautumn = document.querySelector('.autumn');
const sectionautumn = document.querySelector('#autumn');
btnautumn.addEventListener('click', function() {
    sectionautumn.scrollIntoView({behavior:"smooth", block:"center"})
})
// const btnwinter = document.querySelector('.winter');
// const sectionwinter = document.querySelector('#winter');
// btnwinter.addEventListener('click', function() {
//     sectionwinter.scrollIntoView({behavior:"smooth", block:"center"})
// })

const arrowUp = document.querySelector('.arrow-up')

arrowUp.addEventListener('click', function(){
    sectionintro.scrollIntoView({behavior:"smooth", block:"center"});
});

document.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        arrowUp.classList.add('show');
    } else {
        arrowUp.classList.remove('show');
    }
})


// ↓ 스크롤 배경색 변환
$(document).ready(function() {
$(window).scroll( function(){
    $('#spring').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-left':'0px'},1000);
        }
        
    }); 
});
});


// ↑ 스크롤 배경색 변환
