let nombre = prompt("Ingrese su nombre");


if (nombre === "") {
    alert("¡Debes colocar tu nombre!")
}

else {
    alert(`¡Bienvenido, ${nombre}!`);
}

let edad = prompt("¿Cuál es tu edad?");

if (edad > 18) {
    alert("¡Bienvenido a Kinkon Bebidas S.A.!");
}

while (edad < 18) {
    edad = prompt("Para ingresar, debes ser mayor de edad.");
    alert("¡Bienvenido a Kinkon Bebidas S.A.!");
}







