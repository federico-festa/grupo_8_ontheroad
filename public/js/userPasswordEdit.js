window.onload = () => {
    const form = document.querySelector('.password-form');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');
    const error = document.querySelector('.error');
    const error2 = document.querySelector('.error2');

    const errors = [];
    
    password.focus();

    password.addEventListener('blur', () => {
        if (password.value.length == 0) {
            errors.push('Por favor ingrese la contraseña nueva');
            let err = errors.indexOf('Por favor ingrese la contraseña nueva');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (password.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
            let err = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese su contraseña');
            let err2 = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    password2.addEventListener('blur', () => {
        if (password2.value.length == 0) {
            errors.push('Por favor confirme la contraseña nueva');
            let err = errors.indexOf('Por favor confirme la contraseña nueva');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else if (password2.value.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres');
            let err = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error2.innerHTML = '';
            let err1 = errors.indexOf('Por favor confirme la contraseña nueva');
            let err2 = errors.indexOf('La contraseña debe tener al menos 8 caracteres');
            errors.splice(err1, 1);
            errors.splice(err2, 1);
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (password2.value.length == 0) {
            errors.push('Por favor ingrese su contraseña');
            let err = errors.indexOf('Por favor ingrese su contraseña');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (errors.length == 0) {
            form.submit();
        };    
    });
}