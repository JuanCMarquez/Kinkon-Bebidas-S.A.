const usuario = {
    nombre: "juan",
    edad: 45,
    direccion: "AAV",
    cabello: "rojo",
    telefono: {
        cel: {
            cel1: 1234,
            cel2: 6498
        },
        casa: {
            casa1: 54,
            casa2: 786
        },
        trabajo: {
            trabajo1: 89,
            trabajo2: 158515
        },
    },
};

const {
    nombre,
    edad,
    telefono: { trabajo: { trabajo1 } }
} = usuario;

console.log(trabajo1, nombre, edad);
