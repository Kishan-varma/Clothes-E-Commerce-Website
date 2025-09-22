document.addEventListener("DOMContentLoaded", function () {
    displayWishlist();
});

function displayWishlist() {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = document.getElementById("wishlist-container");

    wishlistContainer.innerHTML = ""; // Clear existing content

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
        return;
    }

    wishlist.forEach(product => {
        const wishlistItem = document.createElement("div");
        wishlistItem.classList.add("wishlist-item");

        wishlistItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>Size: ${product.size}</p>
                <p>Price: ${product.price}</p>
            </div>
            <button class="remove-btn" onclick="removeFromWishlist('${product.id}', '${product.size}')">Remove</button>
            <button class="add-to-cart-btn" onclick="addToCartFromWishlist('${product.id}', '${product.size}')">Add to Cart</button>
        `;

        wishlistContainer.appendChild(wishlistItem);
    });
}

function addToCartFromWishlist(productId, size) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const product = wishlist.find(item => item.id === productId && item.size === size);

    if (!product) {
        alert("Product not found in wishlist!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the same product with the same size already exists in the cart
    const cartItem = cart.find(item => item.id === productId && item.size === size);

    if (!cartItem) {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            size: product.size,
            imageUrl: product.imageUrl,
            quantity: 1
        });
    } else {
        cartItem.quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}

function removeFromWishlist(productId, size) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(item => !(item.id === productId && item.size === size));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist(); // Update UI after removal
}
