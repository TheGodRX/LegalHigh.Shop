document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
    
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cartItems');
        cartItems.length = 0;
        updateCartDisplay();
        alert('Cart has been cleared!');
    });
    
    updateCartDisplay();
});
