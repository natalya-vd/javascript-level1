//Решение задачи №2

/*
Первый вариант если у нас в корзине одна стоимость товара, без наименований (но такое наврядли будет)

let basket = [500, 200, 150, 825]; // цифры взяла для примера, чтобы проверить как работает функция, по идее нужно писать функцию, которая как-то будет добавлять товар в этот массив

function countBasketPrice(basket) {
    let basketPrice = 0;

    for(let i = 0; i < basket.length; i++) {
        basketPrice += basket[i];
    }
    return basketPrice;
}

console.log(basket);
console.log(countBasketPrice(basket));*/


//Создадим массив, где будут хранится название товара и его цена

let basket = [
    ['Рюкзак', 500], 
    ['Ноутбук', 200], 
    ['Планшет', 150],
    ['Телефон', 825],
];

function countBasketPrice(basket) {
    let basketPrice = 0;

    for(let i = 0; i < basket.length; i++) {
        basketPrice += basket[i][1];
    }
    return basketPrice;
}

console.log(basket);
console.log(countBasketPrice(basket));
