window.onload = () => {
    const form = document.querySelector('.create-form');
    const name = document.querySelector('#name');
    const discount = document.querySelector('#discount');
    const descShort = document.querySelector('#descriptionShort');
    const descLong = document.querySelector('#descriptionLong');
    const price = document.querySelector('#price');
    const error = document.querySelector('.error');
    const error2 = document.querySelector('.error2');
    const error3 = document.querySelector('.error3');
    const error4 = document.querySelector('.error4');
    const error5 = document.querySelector('.error5');

    const errors = [];

    name.focus();

    name.addEventListener('blur', () => {
        if (name.value.length == 0) {
            errors.push('Por favor ingrese el lugar');
            let err = errors.indexOf('Por favor ingrese el lugar');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese el lugar');
            errors.splice(err1, 1);
        };
    });

    discount.addEventListener('blur', () => {
        if (discount.value.length == 0) {
            errors.push('Por favor ingrese el descuento, si no tiene ingrese 0');
            let err = errors.indexOf('Por favor ingrese el descuento, si no tiene ingrese 0');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (discount.value < 0 || discount.value > 100) {
            errors.push('Por favor ingrese un número entre 0 y 100');
            let err = errors.indexOf('Por favor ingrese un número entre 0 y 100');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error2.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese el descuento, si no tiene ingrese 0');
            let err2 = errors.indexOf('Por favor ingrese un número entre 0 y 100');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    descShort.addEventListener('blur', () => {
        if (descShort.value.length == 0) {
            errors.push('Por favor ingrese la descripción resumida');
            let err = errors.indexOf('Por favor ingrese la descripción resumida');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (descShort.value > 500) {
            errors.push('La descripción resumida debe contener menos de 500 caracteres');
            let err = errors.indexOf('La descripción resumida debe contener menos de 500 caracteres')
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error3.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese la descripción resumida');
            let err2 = errors.indexOf('La descripción resumida debe contener menos de 500 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    descLong.addEventListener('blur', () => {
        if (descLong.value.length == 0) {
            errors.push('Por favor ingrese la descripción completa');
            let err = errors.indexOf('Por favor ingrese la descripción completa');
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (descLong.value > 500) {
            errors.push('La descripción resumida debe contener menos de 1000 caracteres');
            let err = errors.indexOf('La descripción resumida debe contener menos de 1000 caracteres')
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error4.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese la descripción completa');
            let err2 = errors.indexOf('La descripción resumida debe contener menos de 1000 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    price.addEventListener('blur', () => {
        if (price.value.length == 0) {
            errors.push('Por favor ingrese el precio');
            let err = errors.indexOf('Por favor ingrese el precio');
            error5.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (price.value < 0 || price.value > 20000) {
            errors.push('Por favor ingrese un número entre 0 y 20.000');
            let err = errors.indexOf('Por favor ingrese un número entre 0 y 20.000');
            error5.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error5.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese el precio');
            let err2 = errors.indexOf('Por favor ingrese un número entre 0 y 20.000');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (discount.value.length == 0) {
            errors.push('Por favor ingrese el descuento, si no tiene ingrese 0');
            let err = errors.indexOf('Por favor ingrese el descuento, si no tiene ingrese 0');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (descShort.value.length == 0) {
            errors.push('Por favor ingrese la descripción resumida');
            let err = errors.indexOf('Por favor ingrese la descripción resumida');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (descLong.value.length == 0) {
            errors.push('Por favor ingrese la descripción completa');
            let err = errors.indexOf('Por favor ingrese la descripción completa');
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (price.value.length == 0) {
            errors.push('Por favor ingrese el precio');
            let err = errors.indexOf('Por favor ingrese el precio');
            error5.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (errors.length == 0) {
            form.submit();
        };
    });
}