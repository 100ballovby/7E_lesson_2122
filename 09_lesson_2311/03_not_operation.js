// Операция НЕ !
console.log(!true); // false
console.log(!0); // true

console.log(!'string') // false - потому что если строка не пустая, она true
console.log(!!'строчка')  // true
// Первый ! приводит значение в логику и возвращает обратное
// Второй ! снова инвертирует его

/*
Приоритет операций:
1) НЕ ( ! )
2) И ( && )
3) ИЛИ ( || )
*/
