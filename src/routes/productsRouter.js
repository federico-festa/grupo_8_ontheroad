const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/admin', productsController.admin);
router.get('/cart', productsController.productCart);
router.get('/jujuy', productsController.jujuy);


module.exports = router;