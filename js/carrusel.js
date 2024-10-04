// Selecciona todos los carruseles
const carruseles = document.querySelectorAll(".carrusel-items");

carruseles.forEach((carrusel) => {
    let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
    let intervalo = null;
    let step = 1;

    const start = () => {
        intervalo = setInterval(function () {
            carrusel.scrollLeft += step;
            if (carrusel.scrollLeft >= maxScrollLeft) {
                step = -1;
            } else if (carrusel.scrollLeft === 0) {
                step = 1;
            }
        }, 50);
    };

    const stop = () => {
        clearInterval(intervalo);
    };

    // Para detener el movimiento cuando el mouse está encima del carrusel
    carrusel.addEventListener('mouseover', stop);
    carrusel.addEventListener('mouseout', start);

    // Iniciar el carrusel
    start();
});

// Función para mover el carrusel manualmente con los botones prev/next
function moveSlide(direction, button) {
    const carrusel = button.parentElement.querySelector('.carrusel-items');
    const scrollAmount = 300; // Ajusta según el tamaño de tus items
    carrusel.scrollLeft += direction * scrollAmount;
}
