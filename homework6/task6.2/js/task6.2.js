//Решение Задачи №2

//Взяла страницу с товарами, которую верстала на курсе верстки и сделала для нее корзину. Правда не до конца доделала в плане стилей, но думаю это к теме не относится :)

const basket = {
    basketProduct: '',//Хотела тут хранить добавленные овары, чтобы их потом использовать при подсчете суммы, но если использую это свойство в методе getSum, то в нем никаких товаров нет

    addToCart() {
        const basket = document.querySelector('.header__basket-inner');
        const numberProduct = product.numberProduct;
        const productName = product.product[numberProduct].children[1].children[0].innerText;
        const productPrice = product.product[numberProduct].children[1].children[2].innerText;

        let list = document.createElement('ul');
        list.className = 'header__basket-list';

        for(let i = 0; i < 2; i++) {
            let item = document.createElement('li');
            item.className = 'header__basket-item';
            list.appendChild(item);
        };
        
        list.children[0].innerHTML = productName;
        list.children[1].innerHTML = productPrice;

        basket.appendChild(list);

        basket.basketProduct = basket;
    },

    getSum() {
        let sum = 0;
        const basket = document.querySelector('.header__basket-inner');
        const basketSum = document.querySelector('.header__basket-sum');
        
        for(let price of basket.children) {
            sum += Number(price.children[1].innerText);
        };
        basketSum.innerHTML = sum;
    },
};

const product = {
    product: document.getElementsByClassName('products-gr__item'),
    numberProduct: '',

    serchIdButton (event) {
        const currentIdButton = event.target.id;
        
        for(let i = 0; i < product.product.length - 1; i++) {
            let idBtn = product.product[i].children[0].children[1].id; // Можно ли так записывать? Я имею ввиду искать детей-детей-детей... :))) или лучше разбить на 2-3 переменные?

            if(idBtn === currentIdButton) {
                product.numberProduct = i;
                basket.addToCart();
                basket.getSum();
            };
        }
    }
};

function init() {
    const buttons = document.getElementsByClassName('products-gr__button-cart');
    
    for(let btn of buttons) {
        btn.addEventListener('click', product.serchIdButton);
    }
};

window.addEventListener('load', init);