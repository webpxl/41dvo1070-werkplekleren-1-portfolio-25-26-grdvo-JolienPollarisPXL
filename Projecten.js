const basePath = "assets/Fotografie/";
const images = [
    "beeldtaal.png",
    "Bloem.jpeg",
    "Hoop.JPG",
    "Jolien_compositie.jpeg",
    "kleurfotografie.JPG",
    "Jolien_mode 1.jpeg",
    "mode2.png",
    "mode3.png",
    "mode4.png",
    "Portret.png"
];

let current = 0;

function setImage() {
    const imgEl = document.getElementById("sliderImage");
    if (!imgEl) {
        console.warn("No element with id `sliderImage` found.");
        return;
    }
    imgEl.src = basePath + encodeURIComponent(images[current]);
}

function nextImage() {
    current = (current + 1) % images.length;
    setImage();
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    setImage();
}

document.addEventListener("DOMContentLoaded", setImage);

