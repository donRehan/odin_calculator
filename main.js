let calculator = document.querySelector(".calculator")
let keys = calculator.querySelector(".calculator__keys")
let display = calculator.querySelector(".calculator__display")
let previousKeyType = calculator.dataset.previousKeyType

keys.addEventListener("click", e => {
	if (e.target.matches("button")) {
		//Get the action && key 
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		const displayedNum = display.textContent
		calculator = document.querySelector(".calculator")
		keys = calculator.querySelector(".calculator__keys")
		display = calculator.querySelector(".calculator__display")
		previousKeyType = calculator.dataset.previousKeyType

		//If it doesn't have an action its a number
		if (!action) {
			if (displayedNum === '0' || 
				previousKeyType === 'operator' ||
				previousKeyType === 'calculate'
			) {
				display.textContent = keyContent
				//REMOVE THIS
				console.log('previousKeyType: ', previousKeyType)
			}
			else {
				display.textContent = displayedNum + keyContent
				//REMOVE THIS
				console.log('previousKeyType: ', previousKeyType)
			}
			calculator.dataset.previousKeyType = 'number'
		}
		if (
			action === 'add' ||
				action === 'subtract' ||
				action === 'multiply' ||
				action === 'divide'
		) {
			let firstValue = calculator.dataset.firstValue
			let operator = calculator.dataset.operator
			let secondValue = displayedNum

			if (firstValue && 
				operator &&
				previousKeyType !== 'operator' &&
				previousKeyType !== 'calculate'
			)
			{
				let calcValue = calculate(firstValue, operator, secondValue)
				display.textContent = calcValue

				// Update calculated value as firstValue
				calculator.dataset.firstValue = calcValue
			}
			else {
				calculator.dataset.firstValue = displayedNum
			}

			key.classList.add('is-depressed')
			// Add custom attribute
			calculator.dataset.previousKeyType = 'operator'
			calculator.dataset.operator = action
		}
		if (action === 'decimal') {
			// Do nothing if string has a dot
			if (!displayedNum.includes('.')) {
				display.textContent = displayedNum + '.'
			}
			else if (previousKeyType === 'operator'
				|| previousKeyType === 'calculate'
			)
			{
				display.textContent = '0.'
			}
			calculator.dataset.previousKeyType = 'decimal'
		}
		if (action === 'clear') {
			if(key.textContent === 'AC')
			{
				calculator.dataset.firstValue = ''
				calculator.dataset.modValue = ''
				calculator.dataset.operator = ''
				calculator.dataset.previousKeyType = ''
			}
			else
			{
				key.textContent = 'AC'
			}

			display.textContent = 0
			calculator.dataset.previousKeyType = 'clear'
		}
		// REMOVE THIS
		if (action !== 'clear')
		{
			const clearButton = calculator.querySelector('[data-action=clear]')
			clearButton.textContent = 'CE'
		}
		if (action === 'calculate') {
			let firstValue = calculator.dataset.firstValue
			const operator = calculator.dataset.operator
			const secondValue = displayedNum

			if(firstValue) {
				if(previousKeyType === 'calculate')
				{
					firstValue = displayedNum
					secondValue = calculator.dataset.modValue
				}

				display.textContent = calculate(firstValue, operator, secondValue)
			}

			calculator.dataset.modValue = secondValue
			calculator.dataset.previousKeyType = 'calculate'
		}
		if (action === 'backspace'){
			let str = display.textContent
			// Only if the current textContent only one character
			if(str.length === 1)
			{
				display.textContent = '0'
			}
			else {
				display.textContent = str.substring(0, str.length - 1)
			}
		}
		// Not sure yet about this part
		// Remove .is-depressed class from all keys
		Array.from(key.parentNode.children)
			.forEach(k => k.classList.remove('is-depressed'))
	}
})

const calculate = (n1, operator, n2) => {
	let firstNum = parseFloat(n1)
	let secondNum = parseFloat(n2)
	if(operator === 'add') return firstNum + secondNum
	if(operator === 'subtract') return firstNum + secondNum
	if(operator === 'multiply') return firstNum + secondNum
	if(operator === 'divide') return firstNum + secondNum
}

//// FOR TESTING
//module.exports = {
//	add,
//	subtract,
//	divide,
//	multiply,
//	operate
//}
