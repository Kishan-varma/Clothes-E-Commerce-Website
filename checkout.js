document.addEventListener("DOMContentLoaded", function () {
    // Get total amount from localStorage (if you are storing it there)
    const totalAmount = localStorage.getItem('totalPrice') || "0.00";
    document.getElementById('total-amount').textContent = `₹${totalAmount}`;

    // Handle form submission using AJAX to prevent page reload
    document.getElementById("checkout-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(this); // Automatically collects form data

        // Check if all fields are filled
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const zip = document.getElementById("zip").value;

        if (name && email && phone && address && city && zip) {
            // Send data via AJAX
            fetch('http://localhost/signup/store_user_detail.php', {  // Use localhost URL here
                method: 'POST',
                body: formData
            })
            .then(response => response.text()) // Get server response
            .then(data => {
                console.log(data); // For debugging, you can check the server response

                // Check if the data contains "User details saved successfully!"
                if (data.includes("User details saved successfully!")) {
                    alert("Details saved! Redirecting to payment...");

                    // Redirect to payment.html after a brief delay
                    setTimeout(function() {
                        window.location.href = "payment.html"; // Redirect to payment page
                    }, 2000); // Optional delay before redirect
                } else {
                    alert("There was an error saving your details. Please try again.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("There was an error submitting your details. Please try again.");
            });
        } else {
            alert("Please fill in all required fields.");
        }
    });
});
