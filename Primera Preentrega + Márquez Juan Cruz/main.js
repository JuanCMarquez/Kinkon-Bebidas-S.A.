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


















