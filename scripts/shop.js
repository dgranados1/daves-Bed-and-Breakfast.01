function addToCart(productName, sizeId, qtyId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let size = "";
    if (sizeId) {
        let sizeElement = document.getElementById(sizeId);
        if (sizeElement) {
            size = sizeElement.value;
        }
    }

    let quantity = 1;
    if (qtyId) {
        let qtyElement = document.getElementById(qtyId);
        if (qtyElement) {
            quantity = parseInt(qtyElement.value);
        }
    }

    let existingItem = cart.find(item =>
        item.name === productName && item.size === size
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            size: size,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}