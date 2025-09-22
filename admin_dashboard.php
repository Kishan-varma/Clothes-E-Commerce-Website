<?php
session_start();
if (!isset($_SESSION['email']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.html');
    exit();
}

$conn = new mysqli('localhost', 'root', '', 'signup');

// DELETE PRODUCT
if (isset($_GET['delete'])) {
    $deleteId = $_GET['delete'];

    // Get the image path and product name before deletion
    $res = $conn->query("SELECT * FROM products WHERE id=$deleteId");
    $row = $res->fetch_assoc();
    $imagePath = $row['image'];
    $name = $row['name'];
    $description = $row['description'];
    $price = $row['price'];

    // Delete from database
    $conn->query("DELETE FROM products WHERE id=$deleteId");

    // Delete image from server
    if (file_exists($imagePath)) {
        unlink($imagePath);
    }

    // Remove product card from products.html
    $filePath = "products.html";
    if (file_exists($filePath)) {
        $htmlContent = file_get_contents($filePath);
        $pattern = "/<!-- product-$deleteId-start -->(.*?)<!-- product-$deleteId-end -->/s";
        $htmlContent = preg_replace($pattern, '', $htmlContent);
        file_put_contents($filePath, $htmlContent);
    }

    header("Location: admin_dashboard.php");
    exit();
}

// ADD PRODUCT
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['add'])) {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $category = $_POST['category'];
    $subcategory = $_POST['subcategory'];

    $image = $_FILES['image'];
    $imageName = basename($image['name']);
    $targetDir = "images/";
    $targetFile = $targetDir . uniqid() . "_" . $imageName;

    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    if (move_uploaded_file($image['tmp_name'], $targetFile)) {
        $stmt = $conn->prepare("INSERT INTO products (name, description, price, image, category, subcategory) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssdsss", $name, $description, $price, $targetFile, $category, $subcategory);
        $stmt->execute();
        $productId = $stmt->insert_id;
        $stmt->close();

        // Product HTML with markers
        $productCard = "
<!-- product-$productId-start -->
<div class='product-card'>
    <img src='$targetFile' alt='$name' width='150'>
    <h3>$name</h3>
    <p>$description</p>
    <p>Price: ₹$price</p>
</div>
<!-- product-$productId-end -->\n";

        $filePath = "products.html";

        if (file_exists($filePath)) {
            // Insert before </div> inside .products
            $html = file_get_contents($filePath);
            $updatedHtml = str_replace("<div class='products'>", "<div class='products'>\n$productCard", $html);

            file_put_contents($filePath, $updatedHtml);
            echo "<script>alert('Product added and HTML updated');</script>";
        } else {
            // Create new file
            $fileContent = "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>All Products</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body>
    <h1>All Products</h1>
    <div class='products'>
$productCard
    </div>
</body>
</html>";
            file_put_contents($filePath, $fileContent);
        }
    } else {
        echo "<script>alert('Image upload failed.');</script>";
    }
}

// Fetch all products
$products = $conn->query("SELECT * FROM products");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <h1>Welcome Admin, <?php echo $_SESSION['firstname']; ?>!</h1>
    <a href="logout.php">Logout</a>

    <h2>Add Product</h2>
    <form method="post" enctype="multipart/form-data">
        <input type="text" name="name" placeholder="Product Name" required>
        <input type="text" name="description" placeholder="Description" required>
        <input type="number" step="0.01" name="price" placeholder="Price" required>
        <select name="category" required>
            <option value="">Select Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
        </select>
        <select name="subcategory" required>
            <optgroup label="Men">
                <option value="shirt">Shirt</option>
                <option value="tshirt">T-Shirt</option>
                <option value="jeans">Jeans</option>
            </optgroup>
            <optgroup label="Women">
                <option value="tops">Tops</option>
                <option value="jeans">Jeans</option>
            </optgroup>
        </select>
        <input type="file" name="image" accept="image/*" required>
        <button type="submit" name="add">Add Product</button>
    </form>

    <h2>All Products</h2>
    <table border="1">
        <tr>
            <th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Image</th><th>Category</th><th>Subcategory</th><th>Actions</th>
        </tr>
        <?php while ($row = $products->fetch_assoc()): ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo htmlspecialchars($row['name']); ?></td>
                <td><?php echo htmlspecialchars($row['description']); ?></td>
                <td>₹<?php echo $row['price']; ?></td>
                <td><img src="<?php echo $row['image']; ?>" width="50"></td>
                <td><?php echo $row['category']; ?></td>
                <td><?php echo $row['subcategory']; ?></td>
                <td>
                    <a href="admin_dashboard.php?delete=<?php echo $row['id']; ?>" onclick="return confirm('Delete this product?');">Delete</a>
                </td>
            </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
