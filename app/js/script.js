const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector('.header');

btnHamburger.addEventListener("click", () => {
  header.classList.toggle("open");
});
