const express = require('express');
const router = express.Router();

const productsApiController = require('../../controllers/api/productsApiController');

router.get('/list', productsApiController.products);
router.get('/regions', productsApiController.regions);
router.get('/detail/:id', productsApiController.detail);


module.exports = router;