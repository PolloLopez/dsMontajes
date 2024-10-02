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

// Carousel de proyectos
let currentSlideProyectos = 0; // Índice del slide actual de proyectos

function moveSlideProyectos(direction) {
    console.log(`Moviendo el carrusel de proyectos en dirección: ${direction}`);

    const imagesFerreteria = document.querySelector('#carouselFerreteria .carousel-imagenes');
    const totalSlidesFerreteria = imagesFerreteria.children.length;
    const slideWidthFerreteria = imagesFerreteria.children[0].clientWidth;


    // Actualiza el slide actual
    currentSlideProyectos = currentSlideProyectos + direction;

    // Control de límites para evitar mover fuera de los límites
    if (currentSlideFerreteria < 0) {
        currentSlideFerreteria = 0;
    }

    if (currentSlideFerreteria >= totalSlidesFerreteria - 1) {
        currentSlideFerreteria = totalSlidesFerreteria - 1;
        imagesFerreteria.style.transform = `translateX(calc(-${currentSlideFerreteria * slideWidthFerreteria}px + 100% - ${slideWidthFerreteria}px))`;
    } else {
        imagesFerreteria.style.transform = `translateX(-${currentSlideFerreteria * slideWidthFerreteria}px)`;
    }
}

// Manejo de deslizamiento táctil para el carrusel de proyectos
let startXProyectos = 0;
let isDraggingProyectos = false;

const imagesProyectos = document.querySelector('#carouselProyectos .carousel-imagenes');

imagesProyectos.addEventListener('touchstart', (e) => {
    startXProyectos = e.touches[0].clientX;
    isDraggingProyectos = true;
});

imagesProyectos.addEventListener('touchmove', (e) => {
    if (isDraggingProyectos) {
        let touchXProyectos = e.touches[0].clientX;
        let moveXProyectos = startXProyectos - touchXProyectos;

        if (moveXProyectos > 50) {
            moveSlideProyectos(1); // Avanza el carrusel
            isDraggingProyectos = false;
        } else if (moveXProyectos < -50) {
            moveSlideProyectos(-1); // Retrocede el carrusel
            isDraggingProyectos = false;
        }
    }
});

imagesProyectos.addEventListener('touchend', () => {
    isDraggingProyectos = false;
});