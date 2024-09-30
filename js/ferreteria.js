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
        div.classList.add("proyectoFerreteria"); // Clase para aplicar estilos
        div.innerHTML = `
            <div class="tarjFerreteria">
                <img class="producto-img" src="${producto.img}" alt="${producto.titulo}">
                <h4 class="titulo-producto">${producto.titulo}</h4>
                <p class="descrip-producto">${producto.descripcion}</p>
            </div>
        `;


        contenedor.appendChild(div);
    });
};