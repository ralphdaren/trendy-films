/* nav.js — hide on scroll down, show on scroll up (all pages) */
(function () {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    const SHOW_THRESHOLD = 120; // px from top before nav can appear
    let lastY = window.scrollY;

    function update() {
        const currentY = window.scrollY;

        if (currentY < SHOW_THRESHOLD) {
            // Near the top — always hide (avoids overlapping hero content)
            nav.classList.add('nav-hidden');
        } else if (currentY > lastY) {
            // Scrolling down — hide
            nav.classList.add('nav-hidden');
        } else {
            // Scrolling up and past threshold — show
            nav.classList.remove('nav-hidden');
        }

        lastY = currentY;
    }

    // Set initial state
    update();

    window.addEventListener('scroll', update, { passive: true });
})();
