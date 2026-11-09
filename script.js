
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const comments = document.getElementById("comments").value.trim();

    if (!name || !email || !country || !comments) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Your form has been submitted successfully!");
    form.reset();
});
