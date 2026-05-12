// ======================================
// Add product to shopping cart
// ======================================
function addToCart(productName, price, sizeId, qtyId) {

    // Get existing cart from localStorage
    // If nothing exists, start with empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Variable to store selected size
    let size = "";

    // ======================================
    // Get product size (if size dropdown exists)
    // ======================================
    if (sizeId) {

        // Get size dropdown element
        let sizeElement = document.getElementById(sizeId);

        // If element exists, get selected value
        if (sizeElement) {
            size = sizeElement.value;
        }
    }

    // Default quantity is 1
    let quantity = 1;

    // ======================================
    // Get product quantity (if input exists)
    // ======================================
    if (qtyId) {

        // Get quantity input element
        let qtyElement = document.getElementById(qtyId);

        // If element exists, parse its value as integer
        if (qtyElement) {
            quantity = parseInt(qtyElement.value);
        }
    }

    // ======================================
    // Check if item already exists in cart
    // (same product name + same size)
    // ======================================
    let existingItem = cart.find(item =>
        item.name === productName && item.size === size
    );

    // ======================================
    // If item already exists, update quantity
    // ======================================
    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        // ======================================
        // Otherwise, add new item to cart
        // ======================================
        cart.push({
            name: productName,
            price: price,
            size: size,
            quantity: quantity
        });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Notify user
    alert(productName + " added to cart!");
}