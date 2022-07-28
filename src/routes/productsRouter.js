const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/products');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
const upload = multer({ storage: storage });

router.get('/products', productsController.products);
router.get('/detail/:id', productsController.detail);

router.get('/create', productsController.create);
router.post('/create',  upload.single('image'), productsController.store);

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.update);

router.delete('/delete/:id', productsController.destroy);

router.get('/cart', productsController.cart);


module.exports = router;