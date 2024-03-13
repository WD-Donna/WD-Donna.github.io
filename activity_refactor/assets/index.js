function performOperation(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    switch(operation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Cannot divide by zero!';
            }
            break;
        default:
            result = 'Invalid operation';
            break;
    }

    document.getElementById('result').innerHTML = result;
}