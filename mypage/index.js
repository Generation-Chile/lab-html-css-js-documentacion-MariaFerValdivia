const carousel = document.querySelector(".carrusel");
const cards = carousel.querySelectorAll(".card");

let currentSlide = 0;

function slide(index) {
  currentSlide = index;
  carousel.style.transform = `translateX(-${currentSlide * cards[0].offsetWidth}px)`;
}

setInterval(() => {
  slide((currentSlide + 1) % cards.length);
}, 3000);
