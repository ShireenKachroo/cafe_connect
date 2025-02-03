<?php
//db config
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cafe_connect"; //our DB name

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//iff form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $user = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];

    // Check if passwords match
    if ($password === $confirmPassword) {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        //to ignore special chars which might hamper sql execution
        $user = mysqli_real_escape_string($conn, $user);
        $email = mysqli_real_escape_string($conn, $email);
        $hashedPassword = mysqli_real_escape_string($conn, $hashedPassword);

        //insert new user
        $sql = "INSERT INTO `users` (`username`, `email`, `password`) VALUES ('$user', '$email', '$password');";

        //check for successful query
        if (mysqli_query($conn, $sql)) {
            echo "Registration successful!";
        }
        else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
    else {
        echo "Passwords do not match!";
    }
}

mysqli_close($conn);
?>
