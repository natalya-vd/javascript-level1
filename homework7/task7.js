//Решение задачи №1,2,3

//Вроде все сделала по пунктам, которые на сайте. Все кнопки работают, можно после кнопки "Стоп" запустить игру заново. Добавила объект, который увеличивает скорость движения змейки, вроде работает. Выдает ошибку строка 130 (так и не поняла почему и как ее исправить). Добавила проверку для еды, но она походу не работает, т.к. иногда яблоки появляются в змейке. Улучшила код только в 1 месте строка 224

const GAME_STATUS_STARTED = 'started';
const GAME_STATUS_PAUSED  = 'paused';
const GAME_STATUS_STOPPED = 'stopped';
const CLASS_PLAY = 'game';

const SNAKE_DIRECTION_UP = 'up';
const SNAKE_DIRECTION_DOWN = 'down';
const SNAKE_DIRECTION_LEFT = 'left';
const SNAKE_DIRECTION_RIGHT = 'right';

/**
 * Объект с настройками конфигурации игры
 */
const config = {    
    size: 20
};

/**
 * Основной объект игры.
 */
const game = {
    idInterval: 0,
    isPrimePause: true,

    /**
     * Функция ищет HTML элемент контейнера игры на странице.
     *
     * @returns {HTMLElement} Возвращает HTML элемент.
     */
    getElement() {
        return document.getElementById('game');
    },

    /**
     * Функция выполняет старт игры.
     */
    start() {
        game.setGameStatus(GAME_STATUS_STARTED);

        game.isPrimePause = true;
        addClick('button-pause', game.pause);
        board.clearBoard();
        score.updateScore();
        board.render();
        snake.seed();
        speedSnake.seed();
        snake.render();
        food.render();

        game.moveConstSnake()

        removeClick('button-start', game.start);
    },

    /**
     * Функция выполняет паузу игры.
     */
    pause() {
        game.setGameStatus(GAME_STATUS_PAUSED);
        
        if(game.isPrimePause) {
            clearInterval(game.idInterval);
            window.removeEventListener('keydown', game.move);
            
        } 
        else {
            game.setGameStatus(GAME_STATUS_STARTED);
            game.moveConstSnake()
            window.addEventListener('keydown', game.move);
        };

        game.isPrimePause = !game.isPrimePause;
        return;
    },

    /**
     * Функция останавливает игру.
     */
    stop() {
        game.setGameStatus(GAME_STATUS_STOPPED);

        window.addEventListener('keydown', game.move);
        addClick('button-pause', game.pause);
        game.isPrimePause = !game.isPrimePause;

        cells.clearItems(board.getElement());
        board.renderGameOver();
        clearInterval(game.idInterval);
        
        snake.seed();
        speedSnake.seed();

        removeClick('button-pause', game.pause);
        addClick('button-start', game.start);
    },

    /**
     * Функция, которая определяет направление движения змейки от пользователя и выполняет передвижение змейки по полю.
     *
     * @param event {KeyboardEvent} Событие нажатия на клавишу.
     */
    move(event) {
        let direction = null;
        
        switch (event.keyCode) {
            case 38:
                direction = SNAKE_DIRECTION_UP;
                break;
            case 40:
                direction = SNAKE_DIRECTION_DOWN;
                break;
            case 37:
                direction = SNAKE_DIRECTION_LEFT;
                break;
            case 39:
                direction = SNAKE_DIRECTION_RIGHT;
                break;
            default:
                return;
        }
        
        snake.setDirection(direction);

        game.moveSnake();

        /*Сначала записывала все это и здесь и в game.moveConstSnake(), потом решила здесь просто вызывать game.moveConstSnake() (см. выше), но теперь когда змейка врезается в себя в консоли появляется ошибка "Uncaught TypeError: Cannot read property 'classList' of null" в 383 строке. Как ее исправить?

        const nextPosition = snake.getNextPosition();        
        
        const foundSnake = snake.foundSnakePosition(nextPosition);

        if(foundSnake !== -1) {
            game.setGameStatus(GAME_STATUS_STOPPED);
        }
        
        const foundFood = food.foundPosition(nextPosition);
        
        if (foundFood !== -1) {
            snake.setPosition(nextPosition, false);
            
            food.removeItem(foundFood);
            
            score.calculateScore();
            score.render();
            
            food.generateItem();
            
            food.render();
        } else {
            snake.setPosition(nextPosition);
        };

        snake.render();*/
    },

    /**
     * Функция, которая двигает змейку
     */
    moveSnake() {
        speedSnake.compareScore();

        const nextPosition = snake.getNextPosition();

        const foundSnake = snake.foundSnakePosition(nextPosition);

        if(foundSnake !== -1) {
            game.setGameStatus(GAME_STATUS_STOPPED);

            cells.clearItems(board.getElement()); 
            board.renderGameOver();
            clearInterval(game.idInterval);
            
            snake.seed();
            speedSnake.seed();

            removeClick('button-pause', game.pause);
            addClick('button-start', game.start);
        };

        const foundFood = food.foundPosition(nextPosition);
        
        if (foundFood !== -1) {
            snake.setPosition(nextPosition, false);
            
            food.removeItem(foundFood);

            score.calculateScore();
            score.render();
            
            food.generateItem();
            
            food.render();
        } else {
            snake.setPosition(nextPosition);
        };

        snake.render();
    },

    /**
     * Функция, которая двигает змейку постоянно
     */
    moveConstSnake () {
        speedSnake.getInterval();
        const intervalSnake = setInterval(game.moveSnake, speedSnake.time);
        game.idInterval = intervalSnake;
    },
    
    /**
     * Функция устанавливает текущий статус игры,
     * раскрашивая контейнер игры в нужный цвет.
     *
     * @param status {GAME_STATUS_STARTED | GAME_STATUS_PAUSED | GAME_STATUS_STOPPED} Строка представляющая статус.
     */
    setGameStatus(status) {
        const element = game.getElement();

        // обратить внимание, как сделать красивее
        //Сделала красивее, наверно :)
        element.className = `${CLASS_PLAY} ${status}`;
    }
};

