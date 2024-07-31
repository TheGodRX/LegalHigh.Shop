document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartSummaryContainer = document.getElementById('cart-summary');
    const totalCost = cartItems.reduce((total, item) => total + item.price, 0);
    
    function updateCartSummary() {
        cartSummaryContainer.innerHTML = `<h3>Cart Summary</h3>`;
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'summary-item';
            itemDiv.textContent = `${item.name} - $${item.price}`;
            cartSummaryContainer.appendChild(itemDiv);
        });
        const totalDiv = document.createElement('div');
        totalDiv.className = 'summary-item';
        totalDiv.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
        cartSummaryContainer.appendChild(totalDiv);
    }
    
    updateCartSummary();
});
