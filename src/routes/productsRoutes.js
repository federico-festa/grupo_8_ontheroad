const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const validations = require('../middlewares/validations');
const upload = require('../middlewares/multerProduct');

router.get('/', productsController.products);
router.get('/detail/:id', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.get('/cart', productsController.cart);

router.post('/create', validations.store, upload.single('image'), productsController.store);

router.put('/edit/:id', productsController.update);

router.delete('/delete/:id', productsController.destroy);

module.exports = router;