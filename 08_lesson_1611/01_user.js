/*
1. alert(message) -> вывод сообщения
2. prompt(question, default) -> ввод пользователем с клавиатуры
3. confirm(question)
*/
alert('Hello!');

let age = prompt('Сколько тебе лет?', '');
/*Написать программу, которая спрашивает у
* пользователя, как его зовут. И здоровается с ним
* по имени. */

let name = prompt('Как тебя зовут?', '');
alert('Привет, ' + name + '!');

let question = confirm('Ты тут главный?');  // возвращает true/false
alert(question);