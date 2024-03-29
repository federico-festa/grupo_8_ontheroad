window.addEventListener('load', () => {
    const form = document.querySelector('#login-form');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const error = document.querySelector('.errors');
    const error2 = document.querySelector('.errors2');

    const errors = [];

    email.focus();

    email.addEventListener('blur', () => {
        if (email.value.trim() == '') {
            errors.push('Por favor ingrese su email');
            let err = errors.indexOf('Por favor ingrese su email');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (!email.value.includes('@')) {
            errors.push('Por favor ingrese un email válido');
            let err = errors.indexOf('Por favor ingrese un email válido');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese su email');
            let err2 = errors.indexOf('Por favor ingrese un email válido');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    password.addEventListener('blur', () => {
        if (password.value.trim() == '') {
            errors.push('Por favor ingrese su contraseña');
            let err = errors.indexOf('Por favor ingrese su contraseña');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (password.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
            let err = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error2.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese su contraseña');
            let err2 = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (password.value.length == 0) {
            errors.push('Por favor ingrese su contraseña');
            let err = errors.indexOf('Por favor ingrese su contraseña');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (errors.length == 0) {
            form.submit();
        };
    });
})