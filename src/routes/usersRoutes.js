const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');
const registerValidations = require('../middlewares/registerValidations');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/img/users');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage });

router.get('/register', usersController.register);
router.get('/login', usersController.login);

router.post('/register', upload.single('image'), registerValidations.reg, usersController.create);
router.post('/login', usersController.log);

module.exports = router;