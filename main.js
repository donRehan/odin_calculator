//Copyright (C) 2023 Alhussien Ahmed

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

function getNumberPressed(buttonId) {
	//Based on the button id return a number 
	switch(buttonId) {
		case 'one':
		return 1;
		case 'two':
		return 2;
		case 'three':
		return 3;
		case 'four':
		return 4;
		case 'five':
		return 5;
		case 'six':
		return 6;
		case 'seven':
		return 7;
		case 'eight':
		return 8;
		case 'nine':
		return 9;
		case 'zero':
		return 0;
		default:
		return 0;
	}
}

let getNumber_pressed = () => {
  return new Promise((resolve) => {
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');

    rock.onclick = () => {
      resolve('rock');
    };
    paper.onclick = () => {
      resolve('paper');
    };
    scissors.onclick = () => {
      resolve('scissor');
    };
  });
};

// Method to get the id of the button pressed
let screen_text = document.createElement('p');
let buttons = document.querySelectorAll('button');
// Attach a single event listener to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonId = button.id; // Get the ID of the clicked button
    //console.log("Button clicked:", buttonId); // Log it for now
    // Use buttonId as needed for further actions
	let div = document.getElementById('screen-div');
	//Call method to get the number pressed
	let number_pressed = getNumberPressed(buttonId);
	screen_text.textContent = `${number_pressed}`;
	screen_text.align = 'center';
	screen_text.style = 'font-size: 20px;margin-right: 0px;margin-top: 0px;margin-left: 0px;margin-bottom: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 30px;padding-left: 140px;';
	div.appendChild(screen_text);
    // If you need to resolve a Promise with the buttonId:
    //resolve(buttonId);
  });
});


module.exports = {
	add,
	subtract,
	divide,
	multiply,
	operate
}
