let nombres = ["camila", "andres", "juan", "mario", "pedro", "carlitos"];

function obtenerElementoAleatorio(array) {
    let nombreAleatorio = Math.floor(Math.random() * array.length);
    return array[nombreAleatorio];
}
console.log (nombreAleatorio);

/*var nombreAleatorio = obtenerElementoAleatorio (nombres);*/

/*return nombres [nombreAleatorio];*/

