let user = {
    first_name: 'John',
    last_name: 'Doe',
    city: 'Warsaw',
    phone: '+1 499 555-0122'
}

console.log(user);  // вывести весь объект
console.log(user.phone);  // вывести значение ключа phone
console.log(user['phone']);  // вывести значение ключа phone

for (let key in user) {  // для каждого ключа в объекте user
    console.log('Название ключа: ' + key);
    console.log('Значение ключа: ' + user[key]);
}

let users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        city: 'Warsaw',
        phone: '+1 499 555-0122'
    },
    {
        first_name: 'Marie',
        last_name: 'Doe',
        city: 'Moscow',
        phone: '+7 495 375 55 22'
    },
    {
        first_name: 'Fill',
        last_name: 'Doe',
        city: 'Minsk',
        phone: '+375 29 555-01-22'
    }
]

for (let obj = 0; obj < users.length; obj++) {
    console.log('Объект ' + obj + ': ' + users[obj]);
    console.log(users[obj].first_name + ' ' + users[obj].last_name);
    console.log('Город: ' + users[obj].city);
}
