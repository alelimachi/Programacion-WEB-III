function miFuncion(cadena) {
    let invertido = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        invertido += cadena[i];
    }

    return cadena === invertido;
}

let band1 = miFuncion("oruro");
console.log(band1); 

let band2 = miFuncion("hola");
console.log(band2); 