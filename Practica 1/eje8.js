function prepararComida() {
    console.log("comida de sajta preparada¡¡¡");

}

setTimeout(prepararComida, 2000);


setTimeout(function() {
    console.log("callback ejecutando");
}, 2000);