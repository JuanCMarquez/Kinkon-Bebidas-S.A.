let nombre = prompt("Ingrese su nombre");


if (nombre === "") {
    alert("¡Debes colocar tu nombre!")
}

else {
    alert(`¡Bienvenido/a, ${nombre}!`);
}

let edad = prompt("¿Cuál es tu edad?");

while (edad <= 17 || (""))  {
    edad = prompt("Para ingresar, debes ser mayor de edad.");
}

if (edad >= 18) {
    alert("¡Bienvenido/a a Kinkon Bebidas S.A.!");
}











