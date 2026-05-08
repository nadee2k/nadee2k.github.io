// script.js

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(2, 6, 23, 0.98)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  }
});

console.log("Portfolio Loaded Successfully");