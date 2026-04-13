function updateTotal() {
    let options = document.getElementsByName("reservation");
    let total = 0;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            total += Number(options[i].value); // add all selected
        }
    }

    document.getElementById("total").textContent = total;
}