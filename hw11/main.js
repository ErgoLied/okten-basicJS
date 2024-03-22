// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

function showCarts() {
    let url = new URL('https://dummyjson.com/carts');

    fetch(url)
        .then(res => res.json())
        .then(res => {
            let carts = res.carts;

            for (const cart of carts) {
                renderCart(cart);
            }
        });
}

function renderCart(cart) {
    let cartDiv = document.createElement('div');
    let singleCartDiv = document.createElement('div');
    singleCartDiv.classList.add('cart');

    for (const key in cart) {
        let p = document.createElement('p');

        if (typeof cart[key] === 'object') {
            let productsDiv = document.createElement('div');
            productsDiv.classList.add('products');


            cart[key].map(value => {
                let oneProdDiv = document.createElement('div');
                oneProdDiv.classList.add('product');
                for (const key in value) {
                    if (key === 'thumbnail') {
                        let img = document.createElement('img');
                        img.src = value[key];
                        oneProdDiv.appendChild(img);
                    } else {
                        let prodP = document.createElement('p');

                        prodP.innerText = key + ' ' + value[key];
                        oneProdDiv.appendChild(prodP);
                    }

                    productsDiv.appendChild(oneProdDiv);
                }
                singleCartDiv.appendChild(productsDiv);

            });
        } else {
            p.innerText = key + ' ' + cart[key];
        }

        singleCartDiv.appendChild(p);
    }
    cartDiv.appendChild(singleCartDiv);

    document.body.appendChild(cartDiv);
}

showCarts();