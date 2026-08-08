const loginButton = document.querySelector('.login-button');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const errorMessage = document.querySelector('.error-message');
const testEmail = "test@example.com";
const testPassword = "1234";

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email=== "") {
        errorMessage.textContent = "* Please enter your Email.";
    }

    else if (password=== ""){
        errorMessage.textContent = "* Please enter your Password.";
    }

    else if (email === testEmail && password === testPassword) {
        window.location.href = "dashboard.html";
    }

    else {
        errorMessage.textContent = "Incorrect email or password.";
    }

});