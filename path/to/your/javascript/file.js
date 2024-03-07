document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains("active");


            accordionHeaders.forEach(header => {
                header.parentElement.classList.remove("active");
            });

            
            if (!isActive) {
                accordionItem.classList.add("active");
            }
        });
    });
});

