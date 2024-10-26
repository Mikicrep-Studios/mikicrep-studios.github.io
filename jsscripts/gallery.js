// gallery.js

function createGallery() {
    const galleryContainer = document.getElementById("gallery");

    let imageRow = document.createElement("div");
    imageRow.className = "container";

    galleryImages.forEach((image, index) => {
        // Create link and image element
        const imageLink = document.createElement("a");
        imageLink.href = image.original;
        imageLink.target = "_blank";

        const img = document.createElement("img");
        img.src = image.webp;
        img.className = "galleryimg";

        imageLink.appendChild(img);
        imageRow.appendChild(imageLink);

        // Append the current row after every 4 images
        if ((index + 1) % 4 === 0) {
            galleryContainer.appendChild(imageRow);
            galleryContainer.appendChild(document.createElement("br"));
            imageRow = document.createElement("div");
            imageRow.className = "container";
        }
    });

    // Append any remaining images in the last row
    if (imageRow.children.length > 0) {
        galleryContainer.appendChild(imageRow);
    }
}

// Run the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createGallery);
