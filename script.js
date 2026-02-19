let cartItems = 0;
let cartTotal = 0;

document.addEventListener("DOMContentLoaded", function () {

    const storedItems = localStorage.getItem("kartikCartItems");
    const storedTotal = localStorage.getItem("kartikCartTotal");

    if (storedItems !== null) {
        cartItems = parseInt(storedItems);
    }

    if (storedTotal !== null) {
        cartTotal = parseFloat(storedTotal);
    }

    updateCartDisplay();
});

function addToCart(price, productName, productId) {

    cartItems++;
    cartTotal += price;

    localStorage.setItem("kartikCartItems", cartItems);
    localStorage.setItem("kartikCartTotal", cartTotal);

    updateCartDisplay();

    console.log("🛍️ " + productName + " added. Total ₹" + cartTotal);
}

function updateCartDisplay() {

    document.getElementById("itemCount").innerText = cartItems;
    document.getElementById("totalPrice").innerText = cartTotal;
}

function resetCart() {

    cartItems = 0;    
    cartTotal = 0;

    localStorage.setItem("kartikCartItems", 0);
    localStorage.setItem("kartikCartTotal", 0);

    updateCartDisplay();
}
