const sections = document.querySelectorAll("section");

// Add a scroll event listener to the window object
window.addEventListener("scroll", () => {
  // Loop through each section element in the 'sections' array/NodeList
  sections.forEach((section) => {
    // Get the current position and dimensions of the section relative to the viewport
    const change = section.getBoundingClientRect();

    // Check if the section is in the "active" viewing area:
    // 1. Top of section is above the middle of the viewport (window.innerHeight / 2)
    // 2. Bottom of section is below the middle of the viewport
    if (
      change.top <= window.innerHeight / 2 &&
      change.bottom >= window.innerHeight / 2
    ) {
      // When section is in view, change the body background color
      // using the color value stored in the section's data-color attribute
      document.body.style.backgroundColor = section.dataset.color;
    }
  });
});

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      history.replaceState(null, null, `/#${section.id}`);
    }
  });
});
