<?php
session_start();

$firstname = $_POST['firstname'];
$email = $_POST['email'];
$password = $_POST['password'];

$conn = new mysqli('localhost', 'root', '', 'signup');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "<script>
            alert('Account already exists. Please log in.');
            window.location.href = 'login.html';
        </script>";
    } else {
        $stmt = $conn->prepare("INSERT INTO users (firstname, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $firstname, $email, $password);
        $stmt->execute();

        $_SESSION['email'] = $email;
        $_SESSION['firstname'] = $firstname;

        echo "<script>
            alert('Registration Successful!');
            window.location.href = '../index.php';
        </script>";
    }

    $stmt->close();
    $conn->close();
}
?>
