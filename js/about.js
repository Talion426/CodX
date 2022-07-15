const swiper = new Swiper(".swiper", {
    loop: true,
    simulateTouch: false,
    speed: 1000,
    effect: "fade",
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        waitForTransition: false,
    },
});