// ======================================
// Display checkout summary
// ======================================
function showSummary() {

    // Get cart data from localStorage
    // If cart doesn't exist, use empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Get summary container from HTML
    let summary = document.getElementById("summary");

    // Stop function if summary section doesn't exist
    if (!summary) return;

    // ======================================
    // Check if cart is empty
    // ======================================
    if (cart.length === 0) {

        // Display empty cart message
        summary.innerHTML = "<p>Your cart is empty.</p>";

        return;
    }

    // ======================================
    // Start building summary HTML
    // ======================================

    let output = "<h3>Your Items:</h3><ul>";

    // Variable to store overall total cost
    let total = 0;

    // ======================================
    // Loop through cart items
    // ======================================
    cart.forEach(item => {

        // Calculate total price for current item
        let itemTotal = item.price * item.quantity;

        // Add item total to overall total
        total += itemTotal;

        // Add item details to summary list
        output += `
            <li>
                ${item.name}
                - Qty: ${item.quantity}
                - $${itemTotal.toFixed(2)}
            </li>
        `;
    });

    // Close unordered list
    output += "</ul>";

    // ======================================
    // Display final total cost
    // ======================================
    output += `<h3>Total Cost: $${total.toFixed(2)}</h3>`;

    // Insert generated HTML into page
    summary.innerHTML = output;
}

// ======================================
// Validate checkout form
// ======================================
function validateForm(event) {

    // Prevent page refresh when form submits
    event.preventDefault();

    // ======================================
    // Get user input values
    // trim() removes extra spaces
    // ======================================
    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    /*
        ======================================
        VALIDATION 1 - NAME
        ======================================
        Name must contain at least 3 characters
    */
    if (name.length < 3) {

        alert("Name must be at least 3 characters long.");

        return;
    }

    /*
        ======================================
        VALIDATION 2 - EMAIL
        ======================================
        Regular expression checks email format
    */
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // If email does not match pattern
    if (!email.match(emailPattern)) {

        alert("Please enter a valid email address.");

        return;
    }

    /*
        ======================================
        VALIDATION 3 - PHONE
        ======================================
        Must contain exactly 10 digits
    */
    let phonePattern = /^[0-9]{10}$/;

    // If phone number is invalid
    if (!phone.match(phonePattern)) {

        alert("Phone number must contain exactly 10 digits.");

        return;
    }

    /*
        ======================================
        SUCCESS MESSAGE
        ======================================
        Runs only if all validations pass
    */
    alert("Order placed successfully!");

    // Reset form fields after successful order
    document.getElementById("checkoutForm").reset();
}

// ======================================
// Run code when page loads
// ======================================
window.onload = function () {

    // Display checkout summary immediately
    showSummary();

    // Get checkout form element
    let form = document.getElementById("checkoutForm");

    // ======================================
    // Add form submit event listener
    // ======================================
    if (form) {

        form.addEventListener("submit", validateForm);
    }
};