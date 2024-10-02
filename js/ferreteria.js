// Variable para almacenar los productos
let productos = [];

// Definir la categoría que nos interesa
const categorias = [
    { nombre: "FERRETERIA", contenedor: "#contFerreteria" }
];

// Cargar productos desde el archivo JSON
fetch("./data/productos.json")
    .then(res => res.json())
    .then(data => {
        productos = data;

        // Filtrar y mostrar productos de ferretería
        categorias.forEach(categoria => {
            const productosFiltrados = productos.filter(producto => producto.categoria === categoria.nombre);
            const contenedor = document.querySelector(categoria.contenedor);
            mostrarProductos(productosFiltrados, contenedor);
        });
    })
    .catch(error => console.error("Error al cargar los productos:", error));

// Función para mostrar productos en el DOM
const mostrarProductos = (productos, contenedor) => {
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar los productos

    productos.forEach((producto, index) => {
        const div = document.createElement("div");
        div.classList.add("carousel-imagenes"); // Aplica la clase "carousel-imagenes"
        div.innerHTML = `
            <div id="carouselFerreteria" class="carousel-imagenes">
                <img class="carousel-imagen" src="${producto.img}" alt="${producto.titulo}">

            </div>
        `;


        contenedor.appendChild(div);
    });
};

function moveSlide(carruselId, direction) {
    console.log(`Moviendo el carrusel ${carruselId} en dirección: ${direction}`);

    const images = document.querySelector(`#${carruselId} .carousel-imagenes`);
    const totalSlides = images.children.length;
    const slideWidth = images.children[0].clientWidth;
    let currentSlide = 0; // Define una variable específica del carrusel

    // Actualiza el índice del slide actual según la dirección
    currentSlide += direction;

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