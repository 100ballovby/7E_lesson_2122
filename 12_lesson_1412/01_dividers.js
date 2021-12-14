let n = 462;

for (let i = 1; i < n; i++) {
    if ((i !== 1 && i !== n) && (n % i) === 0) {
        console.log('Делитель: ' + i)
    }
}

