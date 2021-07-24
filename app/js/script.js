const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  header.classList.toggle("open");
  document.body.classList.toggle("noscroll");
  if (header.classList.contains("open")) {
    fadeInElems(fadeElems);
  } else {
    fadeOutElems(fadeElems);
  }
});

function fadeInElems(elems) {
  elems.forEach((elem) => {
    elem.classList.remove("fade-out");
    elem.classList.add("fade-in");
  });
}

function fadeOutElems(elems) {
  elems.forEach((elem) => {
    elem.classList.remove("fade-in");
    elem.classList.add("fade-out");
  });
}
