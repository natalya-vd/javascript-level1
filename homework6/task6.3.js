//Решение Задачи №3

//Вариант 2

//Функция, которая отвечает за переход назад
function scrollBack() {
    const numberImage = serchNumberImage();
    const images = getImages();
    let seed;

    if(numberImage === 0) {
        seed = images[images.length - 1].dataset.seed;
    }
    else {
        seed = images[numberImage - 1].dataset.seed;
        }

    rendererImage(seed);
};

//Функция, которая отвечает за переход вперед
function scrollForward() {
    const numberImage = serchNumberImage();
    const images = getImages();
    let seed;

    if(numberImage === images.length - 1) {
        seed = images[0].dataset.seed;
    }
    else {
        seed = images[numberImage + 1].dataset.seed;
        }

    rendererImage(seed);
};

//Функция, которая получает текущий seed из большой картинки
function getCurrentSeed() {
    const gallery = document.getElementsByClassName('gallery__inner')[0];

    const children = gallery.children;
    
    let currentSeed = children[0].dataset.seed;
    
    if(!currentSeed) {
        return;
    };

    return currentSeed;
};

//Функция, которая возвращает детей из группы маленьких картинок
function getImages() {
    return document.querySelector('.gallery__footer').children;
};

//Функция, которая ищет текущий seed среди маленьких картинок
function serchNumberImage() {
    const currentSeed = getCurrentSeed();

    const images = getImages();

    for(let i = 0; i < images.length; i++) {
        if(currentSeed === images[i].dataset.seed) {
            return i;
        };
    };
};

//Фукция, которая отрисовывает нужную картинку
function rendererImage(seed) {
    let gallery = document.getElementsByClassName('gallery__inner')[0];

    gallery.innerHTML = '';

    const image = document.createElement('img');

    image.className = 'gallery_img';
    image.src = `https://picsum.photos/seed/${seed}/600`;
    image.alt = `Изображение ${seed}`;
    image.dataset.seed = `${seed}`;
    image.height = '600';
    image.width = '600';

    image.addEventListener('error', loadErrorImage);

    gallery.appendChild(image);
};

//Если пришла "битая картинка", то вместо большой выведится блок с надписью
function loadErrorImage() {
    const gallery = document.getElementsByClassName('gallery__inner')[0];
    gallery.innerHTML = '';

    const block = document.createElement('div');
    block.innerText = 'При загрузке изображения произошла ошибка';
    block.className = 'overlay';

    gallery.appendChild(block);
};

function init() {
    const buttonPrevious = document.getElementById('button-previous');
    const buttonNext = document.getElementById('button-next');

    buttonPrevious.addEventListener('click', scrollBack);
    buttonNext.addEventListener('click', scrollForward);
};

window.addEventListener('load', init);

/*Вариант 3, который мне пришел изначально :))))

const MIN = 1;

function scrollBack() {
    let seed = getSeed();
    let maxImg = getMaxImage();

    seed --;

    if(seed < MIN) {
        seed = maxImg;
    };

    rendererImage(seed);
};

function scrollForward() {
    let seed = getSeed();
    let maxImg = getMaxImage();

    seed ++;

    if(seed > maxImg) {
        seed = MIN;
    };

    rendererImage(seed);
};

function getSeed() {
    const gallery = document.getElementsByClassName('gallery__inner')[0];

    const children = gallery.children;
    
    let seed = children[0].dataset.seed;
    
    if(!seed) {
        return;
    };

    return seed;
};

function getMaxImage() {
    return document.querySelector('.gallery__footer').children.length;
};

function rendererImage(seed) {
    gallery = document.getElementsByClassName('gallery__inner')[0];

    gallery.innerHTML = '';

    const image = document.createElement('img');

    image.id = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/600`;
    image.alt = `Изображение ${seed}`;
    image.dataset.seed = `${seed}`;

    image.addEventListener('error', loadErrorImage);

    gallery.appendChild(image);
};

function loadErrorImage() {
    const gallery = document.getElementsByClassName('gallery__inner')[0];
    gallery.innerHTML = '';

    const block = document.createElement('div');
    block.innerText = 'При загрузке изображения произошла ошибка';
    block.className = 'overlay';

    gallery.appendChild(block);
};

function init() {
    const buttonPrevious = document.getElementById('button-previous');
    const buttonNext = document.getElementById('button-next');

    buttonPrevious.addEventListener('click', scrollBack);
    buttonNext.addEventListener('click', scrollForward);
};

window.addEventListener('load', init);*/