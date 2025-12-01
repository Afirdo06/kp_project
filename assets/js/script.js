/* ================================
   SCRIPT.JS – Interactivity LSP
   ================================ */

/* 1. FAQ Accordion */
document.querySelectorAll(".accordion-title").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    const content = item.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

/* 2. Fade-in animation triggers */
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));

/* 3. Show / Hide Password (Login Page) */
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

if (togglePassword && passwordField) {
  togglePassword.addEventListener("click", () => {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    togglePassword.innerText = type === "password" ? "👁️" : "🙈";
  });
}

/* 4. Mobile Navigation */
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
}
