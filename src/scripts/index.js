/* index.js */
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal-up");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  const nav = document.getElementById("homepage-main-nav");
  const heroSection = document.getElementById("home-section");

  if (nav && heroSection) {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle("nav-hidden", !entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    navObserver.observe(heroSection);
  }
});
