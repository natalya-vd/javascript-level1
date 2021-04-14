// Решение Задачи №3

//Как-то у меня все сложно получилось. Где-то, на мой взгляд, очень тяжело читать код, т.к. трехэтажные вложения (это я про то когда вызываю свойства объектов)

// Объект игрока
const player = {
    questionNumber: 1,
    guessPosition: [], //запоминаем угаданные позиции

    move() {
        this.guessPosition.push('position' + this.questionNumber);
        this.questionNumber++;
    },
    
    getPrize () { // если игрок решил забрать деньги на каком-то вопросе
        return config[this.guessPosition[this.guessPosition.length - 1]].sum; //что-то я тут наворотила, по-моему это очень тяжело прочитать, но оно работает :)
    }
};

//Объект, который хранит все вопросы с ответами и связанные с ними методы
const config = {
    rowsCount: 2,
    colsCount: 2,
    position: 'position1', // храню какая позиция у меня сейчас
    safePosition: ['position5', 'position10', 'position15'], //"несгораемый" остаток
    
    position1: {
        question: 'Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?',
        answer: ['A: сделать сегодня', 'B: сделать послезавтра', 'C: сделать через месяц', 'D: никогда не делать'],
        correctAnswer: 'A: сделать сегодня',
        sum: '500 руб'
    },
    position2: {
        question: 'Что говорит человек, когда замечает нечто необычное?',
        answer: ['A: попало в лоб', 'B: залетело в рот', 'C: накапало в уши', 'D: бросилось в глаза'],
        correctAnswer: 'D: бросилось в глаза',
        sum: '1000 руб'
    },
    position3: {
        question: 'Что помогает туристу ориентироваться в незнакомом городе?',
        answer: ['A: путепровод', 'B: путеукладчик', 'C: путеводитель', 'D: путеводная звезда'],
        correctAnswer: 'C: путеводитель',
        sum: '2000 руб'
    },
    position4: {
        question: 'Какой наряд прославил баснописец Крылов?',
        answer: ['A: тришкин кафтан', 'B: ивашкин армяк', 'C: прошкин зипун', 'D: машкин сарафан'],
        correctAnswer: 'A: тришкин кафтан',
        sum: '3000 руб'
    },
    position5: {
        question: 'Как звали старшую сестру императора Петра Первого?',
        answer: ['A: Вера', 'B: Надежда', 'C: Любовь', 'D: Софья'],
        correctAnswer: 'D: Софья',
        sum: '5000 руб'
    },
    position6: {
        question: 'Что не бывает морским?',
        answer: ['A: рельс', 'B: огурец', 'C: гребешок', 'D: узел'],
        correctAnswer: 'A: рельс',
        sum: '10 000 руб'
    },
    position7: {
        question: 'Кого с большим основанием можно назвать островитянами?',
        answer: ['A: алеутов', 'B: эвенков', 'C: чукчей', 'D: якутов'],
        correctAnswer: 'A: алеутов',
        sum: '15 000 руб'
    },
    position8: {
        question: 'В какой стране появилась мандолина?',
        answer: ['A: Испания', 'B: Италия', 'C: Венгрия', 'D: Греция'],
        correctAnswer: 'B: Италия',
        sum: '25 000 руб'
    },
    position9: {
        question: 'Как жители Лондона прозвали небоскреб Мэри-Экс, спроектированный Норманом Фостером?',
        answer: ['A: «корнишон»', 'B: «баклажан»', 'C: «кабачок»', 'D: «патиссон»'],
        correctAnswer: 'A: «корнишон»',
        sum: '50 000 руб'
    },
    position10: {
        question: 'Какой врач первым в истории русской медицины применил гипсовую повязку?',
        answer: ['A: Субботин', 'B: Пирогов', 'C: Боткин', 'D: Склифосовский'],
        correctAnswer: 'B: Пирогов',
        sum: '100 000 руб'
    },
    position11: {
        question: 'Где в Древней Греции можно было увидеть надпись: «Здесь живут мертвые и говорят немые»?',
        answer: ['A: на кладбищах', 'B: в больницах', 'C: в библиотеках', 'D: в тюрьмах'],
        correctAnswer: 'C: в библиотеках',
        sum: '200 000 руб'
    },
    position12: {
        question: 'Кто был одним из авторов сценария фильма «Музыкальная история» с Сергеем Лемешевым в главной роли?',
        answer: ['A: Илья Ильф', 'B: Евгений Петров', 'C: Михаил Зощенко', 'D: Аркадий Аверченко'],
        correctAnswer: 'B: Евгений Петров',
        sum: '400 000 руб'
    },
    position13: {
        question: 'С чем часто охотятся на рыбу протоптера между сезонами дождей?',
        answer: ['A: с сетями', 'B: с сачками', 'C: с ружьями', 'D: с лопатами'],
        correctAnswer: 'D: с лопатами',
        sum: '800 000 руб'
    },
    position14: {
        question: 'Каким видом спорта серьезно увлекался французский летчик Ролан Гаррос?',
        answer: ['A: пинг-понгом', 'B: поло', 'C: гольфом', 'D: регби'],
        correctAnswer: 'D: регби',
        sum: '1 500 000 руб'
    },
    position15: {
        question: 'Что такое лобогрейка?',
        answer: ['A: жнейка', 'B: шапка', 'C: болезнь', 'D: печка'],
        correctAnswer: 'A: жнейка',
        sum: '3 000 000 руб'
    },

    compareAnswer(userAnswer) {
        if(userAnswer === this[this.safePosition[2]].correctAnswer) {
            return null;
        }
        else if (userAnswer === this[this.position].correctAnswer) {
            console.log('Это правильный ответ!'); //хотела сделать чтобы при правильном ответе выводилась эта надпись, но при очистке поля эта надпись почему-то не выводится
            return true;
        };
    },

    getPosition () {
        this.position = 'position' + player.questionNumber;
    },

    compareSafePositionAndGuessPosition () {
        if(player.guessPosition.includes(this.safePosition[1])) {
            console.log(`Игра окончена. Поздравляю, Вы заработали ${this[this.safePosition[1]].sum}`);
        }
        else if(player.guessPosition.includes(this.safePosition[0])) {
            console.log(`Игра окончена. Поздравляю, Вы заработали ${this[this.safePosition[0]].sum}`);
        }
        else {
            console.log('Игра окончена. Вы ничего не заработали!');
        };
    }
};

