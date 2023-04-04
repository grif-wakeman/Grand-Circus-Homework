const shoppingCart = require("./cart");


describe("Shoppping Cart Tests", () =>{

    test("Calling addToCart function adds an item to the cart", () => {
        expect(shoppingCart.addToCart("Shoes", 75, 1)).toEqual([{name: "Shoes", price: 75, quantity: 1}])
    });

    test("Calling emptyCart function clears the cart", () => {
        expect(shoppingCart.emptyCart()).toEqual([])
    });





})