document.addEventListener('DOMContentLoaded', function() {
    // Gallery functionality (unchanged)
    const slide = document.querySelector('.gallery-slide');
    const images = document.querySelectorAll('.gallery-slide img');
    let currentIndex = 0;
    const totalImages = images.length;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        slide.style.transform = `translateX(${offset / totalImages}%)`;
    }
    
    setInterval(nextSlide, 3000);

    // Improved footer visibility control
    const footer = document.querySelector('footer');
    let lastScrollPosition = window.pageYOffset;
    const footerHeight = footer.offsetHeight;
    
    // Show footer after initial scroll
    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        
        // Always show footer when scrolling down
        if (currentScrollPosition > lastScrollPosition) {
            document.body.classList.add('scrolled');
        } 
        // Hide only when at very top of page
        else if (currentScrollPosition <= 10) {
            document.body.classList.remove('scrolled');
        }
        
        lastScrollPosition = currentScrollPosition;
    });

    // Show footer on page load if content is scrollable
    if (document.body.scrollHeight > window.innerHeight) {
        setTimeout(() => {
            document.body.classList.add('scrolled');
        }, 1000);
    }
});