window.addEventListener('load', () => {
    const form = document.querySelector('.form-edit');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const error = document.querySelector('.error');
    const error2 = document.querySelector('.error2');
    const error3 = document.querySelector('.error3');

    const errors = [];

    firstName.focus();

    firstName.addEventListener('blur', () => {
        if (firstName.value.length == 0) {
            errors.push('Por favor ingrese su nombre');
            let err = errors.indexOf('Por favor ingrese su nombre');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (firstName.value.length < 3) {
            errors.push('El nombre debe tener al menos 3 caracteres');
            let err = errors.indexOf('El nombre debe tener al menos 3 caracteres');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (firstName.value.length > 20) {
            errors.push('El nombre debe tener maximo 20 caracteres');
            let err = errors.indexOf('El nombre debe tener maximo 20 caracteres');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese su nombre');
            let err2 = errors.indexOf('El nombre debe tener al menos 3 caracteres');
            let err3 = errors.indexOf('El nombre debe tener maximo 20 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
            errors.splice(err3, 1);
        };
    });

    lastName.addEventListener('blur', () => {
        if (lastName.value.length == 0) {
            errors.push('Por favor ingrese su apellido');
            let err = errors.indexOf('Por favor ingrese su apellido');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (lastName.value.length < 3) {
            errors.push('El apellido debe tener al menos 3 caracteres');
            let err = errors.indexOf('El apellido debe tener al menos 3 caracteres');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (lastName.value.length > 20) {
            errors.push('El apellido debe tener maximo 20 caracteres');
            let err = errors.indexOf('El apellido debe tener maximo 20 caracteres');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error2.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese su apellido');
            let err2 = errors.indexOf('El apellido debe tener al menos 3 caracteres');
            let err3 = errors.indexOf('El apellido debe tener maximo 20 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
            errors.splice(err3, 1);
        };
    });

    email.addEventListener('blur', () => {
        if (email.value.trim() == '') {
            errors.push('Por favor ingrese su email');
            let err = errors.indexOf('Por favor ingrese su email');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (!email.value.includes('@')) {
            errors.push('Por favor ingrese un email válido');
            let err = errors.indexOf('Por favor ingrese un email válido');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error3.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese su email');
            let err2 = errors.indexOf('Por favor ingrese un email válido');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (errors.length == 0) {
            form.submit();
        };    
    });

    reset.addEventListener('click', (e) => {
        error.innerHTML = '';
        error2.innerHTML = '';
        error3.innerHTML = '';
        error4.innerHTML = '';    
    });
})