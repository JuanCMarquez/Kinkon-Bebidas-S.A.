function playAudio() {
    var audio = document.getElementById('sonidoMono');
    audio.play();
}

// Función para confirmar la edad
function confirmAge() {
    const isAdult = confirm("¿Eres mayor de edad?");

    if (isAdult) {
        // Guardar en local storage que el usuario confirmó ser mayor de edad
        localStorage.setItem("isAdult", "true");

        // Ocultar el mensaje de verificación de edad
        document.getElementById("age-verification").style.display = "none";

        // Mostrar el menú de navegación
        document.getElementById("main-nav").style.display = "block";
    } else {
        // Redirigir o mostrar un mensaje indicando que no se permite el acceso
        alert("Lo siento, debes ser mayor de edad para acceder a esta tienda.");
        window.location.href = "https://www.google.com"; // Redirigir a Google como ejemplo
    }
}

function confirmAge() {
    // Reproducir audio
    playAudio();

    // Ocultar la sección de verificación de edad
    var ageVerificationSection = document.getElementById('age-verification');
    ageVerificationSection.style.display = 'none';

    // Mostrar la barra de navegación y el contenido verificado
    var navBar = document.getElementById('main-nav');
    var verifiedContent = document.getElementById('age-verified-content');

    navBar.style.display = 'block';
    verifiedContent.style.display = 'block';
}

// Función para cargar la página de inicio
function loadHome() {
    document.getElementById("content").innerHTML = "<h2>Bienvenido a la Tienda de Bebidas Alcohólicas</h2><p>Aquí encontrarás una selección de bebidas de alta calidad.</p>";
}

// Función para cargar la página de productos
function loadProducts() {
    document.getElementById("content").innerHTML = "<h2>Nuestros Productos</h2><p>Lista de productos y descripciones.</p>";
}

// Función para cargar la página del carrito
function loadCart() {
    document.getElementById("content").innerHTML = "<h2>Tu Carrito de Compras</h2><p>Contenido del carrito y proceso de compra.</p>";
}

// Verificar si el usuario ya confirmó ser mayor de edad al cargar la página
window.onload = function () {
    const isAdult = localStorage.getItem("isAdult");

    if (isAdult === "true") {
        // Usuario ya confirmó ser mayor de edad, cargar la página de inicio
        loadHome();
        document.getElementById("main-nav").style.display = "block";
    } else {
        // Usuario no ha confirmado ser mayor de edad, mostrar el mensaje de verificación
        document.getElementById("age-verification").style.display = "block";
    }
};