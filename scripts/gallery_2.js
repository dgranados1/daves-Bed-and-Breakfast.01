"use strict";

let gallery = document.getElementById("gallery");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let closeBtn = document.getElementById("close");
let captionText = document.getElementById("caption");

// CREATE IMAGES
for (let i = 0; i < imgFiles.length; i++) {
    let img = document.createElement("img");
    img.src = imgFiles[i];
    img.alt = imgCaptions[i];

    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
        captionText.textContent = imgCaptions[i]; // SHOW CAPTION
    });

    gallery.appendChild(img);
}

// CLOSE BUTTON
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// CLICK OUTSIDE IMAGE
lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});