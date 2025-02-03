// Cart Data
let cart = [];
let totalAmount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('item-count');
const cartDetails = document.getElementById('cart-details');
const cartItems = document.getElementById('cart-items');
const totalAmountElem = document.getElementById('total-amount');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-name');
        const itemPrice = parseInt(button.getAttribute('data-price'));
        addItemToCart(itemName, itemPrice);
    });
});

function addItemToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    cartCount.textContent = cart.length;
    totalAmount += itemPrice;
    totalAmountElem.textContent = `Total Amount: Rs. ${totalAmount.toFixed(2)}`;
    updateCartDetails();
}

// Function to remove item from cart
function removeItemFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        totalAmount -= cart[itemIndex].price;
        cart.splice(itemIndex, 1);
        cartCount.textContent = cart.length;
        totalAmountElem.textContent = `Total Amount: Rs. ${totalAmount.toFixed(2)}`;
        updateCartDetails();
    }
}

// Show cart details when cart icon is clicked
document.querySelector('.shopping-cart').addEventListener('click', () => {
    toggleCart();
});

// Function to toggle cart visibility
function toggleCart() {
    cartDetails.classList.toggle('active');
}

// Function to update cart details
function updateCartDetails() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rs. ${item.price} `;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-from-cart');
        removeButton.setAttribute('data-name', item.name);

        removeButton.addEventListener('click', () => {
            removeItemFromCart(item.name);
        });

        li.appendChild(removeButton);//append btn to list
        cartItems.appendChild(li);
    });
}

// Checkout button functionality
document.getElementById('checkout-button').addEventListener('click', () => {
    //cart = [];
    //totalAmount = 0;
    cartCount.textContent = cart.length;
    //totalAmountElem.textContent = 'Total Amount: Rs. 0.00';
    //cartItems.innerHTML = '';
    toggleCart();
});
