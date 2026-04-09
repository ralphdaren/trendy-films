/* nav.js — show at top, hide on scroll down, show on scroll up (all pages) */
(function () {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    const DELTA = 8; // px — ignore micro-jitter smaller than this
    let lastY = window.scrollY;

    function update() {
        const currentY = window.scrollY;
        const delta = currentY - lastY;

        if (currentY <= 10) {
            // At the very top — always show
            nav.classList.remove('nav-hidden');
        } else if (delta > DELTA) {
            // Scrolling down by enough — hide
            nav.classList.add('nav-hidden');
            lastY = currentY;
        } else if (delta < -DELTA) {
            // Scrolling up by enough — show
            nav.classList.remove('nav-hidden');
            lastY = currentY;
        }
        // Ignore tiny jitter — don't update lastY
    }

    // Set initial state
    update();

    window.addEventListener('scroll', update, { passive: true });
})();
