// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger
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

//TESTIMONIAL HOVER EFFECTS
document.querySelectorAll(".testimonial-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
    this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Console log for debugging
console.log("Whitespace landing page loaded successfully!");

// Enhanced testimonials functionality
function initializeEnhancedTestimonials() {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const testimonialsGrid = document.querySelector(".testimonials-grid");

  // Initialize intersection observer for testimonials
  const testimonialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 150);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all testimonial cards
  testimonialCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    testimonialObserver.observe(card);
  });

  // Add enhanced hover effects
  testimonialCards.forEach((card, index) => {
    // Mouse enter effect
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";

      // Add subtle glow effect
      if (this.classList.contains("testimonial-featured")) {
        this.style.boxShadow = "0 25px 50px rgba(37, 99, 235, 0.4)";
      } else {
        this.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.2)";
      }

      // Animate avatar
      const avatar = this.querySelector(".author-avatar");
      if (avatar) {
        avatar.style.transform = "scale(1.1) rotate(5deg)";
      }
    });

    // Mouse leave effect
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";

      if (this.classList.contains("testimonial-featured")) {
        this.style.boxShadow = "0 20px 40px rgba(37, 99, 235, 0.2)";
      } else {
        this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
      }

      // Reset avatar
      const avatar = this.querySelector(".author-avatar");
      if (avatar) {
        avatar.style.transform = "scale(1) rotate(0deg)";
      }
    });

    // Click effect for testimonial cards
    card.addEventListener("click", function () {
      // Add click animation
      this.style.transform = "translateY(-8px) scale(0.98)";

      setTimeout(() => {
        this.style.transform = "translateY(-8px) scale(1.02)";
      }, 150);

      // Track testimonial interaction
      trackTestimonialInteraction(index);
    });

    // Add keyboard navigation
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Auto-rotate testimonials highlight
  let currentHighlight = 0;
  const autoRotateInterval = setInterval(() => {
    // Remove previous highlight
    testimonialCards.forEach((card) => {
      card.classList.remove("auto-highlighted");
    });

    // Add highlight to current card
    if (testimonialCards[currentHighlight]) {
      testimonialCards[currentHighlight].classList.add("auto-highlighted");

      // Scroll into view if needed
      // testimonialCards[currentHighlight].scrollIntoView({
      //   behavior: "smooth",
      //   block: "nearest",
      //   inline: "center",
      // });
    }

    currentHighlight = (currentHighlight + 1) % testimonialCards.length;
  }, 5000);

  // Pause auto-rotation on hover
  testimonialsGrid.addEventListener("mouseenter", () => {
    clearInterval(autoRotateInterval);
  });

  // Add loading state simulation
  function simulateLoading() {
    testimonialCards.forEach((card, index) => {
      card.classList.add("loading");

      setTimeout(() => {
        card.classList.remove("loading");
      }, 1000 + index * 200);
    });
  }

  // Initialize testimonials with loading effect
  simulateLoading();

  // Add testimonial sharing functionality
  // testimonialCards.forEach((card, index) => {
  //   const shareButton = document.createElement("button");
  //   shareButton.className = "testimonial-share-btn";
  //   shareButton.innerHTML = "📤";
  //   shareButton.title = "Share this testimonial";
  //   shareButton.style.cssText = `
  //       position: absolute;
  //       top: 1rem;
  //       right: 1rem;
  //       background: rgba(255, 255, 255, 0.9);
  //       border: none;
  //       border-radius: 50%;
  //       width: 40px;
  //       height: 40px;
  //       cursor: pointer;
  //       opacity: 0;
  //       transition: all 0.3s ease;
  //       font-size: 1rem;
  //   `;

  //   card.style.position = "relative";
  //   card.appendChild(shareButton);

  // Show share button on hover
  // card.addEventListener("mouseenter", () => {
  //   shareButton.style.opacity = "1";
  // });

  // card.addEventListener("mouseleave", () => {
  //   shareButton.style.opacity = "0";
  // });

  // Share functionality
  //     shareButton.addEventListener("click", (e) => {
  //       e.stopPropagation();
  //       shareTestimonial(index);
  //     });
  //   });
}

