let workArray = [
  {
    name: "오소이 템플릿 디자인",
    categori: "Marketing",
    img: "../works/works_img/parkseoyeon_work01.jpg",
    link: "../portfolio/parkseoyeon/parkseoyeon_templatedesign_maketing/index.html",
  },
  {
    name: "휴식 일러스트",
    categori: "Illustration",
    img: "../works/works_img/parkseoyeon_work02.jpg",
    link: "../portfolio/parkseoyeon/parkseoyeon_restillustration_illustration/index.html",
  },
  {
    name: "네스프레소 웹 리뉴얼",
    img: "../works/works_img/parksemin_work01.png",
    categori: "WEB / APP",
    link: "../portfolio/parksemin/nespresso/index.html",
  },
  {
    name: "컴포즈커피 앱 UXUI 리뉴얼",
    img: "../works/works_img/parksemin_work02.png",
    categori: "UX / UI",
  },
  {
    name: "CU post 앱 UXUI 리뉴얼",
    img: "../works/works_img/yoonyejung_work01.jpg",
    categori: "UX / UI",
    link: "../portfolio/yoonyejung/yoonyejung_CUpost_UXUI/index.html",
  },
  {
    name: "아마도 웹 리디자인",
    img: "../works/works_img/yoonyejung_work02.jpg",
    categori: "WEB / APP",
    link: "../portfolio/yoonyejung/yoonyejung_amado_web/amado_process.html",
  },
  {
    name: "하겐다즈 웹 리뉴얼",
    img: "../works/works_img/leehongjin_work01.png",
    categori: "WEB / APP",
    link: "../portfolio/leehongjin/web/haagendazs/index.html",
  },
  {
    name: "트립닷컴 앱 리뉴얼",
    img: "../works/works_img/leehongjin_work02.png",
    categori: "UX / UI",
    link: "../portfolio/leehongjin/pdf/trip.pdf",
  },
  {
    name: "스퀘어 에닉스 웹 리디자인",
    img: "../works/works_img/kimjeongseok_work01.jpg",
    categori: "WEB / APP",
    link: "../portfolio/kimjeongseok/squareenix_web/index.html",
  },
  {
    img: "../works/works_img/kimjeongseok_work02.jpg",
    name: "원신 아야카 공략 웹페이지 제작",
    categori: "WEB / APP",
    link: "../portfolio/kimjeongseok/ayaka_web/index.html",
  },
  { img: "", name: "11번", categori: "Marketing" },
  { img: "", name: "12번", categori: "Branding" },
  { img: "", name: "13번", categori: "UX / UI" },
  { img: "", name: "14번", categori: "WEB / APP" },
  { img: "", name: "15번", categori: "Illustration" },
  { img: "", name: "16번", categori: "Illustration" },
  { img: "", name: "17번", categori: "Marketing" },
  { img: "", name: "18번", categori: "Branding" },
  { img: "", name: "19번", categori: "Branding" },
  { img: "", name: "20번", categori: "Branding" },
  { img: "", name: "21번", categori: "UX / UI" },
  { img: "", name: "22번", categori: "WEB / APP" },
  { img: "", name: "23번", categori: "Marketing" },
  { img: "", name: "24번", categori: "Illustration" },
  { img: "", name: "25번", categori: "Marketing" },
  { img: "", name: "26번", categori: "Branding" },
  { img: "", name: "27번", categori: "UX / UI" },
  { img: "", name: "28번", categori: "WEB / APP" },
  { img: "", name: "29번", categori: "Marketing" },
  { img: "", name: "30번", categori: "Illustration" },
  { img: "", name: "31번", categori: "Marketing" },
  { img: "", name: "32번", categori: "Branding" },
  { img: "", name: "33번", categori: "UX / UI" },
  { img: "", name: "34번", categori: "WEB / APP" },
  { img: "", name: "35번", categori: "Marketing" },
  { img: "", name: "36번", categori: "Illustration" },
  { img: "", name: "37번", categori: "Marketing" },
  { img: "", name: "38번", categori: "Branding" },
  { img: "", name: "39번", categori: "Branding" },
  { img: "", name: "40번", categori: "Branding" },
];

