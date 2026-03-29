function leerArchivo(callback) {
    setTimeout(() => {
        callback("Contenido del archivo");
    }, 1000);
}

function leerArchivoPromesa() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Contenido del archivo");
        }, 1000);
    });
}
leerArchivoPromesa()
    .then(res => console.log(res));