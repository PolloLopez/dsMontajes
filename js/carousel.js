// Funcionalidad para mover el carrusel
let currentSlide = 0;

function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalSlides = images.children.length;
    const slideWidth = images.children[0].clientWidth;

    // Actualizar slide actual
    currentSlide += direction;

    // Control de límites
    if (currentSlide < 0) {
        currentSlide = 0;
    }
    if (currentSlide >= totalSlides - 1) {
        currentSlide = totalSlides - 1;
        images.style.transform = `translateX(calc(-${currentSlide * slideWidth}px + 100% - ${slideWidth}px))`;
    } else {
        images.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

// Botones para cambiar el slide
document.querySelector('.carousel-prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.carousel-next').addEventListener('click', () => moveSlide(1));

// Funcionalidad touch para pantallas táctiles
let startX = 0;
let isDragging = false;
const images = document.querySelector('.carousel-images');

// Capturar el toque inicial
images.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

// Detectar el movimiento del dedo
images.addEventListener('touchmove', (e) => {
    if (isDragging) {
        let touchX = e.touches[0].clientX;
        let moveX = startX - touchX;
        if (moveX > 50) {
            moveSlide(1); // Avanzar carrusel
            isDragging = false;
        } else if (moveX < -50) {
            moveSlide(-1); // Retroceder carrusel
            isDragging = false;
        }
    }
});

// Cuando se levanta el dedo
images.addEventListener('touchend', () => {
    isDragging = false;
});



