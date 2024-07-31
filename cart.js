const cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const container = document.querySelector('.cart');
    container.innerHTML = '<h2>Your Cart</h2>';
    if (cart.length === 0) {
        container.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            container.innerHTML += `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;
        });
    }
}

function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});
