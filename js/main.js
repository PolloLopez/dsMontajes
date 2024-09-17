/*** DIRIGE AL PRODUCTO ***/
const navLinks = document.querySelectorAll('a[href^="#"]'); // Obtener todos los enlaces que apuntan a secciones dentro de la página
let carrito = [];

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let productos = [];

