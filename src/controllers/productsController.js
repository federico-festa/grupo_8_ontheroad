const path = require('path');
const productsController = {
    productCart: (req, res) => {
        res.render('cart');    
    },
    jujuy: (req, res) => {
        res.render('jujuy');    
    },
    admin: (req,res) => {
        res.render('admin');
    }
};

module.exports = productsController;