// Confirm JS is loaded
console.log("script.js loaded successfully!");

// Scroll reveal effect for hero section
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }
});

// Smooth initial load effect
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(20px)";
  setTimeout(() => {
    hero.style.transition = "all 1s ease-in-out";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 100);
});

// Donate button click handler
document.addEventListener("DOMContentLoaded", () => {
  const donateBtn = document.querySelector(".cta");
  if (donateBtn) {
    donateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Thank you for your support! Every dollar makes a difference.");
    });
  }
});


