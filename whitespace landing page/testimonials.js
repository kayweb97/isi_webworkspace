// Testimonials data
const testimonials = [
  {
    text: "Booking was a breeze! From choosing my destination to arriving at the airport, everything was smooth and stress-free. Highly recommend!",
    author: "Mike Taylor",
    location: "Lahore, Pakistan",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "Amazing service and incredible attention to detail. The trip exceeded all my expectations and the booking process was seamless.",
    author: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "Professional, reliable, and affordable. I've used this service multiple times and it never disappoints. Five stars!",
    author: "Ahmed Hassan",
    location: "Dubai, UAE",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

class TestimonialSlider {
  constructor() {
    this.currentIndex = 0;
    this.isAnimating = false;
    this.autoPlayInterval = null;

    this.init();
  }

  init() {
    this.bindEvents();
    this.startAutoPlay();
  }

  bindEvents() {
    // Navigation dots
    const dots = document.querySelectorAll(".nav-dot");
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Arrow navigation
    const prevBtn = document.querySelector(".nav-arrow.prev");
    const nextBtn = document.querySelector(".nav-arrow.next");

    prevBtn.addEventListener("click", () => this.prevSlide());
    nextBtn.addEventListener("click", () => this.nextSlide());

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") this.prevSlide();
      if (e.key === "ArrowDown") this.nextSlide();
    });

    // Pause auto-play on hover
    const testimonialCard = document.querySelector(".testimonial-card");
    testimonialCard.addEventListener("mouseenter", () => this.pauseAutoPlay());
    testimonialCard.addEventListener("mouseleave", () => this.startAutoPlay());
  }

  goToSlide(index) {
    if (this.isAnimating || index === this.currentIndex) return;

    this.isAnimating = true;
    this.currentIndex = index;
    this.updateTestimonial();
    this.updateDots();

    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % testimonials.length;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex =
      (this.currentIndex - 1 + testimonials.length) % testimonials.length;
    this.goToSlide(prevIndex);
  }

  updateTestimonial() {
    const content = document.querySelector(".testimonial-content");
    const testimonialText = document.querySelector(".testimonial-text");
    const authorName = document.querySelector(".author-info h4");
    const authorLocation = document.querySelector(".author-info p");
    const authorAvatar = document.querySelector(".author-avatar img");

    // Fade out
    content.classList.add("fade-out");

    setTimeout(() => {
      // Update content
      const current = testimonials[this.currentIndex];
      testimonialText.textContent = current.text;
      authorName.textContent = current.author;
      authorLocation.textContent = current.location;
      authorAvatar.src = current.avatar;
      authorAvatar.alt = current.author;

      // Fade in
      content.classList.remove("fade-out");
      content.classList.add("fade-in");

      setTimeout(() => {
        content.classList.remove("fade-in");
      }, 500);
    }, 300);
  }

  updateDots() {
    const dots = document.querySelectorAll(".nav-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });
  }

  startAutoPlay() {
    this.pauseAutoPlay(); // Clear any existing interval
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Initialize the slider when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new TestimonialSlider();
});
