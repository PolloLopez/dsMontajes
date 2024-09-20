const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

// Carousel proyectos
let currentSlide = 0;

function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalSlides = images.children.length;
    const slideWidth = images.children[0].clientWidth;

    // Actualiza el slide actual
    currentSlide = currentSlide + direction;

    // Si estamos en la primera imagen, no permitir ir hacia atrás
    if (currentSlide < 0) {
        currentSlide = 0;
    }

    // Si estamos en la última imagen, mantenerla alineada al borde derecho
    if (currentSlide >= totalSlides - 1) {
        currentSlide = totalSlides - 1;
        images.style.transform = `translateX(calc(-${currentSlide * slideWidth}px + 100% - ${slideWidth}px))`;
    } else {
        // Transición de las imágenes
        images.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

//Slide en tactiles
let startX = 0;
let isDragging = false;

const images = document.querySelector('.carousel-images');

// Capturar el toque inicial
images.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Coordenada X del toque
    isDragging = true;
});

// Detectar el movimiento del dedo
images.addEventListener('touchmove', (e) => {
    if (isDragging) {
        let touchX = e.touches[0].clientX;
        let moveX = startX - touchX;

        if (moveX > 50) { // Si se desliza a la izquierda
            moveSlide(1); // Avanza el carrusel
            isDragging = false; // Evita múltiples deslizamientos
        } else if (moveX < -50) { // Si se desliza a la derecha
            moveSlide(-1); // Retrocede el carrusel
            isDragging = false;
        }
    }
});

// Cuando se levanta el dedo
images.addEventListener('touchend', () => {
    isDragging = false;
});