let nombre = prompt("Ingrese su nombre");


while (nombre === "") {
    nombre = prompt ("¡Debes colocar tu nombre!");
}

if (nombre === nombre) {
    alert(`¡Bienvenido/a, ${nombre}!`);
}


let edad = prompt("¿Cuál es tu edad?");

while (edad === "") {
    edad = prompt ("¡Debes colocar tu edad!");
}

while (edad >= 120) {
    edad = prompt ("Debes ingresar una edad válida.")
}

while (edad <= 17) {
    edad = prompt("Para ingresar, debes ser mayor de edad.");
}

if (edad >= 18) {
    alert("¡Bienvenido/a a Kinkon Bebidas S.A.!");
}


















