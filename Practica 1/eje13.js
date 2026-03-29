function obtenerUsuario() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 2, nombre: "Lucía" });
        }, 1000);
    });
}

function obtenerLibros(usuario) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["El principito", "1984"]);
        }, 1000);
    });
}

function obtenerDetalleLibro(libro) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Detalle del libro: " + libro);
        }, 1000);
    });
}

async function proceso() {
    let usuario = await obtenerUsuario();
    console.log("Usuario:", usuario.nombre);

    let libros = await obtenerLibros(usuario);
    console.log("Libros:", libros);

    let detalle = await obtenerDetalleLibro(libros[0]);
    console.log(detalle);
}

proceso();