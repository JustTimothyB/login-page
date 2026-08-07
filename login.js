const loginButton = document.querySelector('.login-button');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const errorMessage = document.querySelector('.error-message')

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

    else {
    errorMessage.textContent = "Login Successful";
    }

    if (email !== "" && password !==""){
        console.log("There is an email");

}



});