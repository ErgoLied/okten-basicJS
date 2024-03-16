// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div1 = document.createElement("div");
div1.classList.add('wrap', 'collapse', 'alpha', 'beta');
div1.style.background = 'lightblue';
div1.style.color = 'darkblue';
div1.style.fontSize = '30px';
div1.innerText = 'lorem'

let div2 = div1.cloneNode(true);

let body = document.body;
body.append(div1, div2);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let menu = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement("ul");
for (const item of menu) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.append(li);
}
body.append(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const items of coursesAndDurationArray) {
    let div = document.createElement('div');
    for (const item in items) {
        let p = document.createElement('p');
        p.innerText = item + ' ' + items[item];
        div.append(p);
    }
    body.append(div);
}
// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const items of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = items.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = items.monthDuration;

    div.append(h1, p);
    body.append(div);
}
