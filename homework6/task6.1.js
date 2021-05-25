//Решение Задачи №1

function openImage(event) {
    const gallery = document.getElementsByClassName('gallery__inner')[0];
    
    gallery.innerHTML = '';

    const target = event.target;

    const seed = target.dataset.seed;

    if(!seed) {
        return;
    };

    const image = document.createElement('img');
    
    image.className = 'gallery_img';
    image.src = `https://picsum.photos/seed/${seed}/600`;
    image.alt = `Изображение ${seed}`;
    image.dataset.seed = `${seed}`;    
    image.height = '600';
    image.width = '600';

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