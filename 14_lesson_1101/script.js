function change_color(selector, color) {
    // в этой переменной нахожу элемент на странице
    let element = document.querySelector(selector);
    element.style.color = color;
    // заменяю свойство цвет на цвет из параметра color
}

function special(selector) {
    let element = document.querySelector(selector);
    element.classList.add('alt');
    // classList.add позволяет добавить класс к любому элементу в HTML
}