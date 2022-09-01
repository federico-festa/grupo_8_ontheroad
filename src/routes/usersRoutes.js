const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const userValidations = require('../middlewares/usersValidations');
const upload = require('../middlewares/multerUser');

router.get('/register', usersController.register);
router.get('/login', usersController.login);
//router.get('/profile/:id', usersController.profile);
//router.get('/profile/edit/:id', usersController.edit);
//router.get('/profile/delete/:id', usersController.delete);

router.post('/register', userValidations.reg, usersController.create);
router.post('/login', userValidations.log, usersController.log);

//router.put('/profile/edit/:id', userController.update);
//router.delete('/profile/edit/:id', userController.destroy);

module.exports = router;