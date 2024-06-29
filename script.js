document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const itemsCarrito = document.getElementById('items-carrito');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h3').innerText;
            const productDescription = product.querySelector('p').innerText;
            const productImage = product.querySelector('img').src;

            const productItem = {
                name: productName,
                description: productDescription,
                image: productImage
            };

            cart.push(productItem);
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        itemsCarrito.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;

            itemsCarrito.appendChild(cartItem);
        });
    }

    document.getElementById('checkout').addEventListener('click', function() {
        alert('Procediendo al pago...');
    });
});
