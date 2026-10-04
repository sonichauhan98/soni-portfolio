// ===== CONTACT FORM =====

const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    contactForm.reset();

});
