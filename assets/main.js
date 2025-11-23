// Sticky nav shadow on scroll + active section highlight

const nav = document.getElementById("nav");
const links = document.querySelectorAll(".nav-links a[data-section]");
const sections = [...links].map(a => document.getElementById(a.dataset.section));

// Shadow when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 8) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// Active link highlight using IntersectionObserver
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-links a[data-section="${id}"]`);
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        if (link) link.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach(sec => sec && obs.observe(sec));
