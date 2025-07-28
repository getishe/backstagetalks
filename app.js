// const sections = document.querySelectorAll("section");

// // Add a scroll event listener to the window object
// window.addEventListener("scroll", () => {
//   // Loop through each section element in the 'sections' array/NodeList
//   sections.forEach((section) => {
//     // Get the current position and dimensions of the section relative to the viewport
//     const change = section.getBoundingClientRect();

//     // Check if the section is in the "active" viewing area:
//     // 1. Top of section is above the middle of the viewport (window.innerHeight / 2)
//     // 2. Bottom of section is below the middle of the viewport
//     if (
//       change.top <= window.innerHeight / 2 &&
//       change.bottom >= window.innerHeight / 2
//     ) {
//       // When section is in view, change the body background color
//       // using the color value stored in the section's data-color attribute
//       document.body.style.backgroundColor = section.dataset.color;
//     }
//   });
// });

// Select all <section> elements on the page
const sections = document.querySelectorAll("section");

// Select all <a> elements with class 'buy' or 'store'
const fontColor = document.querySelectorAll("a.buy, a.store");

// Helper function to check if a section is centered in the viewport
function isSectionCentered(section) {
  const rect = section.getBoundingClientRect();
  const middle = window.innerHeight / 2;
  // Returns true if the section's top is above the middle and bottom is below the middle
  return rect.top <= middle && rect.bottom >= middle;
}

function isSectionCenteredHash(section) {
  const make = section.getBoundingClientRect();
  const middle = window.innerHeight / 2;
  // return statement

  return make.top >= 0 && make.top <= middle;
}
// function isSectionCenteredHash(section) {
//   const rect = section.getBoundingClientRect();
//   const middle = window.innerHeight / 2;

//   return rect.top >= 0 && rect.top <= middle;
// }
// Create an IntersectionObserver to watch when sections enter/leave the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // If the section is intersecting and centered, change background color
      if (entry.isIntersecting && isSectionCentered(entry.target)) {
        document.body.style.backgroundColor = entry.target.dataset.color;
        // If the section is 'issue-6', change font color for specific links
        if (entry.target.id === "issue-6") {
          fontColor.forEach((el) => {
            el.style.color = "#e568ac";
          });
        }
      } else if (entry.target.id === "issue-6") {
        // If 'issue-6' is not centered, reset font color
        fontColor.forEach((el) => {
          el.style.color = "";
        });
      }

      // if (entry.isIntersecting && isSectionCenteredHash(entry.target)) {
      //   // Update the URL hash when the section is intersect
      //   history.replaceState(null, null, `#${entry.target.id}`);
      // }
    });
  },
  {
    root: null, // Use viewport as root
    threshold: [0, 0.1, 0.5, 0.9, 1.0], // Trigger at multiple visibility levels
  }
);

// Observe each section for intersection changes
sections.forEach((section) => observer.observe(section));

// const sectionsix = document.querySelector("section#issue-6");
// const fontColor = document.querySelectorAll("a.buy, a.store");
// window.addEventListener("scroll", () => {
//   if (!sectionsix) return;
//   const changea = sectionsix.getBoundingClientRect();
//   if (
//     changea.top <= window.innerHeight / 2 &&
//     changea.bottom >= window.innerHeight / 2
//   ) {
//     fontColor.forEach((el) => {
//       el.style.color = "#e568ac";
//     });
//   } else {
//     fontColor.forEach((el) => {
//       el.style.color = "";
//     });
//   }
// });

//Listen for scroll events to update the URL hash based on the section in view
// window.addEventListener("scroll", () => {
//   sections.forEach((section) => {
//     const rect = section.getBoundingClientRect();
//     // If the section's top is in the upper half of the viewport, update the URL hash
//     if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
//       history.replaceState(null, null, `/#${section.id}`);
//     }
//   });
// });

// Create a new IntersectionObserver to update the URL hash based on the section in view.
// // This is more performant than using a scroll event listener.
// Use IntersectionObserver for hash updates
const hashObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        history.replaceState(null, null, `/#${entry.target.id}`);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -50% 0px", // Top half of viewport
    threshold: 0,
  }
);

sections.forEach((section) => hashObserver.observe(section));

// ...existing code...
