// Решение Задачи №6

const amount = 'сумма';
const difference = 'разность';
const multiplication = 'произведение';
const division = 'частное';

function calculationSum(number1, number2) {
    const sum = number1 + number2;
    return sum;
}

function subtractionNumber(number1, number2) {
    const diff = number1 - number2;
    return diff;
}

function multiplicationNumber(number1, number2) {
    const product = number1 * number2;
    return product;
}

function divisionNumber(number1, number2) {
    const quotient = number1 / number2;
    return quotient;
}

function mathOperation(arg1, arg2, operation) {
    let result;

    switch (operation.toLowerCase()) {
        case amount:
            result = calculationSum(arg1, arg2);
            break;

        case difference:
            result = subtractionNumber(arg1, arg2);
            break;
    
        case multiplication:
            result = multiplicationNumber(arg1, arg2);
            break;

        case division:
            result = divisionNumber(arg1, arg2);
            break;

        default:
            alert('Вы ввели некорректные данные');
            break;
    }

    return result;
}

// Вызов функции mathOperation

const number1 = +prompt('Введите первое число:');
const number2 = +prompt('Введите второе число:');
const operation = prompt(`Введите математическое действие из списка: ${amount}, ${difference}, ${multiplication}, ${division}`);

alert(`Вы ввели ${number1} и ${number2}.
Их ${operation} = ${mathOperation(number1, number2, operation)}`);