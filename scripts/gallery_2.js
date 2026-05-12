// Enable strict mode for safer JavaScript coding
"use strict";

// ======================================
// Get required HTML elements
// ======================================

// Gallery container where images will appear
let gallery = document.getElementById("gallery");

// Lightbox container (popup overlay)
let lightbox = document.getElementById("lightbox");

// Image element inside the lightbox
let lightboxImg = document.getElementById("lightbox-img");

// Close button for the lightbox
let closeBtn = document.getElementById("close");

// Caption text element inside the lightbox
let captionText = document.getElementById("caption");

// ======================================
// CREATE GALLERY IMAGES
// ======================================

// Loop through all image files
for (let i = 0; i < imgFiles.length; i++) {

    // Create a new image element
    let img = document.createElement("img");

    // Set image source
    img.src = imgFiles[i];

    // Set image alt text for accessibility
    img.alt = imgCaptions[i];

    // ======================================
    // Add click event to open lightbox
    // ======================================
    img.addEventListener("click", function () {

        // Show lightbox popup
        lightbox.style.display = "flex";

        // Display clicked image inside lightbox
        lightboxImg.src = this.src;

        // Show matching image caption
        captionText.textContent = imgCaptions[i];
    });

    // Add image to gallery container
    gallery.appendChild(img);
}

// ======================================
// CLOSE LIGHTBOX USING CLOSE BUTTON
// ======================================

closeBtn.addEventListener("click", function () {

    // Hide lightbox popup
    lightbox.style.display = "none";
});

// ======================================
// CLOSE LIGHTBOX WHEN CLICKING OUTSIDE IMAGE
// ======================================

lightbox.addEventListener("click", function (e) {

    // If user clicks outside the image
    if (e.target !== lightboxImg) {

        // Hide lightbox popup
        lightbox.style.display = "none";
    }
});