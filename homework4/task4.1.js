// Решение Задачи №1

const MIN = 0;
const MAX = 999;

function convertNumberOfObject(number) {
    let object = {};

    if(number < MIN || number > MAX) {
        console.log(`Введенное число должно быть в промежутке от ${MIN} до ${MAX}`);
        return object;
    }
    else {
        // Завожу имена (units, tens, hundreds) свойств объекта object. Сделала так, а не сразу завела объект с этими именами, чтобы при вводе числа больше 999 выводился пустой объект
        object.units = 0;
        object.tens = 0;
        object.hundreds = 0;

        for(let key in object) {
            object[key] = number % 10;
            number = Math.floor(number / 10);
        };
    }

    return object;
};

console.log(`Для вызова функции наберите convertNumberOfObject(number) где number число от ${MIN} до ${MAX}`);

/*
const MIN = 0;
const MAX = 999;

// Сначала пришла в голову идея решения только через switch, но что-то мне показалось, что это опять "ручной" подбор решения. Затем додумалась до того, что выше

function convertNumberOfObject(min, max, number) {    
        let object = {};
        let arr;

        switch (true) {
            case number >= min && number < 10:
                object.units = number;
                object.tens = 0;
                object.hundreds = 0;
                break;

            case number >= 10 && number < 100:
                arr = getArr(number);
                object.units = arr[1];
                object.tens = arr[0];
                object.hundreds = 0;
                break;

            case number >= 100 && number < max:
                arr = getArr(number);
                object.units = arr[2];
                object.tens = arr[1];
                object.hundreds = arr[0];
                break;

            default:
                console.log(`Введенное число должно быть в промежутке от ${min} до ${max}`);
                break;
        }
    
    return console.log(object);
}

// Функция, которая разбивает число по цифрам
function getArr(number) {
    return number.split('');
}

console.log(`Для вызова функции наберите convertNumberOfObject(MIN, MAX, 'number') где number число от ${MIN} до ${MAX}`);*/