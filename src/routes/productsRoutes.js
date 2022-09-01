const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const upload = require('../middlewares/multerProduct');

router.get('/', productsController.products);
router.get('/detail/:id', productsController.detail);

router.get('/create', productsController.create);
router.post('/create',  upload.single('image'), productsController.store);

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

router.delete('/delete/:id', productsController.destroy);

router.get('/cart', productsController.cart);

//router.get('/show', productsController.show);


module.exports = router;