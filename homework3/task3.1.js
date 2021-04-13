//Решение задачи №1

//Решение №1

const MAX = 100;
let number = 2;

    while(number <= MAX) {
        let isPrime = false;
        
        for(let j = 2; j < number; j++) {
            if(number % j === 0) {
                isPrime = true;
                break;
            }
        };

        if(isPrime === false) {
            console.log(number);
        };
        
        number++;
    }

/*Решение №2

const MAX = 100;
let number = 1;

outer:
    while(number < MAX) {
        number++;
        for(let j = 2; j < number; j++) {
            if(number % j === 0) {
                continue outer;
            }
        }
        console.log(number);
    }*/

/*Решение №3
const MAX = 100;

outer:
for(let i = 2; i <= MAX; i++) {
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            continue outer;
        }
    }
    console.log(i);
}*/

/*Решение №4
const MAX = 100;
let number = 2; // беру от 2-х, т.к. в простые числа 0 и 1 не входят, по определению простых чисел

while(number <= MAX) {

    switch (1) {
        case number / 2:
        case number / 3:
        case number / 5:
        case number / 7:
            console.log(number);
            break;
    
        default:
            break;
    }

    switch (0) {
        case number % 2:
        case number % 3:
        case number % 5:
        case number % 7:
            break;
    
        default:
            console.log(number);
            break;
    }
    number++;
}*/

/* Решение №5
Можно простые числа накапливать в массиве

const MAX = 100;
let number = 2;
let result = [];

while(number <= MAX) {

    switch (1) {
        case number / 2:
        case number / 3:
        case number / 5:
        case number / 7:
            result.push(number);
            break;
    
        default:
            break;
    }

    switch (0) {
        case number % 2:
        case number % 3:
        case number % 5:
        case number % 7:
            break;
    
        default:
            result.push(number);
            break;
    }
    number++;
}
console.log(result);
*/