const workCardWrap = document.querySelector(".work_card_wrap");

if (workArray.length > 20) {
  const workArrayOne = workArray.slice(0, 20);
  const workArrayTwo = workArray.slice(20, 40);
  workCardWrap.style.height = "2300px";

  workCardWrap.innerHTML = `
    <div class="slide_wrap">
        <div class="slide">
          ${workArrayOne
            .map((el) => {
              return `
              <div class='work_card'>
                <a href="${el.link}" target="_blank">
                  <p class='work_card_name'>${el.name}</p>
                  <div class="work_card_img">
                    <img src='${el.img}' alt='' data-cursor="card" data-name="view" />
                  </div>
                </a>
              </div>
            `;
            })
            .join("")}    
        </div>
        <div class="slide">
          ${workArrayTwo
            .map((el) => {
              return `
              <div class='work_card'>
                <a href="${el.link}" target="_blank">
                  <p class='work_card_name'>${el.name}</p>
                  <div class="work_card_img">
                    <img src='${el.img}' alt='' data-cursor="card" data-name="view" />
                  </div>
                </a>
              </div>
            `;
            })
            .join("")}    
        </div>
        </div>
        <div class="slide_btn">
            <div class="slide_prev disable" data-cursor="prevBtn" data-name="prev"></div>
            <div class="slide_next" data-cursor="nextBtn" data-name="next"></div>
        </div>
    `;
} else {
  workCardWrap.innerHTML = `
  ${workArray
    .map((el) => {
      return `
      <div class='work_card'>
        <a href="${el.link}" target="_blank">
          <p class='work_card_name'>${el.name}</p>
          <div class="work_card_img">
            <img src='${el.img}' alt='' data-cursor="card" data-name="view" />
          </div>
        </a>
      </div>
      `;
    })
    .join("")}
    `;
}

const slideWrap = document.querySelector(".slide_wrap");
const slidePrevBtn = document.querySelector(".slide_prev");
const slideNextBtn = document.querySelector(".slide_next");

let slideCurrent = 0;

slidePrevBtn.addEventListener("click", () => {
  if (slideCurrent === 0) {
    return;
  } else {
    slideWrap.style.transform = `translateX(0px)`;
    slideCurrent--;
    slidePrevBtn.classList.add("disable");
    slideNextBtn.classList.remove("disable");
  }
});

slideNextBtn.addEventListener("click", () => {
  if (slideCurrent === 1) {
    return;
  } else {
    slideWrap.style.transform = `translateX(-1420px)`;
    slideCurrent++;
    slidePrevBtn.classList.remove("disable");
    slideNextBtn.classList.add("disable");
  }
});

const workBtnClickHandler = (e) => {
  workBtn.forEach((btn) => {
    btn.classList.remove("now");
  });
  e.target.classList.add("now");
};

