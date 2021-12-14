for (let n = 0; n <= 10; n += 2) {
    if (n === 0) {
        continue;  // пропуск итерации (повторения)
    } else if (n % 3 === 0) {
        break;  // принудительный выход
    }
    console.log(n);
}