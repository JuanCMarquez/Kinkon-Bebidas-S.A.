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
    { nombre: "Cerveza 1", categoria: "cerveza", precio: 5.99 },
    { nombre: "Cerveza 2", categoria: "cerveza", precio: 6.99 },
    { nombre: "Cerveza 3", categoria: "cerveza", precio: 7.99 },
    { nombre: "Whisky 1", categoria: "whisky", precio: 29.99 },
    { nombre: "Whisky 2", categoria: "whisky", precio: 39.99 },
    { nombre: "Whisky 3", categoria: "whisky", precio: 49.99 },
    { nombre: "Vodka 1", categoria: "vodka", precio: 19.99 },
    { nombre: "Vodka 2", categoria: "vodka", precio: 24.99 },
    { nombre: "Vodka 3", categoria: "vodka", precio: 29.99 },
    { nombre: "Gin 1", categoria: "ginebra", precio: 14.99 },
    { nombre: "Gin 2", categoria: "ginebra", precio: 17.99 },
    { nombre: "Gin 3", categoria: "ginebra", precio: 21.99 }
];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    const totalElemento = document.getElementById("total");

    carritoLista.innerHTML = "";

    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = producto.nombre + " - $" + producto.precio.toFixed(2);
        carritoLista.appendChild(li);

        total += producto.precio;
    });

    totalElemento.textContent = total.toFixed(2);
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

document.getElementById("boton-pago").addEventListener("click", function () {

});

const carrito = [];

document.getElementById("boton-pago").addEventListener("click", function () {
    carrito.length = 0;
    actualizarCarrito();
});