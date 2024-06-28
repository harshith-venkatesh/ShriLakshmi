document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slides.length;
            showSlide(nextIndex);
        }, 1000);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(intervalId);
            showSlide(index);
            startCarousel();
        });
    });

    showSlide(currentIndex);
    startCarousel();
});
