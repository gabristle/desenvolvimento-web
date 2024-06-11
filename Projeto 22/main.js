let num1input = document.getElementById('num1');
let num2input = document.getElementById('num2');
let operatorInput = document.getElementById('operators');
let buttonOp = document.getElementById('calculate');
let resultInput = document.getElementById('result');

buttonOp.addEventListener('click', function() {
    let num1 = Number(num1input.value);
    let num2 = Number(num2input.value);
    let operator = operatorInput.value;
    let result = 0;

    switch(operator){
        case '+':
            result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '/':
            result = num1 / num2;
        break;
        default: 
            result = 'Invalid Operator';
        break;
    }

    resultInput.innerHTML = 'The result is: ' + result.toFixed(2);
});