/**
 * Объект, который увеличивает скорость движения змейки
 */
const speedSnake = {
    timeInterval: [400],
    scoreInterval: [0],
    stepScore: 5,
    stepTime: 5,
    countScore: 0,
    time: 400,

    getInterval () {
        const countInterval = config.size**2 / this.stepScore;

        for( let i = 0; i < countInterval; i++) {
            this.timeInterval.push(this.timeInterval[i] - this.stepTime);
            this.scoreInterval.push(this.scoreInterval[i] + this.stepScore);
        };
    },

    compareScore() { 
        
        if(score.score === this.scoreInterval[this.countScore]) {
            const time = this.timeInterval[this.countScore];
            this.countScore++;
            speedSnake.time = time;
        }
        return;
    },

    seed () {
        this.timeInterval = [400];
        this.scoreInterval = [0];
        this.countScore = 0;
        this.time = 400;
    }
};

/**
 * Объект, который отвечает за очки игры
 */
const score = {
    score: 0,

    /**
     * Функция ищет HTML элемент поля на странице
     * @returns {HTMLElement}
     */
    getElement() {
        return document.getElementById('score-value');
    },

    /**
     * Функция, которая считает очки игры
     */
    calculateScore() {
        this.score++
    },

    /**
     * Функция, которая отрисовывает очки на поле
     */
    render() {
        const score = this.getElement();

        score.innerHTML = this.score;
    },

    updateScore() {
        const score = this.getElement();

        score.innerHTML = this.score;
    }
}

/**
 * Объект, представляющий поле, где ползает змейка.
 */
