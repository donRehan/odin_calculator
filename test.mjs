import {add, subtract, divide, multiply} from './main.js';

//test add
let result = add(1, 2);
let expected = 3;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('add test passed ✓');
}
//test subtract
result = subtract(1, 2);
expected = -1;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('subtract test passed ✓');
}
//test divide
result = divide(1, 2);
expected = 0.5;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('divide test passed ✓');
}
//test multiply
result = multiply(1, 2);
expected = 2;
if (result !== expected) {
	throw new Error(`${result} is not equal to ${expected} ⚠️`);
}
else {
	console.log('multiply test passed ✓');
}
