document.addEventListener("DOMContentLoaded", function () {
    // Array de productos
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 10.99 },
        { id: 2, nombre: "Producto 2", precio: 20.49 },
        { id: 3, nombre: "Producto 3", precio: 15.99 },
        // Agrega más productos según sea necesario
    ];

    // Elementos HTML
    const carritoLista = document.getElementById("carrito-lista");
    const totalElement = document.getElementById("total");
    const pagarBtn = document.getElementById("pagar-btn");

    // Carrito de compras
    const carrito = [];

    // Función para renderizar productos en el carrito
    function renderizarCarrito() {
        carritoLista.innerHTML = "";
        let total = 0;

        carrito.forEach(item => {
            const productoSeleccionado = productos.find(producto => producto.id === item.id);
            const itemPrecio = productoSeleccionado ? productoSeleccionado.precio : 0;

            total += itemPrecio * item.cantidad;

            const li = document.createElement("li");
            li.innerHTML = `${item.cantidad} x ${productoSeleccionado.nombre} - $${(itemPrecio * item.cantidad).toFixed(2)}`;
            carritoLista.appendChild(li);
        });

        totalElement.textContent = total.toFixed(2);
    }

    // Función para agregar un producto al carrito
    window.agregarAlCarrito = function (productoId) {
        const productoExistente = carrito.find(item => item.id === productoId);

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({ id: productoId, cantidad: 1 });
        }

        renderizarCarrito();
    };

    // Función para realizar el pago (simulado)
    function realizarPago() {
        alert(`¡Pago realizado! Total: $${totalElement.textContent}`);
        // Puedes agregar lógica adicional aquí, como limpiar el carrito, etc.
    }

    // Manejador de clic para el botón de pagar
    pagarBtn.addEventListener("click", realizarPago);

    // Función para renderizar productos en la sección de productos disponibles
    function renderizarProductos() {
        const productosSection = document.querySelector(".productos");

        productosSection.innerHTML = "";
        productos.forEach(producto => {
            const productoDiv = document.createElement("div");
            productoDiv.innerHTML = `
                <div class="producto">
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio.toFixed(2)}</p>
                    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
            `;
            productosSection.appendChild(productoDiv);
        });
    }

    // Renderiza los productos y el carrito al cargar la página
    renderizarProductos();
    renderizarCarrito();
});