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
router.get('/edit/:id', auth, userController.edit);
router.get('/delete/:id', auth, userController.delete);
router.get('/edit/img/:id', auth, userController.imgEdit);

router.post('/register', validations.reg, userController.create);
router.post('/login', validations.log, userController.log);

router.put('/edit/:id', auth, validations.userUpdate, userController.update);
router.put('/edit/img/:id', auth, upload.single('img'), validations.userImgUpdate, userController.imgUpdate);
router.put('/delete/img/:id', auth, userController.imgDestroy);

router.delete('/delete/:id', auth, userController.destroy);

module.exports = router;