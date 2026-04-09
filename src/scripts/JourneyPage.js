/* JourneyPage.js */

// ── Accordion ──────────────────────────────────────────────────────────────
const accordionItems = document.querySelectorAll('.journey-accordion-item');

document.querySelectorAll('.journey-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const item = trigger.closest('.journey-accordion-item');
        const isOpen = item.classList.contains('is-open');

        // Close all items
        accordionItems.forEach(i => {
            i.classList.remove('is-open');
            i.querySelector('.journey-accordion-trigger').setAttribute('aria-expanded', 'false');
        });

        // Open the clicked one only if it was closed
        if (!isOpen) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
        }
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