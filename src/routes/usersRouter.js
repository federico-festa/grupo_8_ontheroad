const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/img/users');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage });

router.get('/register', usersController.register);
router.get('/login', usersController.login);

router.post('/register', upload.single('image'), usersController.create);
router.post('/login', usersController.log);



module.exports = router;