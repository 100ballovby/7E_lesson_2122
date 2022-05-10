function show_password() {
    let input = document.querySelector('#password');
    let image = document.querySelector('#eye');
    // нахожу на странице поле для пароля и изображение глаза

    if (input.type === 'password') {  // если тип поля - пароль
        input.type = 'text';  // поменять тип поля на текстовое
        image.src = 'Eye Disabled.png';
    } else {  // иначе
        input.type = 'password';  // поменять тип поля на пароль
        image.src = 'Eye.png'
    }
}


