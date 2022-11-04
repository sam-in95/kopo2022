const nav = document.querySelectorAll("nav ul li");

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
