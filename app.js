const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const change = section.getBoundingClientRect();
    if (
      change.top <= window.innerHeight / 2 &&
      change.bottom >= window.innerHeight / 2
    ) {
      document.body.style.backgroundColor = section.dataset.color;
    }
  });
});
