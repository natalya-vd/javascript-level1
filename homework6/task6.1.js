//Решение Задачи №1

//Что-то при первоначальной загрузке фото у меня фотки загружаются секунд 5 и при перелистывании фоток в галерее видно как фотка пропадает и появляется (как щелчок какой-то), когда все фотки просмотришь, то это проходит и фотки загружаются без этого "щелчка". Это из-за того что фотки берутся со стороннего сайта или из-за чего-то в моем коде?

function openImage(event) {
    const gallery = document.getElementsByClassName('gallery__inner')[0];
    
    gallery.innerHTML = '';

    const target = event.target;

    const seed = target.dataset.seed;

    if(!seed) {
        return;
    };

    const image = document.createElement('img');
    
    image.src = `https://picsum.photos/seed/${seed}/600`;
    image.alt = `Изображение ${seed}`;
    image.dataset.seed = `${seed}`;

    image.addEventListener('error', loadErrorImage);//Проверка на наличие фото по url

    gallery.appendChild(image);
};

//Функция, которая вызывается в случае отсутствия картинки по указанному адресу и добавляет блок
function loadErrorImage() {
    const gallery = document.getElementsByClassName('gallery__inner')[0];
    gallery.innerHTML = '';

    const block = document.createElement('div');
    block.innerText = 'При загрузке изображения произошла ошибка';
    block.className = 'overlay';

    gallery.appendChild(block);
};

function init() {
    const images = document.getElementsByClassName('gallery__footer-img');
    
    for(let img of images) {
        img.addEventListener('click', openImage);
    }
};

window.addEventListener('load', init);