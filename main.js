let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

let first_number = 0;
let second_number = 0;
let operand = 0;

function operate(first_number, second_number, operand) {
	switch(operand) {
		case '+':
			return add(first_number, second_number);
		case '-':
			return subtract(first_number, second_number);
		case '/':
			return divide(first_number, second_number);
		case '*':
			return multiply(first_number, second_number);
	}
}

module.exports = {
	add,
	subtract,
	divide,
	multiply,
	operate
}
