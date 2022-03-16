const ul = document.querySelector("ul");
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
let images = [...document.querySelectorAll('.img')];

toggle.addEventListener("click", (e) => {
  ul.classList.toggle("reveal");
  e.stopPropagation();
});


images.forEach((img, idx) => {
  img.style.backgroundImage = `url(img${idx + 1}.jfif)`;
});