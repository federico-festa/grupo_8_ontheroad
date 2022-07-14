const path = require('path');
const productsController = {
    productCart: (req, res) => {
        res.render('cart');    
    },
    jujuy: (req, res) => {
        res.render('jujuy');    
    },
};

module.exports = productsController;