// Решение Задачи №4

const MIN = 0;
const MAX = 15;
const numberUser = prompt(`Введите целое число от ${MIN} до ${MAX} включительно`);
let result = numberUser;

for (let i = Number(numberUser); i < MAX; i++) {
    result = result + ', ' + (i + 1);
}

console.log(result);