const workBtn = document.querySelectorAll(".work_btn");
workBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    workBtnClickHandler(e);

    if (e.target.innerText === "ALL") {
      const workArrayOne = workArray.slice(0, 20);
      const workArrayTwo = workArray.slice(20, 40);
      workCardWrap.style.height = "2300px";

      workCardWrap.innerHTML = `
        <div class="slide_wrap">
            <div class="slide">
              ${workArrayOne
                .map((el) => {
                  return `
                  <div class='work_card'>
                    <a href="${el.link}" target="_blank">
                      <p class='work_card_name'>${el.name}</p>
                      <div class="work_card_img">
                        <img src='${el.img}' alt='' data-cursor="card" data-name="view" />
                      </div>
                    </a>
                  </div>
                `;
                })
                .join("")}    
            </div>
            <div class="slide">
              ${workArrayTwo
                .map((el) => {
                  return `
                  <div class='work_card'>
                    <a href="${el.link}" target="_blank">
                      <p class='work_card_name'>${el.name}</p>
                      <div class="work_card_img">
                        <img src='${el.img}' alt='' data-cursor="card" data-name="view" />
                      </div>
                    </a>
                  </div>
                `;
                })
                .join("")}    
            </div>
            </div>
            <div class="slide_btn">
                <div class="slide_prev" data-cursor="prevBtn" data-name="prev"></div>
                <div class="slide_next" data-cursor="nextBtn" data-name="next"></div>
            </div>
        `;
    } else {
      const workCardFilter = workArray.filter((el) => {
        return el.categori === e.target.innerText;
      });
      workCardWrap.style.height = `${
        Math.ceil(workCardFilter.length / 4) * 414 +
        Math.ceil(workCardFilter.length / 4) * 24
      }px`;

      workCardWrap.innerHTML = `
      ${workCardFilter
        .map((el) => {
          return `
          <div class='work_card'>
            <a href="${el.link}" target="_blank">
              <p class='work_card_name'>${el.name}</p>
              <div class="work_card_img">
                <img src='${el.img}' alt='' data-cursor="card" data-name="view" />
              </div>
            </a>
          </div>
          `;
        })
        .join("")}
        `;
    }
  });
});

let designerArray = [
  { imgGray: "", img: "", name: "강우성", link: "" },
  { imgGray: "", img: "", name: "공지웅", link: "" },
  { imgGray: "", img: "", name: "김가람", link: "" },
  {
    imgGray: "",
    img: "",
    name: "김정석",
    link: "../portfolio/kimjeongseok/index.html",
  },
  {
    imgGray: "",
    img: "",
    name: "박서연",
    link: "../portfolio/parkseoyeon/index.html",
  },
  { imgGray: "", img: "", name: "박성빈", link: "" },
  {
    imgGray: "",
    img: "",
    name: "박세민",
    link: "../portfolio/parksemin/",
  },
  { imgGray: "", img: "", name: "서효정", link: "" },
  { imgGray: "", img: "", name: "송화", link: "" },
  { imgGray: "", img: "", name: "신민철", link: "" },
  { imgGray: "", img: "", name: "안경민", link: "" },
  { imgGray: "", img: "", name: "양명현", link: "" },
  { imgGray: "", img: "", name: "양재원", link: "" },
  {
    imgGray: "",
    img: "",
    name: "윤예정",
    link: "../portfolio/yoonyejung/index.html",
  },
  {
    imgGray: "",
    img: "",
    name: "이윤주",
    link: "../portfolio/leeyoonzoo/index.html",
  },
  { imgGray: "", img: "", name: "이지수", link: "" },
  {
    imgGray: "",
    img: "",
    name: "이홍진",
    link: "../portfolio/leehongjin/index.html",
  },
  { imgGray: "", img: "", name: "조아영", link: "" },
  { imgGray: "", img: "", name: "황성욱", link: "" },
];

const designerWrap = document.querySelector(".designer_wrap");
designerWrap.innerHTML = `
${designerArray
  .map((el) => {
    return `
    <div class="designer_card">
      <a href='${el.link}' target='_blank'>
        <div class="designer_img" data-cursor="designer" data-name="view"></div>
        <div class="designer_name">${el.name}</div>
      </a> 
    </div>
  `;
  })
  .join("")}
`;

const designerImg = document.querySelectorAll(".designer_img");
designerImg.forEach((img, index) => {
  img.style.background = `url(../images/person_${index + 1}.png) no-repeat`;
  img.style.backgroundSize = "250px";
  img.style.backgroundPosition = "0px";

  img.addEventListener("mouseenter", () => {
    img.style.background = `url(../images/person_${
      index + 1
    }_hover.png) no-repeat`;
    img.style.backgroundSize = "250px";
    img.style.backgroundPosition = "0px";
  });
  img.addEventListener("mouseleave", () => {
    img.style.background = `url(../images/person_${index + 1}.png) no-repeat`;
    img.style.backgroundSize = "250px";
    img.style.backgroundPosition = "0px";
  });
});
