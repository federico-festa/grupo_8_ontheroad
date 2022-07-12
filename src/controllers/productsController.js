const path = require('path');
const productsController = {
    productCart: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productCart.html'));    
    },
    jujuy: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/jujuy.html'));    
    },
};

module.exports = productsController;