// Решение Задачи №7

const number1 = null;
const number2 = 0;

console.log(number1 == number2); // false
console.log(number1 === number2); // false, (строка 6 и 7) при не строгом и строгом равенстве null == undefined, но не равно никакому другому значению. Это специальное правило языка
console.log(number1 !== number2); // true
console.log(number1 != number2); // true, (строка 8 и 9) т.к. при строгом и не строгом равенстве у нас null == undefined и ничему более
console.log(number1 > number2); // false
console.log(number1 >= number2); // true
console.log(number1 < number2); // false
console.log(number1 <= number2); // true, (10-13 строки) У нас происходит преобразование null к числу 0 и поэтому сравнения > и < оказывваются ложными, а >= и <= верными (т.к. при этих операторах сравнения null = 0)