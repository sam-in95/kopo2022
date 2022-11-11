let workArray = [
  { img: "", name: "1번", categori: "UX / UI" },
  { img: "", name: "2번", categori: "WEB / APP" },
  { img: "", name: "3번", categori: "Illustration" },
  { img: "", name: "4번", categori: "Illustration" },
  { img: "", name: "5번", categori: "Marketing" },
  { img: "", name: "6번", categori: "Branding" },
  { img: "", name: "7번", categori: "UX / UI" },
  { img: "", name: "8번", categori: "WEB / APP" },
  { img: "", name: "9번", categori: "Illustration" },
  { img: "", name: "10번", categori: "Illustration" },
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
                <p class='work_card_name'>${el.name}</p>
                <p class='work_card_categori'>${el.categori}</p>
                <div class="work_card_img" data-cursor="card" data-name="view"></div>
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
                <p class='work_card_name'>${el.name}</p>
                <p class='work_card_categori'>${el.categori}</p>
                <div class="work_card_img" data-cursor="card" data-name="view"></div>
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
      <p class='work_card_name'>${el.name}</p>
      <p class='work_card_categori'>${el.categori}</p>
      <div class="work_card_img" data-cursor="card" data-name="view"></div>
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
                    <p class='work_card_name'>${el.name}</p>
                    <p class='work_card_categori'>${el.categori}</p>
                    <div class="work_card_img" data-cursor="card" data-name="view"></div>
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
                    <p class='work_card_name'>${el.name}</p>
                    <p class='work_card_categori'>${el.categori}</p>
                    <div class="work_card_img" data-cursor="card" data-name="view"></div>
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
          <p class='work_card_name'>${el.name}</p>
          <p class='work_card_categori'>${el.categori}</p>
          <div class="work_card_img" data-cursor="card" data-name="view"></div>
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
  { imgGray: "", img: "", name: "김정석", link: "" },
  { imgGray: "", img: "", name: "박서연", link: "" },
  { imgGray: "", img: "", name: "박성빈", link: "" },
  { imgGray: "", img: "", name: "박세민", link: "" },
  { imgGray: "", img: "", name: "서효정", link: "" },
  { imgGray: "", img: "", name: "송화", link: "" },
  { imgGray: "", img: "", name: "신민철", link: "" },
  { imgGray: "", img: "", name: "안경민", link: "" },
  { imgGray: "", img: "", name: "양명현", link: "" },
  { imgGray: "", img: "", name: "양재원", link: "" },
  { imgGray: "", img: "", name: "윤예정", link: "" },
  {
    imgGray: "",
    img: "",
    name: "이윤주",
    link: "../portfolio/leeyoonzoo/index.html",
  },
  { imgGray: "", img: "", name: "이지수", link: "" },
  { imgGray: "", img: "", name: "이홍진", link: "" },
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
