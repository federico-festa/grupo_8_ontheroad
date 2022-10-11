const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const validations = require('../middlewares/validations');
const productUpload = require('../middlewares/multerProduct');
const regionUpload = require('../middlewares/multerRegion');

router.get('/', productsController.list);
router.get('/search', productsController.search);
router.get('/promotions', productsController.promotions);
router.get('/regions', productsController.regions);
router.get('/regions/detail/:id', productsController.regionDetail);
router.get('/regions/create', productsController.regionCreate);
router.get('/regions/edit/:id', productsController.regionEdit);
router.get('/regions/delete/:id', productsController.regionDelete);
router.get('/regions/edit/img/:id', productsController.regionImgEdit);
router.get('/detail/:id', productsController.detail);
router.get('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.get('/delete/:id', productsController.delete);
router.get('/edit/img/:id', productsController.imgEdit);

router.post('/create', productUpload.single('img'), validations.store, productsController.store);
router.post('/regions/create', regionUpload.single('img'), validations.regionStore, productsController.regionStore);

router.put('/edit/:id', productUpload.single('img'), validations.update, productsController.update);
router.put('/regions/edit/:id', regionUpload.single('img'), validations.regionUpdate, productsController.regionUpdate);
router.put('/edit/img/:id', productUpload.single('img'), validations.imgUpdate, productsController.imgUpdate);
router.put('/regions/edit/img/:id', regionUpload.single('img'), validations.regionImgUpdate, productsController.regionImgUpdate);

router.delete('/delete/:id', productsController.destroy);
router.delete('/regions/delete/:id', productsController.regionDestroy);

module.exports = router;