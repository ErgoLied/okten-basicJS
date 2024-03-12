// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
let users = [];

function User(name, surname, email, phone) {
    this.id = users.length + 1;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

for (let i = 0; i < 10; i++) {
    let userName = prompt(`user ${users.length + 1}: set your name`);
    let userSurname = prompt(`user ${users.length + 1}: set your surname`);
    let userEmail = prompt(`user ${users.length + 1}: set your email`);
    let userPhone = prompt(`user ${users.length + 1}: set your phone`);

    let user = new User(userName, userSurname, userEmail, userPhone);
    users.push(user);
}

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user, nextUser) => user.id - nextUser.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we']),
    new Client(2, 'Ervin', 'Howell', 'Shanna@melissa.tv', '1-770-736-8031 x56442', ['qw']),
    new Client(3, 'Clementine', 'Bauch', 'Nathan@yesenia.net', '1-770-736-8031 x56442', ['qw', 'we', 'dfsc']),
    new Client(4, 'Patricia', 'Lebsack', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we', 'ef']),
    new Client(5, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we']),
    new Client(6, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we', 'weds', 'qwdsax', 'qwdwfv']),
    new Client(7, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qwqwdas']),
    new Client(8, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we', 'wer']),
    new Client(9, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we']),
    new Client(10, 'Leanne', 'Graham', 'Sincere@april.biz', '1-770-736-8031 x56442', ['qw', 'we'])
];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client, nextClient) => client.order.length - nextClient.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

    // this.info = () => {
    //     console.log(`model - ${this.model}`);
    //     console.log(`manufacturer - ${this.manufacturer}`);
    //     console.log(`year - ${this.year}`);
    //     console.log(`maxSpeed - ${this.maxSpeed}`);
    //     console.log(`volume - ${this.volume}`);
    // }
    this.info = () => {
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;

    this.changeYear = (newValue) => this.year = newValue;

    this.addDriver = (driver = {}) => this.driver = driver;
}

let car1 = new Car1('lol', 'kek', 2024, 69, 100500);
console.log(car1);

car1.drive();
car1.info();
car1.increaseMaxSpeed(1);
car1.changeYear(1234);
car1.addDriver({name: 'Garfield', experience: 12});
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {}) {
        this.driver = driver;
    }
}

let car2 = new Car2('Camry', 'Toyota', 2021, 220, 2.5);
console.log(car2);

car2.drive();
car2.info();
car2.increaseMaxSpeed(10);
car2.changeYear(2077);
car2.addDriver(driver = {name: 'Jonny', nickname: 'Silverhand'});

console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let girls = [
    new Cinderella("Anna", 25, 10),
    new Cinderella("Alice", 30, 8),
    new Cinderella("Eva", 35, 9),
    new Cinderella("Emily", 28, 7),
    new Cinderella("Olivia", 40, 11),
    new Cinderella("Sophia", 199, 6),
    new Cinderella("Isabella", 29, 9),
    new Cinderella("Emma", 32, 8),
    new Cinderella("Mia", 27, 10),
    new Cinderella("Ava", 31, 7),
];
console.log(girls);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella {
    constructor(name, age, shoeSize) {
        super(name, age);
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince('Vasya', 99, 6);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const girl of girls) {
    if (girl.size === prince.shoeSize) {
        console.log(`${girl.name}, ${girl.size} can be a princess`);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(girls.find(girl => girl.size === prince.shoeSize));
