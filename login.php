<?php
//db conn
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cafe_connect";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

session_start(); // Creates a session

// Form submitted?
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputUsername = $_POST['username'];
    $inputPassword = $_POST['password'];

    $inputUsername = mysqli_real_escape_string($conn, $inputUsername); //escape sp chars which might hamper sql query

    // Check if username exists in db
    $sql = "SELECT * FROM users WHERE username = '$inputUsername'";
    $result = mysqli_query($conn, $sql);

    // Check if user exists
    if (mysqli_num_rows($result) > 0) {
        // Fetch user data
        $user = mysqli_fetch_assoc($result);

        // Verify password using password_hash()
        if (password_verify($inputPassword, $user['password'])) {
            // Password is correct, login successful
            $_SESSION['username'] = $user['username'];  // Store username in session
            header("Location: homepage.php");  // Redirect to homepage
            exit();
        } else {
            // Incorrect password
            $error = "Invalid username or password.";
        }
    }
	else {
        // Username doesn't exist
        $error = "Invalid username or password.";
    }
}
?>