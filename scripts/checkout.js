function showSummary() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let summary = document.getElementById("summary");

    if (!summary) return;

    if (cart.length === 0) {
        summary.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let output = "<ul>";

    cart.forEach(item => {
        output += `<li>${item.name} (Qty: ${item.quantity})</li>`;
    });

    output += "</ul>";

    summary.innerHTML = output;
}

function validateForm(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill out all fields!");
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email!");
        event.preventDefault();
        return;
    }

    alert("Order placed successfully!");
}

wwindow.onload = function () {
    showSummary();

    let form = document.getElementById("checkoutForm");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
};