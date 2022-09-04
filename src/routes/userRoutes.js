const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const userValidations = require('../middlewares/userValidations');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/multerUser');

router.get('/register', guest, userController.register);
router.get('/login', guest, userController.login);
router.get('/logout', userController.logout);
router.get('/profile', auth, userController.profile);
//router.get('/profile/edit/:id', userController.edit);
//router.get('/profile/delete/:id', userController.delete);

router.post('/register', userValidations.reg, userController.create);
router.post('/login', userValidations.log, userController.log);

//router.put('/profile/edit/:id', userController.update);
//router.delete('/profile/edit/:id', userController.destroy);

module.exports = router;