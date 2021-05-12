// Решение задачи № 3
//Все тоже, что и в задаче 2 кроме объекта chessPieces :)

const chessPieces = {
    chessPieces: ['&#9820;', '&#9822;', '&#9821;', '&#9818;', '&#9819;', '&#9821;', '&#9822;', '&#9820;'],
    pawn: '&#9823;'
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