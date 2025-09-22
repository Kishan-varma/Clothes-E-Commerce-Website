const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const retype_password_input = document.getElementById('retype-password-input');
const error_message = document.getElementById('error-message');

// This event listener works when the user submits the form (click signup button)
form.addEventListener('submit', (e) => {
    let errors = [];
    if (firstname_input) {
        // If we have a firstname input, then we are in the signup
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, retype_password_input.value);
    } else {
        // If we don't have firstname input, then we are in the login 
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    if (errors.length > 0) {
        e.preventDefault(); // Prevent form submission if there are errors
        error_message.innerText = errors.join(". "); // Display the errors
    }
});

function getSignupFormErrors(firstname, email, password, retypepassword) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== retypepassword) {
        errors.push('Password does not match');
        password_input.parentElement.classList.add('incorrect');
        retype_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];
    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}

const allinputs = [firstname_input, email_input, password_input, retype_password_input].filter(input => input != null);
allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = ''; // Clear the error message
        }
    });
});






