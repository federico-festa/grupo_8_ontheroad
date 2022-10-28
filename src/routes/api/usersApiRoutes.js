const express = require('express');
const router = express.Router();

const usersApiController = require('../../controllers/api/usersApiController');

router.get('/list', usersApiController.users);

module.exports = router;