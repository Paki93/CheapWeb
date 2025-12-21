

// garage
/*
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = "Thank you! We will contact you soon.";
    formMessage.style.color = "green";
    this.reset();
});*/

// form script
 // Initialize EmailJS (REPLACE with your real public key)
 (function () {
    emailjs.init("XdTALZT0HqT-I9G9-"); // 🔥 Replace with your EmailJS Public Key
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const templateParams = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        website_type: document.getElementById("website-type").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
      };

      emailjs
        .send("service_8ibg1aq", "template_1k31g6r", templateParams)
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Your request has been submitted successfully!");
            form.reset();
          },
          function (error) {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again.");
          }
        );
    });
  });

// cookies
  document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");
  
    if (!banner || !acceptBtn || !rejectBtn) return;
    const choice = localStorage.getItem("cookieConsent");
  
    if (choice) {
      banner.classList.add("cookie-hidden");
    }
  
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      banner.classList.add("cookie-hidden");
    });
  
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected");
      banner.classList.add("cookie-hidden");
    });
  });
  
