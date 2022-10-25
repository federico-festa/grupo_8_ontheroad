window.onload = () => {
    const productsCart = document.querySelector('.products');
    const checkout = document.querySelector('.checkout');
    const empty = document.querySelector('.empty');

    const products = JSON.parse(localStorage.getItem('products'));



    fetch('http://localhost:3000/api/products/list')
        .then(response => response.json())
        .then(data => {
            let productsList = data.data.products;
            console.log(productsList);

            let cart = JSON.parse(localStorage.getItem('products'));
            // console.log(cart[0]);

            let cartProducts = [];

            for (let i = 0; i <= 2; i++) {
                if (productsList[i].id == cart[0]) {
                    cartProducts.push(productsList[i])
                } else if (productsList[i].id == cart[1]) {
                    cartProducts.push(productsList[i])
                } else if (productsList[i].id == cart[2]) {
                    cartProducts.push(productsList[i])
                }
            }

            console.log(cartProducts);

            for (let i = 0; i <= productsList.length; i++) {
                console.log(productsList[i].id);
                // console.log(productsList[i].name);
                // console.log(cart[i]);
                if (productsList[i].id == cart[i]) {
                    console.log(cart[i]);
                    const cartProduct = document.createElement('div');
                    // const exp = document.createElement('div');
                    // const i = document.createElement('i');
                    // const img = document.createElement('img');
                    // const h4 = document.createElement('h4');
                    // const priceDiv = document.createElement('div');
                    // const price = document.createElement('h3');

                    // cartProduct.setAttribute('class', 'cart-product');
                    // exp.setAttribute('class', 'exp');
                    // i.setAttribute('class', 'fa-sharp fa-solid fa-circle-xmark');
                    // i.setAttribute('id', 'icon');
                    // img.setAttribute('class', 'img');
                    // img.setAttribute('src', './img/products/<%=' + productsList[i] + '%>');
                    // h4.setAttribute('class', 'name');
                    // h4.textContent = productsList[i].name;
                    // priceDiv.setAttribute('class', 'price');
                    // price.setAttribute('class', 'price');

                    // cartProduct.appendChild(exp);
                    // exp.appendChild(i);
                    // exp.appendChild(img);
                    // exp.appendChild(h4);
                    // cartProduct.appendChild(priceDiv);
                    // priceDiv.appendChild(price);

                    // productsCart.appendChild(cartProduct);
                };
            };


        });
}

// for(let i=0; i<=products.length; i++) {
//     if(productsList[i].id == products[i]) {
//         const cartProduct = document.createElement('div');
//         cartProduct.setAttribute('class', 'cart-product');
//         const exp = document.createElement('div');
//         exp.setAttribute('class', 'exp');
//         const i = document.createElement('i');
//         i.setAttribute('class', 'fa-sharp fa-solid fa-circle-xmark');
//         i.setAttribute('id', 'icon');
//         // const img = document.createElement('img');
//         // img.setAttribute('class', 'img');
//         // img.setAttribute('src', './img/products/<%= products.img %>');
//         // const h4 = document.createElement('h4');
//         // h4.setAttribute('class', 'name');
//         // h4.textContent = productsList[i].name;
//         const priceDiv = document.createElement('div');
//         priceDiv.setAttribute('class', 'price');
//         const price = document.createElement('h3');
//         price.setAttribute('class', 'price');

//         cartProduct.appendChild(exp);
//         exp.appendChild(i);
//         exp.appendChild(img);
//         exp.appendChild(h4);
//         cartProduct.appendChild(priceDiv);
//         priceDiv.appendChild(price);

//         productsCart.appendChild(cartProduct);
//     }
// }


// window.onload = () => {
//     let id1 = localStorage.getItem('product');
//     let id2 = localStorage.getItem('product2');
//     let id3 = localStorage.getItem('product3');
//     const pr = document.querySelector('.data');
//     const name1 = document.querySelector('.name1');
//     const price1 = document.querySelector('.price1');
//     const img1 = document.querySelector('.img1');
//     const name2 = document.querySelector('.name2');
//     const price2 = document.querySelector('.price2');
//     const img2 = document.querySelector('.img2');
//     const name3 = document.querySelector('.name3');
//     const price3 = document.querySelector('.price3');
//     const img3 = document.querySelector('.img3');
//     const total = document.querySelector('.total');
//     const icon1 = document.querySelector('#icon1');
//     const icon2 = document.querySelector('#icon2');
//     const icon3 = document.querySelector('#icon3');
//     const checkout = document.querySelector('.checkout');
//     const empty = document.querySelector('.empty');

//     let data = '';
//     for (let i = 0; i < pr.childNodes.length; i++) {
//         let a = pr.childNodes[i];
//         if (a.nodeName === '#text') {
//             data = a.nodeValue;
//         };
//     };

//     const json = JSON.parse(data);

//     let product1 = '';
//     let product2 = '';
//     let product3 = '';

//     for (let i = 0; i < json.products.length; i++) {
//         if (json.products[i].id == id1) {
//             product1 = json.products[i];
//         } else if (json.products[i].id == id2) {
//             product2 = json.products[i]
//         } else if (json.products[i].id == id3) {
//             product3 = json.products[i]
//         };
//     };

//     if (product1 != '') {
//         img1.src = '/img/products/' + product1.img;
//         price1.innerHTML = '$' + product1.price;
//         name1.innerHTML = product1.name;
//     } else {
//         icon1.style.display = 'none';
//         img1.classList.add('data');
//     };

//     if (product2 != '') {
//         img2.src = '/img/products/' + product2.img;
//         price2.innerHTML = '$' + product2.price;
//         name2.innerHTML = product2.name;
//     } else {
//         icon2.style.display = 'none';
//         img2.classList.add('data');
//     };

//     if (product3 != '') {
//         img3.src = '/img/products/' + product3.img;
//         price3.innerHTML = '$' + product3.price;
//         name3.innerHTML = product3.name;
//     } else {
//         icon3.style.display = 'none';
//         img3.classList.add('data');
//     };

//     let suma = 0;
//     if (product1 != '' && product2 == '') {
//         suma = product1.price;
//     } else if (product1 != '' && product2 != '' && product3 == '') {
//         suma = (product1.price + product2.price);
//     } else if (product1 != '' && product2 != '' && product3 != '') {
//         suma = (product1.price + product2.price + product3.price);
//     };

//     total.innerHTML += suma;

//     icon1.addEventListener('click', () => {
//         localStorage.removeItem('product');
//         location.reload();
//     });
//     icon2.addEventListener('click', () => {
//         localStorage.removeItem('product2');
//         location.reload();
//     });
//     icon3.addEventListener('click', () => {
//         localStorage.removeItem('product3');
//         location.reload();
//     });

//     if (product1 == '' && product2 == '' && product3 == '') {
//         checkout.style.display = 'none';
//         empty.style.display = 'block';
//     };
// }