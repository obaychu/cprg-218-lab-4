document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains("active");

            // Close all accordion items
            accordionHeaders.forEach(header => {
                header.parentElement.classList.remove("active");
            });

            // Toggle active state and display content
            if (!isActive) {
                accordionItem.classList.add("active");
            }
        });
    });
});