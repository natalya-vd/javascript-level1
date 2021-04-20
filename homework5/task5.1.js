// Решение задачи № 1

// Что-то у меня много дублирующегося кода, но по-другому не работало почему-то

function getChessBoard () {
    const ROWSCOUNT = 8;
    const COLSCOUNT = 8;

    let chessBoard = document.querySelector('.chess-board');
    //let chessBoard = document.getElementsByClassName('chess-board'); // Это второй вариант получения элемента из DOM
    
    let block;
    let isPrime = true; // белая ячейка

    for(let i = 0; i < ROWSCOUNT; i++) {
        for(let j = 0; j < COLSCOUNT; j++) {

            block = document.createElement('div');

            if(j === 0) {
                isPrime = !isPrime;
            }

            if(isPrime) {
                block.className = 'white-cell';
            }
            else {
                block.className = 'black-cell';
            }

            chessBoard.appendChild(block); //если для получения элемента из DOM использую document.querySelector

            //chessBoard[0].appendChild(block);//если для получения элемента из DOM использую document.getElementsByClassName
            isPrime = !isPrime;
        }
    }

    // Вот отсюда дублирующийся код. Я думала, что могу завести 1 переменную для ul и 1 переменную для li, а получилось 4...

    let listLeft = document.createElement('ul');
    let listRight = document.createElement('ul');
    let chessBoardWrapper = document.querySelector('.chess-board-wrapper');
    const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    chessBoardWrapper.appendChild(listRight);
    chessBoardWrapper.insertBefore(listLeft, chessBoardWrapper.children[0]);

    listRight.className = 'list';
    listLeft.className = 'list';

    /*Хотела вывести нумерацию через 1 переменную item, но почему-то у меня это не получилось
    for(let i = 0; i < ROWS.length; i++){
        let item = document.createElement('li');
        item.innerHTML = `${ROWS[i]}`;
        listRight.appendChild(item);
        listLeft.appendChild(item);   //выводится только это
    };*/

    for(let i = 0; i < ROWS.length; i++){
        let itemRight = document.createElement('li');
        let itemLeft = document.createElement('li');
        itemRight.innerHTML = `${ROWS[i]}`;
        itemLeft.innerHTML = `${ROWS[i]}`;
        listRight.appendChild(itemRight);
        listLeft.appendChild(itemLeft);
    };

    let listTop = document.createElement('ul');
    let listBottom = document.createElement('ul');

    chessBoardWrapper.appendChild(listBottom);
    chessBoardWrapper.insertBefore(listTop, chessBoardWrapper.children[1]);

    listTop.className = 'list-text position-top';
    listBottom.className = 'list-text position-bottom';

    for(let i = 0; i < COLS.length; i++){
        let itemTop = document.createElement('li');
        let itemBottom = document.createElement('li');
        itemTop.innerHTML = `${COLS[i]}`;
        itemBottom.innerHTML = `${COLS[i]}`;
        listTop.appendChild(itemTop);
        listBottom.appendChild(itemBottom);
    };
};

getChessBoard ();