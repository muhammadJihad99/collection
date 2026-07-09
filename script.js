const reveals = document.querySelectorAll(
  ".reveal, .fade-left, .fade-right, .zoom",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        entry.target.classList.remove("hide");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hide");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

reveals.forEach((el) => observer.observe(el));

document.querySelectorAll(".link-card").forEach((card, index) => {
  card.style.transition = `
opacity .6s ease ${index * 120}ms,
transform .6s ease ${index * 120}ms`;

  observer.observe(card);
});
