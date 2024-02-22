// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let word1 = 'hello';
let word2 = 'owu';
let word3 = 'com';
let word4 = 'ua';
console.log(`${word1} ${word2}.${word3}.${word4}`);

let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
const pi = 3.14;
const e = 2.7;
let num5 = 16;
console.log(num1, num2, num3, num4, num5);
console.log(`pi = ${pi}`);
console.log(`e = ${e}`);

const ok = true;
const nok = false;
if(ok){
    console.log('sad but ' + ok);
} else {
    console.log(nok);
}


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Marisha';
let lastName = 'Kurochkina';
let middleName = 'Georgiivna';

let person = firstName + ' ' + lastName + ' ' + middleName;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let userName = prompt('Set your name:');
let userMiddleName = prompt('Set your middle name:');
let userAge = prompt('How old are you?');
console.log(`${userName} ${userMiddleName}, ${userAge} years old`);