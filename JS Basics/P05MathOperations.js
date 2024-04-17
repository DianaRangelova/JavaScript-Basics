// Declare function
function calculate (firstNumber, secondNumber, operator) {
    
    switch (operator) {
        case '+':
        console.log(firstNumber + secondNumber);
        break;
        case '-':
        console.log(firstNumber - secondNumber);
        break;
        case '*':
        console.log(firstNumber * secondNumber);
        break;
        case '/':
        console.log(firstNumber / secondNumber);
        break;
        case '%':
        console.log(firstNumber % secondNumber);
        break;
        case '**':
        console.log(firstNumber ** secondNumber);
        break;
    }
}

// Invocation function
calculate(5, 6, '+');
calculate(3, 5.5, '*');