function obtenerUsuario(callback) {
    setTimeout(() => {
        callback({ id: 1, nombre: "Ana" });
    }, 1000);
}

function obtenerPeliculas(usuario, callback) {
    setTimeout(() => {
        callback(["Matrix", "Inception"]);
    }, 1000);
}

function obtenerInfoPelicula(pelicula, callback) {
    setTimeout(() => {
        callback("Información de la película: " + pelicula);
    }, 1000);
}

obtenerUsuario(usuario => {
    console.log("Usuario:", usuario.nombre);
    obtenerPeliculas(usuario, peliculas => {
        console.log("Películas favoritas:", peliculas);
        obtenerInfoPelicula(peliculas[0], info => {
            console.log(info);
        });
    });
});