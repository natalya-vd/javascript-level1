//Решение задачи № 1

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2, код дает такой результат т.к. здесь оператор ++ это префиксная форма унарного оператора +, в префиксной форме  происходит увеличение переменной на 1 и нам возвращается текущее значение переменной (а=1+1=2, с=а=2)
d = b++; alert(d); // 1, код дает такой результат т.к. в этом случае оператор   ++ это постфиксная форма унарного оператора +, в постфиксной форме  происходит увеличение переменной на 1, но нам возвращается предыдущее значение переменной (b=1+1=2, с=b(предыдущ)=1)
c = (2+ ++a); alert(c); // 5, получаем такой результат, т.к. ++a в префиксной форме, в префиксной форме добавляется 1 и выводится текущее значение. a у нас равно 2 (см. строка 4), получаем a=2+1=3, с=2+3=5
d = (2+ b++); alert(d); // 4, получаем такой результат, т.к. b++ в постфиксной форме, в постфиксной форме добавляется 1, но выводится предыдущее значение. b у нас равно 2 (см. строка 5), получаем b=2+1=3, с=2+2(bпредыдущ)=4
alert(a); // 3, объяснение в строке 6
alert(b); // 3, объяснение в строке 7
