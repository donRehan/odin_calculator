//Copyright (C) 2023 Alhussien Ahmed

let add = (a, b) => parseInt(a) + parseInt(b);
let subtract = (a, b) => parseInt(a) - parseInt(b);
let divide = (a, b) => parseInt(a) / parseInt(b);
let multiply = (a, b) => parseInt(a) * parseInt(b);

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

function calulate_from_string(string){
	let first_number = '';
	let second_number = '';
	let operand = '';
	let operations = ['+', '-', '/', '*'];
	let flag = false;
	for (let i = 0; i < string.length; i++)
	{
		if (operations.includes(string[i]))
		{
			if (flag === false)
			{
				operand = string[i];
				flag = true;
			}
		}
		else if (operand === '')
		{
			first_number = first_number + string[i];
		}
		else
		{
			second_number = second_number + string[i];
		}
	}
	return operate(first_number, second_number, operand);
}

function getNumberPressed(buttonId) {
	//Based on the button id return a number 
	switch(buttonId) {
		case 'one':
		return '1';
		case 'two':
		return '2';
		case 'three':
		return '3';
		case 'four':
		return '4';
		case 'five':
		return '5';
		case 'six':
		return '6';
		case 'seven':
		return '7';
		case 'eight':
		return '8';
		case 'nine':
		return '9';
		case 'zero':
		return '0';
		case 'multiply':
		return '*';
		case 'divide':
		return '/';
		case 'plus':
		return '+';
		case 'minus':
		return '-';
		case 'equal':
		return '=';
		default:
		return '0';
	}
}

let get_number = async () => {
	let output = prompt("Enter a number: ");
	if (output === 'x') {
		return 0;
	}
	//make output a number type
	while (isNaN(output))
	{
		output = prompt("Enter a number: ");
		(output === 'x' ? output = 0 : null);
	}
	return output;
}

let get_numberNova = async () => 
{
	return new Promise((resolve) => {
		let zero = document.getElementById('zero');
		let one = document.getElementById('one');
		let two = document.getElementById('two');
		let three = document.getElementById('three');
		let four = document.getElementById('four');
		let five = document.getElementById('five');
		let six = document.getElementById('six');
		let seven = document.getElementById('seven');
		let eight = document.getElementById('eight');
		let nine = document.getElementById('nine');
		let plus = document.getElementById('plus');
		let minus = document.getElementById('minus');
		let divide = document.getElementById('divide');
		let multiply = document.getElementById('multiply');
		let equal = document.getElementById('equal');

		zero.onclick = () => {
			resolve('zero');
		};
		one.onclick = () => {
			resolve('one');
		};
		two.onclick = () => {
			resolve('two');
		};
		three.onclick = () => {
			resolve('three');
		};
		four.onclick = () => {
			resolve('four');
		};
		five.onclick = () => {
			resolve('five');
		};
		six.onclick = () => {
			resolve('six');
		};
		seven.onclick = () => {
			resolve('seven');
		};
		eight.onclick = () => {
			resolve('eight');
		};
		nine.onclick = () => {
			resolve('nine');
		};
		plus.onclick = () => {
			resolve('plus');
		};
		minus.onclick = () => {
			resolve('minus');
		};
		multiply.onclick = () => {
			resolve('multiply');
		};
		divide.onclick = () => {
			resolve('divide');
		};
		equal.onclick = () => {
			resolve('equal');
		};
	});
}

//// PLEASE DELETE !!
//// Method to get the id of the button pressed
//let screen_text = document.createElement('p');
//let buttons = document.querySelectorAll('button');
//// Attach a single event listener to all buttons
//buttons.forEach(button => {
//  button.addEventListener('click', () => {
//    let buttonId = button.id; // Get the ID of the clicked button
//    //console.log("Button clicked:", buttonId); // Log it for now
//    // Use buttonId as needed for further actions
//	let div = document.getElementById('screen-div');
//	//Call method to get the number pressed
//	let number_pressed = getNumberPressed(buttonId);
//	screen_text.textContent = `${number_pressed}`;
//	screen_text.align = 'center';
//	screen_text.style = 'font-size: 20px;margin-right: 0px;margin-top: 0px;margin-left: 0px;margin-bottom: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 30px;padding-left: 140px;';
//	div.appendChild(screen_text);
//    // If you need to resolve a Promise with the buttonId:
//    //resolve(buttonId);
//	return buttonId;
//  });
//});
//// PLEASE DELETE !!

let main = async ()  =>
{
	//Set first && second number to 0
	let screen = '';
	operations = ['+', '-', '/', '*'];
	let first_number = 0;
	let second_number = 0;
	let screen_text = document.createElement('p');
	let buttons = document.querySelectorAll('button');
	let div = document.getElementById('screen-div');
	//Get the first number || get the operand (later)
	//Get the input from the user and then output it to the console !
	//Call function to take the first number and set it to 0 if not a number is provided
	//first_number = await get_number(); OLD
	//output number to screen
	console.log(screen);
	screen_text.textContent = `${screen}`;
	screen_text.align = 'center';
	screen_text.style = 'font-size: 20px;margin-right: 0px;margin-top: 0px;margin-left: 0px;margin-bottom: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 30px;padding-left: 140px;';
	div.appendChild(screen_text);
	first_number = await get_numberNova();
	first_number = getNumberPressed(first_number);
	screen = screen + first_number;
	console.log(screen);
	screen_text.textContent = `${screen}`;
	while(!operations.includes(first_number))
	{
		first_number = await get_numberNova();
		first_number = getNumberPressed(first_number);
		screen = screen + first_number;
		console.log(screen);
		screen_text.textContent = `${screen}`;
	}
	second_number = await get_numberNova();
	second_number = getNumberPressed(second_number);
	screen = screen + second_number;
	console.log(screen);
	screen_text.textContent = `${screen}`;
	//to be replaced with equal sign
	while(second_number !== '=')
	//while(!operations.includes(second_number))
	{
		second_number = await get_numberNova();
		second_number = getNumberPressed(second_number);
		screen = screen + second_number;
		console.log(screen);
		screen_text.textContent = `${screen}`;
	}
	screen = calulate_from_string(screen);
	console.log(screen);
	screen_text.textContent = `${screen}`;
	//console.log(screen);
//	first_number = await get_numberNova();
//	first_number = getNumberPressed(first_number);
//	console.log(screen);
	//Get the operand 
//	let operand = prompt("Enter an operand: ");
//	while (!operations.includes(operand))
//	{
//		operand = prompt("Enter an operand: ");
//	}
//	console.log("Operand: ", operand);
//	//Call operate and return the result
//	second_number = await get_number();
//	console.log("Second number: ", second_number);
//	//Get the second number || clear operand (later) || Cancel (later)
//	//Get the result || Append to the output (later)
//	let result = operate(first_number, second_number, operand);
//	console.log("Result: ", result);

}

main();

module.exports = {
	add,
	subtract,
	divide,
	multiply,
	operate
}
