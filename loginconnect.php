<?php
session_start();

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
        $row = $result->fetch_assoc();
        if ($password === $row['password']) {
            $_SESSION['email'] = $row['email'];
            $_SESSION['firstname'] = $row['firstname'];
            $_SESSION['role'] = $row['role'];

            if ($row['role'] === 'admin') {
                echo "<script>
                    alert('Admin Login Successful!');
                    window.location.href = 'admin_dashboard.php';
                </script>";
            } else {
                echo "<script>
                    alert('Login Successful!');
                    window.location.href = 'index.php';
                </script>";
            }
        } else {
            echo "<script>
                alert('Incorrect password.');
                window.location.href = 'login.html';
            </script>";
        }
    } else {
        echo "<script>
            alert('No account found. Please sign up.');
            window.location.href = 'signup.html';
        </script>";
    }

    $stmt->close();
    $conn->close();
}
?>
