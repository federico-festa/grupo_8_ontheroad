const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const mainController = {
    index: async (req, res) => {
        try {
            const products = await db.Product.findAll({ limit: 4 });
            res.render('index', { products: products })
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    },
    cart: async (req, res) => {
        try {
            const products = await db.Product.findAll();
            res.render('cart', { products: products });
        } catch (error) {
            console.log(error);
            res.render('error');
        };
    }
};

module.exports = mainController;