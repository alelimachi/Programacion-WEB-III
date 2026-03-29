function miFuncion(arreglo) {
    let may = arreglo[0];
    let men = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > may) {
            may = arreglo[i];
        }
        if (arreglo[i] < men) {
            men = arreglo[i];
        }
    }

    return { may: may, men: men };
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj); 