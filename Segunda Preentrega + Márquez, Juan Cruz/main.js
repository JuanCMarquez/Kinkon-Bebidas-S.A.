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

function obtenerPropiedades(arr, propiedad, valor) {
    return arr.find(function (bebida) {
        return bebida[propiedad] === valor;
    });
}

/*do {
    let nombreBebida = prompt("Escriba el nombre de su bebida alcohólica favorita.");

    if (nombreBebida.toLowerCase() === 'salir') {
        break; 
    }

    const bebidaEncontrada = obtenerPropiedades(bebidasAlcoholicas, 'nombre', nombreBebida);

    if (bebidaEncontrada) {
        alert(`Contamos con ${bebidaEncontrada.nombre}: Tipo: ${bebidaEncontrada.tipo}, Porcentaje de Alcohol: ${bebidaEncontrada.porcentajeAlcohol}%, Precio: $${bebidaEncontrada.precio}`);
    } else {
        alert("¡Debes elegir tu tipo de bebida favorita!");
    }
} while (true);*/

do {
    let nombreBebida = prompt("Escriba el nombre de tu bebida alcohólica favorita.");

    // Manejo de cancelación o entrada vacía
    if (nombreBebida === null || nombreBebida.trim() === '') {
        alert("¡Debes elegir tu tipo de bebida favorita!");
        continue; // Vuelve al inicio del bucle
    }

    if (nombreBebida.toLowerCase() === 'salir') {
        break;
    }

    const bebidaEncontrada = obtenerPropiedades(bebidasAlcoholicas, 'nombre', nombreBebida);

    if (bebidaEncontrada) {
        alert(`Contamos con ${bebidaEncontrada.nombre}: Tipo: ${bebidaEncontrada.tipo}, Porcentaje de Alcohol: ${bebidaEncontrada.porcentajeAlcohol}%, Precio: $${bebidaEncontrada.precio}`);
    } else {
        alert(`Lo siento, no encontramos información sobre ${nombreBebida}.`);
    }
} while (true);


