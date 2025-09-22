document.addEventListener("DOMContentLoaded", function () {
    const totalAmount = localStorage.getItem('totalPrice') || "0.00";

    // Assign total amount to all forms
    document.getElementById('total-amount').textContent = totalAmount;
    document.getElementById('hidden-total-amount').value = totalAmount;
    
    document.getElementById('upi-total-amount').textContent = totalAmount;
    document.getElementById('hidden-upi-total-amount').value = totalAmount;

    document.getElementById('cod-total-amount').textContent = totalAmount;
    document.getElementById('hidden-cod-total-amount').value = totalAmount;

    // Handle payment method selection
    document.getElementById("continue-btn").addEventListener("click", function () {
        const paymentMethod = document.getElementById("payment-method").value;
        
        // Set payment method in all forms
        document.querySelectorAll('input[name="payment_method"]').forEach(input => {
            input.value = paymentMethod;
        });

        // Hide all sections
        document.getElementById("payment-method-section").style.display = "none";
        document.getElementById("payment-form").style.display = "none";
        document.getElementById("upi-payment").style.display = "none";
        document.getElementById("cod-confirmation").style.display = "none";

        // Show the selected payment form
        if (paymentMethod === "cod") {
            document.getElementById("cod-confirmation").style.display = "block";
        } else if (paymentMethod === "upi") {
            document.getElementById("upi-payment").style.display = "block";
        } else {
            document.getElementById("payment-form").style.display = "block";
        }
    });

    // Handle form submission and redirect
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(this);

            fetch(this.action, {
                method: "POST",
                body: formData
            }).then(response => response.text()).then(responseText => {
                if (responseText.trim() === "success") {
                    alert("Payment successful!");
                    window.location.href = "success.html";
                } else {
                    alert("Payment failed! Please try again.");
                    window.location.href = "payment.html";
                }
            }).catch(error => {
                alert("Payment failed due to network issues!");
                console.error(error);
            });
        });
    });
});
