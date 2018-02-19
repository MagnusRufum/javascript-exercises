function add (num1,num2) {
	return num1+num2
}

function subtract (num1, num2) {
	return num1-num2
}

function sum (arr) {
	return arr.reduce((a,b) => add(a,b), 0)
}

function multiply (arr) {
	return arr.reduce((a,b) => a*b, 1)
}

function power(num1, exp) {
	return (exp === 0 ? 1 : num1*power(num1, exp-1))
}

function factorial(num) {
	return (num === 0 ? 1 : num*factorial(num-1))
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}