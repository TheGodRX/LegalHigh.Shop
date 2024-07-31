document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');

    // Dummy data
    const products = {
        '1P-LSD': { name: '1P-LSD Analogue Pellets', description: 'Description of 1P-LSD Analogue Pellets', price: '$XX.XX' },
        '1V-LSD': { name: '1V-LSD Analogue Pellets', description: 'Description of 1V-LSD Analogue Pellets', price: '$XX.XX' },
        'Pink-Fuck': { name: 'Pink F*ck (Powder)', description: 'Description of Pink F*ck powder', price: '$XX.XX' }
    };

    const productDetails = products[product];

    if (productDetails) {
        const container = document.querySelector('.product-details');
        container.innerHTML = `
            <h2>${productDetails.name}</h2>
            <p>${productDetails.description}</p>
            <p>Price: ${productDetails.price}</p>
            <a href="cart.html?product=${product}">Add to Cart</a>
        `;
    } else {
        document.querySelector('.product-details').innerHTML = '<p>Product not found.</p>';
    }
});
