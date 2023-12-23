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
        nombre: "Temple Scottish",
        tipo: "Scottish Ale",
        porcentajeAlcohol: 5.5,
        contenido: "473 ml,",
        precio: 1500
    },
    {
        tipodebebida: "Cerveza",
        nombre: "Temple Wolf Ipa",
        tipo: "India Pale Ale",
        porcentajeAlcohol: 5.8,
        contenido: "473 ml,",
        precio: 1500
    },
    {
        tipodebebida: "Cerveza",
        nombre: "Temple Honey",
        tipo: "Honey",
        porcentajeAlcohol: 4.5,
        contenido: "473 ml,",
        precio: 1500
    },
    {
        tipodebebida: "Vino tinto",
        nombre: "Trapiche Reserva",
        tipo: "Malbec",
        porcentajeAlcohol: 14.5,
        contenido: "750 ml,",
        precio: 3700
    },
    {
        tipodebebida: "Vino tinto",
        nombre: "Cafayate Reserva",
        tipo: "Malbec",
        porcentajeAlcohol: 14.3,
        contenido: "750 ml,",
        precio: 2800
    },
    {
        tipodebebida: "Vino tinto",
        nombre: "Casillero del Diablo",
        tipo: "Malbec",
        porcentajeAlcohol: 13.5,
        contenido: "750 ml,",
        precio: 3700
    },
    {
        tipodebebida: "Whisky",
        nombre: "Ballantine's Finest",
        tipo: "Blend Scotch Whisky",
        porcentajeAlcohol: 40.0,
        contenido: "750 ml,",
        precio: 14000
    },
    {
        tipodebebida: "Whisky",
        nombre: "Johnnie Walker Red Label",
        tipo: "Blend Scotch Whisky",
        porcentajeAlcohol: 40.0,
        contenido: "750 ml,",
        precio: 14000
    },
    {
        tipodebebida: "Whisky",
        nombre: "Johnnie Walker Black Label",
        tipo: "Blend Scotch Whisky",
        porcentajeAlcohol: 40.0,
        contenido: "750 ml,",
        precio: 25000
    },
    {
        tipodebebida: "Whisky",
        nombre: "J&B",
        tipo: "Blend Scotch Whisky",
        porcentajeAlcohol: 40.0,
        contenido: "750 ml,",
        precio: 8000
    },
    {
        tipodebebida: "Whisky",
        nombre: "Old Smuggler",
        tipo: "Whisky Nacional",
        porcentajeAlcohol: 40.0,
        contenido: "750 ml,",
        precio: 6000
    },
    {
        tipodebebida: "Whisky",
        nombre: "Blenders",
        tipo: "Whisky Nacional",
        porcentajeAlcohol: 40.0,
        contenido: "750 ml,",
        precio: 5000
    },
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
            alert(`Nombre: ${bebida.nombre}, Tipo: ${bebida.tipo}, Porcentaje de Alcohol: ${bebida.porcentajeAlcohol}%, Contenido: ${bebida.contenido} Precio: $${bebida.precio}`);
        });
    } else {
        alert(`Lo siento, no encontramos información sobre bebidas alcohólicas del tipo ${tipoBebida}.`);
    }
} while (true);