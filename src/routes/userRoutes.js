const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validations = require('../middlewares/validations');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/multerUser');
const productsController = require('../controllers/productsController');

router.get('/register', guest, userController.register);
router.get('/login', guest, userController.login);
router.get('/logout', userController.logout);
router.get('/profile', auth, userController.profile);
router.get('/edit/:id', userController.edit);
router.get('/delete/:id', userController.delete);

router.post('/register', validations.reg, userController.create);
router.post('/login', validations.log, userController.log);

// router.put('/edit/:id', validations.userUpdate, userController.update);
router.put('/edit/img/:id', upload.single('img'), validations.userImgUpdate, userController.imgUpdate);
router.put('/edit/delete/img/:id', userController.imgDestroy);

router.delete('/delete/:id', userController.destroy);

module.exports = router;