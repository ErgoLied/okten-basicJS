let userID = new URL(location.href).searchParams.get('id');

let baseURL = 'https://jsonplaceholder.typicode.com/users/' + userID;
fetch(baseURL)
    .then(res => res.json())
    .then(user => {
        renderInfo(user);
    });

function renderInfo(user) {

    for (const key in user) {
        const div = document.createElement('div');

        if (typeof user[key] === 'object') {
            div.innerHTML = `<span>${key}</span>`;
            for (const i in user[key]) {
                const divDetails1 = document.createElement('div');
                divDetails1.classList.add('details1');

                if (typeof user[key][i] === 'object') {
                    divDetails1.innerHTML=`<span>${i}</span>`;

                    for (const j in user[key][i]) {
                        const divDetails2 = document.createElement('div');
                        divDetails2.innerHTML=`<span>${j}</span> ${user[key][i][j]}`;
                        divDetails2.classList.add('details2');

                        divDetails1.appendChild(divDetails2);
                    }

                    div.appendChild(divDetails1);
                } else {
                    divDetails1.innerHTML=`<span>${i}</span> ${user[key][i]}`;
                    div.appendChild(divDetails1);
                    // console.log(i, user[key][i]);
                }
            }
            document.body.appendChild(div);

        } else {
            div.innerHTML = `<span>${key}</span> ${user[key]}`;
            document.body.appendChild(div);
        }


        // const div = document.createElement('div');
        // div.innerHTML = `<span>${key}</span> ${user[key]}`
        //
        // document.body.appendChild(div);
    }
}
