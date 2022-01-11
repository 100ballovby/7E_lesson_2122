function say_hello() {  // определение функции
    return 'hello!'  // тело функции
}

// сохраняю результат работы функции в переменную
let greeting = say_hello();
console.log(greeting); // вывожу результат

// создаю функцию с параметрами
function power(num, pow) {  // num - число, pow - степень
    let res = 1;
    for (let i = 0; i < pow; i++) {
        res *= num;
    }
    return res
}

console.log(power(2, 9))



