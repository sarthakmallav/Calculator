let result = document.getElementById('result');
let expression = '';

function appendValue(value) {
	expression += value;
	result.value = expression;
}

function calculate() {
	try {
		expression = eval(expression);
		result.value = expression;
	} catch (error) {
		result.value = 'Invalid Expression';
	}
}

function clearResult() {
	expression = '';
	result.value = '';
}

function backspace() {
	expression = expression.slice(0, -1);
	result.value = expression;
}