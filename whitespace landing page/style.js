// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (
        !isClickInsideNav &&
        !isClickOnHamburger &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  }
});
// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar Background on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(4, 56, 115, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.backgroundColor = "#043873";
    navbar.style.backdropFilter = "none";
  }
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe sections for fade-in animation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section, .hero");

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });
});

// Button Click Effects
document
  .querySelectorAll(".btn-primary, .btn-outline, .btn-ghost")
  .forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

// Add CSS for ripple effect
const style = document.createElement("style");
style.textContent = `
  .btn-primary, .btn-outline, .btn-login {
      position: relative;
      overflow: hidden;
  }

  .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
  }

  @keyframes ripple-animation {
      to {
          transform: scale(4);
          opacity: 0;
      }
  }
`;
document.head.appendChild(style);

// Form Validation (if you add forms later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Lazy Loading for Images (when you add real images)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener("DOMContentLoaded", lazyLoadImages);

// Pricing Card Hover Effects
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)";
    this.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Inject auto-highlight styles
const styleSheet = document.createElement("style");
styleSheet.textContent = autoHighlightStyles;
document.head.appendChild(styleSheet);

// Initialize enhanced testimonials when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initializeEnhancedTestimonials();
});

// Notification function (if not already defined)
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "6px",
    color: "white",
    fontWeight: "500",
    zIndex: "9999",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
    backgroundColor:
      type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6",
  });

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Scroll to Top Button
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelectorAll(".nav-item > .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth < 1024) {
      e.preventDefault();
      const dropdown = this.nextElementSibling;
      if (dropdown) dropdown.classList.toggle("show");
    }
  });
});

