// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Initialize EmailJS with your public key
  emailjs.init("SiLCDwSmCcN1KSSmY");

  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Optional: Disable button to prevent double submissions
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.sendForm('service_gbjq4f3', 'template_ejhbt9y', this)
      .then(function () {
        alert("✅ Thank you, " + document.getElementById('name').value + "! Your message was sent successfully.");
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }, function (error) {
        console.error("❌ Failed to send message:", error);
        alert("❌ Oops! Something went wrong. Please try again later.");
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      });
  });
});