//Решение задачи №4

const letter = 'x';
const row = 20;
let arr = [];

for (let i = 0; i < row; i++) {

    arr.push(letter);
    let triangle = arr.join('');

    console.log(triangle);
}