// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
// ==========================
let userForm = document.forms['userForm'];
let userBlock = document.getElementById('user');

userForm.onsubmit = function (ev) {
    ev.preventDefault();
    userBlock.innerHTML = `
    <p>name: ${this.firstname.value}</p>
    <p>surname: ${this.surname.value}</p>
    <p>age: ${this.age.value}</p>
    `;

    document.body.appendChild(userBlock);
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// сторінки буде додавати до неї +1
// ==========================
let countBlock = document.getElementById('count');

let counter = localStorage.getItem('counter') || 0;
window.addEventListener('load', function () {
    countBlock.innerText = `page reloaded ${counter++} times`;
    localStorage.setItem('counter', counter);
});


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions
// зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
window.addEventListener('load', function () {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    let loadTime = new Date().toLocaleString().split(',');
    sessions.push({timeLoad: loadTime[1], dateLoad: loadTime[0]});
    localStorage.setItem('sessions', JSON.stringify(sessions));
});
// continue in sessions.html


//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let hr = document.createElement('hr');
document.body.append(hr);

let arr = [];
for (let j = 0; j < 100; j++) {
    arr.push(j + 1);
}

let previousBtn = document.getElementById('previous');
let nextBtn = document.getElementById('next');
let arrBlock = document.getElementById('arrayBlock');

let index = 0;
let step = 10;

previousBtn.innerText = `previous ${step}`;
nextBtn.innerText = `next ${step}`;

function createArrBlock(index) {
    arrBlock.innerHTML = '';

    for (let i = index; (i < index + step) && (i < arr.length); i++) {
        let p = document.createElement('p');
        p.innerText = arr[i];
        arrBlock.appendChild(p);
    }
}

function btnState() {
    previousBtn.disabled = index - step < 0;
    nextBtn.disabled = index + step >= arr.length;
}

createArrBlock(index);
btnState();

previousBtn.onclick = function (ev) {
    ev.preventDefault();
    if (index - step >= 0) {
        index -= step;
        createArrBlock(index);
        btnState();
    }
}

nextBtn.onclick = function (ev) {
    ev.preventDefault();
    if (index + step < arr.length) {
        index += step;
        createArrBlock(index);
        btnState();
    }
}


document.body.append(previousBtn, nextBtn, arrBlock);

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
let textDiv = document.createElement('div');
let delButton = document.createElement('button');
textDiv.id = 'text';
textDiv.innerText = 'text';
delButton.innerText = 'delete';

delButton.onclick = function () {
    textDiv.remove();
    delButton.remove();
}

document.body.append(textDiv, delButton);
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// //     зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageForm = document.getElementById('ageForm');
let ageInfo = document.getElementById('ageInfo');

ageForm.onsubmit = function (ev) {
    ev.preventDefault();
    ageForm.userAge.value >= 18 ? ageInfo.innerText = 'Adult' : ageInfo.innerText = 'Kid';
}


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let tableForm = document.getElementById('tableForm');
let tableBlock = document.getElementById('tableBlock');


tableForm.onsubmit = function (ev) {
    ev.preventDefault();
    let rows = parseInt(document.getElementById('rows').value);
    let columns = parseInt(document.getElementById('columns').value);
    let content = document.getElementById('tableContent').value.split(',');

    createTable(rows, columns, content);
}

function createTable(rows, columns, content) {
    tableBlock.innerHTML = '';
    let table = document.createElement('table');

    let key = 0;
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            key = i * columns + j;
            let td = document.createElement('td');

            td.innerText = content[key] || '';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    let restOfContent = content.slice(rows * columns - 1);
    if (content.slice(rows * columns).length > 0) {
        let delElement = table.lastChild.lastChild;
        delElement.remove();

        let lastRow = table.lastChild;

        let lastColumn = document.createElement('td');
        lastColumn.innerText = (restOfContent);

        lastRow.appendChild(lastColumn);
    }

    tableBlock.appendChild(table);
}


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let price = JSON.parse(localStorage.getItem('price')) || 100;
window.addEventListener('load', function () {
    let currentTime = new Date().getTime() / 1000;
    let lastReloadTime = JSON.parse(localStorage.getItem('lastReloadTime')) || currentTime;

    if (currentTime - lastReloadTime >= 10) {
        price += 10;
    }

    localStorage.setItem('lastReloadTime', JSON.stringify(currentTime));
    localStorage.setItem('price', JSON.stringify(price));
    console.log(currentTime - lastReloadTime);

    let uahDiv = document.getElementById('UAH');
    uahDiv.innerText = price + ' UAH';

    localStorage.setItem('price', JSON.stringify(price));
});
