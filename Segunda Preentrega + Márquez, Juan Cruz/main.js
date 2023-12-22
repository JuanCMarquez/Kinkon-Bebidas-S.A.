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
        tipodebebida: "Cerveza",
        nombre: "Temple Cósmica",
        tipo: "Lager",
        porcentajeAlcohol: 5.0,
        precio: 1500
    },
    {
        tipodebebida: "Cerveza",
        nombre: "Temple Scottish",
        tipo: "Lager",
        porcentajeAlcohol: 5.0,
        precio: 1500
    },
    {
        tipodebebida: "Cerveza",
        nombre: "Temple Wolf Ipa",
        tipo: "Lager",
        porcentajeAlcohol: 5.0,
        precio: 1500
    },
    {
        tipodebebida: "Cerveza",
        nombre: "Temple Honey",
        tipo: "Lager",
        porcentajeAlcohol: 5.0,
        precio: 1500
    },
    {
        tipodebebida: "Vino tinto",
        nombre: "Trapiche Reserva",
        tipo: "Malbec",
        porcentajeAlcohol: 13.5,
        precio: 14.99
    },
    {
        tipodebebida: "Whisky",
        nombre: "Ballantine's Finest",
        tipo: "Blend Scotch Whisky",
        porcentajeAlcohol: 40.0,
        precio: 49.99
    }
];

function buscarBebidasPorTipo(arr, tipo) {
    const resultados = arr.filter(bebida => bebida.tipodebebida.toLowerCase().includes(tipo.toLowerCase()));
    return resultados.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

do {
    let tipoBebida = prompt("Escribe el tipo de bebida alcohólica que estás buscando.");

    if (tipoBebida === null) {
        alert("¡Gracias por su visita a KinKon Bebidas S.A!");
        break;
    }

    if (tipoBebida.trim() === '') {
        alert("¡Debes elegir un tipo de bebida!");
        continue;
    }

    if (tipoBebida.toLowerCase() === 'salir') {
        break;
    }

    const bebidasEncontradas = buscarBebidasPorTipo(bebidasAlcoholicas, tipoBebida);

    if (bebidasEncontradas.length > 0) {
        alert("Contamos con las siguientes bebidas alcohólicas:");
        bebidasEncontradas.forEach(bebida => {
            alert(`Tipo de Bebida: ${bebida.tipodebebida}, Nombre: ${bebida.nombre}, Tipo: ${bebida.tipo}, Porcentaje de Alcohol: ${bebida.porcentajeAlcohol}%, Precio: $${bebida.precio}`);
        });
    } else {
        alert(`Lo siento, no encontramos información sobre bebidas alcohólicas del tipo ${tipoBebida}.`);
    }
} while (true);