const express = require('express');
const router = express.Router();

const productsApiController = require('../../controllers/api/productsApiController');

router.get('/list', productsApiController.products);
router.get('/detail/:id', productsApiController.detail);
router.get('/regions', productsApiController.regions);

module.exports = router;