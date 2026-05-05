function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartDiv = document.getElementById("cart");

    if (!cartDiv) return;

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let output = "<h2>Your Items:</h2><ul>";

    cart.forEach((item, index) => {
        output += "<li>";
        output += item.name;

        if (item.size) {
            output += " (Size: " + item.size + ")";
        }

        output += `
            <br>Qty:
            <input type="number" min="1" value="${item.quantity}"
            onchange="updateQuantity(${index}, this.value)">
        `;

        output += ` <button onclick="removeItem(${index})">Remove</button>`;
        output += "</li>";
    });

    output += "</ul>";

    cartDiv.innerHTML = output;
}

function updateQuantity(index, newQty) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    newQty = parseInt(newQty);
    if (newQty < 1) newQty = 1;

    cart[index].quantity = newQty;

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

window.onload = function () {
    displayCart();
};