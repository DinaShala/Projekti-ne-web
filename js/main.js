const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
    slides[current].classList.remove('active');

    current = current + 1;
    if(current === slides.length){
        current = 0;
    }
    slides[current].classList.add('active');
}
setInterval(nextSlide, 3000);