const board = {

    /**
     * Функция ищет HTML элемент поля на странице.
     *
     * @returns {HTMLElement} Возвращает HTML элемент.
     */
    getElement() {
        return document.getElementById('board');
    },

    /**
     * Функция отрисовывает поле с клетками для игры.
     */
    render() {
        const board = this.getElement();
        
        for (let i = 0; i < config.size**2; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            
            cell.dataset.top = Math.trunc(i / config.size);
            cell.dataset.left = i % config.size;

            board.appendChild(cell);
        }
    },

    /**
     * Функция, которая отрисовывает надпись об окончании игры
     */
    renderGameOver() {
        const board = this.getElement();

        board.innerHTML = `<p>Конец игры!</p><p>Счет равен ${score.score}</p><p>Для начала новой игры нажмите "Начать"</p><img src='./snake.jpg' width='286'></img>`
    },

    /**
     * Функция, которая чистит поле // Как ее применять для чистки поля?
     */
    clearBoard() {
        const board = this.getElement();

        board.innerHTML = '';
    }
};

/**
 * Объект, представляющий клетку на поле.
 */
const cells = {

    /**
     * Функция ищет HTML элементы клеток на странице.
     *
     * @returns { HTMLCollectionOf.<Element>} Возвращает набор HTML элементов.
     */
    getElements() {
        return document.getElementsByClassName('cell');
    },

    /**
     * Функция задает класс для клетки по заданным координатам.
     *
     * @param coordinates {Array.<{top: number, left: number}>} Массив координат клеток для изменения.
     * @param className {string} Название класса.
     */
    renderItems(coordinates, className) {
        const cells = this.getElements();
        
        for (let cell of cells) {
            cell.classList.remove(className);
        }
        
        for (let coordinate of coordinates) {
            const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
            cell.classList.add(className);
        }
    },

    /**
     * Функция, которая удаляет ячейки
     */
    clearItems(element) {
        const cells = this.getElements();
        //нормально ли перебирать цикл с конца? Пробовала перебирать сначала и через for of, чистится только половина поля
        for(let i = config.size**2 - 1; i >= 0; i--) { 
            element.removeChild(cells[i]);
        };
    }
};

/**
 * Объект, представляющий змейку.
 */
const snake = {

    /**
     * Текущее направление движение змейки.
     * По умолчанию: направо, потому змейка при старте занимает первые три клетки.
     */
    direction: '',

    /**
     * Содержит массив объектов с координатами частей тела змейки.
     * По умолчанию: первые три клетки.
     *
     * NOTE: обратить внимание, как сделать красивее.
     * Поменять порядок координат, сейчас первый элемент массива означает хвост.
     */

    parts: [],

    seed() {
        score.score = 0;

        this.direction = SNAKE_DIRECTION_RIGHT;

        this.parts = [
            { top: 0, left: 0 },
            { top: 0, left: 1 },
            { top: 0, left: 2 },
        ];
    },

    /**
     * Функция устанавливает направление движения.
     *
     * @param direction {'up' | 'down' | 'left' | 'right'} Направление движения змейки.
     */
    setDirection(direction) {
        if (this.direction === SNAKE_DIRECTION_UP && direction === SNAKE_DIRECTION_DOWN
            || this.direction === SNAKE_DIRECTION_DOWN && direction === SNAKE_DIRECTION_UP
            || this.direction === SNAKE_DIRECTION_LEFT && direction === SNAKE_DIRECTION_RIGHT
            || this.direction === SNAKE_DIRECTION_RIGHT && direction === SNAKE_DIRECTION_LEFT) {
            return;
        }

        this.direction = direction;
    },

    /**
     * Функция считает следующую позицию головы змейки,
     * в зависимости от текущего направления.
     *
     * @returns {{top: number, left: number}} Возвращает объект с координатами.
     */
    getNextPosition() {        
        const position = { ...this.parts[this.parts.length - 1] };
        
        switch(this.direction) {
            case SNAKE_DIRECTION_UP:
                position.top -= 1;
                break;
            case SNAKE_DIRECTION_DOWN:
                position.top += 1;
                break;
            case SNAKE_DIRECTION_LEFT:
                position.left -= 1;
                break;
            case SNAKE_DIRECTION_RIGHT:
                position.left += 1;
                break;
        };
        
        if (position.top === -1) {
            position.top = config.size - 1;
        } else if (position.top > config.size - 1) {
            position.top = 0;
        };
        
        if (position.left === -1) {
            position.left = config.size - 1;
        } else if (position.left > config.size - 1) {
            position.left = 0;
        };

        return position;
    },

    /**
     * Функция устанавливает позицию для змейки.
     *
     * @param position {{top: number, left: number}} Координаты новой позиции.
     * @param shift Флаг, указывающий, нужно ли отрезать хвост для змейки.
     */
    setPosition(position, shift = true) {        
        if (shift) {
            this.parts.shift();
        };
        
        this.parts.push(position);
    },

    /**
     * Функция отрисовывает змейку на поле.
     */
    render() {
        cells.renderItems(this.parts, 'snake');
    },

    /**
     * Функция выполняет поиск переданных координат головы змейки в массиве с координатами змейки.
     *
     * @param snakePosition {{top: number, left: number}} Позиция головы змейки.
     *
     * @returns {number} Возвращает индекс найденного совпадения из массива с едой,
     * если ничего не найдено, то -1.
     */
    foundSnakePosition(snakePosition) {
        const comparerFunction = function (item) {
            return item.top === snakePosition.top && item.left === snakePosition.left;
        };
        
        return snake.parts.findIndex(comparerFunction);
    },
};

