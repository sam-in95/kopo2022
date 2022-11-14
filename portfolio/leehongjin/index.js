// let home = document.querySelector('.home');

const btnHome = document.querySelector('.home');
const sectionHome = document.querySelector('#home');
  btnHome.addEventListener('click', function() {
      sectionHome.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

const btnAbout = document.querySelector('.about');
const sectionAbout = document.querySelector('#about');
  btnAbout.addEventListener('click', function() {
      sectionAbout.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

// const btnSkills = document.querySelector('.skills');
// const sectionSkills = document.querySelector('#skills');
//   btnSkills.addEventListener('click', function() {
//       sectionSkills.scrollIntoView({behavior:"smooth", block:"center"});
//       button.classList.remove('active');
//       overlay.classList.remove('show');
//   });

const btnWorks = document.querySelector('.works');
const sectionWorks = document.querySelector('#works');
  btnWorks.addEventListener('click', function() {
      sectionWorks.scrollIntoView({behavior:"smooth", block:"center"});
      button.classList.remove('active');
      overlay.classList.remove('show');
  });

// const btnContact = document.querySelector('.contact');
// const sectionContact = document.querySelector('#contact');
//   btnContact.addEventListener('click', function() {
//       sectionContact.scrollIntoView({behavior:"smooth", block:"center"});
//       button.classList.remove('active');
//       overlay.classList.remove('show');
//   });

// const btnArrow = document.querySelector('.arrow-up');

// btnArrow.addEventListener('click', function(){
//     sectionHome.scrollIntoView({behavior:"smooth", block:"center"});
// });

document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btnArrow.classList.add('show');
    } else {
        btnArrow.classList.remove('show');
    }
});

const container = document.querySelector('.container');

document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        container.classList.add('show');
    } else {
        container.classList.remove('show');
    }
});



const toggle = document.querySelector('#toggle');
const button = document.querySelector('.button');

toggle.addEventListener('click', ()=>{
  button.classList.toggle('active');
  // console.log('hi');
})


const overlay = document.querySelector('#overlay');

toggle.addEventListener('click', ()=>{
  overlay.classList.toggle('show');
})


// gsap home 효과
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1
  })
})

// about
const aboutTitle = document.querySelector('.about-title');

document.addEventListener("scroll", ()=>{
  if(window.scrollY > 500) {
    aboutTitle.classList.add('show');
  } else {
    aboutTitle.classList.remove('show');
  }
  // } else if(window.scrollY > 1100) {
    // aboutTitle.classList.remove('show');
    // aboutTitle.classList.add('delete');
  // } else {
    // aboutTitle.classList.remove('delete');

})

const WorksTitle = document.querySelector('.Works-title');

document.addEventListener("scroll", ()=>{
  if(window.scrollY > 2511) {
    WorksTitle.classList.add('show');
  } else {
    WorksTitle.classList.remove('show');
  }

})

// 2511
// document.addEventListener("scroll", ()=>{
//   if(window.scrollY > 1100) {
//     aboutTitle.classList.remove('show');
//     aboutTitle.classList.add('delete');
//   } else {
//     aboutTitle.classList.remove('delete');

//   }
// })

// gsap.to(skillT1, {
//   duration: 2, text: "this is the new text", ease: "none"
// });

const texts = "안녕하세요. 반갑습니다 :)";
const aboutText = document.querySelector('#about-text');

document.addEventListener("scroll", (e)=> {
  if(window.scrollY > 1500) {
    gsap.to(aboutText, {
      duration: 2, text: texts, ease: "none"
    });
  }
});

const skillT1 = document.querySelector('#skills .t1');

document.addEventListener("scroll", (e)=> {
  if (window.scrollY > 2811) {
    gsap.to(skillT1, {
      duration: 1, text: "Skills", ease: "none"
    });
  }
});

