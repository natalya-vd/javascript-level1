// Решение Задачи №2

// Объект конфигурации игры
const config = {
    rowsCount: 10,
    colsCount: 10
};

// Объект игрока
const player = {
    x: 0,
    y: 0,
    moves: [{x: 0, y: 0}], //запоминаем ходы

    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
        this.moves.push(nextPoint); //Добавляем ходы в массив
    },
};

// Объект, который отвечает за отрисовку (рендеринг) поля
let renderer = {
    map: '',
    numberMotion: 0, //запоминаем номер хода

    render() {        
        for (let row = 0; row < config.rowsCount; row++) {
            for(let col = 0; col < config.colsCount; col++) {
                if(player.x === row && player.y === col) {
                    this.map += 'O ';
                }
                else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        };

        console.log(this.map);
        console.log(`Номер хода ${this.numberMotion}`);
        this.numberMotion++; //считаем ходы
    },

    // Метод, который выводит положение игрока на n-м ходу
    renderOld(direction) {
        for (let row = 0; row < config.rowsCount; row++) {
            for(let col = 0; col < config.colsCount; col++) {
                if(player.moves[direction].x === row && player.moves[direction].y === col) {
                    this.map += 'O ';
                }
                else {
                    this.map += 'x ';
                }
            }
            this.map += '\n';
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
};

//Объект, который запрашивает направление у игрока и двигает игрока по полю
let mover = {
    getDirection() {
        const availableDirections = ['a', 'd', 'w', 's', 'q'];

        while(true) {
            let direction = prompt('Управление по полю происходит клавишами: a - влево, d - вправо, w - вверх, s - вниз. Если хотите просмотреть какой-то ход, введите q. Для выхода из игры нажмите "Отмена"');

            if(!direction) {
                return null;
            };

            if(!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одну из букв w, a, s или d.');
                continue;
            };

            // Если игрок ввел q, то просим номер хода, который нужно показать
            if(direction === 'q') {
                let numberMotion = +prompt(`Введите номер хода от 0 до ${player.moves.length - 2}, на который Вы хотите вернуться. Для вывода начального положения введите "0".`);// про ноль дописала, т.к. вроде номер хода соответствует индексу массива. Изначально мы находимся в вверхнем левом углу, первый ход сдвигает нас куда-то, исходя из этой логики не стала ни отнимать, ни прибавлять нигде 1. Может конечно запуталась здесь.

                numberMotion = this.checkCountMoves(numberMotion, player.moves);

                return numberMotion;
            };

            return direction;
        }
    },

    checkCountMoves(numberMotion, sumMoves) {
        
        while(numberMotion > sumMoves.length - 2) {
            numberMotion = +prompt(`Вводимый номер хода не может быть больше ${sumMoves.length - 2}. Введите номер хода от 0 до ${sumMoves.length - 2}`);            
        }
        return numberMotion;
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };        

        switch (direction) {
            case 'a':
                nextPosition.y--;
                break;
        
            case 'd':
                nextPosition.y++;
                break;  
                
            case 'w':
                nextPosition.x--;
                break;

            case 's':
                nextPosition.x++;
                break;
        };

        return nextPosition;
    }
};

// Объект, который запускает и контролирует игру
let game = {
    run() {
        while(true) {
            const direction = mover.getDirection();

            if(direction === null) {
                console.log('Игра окончена');
                break;
            };

            const nextPoint = mover.getNextPosition(direction);

            //Добавила условие, чтобы игрок не выходил за пределы поля
            if(nextPoint.x < 0 || nextPoint.y < 0 || nextPoint.x > (config.rowsCount - 1) || nextPoint.y > (config.colsCount - 1)) {
                alert('При данном ходе Вы выходите за пределы поля. Введите другое значение!')
                continue;
            };

            // Если игрок ввел номер хода, то показываем ему какое было поле. Придумала такое условие сравнения, может можно по-другому?
            if(direction === Number(direction)) {
                renderer.clear();
                renderer.renderOld(direction);
            }
            else {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
            
        };
    },

    init() {
        console.log("Ваше положение на поле в виде O.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();