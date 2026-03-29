function miFuncion(arreglo) {
    let resultado = {
        pares: [],
        impares: []
    };

    let iPar = 0;
    let iImpar = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            resultado.pares[iPar] = arreglo[i];
            iPar++;
        } else {
            resultado.impares[iImpar] = arreglo[i];
            iImpar++;
        }
    }

    return resultado;
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj); 