var fibonacci = function(num) {
	const number = parseInt(num);
	return (number < 0 ? "OOPS" : 
			number == 0 || number == 1 ? number : 
			fibonacci(number-1) + fibonacci(number-2))
}

console.log(fibonacci(4));
module.exports = fibonacci
