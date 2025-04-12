document.addEventListener('DOMContentLoaded', () => {
    const galleries = document.querySelectorAll('.image-gallery');
    const slideIntervalTime = 4000; // Re-enabled interval time

    galleries.forEach(gallery => {
        const imageContainer = gallery.querySelector('.slider-images');
        const images = imageContainer.querySelectorAll('img');
        const prevButton = gallery.querySelector('.prev');
        const nextButton = gallery.querySelector('.next');
        
        let currentImageIndex = 0;
        const totalImages = images.length;
        let slideTimer; // Re-enabled timer variable

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            showImage(currentImageIndex);
        }

        function prevImage() {
             currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
             showImage(currentImageIndex);
        }
        
        // Re-enabled automatic timer function
        function startSlideTimer() {
            clearInterval(slideTimer);
            slideTimer = setInterval(nextImage, slideIntervalTime);
        }
        

        // Event listeners for manual controls
        nextButton.addEventListener('click', () => {
            nextImage();
            startSlideTimer(); // Re-enabled timer reset
        });

        prevButton.addEventListener('click', () => {
            prevImage();
            startSlideTimer(); // Re-enabled timer reset
        });

        // Initial setup
        showImage(currentImageIndex);
        startSlideTimer(); // Re-enabled automatic start
    });
}); 