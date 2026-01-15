
    const images = [
    "portfolio/assets/Fotografie/beeldtaal.png",
    "portfolio/assets/Fotografie/bloem.jpeg",
    "portfolio/assets/Fotografie/Hoop.JPG",
    "portfolio/assets/Fotografie/Jolien_compositie.jpeg",
    "portfolio/assets/Fotografie/kleurfotografie.JPG",
    "portfolio/assets/Fotografie/Jolien_mode 1.jpeg",
    "portfolio/assets/Fotografie/mode2.png",
    "portfolio/assets/Fotografie/mode3.png",
    "portfolio/assets/Fotografie/mode4.png",
    "portfolio/assets/Fotografie/Portret.png",
    ];

    let current = 0;

    function nextImage() {
    current = (current + 1) % images.length;
    document.getElementById("sliderImage").src = images[current];
}

    function prevImage() {
    current = (current - 1 + images.length) % images.length;
    document.getElementById("sliderImage").src = images[current];
}

