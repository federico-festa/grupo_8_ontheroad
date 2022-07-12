const express = require('express');
const productsRouter = express.Router();
const productsController = require('../controllers/productsController');

router.get('/cart', productsController.productCart);
router.get('/jujuy', productsController.jujuy);

module.exports = productsRouter;