function descargarArchivo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Archivo descargado");
        }, 1000);
    });
}

function descargarArchivoCallback(callback) {
    setTimeout(() => {
        callback("Archivo descargado");
    }, 1000);
}

descargarArchivoCallback(function(resultado) {
    console.log("Callback:", resultado);
});

async function proceso() {
    let resultado = await descargarArchivo();
    console.log("Async/Await:", resultado);
}
proceso();