document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Dummy credentials (You can replace this with actual authentication logic)
    const validUsername = "user123";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Successful login
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login Successful!";
        // Redirect to the cafe portal or another page
        window.location.href = "dashboard.html"; // Replace with actual dashboard page URL
    } else {
        // Invalid login attempt
        errorMessage.style.color = "red";
        errorMessage.textContent = "Invalid username or password.";
    }
});
