const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const mainController = {
    index: (req, res) => {
        db.Product.findAll()
            .then(product => {
                res.render('index', {product: product})
            })
            .catch((error) => {
                console.log("Error", error.original.sqlMessage);
                res.send('Error');
            })
    },
};

module.exports = mainController;