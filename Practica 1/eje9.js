function operacion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exito");
        }, 3000);
    });
}

operacion()
.then(function(resultado)  {
    console.log(resultado)
})
.catch(function(error)  {
    console.log(error)
});