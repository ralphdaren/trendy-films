/* JourneyPage.js */

// ── Accordion ──────────────────────────────────────────────────────────────
document.querySelectorAll('.journey-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const item = trigger.closest('.journey-accordion-item');
        const isOpen = item.classList.contains('is-open');

        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
    });
});

// ── Scroll-reveal (mirrors index.js pattern) ───────────────────────────────
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));