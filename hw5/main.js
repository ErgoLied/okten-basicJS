// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const area = (args = []) => {
    console.log(args);
    switch (args[0]) {
        case 'rectangle':
            return args[1] * args[2];
        case 'circle':
            return Math.PI * args[1] * args[1];
        case 'cylinder':
            return 2 * Math.PI * args[1] * args[2];
    }
}

let S = area(['cylinder', 2, 4]);
console.log('S = ' + S);

// - створити функцію яка приймає масив та виводить кожен його елемент
const readArr = (array = []) => {
    for (const element of array) {
        console.log(element);
    }
}

readArr([1, 2, 3, 4, 5, 6]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createP = (text = '') => {
    document.write(`<p>${text}</p>`);
}

createP('QWERTY');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createList = (text = '', quantity = 3) => {
    document.write(`<ul>`);
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

createList('asdf');
createList('asdfghj', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createArrList = (array = []) => {
    document.write(`<ul>`)
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`)
}

let mixArr = [0, 1, 2, 'qwe', 'rty', true, false];
createArrList(mixArr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const createUsersBlock = (users = []) => {
    for (const user of users) {
        document.write(`<div style="background: lightblue">`);
        for (const key in user) {
            document.write(`<p>${key} - ${user[key]}</p>`)
        }
        document.write(`</div>`);
    }
}

let users = [{id: 1, name: 'vasya', age: 31}, {id: 2, name: 'petya', age: 30}, {
    id: 3,
    name: 'kolya',
    age: 29
}, {id: 4, name: 'olya', age: 28}, {id: 5, name: 'max', age: 30}, {
    id: 6,
    name: 'anya',
    age: 31
}, {id: 7, name: 'oleg', age: 28}, {id: 8, name: 'andrey', age: 29}, {
    id: 9,
    name: 'masha',
    age: 30
}, {id: 10, name: 'olya', age: 31}, {id: 11, name: 'max', age: 31}];
createUsersBlock(users);

// - створити функцію яка повертає найменьше число з масиву
const min = (array = []) => {
    let min = array[0];
    for (const i of array) {
        if (min > i) {
            min = i;
        }
    }
    return min;
}

console.log('min is ' + min([1, 2, 3, 4, 5, 6, 7, 8, -9, 0]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumArr = (array = []) => {
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum;
}

console.log('arr sum = ', sumArr([1, 2, 3, 4, 5, 6, 7, 8, -9, 0]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (array = [], i1, i2) => {
    if (i1 >= array.length || i2 >= array.length) {
        return 'set correct indexes!!!';
    } else {
        let temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;
        return array;
    }
}

console.log(swap([1, 2, 3, 4, 5, 6, 7, 8, -9, 0], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const values of currencyValues) {
        if (values.currency === exchangeCurrency) {
            return sumUAH / values.value;
        }
    }
}

let currencyValues = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
];

console.log('exchanging = ' + exchange(10000, currencyValues, 'USD'));
