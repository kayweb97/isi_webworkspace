var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var navlinks = document.getElementById("nav-links");
function openmenu() {
  navlinks.style.right = "0";
}
function closemenu() {
  navlinks.style.right = "-200px";
}

const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: ["Designer", "Developer", "Freelancer", "Creator"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
});
