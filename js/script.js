/* 
#Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
#Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
#Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
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

generateNumbersArray(0, 10, 2, numbers);
console.log(numbers);

const guess = setTimeout(() => {
	while (guessedNumbers.length < 2) {
		const number = parseInt(prompt('Type a number.', '2'));
		if (isNaN(number)) alert('Invalid entry.');
		else if (guessedNumbers.includes(number)) alert("Please don't enter the same number twice.");
		else if (!guessedNumbers.includes(number)) guessedNumbers.push(number);
	}
	if (guessedNumbers.length === 2) console.log('Your numbers are: ' + guessedNumbers);

	/* 	if (guessedNumbers.includes(...numbers)) alert('WIN');
		else alert('LOSE'); */ //! Non funziona
}, 3000);