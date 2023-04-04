
const cart = [];


function addToCart(name, price, quantity) {

    let newItem = {
        name,
        price,
        quantity
    }

    cart.push(newItem);
    return cart
};


addToCart("brocolli", 40, 17);
addToCart("chips", 7, 2);
addToCart("soda", 25, 5);
addToCart("hammer", 100, 12);

console.log(`Cart is not empty.`);
console.log(cart);

function emptyCart() {
    for (let i = cart.length; i > 0; i--) {
        cart.pop();
    }
    return cart;
};

console.log(`Cart is empty.`);
emptyCart();
console.log(cart);




module.exports = {
    addToCart,
    emptyCart
}