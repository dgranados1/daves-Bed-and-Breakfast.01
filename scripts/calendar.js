// Wait until the full HTML page has loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // Calendar data (events + reservations)
    // ================================
    const items = [

        // Event item
        { 
            name: "Live Music Night", 
            date: "2026-05-20", 
            type: "event" 
        },

        // Event item
        { 
            name: "Surf Lessons", 
            date: "2026-05-22", 
            type: "event" 
        },

        // Reservation item
        { 
            name: "John - Room Booking", 
            date: "2026-05-18", 
            type: "reservation" 
        },

        // Reservation item
        { 
            name: "Sarah - Spa Reservation", 
            date: "2026-05-25", 
            type: "reservation" 
        }
    ];

    // ================================
    // Get required HTML elements
    // ================================

    // Container where the calendar table will be displayed
    const calendar = document.getElementById("calendar");

    // Container where clicked day events will appear
    const eventList = document.getElementById("eventList");

    // ================================
    // Get current date information
    // ================================

    // Current date object
    const today = new Date();

    // Current year
    const year = today.getFullYear();

    // Current month (0 = January, 11 = December)
    const month = today.getMonth();

    // ================================
    // Calculate month details
    // ================================

    // Get the weekday index of the first day of the month
    // Example: 0 = Sunday, 1 = Monday, etc.
    const firstDay = new Date(year, month, 1).getDay();

    // Get total number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // ================================
    // Start building the calendar table
    // ================================

    let table = `
        <table border="1" 
               style="width:100%; text-align:center; border-collapse:collapse;">
    `;

    // ================================
    // Create table header row (Sun-Sat)
    // ================================

    table += "<tr>";

    // Array of weekday names
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Loop through each weekday and create a header cell
    days.forEach(day => {
        table += `
            <th style="padding:10px; background-color:#f2f2f2;">
                ${day}
            </th>
        `;
    });

    // End header row and start first week row
    table += "</tr><tr>";

    // ================================
    // Add empty cells before month starts
    // ================================

    // Example:
    // If the month starts on Wednesday,
    // add 3 empty cells for Sun, Mon, Tue
    for (let i = 0; i < firstDay; i++) {
        table += "<td></td>";
    }

    // ================================
    // Create calendar day cells
    // ================================

    for (let day = 1; day <= daysInMonth; day++) {

        // Format date as YYYY-MM-DD
        let dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Check if this date has an event or reservation
        let hasItem = items.some(item => item.date === dateStr);

        // Create calendar cell
        table += `
            <td class="day"
                data-date="${dateStr}"
                style="
                    padding:15px;
                    cursor:pointer;

                    /* Highlight dates that contain events/reservations */
                    ${hasItem ? 'background-color:lightgreen;' : ''}
                ">
                ${day}
            </td>
        `;

        // ================================
        // Start a new table row every 7 days
        // ================================
        if ((day + firstDay) % 7 === 0) {
            table += "</tr><tr>";
        }
    }

    // ================================
    // Finish table structure
    // ================================

    table += "</tr></table>";

    // ================================
    // Display calendar in HTML
    // ================================

    calendar.innerHTML = table;

    // ================================
    // Add click functionality to each day
    // ================================

    document.querySelectorAll(".day").forEach(cell => {

        // Run when a day is clicked
        cell.addEventListener("click", function () {

            // Get selected date from data attribute
            const selectedDate = this.getAttribute("data-date");

            // Clear old event list before showing new results
            eventList.innerHTML = "";

            // Find all events/reservations for selected date
            const filtered = items.filter(item => item.date === selectedDate);

            // ================================
            // If no items exist for this date
            // ================================
            if (filtered.length === 0) {

                eventList.innerHTML = "<li>No events or reservations</li>";

            } else {

                // ================================
                // Display matching items
                // ================================

                filtered.forEach(item => {

                    // Create list item element
                    let li = document.createElement("li");

                    // Set text content
                    li.textContent = `${item.name} (${item.type})`;

                    // Add list item to event list
                    eventList.appendChild(li);
                });
            }
        });
    });

});