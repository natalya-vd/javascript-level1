// Решение Задачи №6

const AMOUNT = 'сумма';
const DIFFERENCE = 'разность';
const MULTIPLICATION = 'произведение';
const DIVISION = 'частное';

function mathOperation(arg1, arg2, operation) {
    let result;

    switch (operation.toLowerCase()) {
        case AMOUNT:
            result = calculateSum(arg1, arg2);
            break;

        case DIFFERENCE:
            result = calculateSub(arg1, arg2);
            break;
    
        case MULTIPLICATION:
            result = calculateMul(arg1, arg2);
            break;

        case DIVISION:
            result = calculateDiv(arg1, arg2);
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
const operation = prompt(`Введите математическое действие из списка: ${AMOUNT}, ${DIFFERENCE}, ${MULTIPLICATION}, ${DIVISION}`);

alert(`Вы ввели ${number1} и ${number2}.
Их ${operation} = ${mathOperation(number1, number2, operation)}`);