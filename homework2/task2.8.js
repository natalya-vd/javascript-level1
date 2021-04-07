// Решение Задачи №8

//если степень целая и положительная (в задании наверно предполагалось сделать это)
function power(val, pow) {
    if(pow === 0) {
        return 1;
    }
    else {
        return power(val, pow - 1) * val;
    }
}

// если степень целая и отрицательная.
function negativePower(val, pow) {
    if(pow === 0) {
        return 1;
    }
    else {
        return (1 / (power(val, -pow - 1) * val));
    }
}

//Есть еще дробные степени, но как написать функции я не придумала. Нашла 2 метода, один возвращает квадратный корень из числа Math.sqrt() и второй метод Math.pow() вроде можно любую степень найти, в том числе и дробную
console.log(Math.sqrt(4));
console.log(Math.pow(4, 0.5));
console.log(Math.pow(4, 0.25));

//Вызов функции. Это уже дополнительно. Мне хотелось потренироваться как вызывать функции и прописывать условия. Взяла из Вашего кода для угадайки и аддаптировала к своим условиям :) 

let entered = null;

while(entered === null) {
    const number = +prompt('Введите число, которое Вы хотите возвести в степень');
    const degree = +prompt('Введите степень');

    if(isNaN(number) || isNaN(degree)) {
        alert('Вы ввели некорректные данные. В степень можно возводить только числа');
        continue;
    }

    entered = number;

    switch (compareNumbers(degree)) {
        case 1:
            alert(`При возведении ${number} в степень ${degree} получится ${power(number, degree)}`);
            break;

        case -1:
            alert(`При возведении ${number} в степень ${degree} получится ${negativePower(number, degree)}`);
            break;
    }
}

function compareNumbers(a) {
    if (a < 0) {
        return -1;
    } else {
        return 1;
    }
}