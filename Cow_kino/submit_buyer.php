<?php
// Include the database connection
include('db_connection.php');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $selected_questions = implode(", ", $_POST['questions']); // Convert array to comma-separated string
    $extra_details = $_POST['extra_details'];

    // SQL query to insert buyer data into the buyer table
    $sql = "INSERT INTO buyer (email, selected_questions, extra_details)
            VALUES ('$email', '$selected_questions', '$extra_details')";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        // Redirect to the query page with a success parameter
        header("Location: query.html?status=success");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
