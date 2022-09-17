const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const validations = require('../middlewares/validations');
const upload = require('../middlewares/multerProduct');

router.get('/', productsController.list);
router.get('/search', productsController.search);
router.get('/promotions', productsController.promotions);
router.get('/regions', productsController.regions);
router.get('/detail/:id', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.get('/delete/:id', productsController.delete)
router.get('/cart', productsController.cart);

router.post('/create', upload.single('img'), validations.store, productsController.store);

router.put('/edit/:id', upload.single('img'), validations.update, productsController.update);

router.delete('/delete/:id', productsController.destroy);

module.exports = router;