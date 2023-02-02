const prompt = require('prompt-sync')();

let money = 10;
const characterName = prompt(`Hello, what is your name? `)
let wantsToPlay = prompt(`Welcome ${characterName}, would you like to play a game? [Y/N] `);
let bet = 0;

if (wantsToPlay === "n" || wantsToPlay === "N") {
	console.log('Ok, see ya.');
	process.exit();
	
} else {
	casino();
}

function casino() {
	console.log(`Your current balance is: $${money}.`);
	bet = prompt(`How much would you like to bet? $`);
	return coinFlip();
	
}


function coinFlip() {
	const guess = prompt("Heads or Tails? [h/t] ");
	let flip = Math.floor(Math.random() * 10) + 1;
	if (flip < 5) {
		console.log(`It's heads.`);
		flip = "h";
	} else {
		console.log(`It's tails.`);
		flip = "t";
	}
	if (guess === flip) {
	money += +bet;
	console.log(`Great job ${characterName}, you win!`);
} else {
	money -= +bet;
	console.log(`Tough break ${characterName}, you lose!`);
}		
}


while (money > 0) {
	casino();
}