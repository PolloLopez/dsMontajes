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
