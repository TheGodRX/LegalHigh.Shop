document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');

    // Dummy data
    const products = {
        '1P-LSD': { name: '1P-LSD Analogue Pellets', description: 'Description of 1P-LSD Analogue Pellets', price: '$50.00' },
        '1V-LSD': { name: '1V-LSD Analogue Pellets', description: 'Description of 1V-LSD Analogue Pellets', price: '$55.00' },
        'Pink-Fuck': { name: 'Pink F*ck (Powder)', description: 'Description of Pink F*ck powder', price: '$45.00' }
    };

    const productDetails = products[product];

    if (productDetails) {
        const container = document.querySelector('.product-details');
        container.innerHTML = `
            <h2>${productDetails.name}</h2>
            <p>${productDetails.description}</p>
            <p class="price">Price: ${productDetails.price}</p>
            <button onclick="addToCart('${product}', ${parseFloat(productDetails.price.slice(1))})">Add to Cart</button>
        `;
    } else {
        document.querySelector('.product-details').innerHTML = '<p>Product not found.</p>';
    }
});
