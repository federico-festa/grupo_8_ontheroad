const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const auth = require('../middlewares/auth');

router.get('/', mainController.index);
router.get('/contact', mainController.contact);
router.get('/cart', auth, mainController.cart);

module.exports = router;