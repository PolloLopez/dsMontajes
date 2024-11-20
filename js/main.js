function moveSlide(direction, button) {
    const carrusel = button.closest('.carrusel');
    const items = carrusel.querySelector('.carrusel-items');
    const itemWidth = carrusel.querySelector('.carrusel-item').offsetWidth;
    const maxScroll = items.scrollWidth - items.clientWidth;

    let currentScroll = items.scrollLeft;
    currentScroll += direction * itemWidth;

    // Asegurar límites
    if (currentScroll < 0) currentScroll = 0;
    if (currentScroll > maxScroll) currentScroll = maxScroll;

    items.scrollLeft = currentScroll;
}
