function rejectAge() {
    // Lógica cuando el usuario no es mayor de edad
    // Puedes realizar acciones adicionales si es necesario
    exitProgram();
}

function exitProgram() {
    window.location.href = 'https://www.google.com';
}

function playAudio() {
    var audio = document.getElementById('sonidoMono');
    audio.play();
}

// Función para confirmar la edad
function confirmAge() {
    // Reproducir audio
    playAudio();

    // Ocultar la sección de verificación de edad
    var ageVerificationSection = document.getElementById('age-verification');
    ageVerificationSection.style.display = 'none';

    // Mostrar la barra de navegación y el contenido verificado
    var navCarouselContainer = document.getElementById('nav-carousel-container');
    var verifiedContent = document.getElementById('age-verified-content');

    navCarouselContainer.style.display = 'block';
    verifiedContent.style.display = 'block';

    // Guardar en local storage que el usuario confirmó ser mayor de edad
    localStorage.setItem("isAdult", "true");

    window.scrollTo(0, 0);
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
        loadHome();
        document.getElementById("nav-carousel-container").style.display = "block";
    } else {
        document.getElementById("age-verification").style.display = "block";
    }
};

document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");
    var menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});



