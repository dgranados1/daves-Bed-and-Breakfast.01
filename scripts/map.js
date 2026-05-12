// ======================================
// MAP LOCATION COORDINATES
// ======================================

// Latitude of Dave's Bed and Breakfast
var lat = 21.28280;

// Longitude of Dave's Bed and Breakfast
var lon = -157.83676;

// ======================================
// INITIALIZE LEAFLET MAP
// ======================================

// Create map inside the HTML element with id="map"
// setView() sets the starting location and zoom level
var map = L.map('map').setView([lat, lon], 13);

// ======================================
// ADD MAP TILES
// ======================================

// Load map tiles from OpenStreetMap
// {s} = subdomain
// {z} = zoom level
// {x}/{y} = tile coordinates
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

    // Add tile layer to the map
    .addTo(map);

// ======================================
// ADD MAP MARKER
// ======================================

// Create a marker at the specified coordinates
var marker = L.marker([lat, lon]).addTo(map);

// Add popup text to the marker
// Popup opens automatically when page loads
marker.bindPopup(
    "<b>Daves bed and breakfast</b><br>Loading weather..."
).openPopup();

// ======================================
// FETCH WEATHER DATA
// ======================================

// First API request:
// Get weather forecast URL using coordinates
fetch("https://api.weather.gov/points/" + lat + "," + lon)

    // Convert response to JSON format
    .then(function(res) {
        return res.json();
    })

    // Use forecast URL from first API response
    .then(function(data) {

        // Fetch actual weather forecast data
        return fetch(data.properties.forecast);
    })

    // Convert second response to JSON
    .then(function(res) {
        return res.json();
    })

    // Process weather data
    .then(function(weather) {

        // Get current forecast period
        var current = weather.properties.periods[0];

        // Update marker popup with weather information
        marker.setPopupContent(
            "<b>Daves Bed and Breakfast</b><br>" +
            current.temperature +
            "°F and " +
            current.shortForecast
        );
    })

    // ======================================
    // ERROR HANDLING
    // ======================================

    // Runs if weather request fails
    .catch(function(err) {

        // Show fallback message in popup
        marker.setPopupContent(
            "<b>Daves Bed and Breakfast</b><br>Weather unavailable"
        );
    });