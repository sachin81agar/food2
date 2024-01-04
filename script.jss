let cart = [];

function showRestaurants() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('restaurant-list').classList.remove('hidden');
}

function showMenu() {
    document.getElementById('restaurant-list').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
}

function addToCart(item, price) {
    cart.push({ item, price });
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    const orderTotalElement = document.getElementById('order-total');
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    orderTotalElement.textContent = total.toFixed(2);
}

function showCart() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('cart').classList.remove('hidden');
}

function showOrderSummary() {
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('order-summary').classList.remove('hidden');
}

function placeOrder() {
    alert('Order placed successfully!');
    // Additional logic for sending order to the server can be added here
    resetOrder();
}

function resetOrder() {
    cart = [];
    updateCartUI();

    // Reset UI to the Home screen
    document.getElementById('order-summary').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}
