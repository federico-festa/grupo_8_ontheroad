window.addEventListener('load', () => {
    const buttonAdd = document.querySelector('.add');

    buttonAdd.addEventListener('click', (e) => {
        if (localStorage.getItem('products')) {
            const products = JSON.parse(localStorage.getItem('products'));
            if(products.length >= 3) {
                alert('El carrito está lleno!')
            } else if (!products.find(id => id == e.target.id)) {
                products.push(e.target.id);
                localStorage.setItem('products', JSON.stringify(products));
                alert('Se agregó el producto al carrito!');
            };
        } else {
            localStorage.setItem('products', JSON.stringify([e.target.id]))
            alert('Se agregó el producto al carrito!');
        };
    });
})