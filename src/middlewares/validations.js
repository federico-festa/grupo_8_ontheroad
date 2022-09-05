const { body } = require('express-validator');

exports.reg = [
    body('firstName').notEmpty().withMessage('Por favor complete con su nombre').bail().isLength( {min: 3} ).withMessage('El nombre debe tener al menos 3 caracteres').bail().isLength( {max: 20} ).withMessage('El nombre debe tener maximo 20 caracteres'),
    body('lastName').notEmpty().withMessage("Por favor complete con su apellido").bail().isLength( {min: 3} ).withMessage('El apellido debe tener al menos 3 caracteres').bail().isLength( {max: 20} ).withMessage('El apellido debe tener maximo 20 caracteres'),
    body('email').notEmpty().withMessage('Por favor complete con su email').bail().isEmail().withMessage('Por favor ingrese un email válido'),
    body('password').notEmpty().withMessage('Por favor ingrese su contraseña').bail().isLength({ min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres'),    
];

exports.log = [
    body('email').notEmpty().withMessage('Por favor ingrese su email').bail().isEmail().withMessage('Por favor ingrese un email válido'),
    body('password').notEmpty().withMessage('Por favor ingrese su contraseña').bail().isLength({ min: 8} ).withMessage('La contraseña debe tener al menos 8 caracteres'),    
];

exports.store = [

];