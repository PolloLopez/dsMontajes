// Capturamos los elementos del menú de navegación
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// Funciones para abrir y cerrar el menú de navegación
abrir.addEventListener("click", () => {
    nav.classList.add("visible")
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Carousel de ferretería
let currentSlideFerreteria = 0; // Índice del slide actual de ferretería

function moveSlideFerreteria(direction) {
    const imagesFerreteria = document.querySelector('#carouselFerreteria .carousel-images');
    const totalSlidesFerreteria = imagesFerreteria.children.length; // Número total de imágenes
    const slideWidthFerreteria = imagesFerreteria.children[0].clientWidth; // Ancho de cada imagen

    // Actualiza el slide actual
    currentSlideFerreteria = currentSlideFerreteria + direction;

    // Si estamos en la primera imagen, no permitir ir hacia atrás
    if (currentSlideFerreteria < 0) {
        currentSlideFerreteria = 0;
    }

    // Si estamos en la última imagen, mantenerla alineada al borde derecho
    if (currentSlideFerreteria >= totalSlidesFerreteria - 1) {
        currentSlideFerreteria = totalSlidesFerreteria - 1;
        imagesFerreteria.style.transform = `translateX(calc(-${currentSlideFerreteria * slideWidthFerreteria}px + 100% - ${slideWidthFerreteria}px))`;
    } else {
        // Transición de las imágenes
        imagesFerreteria.style.transform = `translateX(-${currentSlideFerreteria * slideWidthFerreteria}px)`;
    }
}

// Manejo de deslizamiento táctil para el carrusel de ferretería
let startXFerreteria = 0;
let isDraggingFerreteria = false;

const imagesFerreteria = document.querySelector('#carouselFerreteria .carousel-images');

// Capturar el toque inicial
imagesFerreteria.addEventListener('touchstart', (e) => {
    startXFerreteria = e.touches[0].clientX; // Coordenada X del toque
    isDraggingFerreteria = true;
});

// Detectar el movimiento del dedo
imagesFerreteria.addEventListener('touchmove', (e) => {
    if (isDraggingFerreteria) {
        let touchXFerreteria = e.touches[0].clientX;
        let moveXFerreteria = startXFerreteria - touchXFerreteria;

        if (moveXFerreteria > 50) { // Si se desliza a la izquierda
            moveSlideFerreteria(1); // Avanza el carrusel
            isDraggingFerreteria = false; // Evita múltiples deslizamientos
        } else if (moveXFerreteria < -50) { // Si se desliza a la derecha
            moveSlideFerreteria(-1); // Retrocede el carrusel
            isDraggingFerreteria = false;
        }
    }
});

// Cuando se levanta el dedo
imagesFerreteria.addEventListener('touchend', () => {
    isDraggingFerreteria = false;
});
