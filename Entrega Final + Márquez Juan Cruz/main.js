function rechazarEdad() {
    salirPrograma();
}

function salirPrograma() {
    window.location.href = 'https://www.google.com';
}

function reproducirAudio() {
    let audio = document.getElementById('sonidoMono');
    audio.play();
}

function confirmarEdad() {
    reproducirAudio();

    let seccionVerificacionEdad = document.getElementById('age-verification');
    seccionVerificacionEdad.style.display = 'none';
    let contenedorCarruselNav = document.getElementById('nav-carousel-container');
    let contenidoVerificado = document.getElementById('age-verified-content');
    let piePagina = document.getElementById('footer');

    contenedorCarruselNav.style.display = 'block';
    contenidoVerificado.style.display = 'block';
    piePagina.style.display = 'block';

    localStorage.setItem("esAdulto", "true");

    window.scrollTo(0, 0);
}

function cargarInicio() {
    document.getElementById("content").innerHTML;
}

function cargarProductos() {
    document.getElementById("content").innerHTML;
}

function cargarCarrito() {
    document.getElementById("content").innerHTML;
}

window.onload = function () {
    const esAdulto = localStorage.getItem("esAdulto");

    if (esAdulto === "true") {
        cargarInicio();
        document.getElementById("nav-carousel-container").style.display = "block";
        document.getElementById('footer').style.display = 'block'; // Agrega esta línea
    } else {
        document.getElementById("age-verification").style.display = "block";
    }
};

let productosCargados = [];
const carrito = [];
let contador = 0;

fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        productosCargados = data;
    })
    .catch(error => {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "¡Algo salió mal en la carga de productos!",
            footer: 'Asegúrate de tener una buena conexión a internet.'
        });
    });

function clickBoton(boton) {
    $(boton).addClass('clickeado');
    setTimeout(function () {
        $(boton).removeClass('clickeado');
    }, 100);
}

function agregarAlCarrito(producto) {
    const productoEnCarrito = carrito.find(p => p.nombre.toLowerCase() === producto.nombre.toLowerCase());

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    contador++;

    const contadorElemento = document.getElementById("contador");
    if (contadorElemento) {
        contadorElemento.textContent = contador;
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const totalElemento = document.getElementById("total");

    carritoLista.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} x${producto.cantidad} - $${(producto.precio * producto.cantidad).toFixed(0)}`;
        carritoLista.appendChild(li);

        total += producto.precio * producto.cantidad;
    });

    totalElemento.textContent = total.toFixed(0);
}

document.querySelectorAll(".add-to-cart-btn").forEach(boton => {
    boton.addEventListener("click", function () {
        const nombreProducto = this.dataset.product;
        const producto = productosCargados.find(p => p.nombre === nombreProducto);

        if (producto) {
            agregarAlCarrito(producto);
        }
    });
});

function resetearContador() {
    contador = 0;
    const contadorElemento = document.getElementById("contador");
    if (contadorElemento) {
        contadorElemento.textContent = contador;
    }
}

function sonidoVenta() {
    let audio = new Audio('./assets/sounds/sonidoVenta.mp3');
    audio.play();
}

document.getElementById("boton-pago").addEventListener("click", function () {
    if (carrito.length !== 0) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                cancelButton: "btn btn-danger",
                confirmButton: "btn btn-success",
            },
            buttonsStyling: false,
            didRender: function () {
                document.querySelector('.swal2-confirm').classList.add('custom-confirm-button');
                document.querySelector('.swal2-cancel').classList.add('custom-cancel-button');
            }
        });

        swalWithBootstrapButtons.fire({
            title: "¿Estás seguro de tu compra?",
            imageUrl: "./assets/images/gifgorila3.gif",
            imageWidth: 105,
            imageHeight: 105,
            imageAlt: "monkeyChoise",
            html: `Presiona si deseas confirmar.`,
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "No quiero mi compra",
            confirmButtonText: `¡Sí, quiero mi compra!`,
            reverseButtons: false,
        }).then((result) => {
            if (result.isConfirmed) {
                let timerInterval;

                Swal.fire({
                    title: "Procesando compra...",
                    html: "La transacción se completará en <b></b> segundos.",
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const timer = Swal.getPopup().querySelector("b");
                        timerInterval = setInterval(() => {
                            timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                        }, 1000);
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        swalWithBootstrapButtons.fire({
                            imageUrl: "./assets/images/gifgorila2.gif",
                            imageWidth: 105,
                            imageHeight: 105,
                            imageAlt: "monoAprobado",
                            title: "¡Aprobado!",
                            text: "Tu compra se ha realizado con éxito.",
                            icon: "success",
                        });
                        resetearContador();
                        sonidoVenta();
                    }
                });

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Compra cancelada",
                    text: "Te invitamos a que sigas explorando nuestros productos.",
                    icon: "error",
                });
                resetearContador();
            }
        });

        carrito.length = 0;
        actualizarCarrito();
    }
});

function calcularTotalCarrito() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio * producto.cantidad;
    }
    return total;
}