const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const mainController = {
    index: (req, res) => {
        db.Product.findAll()
            .then(data => {
                res.render('index', {products: data})
            })
            .catch((error) => {
                console.log("Error", error.original.sqlMessage);
                res.send('Error');
            })
    },
};

module.exports = mainController;