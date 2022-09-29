window.onload = () => {
    const form = document.querySelector('#login-form');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const button = document.querySelector('.sesion-button');
    const error = document.querySelector('.errors');
    const error2 = document.querySelector('.errors2');

    const errors = [];

    email.focus();

    email.addEventListener('blur', () => {
        if (email.value.trim() == '') {
            errors.push('Por favor ingrese su email');
            email.placeholder = 'Por favor ingrese su email';
        } else if (!email.includes('@')) {
            errors.push('Por favor ingrese un email válido');
        };
    });

    password.addEventListener('blur', () => {
        if (password.value.trim() == '') {
            errors.push('Por favor ingrese su contraseña');
            password.placeholder = 'Por favor ingrese su contraseña';
        } else if (password.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
        };
    });

    button.addEventListener('click', (e) => {
        if (errors.indexOf('Por favor ingrese su email') != -1) {
            let err = errors.indexOf('Por favor ingrese su email');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('Por favor ingrese un email válido') != -1) {
            let err = errors.indexOf('Por favor ingrese un email válido');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('Por favor ingrese su contraseña') != -1) {
            let err = errors.indexOf('Por favor ingrese su contraseña');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('La contraseña debe tener al menos 8 caracteres') != -1) {
            let err = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.length > 0) {
            e.preventDefault();
        };
    });

    form.addEventListener('submit', (e) => {
        if (email.value == '' && errors.indexOf('email') == -1) {
            errors.push('Por favor ingrese su email');
        };

        if (password.value == '' && errors.indexOf('contraseña') == -1) {
            errors.push('Por favor ingrese su contraseña');
        };

        if (errors.length > 0) {
            e.preventDefault();
        };

        if (errors.length == 0) {
            form.submit();
        };
    });
}