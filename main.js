import "./style.css";
const limit = 320;
const opacityLimit = 711;
const image = document.querySelector(".image");
let degree = 40;
window.addEventListener("scroll", () => {
  if (window.scrollY > limit) {
    image.style.transform = `rotateX(${degree}deg)`;
    image.style.opacity = "0";
    return;
  }

  image.style.transform = "rotateX(0deg)";
  image.style.opacity = "1";
});