// Track testimonial interactions
// function trackTestimonialInteraction(index) {
//   const testimonialCard = document.querySelectorAll(".testimonial-card")[index];
//   const authorName = testimonialCard.querySelector(".author-name")?.textContent;
//   const isFeatured = testimonialCard.classList.contains("testimonial-featured");

// Analytics tracking
//   if (typeof gtag !== "undefined") {
//     gtag("event", "testimonial_interaction", {
//       testimonial_index: index,
//       author_name: authorName,
//       is_featured: isFeatured,
//     });
//   }

//   console.log("Testimonial interaction tracked:", {
//     index,
//     authorName,
//     isFeatured,
//   });
// }

// Share testimonial functionality
// function shareTestimonial(index) {
//   const testimonialCard = document.querySelectorAll(".testimonial-card")[index];
//   const testimonialText =
//     testimonialCard.querySelector(".testimonial-text")?.textContent;
//   const authorName = testimonialCard.querySelector(".author-name")?.textContent;

//   const shareData = {
//     title: "Customer Testimonial - Whitespace",
//     text: `"${testimonialText}" - ${authorName}`,
//     url: window.location.href,
//   };

// if (navigator.share) {
//   navigator.share(shareData).catch(console.error);
// } else {
// Fallback: copy to clipboard
//     const textToCopy = `${shareData.text}\n\n${shareData.url}`;
//     navigator.clipboard
//       .writeText(textToCopy)
//       .then(() => {
//         showNotification("Testimonial copied to clipboard!", "success");
//       })
//       .catch(() => {
//         showNotification("Failed to copy testimonial", "error");
//       });
//   }

//   trackTestimonialShare(index);
// }

// Track testimonial shares
// function trackTestimonialShare(index) {
//   if (typeof gtag !== "undefined") {
//     gtag("event", "testimonial_share", {
//       testimonial_index: index,
//     });
//   }
// }

// Add CSS for auto-highlighted testimonials
const autoHighlightStyles = `
  .testimonial-card.auto-highlighted {
      transform: translateY(-5px) scale(1.02) !important;
      box-shadow: 0 25px 50px rgba(37, 99, 235, 0.3) !important;
      border: 2px solid #fbbf24;
  }
  
  .testimonial-card.auto-highlighted:not(.testimonial-featured) {
      box-shadow: 0 25px 50px rgba(251, 191, 36, 0.3) !important;
  }
`;

// Inject auto-highlight styles
const styleSheet = document.createElement("style");
styleSheet.textContent = autoHighlightStyles;
document.head.appendChild(styleSheet);

// Initialize enhanced testimonials when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initializeEnhancedTestimonials();
});

// Notification function (if not already defined)
// function showNotification(message, type = "info") {
//   const notification = document.createElement("div");
//   notification.className = `notification notification-${type}`;
//   notification.textContent = message;

//   Object.assign(notification.style, {
//     position: "fixed",
//     top: "20px",
//     right: "20px",
//     padding: "1rem 1.5rem",
//     borderRadius: "6px",
//     color: "white",
//     fontWeight: "500",
//     zIndex: "9999",
//     transform: "translateX(100%)",
//     transition: "transform 0.3s ease",
//     backgroundColor:
//       type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6",
//   });

//   document.body.appendChild(notification);

//   setTimeout(() => {
//     notification.style.transform = "translateX(0)";
//   }, 100);

//   setTimeout(() => {
//     notification.style.transform = "translateX(100%)";
//     setTimeout(() => {
//       if (document.body.contains(notification)) {
//         document.body.removeChild(notification);
//       }
//     }, 300);
//   }, 3000);
// }
