// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let word1 = 'hello world';
let word2 = 'lorem ipsum';
let word3 = 'javascript is cool';
console.log('words lengths are ' + word1.length, word2.length, word3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(word1.toUpperCase());
console.log(word2.toUpperCase());
console.log(word3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let word11 = 'HELLO WORLD';
let word22 = 'LOREM IPSUM';
let word33 = 'JAVASCRIPT IS COOL';
console.log(word11.toLowerCase());
console.log(word22.toLowerCase());
console.log(word33.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let cleaner = (string) => {
    let newStr = string.split(' ');
    newStr = newStr.filter(word => word !== '');
    newStr = newStr.join(' ');
    return newStr;
}

let str = '  dirty          string   ';
console.log(cleaner(str), cleaner(str).length);     //check length to be sure all bad spaces gone


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';

let stringToArray = (str) => {
    return str.split(' ');
}
console.log(stringToArray(str2));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let stringedNums = numArr.map(num => num + '');
console.log(stringedNums);
console.log(typeof stringedNums[0]);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
let sortNums = (nums, direction) => {
    if (direction === 'asc') {
        return nums.sort((a, b) => a - b);
    }
    if (direction === 'desc') {
        return nums.sort((a, b) => b - a);
    }
}
console.log(sortNums(nums, 'asc'));


// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((item, nextItem) => item.monthDuration - nextItem.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((item, key) => {
    return {id: key + 1, ...item}
}));


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '',    // '6'-'10' ,'jack','queen','king', 'ace'
//     color: '',    // 'red','black'
// }
let cardValue = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let cardColor = ['red', 'black'];

let createCardDeck = (cardValue, cardSuit, cardColor) => {
    let cardDeck = [];
    let currentColor = '';
    for (const value of cardValue) {
        for (const suit of cardSuit) {
            if (suit === 'diamond' || suit === 'heart') {
                currentColor = cardColor[0];
            } else currentColor = cardColor[1];
            cardDeck.push({suit: suit, value: value, color: currentColor});
        }
    }
    return cardDeck;
};

let newDeck = createCardDeck(cardValue, cardSuit, cardColor);
console.log(newDeck);

// - знайти піковий туз  - spade ace
console.log(newDeck.find(card => card.suit === 'spade' && card.value === 'ace'));
console.log(newDeck.findIndex(card => card.suit === 'spade' && card.value === 'ace'));
// - всі шістки
console.log(newDeck.filter(card => card.value === '6'));

// - всі червоні карти
console.log(newDeck.filter(card => card.color === 'red'));
// - всі буби            - diamond
console.log(newDeck.filter(card => card.suit === 'diamond'));
// - всі трефи від 9 та більше - clubs > 9
console.log(newDeck.filter((card, key) => card.suit === 'clubs' && key > newDeck.findLastIndex(card => card.value === '8')));

//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let sortedDeck = newDeck.reduce(
    (accumulator, card) => {
        switch (card.suit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
                break;
        }
        return accumulator;
    },
    {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    }
);
console.log(sortedDeck);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let searchCourse = (courses, module) => {
    return courses.filter(course => !!course.modules.find(value => value === module));
}

console.log(searchCourse(coursesArray, 'sass'));
console.log(searchCourse(coursesArray, 'docker'));