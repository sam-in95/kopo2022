const cursorParent = document.getElementById("mouse_cursor");
const cursorChild = cursorParent.children[0];

let stage = "";
let scale = 1;
let carouselDirection = "";
let cursorX = 0;
let cursorY = 0;

const mouseMove = (e) => {
  cursorX = e.pageX - cursorParent.offsetWidth / 2;
  cursorY = e.pageY - cursorParent.offsetHeight / 2;
  cursorParent.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

  switch (e.target.getAttribute("data-cursor")) {
    case "card":
      cursorChild.setAttribute("data-name", e.target.getAttribute("data-name"));
      if (stage === "card") return;
      scale = 3;
      stage = "card";
      cursorParent.className = "cursor_text_mode";
      break;
    case "categori":
      cursorChild.setAttribute("data-name", e.target.getAttribute("data-name"));
      if (stage === "categori") return;
      scale = 3;
      stage = "categori";
      cursorParent.className = "cursor_text_mode";
      break;
    default:
      if (stage === " ") return;
      scale = 1;
      stage = " ";
      cursorParent.className = "";
      break;
  }
  cursorChild.style.setProperty("--cursor-scale", scale);
};

const mouseDown = (e) => {
  scale *= 0.8;
  cursorChild.style.setProperty("--cursor-scale", scale);
};

const mouseUp = (e) => {
  scale *= 1.25;
  cursorChild.style.setProperty("--cursor-scale", scale);
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("mouseup", mouseUp);
window.addEventListener("mousedown", mouseDown);
