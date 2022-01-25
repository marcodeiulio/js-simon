/* 
#Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
#Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
*/

// #Functions
const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + 1) + min;
};

const generateNumbersArray = (min, max, total, arr) => {
	while (arr.length < total) {
		const number = Math.floor(Math.random() * (max - min) + 1) + min;;
		if (!arr.includes(number)) arr.push(number);
	};
};

// #Program
const numbers = [];
const guessedNumbers = [];
let checks = 0;

generateNumbersArray(0, 10, 5, numbers);
alert(`Try to remember this numbers: ${numbers}`);

const guess = setTimeout(() => {
	while (guessedNumbers.length < 5) {
		const number = parseInt(prompt('Type a number.', '5'));
		if (isNaN(number)) alert('Invalid entry.');
		else if (guessedNumbers.includes(number)) alert("Please don't enter the same number twice.");
		else if (!guessedNumbers.includes(number)) guessedNumbers.push(number);
	}
	if (guessedNumbers.length === 5) console.log('Your numbers are: ' + guessedNumbers);


	for (let i = 0; i < 5; i++) {
		if (numbers.includes(guessedNumbers[i])) checks++;
	}

	const result = `You guessed ${checks} numbers out of 5.`

	return (checks === 5) ? alert(`You won! ${result}`) : alert(`You lost! ${result}`);
}, 5000);
