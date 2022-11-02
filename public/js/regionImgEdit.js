window.addEventListener('load', () => {
    const form = document.querySelector('.create-form');
    const img = document.querySelector('#img');
    const error = document.querySelector('.error');

    const errors = [];

    img.focus();

    img.addEventListener('blur', () => {
        if (img.value.length == 0) {
            errors.push('Por favor suba una imagen');
            let err = errors.indexOf('Por favor suba una imagen');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        } else {
            error.innerHTML = '';
            let err3 = errors.indexOf('Por favor suba una imagen');
            errors.splice(err3, 1);
        };
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (img.value.length == 0) {
            errors.push('Por favor suba una imagen');
            let err = errors.indexOf('Por favor suba una imagen');
            error.innerHTML = '<p>' + errors[err] + '</p>';
        };
        if (errors.length == 0) {
            form.submit();
        };
    });
})