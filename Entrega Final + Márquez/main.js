function rejectAge() {
    exitProgram();
}

function exitProgram() {
    window.location.href = 'https://www.google.com';
}

function playAudio() {
    let audio = document.getElementById('sonidoMono');
    audio.play();
}

function confirmAge() {
    playAudio();

    let ageVerificationSection = document.getElementById('age-verification');
    ageVerificationSection.style.display = 'none';
    let navCarouselContainer = document.getElementById('nav-carousel-container');
    let verifiedContent = document.getElementById('age-verified-content');
    let footer = document.getElementById('footer');

    navCarouselContainer.style.display = 'block';
    verifiedContent.style.display = 'block';
    footer.style.display = 'block';

    localStorage.setItem("isAdult", "true");

    window.scrollTo(0, 0);
}

function loadHome() {
    document.getElementById("content").innerHTML;
}

function loadProducts() {
    document.getElementById("content").innerHTML;
}

function loadCart() {
    document.getElementById("content").innerHTML;
}

window.onload = function () {
    const isAdult = localStorage.getItem("isAdult");

    if (isAdult === "true") {
        loadHome();
        document.getElementById("nav-carousel-container").style.display = "block";
        document.getElementById('footer').style.display = 'block'; // Agrega esta línea
    } else {
        document.getElementById("age-verification").style.display = "block";
    }
};

const productos = [
    { nombre: "Temple Scottish", categoria: "cerveza", precio: 1800 },
    { nombre: "Temple Wolf Ipa", categoria: "cerveza", precio: 1800 },
    { nombre: "Temple Honey", categoria: "cerveza", precio: 1800 },
    { nombre: "Ballantine's Finest", categoria: "whisky", precio: 16000 },
    { nombre: "Johnnie Walker Red Label", categoria: "whisky", precio: 18000 },
    { nombre: "Whisky J&B", categoria: "whisky", precio: 9000 },
    { nombre: "Vodka Smirnoff", categoria: "vodka", precio: 4000 },
    { nombre: "Vodka Sernova", categoria: "vodka", precio: 3000 },
    { nombre: "Vodka Absolut", categoria: "vodka", precio: 15000 },
    { nombre: "Gin La llave", categoria: "ginebra", precio: 4500 },
    { nombre: "Gin Gordon's", categoria: "ginebra", precio: 6000 },
    { nombre: "Beefeater London Dry", categoria: "ginebra", precio: 15000}
];

function buttonClick(button) {
    $(button).addClass('clicked');
    setTimeout(function () {
        $(button).removeClass('clicked');
    }, 100);
}

const carrito = [];
let contador = 0; // Agregamos un contador global

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

document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", function () {
        const nombreProducto = this.dataset.product;
        const producto = productos.find(p => p.nombre === nombreProducto);

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

function playAudio() {
    let audio = document.getElementById('sonidoMono');
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