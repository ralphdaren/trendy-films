/* Main JavaScript File */
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Reveal-up animations
  // =========================
  const revealElements = document.querySelectorAll(".reveal-up");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  const motto = document.querySelector("#homepage-business-motto .homepage-h1");
    if (motto) {
      motto.classList.add("is-visible");
    }

  revealElements.forEach((el) => revealObserver.observe(el));

  // =========================
  // 2) Hide nav on 3rd section
  // =========================
  const nav = document.getElementById("homepage-main-nav");
  const heroSection = document.getElementById("home-section"); // add this id in HTML

  if (nav && heroSection) {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        // when hero is NOT visible, hide nav (and keep it hidden)
        nav.classList.toggle("nav-hidden", !entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    navObserver.observe(heroSection);
  }
});
