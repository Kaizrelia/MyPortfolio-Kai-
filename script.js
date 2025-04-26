document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact-form');
    console.log(contactForm); // Add this line!!

    if (!contactForm) {
        console.error("Contact form not found!");
        return;
    }

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop the page from reloading

        emailjs.sendForm('service_fwuepoa', 'template_kcy7m2d', contactForm)
            .then(() => {
                alert('Message sent successfully!');
                contactForm.reset(); // Clears the form
            }, (error) => {
                console.log('FAILED...', error);
                alert('Something went wrong. Please try again.');
            });
    });
});