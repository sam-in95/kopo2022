var scroll = function(){
    
    var $nav = null,
        $cnt = null,
        moveCnt = null,
        moveIndex = 0,
        moveCntTop = 0,
        winH = 0,
        time = false; // 새로 만든 변수

    $(document).ready(function(){
        init();
        initEvent();
    });
    
    var init = function(){
        $cnt = $(".content");
        $nav = $(".header a");
    };
    
    var initEvent = function(){
        $("html ,body").scrollTop(0);
        winResize();
        $(window).resize(function(){
            winResize();
        });
        $nav.on("click", function(){
            moveIndex = $(this).parent("li").index();
            moving(moveIndex);
            return false;
        });
        $cnt.on("mousewheel", function(e){
            if(time === false){ // time 변수가 펄스일때만 휠 이벤트 실행
              wheel(e);
            }
        });
    };
        
    var winResize = function(){
        winH = $(window).height();
        $cnt.children("div").height(winH);
        $("html ,body").scrollTop(moveIndex.scrollTop);
    };
    
    var wheel = function(e){
        if(e.originalEvent.wheelDelta < 0){
            if(moveIndex < 4){
                moveIndex += 1;
                moving(moveIndex);
            };
        }else{
            if(moveIndex > 0){
                moveIndex -= 1;
                moving(moveIndex);
            };
        };
    };
    
    var moving = function(index){
        time = true // 휠 이벤트가 실행 동시에 true로 변경
        moveCnt = $cnt.children("div").eq(index);
        moveCntTop = moveCnt.offset().top;
        $("html ,body").stop().animate({
            scrollTop: moveCntTop
        }, 1000, function(){
          time = false; // 휠 이벤트가 끝나면 false로 변경
        });
        $nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
    };
    
};

scroll();





gsap.to(".img1,.img4, .img7, .img12, .img13, .img14", { duration: 4, 

    y: -100, 
    ease: 'elastic',  
    
    fontSize: 60});

    gsap.to(".img2, .img3, .img5, .img6", { duration: 6, 

    y: -110, 
    ease: 'elastic',  
    
    fontSize: 60});
    gsap.to(".img8, .img9, .img10, .img11", { duration: 5, 

    y: -110, 
    ease: 'elastic',  
    
    fontSize: 60});

    gsap.to('animation1', {y: 20, opacity: 0, stagger: 0.5});

    gsap.from(".box1", { duration: 5, y: 100,  opacity: 0.2, ease: 'elastic'});
    gsap.from(".box2", { duration: 6, y: 100,  opacity: 0.2, ease: 'elastic'});




    const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
    const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');


const makeChart = (percent, classname, color) => {
  let i = 1;
  let chartFn = setInterval(function() {
    if (i < percent) {
      colorFn(i, classname, color);
      i++;
    } else {
      clearInterval(chartFn);
    }
    
  }, 10);
}

const colorFn = (i, classname, color) => {
  classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #FEECD3 " + i + "% 100%)";
}

const replay = () => {
  makeChart(84, chart1, '#FEC77C');
  makeChart(66, chart2, '#FEC77C');
  makeChart(82, chart3, '#FEC77C');
  makeChart(67, chart4, '#FEC77C');
  makeChart(90, chart5, '#FEC77C');
}

makeChart(84, chart1, '#FEC77C');
makeChart(66, chart2, '#FEC77C');
makeChart(82, chart3, '#FEC77C');
makeChart(67, chart4, '#FEC77C');
makeChart(90, chart5, '#FEC77C');



const spyEls = document.querySelectorAll('.cnt02')
const Controller = new ScrollMagic.Controller();

spyEls.forEach( function (makeChart) {
    new ScrollMagic
    .Scene({
        triggerElement: makeChart,
        triggerHook: 0.2

    })
    .setClassToggle(makeChart,'show')
    .addTo(Controller);
})


const spyEls2 = document.querySelectorAll('.cnt03')
const Controller2 = new ScrollMagic.Controller();

spyEls2.forEach( function (spyEl2) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl2,
        triggerHook: 0.2
    })
    .setClassToggle(spyEl2,'show')
    .addTo(Controller2);
})


const spyEls3 = document.querySelectorAll('.cnt04')
const Controller3 = new ScrollMagic.Controller();

spyEls3.forEach( function (spyEl3) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl3,
        triggerHook: 0.2
    })
    .setClassToggle(spyEl3,'show')
    .addTo(Controller2);
})


// window.addEventListener('scroll', ()=>{
//     let scrollY = window.scrollY;

//     console.log(scrollY);

// });




$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});


var swiper = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.blog-slider__pagination',
	  clickable: true,
	}
  });

  