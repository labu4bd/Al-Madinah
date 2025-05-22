document.addEventListener('DOMContentLoaded', function() {
    const slide = document.querySelector('.gallery-slide');
    const images = document.querySelectorAll('.gallery-slide img');
    let currentIndex = 0;
    const totalImages = images.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        slide.style.transform = `translateX(${offset}%)`;
    }

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);
});