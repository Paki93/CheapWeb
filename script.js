document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = "Thank you! We will contact you soon.";
    formMessage.style.color = "green";
    this.reset();
});


