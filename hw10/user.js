let userID = new URL(location.href).searchParams.get('id');

let baseURL = 'https://jsonplaceholder.typicode.com/users/' + userID;
fetch(baseURL)
    .then(res => res.json())
    .then(user => {
        for (const key in user) {
            if (typeof user[key] === 'object') {
                console.log(user[key])
            } else {
                console.log(user[key])
            }

        }
    })

//NOT FINISHED