
$(document).ready(function(){
	//operator functions
	function add (num1,num2) {return num1+num2}
	function subtract (num1, num2) {return num1-num2}
	function sum (arr) {return arr.reduce((a,b) => add(a,b), 0)}
	function multiply (num1, num2) {return  num1*num2}
	function divide (num1, num2){if (num2 === 0) {return "Destroyed Universe!"} else return (num1/num2).toFixed(6)}
	function power (num1, exp) {return (exp === 0 ? 1 : num1*power(num1, exp-1))}
	function factorial (num) {return (num === 0 ? 1 : num*factorial(num-1))}
	function operate (operator, num1, num2) {return operator(num1, num2)}

//Overflow Test function
	function overflowTest(number) {
		if(number.length > 12) {
			number = "";
			outputDiv.text('Overflow!');
		}
	}


		var outputDiv = $(".output");
		var number ="";
		var firstNumber = "";
		var memory = [0, ]
		var operator
		outputDiv.text("0");

	//Create number listeners
	$(".number > button").click(function(){
		//handle decimals
		if(!number.includes('.')) {
				number += $(this).text();
				outputDiv.text(number);
				overflowTest(number);
		} else if ($(this).text() != '.') {
				number += $(this).text();
				outputDiv.text(number);
				overflowTest(number);
		}
	});

	//Create Operator listeners
	$('.operator>button').click(function() {
		switch ($(this).attr('id')) {
			case 'plus':
				operator = add;
				break;
			case 'minus':
				operator = subtract;
				break;
			case 'multiply':
				operator = multiply;
				break;
			case 'divide':
				operator = divide;
				break;
			default: outputDiv.text("HUH?")
		}

		memory.push(number);
		firstNumber = number;
		number = "";
	});

	$('#equals').click(function() {
		outputDiv.text(operate(operator, parseFloat(firstNumber), parseFloat(number)));
		$('.buttons > .number > button').prop('disabled', true)
		$('.buttons > .operator > button').prop('disabled', true)
	})
	//Clear function
	$('#clear-btn').click(function() {
		number ="";
		firstNumber ="";
		memory = [0, ]
		outputDiv.text("0");
		$('.buttons > .number > button').prop('disabled', false)
		$('.buttons > .operator > button').prop('disabled', false)
	});
});
/*module.exports = {
	add,
	subtract,
	sum,
	multiply,
	divide,
	power,
	factorial
}*/
