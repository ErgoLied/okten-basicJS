// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

function showRecipes(limit, skip) {
    let url = new URL('https://dummyjson.com/recipes');
    url.searchParams.append('limit', limit);
    url.searchParams.append('skip', skip);

    fetch(url)
        .then(res => res.json())
        .then(res => {
            let {recipes} = res;

            renderRecipes(recipes);
        });
}

let recipeBlock = document.createElement('div');
recipeBlock.classList.add('recipe');

function renderRecipes(recipes) {
    recipes.map(recipe => {


        for (const key in recipe) {
            let p = document.createElement('p');

            if (typeof recipe[key] === 'object') {
                let ul = document.createElement('ul');
                let caption = document.createElement('caption');
                caption.innerText = key;
                ul.appendChild(caption);


                recipe[key].map(value => {
                    let li = document.createElement('li');
                    li.innerText = value;
                    ul.appendChild(li)
                })

                recipeBlock.appendChild(ul);
            } else {
                if (key === 'image') {
                    let img = document.createElement('img');
                    img.src = recipe[key];
                    recipeBlock.appendChild(img);
                } else {
                    p.innerText = `${key}: ${recipe[key]}`;
                }
            }

            recipeBlock.appendChild(p);
        }

        document.body.appendChild(recipeBlock);
    })
}

let limit = 1;
let skip = 0;

showRecipes(limit, skip);

document.getElementById('previous').onclick = function () {
    recipeBlock.innerHTML = '';
    skip -= limit;
    showRecipes(limit, skip);
};

document.getElementById('next').onclick = function () {
    recipeBlock.innerHTML = '';
    skip += limit;
    showRecipes(limit, skip);
};
