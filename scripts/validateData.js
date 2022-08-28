const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('error');
const submitButton = document.getElementById('createAccountButton');

submitButton.addEventListener('click', (event) => {
    if(password.value !== confirmPassword.value) {
        event.preventDefault();
        password.setCustomValidity('Please make sure your passwords match');
        password.reportValidity();
        errorMessage.style.display = 'block';
    } else {
        password.setCustomValidity('');
        errorMessage.style.display = 'none';
    }
});