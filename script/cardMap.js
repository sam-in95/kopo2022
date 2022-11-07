let workArray = [
  { img: "", name: "1번", categori: "UX/UI" },
  { img: "", name: "2번", categori: "WEB" },
  { img: "", name: "3번", categori: "Mobile" },
  { img: "", name: "4번", categori: "Illustration" },
  { img: "", name: "5번", categori: "Marketing" },
  { img: "", name: "6번", categori: "Branding" },
  { img: "", name: "7번", categori: "UX/UI" },
  { img: "", name: "8번", categori: "WEB" },
  { img: "", name: "9번", categori: "Mobile" },
  { img: "", name: "10번", categori: "Illustration" },
  { img: "", name: "11번", categori: "Marketing" },
  { img: "", name: "12번", categori: "Branding" },
  { img: "", name: "13번", categori: "UX/UI" },
  { img: "", name: "14번", categori: "WEB" },
  { img: "", name: "15번", categori: "Mobile" },
  { img: "", name: "16번", categori: "Illustration" },
  { img: "", name: "17번", categori: "Marketing" },
  { img: "", name: "18번", categori: "Branding" },
  { img: "", name: "19번", categori: "Branding" },
  { img: "", name: "20번", categori: "Branding" },
];

const workCardWrap = document.querySelector(".work_card_wrap");
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

const workBtn = document.querySelectorAll(".work_btn");
workBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const workCardFilter = workArray.filter((el) => {
      return el.categori === e.target.innerText;
    });

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
  });
});

let designerArray = [
  { imgGray: "", img: "", name: "강우성" },
  { imgGray: "", img: "", name: "공지웅" },
  { imgGray: "", img: "", name: "김가람" },
  { imgGray: "", img: "", name: "김영준" },
  { imgGray: "", img: "", name: "김은주" },
  { imgGray: "", img: "", name: "김정석" },
  { imgGray: "", img: "", name: "박서연" },
  { imgGray: "", img: "", name: "박성빈" },
];

const designerWrap = document.querySelector(".designer_wrap");
designerWrap.innerHTML = `
${designerArray
  .map((el) => {
    return `
    <div class="designer_card">
      <div class="designer_img"></div>
      <div class="designer_name">${el.name}</div>
    </div>
  `;
  })
  .join("")}
`;

const designerImg = document.querySelectorAll(".designer_img");
designerImg.forEach((img, index) => {
  img.style.background = `url(../images/person_${index + 1}.png)`;
  img.style.backgroundSize = "501px";
  img.style.backgroundPosition = "-81px";

  img.addEventListener("mouseenter", () => {
    img.style.background = `url(../images/person_${index + 1}_hover.png)`;
    img.style.backgroundSize = "501px";
    img.style.backgroundPosition = "-81px";
  });
  img.addEventListener("mouseleave", () => {
    img.style.background = `url(../images/person_${index + 1}.png)`;
    img.style.backgroundSize = "501px";
    img.style.backgroundPosition = "-81px";
  });
});
