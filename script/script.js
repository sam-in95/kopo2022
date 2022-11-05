const nav = document.querySelectorAll("nav ul li");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop > 650 && scrollTop < 5760) {
    nav.forEach((navColor) => {
      navColor.style.color = "#000";
    });
  } else if (scrollTop > 5760 && scrollTop < 8130) {
    nav.forEach((navColor) => {
      navColor.style.color = "#fff";
    });
  } else if (scrollTop > 8130) {
    nav.forEach((navColor) => {
      navColor.style.color = "#000";
    });
  } else {
    nav.forEach((navColor) => {
      navColor.style.color = "#fff";
    });
  }

  if (scrollTop > 930) {
    header.style.backgroundColor = "rgba(238,238,238,0.5)";
    header.style.backdropFilter = "blur(2px)";
  } else {
    header.style.backgroundColor = "rgba(238,238,238,0";
    header.style.backdropFilter = "none";
  }
  console.log(scrollTop);
});

const conSections = document.querySelectorAll("section");

nav.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    conSections[index + 1].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
