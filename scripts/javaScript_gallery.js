// Enable strict mode for safer JavaScript coding
"use strict";

// ======================================
// Gallery title
// ======================================

// Title used for the lightbox/gallery section
let lightboxTitle = "My Gallery";

// ======================================
// Image file paths
// ======================================

// Array containing all image file locations
// Each image will be displayed in the gallery/slideshow
let imgFiles = [

  // Image 1
  "images/photo_1.png",

  // Image 2
  "images/photo_2.png",

  // Image 3
  "images/photo_3.png",

  // Image 4
  "images/photo_4.png",

  // Image 5
  "images/photo_5.png",

  // Image 6
  "images/photo_6.png",

  // Image 7
  "images/photo_7.png"
];

// ======================================
// Image captions
// ======================================

// Captions match the images above
// Example:
// imgFiles[0] uses imgCaptions[0]
let imgCaptions = [

  // Caption for photo_1.png
  "Oceanfront breakfast",

  // Caption for photo_2.png
  "Couple enjoying gourmet meal",

  // Caption for photo_3.png
  "Live island music night",

  // Caption for photo_4.png
  "Family enjoying express room",

  // Caption for photo_5.png
  "Surf coach teaching family how to surf",

  // Caption for photo_6.png
  "Our wonderful staff",

  // Caption for photo_7.png
  "David the owner creating our bed-and-breakfast"
];

// ======================================
// Total number of gallery images
// ======================================

// Stores the number of images in the slideshow
// Useful for loops and slideshow controls
let imgCount = imgFiles.length;