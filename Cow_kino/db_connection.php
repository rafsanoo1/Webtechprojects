<?php
$servername = "localhost";  // Your server is localhost in XAMPP
$username = "root";         // Default username for XAMPP
$password = "";             // Default password for XAMPP (empty)
$dbname = "cowkino_query";  // Correct database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
