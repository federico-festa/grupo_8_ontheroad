window.onload = () => {
    const form = document.querySelector('#register-form');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const error = document.querySelector('.errors');
    const error2 = document.querySelector('.errors2');
    const error3 = document.querySelector('.errors3');
    const error4 = document.querySelector('.errors4');

    const errors = [];

    firstName.focus();

    firstName.addEventListener('blur', () => {
        if (firstName.value.trim() == '') {
            firstName.placeholder = 'Por favor ingrese su nombre';
        };
    });

    lastName.addEventListener('blur', () => {
        if (lastName.value.trim() == '') {
            lastName.placeholder = 'Por favor ingrese su apellido';
        };
    });

    email.addEventListener('blur', () => {
        if (email.value.trim() == '') {
            email.placeholder = 'Por favor ingrese su email';
        };
    });

    password.addEventListener('blur', () => {
        if (password.value.trim() == '') {
            password.placeholder = 'Por favor ingrese su contraseña';
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

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
            let err1 = errors.indexOf('Por favor ingrese su nombre');
            let err2 = errors.indexOf('El nombre debe tener al menos 3 caracteres');
            let err3 = errors.indexOf('El nombre debe tener maximo 20 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
            errors.splice(err3, 1);
        };

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
            let err1 = errors.indexOf('Por favor ingrese su apellido');
            let err2 = errors.indexOf('El apellido debe tener al menos 3 caracteres');
            let err3 = errors.indexOf('El apellido debe tener maximo 20 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
            errors.splice(err3, 1);
        };

        if (email.value.trim() == '') {
            errors.push('Por favor ingrese su email');
            let err = errors.indexOf('Por favor ingrese su email');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (!email.value.includes('@')) {
            errors.push('Por favor ingrese un email válido');
            let err = errors.indexOf('Por favor ingrese un email válido');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            let err1 = errors.indexOf('Por favor ingrese su email');
            let err2 = errors.indexOf('Por favor ingrese un email válido');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };

        if (password.value.trim() == '') {
            errors.push('Por favor ingrese su contraseña');
            let err = errors.indexOf('Por favor ingrese su contraseña');
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (password.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
            let err = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            let err1 = errors.indexOf('Por favor ingrese su contraseña');
            let err2 = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };

        if (errors.length == 0) {
            form.submit();
        };
    });
}