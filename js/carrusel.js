let currentIndex = 0;
let autoScroll; // Variable para manejar el movimiento automático

function moveSlide(direction, btn) {
    const carrusel = btn.closest('.carrusel').querySelector('.carrusel-items');
    const totalItems = carrusel.children.length;
    const itemsPerView = 4; // Número de imágenes visibles
    const itemWidth = carrusel.children[0].offsetWidth; // Ancho de cada imagen

    currentIndex += direction;

    // Limitar el índice dentro del rango permitido
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalItems - itemsPerView) {
        currentIndex = totalItems - itemsPerView;
    }

    // Mover el carrusel
    const translateX = -(currentIndex * itemWidth);
    carrusel.style.transform = `translateX(${translateX}px)`;

    // Reiniciar el scroll automático cuando el usuario interactúa
    restartAutoScroll();
}

// Movimiento automático
function startAutoScroll(carrusel) {
    const itemsPerView = 4;
    const totalItems = carrusel.children.length;

    autoScroll = setInterval(() => {
        currentIndex++;
        if (currentIndex >= totalItems - itemsPerView) {
            currentIndex = 0; // Reinicia al principio
        }
        const translateX = -(currentIndex * carrusel.children[0].offsetWidth);
        carrusel.style.transform = `translateX(${translateX}px)`;
    }, 3000); // Cambia cada 3 segundos
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

function restartAutoScroll() {
    stopAutoScroll();
    startAutoScroll(document.querySelector('.carrusel-items'));
}

// Gestos táctiles
function enableTouch(carrusel) {
    let startX = 0;
    let endX = 0;

    carrusel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carrusel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    carrusel.addEventListener('touchend', () => {
        const distance = endX - startX;

        if (distance > 50) {
            // Desplazar a la izquierda
            moveSlide(-1, carrusel);
        } else if (distance < -50) {
            // Desplazar a la derecha
            moveSlide(1, carrusel);
        }
    });
}

// Iniciar funcionalidad
document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel-items');

    // Habilitar scroll táctil
    enableTouch(carrusel);

    // Comenzar el desplazamiento automático
    startAutoScroll(carrusel);

    // Pausar desplazamiento automático al hacer hover
    carrusel.addEventListener('mouseenter', stopAutoScroll);
    carrusel.addEventListener('mouseleave', () => startAutoScroll(carrusel));
});
