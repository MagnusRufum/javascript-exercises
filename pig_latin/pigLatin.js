function translate(string) {
	// body...
	return string
		.split(' ')
		.map(word => {
			const index = getVowelIndex(word);
			const beginning = word.slice(0, index);
			const ending = word.slice(index);
			return `${ending}${beginning}ay`
		})
		.join(' ')
}

	const getVowelIndex = (string) => {
		const vowels = string.match(/[aeiou]/g);
		if(vowels[0] == 'u' && string[string.indexOf(vowels[0]) - 1] == 'q') {
			return string.indexOf(vowels[1])
		} else return string.indexOf(vowels[0])
	}

module.exports = {
	translate
}

