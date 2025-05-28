// const menu = document.querySelector("#menu");
// const nav = document.querySelector(".links");

// menu.onclick = () => {
//   menu.classList.toggle("bx-x");
//   nav.classList.toggle("active");
// };
// (function () {
//   "use strict";
// })
/**
 * Header toggle
 */
// const headerToggleBtn = document.querySelector(".header-toggle");

// function headerToggle() {
//   document.querySelector("#header").classList.toggle("header-show");
//   headerToggleBtn.classList.toggle("bi-list");
//   headerToggleBtn.classList.toggle("bi-x");
// }
// headerToggleBtn.addEventListener("click", headerToggle);

// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const navMenu = document.querySelector(".navmenu ul");
//   menuToggle.addEventListener("click", function () {
//     navMenu.classList.toggle("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: ["Designer", "Developer", "Freelancer", "Creator"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
});
