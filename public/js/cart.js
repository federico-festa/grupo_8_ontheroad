window.onload = () => {
    const productsCart = document.querySelector('.products');
    const checkout = document.querySelector('.checkout');
    const empty = document.querySelector('.empty');
    const total = document.querySelector('.total');

    fetch('http://localhost:3001/api/products/list')
        .then(response => response.json())
        .then(data => {
            let productsList = data.data.products;
            let cart = JSON.parse(localStorage.getItem('products'));

            productsList.forEach((product) => {
                if (product.id == cart[0] || cart[1] || cart[2]) {
                    const cartProduct = document.createElement('div');
                    const exp = document.createElement('div');
                    const i = document.createElement('i');
                    const h4 = document.createElement('h4');
                    const desc = document.createElement('div');
                    const priceDiv = document.createElement('div');
                    const price = document.createElement('h3');

                    cartProduct.setAttribute('class', 'cart-product');
                    exp.setAttribute('class', 'exp');
                    i.setAttribute('class', 'fa-sharp fa-solid fa-circle-xmark');
                    i.setAttribute('id', 'icon');
                    h4.setAttribute('class', 'name');
                    h4.textContent = product.name;
                    desc.setAttribute('class', 'desc');
                    desc.textContent = product.shortDescription;
                    priceDiv.setAttribute('class', 'price');
                    price.setAttribute('class', 'price');
                    price.textContent = '$' + product.price;

                    cartProduct.appendChild(exp);
                    exp.appendChild(i);
                    exp.appendChild(h4);
                    exp.appendChild(desc);
                    cartProduct.appendChild(priceDiv);
                    priceDiv.appendChild(price);

                    productsCart.appendChild(cartProduct);
                };
            });
        })
        .catch(e => console.log(e));
        
    if (!localStorage.getItem('products')) {
        empty.style.display = 'block';
    };

    const x = document.querySelectorAll('.fa-circle-xmark');
    if (x != undefined) {
        console.log(x);
    } else {
        console.log('no');
    };

    checkout.addEventListener('click', (e) => {
        localStorage.removeItem('products');
        alert('¡Tu compra fue aprobada!');
        location.reload();
    })
}