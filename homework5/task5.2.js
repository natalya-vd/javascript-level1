// Решение задачи № 2

/* Вариант 1
Сначала написала Вариант 1, но потом мне показалось, что много дублирующегося кода (много циклов for) решила переписать (вариант 2), мне вроде вариант 2 больше нравится, но в нем много "ифов" и стили отвечающий за цвет букв в js, а остальная часть стилей вынесена в css.
В общем мой окончательный вариант это Вариант 2.

const chessPieces = ['П', 'Л', 'Ко', 'С', 'К', 'Ф', 'С', 'Ко', 'Л'];
let chessBoard = document.querySelector('.chess-board');

function putChessPieces (chessPieces, chessBoard) {
    let i = 1;
    let k = 1

    //Добавляем пешки в ряд 8
    for(let j = 0; j <= 7; j++) {
        chessBoard.children[j].innerHTML = chessPieces[i];
        chessBoard.children[j].style.color = '#000000';
        chessBoard.children[j].style.padding = '23px 34px';
        chessBoard.children[j].style.boxSizing = 'border-box';
        chessBoard.children[j].style.fontSize = '48px';
        i++;
    };

    //Добавляем пешки в ряд 7
    for(let j = 8; j <= 15; j++) {
        chessBoard.children[j].innerHTML = chessPieces[0];
        chessBoard.children[j].style.color = '#000000';
        chessBoard.children[j].style.padding = '23px 34px';
        chessBoard.children[j].style.boxSizing = 'border-box';
        chessBoard.children[j].style.fontSize = '48px';
    };

    //Добавляем пешки в ряд 2
    for(let j = 48; j <= 55; j++) {
        chessBoard.children[j].innerHTML = chessPieces[0];
        chessBoard.children[j].style.color = '#FFFFFF';
        chessBoard.children[j].style.padding = '23px 34px';
        chessBoard.children[j].style.boxSizing = 'border-box';
        chessBoard.children[j].style.fontSize = '48px';
    };

    Добавляем пешки в ряд 1
    for(let j = 56; j <= 63; j++) {
        chessBoard.children[j].innerHTML = chessPieces[k];
        chessBoard.children[j].style.color = '#FFFFFF';
        chessBoard.children[j].style.padding = '23px 34px';
        chessBoard.children[j].style.boxSizing = 'border-box';
        chessBoard.children[j].style.fontSize = '48px';
        k++;
    };
}*/

//Вариант 2. Попробовала сделать через объекты
const chessPieces = {
    chessPieces: ['Л', 'Ко', 'С', 'К', 'Ф', 'С', 'Ко', 'Л'],
    pawn: 'П'
};

let renderer = {
    chessBoard: document.querySelector('.chess-board'),
    isPrime: true,
    colorBlack: '#000000',
    colorWhite: '#FFFFFF',
    
    putChessPieces() {
        let j = 0;
        let i = 0;

        for(let child of this.chessBoard.children) {
            if(this.isPrime & j <= 7) {
                child.innerHTML = chessPieces.chessPieces[i];
                child.style.color = this.colorBlack;
            };
            
            if(j === 7 || j === 16 || j === 56) {
                this.isPrime = !this.isPrime;
                i = 0;
            };

            if(!this.isPrime & j <= 15 & j > 7) {
                child.innerHTML = chessPieces.pawn;
                child.style.color = this.colorBlack;
            };

            if(this.isPrime & j <= 55 & j >= 48) {
                child.innerHTML = chessPieces.pawn;
                child.style.color = this.colorWhite;
            };

            if(!this.isPrime & j <= 63 & j > 55) {
                child.innerHTML = chessPieces.chessPieces[i];
                child.style.color = this.colorWhite;
            };

            j++;
            i++;
        }
    },
};

renderer.putChessPieces();