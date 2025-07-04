// Wait until the page is fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

// Typing Text Animation
const text = "Precision in Every Move | Engineering That Lasts";
let i = 0;
let typingElement = document.querySelector(".typing-text");

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typingElement.innerHTML = ""; // clear on reload
  typeWriter();
});

// Optional: Scroll Fade-in Animation (expandable)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".card, .content-card, .gallery-grid img, .contact-card").forEach(el => {
  observer.observe(el);
});
