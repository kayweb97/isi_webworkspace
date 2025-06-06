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

// // Rotating text for .txt-rotate
// document.addEventListener("DOMContentLoaded", function () {
//   var elements = document.getElementsByClassName("txt-rotate");
//   for (var i = 0; i < elements.length; i++) {
//     var toRotate = elements[i].getAttribute("data-rotate");
//     var period = elements[i].getAttribute("data-period");
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
// });

// // Rotator constructor
// function TxtRotate(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = "";
//   this.isDeleting = false;
//   this.tick();
// }

// TxtRotate.prototype.tick = function () {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.querySelector(".wrap").textContent = this.txt;

//   var that = this;
//   var delta = 150 - Math.random() * 100;

//   if (this.isDeleting) {
//     delta /= 2;
//   }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }
//   setTimeout(function () {
//     that.tick();
//   }, delta);
// };

// Typing effect for .typed
document.addEventListener("DOMContentLoaded", function () {
  const typedSpan = document.querySelector(".typed");
  if (!typedSpan) return;

  const items = typedSpan.getAttribute("data-typed-items");
  if (!items) return;

  const words = items.split(",").map((w) => w.trim());
  let wordIndex = 0,
    charIndex = 0,
    isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      typedSpan.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      typedSpan.textContent = currentWord.substring(0, charIndex);
    }
    let typeSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
});

document.addEventListener("DOMContentLoaded", function () {
  const mouseIcon = document.querySelector(".mouse-icon");
  if (mouseIcon) {
    mouseIcon.addEventListener("click", function (e) {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
// Scroll to Top Button functionality
document.addEventListener("DOMContentLoaded", function () {
  // Scroll to Top Button
  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
