window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
    });
});

