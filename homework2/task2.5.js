// Решение Задачи №5

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

const number1 = +prompt('Введите первое число');
const number2 = +prompt('Введите второе число');

alert(`Вы ввели числа: ${number1} и ${number2}
Сумма этих чисел равна ${calculationSum(number1, number2)}
Разность этих чисел равна ${subtractionNumber(number1, number2)}
Произведение этих чисел равно ${multiplicationNumber(number1, number2)}
Деление этих чисел равно ${divisionNumber(number1, number2)}`);