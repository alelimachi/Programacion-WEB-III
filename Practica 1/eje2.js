function miFuncion(cadena) {
    let inv = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        inv += cadena[i];
    }

    return inv;
}

let cad = miFuncion("abcd");
console.log(cad); 