function echo(word) {
	return word
}

function shout(word) {
	return word.toUpperCase()
}

function repeat(word, n = 2) {
	return (n === 1 ? word : word + ' ' + repeat(word, n-1))
}

function pieceOfWord(word, num) {
	return word.slice(0,num)
}

function firstWord(string) {
	return string.slice(0,string.indexOf(" "))
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(string) {
	var stringArr = string.split(' ');
	var smallWords = ['a','an','and','as','at','but','by','for','if','in','nor','of','over','on','or','per','the','to'];
	
	for (var i = 0; i < stringArr.length; i++) {
		if (!smallWords.includes(stringArr[i])) {
			stringArr[i] = capitalize(stringArr[i]);
		} else if (i == 0) { stringArr[i] = capitalize(stringArr[i])} 
	}

	return stringArr.join(' ')
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}