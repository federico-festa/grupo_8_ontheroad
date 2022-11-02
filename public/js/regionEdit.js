window.addEventListener('load', () => {
    const form = document.querySelector('.region-edit');
    const name = document.querySelector('#name');
    const weather = document.querySelector('#weather');
    const error = document.querySelector('.error');
    const error2 = document.querySelector('.error2');

    const errors = [];

    name.focus();

    name.addEventListener('blur', () => {
        if (name.value.length == 0) {
            errors.push('Por favor ingrese la región');
            let err = errors.indexOf('Por favor ingrese la región');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error.innerHTML = '';
            let err1 = errors.indexOf('Por favor ingrese la región');
            errors.splice(err1, 1);
        };
    });

    weather.addEventListener('blur', () => {
        if (weather.value.length == 0) {
            errors.push('Por favor ingrese el clima');
            let err = errors.indexOf('Por favor ingrese el clima');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error2.innerHTML = '';
            let err2 = errors.indexOf('Por favor ingrese el clima');
            errors.splice(err2, 1);
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (weather.value.length == 0) {
            errors.push('Por favor ingrese el clima');
            let err = errors.indexOf('Por favor ingrese el clima');
            error2.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (errors.length == 0) {
            form.submit();
        };
    });
})