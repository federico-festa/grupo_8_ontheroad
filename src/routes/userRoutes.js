const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validations = require('../middlewares/validations');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/multerUser');

router.get('/register', guest, userController.register);
router.get('/login', guest, userController.login);
router.get('/logout', userController.logout);
router.get('/profile', auth, userController.profile);
//router.get('/profile/edit/:id', userController.edit);
//router.get('/profile/delete/:id', userController.delete);

router.post('/register', validations.reg, userController.create);
router.post('/login', validations.log, userController.log);

//router.put('/profile/edit/:id', userController.update);
//router.delete('/profile/edit/:id', userController.destroy);

module.exports = router;