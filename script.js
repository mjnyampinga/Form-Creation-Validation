document.addEventListener("DOMContentLoaded", function () {

    // FORM SELECTION
    const form = document.getElementById("registration-form");

    // FEEDBACK DIV SELECTION
    const feedbackDiv = document.getElementById("form-feedback");

    // FORM SUBMIT EVENT
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // RETRIEVE USER INPUTS
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // VALIDATION VARIABLES
        let isValid = true;
        let messages = [];

        // USERNAME VALIDATION
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // EMAIL VALIDATION
        if (!(email.includes("@") && email.includes("."))) {
            isValid = false;
            messages.push("Email must contain '@' and '.' characters.");
        }

        // PASSWORD VALIDATION
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // DISPLAY FEEDBACK
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });

});
