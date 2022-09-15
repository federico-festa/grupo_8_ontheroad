const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const mainController = {
    index: async (req, res) => {
        const products = await db.Product.findAll({limit: 4});
        res.render('index', { products: products })
    },
};

module.exports = mainController;