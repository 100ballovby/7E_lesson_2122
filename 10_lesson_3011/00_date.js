// Чтобы достать дату/время
let date = new Date();

console.log(date.getDay()); // номер дня недели
console.log(date.getDate());  // число месяца
console.log(date.getMonth()); // месяц от 0 до 11
console.log(date.getHours());  // часы
console.log(date.getMinutes());  // минуты

let hour = date.getHours();
let isWeekend = date.getDay() === 0 || date.getDay() === 6;  // выходной - тру или фолс

if (hour < 10 || hour > 18 || isWeekend) { // если сейчас меньше 10 часов ИЛИ больше 18 ИЛИ выходной
    alert('Мы закрыты!')
} else {
    alert('Мы работаем!')
}