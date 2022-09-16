const { body } = require('express-validator');

exports.reg = [
    body('firstName')
        .notEmpty().withMessage('Por favor complete con su nombre').bail()
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres').bail()
        .isLength({ max: 20 }).withMessage('El nombre debe tener maximo 20 caracteres'),
    body('lastName')
        .notEmpty().withMessage("Por favor complete con su apellido").bail()
        .isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres').bail()
        .isLength({ max: 20 }).withMessage('El apellido debe tener maximo 20 caracteres'),
    body('email')
        .notEmpty().withMessage('Por favor complete con su email').bail()
        .isEmail().withMessage('Por favor ingrese un email válido'),
    body('password')
        .notEmpty().withMessage('Por favor ingrese su contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
];

exports.log = [
    body('email')
        .notEmpty().withMessage('Por favor ingrese su email').bail()
        .isEmail().withMessage('Por favor ingrese un email válido'),
    body('password')
        .notEmpty().withMessage('Por favor ingrese su contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
];

exports.store = [
    body('name')
        .notEmpty().withMessage('Por favor ingrese el lugar'),
    body('discount')
        .notEmpty().withMessage('Por favor ingrese el descuento, si no tiene ingrese 0').bail()
        .isInt().withMessage('Por favor ingrese un número'),
    body('descriptionShort')
        .notEmpty().withMessage('Por favor ingrese la descripción resumida').bail()
        .isLength({ max: 500 }).withMessage('La descripción resumida debe contener menos de 500 caracteres'),
    body('descriptionLong')
        .notEmpty().withMessage('Por favor ingrese la descripción completa').bail()
        .isLength({ max: 1000 }).withMessage('La descripción completa debe contener menos de 1000 caracteres'),
    body('price')
        .notEmpty().withMessage('Por favor ingrese el precio').bail()
        .isInt().withMessage('Por favor ingrese un número'),
    body('img')
        .custom((value, {req}) => {
            if(!req.file) {
                throw new Error('Por favor suba una imagen');
            } else {
                return true;
            }
        })
];

exports.update = [
    body('name')
        .notEmpty().withMessage('Por favor ingrese el lugar'),
    body('discount')
        .notEmpty().withMessage('Por favor ingrese el descuento, si no tiene ingrese 0').bail()
        .isInt().withMessage('Por favor ingrese un número'),
    body('descriptionShort')
        .notEmpty().withMessage('Por favor ingrese la descripción resumida').bail()
        .isLength({ max: 500 }).withMessage('La descripción resumida debe contener menos de 500 caracteres'),
    body('descriptionLong')
        .notEmpty().withMessage('Por favor ingrese la descripción completa').bail()
        .isLength({ max: 1000 }).withMessage('La descripción completa debe contener menos de 1000 caracteres'),
    body('price')
        .notEmpty().withMessage('Por favor ingrese el precio').bail(),
    body('img')
        .custom((value, {req}) => {
            if(!req.file) {
                throw new Error('Por favor suba una imagen');
            } else {
                return true;
            }
        })
];