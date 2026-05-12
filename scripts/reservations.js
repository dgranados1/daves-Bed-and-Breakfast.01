// ======================================
// Calculate and display reservation total
// ======================================
function updateTotal() {

    // Get all reservation checkbox/radio options
    let options = document.getElementsByName("reservation");

    // Variable to store total cost
    let total = 0;

    // ======================================
    // Loop through all reservation options
    // ======================================
    for (let i = 0; i < options.length; i++) {

        // Check if current option is selected
        if (options[i].checked) {

            // Add selected option value to total
            // Number() converts string value into a number
            total += Number(options[i].value);
        }
    }

    // ======================================
    // Display updated total on the webpage
    // ======================================

    // Replace the text inside element with id="total"
    document.getElementById("total").textContent = total;
}