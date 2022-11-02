const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const validations = require('../middlewares/validations');
const productUpload = require('../middlewares/multerProduct');
const regionUpload = require('../middlewares/multerRegion');

const admin = require('../middlewares/admin');

router.get('/', productsController.list);
router.get('/search', productsController.search);
router.get('/promotions', productsController.promotions);
router.get('/regions', productsController.regions);
router.get('/regions/detail/:id', productsController.regionDetail);
router.get('/regions/create', admin, productsController.regionCreate);
router.get('/regions/edit/:id', admin, productsController.regionEdit);
router.get('/regions/delete/:id', admin, productsController.regionDelete);
router.get('/regions/edit/img/:id', admin, productsController.regionImgEdit);
router.get('/detail/:id', productsController.detail);
router.get('/create', admin, productsController.create);
router.get('/edit/:id', admin, productsController.edit);
router.get('/delete/:id', admin, productsController.delete);
router.get('/edit/img/:id', admin, productsController.imgEdit);

router.post('/create', admin, productUpload.single('img'), validations.store, productsController.store);
router.post('/regions/create', admin, regionUpload.single('img'), validations.regionStore, productsController.regionStore);

router.put('/edit/:id', admin, productUpload.single('img'), validations.update, productsController.update);
router.put('/regions/edit/:id', admin, regionUpload.single('img'), validations.regionUpdate, productsController.regionUpdate);
router.put('/edit/img/:id', admin, productUpload.single('img'), validations.imgUpdate, productsController.imgUpdate);
router.put('/regions/edit/img/:id', admin, regionUpload.single('img'), validations.regionImgUpdate, productsController.regionImgUpdate);

router.delete('/delete/:id', admin, productsController.destroy);
router.delete('/regions/delete/:id', admin, productsController.regionDestroy);

module.exports = router;