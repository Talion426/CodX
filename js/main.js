const swiper = new Swiper(".swiper", {
    loop: true,
    simulateTouch: false,
    slidesPerView: "auto",
    speed: 1000,
    centeredSlides: true,
    autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        waitForTransition: false,
    },
});
