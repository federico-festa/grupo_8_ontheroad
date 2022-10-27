window.onload = () => {
    const productsCart = document.querySelector('.products');
    console.log(productsCart);
    const checkout = document.querySelector('.checkout');
    const empty = document.querySelector('.empty');

    fetch('http://localhost:3000/api/products/list')
        .then(response => response.json())
        .then(data => {
            let productsList = data.data.products;
            let cart = JSON.parse(localStorage.getItem('products'));

            productsList.forEach((product) => {
                if (product.id == cart[0] || cart[1] || cart[2]) {
                    const cartProduct = document.createElement('div');
                    const exp = document.createElement('div');
                    const i = document.createElement('i');
                    const img = document.createElement('img');
                    const h4 = document.createElement('h4');
                    const priceDiv = document.createElement('div');
                    const price = document.createElement('h3');

                    cartProduct.setAttribute('class', 'cart-product');
                    exp.setAttribute('class', 'exp');
                    i.setAttribute('class', 'fa-sharp fa-solid fa-circle-xmark');
                    i.setAttribute('id', 'icon');
                    img.setAttribute('class', 'img');
                    img.setAttribute('src', './img/products/<%=' + product.img + '%>');
                    h4.setAttribute('class', 'name');
                    h4.textContent = product.name;
                    priceDiv.setAttribute('class', 'price');
                    price.setAttribute('class', 'price');
                    price.textContent = '$' + product.price;

                    cartProduct.appendChild(exp);
                    exp.appendChild(i);
                    exp.appendChild(img);
                    exp.appendChild(h4);
                    cartProduct.appendChild(priceDiv);
                    priceDiv.appendChild(price);

                    productsCart.appendChild(cartProduct);
                };
            });
        })
        .catch(e => console.log(e));
};