<?php
//err handling -->remove later
error_reporting(E_ALL);
ini_set('display_errors', 1);

//db config
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cafe_connect";


$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//is form submitted?
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    //ensure to ignore special chars which might hamper sql query
    $name = mysqli_real_escape_string($conn, $name);
    $email = mysqli_real_escape_string($conn, $email);
    $message = mysqli_real_escape_string($conn, $message);

    // Insert feedback into the database
    $sql = "INSERT INTO `feedback` (`name`, `email`, `feedback`) VALUES ('$name', '$email', '$message');";

    //check for successful query
    if (mysqli_query($conn, $sql)) {
        echo "Feedback submitted successfully!";
    } else {
        echo "Error: " . mysqli_error($conn); // Display any errors during the query execution
    }
}

mysqli_close($conn);
?>
