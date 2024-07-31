document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('notification');

    // Check if there is a notification to show
    const itemAdded = localStorage.getItem('itemAdded');
    if (itemAdded) {
        notification.textContent = `${itemAdded} has been added to your cart!`;
        notification.style.display = 'block';
        localStorage.removeItem('itemAdded');
    }
});

function addToCart(itemName, itemPrice) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Notify the user
    localStorage.setItem('itemAdded', itemName);
    window.location.reload(); // Refresh to show notification
}
