// Solving One
function findMissinLetter(missingLetters) {
	let letters = "abcdefghijklmnopqrstuvwxyz";
	let startLetter = letters.indexOf(missingLetters[0]);
	for (let i = 0; i < missingLetters.length; i++) {
		if (letters[startLetter + i] === missingLetters[i].toLowerCase()) {
		} else {
			return `This letter is missing (${letters[startLetter + i]})`;
		}
	}
	return `No mission letters in sequence`;
}



console.log(findMissinLetter("defgi")); // h
console.log(findMissinLetter("abcdrghi")); // f
console.log(findMissinLetter("xyz")); // No mission letters in sequence