//const numeros = [1, 2, 3, 4, 5];

//console.log (numeros [0]);

/*const reinos = [
  { id: 1, nombre: "Reino del Norte" },
  { id: 2, nombre: "Reino del Sur" },
  { id: 3, nombre: "Reino del Oeste" },
  { id: 4, nombre: "Reino del Este" },
];

let reinoEncontrado;
for (const iterator of reinos) {
  if (iterator.nombre === "Reino del Norte" || iterator.nombre === "Reino del Sur" || 
  iterator.nombre === "Reino del Oeste" || iterator.nombre === "Reino del Este") {
    reinoEncontrado = iterator;
  }
}

prompt("Selecciona un reino.")

if (reinoEncontrado) {
  alert("Has seleccionado un reino. Prepárate para pelear.");
} else {
  alert("¡Debes seleccionar un reino!");
}*/

const reinos = [
  { id: 1, nombre: "Reino del Norte" },
  { id: 2, nombre: "Reino del Sur" },
  { id: 3, nombre: "Reino del Oeste" },
  { id: 4, nombre: "Reino del Este" },
];

let reinoEncontrado;
let reinoElegido = prompt("Selecciona un reino:")
console.log(reinoElegido)

for (const iterator of reinos) {
  if (iterator.nombre === reinoElegido){
    reinoEncontrado = true;
  }
}

if (reinoEncontrado) {
  alert("Has seleccionado un reino. Prepárate para pelear.");
} else {
  alert("¡Debes seleccionar un reino!");
}