/**
 * Объект, представляющий еду для змейки.
 */
const food = {

    /**
     * Содержит массив объектов с координатами еды на поле.
     */
    items: [
        { top: 5, left: 5 }
    ],

    /**
     * Функция выполняет поиск переданных координат змейки в массиве с едой.
     *
     * @param snakePosition {{top: number, left: number}} Позиция головы змейки.
     *
     * @returns {number} Возвращает индекс найденного совпадения из массива с едой,
     * если ничего не найдено, то -1.
     */
    foundPosition(snakePosition) {
        const comparerFunction = function (item) {
            return item.top === snakePosition.top && item.left === snakePosition.left;
        };
        
        return this.items.findIndex(comparerFunction);
    },

    /**
     * Функция удаляет один элемент по индексу из массива с едой.
     *
     * @param foundPosition Индекс найденного элемента.
     */
    removeItem(foundPosition) {
        this.items.splice(foundPosition, 1);
    },

    /**
     * Функция генерирует объект с координатами новой еды.
     */
    generateItem() {
        while(true) {
            const newItem = {
                top: getRandomNumber(0, config.size - 1),
                left: getRandomNumber(0, config.size - 1)
            };
    
            // добавила проверку нет ли у нас такого элемента, но походу она не работает
            if(this.items.includes(newItem)) {
                continue;
            };

            this.items.push(newItem);
            break;
        }
    },

    /**
     * Функция отрисовывает еду на поле.
     */
    render() {
        cells.renderItems(this.items, 'food');
    }
};

/**
 * Функция, которая добавляет событие "клик" на кнопку
 * @param idButton {'button-start' | 'button-pause' | 'button-stop'} ID кнопки, взять в кавычки
 * @param funcButton {'game.start' | 'game.pause' | 'game.stop'} Указать функцию, которая запускается при клике
 */
function addClick(idButton, funcButton) {
    const statusButton = document.getElementById(idButton);

    statusButton.addEventListener('click', funcButton);
}

/**
 * Функция, которая удаляет событие "клик" с кнопки
 * @param idButton {'button-start' | 'button-pause' | 'button-stop'} ID кнопки, взять в кавычки
 * @param funcButton {'game.start' | 'game.pause' | 'game.stop'} Указать функцию, которая запускается при клике
 */
function removeClick(idButton, funcButton) {
    const statusButton = document.getElementById(idButton);

    statusButton.removeEventListener('click', funcButton);
};

/**
 * Функция, которая выполняет инициализацию игры.
 */
function init() {
    addClick('button-start', game.start);
    addClick('button-pause', game.pause);
    addClick('button-stop', game.stop);
    
    window.addEventListener('keydown', game.move);
};

/**
 * Функция, генерирующая случайные числа.
 *
 * @param min {number} Нижняя граница генерируемого числа.
 * @param max {number} Верхняя граница генерируемого числа.
 *
 * @returns {number} Возвращает случайное число.
 */
function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
};

window.addEventListener('load', init);
