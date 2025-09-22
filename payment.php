<?php
// Allow requests from any origin (Change '*' to specific origins if needed)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle CORS Preflight Requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "payment_system";

// Create database connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_name = mysqli_real_escape_string($conn, $_POST['user_name']);
    $payment_method = mysqli_real_escape_string($conn, $_POST['payment_method']);
    $total_amount = mysqli_real_escape_string($conn, $_POST['total_amount']);
    
    if ($payment_method == "card") {
        $cardholder_name = mysqli_real_escape_string($conn, $_POST['cardholder']);
        $card_number = mysqli_real_escape_string($conn, $_POST['card_number']);
        $expiry_date = mysqli_real_escape_string($conn, $_POST['expiry_date']);
        $cvv = mysqli_real_escape_string($conn, $_POST['cvv']);

        $sql = "INSERT INTO payments (user_name, cardholder_name, card_number, expiry_date, cvv, payment_method, total_amount, payment_status) 
                VALUES ('$user_name', '$cardholder_name', '$card_number', '$expiry_date', '$cvv', '$payment_method', '$total_amount', 'Completed')";

    } elseif ($payment_method == "upi") {
        $upi_id = mysqli_real_escape_string($conn, $_POST['upi_id']);

        $sql = "INSERT INTO payments (user_name, upi_id, payment_method, total_amount, payment_status) 
                VALUES ('$user_name', '$upi_id', '$payment_method', '$total_amount', 'Completed')";

    } elseif ($payment_method == "cod") {
        $sql = "INSERT INTO payments (user_name, payment_method, total_amount, payment_status) 
                VALUES ('$user_name', '$payment_method', '$total_amount', 'Pending')";
    }

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error";
    }

    $conn->close();
}
?>
