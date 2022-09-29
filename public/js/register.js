window.onload = () => {
    const form = document.querySelector('#register-form');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const button = document.querySelector('.register-button');
    const error = document.querySelector('.errors');
    const error2 = document.querySelector('.errors2');
    const error3 = document.querySelector('.errors3');
    const error4 = document.querySelector('.errors4');

    const errors = [];

    firstName.focus();

    firstName.addEventListener('blur', () => {
        if (firstName.value.trim() == '') {
            errors.push('Por favor ingrese su nombre');
            firstName.placeholder = 'Por favor ingrese su nombre';
        } else if (firstName.value.length < 3) {
            errors.push('El nombre debe tener al menos 3 caracteres');
        };
    });

    lastName.addEventListener('blur', () => {
        if (lastName.value.trim() == '') {
            errors.push('Por favor ingrese su apellido');
            lastName.placeholder = 'Por favor ingrese su apellido';
        } else if (lastName.value.length < 3) {
            errors.push('El apellido debe tener al menos 3 caracteres');
        };
    });

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
        if (errors.indexOf('Por favor ingrese su nombre') != -1) {
            let err = errors.indexOf('Por favor ingrese su nombre');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('El nombre debe tener al menos 3 caracteres') != -1) {
            let err = errors.indexOf('El nombre debe tener al menos 3 caracteres');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('Por favor ingrese su apellido') != -1) {
            let err = errors.indexOf('Por favor ingrese su apellido');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('El apellido debe tener al menos 3 caracteres') != -1) {
            let err = errors.indexOf('El apellido debe tener al menos 3 caracteres');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('Por favor ingrese su email') != -1) {
            let err = errors.indexOf('Por favor ingrese su email');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('Por favor ingrese un email válido') != -1) {
            let err = errors.indexOf('Por favor ingrese un email válido');
            error3.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('Por favor ingrese su contraseña') != -1) {
            let err = errors.indexOf('Por favor ingrese su contraseña');
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.indexOf('La contraseña debe tener al menos 8 caracteres') != -1) {
            let err = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            error4.innerHTML = '<p>' + errors[err] + '</p>';
        };

        if (errors.length > 0) {
            e.preventDefault();
        };
    })

    form.addEventListener('submit', (e) => {
        if (firstName.value == '' && errors.indexOf('nombre') == -1) {
            errors.push('Por favor ingrese su nombre');
        };

        if (lastName.value == '' && errors.indexOf('apellido') == -1) {
            errors.push('Por favor ingrese su apellido');
        };

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