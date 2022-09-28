window.onload = () => {
    const buttonAdd = document.querySelector('#add');

    buttonAdd.addEventListener('click', () => {
        const id = location.pathname.slice(17);
        if (localStorage.getItem('product') == null) {
            localStorage.setItem('product', id);
            alert('Se agregó el producto al carrito de compras');
        } else if (localStorage.getItem('product2') == null) {
            localStorage.setItem('product2', id);
            alert('Se agregó el producto al carrito de compras');
        } else if (localStorage.getItem('product3') == null) {
            localStorage.setItem('product3', id);
            alert('Se agregó el producto al carrito de compras');
        } else {
            alert('Alcanzaste el límite del carrito');
        };
    });
}