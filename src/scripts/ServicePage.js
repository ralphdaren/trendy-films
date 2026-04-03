/* Service Page */
document.addEventListener("DOMContentLoaded", () =>
    {
        document.querySelectorAll(".service-accordion-header").forEach((header) =>
        {
            header.addEventListener("click", () =>
            {
                const item = header.parentElement
                item.classList.toggle("open")
            })
        })
    })
