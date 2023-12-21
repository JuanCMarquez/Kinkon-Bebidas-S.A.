let nombre = prompt("Ingrese su nombre");


while (nombre === "" || nombre === null) {
    nombre = prompt("¡Debes colocar tu nombre!");
}

if (nombre === nombre) {
    alert(`¡Bienvenido/a, ${nombre}!`);
}

let edad = prompt("¿Cuál es tu edad?");

while (edad === "" || edad === null) {
    edad = prompt("¡Debes colocar tu edad!");
}

if (!isNaN(edad)) {
    if (edad >= 18 && edad <= 120) {
        alert("¡Bienvenido/a a Kinkon Bebidas S.A.!");
    } else {
        alert("Debes ingresar una edad válida para tener acceso a Kinkon Bebidas S.A.");
    }
} else {
    alert("Debes ingresar un número válido para la edad.");
}

let bebidasAlcoholicas = [
    {
        nombre: "Cerveza",
        tipo: "Lager",
        porcentajeAlcohol: 5.0,
        precio: 2.99
    },
    {
        nombre: "Vino tinto",
        tipo: "Cabernet Sauvignon",
        porcentajeAlcohol: 13.5,
        precio: 14.99
    },
    {
        nombre: "Whisky",
        tipo: "Single Malt",
        porcentajeAlcohol: 40.0,
        precio: 49.99
    },

];

function obtenerPropiedades(arr, propiedad) {
    return arr.map(function (bebida) {
        return bebida[propiedad];
    });
}

 
    let nombreBebidas = prompt("Escriba el tipo de su bebida alcohólica favorita.");

    const resultados = bebidasAlcoholicas.map(bebidasAlcoholicas => {
        if (bebidasAlcoholicas.hasOwnProperty(nombre)) {
            alert (`Contamos con los siugientes productos:${bebidasAlcoholicas.nombre}: ${bebidasAlcoholicas[propiedad]}`);
        } else {
            alert (`¡Debes elegir tu tipo de bebida favorita!`);
        }
    });

    

