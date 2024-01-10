// Simulación de datos de productos
const products = [
    { id: 1, name: "Whisky", price: 50.00 },
    { id: 2, name: "Vodka", price: 30.00 },
    // Agrega más productos según sea necesario
];

// Función para mostrar productos en la interfaz
function displayProducts() {
    const productsSection = document.getElementById("products");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        productsSection.appendChild(productElement);
    });
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);

    if (selectedProduct) {
        const cartSection = document.getElementById("cart");
        const cartTotalElement = document.getElementById("cart-total");

        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${selectedProduct.name} - $${selectedProduct.price.toFixed(2)}`;
        cartSection.querySelector("ul").appendChild(cartItem);

        // Actualizar el total del carrito
        let cartTotal = parseFloat(cartTotalElement.textContent) || 0;
        cartTotal += selectedProduct.price;
        cartTotalElement.textContent = cartTotal.toFixed(2);
    }
}

// Llamada a la función para mostrar productos al cargar la página
window.onload = displayProducts;