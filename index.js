// Puedes agregar tu lógica de Firebase y más funcionalidades JS aquí

// Función para cargar páginas dinámicamente
function cargarPagina(pagina) {
    var contenido = document.getElementById("contenido");

    // Limpiar el contenido actual
    contenido.innerHTML = "";

    // Cargar la página correspondiente
    if (pagina === "formulario") {
        cargarFormulario();
    } else if (pagina === "biblioteca") {
        cargarBiblioteca();
    }
}

// Función para cargar el formulario
function cargarFormulario() {
    var formularioHTML = `
        <div class="card mt-4">
            <div class="card-body">
                <h5 class="card-title">Agregar Nuevo Libro</h5>
                <form id="formLibro">
                    <!-- ... (contenido del formulario) ... -->
                    <button type="button" class="btn btn-primary" onclick="agregarLibro()">Agregar Libro</button>
                </form>
            </div>
        </div>
    `;
    document.getElementById("contenido").innerHTML = formularioHTML;
}

// Función para cargar la biblioteca
function cargarBiblioteca() {
    var bibliotecaHTML = `
        <div class="mt-4">
            <h2>Mis Libros</h2>
            <button class="btn btn-success mb-3" onclick="cargarPagina('formulario')">Agregar Libro</button>
            <div id="filtroTitulo" class="form-group">
                <label for="tituloFiltro">Buscar por Título:</label>
                <input type="text" class="form-control" id="tituloFiltro" oninput="filtrarPorTitulo()">
            </div>
            <ul id="listaLibros" class="list-group">
                <!-- ... (contenido de la biblioteca) ... -->
            </ul>
        </div>
    `;
    document.getElementById("contenido").innerHTML = bibliotecaHTML;

    // Puedes agregar aquí la lógica para cargar y mostrar la lista de libros desde Firebase
}

// Función para filtrar libros por título en la biblioteca
function filtrarPorTitulo() {
    var filtro = document.getElementById("tituloFiltro").value.toLowerCase();
    var listaLibros = document.getElementById("listaLibros");

    for (var i = 0; i < listaLibros.children.length; i++) {
        var libro = listaLibros.children[i];
        var tituloLibro = libro.querySelector("h5").innerText.toLowerCase();

        // Mostrar u ocultar libros según el filtro
        if (tituloLibro.includes(filtro)) {
            libro.style.display = "block";
        } else {
            libro.style.display = "none";
        }
    }
}

// Puedes agregar aquí la función agregarLibro() y otras funciones necesarias

// Inicializar la aplicación cargando la página del formulario por defecto
cargarPagina('formulario');
