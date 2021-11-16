/*
1 String(x) - приводит x к строке
2 Number(x) - приводит x к числу
3 Boolean(x) - приводит х к логическому типу
*/
let flag = true;
let num1 = '34';
let num2 = 2;

console.log(typeof flag);
flag = String(flag);  // приводит переменную в строчный тип данных
console.log(typeof flag);

console.log(num1 + num2); // 342
num1 = Number(num1); // меняю тип данных на числовой
console.log(num1 + num2); // 36

console.log(Number('five')) // NaN

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(56)); // true
console.log(Boolean(-8)); // true
console.log(Boolean('')); // false