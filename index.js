const faqs = document.querySelectorAll(".faq-section");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})