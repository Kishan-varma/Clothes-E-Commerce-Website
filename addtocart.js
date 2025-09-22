// Function to load and display cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart items
    cartItemsContainer.innerHTML = '';

    let total = 0;

    // Loop through each cart item and display it
    cart.forEach(item => {
        const li = document.createElement('li');
        const numericPrice = parseFloat(item.price.replace('₹', '').trim()); // Parse price as numeric

        li.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-img"> <!-- Product Image -->
        <div class="cart-item-details">
          <span class="item-size">Size: ${item.size}</span>
          <span class="item-name"><strong>${item.name}</strong></span>
          <span class="item-price">₹${numericPrice.toFixed(2)}</span>
          <div class="quantity-container">
            <button class="decrease" data-id="${item.id}" data-size="${item.size}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase" data-id="${item.id}" data-size="${item.size}">+</button>
          </div>
        </div>
        `;

        // Add a "Remove" button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove');
        removeButton.onclick = () => removeFromCart(item.id, item.size);
        li.appendChild(removeButton);

        cartItemsContainer.appendChild(li);

        // Calculate total price
        total += numericPrice * item.quantity;
    });

    // Update total price on the page
    totalPriceElement.textContent = `Total: ₹${total.toFixed(2)}`;

    // Store the updated total price in localStorage
    localStorage.setItem('totalPrice', total.toFixed(2));

    // Add event listeners for increase and decrease buttons
    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', handleQuantityChange);
    });

    document.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', handleQuantityChange);
    });
}

// Function to handle quantity changes (increase or decrease)
function handleQuantityChange(event) {
    const productId = event.target.getAttribute('data-id');
    const productSize = event.target.getAttribute('data-size'); // Get size
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the product with the same id AND size
    const cartItem = cart.find(item => item.id === productId && item.size === productSize);

    if (!cartItem) return; // If item is not found, exit

    if (event.target.classList.contains('increase')) {
        cartItem.quantity += 1;  // Increase quantity
    } else if (event.target.classList.contains('decrease')) {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;  // Decrease quantity (but not below 1)
        }
    }

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Recalculate and update the cart display
    displayCart();
}

// Function to remove an item from the cart
function removeFromCart(productId, size) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => !(item.id === productId && item.size === size)); // Remove item with matching ID and size

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Recalculate and update the cart display
    displayCart();
}

// Checkout function (you can expand this based on your checkout process)
function checkout() {
    if (confirm("Proceeding to checkout...")) {
        window.location.href = "checkout.html"; // Redirect to checkout page
    }
}

// Call displayCart when the page loads
document.addEventListener('DOMContentLoaded', displayCart);
