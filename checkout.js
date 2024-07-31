document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkout-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const pgpKey = document.getElementById('pgp-key').value;

        // Simulate encryption and order placement
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const orderNumber = Math.floor(Math.random() * 1000000);
        const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

        alert(`Order placed. Order Number: ${orderNumber}. Please send your transaction ID and order number to heliosonethree@example.com. Total Amount: $${totalAmount.toFixed(2)}`);

        // Here you would normally send this information to your server and handle payment
        // Example:
        // sendEmail('heliosonethree@example.com', `Order #${orderNumber}`, `Order Details: ${JSON.stringify(cart)}, Total: $${totalAmount.toFixed(2)}`);

        // Clear cart
        localStorage.removeItem('cart');
    });
});
