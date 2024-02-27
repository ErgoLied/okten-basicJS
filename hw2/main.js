// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let testVar = 'qwerty';
let randArr = [0, 1, -2, 'ab', 'bc', true, false, testVar, [1, 2, 3], {a: 1, b: 2}];
console.log(randArr[0], randArr[1], randArr[2], randArr[3], randArr[4], randArr[5], randArr[6], randArr[7], randArr[8], randArr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books1 = [
    {title: 'The Poppy War', pageCount: 544, genre: 'Grimdark'},
    {title: 'The Dragon Republic', pageCount: 672, genre: 'Grimdark'},
    {title: 'The Burning God', pageCount: 640, genre: 'High fantasy'}
];
console.log(books1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
let books2 = [
    {title: 'Good Omens', pageCount: 288, genre: 'horror, fantasy, comedy', authors: [
            {name: 'Terry Pratchett', age: 66},
            {name: 'Neil Gaiman', age: 63}
        ]},
    {title: 'The Talisman', pageCount: 646, genre: 'Dark fantasy', authors: [
            {name: 'Stephen King', age: 76},
            {name: 'Peter Straub', age: 79}
        ]},
    {title: 'Monday Begins on Saturday', pageCount: 336, genre: 'Science fiction', authors: [
            {name: 'Arkady Strugatsky', age: 66},
            {name: 'Boris Strugatsky', age: 79}
        ]}
];

console.log(books2);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль
// пароль кожного користувача
//
let users = [
    {name: 'Ann', username: 'A', password: 'qwer'},
    {name: 'Bart', username: 'B', password: '23wer'},
    {name: 'Clary', username: 'C', password: 'qwer'},
    {name: 'Daniel', username: 'D', password: '6tf'},
    {name: 'Erika', username: 'E', password: '76ythgt'},
    {name: 'Fred', username: 'F', password: '6tgrr'},
    {name: 'George', username: 'G', password: 'weaes'},
    {name: 'Harry', username: 'H', password: 'mjyuh56'},
    {name: 'Irene', username: 'I', password: 'nhyrt'},
    {name: 'James', username: 'J', password: 'nrhteg'},
];
console.log(
    users[0].password,
    users[1].password,
    users[2].password,
    users[3].password,
    users[4].password,
    users[5].password,
    users[6].password,
    users[7].password,
    users[8].password,
    users[9].password,
);


// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1;
// let x = 0;
let x = -3;
if(x !== 0){
    console.log('Вірно');
}
else{
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 59;
if(time >= 0 && time <= 15){
    console.log('I/h');
}
else if(time > 15 && time <= 30){
    console.log('II/h');
}
else if(time > 30 && time <= 45){
    console.log('III/h');
}
else if(time > 45 && time <= 59){
    console.log('IV/h');
}
else{
    console.log('out of range');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = 25;
if(day >= 1 && day <= 10){
    console.log('I part of month');
}
else if(day > 10 && day <= 20){
    console.log('II part of month');
}
else{
    console.log('III part of month');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let currentDay = prompt('Введiть порядковий номер дня тижня');
switch (+currentDay) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('you didn\'t set correct day number');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = 12;
let b = 1;
if(a === b){
    console.log('nums are equal');
}
else if (a > b){
    console.log(a, 'is max');
}
else{
    console.log(b, 'is max');
}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
// falsy (хибноподібні, тобто приводиться до false)
let y = '1234';
y = y || 'default';
console.log('y =', y);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log(coursesAndDurationArray[0].title, 'is super');
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log(coursesAndDurationArray[1].title, 'is super');
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log(coursesAndDurationArray[2].title, 'is super');
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log(coursesAndDurationArray[3].title, 'is super');
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log(coursesAndDurationArray[4].title, 'is super');
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log(coursesAndDurationArray[5].title, 'is super');
}
// перевірити кожен його елемент - too hard without loops :(
