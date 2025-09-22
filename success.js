// Function to get query parameter value by name
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the payment method from the URL query parameters
const paymentMethod = getQueryParameter("paymentMethod");

// Display the appropriate messages based on the payment method
const paymentMessageElement = document.getElementById("payment-message");
const deliveryMessageElement = document.getElementById("delivery-message");

if (paymentMethod === "COD") {
    paymentMessageElement.textContent = "Thank you for choosing Cash on Delivery!";
    deliveryMessageElement.textContent = "Your order will be delivered soon. Payment will be collected upon delivery.";
} else if (paymentMethod === "Card Payment") {
    paymentMessageElement.textContent = "Your card payment has been successfully processed. Thank you for your purchase!";
    deliveryMessageElement.textContent = "Your order will be delivered soon. Thank you for shopping with us!";
} else {
    paymentMessageElement.textContent = "Thank you for your order! We will process it soon.";
    deliveryMessageElement.textContent = "Your order will be delivered shortly.";
}

// Function to clear the cart and redirect to homepage
function clearCartAndRedirect() {
    localStorage.removeItem("cart"); // Clear cart data from localStorage
    localStorage.removeItem("totalPrice"); // Clear total price
    window.location.href = "index.php"; // Redirect to the shopping page
}

// Attach event listener to the button
document.getElementById("continue-shopping-btn").addEventListener("click", clearCartAndRedirect);
