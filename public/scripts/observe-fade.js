const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("on");
      }
    }),
  { threshold: 0.08 }
);

document.querySelectorAll(".fade").forEach((el) => io.observe(el));
