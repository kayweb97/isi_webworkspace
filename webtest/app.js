// code to display and hide sidebar

const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("opensidebar");
const closeBtn = document.getElementById("closebtn");

// function to open sidebar
function opensidebar() {
  overlay.classList.add("active");
  sidebar.classList.add("active");
}

// function to close sidebar

function closesidebar() {
  overlay.classList.remove("active");
  sidebar.classList.remove("active");
}

// event listener for open and close side bar
openBtn.addEventListener("click", opensidebar);
closeBtn.addEventListener("click", closesidebar);

// close side when clicking outside(on the overlay)
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closesidebar();
  }
});

// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

function opentab(element, tabname) {
  // Remove active classes from all tab links and contents
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");
  tabLinks.forEach((link) => link.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));

  // Add active class to the clicked tab and its content
  element.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    const items = typedElement
      .getAttribute("data-typed-items")
      .split(",")
      .map((item) => item.trim());
    new Typed(".typed", {
      strings: items,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });
  }
});

// Lightbox for project images
document.addEventListener("DOMContentLoaded", function () {
  // Create lightbox elements
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.style.cssText = `
    position: fixed; top:0; left:0; width:100vw; height:100vh;
    background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
    z-index: 9999; display: none;
  `;
  const img = document.createElement("img");
  img.style.maxWidth = "90vw";
  img.style.maxHeight = "90vh";
  lightbox.appendChild(img);
  document.body.appendChild(lightbox);

  // Show lightbox on image click
  document
    .querySelectorAll("#projects-section .col-md-3 img")
    .forEach((image) => {
      image.style.cursor = "pointer";
      image.addEventListener("click", function () {
        img.src = this.src;
        lightbox.style.display = "flex";
      });
    });

  // Hide lightbox on click
  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });
});
