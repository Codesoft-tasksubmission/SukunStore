// // Toggle Password Visibility
// function togglePasswordVisibility() {
//     const passwordInput = document.getElementById('password');
//     const confirmPasswordInput = document.getElementById('confirm-password');
//     const eyeIcon = document.querySelector('.eye-icon');
    
//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         if (confirmPasswordInput) confirmPasswordInput.type = 'text';
//         eyeIcon.textContent = '🙈';
//     } else {
//         passwordInput.type = 'password';
//         if (confirmPasswordInput) confirmPasswordInput.type = 'password';
//         eyeIcon.textContent = '👁️';
//     }
// }

let inputs = document.querySelectorAll("input");
let nameValidation = /[A-Za-z0-9]{6,}$/;
// let emailValidation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function logindata() {
    if ("sauryakapoor1@gmail.com" == inputs[0].value && "saurya11253v" == inputs[1].value)
        return true;
    else {
        alert("Invalid Username or Password");
        return false;
    }
}

// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (confirmPasswordInput) confirmPasswordInput.type = 'text';
        eyeIcon.textContent = '🙈'; // Closed-eye icon
    } else {
        passwordInput.type = 'password';
        if (confirmPasswordInput) confirmPasswordInput.type = 'password';
        eyeIcon.textContent = '👁️'; // Open-eye icon
    }
}

// Signup Form Submission to Google Form
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScyeEqvoX1xEf0NIFpmdBty2RLZU4JyHcK3opmqjy-VgcQsJw/formResponse";

document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Map form data to Google Form field IDs
    const formData = new FormData();
    formData.append("entry.123456789", name);
    formData.append("entry.234567890", email); 
    formData.append("entry.345678901", password); 

    try {
        await fetch(GOOGLE_FORM_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors", // Necessary for Google Forms
        });
        alert("Signup successful!");
        document.getElementById("signup-form").reset();
    } catch (error) {
        alert("Error: Unable to submit data. Please try again.");
    }
});
