// script.js

const navbar = document.querySelector(".navbar");
const scrolledClass = "navbar--scrolled";

let ticking = false;

function syncNavbar() {
  if (!navbar) return;
  navbar.classList.toggle(scrolledClass, window.scrollY > 50);
  ticking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(syncNavbar);
  },
  { passive: true }
);

syncNavbar();