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

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         history.replaceState(null, null, `#issue`, ``);
//       }
//     });
//   },
//   { threshold: 0.8 }
// );

// sections.forEach((section) => observer.observe(section));

// const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", () => {
//   sections.forEach((section, index) => {
//     const change = section.getBoundingClientRect();
//     if (
//       change.top <= window.innerHeight / 2 &&
//       change.bottom >= window.innerHeight / 2
//     ) {
//       document.body.style.backgroundColor = section.dataset.color;
//       // Calculate issue number in reverse (8 - index)
//       const issueNumber = sections.length - index;
//       history.replaceState(null, null, `#issue${issueNumber}`);
//     }
//   });
// });

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Get reversed index for issue number
//         const index = Array.from(sections).indexOf(entry.target);
//         const issueNumber = sections.length - index;
//         history.replaceState(null, null, `#issue${issueNumber}`);
//       }
//     });
//   },
//   { threshold: 0.8 }
// );

// sections.forEach((section) => observer.observe(section));

// footer aside#contact {
//   border: 2px solid black;
//   position: fixed;
//   top: 0.7rem;  /* Matches the header img margin-top */
//   right: 50%;
//   transform: translateX(665px); /* Half of the max-width (1330px/2) to align with the container edge */
//   margin-bottom: 0;
// }

// const sections = document.querySelectorAll('.section');

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      history.replaceState(null, null, `/#${section.id}`);
    }
  });
});
