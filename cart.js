document.addEventListener('DOMContentLoaded', function() {
    // Dummy cart data
    const cartItems = [
        { name: '1P-LSD Analogue Pellets', price: '$XX.XX', quantity: 1 },
        { name: '1V-LSD Analogue Pellets', price: '$XX.XX', quantity: 2 }
    ];

    const container = document.querySelector('.cart');
    cartItems.forEach(item => {
        container.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        `;
    });
});
