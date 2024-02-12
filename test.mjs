import {operate, add, subtract, divide, multiply} from './main.js';

////test add
let result = add(1, 2);
let expected = 3;

//test operate
result = operate(1, 2, '+');
expected = 3;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('operate addition test passed ✓');
}
result = operate(1, 2, '-');
expected = -1;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('operate subtraction test passed ✓');
}
result = operate(1, 2, '/');
expected = 0.5;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('operate division test passed ✓');
}
result = operate(1, 2, '*');
expected = 2;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('operate multiplication test passed ✓');
}
