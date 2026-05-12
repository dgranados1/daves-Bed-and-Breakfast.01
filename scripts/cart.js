// ======================================
// Display all cart items on the page
// ======================================
function displayCart() {

    // Get cart data from localStorage
    // If cart doesn't exist, use an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Get the HTML element where cart items will appear
    let cartDiv = document.getElementById("cart");

    // Stop function if cart container doesn't exist
    if (!cartDiv) return;

    // ======================================
    // Check if cart is empty
    // ======================================
    if (cart.length === 0) {

        // Show empty cart message
        cartDiv.innerHTML = "<p>Your cart is empty.</p>";

        return;
    }

    // ======================================
    // Start building cart HTML
    // ======================================

    // Add heading and start unordered list
    let output = "<h2>Your Items:</h2><ul>";

    // Variable to store total cart cost
    let total = 0;

    // ======================================
    // Loop through each cart item
    // ======================================
    cart.forEach((item, index) => {

        // Calculate total cost for this item
        let itemTotal = item.price * item.quantity;

        // Add item total to overall cart total
        total += itemTotal;

        // Start list item
        output += "<li>";

        // Display product name
        output += "<strong>" + item.name + "</strong>";

        // ======================================
        // Show item size if available
        // ======================================
        if (item.size) {
            output += " (Size: " + item.size + ")";
        }

        // Display item price
        output += "<br>Price: $" + item.price.toFixed(2);

        // ======================================
        // Quantity input field
        // Allows user to change quantity
        // ======================================
        output += `
            <br>Qty:
            <input 
                type="number" 
                min="1" 
                value="${item.quantity}"
                onchange="updateQuantity(${index}, this.value)">
        `;

        // Display total price for this item
        output += "<br>Item Total: $" + itemTotal.toFixed(2);

        // ======================================
        // Remove item button
        // ======================================
        output += `
            <br>
            <button onclick="removeItem(${index})">
                Remove
            </button>
        `;

        // Add separator line
        output += "<hr>";

        // End list item
        output += "</li>";
    });

    // End unordered list
    output += "</ul>";

    // ======================================
    // Display total cart cost
    // ======================================
    output += `
        <h2>Total Cost: $${total.toFixed(2)}</h2>
    `;

    // ======================================
    // Insert generated HTML into page
    // ======================================
    cartDiv.innerHTML = output;
}

// ======================================
// Update quantity of a cart item
// ======================================
function updateQuantity(index, newQty) {

    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Convert quantity input to integer
    newQty = parseInt(newQty);

    // Prevent quantity below 1
    if (newQty < 1) {
        newQty = 1;
    }

    // Update item quantity
    cart[index].quantity = newQty;

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Refresh cart display
    displayCart();
}

// ======================================
// Remove item from cart
// ======================================
function removeItem(index) {

    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove one item at the selected index
    cart.splice(index, 1);

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Refresh cart display
    displayCart();
}

// ======================================
// Run displayCart when page loads
// ======================================
window.onload = function () {

    // Show cart items immediately after page loads
    displayCart();
};