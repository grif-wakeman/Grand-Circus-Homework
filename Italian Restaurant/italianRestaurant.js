const prompt = require('prompt-sync')();

let pizzaObj = {};
let saladObj = {};
let deliveryObj = {};
let comboObj = {};


function askAboutPizza() {
    let pizzaSize = prompt(`What size pizza would you like? [S: $5, M: $6, L: $7] `);
    if (pizzaSize.toLowerCase() === "s") {
        pizzaObj = {
            size: "S",
            price: 5
        };
        return pizzaObj;
    } else if (pizzaSize.toLowerCase() === "m") {
        pizzaObj = {
            size: "M",
            price: 6
        };
        return pizzaObj;
    } else if (pizzaSize.toLowerCase() === "l") {
        pizzaObj = {
            size: "L",
            price: 7
        };
        return pizzaObj;
    } else {
        return (`That's not a valid option.`);
    }
}

function askAboutSalad() {
    let saladSize = prompt(`What size salad would you like? [S: $2, L: $4] `);
    if (saladSize.toLowerCase() === "s") {
        saladObj = {
            size: "S",
            price: 2
        };
        return saladObj;
    } else if (saladSize.toLowerCase() === "l") {
        saladObj = {
            size: "L",
            price: 4
        };
        return saladObj;
    } else {
        return (`That's not a valid option.`);
    }
}

function askAboutDelivery() {
        let address = prompt(`What is your address? `);
        deliveryObj = {
            address: address,
            price: 10
        };
        return deliveryObj;
    }
    
function comboMeal() {
        comboObj = {
            chargeMe: "Yes",
            price: 10
        }
        return comboObj;
}

// Ask about ordering pizza

let wantsPizza = prompt("Would you like to order pizza? [Y/N] ");

if (wantsPizza.toLowerCase() === "y") {
    console.log(askAboutPizza());
} else {
   console.log(`Ok have a nice day!`);
   process.exit();
}

// Ask about ordering salad

let wantsSalad = prompt("Would you like to order salad? [Y/N] ");

if (wantsSalad.toLowerCase() === "y") {
    console.log(askAboutSalad());
} else {
    saladObj = {
        size: null,
        price: 0
    };
}

// Ask about delivery

let wantsDelivery = prompt(`Would you like delivery? [Y/N] `);

if (wantsDelivery.toLowerCase() === "y") {
    console.log(askAboutDelivery());
} else {
    deliveryObj = {
        address: null,
        price: 0
    };
}


// Total price of order

let total = pizzaObj.price + saladObj.price + deliveryObj.price;


// upsell

let wantsCombo = prompt(`Do you want to add on breadsticks and a 2L pop for $10? [Y/N] `);

if (wantsCombo.toLowerCase() === "y") {
    console.log(comboMeal());
    let upsell = total + comboObj.price;
    console.log(`Thank you for ordering. Your total is: $${upsell}. See you soon!`);
} else {
    comboObj = {
        chargeMe: "No",
        price: 0
    };
    console.log(`Thank you for ordering. Your total is: $${total}. See you soon!`);
}







// Receipt