// Объект, который отвечает за отрисовку (рендеринг) поля
let renderer = {
    map: '',
    numberMotion: 1, //запоминаем номер вопроса

    render() {
        let position = 'position' + this.numberMotion;
        console.log(`Вопрос № ${this.numberMotion}. Вопрос на ${config[position].sum}`);
        this.map = config[position].question;
        this.map += '\n';
        let counter = 0;


        for (let row = 0; row < config.rowsCount; row++) {
            for(let col = 0; col < config.colsCount; col++) {
                this.map += config[position].answer[counter] + ';    ';
                counter++;
            }
            this.map += '\n';
        };

        console.log(this.map);
        this.numberMotion++; //считаем вопросы
    },
    
    clear() {
        console.clear();
        this.map = '';
    }
};

//Объект, который спрашивает у игрока какой вариант ответа и подтягивает выбранный вариант из списка ответов
let mover = {
    getDirection() {
        const availableDirections = ['a', 'b', 'c', 'd', 'q'];

        while(true) {
            let direction = prompt('Выберите вариант ответа: a, b, c, d.\nЕсли хотите завершить игру и забрать выигрыш, введите q.\nДля выхода из игры без подсчета результата нажмите "Отмена".');

            if(!direction) {
                return null;
            };

            if(!availableDirections.includes(direction)) {
                alert('Нет такого варианта, выберите вариант ответа из a, b, c или d.');
                continue;
            };

            return direction;
        }
    },

    getUserAnswer(direction) {
        const userAnswer = {
            questionNumber: player.questionNumber,
            userAnswer: '',
        };        

        switch (direction) {
            case 'a':
                userAnswer.userAnswer = config[config.position].answer[0];
                break;
        
            case 'b':
                userAnswer.userAnswer = config[config.position].answer[1];
                break;  
                
            case 'c':
                userAnswer.userAnswer = config[config.position].answer[2];
                break;

            case 'd':
                userAnswer.userAnswer = config[config.position].answer[3];
                break;
        };

        return userAnswer.userAnswer;
    }
};

// Объект, который запускает и контролирует игру
let game = {
    run() {
        renderer.render();

        while(true) {
            const direction = mover.getDirection();

            if(direction === null) {
                renderer.clear();
                console.log('Вы вышли из игры без подсчета результатов!');
                break;
            };

            if(direction === 'q') {
                console.log(`Вы решили забрать деньги и заработали ${player.getPrize()}`);
                break;
            };

            const userAnswer = mover.getUserAnswer(direction);

            if(config.compareAnswer(userAnswer)) {
                renderer.clear(); // Хотела сделать чтобы у меня выводилось console.log('Это правильный ответ!');  из config.compareAnswer(userAnswer), но что-то не получилось, куда бы я ее не вставляла, если подключаю очистить поле (если очистку поля не подключаю, то выводится эта надпись), то надпись не выводится, остальное все работает
                renderer.render();
                player.move(); // считаю номер вопроса
                config.getPosition(); // считаю позицию вопроса

                continue;
            };

            if(config.compareAnswer(userAnswer) === null) {
                console.log(`Поздравляю, Вы выиграли в игре "Кто хочет стать миллионером" и заработали ${config.position15.sum}`);
                break;
            };

            if(!config.compareAnswer(userAnswer)) {
                console.log(`К сожалению Вы не угадали. Правильный ответ - ${config[config.position].correctAnswer}`);
                console.log(config.compareSafePositionAndGuessPosition());
                break;
            }
        };
    },

    init() {        
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();