// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

const URL = 'https://jsonplaceholder.typicode.com/users';

function getUsers(URL) {
    let userBlock = document.getElementById('user');

    fetch(URL)
        .then(res => res.json())
        .then(users => {
            let ul = document.createElement('ul');

            users.map(user => {
                let li = document.createElement('li');
                let a = document.createElement('a');

                a.innerText = user.id + ' - ' + user.name;
                a.href='user.html?id='+user.id;

                li.appendChild(a);
                ul.appendChild(li);
            });

            userBlock.appendChild(ul);
        })
}

getUsers(URL);