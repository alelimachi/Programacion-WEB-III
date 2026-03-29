function paso1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1");
            resolve(2);
        }, 1000);
    });
}

function paso2(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2");
            resolve(valor + 3);
        }, 1000);
    });
}

function paso3(valor) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3");
            resolve(valor * 4);
        }, 1000)
    });
}

paso1()
     .then(res => paso2(res))
     .then(res => paso3(res))
     .then(res =>  console.log("resultado final: ",res));