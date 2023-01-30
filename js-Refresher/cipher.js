const rotationAmount = 8;
const message = 'SX AK GML GX OSLWJ';
let ciphertext = '';

for (let i = 0; i < message.length; i++) {

	const charCode = message.charCodeAt(i);

	if (charCode === 32) {
		ciphertext += String.fromCharCode(charCode);
	} else {
		ciphertext += String.fromCharCode(
			((charCode + rotationAmount) <= 90)
				? charCode + rotationAmount
				: (charCode + rotationAmount) % 90 + 64
		);
	}
}

console.log(ciphertext);

//SX AK GML GX OSLWJ