
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
		var memory = []
		var operator
		var result = "";
		outputDiv.text("0");

	//Create number listeners
	$(".number > button").click(function(){
		//clears screen if starting a new operation after using equals button
		if(result != "") {
			clearScreen()
		}
		//handle decimals
		if(!number.includes('.') || $(this).text() != '.' ) {
				number += $(this).text();
				outputDiv.text(number);
				overflowTest(number);
		} /*else if ($(this).text() != '.') {
				number += $(this).text();
				outputDiv.text(number);
				overflowTest(number);  */
		//}
	});

	//Create Operator listeners
	$('.operator>button').click(function() {
		if (firstNumber != "") getResult();
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
		
		firstNumber = number;
		number = "";
	});
	
	//equals and clear listeners
	$('#equals').click(getResult);
	$('#clear-btn').click(clearScreen);
	
	//Equals function
	function getResult() {
		result = operate(operator, parseFloat(firstNumber), parseFloat(number)).toString();
		if (result.includes('.')) result = parseFloat(result).toFixed(4);
		outputDiv.text(result.toString());
	}	
	
	//Clear function
	function clearScreen() {
		number = "";
		number = "";
		firstNumber = "";
		memory = [];
		result = "";
		outputDiv.text("0");
	}
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
