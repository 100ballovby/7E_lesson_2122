let person = {  // объект (набор пар ключ-значение)
    id: 4523827,
    name: 'John',
    surname: 'Doe',
    age: 42,
    email: 'johndoe@example.com',
    phone: {
        work: '+1(499)555-0100',
        private: '+1(495)777-0100'
    }
}

console.log(person.name, person.surname);
console.log(person.phone.work);


