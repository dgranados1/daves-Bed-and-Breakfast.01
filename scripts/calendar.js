document.addEventListener("DOMContentLoaded", function () {

    
    const items = [
        // Events page data
        { name: "Live Music Night", date: "2026-04-20", type: "event" },
        { name: "Surf Lessons", date: "2026-04-22", type: "event" },

        // Reservation page data
        { name: "John - Room Booking", date: "2026-04-18", type: "reservation" },
        { name: "Sarah - Spa Reservation", date: "2026-04-25", type: "reservation" }
    ];

    const calendar = document.getElementById("calendar");
    const eventList = document.getElementById("eventList");

    // Get current month
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let table = "<table border='1' style='width:100%; text-align:center;'>";
    table += "<tr>";

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach(day => table += `<th>${day}</th>`);
    table += "</tr><tr>";

    // Blank spaces
    for (let i = 0; i < firstDay; i++) {
        table += "<td></td>";
    }

    // Days
    for (let day = 1; day <= daysInMonth; day++) {

        let dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

        // Check if event exists
        let hasItem = items.some(item => item.date === dateStr);

        table += `<td class="day" data-date="${dateStr}" 
                    style="${hasItem ? 'background-color:lightgreen;' : ''}">
                    ${day}
                  </td>`;

        if ((day + firstDay) % 7 === 0) {
            table += "</tr><tr>";
        }
    }

    table += "</tr></table>";
    calendar.innerHTML = table;

    // Click event
    document.querySelectorAll(".day").forEach(cell => {
        cell.addEventListener("click", function () {
            const selectedDate = this.getAttribute("data-date");

            // Clear list
            eventList.innerHTML = "";

            const filtered = items.filter(item => item.date === selectedDate);

            if (filtered.length === 0) {
                eventList.innerHTML = "<li>No events</li>";
            } else {
                filtered.forEach(item => {
                    let li = document.createElement("li");
                    li.textContent = `${item.name} (${item.type})`;
                    eventList.appendChild(li);
                });
            }
        });
    });

});