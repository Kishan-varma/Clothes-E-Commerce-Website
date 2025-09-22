<?php session_start();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link to css -->
     <link rel="stylesheet" href="style.css">
     <!-- Box icons -->
     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <!-- Header -->
     <header>
      <a href="index.php" class="logo">
         <img src="images/logo.png">
      </a>
      <ul class="navmenu">
         <li><a href="index.php">Home</a></li>
         <li><a href="men.html">Men</a></li>
         <li><a href="women.html">Women</a></li>
      </ul>
        <!-- Nav-->
     <div class="nav-icon">
       <!-- Dynamic login/signup/logout buttons -->
      <div class="profile">
        <?php if (isset($_SESSION['email'])): ?>
          <p class="welcome">Welcome, <?= $_SESSION['firstname']; ?></p>
          <a href="logout.php"><p class="logout">Logout</p></a>
        <?php else: ?>
          <a href="signup.html"><p class="signup">Signup</p></a>
          <a href="login.html"><p class="login">Login</p></a>
        <?php endif; ?>
      </div>
         <!--Wishlist-icon -->
         <a href="wishlist.html">
            <i class='bx bxs-heart'id="Wishlist-icon"></i>
         </a>
         
         <!--Cart-Icon-->
         <a href="addtocart.html">
            <i class='bx bxs-cart'id="cart-icon"></i>
         </a>
         <!-- Menu Icon-->
         <div class="bx bx-menu" id="menu-icon"></div>
     </div>
    </header>
    <!--Home-->
    <section class="home"id="home">
        <!--text on image code-->
        <div class="main-text">
            <h1>New Arrivals</h1>
            <p>There's Nothing Like Trend</p>
            <a href="products.html" class="main-btn">Shop Now <i class='bx bx-right-arrow-alt'></i></a>
        </div>
    </section>
    <!--trending product section-->
    <section class="trending-product" id="trending">
      <div class="center-text">
        <h2>Our Trending Products</h2>
      </div>
      <div class="product">
        <!--firstimage-->
        <div class="row">
          <a href="shirtpage1.html">
          <img src="images/mshirt/s1.jpg" alt="shirt"></a>
          <div class="product-text">
              <h5>Sale</h5>
          </div>
          <div class="rating">
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
              <h4>Full Sleeves Shirt</h4>
              <p>₹700</p>
          </div>
        </div>
        <!--secondimage-->
          <div class="row">
            <a href="shirtpage2.html">
            <img src="images/mshirt/s11.jpg" alt="shirt"></a>
            <div class="product-text">
                <h5>Hot</h5>
            </div>
            <div class="rating">
                <i class='bx bx-star' ></i>
                <i class='bx bx-star' ></i>
                <i class='bx bx-star' ></i>
                <i class='bx bx-star' ></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <div class="price">
                <h4> Mens-Top Shirts Deep Teal</h4>
                <p>₹750</p>
            </div>
          </div>
          <!--thirdimage-->
          <div class="row">
            <a href="wtoppage1.html">
            <img src="images/wtops/p1.jpg" alt="shirt"></a>
            <div class="product-text">
                <h5>Sale</h5>
            </div>
            <div class="rating">
                <i class='bx bx-star' ></i>
                <i class='bx bx-star' ></i>
                <i class='bx bx-star' ></i>
                <i class='bx bx-star' ></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <div class="price">
                <h4>Womens-Top Polo Neck Snow White</h4>
                <p>₹700</p>
            </div>
        </div>
        <!--fourthimage-->
        <div class="row">
          <a href="wtoppage2.html">
          <img src="images/wtops/p12.jpg" alt="shirt"></a>
          <div class="product-text">
              <h5>New</h5>
          </div>
          <div class="rating">
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
              <h4>Womens-Top Crew Neck Snow White</h4>
              <p>₹600</p>
          </div>
        </div>
        <!--fifthimage-->
        <div class="row">
          <a href="tshirtpage1.html">
          <img src="images/mtshirt/t2.jpg" alt="tshirt"></a>
          <div class="product-text">
            <h5>Hot</h5>
          </div>
          <div class="rating">
            <i class='bx bx-star' ></i>
            <i class='bx bx-star' ></i>
            <i class='bx bx-star' ></i>
            <i class='bx bx-star' ></i>
            <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
            <h4> Mens-Top Crew Neck White</h4>
            <p>₹750</p>
          </div>
        </div>
        <!--sixthimage-->
        <div class="row">
          <a href="tshirtpage2.html">
          <img src="images/mtshirt/t14.jpg" alt="shirt"></a>
          <div class="product-text">
            <h5>Hot</h5>
          </div>
          <div class="rating">
            <i class='bx bx-star' ></i>
            <i class='bx bx-star' ></i>
            <i class='bx bx-star' ></i>
            <i class='bx bx-star' ></i>
            <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
            <h4>Mens-Top Crew Neck Black</h4>
            <p>₹600</p>
          </div>
        </div>
        <!--seventhimage-->
        <div class="row">
          <a href="wjeanspage1.html">
          <img src="images/wjeans/j1.jpg" alt="shirt"></a>
          <div class="product-text">
              <h5>Sale</h5>
          </div>
          <div class="rating">
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
              <h4>Womens-Bottom Denim Wine Cargo-Fit</h4>
              <p>₹800</p>
          </div>
        </div>
        <!--eigthimage-->
        <div class="row">
          <a href="wjeanspage2.html">
          <img src="images/wjeans/j10.jpg" alt="shirt"></a>
          <div class="product-text">
              <h5>Sale</h5>
          </div>
          <div class="rating">
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
              <h4>Women Slim Straight High Rise Fit Denim-Dark Indigo</h4>
              <p>₹800</p>
          </div>
        </div>
        <!--ninthimage-->
        <div class="row">
          <a href="jeanspage1.html">
          <img src="images/mjeans/j1.jpg" alt="tshirt"></a>
          <div class="product-text">
              <h5>Sale</h5>
          </div>
          <div class="rating">
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bx-star' ></i>
              <i class='bx bxs-star-half' ></i>
          </div>
          <div class="price">
              <h4>Mens-Bottom Denim Black Tone</h4>
              <p>₹850</p>
          </div>
        </div>
      </div>
    </section>
    <!--link to javascript--> 
        <script src="navbarscroll.js"></script>
        <!--Footer-->
        <footer class="footer">
            <div class="quick-link">
                <h2>Quick Links</h2>
                <a href="index.html"><p>Home</p></a>
                <a href="men.html"><p>Men</p></a>
                <a href="women.html"><p>Women</p></a>
            </div>
            <div class="user-link">
               <h3>User Links</h3>
               <a href="#"><p>My Account</p></a>
               <a href="addtocart.html"><p>My Cart</p></a>
               <a href="wishlist.html"><p>My Wishlist</p></a>
           </div>
           <div class="location">
            <h3>Locations</h3>
            <p>Mumbai</p>
            <p>Thane</p>
            <p>Pune</p>
            <p>Ambarnath</p>
        </div>
        <div class="contact-info">
         <h3>Contact Info</h3>
         <p>7399292103</p>
         <p>FreshFits7399@gmail.com</p>
         <a href="#"><i class='bx bxl-whatsapp'></i></a>
         <a href="#"><i class='bx bxl-facebook-square'></i></a>
         <a href="#"><i class='bx bxl-instagram'></i></a>
         <p>Mumbai,India-400092</p>
         <p>Ambarnath</p>
     </div>
        </footer>
</body>
</html>