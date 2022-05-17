for (let i = 0; i < 10; i++) {
    console.log('i: ', i);
}

let x = 10;
while (x >= 0) {
    console.log('x: ', x);
    x--
}

function mid() {
    let q = Number(prompt('Сколько чисел нужно?', '0'));
    let sum = 0;
    for (let i = 0; i < q; i++) {
        let number = Number(prompt('Введите число', ''));
        sum += number;
    }
    alert('Среднее: ' + sum / q);
}

