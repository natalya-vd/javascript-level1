// Решение задачи № 1

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
            };

            if(isPrime) {
                block.className = 'white-cell';
            }
            else {
                block.className = 'black-cell';
            };

            chessBoard.appendChild(block); //если для получения элемента из DOM использую document.querySelector

            //chessBoard[0].appendChild(block);//если для получения элемента из DOM использую document.getElementsByClassName
            isPrime = !isPrime;
        }
    };
    
    let chessBoardWrapper = document.querySelector('.chess-board-wrapper');
    const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const COLS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    /* Первый вариант создания 2-х списков
    let listLeft = document.createElement('ul');
    let listRight = document.createElement('ul');
    chessBoardWrapper.appendChild(listRight);
    chessBoardWrapper.insertBefore(listLeft, chessBoardWrapper.children[0]);

    listRight.className = 'list';
    listLeft.className = 'list';

    for(let i = 0; i < ROWS.length; i++){
        let itemRight = document.createElement('li');
        let itemLeft = document.createElement('li');
        itemRight.innerHTML = `${ROWS[i]}`;
        itemLeft.innerHTML = `${ROWS[i]}`;
        listRight.appendChild(itemRight);
        listLeft.appendChild(itemLeft);
    };*/

    //Второй вариант создания 2-х списков
    let listLeft = document.createElement('ul');
    listLeft.className = 'list';

    for(let i = 0; i < ROWS.length; i++){
        let item = document.createElement('li');
        item.innerHTML = `${ROWS[i]}`;
        listLeft.appendChild(item);
    };
    
    const listRight = listLeft.cloneNode(true);

    chessBoardWrapper.insertBefore(listLeft, chessBoardWrapper.children[0]);
    chessBoardWrapper.appendChild(listRight);

    let listTop = document.createElement('ul');

    for(let i = 0; i < COLS.length; i++){
        let item = document.createElement('li');
        item.innerHTML = `${COLS[i]}`;
        listTop.appendChild(item);
    };

    const listBottom = listTop.cloneNode(true);

    listTop.className = 'list-text position-top';
    listBottom.className = 'list-text position-bottom';

    chessBoardWrapper.appendChild(listBottom);
    chessBoardWrapper.insertBefore(listTop, chessBoardWrapper.children[1]);
};

getChessBoard ();