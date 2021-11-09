/*
1) Понятные словами. По названию переменной
должно быть понятно, что в ней находится.
2) ТОЛЬКО символы латинского алфавита. Не
называем переменные по-русски.
3) Запрещены все специальные символы, кроме _
4) Можно использовать числа, но число не может быть первым:
month1 - ✅
f1team - ✅
1_year - ❌
*/
let my_variable;  // объявление переменной
my_variable = 5 + 3 / 4;  // присваивание значения

console.log(my_variable);  // распечатать значение переменной

let food = "pizza";
// инициализация переменной (одновременно объявляю и присваиваю)
console.log(food);

let x = 5;
let y = 2;
let z = x * y;
// задавать значение переменной через другие переменные
console.log(z);
