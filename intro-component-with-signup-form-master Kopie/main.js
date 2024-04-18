function validateAndSubmit() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0) {
        alert('Please fill in all fields');
    }
    let emailInput = document.getElementById('email');

    if (emailInput.checkValidity() && emailInput.value.trim() !== '') {
        alert("Account created.");
        location.reload();
    } else {
        alert('Please enter a valid email address.');
    }
}