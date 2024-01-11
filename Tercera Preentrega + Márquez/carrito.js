// Simulación de productos en el carrito (puedes obtener estos datos de tu backend)
const cartProducts = [
    { id: 1, name: 'Producto 1', price: 10, quantity: 2, image: 'product1.jpg' },
    { id: 2, name: 'Producto 2', price: 15, quantity: 1, image: 'product2.jpg' }
];

// Función para renderizar los productos del carrito
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cartProducts.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <p>Cantidad: ${product.quantity}</p>
            </div>
        `;

        cartItems.appendChild(cartItem);
    });

    updateCartCount();
}

// Función para actualizar la cantidad total de productos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cartProducts.reduce((total, product) => total + product.quantity, 0);
    cartCount.innerText = totalItems;
}

// Evento al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// Puedes agregar más funciones y eventos según tus necesidades