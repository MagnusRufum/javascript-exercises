var palindromes = function(string) {
	var newString = string.toLowerCase().replace(/[\s!,\.]/g, "");
	return (newString.split('').reverse().join('') == newString)
}

module.exports = palindromes
