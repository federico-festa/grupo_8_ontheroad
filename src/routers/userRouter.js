const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/productsController');

router.get('/register', userController.register);
router.get('/login', userController.login);

module.exports = userRouter;