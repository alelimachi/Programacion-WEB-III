function obtenerPrecio() {
    return Promise.resolve(100);
}

function aplicarDescuento(precio) {
    return Promise.resolve(precio * 0.8);
}

function agregarImpuesto(precio) {
    return Promise.resolve(precio + 10);
}

async function calcularPrecioFinal() {
    let precio = await obtenerPrecio();
    let conDescuento = await aplicarDescuento(precio);
    let final = await agregarImpuesto(conDescuento);

    console.log("Precio final:", final);
}

calcularPrecioFinal();