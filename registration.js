document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const messageElem = document.getElementById('message');
    messageElem.textContent = ''; // Clear previous messages

    // Basic validation
    if (password !== confirmPassword) {
        messageElem.textContent = 'Passwords do not match!';
        return;
    }

    // Here you can add code to handle successful registration
    alert(`Registration successful for ${username}!`);
    
    // Reset form
    document.getElementById('registration-form').reset();
});