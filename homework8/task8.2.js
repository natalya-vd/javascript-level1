// Решение задачи №2

if (!("a" in window)) {
    var a = 1;
}
alert(a); //undefined, объявление переменной var a (но не присвоение 1) записывается в глобальный объект window, поэтому код не зайдет в условие if и переменной а не будет присвоена единица, следовательно в alert(a) выведется undefined.

var b = function a(x) {
    x && a(--x);
};
alert(a); // undefined, функция записана в виде функционального выражения, следовательно в alert передастся ссылка на эту функцию

function a(x) {
    return x * 2;
}
var a;
alert(a);// здесь происходит объявление функции, следовательно в alert будет будет передана сама функция а, т.е. будет выведена вся функция

function b(x, y, a) {
    arguments[2] = 10;
    alert(a); //выведет 10, все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами. В строке 20 происходит присваивание аргументу под индексом 2 (а) значение 10 и поэтому в строке 21 выведет 10, а не 3
}
b(1, 2, 3);

function a() {
    alert(this); //обект window. В строке 28 происходит "обнуление this", нам вернется глобальный объект браузера window
}
a.call(null);