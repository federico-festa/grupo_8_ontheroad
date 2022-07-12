const express = require('express');
const mainRouter = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

module.exports = mainRouter;